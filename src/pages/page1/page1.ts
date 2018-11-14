import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
	selector: 'page-page1',
	templateUrl: 'page1.html',
})

export class Page1Page {
	@ViewChild('map') mapElement: ElementRef;
	public verses: any;
	latr: number;
	langr: number;

	constructor(private storage: Storage, public platform: Platform, public navCtrl: NavController, public navParams: NavParams) {
		this.latr = 0; this.langr = 0;
		this.verses = [];
		let ctr = 1;

		this.storage.forEach((value, key, index) => {
            if(key.slice(0,6) == 'sloka_'){
                console.log("kkk : ", key);
                this.verses.push({
    				"num": "Sloka - " + ctr,
    				"text": value,
                    "id" : key,
                    "chap" : key.split("_")[2]

    			});
    			ctr++;

            }

			console.log("This is the key", key);
			// console.log("from the key", key)
			// console.log("Index is", index)
		});
		console.log(this.verses);

	}

    deleteFav(vid){
        this.verses = [];
        let ctr = 1;
        this.storage.remove(vid) ;
        this.storage.forEach((value, key, index) => {
            if(key.slice(0,6) == 'sloka_'){
                console.log("kkk : ", key);
                this.verses.push({
    				"num": "Sloka - " + ctr,
    				"text": value,
                    "id" : key,
                    "chap" : key.split("_")[2]

    			});
    			ctr++;

            }

			// console.log("This is the key", chap);
			// console.log("from the key", key)
			// console.log("Index is", index)
		});
    }
}
