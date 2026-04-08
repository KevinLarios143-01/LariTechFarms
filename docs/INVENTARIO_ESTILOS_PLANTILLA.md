# Inventario de Estilos — Plantilla Dayone (Spruko)

> Referencia rápida de variables, clases utilitarias, componentes y librerías de íconos disponibles globalmente.
> Consultar **antes** de escribir estilos personalizados en archivos `.component.scss`.

---

## 1. Variables de Diseño (`assets/scss/_variables.scss`)

### Colores semánticos

| Variable SCSS | CSS Custom Property | Valor (light) | Uso |
|---|---|---|---|
| `$primary` | `--primary-color` | `rgb(51,102,255)` | Color principal de la app |
| `$secondary` | `rgb(--secondary-rgb)` | `rgb(254,127,0)` | Acentos secundarios |
| `$success` | `rgb(--success-rgb)` | `rgb(13,205,148)` | Estados exitosos |
| `$danger` | `rgb(--danger-rgb)` | `rgb(247,40,74)` | Errores, alertas |
| `$warning` | `rgb(--warning-rgb)` | `rgb(227,177,19)` | Advertencias |
| `$info` | `rgb(--info-rgb)` | `rgb(18,138,249)` | Información |
| `$light` | `rgb(--light-rgb)` | `rgb(235,239,248)` | Fondos claros |
| `$dark` | `rgb(--dark-rgb)` | `rgb(53,58,64)` | Texto oscuro |

### Colores extendidos

| Variable | Valor | Variable | Valor |
|---|---|---|---|
| `$orange` | `rgb(243,73,50)` | `$pink` | `rgb(239,78,184)` |
| `$purple` | `rgb(170,76,242)` | `$teal` | `rgb(23,209,220)` |
| `$red` | `#dc0441` | `$blue` | `#083dc1` |
| `$green` | `#1dd871` | `$cyan` | `#00D1D1` |
| `$indigo` | `#6574cd` | `$yellow` | `#ecb403` |

### Opacidades del primario

`$primary-01` a `$primary-09`, `$primary-005` — Ej: `background: $primary-01;`

### Texto y fondos

| Variable | Descripción |
|---|---|
| `$default-text-color` | Color de texto principal (`--default-text-color`) |
| `$text-muted` | Texto secundario/muted (`--text-muted`) |
| `$default-background` | Fondo por defecto (`--default-background`) |
| `$default-background2` | Fondo alternativo (`--default-background2`) |
| `$custom-white` | Blanco adaptable a dark mode (`--custom-white`) |
| `$custom-black` | Negro adaptable a dark mode (`--custom-black`) |

### Bordes y sombras

| Variable | Valor |
|---|---|
| `$default-border` | `var(--default-border)` — `#e9ebfa` en light |
| `$bootstrap-card-border` | `var(--bootstrap-card-border)` — `#e9ebfa` en light |
| `$input-border` | `var(--input-border)` — `#e9edf6` en light |
| `$default-radius` | `0.5rem` |
| `$box-shadow` | `0 0.125rem 0 rgba(10,10,10,.04)` |

### Tipografía

| Variable | Valor |
|---|---|
| `$default-font-family` | `'Roboto', sans-serif` |
| `$default-font-size` | `0.875rem` (14px) |
| `$default-font-weight` | `400` |

### Header y menú

| Variable | Descripción |
|---|---|
| `$header-bg` | Fondo del header |
| `$header-prime-color` | Color principal del header |
| `$header-border-color` | Borde del header |
| `$menu-bg` | Fondo del menú lateral |
| `$menu-prime-color` | Color principal del menú |
| `$menu-border-color` | Borde del menú |

### Grises, blancos y negros

- **Grises**: `$gray-1` a `$gray-9` (claro → oscuro)
- **Blancos**: `$white-1` a `$white-9` (opacidades de blanco)
- **Negros**: `$black-1` a `$black-9` (opacidades de negro)

### Gradientes

