import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, HttpClientModule, MatIconModule],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css',
})
export class LogoComponent {
  /**
   * Construtor responsável por registrar ícones SVG personalizados.
   *
   * @param iconRegistry Serviço que gerencia o catálogo de ícones do Angular Material.
   * @param sanitizer Serviço de segurança para validar URLs de recursos externos/locais.
   */
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    // Registra o ícone SVG para ser usado com a tag <mat-icon svgIcon="meu-logo">
    iconRegistry.addSvgIcon(
      // bypassSecurityTrustResourceUrl é necessário para que o Angular confie na URL do SVG
      // e previna ataques de XSS, permitindo o carregamento do arquivo da pasta assets.
      'meu-logo',
      sanitizer.bypassSecurityTrustResourceUrl('assets/logo_furniro/logo.svg'),
    );
  }
}
