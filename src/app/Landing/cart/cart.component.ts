import { Component } from '@angular/core';
import { TranslationServiceService } from '../../core/Lang/translation-service.service';
// import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  constructor(public translationService: TranslationServiceService) {}
}
