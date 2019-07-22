import { Component, OnInit } from '@angular/core';
import { PopoverController, NavController } from '@ionic/angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(
    public popoverController: PopoverController,
    public navCtrl: NavController,
    private youtube: YoutubeVideoPlayer,
    ) { }

  ngOnInit() {
  }
  info() {
    this.navCtrl.navigateForward('info');
  }
  autor() {
    this.navCtrl.navigateForward('autor');
  }
  museo() {
    console.log('clicado em museo');
    window.open('https://www.johfra.nl/index.php?lang=NL', '_system');
  }
close() {
  this.popoverController.dismiss();
}
watch(watch) {
  this.youtube.openVideo(watch);
}
}
