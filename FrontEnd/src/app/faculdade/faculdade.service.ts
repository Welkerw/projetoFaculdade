import { Injectable } from '@angular/core';

import { HttpClient  } from '@angular/common/http';
import {FACULDADES} from '../mocked-faculdades';

@Injectable({
  providedIn: 'root'
})
export class FaculdadeService {

  req = 'http://localhost:3000/instituicaos/';
    constructor(private http: HttpClient) { }
    buscarTodos() {
         // return Array<any>(FACULDADES);
         return this.http.get<Array<any>>(this.req);
    }
    criar(faculdade: any) {
         return this.http.post(this.req, faculdade);
    }

    buscarPorIntituicaoId(idInstituicao) {
      return this.http.get<Array<any>>(this.req, idInstituicao);
    }
}