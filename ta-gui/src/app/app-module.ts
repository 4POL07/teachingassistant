import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Metas } from './metas';
import { Alunos } from './alunos';
import { AlunoService } from './aluno.service';
import { Aluno } from './aluno';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    Metas, 
    Alunos
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    AlunoService,
    // provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
