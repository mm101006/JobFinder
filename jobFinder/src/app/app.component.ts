import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  genders = ['male', 'female'];

  //property to hold form, requires FormGroup which requires ReactiveFormsModule
  signupForm: FormGroup;

  ngOnInit() {
  	this.signupForm = new FormGroup({
  		// javascript object uses key value pair, FormControl allows you to configure the form here
  		'username': new FormControl(null, Validators.required),
  		'email': new FormControl(null, [Validators.required, Validators.email]),
  		'gender': new FormControl('male')
  	});
  }

  onSubmit() {
  	console.log(this.signupForm);
  }
}
