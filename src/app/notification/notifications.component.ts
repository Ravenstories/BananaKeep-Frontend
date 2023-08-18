import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { SignalrService } from '../services/signalr.service';
import { HttpClient } from '@angular/common/http';
import { I_Notification } from '../interfaces/i_notification';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
})

export class NotificationsComponent implements OnInit {
  constructor(public signalrService: SignalrService, private http: HttpClient) {}

  ngOnInit(): void {
    this.signalrService.addTransferDataListener();
    this.startHttpRequest();
  }


  public startHttpRequest = () => {
    this.http.get('https://localhost:7001/ws/Incident')
      .subscribe(res => {
        console.log("startHttpRequest ", res);
      })
  }
  
 
}

