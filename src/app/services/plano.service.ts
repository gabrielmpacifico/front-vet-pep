import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Plano {
  idPlano: number;
  descricao: string;
  ativo: string;
} 

@Injectable({
  providedIn: 'root'
})
export class PlanoService {

  private apiUrl = 'http://localhost:8080/plano';
  constructor(private http: HttpClient) {}

  getPlanos(): Observable<Plano[]> {
    return this.http.get<Plano[]>(this.apiUrl);
  }

}
