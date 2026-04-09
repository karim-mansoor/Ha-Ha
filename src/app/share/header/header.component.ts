import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationServiceService } from '../../core/Lang/translation-service.service'; 
import { AsyncPipe } from '@angular/common'; // <--- Add this import
@Component({
  selector: 'app-header',
  imports: [RouterLink,AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent
 {
  constructor(public translationService: TranslationServiceService) {}

  switchLanguage(lang: string) {
    this.translationService.setLanguage(lang);
  }

}
