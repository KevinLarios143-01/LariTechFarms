/**
 * Configuración estática de permisos basados en roles.
 * Define tipos, constantes y estructuras de datos para el sistema
 * de control de acceso híbrido de dos capas.
 */

// Roles válidos del sistema
export type UserRole = 'superadmin' | 'admin' | 'gerente' | 'supervisor' | 'vendedor' | 'operador';

// Módulos del sistema
export type ModuleName = 'RH' | 'Clientes' | 'Business' | 'Lotes' | 'Producción' | 'Reportería' | 'Super Admin';

// Array de roles válidos para validación
export const VALID_ROLES: UserRole[] = [
  'superadmin', 'admin', 'gerente', 'supervisor', 'vendedor', 'operador'
];

// Mapa módulo → prefijos de ruta
export const MODULE_ROUTE_MAP: Record<ModuleName, string[]> = {
  'RH':          ['/dashboard/hrmdashboards/'],
  'Clientes':    ['/dashboard/client-dashboard/'],
  'Business':    ['/dashboard/business-dashboard/clientes/',
                  '/dashboard/business-dashboard/ventas/',
                  '/dashboard/business-dashboard/tickets/',
                  '/dashboard/business-dashboard/sell-list'],
  'Lotes':       ['/dashboard/business-dashboard/lotes/'],
  'Producción':  ['/dashboard/production-dashboard/'],
  'Reportería':  ['/dashboard/reports/'],
  'Super Admin': ['/dashboard/super-admin/'],
};

// Matriz de acceso rol → módulos
export const ROLE_ACCESS_MATRIX: Record<UserRole, ModuleName[]> = {
  superadmin:  ['RH', 'Clientes', 'Business', 'Lotes', 'Producción', 'Reportería', 'Super Admin'],
  admin:       ['RH', 'Clientes', 'Business', 'Lotes', 'Producción', 'Reportería'],
  gerente:     ['RH', 'Clientes', 'Business', 'Lotes', 'Producción', 'Reportería'],
  supervisor:  ['Business', 'Lotes', 'Producción', 'Reportería'],
  vendedor:    ['Clientes', 'Business', 'Lotes', 'Reportería'],
  operador: ['Lotes', 'Producción', 'Reportería'],
};

// Redirecciones post-login por rol
export const DEFAULT_REDIRECTS: Record<UserRole, string> = {
  superadmin:  '/dashboard/hrmdashboards/dashboard',
  admin:       '/dashboard/hrmdashboards/dashboard',
  gerente:     '/dashboard/hrmdashboards/dashboard',
  supervisor:  '/dashboard/production-dashboard/huevos',
  vendedor:    '/dashboard/business-dashboard/ventas/list',
  operador: '/dashboard/production-dashboard/huevos',
};
