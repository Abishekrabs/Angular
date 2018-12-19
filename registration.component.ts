import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: [`input.ng-invalid{border-left:5px solid red;}
  input.ng-valid{border-left:5px solid green}`]
})
export class RegistrationComponent implements OnInit {

 onSubmit(value: any) {
  console.log(value);
}

  constructor() { }

  ngOnInit() {
  }

}
