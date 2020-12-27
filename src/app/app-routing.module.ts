import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WhereIsGuidoComponent } from './Optimisation/where-is-guido/where-is-guido.component';
import { ProgCompComponent } from './Misc/prog-comp/prog-comp.component';
import { IsogradSeptembreComponent } from './Algorithmique/IsogradSeptembre/isograd-sept.component';
import { Day1_2Component } from './Algorithmique/AoC/day1_2/day1_2.component';
import { Day3Component } from './Algorithmique/AoC/day3/day3.component';
import { Day4Component } from './Algorithmique/AoC/day4/day4.component';
import { Day5Component } from './Algorithmique/AoC/day5/day5.component';
import { Day6Component } from './Algorithmique/AoC/day6/day6.component';
import { Day7Component } from './Algorithmique/AoC/day7/day7.component';
import { Day8Component } from './Algorithmique/AoC/day8/day8.component';
import { Day9Component } from './Algorithmique/AoC/day9/day9.component';
import { Day10Component } from './Algorithmique/AoC/day10/day10.component';
import { Day11Component } from './Algorithmique/AoC/day11/day11.component';
import { Day12Component } from './Algorithmique/AoC/day12/day12.component';
import { Day13Component } from './Algorithmique/AoC/day13/day13.component';
import { Day14Component } from './Algorithmique/AoC/day14/day14.component';
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
  { path: 'articles/Aoc5', component: Day5Component },
  { path: 'articles/Aoc6', component: Day6Component },
  { path: 'articles/Aoc7', component: Day7Component },
  { path: 'articles/Aoc8', component: Day8Component },
  { path: 'articles/Aoc9', component: Day9Component },
  { path: 'articles/Aoc10', component: Day10Component },
  { path: 'articles/Aoc11', component: Day11Component },
  { path: 'articles/Aoc12', component: Day12Component },
  { path: 'articles/Aoc13', component: Day13Component },
  { path: 'articles/Aoc14', component: Day14Component },
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
