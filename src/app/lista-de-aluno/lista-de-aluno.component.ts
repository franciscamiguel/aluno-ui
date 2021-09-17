import { AlunoService } from './../aluno/aluno.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-lista-de-aluno',
  templateUrl: './lista-de-aluno.component.html',
  styleUrls: ['./lista-de-aluno.component.css']
})
export class ListaDeAlunoComponent implements OnInit {
  form!: FormGroup;
  ListaDeAluno: any = [];

  constructor(private fb: FormBuilder , private alunoService: AlunoService) { }

  ngOnInit(): void {
    this.buscarAlunos();
  }

  buscarAlunos(){
    this.alunoService.buscarAlunos().subscribe(
      (alunos: any) => {
        this.ListaDeAluno = alunos;
      }
    );
  }
  excluirAluno(id: number) {
    this.alunoService.excluirAluno(id).subscribe(
      () => {
        this.buscarAlunos();
      }
    );
  }
}
