import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Iissue } from './issue';


@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private sysbot_url : string = "https://api.github.com/repos/systers/sysbot/issues";
  private portal_url  :string  ="https://api.github.com/repos/systers/portal/issues";
  private vms_url :string = "https://api.github.com/repos/systers/vms/issues";
  private msb_url :string ="https://api.github.com/repos/systers/mentorship-backend/issues";
  private conf_and_url :string  ="https://api.github.com/repos/systers/conference-android/issues";
  private firstaide_and_url :string  ="https://api.github.com/repos/systers/FirstAide-Android/issues";
  private powerup_and_url :string  ="https://api.github.com/repos/systers/powerup-android/issues";
  private malaria_and_url : string  ="https://api.github.com/repos/systers/malaria-app-android/issues";
  private mentor_and_url : string  ="https://api.github.com/repos/systers/mentorship-android/issues";
  private peacetrack_and_url :string  ="https://api.github.com/repos/systers/peacetrack-android/issues";
  private volunteers_and_url :string  ="https://api.github.com/repos/systers/volunteers-android/issues";
  private systers_os_url : string   ="https://api.github.com/repos/systers/systers.github.io/issues";
  private communities_url :string  ="https://api.github.com/repos/systers/communities/issues";
  private os_slack_url :string  ="https://api.github.com/repos/systers/slack-systers-opensource/issues";
  private ghc_slack_url :string  ="https://api.github.com/repos/systers/slack-ghc/issues";
  private malaria_ios_url :string  ="https://api.github.com/repos/systers/malaria-app-ios/issues";
  private powerup_ios_url :string  ="https://api.github.com/repos/systers/powerup-iOS/issues";
  private peacetrack_ios_url :string  ="https://api.github.com/repos/systers/peacetrack-ios/issues";
  private firstaide_ios_url :string  ="https://api.github.com/repos/systers/FirstAide-iOS/issues";
  private vola_ios_url  :string  ="https://api.github.com/repos/systers/volunteers-iOS/issues";


  constructor(private http  :HttpClient) {}

  getSysbotIssues(): Observable<Iissue[]>{
    return this.http.get<Iissue[]>(this.sysbot_url);
  }

  getportal_issues(): Observable<Iissue[]>{
    return this.http.get<Iissue[]>(this.portal_url);
  }

  getvms_issues(): Observable<Iissue[]>{
    return this.http.get<Iissue[]>(this.vms_url);
  }
  getmsb_issues_issues(): Observable<Iissue[]>{
    return this.http.get<Iissue[]>(this.msb_url);
  }
  getconf_and_issues(): Observable<Iissue[]>{
    return this.http.get<Iissue[]>(this.conf_and_url);
  }
  getfirstaide_and_issues(): Observable<Iissue[]>{
    return this.http.get<Iissue[]>(this.firstaide_and_url);
  }
  getpowerup_and_issues(): Observable<Iissue[]>{
    return this.http.get<Iissue[]>(this.powerup_and_url);
  }
  getmalaria_and_issues(): Observable<Iissue[]>{
    return this.http.get<Iissue[]>(this.malaria_and_url);
  }
  getmentor_and_issues(): Observable<Iissue[]>{
    return this.http.get<Iissue[]>(this.mentor_and_url);
  }
  getpeacetrack_and_issues(): Observable<Iissue[]>{
    return this.http.get<Iissue[]>(this.peacetrack_and_url);
  }
  getvolunteers_and_issues(): Observable<Iissue[]>{
    return this.http.get<Iissue[]>(this.volunteers_and_url);
  }
  getsysters_os_issues(): Observable<Iissue[]>{
    return this.http.get<Iissue[]>(this.systers_os_url);
  }
  getcommunities_issues(): Observable<Iissue[]>{
    return this.http.get<Iissue[]>(this.communities_url);
  }
  getos_slack_issues(): Observable<Iissue[]>{
    return this.http.get<Iissue[]>(this.os_slack_url);
  }
  getghc_slack_issues(): Observable<Iissue[]>{
    return this.http.get<Iissue[]>(this.ghc_slack_url);
  }
  getmalaria_ios_issues(): Observable<Iissue[]>{
    return this.http.get<Iissue[]>(this.malaria_ios_url);
  }
  getpowerup_ios_issues(): Observable<Iissue[]>{
    return this.http.get<Iissue[]>(this.powerup_ios_url);
  }
  getpeacetrack_ios_issues(): Observable<Iissue[]>{
    return this.http.get<Iissue[]>(this.peacetrack_ios_url);
  }
  getfirstaide_ios_issues(): Observable<Iissue[]>{
    return this.http.get<Iissue[]>(this.firstaide_ios_url);
  }
  getvola_ios_issues(): Observable<Iissue[]>{
    return this.http.get<Iissue[]>(this.vola_ios_url);
  }

}

