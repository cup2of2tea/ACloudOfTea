import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WhereIsGuidoComponent } from './Optimisation/where-is-guido/where-is-guido.component';
import { ProgCompComponent } from './Misc/prog-comp/prog-comp.component';
import { IsogradSeptembreComponent } from './Algorithmique/IsogradSeptembre/isograd-sept.component';
import { Day1_2Component } from './Algorithmique/AoC/2020/day1_2/day1_2.component';
import { Day3Component } from './Algorithmique/AoC/2020/day3/day3.component';
import { Day4Component } from './Algorithmique/AoC/2020/day4/day4.component';
import { Day5Component } from './Algorithmique/AoC/2020/day5/day5.component';
import { Day6Component } from './Algorithmique/AoC/2020/day6/day6.component';
import { Day7Component } from './Algorithmique/AoC/2020/day7/day7.component';
import { Day8Component } from './Algorithmique/AoC/2020/day8/day8.component';
import { Day9Component } from './Algorithmique/AoC/2020/day9/day9.component';
import { Day10Component } from './Algorithmique/AoC/2020/day10/day10.component';
import { Day11Component } from './Algorithmique/AoC/2020/day11/day11.component';
import { Day12Component } from './Algorithmique/AoC/2020/day12/day12.component';
import { Day13Component } from './Algorithmique/AoC/2020/day13/day13.component';
import { Day14Component } from './Algorithmique/AoC/2020/day14/day14.component';
import { Day15Component } from './Algorithmique/AoC/2020/day15/day15.component';
import { Day16Component } from './Algorithmique/AoC/2020/day16/day16.component';
import { Day17Component } from './Algorithmique/AoC/2020/day17/day17.component';
import { Day18Component } from './Algorithmique/AoC/2020/day18/day18.component';
import { Day19Component } from './Algorithmique/AoC/2020/day19/day19.component';
import { Day20Component } from './Algorithmique/AoC/2020/day20/day20.component';
import { Day21Component } from './Algorithmique/AoC/2020/day21/day21.component';
import { Day22Component } from './Algorithmique/AoC/2020/day22/day22.component';
import { Day23Component } from './Algorithmique/AoC/2020/day23/day23.component';
import { Day1_2021Component } from './Algorithmique/AoC/2021/day1/day1.component';
import { Day2_2021Component } from './Algorithmique/AoC/2021/day2/day2.component';
import { Day3_2021Component } from './Algorithmique/AoC/2021/day3/day3.component';
import { Day4_2021Component } from './Algorithmique/AoC/2021/day4/day4.component';
import { Day5_2021Component } from './Algorithmique/AoC/2021/day5/day5.component';
import { Day6_2021Component } from './Algorithmique/AoC/2021/day6/day6.component';
import { Day7_2021Component } from './Algorithmique/AoC/2021/day7/day7.component';
import { Day8_2021Component } from './Algorithmique/AoC/2021/day8/day8.component';
import { Day9_2021Component } from './Algorithmique/AoC/2021/day9/day9.component';
import { Day10_2021Component } from './Algorithmique/AoC/2021/day10/day10.component';
import { Day11_2021Component } from './Algorithmique/AoC/2021/day11/day11.component';
import { Day12_2021Component } from './Algorithmique/AoC/2021/day12/day12.component';
import { Day13_2021Component } from './Algorithmique/AoC/2021/day13/day13.component';
import { Day14_2021Component } from './Algorithmique/AoC/2021/day14/day14.component';
import { Day15_2021Component } from './Algorithmique/AoC/2021/day15/day15.component';
import { Day17_2021Component } from './Algorithmique/AoC/2021/day17/day17.component';
import { Day20_2021Component } from './Algorithmique/AoC/2021/day20/day20.component';
import { Day21_2021Component } from './Algorithmique/AoC/2021/day21/day21.component';
import { Day23_2021Component } from './Algorithmique/AoC/2021/day23/day23.component';
import { HomeAlgorithmComponent } from './homeAlgorithm/homeAlgorithm.component';
import { HomeOptimizationComponent } from './homeOptimization/homeOptimization.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: 'articles/WhereIsGuido', component: WhereIsGuidoComponent },
  { path: 'articles/ProgComp', component: ProgCompComponent },
  { path: 'articles/IsogradSeptembre', component: IsogradSeptembreComponent },
  { path: 'articles/Aoc_2020_1_2', component: Day1_2Component },
  { path: 'articles/Aoc_2020_3', component: Day3Component },
  { path: 'articles/Aoc_2020_4', component: Day4Component },
  { path: 'articles/Aoc_2020_5', component: Day5Component },
  { path: 'articles/Aoc_2020_6', component: Day6Component },
  { path: 'articles/Aoc_2020_7', component: Day7Component },
  { path: 'articles/Aoc_2020_8', component: Day8Component },
  { path: 'articles/Aoc_2020_9', component: Day9Component },
  { path: 'articles/Aoc_2020_10', component: Day10Component },
  { path: 'articles/Aoc_2020_11', component: Day11Component },
  { path: 'articles/Aoc_2020_12', component: Day12Component },
  { path: 'articles/Aoc_2020_13', component: Day13Component },
  { path: 'articles/Aoc_2020_14', component: Day14Component },
  { path: 'articles/Aoc_2020_15', component: Day15Component },
  { path: 'articles/Aoc_2020_16', component: Day16Component },
  { path: 'articles/Aoc_2020_17', component: Day17Component },
  { path: 'articles/Aoc_2020_18', component: Day18Component },
  { path: 'articles/Aoc_2020_19', component: Day19Component },
  { path: 'articles/Aoc_2020_20', component: Day20Component },
  { path: 'articles/Aoc_2020_21', component: Day21Component },
  { path: 'articles/Aoc_2020_22', component: Day22Component },
  { path: 'articles/Aoc_2020_23', component: Day23Component },
  { path: 'articles/Aoc_2021_1', component: Day1_2021Component },
  { path: 'articles/Aoc_2021_2', component: Day2_2021Component },
  { path: 'articles/Aoc_2021_3', component: Day3_2021Component },
  { path: 'articles/Aoc_2021_4', component: Day4_2021Component },
  { path: 'articles/Aoc_2021_5', component: Day5_2021Component },
  { path: 'articles/Aoc_2021_6', component: Day6_2021Component },
  { path: 'articles/Aoc_2021_7', component: Day7_2021Component },
  { path: 'articles/Aoc_2021_8', component: Day8_2021Component },
  { path: 'articles/Aoc_2021_9', component: Day9_2021Component },
  { path: 'articles/Aoc_2021_10', component: Day10_2021Component },
  { path: 'articles/Aoc_2021_11', component: Day11_2021Component },
  { path: 'articles/Aoc_2021_12', component: Day12_2021Component },
  { path: 'articles/Aoc_2021_13', component: Day13_2021Component },
  { path: 'articles/Aoc_2021_14', component: Day14_2021Component },
  { path: 'articles/Aoc_2021_15', component: Day15_2021Component },
  { path: 'articles/Aoc_2021_17', component: Day17_2021Component },
  { path: 'articles/Aoc_2021_20', component: Day20_2021Component },
  { path: 'articles/Aoc_2021_21', component: Day21_2021Component },
  { path: 'articles/Aoc_2021_23', component: Day23_2021Component },
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
