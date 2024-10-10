import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },              // Página inicial (Home)
  { path: 'projects', component: ProjectsComponent },  // Página de projetos
  { path: 'skills', component: SkillsComponent },      // Página de habilidades
  { path: 'contact', component: ContactComponent },    // Página de contato
  { path: '**', redirectTo: '', pathMatch: 'full' }     // Redireciona para Home se a rota não existir
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
