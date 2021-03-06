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
export class DetailsPage implements OnInit {
  @Input() value: any;
  contentLoaded = false;
  constructor(
    public modalController: ModalController,
    public navParams: NavParams,
    private androidFullScreen: AndroidFullScreen,
    private admobFreeService: AdmobFreeService,
  ) {
     this.value = this.navParams;

     setTimeout(() => {
      this.contentLoaded = true;
      this.admobFreeService.InterstitialAd();
       }, 5000);
    }

   async ngOnInit() {
    this.androidFullScreen.isImmersiveModeSupported()
    // tslint:disable-next-line:semicolon
    .then(() => this.androidFullScreen.immersiveMode())
    .catch((error: any) => console.log('Erro na tela', error));

    this.admobFreeService.InterstitialAd();
  }
  closeModal() {
    this.modalController.dismiss();
   }
}