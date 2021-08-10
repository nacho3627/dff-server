webpackJsonp([0],{

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
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
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/nacho/Sites/wip-web/wip/src/pages/home/home.html"*/'\n\n<ion-content id="app-content">\n  <work-viewer> </work-viewer>\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/nacho/Sites/wip-web/wip/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_work_viewer_work_viewer__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_qrcode2__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__components_work_viewer_work_viewer__["a" /* WorkViewer */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_8_ngx_qrcode2__["a" /* NgxQRCodeModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/nacho/Sites/wip-web/wip/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/nacho/Sites/wip-web/wip/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkViewer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadStep;
(function (LoadStep) {
    LoadStep[LoadStep["LOADING_SPLASH_SCREEN"] = 0] = "LOADING_SPLASH_SCREEN";
    LoadStep[LoadStep["SHOWING_SPLASH_SCREEN"] = 1] = "SHOWING_SPLASH_SCREEN";
    LoadStep[LoadStep["LOADED"] = 2] = "LOADED";
})(LoadStep || (LoadStep = {}));
var WorkViewer = /** @class */ (function () {
    function WorkViewer(ref) {
        this.ref = ref;
        this.worksUrls = ["https://www.anipedia.net/imagenes/caracteristicas-generales-de-los-gatos.jpg",
            "https://misanimales.com/wp-content/uploads/2016/10/crecen-los-gatos.jpg",
            "https://www.tiendanimal.es/articulos/wp-content/uploads/2018/01/parasitos-intestinales-gatos-450x253.jpg",
            "https://puroconocimiento.com/wp-content/uploads/2017/05/donde-viven-los-gatos.jpg",
            "https://www.notigatos.es/wp-content/uploads/2017/10/gato-encima-de-la-mesa-830x553.jpg",
            "https://i.ytimg.com/vi/VKmp327kAAQ/hqdefault.jpg",
            "https://www.lavanguardia.com/r/GODO/LV/p5/WebSite/2018/04/19/Recortada/img_scolome_20180419-170551_imagenes_lv_getty_istock-626464158-k6yB-U442737524989vlB-992x558@LaVanguardia-Web.jpg",
            "https://cdn.tekcrispy.com/wp-content/uploads/2017/09/Gato-cazando-raton-640x390.jpg",
            "https://www.hogarmania.com/archivos/201610/como-ven-los-gatos-XxXx80.jpg",
            "https://www.fundacion-affinity.org/sites/default/files/el-gato-necesita-tener-acceso-al-exterior.jpg"
        ];
        this.currentWorkIdx = 0;
        this.activeBars = false;
        this.LoadStep = LoadStep; // Enum import
        this.loadStep = LoadStep.LOADING_SPLASH_SCREEN;
        //TODO: Debug que esté funcionando bien el cache, cuando tenga urls que tengan indices
        this.cacheImageURL = [];
        this.changeImageByOffset(0);
        this.addImageToCache(0);
        this.addImageToCache(this.worksUrls.length - 1);
    }
    WorkViewer.prototype.changeImageByOffset = function (offset) {
        this.currentWorkIdx = this.checkOverflow(this.currentWorkIdx + offset);
        this.addImageToCache(this.checkOverflow(this.currentWorkIdx + 1));
        this.addImageToCache(this.checkOverflow(this.currentWorkIdx + 10));
        this.addImageToCache(this.checkOverflow(this.currentWorkIdx - 1));
        this.addImageToCache(this.checkOverflow(this.currentWorkIdx - 10));
    };
    WorkViewer.prototype.checkOverflow = function (idx) {
        var toRet = idx;
        toRet = Math.max(0, toRet);
        toRet = Math.min(this.worksUrls.length - 1, toRet);
        return toRet;
    };
    WorkViewer.prototype.addImageToCache = function (imageIndex) {
        var url = this.worksUrls[imageIndex];
        if (this.cacheImageURL.indexOf(url) == -1) {
            this.cacheImageURL.push(url);
        }
    };
    WorkViewer.prototype.activateBars = function () {
        this.activeBars = true;
        if (this.activeBarsTimeoutId != null) {
            clearTimeout(this.activeBarsTimeoutId);
        }
        this.activeBarsTimeoutId = setTimeout(function () {
            this.activeBars = false;
            this.ref.markForCheck();
        }.bind(this), 5000);
    };
    WorkViewer.prototype.splashScreenLoaded = function () {
        this.loadStep = LoadStep.SHOWING_SPLASH_SCREEN;
        this.activeBarsTimeoutId = setTimeout(function () {
            this.loadStep = LoadStep.LOADED;
            this.ref.markForCheck();
        }.bind(this), 5000);
    };
    WorkViewer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'work-viewer',template:/*ion-inline-start:"/Users/nacho/Sites/wip-web/wip/src/components/work-viewer/work-viewer.html"*/'<div class="work-viewer-wrapper" (click)="activateBars()">\n  <div *ngIf="loadStep == LoadStep.LOADING_SPLASH_SCREEN" class="pre-splash">\n    Loading...\n  </div>\n  <img class="splash-screen" [ngClass]="{\'active\': loadStep != LoadStep.LOADED}"  (load)="splashScreenLoaded()" src="http://bsnscb.com/data/out/101/38833574-illustration-wallpapers.png"/>\n\n  <div class="work-wrapper">\n    <div *ngIf="worksUrls[currentWorkIdx]!=null" id="work"\n         [ngStyle]="{\'background-image\': \'url(\' + worksUrls[currentWorkIdx] + \')\'}"></div>\n\n\n\n  <div class="bottom-bar" [ngClass]="{\'active\': activeBars}">\n    <div class="left">\n      <button class="first" (click)="changeImageByOffset(-100000000)"></button>\n      <button class="previous10" (click)="changeImageByOffset(-10)"></button>\n      <button class="previous" (click)="changeImageByOffset(-1)"></button>\n    </div>\n    <div class="right">\n      <button class="next" (click)="changeImageByOffset(1)"></button>\n      <button class="next10" (click)="changeImageByOffset(10)"></button>\n      <button class="last" (click)="changeImageByOffset(100000000)"></button>\n    </div>\n  </div>\n\n\n  <div class="top-bar" [ngClass]="{\'active\': activeBars}">\n    <div class="right">\n      <ngx-qrcode\n        [qrc-element-type]="url"\n        [qrc-value]="worksUrls[currentWorkIdx]"\n        qrc-class="qr-link"\n        qrc-errorCorrectionLevel="L">\n      </ngx-qrcode>\n\n    </div>\n  </div>\n\n  <div *ngFor="let i of cacheImageURL">\n    <img class="hidden-image" src="{{i}}"/>\n  </div>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/nacho/Sites/wip-web/wip/src/components/work-viewer/work-viewer.html"*/,
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectionStrategy */].OnPush,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]])
    ], WorkViewer);
    return WorkViewer;
}());

//# sourceMappingURL=work-viewer.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map