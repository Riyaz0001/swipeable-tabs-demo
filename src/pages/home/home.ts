import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { SuperTabs } from 'ionic2-super-tabs';

// import { FavoritePage } from '../favorite/favorite';
// import { LibraryPage } from '../library/library';
// import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pages = [
    { pageName: 'FavoritePage', title: 'Favorite', icon: 'heart', id: 'favoritePage' },
    { pageName: 'LibraryPage', title: 'Library', icon: 'logo-buffer', id: 'libraryPage' },
    { pageName: 'ProfilePage', title: 'Profile', icon: 'person', id: 'profilePage' },
  ];

  selectedTabIndex = 0;

  @ViewChild(SuperTabs) superTabs: SuperTabs;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController) {

  }

  onTabSelected(ev: any) {
    if(ev.index === 2) {
      let alert = this.alertCtrl.create({
        title: 'Profile',
        message: 'Are you sure you want go access that Profile Page?',
        buttons: [
          {
            text: 'No',
            handler: () => {
              this.superTabs.slideTo(this.selectedTabIndex);
            }
          },
          {
            text: 'Yes',
            handler: () => {
              this.selectedTabIndex = ev.index;
            }
          }
        ]
      });
      alert.present();

    } else {
      this.selectedTabIndex = ev.index;
      this.superTabs.clearBadge(this.pages[ev.index].id);


    }


  }

}
