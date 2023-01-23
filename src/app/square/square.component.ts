import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <p>
  {{ value }}
    </p>
  `,
  styles: [
  ]
})
export class SquareComponent {


  @Input()
  value: string[] = ["X", "O"] ;

  /*make value an array and use nfor to loop through in the html*/

}
