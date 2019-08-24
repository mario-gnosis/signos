import { AngularFireDatabase } from '@angular/fire/database';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AndroidFullScreen } from '@ionic-native/android-full-screen/ngx';
import { HttpModule } from '@angular/http';
import { environment } from 'src/environments/environment';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { AdmobFreeService } from './service/admobfree.service';
import { AdMobFree } from '@ionic-native/admob-free/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  // tslint:disable-next-line:max-line-length
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase), AngularFirestoreModule,
    // tslint:disable-next-line: deprecation
    HttpModule
 ],
  providers: [
    StatusBar,
    SplashScreen,
    AdMobFree,
    AngularFireDatabase,
    AndroidFullScreen,
    YoutubeVideoPlayer,
    AdmobFreeService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
