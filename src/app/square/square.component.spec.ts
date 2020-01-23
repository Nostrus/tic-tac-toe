import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PLAYER_1, PLAYER_2 } from '../config';
import { SquareComponent } from './square.component';
import { By } from '@angular/platform-browser';
import { findStaticQueryIds } from '@angular/compiler';

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

    it(`should set content when clicked and make it unchangable`, () => {
        const wrapperElement = fixture.nativeElement.querySelector('.wrapper');
        expect(component.player).toBeUndefined();
        expect(wrapperElement.textContent).toBe('');

        component.state = PLAYER_1;
        fixture.debugElement
            .query(By.css('.wrapper'))
            .triggerEventHandler('click', {});
        fixture.detectChanges();

        expect(wrapperElement.textContent).toBe(PLAYER_1);

        component.state = PLAYER_2;
        fixture.debugElement
            .query(By.css('.wrapper'))
            .triggerEventHandler('click', {});
        fixture.detectChanges();

        expect(wrapperElement.textContent).toBe(PLAYER_1);
    });

    it(`should set content properly for second player once clicked`, () => {
        const wrapperElement = fixture.nativeElement.querySelector('.wrapper');
        expect(component.player).toBeUndefined();
        expect(wrapperElement.textContent).toBe('');

        component.player = PLAYER_2;
        fixture.debugElement
            .query(By.css('.wrapper'))
            .triggerEventHandler('click', {});
        fixture.detectChanges();

        expect(wrapperElement.textContent).toBe(PLAYER_2);
    });

    it(`should set content in a square when a player clicks it`, () => {
        component.state = PLAYER_1;
        spyOn(component, 'setContent').and.callThrough();
        spyOn(component.update, 'emit');
        const wrapperElement = fixture.debugElement.query(By.css('.wrapper'));
        fixture.detectChanges();

        wrapperElement.triggerEventHandler('click', {});
        fixture.detectChanges();

        expect(component.setContent).toHaveBeenCalled();
        fixture.detectChanges();
        expect(component.update.emit).toHaveBeenCalledWith();
        expect(wrapperElement.nativeElement.textContent).toBe(PLAYER_1);
    });
});
