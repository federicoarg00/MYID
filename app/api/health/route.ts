import { NextResponse } from 'next/server'

/**
 * Health Check Endpoint
 * Used by Docker, Kubernetes, load balancers, and Coolify
 * to verify the application is running correctly
 */
export async function GET() {
  try {
    // Basic health check - can be extended to check:
    // - Database connectivity
    // - External services (Stripe, Supabase)
    // - Memory usage
    // - etc.

    const healthCheck = {
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || 'development',
      version: process.env.npm_package_version || '0.1.0',
    }

    return NextResponse.json(healthCheck, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      {
        status: 'error',
        timestamp: new Date().toISOString(),
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 503 }
    )
  }
}
