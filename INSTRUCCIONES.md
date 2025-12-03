## 🚀 INSTRUCCIONES PARA DESPLEGAR EN GITHUB PAGES

### ✅ Lo que ya está hecho:

1. ✅ Blog técnico completo creado
2. ✅ 3 Posts sobre Arquitectura de Software
3. ✅ Estilos CSS modernos y responsivos
4. ✅ Navegación dinámica con JavaScript
5. ✅ README.md con documentación completa
6. ✅ .gitignore configurado
7. ✅ _config.yml para GitHub Pages

### 📂 Archivos del Proyecto:

```
proyecto-copilot/
├── index.html              # Página principal (¡Ábreme en el navegador!)
├── css/
│   └── styles.css          # Estilos personalizados
├── js/
│   └── main.js             # Lógica de carga de posts
├── posts/
│   ├── post1.json          # POST 1: ¿Qué es Arquitectura de Software?
│   ├── post2.json          # POST 2: Estilos Arquitectónicos
│   └── post3.json          # POST 3: Patrones Arquitectónicos Modernos
├── README.md               # Documentación del proyecto
├── .gitignore              # Archivos a ignorar
├── _config.yml             # Configuración GitHub Pages
└── INSTRUCCIONES.md        # Este archivo
```

### 🌐 PASO 1: Ver el Blog Localmente

```bash
# Simplemente abre este archivo en tu navegador:
index.html
```

### 📤 PASO 2: Hacer Push a GitHub (Desde PowerShell)

```powershell
cd "d:\Mis Documentos No Borrar\EBER\Documents\UNINCCA\CUATRIMESTRE 2025-3\ELECTIVA I EN INGENIERIA DE SOFTWARE\CORTE 3\proyecto-copilot"

# Ver estado actual
git status

# Agregar todos los cambios
git add .

# Hacer commit
git commit -m "Blog Técnico: Arquitectura de Software - 3 Posts completos por Eber Rincón"

# Hacer push (si ya está configurado el remote)
git push origin main
```

### ⚙️ PASO 3: Configurar GitHub Pages

1. Ve a: https://github.com/eerinconr-dot/proyecto-copilot
2. Haz clic en **Settings** (Configuración)
3. En el menú izquierdo, busca **Pages**
4. Bajo "Build and deployment":
   - **Source**: Selecciona "Deploy from a branch"
   - **Branch**: Selecciona "main"
   - **Folder**: Selecciona "/ (root)"
5. Haz clic en **Save**

### 🎉 PASO 4: Tu Blog Estará en Vivo

Dentro de 1-2 minutos, tu blog estará disponible en:

```
https://eerinconr-dot.github.io/proyecto-copilot
```

### 📝 CONTENIDO DEL BLOG

#### POST 1: ¿Qué es la Arquitectura de Software?
- Definición y objetivos
- Componentes: Módulos, Interfaces, Conectores
- Importancia: Escalabilidad, Mantenibilidad, Rendimiento
- Roles del Arquitecto
- Ejemplos reales

#### POST 2: Estilos Arquitectónicos
- Monolítico
- N-Capas
- Cliente-Servidor
- MVC
- Microservicios
- Tabla comparativa

#### POST 3: Patrones Modernos
- Clean Architecture
- Arquitectura Hexagonal
- CQRS
- Comparación detallada
- Ejemplos de aplicación

### 🎨 CARACTERÍSTICAS DEL BLOG

✨ Diseño responsivo (móvil, tablet, desktop)
✨ Navegación intuitiva con menu sticky
✨ Carga dinámica de posts sin recargar
✨ Tablas comparativas interactivas
✨ Cajas de ventajas/desventajas coloreadas
✨ Estilos modernos con gradientes
✨ Conclusiones destacadas
✨ 100% sin dependencias externas

### 🔧 TECNOLOGÍAS

- HTML5 semántico
- CSS3 con Flexbox y Grid
- JavaScript ES6+ (fetch API)
- JSON para almacenamiento de posts

### ⚠️ TROUBLESHOOTING

**"Git no se reconoce"**
→ Necesitas instalar Git: https://git-scm.com

**"Permission denied"**
→ Asegúrate de tener permisos en el repositorio
→ Genera un Personal Access Token si lo necesitas

**"El blog no aparece en GitHub Pages"**
→ Espera 2-3 minutos
→ Verifica en Settings > Pages que esté enabled
→ El nombre debe ser: proyecto-copilot

### 📧 AUTOR

**Eber Rincón**
Electiva I en Ingeniería de Software - UNINCCA - 2024

---

¡Tu blog técnico sobre Arquitectura de Software está listo! 🚀
