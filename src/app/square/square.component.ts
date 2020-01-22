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

    content = null;
    constructor() {}

    ngOnInit() {}

    setContent() {
        if (this.state) {
            return false;
        }

        this.update.emit();
    }
}
