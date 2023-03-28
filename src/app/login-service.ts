import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';


@Injectable({providedIn: 'root'})
export class LoginService {

	public isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

	constructor(private router: Router) {
	}

	login() {
		this.isLoggedIn.next(true);
		this.router.navigate(['/home']);
	}

	logout() {
		this.isLoggedIn.next(false);
		this.router.navigate(['/login']);
	}

}
