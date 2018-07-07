import { Component, OnInit } from '@angular/core';
import {nonCodeMethodsData} from '../newcomers/nonCodeMethodsData';
import {Workflow} from '../newcomers/workflow-stages-data';

@Component({
  selector: 'app-newcomers',
  templateUrl: './newcomers.component.html',
  styleUrls: ['./newcomers.component.scss']
})
export class NewcomersComponent implements OnInit {
  method_details = nonCodeMethodsData;
  workflow_stages = Workflow;
  constructor() { }

  ngOnInit() { }

}
