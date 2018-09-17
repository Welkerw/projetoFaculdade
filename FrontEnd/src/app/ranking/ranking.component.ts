import { Component, OnInit } from '@angular/core';
import { Faculdade } from '../faculdade';
import { FaculdadeService } from '../faculdade/faculdade.service';
import { CursoService } from '../curso/curso.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css'],
  providers: [FaculdadeService]
})
export class RankingComponent implements OnInit {
  public ranking;
  public typeRanking;
  constructor(private faculdadeService: FaculdadeService, private cursoService: CursoService) { }

  ngOnInit() {
    this.rankingPorInstituicao();
  }

  rankingPorInstituicao() {
    this.typeRanking = 'I';
    this.ranking = this.faculdadeService.buscarTodos().subscribe(resposta => this.ranking = resposta);
  }

  rankingPorCurso() {
    this.typeRanking = 'C';
    this.ranking = this.cursoService.buscarTodos().subscribe(resposta => this.ranking = resposta);
  }

  rankingPorMediaAluno() {
    this.typeRanking = 'N';
    this.ranking = this.cursoService.buscarPorIntituicaoId(1).subscribe(resposta => this.ranking = resposta);
  }
}
