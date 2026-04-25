import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HeroComponent } from '../../share/hero/hero.component';
import { WhoWeAreComponent } from '../../share/who-we-are/who-we-are.component';
import { CoreServicesComponent } from '../../share/core-services/core-services.component';
import { FeaturedProductsComponent } from '../../share/featured-products/featured-products.component';
import { ReplacementPartsComponent } from '../../share/replacement-parts/replacement-parts.component';
import { HowWeWorkComponent } from '../../share/how-we-work/how-we-work.component';
import { WhyChooseUsComponent } from '../../share/why-choose-us/why-choose-us.component';
import { FinalCtaComponent } from '../../share/final-cta/final-cta.component';
import { Device } from '../../core/models/device.model';
import { environment } from '../../core/Env/Environment.API';
import { TranslationServiceService } from '../../core/Lang/translation-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeroComponent,
    WhoWeAreComponent,
    CoreServicesComponent,
    FeaturedProductsComponent,
    ReplacementPartsComponent,
    HowWeWorkComponent,
    WhyChooseUsComponent,
    FinalCtaComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class HomePageComponent implements OnInit {
  DiscountedDevices: Device[] = [];

  constructor(private http: HttpClient,public translationService: TranslationServiceService ) {}
  get Api ()
  {
   return `${environment.Api}/devices`;
  }
  ngOnInit(): void {
    this.fetchFeaturedDevices();
  }

  fetchFeaturedDevices() 
  {
    this.http.get<any>(this.Api).subscribe({
      next: (res)=>
      {
        const data:Device[] = res.data||res;
        this.DiscountedDevices = data.slice(0,4);
      }
    })
  }
}