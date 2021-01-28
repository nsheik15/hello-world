import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value , args) {
    let val;

    if( args === '1') {
      val = 'Mr. ' + value;
    }
    else if( args === '2') {
      val = 'Ms. ' + value;
    }
    else if( args === '3') {
      val = 'Mrs. ' + value;
    }

    return val;
  }

}
