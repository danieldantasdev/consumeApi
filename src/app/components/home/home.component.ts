import { Post } from './../../model/post';
import { PostsService } from './../../services/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'api-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private postService: PostsService) {}

  ngOnInit(): void {
    this.list();
  }

  posts: Post[] = [];

  list = () => {
    this.postService.getAll().subscribe((post) => {
      this.posts = post;
    });
  };
}
