import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly themeKey = 'preferredTheme';

  constructor() {
    // Carregar o tema salvo ao iniciar
    const savedTheme = localStorage.getItem(this.themeKey);
    if (savedTheme) {
      this.setTheme(savedTheme);
    }
  }

  toggleTheme(): void {
    const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }

  setTheme(theme: string): void {
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
    // Salvar o tema selecionado no localStorage
    localStorage.setItem(this.themeKey, theme);
  }

  getTheme(): string {
    return document.body.classList.contains('dark-theme') ? 'dark' : 'light';
  }
}
