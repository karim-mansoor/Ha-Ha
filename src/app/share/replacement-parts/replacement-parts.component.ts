import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationServiceService } from '../../core/Lang/translation-service.service';

@Component({
  selector: 'app-replacement-parts',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './replacement-parts.component.html',
  styleUrl: './replacement-parts.component.scss'
})
export class ReplacementPartsComponent {
    constructor(public translationService: TranslationServiceService) {}
}
