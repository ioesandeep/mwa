import {Component, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-smart',
  template: `
    <ng-content></ng-content>
    <ng-container *ngFor="let item of items;">
      <ng-container *isVisible="item.isVisible">
        <app-dumb [item]="item"><h3>Dumb component</h3></app-dumb>
      </ng-container>
    </ng-container>`
})
export class SmartComponent implements OnInit, OnChanges {
  private items: Array<{ name: string, isVisible: boolean }>;

  constructor() {
    this.items = [
      {
        name: "Dumb 1",
        isVisible: true
      },
      {
        name: "Dumb 2",
        isVisible: false
      },
      {
        name: "Dumb 3",
        isVisible: false
      },
      {
        name: "Dumb 4",
        isVisible: true
      },
    ];
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
