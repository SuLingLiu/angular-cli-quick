import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserMainComponent } from './user-main/user-main.component';
import { ForgetPwdComponent } from './forget-pwd/forget-pwd.component';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [UserLoginComponent, UserMainComponent, ForgetPwdComponent]
})
export class UserModule { }
