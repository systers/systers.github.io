import { Component, OnInit } from '@angular/core';
import { Admins } from './admins';

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.scss']
})
export class ContributorsComponent implements OnInit {
  admins = Admins;

  constructor() { }

  ngOnInit() {
  }

}
