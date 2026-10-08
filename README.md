# Presentación Web: Arcillas

Presentación web interactiva estilo PowerPoint desarrollada con **React**, **Vite**, **Tailwind CSS** y **Framer Motion**.

## 🎨 Características

- **Sin Interfaz Visible**: Experiencia inmersiva 100% limpia sin botones molestos ni barras de scroll.
- **Navegación tipo PowerPoint**:
  - **Avanzar**: `Click Izquierdo`, `Flecha Derecha`, `Barra Espaciadora`, `Enter` o `PageDown`.
  - **Retroceder**: `Click Derecho`, `Flecha Izquierda`, `Backspace` o `PageUp`.
  - **Pantalla Completa**: Presiona `F` para activar/desactivar modo pantalla completa.
  - **Panel de Ayuda**: Presiona `H` o `?`.
  - **Gestos Táctiles**: Desliza a izquierda o derecha en pantallas táctiles / móviles.
- **Dark Theme Minimalista**: Paleta oscura profunda, tipografía refinada, efectos glassmorphism y suaves transiciones direccionales con Framer Motion.
- **Uso Total de Imágenes**: Todas las imágenes de estructuras atómicas, procesos de baldosas, procesos de ladrillos y estadísticas mineras locales están integradas con sus respectivos epígrafes y parámetros técnicos.
- **Lista para GitHub Pages**: Configurada con rutas relativas (`base: './'`), script de despliegue con `gh-pages` y GitHub Actions workflow automático.

---

## 🚀 Inicio Rápido (Desarrollo Local)

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

3. Abrir la URL mostrada en consola (por defecto `http://localhost:5173`).

---

## 📦 Compilación para Producción

Para compilar el proyecto estático listo para distribución:

```bash
npm run build
```

Los archivos generados se ubicarán en la carpeta `dist/`.

---

## 🌐 Despliegue en GitHub Pages

### Opción A: Despliegue Automático con GitHub Actions (Recomendado)
Al subir este repositorio a GitHub en la rama `main` o `master`:
1. Ve a **Settings** > **Pages** en tu repositorio de GitHub.
2. En **Build and deployment > Source**, selecciona **GitHub Actions**.
3. Cada push desplegará automáticamente la presentación.

### Opción B: Despliegue Manual mediante CLI
```bash
npm run deploy
```

---

## 👥 Integrantes
- Aguilar
- Guimarey
- Gil
