import { Injectable } from '@angular/core';
import {AdMobFree, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free/ngx';
import { Platform } from '@ionic/angular';


@Injectable()
export class AdmobFreeService {

  // Interstitial Ad's Configurations
  interstitialConfig: AdMobFreeInterstitialConfig = {
    isTesting: false,
    autoShow: true,
    id: 'ca-app-pub-7309361810799562/1526280064'
  };

  constructor(
    private admobFree: AdMobFree,
    public platform: Platform
  ) {

    platform.ready().then(() => {

      // Load ad configuration
      this.admobFree.interstitial.config(this.interstitialConfig);
      // Prepare Ad to Show
      this.admobFree.interstitial.prepare()
        .then(() => {
          // alert(1);
        }).catch(e => alert('Erro de abertura: ' + e));
    });

    // Handle interstitial's close event to Prepare Ad again
    this.admobFree.on('admob.interstitial.events.CLOSE').subscribe(() => {
      this.admobFree.interstitial.prepare()
        .then(() => {
         // alert('Interstitial CLOSE');
        }).catch(e => alert('Erro de  interstitial:  ' + e));
    });

    }
  InterstitialAd() {
    // Check if Ad is loaded
    this.admobFree.interstitial.isReady().then(() => {
      // Will show prepared Ad
      this.admobFree.interstitial.show();
    })
      .catch(e => alert('Falha no Interstitial: ' + e));
  }


}
