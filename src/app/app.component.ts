import { Component, OnInit } from '@angular/core';
import { ServiceService } from './http.interceptor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private service:ServiceService){}
  ngOnInit(): void {
    this.service.getData()
  }
  title = 'interceptor';
}
