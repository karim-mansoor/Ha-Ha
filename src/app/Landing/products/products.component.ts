import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../../share/product-card/product-card.component';
import { RouterLink } from '@angular/router';
import { Device } from '../../core/models/device.model';
import { NgFor, NgIf, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import {Env}
import { environment } from '../../core/Env/Environment.API';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { TranslationServiceService } from '../../core/Lang/translation-service.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent, RouterLink, NgFor, NgIf, FormsModule, CommonModule],
  templateUrl: './products.component.html',
  animations: [
    trigger('listAnimation', [
      transition('* <=> *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger('60ms', [
            animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ],
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit
{
  devicesList: Device[] = [];
  categories: string[] = [];
  companies: string[] = [];
  selectedCategory: string = "all";
  selectedcompany: string = "all";
  // Api:string="";
  searchQuery: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 4;
  constructor( private http: HttpClient, public translationService: TranslationServiceService) {}
  get Api()
  {
    return `${environment.Api}/devices`
  }
  ngOnInit(): void 
  {
    this.fetchDevices();
  }

fetchDevices() {
 this.http.get<any>(this.Api).subscribe({
  next: (res)=>
  {
    const data:Device[]=res.data||res;
    this.devicesList =data; 
      this.categories = Array.from(
        new Set(this.devicesList.map((d: Device) => d.category?.name))
      ).filter(c => !!c) as string[];
      this.companies = Array.from(
        new Set(this.devicesList.map((d:Device) => d.company?.name))
      ).filter(c => !!c)as string[];
  }
     
 }) 

}
// 1. Add the search method

onSearch(): void {
  // Reset to first page so the user doesn't stay on a page that might no longer exist
  this.currentPage = 1;

  if (this.searchQuery.trim() === '') {
    // If search is cleared, just let the standard filters handle it
    return;
  }

  // Optional: If you want to search via Backend specifically for the search bar:
  /*
  this.deviceService.getDeviceByName(this.searchQuery).subscribe({
    next: (device) => { this.devicesList = [device]; },
    error: (err) => { console.error("Device not found", err); }
  });
  */
}
  
get filteredDevices(): Device[] {
  if (!this.devicesList) return [];

  return this.devicesList.filter(device => {
    const categoryMatch = this.selectedCategory === 'all' || 
                         device.category?.name === this.selectedCategory;
                         
    const companyMatch = this.selectedcompany === 'all' || 
                        device.company?.name === this.selectedcompany;

    const searchMatch = !this.searchQuery || 
                        device.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                        device.description?.toLowerCase().includes(this.searchQuery.toLowerCase());

    return categoryMatch && companyMatch && searchMatch;
  });
}
get filteredcomapny(): Device[]
{
  if (!this.devicesList|| this.devicesList.length==0)
    return [];

  if(this.selectedcompany==='all')
  {
    return this.devicesList;
  }
  return this.devicesList.filter((device: Device)=> 
  {
    return device.company?.name === this.selectedcompany;
  });

}



  get totalPages(): number {
    return Math.ceil(this.filteredDevices.length / this.itemsPerPage) || 1;
  }

  get paginatedDevices(): Device[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredDevices.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToPage(page: number): void {
    this.currentPage = page;
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }

  previousPage(): void {
    if (this.currentPage > 1) this.currentPage--;
  }

  gridMode: '4x4' | '2x2' = '4x4'; 

isFullGrid: boolean = true; // true = 16 items (4x4), false = 4 items (2x2)

toggleGrid() {
  this.isFullGrid = !this.isFullGrid;
  // this.itemsPerPage = this.isFullGrid ? 16 : 4; 
  this.currentPage = 1;
}


}