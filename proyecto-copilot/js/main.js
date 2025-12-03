// Variable global para almacenar los posts
let posts = [];

// Cargar todos los posts al iniciar
document.addEventListener('DOMContentLoaded', function() {
    loadAllPosts();
    loadHome();
});

// Cargar todos los posts desde los archivos JSON
async function loadAllPosts() {
    try {
        for (let i = 1; i <= 3; i++) {
            const response = await fetch(`posts/post${i}.json`);
            const post = await response.json();
            posts.push(post);
        }
    } catch (error) {
        console.error('Error cargando posts:', error);
    }
}

// Mostrar la página de inicio
function loadHome() {
    const content = document.querySelector('.content-vercel');
    let html = '<div class="home">';
    html += '<h1>Arquitectura de Software</h1>';
    html += '<p class="home-subtitle">Explora conceptos, estilos y patrones arquitectónicos modernos en este blog técnico.</p>';
    html += '<div class="posts-grid">';
    
    posts.forEach(post => {
        html += `
            <div class="post-card">
                <h3>${post.title}</h3>
                <p class="post-card-date">📅 ${formatDate(post.date)}</p>
                <p class="post-card-excerpt">${getFirstParagraph(post.content)}</p>
                <button class="post-card-btn" onclick="loadPost(${post.id})">Leer más →</button>
            </div>
        `;
    });
    
    html += '</div></div>';
    content.innerHTML = html;
}

// Cargar y mostrar un post específico
function loadPost(postId) {
    const post = posts.find(p => p.id === postId);
    if (!post) return;
    
    const content = document.querySelector('.content-vercel');
    content.innerHTML = `<div class="post">${post.content}</div>`;
    
    // Scroll al inicio del contenido
    content.scrollIntoView({ behavior: 'smooth' });
}

// Obtener el primer párrafo del contenido HTML
function getFirstParagraph(html) {
    const temp = document.createElement('div');
    temp.innerHTML = html;
    const firstP = temp.querySelector('p');
    if (firstP) {
        let text = firstP.textContent;
        if (text.length > 150) {
            text = text.substring(0, 150) + '...';
        }
        return text;
    }
    return 'Haz clic para leer el artículo completo.';
}

// Formatear fecha
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
}
