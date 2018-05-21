import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AnimalProvider } from '../../providers/animal-provider';

import { FabContainer } from 'ionic-angular';

@Component({
    selector: 'page-usuario-home',
    templateUrl: 'usuario-home.html'
})
export class UsuarioHome {
    userList: any;
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
            this.animalProvider.getUsers().then((data) => {
                this.userList = data;
                loader.dismiss();
            }).catch(error => {
                loader.dismiss();
                alert("Failed to load!");
            });
        });
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
}