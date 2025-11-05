import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Aluno } from './aluno';
import { AlunoService } from './aluno.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'metas',
    templateUrl: './metas.html',
    styleUrls: ['./metas.css'],
    imports: [FormsModule, CommonModule], 
    standalone: true
})
export class Metas implements OnInit {
    constructor(private alunoService: AlunoService) {}

    alunos: Aluno[];

    atualizarAluno(aluno: Aluno): void {
        this.alunoService.atualizar(aluno);
    }

    ngOnInit(): void {
        this.alunos = this.alunoService.getAlunos();
    }

}