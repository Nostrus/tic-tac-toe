import { async, ComponentFixture, TestBed } from '@angular/core/testing';

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

    it(`should have proper content based on player's mark`, () => {
        const wrapperElement = fixture.nativeElement.querySelector('.wrapper');
        expect(component.player).toBe(null);
        expect(wrapperElement.textContent).toBe('');

        component.player = 'X';
        fixture.detectChanges();

        expect(wrapperElement.textContent).toBe('X');

        component.player = 'O';
        fixture.detectChanges();

        expect(wrapperElement.textContent).toBe('O');
    });

    it(`should set content in a square when a player clicks it`, () => {
        component.player = 'X';
        spyOn(component, 'setContent').and.callThrough();
        spyOn(component.update, 'emit');
        const wrapperElement = fixture.debugElement.query(By.css('.wrapper'));
        fixture.detectChanges();

        wrapperElement.triggerEventHandler('click', {});
        fixture.detectChanges();

        expect(component.setContent).toHaveBeenCalled();
        fixture.detectChanges();
        expect(component.update.emit).toHaveBeenCalledWith();
        expect(wrapperElement.nativeElement.textContent).toBe('X');
    });
});
