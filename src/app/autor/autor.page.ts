import { Component, OnInit } from '@angular/core';
import { AndroidFullScreen } from '@ionic-native/android-full-screen/ngx';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.page.html',
  styleUrls: ['./autor.page.scss'],
})
export class AutorPage implements OnInit {

  constructor(private androidFullScreen: AndroidFullScreen) { }

  ngOnInit() {
    this.androidFullScreen.isImmersiveModeSupported()
    .then(() => this.androidFullScreen.immersiveMode())
    // tslint:disable-next-line:semicolon
    .catch((error: any) => console.log('Erro na tela', error))
  }


}
