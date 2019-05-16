import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dumb',
  template: `
    <ng-content></ng-content>
    <p>{{dumbItem.name}}</p>`
})
export class DumbComponent implements OnInit {
  @Input('item') dumbItem;

  constructor() {
  }

  ngOnInit() {
  }

}
