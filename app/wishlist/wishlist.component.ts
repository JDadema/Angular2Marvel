//city.orders.ts - Een soort 'winkelmandje', bijhouden welke stedentripjes zijn geboekt.
import {Component, OnInit} from '@angular/core';
import {WishlistService} from "../shared/service/wishlist.service";

@Component({
    selector: 'wislist',
    template: `
	<div *ngIf="currentWishlist.length > 0">
	    <h2>Wishlist</h2>
		<ul>
            <li *ngFor="let comic of currentWishlist">
                    {{ comic }}
            </li>
		</ul>
		<button class="btn btn-danger" (click)="cancel()">clear</button>
	</div>
	`
})

export class WishList implements OnInit{
    currentWishlist:any[] = [];

    constructor(private wishlistService:WishlistService) {

    }

    ngOnInit() {
        this.wishlistService.Stream
            .subscribe(
                (comic:any) => this.addToWishlist(comic),
                (err)=>console.log('Error bij verwerken City-order'),
                ()=>console.log('Complete...')
            )
    }

    addToWishlist(comic:any) {
        console.log('add to wislist: ', comic);
        this.currentWishlist.push(comic);
    }

    cancel(){
        this.currentWishlist = [];
    }
}
