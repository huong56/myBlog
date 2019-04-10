import { Component, Input, OnInit } from '@angular/core';
import {Post} from '../models/Post';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

	@Input() postTitle: string;
	@Input() postContent: string;
	@Input() created_at: Date;
	@Input() loveIts: number;
	@Input() post: Post;
	@Input() index: number;

	constructor(private postsService: PostsService) { }

	ngOnInit() {
	}

	getColor() {
		if(this.loveIts>0) {
			return 'green';
		} else if(this.loveIts<0) {
			return 'red';
		} else {
			return 'black';
		}
	}

	onLoveIt(index: number) {
		this.loveIts++;
		this.postsService.updatePost(index, this.loveIts);
	}

	onDontLoveIt(index: number) {
		this.loveIts--;
		this.postsService.updatePost(index, this.loveIts);
	}

	onDeletePost(post: Post) {
		this.postsService.removePost(post);
	}
}
