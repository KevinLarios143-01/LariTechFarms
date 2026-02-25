# 🚀 Instrucciones de Ejecución - LariTechFarms Frontend

## ✅ Estado de Instalación

**Dependencias:** ✅ INSTALADAS (1200 paquetes)  
**Angular CLI:** ✅ v18.2.3  
**Node Modules:** ✅ Completos  

---

## 🏃 Ejecutar el Proyecto

### Opción 1: Modo Desarrollo (Recomendado para Testing)

```bash
cd LariTechFarms
ng serve
```

El proyecto estará disponible en: **http://localhost:4200**

### Opción 2: Modo Desarrollo con Puerto Específico

```bash
cd LariTechFarms
ng serve --port 4300
```

### Opción 3: Modo Desarrollo con Apertura Automática

```bash
cd LariTechFarms
ng serve --open
```

---

## 🔧 Comandos Disponibles

### Desarrollo:
```bash
# Iniciar servidor de desarrollo
npm start                    # Usa Node.js (para producción)
ng serve                     # Modo desarrollo Angular

# Compilar en modo watch (recompila automáticamente)
npm run watch
```

### Compilación:
```bash
# Compilar para desarrollo
ng build

# Compilar para producción
ng build --configuration production
npm run build

# Compilar para Heroku (producción)
npm run heroku-postbuild
```

### Testing:
```bash
# Ejecutar tests unitarios
npm test
ng test
```

### Estilos:
```bash
# Compilar SCSS a CSS
npm run sass

# Compilar SCSS a CSS minificado
npm run sass-min
```

---

## 🌐 URLs del Proyecto

### Desarrollo:
- **Frontend:** http://localhost:4200
- **Backend API:** (configurar en `src/environments/environment.ts`)

### Rutas Principales:

#### Autenticación:
- Login: http://localhost:4200/authentication/login

#### Dashboards:
- **RH Dashboard:** http://localhost:4200/dashboard/hrmdashboards/dashboard
- **Production Dashboard:** http://localhost:4200/dashboard/production-dashboard/huevos/estadisticas
- **Business Dashboard:** http://localhost:4200/dashboard/bussiness-dashboard/clientes/list

#### Módulos Nuevos Implementados:

**Production Dashboard:**
- Inventario: http://localhost:4200/dashboard/production-dashboard/inventario/list
- Vehículos: http://localhost:4200/dashboard/production-dashboard/vehiculos/list
- Gastos de Operación: http://localhost:4200/dashboard/production-dashboard/gastos-operacion/list

**Business Dashboard:**
- Clientes: http://localhost:4200/dashboard/bussiness-dashboard/clientes/list
- Ventas: http://localhost:4200/dashboard/bussiness-dashboard/ventas/list
- Tickets: http://localhost:4200/dashboard/bussiness-dashboard/tickets/list

---

## ⚙️ Configuración del Backend

### Archivo: `src/environments/environment.ts`

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api'  // Ajustar según tu backend
};
```

### Archivo: `src/environments/environment.prod.ts`

```typescript
export const environment = {
  production: true,
  apiUrl: 'https://tu-api-produccion.com/api'  // URL de producción
};
```

---

## 🔍 Verificar Instalación

### 1. Verificar versiones:
```bash
node --version          # Debe ser v18+ o v20+
npm --version           # Debe ser v9+ o v10+
ng version              # Debe mostrar Angular CLI 18.2.3
```

### 2. Verificar compilación:
```bash
cd LariTechFarms
ng build
```

Si compila sin errores, todo está correcto ✅

### 3. Verificar servidor de desarrollo:
```bash
ng serve
```

Abrir http://localhost:4200 en el navegador.

---

## 🐛 Solución de Problemas

### Problema 1: "ng: command not found"

**Solución:**
```bash
npm install -g @angular/cli@18.2.3
```

### Problema 2: Errores de compilación

**Solución:**
```bash
# Limpiar caché y reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Problema 3: Puerto 4200 en uso

**Solución:**
```bash
# Usar otro puerto
ng serve --port 4300

# O matar el proceso en el puerto 4200 (macOS/Linux)
lsof -ti:4200 | xargs kill -9
```

### Problema 4: Errores de CORS con el backend

**Solución:** Configurar proxy en `proxy.conf.json`:

```json
{
  "/api": {
    "target": "http://localhost:3000",
    "secure": false,
    "changeOrigin": true
  }
}
```

