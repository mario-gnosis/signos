import { Component, OnInit } from '@angular/core';
import { PopoverController, NavController } from '@ionic/angular';
import { InfoPage } from 'src/app/info/info.page';


@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(
    public popoverController: PopoverController,
    public navCtrl: NavController,
    ) { }

  ngOnInit() {
  }
  info() {
    this.navCtrl.navigateForward('info');
  }
  autor() {
    this.navCtrl.navigateForward('autor');
  }
close() {
  this.popoverController.dismiss();
}
}
