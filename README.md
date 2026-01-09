### Readme disponible en inglés y español | Readme available in English and Spanish.
### Desarrollado por Yariel Zamora del Cueto | Developed by Yariel Zamora del Cueto 
---

# 🎨 ImpostAPI | Frontend Dashboard

> **"The interface to manage your lies."**

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

**ImpostAPI Frontend** is the visual control panel for interacting with the [ImpostAPI Backend](https://github.com/YarielZC/impostapi-back) engine. Forget about manually inserting data into the database or using cURL; this interface allows you to create, edit, and manage your simulated endpoints (Mocks) intuitively and quickly.

---

## ✨ Features
#### Dashboard
The dashboard allows developers and QAs to:

- **📝 Visual Endpoint Management:** Create, edit, and delete your mock routes (`/mock/my-route`) without touching code.
- **⚡ Latency Configuration:** Define visual sliders to simulate "lag" or slow loading times on specific responses.
- **🎨 Integrated JSON Editor:** Write the response body with syntax highlighting and JSON format validation.
- **🚦 HTTP Status Control:** Dropdown selector to force 200, 404, 500, etc., responses with a single click.
- **🔍 Search & Filters:** Quickly find that specific mock among dozens of definitions.

---

## 🛠️ Tech Stack

- **UI Library:** React (via Vite)
- **Styles:** TailwindCSS / ShadcnUI
- **State Management:** React Context
- **Code Editor:** VSCode
- **Language:** TypeScript / JavaScript

---

## 🚀 Installation and Usage

### Prerequisites
- Node.js (v18 or higher)
- Have the **ImpostAPI Backend** running locally or on a remote server.

### 1. Clone the repository
```bash
git clone https://github.com/YarielZC/impostapi-front.git
cd impostapi-front
```

### 2. Install Dependencies
```bash
npm install
# or if you use pnpm / yarn:
pnpm install
yarn install
```

### 3. Configure Environment Variables
Create a `.env` file in the project root. You can use `.env.template` as a guide:

```env
# URL where your ImpostAPI backend is running
VITE_BASE_URL=http://localhost:8000
```

### 4. Run in Development
```bash
npm run dev
```
The application will generally be available at: `http://localhost:5173`

---

## 🔗 Connection with Backend

For this Frontend to work correctly, ensure the ImpostAPI Backend is active. If running both locally:

1.  **Backend:** `http://localhost:8000` (FastAPI)
2.  **Frontend:** `http://localhost:5173` (Vite)

> **Note on CORS:** If you have connection issues, ensure the Backend has `CORS` configured to allow your frontend's origin. It is enabled by default.

---

## 🤝 Contributions

Want to improve the interface or add dark mode? You are welcome!

1.  **Fork** the project.
2.  Create your feature branch (`git checkout -b feature/NewDesign`).
3.  **Commit** your changes (`git commit -m 'Improved form UX'`).
4.  **Push** to the branch (`git push origin feature/NewDesign`).
5.  Open a **Pull Request**.

---

## 📄 License

Distributed under the MIT License. See the `LICENSE` file for more information.
---
# 🎨 ImpostAPI | Frontend Dashboard

> **"La interfaz para gestionar tus mentiras."**

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

**ImpostAPI Frontend** es el panel de control visual para interactuar con el motor de [ImpostAPI Backend](https://github.com/YarielZC/impostapi-back). Olvídate de insertar datos manualmente en la base de datos o usar cURL; esta interfaz te permite crear, editar y gestionar tus endpoints simulados (Mocks) de manera intuitiva y rápida.

---


## ✨ Características
#### Dashboard
El dashboard permite a los desarrolladores y QAs:

- **📝 Gestión Visual de Endpoints:** Crea, edita y elimina tus rutas mock (`/mock/mi-ruta`) sin tocar código.
- **⚡ Configuración de Latencia:** Define sliders visuales para simular "lag" o tiempos de carga lentos en respuestas específicas.
- **🎨 Editor de JSON Integrado:** Escribe el cuerpo de la respuesta (Body) con resaltado de sintaxis y validación de formato JSON.
- **🚦 Control de Estados HTTP:** Selector desplegable para forzar respuestas 200, 404, 500, etc., con un solo clic.
- **🔍 Buscador y Filtros:** Encuentra rápidamente ese mock específico entre docenas de definiciones.

---

## 🛠️ Stack Tecnológico


- **Librería UI:** React (vía Vite)
- **Estilos:** TailwindCSS / ShadcnUI
- **Gestión de Estado:** React Context
- **Editor de Código:** VSCode
- **Lenguaje:** TypeScript / JavaScript

---

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (v18 o superior)
- Tener el **Backend de ImpostAPI** corriendo localmente o en un servidor remoto.

### 1. Clonar el repositorio
```bash
git clone https://github.com/YarielZC/impostapi-front.git
cd impostapi-front
```

### 2. Instalar Dependencias
```bash
npm install
# o si usas pnpm / yarn:
pnpm install
yarn install
```

### 3. Configurar Variables de Entorno
Crea un archivo `.env` en la raíz del proyecto. Puedes basarte en el `.env.template`:

```env
# URL donde está corriendo tu backend de ImpostAPI
VITE_BASE_URL=http://localhost:8000
```

### 4. Ejecutar en Desarrollo
```bash
npm run dev
```
La aplicación estará disponible generalmente en: `http://localhost:5173`

---

## 🔗 Conexión con el Backend

Para que este Frontend funcione correctamente, asegúrate de que el Backend de ImpostAPI esté activo. Si estás corriendo ambos en local:

1. **Backend:** `http://localhost:8000` (FastAPI)
2. **Frontend:** `http://localhost:5173` (Vite)

> **Nota sobre CORS:** Si tienes problemas de conexión, asegúrate de que el Backend tenga configurados los `CORS` permitiendo el origen de tu frontend. Por defecto lo tiene.

---

## 🤝 Contribuciones

¿Quieres mejorar la interfaz o añadir modo oscuro? ¡Eres bienvenido!

1. Haz un **Fork** del proyecto.
2. Crea tu rama (`git checkout -b feature/NuevoDiseño`).
3. Haz **Commit** (`git commit -m 'Mejorada la UX del formulario'`).
4. Haz **Push** (`git push origin feature/NuevoDiseño`).
5. Abre un **Pull Request**.

---

## 📄 Licencia

Distribuido bajo la Licencia MIT. Ver el archivo `LICENSE` para más información.