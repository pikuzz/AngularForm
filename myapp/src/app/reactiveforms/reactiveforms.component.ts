

import { Component, OnInit } from '@angular/core';
import {UserValidation} from '../shared/reactiveRegx';
import {login} from '../models/login';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {AngularFireDatabase} from '@angular/fire/database';
import {Router} from '@angular/router';
//import { ItemServices } from '../items.services';
//import {Products} from '../models/items';

@Component({
   // tslint:disable-next-line:component-selector
   selector: 'reactive',
   templateUrl: './reactiveforms.component.html'
})

// tslint:disable-next-line:component-class-suffix
export class ReactiveForms implements OnInit {

modal = new login('', '');
userForm: FormGroup;
   // tslint:disable-next-line:one-line
   constructor(private _fb: FormBuilder, private af: AngularFireDatabase , private route: Router){}
ngOnInit()
// tslint:disable-next-line:one-line
{
this.userForm = this._fb.group({
   'username': ['', [Validators.required, Validators.minLength, UserValidation.Username]],
   'password': ['', [Validators.required, Validators.minLength, UserValidation.Password]],
   'email': ['', [Validators.required, UserValidation.Email]]


});
}

UserValid($event)
// tslint:disable-next-line:one-line
{ 
  this.af.list('/userInfo').push($event).then(data => {
    alert('Register succesful');
     this.route.navigateByUrl('/login')

  })
    console.log($event);
    // this.itemServices.getPostProduct(modal).subscribe((data) => {
    //     console.log(data);
    // })
 
}
}
