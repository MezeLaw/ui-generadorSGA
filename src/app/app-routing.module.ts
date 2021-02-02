import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneradorSGAComponent } from './componentes/generador-sga/generador-sga.component';
import { HomeComponent } from './componentes/home/home.component';
import { NewsComponent } from './componentes/news/news.component';
import { UsefullLinksComponent } from './componentes/usefull-links/usefull-links.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'noticias', component: NewsComponent},
  { path: 'generador', component: GeneradorSGAComponent},
  { path: 'links-importantes', component: UsefullLinksComponent},
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
