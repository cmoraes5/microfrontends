import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'app-a',
    loadChildren: () => import('appA/HomeModule').then(m => m.HomeModule)
  },
  {
    path: 'app-b',
    loadChildren: () => import('appB/HomeModule').then(m => m.HomeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
