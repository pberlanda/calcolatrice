import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  //name = 'Angular ' + VERSION.major;
  name = 'calcolatrice';
  operatore1: number;
  operatore2: number;
  risultato: number;

  somma() {
    //console.log('sono qui');
    this.risultato = this.operatore1 + this.operatore2;
  }

  differenza() {
    this.risultato = this.operatore1 - this.operatore2;
  }

  prodotto() {
    this.risultato = this.operatore1 * this.operatore2;
  }

  quoziente() {
    this.risultato = this.operatore1 / this.operatore2;
  }

  reset() {
    this.operatore1 = 0;
    this.operatore2 = 0;
    this.risultato = 0;
  }
  
  ngOnInit() {
    this.reset();
  }
}
