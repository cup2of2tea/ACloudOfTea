import { Component, OnInit } from '@angular/core';
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';
declare var $: any;
declare var Prism: any;

@Component({
  selector: 'app-isograd-sept',
  templateUrl: './isograd-sept.component.html',
  styleUrls: ['./isograd-sept.component.scss']
})
export class IsogradSeptComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => { Prism.highlightAll(); }, 50);
  }

  onNavChange(changeEvent: NgbNavChangeEvent) {
    setTimeout(() => { Prism.highlightAll(); }, 50);
  }
  goto(selector) {
    document.querySelector(selector).scrollIntoView({ behavior: 'smooth' })

  }

}
