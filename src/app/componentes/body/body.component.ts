import { Component } from '@angular/core';
import { BodyPt1Component } from './Page_Main/body-pt1/body-pt1.component';
import { BodyPt2Component } from './Page_Main/body-pt2/body-pt2.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [BodyPt1Component, BodyPt2Component],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent {}
