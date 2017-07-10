import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  formData:IRegisterForm;

  constructor(){

    this.formData = <IRegisterForm>{};

    // this.formData = {
    //   "name":"Shailendra",
    //   "email":"sprajjobid@gmail.com",
    //   "userName":"Shailendra0102",
    //   "password":"Password0102",
    //   "cnfrmPassword":"Password0102"
    // };

  };

  register(value:any){
    console.log("this.for===>"+value.name);
  }
  
}

interface IRegisterForm {
  name:string;
  email:string;
  userName:string;
  password:string;
  cnfrmPassword:string;
}
