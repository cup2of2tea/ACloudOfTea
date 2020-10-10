import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-optimization',
  templateUrl: './homeOptimization.component.html',
  styleUrls: ['./homeOptimization.component.scss']
})
export class HomeOptimizationComponent implements OnInit {

  constructor() { }
  posts: any;
  ngOnInit() {
    this.posts = [
      {
        route: '/articles/WhereIsGuido',
        title: 'Where is Guido'
      },
      {
        route: '/articles/ProgComp',
        title: 'Programmation compétitive'
      }
    ]
  }

}
