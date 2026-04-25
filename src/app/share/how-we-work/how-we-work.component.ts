import { Component } from '@angular/core';
import { TranslationServiceService } from '../../core/Lang/translation-service.service';

@Component({
  selector: 'app-how-we-work',
  standalone: true,
  templateUrl: './how-we-work.component.html',
  styleUrl: './how-we-work.component.scss'
})
export class HowWeWorkComponent {
    constructor(public translationService: TranslationServiceService) {}
}
