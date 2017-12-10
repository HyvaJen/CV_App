import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';

import { HomePage } from '../home/home';
import { ToDoPage } from '../to-do/to-do';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ToDoPage;
  tab3Root = AboutPage;
  myIndex: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;

  }

  ionViewDidLoad(){
   console.log('ionViewDidLoad TabsPage');
  }
}