`$primary-gradient`, `$secondary-gradient`, `$success-gradient`, `$warning-gradient`, `$danger-gradient`, `$info-gradient`, `$orange-gradient`, `$pink-gradient`, `$teal-gradient`, `$purple-gradient`, `$light-gradient`, `$dark-gradient`

### Redes sociales

`$facebook`, `$twitter`, `$linkedin`, `$github`, `$google`, `$youtube`, `$instagram`

### Modo oscuro

Todas las CSS custom properties se redefinen bajo `[data-theme-mode="dark"]`. Las variables SCSS que usan `var(--*)` se adaptan automáticamente. Variables clave en dark mode:
- `--custom-white` → `rgb(37,39,74)` (fondo oscuro)
- `--custom-black` → `#fff`
- `--default-text-color` → `rgb(233,235,250)`
- `--default-border` → `rgba(255,255,255,0.1)`
- `--text-muted` → `rgba(255,255,255,0.5)`

---

## 2. Clases Utilitarias (`assets/scss/util/`)

### Avatares (`_avatars.scss`)

| Clase | Tamaño | Notas |
|---|---|---|
| `.avatar` | Base | Container inline-flex |
| `.avatar-xs` | Extra small | |
| `.avatar-sm` | Small | |
| `.avatar-md` | Medium | |
| `.avatar-lg` | Large | |
| `.avatar-xl` | 4rem × 4rem | |
| `.avatar-xxl` | Extra extra large | |
| `.avatar-rounded` | Circular | |
| `.avatar-list-stacked` | Avatares superpuestos | |
| `.online` / `.offline` | Indicador de estado | Badge de presencia |

### Fondos (`_background.scss`)

| Patrón | Ejemplo | Descripción |
|---|---|---|
| `.bg-{color}` | `.bg-primary`, `.bg-purple`, `.bg-orange` | Fondo sólido |
| `.bg-{color}-transparent` | `.bg-primary-transparent` | Fondo con opacidad |
| `.bg-{color}-gradient` | `.bg-success-gradient` | Fondo con gradiente |
| `.bg-{color}-outline` | `.bg-primary-outline` | Solo borde con color |
| `.bg-opacity-{n}` | `.bg-opacity-10`, `.bg-opacity-25`, `.bg-opacity-50`, `.bg-opacity-75` | Opacidad de fondo |

