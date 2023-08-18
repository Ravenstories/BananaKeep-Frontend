import { Component, OnInit } from '@angular/core';
import { SignalrService } from './services/signalr.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BananaKeep-Frontend';

  constructor(public signalRService: SignalrService, private http: HttpClient) { }
  ngOnInit() {
    this.signalRService.startConnection();
  }
}
