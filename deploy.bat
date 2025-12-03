@echo off
REM Script para configurar y hacer push al repositorio

echo ===================================
echo Blog Tecnico - Arquitectura de Software
echo ===================================
echo.

REM Inicializar git si es necesario
if not exist .git (
    echo Inicializando repositorio Git...
    git init
)

REM Agregar archivos
echo.
echo Agregando archivos...
git add .

REM Hacer commit
echo.
echo Creando commit...
git commit -m "Blog Tecnico - Arquitectura de Software: POST 1, POST 2, POST 3"

REM Mostrar estado
echo.
echo Estado del repositorio:
git status

echo.
echo ===================================
echo SIGUIENTE PASO:
echo 1. Ve a https://github.com/eerinconr-dot/proyecto-copilot
echo 2. Ve a Settings > Pages
echo 3. Selecciona 'main' como rama
echo 4. Selecciona '/ (root)' como carpeta
echo 5. Guarda los cambios
echo.
echo Tu blog estara disponible en:
echo https://eerinconr-dot.github.io/proyecto-copilot
echo ===================================
pause
