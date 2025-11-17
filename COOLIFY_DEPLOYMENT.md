# 🐳 Guía de Deployment en Coolify - MyID Platform

Esta guía te llevará paso a paso para deployar MyID en tu instancia de Coolify.

---

## 📋 Prerrequisitos

### 1. **Servidor VPS**
- Ubuntu 22.04 / Debian 11+ / CentOS 8+
- Mínimo: 2 CPU cores, 2GB RAM, 20GB storage
- Recomendado: 4 CPU cores, 4GB RAM, 40GB storage
- Acceso SSH root

### 2. **Dominio**
- Dominio apuntando a tu VPS (A record)
- Ejemplo: `myid.tudominio.com` → IP de tu VPS

### 3. **Cuentas de Servicios**
- [Supabase](https://supabase.com) - Base de datos
- [Stripe](https://stripe.com) - Pagos

---

## 🚀 Parte 1: Instalación de Coolify

### Paso 1: Conectar a tu VPS

```bash
ssh root@tu-vps-ip
```

### Paso 2: Instalar Coolify

```bash
# Ejecutar el script de instalación oficial
curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash

# El proceso tarda ~5-10 minutos
# Al finalizar verás:
# ✅ Coolify installed successfully!
# 🌐 Access Coolify at: http://tu-vps-ip:8000
```

### Paso 3: Configuración Inicial

1. Abre en navegador: `http://tu-vps-ip:8000`
2. Crea cuenta admin (primera vez):
   - Email
   - Contraseña
   - Nombre

3. **Importante**: Configura dominio para Coolify dashboard (opcional pero recomendado):
   - Settings → Instance Settings
   - Instance Domain: `coolify.tudominio.com`
   - Habilita SSL automático

---

## 📦 Parte 2: Configurar Supabase

### Paso 1: Crear Proyecto en Supabase

1. Ir a [https://supabase.com](https://supabase.com)
2. Crear nuevo proyecto:
   - Nombre: `myid-production`
   - Database Password: (guarda esto)
   - Region: Cerca de tu VPS

3. **Ejecutar Schema SQL**:
   - Ir a: SQL Editor
   - Copiar contenido de `supabase/schema.sql`
   - Ejecutar

4. **Crear Storage Buckets**:
   - Ir a: Storage
   - Crear 3 buckets:
     ```
     profile-photos (public)
     medical-documents (private)
     product-images (public)
     ```

### Paso 2: Obtener Credenciales

En Supabase Dashboard → Settings → API:

```bash
# Copiar estos valores:
URL: https://xxxxxxxxxxxxx.supabase.co
anon key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
service_role key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

## 💳 Parte 3: Configurar Stripe

### Paso 1: Obtener API Keys

1. Ir a [https://dashboard.stripe.com](https://dashboard.stripe.com)
2. Developers → API Keys
3. Copiar:
   - Publishable key: `pk_live_...` (o `pk_test_...` para pruebas)
   - Secret key: `sk_live_...` (o `sk_test_...` para pruebas)

### Paso 2: Configurar Webhook

1. Developers → Webhooks → Add endpoint
2. Endpoint URL: `https://myid.tudominio.com/api/webhooks/stripe`
3. Eventos a escuchar:
   ```
   payment_intent.succeeded
   payment_intent.payment_failed
   customer.subscription.created
   customer.subscription.updated
   customer.subscription.deleted
   ```
4. Copiar: **Webhook signing secret** (`whsec_...`)

---

## 🌐 Parte 4: Deploy en Coolify

### Paso 1: Conectar GitHub

1. En Coolify Dashboard:
   - Sources → Add New
   - GitHub → Authorize Coolify
   - Dar acceso al repositorio `MYID`

### Paso 2: Crear Nueva Aplicación

1. **Projects** → Create New Project
   - Nombre: `MyID Platform`
   - Description: NFC Emergency Information Platform

2. **Add Resource** → Application
   - Name: `myid-production`
   - Source: GitHub
   - Repository: `federicoarg00/MYID`
   - Branch: `main`
   - Build Pack: `Docker` (auto-detectará el Dockerfile)

### Paso 3: Configurar Dominio

1. En la aplicación → **Domains**
   - Add Domain: `myid.tudominio.com`
   - Enable SSL: ✅ (Let's Encrypt automático)

### Paso 4: Variables de Entorno

En **Environment Variables**, agregar:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIs...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIs...

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...

# App
NEXT_PUBLIC_APP_URL=https://myid.tudominio.com

# Node
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1

# Email (Opcional - para producción)
RESEND_API_KEY=re_...

# SMS (Opcional - para producción)
TWILIO_ACCOUNT_SID=AC...
TWILIO_AUTH_TOKEN=...
TWILIO_PHONE_NUMBER=+1...

# Google Maps (Opcional)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIza...
```

### Paso 5: Configurar Build

En **Build Settings**:

```yaml
# Coolify detectará automáticamente estas configuraciones del Dockerfile
Build Command: (auto - usa Dockerfile)
Start Command: (auto - usa Dockerfile CMD)
Port: 3000
Health Check Path: /api/health
```

### Paso 6: Deploy

1. Click en **Deploy** 🚀
2. Monitorear logs en tiempo real
3. Esperar ~5-10 minutos (primera vez)

Verás:
```
✅ Building Docker image...
✅ Installing dependencies...
✅ Building Next.js application...
✅ Creating container...
✅ Starting application...
✅ Health check passed
🎉 Deployment successful!
```

---

## ✅ Parte 5: Verificación Post-Deploy

### 1. Verificar Health Check

```bash
curl https://myid.tudominio.com/api/health

# Deberías ver:
# {
#   "status": "ok",
#   "timestamp": "2025-11-05T...",
#   "uptime": 123.45,
#   "environment": "production",
#   "version": "0.1.0"
# }
```

### 2. Verificar SSL

- Abrir: `https://myid.tudominio.com`
- Verificar candado 🔒 en navegador

### 3. Verificar Logs

En Coolify → Application → Logs:
```
✓ Ready in 3s
✓ Server listening on port 3000
```

---

## 🔄 Parte 6: CI/CD Automático

### Git Push → Auto Deploy

Coolify ya está configurado para auto-deploy:

```bash
# En tu máquina local:
git add .
git commit -m "Nueva feature"
git push origin main

# Coolify automáticamente:
# 1. Detecta el push
# 2. Pull del código
# 3. Rebuild Docker image
# 4. Rolling update (zero downtime)
# 5. Health check
# 6. Deploy completado
```

### Configurar Notificaciones

En Coolify → Settings → Notifications:
- Slack / Discord / Telegram
- Email
- Recibe alertas de:
  - Deploy exitoso
  - Deploy fallido
  - Aplicación caída

---

## 📊 Parte 7: Monitoreo

### En Coolify Dashboard

- **Metrics**: CPU, RAM, Network
- **Logs**: Tiempo real y histórico
- **Health Checks**: Status cada 30s
- **Uptime**: % disponibilidad

### Logs en Tiempo Real

```bash
# Desde Coolify web UI:
Logs → Follow Logs

# O desde SSH en el VPS:
docker logs -f myid-app-container
```

---

## 🔧 Configuraciones Avanzadas

### Escalado Horizontal (Opcional)

```yaml
# En Coolify → Application → Settings
Replicas: 2-3
Load Balancer: Enabled
```

### Backup Automático

```bash
# Los datos están en Supabase (ya tiene backups automáticos)
# Pero puedes configurar backup del contenedor:

# En Coolify → Backups
Schedule: Daily at 3 AM UTC
Retention: 7 días
```

### Custom Domain con Subdominios

```
myid.tudominio.com           → App principal
api.myid.tudominio.com       → API (mismo container)
admin.myid.tudominio.com     → Panel admin (futuro)
```

---

## 🐛 Troubleshooting

### Problema: Deploy falla

**Solución 1**: Verificar logs
```bash
# En Coolify → Logs
# Buscar errores de build
```

**Solución 2**: Variables de entorno
```bash
# Verificar que todas las variables estén configuradas
# Especialmente NEXT_PUBLIC_SUPABASE_URL
```

### Problema: Error 502 Bad Gateway

**Solución**: Health check
```bash
# Verificar que /api/health responda
docker exec myid-app-container curl localhost:3000/api/health
```

### Problema: SSL no funciona

**Solución**: DNS
```bash
# Verificar que el dominio apunte correctamente:
dig myid.tudominio.com

# Debe mostrar la IP de tu VPS
```

### Problema: Aplicación lenta

**Solución**: Escalar recursos
```bash
# En Coolify → Settings → Resources
CPU: Incrementar a 2-4 cores
RAM: Incrementar a 4GB
```

---

## 💰 Costos Estimados

### VPS (Hetzner recomendado)
```
CPX21:  €5.83/mes  (2 vCPU, 4GB RAM, 40GB SSD)
CPX31:  €11.66/mes (4 vCPU, 8GB RAM, 80GB SSD)
```

### Servicios
```
Coolify:     Gratis (open-source)
Supabase:    Gratis hasta 500MB DB / 1GB storage
Stripe:      2.9% + $0.30 por transacción
Let's Encrypt: Gratis (SSL)
```

### Total Inicial
```
~€6-12/mes para empezar
```

---

## 📚 Recursos Adicionales

- [Documentación Coolify](https://coolify.io/docs)
- [Coolify Discord](https://discord.gg/coolify)
- [Next.js Docker](https://nextjs.org/docs/deployment#docker-image)

---

## 🎯 Checklist de Deploy

```
☐ VPS configurado
☐ Coolify instalado
☐ Dominio apuntando al VPS
☐ Proyecto Supabase creado
☐ Schema SQL ejecutado
☐ Storage buckets creados
☐ Stripe configurado
☐ Webhook Stripe configurado
☐ GitHub conectado a Coolify
☐ Aplicación creada en Coolify
☐ Variables de entorno configuradas
☐ Deploy ejecutado
☐ SSL funcionando
☐ Health check OK
☐ Auto-deploy configurado
```

---

## 🚀 Siguiente Paso

Una vez deployado, continúa con:

1. **Crear productos en Stripe** dashboard
2. **Cargar productos iniciales** en Supabase
3. **Configurar webhooks adicionales**
4. **Testing end-to-end** del flujo completo
5. **Marketing y lanzamiento**

---

**¿Preguntas?** Revisa los logs en Coolify o contacta soporte.

**Versión**: 1.0
**Última actualización**: Noviembre 2025
