import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyPt1Component } from './body-pt1.component';

describe('BodyPt1Component', () => {
  let component: BodyPt1Component;
  let fixture: ComponentFixture<BodyPt1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyPt1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BodyPt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
