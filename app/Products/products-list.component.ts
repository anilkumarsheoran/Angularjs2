import {Component,Input} from '@angular/core'

@Component({
	selector:'pm-products',
	templateUrl:'app/products/products-list.component.html'

})



export class ProductsListComponent{
  characters='abcfdsfdsfsf',
  characters1= [
       {id: 1, name: "United States"},
       {id: 2, name: "Australia"},
       {id: 3, name: "Canada"},
       {id: 4, name: "Brazil"},
       {id: 5, name: "England"}
     ],
     @Input() todod


	
}