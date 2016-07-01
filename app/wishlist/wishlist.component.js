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
//city.orders.ts - Een soort 'winkelmandje', bijhouden welke stedentripjes zijn geboekt.
var core_1 = require('@angular/core');
var wishlist_service_1 = require("../shared/service/wishlist.service");
var WishList = (function () {
    function WishList(wishlistService) {
        this.wishlistService = wishlistService;
        this.currentWishlist = [];
    }
    WishList.prototype.ngOnInit = function () {
        var _this = this;
        this.wishlistService.Stream
            .subscribe(function (comic) { return _this.addToWishlist(comic); }, function (err) { return console.log('Error bij verwerken City-order'); }, function () { return console.log('Complete...'); });
    };
    WishList.prototype.addToWishlist = function (comic) {
        console.log('add to wislist: ', comic);
        this.currentWishlist.push(comic);
    };
    WishList.prototype.cancel = function () {
        this.currentWishlist = [];
    };
    WishList = __decorate([
        core_1.Component({
            selector: 'wislist',
            template: "\n\t<div *ngIf=\"currentWishlist.length > 0\">\n\t    <h2>Wishlist</h2>\n\t\t<ul>\n            <li *ngFor=\"let comic of currentWishlist\">\n                    {{ comic }}\n            </li>\n\t\t</ul>\n\t\t<button class=\"btn btn-danger\" (click)=\"cancel()\">clear</button>\n\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [wishlist_service_1.WishlistService])
    ], WishList);
    return WishList;
}());
exports.WishList = WishList;
//# sourceMappingURL=wishlist.component.js.map