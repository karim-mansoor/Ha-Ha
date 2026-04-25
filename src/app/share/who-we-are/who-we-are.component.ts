import { Component } from '@angular/core';
import { TranslationServiceService } from '../../core/Lang/translation-service.service';

@Component({
  selector: 'app-who-we-are',
  standalone: true,
  templateUrl: './who-we-are.component.html',
  styleUrl: './who-we-are.component.scss'
})
export class WhoWeAreComponent {
    constructor(public translationService: TranslationServiceService) {}
}
