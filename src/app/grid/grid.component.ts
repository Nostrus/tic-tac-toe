import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
    currentPlayer = 'X';
    squares = Array(9);
    constructor() {}

    ngOnInit() {}

    updateState() {
        this.switchPlayer();
    }

    switchPlayer() {
        if (this.currentPlayer === 'X') {
            this.currentPlayer = 'O';
        } else {
            this.currentPlayer = 'X';
        }
    }
}
