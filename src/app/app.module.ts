import { AlunoService } from './aluno/aluno.service';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './lista-de-aluno/nav/nav.component';
import { AlunoComponent } from './aluno/aluno.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaDeAlunoComponent } from './lista-de-aluno/lista-de-aluno.component';
import { EditarAlunoComponent } from './editar-aluno/editar-aluno.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AlunoComponent,
    ListaDeAlunoComponent,
    EditarAlunoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut:7000,
      positionClass: 'toast-bottom-right', 
      preventDuplicates: true
    })
  ],
  providers: [
    AlunoService,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
