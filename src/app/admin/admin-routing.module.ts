import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessoriesComponent } from './accessories/accessories.component';
import { BrandComponent } from './brand/brand.component';
import { BulkComponent } from './bulk/bulk.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { ModelComponent } from './model/model.component';
import { VarientChecklistComponent } from './varient-checklist/varient-checklist.component';
import { VarientComponent } from './varient/varient.component';
import { OrdersComponent } from './orders/orders.component';
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
    path:'varients',
    component:VarientComponent,
  },
  {
    path:'checklist',
    component:VarientChecklistComponent,
  },
  {
    path:'bulk/upload',
    component:BulkComponent,
  },
  {
    path:'file/upload',
    component:FileuploadComponent,
  },
  {
    path:'orders',
    component:OrdersComponent,
  
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
