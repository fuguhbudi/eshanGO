import { Http, HttpModule } from '@angular/http';
import { MyData } from './../providers/my-data';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateModule, TranslateStaticLoader, TranslateLoader } from 'ng2-translate';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';

//page
import { HomePage } from '../pages/home/home';
import { PatientPage } from './../pages/patient/patient';
import { PatientProfilePage } from './../pages/patient/patient-profile/patient-profile';
import { EmployeePage } from './../pages/employee/employee';
import { EmployeeProfilePage } from './../pages/employee/employee-profile/employee-profile';

import { LanguagePage } from './../pages/language/language';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PatientPage,
    PatientProfilePage,
    LanguagePage,
    EmployeePage,
    EmployeeProfilePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PatientPage,
    PatientProfilePage,
    LanguagePage,
    EmployeePage,
    EmployeeProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MyData,
    Storage
  ]
})
export class AppModule {}
