import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-square',
    templateUrl: './square.component.html',
    styleUrls: ['./square.component.scss'],
})
export class SquareComponent implements OnInit {
    @Output() update: EventEmitter<any> = new EventEmitter();

    player = null;
    content = null;
    constructor() {}

    ngOnInit() {}

    setContent() {
        if (this.player === 'X') {
            this.content = 'X';
        }

        if (this.player === 'Y') {
            this.content = 'Y';
        }
        this.update.emit();
    }
}
