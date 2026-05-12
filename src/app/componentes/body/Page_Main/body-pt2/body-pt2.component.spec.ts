import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyPt2Component } from './body-pt2.component';

describe('BodyPt2Component', () => {
  let component: BodyPt2Component;
  let fixture: ComponentFixture<BodyPt2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyPt2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BodyPt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
