import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeAlunoComponent } from './lista-de-aluno.component';

describe('ListaDeAlunoComponent', () => {
  let component: ListaDeAlunoComponent;
  let fixture: ComponentFixture<ListaDeAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDeAlunoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
