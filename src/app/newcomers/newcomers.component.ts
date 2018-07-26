import { Component, OnInit } from '@angular/core';
import { nonCodeMethodsData } from '../newcomers/nonCodeMethodsData';
import { Workflow } from './workflow-stages-data';
import { Resources } from './resources-data';
import { LanguageWiseProjects } from './LanguageWiseProjects';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-newcomers',
  templateUrl: './newcomers.component.html',
  styleUrls: ['./newcomers.component.scss']
})

@Pipe({ name: 'safe' })

export class NewcomersComponent implements OnInit, PipeTransform {
  method_details = nonCodeMethodsData;
  workflow_stages = Workflow;
  resources = Resources;
  languagewiseprojects = LanguageWiseProjects;

  constructor(private sanitizer: DomSanitizer) {}

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit() { }

}

