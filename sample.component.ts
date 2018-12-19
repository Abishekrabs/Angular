import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserJson } from './user-json';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  constructor(private userJsonService: UserService) { }
submitStatus = false;

  user: User;
 userJSON: UserJson;


  ngOnInit() {
  }

onSubmit(): void {
console.log( 'Ng init trigerred is POST REST component' );
this.userJsonService
   .postRest(this.user)
   .subscribe(( p ) => { this.userJSON = p; } );

   this.submitStatus = true;
console.log( 'TOKEN JSON', JSON.stringify( this.userJSON ) );
console.log('Form submitted***********');
}


}
