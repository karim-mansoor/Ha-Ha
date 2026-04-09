import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactUsCardComponent } from '../../share/contact-us-card/contact-us-card.component';
import { TranslationServiceService } from '../../core/Lang/translation-service.service';
// import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-contact-us',
  imports: [RouterLink, ContactUsCardComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  constructor(public translationService: TranslationServiceService) {}
}
