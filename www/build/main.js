webpackJsonp([0],{

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 157;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"H:\projecAntelo\systemAnimal\sylve-official\sylve\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"H:\projecAntelo\systemAnimal\sylve-official\sylve\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"H:\projecAntelo\systemAnimal\sylve-official\sylve\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"H:\projecAntelo\systemAnimal\sylve-official\sylve\src\pages\about\about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"H:\projecAntelo\systemAnimal\sylve-official\sylve\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"H:\projecAntelo\systemAnimal\sylve-official\sylve\src\pages\contact\contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animal_animal_home__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.goPageAnimal = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__animal_animal_home__["a" /* AnimalHome */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"H:\projecAntelo\systemAnimal\sylve-official\sylve\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="gras">\n    <ion-title>Dashboard</ion-title>\n  </ion-navbar>\n</ion-header>\n  <ion-content scroll="false">\n    <section class="home-container">\n      <div class="row icon-row">\n        <div class="col text-center">\n            <img src="assets/IconoAnimal.png" style="max-width: 70%;" (click)="goPageAnimal()">\n            <br style="font-weight: bold;">Animal\n        </div>\n        <div class="col text-center">\n          <img src="assets/alimentacion.png" style="max-width: 70%;">\n          <br>Alimentacion\n        </div>       \n        <div class="col text-center">\n          <img src="assets/vacuna.png" style="max-width: 70%;">\n          <br>Vacuna\n        </div>     \n      </div>\n      <div class="row icon-row">\n        <div class="col text-center">\n          <img src="assets/clock.jpg" style="max-width: 70%;">\n          <br>Tratamiento\n        </div>\n        <div class="col text-center">\n          <img src="/assets/user.png"  style="max-width: 70%;">\n          <br>Usuario\n        </div>      \n        <div class="col text-center">\n          <img src="assets/report.png" style="max-width: 70%;">\n          <br>Reportes\n        </div>   \n      </div>\n    </section>\n  </ion-content>'/*ion-inline-end:"H:\projecAntelo\systemAnimal\sylve-official\sylve\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimalHome; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_animal_provider__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animal_info_unit__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animal_create__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AnimalHome = (function () {
    function AnimalHome(navCtrl, animalProvider, navParams, loading) {
        this.navCtrl = navCtrl;
        this.animalProvider = animalProvider;
        this.navParams = navParams;
        this.loading = loading;
    }
    AnimalHome.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loading.create({
            content: 'Cargando espere por favor...',
        });
        loader.present().then(function () {
            _this.animalProvider.getAnimal().then(function (data) {
                _this.animalList = data;
                loader.dismiss();
            }).catch(function (error) {
                loader.dismiss();
                alert("Failed to load!");
            });
        });
    };
    AnimalHome.prototype.informationAnimal = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__animal_info_unit__["a" /* AnimalInfoUnit */], { animal: data });
    };
    AnimalHome.prototype.goToCreateAnimal = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__animal_create__["a" /* AnimalCreate */]);
    };
    return AnimalHome;
}());
AnimalHome = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-animal-home',template:/*ion-inline-start:"H:\projecAntelo\systemAnimal\sylve-official\sylve\src\pages\animal\animal-home.html"*/'<ion-header>\n\n    <ion-navbar color="gras">\n\n        <ion-title>Animal</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content scroll="false">\n\n    <ion-list no-lines>\n\n        <ion-item-sliding *ngFor="let animal of animalList">\n\n            <ion-item>\n\n                <ion-avatar item-start>\n\n                    <img src="/assets/IconoAnimal.png">\n\n                </ion-avatar>\n\n                <h2>Nombre: {{animal.nombre}}</h2>\n\n                <p>Peso: {{animal.peso}}</p>\n\n                <p>Codigo: {{animal.codigo}}</p>\n\n            </ion-item>\n\n            <ion-item-options>\n\n                <button ion-button icon-only color="primary" (click)="informationAnimal(animal)">\n\n                            <ion-icon name="md-information-circle"></ion-icon>\n\n                          </button>\n\n                <button ion-button icon-only color="light" >\n\n                      <ion-icon name="create"></ion-icon>\n\n                    </button>\n\n                <button ion-button icon-only color="primary">\n\n                      <ion-icon name="md-trash"></ion-icon>\n\n                    </button>\n\n            </ion-item-options>\n\n        </ion-item-sliding>\n\n    </ion-list>\n\n\n\n    <ion-fab right bottom>\n\n        <button ion-fab color="reds" (click)="goToCreateAnimal()">\n\n              <ion-icon name="md-add-circle"></ion-icon>\n\n            </button>\n\n    </ion-fab>\n\n</ion-content>'/*ion-inline-end:"H:\projecAntelo\systemAnimal\sylve-official\sylve\src\pages\animal\animal-home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_animal_provider__["a" /* AnimalProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]])
], AnimalHome);

