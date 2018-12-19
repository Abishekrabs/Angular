import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`input.ng-invalid{border-left:5px solid red;}
  input.ng-valid{border-left:5px solid green}`]
})
export class LoginComponent implements OnInit {


  // login(value: any){
  //   console.log(value);
  // }

 login(value: any) {
  console.log(value);
}

  constructor() { }

  ngOnInit() {
  }

}
