import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { SquareComponent } from './square/square.component';
import { StatusMessageComponent } from './status-message/status-message.component';

@NgModule({
    declarations: [
        AppComponent,
        GridComponent,
        SquareComponent,
        StatusMessageComponent,
    ],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
