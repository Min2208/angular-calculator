import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  firtNumber: number;
  secondNumber: number;
  calculartor = '+';
  result;
  constructor() { }

  ngOnInit(): void {
  }

  calculartorNumber(): void{
    if (this.calculartor === '+'){
      this.result = this.firtNumber + this.secondNumber;
    }
    if (this.calculartor === '-'){
      this.result = this.firtNumber - this.secondNumber;
    }
    if (this.calculartor === '*'){
      this.result = this.firtNumber * this.secondNumber;
    }
    if (this.calculartor === '/'){
      this.result = this.firtNumber / this.secondNumber;
    }
  }

}
