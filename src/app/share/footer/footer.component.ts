import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationServiceService } from '../../core/Lang/translation-service.service';
// import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(public translationService: TranslationServiceService) {}
}
