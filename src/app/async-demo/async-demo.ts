import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-async-demo',
  imports: [CommonModule],
  templateUrl: './async-demo.html',
  styleUrl: './async-demo.css',
})
export class AsyncDemo {
  data: string="";

  loadData() {
    alert('loading');
    console.log('fu');
    setTimeout(() => {
      this.data = 'Data loaded!';
    }, 2000);
  }
}