//# sourceMappingURL=animal-home.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimalInfoUnit; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vacunas_vacuna_animal_info__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AnimalInfoUnit = (function () {
    function AnimalInfoUnit(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.animal = this.navParams.get('animal');
        this.fabButtonOpened = false;
    }
    AnimalInfoUnit.prototype.Close = function (event, fab) {
        fab.close();
    };
    AnimalInfoUnit.prototype.openFabButton = function () {
        if (this.fabButtonOpened == false) {
            this.fabButtonOpened = true;
        }
        else {
            this.fabButtonOpened = false;
        }
    };
    AnimalInfoUnit.prototype.share = function (socialNet, fab) {
        switch (socialNet) {
            case "vacuna":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__vacunas_vacuna_animal_info__["a" /* VacunaAnimalInfo */], { animal: this.animal });
                break;
            case "alimentacion":
                //this.navCtrl.push(AlimentacionInfoPage, { animal: this.animal });
                break;
            case "tratamiento":
                break;
        }
    };
    return AnimalInfoUnit;
}());
AnimalInfoUnit = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-animal-info-unit',template:/*ion-inline-start:"H:\projecAntelo\systemAnimal\sylve-official\sylve\src\pages\animal\animal-info-unit.html"*/'<ion-header>\n\n    <ion-navbar color="gras">\n\n        <ion-title>Informacion Animal</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-item>\n\n        <p style="float:left; font-weight: bold">Codigo</p>\n\n        <p style="float:right">{{animal.codigo}}</p>\n\n    </ion-item>\n\n    <ion-item>\n\n        <p style="float:left; font-weight: bold">Nombre</p>\n\n        <p style="float:right">{{animal.nombre}}</p>\n\n    </ion-item>\n\n    <ion-item>\n\n        <p style="float:left; font-weight: bold">Edad</p>\n\n        <p style="float:right">{{animal.edad}}</p>\n\n    </ion-item>\n\n    <ion-item>\n\n        <p style="float:left; font-weight: bold">Raza</p>\n\n        <p style="float:right">{{animal.raza}}</p>\n\n    </ion-item>\n\n    <ion-item>\n\n        <p style="float:left; font-weight: bold">Peso</p>\n\n        <p style="float:right">{{animal.peso}}</p>\n\n    </ion-item>\n\n    <ion-item>\n\n        <p style="float:left; font-weight: bold">Nacimiento</p>\n\n        <p style="float:right">{{animal.nacimiento}}</p>\n\n    </ion-item>\n\n    <ion-item>\n\n        <p style="float:left; font-weight: bold">Genero</p>\n\n        <p style="float:right">{{animal.genero}}</p>\n\n    </ion-item>\n\n    <ion-fab right bottom #fab>\n\n        <button ion-fab (click)="openFabButton()">\n\n                    Historial\n\n             </button>\n\n        <ion-fab-list side="top">\n\n            <button ion-fab  (click)="share(\'vacuna\', fab)">\n\n                  <img src="assets/alimentacion.png"> \n\n              </button>\n\n              <ion-label class="las1">Vacuna</ion-label>\n\n            <button ion-fab color="secondary"  (click)="share(\'alimentacion\', fab)">\n\n                    <ion-icon name="md-finger-print"></ion-icon>\n\n                    \n\n                  </button>\n\n                  <ion-label class="las2">Alimentacion</ion-label>\n\n            <button ion-fab color="secondary" (click)="share(\'tratamiento\', fab)">\n\n                    <ion-icon name="md-finger-print"></ion-icon>\n\n                  </button>\n\n                  <ion-label class="las">Tratamiento</ion-label>\n\n        </ion-fab-list>\n\n    </ion-fab>\n\n</ion-content>'/*ion-inline-end:"H:\projecAntelo\systemAnimal\sylve-official\sylve\src\pages\animal\animal-info-unit.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], AnimalInfoUnit);

