import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { slokaEach } from './sloka1';

@NgModule({
  declarations: [
    slokaEach,
  ],
  imports: [
    IonicPageModule.forChild(slokaEach),
  ],
})
export class slokaEachModule {}
