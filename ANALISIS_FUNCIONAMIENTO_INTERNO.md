# ANÁLISIS DEL FUNCIONAMIENTO INTERNO
## MATRIZ COSTEO MANTENIMIENTOS CHIP STATION

### 📊 ESTRUCTURA GENERAL DEL ARCHIVO

El archivo Excel contiene **8 hojas de cálculo** organizadas de la siguiente manera:

1. **DATOS INICIALES** (sheet1.xml) - Hoja de entrada de datos base
2. **DATA PERSONAL** (sheet2.xml) - Datos de personal y nómina (OCULTA)
3. **SALARIOS** (sheet3.xml) - Cálculos de costos salariales
4. **TRANSPORTES** (sheet4.xml) - Costos de transporte y logística
5. **MATRIZ VENTA** (sheet6.xml) - Matriz principal de cálculo de ventas
6. **DATOS INSU** (sheet5.xml) - Datos de insumos y materiales
7. **Oferta** (sheet7.xml) - Hoja de presentación de oferta final
8. **Hoja1** (sheet8.xml) - Hoja auxiliar

---

## 🔄 FLUJO DE DATOS Y RELACIONES ENTRE HOJAS

### Diagrama de Dependencias:

```
DATOS INICIALES (Entrada Principal)
    ├──> MATRIZ VENTA
    ├──> DATOS INSU
    └──> Oferta

DATA PERSONAL (Datos de Personal)
    └──> SALARIOS

SALARIOS
    └──> MATRIZ VENTA

DATOS INSU
    └──> MATRIZ VENTA

TRANSPORTES
    └──> (Independiente, posiblemente usado en MATRIZ VENTA)

MATRIZ VENTA (Núcleo de Cálculos)
    └──> Oferta (Resultado Final)
```

---

## 📐 ANÁLISIS DETALLADO POR HOJA

### 1. DATOS INICIALES (9 fórmulas)

**Propósito:** Hoja de entrada de datos iniciales del proyecto

**Fórmulas Principales:**
- `C13*1`, `C14*2`, `C15*3` - Multiplicación de celdas equivalentes
- `SUM(D13:D15)` - Suma de totales
- `SUM(C19:C20)` - Suma de cantidades
- `+(0.35+0.35+0.35+0.35)*2` - Cálculo de dimensiones de ductos
- `+(0.76+0.76+0.76+0.76)*60` - Cálculo de dimensiones de campanas
- `+H22/H21` - División para cálculo de ratios
- `SUM(E25:E29)` - Suma de totales

**Variables Clave:**
- Cantidad de equipos
- Dimensiones (ductos, campanas)
- Total de celdas equivalentes

**Salidas:**
- Referencias a `MATRIZ VENTA`
- Referencias a `DATOS INSU`
- Referencias a `Oferta`

---

### 2. DATA PERSONAL (27 fórmulas) - HOJA OCULTA

**Propósito:** Cálculo de costos de personal y prestaciones

**Fórmulas Principales:**
- `SUM(B3:D3)` - Suma de conceptos salariales
- `E3/B71` - Cálculo de días laborales
- `F3/7.2` - Conversión de días a horas (7.2 horas/día)
- `(F11/B$71)/7.2` - Cálculo de horas trabajadas
- `SUM(F11:F13)` - Suma de horas totales
- `E18/C18*D18` - Cálculo proporcional
- `(E33+F33)/C33` - Cálculo de promedios
- `SUM(G33:G51)` - Suma de costos totales

**Variables Clave:**
- `B71` - Días laborales totales (referencia fija)
- `7.2` - Horas laborales por día (constante)
- Salarios base
- Prestaciones sociales

**Salidas:**
- Referencias a `SALARIOS` (F3, G14, H52)

---

### 3. SALARIOS (44 fórmulas)

**Propósito:** Cálculo detallado de costos salariales por nivel

**Fórmulas Principales:**
- `+'DATA PERSONAL'!F3+('DATA PERSONAL'!G14*7.2)+('DATA PERSONAL'!H52*7.2)` - Cálculo de salario total con horas extras
- `+C5/7.2` - Conversión de salario a costo por hora
- `$D$5*C20` - Multiplicación de costo hora por factor
- `+(E5+E11)*$Q$11` - Cálculo de prestaciones

**Variables Clave:**
- `$D$5`, `$D$6`, `$D$7` - Costos por hora (referencias absolutas)
- `$Q$11` - Factor de prestaciones (referencia absoluta)
- `C20`, `D20`, `E20`, `F20` - Factores de multiplicación

**Niveles de Personal:**
- Operario 1
- Operario 2
- Ingeniero

**Salidas:**
- Referencias a `MATRIZ VENTA` (K11, K12, K13, L11, L12, L13, M11, M12, M13)

---

### 4. TRANSPORTES (10 fórmulas)

**Propósito:** Cálculo de costos de transporte y alquiler de equipos

