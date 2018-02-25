import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { AnimalProvider } from '../../providers/animal-provider';

@Component({
    selector: 'page-vacuna-animal-info',
    templateUrl: 'vacuna-animal-info.html'
})
export class VacunaAnimalInfo {

    private animal: any;
    animalVacunas: any;

    constructor(public navCtrl: NavController, public navParams: NavParams,
        public vacunaProvider: AnimalProvider) {
        this.animal = this.navParams.get('animal');
    }

    ionViewDidLoad() {
        this.vacunaProvider.getVacunaByAnimal(this.animal.codigo).then((data) => {
            this.animalVacunas = data;
        });
    }
}