import { StatusMessageComponent } from './status-message/status-message.component';
import { SquareComponent } from './square/square.component';
import { GridComponent } from './grid/grid.component';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PLAYER_1 } from './config';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                GridComponent,
                SquareComponent,
                StatusMessageComponent,
            ],
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should render title', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();

        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain(
            'Tic tac toe'
        );
    });

    it('should show initial current player', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();

        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('main').textContent).toContain(
            `Current player is: ${PLAYER_1}`
        );
    });

    it('should show winner', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.componentInstance.winner = PLAYER_1;
        fixture.componentInstance.isFinished = true;
        fixture.detectChanges();

        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('main').textContent).toContain(
            `Player ${PLAYER_1} wins`
        );
    });

    it('should show if it is a tie', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.componentInstance.winner = null;
        fixture.componentInstance.isFinished = true;
        fixture.detectChanges();

        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('main').textContent).toContain(
            `It's a tie`
        );
    });
});
