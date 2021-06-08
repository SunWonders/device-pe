import { Component, OnInit } from '@angular/core';
import { EditSettingsModel, ToolbarItems, SaveEventArgs } from '@syncfusion/ej2-angular-grids';
import { OrdersService } from 'src/app/core/service/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.sass']
})
export class OrdersComponent implements OnInit {

  public data: object[];
  public filterSettings: Object;
  public editSettings: EditSettingsModel;
  public toolbar: ToolbarItems[];
  public modelsData: object;
  constructor(private orderService:OrdersService) {}

  ngOnInit() {
   
    this.filterSettings = { type: 'Excel' };

    
  //  this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
    this.data = [
   
    ];
    this.orderService.getAllOrders().subscribe(data => {
      
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
        
        console.log("saveData",args.data)
      }else
      {
       
        console.log("updateData",args.data)
      }
      
    }
    
}
}
