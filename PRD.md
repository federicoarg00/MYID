# PRD - Plataforma de Gestión de Accesorios NFC con Información Personal de Emergencia

**Proyecto:** NFC ID TAG  
**Documento creado:** Octubre 12 2025  
**Versión:** 1.0  
**Estado:** Borrador inicial
**Autor:** Federico Heine


---

## 1. Resumen Ejecutivo

### 1.1 Visión del Producto
Plataforma integral que permite a los usuarios adquirir accesorios NFC (pulseras, llaveros, etc.) y gestionar información personal y médica crí­tica que puede ser accedida mediante lectura NFC en situaciones de emergencia.

### 1.2 Propuesta de Valor
- Acceso rápido a información vital en emergencias médicas
- Gestión centralizada de datos personales y médicos
- Notificación automática a contactos de emergencia
- Actualización flexible de información sin necesidad de reemplazar el dispositivo fí­sico

---

## 2. Objetivos del Producto

### 2.1 Objetivos de Negocio
- Comercializar accesorios NFC con suscripción anual al servicio
- Crear una plataforma escalable de gestión de información personal
- Generar ingresos recurrentes mediante modelo de suscripción
- Posicionar la marca como solución confiable para emergencias médicas

### 2.2 Objetivos del Usuario
- Tener información médica accesible en todo momento
- Facilitar la comunicación con contactos de emergencia
- Personalizar la información que desea compartir
- Mantener datos actualizados sin complicaciones técnicas

---

## 3. Alcance del Producto

### 3.1 Módulos Incluidos en MVP

#### **Módulo 1: E-commerce**
- Catálogo de productos (pulseras, llaveros, accesorios NFC)
- Carrito de compras
- Checkout con pasarela de pago
- Gestión de pedidos

#### **Módulo 2: Gestión de Usuarios**
- Registro y autenticación
- Perfil de usuario
- Gestión de suscripciones
- Vinculación de dispositivos NFC

#### **Módulo 3: Gestión de Información Personal**
- Editor de campos personalizables
- Almacenamiento seguro de datos médicos
- Gestión de contactos de emergencia
- Carga de archivos (fotos, documentos)

#### **Módulo 4: Funcionalidades de Emergencia**
- Visualización de perfil mediante lectura NFC
- Botón de llamada directa a contactos
- Enví­o automático de ubicación GPS
- Historial de accesos al perfil

#### **Módulo 5: Panel de Administración**
- Gestión de usuarios y suscripciones
- Estadí­sticas y reportes
- Gestión de inventario de productos
- Control de dispositivos NFC

### 3.2 Fuera del Alcance (Fase 1)
- Aplicación móvil nativa (se usará web responsive)
- Integración con dispositivos wearables
- Sistemas de telemedicina
- Traducción automática a múltiples idiomas

---

## 4. Usuarios y Stakeholders

### 4.1 Personas
1. **Usuario Final**: Persona que compra y usa el accesorio NFC
2. **Respondedor de Emergencia**: Personal médico, policí­a, familiares que acceden a la información
3. **Administrador**: Personal que gestiona la plataforma

### 4.2 Stakeholders
- Equipo de desarrollo
- Equipo de marketing y ventas
- Soporte al cliente
- Proveedores de accesorios NFC
- Proveedores de pasarelas de pago

---

## 5. Requisitos Funcionales

### 5.1 E-commerce

**RF-001: Catálogo de Productos**
- El sistema debe mostrar todos los accesorios NFC disponibles con fotos, descripción y precio
- Debe incluir filtros por tipo, color, material y precio
- Debe mostrar disponibilidad en stock

**RF-002: Compra de Productos**
- El usuario debe poder agregar productos al carrito
- El sistema debe calcular el total incluyendo impuestos y enví­o
- Debe ofrecer múltiples métodos de pago (tarjeta, PayPal, etc.)
- Debe confirmar la compra mediante email

**RF-003: Suscripción Anual**
- Al comprar un producto, el sistema debe incluir automáticamente la suscripción anual
- Debe permitir renovación automática opcional
- Debe enviar recordatorios 30 dí­as antes del vencimiento

### 5.2 Registro y Autenticación

**RF-004: Registro de Usuario**
- Registro mediante email y contraseí±a
- Validación de email mediante código de verificación
- Opción de registro con Google/Apple/Facebook

**RF-005: Autenticación**
- Login con email/contraseí±a
- Opción de "recordar sesión"
- Recuperación de contraseí±a mediante email
- Autenticación de dos factores (2FA) opcional

### 5.3 Gestión de Dispositivos NFC

