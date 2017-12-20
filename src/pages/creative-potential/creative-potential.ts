import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ASPECTS } from './creative-potential-data';

@IonicPage()
@Component({
  selector: 'page-creative-potential',
  templateUrl: 'creative-potential.html',
})
export class CreativePotentialPage {
	aspects = ASPECTS
	
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
