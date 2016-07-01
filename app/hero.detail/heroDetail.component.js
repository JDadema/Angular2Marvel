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
var sticker_1 = require("../shared/model/sticker");
var HeroDetail = (function () {
    function HeroDetail() {
    }
    __decorate([
        core_1.Input('hero'), 
        __metadata('design:type', sticker_1.Hero)
    ], HeroDetail.prototype, "selectedHero", void 0);
    HeroDetail = __decorate([
        core_1.Component({
            selector: 'hero-detail',
            template: "\n\t<div *ngIf=\"selectedHero\">\n        <h2>Selected Hero</h2>\n        <div>\n            <h3>{{ selectedHero.name }}</h3>\n            <div>\n                <img style=\"float: right\" ngif=\"selectedHero.image\" src=\"{{ selectedHero.image }}\"> \n                {{ selectedHero.description }}\n            </div>\n        </div>\n    </div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], HeroDetail);
    return HeroDetail;
}());
exports.HeroDetail = HeroDetail;
//# sourceMappingURL=heroDetail.component.js.map