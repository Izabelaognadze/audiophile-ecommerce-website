import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  selectedPaymentMethod: string = 'Yes';

  updatePaymentMethod(value: string) {
    this.selectedPaymentMethod = value;
  }

  form = new FormGroup({
    name: new FormControl('', [
      Validators.pattern(/[A-Za-z ]{1,}/)
    ]),
    email : new FormControl('', Validators.email),
    phone : new FormControl('', Validators.pattern(/^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/)),
    address : new FormControl('', Validators.minLength(4)),
    zip : new FormControl('', Validators.pattern(/[0-9]{2,}/)),
    city : new FormControl('', Validators.pattern('[A-Za-z ]{1,}')),
    country : new FormControl('', Validators.pattern('[A-Za-z ]{1,}')),
    eMoneyNumber : new FormControl('', Validators.pattern(/[0-9]{2,}/)),
    eMoneyPIN : new FormControl('', Validators.pattern(/[0-9]{2,}/)),
  })
 
  get name(){
    return this.form.get('name')
  }
  get email(){
    return this.form.get('email')
  }
  get phone(){
    return this.form.get('phone')
  }
  get address(){
    return this.form.get('address')
  }
  get zip(){
    return this.form.get('zip')
  }
  get city(){
    return this.form.get('city')
  }
  get country(){
    return this.form.get('country')
  }
  get eMoneyNumber(){
    return this.form.get('eMoneyNumber')
  }
  get eMoneyPIN(){
    return this.form.get('eMoneyPIN')
  }
}
