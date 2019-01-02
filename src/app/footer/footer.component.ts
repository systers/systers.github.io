import { Component, OnInit } from '@angular/core';
import { AutoscrollService } from '../autoscroll.service' ;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private autoscroll : AutoscrollService) { }

  ngOnInit() {
  }
  scrollToTop(){
    this.autoscroll.setScrollTop();

   }
   
}

