import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoxAnimationComponent } from './fox-animation.component';

describe('FoxAnimationComponent', () => {
  let component: FoxAnimationComponent;
  let fixture: ComponentFixture<FoxAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoxAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoxAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
