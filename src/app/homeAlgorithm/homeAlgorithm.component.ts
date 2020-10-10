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
        route: '/articles/ProgComp',
        title: 'Programmation compétitive'
      },
      {
        route: '/articles/IsogradSeptembre',
        title: 'Concours Isograd Septembre 2020'
      }
    ]
  }

}
