import { Component, NgModule } from '@angular/core';

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
  winner?: string;  //initialized to an empty string for now

  constructor(){}

  ngOnInit(){
    this.newGame();
  }

  newGame(){
    this.squares = Array(9).fill(null); //not 100% here
    this.winner = '';
    this.xIsNext = true;
  }

  getPlayer(){
    return this.xIsNext ? 'O' : 'X';  //read conditionals in typescript aloud for practice
  }




}
