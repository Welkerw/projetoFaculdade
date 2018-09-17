import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { FaculdadeService } from './faculdade.service';

@Component({
  selector: 'app-faculdade',
  templateUrl: './faculdade.component.html',
  styleUrls: ['./faculdade.component.css']
})
export class FaculdadeComponent implements OnInit {
  constructor(private service: FaculdadeService) {
      }
      public faculdades;
      faculdade: any;
      ngOnInit() {
        this.faculdade = {};
        this.faculdades =  this.service.buscarTodos().subscribe(resposta => this.faculdades = resposta);
      }
      criar(frm: FormGroup) {
          this.service.criar(this.faculdade).subscribe(resposta => {
            this.faculdades = this.service.buscarTodos().subscribe(resp => this.faculdades = resp);
            frm.reset();
          });
      }
}
