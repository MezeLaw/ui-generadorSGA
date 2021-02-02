import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '../material-module';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';
import { SidenavResponsiveComponent } from './componentes/sidenav-responsive/sidenav-responsive.component';
import { HomeComponent } from './componentes/home/home.component';
import { NewsComponent } from './componentes/news/news.component';
import { GeneradorSGAComponent } from './componentes/generador-sga/generador-sga.component';
import { UsefullLinksComponent } from './componentes/usefull-links/usefull-links.component';
import { FooterComponent } from './componentes/footer/footer.component'; 
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavResponsiveComponent,
    HomeComponent,
    NewsComponent,
    GeneradorSGAComponent,
    UsefullLinksComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