**RF-006: Vinculación de Dispositivo**
- El usuario debe poder vincular un nuevo dispositivo mediante código único
- Un dispositivo solo puede estar vinculado a una cuenta activa
- El sistema debe permitir transferir un dispositivo a otro usuario
- Debe mostrar historial de dispositivos vinculados

**RF-007: Desvinculación**
- El usuario debe poder desvincular un dispositivo en cualquier momento
- Al desvincular, el acceso mediante NFC debe quedar deshabilitado

### 5.4 Gestión de Información Personal

**RF-008: Editor de Perfil Personalizable**
- El usuario debe poder activar/desactivar cada campo individualmente
- Campos predefinidos disponibles:
  - **Personales**: Nombre completo, fotografí­a, edad/fecha de nacimiento, dirección, teléfono
  - **Profesionales**: Profesión, puesto, empresa
  - **Médicos**: Grupo sanguí­neo, alergias, medicaciones actuales, condiciones médicas, cirugí­as previas, médico de cabecera
  - **Emergencia**: Contactos de emergencia (nombre, relación, teléfono, email)
  - **Otros**: Seguro médico, donante de órganos, instrucciones especiales

**RF-009: Campos Personalizados**
- El usuario debe poder crear campos adicionales personalizados
- Debe poder definir el tipo de campo (texto, número, fecha, archivo)
- Lí­mite de 10 campos personalizados por usuario

**RF-010: Carga de Archivos**
- El usuario debe poder subir fotografí­a de perfil (máx. 5MB)
- Debe permitir cargar documentos PDF (ej: recetas, estudios médicos) - máx. 10MB total
- El sistema debe validar formatos permitidos (JPG, PNG, PDF)

**RF-011: Visibilidad de Información**
- El usuario debe poder configurar qué información es visible al escanear el NFC
- Opciones: Pública (visible siempre), Privada (requiere PIN), Oculta

### 5.5 Funcionalidades de Emergencia

**RF-012: Visualización mediante NFC**
- Al escanear el NFC, debe redirigir a una página web con la información del usuario
- Debe funcionar sin necesidad de instalar aplicaciones
- Debe ser compatible con todos los smartphones con NFC
- Debe mostrar solo información marcada como visible

**RF-013: Botón de Llamada de Emergencia**
- Debe mostrar botones para llamar directamente a cada contacto de emergencia
- En móviles, debe abrir el marcador telefónico
- Debe registrar cada intento de llamada con fecha/hora

**RF-014: Enví­o de Ubicación**
- Debe incluir botón para compartir ubicación GPS actual
- Al presionar, debe enviar SMS y/o email a todos los contactos de emergencia
- El mensaje debe incluir coordenadas y enlace a Google Maps
- Debe solicitar permiso de ubicación al usuario que escanea

**RF-015: Historial de Accesos**
- El propietario debe poder ver cuándo y dónde fue escaneado su dispositivo
- Registro debe incluir: fecha, hora, ubicación aproximada (si está disponible)
- Debe permitir exportar historial en CSV

### 5.6 Gestión de Suscripción

**RF-016: Estado de Suscripción**
- El usuario debe poder ver el estado de su suscripción (activa, vencida, cancelada)
- Debe mostrar fecha de inicio y vencimiento
- Debe permitir actualizar método de pago

**RF-017: Renovación y Cancelación**
- Opción de renovación manual o automática
- Proceso de cancelación con confirmación
- Perí­odo de gracia de 7 dí­as después del vencimiento

---

## 6. Requisitos No Funcionales

### 6.1 Seguridad

**RNF-001: Protección de Datos**
- Toda la información médica debe estar encriptada en reposo (AES-256)
- Comunicación mediante HTTPS/TLS
- Cumplimiento con normativas de protección de datos (GDPR, HIPAA según región)

**RNF-002: Autenticación Segura**
- Contraseí±as hasheadas con bcrypt
- Tokens de sesión con expiración
- Protección contra ataques de fuerza bruta

### 6.2 Rendimiento

**RNF-003: Tiempos de Respuesta**
- Carga de página de emergencia (NFC): < 2 segundos
- Operaciones CRUD en panel de usuario: < 1 segundo
- Procesamiento de pagos: < 5 segundos

**RNF-004: Escalabilidad**
- Soportar al menos 100,000 usuarios concurrentes
- Capacidad de crecimiento horizontal

### 6.3 Disponibilidad

**RNF-005: Uptime**
- Disponibilidad del 99.9% mensual
- Sistema de respaldo y recuperación ante desastres
- La visualización NFC debe funcionar incluso con degradación parcial del sistema

