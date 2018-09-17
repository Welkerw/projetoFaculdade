import { Component, OnInit } from '@angular/core';

import { HttpClientJsonpModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CursoService } from './curso.service';
import { FormGroup } from '@angular/forms';
import { FaculdadeService } from '../faculdade/faculdade.service';
import { Curso } from '../cursos';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css'],
  providers: [FaculdadeService]
})
export class CursoComponent implements OnInit {
    constructor(private cursoService: CursoService, private faculdadeService: FaculdadeService) {
    }
      public cursos;
      public faculdades;
      public idInstituicao;
      curso: any;
      ngOnInit() {
        this.curso = {};
        this.faculdades = this.faculdadeService.buscarTodos().subscribe(resposta => this.faculdades = resposta);
      }
      criar(frm: FormGroup) {
          this.cursoService.criar(this.curso).subscribe(resposta => {
            this.faculdades = this.faculdadeService.buscarTodos().subscribe(resp => this.faculdades = resp);
            this.cursos = this.cursoService.buscarPorIntituicaoId(this.idInstituicao).subscribe(resp => this.cursos = resp);
            frm.reset();
          });
      }

      setInstituicao(idInstituicao) {
        this.idInstituicao = idInstituicao;
        this.cursos = this.cursoService.buscarPorIntituicaoId(this.idInstituicao).subscribe(resp => this.cursos = resp);
      }
}
