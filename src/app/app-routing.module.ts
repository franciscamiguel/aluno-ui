import { EditarAlunoComponent } from './editar-aluno/editar-aluno.component';
import { ListaDeAlunoComponent } from './lista-de-aluno/lista-de-aluno.component';
import { AlunoComponent } from './aluno/aluno.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'aluno', component: AlunoComponent},
  {path: 'lista-de-alunos', component: ListaDeAlunoComponent },
  {path: 'editar-aluno/:id', component: EditarAlunoComponent},
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
