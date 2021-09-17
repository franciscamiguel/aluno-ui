import { EditarAlunoComponent } from './../editar-aluno/editar-aluno.component';
import { ListaDeAlunoComponent } from './../lista-de-aluno/lista-de-aluno.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  [x: string]: any;
  baseURL = 'http://localhost:58958/api/aluno/';

  constructor(private http: HttpClient) { }

  // C - create
  salvarAluno(aluno: any) {
    return this.http.post(`${this.baseURL}salvar-aluno`,aluno);
  }
  // R - ready (leitura)
 buscarAlunos() {
   return this.http.get(`${this.baseURL}exibir-alunos`);
 }

 // R - ready (leitura)
 buscarAluno(id: any) {
  	return this.http.get(`${this.baseURL}buscar-aluno/${id}`)
 }

 // U - update (atualizar)
 atualizarAluno(aluno: any) {
  return this.http.put(`${this.baseURL}atualizar-aluno`,aluno);
}

// D
excluirAluno(id: number) {
  return this.http.delete(`${this.baseURL}excluir-aluno/${id}`);
}
}
  
  
  




