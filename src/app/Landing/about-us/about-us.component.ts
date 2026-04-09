import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgForOf } from '@angular/common'; // Required for the *ngFor loop
import { TranslationServiceService } from '../../core/Lang/translation-service.service';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [RouterLink, NgForOf],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
  // Inject the service as public so the HTML can see it directly
  constructor(public translationService: TranslationServiceService) {}
  
  // Array for the loop in HTML
  public whyKeys = ['WHY_1', 'WHY_2', 'WHY_3', 'WHY_4', 'WHY_5', 'WHY_6'];
}