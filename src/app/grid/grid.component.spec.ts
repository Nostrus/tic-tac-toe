import { SquareComponent } from './../square/square.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridComponent } from './grid.component';
import { By } from '@angular/platform-browser';

describe('GridComponent', () => {
    let component: GridComponent;
    let fixture: ComponentFixture<GridComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GridComponent, SquareComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GridComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have 9 squares', () => {
        const squareElements = fixture.debugElement.queryAll(
            By.directive(SquareComponent)
        );
        expect(squareElements.length).toBe(9);
    });

    it(`should call updateState method when a player clicks a square`, () => {
        const squareElements = fixture.debugElement.queryAll(
            By.directive(SquareComponent)
        );
        spyOn(component, 'updateState');
        squareElements[5].componentInstance.update.emit();

        fixture.detectChanges();

        expect(fixture.componentInstance.updateState).toHaveBeenCalledWith(
            1,
            2
        );
    });
});
