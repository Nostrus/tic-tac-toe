import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { SquareComponent } from './square/square.component';
import { FinishedMessageComponent } from './finished-message/finished-message.component';

@NgModule({
    declarations: [
        AppComponent,
        GridComponent,
        SquareComponent,
        FinishedMessageComponent,
    ],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
