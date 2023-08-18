import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { SignalrService } from '../services/signalr.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
})

export class NotificationsComponent implements OnInit, OnDestroy {
  notifications: string[] = [];
  private dataSubscription: Subscription | undefined;

  constructor(private signalrService: SignalrService) {}

  ngOnInit(): void {
    this.signalrService.startConnection();
    this.signalrService.addTransferDataListener();
    this.subscribeToData();
  }

  ngOnDestroy(): void {
    this.unsubscribeFromData();
  }

  private subscribeToData(): void {
    if (this.signalrService.data instanceof Observable) {
      this.dataSubscription = this.signalrService.data.subscribe((data: any) => {
        if (data) {
          console.log('Received data:', data);
          this.notifications.push(data.notificationMessage); 
        }
      });
    }
  }

  private unsubscribeFromData(): void {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }
}