**Fórmulas Principales:**
- `+B3*B4` - Multiplicación de cantidad por precio unitario
- `+E3*E4` - Cálculo de costos de transporte
- `N3*N4` - Cálculo de rodamientos
- `IF(H3="si",H4*H5,0)` - Cálculo condicional de alquiler de andamio
- `IF(K3="si",K4*K5,0)` - Cálculo condicional de alquiler de escalera
- `+B5+B9` - Suma de subtotales
- `+E5+H6+K6+N5+E9+N9` - Suma total de transportes

**Variables Clave:**
- `H3`, `K3` - Condiciones booleanas ("si"/"no")
- `B3`, `E3`, `N3` - Cantidades
- `B4`, `E4`, `N4` - Precios unitarios

**Lógica Condicional:**
- Si se alquila andamio → calcular costo
- Si se alquila escalera → calcular costo
- Si no → costo = 0

---

### 5. DATOS INSU (93 fórmulas) - LA MÁS COMPLEJA

**Propósito:** Cálculo de costos de insumos y materiales

**Fórmulas Principales:**
- `+D5/B5` - Cálculo de costo por unidad de medida
- `'DATOS INICIALES'!$D$16*B17` - Multiplicación de factor por cantidad
- `E17*(1+D17)` - Aplicación de factor de seguridad
- `F17*E5` - Cálculo de costo total por insumo

**Variables Clave:**
- `'DATOS INICIALES'!$D$16` - Factor de seguridad (referencia absoluta)
- `D17`, `D18`, etc. - Factores de seguridad por insumo
- `E5`, `E6`, etc. - Costos unitarios

**Tipos de Insumos:**
- Desincrustante
- Desengrasante
- Estopa
- Toallas
- Bolsas
- Grasa lubricación
- Otros

**Cálculos por Equipo:**
- Precipitadores
- Ventiladores
- Campanas
- Ductos

**Salidas:**
- Referencias a `MATRIZ VENTA` (H22, H39, H54, J72)

---

### 6. MATRIZ VENTA (38 fórmulas) - NÚCLEO DEL SISTEMA

**Propósito:** Matriz principal que consolida todos los costos y calcula precios de venta

**Fórmulas Principales:**
- `IF('DATOS INICIALES'!D2="","",'DATOS INICIALES'!D2)` - Validación condicional de datos
- `SALARIOS!K11+SALARIOS!K12` - Suma de costos salariales (Operario 1 + Operario 2)
- `SALARIOS!K13` - Costo salarial de Ingeniero
- `'DATOS INSU'!H22` - Costo de insumos para precipitador
- `'DATOS INSU'!J72` - Otros costos de insumos
- `SUM(E3:E8)*5%` - Cálculo de imprevistos (5%)
- `SUM(E4:E9)*5%` - Cálculo de imprevistos alternativo
- `SUM(E4:E10)` - Suma total de costos

**Estructura de Cálculo:**

Para cada tipo de mantenimiento (Precipitador, Ventilador, Campana, Ducto):

1. **Mano de Obra:**
   - Operario 1 + Operario 2 (de SALARIOS)
   - Ingeniero (de SALARIOS)

2. **Insumos:**
   - Costos de insumos (de DATOS INSU)

3. **Imprevistos:**
   - 5% del subtotal

4. **Total:**
   - Suma de todos los componentes

**Salidas:**
- Referencias a `Oferta` (E11, E22, E33, E44, E49, E50, E51, E52)

---

### 7. Oferta (25 fórmulas) - RESULTADO FINAL

**Propósito:** Presentación de la oferta comercial con precios finales

**Fórmulas Principales:**
- `SUM('DATOS INICIALES'!C13:C15)` - Suma de cantidades de equipos
- `IFERROR(F5/C5,0)` - Cálculo de precio unitario con manejo de errores
- `+'MATRIZ VENTA'!$E$11` - Precio de venta de precipitador
- `+G5/(1-J5)` - Cálculo de precio con margen de utilidad
- `H5-G5` - Cálculo de utilidad
- `SUM(F5:F10)` - Suma total antes de IVA
- `SUM(G5:G10)` - Suma de costos

**Estructura de Precios:**

Para cada servicio:
- **Cantidad (C):** De DATOS INICIALES
- **Costo Unitario (E):** F/C (con manejo de errores)
- **Costo Total (F):** De MATRIZ VENTA
- **Precio de Venta (G):** De MATRIZ VENTA
- **Precio con Utilidad (H):** G/(1-J) donde J es el % de utilidad
- **Utilidad (I):** H-G
- **% Utilidad (J):** Variable (25%, 30%, 35%, 0%)

**Tipos de Servicios:**
1. Precipitador (J5 = 25%)
2. Ventilador (J6 = 35%)
3. Campana (J7 = 30%)
4. Ducto (J8 = 35%)
5. Otros (J9 = 0%)
6. Logística (J10 = 0%)

**Cálculos Finales:**
- `+F11*19%` - IVA (19%)
- `+F11+F12` - TOTAL CON IVA

---

## 🔢 VARIABLES Y PARÁMETROS CLAVE

### Constantes del Sistema:
- **7.2** - Horas laborales por día
- **19%** - IVA
- **5%** - Factor de imprevistos
- **25%, 30%, 35%** - Margen de utilidad por tipo de servicio

