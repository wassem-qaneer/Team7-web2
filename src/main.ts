import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; 
export const appConfig = {
  providers: [
    provideRouter(routes),
   
  ]
};
