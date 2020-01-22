import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    winner = null;
    isFinished = false;

    gameFinished(data) {
        this.isFinished = true;
        this.winner = data.winner;
    }
}
