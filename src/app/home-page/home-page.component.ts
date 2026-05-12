import { Component } from '@angular/core';
import { HeaderComponent } from '../componentes/header/header.component';
import { BodyComponent } from '../componentes/body/body.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, BodyComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
