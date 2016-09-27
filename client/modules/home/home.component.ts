import { Component } from "@angular/core";

@Component({
    selector: "home",
    styleUrls: ['client/modules/home/home.component.css'],
    templateUrl: `client/modules/home/home.component.html`
})
export class HomeComponent {
    switcher = "one";
    name;

    fadeIn = true;

    constructor() {

    }

    changeData(){
        this.switcher = this.name;

    }


}
