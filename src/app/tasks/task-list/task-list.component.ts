import { Component, OnInit } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular'
import { Application, isAndroid } from '@nativescript/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'

import { Task, TaskService } from '~/app/services/task.service'

@Component({
  selector: 'TaskList',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = []
  platformMessage = 'Task Manager movil'

  constructor(private taskService: TaskService, private routerExtensions: RouterExtensions) {
    if (isAndroid) {
      this.platformMessage = 'Ejecutando Task Manager en Android'
    }
  }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks()
  }

  onTaskTap(task: Task): void {
    this.routerExtensions.navigate(['/tasks', task.id], {
      transition: {
        name: 'slideLeft',
      },
    })
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
}
