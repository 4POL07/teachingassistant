import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Aluno } from './aluno';
import { AlunoService } from './aluno.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'alunos',
    templateUrl: './alunos.html',
    styleUrls: ['./alunos.css'], 
    imports: [FormsModule, CommonModule], 
    standalone: true
})
export class Alunos implements OnInit {
    constructor(private alunoService: AlunoService) {}

    aluno: Aluno = new Aluno();
    alunos: Aluno[];
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

    ngOnInit(): void {
        this.alunos = this.alunoService.getAlunos();
    }

}