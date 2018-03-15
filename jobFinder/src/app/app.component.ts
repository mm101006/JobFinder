import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'app';
  genders = ['male', 'female'];
  forbiddenUserNames = ['Chris', 'Anna'];

  //property to hold form, requires FormGroup which requires ReactiveFormsModule
  signupForm: FormGroup;

  ngOnInit() {
  	this.signupForm = new FormGroup({
  		// javascript object uses key value pair, FormControl allows you to configure the form here
      // userData is a nest form
      'userData': new FormGroup({
          'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
          'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      }),  		
  		'gender': new FormControl('male'),
      'hobbies': new FormArray([])
  	});
    //logging value changes
    // this.signupForm.valueChanges.subscribe((value) => console.log(value));
    //logging status changes
    //status changes and value changes are two hooks observables you can listen to
    this.signupForm.statusChanges.subscribe((value) => console.log(value));
    // populates the form with values
    this.signupForm.setValue({
      'userData': {
        'username': 'Max',
        'email': 'max@test.com'
      },
       'gender': 'male',
       'hobbies': []
    });
  }

  onSubmit() {
  	console.log(this.signupForm);
    this.signupForm.reset();
  }

  onAddHobby() {
    // casting is used to to explicit tell typescript that this is an array
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  // validator 
  forbiddenNames(control: FormControl): {[s: string]: boolean}  {
    if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    // if validation is successful you should pass null, tells angular the form control is valid
    return null;
  }

  //an asychonous call
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value == 'test@test.com'){
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
