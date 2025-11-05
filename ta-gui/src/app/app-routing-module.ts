import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Alunos} from './alunos';
import { Metas } from './metas';

const routes: Routes = [
  { path: 'alunos', component: Alunos },
  { path: 'metas', component: Metas },
  { path: '', redirectTo: '/alunos', pathMatch: 'full' } 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
