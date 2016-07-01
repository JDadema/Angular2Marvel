// wishlist.service.ts
import {Subject} from "rxjs/Subject";
import {Injectable} from "@angular/core";

@Injectable()
export class WishlistService {
    Stream:Subject<any>;

    constructor() {
        this.Stream = new Subject();
    }
}