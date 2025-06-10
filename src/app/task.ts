import { Injectable } from '@angular/core';
import { SwProducts } from './titles';
import { Task } from "./models/task.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
    //productCollection:Task[] = SwProducts;
    productCollection:Task[] = [];
    private productsApiUrl = 'http://127.0.0.1:8000/shopware/product';
    private postsApiUrl = 'https://jsonplaceholder.typicode.com/posts';
    constructor(private http: HttpClient) {}

    getPosts() {
      return this.http.get<Post[]>(this.postsApiUrl);
    }
    getProducts() {
      return SwProducts;
      return this.http.get<Task[]>(this.productsApiUrl);
    }
}

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}
