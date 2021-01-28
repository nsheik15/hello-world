import { Component, OnInit } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';
import { InterpolationConfig } from '@angular/compiler';

@Component({
  selector: '[app-test]',
  template: `
  <h2>Welcome {{name}}</h2>
  <input [id]="name" type="text" value="nsheik15">
  <input bind.disabled="isEnabled" [id]="name" type="text" value="nsheik15">
  <h2 [class.danger]="isTrue">sign!</h2>
  <h2 [ngClass]="check">sign!</h2>
  <h2 [style.color]="isTrue ? 'red' : 'green'">Style Binding</h2>
  <h2 [style.color]="hcolor">Style Binding</h2>
  <h2 [ngStyle]="h1color">Style Binding</h2>
  <button (click)="onClick($event)">Greet</button>
  <button (click)="greet='Welcome nsheik15'">Greet</button>
  {{greet}}
  <input #text type="text">
  <button (click)="login(text.value)">Log</button>
  <input [(ngModel)]="twoway" type="text">
  {{twoway}}
  `,
  styles: [`
    .success{
      color: green;
    }
    .danger{
      color: red;
    }
    .special{
      font-style: italic;
    }
  `]
})
export class TestComponent implements OnInit {

  public name = "nsheik15";
  public siteURL = window.location.href;
  public isTrue = false;
  public status= "danger";
  public bool = true;
  public hcolor = "orange";
  public greet = "";
  public twoway = "";
  public check = {
    "success": this.isTrue,
    "danger": !this.isTrue,
    "special": this.bool
  }
  public h1color = {
    color: "yellow",
    fontStyle: "italic"
  }

  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "Hello " + this.name;
  }

  onClick(event){
    console.log(event);
    this.greet = event.type;
  }

  login(x){
    console.log(x);
  }

}
