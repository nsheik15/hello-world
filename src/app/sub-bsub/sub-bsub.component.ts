import { SubBsubService } from './../sub-bsub.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-bsub',
  templateUrl: './sub-bsub.component.html',
  styleUrls: ['./sub-bsub.component.css']
})
export class SubBsubComponent implements OnInit {

  constructor(private sub: SubBsubService) { }

  ngOnInit(): void {
  }

  getOne() {
    this.sub.addThingOne();
  }

  getTwo() {
    this.sub.addThingTwo();
  }

  getThree() {
    this.sub.addThingThree();
  }

}
