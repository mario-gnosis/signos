import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController, NavController, ActionSheetController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Network } from '@ionic-native/network/ngx';
import { AndroidFullScreen } from '@ionic-native/android-full-screen/ngx';
import { PopoverPage } from '../popover/popover.page';
import { DetailsSignos } from '../details/details.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [Network
  ]
})
export class HomePage implements OnInit {
  // tslint:disable-next-line: ban-types
  public imagemList: Array<Object> = [];
  // tslint:disable-next-line: ban-types
  public signosDB: Array<Object> = [];
  value: any;
  items: any;
  itemsRef: AngularFireList<any>;
  nome: string;

  constructor(
    public modalCtrl: ModalController,
    public popoverController: PopoverController,
    public navCtrl: NavController,
    public actionSheetController: ActionSheetController,
    public db: AngularFireDatabase,
    // tslint:disable-next-line: deprecation
    public http: Http,
    private network: Network,
    public toastController: ToastController,
    private androidFullScreen: AndroidFullScreen
  ) {
    this.androidFullScreen.isImmersiveModeSupported()
    .then(() => this.androidFullScreen.immersiveMode())
    .catch((error: any) => console.log('Erro na tela ao gerar o FullScreem', error));
  }


  getDados() {

    this.itemsRef = this.db.list('/signos', ref => ref.orderByChild('order'));
    setTimeout(() => {
      this.itemsRef.snapshotChanges()
      .subscribe(actions => {
        actions.forEach(action => {
          this.imagemList.push({
            name: action.payload.val().nome,
            data: action.payload.val().data,
            conteudo: action.payload.val().conteudo,
            defeitos: action.payload.val().defeitos,
            noAmor: action.payload.val().noAmor,
            homem: action.payload.val().homem,
            mulher: action.payload.val().mulher,
            demais: action.payload.val().demais,
            image: './assets/img/' + action.payload.val().image,
          });
        });
      });
    }, 2000);
  }

  // tslint:disable-next-line:semicolon
  async ngOnInit() {

     // tslint:disable-next-line:triple-equals
     if ( this.network.type != this.network.Connection.NONE ) {
      this.items = this.getDados();
     // console.log('CONECTADO ......');
       } else {
        const toast = await this.toastController.create({
          message: 'Não há conexão com a internet.  Por favor, verifique a conexão e tente novamente',
          showCloseButton: true,
          position: 'middle',
          color: 'danger',
          closeButtonText: 'close'
        });
        toast.present();
    }
     this.network.onConnect().subscribe(() => {
      this.items = this.getDados();
    // tslint:disable-next-line:semicolon
    });
     this.network.onDisconnect().subscribe(async () => {
      const toast = await this.toastController.create({
        message: 'Não há conexão com a internet.  Por favor, verifique a conexão e tente novamente',
        showCloseButton: true,
        position: 'middle',
        color: 'danger',
        closeButtonText: 'close'
      });
      toast.present();
    // tslint:disable-next-line:no-trailing-whitespace
    }); 
  }
  async cliqSignos(imagemList: any) {
    const modal = await this.modalCtrl.create({
      component: DetailsSignos,
      mode: 'ios',
      componentProps: { value: imagemList }
    });
    return await modal.present();
  }

  async clickPopover(event) {
    const popover = await this.popoverController.create({
      component: PopoverPage,
      mode: 'ios',
      event,
    });
    popover.present();
    const { } = await popover.onWillDismiss();
  }


  // tslint:disable-next-line:eofline
}