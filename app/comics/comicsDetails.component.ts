import {Component, Input, OnChanges, SimpleChange, Output, EventEmitter} from '@angular/core';
import {HeroService} from "../shared/service/sticker.service";
import {WishlistService} from "../shared/service/wishlist.service";

@Component({
    selector: 'comicDetails',
    template: `
    <div *ngIf="comic">
    <h2>Selected Comic</h2>
        <div>
            <h3> {{ comic.title }}</h3>
            <p [innerHTML]="comic.description"></p>
            <img style="float: right" src="{{comic.thumbnail.path}}/portrait_fantastic.jpg">
        </div>
	</div>
	<button  class="btn btn-primary" (click)="addToWislist(comic.title)">voeg aan wishlist</button>`
})

export class ComicDetails implements OnChanges {
    @Input('comic') selectedComicURL : string;
    comic: any;

    constructor(private heroService:HeroService, private wishlistService:WishlistService){

    }

    ngOnChanges(chagnes: {[key: string]: SimpleChange}){
        this.getComic(this.selectedComicURL);
    }

    getComic(comicURL: string) {
        this.heroService.getComic(comicURL)
            .subscribe(comicData => {
                this.comic = comicData.data.results[0];
        },
            err => console.log(err),
                ()=> console.log('comic gevonden')
        )
    }

    addToWislist(comicTitle) {
        this.wishlistService.Stream.next(comicTitle);
    }

}