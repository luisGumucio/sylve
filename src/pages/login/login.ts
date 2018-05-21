import { Component } from '@angular/core';
import { NavController, LoadingController, Loading, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { AnimalProvider } from '../../providers/animal-provider';
import { AnimalHome } from '../animal/animal-home';
import { TabsPage } from '../tabs/tabs';
import * as CryptoJS from 'crypto-js';


@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {
    myForm: FormGroup;
    public loading: Loading;

    constructor(
        public navCtrl: NavController,
        public formBuilder: FormBuilder,
        public alertCtrl: AlertController,
        public loadingCtrl: LoadingController,
        public storage: Storage,
        public animalProvider: AnimalProvider
    ) {
        this.myForm = this.formBuilder.group({
            usuario: ['', Validators.required],
            password: ['', Validators.required]
        });

    }

    ionViewDidLoad() {
        this.storage.get('userLogeado').then((val) => {
            if (val != null) {
                this.animalProvider.getUser(val.userLogin, val.password).then(() => {
                    this.navCtrl.push(TabsPage, { user: val });
                }).catch(error => {

                });
            }
        });
    }

    loginUser(): void {

        console.log("Usuario:" + this.myForm.value.usuario);
        console.log("Password:" + this.myForm.value.password);

        this.loading = this.loadingCtrl.create({
            dismissOnPageChange: true,
        });
       // var password = this.encryptPassword(this.myForm.value.password);
        this.loading.present();
        this.animalProvider.getUser(this.myForm.value.usuario,
        this.myForm.value.password).then((data) => {
            if(data[0].usuario == this.myForm.value.usuario) {
                this.storage.set('userLogeado', data);
                this.navCtrl.push(TabsPage);
            } else {
                this.loading.dismiss();
                alert("error al ingresar usuario o password");
                
            }

        }).catch(error => {
            this.loading.dismiss();
        });
    }

    encryptPassword(plainPassword) {
        /*
         * Encrypt password
         * @param {string}  plainPassword - user details to store
         * @return {}
         */

        // msgString is expected to be Utf8 encoded
        var key = CryptoJS.enc.Utf8.parse('8080808080808080');
        var iv = CryptoJS.enc.Utf8.parse('8080808080808080');
       
       var encryptedpassword = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(plainPassword), key,
        {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
        });
        return encryptedpassword;
    }

    goToSignup(): void {
        this.navCtrl.push('SignupPage');
    }

    goToResetPassword(): void {
        this.navCtrl.push('ResetPasswordPage');
    }

}
