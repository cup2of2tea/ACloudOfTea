import { Component, OnInit } from '@angular/core';
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';
declare var $: any;
declare var Prism: any;

@Component({
  selector: 'app-day10',
  templateUrl: './day10.component.html',
  styleUrls: ['./day10.component.scss']
})
export class Day10_2021Component implements OnInit {

  constructor() { }

  isCollapsed: any;
  isCollapsed2: any;
  isCollapsed3: any;
  isCollapsed4: any;
  nav: any;
  nav2: any;

  ngOnInit() {
    this.isCollapsed = false;
    this.isCollapsed2 = false;
    this.isCollapsed3 = false;
    this.isCollapsed4 = false;

    setTimeout(() => { Prism.highlightAll(); }, 10);
  }

  onNavChange(changeEvent: NgbNavChangeEvent) {
    setTimeout(() => { Prism.highlightAll(); }, 10);
  }
  goto(selector) {
    document.querySelector(selector).scrollIntoView({ behavior: 'smooth' })
  }
}
