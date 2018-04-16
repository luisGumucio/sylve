import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AnimalProvider } from '../../providers/animal-provider';
import { AnimalInfoUnit } from './animal-info-unit';
import { AnimalCreate } from './animal-create';
import { FabContainer } from 'ionic-angular';

@Component({
    selector: 'page-animal-home',
    templateUrl: 'animal-home.html'
})
export class AnimalHome {
    animalList: any;
    private fabButtonOpened: Boolean;
    constructor(public navCtrl: NavController, public animalProvider: AnimalProvider,
        public navParams: NavParams, public loading: LoadingController) {
            this.fabButtonOpened = false;
    }

    ionViewDidLoad() {
        let loader = this.loading.create({
            content: 'Cargando espere por favor...',
        });
        loader.present().then(() => {
            this.animalProvider.getAnimal().then((data) => {
                this.animalList = data;
                loader.dismiss();
            }).catch(error => {
                loader.dismiss();
                alert("Failed to load!");
            });
        });
    }

    informationAnimal(data) {
        this.navCtrl.push(AnimalInfoUnit, { animal: data });
    }
    updateAnimal(data) {
        this.navCtrl.push(AnimalCreate,{animal:data, update:true});
    }

    goToCreateAnimal() {
        this.navCtrl.push(AnimalCreate);
    }

    Close(event, fab: FabContainer) {
        fab.close();
    }

    openFabButton() {
        if (this.fabButtonOpened == false) {
            this.fabButtonOpened = true;
        } else {
            this.fabButtonOpened = false;
        }
    }

    share(socialNet: string, fab: FabContainer) {
        switch (socialNet) {
            case "crear":
                   this.navCtrl.push(AnimalCreate);
                break;
            case "actualizar":
            this.animalProvider.getAnimal().then((data) => {
                this.animalList = data;             
            }).catch(error => {
                alert("fallo al actualizar!");
            });
                break;
            case "inseminacion":
            this.animalList = [];
            this.animalProvider.findAnimalByInseminacion().then((data) => {
                this.animalList = data;             
            }).catch(error => {
                alert("fallo al actualizar!");
            });

                break;
        }
    }
    deleteAnimal(todo) {
        this.animalProvider.deleteTodo(todo);
    }
    seeInseminacion() {
        this.animalProvider.findAnimalByInseminacion().then((data) => {
            this.animalList = data;             
        }).catch(error => {
            alert("fallo al actualizar!");
        });
    }
}