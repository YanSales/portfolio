import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
  isDarkTheme = false;  // Estado inicial para o tema claro

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    // Verifica o tema atual ao carregar a página
    const currentTheme = this.themeService.getTheme();
    this.isDarkTheme = currentTheme === 'dark';
  }


  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.themeService.toggleTheme();

    // Alternar entre os temas adicionando/removendo a classe 'dark-theme' no <body>
    if (this.isDarkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }

}
