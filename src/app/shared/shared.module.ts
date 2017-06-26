import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from 'ng2-translate';

import { UserLoginComponent } from '../user/user-login/user-login.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		TranslateModule
	],
	declarations: [
		UserLoginComponent
	],
	exports: [
		CommonModule,
		FormsModule,
		TranslateModule,
		UserLoginComponent
	]
})

export class SharedModule {}