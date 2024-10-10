import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  submitForm() {
    // Aqui você pode adicionar a lógica para enviar o formulário, como uma chamada de API
    console.log('Nome:', this.name);
    console.log('Email:', this.email);
    console.log('Mensagem:', this.message);

    // Limpar o formulário após o envio
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
