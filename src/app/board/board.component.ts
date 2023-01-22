import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  template: `
    <p>
      board works!
    </p>
  `,
  styles: [
  ]
})


export class BoardComponent {
  squares: string[] = [];      //you have to initialize--set to a string initially
  xIsNext: boolean = false; //you have to initialize!!
  winner: string = '';  //initialized to an empty string for now

  constructor(){

  }

}
