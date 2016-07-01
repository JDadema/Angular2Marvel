import {bootstrap} from "@angular/platform-browser-dynamic";
import {HeroesComponent} from "./heroes.component";
import {HeroService} from "./shared/service/sticker.service";
import {HTTP_PROVIDERS} from "@angular/http";
import {WishlistService} from "./shared/service/wishlist.service";
//import {ROUTER_PROVIDERS} from "@angular/router-deprecated";

bootstrap(HeroesComponent, [HeroService, HTTP_PROVIDERS, WishlistService]);