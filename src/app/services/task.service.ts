import { Injectable } from '@angular/core'

export interface Task {
  id: number
  title: string
  summary: string
  description: string
  status: string
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [
    {
      id: 1,
      title: 'Estudiar NativeScript',
      summary: 'Repasar modulos y routing',
      description: 'Repasar componentes, modulos, servicios y navegacion con Side Drawer.',
      status: 'Pendiente',
    },
    {
      id: 2,
      title: 'Completar proyecto final',
      summary: 'Finalizar actividad',
      description: 'Finalizar todos los requisitos del proyecto academico NativeScript.',
      status: 'Pendiente',
    },
    {
      id: 3,
      title: 'Revisar Angular Routing',
      summary: 'Validar rutas del feature',
      description: 'Comprobar que la lista y el detalle usen un routing module propio.',
      status: 'Pendiente',
    },
    {
      id: 4,
      title: 'Subir proyecto a GitHub',
      summary: 'Publicar para evaluacion',
      description: 'Crear el repositorio, confirmar los cambios y subir la entrega.',
      status: 'Pendiente',
    },
  ]

  getTasks(): Task[] {
    return this.tasks
  }

  getTaskById(id: number): Task | undefined {
    return this.tasks.find((task) => task.id === id)
  }
}
