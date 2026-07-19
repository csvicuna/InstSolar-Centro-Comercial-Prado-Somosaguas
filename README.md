# Smartfot Energia Solar - Landing Prado de Somosaguas

Sitio estatico (HTML/CSS/JS puro, sin build ni dependencias) para el proyecto
de autoconsumo solar del Centro Comercial Prado de Somosaguas.

## Estructura

- `index.html` - landing principal
- `style.css` - estilos
- `script.js` - menu movil, formulario de contacto (mailto) y banner de cookies
- `aviso-legal.html`, `politica-privacidad.html`, `politica-cookies.html` - paginas legales
- `img/` - favicon y logo

## Subirlo a GitHub

Desde una terminal, dentro de esta carpeta:

```bash
git init
git add .
git commit -m "Landing Smartfot Solar - Prado de Somosaguas"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
git push -u origin main
```

Sustituye `TU-USUARIO/TU-REPO` por el repositorio que crees en GitHub
(boton "New repository" en github.com, sin marcar README/licencia
para no chocar con estos archivos).

## Publicarlo con GitHub Pages

En el repositorio: Settings -> Pages -> Deploy from branch -> `main` / `/(root)`.
La web quedara accesible en `https://TU-USUARIO.github.io/TU-REPO/`.
