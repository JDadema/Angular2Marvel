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
var Comics = (function () {
    function Comics(heroService) {
        this.heroService = heroService;
        this.selectedComic = new core_1.EventEmitter();
    }
    Comics.prototype.ngOnChanges = function (chagnes) {
        this.getComicList(this.selectedComicListURL);
    };
    Comics.prototype.getComicList = function (comicListURL) {
        var _this = this;
        this.heroService.getComics(comicListURL)
            .subscribe(function (comicsData) {
            _this.comicList = comicsData.data.results;
        }, function (err) { return console.log(err); }, function () { return console.log('comics gevonden'); });
    };
    Comics.prototype.comicDetails = function (comic) {
        this.selectedComic.emit(comic.resourceURI);
    };
    __decorate([
        core_1.Input('comics'), 
        __metadata('design:type', String)
    ], Comics.prototype, "selectedComicListURL", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], Comics.prototype, "selectedComic", void 0);
    Comics = __decorate([
        core_1.Component({
            selector: 'comics',
            template: "\n    <h2>Comic list</h2>\n    <div>\n        <ul class=\"comicList\">\n            <li *ngFor=\"let comic of comicList\" (click)=\"comicDetails(comic)\">\n                <img src=\"{{comic.thumbnail.path}}/standard_small.jpg\"><span>{{ comic.title }}</span>\n            </li>\n        </ul>\n    </div>\n\t"
        }), 
        __metadata('design:paramtypes', [sticker_service_1.HeroService])
    ], Comics);
    return Comics;
}());
exports.Comics = Comics;
//# sourceMappingURL=comics.component.js.map