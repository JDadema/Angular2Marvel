"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var heroes_component_1 = require("./heroes.component");
var sticker_service_1 = require("./shared/service/sticker.service");
var http_1 = require("@angular/http");
var wishlist_service_1 = require("./shared/service/wishlist.service");
//import {ROUTER_PROVIDERS} from "@angular/router-deprecated";
platform_browser_dynamic_1.bootstrap(heroes_component_1.HeroesComponent, [sticker_service_1.HeroService, http_1.HTTP_PROVIDERS, wishlist_service_1.WishlistService]);
//# sourceMappingURL=main.js.map