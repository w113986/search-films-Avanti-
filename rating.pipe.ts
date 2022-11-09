import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {

  transform(value:string): String {



    console.log(value)

    if(value >='85')

    value="****";

    if(value <'85' && value >'60' )

    value="***";

    else

    value ="**";

    return value;

  }
}
