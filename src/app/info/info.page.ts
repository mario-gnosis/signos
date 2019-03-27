import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AndroidFullScreen } from '@ionic-native/android-full-screen/ngx';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {


  constructor( public popover: PopoverController, private androidFullScreen: AndroidFullScreen) { }

  ngOnInit() {
    this.androidFullScreen.isImmersiveModeSupported()
    .then(() => this.androidFullScreen.immersiveMode())
    // tslint:disable-next-line:semicolon
    .catch((error: any) => console.log('Erro na tela', error))
  }
}
