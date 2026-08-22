import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { TaskDetailComponent } from './task-detail/task-detail.component'
import { TaskListComponent } from './task-list/task-list.component'

const routes: Routes = [
  { path: '', component: TaskListComponent },
  { path: ':id', component: TaskDetailComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class TasksRoutingModule {}
