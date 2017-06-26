import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-case',
	templateUrl: './case.component.html',
	styleUrls: ['./case.component.scss'],
	host: {
		class: 'row'//。它告诉Angular：我们要在宿主元素（app-article标签）上设置class属性，使其具有row类,值可以随便换
	}
})
export class CaseComponent implements OnInit {
  	names: string[];//表示names的类型是string构成的数组。它的另一种写法是Array<string>
	votes: number;
	title: string;
	link: string;
	constructor() { //在constructor()中，我们设置了一些默认属性

		this.names = ['Ari', 'Carlos', 'Felipe', 'Nate'];
		
		this.title = 'Angular 2';
		this.link = 'http://angular.io';
		this.votes = 10;		
	}
	
	ngOnInit() {
	}

	//我们在input标签上使用了#（hash）来要求Angular把该元素赋值给一个局部变量
	addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
		console.log(`Adding article title: ${title.value} and link: ${link.value}`);
		return false;
	}

	voteUp() {
		this.votes += 1;
		return false;//阻止冒泡我们得让click的事件处理器返回false
	}
	voteDown() {
		this.votes -= 1;
		return false;
	}

}
