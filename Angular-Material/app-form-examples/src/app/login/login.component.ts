import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  form: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
  });

  initializeFormGroup(){
    this.form.setValue({
      username: '',
      email: '',
    });
  }

  onClear(){
    this.form.reset();
    this.initializeFormGroup();
  }

}
