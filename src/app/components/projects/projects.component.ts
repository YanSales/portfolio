import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      name: 'TaskMaster API',
      date: 'Oct.2024',
      type: 'API',
      role: 'Design & Dev',
      technologies: [
        { name: 'c-sharp', icon: 'assets/icons/c-sharp.png' },
        { name: 'angular', icon: 'assets/icons/angular.png' }
      ],
      repoLink: 'https://github.com/YanSales/TaskmasterAPI'
    },
    {
      name: 'Product Catalog API',
      date: 'Oct.2024',
      type: 'API',
      role: 'Design & Dev',
      technologies: [
        { name: 'c-sharp', icon: 'assets/icons/c-sharp.png' },
        { name: 'html', icon: 'assets/icons/html.png' },
        { name: 'css', icon: 'assets/icons/css.png' },
        { name: 'javascript', icon: 'assets/icons/javascript.png' }
      ],
      repoLink: 'https://github.com/YanSales/ProductCatalogAPI'
    },
    {
      name: 'Weather Wizard API',
      date: 'Oct.2024',
      type: 'API',
      role: 'Design & Dev',
      technologies: [
        { name: 'JavaScript', icon: 'assets/icons/javascript.png' },
        { name: 'Angular', icon: 'assets/icons/angular.png' }
      ],
      repoLink: 'https://github.com/username/production-hasu'
    },
    {
      name: 'Hotel Booking API',
      date: 'Oct.2024',
      type: 'API',
      role: 'Design & Dev',
      technologies: [
        { name: 'JavaScript', icon: 'assets/icons/javascript.png' },
        { name: 'Angular', icon: 'assets/icons/angular.png' }
      ],
      repoLink: 'https://github.com/username/production-hasu'
    },
    {
      name: 'Blog Spot API',
      date: 'Oct.2024',
      type: 'API',
      role: 'Design & Dev',
      technologies: [
        { name: 'JavaScript', icon: 'assets/icons/javascript.png' },
        { name: 'Angular', icon: 'assets/icons/angular.png' }
      ],
      repoLink: 'https://github.com/username/production-hasu'
    },
    {
      name: 'FinanceTrackerAPI',
      date: 'Oct.2024',
      type: 'API',
      role: 'Design & Dev',
      technologies: [
        { name: 'JavaScript', icon: 'assets/icons/javascript.png' },
        { name: 'Angular', icon: 'assets/icons/angular.png' }
      ],
      repoLink: 'https://github.com/username/production-hasu'
    },
    // Adicione mais projetos aqui
  ];

  ngOnInit() {
    // Esperar o DOM carregar para iniciar o observer
    setTimeout(() => {
      const projects = document.querySelectorAll('.project');

      const observerOptions = {
        threshold: 0.5 // O projeto precisa estar 50% visível para ativar a animação
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');  // Adiciona a classe 'visible' quando o projeto entra na view
          } else {
            entry.target.classList.remove('visible');  // Remove a classe quando sai da view (opcional)
          }
        });
      }, observerOptions);

      projects.forEach((project) => {
        observer.observe(project);  // Observa cada projeto
      });
    }, 100);
  }
}
