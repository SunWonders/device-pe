import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { BrandComponent } from './brand/brand.component';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AccessoriesComponent } from './accessories/accessories.component';
import { ModelComponent } from './model/model.component';
import { VarientComponent } from './varient/varient.component';
import { VarientChecklistComponent } from './varient-checklist/varient-checklist.component';
import { BulkComponent } from './bulk/bulk.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AuthenticationRoutingModule } from '../authentication/authentication-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { ProfileComponent } from './profile/profile.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [
    BrandComponent,
    AccessoriesComponent,
    ModelComponent,
    VarientComponent,
    VarientChecklistComponent,
    BulkComponent,
    ProfileComponent,
    FileuploadComponent,
    OrdersComponent
  ],
  imports: [CommonModule, AdminRoutingModule, GridModule, MatSlideToggleModule, CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule, MatSnackBarModule,MaterialFileInputModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminModule { }
