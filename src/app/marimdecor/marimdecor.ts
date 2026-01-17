import { Component } from '@angular/core';
import { NgxImageZoomModule } from 'ngx-image-zoom';

@Component({
  selector: 'app-marimdecor',
  imports: [NgxImageZoomModule],
  template: `
    <article>
       <lib-ngx-image-zoom [thumbImage]="micasa1Thumb" [fullImage]="micasa1Full" class="listing-photo"></lib-ngx-image-zoom>
       <p></p>
       <lib-ngx-image-zoom [thumbImage]="micasa3Thumb" [fullImage]="micasa3Full" class="listing-photo"></lib-ngx-image-zoom>
        <p></p>
        <lib-ngx-image-zoom [thumbImage]="micasa5Thumb" [fullImage]="micasa5Full" class="listing-photo"></lib-ngx-image-zoom>
       <section class="listing-features">
      <p class="listing-location">Marimekko cushions, mugs, towels brighten up my place</p>
      <p class="listing-location">Mouse over to zoom photos, new addition will be added following the progress</p>
    </section>
    </article>
  `,
  styleUrl: './marimdecor.css',
})
export class Marimdecor {
    micasa1Thumb = 'https://i.ibb.co.com/W4T2S0rC/micasa1-Thumb.jpg';  
    micasa1Full = 'https://i.ibb.co.com/Z6sKxg8V/micasa1.jpg';
    micasa3Thumb = 'https://i.ibb.co.com/CsnWpgjq/micasa3thumb.jpg';
    micasa3Full = 'https://i.ibb.co.com/Q7hsHDj0/micasa3.jpg';
    micasa5Thumb = 'https://i.ibb.co.com/W4vPqHpR/micasa5thumb.jpg';
    micasa5Full = 'https://i.ibb.co.com/Tjcs6D9/micasa5.jpg';
}
