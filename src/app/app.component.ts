import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
    selector: 'pok-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'Pokel';

    constructor() { }

    ngOnInit() { }

    ngOnDestroy() { }
}
