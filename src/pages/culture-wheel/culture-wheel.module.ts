import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CultureWheelPage } from './culture-wheel';

@NgModule({
  declarations: [
    CultureWheelPage,
  ],
  imports: [
    IonicPageModule.forChild(CultureWheelPage),
  ],
})
export class CultureWheelPageModule {}
