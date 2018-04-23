import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from 'ionic-angular';
import { AnimalProvider } from '../../providers/animal-provider';
import { AlimentacionHome } from './alimentacion-home';

@Component({
    selector: 'page-alimentacion-create',
    templateUrl: 'alimentacion-create.html'
})
export class AlimentacionCreate {
    formAlimentacion: FormGroup;
    constructor(public navCtrl: NavController, public animalProvider: AnimalProvider,
        public formBuilder: FormBuilder, public loading: LoadingController) {
        this.formAlimentacion = formBuilder.group({
            'diaMaximo': ['', Validators.required],
            'insumo': ['', Validators.required],
            'cantidad': ['', Validators.required],
            'porcentaje': ['', Validators.required]
        });
    }

    createAlimentacion(data) {
        let loader = this.loading.create({
            content: 'Validando espere por favor!..',
        });
        loader.present().then(() => {
            console.log('create a new alimentacion', data.value);
            data.value.indexKey = "alimentacion";
            data.value.edad = this.valueEdad(data.value.diaMaximo);
            this.animalProvider.createAlimentacion(data.value);
            this.formAlimentacion.reset();
            this.navCtrl.push(AlimentacionHome);
            loader.dismiss();
        });
    }
    valueEdad(data) {
        switch(data) {
            case "100":
                return "0-100";
            case "600":
                return "100-600";
        }
    }

}