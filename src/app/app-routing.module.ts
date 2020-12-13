import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WhereIsGuidoComponent } from './Optimisation/where-is-guido/where-is-guido.component';
import { ProgCompComponent } from './Misc/prog-comp/prog-comp.component';
import { IsogradSeptembreComponent } from './Algorithmique/IsogradSeptembre/isograd-sept.component';
import { Day1_2Component } from './Algorithmique/AoC/day1_2/day1_2.component';
import { Day3Component } from './Algorithmique/AoC/day3/day3.component';
import { Day4Component } from './Algorithmique/AoC/day4/day4.component';
import { HomeAlgorithmComponent } from './homeAlgorithm/homeAlgorithm.component';
import { HomeOptimizationComponent } from './homeOptimization/homeOptimization.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: 'articles/WhereIsGuido', component: WhereIsGuidoComponent },
  { path: 'articles/ProgComp', component: ProgCompComponent },
  { path: 'articles/IsogradSeptembre', component: IsogradSeptembreComponent },
  { path: 'articles/Aoc1_2', component: Day1_2Component },
  { path: 'articles/Aoc3', component: Day3Component },
  { path: 'articles/Aoc4', component: Day4Component },
  {
    path: 'optimization', component: HomeOptimizationComponent
  },
  {
    path: 'algorithm', component: HomeAlgorithmComponent
  },
  {
    path: '', component: HomeComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