//# sourceMappingURL=animal-info-unit.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VacunaAnimalInfo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_animal_provider__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VacunaAnimalInfo = (function () {
    function VacunaAnimalInfo(navCtrl, navParams, vacunaProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.vacunaProvider = vacunaProvider;
        this.animal = this.navParams.get('animal');
    }
    VacunaAnimalInfo.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.vacunaProvider.getVacunaByAnimal(this.animal.codigo).then(function (data) {
            _this.animalVacunas = data;
        });
    };
    return VacunaAnimalInfo;
}());
VacunaAnimalInfo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-vacuna-animal-info',template:/*ion-inline-start:"H:\projecAntelo\systemAnimal\sylve-official\sylve\src\pages\vacunas\vacuna-animal-info.html"*/'<ion-header>\n\n    <ion-navbar color="gras">\n\n        <ion-title>Informacion Vacuna</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content scroll="false">\n\n    <ion-row>\n\n        <ion-col style="background: blue; color: white">\n\n            <strong>Codigo</strong>\n\n        </ion-col>\n\n        <ion-col style="background: blue; color: white">\n\n            <strong>alimentacion</strong>\n\n        </ion-col>\n\n        <ion-col style="background: blue; color: white">\n\n            <strong>Dosis</strong>\n\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row *ngFor="let vacunas of animalVacunas">\n\n        <ion-col>\n\n            <strong>{{vacunas.codigo}}</strong>\n\n        </ion-col>\n\n        <ion-col>\n\n            <strong>{{vacunas.nombre}}</strong>\n\n        </ion-col>\n\n        <ion-col>\n\n            <strong>{{vacunas.dosis}}</strong>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-fab right bottom>\n\n        <button ion-fab color="reds">\n\n            <ion-icon name="md-add-circle"></ion-icon>\n\n        </button>\n\n    </ion-fab>\n\n</ion-content>'/*ion-inline-end:"H:\projecAntelo\systemAnimal\sylve-official\sylve\src\pages\vacunas\vacuna-animal-info.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_animal_provider__["a" /* AnimalProvider */]])
], VacunaAnimalInfo);

