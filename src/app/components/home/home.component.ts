import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentWord: string = '';
  words: string[] = ['Frontend Designer', 'Web Designer', 'UI/UX Designer', 'Web Developer', 'Software Tester'];
  wordIndex: number = 0;
  charIndex: number = 0;
  isDeleting: boolean = false;
  typingSpeed: number = 100; // Velocidade de digitação mais rápida
  deletingSpeed: number = 50; // Velocidade de apagar mais rápida
  delayAfterTyping: number = 1500; // Atraso menor após completar uma palavra
  delayAfterDeleting: number = 200; // Atraso menor após apagar uma palavra

  ngOnInit() {
    this.typeWords();
  }

  typeWords() {
    const currentWord = this.words[this.wordIndex % this.words.length];

    if (this.isDeleting) {
      this.currentWord = currentWord.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      this.currentWord = currentWord.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    // Lógica para alternar entre digitar e apagar
    if (!this.isDeleting && this.charIndex === currentWord.length) {
      setTimeout(() => {
        this.isDeleting = true;
      }, this.delayAfterTyping); // Pausa curta após digitar a palavra completa
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.wordIndex++;
      setTimeout(() => this.typeWords(), this.delayAfterDeleting); // Pausa curta após apagar a palavra completa
      return;
    }

    setTimeout(() => this.typeWords(), this.isDeleting ? this.deletingSpeed : this.typingSpeed);
  }
}
