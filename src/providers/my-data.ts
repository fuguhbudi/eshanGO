// import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';

// /*
//   Generated class for the MyData provider.

//   See https://angular.io/docs/ts/latest/guide/dependency-injection.html
//   for more info on providers and Angular 2 DI.
// */
// @Injectable()
// export class MyData {

//   constructor(public http: Http) {
//     console.log('Hello MyData Provider');
//   }

// }


import { Observable } from 'rxjs/Rx';
import { AlertController, LoadingController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CommonProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MyData {

  constructor(
    public http: Http,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) {
    console.log('Hello CommonProvider Provider');
  }

  public showAlert(title: string, message: string, button: string): any {
    let alert = this.alertCtrl.create();
    alert.setTitle(title);
    alert.setMessage(message);
    alert.addButton(button);
    return Observable.fromPromise(alert.present());
  }

  public showLoading(message: string): any {
    let loading = this.loadingCtrl.create({
      content: message
    });
    loading.present();
    return loading;
  }

}
