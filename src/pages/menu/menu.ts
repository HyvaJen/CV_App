import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage = "TabsPage";

  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    {title: 'Home', pageName: 'TabsPage', tabComponent: 'HomePage', index: 0, icon: 'home'},
    {title: 'To Do List', pageName: 'TabsPage', tabComponent: 'to-do', index: 0, icon: 'list'},
    {title: 'About', pageName: 'TabsPage', tabComponent: 'AboutPage', index: 0, icon: 'about'},
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openPage(page: PageInterface){
    let params ={};
    
      if(page.index){
        params = {tabIndex: page.index};
      }
      if(this.nav.getActiveChildNav() && page.index != undefined) {
        this.nav.getActiveChildNav().select(page.index);
      } else {
        this.nav.setRoot(page.pageName, params);
      }

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  isActive(page: PageInterface){
    let params ={};
    
      if(page.index){
        params = {tabIndex: page.index};
      }
      if(this.nav.getActiveChildNav() && page.index != undefined) {
        this.nav.getActiveChildNav().select(page.index);
      } else {
        this.nav.setRoot(page.pageName, params);
      }


  }




}
