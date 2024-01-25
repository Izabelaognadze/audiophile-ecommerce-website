import { Directive, HostBinding, Input } from '@angular/core';
import { clsx } from 'clsx';

type ButtonType = 'orange' | 'white' | 'black' | 'Button3' | 'Button4';

@Directive({
  selector: '[appButton]',
  standalone: true,
})
export class ButtonDirective {
  @Input() variant: ButtonType = 'orange';

  @HostBinding('class')
  get additionalClasses() {
    return clsx({
      '': true,
      'text-white text-center text-[13px] font-bold leading-normal tracking-[1px] uppercase bg-clr-colors-darkOrange hover:bg-clr-colors-lightOrange py-[15px] mt-6 mb-8':
        this.variant === 'orange',
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
