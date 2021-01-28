import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  input1 = 'before change';
  title = 'nsheik15';

  onChildEvent(value) {
    alert('Data from Child: ' + value);
  }

}
