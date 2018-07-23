import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public slides: Array<Object> = [
    {'image': '../assets/img/stock1.jpg', 'desc': 'Text for Slide 1'},
    {'image': '../assets/img/stock2.jpg', 'desc': 'Text for Slide 2'},
    {'image': '../assets/img/stock1.jpg', 'desc': 'Text for Slide 3'},
    {'image': '../assets/img/stock2.jpg', 'desc': 'Text for Slide 4'}
];
  constructor() { }

  ngOnInit() {
  }

}

