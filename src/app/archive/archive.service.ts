import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Archive } from '../models/archive';
import { Observable } from 'rxjs';

@Injectable()
export class ArchiveService { 

private _url : string = "./assets/mock-data/archive.json"
  
  constructor( private http : HttpClient) { }

  public getArchive() : Observable<Archive> {
    return this.http.get<Archive>(this._url);
  }

}