import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-options-user',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatIconModule, HttpClientModule],
  templateUrl: './options-user.component.html',
  styleUrl: './options-user.component.css',
})
export class OptionsUserComponent {
  /**
   * Construtor responsável por registrar ícones SVG personalizados.
   *
   * @param iconRegistry Serviço que gerencia o catálogo de ícones do Angular Material.
   * @param sanitizer Serviço de segurança para validar URLs de recursos externos/locais.
   */
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    // Registra o ícone SVG para ser usado com a tag <mat-icon svgIcon="meu-logo">
    (iconRegistry.addSvgIcon(
      // bypassSecurityTrustResourceUrl é necessário para que o Angular confie na URL do SVG
      // e previna ataques de XSS, permitindo o carregamento do arquivo da pasta assets.
      'user_default',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/user_default.svg'), //Caminho relativo da logo no projeto
    ),
      iconRegistry.addSvgIcon(
        'cart',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/cart.svg'), //Caminho relativo da logo no projeto
      ));
  }
}
