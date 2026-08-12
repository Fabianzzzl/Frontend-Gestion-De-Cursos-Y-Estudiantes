
---

# README DEL FRONTEND

```markdown
# Sistema de Gestión de Cursos y Estudiantes - Frontend

Interfaz web del Sistema de Gestión de Cursos y Estudiantes.

El frontend permite interactuar con el backend mediante una interfaz gráfica desarrollada con React.

El sistema permite administrar personas, distritos, alumnos, docentes, cursos y matrículas, además de consultar el historial de actividades realizadas.

## Descripción

La aplicación proporciona una interfaz web para realizar las operaciones del sistema académico.

Desde el frontend se pueden realizar operaciones como:

- Registrar información
- Consultar registros
- Buscar información
- Editar registros
- Eliminar registros
- Consultar información por ID
- Consultar el historial del sistema
- Cerrar sesión
- Mostrar alertas y confirmaciones

La aplicación se comunica con el backend mediante una API REST.

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- Bootstrap
- Bootstrap Icons
- React Router DOM
- SweetAlert2
- Axios

## Estructura del proyecto

```text
GestionEstudiante/
│
├── public/
│
├── src/
│   │
│   ├── api/
│   │   └── axios.js
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── busqueda/
│   │   │   ├── Busqueda.jsx
│   │   │   └── busqueda.css
│   │   │
│   │   ├── header/
│   │   │   ├── Header.jsx
│   │   │   └── header.css
│   │   │
│   │   └── menu/
│   │       ├── Menu.jsx
│   │       └── menu.css
│   │
│   ├── config/
│   │   └── auth.js
│   │
│   ├── pages/
│   │   ├── alumnos/
│   │   ├── cursos/
│   │   ├── dashboard/
│   │   ├── distritos/
│   │   ├── docentes/
│   │   ├── login/
│   │   ├── matriculas/
│   │   ├── personas/
│   │   └── registros/
│   │
│   ├── utils/
│   │   └── alertas.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
