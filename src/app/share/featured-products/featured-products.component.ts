import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Device } from '../../core/models/device.model';
import { TranslationServiceService } from '../../core/Lang/translation-service.service';

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [CommonModule, RouterLink, ProductCardComponent],
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.scss'
})
export class FeaturedProductsComponent {
  @Input() devices: Device[] = [];
  constructor(public translationService: TranslationServiceService) {}
}
