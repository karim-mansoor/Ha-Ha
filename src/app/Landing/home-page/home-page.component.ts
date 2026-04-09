import { Component, OnInit } from '@angular/core';
import { HeroComponent } from '../../share/hero/hero.component';
import { ProductCardComponent } from '../../share/product-card/product-card.component';
import { RouterLink } from '@angular/router';
import { Device } from '../../core/models/device.model';
import { NgForOf, AsyncPipe } from '@angular/common';
import { environment } from '../../core/Env/Environment.API';
import { TranslationServiceService } from '../../core/Lang/translation-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeroComponent, ProductCardComponent, RouterLink, NgForOf, ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
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