import { Component, OnInit, Input, Output, ElementRef, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'gt-grade-scale',
  templateUrl: './grade-scale.component.html',
  styleUrls: ['./grade-scale.component.css']
})
export class GradeScaleComponent implements OnInit {
  @Input() type: string;
  @Output('complete') complete = new EventEmitter();

  plusMinus = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
  plus = [-1, -1, -1, -1, -1, -1, -1, -1];
  letter = [-1, -1, -1, -1];

  letterChar = ['D', 'C', 'B', 'A'];
  plusChar = ['D', 'D+', 'C', 'C+', 'B', 'B+', 'A', 'A+'];
  plusMinusChar = ['D-', 'D', 'D+', 'C-', 'C', 'C+', 'B-', 'B', 'B+', 'A-', 'A', 'A+']

  letterForm: FormGroup;
  plusForm: FormGroup;
  plusMinusForm: FormGroup;

  isEditing = true;


  constructor(public el: ElementRef,
              private fb: FormBuilder) {
    this.letterForm = fb.group({
      d: ['', Validators.required],
      c: ['', Validators.required],
      b: ['', Validators.required],
      a: ['', Validators.required]
    });

    this.plusForm = fb.group({
      d: ['', Validators.required],
      dPlus: ['', Validators.required],
      c: ['', Validators.required],
      cPlus: ['', Validators.required],
      b: ['', Validators.required],
      bPlus: ['', Validators.required],
      a: ['', Validators.required],
      aPlus: ['', Validators.required],
    });

    this.plusMinusForm = fb.group({
      dMinus: ['', Validators.required],
      d: ['', Validators.required],
      dPlus: ['', Validators.required],
      cMinus: ['', Validators.required],
      c: ['', Validators.required],
      cPlus: ['', Validators.required],
      bMinus: ['', Validators.required],
      b: ['', Validators.required],
      bPlus: ['', Validators.required],
      aMinus: ['', Validators.required],
      a: ['', Validators.required],
      aPlus: ['', Validators.required],

    });
  }

  ngOnInit() {
  }

  changeScale() {
    let obj;
    let array = [];
    switch(this.type) {
      case 'letter':
        obj = this.letterForm.value;
        break;
      case 'plus':
        obj = this.plusForm.value;
        break;
      case 'plusMinus':
        obj = this.plusMinusForm.value;
        break;
    }
    for (let key in obj) {
      array.push(obj[key]);
    }
    return array;
  }

  confirm() {
    this.isEditing = false;
    switch(this.type) {
      case 'letter': this.letter = this.changeScale(); break;
      case 'plus': this.plus = this.changeScale(); break;
      case 'plusMinus': this.plusMinus = this.changeScale(); break;
    }
    this.complete.emit(this.changeScale());
  }

  @Input() set scale(nums) {
    switch(this.type) {
      case 'letter':
        this.letterForm.controls['d'].setValue(nums[0]);
        this.letterForm.controls['c'].setValue(nums[1]);
        this.letterForm.controls['b'].setValue(nums[2]);
        this.letterForm.controls['a'].setValue(nums[3]);
        break;
      case 'plus':
        this.letterForm.controls['d'].setValue(nums[0]);
        this.letterForm.controls['dPlus'].setValue(nums[1]);
        this.letterForm.controls['c'].setValue(nums[2]);
        this.letterForm.controls['cPlus'].setValue(nums[3]);
        this.letterForm.controls['b'].setValue(nums[4]);
        this.letterForm.controls['bPlus'].setValue(nums[5]);
        this.letterForm.controls['a'].setValue(nums[6]);
        this.letterForm.controls['aPlus'].setValue(nums[7]);
        break;
      case 'plusMinus':
        this.letterForm.controls['dMinus'].setValue(nums[0]);
        this.letterForm.controls['d'].setValue(nums[1]);
        this.letterForm.controls['dPlus'].setValue(nums[2]);
        this.letterForm.controls['cMinus'].setValue(nums[3]);
        this.letterForm.controls['c'].setValue(nums[4]);
        this.letterForm.controls['cPlus'].setValue(nums[5]);
        this.letterForm.controls['bMinus'].setValue(nums[6]);
        this.letterForm.controls['b'].setValue(nums[7]);
        this.letterForm.controls['bPlus'].setValue(nums[8]);
        this.letterForm.controls['aMinus'].setValue(nums[9]);
        this.letterForm.controls['a'].setValue(nums[10]);
        this.letterForm.controls['aPlus'].setValue(nums[11]);
        break;
    }
  }

  get isConfirmed() {
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
