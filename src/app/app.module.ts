import { ObjectiveDetailPage } from './../pages/objective-detail/objective-detail';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { ObjectivesApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ObjectivesListPage } from './../pages/objectives-list/objectives-list';
import { AboutPage } from '../pages/about/about';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    ObjectivesApp,
    HomePage,
    ObjectivesListPage,
    AboutPage,
    ObjectiveDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(ObjectivesApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ObjectivesApp,
    HomePage,
    ObjectivesListPage,
    AboutPage,
    ObjectiveDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
