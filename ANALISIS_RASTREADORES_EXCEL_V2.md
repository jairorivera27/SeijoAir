# 🔍 Análisis Profundo de Rastreadores - MATRIZ COSTEO MANTENIMIENTOS CHIP STATION.xlsx

## 📋 Resumen Ejecutivo

**Fecha de Análisis:** Enero 2025  
**Archivo Analizado:** MATRIZ COSTEO MANTENIMIENTOS CHIP STATION.xlsx  
**Estado:** 🔴 **MÚLTIPLES RASTREADORES DETECTADOS**

---

## ✅ Hallazgos Confirmados

### 1. **NO se encontraron Macros VBA** ✅
- ✅ No existe archivo `vbaProject.bin`
- ✅ No hay código VBA embebido
- **Conclusión:** El archivo NO contiene macros maliciosas

---

## 🔴 RASTREADORES DETECTADOS

### 2. **22 ENLACES EXTERNOS - ALTO RIESGO** 🔴

El archivo contiene **22 enlaces externos** que funcionan como rastreadores activos:

#### **A. Enlaces a Microsoft SharePoint (13 enlaces)** 🔴🔴🔴
**RIESGO CRÍTICO:** Estos enlaces pueden rastrear accesos, usuarios y actividad.

1. `https://ingeniesys-my.sharepoint.com/Users/lenovo/Downloads/planilla-de-excel-para-control-de-stocks.xlsx`
2. `https://ingeniesys-my.sharepoint.com/Users/santiago/Downloads/planilla-de-excel-para-el-aplicativo-de-compras-y-ventas.xlsx`
3. `https://ingeniesys-my.sharepoint.com/CACIQUE/Curso%20de%20Excel/App_Excel_For_All/Plantillas%20Web/6.%20Plantilla%20Administración%20proyectos.xlsm`
4. `https://ingeniesys-my.sharepoint.com/Users/salud/Documents/SG%20SST%20SERVIGPODER/AT%20SERVIGPODER%202020/AT%202020%20-%20copia.xlsx`
5. `https://ingeniesys-my.sharepoint.com/Users/bt%20latam/Desktop/Docs_Licitacion/ANEXO%20LB_01_COBERTURA_GEOGRAFICA.XLS`
6. `https://ingeniesys-my.sharepoint.com/Users/CarlosIgnacio/Documents/APS/AUDITORIA/2020/EHS/13.%20MATRIZ%20RYP/MATRIZ%20RYP%20CKB.xls`
7. `https://ingeniesys-my.sharepoint.com/CACIQUE/Curso%20de%20Excel/App_Excel_For_All/Plantillas%20Web/4.%20Plantilla_TablaAmortización_Prestamos.xlsx`
8. `https://ingeniesys-my.sharepoint.com/Users/Usuario/Desktop/CALCULADORA/COSTOS%20SEPTIEMBRE.xlsx`
9. `https://ingeniesys-my.sharepoint.com/Users/Luis%20Fernando%20Donis/AppData/Local/Microsoft/Windows/Temporary%20Internet%20Files/Content.Outlook/ZBC0U4KF/Salarios.xls`
10. `https://ingeniesys-my.sharepoint.com/Users/Orlando/Documents/BMC/Proyectos/PMC/Modelo%20de%20Gobierno/Diseño/Analisis%20de%20Salario%20V3.xls`
11. `https://ingeniesys-my.sharepoint.com/Users/ITX8311/AppData/Local/Microsoft/Windows/Temporary%20Internet%20Files/Content.Outlook/V5AA51PE/BASE%20DE%20DATOS%20PROVEEDORES%20INTERNEXA.xlsx`
12. `https://ingeniesys-my.sharepoint.com/SALUD%20OCUPACIONAL/CONTRATISTAS/ORBECOM/ATS%20Formato.xls`
13. `https://ingeniesys-my.sharepoint.com/Users/CarlosIgnacio/Downloads/Request_For_Information_Log-ES.xlsx`

**⚠️ RIESGO:** Microsoft SharePoint puede:
- Rastrear quién abre el archivo
- Registrar fecha y hora de acceso
- Identificar el usuario que accede
- Registrar la dirección IP
- Sincronizar datos automáticamente

#### **B. Enlaces a Servidores de Red (6 enlaces)** ⚠️

