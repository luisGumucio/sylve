import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AnimalProvider } from '../../providers/animal-provider';
import { AlimentacionCreate } from './alimentacion-create';

@Component({
    selector: 'page-alimentacion-home',
    templateUrl: 'alimentacion-home.html'
})
export class AlimentacionHome {
    alimentacionList: any;
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
                var t = this.animal.nacimiento;
                var fecha = new Date(t).getTime();
                var diff = this.getDay(new Date().getTime() - fecha);
                this.animalProvider.getAlimentacionByMaximo(diff).then((data) => {
                    this.alimentacionList = data;
                    loader.dismiss();
                }).catch(error => {
                    loader.dismiss();
                    alert("Failed to load!");
                });
            });
        } else {
            let loader = this.loading.create({
                content: 'Cargando espere por favor...',
            });
            loader.present().then(() => {
                this.animalProvider.getAlimentacion().then((data) => {
                    this.alimentacionList = data;
                    loader.dismiss();
                }).catch(error => {
                    loader.dismiss();
                    alert("Failed to load!");
                });
            });
        }
    }
    getDay(data) {
        var valor = Math.floor(data / (1000 * 60 * 60 * 24));
        switch (true) {
            case (valor <= 100):
                return "100";
            case (valor > 100 && valor <= 600):
                return "600";
        }
    }

    goToRegisterAlimentacion() {
        this.navCtrl.push(AlimentacionCreate);
    }

}
