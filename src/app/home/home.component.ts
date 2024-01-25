import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { BestGearComponent } from '../best-gear/best-gear.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, CommonModule, BestGearComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
