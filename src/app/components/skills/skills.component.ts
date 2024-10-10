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

  ];
}
