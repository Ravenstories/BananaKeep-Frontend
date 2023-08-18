import { Component } from '@angular/core';
import { SignalrService } from './services/signalr.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BananaKeep-Frontend';

  constructor(public signalRService: SignalrService, private http: HttpClient) { }
  ngOnInit() {
    this.signalRService.startConnection();
    this.signalRService.addTransferDataListener();   
    this.startHttpRequest();
  }
  
  private startHttpRequest = () => {
    this.http.get('https://localhost:7001/ws/get')
      .subscribe(res => {
        console.log(res);
      })
  }
}
