import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { AndroidFullScreen } from '@ionic-native/android-full-screen/ngx';

@Component({
  selector: 'app-details_signos',
  templateUrl: 'details_signos.html',
  styleUrls: ['details_signos.scss']
})
export class DetailsSignos implements OnInit {

  @Input() value: any;
  constructor(
    public modalController: ModalController,
    public navParams: NavParams,
    private androidFullScreen: AndroidFullScreen) {
     this.value = this.navParams; }
  async closeModal() {
    await this.modalController.dismiss();
  }
  ngOnInit() {
    this.androidFullScreen.isImmersiveModeSupported()
    // tslint:disable-next-line:semicolon
    .then(() => this.androidFullScreen.immersiveMode())
    .catch((error: any) => console.log('Erro na tela', error));
  }

// tslint:disable-next-line:eofline
}