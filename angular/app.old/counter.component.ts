import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CounterComponent implements OnInit {
  @Input() counterValue: number;
  @Output() counterChange: EventEmitter<number>;

  constructor() {
    this.counterValue = 0;
    this.counterChange = new EventEmitter();
  }

  private broadcastCount() {
    this.counterChange.emit(this.counterValue);
  }

  public countUp(): void {
    ++this.counterValue;
    this.broadcastCount();
  }

  public countDown(): void {
    --this.counterValue;
    this.broadcastCount();
  }

  ngOnInit() {
    this.broadcastCount();
  }

}
