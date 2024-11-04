import { Component } from '@angular/core';
import { Skill } from '../../models/skill.model'; // Importa o modelo

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      id: 1,
      name: 'JavaScript',
      proficiency: 'Avançado',
      icon: 'assets/icons/javascript.png' // Substitua pelo URL do ícone
    },
    {
      id: 2,
      name: 'Angular',
      proficiency: 'Intermediário',
      icon: 'assets/icons/angular.png' // Substitua pelo URL do ícone
    },
    {
      id: 3,
      name: 'CSS',
      proficiency: 'Avançado',
      icon: 'assets/icons/css.png' // Substitua pelo URL do ícone
    },
    {
      id: 4,
      name: 'C#',
      proficiency: 'Avançado',
      icon: 'assets/icons/c-sharp.png' // Substitua pelo URL do ícone
    },
    {
      id: 5,
      name: '.Net',
      proficiency: 'Avançado',
      icon: 'assets/icons/dotnet.png' // Substitua pelo URL do ícone
    },
    {
      id: 6,
      name: 'HTML',
      proficiency: 'Avançado',
      icon: 'assets/icons/html.png' // Substitua pelo URL do ícone
    },
    {
      id: 7,
      name: 'Java',
      proficiency: 'Avançado',
      icon: 'assets/icons/java.png' // Substitua pelo URL do ícone
    },

  ];
}


