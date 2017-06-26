import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, Http } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

import { appRoutes } from './app.routes';
import { ContactModule } from './contact/contact.module';
import { SharedModule } from './shared/shared.module';

import { ForgetPwdService } from './user/forget-pwd/forget-pwd.service';
import { UserLoginService } from './user/user-login/user-login.service';


import { AppComponent } from './app.component';
import { CaseComponent } from './case/case.component';
import { ErrorComponent } from './error/error.component';
import { ForgetPwdComponent } from './user/forget-pwd/forget-pwd.component';
import { MapComponent } from './map/map.component';

import { HighlightDirective } from './highlight.directive';


export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        ErrorComponent,
        CaseComponent,
        ForgetPwdComponent,
        MapComponent,
        HighlightDirective
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ContactModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        RouterModule.forRoot(appRoutes),
        SharedModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
        })
    ],
    providers: [
        ForgetPwdService,
        UserLoginService
    ],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

/**
 NgModule是一个装饰器函数，它接收一个用来描述模块属性的元数据对象。其中最重要的属性是：
    declarations - 声明本模块中拥有的视图类。Angular 有三种视图类：组件、指令和管道。
    exports - declarations 的子集，可用于其它模块的组件模板。
    imports - 本模块声明的组件模板需要的类所在的其它模块。imports数组中应该只有NgModule类。不要放置其它类型的类,@NgModule元数据中独有的
    providers - 服务的创建者，并加入到全局服务列表中，可用于应用任何部分。也可以在@Component元数据中的providers属性中把它注册在组件层
    bootstrap - 指定应用的主视图（称为根组件），它是所有其它视图的宿主。只有根模块才能设置bootstrap属性。
 */
/**
 import { BrowserModule } from '@angular/platform-browser';
     应用模块需要BrowserModule的某些素材。要访问这些素材，就得把它加入@NgModule元数据的imports中
 */