Colores disponibles: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`, `purple`, `orange`, `pink`, `teal`

### Tipografía (`_typography.scss`)

| Patrón | Rango | Ejemplo |
|---|---|---|
| `.fs-{n}` | `.fs-1` a `.fs-60` (px) | `.fs-14` = 0.875rem, `.fs-24` = 1.5rem |
| `.fs-sm` | 11px | Texto pequeño |
| `.fs-base` | 14px | Texto base |
| `.fs-lg` | 18px | Texto grande |
| `.text-{color}` | `.text-primary`, `.text-muted`, `.text-danger`, etc. | Color de texto semántico |
| `.fw-semibold` | — | Font weight 600 |
| `.text-default` | — | Color de texto por defecto |

### Bordes (`_border.scss`)

| Patrón | Ejemplo | Descripción |
|---|---|---|
| `.border` | — | Borde estándar |
| `.border-{color}` | `.border-primary`, `.border-danger` | Borde con color |
| `.border-{style}` | `.border-dashed`, `.border-dotted` | Estilo de borde |
| `.border-{n}` | `.border-1` a `.border-5` | Ancho de borde |
| `.br-{n}` | `.br-1` a `.br-20` | Border radius |
| `.rounded` | — | Bordes redondeados |

### Ancho (`_width.scss`)

| Patrón | Ejemplo | Descripción |
|---|---|---|
| `.w-{n}` (%) | `.w-10` a `.w-100` (pasos de 5) | Ancho porcentual |
| `.w-{n}` (rem) | `.w-0` a `.w-9` | Ancho en rem |
| `.w-{n}` (px) | `.w-100h` a `.w-500` | Ancho fijo en px |
| `.w-auto` | — | Ancho automático |

### Altura (`_height.scss`)

| Patrón | Ejemplo | Descripción |
|---|---|---|
| `.h-{n}` (%) | `.h-10` a `.h-100` | Altura porcentual |
| `.h-{n}` (rem) | `.h-0` a `.h-9` | Altura en rem |
| `.h-{n}` (px) | `.h-100h` a `.h-500` | Altura fija en px |
| `.h-100vh` | — | Altura completa del viewport |
| `.h-auto` | — | Altura automática |

### Opacidad (`_opacity.scss`)

`.op-0` a `.op-9` (0.0 a 0.9), `.op-1-1` (1.0)

### Padding (`_padding.scss`)

Archivo vacío actualmente — usar clases de Bootstrap (`p-1` a `p-5`, `px-*`, `py-*`, etc.)

---

## 3. Estilos de Componentes

### Bootstrap personalizado (`assets/scss/bootstrap/`)

| Archivo | Componentes |
|---|---|
| `_accordion.scss` | `.accordion`, `.accordion-item`, `.accordion-button` |
| `_alerts.scss` | `.alert`, `.alert-{color}`, `.alert-dismissible` |
| `_badge.scss` | `.badge`, `.badge-{color}` |
| `_breadcrumb.scss` | `.breadcrumb`, `.breadcrumb-item` |
| `_buttons.scss` | `.btn-{color}`, `.btn-outline-{color}`, `.btn-sm`, `.btn-lg` |
| `_cards.scss` | `.card`, `.card-header`, `.card-body`, `.card-footer` |
| `_dropdown.scss` | `.dropdown`, `.dropdown-menu`, `.dropdown-item` |
| `_forms.scss` | `.form-control`, `.form-label`, `.form-select`, `.invalid-feedback` |
| `_input_group.scss` | `.input-group`, `.input-group-text` |
| `_list_group.scss` | `.list-group`, `.list-group-item` |
| `_modals.scss` | `.modal`, `.modal-dialog`, `.modal-content` |
| `_navbar.scss` | `.navbar`, `.nav-link` |
| `_navs_tabs.scss` | `.nav-tabs`, `.nav-pills`, `.tab-content` |
| `_pagination.scss` | `.pagination`, `.page-item`, `.page-link` |
| `_popovers.scss` | `.popover` |
| `_progress.scss` | `.progress`, `.progress-bar` |
| `_tables.scss` | `.table`, `.table-striped`, `.table-hover`, `.table-bordered` |
| `_tags.scss` | `.tag`, `.tag-{color}` |
| `_toast.scss` | `.toast` |
| `_tooltips.scss` | `.tooltip` |

### Componentes custom (`assets/scss/custom/`)

| Archivo | Componentes principales |
|---|---|
| `_header.scss` | `.app-header`, `.main-header-container`, `.header-link`, `.header-link-icon`, `.main-profile-user`, `.header-profile-dropdown` |
| `_dashboard_styles.scss` | Cards de dashboard, widgets de estadísticas |
| `_authentication.scss` | Páginas de login, registro, recuperación |
| `_widgets.scss` | Widgets reutilizables |
| `_error.scss` | Páginas de error (404, 500, acceso denegado) |
| `_chat.scss` / `_chat2.scss` | Componentes de chat |
| `_plugins.scss` | Estilos para plugins de terceros |
| `_custom.scss` | Estilos generales custom |

### Páginas (`assets/scss/pages/`)

Estilos específicos para: `contact`, `ecommerce`, `file-manager`, `landing`, `loaders`, `mail`, `notifications`, `pricing`, `profile`, `ribbons`, `timeline`

### Estilos de menú (`assets/scss/menu-styles/`)

12 variantes: `vertical`, `horizontal`, `closed_menu`, `detached_menu`, `double_menu`, `icon_click`, `icon_hover`, `icon_overlay`, `icontext`, `menu_click`, `menu_hover`, `support_menu`

---

## 4. Bootstrap CSS Global

Importado desde `assets/css/bootstrap.css` en `src/styles.scss`. Todas las clases de Bootstrap 5 están disponibles:

- **Layout**: `container`, `row`, `col-*`, `d-flex`, `d-grid`, `d-none`, `d-block`
- **Flexbox**: `align-items-center`, `justify-content-between`, `flex-wrap`, `gap-*`
- **Spacing**: `p-0` a `p-5`, `m-0` a `m-5`, `px-*`, `py-*`, `mx-auto`, `mb-*`, `mt-*`
- **Texto**: `text-center`, `text-start`, `text-end`, `text-truncate`, `text-nowrap`
- **Display**: `d-none`, `d-sm-block`, `d-md-flex`, etc. (responsive)
- **Sombras**: `shadow-sm`, `shadow`, `shadow-lg`, `shadow-none`
- **Bordes**: `rounded`, `rounded-circle`, `rounded-pill`, `border-0`
- **Overflow**: `overflow-hidden`, `overflow-auto`, `overflow-scroll`

---

## 5. Librerías de Íconos (`assets/icon-fonts/`)

| Librería | Prefijo/Uso | Ejemplo |
|---|---|---|
| Bootstrap Icons | `bi bi-*` | `<i class="bi bi-person"></i>` |
| Feather Icons | `fe fe-*` | `<i class="fe fe-home"></i>` |
| Font Awesome | `fa fa-*` | `<i class="fa fa-user"></i>` |
| Remix Icons | `ri-*` | `<i class="ri-home-line"></i>` |
| Tabler Icons | `ti ti-*` | `<i class="ti ti-settings"></i>` |
| Boxicons | `bx bx-*` | `<i class="bx bx-bell"></i>` |
| Ionicons | `ion-*` | `<i class="ion-ios-home"></i>` |
| Line Awesome | `la la-*` | `<i class="la la-home"></i>` |
| Material Design Icons | `mdi mdi-*` | `<i class="mdi mdi-account"></i>` |
| PE Icon 7 Stroke | `pe-7s-*` | `<i class="pe-7s-home"></i>` |
| Simple Line Icons | `icon-*` | `<i class="icon-home"></i>` |
| Themify | `ti-*` | `<i class="ti-home"></i>` |
| Typicons | `typcn typcn-*` | `<i class="typcn typcn-home"></i>` |
| Weather Icons | `wi wi-*` | `<i class="wi wi-day-sunny"></i>` |

Todas importadas globalmente desde `assets/css/icons.css`.

---

## 6. Librerías de Terceros (importadas en `src/styles.scss`)

- Flatpickr (date picker)
- Swiper (carrusel)
- ng-select
- Angular Calendar
- Angular Material (deeppurple-amber, indigo-pink)
- OverlayScrollbars
- noUiSlider
- FilePond
- Leaflet (mapas)
- ngx-datatable
- ngx-bar-rating
- ngx-toastr
- angular-wysiwyg
- ngx-easy-table
- Angular CDK overlay
- Material Icons (Google Fonts)

---

## 7. Guía Rápida: ¿Qué usar en lugar de estilos custom?

| En vez de... | Usar... |
|---|---|
| `color: #6c757d` | `$text-muted` o `.text-muted` |
| `color: #212529` | `$default-text-color` o `.text-default` |
| `background-color: #6f42c1` | `$purple` o `.bg-purple` |
| `background-color: #f8f9fa` | `$light` o `.bg-light` |
| `border: 1px solid #e9ecef` | `$default-border` o `.border` |
| `font-size: 0.75rem` | `.fs-12` |
| `font-size: 0.875rem` | `$default-font-size` o `.fs-14` |
| `font-size: 1.5rem` | `.fs-24` |
| `box-shadow: 0 0.125rem...` | `$box-shadow` o `.shadow-sm` |
| `.avatar-xl { width: 4rem }` | Usar clase `.avatar-xl` directamente |
| `.badge { font-size: ... }` | Eliminar — Bootstrap ya lo define |
| `.text-danger { color: #dc3545 }` | Eliminar — ya definido globalmente |
| `.bg-purple { background: #6f42c1 }` | Eliminar — ya existe en `_background.scss` |
| `.card.border { border: 1px solid... }` | Usar `$default-border` o eliminar |
