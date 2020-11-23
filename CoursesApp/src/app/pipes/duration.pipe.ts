import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})

export class DurationPipe implements PipeTransform {

  transform(min: number): string {

    if (min < 60)
    {
        return min + " m.";
    }

    var hours = (min / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);

    return rhours + " h " + rminutes + " m.";
  }
}
