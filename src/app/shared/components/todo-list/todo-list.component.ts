import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { slide } from "../../animations"

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: [
  ],
  animations: [slide]
})
export class TodoListComponent implements AfterViewInit {

  constructor() { }

  @ViewChild("todoInput") todoInput: ElementRef<HTMLParagraphElement> | undefined

  ngAfterViewInit() {
    this.todoInput?.nativeElement.focus()
  }

  todoContent: string = ''

  todoList: Array<string> = []

  addTodoItem(): void {
    if (this.todoContent.trim() === '') {
      return
    }
    this.todoList.push(this.todoContent)
    this.todoContent = ''
  }

  removeTodoItem(index: number): void {
    this.todoList.splice(index, 1)
  }

}
