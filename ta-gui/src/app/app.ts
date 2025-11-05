import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('ta-gui');
  aluno: Aluno = {nome: "", cpf: "", email: ""};
}


export class Aluno {
  nome: string;
  cpf: string;
  email: string;
}
