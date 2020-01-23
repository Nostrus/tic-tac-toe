import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    winner;
    currentPlayer;
    isFinished = false;

    setCurrentPlayer(player) {
        this.currentPlayer = player;
    }

    gameFinished(data) {
        this.isFinished = true;
        this.winner = data.winner;
    }
}
