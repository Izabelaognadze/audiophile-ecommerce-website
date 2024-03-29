import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LabelDirective } from '../design-system/label.directive';
import { InputDirective } from '../design-system/input.directive';
import { Product } from '../shared/models/product';
import { ProductService } from '../shared/services/product.service';
import { RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import { ButtonDirective } from '../design-system/button.directive';
import { ConfirmationComponent } from '../confirmation/confirmation.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    FormsModule,
    ReactiveFormsModule,
    LabelDirective,
    InputDirective,
    RouterModule,
    ButtonDirective,
    ConfirmationComponent,
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent {
  selectedPaymentMethod: boolean = true;
  products: Product[] = [];
  shipping = 50;
  vat!: number;
  grandTotal = 0;
  form;
  toggle = false;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private location: Location
  ) {
    this.form = this.fb.group({
      name: new FormControl('', [Validators.pattern(/[A-Za-z ]{1,}/)]),
      email: new FormControl('', Validators.email),
      phone: new FormControl(
        '',
        Validators.pattern(/^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/)
      ),
      address: new FormControl('', Validators.minLength(4)),
      zip: new FormControl('', Validators.pattern(/[0-9]{2,}/)),
      city: new FormControl('', Validators.pattern('[A-Za-z ]{1,}')),
      country: new FormControl('', Validators.pattern('[A-Za-z ]{1,}')),
      eMoneyNumber: new FormControl('', Validators.pattern(/[0-9]{2,}/)),
      eMoneyPIN: new FormControl('', Validators.pattern(/[0-9]{2,}/)),
    });

    this.productService.getProducts().subscribe((d) => {
      this.products = d.filter((i) => i.amount > 0);
      this.vat = this.getTotal() * 0.2;
      this.grandTotal = this.shipping + this.vat + this.getTotal();
    });
  }

  getTotal(): number {
    return this.products.reduce(
      (total, product) => total + product.price * product.amount,
      0
    );
  }

  goBack(): void {
    this.location.back();
  }

  get name() {
    return this.form.get('name');
  }
  get email() {
    return this.form.get('email');
  }
  get phone() {
    return this.form.get('phone');
  }
  get address() {
    return this.form.get('address');
  }
  get zip() {
    return this.form.get('zip');
  }
  get city() {
    return this.form.get('city');
  }
  get country() {
    return this.form.get('country');
  }
  get eMoneyNumber() {
    return this.form.get('eMoneyNumber');
  }
  get eMoneyPIN() {
    return this.form.get('eMoneyPIN');
  }

  updatePaymentMethod(value: boolean) {
    this.selectedPaymentMethod = value;
  }
}
