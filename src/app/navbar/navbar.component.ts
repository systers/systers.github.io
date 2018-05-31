import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() 
  {
    var nav = document.getElementsByClassName("nav-item");
    for (var j = 0; j < nav.length; j++) {
      var btns = nav[j].getElementsByClassName("navl");
      for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
          var current = document.getElementsByClassName("active");
          current[0].className = current[0].className.replace(" active", " ");
          this.className += " active";
        });
      }
    }
  }

}