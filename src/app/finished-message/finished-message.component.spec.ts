import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedMessageComponent } from './finished-message.component';

describe('FinishedMessageComponent', () => {
  let component: FinishedMessageComponent;
  let fixture: ComponentFixture<FinishedMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishedMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishedMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
