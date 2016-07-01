import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class HeroService {
    url:string = 'http://gateway.marvel.com/v1/public/characters?';
    apikey:string = 'ts=1&apikey=fc2947c2275d93f0074fea2e09b0af2f&hash=fdb3f7744fe3f94fe883009c9c22a1a0';

    //http://gateway.marvel.com:80/v1/public/characters?name=wolverine&apikey=fc2947c2275d93f0074fea2e09b0af2f
   // http://gateway.marvel.com/v1/public/characters/1009268
    constructor(private http:Http){
        
    };

    getHeroDetails(heroName: string) {
        return this.http.get(this.url  + `name=${heroName}&` + this.apikey)
            .map(res => res.json())
    }


    getHeroes() {
        //return this.stickers;
        return this.http.get('app/heroes.json')
            .map(res => res.json())
    }

    getComics(comicListURL: string) {
        //return this.stickers;
        return this.http.get(comicListURL + `?` + this.apikey)
            .map(res => res.json())
    }

    getComic(comicURL: string) {
        //return this.stickers;
        return this.http.get(comicURL + `?` + this.apikey)
            .map(res => res.json())
    }

}