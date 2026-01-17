import { Component } from '@angular/core';
import { NgxImageZoomModule } from 'ngx-image-zoom';


@Component({
  selector: 'app-homedecor',
  imports: [NgxImageZoomModule],
  template: `
   <article>
    
    <img class="listing-photo" src="https://i.ibb.co.com/Z6sKxg8V/micasa1.jpg" alt="micasa1"/>
    <p></p>
    <img class="listing-photo" src="https://i.ibb.co.com/1fgXDg8Y/micasa2.jpg" alt="micasa2"/>
    <p></p>
    <img class="listing-photo" src="https://i.ibb.co.com/Q7hsHDj0/micasa3.jpg" alt="micasa3">
    <p></p>
    <img class="listing-photo" src="https://i.ibb.co.com/Ng71HhFv/micasa4.jpg" alt="micasa4">
    <section class="listing-features">
      <p class="listing-location">Currently doing some renovation as a first time home owner</p>
      <p class="listing-location">Photos will be updated following the progress</p>
    </section>
   </article>
  `,
  styleUrl: './homedecor.css',
})
export class Homedecor {
  micasa1Thumb = 'https://i.ibb.co.com/W4T2S0rC/micasa1-Thumb.jpg';  
  micasa1Full = 'https://i.ibb.co.com/Z6sKxg8V/micasa1.jpg';

}
