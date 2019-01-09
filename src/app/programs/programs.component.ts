import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, } from '@angular/forms';
import { CommonService } from '../common.service';
import { ProgramService} from '../program.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {
  currentJustify = 'justified';
  constructor(private _programServ : ProgramService ) { }
  public gsoc17list  = [];
  public gsoc16list = [];
  public gsoc15list = [];
  public outreachy17list = [];
  Repdata;
  valbutton = 'Save';


  ngOnInit() {
    this._programServ.getGsoc2017()
    .subscribe(data  => this.gsoc17list = data);

    this._programServ.getGsoc2016()
    .subscribe(data  => this.gsoc16list = data);

    this._programServ.getGsoc2015()
    .subscribe(data  => this.gsoc15list = data);

    this._programServ.getOutreachy17()
    .subscribe(data  => this.outreachy17list = data);
  }

}

