import { Component, OnInit } from '@angular/core';
import { UserApp } from "./UserApp";
import { UserAppService } from "./userApp.service";
import { Router } from "@angular/router";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})

export class WelcomeComponent implements OnInit {
  userApp: UserApp = new UserApp();
  formG = new FormGroup({name: new FormControl('', Validators.required), email: new FormControl('', Validators.required), phone: new FormControl(null, [Validators.required, Validators.pattern('^\\s*(?:\\?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')])})
  constructor(private userAppService: UserAppService, private router: Router) {
  }
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
    alert: boolean=false;

  ngOnInit(): void {
  }

  saveUserApp(){
    this.userAppService.createUser(this.userApp).subscribe( data=>{ console.log(data);},
    error => console.log(error));

  }

  onSubmit(){
    console.log(this.userApp);
    this.saveUserApp();
    this.alert=true;
    this.formG.reset();
  }

  closeAlert(){
    this.alert=false;
    this.formG.reset();
  }

  get name() {
    return this.formG.get('name');
  }

  get emailUser() {
    return this.formG.get('email');
  }
  get phone() {
    return this.formG.get('phone');
  }
}
