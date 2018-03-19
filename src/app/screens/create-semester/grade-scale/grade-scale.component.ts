import { Component, OnInit, Input, Output, ElementRef, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'gt-grade-scale',
  templateUrl: './grade-scale.component.html',
  styleUrls: ['./grade-scale.component.scss']
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
  valid = false;


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

    this.letterForm.controls['c'].setValidators(Validators.min(this.letterForm.controls['d'].value))
    
  }

  ngOnInit() {
  }

  edit() {
    this.isEditing = true;
    this.complete.emit(false);
  }

  reset() {
    this.isEditing = true;
    this.letterForm.reset();
    this.plusMinusForm.reset();
    this.plusForm.reset();
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
        this.plusForm.controls['d'].setValue(nums[0]);
        this.plusForm.controls['dPlus'].setValue(nums[1]);
        this.plusForm.controls['c'].setValue(nums[2]);
        this.plusForm.controls['cPlus'].setValue(nums[3]);
        this.plusForm.controls['b'].setValue(nums[4]);
        this.plusForm.controls['bPlus'].setValue(nums[5]);
        this.plusForm.controls['a'].setValue(nums[6]);
        this.plusForm.controls['aPlus'].setValue(nums[7]);
        break;
      case 'plusMinus':
        this.plusMinusForm.controls['dMinus'].setValue(nums[0]);
        this.plusMinusForm.controls['d'].setValue(nums[1]);
        this.plusMinusForm.controls['dPlus'].setValue(nums[2]);
        this.plusMinusForm.controls['cMinus'].setValue(nums[3]);
        this.plusMinusForm.controls['c'].setValue(nums[4]);
        this.plusMinusForm.controls['cPlus'].setValue(nums[5]);
        this.plusMinusForm.controls['bMinus'].setValue(nums[6]);
        this.plusMinusForm.controls['b'].setValue(nums[7]);
        this.plusMinusForm.controls['bPlus'].setValue(nums[8]);
        this.plusMinusForm.controls['aMinus'].setValue(nums[9]);
        this.plusMinusForm.controls['a'].setValue(nums[10]);
        this.plusMinusForm.controls['aPlus'].setValue(nums[11]);
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

  get isScaleValid() {
    switch(this.type) {
      case 'letter': this.letterFormValidity(); return this.valid;
      case 'plus': this.plusFormValidity(); return this.valid;
      case 'plusMinus': this.plusMinusFormValidity();  return this.valid;
    }
  }

  letterFormValidity() {
    if (this.letterForm.valid) this.valid = true;

    if (this.letterForm.controls['c'].value <= this.letterForm.controls['d'].value
    || this.letterForm.controls['b'].value <= this.letterForm.controls['c'].value
    || this.letterForm.controls['a'].value <= this.letterForm.controls['b'].value) {
      this.valid = false;
    }
  }

  plusFormValidity() {
    if (this.plusForm.valid) this.valid = true;
    if (this.plusForm.controls['dPlus'].value <= this.plusForm.controls['d'].value
      ||this.plusForm.controls['c'].value <= this.plusForm.controls['dPlus'].value
      ||this.plusForm.controls['cPlus'].value <= this.plusForm.controls['c'].value
      ||this.plusForm.controls['b'].value <= this.plusForm.controls['cPlus'].value
      ||this.plusForm.controls['bPlus'].value <= this.plusForm.controls['b'].value
      ||this.plusForm.controls['a'].value <= this.plusForm.controls['bPlus'].value) {
      this.valid = false;
    }
  }

  plusMinusFormValidity() {
    if (this.plusMinusForm.valid) this.valid = true;

    if (this.plusMinusForm.controls['d'].value <= this.plusMinusForm.controls['dMinus'].value
     || this.plusMinusForm.controls['dPlus'].value <= this.plusMinusForm.controls['d'].value
     || this.plusMinusForm.controls['cMinus'].value <= this.plusMinusForm.controls['dPlus'].value
     || this.plusMinusForm.controls['c'].value <= this.plusMinusForm.controls['cMinus'].value
     || this.plusMinusForm.controls['cPlus'].value <= this.plusMinusForm.controls['c'].value
     || this.plusMinusForm.controls['bMinus'].value <= this.plusMinusForm.controls['cPlus'].value
     || this.plusMinusForm.controls['b'].value <= this.plusMinusForm.controls['bMinus'].value
     || this.plusMinusForm.controls['bPlus'].value <= this.plusMinusForm.controls['b'].value
     || this.plusMinusForm.controls['aMinus'].value <= this.plusMinusForm.controls['bPlus'].value
     || this.plusMinusForm.controls['a'].value <= this.plusMinusForm.controls['aMinus'].value
     || this.plusMinusForm.controls['aPlus'].value <= this.plusMinusForm.controls['a'].value) {
      this.valid = false;
    }
  }
}
