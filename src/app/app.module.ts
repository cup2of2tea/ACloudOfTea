import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KatexModule } from 'ng-katex';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FormsModule } from '@angular/forms';
import { WhereIsGuidoComponent } from './Optimisation/where-is-guido/where-is-guido.component';
import { ProgCompComponent } from './Misc/prog-comp/prog-comp.component';
import { IsogradSeptembreComponent } from './Algorithmique/IsogradSeptembre/isograd-sept.component';
import { HomeComponent } from './home/home.component';
import { HomeAlgorithmComponent } from './homeAlgorithm/homeAlgorithm.component';
import { HomeOptimizationComponent } from './homeOptimization/homeOptimization.component';
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

@NgModule({
  declarations: [
    AppComponent,
    WhereIsGuidoComponent,
    ProgCompComponent,
    HomeComponent,
    HomeAlgorithmComponent,
    HomeOptimizationComponent,
    IsogradSeptembreComponent,
    Day1_2Component,
    Day3Component,
    Day4Component,
    Day5Component,
    Day6Component,
    Day7Component,
    Day8Component,
    Day9Component,
    Day10Component,
    Day11Component,
    Day12Component,
    Day13Component,
    Day14Component,
    Day15Component,
    Day16Component,
    Day17Component,
    Day18Component,
    Day19Component,
    Day20Component,
    Day21Component,
    Day22Component,
    Day23Component,
    Day1_2021Component,
    Day2_2021Component,
    Day3_2021Component,
    Day4_2021Component,
    Day5_2021Component,
    Day6_2021Component,
    Day7_2021Component,
    Day8_2021Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    KatexModule
  ],
  providers: [], bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(far)
  }
}
