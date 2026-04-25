import { Component } from '@angular/core';
import { Device } from '../../core/models/device.model';
import { Input } from '@angular/core';
// import { RouterLink } from "@angular/router";
// import { NgForOf } from "../../../../node_modules/@angular/common/common_module.d-NEF7UaHr";
import { Router } from '@angular/router'; // Import the Router
import { environment } from '../../core/Env/Environment.API';
import { NgIf } from '@angular/common'; // Important for *ngIf


@Component({
  selector: 'app-product-card',
  imports: [NgIf],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent 
{
  constructor(private router: Router) {} // Inject the Router
  
  get Api()
  {
     return `${environment.Api}/uploads/`
  }
  @Input() device!: Device;
  isModalOpen = false;

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
    // Prevent background scrolling when modal is open
    document.body.style.overflow = this.isModalOpen ? 'hidden' : 'auto';
  }

  // device :Device ={
  // _id: "string",

  // name: "",
  // price: 30,
  // description: "string",

  // images: "asset/Pngs/product/perfusor-space.jpeg",

  // company: {
  //   name:"sadd",
  // }    ,
  // category: {
  //   name:"asdasd",
  // }
  // }
  onContactClick() {
    console.log("Navigating to contact page...");
    this.router.navigate(['/contact']); // Force navigation
  }


}
