import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'app-square',
    templateUrl: './square.component.html',
    styleUrls: ['./square.component.scss'],
})
export class SquareComponent implements OnInit {
    @Output() update: EventEmitter<any> = new EventEmitter();

    @Input() player;
    content = null;
    constructor() {}

    ngOnInit() {}

    setContent() {
        if (this.content) {
            return false;
        }

        if (this.player === 'X') {
            this.content = 'X';
        }

        if (this.player === 'O') {
            this.content = 'O';
        }
        this.update.emit();
    }
}
