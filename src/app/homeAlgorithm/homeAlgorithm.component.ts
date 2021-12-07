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
        route: '/articles/Aoc_2021_7',
        title: 'Jour 7 de l\'Advent of Code 2021'
      },
      {
        route: '/articles/Aoc_2021_6',
        title: 'Jour 6 de l\'Advent of Code 2021'
      },
      {
        route: '/articles/Aoc_2021_5',
        title: 'Jour 5 de l\'Advent of Code 2021'
      },
      {
        route: '/articles/Aoc_2021_4',
        title: 'Jour 4 de l\'Advent of Code 2021'
      },
      {
        route: '/articles/Aoc_2021_3',
        title: 'Jour 3 de l\'Advent of Code 2021'
      },
      {
        route: '/articles/Aoc_2021_2',
        title: 'Jour 2 de l\'Advent of Code 2021'
      },
      {
        route: '/articles/Aoc_2021_1',
        title: 'Jour 1 de l\'Advent of Code 2021'
      },
      {
        route: '/articles/Aoc_2020_23',
        title: 'Jour 23 de l\'Advent of Code 2020'
      },
      {
        route: '/articles/Aoc_2020_22',
        title: 'Jour 22 de l\'Advent of Code 2020'
      },
      {
        route: '/articles/Aoc_2020_21',
        title: 'Jour 21 de l\'Advent of Code 2020'
      },
      {
        route: '/articles/Aoc_2020_20',
        title: 'Jour 20 de l\'Advent of Code 2020'
      },
      {
        route: '/articles/Aoc_2020_19',
        title: 'Jour 19 de l\'Advent of Code 2020'
      },
      {
        route: '/articles/Aoc_2020_18',
        title: 'Jour 18 de l\'Advent of Code 2020'
      },
      {
        route: '/articles/Aoc_2020_17',
        title: 'Jour 17 de l\'Advent of Code 2020'
      },
      {
        route: '/articles/Aoc_2020_16',
        title: 'Jour 16 de l\'Advent of Code 2020'
      },
      {
        route: '/articles/Aoc_2020_15',
        title: 'Jour 15 de l\'Advent of Code 2020'
      },
      {
        route: '/articles/Aoc_2020_14',
        title: 'Jour 14 de l\'Advent of Code 2020'
      },
      {
        route: '/articles/Aoc_2020_13',
        title: 'Jour 13 de l\'Advent of Code 2020'
      },
      {
        route: '/articles/Aoc_2020_12',
        title: 'Jour 12 de l\'Advent of Code 2020'
      },
      {
        route: '/articles/Aoc_2020_11',
        title: 'Jour 11 de l\'Advent of Code 2020'
      },
      {
        route: '/articles/Aoc_2020_10',
        title: 'Jour 10 de l\'Advent of Code 2020'
      },
      {
        route: '/articles/Aoc_2020_9',
        title: 'Jour 9 de l\'Advent of Code 2020'
      },
      {
        route: '/articles/Aoc_2020_8',
        title: 'Jour 8 de l\'Advent of Code 2020'
      },
      {
        route: '/articles/Aoc_2020_7',
        title: 'Jour 7 de l\'Advent of Code 2020'
      },
      {
        route: '/articles/Aoc_2020_6',
        title: 'Jour 6 de l\'Advent of Code 2020'
      },
      {
        route: '/articles/Aoc_2020_5',
        title: 'Jour 5 de l\'Advent of Code 2020'
      },
      {
        route: '/articles/Aoc_2020_4',
        title: 'Jour 4 de l\'Advent of Code 2020'
      },
      {
        route: '/articles/Aoc_2020_3',
        title: 'Jour 3 de l\'Advent of Code 2020'
      },
      {
        route: '/articles/Aoc_2020_1_2',
        title: 'Jours 1 et 2 de l\'Advent of Code 2020'
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
