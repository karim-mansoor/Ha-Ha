import { Component } from '@angular/core';
import { TranslationServiceService } from '../../core/Lang/translation-service.service';

@Component({
  selector: 'app-core-services',
  standalone: true,
  templateUrl: './core-services.component.html',
  styleUrl: './core-services.component.scss'
})
export class CoreServicesComponent {
    constructor(public translationService: TranslationServiceService) {}
}
