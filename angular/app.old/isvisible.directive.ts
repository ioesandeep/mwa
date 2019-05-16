import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {ProceduralRenderer3, RElement} from "@angular/core/src/render3/interfaces/renderer";

@Directive({
  selector: '[isVisible]'
})
export class IsVisibleDirective implements OnInit {
  @Input('isVisible') input: any;

  constructor(private container: ViewContainerRef, private tpl: TemplateRef<any>) {
  }

  ngOnInit(): void {
    console.log(this.input);
    if (!this.input) {
      //this.rn.setStyle(this.el, 'display', 'none');
    }
  }
}
