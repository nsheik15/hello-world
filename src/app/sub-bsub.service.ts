import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubBsubService {

  thingOne = ['a','b','c'];
  thingTwo;
  thingThree = 'start value';

  thingOneStream = of(this.thingOne);

  thingTwoStream = new Subject();
  thingThreeStream = new BehaviorSubject(this.thingThree);

  constructor() { }

  addThingOne() {

    this.thingOne.push('thingOne');

    console.log(this.thingOne);
  }

  addThingTwo() {
    this.thingTwo = Date.now();
    this.thingTwoStream.next(this.thingTwo);

    this.thingTwoStream.subscribe(data => console.log(data));
  }

  addThingThree() {
    this.thingThree = Date.now() + ' check';
    //this.thingThree.push(this.thingThree[this.thingThree.length-1] + 1);
    this.thingThreeStream.next(this.thingThree);
    this.thingThreeStream.next('New Value');

    this.thingThreeStream.subscribe(data => console.log(data));
  }

}
