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
  player: string = '';

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
    return this.xIsNext ? 'X' : 'O';  //read conditionals in typescript aloud for practice
    //"if this is next(X) = true, then the next player will be 'x', otherwise it will be 'o'"

  }

  //this is serves as an event handler
  makeMove(idx: number){

    if(!this.squares[idx]){   //idx == index
    this.squares.splice(idx, 1, this.player);
    this.xIsNext = !this.xIsNext;
    }

    

  }


}
