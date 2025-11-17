'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'
import { Alert, AlertDescription } from '@/components/ui/Alert'
import Link from 'next/link'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const supabase = createClient()

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      })

      if (error) throw error

      setSuccess(true)
    } catch (err: any) {
      setError(err.message || 'Error al enviar el email de recuperación')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-2">
              MyID
            </h1>
          </Link>
          <p className="text-muted-foreground">
            Recupera tu contraseña
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recuperar Contraseña</CardTitle>
            <CardDescription>
              Te enviaremos un email con instrucciones para restablecer tu contraseña
            </CardDescription>
          </CardHeader>
          <CardContent>
            {success ? (
              <Alert variant="success">
                <AlertDescription>
                  <p className="font-medium mb-2">Email enviado</p>
                  <p className="text-sm">
                    Hemos enviado un enlace de recuperación a <strong>{email}</strong>.
                    Por favor revisa tu correo y sigue las instrucciones.
                  </p>
                  <Link href="/login">
                    <Button variant="link" className="mt-4 p-0 h-auto">
                      Volver a iniciar sesión
                    </Button>
                  </Link>
                </AlertDescription>
              </Alert>
            ) : (
              <form onSubmit={handleResetPassword} className="space-y-4">
                {error && (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={loading}
                  />
                </div>

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? 'Enviando...' : 'Enviar Enlace de Recuperación'}
                </Button>

                <div className="text-center">
                  <Link href="/login" className="text-sm text-blue-600 hover:underline">
                    Volver a iniciar sesión
                  </Link>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
