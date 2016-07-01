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
var sticker_service_1 = require("./shared/service/sticker.service");
var heroDetail_component_1 = require("./hero.detail/heroDetail.component");
var comics_component_1 = require("./comics/comics.component");
var comicsDetails_component_1 = require("./comics/comicsDetails.component");
var wishlist_component_1 = require("./wishlist/wishlist.component");
var HeroesComponent = (function () {
    function HeroesComponent(heroService) {
        this.heroService = heroService;
    }
    HeroesComponent.prototype.ngOnInit = function () {
        this.title = 'Marvel Heroes';
        // this.stickers = this.stickerService.getStickers();
        this.getHeroes();
    };
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        // pipe | async
        this.heroService.getHeroes()
            .subscribe(function (heroesData) {
            _this.heroes = heroesData;
        }, function (err) { return console.log(err); }, function () { return console.log('alle heroes geladen'); });
        //this.stickers = <Sticker[]>this.stickerService.getStickers();
    };
    HeroesComponent.prototype.heroDetails = function (hero) {
        this.selectedHero = hero;
        this.getMarvelHero(hero.name);
        this.selectedComicURL = null;
    };
    //keyup.enter
    /*    voegToe(name: string, color: string) {
            this.stickerService.addSticker( new Sticker(this.stickers.length + 1, name, color));
        }*/
    HeroesComponent.prototype.getMarvelHero = function (heroName) {
        var _this = this;
        console.log(heroName);
        this.heroService.getHeroDetails(heroName)
            .subscribe(function (Herodata) {
            _this.selectedHero.image = Herodata.data.results[0].thumbnail.path + '/portrait_fantastic.jpg';
            _this.selectedHero.description = Herodata.data.results[0].description;
            _this.selectedComicListURL = Herodata.data.results[0].comics.collectionURI;
        }, function (err) { return console.log(err); }, function () { return console.log('hero gevonden'); });
    };
    HeroesComponent.prototype.setSelectedComic = function (selectedComic) {
        this.selectedComicURL = selectedComic;
    };
    HeroesComponent = __decorate([
        core_1.Component({
            selector: 'heroes',
            template: "<h1>{{ title }}</h1>\n    <div class=\"row\">\n        <div class=\"col-xs-12 col-md-8\">\n            <ul>\n                <li *ngFor=\"let hero of heroes\" (click)=\"heroDetails(hero)\">\n                    <span>{{ hero.id }}</span><span> {{ hero.name }}</span>\n                </li>\n            </ul>\n        </div>\n        <div class=\"col-xs-6 col-md-4\">\n            <wislist></wislist>\n        </div>\n    </div>\n    <!--<input type=\"text\" placeholder=\"name\" #stickerName>\n    <input type=\"text\" placeholder=\"color\" #stickerColorLocal>\n    <div class=\"stickerColor\" [style.background-color]=\"stickerColorLocal.value\">cxvbcxbvc</div><br>-->\n    <!--<button (click)=\"voegToe(stickerName.value, stickerColorLocal.value)\">voeg toe</button>-->\n   <div class=\"row\">\n        <div class=\"col-xs-6 col-md-4\">\n            <hero-detail [hero]=\"selectedHero\"></hero-detail>\n        </div>\n        <div *ngIf=\"selectedComicListURL\" class=\"col-xs-6 col-md-4\">\n            <comics [comics]=\"selectedComicListURL\" (selectedComic)=\"setSelectedComic($event)\"></comics>\n        </div>\n        <div *ngIf=\"selectedComicURL\" class=\"col-xs-6 col-md-4\">\n            <comicDetails [comic]=\"selectedComicURL\"></comicDetails>\n        </div>\n    </div>\n    <!--<input type=\"text\" #heroName>-->\n    <!--<button (click)=\"getMarvelHero(heroName.value)\">get Hero</button>\n    <img src=\"{{ heroImage }}\">-->",
            styles: ["\n        li {\n            list-style: none;\n        }\n        \n        .stickerColor {\n            width: 50px;\n            height: 50px;\n        }\n    "],
            directives: [[heroDetail_component_1.HeroDetail], [comics_component_1.Comics], [comicsDetails_component_1.ComicDetails], [wishlist_component_1.WishList]],
        }), 
        __metadata('design:paramtypes', [sticker_service_1.HeroService])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map