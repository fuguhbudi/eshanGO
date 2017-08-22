import { EmployeePage } from './../employee/employee';
import { PatientPage } from './../patient/patient';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    
  constructor(
    public navCtrl: NavController,
    // public patientPage: PatientPage,
    // public employeePage: EmployeePage
    
  ) {

  }

  goToPatient() {
    this.navCtrl.push(PatientPage);
  }

  goToEmployee() {
    this.navCtrl.push(EmployeePage);
  }

}
