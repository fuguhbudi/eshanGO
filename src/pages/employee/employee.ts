import { EmployeeProfilePage } from './employee-profile/employee-profile';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'page-employee',
  templateUrl: 'employee.html'
})
export class EmployeePage {
  language: string = "en";
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,

  ) {

  }
    goToPatientProfile() {
      let profileModal = this.modalCtrl.create(EmployeeProfilePage, { });
      profileModal.present();
  }

}

