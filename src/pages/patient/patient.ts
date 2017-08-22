import { PatientProfilePage } from './patient-profile/patient-profile';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'page-patient',
  templateUrl: 'patient.html'
})
export class PatientPage {
  language: string = "en";
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,

  ) {

  }
    goToPatientProfile() {
      let profileModal = this.modalCtrl.create(PatientProfilePage, { });
      profileModal.present();
  }

}

