import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { RouterExtensions } from '@nativescript/angular'

import { Task, TaskService } from '~/app/services/task.service'

@Component({
  selector: 'TaskDetail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
})
export class TaskDetailComponent implements OnInit {
  task?: Task

  constructor(
    private route: ActivatedRoute,
    private routerExtensions: RouterExtensions,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    const taskId = Number(this.route.snapshot.paramMap.get('id'))
    this.task = this.taskService.getTaskById(taskId)
  }

  goBack(): void {
    this.routerExtensions.back()
  }
}
