# 🚀 Guía de Configuración - MyID Platform

## ✅ Estado del Proyecto

**¡El proyecto ha sido configurado exitosamente!**

### Stack Tecnológico Implementado:

```
Frontend & Backend: Next.js 15.5.6 (App Router)
Language:           TypeScript 5.7
Styling:            Tailwind CSS 3.4
Database:           Supabase (PostgreSQL)
Authentication:     Supabase Auth
Payments:           Stripe
File Storage:       Supabase Storage
Deployment:         Vercel (ready)
```

---

## 📁 Estructura del Proyecto Creada

```
myid/
├── app/
│   ├── layout.tsx          # Layout raíz con metadata
│   ├── page.tsx            # Homepage con diseño inicial
│   └── globals.css         # Estilos globales Tailwind + tema
│
├── lib/
│   ├── supabase/
│   │   ├── client.ts       # Cliente Supabase (browser)
│   │   ├── server.ts       # Cliente Supabase (server)
│   │   └── middleware.ts   # Gestión de sesiones
│   ├── stripe.ts           # Cliente Stripe
│   └── utils.ts            # Utilidades (cn helper)
│
├── types/
│   └── database.types.ts   # Tipos TypeScript para BD
│
├── supabase/
│   └── schema.sql          # Esquema completo de base de datos
│
├── middleware.ts           # Middleware Next.js para auth
├── next.config.ts          # Configuración Next.js
├── tailwind.config.ts      # Configuración Tailwind
├── tsconfig.json           # Configuración TypeScript
├── package.json            # Dependencias
├── .env.example            # Variables de entorno template
├── .gitignore              # Archivos ignorados por git
└── README.md               # Documentación principal
```

---

## 🗄️ Base de Datos - Tablas Creadas

El esquema SQL incluye todas las tablas necesarias:

1. **profiles** - Información personal y médica del usuario
2. **devices** - Dispositivos NFC vinculados
3. **emergency_contacts** - Contactos de emergencia
4. **subscriptions** - Suscripciones anuales
5. **products** - Catálogo de productos NFC
6. **orders** - Pedidos de usuarios
7. **order_items** - Items de cada pedido
8. **access_logs** - Historial de accesos NFC

### Características de Seguridad:
- ✅ Row Level Security (RLS) habilitado
- ✅ Políticas de acceso configuradas
- ✅ Triggers automáticos (updated_at, auto-create profile)
- ✅ Índices para performance

---

## 🔧 Próximos Pasos - Configuración

### 1. **Crear Proyecto en Supabase**

```bash
# Ir a: https://supabase.com
# 1. Crear nuevo proyecto
# 2. Copiar URL y API keys
# 3. En SQL Editor, ejecutar: supabase/schema.sql
# 4. Crear buckets de storage:
#    - profile-photos (public)
#    - medical-documents (private)
#    - product-images (public)
```

### 2. **Configurar Variables de Entorno**

```bash
# Crear archivo .env.local
cp .env.example .env.local

# Editar .env.local con tus credenciales:
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-anon-key
SUPABASE_SERVICE_ROLE_KEY=tu-service-role-key

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. **Configurar Stripe**

```bash
# Ir a: https://dashboard.stripe.com
# 1. Obtener API keys (Test mode)
# 2. Crear productos para accesorios NFC
# 3. Configurar webhook para eventos:
#    - payment_intent.succeeded
#    - customer.subscription.created
#    - customer.subscription.updated
#    - customer.subscription.deleted
```

### 4. **Ejecutar el Proyecto**

```bash
# Instalar dependencias (ya instaladas)
npm install

# Ejecutar en modo desarrollo
npm run dev

# Abrir en navegador
# http://localhost:3000
```

### 5. **Verificar Funcionamiento**

- ✅ Homepage carga correctamente
- ✅ Tailwind CSS funciona
- ✅ No hay errores en consola
- ✅ Server-side rendering OK

---

## 🎨 Próximas Funcionalidades a Implementar

### Fase 1 - Autenticación (Siguiente)
```
[ ] Página de login (/login)
[ ] Página de registro (/signup)
[ ] Recuperación de contraseña
[ ] OAuth con Google/Facebook
[ ] Middleware de protección de rutas
```

### Fase 2 - E-commerce
```
[ ] Catálogo de productos (/shop)
[ ] Página de producto individual
[ ] Carrito de compras
[ ] Checkout con Stripe
[ ] Confirmación de pedido
```

### Fase 3 - Dashboard de Usuario
```
[ ] Panel principal (/dashboard)
[ ] Editar perfil personal
[ ] Gestión de información médica
[ ] Vinculación de dispositivos NFC
[ ] Gestión de contactos de emergencia
[ ] Historial de accesos
```

### Fase 4 - Página de Emergencia
```
[ ] Página NFC pública (/p/[device_code])
[ ] Visualización de información médica
[ ] Botones de llamada a emergencia
[ ] Envío de ubicación GPS
[ ] Registro de acceso
```

### Fase 5 - Admin Panel
```
[ ] Dashboard admin
[ ] Gestión de usuarios
[ ] Gestión de productos
[ ] Estadísticas
[ ] Reportes
```

---

## 📊 Comandos Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo (puerto 3000)

# Producción
npm run build        # Build para producción
npm start            # Ejecutar build de producción

# Calidad de código
npm run lint         # Ejecutar ESLint
```

---

## 🔐 Configuración de Supabase Auth

### Habilitar Proveedores OAuth:

1. **Google OAuth**
   - Configurar en Google Cloud Console
   - Agregar redirect URL: `https://tu-proyecto.supabase.co/auth/v1/callback`

2. **Facebook OAuth**
   - Configurar en Facebook Developers
   - Agregar redirect URL similar

3. **Email/Password**
   - Ya habilitado por defecto
   - Configurar templates de email en Supabase

---

## 📱 Testing de NFC

Para probar la funcionalidad NFC:

1. **Programar tag NFC** con URL:
   ```
   https://tu-dominio.com/p/{device_code_unico}
   ```

2. **Vincular dispositivo** en dashboard de usuario

3. **Escanear con smartphone** que tenga NFC

4. **Verificar** que muestra información correcta

---

## 🚀 Deploy a Producción

### Opción Recomendada: Vercel

```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel

# 4. Configurar variables de entorno en dashboard
# https://vercel.com/tu-proyecto/settings/environment-variables
```

### Configuración Supabase para Producción:
- Actualizar Site URL en Supabase
- Configurar Redirect URLs
- Usar production API keys

---

## 📞 Contacto y Soporte

- **Documentación Next.js**: https://nextjs.org/docs
- **Documentación Supabase**: https://supabase.com/docs
- **Documentación Stripe**: https://stripe.com/docs
- **Documentación Tailwind**: https://tailwindcss.com/docs

---

## ✨ Características Implementadas

- ✅ Estructura completa de proyecto Next.js 15
- ✅ TypeScript configurado
- ✅ Tailwind CSS con tema personalizado
- ✅ Clientes Supabase (browser y server)
- ✅ Middleware de autenticación
- ✅ Cliente Stripe
- ✅ Esquema de base de datos completo
- ✅ Tipos TypeScript para BD
- ✅ Homepage inicial responsive
- ✅ Configuración de deployment lista

---

**Estado**: ✅ Listo para desarrollo
**Versión**: 0.1.0
**Última actualización**: Noviembre 2025
