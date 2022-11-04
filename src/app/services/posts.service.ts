import { Post } from './../model/post';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getAll = () => {
    return this.http.get<Post[]>(`${environment.baseURL}`);
  };

  getById = (id: Post['id']) => {
    return this.http.get<Post>(`${environment.baseURL}/${id}`);
  };

  create = (post: Post) => {
    return this.http.post<Post>(`${environment.baseURL}`, post);
  };
}
