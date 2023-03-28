import {Routes} from '@angular/router';

export const pageRoutes: Routes = [
	{
		path: '',
		loadComponent: () =>
		import('./home/home.component').then((x) => x.HomeComponent),
	},
	{
		path: 'other',
		loadComponent: () =>
		import('./other/other.component').then((x) => x.OtherComponent),
	},
];
