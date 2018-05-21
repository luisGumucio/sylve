import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { AnimalHome } from '../animal/animal-home';
import { AlimentacionHome } from '../alimentacion/alimentacion-home';
import { Storage } from '@ionic/storage';
import { UsuarioHome } from  '../usuario/usuario-home';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private user: any;
  constructor(public navCtrl: NavController,
    public storage: Storage, public navParams: NavParams) {
    this.storage.get('userLogeado').then((val) => {
      if (val != null) {
        this.user = val[0];
      }
    });
  }

  goPageAnimal(): void {
    if (this.user.rol == "Encargadado" || this.user.rol == "Ayudante" ||
      this.user.rol == "Veterinario") {
      this.navCtrl.push(AnimalHome);
    }
  }

  goPageAlimentacion(): void {
    if (this.isAuthorazite()) {
      this.navCtrl.push(AlimentacionHome)
    }
  }

  goPageVacuna(): void {
    if (this.isAuthorazite()) {
      this.navCtrl.push(AlimentacionHome)
    }
  }

  goPageTratamiento(): void {
    if (this.isAuthorazite()) {
      this.navCtrl.push(AlimentacionHome)
    }
  }

  goPageUsuario(): void {
    if (this.user.rol == "Encargadado") {
      this.navCtrl.push(UsuarioHome);
    } else {
      alert("No estas autorizado para realizar esta accion.");
    }
  }

  goPageReport(): void {
    if (this.user.rol == "Encargadado") {
      this.navCtrl.push(AnimalHome);
    } else {
      alert("No estas autorizado para realizar esta accion.");
    }
  }

  isAuthorazite() {
    if (this.user.rol == "Encargadado" || this.user.rol == "Veterinario") {
      return true;
    } else {
      alert("No estas autorizado para realizar esta accion.");
      return false;
    }
  }

  logout(): void {
    this.storage.set('userLogeado', null);
    this.navCtrl.push(LoginPage);
  }
}
