import { AlunoService } from './../aluno/aluno.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-editar-aluno',
  templateUrl: './editar-aluno.component.html',
  styleUrls: ['./editar-aluno.component.css']
})
export class EditarAlunoComponent implements OnInit {
  form!: FormGroup;
  EditarAluno: any;
  aluno: any;
  

  constructor(
    private fb: FormBuilder , 
    private alunoService: AlunoService,
    private rota: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.validacao()
    this.buscarAluno();

  }
  validacao() {
    this.form = this.fb.group({
      id: [],
      nomeAluno: '',
      nomePai: '',
      nomeMae: '',
      sexo: '',
      nascimento: '',
      rg: '',
      cpf: '',
      telefone: '',
      rua: '',
      numero: '',
      turma: '',
      curso: '',
      turno: '',
      dataMAtricula: '',
    })
}

  buscarAluno(){
    let id = this.rota.snapshot.paramMap.get('id');

    this.alunoService.buscarAluno(id).subscribe(
      (aluno: any) => {
        this.aluno = Object.assign(aluno);

        this.form.patchValue(this.aluno);
      }
    );
  }

  atualizarAluno() {
    this.aluno = Object.assign(this.form.value);
    this.alunoService.atualizarAluno(this.aluno).subscribe(
      ()=> {
        this.toastr.success('Dados do aluno atualizado com sucesso', 'Atualizar')
      }, error => {
        this.toastr.error('Falha: não foi possivel atualizar aluno', 'Atualizar')

      }
    );
  }
}
  



