import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';

//importin AngularFire into login
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') uname;
  @ViewChild('password') password;

  constructor(private fire:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad(){
   console.log('ionViewDidLoad LoginPage');
  }

  alert(message:string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  register() { 
    this.navCtrl.push(RegisterPage);
  }

  signIn() {
    this.fire.auth.signInWithEmailAndPassword(this.uname.value, this.password.value)
    .then(data => {
      console.log('got some data', this.fire.auth.currentUser);
      this.alert('Success! You\'re logged in');
      this.navCtrl.setRoot(TabsPage);
      //logged the user in
    })

    .catch(error => {
      console.log('got an error', error);
      this.alert(error.message);
    })
    }
  }
 
