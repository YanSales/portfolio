import { ImageLoader } from "@angular/common";

export interface Skill {
  id: number;
  name: string;
  proficiency: string; // Por exemplo: 'Iniciante', 'Intermediário', 'Avançado'
  icon: string; // URL do ícone da habilidade
}

