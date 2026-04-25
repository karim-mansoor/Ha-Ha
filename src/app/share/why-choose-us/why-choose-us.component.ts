import { Component } from '@angular/core';
import { TranslationServiceService } from '../../core/Lang/translation-service.service';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  templateUrl: './why-choose-us.component.html',
  styleUrl: './why-choose-us.component.scss'
})
export class WhyChooseUsComponent {
    constructor(public translationService: TranslationServiceService) {}
}
