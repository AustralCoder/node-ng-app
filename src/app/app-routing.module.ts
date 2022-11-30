import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{FormularioComponent} from './components/formulario/formulario.component'
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
