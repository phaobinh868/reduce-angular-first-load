import {Component, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainNavComponent } from 'app/nav-module/main-nav/main-nav.component';
@Component({
	standalone: true,
	imports: [MainNavComponent, RouterModule],
	selector: 'layout', templateUrl: 'layout.component.html', styleUrls: ['layout.component.scss']})
export class LayoutComponent implements OnInit {
	async ngOnInit() {
	}
}
