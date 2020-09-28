import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WhereIsGuidoComponent } from './Optimisation/where-is-guido/where-is-guido.component';
import { ProgCompComponent } from './Misc/prog-comp/prog-comp.component';
import { IsogradSeptComponent } from './Algorithmique/IsogradSeptembre/isograd-sept.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: 'articles/WhereIsGuido', component: WhereIsGuidoComponent },
  { path: 'articles/ProgComp', component: ProgCompComponent },
  { path: 'articles/IsogradSept', component: IsogradSeptComponent },
  {
    path: '', component: HomeComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
