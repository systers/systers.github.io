import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcomer',
  templateUrl: './newcomer.component.html',
  styleUrls: ['./newcomer.component.scss']
})
export class NewcomerComponent implements OnInit {

  currentJustify = 'justified';
  constructor() { }

  ngOnInit() {
  }

}
