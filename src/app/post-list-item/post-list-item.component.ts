import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

	@Input() postTitle: string;
	@Input() postContent: string;
	@Input() created_at: Date;
	@Input() loveIts: number = 0;

	constructor() { }

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

	onLoveIt() {
		this.loveIts++;
	}

	onDontLoveIt() {
		this.loveIts--;
	}

}