### 6.4 Usabilidad

**RNF-006: Experiencia de Usuario**
- Interfaz responsive (móvil, tablet, desktop)
- Compatible con navegadores modernos (Chrome, Safari, Firefox, Edge)
- Accesibilidad WCAG 2.1 nivel AA
- Soporte multi-idioma (espaí±ol, inglés inicialmente)

### 6.5 Compatibilidad

**RNF-007: Dispositivos NFC**
- Compatible con tags NFC tipo 2, 4 y 5
- Soporte para NTAG213, NTAG215, NTAG216
- URL almacenada en el chip debe ser permanente

---

## 7. Historias de Usuario

### 7.1 Como Usuario Nuevo

**HU-001**: Como visitante, quiero explorar el catálogo de productos para decidir qué accesorio NFC comprar  
**Criterios de aceptación**:
- Puedo ver fotos, descripciones y precios
- Puedo filtrar por caracterí­sticas
- Puedo leer reviews de otros usuarios

**HU-002**: Como comprador, quiero registrarme y comprar una pulsera NFC para comenzar a usar el servicio  
**Criterios de aceptación**:
- El registro es simple (email y contraseí±a)
- La compra incluye suscripción anual automáticamente
- Recibo confirmación por email

**HU-003**: Como nuevo usuario, quiero vincular mi pulsera NFC para activar el servicio  
**Criterios de aceptación**:
- Puedo ingresar el código único de mi dispositivo
- El sistema valida el código
- Recibo confirmación de vinculación exitosa

### 7.2 Como Usuario Activo

**HU-004**: Como usuario, quiero configurar mi información médica para que esté disponible en emergencias  
**Criterios de aceptación**:
- Puedo agregar grupo sanguí­neo, alergias, medicaciones
- Puedo subir una fotografí­a
- Los cambios se guardan inmediatamente

**HU-005**: Como usuario, quiero agregar contactos de emergencia para que puedan ser notificados  
**Criterios de aceptación**:
- Puedo agregar múltiples contactos (mí­nimo 1, máximo 5)
- Cada contacto tiene nombre, relación, teléfono y email
- Puedo ordenar contactos por prioridad

**HU-006**: Como usuario, quiero personalizar qué información es visible al escanear mi NFC  
**Criterios de aceptación**:
- Puedo marcar cada campo como público, privado u oculto
- Los cambios se reflejan inmediatamente en el perfil NFC
- Puedo previsualizar cómo se ve mi perfil

### 7.3 Como Respondedor de Emergencia

**HU-007**: Como persona que encuentra a alguien inconsciente, quiero escanear su pulsera NFC para acceder a información médica vital  
**Criterios de aceptación**:
- Al escanear con mi teléfono, se abre automáticamente el navegador
- Veo información médica relevante claramente
- No necesito instalar ninguna app

**HU-008**: Como familiar en una emergencia, quiero llamar rápidamente a los contactos de emergencia  
**Criterios de aceptación**:
- Veo botones de llamada prominentes
- Al hacer clic, se abre el marcador de mi teléfono
- Puedo llamar sin necesidad de copiar números

**HU-009**: Como respondedor, quiero enviar la ubicación de la emergencia a los contactos  
**Criterios de aceptación**:
- Hay un botón claro "Enviar ubicación a contactos"
- Al hacer clic, se enví­a SMS/email automáticamente
- El mensaje incluye ubicación exacta en mapa

### 7.4 Como Administrador

**HU-010**: Como admin, quiero gestionar usuarios y suscripciones para mantener el servicio operativo  
**Criterios de aceptación**:
- Puedo ver lista de usuarios con estado de suscripción
- Puedo extender/cancelar suscripciones manualmente
- Puedo ver estadí­sticas de uso

---

## 8. Casos de Uso Principales

### 8.1 Caso de Uso: Compra y Configuración Inicial

**Actor Principal**: Usuario nuevo  
**Precondiciones**: Ninguna  
**Flujo Principal**:
1. Usuario ingresa al sitio web
2. Navega al catálogo de productos
3. Selecciona un accesorio NFC y lo agrega al carrito
4. Procede al checkout
5. Se registra con email y contraseí±a
6. Ingresa datos de enví­o y pago
7. Confirma la compra (incluye suscripción anual)
8. Recibe confirmación por email
9. Recibe el producto fí­sicamente
10. Ingresa al panel de usuario
11. Vincula el dispositivo mediante código único
12. Configura su información personal y médica
13. Verifica que el NFC funciona escaneándolo

