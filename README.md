# PoliApostas - Plataforma de Gestión de Rifas y Apuestas
Este repositorio contiene el código fuente de PoliApostas, una plataforma desarrollada para administrar rifas y apuestas de manera dinámica.
La aplicación permite a los usuarios participar en diversas rifas y apuestas, ofreciendo una experiencia interactiva y emocionante.

## Pasos para Configurar el Entorno de Desarrollo
Requisitos Previos
Asegúrate de tener instalados los siguientes elementos en tu entorno de desarrollo:
PHP (compatible con Laravel)
Composer
Node.js y npm (para el frontend)

# Backend (Laravel)
Clona este repositorio en tu máquina local:
git clone https://github.com/diego072117/PoliApuestas

## Accede al directorio del backend:
cd backend

## Instala las dependencias de Laravel mediante Composer:
composer install

## Copia el archivo de entorno y configúralo según tus necesidades
Copia el archivo .env-example y renombralo como .env

## Genera la clave de la aplicación:
php artisan key:generate

## Configura la base de datos en el archivo .env y ejecuta las migraciones y seeders:
php artisan migrate --seed


# Frontend (React)

## Accede al directorio del frontend:
cd frontend

## Instala las dependencias de React mediante npm:
npm install

# Ejecución del Proyecto
## Backend: Inicia el servidor de desarrollo de Laravel.
php artisan serve
## Frontend: Inicia la aplicación React
npm run dev 


# Pruebas Automatizadas
El proyecto cuenta con pruebas automatizadas. Para ejecutarlas, utiliza el siguiente comando en el directorio del backend:
php artisan test
