import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CultureWheelPage } from '../culture-wheel/culture-wheel';
import { CreativeProcessPage } from '../creative-process/creative-process';
import { ScamperPage } from '../scamper/scamper';
import { CreativePotentialPage } from '../creative-potential/creative-potential';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  items: Array<{title: string, note: string, icon: string, page: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [];

    this.items.push({
      title: 'Rueda de la Cultura Innovadora',
      note: '',
      icon: 'aperture',
      page: CultureWheelPage
    });

    this.items.push({
      title: 'Proceso Creativo',
      note: '',
      icon: 'cube',
      page: CreativeProcessPage
    });

    this.items.push({
      title: 'SCAMPER',
      note: '',
      icon: 'list-box',
      page: ScamperPage
    });

    this.items.push({
      title: 'Su Potencial Creativo',
      note: '',
      icon: 'color-palette',
      page: CreativePotentialPage
    });
    
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.page);
  }
}
