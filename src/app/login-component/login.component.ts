import {Component, OnInit} from '@angular/core';
import {LoginService} from 'app/login-service';


@Component({
	standalone: true,
	selector: 'login', templateUrl: 'login.component.html', styleUrls: ['login.component.scss']})
export class LoginComponent implements OnInit {

	loggedIn: boolean = false;

	constructor(
		private loginService: LoginService
	) {
	}

	async ngOnInit() {
		this.loggedIn = false;
	}

	login() {
		this.loginService.login();
	}
}
