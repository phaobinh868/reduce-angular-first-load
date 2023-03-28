import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from 'app/app.module';
// TODO delete it when warning will be deprecated


platformBrowserDynamic().bootstrapModule(AppModule)
	.catch(err => console.error(err));
