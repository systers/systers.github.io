import { Component, OnInit } from '@angular/core';
import {SystersProj} from '../projects/systers-projects';
import {PeaceCorpsProj} from '../projects/peacecorps-projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  currentJustify = 'justified';
  sys_details = SystersProj;
  peace_details = PeaceCorpsProj;
  constructor() { }
  ngOnInit() {
  }

}
