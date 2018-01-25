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
  letterChar = ['D', 'C', 'B', 'A'];
  isEditing = true;

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

  get confirmScale() {
    switch(this.type) {
      case 'letter':
        return this.letter.filter((grade) => (grade < 0 || grade > 100) ).length > 0;
      case 'plus':
        return this.plus.filter((grade) => (grade < 0 || grade > 100) ).length > 0;
      case 'plusMinus':
        return this.plusMinus.filter((grade) => (grade < 0 || grade > 100) ).length > 0;
    }
  }

}
