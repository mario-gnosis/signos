import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { ModalController, PopoverController, NavController, ActionSheetController } from '@ionic/angular';
import { DetailsSignos } from '../details/details_signos';
import { PopoverPage } from '../pages/popover/popover.page';
// tslint:disable-next-line:comment-format
//import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public imagemList: Array<Object> = [];
  value: any;
  signosDB: [];
  public list = [];


  constructor(
    public modalCtrl: ModalController,
    public popoverController: PopoverController,
    public navCtrl: NavController,
    public actionSheetController: ActionSheetController,
    public db: AngularFireDatabase,
    public http: Http
  ) {
    this.imagemList = [
      {
        nome: 'Áries',
        data: 'De 21 de março a 19 de abril',
        imagem: './assets/img/aries.jpg',
        conteudo: 'O Marciano Áries reina poderoso e guerreiro em todos os atributos pictóricos e simbológicos contidos na lâmina.'
      },
      {
        nome: 'Touro',
        data: 'De 20 de abril a 19 de maio',
        imagem: './assets/img/touro.jpg'
      },
      {
        nome: 'Gemeos',
        data: 'De 20 de maio a 20 de junho',
        imagem: './assets/img/gemeos.jpg'
      },
      {
        nome: 'Cancer',
        data: 'De 21 de junho a 22 de julho',
        imagem: './assets/img/cancer.jpg'
      },
      {
        nome: 'Leão',
        data: 'De 23 de julho a 22 de agosto',
        imagem: './assets/img/leao.jpg'
      },
      {
        nome: 'Virgem',
        data: 'De 23 de agosto a 22 de setembro',
        imagem: './assets/img/virgen.jpg'
      },
      {
        nome: 'Libra',
        data: 'De 23 de setembro a 22 de outubro',
        imagem: './assets/img/libra.jpg'
      },
      {
        nome: 'Escorpião',
        data: 'De 23 de outubro a 22 de novembro',
        imagem: './assets/img/escorpiao.jpg'
      },
      {
        nome: 'Sagitário',
        data: 'De 22 de novembro a 21 de dezembro',
        imagem: './assets/img/sagitario.jpg'
      },
      {
        nome: 'Capricórnio',
        data: 'De 22 de dezembro a 19 de janeiro',
        imagem: './assets/img/capricornio.jpg'
      },
      {
        nome: 'Aquário',
        data: 'De 20 de janeiro a 17 de fevereiro',
        imagem: './assets/img/aquario.jpg'
      },
      {
        nome: 'Peixes',
        data: 'De 18 de fevereiro a 20 de março',
        imagem: './assets/img/peixes.jpg'
      },
    ];
  }
  // tslint:disable-next-line:semicolon
  ionViewDidLoad() {
    this.pegarDadosFirebase();
  }
  pegarDadosFirebase() {
     this.http.get('https://signos-92423.firebaseio.com/signos.json')
    //map(res => res.json())
      .subscribe(signos => {
        console.log(signos , 'Dados do Firebase');
          if (signos ) {
          this.list = Object.keys(signos ).map(i => signos [i]);
        }
      // tslint:disable-next-line:semicolon
      })
  }

  async cliqSignos(imagemList) {
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


}
