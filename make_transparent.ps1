$source = @"
using System;
using System.Drawing;
using System.Drawing.Imaging;

public class ImageProcessor {
    public static void ProcessImage(string inputPath, string outputPath, int thresholdMin, int thresholdMax) {
        using (Bitmap img = (Bitmap)Image.FromFile(inputPath)) {
            int width = img.Width;
            int height = img.Height;
            using (Bitmap newImg = new Bitmap(width, height)) {
                for (int x = 0; x < width; x++) {
                    for (int y = 0; y < height; y++) {
                        Color pixel = img.GetPixel(x, y);
                        int r = pixel.R;
                        int g = pixel.G;
                        int b = pixel.B;
                        
                        int brightness = Math.Max(r, Math.Max(g, b));
                        
                        if (brightness <= thresholdMin) {
                            newImg.SetPixel(x, y, Color.FromArgb(0, 0, 0, 0));
                        } else if (brightness < thresholdMax) {
                            double ratio = (double)(brightness - thresholdMin) / (thresholdMax - thresholdMin);
                            int alpha = (int)(ratio * 255);
                            newImg.SetPixel(x, y, Color.FromArgb(alpha, r, g, b));
                        } else {
                            newImg.SetPixel(x, y, pixel);
                        }
                    }
                }
                newImg.Save(outputPath, ImageFormat.Png);
            }
        }
    }
}
"@

Add-Type -TypeDefinition $source -ReferencedAssemblies System.Drawing

$originalPath = "C:\Users\marke\.gemini\antigravity\scratch\syntheticdigitallabs-web\public\assets\nova_avatar.png"
$tempPath = "C:\Users\marke\.gemini\antigravity\scratch\syntheticdigitallabs-web\public\assets\nova_avatar_temp.png"

Write-Output "Iniciando procesamiento rápido en C# para transparencia de avatar..."

if (-not (Test-Path $originalPath)) {
    Write-Error "No se encontró la imagen original en $originalPath"
    exit 1
}

# Ejecutar procesador compilado nativamente (toma menos de 100ms)
[ImageProcessor]::ProcessImage($originalPath, $tempPath, 10, 38)

# Sobrescribir el archivo original
Remove-Item $originalPath -Force
Rename-Item -Path $tempPath -NewName "nova_avatar.png" -Force

Write-Output "¡Procesamiento completado con éxito mediante C# compilado!"
