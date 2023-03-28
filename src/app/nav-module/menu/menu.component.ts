import { Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {LoginService} from 'app/login-service';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
	standalone: true,
	selector: 'mw-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss'],
	imports: [
		MatButtonModule,
		RouterModule
	]
})
export class MenuComponent  implements OnInit{
	time: string = '';

	constructor(
		private loginService: LoginService,
	) {
	}

	ngOnInit(): void {
		this.time = moment().fromNow();
	}


	logout() {
		this.loginService.logout();
	}
}
