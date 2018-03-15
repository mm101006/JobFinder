import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import secrets from '../Secrets';

declare const gapi: any;



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



  public auth2: any;
  public googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: secrets.googleAppId + '.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email',
      });
      this.attachSignin(document.getElementById('googleBtn'));
    });
  }
  public attachSignin(element) {
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {
      	alert("thhisf");
      	this.router.navigate(['./retail'])
        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }
	ngAfterViewInit(){
	      this.googleInit();

	}

	public signOut(){
		gapi.auth2.getAuthInstance().disconnect();
		console.log('user disconnected');

	}
  }; 
