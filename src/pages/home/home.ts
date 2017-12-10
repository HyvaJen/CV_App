import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  email: string;

  constructor(private fire: AngularFireAuth ,public navCtrl: NavController) {
    this.email = fire.auth.currentUser.email;

  }

}
