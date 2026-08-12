# GestioPro - Sistema de Gestión de Cursos y Estudiantes

Sistema web académico desarrollado con **React + Vite** para administrar personas, distritos, alumnos, docentes, cursos y matrículas mediante una interfaz CRUD conectada a una API REST.

El frontend está diseñado para trabajar junto con el backend del sistema, disponible actualmente en:

```text
http://localhost:8000
```

---

## Contenido

- [Descripción](#descripción)
- [Tecnologías](#tecnologías)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Ejecución](#ejecución)
- [Build de producción](#build-de-producción)
- [Módulos](#módulos)
- [Sistema de sesión](#sistema-de-sesión)
- [Rutas](#rutas)
- [Comunicación con la API](#comunicación-con-la-api)
- [Alertas](#alertas)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Componentes principales](#componentes-principales)
- [Diseño y estilos](#diseño-y-estilos)
- [Diseño responsive](#diseño-responsive)
- [Historial](#historial)
- [Variables de entorno](#variables-de-entorno)
- [Git](#git)
- [Estado del proyecto](#estado-del-proyecto)
- [Autoría](#autoría)

---

## Descripción

**GestioPro** es una aplicación web para la gestión de información académica.

El sistema permite:

- Iniciar sesión.
- Consultar estadísticas desde el Dashboard.
- Registrar, consultar, editar y eliminar personas.
- Administrar distritos.
- Administrar alumnos.
- Administrar docentes.
- Administrar cursos.
- Gestionar matrículas.
- Consultar el historial de actividades.
- Mostrar alertas de éxito, error, advertencia y confirmación.
- Mostrar fecha y hora actual.
- Utilizar un menú lateral responsive.

---

## Tecnologías

| Tecnología | Uso |
|---|---|
| React | Desarrollo de la interfaz |
| Vite | Herramienta de desarrollo y compilación |
| JavaScript / JSX | Lógica del frontend |
| React Router DOM | Navegación y rutas |
| Axios | Comunicación con la API |
| Bootstrap | Componentes y diseño responsive |
| Bootstrap Icons | Iconos |
| SweetAlert2 | Alertas y confirmaciones |
| CSS | Estilos personalizados |

---

## Requisitos

Antes de ejecutar el proyecto se necesita:

- Node.js
- npm
- Backend del sistema funcionando en `http://localhost:8000`

Comprobar Node.js:

```bash
node --version
```

Comprobar npm:

```bash
npm --version
```

---

## Instalación

Clonar el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
```

Entrar a la carpeta:

```bash
cd GestioEstu
```

Instalar las dependencias:

```bash
npm install
```

---

## Ejecución

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

Vite mostrará una dirección similar a:

```text
http://localhost:5173
```

Abrir esa dirección en el navegador.

El backend debe estar ejecutándose previamente para que las operaciones de consulta y modificación de datos funcionen correctamente.

---

## Build de producción

Para generar la versión de producción:

```bash
npm run build
```

El resultado se genera en:

```text
dist/
```

La carpeta `dist/` es generada automáticamente por Vite y no debe subirse al repositorio si está incluida en `.gitignore`.

También puede comprobarse la compilación mediante:

```text
✓ built
```

Para visualizar localmente el build:

```bash
npm run preview
```

---

## Módulos

### Dashboard

Es la página principal del sistema.

Muestra estadísticas de:

- Personas
- Alumnos
- Docentes
- Cursos
- Distritos
- Matrículas

También proporciona accesos rápidos a los principales módulos y permite consultar actividad reciente del sistema.

---

### Personas

Permite administrar la información personal registrada.

Operaciones:

- Listar personas.
- Registrar personas.
- Editar personas.
- Eliminar personas.

Los módulos de alumnos y docentes utilizan personas como referencia.

---

### Distritos

Permite administrar los distritos disponibles.

Operaciones:

- Listar distritos.
- Registrar distritos.
- Editar distritos.
- Eliminar distritos.

Los distritos son utilizados por el módulo de alumnos.

---

### Alumnos

Permite administrar los alumnos.

Operaciones:

- Listar alumnos.
- Registrar alumnos.
- Editar alumnos.
- Eliminar alumnos.

Cada alumno puede relacionarse con:

- Una persona.
- Un distrito.

---

### Docentes

Permite administrar los docentes.

Operaciones:

- Listar docentes.
- Registrar docentes.
- Editar docentes.
- Eliminar docentes.

Cada docente se relaciona con una persona y contiene su especialidad.

---

### Cursos

Permite administrar los cursos académicos.

Información gestionada:

- Nombre.
- Descripción.
- Créditos.
- Ciclo.
- Horas semanales.
- Docente asignado.

Operaciones:

- Listar cursos.
- Registrar cursos.
- Editar cursos.
- Eliminar cursos.

---

### Matrículas

Permite gestionar las matrículas de los alumnos en los cursos.

Operaciones:

- Consultar matrículas.
- Registrar matrículas.
- Editar matrículas.
- Eliminar matrículas.

El módulo relaciona alumnos y cursos.

---

### Registros

Permite consultar las actividades registradas por el sistema.

Información mostrada:

- Hora.
- Nivel.
- Mensaje.

Los niveles disponibles son:

```text
INFO
WARNING
ERROR
```

También permite:

- Actualizar el historial.
- Limpiar el historial.

---

## Sistema de sesión

El sistema cuenta con una pantalla de Login.

Al iniciar sesión correctamente se almacena información en:

```text
sessionStorage
```

Se utilizan las claves:

```text
sesion
usuario
```

El sistema comprueba que exista una sesión activa antes de permitir el acceso a las rutas protegidas.

Al cerrar sesión:

- Se elimina la sesión.
- Se elimina el usuario almacenado.
- El usuario vuelve al Login.

> El sistema de sesión actual está diseñado para el funcionamiento académico/local del proyecto. No debe considerarse un sistema de autenticación seguro para producción.

---

## Rutas

La aplicación utiliza React Router DOM.

Las rutas principales son:

```text
/login
/dashboard
/personas
/distritos
/alumnos
/docentes
/cursos
/matriculas
/historial
```

Las rutas del sistema están protegidas mediante una ruta protegida que comprueba la sesión activa.

---

## Comunicación con la API

El frontend se comunica con el backend mediante **Axios**.

La API utilizada actualmente es:

```text
http://localhost:8000
```

Los principales endpoints utilizados por el frontend son:

```text
/personas/
/distritos/
/alumnos/
/docentes/
/cursos/
/matriculas/
/logs/
```

Flujo de comunicación:

```text
Frontend React
      │
      │ Axios / HTTP
      ▼
    FastAPI
      │
      ▼
 PostgreSQL
```

El frontend se encarga de la interfaz y las operaciones CRUD, mientras que el backend procesa las solicitudes y administra los datos.

---

## Alertas

El sistema utiliza **SweetAlert2** mediante funciones centralizadas.

Las funciones principales se encuentran en:

```text
src/utils/alertas.js
```

Se utilizan para:

- Confirmar acciones.
- Mostrar operaciones exitosas.
- Mostrar errores.
- Mostrar advertencias.

Las alertas se utilizan en operaciones como:

- Crear registros.
- Actualizar registros.
- Eliminar registros.
- Limpiar el historial.
- Validar campos obligatorios.

---

## Estructura del proyecto

La estructura principal del frontend es:

```text
GestioEstu/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │   └── logo_1.png
│   │
│   ├── components/
│   │   │
│   │   ├── header/
│   │   │   ├── Header.jsx
│   │   │   └── header.css
│   │   │
│   │   └── menu/
│   │       ├── Menu.jsx
│   │       └── menu.css
│   │
│   ├── pages/
│   │   │
│   │   ├── login/
│   │   │   ├── Login.jsx
│   │   │   └── login.css
│   │   │
│   │   ├── dashboard/
│   │   │   ├── Dashboard.jsx
│   │   │   └── dashboard.css
│   │   │
│   │   ├── personas/
│   │   │   ├── Personas.jsx
│   │   │   └── personas.css
│   │   │
│   │   ├── distritos/
│   │   │   ├── Distritos.jsx
│   │   │   └── distritos.css
│   │   │
│   │   ├── alumnos/
│   │   │   ├── Alumnos.jsx
│   │   │   └── alumnos.css
│   │   │
│   │   ├── docentes/
│   │   │   ├── Docentes.jsx
│   │   │   └── docentes.css
│   │   │
│   │   ├── cursos/
│   │   │   ├── Cursos.jsx
│   │   │   └── cursos.css
│   │   │
│   │   ├── matriculas/
│   │   │   ├── Matriculas.jsx
│   │   │   └── matriculas.css
│   │   │
│   │   └── registros/
│   │       ├── Registros.jsx
│   │       └── registros.css
│   │
│   ├── utils/
│   │   └── alertas.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## Componentes principales

### `App.jsx`

Controla la estructura principal del sistema, la navegación y las rutas protegidas.

También integra:

- Menú lateral.
- Header.
- Páginas del sistema.
- Cierre de sesión.

---

### `Header.jsx`

Muestra:

- Nombre del sistema.
- Descripción.
- Hora actual.
- Fecha actual.

La fecha y hora se actualizan automáticamente.

---

### `Menu.jsx`

Contiene:

- Logo.
- Menú de navegación.
- Estado activo.
- Botón de cierre de sesión.
- Diseño responsive.
- Menú hamburguesa para pantallas pequeñas.

---

### `Login.jsx`

Gestiona:

- Usuario.
- Contraseña.
- Validación.
- Inicio de sesión.
- Mensajes de error.
- Creación de la sesión.

---

## Diseño y estilos

El proyecto utiliza **Bootstrap** como base para:

- Grid responsive.
- Formularios.
- Tablas.
- Botones.
- Tarjetas.
- Badges.
- Utilidades de espaciado.

También se utilizan archivos CSS personalizados para cada módulo.

El diseño utiliza principalmente:

- Azul institucional.
- Fondos claros.
- Tarjetas blancas.
- Bordes suaves.
- Sombras ligeras.
- Diseño responsive.

---

## Diseño responsive

La interfaz está preparada para diferentes tamaños de pantalla.

### Escritorio

- Menú lateral visible.
- Contenido principal amplio.
- Distribución completa de los módulos.

### Tablet y celular

- Menú lateral oculto.
- Botón hamburguesa.
- Overlay para cerrar el menú.
- Contenido adaptado al ancho disponible.
- Tablas con desplazamiento horizontal cuando es necesario.

---

## Historial

El módulo de registros permite consultar las actividades realizadas por el sistema.

Los registros se obtienen desde:

```text
GET /logs/
```

Para limpiar el historial:

```text
DELETE /logs/
```

Cada registro puede mostrar:

```text
Hora
Nivel
Mensaje
```

Los niveles disponibles son:

```text
INFO
WARNING
ERROR
```

El Dashboard también puede mostrar actividad reciente obtenida desde estos registros.

---

## Variables de entorno

Actualmente el frontend **no utiliza variables de entorno**.

La conexión con el backend utiliza actualmente:

```text
http://localhost:8000
```

Si posteriormente se desea utilizar variables de entorno con Vite, puede utilizarse una configuración como:

```text
VITE_API_URL=http://localhost:8000
```

Esto permitiría cambiar la dirección del backend sin modificar directamente los componentes.

---

## `.gitignore`

El proyecto utiliza un `.gitignore` para evitar subir archivos innecesarios.

Entre los principales elementos ignorados se encuentran:

```text
node_modules/
dist/
dist-ssr/
*.local
.vscode/
.idea/
.DS_Store
```

`node_modules/` no debe subirse al repositorio.

La carpeta `dist/` tampoco debe subirse, ya que Vite la genera mediante:

```bash
npm run build
```

El archivo `package-lock.json` sí debe mantenerse en el repositorio.

---

## Comandos principales

Instalar dependencias:

```bash
npm install
```

Iniciar el entorno de desarrollo:

```bash
npm run dev
```

Generar build de producción:

```bash
npm run build
```

Previsualizar el build:

```bash
npm run preview
```

---

## Flujo de trabajo

Para ejecutar correctamente el sistema:

### 1. Iniciar el backend

El backend debe estar disponible en:

```text
http://localhost:8000
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Iniciar el frontend

```bash
npm run dev
```

### 4. Abrir la aplicación

Vite mostrará una dirección similar a:

```text
http://localhost:5173
```

### 5. Iniciar sesión

Ingresar mediante la pantalla de Login.

### 6. Utilizar el Dashboard

Desde el Dashboard se puede acceder a los diferentes módulos.

### 7. Gestionar información

Realizar operaciones CRUD en:

- Personas.
- Distritos.
- Alumnos.
- Docentes.
- Cursos.
- Matrículas.

### 8. Revisar el historial

Consultar las actividades registradas en el módulo de Registros.

---

## Git

Inicializar el repositorio:

```bash
git init
```

Comprobar los archivos:

```bash
git status
```

Agregar archivos:

```bash
git add .
```

Crear un commit:

```bash
git commit -m "Proyecto GestioPro"
```

Agregar el repositorio remoto:

```bash
git remote add origin <URL_DEL_REPOSITORIO>
```

Establecer la rama principal:

```bash
git branch -M main
```

Subir el proyecto:

```bash
git push -u origin main
```

---

## Estado del proyecto

Actualmente el frontend cuenta con:

- [x] Login
- [x] Control de sesión
- [x] Rutas protegidas
- [x] Dashboard
- [x] Estadísticas
- [x] Accesos rápidos
- [x] Header
- [x] Menú lateral responsive
- [x] Personas
- [x] Distritos
- [x] Alumnos
- [x] Docentes
- [x] Cursos
- [x] Matrículas
- [x] Registros
- [x] Operaciones CRUD
- [x] Alertas
- [x] Diseño responsive
- [x] Bootstrap
- [x] Bootstrap Icons
- [x] Axios
- [x] SweetAlert2
- [x] Compilación mediante Vite

---

## Consideraciones

- El frontend necesita que el backend esté activo para realizar las operaciones sobre los datos.
- La URL actual del backend es local.
- `node_modules/` no debe subirse al repositorio.
- `dist/` no debe subirse al repositorio.
- `package-lock.json` debe mantenerse.
- El sistema de sesión actual está pensado para un entorno académico/local.
- Para producción se recomienda implementar autenticación y autorización en el backend.
- Para producción se recomienda utilizar variables de entorno para la URL de la API.

---

## Autoría

**GestioPro**

Sistema de Gestión de Cursos y Estudiantes.

Proyecto académico desarrollado con React y Vite.
