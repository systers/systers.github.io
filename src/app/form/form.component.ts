import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, } from '@angular/forms';
import { CommonService } from '../common.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private newService: CommonService, ) { }
  Repdata;
  valbutton = 'Save';


  ngOnInit() {
    this.newService.GetUser().subscribe(data => this.Repdata = data);
  }

  onSave = function (user, isValid: boolean) {
    user.mode = this.valbutton;
    this.newService.saveUser(user)
      .subscribe(data => {
        alert(data.data);
        this.ngOnInit();
      }
        , error => this.errorMessage = error);

  };
  edit = function (kk) {
    this.id = kk._id;
    this.PROGRAM = kk.PROGRAM;
    this.YEAR = kk.YEAR;
    this.PROJECT = kk.PROJECT;
    this.STUDENT = kk.STUDENT;
    this.PROJECTMANAGERANDMENTOR = kk.PROJECTMANAGERANDMENTOR;
    this.MENTORS = kk.MENTORS;
    this.valbutton = 'Update';
  };

  delete = function (id) {
    this.newService.deleteUser(id)
      .subscribe(data => { alert(data.data); this.ngOnInit(); }, error => this.errorMessage = error);
  };

}
