import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessoriesComponent } from './accessories/accessories.component';
import { BrandComponent } from './brand/brand.component';
import { ModelComponent } from './model/model.component';

const routes: Routes = [
  {
    path:'brand',
    component:BrandComponent,
  
  },
  {
    path:'accessories',
    component:AccessoriesComponent,
  },
  {
    path:'models',
    component:ModelComponent,
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
