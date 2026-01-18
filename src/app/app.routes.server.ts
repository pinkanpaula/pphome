import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'details/:id',
    renderMode: RenderMode.Server
    //renderMode: RenderMode.Prerender
  },
  { path: '**', renderMode: RenderMode.Server },
];
