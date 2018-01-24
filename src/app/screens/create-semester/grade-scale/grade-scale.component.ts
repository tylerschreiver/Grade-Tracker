import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'gt-grade-scale',
  templateUrl: './grade-scale.component.html',
  styleUrls: ['./grade-scale.component.css']
})
export class GradeScaleComponent implements OnInit {
  @Input() type: string;

  plusMinus = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
  plus = [-1, -1, -1, -1, -1, -1, -1, -1];
  letter = [-1, -1, -1, -1];

  constructor(public el: ElementRef) { }

  ngOnInit() {
  }

  changeScale(index, value) {
    switch(this.type) {
      case 'letter':
        this.letter[index] = Number(value);
        break;
      case 'plus':
        this.plus[index] = Number(value);
        break;
      case 'plusMinus':
        this.plusMinus[index] = Number(value);
        break;
    }
  }

  confirmScale() {
    switch(this.type) {
      case 'letter':
        console.log(this.letter);
        break;
      case 'plus':
        console.log(this.plus);
        break;
      case 'plusMinus':
        console.log(this.plusMinus);
        break;
    }
  }

}
