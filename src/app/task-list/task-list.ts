import { Component, inject, Injectable } from '@angular/core';
import { SwProducts } from '../titles';
import { Task } from "../models/task.model";
import { NgFor, KeyValuePipe, JsonPipe, CommonModule } from '@angular/common';
import { TaskService } from '../task';

@Component({
  selector: 'wz-task-list',
  standalone: true,
  imports: [NgFor, KeyValuePipe, JsonPipe, CommonModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss'
})
export class TaskList {
  private taskService = inject(TaskService);
  posts$ = this.taskService.getPosts();
  //productCollection$ = SwProducts;

  productCollection$ = this.taskService.getProducts();
}
