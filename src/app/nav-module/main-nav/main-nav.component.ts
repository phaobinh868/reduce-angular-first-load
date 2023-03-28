import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {LoginService} from 'app/login-service';
import { MenuComponent } from '../menu/menu.component';
import { CommonModule } from '@angular/common';

@Component({
	standalone: true,
	imports: [MenuComponent, CommonModule],
	selector: 'mw-main-nav',
	templateUrl: './main-nav.component.html',
	styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
	time: string = '';
	isLoggedIn: Observable<boolean>;

	constructor(
		private loginService: LoginService
	) {
		this.isLoggedIn = this.loginService.isLoggedIn;
	}

	ngOnInit(): void {
	}


}
