import { Component, OnInit } from '@angular/core';
import {nonCodeMethodsData} from '../newcomers/nonCodeMethodsData';
import {Workflow} from '../newcomers/workflow-stages-data';
import { Resources } from './resources-data';

@Component({
  selector: 'app-newcomers',
  templateUrl: './newcomers.component.html',
  styleUrls: ['./newcomers.component.scss']
})
export class NewcomersComponent implements OnInit {
  method_details = nonCodeMethodsData;
  workflow_stages = Workflow;
  resources = Resources;
  currentJustify = 'justified';
  isCollapsed = true;
  isCollapsed1 = true;
  isCollapsed2 = true;
  isCollapsed3 = true;
  constructor() { }

  ngOnInit() { }

}
