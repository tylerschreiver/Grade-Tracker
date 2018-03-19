import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'gt-create-grade-group',
  templateUrl: './create-grade-group.component.html',
  styleUrls: ['./create-grade-group.component.css']
})
export class CreateGradeGroupComponent implements OnInit {
  group: FormGroup;
  @Output('valid') valid = new EventEmitter();
  @Input() id: string;

  constructor(public fb: FormBuilder) { 
    this.group = this.fb.group({
      name: ['', Validators.required],
      weight: ['', Validators.required],
      numGrades: ['']
    });
  }

  ngOnInit() {
  }

  @Input() set groupInfo(obj) {
    if(obj.name) this.group.controls['name'].setValue(obj.name);
    if(obj.weight) this.group.controls['weight'].setValue(obj.weight);
    if(obj.numGrades) this.group.controls['numGrades'].setValue(obj.numGrades);
  }

  checkValidity() {
    let weight = this.group.controls['weight'].value;
    let name = this.group.controls['name'].value;
    let numGrades = this.group.controls['numGrades'].value;
    let id = this.id;
    let obj = {id: id, weight: weight, name: name, numGrades: numGrades}
    if (this.group.valid) {
      this.valid.emit(obj);
    } else this.valid.emit(false);
  }

}