import { RxjsService } from './../rxjs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor(private rxjs: RxjsService) { }

  ngOnInit(): void {
  }

  getModData() {
    this.rxjs.getApiData().subscribe(data => {
      console.log(data);
    })
  }

  getFilterData() {
    this.rxjs.getFilterData().subscribe(data => {
      console.log(data);
    })
  }

}
