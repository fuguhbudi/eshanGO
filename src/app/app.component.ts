import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { StatusBar, SplashScreen } from 'ionic-native';
import { HomePage } from '../pages/home/home';
import { LanguagePage } from './../pages/language/language';

@Component({
  templateUrl: 'app.html',
  selector: 'app-component'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
  pages: Array<{ title: string, component: any, icons: any, show: boolean }>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen
    ) {
    

    // Side Menu
    this.pages = [
      //{ title: 'Home', component: HomePage}, //, icons: 'home', show: true 
      { title: 'Home', component: HomePage, icons: 'home',  show: true  },
      { title: 'Account Setting', component: LanguagePage, icons: 'cog', show: true },
      { title: 'Language', component: LanguagePage, icons: 'md-chatboxes', show: true },
      // { title: 'Attendance', component: TimeAttendance, icons: 'time', show: true },
      // { title: 'Calendar', component: CalendarPage, icons: 'calendar', show: true },
      // { title: 'Chat', component: ChatPage, icons: 'chatbubbles', show: true },
      // { title: 'Report', component: ReportPage, icons: 'document', show: true },
      // { title: 'Announcement', component: AnnouncementPage, icons: 'ios-megaphone', show: true }
    ];

  }


  initializeApp(){
  this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

