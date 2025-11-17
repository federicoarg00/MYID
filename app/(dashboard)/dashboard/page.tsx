import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  // Get user profile
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('user_id', user.id)
    .single()

  // Get user subscription
  const { data: subscription } = await supabase
    .from('subscriptions')
    .select('*')
    .eq('user_id', user.id)
    .single()

  // Get linked devices
  const { data: devices } = await supabase
    .from('devices')
    .select('*')
    .eq('user_id', user.id)

  const linkedDevices = devices?.filter((d) => d.status === 'active') || []

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">
          Bienvenido, {profile?.full_name || user.email}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        {/* Subscription Status */}
        <Card>
          <CardHeader>
            <CardTitle>Suscripción</CardTitle>
            <CardDescription>Estado de tu plan</CardDescription>
          </CardHeader>
          <CardContent>
            {subscription ? (
              <div className="space-y-2">
                <Badge variant={subscription.status === 'active' ? 'success' : 'warning'}>
                  {subscription.status === 'active' ? 'Activa' : subscription.status}
                </Badge>
                <p className="text-sm text-muted-foreground">
                  Vence: {new Date(subscription.end_date).toLocaleDateString()}
                </p>
              </div>
            ) : (
              <div>
                <Badge variant="outline">Sin suscripción</Badge>
                <Link href="/shop">
                  <Button variant="link" className="p-0 h-auto mt-2">
                    Comprar accesorio NFC
                  </Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Devices */}
        <Card>
          <CardHeader>
            <CardTitle>Dispositivos NFC</CardTitle>
            <CardDescription>Accesorios vinculados</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-3xl font-bold">{linkedDevices.length}</p>
              <p className="text-sm text-muted-foreground">
                {linkedDevices.length === 0
                  ? 'Sin dispositivos vinculados'
                  : linkedDevices.length === 1
                  ? '1 dispositivo activo'
                  : `${linkedDevices.length} dispositivos activos`}
              </p>
              <Link href="/dashboard/devices">
                <Button variant="link" className="p-0 h-auto">
                  Gestionar dispositivos
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Profile Completeness */}
        <Card>
          <CardHeader>
            <CardTitle>Perfil Médico</CardTitle>
            <CardDescription>Completitud de tu información</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {profile ? (
                <>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold">
                      {Math.round(
                        (Object.values(profile).filter((v) => v !== null).length /
                          Object.keys(profile).length) *
                          100
                      )}
                      %
                    </span>
                    <Badge variant={profile.blood_type ? 'success' : 'warning'}>
                      {profile.blood_type ? 'Completo' : 'Incompleto'}
                    </Badge>
                  </div>
                  <Link href="/dashboard/profile">
                    <Button variant="link" className="p-0 h-auto">
                      Completar perfil
                    </Button>
                  </Link>
                </>
              ) : (
                <div>
                  <Badge variant="outline">Sin configurar</Badge>
                  <Link href="/dashboard/profile">
                    <Button variant="link" className="p-0 h-auto mt-2">
                      Configurar ahora
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Acciones Rápidas</CardTitle>
          <CardDescription>Configura tu información de emergencia</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Link href="/dashboard/profile">
              <Button variant="outline" className="w-full">
                📝 Editar Perfil
              </Button>
            </Link>
            <Link href="/dashboard/emergency-contacts">
              <Button variant="outline" className="w-full">
                📞 Contactos de Emergencia
              </Button>
            </Link>
            <Link href="/dashboard/devices">
              <Button variant="outline" className="w-full">
                📱 Mis Dispositivos
              </Button>
            </Link>
            <Link href="/shop">
              <Button variant="outline" className="w-full">
                🛍️ Comprar Accesorios
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Getting Started Guide - Only show if profile is not complete */}
      {!profile?.blood_type && (
        <Card className="mt-6 border-blue-200 bg-blue-50/50">
          <CardHeader>
            <CardTitle>Primeros Pasos</CardTitle>
            <CardDescription>Completa estos pasos para aprovechar MyID al máximo</CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="space-y-2 list-decimal list-inside">
              <li className="text-sm">
                Completa tu información médica básica (grupo sanguíneo, alergias)
              </li>
              <li className="text-sm">Agrega al menos un contacto de emergencia</li>
              <li className="text-sm">
                Compra y vincula tu primer accesorio NFC si aún no lo has hecho
              </li>
              <li className="text-sm">Prueba escanear tu dispositivo para verificar</li>
            </ol>
            <Link href="/dashboard/profile">
              <Button className="mt-4">
                Empezar Ahora
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