### Referencias Absolutas Importantes:
- `$D$5`, `$D$6`, `$D$7` - Costos por hora de personal
- `$Q$11` - Factor de prestaciones sociales
- `'DATOS INICIALES'!$D$16` - Factor de seguridad para insumos
- `'MATRIZ VENTA'!$E$11` - Precio base de precipitador

### Variables de Entrada (DATOS INICIALES):
- Cantidad de equipos
- Tipo de precipitador
- Cantidad de celdas
- Dimensiones de ductos y campanas
- Frecuencia de mantenimiento
- Tipo de acceso

---

## 📈 LÓGICA DE CÁLCULO

### Flujo Completo:

1. **ENTRADA (DATOS INICIALES):**
   - Usuario ingresa cantidad de equipos, dimensiones, frecuencias

2. **CÁLCULO DE PERSONAL (DATA PERSONAL → SALARIOS):**
   - Se calculan costos salariales por nivel
   - Se incluyen prestaciones sociales
   - Se convierte a costo por hora

3. **CÁLCULO DE INSUMOS (DATOS INSU):**
   - Se calculan consumos por tipo de equipo
   - Se aplican factores de seguridad
   - Se calculan costos totales

4. **CONSOLIDACIÓN (MATRIZ VENTA):**
   - Se suman: Mano de obra + Insumos
   - Se agrega 5% de imprevistos
   - Se calcula costo total por servicio

5. **PRECIO DE VENTA (Oferta):**
   - Se toma el costo de MATRIZ VENTA
   - Se aplica margen de utilidad
   - Se calcula precio unitario
   - Se suma IVA (19%)
   - Se presenta TOTAL FINAL

---

## 🎯 PUNTOS CRÍTICOS DEL SISTEMA

### 1. Dependencias Externas:
- **22 enlaces externos** a SharePoint/Google Drive
- Riesgo: Si se rompen los enlaces, el archivo puede fallar

### 2. Referencias Absolutas:
- Muchas referencias absolutas (`$D$5`, `$Q$11`)
- Ventaja: Estabilidad en copias
- Desventaja: Dificulta modificación de estructura

### 3. Validaciones:
- Uso de `IFERROR` para evitar errores de división por cero
- Validación condicional en MATRIZ VENTA

### 4. Factores de Seguridad:
- Factor de seguridad en insumos (DATOS INICIALES!$D$16)
- Factor de imprevistos (5%)
- Factores de uso/mes para depreciación

---

## 🔍 FÓRMULAS MÁS COMPLEJAS

### 1. Cálculo de Salario Total:
```
'DATA PERSONAL'!F3 + ('DATA PERSONAL'!G14*7.2) + ('DATA PERSONAL'!H52*7.2)
```
- Salario base + (Horas extras 1 * 7.2) + (Horas extras 2 * 7.2)

### 2. Precio con Utilidad:
```
G5/(1-J5)
```
- Si J5 = 25% (0.25), entonces: G5/(1-0.25) = G5/0.75 = G5 * 1.333
- Esto aplica un margen del 33.33% sobre el costo

### 3. Costo con Factor de Seguridad:
```
E17*(1+D17)
```
- Si D17 = 0.1 (10%), entonces: E17 * 1.1 = E17 + 10%

### 4. Cálculo Condicional de Alquiler:
```
IF(H3="si",H4*H5,0)
```
- Si se alquila → calcular costo
- Si no → costo = 0

---

## 📊 RESUMEN DE FÓRMULAS POR HOJA

| Hoja | Fórmulas | Complejidad | Función Principal |
|------|----------|-------------|-------------------|
| DATOS INICIALES | 9 | Baja | Entrada de datos |
| DATA PERSONAL | 27 | Media | Cálculo de personal |
| SALARIOS | 44 | Alta | Costos salariales |
| TRANSPORTES | 10 | Media | Costos de transporte |
| DATOS INSU | 93 | Muy Alta | Costos de insumos |
| MATRIZ VENTA | 38 | Alta | Consolidación |
| Oferta | 25 | Media | Precio final |
| Hoja1 | 1 | Baja | Auxiliar |

**Total: 247 fórmulas**

---

## ⚠️ RECOMENDACIONES

1. **Documentar todas las constantes** (7.2, 19%, 5%, etc.)
2. **Validar referencias externas** antes de usar
3. **Revisar factores de seguridad** periódicamente
4. **Backup antes de modificar** referencias absolutas
5. **Probar con datos de prueba** antes de usar en producción

---

## 🔗 DEPENDENCIAS CRÍTICAS

- **DATOS INICIALES** → Base de todo el sistema
- **SALARIOS** → Depende de DATA PERSONAL
- **MATRIZ VENTA** → Depende de SALARIOS y DATOS INSU
- **Oferta** → Depende de MATRIZ VENTA y DATOS INICIALES

**Orden de cálculo recomendado:**
1. DATOS INICIALES
2. DATA PERSONAL
3. SALARIOS
4. DATOS INSU
5. TRANSPORTES
6. MATRIZ VENTA
7. Oferta

---

*Análisis realizado el: $(Get-Date -Format "yyyy-MM-dd HH:mm:ss")*

