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
