import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { UserServiceProvider } from '../providers/user-service/user-service';

import { IonicStorageModule } from '@ionic/storage';
import { RewardServiceProvider } from '../providers/reward-service/reward-service';

import { RewardModalPageModule } from '../pages/reward-modal/reward-modal.module';

const firebaseConfig = {
  apiKey: "AIzaSyCGu5EP3DaJqLzDYS1JtBi0A8xr5Zo13ck",
    authDomain: "ioniccoffeeapp.firebaseapp.com",
    databaseURL: "https://ioniccoffeeapp.firebaseio.com",
    projectId: "ioniccoffeeapp",
    storageBucket: "ioniccoffeeapp.appspot.com",
    messagingSenderId: "805370926925"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicStorageModule.forRoot(),
    RewardModalPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider,
    RewardServiceProvider
  ]
})
export class AppModule {}
