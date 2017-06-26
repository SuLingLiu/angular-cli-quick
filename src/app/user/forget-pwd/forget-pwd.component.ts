import { Component, OnInit } from '@angular/core';
import { User } from '../model/user-model';

import { ForgetPwdService } from './forget-pwd.service';

import { flyInOut } from '../../animations/fly-in-out';

@Component({
	selector: 'app-forget-pwd',
	templateUrl: './forget-pwd.component.html',
	styleUrls: ['./forget-pwd.component.scss'],
	animations: [flyInOut]
})
export class ForgetPwdComponent implements OnInit {
	public user: User = new User();
	public message: string;
	public messageType: string;

	constructor(
		public forgetPwdService: ForgetPwdService
	) { }

	ngOnInit() {
	}

	public sendValidationEmail():void{
		this.forgetPwdService.sendValidationEmail(this.user.email)
			.subscribe(
				data => {
					this.message = data.message;
					this.messageType = "success";
				},
				error => {
					this.message = error.messge;
					this.messageType = "danger";
				}
			);
	}

}
