import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Inbox } from '../models/inbox';
import { Observable } from 'rxjs';

@Injectable()
export class InboxService { 

private _url : string = "./assets/mock-data/inbox.json"
  
  constructor( private http : HttpClient) { }

  public getInbox() : Observable<Inbox[]> {
    return this.http.get<Inbox[]>(this._url);
  }

}