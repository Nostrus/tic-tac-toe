import { PLAYER_1, PLAYER_2 } from './../config';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'app-square',
    templateUrl: './square.component.html',
    styleUrls: ['./square.component.scss'],
})
export class SquareComponent implements OnInit {
    @Output() update: EventEmitter<any> = new EventEmitter();
    @Input() player;
    @Input() state;
    PLAYER_1 = PLAYER_1;
    PLAYER_2 = PLAYER_2;

    constructor() {}

    ngOnInit() {}

    setContent() {
        if (this.state) {
            return false;
        }

        this.update.emit();
    }
}
