import { Component, OnInit } from '@angular/core';
import { PlanoService, Plano } from '../../services/plano.service';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { PaginatorModule } from 'primeng/paginator';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-plano',
  imports: [CommonModule, TableModule, CardModule, PaginatorModule, 
            CheckboxModule, FormsModule, InputGroupAddonModule, InputGroupModule, 
            ButtonModule, FloatLabelModule, ReactiveFormsModule],
  templateUrl: './plano.component.html',
  styleUrl: './plano.component.css'
})
export class PlanoComponent implements OnInit {

  formCadastroPlano: FormGroup;
  planos: Plano[] = [];
  carregando = true;
  constructor(private planoService: PlanoService,
              private formbuilder: FormBuilder
  ){
    this.formCadastroPlano = this.formbuilder.group({
      formDescricao: ['', Validators.required, Validators.maxLength(150)],
      formAtivo: [true]
    })
  }

  ngOnInit(): void {
    this.planoService.getPlanos().subscribe({
      next: (dados) => {
        console.log(dados);
        this.planos = dados;
        this.carregando = false;
      },
      error: (erro) => {
        console.error('Erro ao carregar os planos', erro);
        this.carregando = false;
      }
    });
  }

  onSubmit(){
    if (this.formCadastroPlano.valid) {
      console.log("form enviado - " + this.formCadastroPlano.value);
    }else{
      console.log("Formulário inválido");
    }
  }

}
