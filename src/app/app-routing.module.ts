import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
		import('./layout/layout.component').then((x) => x.LayoutComponent),
		loadChildren: () => import('./layout-routing.module').then((x) => x.layoutRoutes),
	},
	// otherwise redirect to home
	{
		path: '**',
		redirectTo: '',
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			useHash: true,
			canceledNavigationResolution: 'computed',
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {
}
