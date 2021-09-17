import { AlunoService } from './aluno.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {
    form!: FormGroup;
    aluno: any;

  constructor(private fb: FormBuilder , private alunoService: AlunoService) { }

  ngOnInit(): void {
    this.validacao()
  }

  validacao() {
    this.form = this.fb.group({
      nomeAluno: '',
      NomePai: '',
      NomeMae: '',
      Sexo: '',
      Nascimento: '',
      RG: '',
      CPF: '',
      Telefone: '',
      Rua: '',
      Numero: '',
      Turma: '',
      Curso: '',
      Turno: '',
      DataMAtricula: '',
    })
  }

  salvarAluno(){
      this.aluno = Object.assign(this.form.value);
      
      this.alunoService.salvarAluno(this.aluno).subscribe(
        (aluno: any) => {

        }
      );
  }
}
