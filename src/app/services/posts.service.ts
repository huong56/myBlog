import { Injectable } from '@angular/core';
import {Post} from '../models/Post';
import {Subject} from 'rxjs';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;
import {forEach} from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor() {
    this.getPosts();
  }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts')
        .on('value', (data: DataSnapshot) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPosts();
        });
  }

  createNewPost(post: Post) {
      this.posts.push(post);
      this.savePosts();
      this.emitPosts();
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  updatePost(index: number, loveIts: number) {
      this.posts[index].loveIts = loveIts;
      this.savePosts();
      this.emitPosts();
  }

  removePost(index: number) {
    this.posts.splice(index, 1);
    this.savePosts();
    this.emitPosts();
  }
}
