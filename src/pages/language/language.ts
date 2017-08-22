import { Storage } from '@ionic/storage';
import { TranslateService } from 'ng2-translate';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-language',
  templateUrl: 'language.html'
})
export class LanguagePage {
    
    language: string = "en";

  constructor(
    public navCtrl: NavController,
    public translate: TranslateService,
    public storage: Storage    
  ) {

  }
  onChange(value): any {
     console.log(value);
     this.language = value;
     this.translate.setDefaultLang(value);
     this.translate.use(value);
      this.storage.set('language', value);
   }
}
