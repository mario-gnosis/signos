import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';
import { HttpModule } from '@angular/http';
import { AndroidFullScreen } from '@ionic-native/android-full-screen/ngx';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  // tslint:disable-next-line:max-line-length
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase), AngularFirestoreModule,
    HttpModule
 ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    AndroidFullScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
