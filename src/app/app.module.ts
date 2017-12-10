import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ToDoPage } from '../pages/to-do/to-do';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RegisterPage } from '../pages/register/register';
import { MenuPage } from '../pages/menu/menu';

// implemented firebase and angularfireauth

// Mirva Kataja 1501537, Jani Antoniou 1601110

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

const firebaseAuth = {
  apiKey: "AIzaSyDjJ_JL4bJi5vbZ8rruQG4L_bIeYdt_8eM",
  authDomain: "todo-list-8c98e.firebaseapp.com",
  databaseURL: "https://todo-list-8c98e.firebaseio.com",
  projectId: "todo-list-8c98e",
  storageBucket: "todo-list-8c98e.appspot.com",
  messagingSenderId: "1078575248704"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ToDoPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    MenuPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ToDoPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    MenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
