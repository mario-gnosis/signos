import { Component, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-details_signos',
  templateUrl: 'details_signos.html',
  styleUrls: ['details_signos.scss']
}) 
export class DetailsSignos {

  @Input() value: any;
  constructor(public modalController: ModalController, public navParams: NavParams)
   // tslint:disable-next-line:semicolon
   {this.value = this.navParams}
  async closeModal() {
    await this.modalController.dismiss();
  }
// tslint:disable-next-line:eofline
}