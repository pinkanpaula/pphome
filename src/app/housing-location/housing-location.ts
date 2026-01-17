import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Housinglocationint } from '../housinglocationint';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  imports: [CommonModule,RouterModule],
  template: `
  <section class="listing">
    <img class="listing-photo" [src]="housingLocationInt.photo" alt="Exterior photo of {{housingLocationInt.name}}">
    <h2 class="listing-heading">{{ housingLocationInt.name }}</h2>
    <p class="listing-location">{{ housingLocationInt.city}}, {{housingLocationInt.state }}</p>
    <a [routerLink]="['/details', housingLocationInt.id]">Learn More</a>
  </section>
  `,
  styleUrl: './housing-location.css',
})
export class HousingLocation {
  @Input() housingLocationInt!: Housinglocationint;
}
