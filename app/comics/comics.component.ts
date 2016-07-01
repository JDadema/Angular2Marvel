import {Component, Input, OnChanges, SimpleChange, Output, EventEmitter} from '@angular/core';
import {HeroService} from "../shared/service/sticker.service";

@Component({
    selector: 'comics',
    template: `
    <h2>Comic list</h2>
    <div>
        <ul class="comicList">
            <li *ngFor="let comic of comicList" (click)="comicDetails(comic)">
                <img src="{{comic.thumbnail.path}}/standard_small.jpg"><span>{{ comic.title }}</span>
            </li>
        </ul>
    </div>
	`
})

export class Comics implements OnChanges {
    @Input('comics') selectedComicListURL : string;
    @Output() selectedComic: EventEmitter<any> = new EventEmitter();
    comicList : any[];

    constructor(private heroService:HeroService){

    }

    ngOnChanges(chagnes: {[key: string]: SimpleChange}){
        this.getComicList(this.selectedComicListURL);
    }

    getComicList(comicListURL: string) {
        this.heroService.getComics(comicListURL)
            .subscribe(comicsData => {
                    this.comicList = comicsData.data.results;
                },
                err => console.log(err),
                ()=> console.log('comics gevonden')
            )
    }

    comicDetails(comic) {
        this.selectedComic.emit(comic.resourceURI);
    }
}