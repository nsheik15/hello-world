import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  getData() {
    this.api.getApiData().subscribe(data => console.log(data));
  }

}
