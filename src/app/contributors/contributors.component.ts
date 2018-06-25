import { Component, OnInit } from '@angular/core';
import { Admins } from './admins';
import { Maintainers } from './maintainers';
import { Contri } from './committers';

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.scss']
})
export class ContributorsComponent implements OnInit {
  admins = Admins;
  maint = Maintainers;
  contri = Contri;

  constructor() { }

  ngOnInit() {
  }

}
