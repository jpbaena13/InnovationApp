import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScamperPage } from './scamper';

@NgModule({
  declarations: [
    ScamperPage,
  ],
  imports: [
    IonicPageModule.forChild(ScamperPage),
  ],
})
export class ScamperPageModule {}
