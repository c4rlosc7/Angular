import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  hide = true;
  constructor() {}

  ngOnInit() {}

  form: FormGroup = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });

  initializeFormGroup() {
    this.form.setValue({
      username: "",
      password: ""
    });
  }

  onClear() {
    this.form.reset();
    this.initializeFormGroup();
  }
}
