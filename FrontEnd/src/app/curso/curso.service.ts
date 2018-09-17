import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { CURSOS } from '../mocked-faculdades';
@Injectable({
  providedIn: 'root'
})
export class CursoService {

  req = 'http://localhost:3000/cursos/';
    constructor(private http: HttpClient) { }
    buscarTodos() {
      //  return Array<any>(CURSOS);
      return this.http.get<Array<any>>(this.req);
    }
    criar(curso: any) {
         return this.http.post(this.req, curso);
    }

    buscarPorIntituicaoId(idInstituicao: number) {
      const param = new HttpParams().set('id', idInstituicao.toString());
      return this.http.get<Array<any>>(this.req, { params: param });
    }
}
