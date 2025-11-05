import { Component, signal } from '@angular/core';
import { Aluno } from './aluno';
import { AlunoService } from './aluno.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})

export class App {
    protected readonly title = signal('ta-gui');
    constructor(private alunoService: AlunoService) {}

    aluno: Aluno = new Aluno();
    alunos: Aluno[] = [];
    cpfduplicado: boolean = false;

    criarAluno(a: Aluno): void {
      if (this.alunoService.criar(a)) {
        this.alunos.push(a);
        this.aluno = new Aluno();
      } else {
        this.cpfduplicado = true;
      }
    }

    onMove(): void {
      this.cpfduplicado = false;
    }

}
