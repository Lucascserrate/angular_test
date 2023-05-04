import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html',
    styleUrls: ['./contador.component.css']
})

export class ContadorComponent {
    num: number = 1;

    add() {
        if (this.num < 10) this.num++
    }
    min() {
        if (this.num > 0) this.num--
    }
}