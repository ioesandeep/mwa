import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p><strong>App Component</strong></p>
    <p>Current value of counter is {{componentCounterValue}}</p>
    <counter [counterValue]="countStart" (counterChange)="getCount($event)">
      <h4 class="count">Counter component 1</h4>
    </counter>
    <counter [counterValue]="countStart%3" (counterChange)="getCount($event)">
      <h4 class="count">Counter component 2</h4>
    </counter>
  `
})
export class AppComponent {
  private title: string;
  private countStart: number;
  private componentCounterValue: number;

  constructor() {
    this.title = 'Angular MWA';
    this.countStart = new Date().getTime() % 10;
  }

  public getCount(count: number): void {
    this.componentCounterValue = count;
  }
}
