import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { BrandComponent } from './brand/brand.component';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AccessoriesComponent } from './accessories/accessories.component';

@NgModule({
  declarations: [
    BrandComponent,
    AccessoriesComponent
  ],
  imports: [CommonModule, AdminRoutingModule,GridModule,MatSlideToggleModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminModule {}