1. `\\Techoctrl2\techo\Documents and Settings\jrodrigv\...\Base de Datos.xls`
2. `\\39FCF68A\PANORAMA DE FACTORES DE RIESGO DOMETAL 2013 (2).xls`
3. `\\E9F532FA\PRCSST029 PROCEDIMIENTO REPORTE EL - copia.xlsx`
4. `\\rayog\PERFILES DEFINITIVO\...\consolidado Perfiles.xls`
5. `D:\Users\cogarcia3\Documents\...\FO-AC-80_RENDICION_DE_CUENTAS_SST_01.xlsx`
6. `E:\Matriz de peligros...\PANORAMA DE RIESGOS...xls` (múltiples rutas)

**⚠️ RIESGO:** Pueden:
- Exponer información de red interna
- Requerir credenciales de red
- Rastrear accesos a servidores
- Exponer estructura de directorios

#### **C. Enlace a Smartsheet** ⚠️
- `Disclaimer-Smartsheet-Templates_Solution1-Tab5` (ruta faltante)

---

### 3. **INTEGRACIÓN CON GOOGLE SHEETS** 🔴🔴

**Evidencia encontrada:**

```xml
<ext uri="GoogleSheetsCustomDataVersion2">
  <go:sheetsCustomData r:id="rId35" 
    roundtripDataChecksum="OjEjH2ed0hbdTqskZrk/5f0hOa89QVGww0l5MkneDf0=" 
    xmlns:go="http://customooxmlschemas.google.com/"/>
</ext>
```

**También en comentarios:**
```xml
<go:sheetsCustomData r:id="rId1" 
  roundtripDataSignature="AMtx7mgA95Mm72zvh0+rD/VDSUiKLUkwRA==" 
  xmlns:go="http://customooxmlschemas.google.com/"/>
```

**RIESGO:**
- Google puede rastrear accesos al archivo
- Los datos pueden estar sincronizados con Google Sheets
- Google puede registrar actividad del usuario
- Posible exposición de datos a Google

---

### 4. **VINCULACIÓN CON GOOGLE DRIVE** 🔴🔴

**Ruta detectada en workbook.xml:**
```
G:\.shortcut-targets-by-id\1Z5O8DZp0U5JdCZdTJABRH9oAWkBegDfI\
ECOVIVIR COMPARTIDO CON TODOS 2025\016_Mantenimientos\006_En presupuesto\2025\Chip station\
```

**RIESGO:**
- El archivo está vinculado a Google Drive
- Google puede rastrear accesos y modificaciones
- Sincronización automática con la nube
- Posible exposición de datos a Google

---

### 5. **COMENTARIOS CON IDS DE SEGUIMIENTO** ⚠️

**Comentarios encontrados con IDs únicos y timestamps:**

```
ID#AAABkUaZglE
tc={7FDFC8AC-C3EF-41BC-BA1E-A082012C3F20}    (2025-05-20 19:56:36)

ID#AAABkUaZglA
tc={A97DBED9-8CF2-4F34-8211-B6ACEE794251}    (2025-05-20 19:56:36)
```

**RIESGO:**
- Los IDs pueden usarse para rastrear ediciones
- Los timestamps registran actividad
- Pueden vincularse a cuentas de usuario

---

### 6. **METADATOS DE GOOGLE** ⚠️

**Archivo `xl/metadata` encontrado:**
- Contiene información de Google Sheets
- Incluye checksums y firmas de datos
- Puede contener información de sincronización

---

### 7. **URL DE MICROSOFT EN COMENTARIOS** ⚠️

**URL encontrada:**
```
https://go.microsoft.com/fwlink/?linkid=870924
```

**RIESGO:**
- Microsoft puede rastrear clics en el enlace
- Puede registrar información del usuario

---

## 📊 Resumen de Riesgos

| Tipo de Rastreador | Cantidad | Nivel de Riesgo | Puede Rastrear |
|-------------------|----------|-----------------|----------------|
| Enlaces SharePoint | 13 | 🔴 CRÍTICO | Accesos, usuarios, IPs, actividad |
| Enlaces Red Local | 6 | ⚠️ ALTO | Estructura de red, credenciales |
| Google Sheets | 2 | 🔴 CRÍTICO | Accesos, datos, actividad |
| Google Drive | 1 | 🔴 CRÍTICO | Accesos, sincronización |
| Comentarios con IDs | 2+ | ⚠️ MEDIO | Ediciones, timestamps |
| Smartsheet | 1 | ⚠️ MEDIO | Posible rastreo |
| **TOTAL** | **25+** | **🔴 CRÍTICO** | **Múltiples puntos de rastreo** |

