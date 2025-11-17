import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <Badge className="mb-4" variant="secondary">
          Plataforma NFC de Emergencia
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Tu información vital,
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            siempre accesible
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Gestiona tu información personal y médica crítica con tecnología NFC.
          Acceso instantáneo en situaciones de emergencia.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg" className="w-full sm:w-auto">
              Comenzar Gratis
            </Button>
          </Link>
          <Link href="/shop">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Ver Productos
            </Button>
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Sin instalación</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Compatible con todos los smartphones</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Actualización en tiempo real</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">¿Cómo funciona?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            MyID hace que tu información médica esté disponible en cualquier emergencia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🛍️</span>
              </div>
              <CardTitle>1. Compra tu Accesorio</CardTitle>
              <CardDescription>
                Elige entre pulseras, llaveros o tarjetas NFC personalizadas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Múltiples diseños disponibles</li>
                <li>• Resistentes al agua</li>
                <li>• Suscripción anual incluida</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📝</span>
              </div>
              <CardTitle>2. Configura tu Perfil</CardTitle>
              <CardDescription>
                Agrega tu información médica y contactos de emergencia
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Grupo sanguíneo y alergias</li>
                <li>• Medicaciones actuales</li>
                <li>• Contactos de emergencia</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🚨</span>
              </div>
              <CardTitle>3. Acceso Instantáneo</CardTitle>
              <CardDescription>
                En una emergencia, acerca cualquier smartphone a tu accesorio
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Sin apps necesarias</li>
                <li>• Información visible al instante</li>
                <li>• Llamadas directas a contactos</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Por qué elegir MyID</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              La forma más segura y rápida de compartir información vital en emergencias
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-3">🔒</div>
              <h3 className="font-semibold mb-2">Seguro y Privado</h3>
              <p className="text-sm text-muted-foreground">
                Datos encriptados y control total sobre qué información compartes
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-semibold mb-2">Acceso Inmediato</h3>
              <p className="text-sm text-muted-foreground">
                Sin apps, sin delays. Solo acerca el teléfono y listo
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">🔄</div>
              <h3 className="font-semibold mb-2">Siempre Actualizado</h3>
              <p className="text-sm text-muted-foreground">
                Actualiza tu información en cualquier momento desde cualquier lugar
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">🌍</div>
              <h3 className="font-semibold mb-2">Universal</h3>
              <p className="text-sm text-muted-foreground">
                Funciona con cualquier smartphone con NFC en todo el mundo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <Card className="max-w-3xl mx-auto border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
          <CardHeader>
            <CardTitle className="text-3xl">
              ¿Listo para proteger tu información?
            </CardTitle>
            <CardDescription className="text-base">
              Únete a miles de usuarios que ya confían en MyID para mantener
              su información médica segura y accesible
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg">
                  Crear Cuenta Gratis
                </Button>
              </Link>
              <Link href="/shop">
                <Button size="lg" variant="outline">
                  Ver Productos
                </Button>
              </Link>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Suscripción anual incluida con tu primer accesorio
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
