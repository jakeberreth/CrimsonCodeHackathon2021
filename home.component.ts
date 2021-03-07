import { Component } from '@angular/core';
import { PostService } from 'src/app/post.service'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']


})

export class HomeComponent {

  constructor(private postService: PostService) { }

  postTitle = '';
  postContent = '';
  titleInput = '';
  contentInput = '';

  createNewPost(titleInput: HTMLTextAreaElement, contentInput: HTMLTextAreaElement) {
    this.postTitle = titleInput.value;
    this.postContent = contentInput.value;
    this.postService.createPost('Title', 'Content').subscribe((response: any) => {
      console.log(response);
    })
  }
}
