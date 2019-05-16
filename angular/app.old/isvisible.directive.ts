import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[isVisible]'
})
export class IsVisibleDirective {

  /**
   * Angular sets the isVisible property whenever the value of the condition changes. Because the isVisible property is doing some work work, it needs a setter. If the condition is false, clear container and destroy the view. If the condition is true create the embedded view from the template.
   * This is how structural directives work. (Bit different than attribute directives)
   * @param condition
   */
  @Input('isVisible') set input(condition: any) {
    if (condition) {
      this.container.createEmbeddedView(this.tpl);
      return;
    }
    this.container.clear();
  }

  constructor(private container: ViewContainerRef, private tpl: TemplateRef<any>) {
  }

}
