import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PLAYER_1, PLAYER_2 } from '../config';
import { SquareComponent } from './square.component';
import { By } from '@angular/platform-browser';

describe('SquareComponent', () => {
    let component: SquareComponent;
    let fixture: ComponentFixture<SquareComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SquareComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SquareComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it(`should set content based on state`, () => {
        const wrapperElement = fixture.nativeElement.querySelector('.wrapper');
        expect(component.player).toBeUndefined();
        expect(wrapperElement.textContent).toBe('');

        component.state = null;
        fixture.detectChanges();
        expect(wrapperElement.textContent).toBe('');

        component.state = PLAYER_2;
        fixture.detectChanges();
        expect(wrapperElement.textContent).toBe(PLAYER_2);
    });

    it(`should send update event when a player clicks a square the first time`, () => {
        component.state = null;
        component.player = PLAYER_1;
        spyOn(component, 'setContent').and.callThrough();
        spyOn(component.update, 'emit');
        const wrapperElement = fixture.debugElement.query(By.css('.wrapper'));
        fixture.detectChanges();

        wrapperElement.triggerEventHandler('click', {});
        fixture.detectChanges();

        expect(component.setContent).toHaveBeenCalled();
        fixture.detectChanges();
        expect(component.update.emit).toHaveBeenCalledWith();
    });

    it(`should NOT send update event if a square has already been clicked earlier`, () => {
        component.state = PLAYER_1;
        component.player = PLAYER_2;
        spyOn(component, 'setContent').and.callThrough();
        spyOn(component.update, 'emit');
        const wrapperElement = fixture.debugElement.query(By.css('.wrapper'));
        fixture.detectChanges();

        wrapperElement.triggerEventHandler('click', {});
        fixture.detectChanges();

        expect(component.update.emit).not.toHaveBeenCalled();
    });
});
