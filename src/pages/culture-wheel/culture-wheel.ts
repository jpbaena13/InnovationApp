import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BEHAVIORS } from './culture-wheel-data';

@IonicPage()
@Component({
  selector: 'page-culture-wheel',
  templateUrl: 'culture-wheel.html',
})
export class CultureWheelPage {
	behaviors = BEHAVIORS
	
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}
