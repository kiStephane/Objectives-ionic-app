import { Objective } from './../../core/models/objective';

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-objective-detail',
  templateUrl: 'objective-detail.html'
})
export class ObjectiveDetailPage {

  objective : Objective

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.objective = navParams.get('item');
  }
}
