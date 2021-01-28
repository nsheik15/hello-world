import { ApiService } from './../api.service';
import { Component, ElementRef, EventEmitter, Input, Output, QueryList, SimpleChange, ViewChild, ViewChildren } from "@angular/core";

@Component({
  selector: 'app-manual-component',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.css']
})

export class ManualComponent {

  @Input('dataToChild') dataFromParent = '';
  @Input('dataToChild2') dataFromParent2 = '';
  @Output() childData = new EventEmitter();
  @ViewChild('ElRef') ElRef: ElementRef;
  @ViewChildren('ElRef1') InputRef: QueryList<any>;

  InputRefArr;
  Name = 'Chairmadurai';
  word = 'Hi Manual Componet';
  idName = 'text1';
  condition = true;
  input1 = 'test';
  textBold = {
    fontWeight: 'bold',
    fontSize: '30px'
  }
  arr = [
    1,
    2,
    3,
    4,
    5
  ]
  num = 4;
  public date = new Date();
  public n1 = "Namename";
  public greet = "Welcome nsheik15";
  public person = {
    "firstName": "Nihal",
    "lastName": "Sheik"
  }

  num1;
  num2;
  sum;

  newObj;
  apiObj;


  constructor(private service: ApiService) {
    console.log('Constructor Works!!');
  }

  ngOnChanges(changes: SimpleChange) {

    console.log(changes);

  }

  ngOnInit() {
    console.log('ngOnInit Works!!');
    this.getObj();
  }

  ngDoCheck() {
    console.log('ngDoCheck Works!!');
  }

  ngAfterContentInit() {
    console.log('ngOnContentInit Works!!');

  }

  ngAfterContentChecked() {
    console.log('ngOnContentChecked Works!!');

  }

  ngAfterViewInit() {
    console.log('ngOnViewInit Works!!');
    this.ElRef.nativeElement.style.color = 'blue';
  }

  ngAfterViewChecked() {
    console.log('ngOnViewChecked Works!!');

  }

  ngOnDestroy() {
    console.log('ngOnDestroy Works!!');

  }



  onButtonClick() {
    alert('Button Works!!');
  }

  sendData() {
    this.childData.emit('Data Sent to Parent!!');
  }

  changeColor(index) {
    this.InputRefArr = this.InputRef.toArray();
    console.log(this.InputRefArr)
    this.InputRefArr[index].nativeElement.style.color = 'red';
  }

  add() {
    this.sum = this.service.add(this.num1, this.num2);
  }

  getObj() {
    this.newObj = this.service.getObj();
  }

  getAPIData() {
    this.service.getApiData().subscribe(data => {
      this.apiObj = data;
    })
  }

}