//# sourceMappingURL=vacuna-animal-info.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimalCreate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_animal_provider__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__animal_home__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AnimalCreate = (function () {
    function AnimalCreate(navCtrl, navParams, animalProvider, camera, formBuilder, loading) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.animalProvider = animalProvider;
        this.camera = camera;
        this.formBuilder = formBuilder;
        this.loading = loading;
        this.image = null;
        this.udpateValidator = false;
        this.animal = this.navParams.get('animal');
        if (this.animal != null) {
            this.formAnimal = formBuilder.group({
                'codigo': [this.animal.codigo, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
                'nombre': [this.animal.nombre, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
                'edad': [this.animal.edad, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
                'peso': [this.animal.peso, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
                'raza': [this.animal.raza, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
                'description': [this.animal.description, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
                'nacimiento': [this.animal.nacimiento, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
                'genero': [this.animal.genero, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
            });
        }
        else {
            this.formAnimal = formBuilder.group({
                'codigo': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
                'nombre': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
                'edad': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
                'peso': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
                'raza': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
                'description': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
                'nacimiento': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
                'genero': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
            });
        }
    }
    AnimalCreate.prototype.createAnimal = function (animalModel) {
        var _this = this;
        if (this.udpateValidator) {
            console.log("udpate animal", animalModel.value);
            animalModel.value._id = this.animal._id;
            animalModel.value._rev = this.animal._rev;
            animalModel.value.indexKey = this.animal.indexKey;
            this.animalProvider.updateTodo(animalModel.value);
        }
        else {
            var loader_1 = this.loading.create({
                content: 'Validando espere por favor!..',
            });
            loader_1.present().then(function () {
                _this.animalProvider.findAnimalByID(animalModel.value.codigo).then(function (data) {
                    var res = Object.keys(data)
                        .map(function (k) {
                        // generate the array element 
                        return [+k, data[k]];
                    });
                    if (res.length != 0) {
                        alert("El codigo del animal ya existe intente con otro codigo por favor!");
                        loader_1.dismiss();
                    }
                    else {
                        console.log('create a new animal', animalModel.value);
                        animalModel.value.indexKey = "animal";
                        _this.animalProvider.createAnimal(animalModel.value);
                        _this.formAnimal.reset();
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__animal_home__["a" /* AnimalHome */]);
                        loader_1.dismiss();
                    }
                });
            });
        }
    };
    AnimalCreate.prototype.getPicture = function () {
        var _this = this;
        var options = {
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 1000,
            targetHeight: 1000,
            quality: 100
        };
        this.camera.getPicture(options)
            .then(function (imageData) {
            _this.image = "data:image/jpeg;base64," + imageData;
        })
            .catch(function (error) {
            alert("Error al obtener la foto intenten de nuevo por favor");
        });
    };
    return AnimalCreate;
}());
AnimalCreate = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-animal-create',template:/*ion-inline-start:"H:\projecAntelo\systemAnimal\sylve-official\sylve\src\pages\animal\animal-create.html"*/'<ion-header>\n\n    <ion-navbar color="gras">\n\n        <ion-title>Crear Animal</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content scroll="false" style="text-align: center;">\n\n    <img src="assets/photo.png" style="max-width: 30%;max-height: 20%;margin-top: 4%;" (click)="getPicture()" id="camera-image">\n\n    <img [src]="" *ngIf="base64Image" />\n\n    <form [formGroup]="formAnimal" (ngSubmit)="createAnimal(formAnimal)" novalidate>\n\n        <ion-item>\n\n            <ion-label color="primary">Codigo</ion-label>\n\n            <ion-input type="text" formControlName="codigo" name="codigo"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label color="primary">Nombre</ion-label>\n\n            <ion-input type="text" formControlName="nombre" name="codigo"></ion-input>\n\n        </ion-item>\n\n        <div style="width:100%; text-align: left; background-color: #519548; font-size: 1.7rem; font-weight: 600; padding-left: 4%;">\n\n            <label>Origen</label>\n\n        </div>\n\n        <ion-item>\n\n            <ion-label color="primary">Nacimiento</ion-label>\n\n            <ion-datetime displayFormat="MM/DD/YYYY" formControlName="nacimiento"></ion-datetime>\n\n        </ion-item>\n\n        <ion-grid style="padding-top: 5px; padding-left: 0px;">\n\n            <ion-row text-center>\n\n                <ion-col>\n\n                    <ion-item>\n\n                        <ion-label color="primary">Edad</ion-label>\n\n                        <ion-input type="number" formControlName="edad" name="codigo"></ion-input>\n\n                    </ion-item>\n\n                </ion-col>\n\n                <ion-col>\n\n\n\n                    <ion-item>\n\n                        <ion-label color="primary">Peso</ion-label>\n\n                        <ion-input type="number" formControlName="peso" name="23"></ion-input>\n\n                    </ion-item>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n        <div style="width:100%; text-align: left; background-color: #519548; font-size: 1.7rem; font-weight: 600; padding-left: 4%;">\n\n            <label>Genero</label>\n\n        </div>\n\n        <ion-item>\n\n            <ion-label color="primary">Genero</ion-label>\n\n            <ion-select formControlName="genero">\n\n                <ion-option value="Macho">Macho</ion-option>\n\n                <ion-option value="Hembra">Hembra</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label color="primary">Raza</ion-label>\n\n            <ion-input type="text" formControlName="raza" name="codigo"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label color="primary">Description</ion-label>\n\n            <ion-textarea formControlName="description" name="description"></ion-textarea>\n\n        </ion-item>\n\n        <button ion-button color="gras" block [disabled]="!formAnimal.valid">\n\n            crear</button>\n\n    </form>\n\n</ion-content>'/*ion-inline-end:"H:\projecAntelo\systemAnimal\sylve-official\sylve\src\pages\animal\animal-create.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_animal_provider__["a" /* AnimalProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_animal_provider__["a" /* AnimalProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]) === "function" && _f || Object])
], AnimalCreate);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=animal-create.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_nfc__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_animal_provider__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_animal_animal_home__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_animal_animal_create__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_animal_animal_info_unit__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_tratamiento_tratamiento_animal_info__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_vacunas_vacuna_animal_info__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












//database

//import { VacunaProvider } from '../providers/vacuna-provider';
//pages





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_animal_animal_home__["a" /* AnimalHome */],
            __WEBPACK_IMPORTED_MODULE_15__pages_animal_animal_info_unit__["a" /* AnimalInfoUnit */],
            __WEBPACK_IMPORTED_MODULE_16__pages_tratamiento_tratamiento_animal_info__["a" /* TratamientoAnimalInfo */],
            __WEBPACK_IMPORTED_MODULE_17__pages_vacunas_vacuna_animal_info__["a" /* VacunaAnimalInfo */],
            __WEBPACK_IMPORTED_MODULE_14__pages_animal_animal_create__["a" /* AnimalCreate */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_animal_animal_home__["a" /* AnimalHome */],
            __WEBPACK_IMPORTED_MODULE_15__pages_animal_animal_info_unit__["a" /* AnimalInfoUnit */],
            __WEBPACK_IMPORTED_MODULE_16__pages_tratamiento_tratamiento_animal_info__["a" /* TratamientoAnimalInfo */],
            __WEBPACK_IMPORTED_MODULE_17__pages_vacunas_vacuna_animal_info__["a" /* VacunaAnimalInfo */],
            __WEBPACK_IMPORTED_MODULE_14__pages_animal_animal_create__["a" /* AnimalCreate */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_nfc__["a" /* NFC */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_nfc__["b" /* Ndef */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }, __WEBPACK_IMPORTED_MODULE_12__providers_animal_provider__["a" /* AnimalProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"H:\projecAntelo\systemAnimal\sylve-official\sylve\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"H:\projecAntelo\systemAnimal\sylve-official\sylve\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TratamientoAnimalInfo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TratamientoAnimalInfo = (function () {
    function TratamientoAnimalInfo(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    return TratamientoAnimalInfo;
}());
TratamientoAnimalInfo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tratamiento-animal-info',template:/*ion-inline-start:"H:\projecAntelo\systemAnimal\sylve-official\sylve\src\pages\tratamiento\tratamiento-animal-info.html"*/''/*ion-inline-end:"H:\projecAntelo\systemAnimal\sylve-official\sylve\src\pages\tratamiento\tratamiento-animal-info.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], TratamientoAnimalInfo);

//# sourceMappingURL=tratamiento-animal-info.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pouchdb__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pouchdb_find__ = __webpack_require__(292);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnimalProvider = (function () {
    function AnimalProvider() {
        __WEBPACK_IMPORTED_MODULE_1_pouchdb__["a" /* default */].plugin(__WEBPACK_IMPORTED_MODULE_2_pouchdb_find__["a" /* default */]);
        this.db = new __WEBPACK_IMPORTED_MODULE_1_pouchdb__["a" /* default */]('sylve');
        /*   this.db.createIndex({
             index: { fields: ["animal"] }
           });
       */
        this.remote = 'http://172.20.10.7:5984/sylve';
        var options = {
            live: true,
            retry: true,
            continuous: true
        };
        this.db.sync(this.remote, options);
    }
    AnimalProvider.prototype.getAnimal = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.db.find({
                selector: { indexKey: 'animal' },
                fields: ['_id', "nombre", "codigo", "edad",
                    "peso", "raza", "description", "nacimiento", "genero", "_rev",
                    "indexKey"],
                include_docs: true
            }).then(function (result) {
                _this.data = [];
                result.docs.map(function (row) {
                    _this.data.push(row);
                });
                resolve(_this.data);
                _this.db.changes({ live: true, since: 'now', include_docs: true }).on('change', function (change) {
                    _this.handleChange(change);
                });
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    AnimalProvider.prototype.getAnimales = function () {
        this.db.find({
            selector: { indexKey: 'animal' },
            fields: ['_id'],
        }).then(function (result) {
            var _this = this;
            this.data = [];
            result.docs.map(function (row) {
                _this.data.push(row.doc);
            });
            this.db.changes({ live: true, since: 'now', include_docs: true }).on('change', function (change) {
                _this.handleChange(change);
            });
        }).catch(function (err) {
            console.log(err);
        });
    };
    AnimalProvider.prototype.getTodos1 = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.db.find({
                selector: { indexKey: 'animal' },
                fields: ['_id', "nombre", "codigo", "edad",
                    "peso", "raza", "description", "nacimiento", "genero", "_rev",
                    "indexKey"],
                include_docs: true
            }).then(function (result) {
                _this.data = [];
                result.docs.map(function (row) {
                    _this.data.push(row);
                });
                resolve(_this.data);
                _this.db.changes({ live: true, since: 'now', include_docs: true }).on('change', function (change) {
                    _this.handleChange(change);
                });
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    AnimalProvider.prototype.getAlimentacionByAnimal = function (code) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.db.find({
                selector: { keyAlimentacion: "alimentacion", codigo: code },
                fields: ['_id', "codigo", "nombre",
                    "cantidad", "_rev"],
                include_docs: true
            }).then(function (result) {
                _this.data = [];
                result.docs.map(function (row) {
                    _this.data.push(row);
                });
                resolve(_this.data);
                _this.db.changes({ live: true, since: 'now', include_docs: true }).on('change', function (change) {
                    _this.handleChange(change);
                });
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    AnimalProvider.prototype.getVacunaByAnimal = function (code) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.db.find({
                selector: { keyAlimentacion: "vacuna", codigoAnimal: code, keyVacuna: "vacunaRegister" },
                fields: ["codigoAnimal", "nombre",
                    "dosis"],
                include_docs: true
            }).then(function (result) {
                _this.data = [];
                var docs = result.docs.map(function (row) {
                    _this.data.push(row);
                });
                resolve(_this.data);
                _this.db.changes({ live: true, since: 'now', include_docs: true }).on('change', function (change) {
                    _this.handleChange(change);
                });
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    AnimalProvider.prototype.getAnimalById = function (code) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.db.find({
                selector: { indexKey: "animal", codigo: code },
                fields: ["codigo", "nombre", "edad", "peso", "raza", "description", "genero",
                    "nacimiento", "_id", "_rev"],
                include_docs: true
            }).then(function (result) {
                _this.data = [];
                var docs = result.docs.map(function (row) {
                    _this.data.push(row);
                });
                resolve(_this.data);
                _this.db.changes({ live: true, since: 'now', include_docs: true }).on('change', function (change) {
                    _this.handleChange(change);
                });
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    AnimalProvider.prototype.getVacunaByRegister = function (code) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.db.find({
                selector: { keyAlimentacion: code },
                fields: ['_id', "idVacuna", "nombre",
                    "fechaVencimiento", "precio", "cantidad",
                    "peso", "_rev"],
                include_docs: true
            }).then(function (result) {
                _this.data = [];
                var docs = result.docs.map(function (row) {
                    _this.data.push(row);
                });
                resolve(_this.data);
                _this.db.changes({ live: true, since: 'now', include_docs: true }).on('change', function (change) {
                    _this.handleChange(change);
                });
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    AnimalProvider.prototype.getVacunaByRegisters = function (code) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.db.find({
                selector: { keyAlimentacion: "vacunaRegister", idVacuna: code },
                fields: ['_id', "idVacuna", "nombre",
                    "fechaVencimiento", "fechaElaboracion",
                    "precio", "cantidad",
                    "peso", "_rev", "keyAlimentacion"],
                include_docs: true
            }).then(function (result) {
                _this.data = [];
                var docs = result.docs.map(function (row) {
                    _this.data.push(row);
                });
                resolve(_this.data);
                _this.db.changes({ live: true, since: 'now', include_docs: true }).on('change', function (change) {
                    _this.handleChange(change);
                });
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    AnimalProvider.prototype.getTratamientos = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.db.find({
                selector: { keyTratamiento: "tratamiento" },
                fields: ['_id', "nombre", "fechaInicio",
                    "fechaFin", "codigo",
                    "estado", "_rev", "keyTratamiento"],
                include_docs: true
            }).then(function (result) {
                _this.data = [];
                var docs = result.docs.map(function (row) {
                    _this.data.push(row);
                });
                resolve(_this.data);
                _this.db.changes({ live: true, since: 'now', include_docs: true }).on('change', function (change) {
                    _this.handleChange(change);
                });
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    AnimalProvider.prototype.getTodos = function () {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            _this.db.allDocs({
                include_docs: true
            }).then(function (result) {
                _this.data = [];
                var docs = result.rows.map(function (row) {
                    _this.data.push(row.doc);
                });
                resolve(_this.data);
                _this.db.changes({ live: true, since: 'now', include_docs: true }).on('change', function (change) {
                    _this.handleChange(change);
                });
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    AnimalProvider.prototype.createAnimal = function (todo) {
        this.db.post(todo);
    };
    AnimalProvider.prototype.createIndex = function () {
        this.db.createIndex({
            index: { fields: ["animal"] }
        });
    };
    AnimalProvider.prototype.updateTodo = function (todo) {
        this.db.put(todo).catch(function (err) {
            console.log(err);
        });
    };
    AnimalProvider.prototype.deleteTodo = function (todo) {
        this.db.remove(todo).catch(function (err) {
            console.log(err);
        });
    };
    AnimalProvider.prototype.findAnimal = function () {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            _this.db.find({
                selector: { animal_key: { $gte: "animal" } }
            }).then(function (result) {
                _this.data = [];
                result.rows.map(function (row) {
                    _this.data.push(row.doc);
                });
                resolve(_this.data);
                _this.db.changes({ live: true, since: 'now', include_docs: true }).on('change', function (change) {
                    _this.handleChange(change);
                });
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    AnimalProvider.prototype.findAnimalByID = function (code) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.db.find({
                selector: { indexKey: "animal", codigo: code },
                fields: ["codigo"],
                include_docs: true
            }).then(function (result) {
                _this.data = [];
                result.docs.map(function (row) {
                    _this.data.push(row);
                });
                resolve(_this.data);
                _this.db.changes({ live: true, since: 'now', include_docs: true }).on('change', function (change) {
                    _this.handleChange(change);
                });
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    AnimalProvider.prototype.handleChange = function (change) {
        var changedDoc = null;
        var changedIndex = null;
        this.data.forEach(function (doc, index) {
            if (doc._id === change.id) {
                changedDoc = doc;
                changedIndex = index;
            }
        });
        //A document was deleted
        if (change.deleted) {
            this.data.splice(changedIndex, 1);
        }
        else {
            //A document was updated
            if (changedDoc) {
                this.data[changedIndex] = change.doc;
            }
            else {
                this.data.push(change.doc);
            }
        }
    };
    return AnimalProvider;
}());
AnimalProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AnimalProvider);

//# sourceMappingURL=animal-provider.js.map

/***/ })

},[216]);
//# sourceMappingURL=main.js.map