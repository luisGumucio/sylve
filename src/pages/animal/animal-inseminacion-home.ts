import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AnimalProvider } from '../../providers/animal-provider';

@Component({
    selector: 'page-animal-inseminacion-home',
    templateUrl: 'animal-inseminacion-home.html'
})
export class AnimalInseminacionHome {
    insumoList: any;
    animal: any;
    constructor(public navCtrl: NavController, public animalProvider: AnimalProvider,
        public loading: LoadingController, public navParams: NavParams) {
        this.animal = this.navParams.get('animal');
    }

    ionViewDidLoad() {
        if (this.animal != undefined) {
            let loader = this.loading.create({
                content: 'Cargando espere por favor...',
            });
            loader.present().then(() => {
                this.animalProvider.getInseminacion(this.animal.codigo).then((data) => {
                    this.insumoList = data;
                    loader.dismiss();
                }).catch(error => {
                    loader.dismiss();
                    alert("Failed to load!");
                });
            });
        }
    }
}
