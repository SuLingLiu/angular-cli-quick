import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { flyInOut } from '../../animations/fly-in-out';
import { Observable } from 'rxjs/Observable';

import { User } from '../model/user-model';

import { UserLoginService } from './user-login.service';


@Component({
    selector: 'app-user-login',
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.scss'],
    animations: [ flyInOut ]
})
export class UserLoginComponent implements OnInit {
    public user: User = new User();
    public error: Error;
    constructor(
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public UserLoginService: UserLoginService
    ) {
        console.log(this.UserLoginService)
    }

    ngOnInit() {
        console.log("--- user-login-component ---");
        console.log(this.router);
        console.log(this.activatedRoute);

        let activatedRouteSnapshot: ActivatedRouteSnapshot = this.activatedRoute.snapshot;
        let routerState: RouterState = this.router.routerState;
        let routerStateSnapshot: RouterStateSnapshot = routerState.snapshot;

        console.log(activatedRouteSnapshot);
        console.log(routerState);
        console.log(routerStateSnapshot);
    }

    public doLogin(): void {
        this.UserLoginService.login(this.user);
    }

    public doLogout(): void {
        this.UserLoginService.logout();
        //this.router.navigateByUrl("home");
    }

    public forgetPwd(): void {
        this.router.navigateByUrl("forgetpwd");
    }

}
