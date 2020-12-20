import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home-algorithm',
  templateUrl: './homeAlgorithm.component.html',
  styleUrls: ['./homeAlgorithm.component.scss']
})
export class HomeAlgorithmComponent implements OnInit {

  constructor(route: ActivatedRoute) {
    route.params.subscribe(val => {
      this.ngOnInit();
    });
  }
  posts: any;
  ngOnInit() {
    this.posts = [

      {
        route: '/articles/Aoc10',
        title: 'Jour 10 de l\'Advent of Code'
      },
      {
        route: '/articles/Aoc9',
        title: 'Jour 9 de l\'Advent of Code'
      },
      {
        route: '/articles/Aoc8',
        title: 'Jour 8 de l\'Advent of Code'
      },
      {
        route: '/articles/Aoc7',
        title: 'Jour 7 de l\'Advent of Code'
      },
      {
        route: '/articles/Aoc6',
        title: 'Jour 6 de l\'Advent of Code'
      },
      {
        route: '/articles/Aoc5',
        title: 'Jour 5 de l\'Advent of Code'
      },
      {
        route: '/articles/Aoc4',
        title: 'Jour 4 de l\'Advent of Code'
      },
      {
        route: '/articles/Aoc3',
        title: 'Jour 3 de l\'Advent of Code'
      },
      {
        route: '/articles/Aoc1_2',
        title: 'Jours 1 et 2 de l\'Advent of Code'
      },
      {
        route: '/articles/IsogradSeptembre',
        title: 'Concours Isograd Septembre 2020'
      },
      {
        route: '/articles/ProgComp',
        title: 'Programmation compétitive'
      }
    ]
  }

}
