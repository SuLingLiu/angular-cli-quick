import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap';

import { PostlistService } from './postlist/services/postlist.service';

import { PostlistComponent } from './postlist/postlist.component';
import { postRoutes } from './post.routes';

@NgModule({
    imports: [
        FormsModule,
        PaginationModule.forRoot(),
        RouterModule.forChild(postRoutes)
    ],
    declarations: [
        PostlistComponent
    ],
    providers: [
        PostlistService
    ]
})
export class PostModule { }
