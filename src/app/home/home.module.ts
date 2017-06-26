import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { homeRoutes } from './home.routes';
import { HomeComponent } from './home.component';
import { OnlineContactComponent } from './online-contact/online-contact.component';
import { SocialChannelComponent } from './social-channel/social-channel.component';


@NgModule({
    imports: [
        RouterModule.forChild(homeRoutes)
    ],
    exports: [],
    declarations: [
        HomeComponent,
        OnlineContactComponent,
        SocialChannelComponent
    ],
    providers: []
})
export class HomeModule { }