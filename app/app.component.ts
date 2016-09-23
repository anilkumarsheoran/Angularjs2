import {Component} from '@angular/core';

@Component({
	selector: 'abc',
	template:`<div>
		<ul><li *ngFor='let todod of todo' >{{todod.name}}<pm-products [todod]='todod'></pm-products></li></ul>
	{{pagetitle}}</div>`


})




export class AppComponent{
	pagetitle:string='Anil ',
	todo=[{name:'a'},{name:'b'}],

}