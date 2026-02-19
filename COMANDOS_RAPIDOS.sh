#!/bin/bash

# Script de comandos rápidos para crear estructura de módulos
# LariTechFarms - Implementación de Mantenimientos

echo "=== Comandos Rápidos para Crear Módulos ==="
echo ""

# Colores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Función para crear estructura de módulo
create_module_structure() {
    local dashboard=$1
    local module=$2
    local base_path="LariTechFarms/src/app/componets/dashbord/${dashboard}/${module}"
    
    echo -e "${BLUE}Creando estructura para ${module}...${NC}"
    
    mkdir -p "${base_path}/${module}-list"
    mkdir -p "${base_path}/add-${module}"
    mkdir -p "${base_path}/edit-${module}"
    mkdir -p "${base_path}/view-${module}"
    
    echo -e "${GREEN}✓ Estructura creada en ${base_path}${NC}"
}

# Menú principal
echo "Seleccione una opción:"
echo "1. Crear estructura de Vehículos"
echo "2. Crear estructura de Gastos de Operación"
echo "3. Crear estructura de Clientes"
echo "4. Crear estructura de Ventas"
echo "5. Crear estructura de Tickets"
echo "6. Crear todas las estructuras"
echo "7. Verificar estructura de Lotes"
echo ""

# Comandos individuales (comentados para referencia)

# 1. VEHÍCULOS
create_vehiculos() {
    echo -e "${BLUE}=== Creando Vehículos ===${NC}"
    mkdir -p LariTechFarms/src/app/componets/dashbord/production-dashboard/vehiculos/vehiculo-list
    mkdir -p LariTechFarms/src/app/componets/dashbord/production-dashboard/vehiculos/add-vehiculo
    mkdir -p LariTechFarms/src/app/componets/dashbord/production-dashboard/vehiculos/edit-vehiculo
    mkdir -p LariTechFarms/src/app/componets/dashbord/production-dashboard/vehiculos/view-vehiculo
    echo -e "${GREEN}✓ Estructura de Vehículos creada${NC}"
}

# 2. GASTOS DE OPERACIÓN
create_gastos() {
    echo -e "${BLUE}=== Creando Gastos de Operación ===${NC}"
    mkdir -p LariTechFarms/src/app/componets/dashbord/production-dashboard/gastos-operacion/gasto-list
    mkdir -p LariTechFarms/src/app/componets/dashbord/production-dashboard/gastos-operacion/add-gasto
    mkdir -p LariTechFarms/src/app/componets/dashbord/production-dashboard/gastos-operacion/edit-gasto
    mkdir -p LariTechFarms/src/app/componets/dashbord/production-dashboard/gastos-operacion/view-gasto
    echo -e "${GREEN}✓ Estructura de Gastos de Operación creada${NC}"
}

# 3. CLIENTES
create_clientes() {
    echo -e "${BLUE}=== Creando Clientes ===${NC}"
    mkdir -p LariTechFarms/src/app/componets/dashbord/bussiness-dashboard/clientes/cliente-list
    mkdir -p LariTechFarms/src/app/componets/dashbord/bussiness-dashboard/clientes/add-cliente
    mkdir -p LariTechFarms/src/app/componets/dashbord/bussiness-dashboard/clientes/edit-cliente
    mkdir -p LariTechFarms/src/app/componets/dashbord/bussiness-dashboard/clientes/view-cliente
    echo -e "${GREEN}✓ Estructura de Clientes creada${NC}"
}

# 4. VENTAS
create_ventas() {
    echo -e "${BLUE}=== Creando Ventas ===${NC}"
    mkdir -p LariTechFarms/src/app/componets/dashbord/bussiness-dashboard/ventas/venta-list
    mkdir -p LariTechFarms/src/app/componets/dashbord/bussiness-dashboard/ventas/add-venta
    mkdir -p LariTechFarms/src/app/componets/dashbord/bussiness-dashboard/ventas/view-venta
    echo -e "${GREEN}✓ Estructura de Ventas creada${NC}"
}

# 5. TICKETS
create_tickets() {
    echo -e "${BLUE}=== Creando Tickets ===${NC}"
    mkdir -p LariTechFarms/src/app/componets/dashbord/bussiness-dashboard/tickets/ticket-list
    mkdir -p LariTechFarms/src/app/componets/dashbord/bussiness-dashboard/tickets/add-ticket
    mkdir -p LariTechFarms/src/app/componets/dashbord/bussiness-dashboard/tickets/edit-ticket
    mkdir -p LariTechFarms/src/app/componets/dashbord/bussiness-dashboard/tickets/view-ticket
    echo -e "${GREEN}✓ Estructura de Tickets creada${NC}"
}