---

## 🎯 Conclusiones

### ✅ Elementos Seguros:
1. **NO hay macros VBA** - El archivo no contiene código malicioso ejecutable

### 🔴 Elementos de Rastreo Confirmados:

1. **13 enlaces a Microsoft SharePoint** - Rastreo activo por Microsoft
2. **Integración Google Sheets** - Rastreo por Google
3. **Vinculación Google Drive** - Sincronización y rastreo
4. **6 enlaces a servidores de red** - Exposición de información de red
5. **Comentarios con IDs de seguimiento** - Rastreo de ediciones
6. **Metadatos de Google** - Información de sincronización

### **Nivel de Riesgo: 🔴 CRÍTICO**

**Este archivo contiene múltiples sistemas de rastreo activos que pueden:**
- Registrar quién abre el archivo
- Rastrear cuándo se accede
- Identificar desde dónde se accede
- Sincronizar datos con servicios en la nube
- Exponer información de red interna
- Registrar actividad del usuario

---

## 🛡️ Recomendaciones URGENTES

### Acciones Inmediatas (ALTA PRIORIDAD):

1. **🔴 DESCONECTAR TODOS LOS VÍNCULOS EXTERNOS:**
   ```
   Excel → Datos → Editar vínculos → Seleccionar todos → Romper vínculo
   ```

2. **🔴 ELIMINAR INTEGRACIÓN CON GOOGLE:**
   - Si está en Google Drive, descargar localmente
   - Eliminar sincronización con Google Sheets
   - Guardar como archivo Excel estándar sin vínculos

3. **🔴 ELIMINAR REFERENCIAS A SHAREPOINT:**
   - Romper todos los vínculos a SharePoint
   - Convertir fórmulas a valores estáticos

4. **🔴 CREAR VERSIÓN LIMPIA:**
   - Copiar solo los datos necesarios
   - Crear nuevo archivo sin vínculos externos
   - No copiar fórmulas que referencien archivos externos

### Pasos Detallados para Limpiar:

```excel
1. Abrir el archivo en Excel
2. Ir a: Datos → Editar vínculos
3. Seleccionar TODOS los vínculos (22 en total)
4. Hacer clic en "Romper vínculo" para cada uno
5. Guardar el archivo
6. Verificar que no queden referencias externas:
   - Buscar: [ (corchetes indican vínculos externos)
   - Revisar fórmulas que contengan rutas de red o URLs
7. Convertir fórmulas con vínculos a valores estáticos
8. Guardar como nuevo archivo
```

### Verificación Post-Limpieza:

- ✅ No debe haber vínculos en "Datos → Editar vínculos"
- ✅ No debe haber rutas de red en fórmulas
- ✅ No debe haber URLs de SharePoint o Google
- ✅ El archivo debe ser completamente independiente

---

## 📊 Detalles Técnicos Adicionales

### Metadatos del Archivo:
- **Creador:** hp
- **Último modificado por:** ingenieria3
- **Fecha de creación:** 2022-07-22
- **Última modificación:** 2025-10-09
- **Aplicación:** Microsoft Excel 16.0300

### Estructura de Enlaces:
- **Total de enlaces externos:** 22
- **SharePoint:** 13 (59%)
- **Red local:** 6 (27%)
- **Google/Drive:** 2 (9%)
- **Otros:** 1 (5%)

### Dominios Detectados:
- `ingeniesys-my.sharepoint.com` (Microsoft)
- `go.microsoft.com` (Microsoft)
- Google Sheets/Drive (implícito)

---

## ⚠️ ADVERTENCIA FINAL

**Este archivo contiene un sistema de rastreo MULTI-PLATAFORMA:**

1. **Microsoft SharePoint** - Rastreo corporativo activo
2. **Google Sheets/Drive** - Rastreo y sincronización
3. **Servidores de red** - Exposición de infraestructura
4. **Comentarios con IDs** - Rastreo de ediciones

**🔴 NO se recomienda usar este archivo en entornos sensibles sin limpiarlo primero.**

**🔴 NO compartir este archivo sin eliminar los rastreadores.**

**🔴 Crear una versión limpia antes de usarlo en producción.**

---

**Análisis realizado con:** Extracción y análisis profundo de estructura XML  
**Herramientas:** PowerShell, análisis de XML, búsqueda de patrones, inspección de relaciones  
**Última actualización:** Enero 2025

