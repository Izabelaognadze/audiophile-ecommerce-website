import { Directive, HostBinding, Input } from '@angular/core';
import { clsx } from 'clsx';

type ButtonType = 'Button1' | 'Button2' | 'Button3' | 'Button4';

@Directive({
  selector: '[appButton]',
  standalone: true,
})
export class ButtonDirective {
  @Input() variant: ButtonType = 'Button1';

  @HostBinding('class')
  get additionalClasses() {
    return clsx({
      'uppercase tracking-[1px] duration-300 text-base w-32 rounded text-center':
        true,
      'bg-blue-500 hover:opacity-80 text-white font-bold py-2 px-4 border border-blue-700':
        this.variant === 'Button1',
      'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border-2 border-b-blue-500 hover:border-transparent':
        this.variant === 'Button2',
      'uppercase opacity-50 tracking-[1px] font-bold text-[13px]':
        this.variant === 'Button3',
      'pb-6 opacity-50 hover:opacity-100 hover:cursor-pointer lg:pb-[38px] capitalize hover:text-clrDarkOrange':
        this.variant === 'Button4',
    });
  }
}
