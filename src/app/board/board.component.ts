import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: []
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
//taken from the tutorial code: an algorithm that determines if the user has won the game
//spend some time here understanding calcualteWinner method

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }

    return null;
  }

}
