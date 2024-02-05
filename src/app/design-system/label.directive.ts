import { Directive, HostBinding } from '@angular/core';
import { clsx } from 'clsx';

@Directive({
  selector: '[appLabel]',
  standalone: true,
})
export class LabelDirective {
  constructor() {}
  @HostBinding('class')
  get additionalClasses() {
    return clsx({
      'text-[15px] font-bold capitalize tracking-[-0.214px]': true,
    });
  }
}
