import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-status-message',
    templateUrl: './status-message.component.html',
    styleUrls: ['./status-message.component.scss'],
})
export class StatusMessageComponent implements OnInit {
    @Input() winner;
    @Input() currentPlayer;

    constructor() {}

    ngOnInit() {}
}
