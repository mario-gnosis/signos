import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { PopoverPage } from '../popover/popover.page';
import { DetailsPage } from '../details/details.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, DetailsPage, PopoverPage],
  entryComponents: [DetailsPage, PopoverPage]
})
export class HomePageModule {}
