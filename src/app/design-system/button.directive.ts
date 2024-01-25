import { Directive, HostBinding, Input } from '@angular/core';
import { clsx } from 'clsx';

type ButtonType = 'Button1' | 'white' | 'black' | 'Button3' | 'Button4';

@Directive({
  selector: '[appButton]',
  standalone: true,
})
export class ButtonDirective {
  @Input() variant: ButtonType = 'Button1';

  @HostBinding('class')
  get additionalClasses() {
    return clsx({
      '': true,
      'bg-blue-500 hover:opacity-80 text-white font-bold py-2 px-4 border border-blue-700':
        this.variant === 'Button1',
      'uppercase border-[1px] border-black w-40 h-12 font-bold text-[13px] tracking-[1px] hover:bg-black hover:text-white':
        this.variant === 'white',
      'bg-black text-white hover:bg-clrbgHover hover:cursor-pointer hover:bg-[#4C4C4C] w-40 h-12 uppercase relative mt-6 mb-[55px] text-[13px] tracking-[1px] md:mt-10 md:mb-16 lg:mt-[55px] lg:mb-0':
        this.variant === 'black',
      'uppercase opacity-50 tracking-[1px] font-bold text-[13px]':
        this.variant === 'Button3',
      'pb-6 opacity-50 hover:opacity-100 hover:cursor-pointer lg:pb-[38px] capitalize hover:text-clrDarkOrange':
        this.variant === 'Button4',
    });
  }
}
