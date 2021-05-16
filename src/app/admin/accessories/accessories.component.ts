import { Component, OnInit } from '@angular/core';
import {AccessoriesService} from '../../core/service/accessories.service';
import { EditSettingsModel, SaveEventArgs, ToolbarItems } from '@syncfusion/ej2-angular-grids';
@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.sass']
})
export class AccessoriesComponent implements OnInit {


  public data: object[];
  public filterSettings: Object;
  public editSettings: EditSettingsModel;
  public toolbar: ToolbarItems[];
  public accessoryData: object;
  constructor(private accessoriesService:AccessoriesService) {}

  ngOnInit() {
   
    this.filterSettings = { type: 'Excel' };

    
  //  this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
    this.data = [
   
    ];
    this.accessoriesService.getAccessories().subscribe(data => {
      
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
        this.accessoryData = Object.assign({}, args.rowData);
    }
  //console.log(args)
    if (args.requestType === 'save') {
      if(args.data['id']==undefined){
        this.accessoriesService.update(args.data).subscribe(data => {
          console.log(data.data);
        });
        console.log("saveData",args.data)
      }else
      {
        this.accessoriesService.update(args.data).subscribe(data => {
          console.log(data.data);
        });
        console.log("updateData",args.data)
      }
      
    }
    
}

}