# 6. VERIFICAR LOTES
verify_lotes() {
    echo -e "${BLUE}=== Verificando Lotes ===${NC}"
    if [ -d "LariTechFarms/src/app/componets/dashbord/bussiness-dashboard/lotes" ]; then
        echo -e "${GREEN}✓ Carpeta de Lotes existe${NC}"
        ls -la LariTechFarms/src/app/componets/dashbord/bussiness-dashboard/lotes/
    else
        echo -e "${BLUE}Creando estructura de Lotes...${NC}"
        mkdir -p LariTechFarms/src/app/componets/dashbord/bussiness-dashboard/lotes/lote-list
        mkdir -p LariTechFarms/src/app/componets/dashbord/bussiness-dashboard/lotes/add-lote
        mkdir -p LariTechFarms/src/app/componets/dashbord/bussiness-dashboard/lotes/edit-lote
        mkdir -p LariTechFarms/src/app/componets/dashbord/bussiness-dashboard/lotes/view-lote
        echo -e "${GREEN}✓ Estructura de Lotes creada${NC}"
    fi
}

# Función para crear todos
create_all() {
    echo -e "${BLUE}=== Creando todas las estructuras ===${NC}"
    create_vehiculos
    create_gastos
    create_clientes
    create_ventas
    create_tickets
    verify_lotes
    echo -e "${GREEN}=== ¡Todas las estructuras creadas! ===${NC}"
}

# Comandos útiles adicionales
echo ""
echo "=== Comandos Útiles Adicionales ==="
echo ""

# Copiar módulo de inventario como base
echo "# Para copiar Inventario como base para Vehículos:"
echo "cp -r LariTechFarms/src/app/componets/dashbord/production-dashboard/inventario/ LariTechFarms/src/app/componets/dashbord/production-dashboard/vehiculos/"
echo ""

# Buscar y reemplazar
echo "# Para buscar y reemplazar en todos los archivos (macOS):"
echo "find LariTechFarms/src/app/componets/dashbord/production-dashboard/vehiculos/ -type f -exec sed -i '' 's/inventario/vehiculo/g' {} +"
echo "find LariTechFarms/src/app/componets/dashbord/production-dashboard/vehiculos/ -type f -exec sed -i '' 's/Inventario/Vehiculo/g' {} +"
echo ""

# Buscar y reemplazar (Linux)
echo "# Para buscar y reemplazar en todos los archivos (Linux):"
echo "find LariTechFarms/src/app/componets/dashbord/production-dashboard/vehiculos/ -type f -exec sed -i 's/inventario/vehiculo/g' {} +"
echo "find LariTechFarms/src/app/componets/dashbord/production-dashboard/vehiculos/ -type f -exec sed -i 's/Inventario/Vehiculo/g' {} +"
echo ""

# Renombrar archivos
echo "# Para renombrar archivos en masa (ejemplo Vehículos):"
echo "cd LariTechFarms/src/app/componets/dashbord/production-dashboard/vehiculos/"
echo "mv inventario-list vehiculo-list"
echo "mv add-inventario add-vehiculo"
echo "mv edit-inventario edit-vehiculo"
echo "mv view-inventario view-vehiculo"
echo ""

# Generar componentes con Angular CLI
echo "# Para generar componentes con Angular CLI:"
echo "ng g c componets/dashbord/production-dashboard/vehiculos/vehiculo-list --standalone --skip-tests"
echo "ng g c componets/dashbord/production-dashboard/vehiculos/add-vehiculo --standalone --skip-tests"
echo "ng g c componets/dashbord/production-dashboard/vehiculos/edit-vehiculo --standalone --skip-tests"
echo "ng g c componets/dashbord/production-dashboard/vehiculos/view-vehiculo --standalone --skip-tests"
echo ""

# Verificar estructura
echo "# Para verificar la estructura creada:"
echo "tree LariTechFarms/src/app/componets/dashbord/production-dashboard/ -L 3"
echo ""

# Ejecutar el script
echo "=== Ejecutando creación de estructuras ==="
echo ""

# Descomenta la función que quieras ejecutar:
# create_vehiculos
# create_gastos
# create_clientes
# create_ventas
# create_tickets
# verify_lotes
# create_all

echo ""
echo "=== Script completado ==="
echo "Revisa RESUMEN_FINAL.md para los próximos pasos"
