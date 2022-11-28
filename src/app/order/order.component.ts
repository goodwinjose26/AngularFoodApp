import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  name=""
  date=""
  address=""

  
  orderValues=()=>
  {
    let data:any =
    {
      "name":this.name,"date":this.date,"address":this.address
    }
    console.log(data)
  }


}
