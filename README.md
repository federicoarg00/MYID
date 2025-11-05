# MyID - NFC Emergency Information Platform

Plataforma integral que permite a los usuarios adquirir accesorios NFC (pulseras, llaveros, etc.) y gestionar información personal y médica crítica que puede ser accedida mediante lectura NFC en situaciones de emergencia.

## 🚀 Stack Tecnológico

- **Frontend & Backend**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Payments**: Stripe
- **File Storage**: Supabase Storage
- **Deployment**: Vercel

## 📋 Requisitos Previos

- Node.js 18+
- npm o yarn
- Cuenta de Supabase
- Cuenta de Stripe

## 🛠️ Instalación

1. **Clonar el repositorio**
```bash
git clone <repository-url>
cd MYID
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
```bash
cp .env.example .env.local
```

Edita `.env.local` con tus credenciales:
- Supabase URL y Keys (desde tu proyecto en supabase.com)
- Stripe Keys (desde tu dashboard en stripe.com)

4. **Configurar la base de datos**
```bash
# Ejecutar el script SQL en Supabase
# Ver: supabase/schema.sql
```

5. **Ejecutar el servidor de desarrollo**
```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
myid/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Rutas de autenticación
│   ├── (dashboard)/       # Panel de usuario
│   ├── (emergency)/       # Página NFC de emergencia
│   ├── (shop)/            # E-commerce
│   ├── api/               # API Routes
│   ├── layout.tsx         # Layout raíz
│   └── page.tsx           # Homepage
├── components/            # Componentes React
│   ├── ui/               # Componentes UI base
│   └── ...
├── lib/                   # Utilidades y configuraciones
│   ├── supabase/         # Cliente Supabase
│   ├── stripe.ts         # Cliente Stripe
│   └── utils.ts          # Utilidades generales
├── types/                 # Tipos TypeScript
│   └── database.types.ts # Tipos de base de datos
├── supabase/             # Configuración Supabase
│   └── schema.sql        # Esquema de base de datos
└── public/               # Archivos estáticos
```

## 🗄️ Módulos del Sistema

### 1. **E-commerce**
- Catálogo de productos NFC
- Carrito de compras
- Checkout con Stripe
- Gestión de pedidos

### 2. **Gestión de Usuarios**
- Registro y autenticación
- Perfil de usuario
- Gestión de suscripciones
- Vinculación de dispositivos NFC

### 3. **Gestión de Información Personal**
- Editor de campos personalizables
- Almacenamiento seguro de datos médicos
- Gestión de contactos de emergencia
- Carga de archivos (fotos, documentos)

### 4. **Funcionalidades de Emergencia**
- Visualización de perfil mediante lectura NFC
- Botón de llamada directa a contactos
- Envío automático de ubicación GPS
- Historial de accesos al perfil

### 5. **Panel de Administración**
- Gestión de usuarios y suscripciones
- Estadísticas y reportes
- Gestión de inventario de productos
- Control de dispositivos NFC

## 🔐 Seguridad

- Información médica encriptada (AES-256)
- Comunicación HTTPS/TLS
- Autenticación segura con Supabase
- Cumplimiento GDPR
- Protección PCI DSS para pagos

## 📱 Funcionalidades Clave

- ✅ **Compatible con todos los smartphones NFC**
- ✅ **No requiere instalación de apps**
- ✅ **Actualización en tiempo real**
- ✅ **Responsive design (móvil, tablet, desktop)**
- ✅ **Multi-idioma (ES/EN)**

## 🚢 Deployment

### Vercel (Recomendado)

1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno
3. Deploy automático en cada push

```bash
npm run build
npm start
```

## 📊 Métricas de Éxito

- **Conversión**: >2% de visitantes completan compra
- **Retención**: >70% renuevan suscripción
- **Uptime**: 99.9% disponibilidad
- **Performance**: <2s carga de página NFC

## 🤝 Contribuir

Este es un proyecto privado. Para contribuir, contacta al equipo de desarrollo.

## 📄 Licencia

Propietario - Todos los derechos reservados

## 📞 Soporte

Para soporte técnico, contacta: [email de soporte]

---

**Versión:** 1.0
**Última actualización:** Noviembre 2025
