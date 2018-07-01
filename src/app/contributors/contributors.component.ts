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
  filterargs = {projects: 'Sysbot'};  
  admins = Admins;
  maint = Maintainers;
  contri = Contri;
  imp = Improvers;
  options =['Sysbot','PowerUp', 'GH Pages','PowerUp-Android', 'VMS','PC Prep Kit','Portal','PowerUp-iOS' , 'PC Hub' , 'Malaria-Android' , 'MACC' , 'Mailman3' , 'Infrastructure iOS' , 'Infrastructure Android' ,'FirstAide'];
  selected;
  selectedData;
  selectedContri;
  onSelect(val){
  if(val==''){
  	this.selectedData=this.maint;
  	this.selectedContri = this.contri;
  }
  else{

  	this.selectedData = this.maint.filter(x => x.projects == val)
  	this.selectedContri = this.contri.filter(x => x.projects == val)
  	}
}


  constructor() { 
  	this.selectedData=this.maint;
  	this.selectedContri = this.contri;
  	}

  ngOnInit() {
  }

}
