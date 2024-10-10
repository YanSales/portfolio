import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  nome: string = 'Yan Silva Sales';
  funcao: string = 'Full Stack Developer';
  descricao: string = 'Bem-vindo ao meu portfólio! Sou um desenvolvedor apaixonado por criar soluções inovadoras e eficientes que fazem a diferença. Com experiência em diversas tecnologias e uma dedicação constante ao aprendizado, estou sempre em busca de novos desafios. Meu objetivo é transformar ideias em realidades funcionais e impactantes. Navegue pelo meu portfólio e descubra projetos que demonstram minha habilidade em desenvolvimento front-end e back-end. Estou sempre aberto a colaborações e novas oportunidades, então não hesite em entrar em contato!';

  constructor() {}
}
