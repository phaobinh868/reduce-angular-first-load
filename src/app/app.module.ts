import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


@NgModule({
	imports: [
		AppRoutingModule,
		BrowserModule,
		HttpClientModule,
	],
	declarations: [
		AppComponent,
	],
	bootstrap: [AppComponent],
	providers: [

	]
})
export class AppModule {
}
