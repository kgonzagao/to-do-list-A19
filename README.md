# To-Do List App - Angular Frontend

![Angular](https://img.shields.io/badge/Angular-19-DD0031?logo=angular)
![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)

## Descripción

Aplicación frontend desarrollada con Angular 19 para gestionar una lista de tareas (To-Do List) que consume un backend Java.

## Características principales
- ✅ Crear nuevas tareas
- ✔️ Marcar tareas como completadas
- 🗑️ Eliminar tareas
- 📅 Visualizar fechas de vencimiento

## Tecnologías utilizadas
- Angular 19
- TypeScript
- HTML5
- CSS3
- RxJS

## Requisitos del sistema
- Node.js v18+
- npm v9+ o yarn
- Angular CLI v19+


## Configuración
- Editar src/app/services/task.service.ts:

```typescript
private apiUrl = 'http://localhost:8080/api/tasks'; // Cambiar por tu endpoint
```

## Licencia
Este proyecto está bajo la Licencia Apache 2.0.
