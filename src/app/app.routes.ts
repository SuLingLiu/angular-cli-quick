import { Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { ErrorComponent } from './error/error.component';
import { CaseComponent } from './case/case.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { ForgetPwdComponent } from './user/forget-pwd/forget-pwd.component';

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'posts',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: 'app/home/home.module#HomeModule'
    },
    {
        path: 'posts',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'map',
        component: MapComponent,
        data: { title: 'map' }
    },
    {
        path: 'case',
        component: CaseComponent,
        data: { title: 'case' }
    },
    {
        path: 'login',
        component: UserLoginComponent,
        data: {'id':'1'}
    },
    {
        path: 'forgetpwd',
        component: ForgetPwdComponent
    },
    {
        path: '**',
        component: ErrorComponent
    }
];

