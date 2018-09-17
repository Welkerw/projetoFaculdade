import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FaculdadeComponent } from './faculdade/faculdade.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {CursoComponent } from './curso/curso.component';
import {SidebarModule} from './sidebar/sidebar.module';
import {NavbarModule} from './shared/navbar/navbar.module';
import {FooterModule} from './shared/footer/footer.module';
import {FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import { RankingComponent } from './ranking/ranking.component';



const appRoutes: Routes = [
  {
    path: 'faculdade',
    component: FaculdadeComponent,
    data: { title: 'Instituição' }
  },
  {
    path: 'curso',
    component: CursoComponent,
    data: { title: 'Curso' }
  },
  { path: 'ranking',
    component: RankingComponent,
    pathMatch: 'full'
  },
  { path: '',
    component: RankingComponent,
    pathMatch: 'full'
  }
];



@NgModule({
  declarations: [
    AppComponent,
    FaculdadeComponent,
    CursoComponent,
    RankingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes, { enableTracing: true }
    ),
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
