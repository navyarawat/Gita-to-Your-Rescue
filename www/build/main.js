webpackJsonp([2],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sloka1_sloka1__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Page1Page = /** @class */ (function () {
    function Page1Page(storage, platform, navCtrl, navParams) {
        var _this = this;
        this.storage = storage;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.latr = 0;
        this.langr = 0;
        this.verses = [];
        var ctr = 1;
        this.storage.forEach(function (value, key, index) {
            if (key.slice(0, 6) == 'sloka_') {
                console.log("kkk : ", key);
                _this.verses.push({
                    "num": "Sloka - " + ctr,
                    "text": value,
                    "id": key,
                    "chap": key.split("_")[2],
                    "vno": key.split("_")[1]
                });
                ctr++;
            }
            console.log("This is the key", key);
            // console.log("from the key", key)
            // console.log("Index is", index)
        });
        console.log(this.verses);
    }
    Page1Page.prototype.deleteFav = function (vid) {
        var _this = this;
        this.verses = [];
        var ctr = 1;
        this.storage.remove(vid);
        this.storage.forEach(function (value, key, index) {
            if (key.slice(0, 6) == 'sloka_') {
                console.log("kkk : ", key);
                _this.verses.push({
                    "num": "Sloka - " + ctr,
                    "text": value,
                    "id": key,
                    "chap": key.split("_")[2],
                    "vno": key.split("_")[1]
                });
                ctr++;
            }
            // console.log("This is the key", chap);
            // console.log("from the key", key)
            // console.log("Index is", index)
        });
    };
    Page1Page.prototype.openIndSloka = function (vid) {
        // console.log(vid);
        var verse = vid.split("_")[1];
        var chapter = vid.split("_")[2];
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__sloka1_sloka1__["a" /* slokaEach */], {
            "chapter": chapter,
            "verse": verse,
            "vid": vid
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], Page1Page.prototype, "mapElement", void 0);
    Page1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-page1',template:/*ion-inline-start:"/home/navya/Desktop/Bhagavad Gita Help/Latest Version/src/pages/page1/page1.html"*/'<ion-header>\n  <ion-navbar >\n    <ion-title text-center style="font-family: \'Montserrat\', sans-serif; font-family: \'Roboto Slab\', serif;">\n      Bhagavad Gita Help\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-card *ngFor="let verse of verses;index as i" style="border-width: 1px; border-color: #f2a241; border-style: solid;">\n      <ion-card-header  style="background-color:#f2a241; padding-top:4px; padding-bottom : 4px;font-family: \'Montserrat\', sans-serif;font-family: \'KoHo\', sans-serif;font-family: \'Slabo 27px\', serif;">\n        {{verse.num}}\n\n\n        <!-- <button ion-button (click)="deleteFav( verse.id)" icon-end  style="padding: 0; float:right; height:15px; background-color:#f2a241;color:rgba(255, 255, 255);box-shadow: none;">\n          <ion-icon name="md-trash"></ion-icon>\n        </button> -->\n\n      </ion-card-header>\n      <ion-card-content style="padding-top:6px;padding-bottom : 6px;font-family: \'Montserrat\', sans-serif;font-family: \'KoHo\', sans-serif;">\n        {{verse.text}} <br>\n        <span style="color : rgba(10,10,10,.8); font-weight : 600; font-family: \'Roboto Slab\', serif;">Chap : {{verse.chap}}, Verse : {{verse.vno}} </span>\n        <span tappable (click) = "openIndSloka(verse.id)" style="color : rgba(50,50,50,.7);font-family: \'Roboto Slab\', serif; float: right;"> Read more .. </span>\n\n      </ion-card-content>\n    </ion-card>\n\n</ion-content>\n\n<!-- <ion-footer>\n  <ion-toolbar>\n    <ion-title style="font-family: \'Montserrat\', sans-serif; font-family: \'Roboto Slab\', serif;">\n      Go back\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="goBack()" icon-end color="royal">\n        View!\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer> -->\n'/*ion-inline-end:"/home/navya/Desktop/Bhagavad Gita Help/Latest Version/src/pages/page1/page1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], Page1Page);
    return Page1Page;
}());

//# sourceMappingURL=page1.js.map

/***/ }),

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
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/page1/page1.module": [
		284,
		1
	],
	"../pages/sloka1/sloka1.module": [
		285,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page1_page1__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sloka1_sloka1__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_bg_service_bg_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(46);
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
    // public query: any;
    function HomePage(storage, alertCtrl, bgService, formBuilder, platform, navCtrl) {
        var _this = this;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.bgService = bgService;
        this.formBuilder = formBuilder;
        this.platform = platform;
        this.navCtrl = navCtrl;
        // this.verses = "Wait for it"
        this.loaderCtrl = false;
        this.platform.ready().then(function () {
            _this.bgService.load('http://hss-iitk.herokuapp.com/api/cs252?verse=day').then(function (data) {
                console.log(data["verse-meaning"]);
                _this.verseDay = data["verse-meaning"];
                _this.dayCtrl = true;
            });
        });
        // storage.set('name', 'Max');
        // Or to get a key/value pair
    }
    HomePage.prototype.showVerses = function () {
        // document.getElementById("loader").style.display = 'block';
        var _this = this;
        this.platform.ready().then(function () {
            console.log("LOG1");
            _this.dayCtrl = false;
            _this.verses = [];
            _this.loaderCtrl = true;
            var y = document.getElementById("result").offsetTop;
            _this.content.scrollTo(0, y);
            if (!_this.query) {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Alert',
                    subTitle: 'Please enter query',
                    buttons: ['Dismiss']
                });
                alert_1.present();
                _this.loaderCtrl = false;
                return;
            }
            // let rflag = 1;
            // if(!this.pquery){
            // 	rflag = 1;
            // 	// console.log("npq");
            // }
            // else if(this.pquery == this.query){
            // 	// console.log("pq=q");
            // 	rflag = 0;
            // 	let alert = this.alertCtrl.create({
            // 		title: 'Alert',
            // 		subTitle: 'Similar query',
            // 		buttons: ['Dismiss']
            // 	});
            // 	alert.present();
            // 	this.loaderCtrl = false ;
            // 	return;
            // }
            var qdata = {};
            // console.log("qry : ", this.query);
            // this.query = "";
            // this.bgService.load(this.query).then(data =>{
            //   console.log("LOG2");
            //   this.verses = JSON.parse(data);
            //   console.log(data);
            // });
            // let qdata = { "shloka0": "Shining through the functions of all the organs, (yet) devoid of all the organs; unattached, and verily the supporter of all; without quality, and the perceiver of qualities;", "shloka1": "O son of Prtha, by meditating with a mind which is engaged in the yoga of practice and which does not stray away to anything else, one reaches the supreme Person existing in the effulgent region.", "shloka2": "On the other hand, know tamas, which deludes all embodied beings, to be born of ignorance. O scion of the Bharata dynasty, that binds through inadvertence, laziness and sleep.", "shloka3": "The Blessed Lord said: O unblemished one, two kinds of steadfastness in this world were spoken of by Me in the days of yore-through the Yoga of Knowledge for the men of realization; through the Yoga of Action for the yogis.", "shloka4": "When the illumination that is knowledge radiates in this body through all the doors (of the senses), then one should know that sattva has increased greatly.", "success": 1
            // };
            console.log("qry : ", _this.query);
            // this.query = "";
            _this.bgService.load('http://35.244.18.79/api?query=' + _this.query).then(function (data) {
                // this.dayCtrl = false;
                console.log("LOG2 ");
                _this.verses = [];
                console.log(data);
                console.log("vv : ", _this.verses);
                var rdata = data;
                // console.log( JSON.parse(data));
                var resp = [
                    {
                        "text": rdata["shloka0"].text,
                        "num": "Sloka - 1",
                        "id": 'sloka_' + rdata["shloka0"].verse_id,
                        "chap": rdata["shloka0"].chapter,
                        "vno": rdata["shloka0"].verse_id.split("_")[0]
                    },
                    {
                        "text": rdata["shloka1"].text,
                        "num": "Sloka - 2",
                        "id": 'sloka_' + rdata["shloka1"].verse_id,
                        "chap": rdata["shloka1"].chapter,
                        "vno": rdata["shloka1"].verse_id.split("_")[0]
                    },
                    {
                        "text": rdata["shloka2"].text,
                        "num": "Sloka - 3",
                        "id": 'sloka_' + rdata["shloka2"].verse_id,
                        "chap": rdata["shloka2"].chapter,
                        "vno": rdata["shloka2"].verse_id.split("_")[0]
                    },
                    {
                        "text": rdata["shloka3"].text,
                        "num": "Sloka - 4",
                        "id": 'sloka_' + rdata["shloka3"].verse_id,
                        "chap": rdata["shloka3"].chapter,
                        "vno": rdata["shloka3"].verse_id.split("_")[0]
                    },
                    {
                        "text": rdata["shloka4"].text,
                        "num": "Sloka - 5",
                        "id": 'sloka_' + rdata["shloka4"].verse_id,
                        "chap": rdata["shloka4"].chapter,
                        "vno": rdata["shloka4"].verse_id.split("_")[0]
                    }
                ];
                _this.verses = resp;
                var _loop_1 = function (x) {
                    _this.storage.get(_this.verses[x].id).then(function (val) {
                        if (val) {
                            document.getElementById(_this.verses[x].id).style.color = 'white';
                        }
                    });
                };
                for (var x = 0; x < _this.verses.length; x++) {
                    _loop_1(x);
                }
                _this.loaderCtrl = false;
                _this.pquery = _this.query;
                return;
            });
            // qdata = { "shloka0": "Shining through the functions of all the organs, (yet) devoid of all the organs; unattached, and verily the supporter of all; without quality, and the perceiver of qualities;", "shloka1": "O son of Prtha, by meditating with a mind which is engaged in the yoga of practice and which does not stray away to anything else, one reaches the supreme Person existing in the effulgent region.", "shloka2": "On the other hand, know tamas, which deludes all embodied beings, to be born of ignorance. O scion of the Bharata dynasty, that binds through inadvertence, laziness and sleep.", "shloka3": "The Blessed Lord said: O unblemished one, two kinds of steadfastness in this world were spoken of by Me in the days of yore-through the Yoga of Knowledge for the men of realization; through the Yoga of Action for the yogis.", "shloka4": "When the illumination that is knowledge radiates in this body through all the doors (of the senses), then one should know that sattva has increased greatly.", "success": 1 };
            // console.log(rdata);
            //this.loaderCtrl = false ;
        });
    };
    HomePage.prototype.markFav = function (verse, vid) {
        var _this = this;
        console.log(11);
        console.log("marker : ", verse);
        this.storage.get(vid).then(function (val) {
            if (val) {
                // let alert = this.alertCtrl.create({
                // 	title: 'Alert',
                // 	subTitle: 'Selected Sloka already starred!',
                // 	buttons: ['Dismiss']
                // });
                // alert.present();
                _this.storage.remove(vid);
                document.getElementById(vid).style.color = 'black';
            }
            else {
                _this.storage.set(vid, verse);
                document.getElementById(vid).style.color = 'white';
            }
        });
    };
    HomePage.prototype.openFavSlokas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__page1_page1__["a" /* Page1Page */]);
    };
    HomePage.prototype.openIndSloka = function (vid) {
        // console.log(vid);
        var verse = vid.split("_")[1];
        var chapter = vid.split("_")[2];
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__sloka1_sloka1__["a" /* slokaEach */], {
            "chapter": chapter,
            "verse": verse,
            "vid": vid
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Content */])
    ], HomePage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "mapElement", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/navya/Desktop/Bhagavad Gita Help/Latest Version/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar >\n    <ion-title text-center style=" font-family: \'Roboto Slab\', serif;">\n      Bhagavad Gita Help\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content>\n  <!-- <br> <br> -->\n  <!-- <ion-img text-center width="100%" height="auto%" src="../../assets/imgs/gita.jpg" style="margin-top:20px;"></ion-img> -->\n  <!-- <br> <br> <br> <br> <br> -->\n  <form (ngSubmit)="showVerses()" >\n    <ion-input width="100%" height="50%"placeholder="What do you feel?"type="text" id="long" [(ngModel)]="query" name="ques" ></ion-input>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-4 >\n        </ion-col>\n          <ion-col>\n            <button text-center ion-button type="submit">Get Slokas</button>\n          </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n\n  <div #map id="result" style="" >\n\n      <ion-card style="border-width: 1px; border-color: #f2a241; border-style: solid;" *ngIf="dayCtrl">\n          <ion-card-header text-center style="background-color:#f2a241; padding-top:4px; padding-bottom : 4px;font-family: \'Slabo 27px\', serif;">\n              Verse of the Day\n          </ion-card-header>\n          <ion-card-content style="padding-top:6px;padding-bottom : 6px;font-family: \'KoHo\', sans-serif;">\n              {{verseDay}}\n          </ion-card-content>\n      </ion-card>\n\n\n    <ion-card id = "loader" *ngIf="loaderCtrl" style="box-shadow: none;" >\n        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"/>\n        <ion-card-content >\n        	<ion-card-title>\n\n        	</ion-card-title>\n        	<p text-center>\n                Loading\n        		<!-- The most popular industrial group ever, and largely responsible for bringing the music to a mass audience. -->\n        	</p>\n        </ion-card-content>\n    </ion-card>\n\n\n    <ion-card *ngFor="let verse of verses;index as i" style="border-width: 1px; border-color: #f2a241; border-style: solid;">\n      <ion-card-header  style="background-color:#f2a241; padding-top:4px; padding-bottom : 4px;font-family: \'Slabo 27px\', serif;">\n        {{verse.num}}\n\n        <!-- <ion-icon name="star"  (click)="markFav(verse.text)"></ion-icon> -->\n\n        <button ion-button id="{{verse.id}}"  (click)="markFav(verse.text, verse.id)" icon-end  style="padding: 0; float:right; height:15px; background-color:#f2a241;color:black;box-shadow: none;">\n          <ion-icon name="star"></ion-icon>\n        </button>\n\n      </ion-card-header>\n      <ion-card-content style="padding-top:6px;padding-bottom : 6px;font-family: \'KoHo\', sans-serif;">\n        {{verse.text}} <br>\n        <span style="color : rgba(10,10,10,.8); font-weight : 600; font-family: \'Roboto Slab\', serif;">Chap : {{verse.chap}}, Verse : {{verse.vno}}  </span>\n        <span tappable (click) = "openIndSloka(verse.id)" style="color : rgba(50,50,50,.7);font-family: \'Roboto Slab\', serif; float: right;"> Read more .. </span>\n\n\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-title style="font-family: \'Montserrat\', sans-serif; font-family: \'Roboto Slab\', serif;">\n      Your Favourite Slokas\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="openFavSlokas()" icon-end color="royal">\n        View\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/navya/Desktop/Bhagavad Gita Help/Latest Version/src/pages/home/home.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_6__providers_bg_service_bg_service__["a" /* BgServiceProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__providers_bg_service_bg_service__["a" /* BgServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_page1_page1__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_sloka1_sloka1__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_google_maps__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_bg_service_bg_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(46);
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
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_page1_page1__["a" /* Page1Page */],
                __WEBPACK_IMPORTED_MODULE_9__pages_sloka1_sloka1__["a" /* slokaEach */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/page1/page1.module#Page1PageModule', name: 'Page1Page', segment: 'page1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sloka1/sloka1.module#slokaEachModule', name: 'slokaEach', segment: 'sloka1', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_page1_page1__["a" /* Page1Page */],
                __WEBPACK_IMPORTED_MODULE_9__pages_sloka1_sloka1__["a" /* slokaEach */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_google_maps__["a" /* GoogleMaps */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_bg_service_bg_service__["a" /* BgServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(203);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/navya/Desktop/Bhagavad Gita Help/Latest Version/src/app/app.html"*/'<meta http-equiv="Content-Security-Policy" content="default-src *; script-src \'self\' \'unsafe-inline\' \'unsafe-eval\' *; style-src \'self\' \'unsafe-inline\' *">\n\n<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Pages</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/navya/Desktop/Bhagavad Gita Help/Latest Version/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slokaEach; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_bg_service_bg_service__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var slokaEach = /** @class */ (function () {
    function slokaEach(alertCtrl, storage, bgService, platform, navCtrl, navParams) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.bgService = bgService;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.latr = 0;
        this.langr = 0;
        this.verse = {};
        this.loaderCtrl = true;
        var verse = navParams.get('verse');
        var chapter = navParams.get('chapter');
        this.platform.ready().then(function () {
            _this.bgService.load('http://hss-iitk.herokuapp.com/api/cs252?verse=' + verse + '&&chapter=' + chapter).then(function (data) {
                console.log(data);
                _this.verse = {
                    "sanskritverse": data["sanskrit-verse"],
                    "versetransliteration": data["verse-transliteration"],
                    "verseword": data["verse-word"].split(";"),
                    "versetranslation": data["verse-meaning"],
                    "id": navParams.get('vid')
                };
                console.log(_this.verse);
                _this.vno = verse;
                _this.cno = chapter;
                _this.loaderCtrl = false;
                // this.storage.get(this.verse.id).then((val) => {
                // 	if (val) {
                // 		console.log("ald");
                // 		document.getElementById(this.verse.id).style.color = 'white';
                // 		this.txtCtrl = "Starred Sloka!!";
                // 	}
                // 	else{
                // 		this.txtCtrl = "Mark as Favourite !!";
                // 	}
                // });
            });
        });
    }
    slokaEach.prototype.markFav = function (verse, vid) {
        var _this = this;
        console.log(11);
        console.log("marker : ", verse);
        this.storage.get(vid).then(function (val) {
            if (val) {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Alert',
                    subTitle: 'Selected Sloka already starred!',
                    buttons: ['Dismiss']
                });
                alert_1.present();
            }
            else {
                console.log("set : : ", vid, verse);
                _this.storage.set(vid, verse);
                document.getElementById(vid).style.color = 'white';
                console.log(document.getElementById(vid));
                var alert_2 = _this.alertCtrl.create({
                    title: 'Alert',
                    subTitle: 'Marked as favourite!!',
                    buttons: ['Dismiss']
                });
                alert_2.present();
                _this.txtCtrl = "Starred Sloka!!";
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], slokaEach.prototype, "mapElement", void 0);
    slokaEach = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'sloka-each',template:/*ion-inline-start:"/home/navya/Desktop/Bhagavad Gita Help/Latest Version/src/pages/sloka1/sloka1.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title text-center style="font-family: \'Montserrat\', sans-serif; font-family: \'Roboto Slab\', serif;">\n			Chapter {{cno}}, Verse {{vno}}\n		</ion-title>\n	</ion-navbar>\n</ion-header>\n<ion-content>\n	<ion-card id="loader" *ngIf="loaderCtrl;else other_content" style="box-shadow: none;">\n		<img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />\n		<ion-card-content>\n			<ion-card-title>\n\n			</ion-card-title>\n			<p text-center>\n				Loading\n				<!-- The most popular industrial group ever, and largely responsible for bringing the music to a mass audience. -->\n			</p>\n		</ion-card-content>\n	</ion-card>\n\n	<ng-template #other_content>\n		<ion-card style="border-width: 1px; border-color: #f2a241; border-style: solid;">\n			<ion-card-header text-center style="background-color:#f2a241; padding-top:4px; padding-bottom : 4px;font-family: \'Slabo 27px\', serif;">\n				Sanskrit Verse\n			</ion-card-header>\n			<ion-card-content style="padding-top:6px;padding-bottom : 6px;font-family: \'KoHo\', sans-serif;">\n				{{verse.sanskritverse}}\n			</ion-card-content>\n		</ion-card>\n\n		<ion-card style="border-width: 1px; border-color: #f2a241; border-style: solid;">\n			<ion-card-header text-center style="background-color:#f2a241; padding-top:4px; padding-bottom : 4px;font-family: \'Slabo 27px\', serif;">\n				Transiteration\n			</ion-card-header>\n			<ion-card-content style="padding-top:6px;padding-bottom : 6px;font-family: \'KoHo\', sans-serif;">\n				{{verse.versetransliteration}}\n			</ion-card-content>\n		</ion-card>\n\n		<ion-card style="border-width: 1px; border-color: #f2a241; border-style: solid;">\n			<ion-card-header text-center style="background-color:#f2a241; padding-top:4px; padding-bottom : 4px;font-family: \'Slabo 27px\', serif;">\n				Word Meanings\n			</ion-card-header>\n			<ion-card-content style="padding-top:6px;padding-bottom : 6px;font-family: \'KoHo\', sans-serif;">\n				<!-- {{verse.verseword}} -->\n                <ul>\n                <li *ngFor="let x of verse.verseword;index as i" >\n                    {{x}}\n                </li></ul>\n			</ion-card-content>\n		</ion-card>\n\n		<ion-card style="border-width: 1px; border-color: #f2a241; border-style: solid;">\n			<ion-card-header text-center style="background-color:#f2a241; padding-top:4px; padding-bottom : 4px;font-family: \'Slabo 27px\', serif;">\n				Translation\n			</ion-card-header>\n			<ion-card-content style="padding-top:6px;padding-bottom : 6px;font-family: \'KoHo\', sans-serif;">\n				{{verse.versetranslation}}\n			</ion-card-content>\n		</ion-card>\n\n        <!-- <ion-card style="border-width: 1px; border-color: #f2a241; border-style: solid;">\n            <ion-card-header text-center style="background-color:#f2a241; padding-top:4px; padding-bottom : 4px;font-family: \'Slabo 27px\', serif;">\n                Translation\n                <button ion-button id="{{verse.id}}" (click)="markFav(verse.versetranslation, verse.id)" icon-end  style="padding: 0; float:right; height:15px; background-color:#f2a241;color:rgba(0,0,0,0.7);box-shadow: none;">\n                  <ion-icon name="star"></ion-icon>\n                </button>\n            </ion-card-header>\n\n        </ion-card> -->\n\n\n	</ng-template>\n\n	<!-- {{verse}} -->\n</ion-content>\n\n<!-- <ion-footer *ngIf="loaderCtrl == false">\n  <ion-toolbar>\n    <ion-title style="font-family: \'Montserrat\', sans-serif; font-family: \'Roboto Slab\', serif;">\n      {{txtCtrl}}\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-end  (click)="markFav(verse.versetranslation, verse.id)" style="color:rgba(0,0,0,0.7);">\n\n        <ion-icon name="star" id="{{verse.id}}"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer> -->\n<!--\n<ion-content>\n    <ion-card *ngFor="let verse of verses;index as i" style="border-width: 1px; border-color: #f2a241; border-style: solid;">\n      <ion-card-header  style="background-color:#f2a241; padding-top:4px; padding-bottom : 4px;font-family: \'Montserrat\', sans-serif;font-family: \'KoHo\', sans-serif;font-family: \'Slabo 27px\', serif;">\n        {{verse.num}}\n\n\n        <button ion-button (click)="deleteFav( verse.id)" icon-end  style="padding: 0; float:right; height:15px; background-color:#f2a241;color:rgba(255, 255, 255);box-shadow: none;">\n          <ion-icon name="md-trash"></ion-icon>\n        </button>\n\n      </ion-card-header>\n      <ion-card-content style="padding-top:6px;padding-bottom : 6px;font-family: \'Montserrat\', sans-serif;font-family: \'KoHo\', sans-serif;">\n        {{verse.text}} <br>\n        <span style="color : rgba(10,10,10,.8); font-weight : 600; font-family: \'Roboto Slab\', serif;">Chapter : {{verse.chap}} </span>\n\n      </ion-card-content>\n    </ion-card>\n\n</ion-content> -->\n'/*ion-inline-end:"/home/navya/Desktop/Bhagavad Gita Help/Latest Version/src/pages/sloka1/sloka1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_bg_service_bg_service__["a" /* BgServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], slokaEach);
    return slokaEach;
}());

//# sourceMappingURL=sloka1.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BgServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the BgServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var BgServiceProvider = /** @class */ (function () {
    function BgServiceProvider(http) {
        this.http = http;
        console.log('Hello BgServiceProvider Provider');
    }
    BgServiceProvider.prototype.load = function (url) {
        // console.log(query);
        var _this = this;
        // if (this.data ) {
        //   return Promise.resolve(this.data);
        // }
        // don't have the data yet
        return new Promise(function (resolve) {
            // We're using Angular HTTP provider to request the data,
            // then on the response, it'll map the JSON data to a parsed JS object.
            // Next, we process the data and resolve the promise with the new data.
            _this.http.get(url)
                .subscribe(function (data) {
                // we've got back the raw data, now generate the core schedule data
                // and save the data for later reference
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    BgServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], BgServiceProvider);
    return BgServiceProvider;
}());

//# sourceMappingURL=bg-service.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map