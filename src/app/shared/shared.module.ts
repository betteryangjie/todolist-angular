import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { TodoListComponent } from './components/todo-list/todo-list.component'
import { SummaryPipe } from '../pipes/summary.pipe';

@NgModule({
  declarations: [
    TodoListComponent,
    SummaryPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  exports: [TodoListComponent]
})
export class SharedModule { }
