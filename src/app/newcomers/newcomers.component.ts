import { Component, OnInit } from '@angular/core';
import { nonCodeMethodsData } from '../newcomers/nonCodeMethodsData';
import { Workflow } from './workflow-stages-data';
import { Resources } from './resources-data';
import { IssueService } from '../issue.service';
import { Subscriber } from 'rxjs';

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
  constructor(private _issueService : IssueService) { }
  public sysbot_issues = [];
  public portal_issues = [];
  public vms_issues = [];
  public msb_issues = [];
  public conf_and_issues = [];
  public firstaide_and_issues = [];
  public powerup_and_issues = [];
  public malaria_and_issues = [];
  public mentor_and_issues = [];
  public peacetrack_and_issues = [];
  public volunteers_and_issues = [];
  public systers_os_issues = [];
  public communities_issues = [];
  public os_slack_issues = [];
  public ghc_slack_issues = [];
  public malaria_ios_issues = [];
  public powerup_ios_issues =[];
  public peacetrack_ios_issues = [];
  public firstaide_ios_issues = [];
  public vola_ios_issues = [];



  ngOnInit() { 
    this._issueService.getSysbotIssues()
      .subscribe(data  => this.sysbot_issues = data);

    this._issueService.getportal_issues()
      .subscribe(data  => this.portal_issues = data); 

    this._issueService.getvms_issues()
      .subscribe(data  => this.vms_issues = data); 

    this._issueService.getmsb_issues_issues()
      .subscribe(data  => this.msb_issues = data);

    this._issueService.getconf_and_issues()
      .subscribe(data  => this.conf_and_issues = data);

    this._issueService.getfirstaide_and_issues()
      .subscribe(data  => this.firstaide_and_issues = data);

      this._issueService.getpowerup_and_issues()
      .subscribe(data  => this.powerup_and_issues = data);

      this._issueService.getmalaria_and_issues()
      .subscribe(data  => this.malaria_and_issues = data);

      this._issueService.getmentor_and_issues()
      .subscribe(data  => this.mentor_and_issues = data);

      this._issueService.getpeacetrack_and_issues()
      .subscribe(data  => this.peacetrack_and_issues = data);

      this._issueService.getvolunteers_and_issues()
      .subscribe(data  => this.volunteers_and_issues = data);

      this._issueService.getsysters_os_issues()
      .subscribe(data  => this.systers_os_issues = data);

      this._issueService.getcommunities_issues()
      .subscribe(data  => this.communities_issues = data);

      this._issueService.getos_slack_issues()
      .subscribe(data  => this.os_slack_issues = data);

      this._issueService.getghc_slack_issues()
      .subscribe(data  => this.ghc_slack_issues = data);

      this._issueService.getmalaria_ios_issues()
      .subscribe(data  => this.malaria_ios_issues = data);

      this._issueService.getpowerup_ios_issues()
      .subscribe(data  => this.powerup_ios_issues = data);

      this._issueService.getpeacetrack_ios_issues()
      .subscribe(data  => this.peacetrack_ios_issues = data);

      this._issueService.getfirstaide_ios_issues()
      .subscribe(data  => this.firstaide_ios_issues = data);

      this._issueService.getvola_ios_issues()
      .subscribe(data  => this.vola_ios_issues = data);





  }

}
