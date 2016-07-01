import {Component, Input} from '@angular/core';
import {Hero} from "../shared/model/sticker";

@Component({
    selector: 'hero-detail',
    template: `
	<div *ngIf="selectedHero">
        <h2>Selected Hero</h2>
        <div>
            <h3>{{ selectedHero.name }}</h3>
            <div>
                <img style="float: right" ngif="selectedHero.image" src="{{ selectedHero.image }}"> 
                {{ selectedHero.description }}
            </div>
        </div>
    </div>
	`
})

export class HeroDetail {
    @Input('hero') selectedHero : Hero;
}