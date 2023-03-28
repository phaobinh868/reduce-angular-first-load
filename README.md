This is simple project with navigation menu and pages login/home/other. It's based on some issue we were solving recently in Mainware app. 

Our menu had a quite a lot of dependencies (displaying notifications, and other) which caused the menu being quite big.

And as out app.component.html is structured as follows:
```html
<menu>
	<router-outlet></router-outlet>
</menu>
```

All the dependencies from menu were included in the initial load of application. We're trying to split application into modules so user gets only parts of js files he needs for given module.

We have the menu in the app with the router-outlet, so we don't have to add menu to every page in application.

But for login.component.html is menu hidden, so it actually doesn't have to be in app component.


To simulate that menu is big, I've used moment() js in the menu module and lowered warning for initial main package size to 500kb.

So when you build this app you get the warning:
```
Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 363.15 kB with a total of 863.15 kB.
```

I would like to see how you would handle this issue. Without editing the home.component.html and other.component.html. Also nav menu should still contain the moment() js.

If you have any questions or want to discuss possible solutions feel free to contact me.

Note: I didn't implement any authGuard here, so if you reload page while being at /page /page/other it won't display the menu. as app will think you're logged in. So reenter the page using /.

If you build application using:
```
ng build --configuration production --stats-json
```

module graph json is generated and it can be open using (https://www.npmjs.com/package/webpack-bundle-analyzer)
```
npx webpack-bundle-analyzer ./dist/test-ui/en-US/stats.json 
```

which nicelly shows what is included in main.js initial load
