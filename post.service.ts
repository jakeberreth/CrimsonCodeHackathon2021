import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private webReqService: WebRequestService) { }

  createPost(title: string, content: string) {
    return this.webReqService.post('posts', { title, content });
  }
}
