import { Component, OnInit, Input } from '@angular/core';
import { AndroidFullScreen } from '@ionic-native/android-full-screen/ngx';
import { ModalController, NavParams } from '@ionic/angular';
import { AdmobFreeService } from '../service/admobfree.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class DetailsSignos implements OnInit {
  @Input() value: any;
  contentLoaded = false;
  constructor(
    public modalController: ModalController,
    public navParams: NavParams,
    private admobFreeService: AdmobFreeService,
    private androidFullScreen: AndroidFullScreen) {
     this.value = this.navParams;

     setTimeout(() => {
      this.contentLoaded = true;
      this.admobFreeService.InterstitialAd();
       }, 5000);
    }

   ngOnInit() {
    this.androidFullScreen.isImmersiveModeSupported()
    // tslint:disable-next-line:semicolon
    .then(() => this.androidFullScreen.immersiveMode())
    .catch((error: any) => console.log('Erro na tela', error));
  }
  closeModal() {
    this.modalController.dismiss();
   }
}