import { Component, inject, Injectable } from '@angular/core';
import { KeyValuePipe, JsonPipe, CommonModule } from '@angular/common';
import { TaskService } from '../task';

@Component({
  selector: 'wz-task-list',
  standalone: true,
  imports: [KeyValuePipe, CommonModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss'
})
export class TaskList {
  private taskService = inject(TaskService);
  posts$ = this.taskService.getPosts();

  productCollection$ = this.taskService.getProducts();
}
