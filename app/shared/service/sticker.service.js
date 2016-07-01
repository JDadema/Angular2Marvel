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
var http_1 = require("@angular/http");
require('rxjs/Rx');
var HeroService = (function () {
    //http://gateway.marvel.com:80/v1/public/characters?name=wolverine&apikey=fc2947c2275d93f0074fea2e09b0af2f
    // http://gateway.marvel.com/v1/public/characters/1009268
    function HeroService(http) {
        this.http = http;
        this.url = 'http://gateway.marvel.com/v1/public/characters?';
        this.apikey = 'ts=1&apikey=fc2947c2275d93f0074fea2e09b0af2f&hash=fdb3f7744fe3f94fe883009c9c22a1a0';
    }
    ;
    HeroService.prototype.getHeroDetails = function (heroName) {
        return this.http.get(this.url + ("name=" + heroName + "&") + this.apikey)
            .map(function (res) { return res.json(); });
    };
    HeroService.prototype.getHeroes = function () {
        //return this.stickers;
        return this.http.get('app/heroes.json')
            .map(function (res) { return res.json(); });
    };
    HeroService.prototype.getComics = function (comicListURL) {
        //return this.stickers;
        return this.http.get(comicListURL + "?" + this.apikey)
            .map(function (res) { return res.json(); });
    };
    HeroService.prototype.getComic = function (comicURL) {
        //return this.stickers;
        return this.http.get(comicURL + "?" + this.apikey)
            .map(function (res) { return res.json(); });
    };
    HeroService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HeroService);
    return HeroService;
}());
exports.HeroService = HeroService;
//# sourceMappingURL=sticker.service.js.map