import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PLAYER_1, PLAYER_2 } from '../config';
@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
    @Output() finished: EventEmitter<any> = new EventEmitter();
    @Output() playerChange: EventEmitter<any> = new EventEmitter();

    currentPlayer;
    isFinished = false;
    winner = null;
    state = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ];
    // Represents coordinates for squares in
    // rows, columns, and diagonal lines
    winningLines = [
        ['0,0', '0,1', '0,2'],
        ['1,0', '1,1', '1,2'],
        ['2,0', '2,1', '2,2'],
        ['0,0', '1,0', '2,0'],
        ['0,1', '1,1', '2,1'],
        ['0,2', '1,2', '2,2'],
        ['0,0', '1,1', '2,2'],
        ['0,2', '1,1', '2,0'],
    ];

    constructor() {}

    ngOnInit() {
        this.setCurrentPlayer(PLAYER_1);
    }

    updateState(row, column) {
        if (this.isFinished) {
            return false;
        }

        if (this.state[row][column] === null) {
            this.state[row][column] = this.currentPlayer;
        }

        if (!this.isGameFinished()) {
            this.switchPlayer();
        } else {
            this.finished.emit({ winner: this.winner });
            this.setCurrentPlayer(null);
            this.isFinished = true;
        }
    }

    setCurrentPlayer(player) {
        this.currentPlayer = player;
        this.playerChange.emit(player);
    }

    switchPlayer() {
        if (this.currentPlayer === PLAYER_1) {
            this.setCurrentPlayer(PLAYER_2);
        } else {
            this.setCurrentPlayer(PLAYER_1);
        }
    }

    getStateFromStringPair(coordsString) {
        const parts = coordsString.split(',');
        const row = parseInt(parts[0], 10);
        const column = parseInt(parts[1], 10);

        return this.state[row][column];
    }

    hasSomeoneWon() {
        for (const line of this.winningLines) {
            if (
                this.getStateFromStringPair(line[0]) !== null &&
                this.getStateFromStringPair(line[0]) ===
                    this.getStateFromStringPair(line[1]) &&
                this.getStateFromStringPair(line[1]) ===
                    this.getStateFromStringPair(line[2])
            ) {
                this.winner = this.currentPlayer;
                return true;
            }
        }
    }

    isTie() {
        let isTie = true;

        for (const row of this.state) {
            for (const cell of row) {
                if (cell === null) {
                    isTie = false;
                }
            }
        }

        return isTie;
    }

    isGameFinished() {
        return this.hasSomeoneWon() || this.isTie();
    }
}
