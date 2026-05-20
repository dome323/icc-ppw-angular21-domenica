# Proyecto Angular + Tailwind CSS v4 

Este proyecto es una aplicación web desarrollada con **Angular 21** enfocada en la migración de estilos tradicionales hacia **Tailwind CSS v4** mediante componentes Standalone y sistemas de maquetación responsivos (Flexbox y CSS Grid).

---

## Lista de Entregables Completados

### 1. Estructura Base y Configuración
* **`app.html`:** Se eliminó por completo la clase CSS tradicional `.app-shell` y se reestructuró el contenedor `<main>` utilizando puramente utilidades nativas de Tailwind CSS.
* **`app.css`:** Simplificado al máximo. Se removieron todas las reglas antiguas de maquetación, conservando únicamente el bloque estructural `:host`.

### 2. Vistas del Proyecto y UI
* **`home-page.html`:** Se implementó un ritmo vertical controlado usando la clase `space-y-8`. Se presentan los dos botones solicitados para la comparación de estilos: el botón original con la clase `btn-primary` y el botón clonado estilizado en su totalidad con utilidades de Tailwind.
* **`students-page.html`:** La lista tradicional de estudiantes fue migrada y transformada completamente en un sistema de tarjetas (cards) responsivas utilizando propiedades de diseño de Tailwind CSS.
* **`student-detail-page.html`:** Se rediseñó la caja contenedora de detalles del ID del estudiante y el botón de retorno ("Volver"), adaptándolos al nuevo sistema de diseño.

### 3. Página de Distribuciones (Layouts)
La sección `LayoutsPage` se encuentra creada, registrada en el sistema de rutas y estructurada con las 5 secciones base:
1. **Grid de 4 columnas:** Comportamiento responsivo fluido (1 col en móvil → 2 en sm → 4 en lg) con gradientes diagonales y sombras profundas.
2. **Grid con Sidebar:** Distribución asimétrica con columna fija de 240px y un panel central flexible (`minmax(0,1fr)`).
3. **Grid de 3 columnas:** Distribución simétrica usando solo gradientes cálidos sin sombras.
4. **Flex - Carrusel Horizontal:** Contenedor interactivo con scroll lateral (`overflow-x-auto`) adaptado para dispositivos móviles.
5. **Flex - Wrap con Alineación:** Maquetación adaptativa donde las tarjetas saltan de fila automáticamente al quedarse sin espacio en el contenedor.

---

##  9.9 Práctica Adicional: Distribuciones Propias

Explorando la documentación oficial de Tailwind CSS, se añadieron distribuciones adicionales al final de la página de Layouts para profundizar en el control estructural:

### Distribución Adicional 1: Grid Asimétrico (Columna Destacada)
* **Descripción:** Diseñado con un sistema `grid-cols-3` donde el primer elemento ocupa dos columnas (`md:col-span-2`) en pantallas de escritorio. Es ideal para maquetar secciones de noticias principales o tableros de anuncios destacados.
* **Comentario en código:** Incluido en la cabecera del `<article>` correspondiente.
* **Captura de pantalla:**
  ![Grid Asimétrico](assets\02-layout-01.png)

### Distribución Adicional 2: Flexbox Vertical Invertido (Flujo de Chat)
* **Descripción:** Implementación controlada a través de la directiva `flex-col-reverse`. Invierte el orden lógico del DOM haciendo que los elementos se posicionen de abajo hacia arriba. Es el diseño estándar para cajas de chats en tiempo real o registros históricos de auditoría.
* **Comentario en código:** Incluido en la cabecera del `<article>` correspondiente.
* **Captura de pantalla:**
  ![Flexbox Invertido](assets\03-layout-02.png)

