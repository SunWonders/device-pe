import { Component, OnInit } from '@angular/core';
import { EditSettingsModel, ToolbarItems, SaveEventArgs } from '@syncfusion/ej2-angular-grids';
import { ModelService } from 'src/app/core/service/model.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.sass']
})
export class ModelComponent implements OnInit {

  public data: object[];
  public filterSettings: Object;
  public editSettings: EditSettingsModel;
  public toolbar: ToolbarItems[];
  public modelsData: object;
  constructor(private modelService:ModelService) {}

  ngOnInit() {
   
    this.filterSettings = { type: 'Excel' };

    
  //  this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
    this.data = [
   
    ];
    this.modelService.getAccessories().subscribe(data => {
      
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
        this.modelsData = Object.assign({}, args.rowData);
    }
  //console.log(args)
    if (args.requestType === 'save') {
      if(args.data['id']==undefined){
        this.modelService.update(args.data).subscribe(data => {
          console.log(data.data);
        });
        console.log("saveData",args.data)
      }else
      {
        this.modelService.update(args.data).subscribe(data => {
          console.log(data.data);
        });
        console.log("updateData",args.data)
      }
      
    }
    
}
}
