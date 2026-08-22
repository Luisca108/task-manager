import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { TaskDetailComponent } from './task-detail/task-detail.component'
import { TaskListComponent } from './task-list/task-list.component'
import { TasksRoutingModule } from './tasks-routing.module'

@NgModule({
  imports: [NativeScriptCommonModule, TasksRoutingModule],
  declarations: [TaskListComponent, TaskDetailComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class TasksModule {}