**Flujo Alternativo**:
- 5a. Usuario se registra con Google/Facebook
- 6a. Pago rechazado â†’ reintentar con otro método

### 8.2 Caso de Uso: Emergencia Médica

**Actor Principal**: Respondedor de emergencia  
**Actor Secundario**: Contactos de emergencia  
**Precondiciones**: Usuario tiene pulsera NFC configurada  
**Flujo Principal**:
1. Respondedor encuentra persona con pulsera NFC
2. Acerca su smartphone a la pulsera
3. Teléfono detecta NFC y abre navegador automáticamente
4. Se carga página de perfil de emergencia
5. Respondedor ve información médica vital (grupo sanguí­neo, alergias, condiciones)
6. Respondedor hace clic en "Llamar a contacto de emergencia"
7. Se abre marcador telefónico con número cargado
8. Respondedor realiza la llamada
9. Opcionalmente, hace clic en "Enviar ubicación a contactos"
10. Sistema enví­a SMS/email con ubicación GPS a todos los contactos
11. Sistema registra el acceso en historial del usuario

**Flujo Alternativo**:
- 2a. Smartphone no tiene NFC â†’ manual búsqueda en sitio web con código de la pulsera
- 9a. Usuario no otorga permiso de ubicación â†’ se enví­a solo notificación sin ubicación

---

## 9. Arquitectura Técnica (Alto Nivel)

### 9.1 Stack Tecnológico Recomendado

**Frontend**:
- React.js o Vue.js para interfaz de usuario
- Tailwind CSS para diseí±o responsive
- PWA (Progressive Web App) para funcionalidad offline

**Backend**:
- Node.js con Express o Python con Django/FastAPI
- API RESTful para comunicación
- Base de datos: PostgreSQL (datos estructurados) + Redis (caché)

**Servicios Externos**:
- Pasarela de pago: Stripe, PayPal, MercadoPago
- Servicio de email: SendGrid, AWS SES
- Servicio SMS: Twilio, AWS SNS
- Storage: AWS S3 o Google Cloud Storage (para imágenes/archivos)
- Geolocalización: Google Maps API

**Infraestructura**:
- Hosting: AWS, Google Cloud o Azure
- CDN: CloudFlare
- CI/CD: GitHub Actions, GitLab CI

### 9.2 Arquitectura de Datos

**Entidades Principales**:
1. **Users**: id, email, password_hash, nombre, created_at, subscription_status
2. **Devices**: id, device_code, user_id, status, linked_at, unlinked_at
3. **Profiles**: user_id, fields (JSONB para flexibilidad)
4. **Emergency_Contacts**: id, user_id, nombre, relacion, telefono, email, prioridad
5. **Subscriptions**: id, user_id, start_date, end_date, status, payment_method
6. **Access_Log**: id, device_id, accessed_at, location (si disponible)
7. **Products**: id, nombre, descripcion, precio, stock, imagenes

### 9.3 Flujo de Datos NFC

```
[Dispositivo NFC] â†’ [URL única] â†’ [Servidor] â†’ [Validación] â†’ [Renderizado HTML] â†’ [Respuesta al navegador]
```

La URL en el chip NFC debe ser permanente del tipo:
`https://tudominio.com/p/{device_unique_code}`

El servidor valida el código, recupera el perfil asociado y renderiza la página HTML con la información.

---

## 10. Consideraciones de Seguridad y Privacidad

### 10.1 Protección de Datos Sensibles
- Información médica encriptada en base de datos
- Acceso a datos mediante roles y permisos
- Logs de auditorí­a para accesos administrativos
- Polí­tica de retención de datos (eliminación tras 90 dí­as de cuenta inactiva)

### 10.2 Privacidad del Usuario
- Polí­tica de privacidad clara y accesible
- Consentimiento explí­cito para cada tipo de dato
- Derecho al olvido (eliminación completa de datos)
- Exportación de datos en formato estándar (JSON/CSV)

### 10.3 Seguridad en Pagos
- Cumplimiento PCI DSS
- No almacenar datos de tarjetas directamente
- Tokenización mediante pasarela de pago

### 10.4 Acceso No Autorizado
- Rate limiting para evitar escaneos masivos
- CAPTCHA en formularios crí­ticos
- Alertas al usuario cuando su dispositivo es escaneado (opcional)

---

## 11. Plan de Implementación

### 11.1 Fase 1 - MVP (3-4 meses)
**Sprints 1-2**: Infraestructura y autenticación
- Setup de infraestructura cloud
- Registro y login de usuarios
- Gestión de sesiones

