"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ProductsListComponent = (function () {
    function ProductsListComponent() {
        this.characters = 'abcfdsfdsfsf';
        this.characters1 = [
            { id: 1, name: "United States" },
            { id: 2, name: "Australia" },
            { id: 3, name: "Canada" },
            { id: 4, name: "Brazil" },
            { id: 5, name: "England" }
        ];
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ProductsListComponent.prototype, "todod", void 0);
    ProductsListComponent = __decorate([
        core_1.Component({
            selector: 'pm-products',
            templateUrl: 'app/products/products-list.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ProductsListComponent);
    return ProductsListComponent;
}());
exports.ProductsListComponent = ProductsListComponent;
//# sourceMappingURL=products-list.component.js.map