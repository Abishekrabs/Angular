import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { User } from './sample/user';
import { UserJson } from './sample/user-json';
import {Headers} from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 constructor(private http: Http) {
   console.log('user Json service constructor');
}
headers = new Headers(
{
'Content-Type': 'application/json'
} );
postRest(user: User): Observable<UserJson> {
console.log( 'USER DATA JSON--->' + JSON.stringify( user ) );
const user$ = this.http.post( 'https://localhost:8080/admindata',
JSON.stringify( user ),
{ headers: this.headers } ).map( this.mapUserLogin );
console.log( 'CHANGED POST SERVICE INVOKE*******' + user$ );
return user$;
}
  mapUserLogin( response: Response ): UserJson {
console.log( 'user REST service map user trigerred DATA' + response.json().data );
console.log( 'user REST service map user trigerred JSON' + response.json() );
return toUserLogin( response.json() );
}

}

function toUserLogin( r: any ): UserJson {
  console.log( 'Parsed user trigerred****:', r );
  const user = <UserJson>( {
  token: r.token,
 } );
  console.log( 'Parsed user:', user );
  return user;
 }
