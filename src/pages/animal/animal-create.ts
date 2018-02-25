import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnimalProvider } from '../../providers/animal-provider';
import { AnimalHome } from './animal-home';
import { LoadingController } from 'ionic-angular';

@Component({
    selector: 'page-animal-create',
    templateUrl: 'animal-create.html'
})
export class AnimalCreate {

    formAnimal: FormGroup;
    private image: string = null;
    private udpateValidator = false;
    private animal: any;
    constructor(public navCtrl: NavController, public navParams: NavParams,
        public animalProvider: AnimalProvider, private camera: Camera,
        public formBuilder: FormBuilder, public loading: LoadingController) {
        this.animal = this.navParams.get('animal');
        if (this.animal != null) {
            this.formAnimal = formBuilder.group({
                'codigo': [this.animal.codigo, Validators.required],
                'nombre': [this.animal.nombre, Validators.required],
                'edad': [this.animal.edad, Validators.required],
                'peso': [this.animal.peso, Validators.required],
                'raza': [this.animal.raza, Validators.required],
                'description': [this.animal.description, Validators.required],
                'nacimiento': [this.animal.nacimiento, Validators.required],
                'genero': [this.animal.genero, Validators.required]
            });
        } else {
            this.formAnimal = formBuilder.group({
                'codigo': ['', Validators.required],
                'nombre': ['', Validators.required],
                'edad': ['', Validators.required],
                'peso': ['', Validators.required],
                'raza': ['', Validators.required],
                'description': ['', Validators.required],
                'nacimiento': ['', Validators.required],
                'genero': ['', Validators.required]
            });
        }
    }
    createAnimal(animalModel) {
        if (this.udpateValidator) {
            console.log("udpate animal", animalModel.value);
            animalModel.value._id = this.animal._id;
            animalModel.value._rev = this.animal._rev;
            animalModel.value.indexKey = this.animal.indexKey;
            this.animalProvider.updateTodo(animalModel.value);
        } else {
            let loader = this.loading.create({
                content: 'Validando espere por favor!..',
            });
            loader.present().then(() => {
                this.animalProvider.findAnimalByID(animalModel.value.codigo).then((data) => {
                    let res = Object.keys(data)
                        // iterate over them and generate the array
                        .map(function (k) {
                            // generate the array element 
                            return [+k, data[k]];
                        });
                    if (res.length != 0) {
                        alert("El codigo del animal ya existe intente con otro codigo por favor!");
                        loader.dismiss();
                    } else {
                        console.log('create a new animal', animalModel.value);
                        animalModel.value.indexKey = "animal";
                        this.animalProvider.createAnimal(animalModel.value);
                        this.formAnimal.reset();
                        this.navCtrl.push(AnimalHome);
                        loader.dismiss();
                    }
                })
            });
        }
    }

    getPicture() {
        let options: CameraOptions = {
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 1000,
            targetHeight: 1000,
            quality: 100
        }
        this.camera.getPicture(options)
            .then(imageData => {
                this.image = `data:image/jpeg;base64,${imageData}`;
            })
            .catch(error => {
                alert("Error al obtener la foto intenten de nuevo por favor");
            });
    }
}