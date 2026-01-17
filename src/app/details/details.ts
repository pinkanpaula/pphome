import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Housing } from '../housing';
import { Housinglocationint } from '../housinglocationint';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-details',
  imports: [CommonModule,
  ReactiveFormsModule],
  template: `
 <article>
    <img class="listing-photo" [src]="housingLocation?.photo"
      alt="Exterior photo of {{housingLocation?.name}}"/>
    <section class="listing-description">
      <h2 class="listing-heading">{{housingLocation?.name}}</h2>
      <p class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
    </section>
    <section class="listing-features">
      <h2 class="section-heading">About this housing location</h2>
      <ul>
        <li>Units available: {{housingLocation?.availableUnits}}</li>
        <li>Does this location have wifi: {{housingLocation?.wifi}}</li>
        <li>Does this location have laundry: {{housingLocation?.laundry}}</li>
      </ul>
    </section>
      <section class="listing-apply">
      <h2 class="section-heading">Apply now to live here</h2>
      @if (showSuccessMessage) {
      <div class="alert alert-success">
        <strong>success!</strong> {{successMessage}}
      </div>
      }

      <form [formGroup]="applyForm" (submit)="submitApplication()">
        <label for="first-name">First Name</label>
        <input id="first-name" type="text" formControlName="firstName" required>
        @if(fname?.errors){
                <div class="alert alert-success">
                  <strong>error!</strong> require first name
                </div>
        }

        <label for="last-name">Last Name</label>
        <input id="last-name" type="text" formControlName="lastName">
        @if(lname?.errors){
                <div class="alert alert-success">
                  <strong>error!</strong> require last name
                </div>
        }
        <label for="email">Email</label>
        <input id="email" type="email" formControlName="email">
        @if(email?.errors){
                <div class="alert alert-success">
                  <strong>error!</strong>  incorrect email format
                </div>
        }
        <button type="submit" class="apply-button">Apply now</button>
      </form>
    </section>
  </article>
  `,
  styleUrl: './details.css',
})
export class Details {
  showSuccessMessage = false;
  successMessage = '';
  route: ActivatedRoute = inject(ActivatedRoute);
    housingLocationId = -1;
    housingService = inject(Housing);
    housingLocation: Housinglocationint | undefined;
    applyForm = new FormGroup({
      firstName: new FormControl('',[Validators.required,Validators.minLength(3)]),
      lastName: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email])
    });

    get email(){
      return this.applyForm.get('email');
    }

    get fname(){
      return this.applyForm.get('firstName');
    }

    get lname(){
      return this.applyForm.get('lastName');
    }

    constructor() {
      //const housingLocationId = Number(this.route.snapshot.params['id']);
      const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
      this.housingService.getHousingLocationById1(housingLocationId).then(housingLocation=>{
        this.housingLocation=housingLocation;
      }).catch(error=>{
        this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
      });      
      //this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
    }

    submitApplication() {
      this.housingService.submitApplication(
        this.applyForm.value.firstName ?? '',
        this.applyForm.value.lastName ?? '',
        this.applyForm.value.email ?? ''
      );
      this.successMessage = 'Form submitted successfully!';
      this.showSuccessMessage = true;
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 3000);
    }



}
