import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SuperTabsController } from 'ionic2-super-tabs';

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage {
  rootNavCtrl: NavController;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private superTabsCtrl: SuperTabsController) {
      this.rootNavCtrl = this.navParams.get('rootNavCtrl');
  }

  goToDetails() {
    this.rootNavCtrl.push('DetailsPage');
  }

  setBadge() {
    this.superTabsCtrl.setBadge('profilePage', 9);
  }

  clearBadge() {
    this.superTabsCtrl.clearBadge('profilePage');
  }

  jumpToAccount() {
    this.superTabsCtrl.slideTo(2);
  }

  hideToolbar() {
    this.superTabsCtrl.showToolbar(false);
  }

  showToolbar() {
    this.superTabsCtrl.showToolbar(true);
  }

}
