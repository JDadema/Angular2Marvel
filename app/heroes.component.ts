import {Component, OnInit} from '@angular/core';
import {Hero} from "./shared/model/sticker";
import {HeroService} from "./shared/service/sticker.service";
import {HeroDetail} from "./hero.detail/heroDetail.component";
import {Comics} from "./comics/comics.component";
import {ComicDetails} from "./comics/comicsDetails.component";
import {WishList} from "./wishlist/wishlist.component";

@Component({
    selector: 'heroes',
    template: `<h1>{{ title }}</h1>
    <div class="row">
        <div class="col-xs-12 col-md-8">
            <ul>
                <li *ngFor="let hero of heroes" (click)="heroDetails(hero)">
                    <span>{{ hero.id }}</span><span> {{ hero.name }}</span>
                </li>
            </ul>
        </div>
        <div class="col-xs-6 col-md-4">
            <wislist></wislist>
        </div>
    </div>
    <!--<input type="text" placeholder="name" #stickerName>
    <input type="text" placeholder="color" #stickerColorLocal>
    <div class="stickerColor" [style.background-color]="stickerColorLocal.value">cxvbcxbvc</div><br>-->
    <!--<button (click)="voegToe(stickerName.value, stickerColorLocal.value)">voeg toe</button>-->
   <div class="row">
        <div class="col-xs-6 col-md-4">
            <hero-detail [hero]="selectedHero"></hero-detail>
        </div>
        <div *ngIf="selectedComicListURL" class="col-xs-6 col-md-4">
            <comics [comics]="selectedComicListURL" (selectedComic)="setSelectedComic($event)"></comics>
        </div>
        <div *ngIf="selectedComicURL" class="col-xs-6 col-md-4">
            <comicDetails [comic]="selectedComicURL"></comicDetails>
        </div>
    </div>
    <!--<input type="text" #heroName>-->
    <!--<button (click)="getMarvelHero(heroName.value)">get Hero</button>
    <img src="{{ heroImage }}">-->`,
    styles:[`
        li {
            list-style: none;
        }
        
        .stickerColor {
            width: 50px;
            height: 50px;
        }
    `],
    directives : [[HeroDetail], [Comics], [ComicDetails], [WishList]],

})

//providers:[StickerService] 1 instantie voor dit component
export class HeroesComponent implements OnInit{
    title : String;
    heroes : Hero[];
    selectedHero : Hero;
    selectedComicListURL : string;
    selectedComicURL : string;

    constructor(private heroService:HeroService){

    }

    ngOnInit() {
        this.title = 'Marvel Heroes';
       // this.stickers = this.stickerService.getStickers();
        this.getHeroes();
    }
    
    getHeroes() {
        // pipe | async
        this.heroService.getHeroes()
            .subscribe(heroesData => {
                    this.heroes = heroesData;
                },
                err => console.log(err), 
                ()=> console.log('alle heroes geladen')
            )
        //this.stickers = <Sticker[]>this.stickerService.getStickers();
    }

    heroDetails(hero: Hero) {
        this.selectedHero = hero;
        this.getMarvelHero(hero.name);
        this.selectedComicURL = null;
    }
//keyup.enter
/*    voegToe(name: string, color: string) {
        this.stickerService.addSticker( new Sticker(this.stickers.length + 1, name, color));
    }*/

    getMarvelHero(heroName: string) {
        console.log(heroName);
        this.heroService.getHeroDetails(heroName)
            .subscribe(Herodata => {
                    this.selectedHero.image = Herodata.data.results[0].thumbnail.path + '/portrait_fantastic.jpg';
                    this.selectedHero.description = Herodata.data.results[0].description;
                    this.selectedComicListURL = Herodata.data.results[0].comics.collectionURI;
                },
                err => console.log(err),
                ()=> console.log('hero gevonden')
            )
    }

    setSelectedComic(selectedComic) {
        this.selectedComicURL = selectedComic;
    }
}
