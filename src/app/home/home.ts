import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location/housing-location';
import { Housinglocationint } from '../housinglocationint';
import { Housing } from '../housing';
import { error } from 'node:console';

@Component({
  selector: 'app-home',
  imports: [CommonModule,HousingLocation],
  template: `
    <section>
    <form>
      <input type="text" placeholder="Filter by city" #filter>
      <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
    </form>
  </section>
    <section class="results">
    <app-housing-location *ngFor="let housingLocation of filteredLocationList"
  [housingLocationInt]="housingLocation"></app-housing-location>
  </section>
  `,
  styleUrl: './home.css',
})
export class Home {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  housingLocationList: Housinglocationint[] = [];
  housingService: Housing = inject(Housing);
  filteredLocationList: Housinglocationint[] = [];

  newList: Housinglocationint[] = [];
  filteredNewList: Housinglocationint[] = [];


  constructor(){

    this.housingService.getAllHousingLocations1()
    .then((housingLocationList:Housinglocationint[]) => {
       this.housingLocationList = housingLocationList;
       this.filteredLocationList = housingLocationList;
       console.log('in home inside async method')
       console.log(JSON.stringify(this.filteredLocationList));
    }).catch(error=>{
          console.log("error fetching:",error);
          this.housingLocationList = this.housingService.getAllHousingLocations();
          this.filteredLocationList = this.housingLocationList;
    });
    
  }

  filterResults(text: string) {
  if (!text) {
    this.filteredLocationList = this.housingLocationList;
    return;
  }

  this.filteredLocationList = this.housingLocationList.filter(
    housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
  );
}

}
