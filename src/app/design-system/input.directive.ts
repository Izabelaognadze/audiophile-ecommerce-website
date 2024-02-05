import { Directive, HostBinding } from '@angular/core';
import clsx from 'clsx';

@Directive({
  selector: '[appInput]',
  standalone: true,
})
export class InputDirective {
  constructor() {}

  @HostBinding('class')
  get additionalClasses() {
    return clsx({
      'border-clrBorder border-2 rounded-lg border-solid mt-[9px] placeholder:text-sm pl-6 py-[14px] w-full active:border-clr-colors-darkOrange focus:border-clr-colors-darkOrange focus:ring-clr-colors-darkOrange':
        true,
    });
  }
}
