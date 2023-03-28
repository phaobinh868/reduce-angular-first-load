import {Routes} from '@angular/router';

export const layoutRoutes: Routes = [
	{
		path: '',
		loadComponent: () =>
		import('./login-component/login.component').then((x) => x.LoginComponent),
	},
	{
		path: 'page',
		loadChildren: () => import('./page-module/page-routing.module').then((m) => m.pageRoutes),
	},
];
