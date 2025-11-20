import AdmZip from 'adm-zip';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Función para convertir PPTX a HTML
function convertPPTXToHTML(pptxPath, outputPath) {
    try {
        console.log('Leyendo archivo PPTX...');
        const zip = new AdmZip(pptxPath);
        const zipEntries = zip.getEntries();
        
        let htmlContent = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Plantilla de Cotización - Seijo Air</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Arial', sans-serif;
            background: #f8fafc;
            padding: 2rem;
            color: #374151;
        }
        
        .container {
            max-width: 210mm;
            margin: 0 auto;
            background: white;
            padding: 2rem;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        
        .header {
            border-bottom: 3px solid #1e40af;
            padding-bottom: 1rem;
            margin-bottom: 2rem;
        }
        
        .header h1 {
            color: #1e40af;
            font-size: 2rem;
            margin-bottom: 0.5rem;
        }
        
        .header h2 {
            color: #374151;
            font-size: 1.5rem;
            font-weight: normal;
            margin-bottom: 0.5rem;
        }
        
        .header p {
            color: #6b7280;
            font-size: 0.875rem;
        }
        
        .content {
            margin-top: 2rem;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 1rem 0;
        }
        
        th, td {
            padding: 1rem;
            border: 1px solid #e5e7eb;
            text-align: left;
        }
        
        th {
            background: #f3f4f6;
            font-weight: 600;
            color: #374151;
        }
        
        .summary {
            background: linear-gradient(135deg, #1e40af 0%, #0d9488 100%);
            color: white;
            padding: 2rem;
            border-radius: 0.5rem;
            margin-top: 2rem;
        }
        
        .summary h2 {
            color: white;
            margin-bottom: 1.5rem;
            border-bottom: 2px solid rgba(255,255,255,0.3);
            padding-bottom: 0.5rem;
        }
        
        .summary-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
            margin-bottom: 1.5rem;
        }
        
        .summary-item {
            background: rgba(255,255,255,0.1);
            padding: 1.5rem;
            border-radius: 0.5rem;
        }
        
        .summary-item-label {
            font-size: 0.875rem;
            opacity: 0.9;
            margin-bottom: 0.5rem;
        }
        
        .summary-item-value {
            font-size: 1.5rem;
            font-weight: 700;
        }
        
        .total {
            background: rgba(255,255,255,0.2);
            border: 2px solid rgba(255,255,255,0.5);
        }
        
        .total .summary-item-value {
            font-size: 2rem;
        }
        
        @media print {
            body {
                padding: 0;
                background: white;
            }
            
            .container {
                box-shadow: none;
                padding: 1rem;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Seijo Air</h1>
            <h2>Cotización de Mantenimientos</h2>
            <p>Fecha: <span id="fecha"></span></p>
        </div>
        
        <div class="content">
            <!-- Aquí se insertará el contenido de la presentación -->
            <div id="presentation-content">
`;

        // Buscar archivos de contenido en el PPTX
        const slides = [];
        zipEntries.forEach(entry => {
            if (entry.entryName.startsWith('ppt/slides/slide') && entry.entryName.endsWith('.xml')) {
                try {
                    const content = entry.getData().toString('utf8');
                    slides.push(content);
                } catch (e) {
                    console.log(`Error leyendo slide: ${entry.entryName}`);
                }
            }
        });

        // Extraer texto de los slides
        slides.forEach((slide, index) => {
            // Extraer texto básico del XML
            const textMatches = slide.match(/<a:t[^>]*>([^<]+)<\/a:t>/g);
            if (textMatches) {
                htmlContent += `\n            <h3>Diapositiva ${index + 1}</h3>\n            <div>\n`;
                textMatches.forEach(match => {
                    const text = match.replace(/<[^>]+>/g, '').trim();
                    if (text) {
                        htmlContent += `                <p>${text}</p>\n`;
                    }
                });
                htmlContent += `            </div>\n`;
            }
        });

        htmlContent += `            </div>
        </div>
        
        <!-- Sección de resumen (se llenará dinámicamente) -->
        <div class="summary" id="summary-section" style="display: none;">
            <h2>Resumen de Cotización</h2>
            <div class="summary-grid">
                <div class="summary-item">
                    <div class="summary-item-label">Subtotal (Sin IVA)</div>
                    <div class="summary-item-value" id="subtotal-sin-iva">$0</div>
                </div>
                <div class="summary-item">
                    <div class="summary-item-label">IVA (19%)</div>
                    <div class="summary-item-value" id="iva-total">$0</div>
                </div>
                <div class="summary-item total">
                    <div class="summary-item-label">TOTAL CON IVA</div>
                    <div class="summary-item-value" id="total-con-iva">$0</div>
                </div>
            </div>
        </div>
    </div>
    
    <script>
        // Establecer fecha actual
        document.getElementById('fecha').textContent = new Date().toLocaleDateString('es-CO', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    </script>
</body>
</html>`;

        // Guardar el HTML
        fs.writeFileSync(outputPath, htmlContent, 'utf8');
        console.log(`✅ HTML generado exitosamente: ${outputPath}`);
        console.log(`📊 Se encontraron ${slides.length} diapositivas`);
        
        return htmlContent;
    } catch (error) {
        console.error('❌ Error al convertir PPTX a HTML:', error);
        throw error;
    }
}

// Ejecutar conversión
const pptxFile = path.join(__dirname, 'Cotizacion.HTML.pptx');
const htmlFile = path.join(__dirname, 'public', 'plantilla-cotizacion.html');

// Verificar si existe el archivo PPTX
if (!fs.existsSync(pptxFile)) {
    console.error(`❌ No se encontró el archivo: ${pptxFile}`);
    console.log('📁 Archivos disponibles:');
    fs.readdirSync(__dirname).forEach(file => {
        if (file.endsWith('.pptx')) {
            console.log(`   - ${file}`);
        }
    });
    process.exit(1);
}

// Crear directorio public si no existe
if (!fs.existsSync(path.dirname(htmlFile))) {
    fs.mkdirSync(path.dirname(htmlFile), { recursive: true });
}

console.log('🔄 Iniciando conversión de PPTX a HTML...');
convertPPTXToHTML(pptxFile, htmlFile);
console.log('✨ Conversión completada!');

