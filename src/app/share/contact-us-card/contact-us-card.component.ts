import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-contact-us-card',
  imports: [FormsModule, NgIf],
  templateUrl: './contact-us-card.component.html',
  styleUrl: './contact-us-card.component.scss'
})
export class ContactUsCardComponent {

  // Form Object
  contactData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
   
    // this.route.queryParams.subscribe(params => {
    //   if (params['device']) {
    //     this.contactData.subject = `Inquiry: ${params['device']}`;
    //     this.contactData.message = `I am interested in learning more about the ${params['device']}. Please provide a quote.`;
    //   }
    // });
  }

  onSubmit() {
    console.log('Sending message to AH&HA:', this.contactData);
    
  }
}
