/*  */import { ErrorHandler, NgModule } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { ObjectiveDetailPage } from './../pages/objective-detail/objective-detail';
import { ObjectivesListPage } from './../pages/objectives-list/objectives-list';
import { SharedModule } from './../shared/shared.module';
import { ObjectivesApp } from './app.component';

@NgModule({
  declarations: [
    ObjectivesApp,
    HomePage,
    ObjectivesListPage,
    AboutPage,
    ObjectiveDetailPage
  ],
  imports: [
    IonicModule.forRoot(ObjectivesApp),
    SharedModule
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
