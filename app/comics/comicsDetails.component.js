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
var sticker_service_1 = require("../shared/service/sticker.service");
var wishlist_service_1 = require("../shared/service/wishlist.service");
var ComicDetails = (function () {
    function ComicDetails(heroService, wishlistService) {
        this.heroService = heroService;
        this.wishlistService = wishlistService;
    }
    ComicDetails.prototype.ngOnChanges = function (chagnes) {
        this.getComic(this.selectedComicURL);
    };
    ComicDetails.prototype.getComic = function (comicURL) {
        var _this = this;
        this.heroService.getComic(comicURL)
            .subscribe(function (comicData) {
            _this.comic = comicData.data.results[0];
        }, function (err) { return console.log(err); }, function () { return console.log('comic gevonden'); });
    };
    ComicDetails.prototype.addToWislist = function (comicTitle) {
        this.wishlistService.Stream.next(comicTitle);
    };
    __decorate([
        core_1.Input('comic'), 
        __metadata('design:type', String)
    ], ComicDetails.prototype, "selectedComicURL", void 0);
    ComicDetails = __decorate([
        core_1.Component({
            selector: 'comicDetails',
            template: "\n    <div *ngIf=\"comic\">\n    <h2>Selected Comic</h2>\n        <div>\n            <h3> {{ comic.title }}</h3>\n            <p [innerHTML]=\"comic.description\"></p>\n            <img style=\"float: right\" src=\"{{comic.thumbnail.path}}/portrait_fantastic.jpg\">\n        </div>\n\t</div>\n\t<button  class=\"btn btn-primary\" (click)=\"addToWislist(comic.title)\">voeg aan wishlist</button>"
        }), 
        __metadata('design:paramtypes', [sticker_service_1.HeroService, wishlist_service_1.WishlistService])
    ], ComicDetails);
    return ComicDetails;
}());
exports.ComicDetails = ComicDetails;
//# sourceMappingURL=comicsDetails.component.js.map