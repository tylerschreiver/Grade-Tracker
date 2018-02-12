import { Component, OnInit, Input } from '@angular/core';
import { GradeGroup } from '../../../models/grade-group.model';

@Component({
  selector: 'gt-grade-group',
  templateUrl: './grade-group.component.html',
  styleUrls: ['./grade-group.component.scss']
})

export class GradeGroupComponent implements OnInit {
  @Input() group: GradeGroup;
  isExpanded: Boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
