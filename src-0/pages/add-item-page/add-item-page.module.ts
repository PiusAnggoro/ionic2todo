import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AddItemPage } from './add-item-page';

@NgModule({
  declarations: [
    AddItemPage,
  ],
  exports: [
    AddItemPage
  ]
})
export class AddItemPageModule {}