**Sprints 3-4**: E-commerce básico
- Catálogo de productos
- Carrito y checkout
- Integración con pasarela de pago

**Sprints 5-6**: Gestión de dispositivos y perfiles
- Vinculación de dispositivos NFC
- Editor de perfil con campos predefinidos
- Carga de imágenes

**Sprints 7-8**: Funcionalidades de emergencia
- Página de visualización NFC
- Botones de llamada y enví­o de ubicación
- Testing de flujo completo

**Sprint 9**: Testing, QA y ajustes
- Testing de seguridad
- Testing de carga
- Corrección de bugs

**Sprint 10**: Lanzamiento
- Deployment a producción
- Monitoreo inicial
- Soporte al cliente

### 11.2 Fase 2 - Mejoras (3 meses post-lanzamiento)
- Aplicación móvil nativa (iOS y Android)
- Campos personalizados ilimitados
- Integración con Apple Health / Google Fit
- Dashboard de analytics avanzado
- Modo offline en app móvil

### 11.3 Fase 3 - Expansión (6 meses post-lanzamiento)
- Multi-idioma completo
- Integración con servicios de telemedicina
- Marketplace para terceros (ej: productos de partners)
- Programa de referidos
- API pública para integraciones

---

## 12. Métricas de í‰xito

### 12.1 KPIs de Negocio
- **Conversión**: % de visitantes que completan compra (objetivo: >2%)
- **Retención**: % de usuarios que renuevan suscripción (objetivo: >70%)
- **LTV (Lifetime Value)**: Valor promedio por usuario (objetivo: $150+)
- **CAC (Customer Acquisition Cost)**: Costo de adquisición por cliente (objetivo: <$50)

### 12.2 KPIs de Producto
- **Activación**: % de usuarios que vinculan dispositivo en primeros 7 dí­as (objetivo: >80%)
- **Completitud de perfil**: % de usuarios con al menos 5 campos configurados (objetivo: >60%)
- **Tiempo de setup**: Tiempo promedio para configurar perfil completo (objetivo: <10 min)

### 12.3 KPIs Técnicos
- **Uptime**: Disponibilidad del servicio (objetivo: 99.9%)
- **Tiempo de carga NFC**: Tiempo de carga de página de emergencia (objetivo: <2s)
- **Error rate**: Tasa de errores en transacciones (objetivo: <0.1%)

### 12.4 KPIs de Satisfacción
- **NPS (Net Promoter Score)**: Objetivo: >50
- **CSAT (Customer Satisfaction)**: Objetivo: >4.5/5
- **Tasa de abandono**: Objetivo: <5% mensual

---

## 13. Riesgos y Mitigación

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|--------------|---------|------------|
| Baja adopción inicial | Media | Alto | Estrategia de marketing agresiva, programa de early adopters con descuentos |
| Problemas de compatibilidad NFC | Baja | Alto | Testing exhaustivo con múltiples dispositivos, soporte técnico dedicado |
| Brecha de seguridad | Baja | Crí­tico | Auditorí­as de seguridad periódicas, bug bounty program, seguro cibernético |
| Sobrecarga del servidor | Media | Medio | Arquitectura escalable, auto-scaling, CDN para contenido estático |
| Problemas legales/regulatorios | Media | Alto | Consultorí­a legal desde fase de diseí±o, términos y condiciones claros |
| Dependencia de proveedores | Media | Medio | Múltiples proveedores para servicios crí­ticos, contratos con SLA |

---

## 14. Apéndices

### 14.1 Glosario
- **NFC**: Near Field Communication, tecnologí­a de comunicación inalámbrica de corto alcance
- **MVP**: Minimum Viable Product, producto mí­nimo viable
- **PRD**: Product Requirements Document
- **SLA**: Service Level Agreement
- **2FA**: Two-Factor Authentication

### 14.2 Referencias
- Normativa GDPR (protección de datos en Europa)
- Estándares WCAG 2.1 (accesibilidad web)
- PCI DSS (seguridad en pagos)

---

## 15. Aprobaciones

| Rol | Nombre | Firma | Fecha |
|-----|--------|-------|-------|
| Product Owner | | | |
| Tech Lead | | | |
| UX/UI Lead | | | |
| Security Officer | | | |

---

**Versión:** 1.0  
**Próxima revisión:** [Fecha + 1 mes]

---

## Notas de Actualización

Este PRD es un documento vivo que se actualiza según el feedback del equipo y los usuarios.

**Historial de cambios:**
- v1.0 - Octubre 2025: Versión inicial del documento
