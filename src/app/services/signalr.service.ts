import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { I_Notification } from '../interfaces/i_notification';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {
  public data: [] | undefined;

  private hubConnection!: signalR.HubConnection; 
    public startConnection = () => {
      this.hubConnection = new signalR.HubConnectionBuilder()
                              .withUrl('https://localhost:7001/Incident')
                              .build();
      this.hubConnection
        .start()
        .then(() => console.log('Connection started'))
        .catch(err => console.log('Error while starting connection: ' + err))
    }
    
    public addTransferDataListener = () => {
      this.hubConnection.on('transferdata', (data) => {
        this.data = data;
        console.log(data);
      });
    }
}