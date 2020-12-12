import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private ngZone: NgZone) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }
  posts: any;

  ngOnInit() {
    this.posts = [

      {
        route: '/articles/Aoc1_2',
        title: 'Jours 1 et 2 de l\'Advent of Code'
      },
      {
        route: 'articles/IsogradSeptembre',
        title: 'Concours Isograd Septembre 2020'
      },
      {
        route: 'articles/ProgComp',
        title: 'Programmation compétitive'
      },
      {
        route: 'articles/WhereIsGuido',
        title: 'Where is Guido'
      }
    ]
    var algorithmDocument = document.getElementById("algorithms");
    var optimizationDocument = document.getElementById("optimization");

    //it's important to add an load event listener to the object, as it will load the svg doc asynchronously
    algorithmDocument.addEventListener("load", () => {
      var algorithmsSvgDoc = (algorithmDocument as any).contentDocument; //get the inner DOM of alpha.svg
      var algorithmsSvgRoot = algorithmsSvgDoc.documentElement;

      //now we can query stuff with jquery like this
      //note that we pass in the svgRoot as the context node!
      $(algorithmsSvgRoot).click(() => {
        this.ngZone.run(() => { this.router.navigate(['/algorithm']); });
      });
    }, false);
    optimizationDocument.addEventListener("load", () => {
      var optimizationSvgDoc = (optimizationDocument as any).contentDocument; //get the inner DOM of alpha.svg
      var optimizationSvgRoot = optimizationSvgDoc.documentElement;

      //now we can query stuff with jquery like this
      //note that we pass in the svgRoot as the context node!
      $(optimizationSvgRoot).click(() => {
        this.ngZone.run(() => { this.router.navigate(['/optimization']); });

      });
    }, false);


  }

}
