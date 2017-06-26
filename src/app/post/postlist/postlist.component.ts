import { Component, OnInit } from '@angular/core';

import { Post } from '../model/post-model';
import { PostlistService } from './services/postlist.service';

@Component({
    selector: 'app-postlist',
    templateUrl: './postlist.component.html',
    styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {
    public totalItems: number = 64;
    public currentPage: number = 4;
    public smallnumPages: number = 0;

    public setPage(pageNo: number): void {
        this.currentPage = pageNo;
    }

    public pageChanged(event: any): void {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
    }
    constructor(public postService: PostlistService) { }

    ngOnInit() {

        this.postService.getPostList('', 1).subscribe(
            res => {

            },
            error => { console.log(error) },
            () => { }
        );
    }

}
