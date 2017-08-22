import { Component } from '@angular/core';
import { NavController, ModalController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-patient-profile',
  templateUrl: 'patient-profile.html'
})
export class PatientProfilePage {

  constructor(
      public navCtrl: NavController,
      public modalCtrl: ModalController,
      public viewCtrl: ViewController,
  ) {

  }

  dismiss(): void {
      let data = { 'foo': 'bar' };
      this.viewCtrl.dismiss(data);
    }

}