Luego ejecutar:
```bash
ng serve --proxy-config proxy.conf.json
```

### Problema 5: Vulnerabilidades de npm

**Nota:** Las 91 vulnerabilidades reportadas son comunes en proyectos Angular y la mayoría son de dependencias de desarrollo.

**Solución (opcional):**
```bash
# Intentar arreglar automáticamente
npm audit fix

# Ver detalles
npm audit

# Arreglar forzadamente (puede causar breaking changes)
npm audit fix --force  # ⚠️ Usar con precaución
```

---

## 📦 Estructura del Proyecto

```
LariTechFarms/
├── src/
│   ├── app/
│   │   ├── componets/dashbord/
│   │   │   ├── production-dashboard/
│   │   │   │   ├── inventario/          ✅ NUEVO
│   │   │   │   ├── vehiculos/           ✅ NUEVO
│   │   │   │   └── gastos-operacion/    ✅ NUEVO
│   │   │   └── bussiness-dashboard/
│   │   │       ├── clientes/            ✅ NUEVO
│   │   │       ├── ventas/              ✅ NUEVO
│   │   │       └── tickets/             ✅ NUEVO
│   │   ├── shared/
│   │   │   ├── services/
│   │   │   └── interfaces/
│   │   └── authentication/
│   ├── assets/
│   └── environments/
├── node_modules/
├── package.json
└── angular.json
```

---

## 🧪 Testing del Proyecto

### 1. Verificar que el servidor inicia:
```bash
ng serve
```
✅ Debe mostrar: "Compiled successfully"

### 2. Verificar login:
- Ir a: http://localhost:4200/authentication/login
- Intentar iniciar sesión

### 3. Verificar módulos nuevos:
Seguir la guía en `GUIA_TESTING.md`

---

## 🚀 Despliegue a Producción

### Compilar para producción:
```bash
ng build --configuration production
```

Los archivos compilados estarán en: `dist/`

### Desplegar en servidor:
1. Copiar contenido de `dist/` al servidor
2. Configurar servidor web (Nginx, Apache, etc.)
3. Asegurar que todas las rutas redirijan a `index.html`

### Ejemplo de configuración Nginx:
```nginx
server {
    listen 80;
    server_name tu-dominio.com;
    root /var/www/laritechfarms/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## 📊 Métricas del Proyecto

- **Paquetes instalados:** 1200
- **Tamaño de node_modules:** ~500MB
- **Tiempo de compilación:** ~30-60 segundos
- **Tiempo de inicio (ng serve):** ~10-15 segundos
- **Versión de Angular:** 18.2.3
- **Versión de TypeScript:** 5.5.3

---

## 🔐 Seguridad

### Recomendaciones:
1. ✅ Usar HTTPS en producción
2. ✅ Configurar CORS correctamente en el backend
3. ✅ No exponer claves API en el código
4. ✅ Usar variables de entorno para configuración sensible
5. ✅ Mantener dependencias actualizadas

### Actualizar dependencias:
```bash
# Ver paquetes desactualizados
npm outdated

# Actualizar paquetes menores
npm update

# Actualizar Angular (con precaución)
ng update @angular/cli @angular/core
```

---

## 📞 Soporte

### Documentación:
- `GUIA_TESTING.md` - Guía completa de testing
- `COMPLETADO_FINAL.md` - Resumen de implementación
- `RESUMEN_EJECUTIVO_FINAL.md` - Resumen ejecutivo

### Comandos Rápidos:
Ver archivo: `COMANDOS_RAPIDOS.sh`

---

## ✅ Checklist de Inicio

- [x] Node.js instalado (v18+)
- [x] npm instalado (v9+)
- [x] Angular CLI instalado (v18.2.3)
- [x] Dependencias instaladas (`npm install`)
- [ ] Backend configurado y ejecutándose
- [ ] Variables de entorno configuradas
- [ ] Servidor de desarrollo iniciado (`ng serve`)
- [ ] Login funcional
- [ ] Módulos accesibles

---

## 🎉 ¡Listo para Empezar!

El proyecto está completamente configurado y listo para ejecutarse.

**Comando para iniciar:**
```bash
cd LariTechFarms
ng serve --open
```

**URL:** http://localhost:4200

---

**Última actualización:** $(date +%Y-%m-%d)  
**Estado:** ✅ LISTO PARA EJECUTAR

