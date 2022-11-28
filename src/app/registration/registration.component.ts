import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  name=""
  email=""
  password=""
  cpassword=""



  regValues =()=>
  {
    let data:any =
    {
"name":this.name,"email":this.email,"password":this.password,"cpassword":this.cpassword
    }
    console.log(data)
  }
}
