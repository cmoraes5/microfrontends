import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from 'projects/app-a/src/app/app-routing.module';
import { HomeComponent } from './components/home/home.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/home/home.module').then(({ HomeModule }) => HomeModule),
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
