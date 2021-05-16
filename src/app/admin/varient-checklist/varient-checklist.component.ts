import { Component, OnInit } from '@angular/core';
import { EditSettingsModel, ToolbarItems, SaveEventArgs } from '@syncfusion/ej2-angular-grids';
import { VarientChecklistService } from 'src/app/core/service/varient-checklist.service';

@Component({
  selector: 'app-varient-checklist',
  templateUrl: './varient-checklist.component.html',
  styleUrls: ['./varient-checklist.component.sass']
})
export class VarientChecklistComponent implements OnInit {

  public data: object[];
  public filterSettings: Object;
  public editSettings: EditSettingsModel;
  public toolbar: ToolbarItems[];
  public varientsCheckListData: object;
  constructor(private varientCheckListService:VarientChecklistService) {}

  ngOnInit() {
   
    this.filterSettings = { type: 'Excel' };

    
  //  this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
    this.data = [
   
    ];
    this.varientCheckListService.getVarientCheckList().subscribe(data => {
      
   // console.log(data.data);
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
        this.varientsCheckListData = Object.assign({}, args.rowData);
    }
  //console.log(args)
    if (args.requestType === 'save') {
      if(args.data['id']==undefined){
        this.varientCheckListService.update(args.data).subscribe(data => {
          console.log(data.data);
        });
        console.log("saveData",args.data)
      }else
      {
        this.varientCheckListService.update(args.data).subscribe(data => {
          console.log(data.data);
        });
        console.log("updateData",args.data)
      }
      
    }
    
}

}
