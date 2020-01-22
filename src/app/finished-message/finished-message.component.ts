import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-finished-message',
    templateUrl: './finished-message.component.html',
    styleUrls: ['./finished-message.component.scss'],
})
export class FinishedMessageComponent implements OnInit {
    @Input() winner;

    constructor() {}

    ngOnInit() {}
}
