# Backend Node - Grupo A

Este proyecto es un backend desarrollado en nestjs que utiliza Docker para la gestión de contenedores y PostgreSQL como base de datos. A continuación, se detallan los pasos necesarios para configurar y ejecutar el proyecto.

---

## 🚀 **Configuración del Proyecto**

### 1. **Ubicarse en la ruta del proyecto**

Primero, asegúrate de ubicarte en la carpeta del proyecto backend desde tu terminal:

```bash
$ cd Backend
```

### 2. **Configuración de Variables de Entorno**

El proyecto requiere un archivo ``` .env ``` para definir las variables de entorno necesarias. Puedes usar el archivo ```dev.env``` como plantilla y renombrarlo a ```.env```, o crear un nuevo archivo ```.env ``` manualmente:
- Opción 1: Renombrar ```dev.env``` a ```.env```
```bash
$ mv dev.env .env
```
- Opción 2: Crear un archivo ```.env``` manualmente

Crea un archivo ```.env``` en la raíz del proyecto y agrega las siguientes variables:

```bash
#.env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_DATABASE=db_crud
PORT=3002
```

## 3. Ejecutar el Proyecto con Docker
Para levantar el proyecto junto con los servicios de base de datos, utiliza Docker Compose. Ejecuta el siguiente comando en la terminal:

```bash
$ docker compose up
```

Esto iniciará los contenedores necesarios y desplegará el backend en el puerto especificado

## 📂 **Estructura del Proyecto (NestJS)**

```
DEVOPS202501-NODE/
├── Backend/ # Carpeta principal del backend
│ ├── src/ # Código fuente de la aplicación
│ │ ├── crud/ # Módulo CRUD (Crear, Leer, Actualizar, Eliminar)
│ │ │ ├── dto/ # Objetos de transferencia de datos (DTOs)
│ │ │ ├── entities/ # Entidades de la base de datos
│ │ │ ├── controllers/ # Controladores del módulo CRUD
│ │ │ ├── services/ # Servicios del módulo CRUD
│ │ │ └── crud.module.ts # Módulo CRUD
│ │ ├── app.module.ts # Módulo principal de la aplicación
│ │ └── main.ts # Punto de entrada de la aplicación
│ ├── test/ # Pruebas unitarias y de integración
│ │ ├── e2e/ # Pruebas end-to-end
│ │ └── unit/ # Pruebas unitarias
│ ├── env/ # Archivos de entorno
│ │ └── dev.env # Variables de entorno de desarrollo
│ ├── docker-compose.yml # Configuración de Docker Compose
│ ├── Dockerfile # Configuración del contenedor de Node.js
│ ├── eslink.config.mjs # Configuración de ESLint
│ ├── nest-cli.json # Configuración de Nest CLI
│ ├── package-lock.json # Lockfile de dependencias
│ ├── package.json # Dependencias y scripts del proyecto
│ ├── tsconfig.build.json # Configuración de TypeScript para compilación
│ ├── tsconfig.json # Configuración de TypeScript
│ ├── .gitignore # Archivos y carpetas ignorados por Git
│ └── README.md # Documentación del proyecto
├── postgres/ # Configuración de la base de datos PostgreSQL
│ ├── Dockerfile # Configuración del contenedor de PostgreSQL
│ ├── init.sql # Scripts de inicialización de la base de datos
│ └── data/ # Datos persistentes de la base de datos
└── README.md # Documentación general del proyecto
```
