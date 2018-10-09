import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  form: FormGroup = new FormGroup({
    name: new FormControl("", Validators.required),
    lastname: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.email),
    email: new FormControl("", Validators.required)
  });

  initializeFormGroup() {
    this.form.setValue({
      name: "",
      lastname: "",
      phone: "",
      email: ""
    });
  }

  onClear() {
    this.form.reset();
    this.initializeFormGroup();
  }

}
