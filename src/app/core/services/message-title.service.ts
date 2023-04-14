import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Observable} from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MessageTitleService {
  private subject = new Subject<any>();

  sendTitle(obj: any) {
    this.subject.next(obj);
  }

  clearTitle() {
    this.subject.next();
  }

  onTitle(): Observable<any> {
    return this.subject.asObservable();
  }
}
