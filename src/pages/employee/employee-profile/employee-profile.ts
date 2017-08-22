import { Component } from '@angular/core';
import { NavController, ModalController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-employee-profile',
  templateUrl: 'employee-profile.html'
})
export class EmployeeProfilePage {

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
