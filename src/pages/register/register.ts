import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { UserServiceProvider } from '../../providers/user-service/user-service';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  //register object created to store temp values entered by the user for registration
  reg = {
    email: '',
    passWrd1:'',
    passWrd2:''
  };
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alertCtrl: AlertController, private afAuth: AngularFireAuth,
              private userService: UserServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  displayAlert(alertTitle, alertSub){
    let theAlert = this.alertCtrl.create({
      title: alertTitle,
      buttons: ['Ok']
    });
    theAlert.present();
  }

  //checking if password and confirm password match before the registration of the account
  registerAccount(){
      if (this.reg.passWrd1 != this.reg.passWrd2){
        this.displayAlert('Invalid password match, please try again!', 'Passwords do not match, please try again.');
        this.reg.passWrd1 = '';
        this.reg.passWrd2 = '';
      }
      else {
        this.afAuth.auth.createUserWithEmailAndPassword(this.reg.email, this.reg.passWrd1)
        .then(res => this.regSuccess(res))
        .catch(err => this.displayAlert('Please enter information!', err));
    }
  } 

  //Successful registration of the user, try catch implemented to display the correct information 
  //to the user depending on result
  regSuccess(result){
    this.userService.logOn(this.reg.email, this.reg.passWrd1)
      .then(res => this.navCtrl.push(HomePage))//success message
  }
}


