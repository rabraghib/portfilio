import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InterstsComponent } from './intersts.component';

describe('InterstsComponent', () => {
  let component: InterstsComponent;
  let fixture: ComponentFixture<InterstsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InterstsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterstsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
