import { Routes } from '@angular/router';
import { AsyncDemo } from './async-demo/async-demo';
import { Home } from './home/home';
import { Details } from './details/details';
import { Homedecor } from './homedecor/homedecor';
import { Marimdecor } from './marimdecor/marimdecor';


export const routes: Routes = [

      {
        path: 'async',
        component: AsyncDemo,
        title: 'async demo'
      },
      {
        path: 'home',
        component: Home,
        title: 'Home listings'
      },
      {
        path: '',
        component: Home,
        title: 'Home Listings'
      },
      {
        path: 'details/:id',
        component: Details,
        title: 'Home details',
        
      },
      {
        path: 'homedecor',
        component: Homedecor,
        title: 'Home Decor'
      },
      {
        path: 'marimdecor',
        component: Marimdecor,
        title: 'Marimekko en casa'
      }
];
