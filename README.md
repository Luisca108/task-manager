# Task Manager - NativeScript Angular

Aplicacion academica sencilla de NativeScript + Angular basada en el template oficial `@nativescript/template-drawer-navigation-ng`. Mantiene la navegacion con Side Drawer y agrega el feature modular `Mis Tareas`.

## Arquitectura encontrada

El proyecto fue creado con `npx nativescript@latest create task-manager --template @nativescript/template-drawer-navigation-ng --npm`.

- CLI utilizado: `ns`, mediante NativeScript CLI `9.0.7`.
- Angular: `~18.0.0`.
- NativeScript Angular: `^18.0.0`.
- NativeScript Core: `~9.0.0`.
- Routing: `NativeScriptRouterModule` con NgModules y lazy-loaded feature modules.
- No existe `angular.json` ni configuracion de code sharing web generada por el template. Se conserva la arquitectura mobile del template sin migraciones grandes.

## Requisitos de la actividad

| #  | Requisito            | Implementacion                          |
| -- | -------------------- | --------------------------------------- |
| 1  | Template Side Drawer | Side Drawer Navigation del template `template-drawer-navigation-ng` |
| 2  | Dos componentes      | `TaskListComponent` y `TaskDetailComponent` |
| 3  | Feature Module       | `TasksModule` en `src/app/tasks/tasks.module.ts` |
| 4  | Routing Module       | `TasksRoutingModule` con rutas `/tasks` y `/tasks/:id` |
| 5  | Side Drawer          | Opcion `Mis Tareas` en `app.component.html` |
| 6  | Service global       | `TaskService` con `providedIn: 'root'` |
| 7  | ngFor                | Lista de tareas con `*ngFor="let task of tasks"` |
| 8  | CSS Android/iOS      | `task-list.component.android.css` y `task-list.component.ios.css` |
| 9  | App_Resources        | Recurso personalizado `task_manager_icon.xml` |
| 10 | Codigo Android       | Uso de `if (isAndroid)` en `TaskListComponent` |

## Ejecutar proyecto

Instalar dependencias:

```bash
npm install
```

Ejecutar en Android si `ns` esta instalado globalmente:

```bash
ns run android
```

Ejecutar en Android usando el mismo CLI usado para crear este proyecto:

```bash
npx nativescript@9.0.7 run android
```

Ejecutar en iOS, desde macOS con Xcode configurado, si `ns` esta instalado globalmente:

```bash
ns run ios
```

Alternativa con `npx`:

```bash
npx nativescript@9.0.7 run ios
```

Validar TypeScript:

```bash
npx tsc --noEmit
```

Generar build Android, si el SDK Android esta instalado:

```bash
ns build android
```

En este entorno se encontro que `ns` y `tns` no estaban instalados globalmente, por eso se uso `npx nativescript@9.0.7`.

## Estructura principal

```text
src/
  app/
    services/
      task.service.ts
    tasks/
      task-list/
        task-list.component.ts
        task-list.component.html
        task-list.component.css
        task-list.component.android.css
        task-list.component.ios.css
      task-detail/
        task-detail.component.ts
        task-detail.component.html
        task-detail.component.css
      tasks-routing.module.ts
      tasks.module.ts
```

## Subir a GitHub

```bash
git init
git add .
git commit -m "Crear Task Manager con NativeScript Angular"
git branch -M main
git remote add origin https://github.com/USUARIO/task-manager.git
git push -u origin main
```
