import { Component, OnInit } from '@angular/core';
import { Admins } from './admins';
import { Maintainers } from './maintainers';
import { Contri } from './committers';
import { Improvers } from './improvers';
@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.scss']
})
export class ContributorsComponent implements OnInit {
  admins = Admins;
  maint = Maintainers;
  contri = Contri;
  imp = Improvers;

  constructor() { }

  ngOnInit() {
  }

}
