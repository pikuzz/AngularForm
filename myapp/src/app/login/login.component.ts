import { Component, OnInit } from '@angular/core';
import {UserValidation} from '../shared/reactiveRegx';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {AngularFireDatabase} from '@angular/fire/database';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userForm: FormGroup;
   // tslint:disable-next-line:one-line
   constructor(private _fb: FormBuilder, private af: AngularFireDatabase , private route: Router){}
ngOnInit()
// tslint:disable-next-line:one-line
{
// this.userForm = this._fb.group({
//    'username': ['', [Validators.required, Validators.minLength, UserValidation.Username]],
//    'password': ['', [Validators.required, Validators.minLength, UserValidation.Password]]
// });
}

//UserValid($event)
// tslint:disable-next-line:one-line
// //{ 
//   this.af.list('/userInfo').push($event).then(data => {
//     alert('Register succesful');
//     this.route.navigateByUrl('/home')

  // })
    // console.log($event);
    // this.itemServices.getPostProduct(modal).subscribe((data) => {
    //     console.log(data);
    // })
 
}



