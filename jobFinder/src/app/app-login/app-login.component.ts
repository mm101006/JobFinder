import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss']
})
export class AppLoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

    public onLoginClick(){
  	FB.getLoginStatus((response) => {
  		console.log("STATUS:" + response.status);
  		if (response.status == 'connected'){
  			this.router.navigate(['./'])
  			console.log("findings " + response.authResponse.userID);
  		}
  		else {
  			// when you first click on login and then sucessfully login you are brought to the retail page, 
  			// but when you click on facebook login again you are brought to the home page
  			FB.login((loginResponse)=>{
  				this.testAPI();
  				this.router.navigate(['./retail']);
  			});
  		}
  	});
  }

   public testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    });
  }

  public onLogoutClick(){
  	FB.logout((response) => {
  		if (response.status == 'unknown'){
  			console.log("successfully logged out");
  			this.router.navigate(['./military']);
  		}
  		
  	});
  }

  public googleLogin() {

  	gapi.auth2.init({
  		'client_id': '148253917849-9nuj36i6kskb5bnf1397d9rif1ifshlc.apps.googleusercontent.com',
  	}).then(function() {
  		return gapi.client.request({
  			'path': 'https://people.googleapis.com/v1/people/me?requestMask.includeField=person.names',
  		})
  	}).then(function(response) {
  		console.log(response.result);
  	}, function(reason) {
  		console.log('Error: ' + reason.result.error.message);
  	});
}; 

}
