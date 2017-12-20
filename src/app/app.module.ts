import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CultureWheelPage } from '../pages/culture-wheel/culture-wheel';
import { CreativeProcessPage } from '../pages/creative-process/creative-process';
import { ScamperPage } from '../pages/scamper/scamper';
import { CreativePotentialPage } from '../pages/creative-potential/creative-potential';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CultureWheelPage,
    CreativeProcessPage,
    ScamperPage,
    CreativePotentialPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CultureWheelPage,
    CreativeProcessPage,
    ScamperPage,
    CreativePotentialPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
