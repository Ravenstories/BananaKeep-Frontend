import { Injectable } from '@angular/core';
import { Observable, Observer, map } from 'rxjs';
import { AnonymousSubject, Subject } from 'rxjs/internal/Subject';
import { webSocket } from 'rxjs/webSocket';

const WS_URL = 'ws://localhost:7001';

export interface Message {
  source: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private socket$: Subject<any>;

  constructor() {
    this.socket$ = webSocket('ws://localhost:7001/ws');
  }

  public sendMessage(message: any): void {
    this.socket$.next(message);
  }

  public getMessages(): Observable<any> {
    return this.socket$;
  }
}