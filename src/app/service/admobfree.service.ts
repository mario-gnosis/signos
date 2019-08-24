import { Injectable } from '@angular/core';
import {AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig, AdMobFreeRewardVideoConfig } from '@ionic-native/admob-free/ngx';
import { Platform } from '@ionic/angular';


@Injectable()
export class AdmobFreeService {

  // Interstitial Ad's Configurations
  interstitialConfig: AdMobFreeInterstitialConfig = {
    isTesting: false,
    autoShow: true,
    id: 'ca-app-pub-7309361810799562/1526280064'
  };
/*
  // Reward Video Ad's Configurations
  RewardVideoConfig: AdMobFreeRewardVideoConfig = {
    isTesting: false,
    autoShow: true ,
    id: 'ca-app-pub-7309361810799562~7803530024'
  };
*/
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

/*
      // Load ad configuration
      this.admobFree.rewardVideo.config(this.RewardVideoConfig);
      // Prepare Ad to Show
      this.admobFree.rewardVideo.prepare()
        .then(() => {
          // alert(2);
        }).catch(e => alert('Erro ao abrir o vídeo ' + e));
        */

    });

    // Handle interstitial's close event to Prepare Ad again
    this.admobFree.on('admob.interstitial.events.CLOSE').subscribe(() => {
      this.admobFree.interstitial.prepare()
        .then(() => {
         // alert('Interstitial CLOSE');
        }).catch(e => alert('Erro de  interstitial ' + e));
    });
    /*
    // Handle Reward's close event to Prepare Ad again
    this.admobFree.on('admob.rewardvideo.events.CLOSE').subscribe(() => {
      this.admobFree.rewardVideo.prepare()
        .then(() => {
       //   alert('Reward Video CLOSE');
        }).catch(e => alert('Erro ao gerar o vídeo' + e));
    });
    */
  }
  InterstitialAd() {
    // Check if Ad is loaded
    this.admobFree.interstitial.isReady().then(() => {
      // Will show prepared Ad
      this.admobFree.interstitial.show().then(() => {
      })
        .catch(e => alert('show ' + e));
    })
      .catch(e => alert('Falha no Interstitial ' + e));
  }


  BannerAd() {
    const bannerConfig: AdMobFreeBannerConfig = {
      isTesting: false,
      autoShow: true,
      id: 'ca-app-pub-7309361810799562/7616738206'
    };
    this.admobFree.banner.config(bannerConfig);

    this.admobFree.banner.prepare().then(() => {
      // success
    }).catch(e => alert('Erro ao gerar o Banner: ' + e));
  }
/*
  RewardVideoAd() {
    // Check if Ad is loaded
    this.admobFree.rewardVideo.isReady().then(() => {
      // Will show prepared Ad
      this.admobFree.rewardVideo.show().then(() => {
      })
        .catch(e => alert('show ' + e));
    })
      .catch(e => alert('Video não abre! ' + e));
  }
*/

}
