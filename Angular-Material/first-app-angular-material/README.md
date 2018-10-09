# FirstAppAngularMaterial

## Step 1: Install Angular Material, Angular CDK and Angular Animations
You can use either the npm or yarn command-line tool to install packages. Use whichever is appropriate for your project in the examples below.

NPM
> npm install --save @angular/material @angular/cdk @angular/animations

## Step 2: Configure animations
```javascript
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  ...
  imports: [BrowserAnimationsModule],
  ...
})
export class PizzaPartyAppModule { }
```

## Step 3: Import the component modules
Alternatively, you can create a separate NgModule that imports all of the Angular Material components that you will use in your application. You can then include this module wherever you'd like to use the components.
**file name material.components.ts**
```javascript
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule],
  exports: [MatButtonModule, MatCheckboxModule],
})
export class MyOwnCustomMaterialModule { }

and import on app.module.ts
```

## Step 4: Include a theme
Including a theme is required to apply all of the core and theme styles to your application.

To get started with a prebuilt theme, include one of Angular Material's prebuilt themes globally in your application. If you're using the Angular CLI, you can add this to your styles.css:

> @import "~@angular/material/prebuilt-themes/indigo-pink.css";

## Step 5: Gesture Support
Some components (mat-slide-toggle, mat-slider, matTooltip) rely on HammerJS for gestures. In order to get the full feature-set of these components, HammerJS must be loaded into the application. After installing, import it on your app's entry point (e.g. src/main.ts).

> npm install --save hammerjs

## Step 6 (Optional): Add Material Icons
If you want to use the mat-icon component with the official Material Design Icons, load the icon font in your index.html.

> <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
