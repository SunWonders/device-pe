import { Component, OnInit } from '@angular/core';
import {BrandService} from '../../core/service/brand.service';
import { EditSettingsModel, SaveEventArgs, ToolbarItems } from '@syncfusion/ej2-angular-grids';
@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.sass']
})
export class BrandComponent implements OnInit {

  public typeOfAction:string;
  public data: object[];
  public filterSettings: Object;
  public editSettings: EditSettingsModel;
  public toolbar: ToolbarItems[];
  public brandData: object;
  constructor(private brandService:BrandService) {}

  ngOnInit() {
   
    this.filterSettings = { type: 'Excel' };

    
  //  this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
    this.data = [
   
    ];
    this.brandService.getBrands().subscribe(data => {
      
    console.log(data.data);
    this.data=data.data;
    this.editSettings = { allowEditing: true,  mode: 'Dialog' };
   // this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    }, err => {
      
      console.log(err);
    });
   // console.log(this.brandService.getBrands());
  }

  actionBegin(args: SaveEventArgs) {

    if (args.requestType === 'beginEdit' || args.requestType === 'add') {
        this.brandData = Object.assign({}, args.rowData);
    }
  //console.log(args)
    if (args.requestType === 'save') {
      if(args.data['id']==undefined){
        this.brandService.save(args.data).subscribe(data => {
          console.log(data.data);
        });
        console.log("saveData",args.data)
      }else
      {
        this.brandService.update(args.data).subscribe(data => {
          console.log(data.data);
        });
        console.log("updateData",args.data)
      }
      
    }
    
}


}
