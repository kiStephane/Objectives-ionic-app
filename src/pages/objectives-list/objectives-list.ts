import { ObjectiveDetailPage } from '../objective-detail/objective-detail';
import { Objective } from './../../models/objective';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-objectives-list',
  templateUrl: 'objectives-list.html'
})
export class ObjectivesListPage {
  selectedItem: any;
  icons: string[];
  items: Array<Objective>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.items = [];
    for (let i = 1; i < 11; i++) {
      var o = new Objective()
      o.title = "title"+i
      o.description = "description"+i
      this.items.push(o);
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ObjectiveDetailPage, {
      item: item
    });
  }
}
