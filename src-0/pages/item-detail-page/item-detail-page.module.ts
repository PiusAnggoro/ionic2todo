import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ItemDetailPage } from './item-detail-page';

@NgModule({
  declarations: [
    ItemDetailPage,
  ],
  exports: [
    ItemDetailPage
  ]
})
export class ItemDetailPageModule {}
