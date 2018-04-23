import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AnimalHome } from '../animal/animal-home';
import { AlimentacionHome } from '../alimentacion/alimentacion-home';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  goPageAnimal(): void {
    this.navCtrl.push(AnimalHome);
  }

  goPageAlimentacion() : void {
    this.navCtrl.push(AlimentacionHome)
  }

}
