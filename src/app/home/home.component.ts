import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  posts: any;
  ngOnInit() {
    this.posts = [
      {
        route: 'articles/WhereIsGuido',
        title: 'Where is Guido'
      },
      {
        route: 'articles/ProgComp',
        title: 'Programmation compétitive'
      }
    ]
  }

}
