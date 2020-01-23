import { PLAYER_1, PLAYER_2 } from './../config';
import { SquareComponent } from './../square/square.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridComponent } from './grid.component';
import { By } from '@angular/platform-browser';

describe('GridComponent', () => {
    let component: GridComponent;
    let fixture: ComponentFixture<GridComponent>;
    const mockState = [
        [PLAYER_1, PLAYER_2, PLAYER_2],
        [null, PLAYER_1, null],
        [PLAYER_2, null, null],
    ];
    const winningState = [
        [PLAYER_2, PLAYER_2, PLAYER_2],
        [null, PLAYER_1, null],
        [PLAYER_2, null, null],
    ];

    const tieState = [
        [PLAYER_2, PLAYER_1, PLAYER_2],
        [PLAYER_1, PLAYER_1, PLAYER_2],
        [PLAYER_2, PLAYER_2, PLAYER_1],
    ];

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

    it(`should call updateState method and update state properly when a player clicks a square`, () => {
        component.state = mockState;
        component.currentPlayer = PLAYER_1;
        const squareElements = fixture.debugElement.queryAll(
            By.directive(SquareComponent)
        );
        spyOn(component, 'updateState').and.callThrough();

        squareElements[5].componentInstance.update.emit();
        fixture.detectChanges();

        expect(component.updateState).toHaveBeenCalledWith(1, 2);
        expect(component.state[1][2]).toBe(PLAYER_1);
    });

    it('should return a square state from a string pair of coords ', () => {
        component.state = mockState;

        expect(component.getStateFromStringPair('0,0')).toBe(PLAYER_1);
        expect(component.getStateFromStringPair('2,0')).toBe(PLAYER_2);
        expect(component.getStateFromStringPair('1,0')).toBe(null);
    });

    it('should check if someone has won', () => {
        component.state = mockState;

        expect(component.hasSomeoneWon()).toBe(false);

        component.state = winningState;

        expect(component.hasSomeoneWon()).toBe(true);
        expect(component.isGameFinished()).toBe(true);
    });

    it('should check if the game ended in a tie', () => {
        component.state = mockState;

        expect(component.isTie()).toBe(false);

        component.state = tieState;

        expect(component.isTie()).toBe(true);
        expect(component.isGameFinished()).toBe(true);
    });
});
