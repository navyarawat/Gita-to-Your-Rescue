import 'rxjs/add/operator/map';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Page1Page } from '../page1/page1';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BgServiceProvider } from '../../providers/bg-service/bg-service';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { Content } from 'ionic-angular';
@Component({
	selector: 'page-home',
	templateUrl: 'home.html',
	providers: [BgServiceProvider]
})

export class HomePage {
	    @ViewChild(Content) content: Content;
	@ViewChild('map') mapElement: ElementRef;
	public result: any;
	public query: string;
	public pquery: string;
	public verses: any;
	public qdata: any;
	public loaderCtrl: any;
	// public query: any;
	constructor(private storage: Storage, private alertCtrl: AlertController, public bgService: BgServiceProvider, private formBuilder: FormBuilder, public platform: Platform, public navCtrl: NavController) {
		// this.verses = "Wait for it"
		       this.loaderCtrl = false ;
		// storage.set('name', 'Max');

		// Or to get a key/value pair


	}

	showVerses() {
		// document.getElementById("loader").style.display = 'block';

		this.platform.ready().then(() => {
			console.log("LOG1");
			this.loaderCtrl = true ;

			let y = document.getElementById("result").offsetTop;
			        this.content.scrollTo(0, y);


			if (!this.query) {
				let alert = this.alertCtrl.create({
					title: 'Alert',
					subTitle: 'Please enter query',
					buttons: ['Dismiss']
				});
				alert.present();
				this.loaderCtrl = false ;

				return ;
			}
			let rflag = 1;
			if(!this.pquery){
				rflag = 1;
				// console.log("npq");
			}
			else if(this.pquery == this.query){
				// console.log("pq=q");
				rflag = 0;
				let alert = this.alertCtrl.create({
					title: 'Alert',
					subTitle: 'Similar query',
					buttons: ['Dismiss']
				});
				alert.present();
				this.loaderCtrl = false ;
				return;
			}

			let qdata = {};

			// console.log("qry : ", this.query);
			// this.query = "";
			// this.bgService.load(this.query).then(data =>{
			//   console.log("LOG2");
			//   this.verses = JSON.parse(data);
			//   console.log(data);
			// });
			// let qdata = { "shloka0": "Shining through the functions of all the organs, (yet) devoid of all the organs; unattached, and verily the supporter of all; without quality, and the perceiver of qualities;", "shloka1": "O son of Prtha, by meditating with a mind which is engaged in the yoga of practice and which does not stray away to anything else, one reaches the supreme Person existing in the effulgent region.", "shloka2": "On the other hand, know tamas, which deludes all embodied beings, to be born of ignorance. O scion of the Bharata dynasty, that binds through inadvertence, laziness and sleep.", "shloka3": "The Blessed Lord said: O unblemished one, two kinds of steadfastness in this world were spoken of by Me in the days of yore-through the Yoga of Knowledge for the men of realization; through the Yoga of Action for the yogis.", "shloka4": "When the illumination that is knowledge radiates in this body through all the doors (of the senses), then one should know that sattva has increased greatly.", "success": 1
			// };
			console.log("qry : ", this.query);
			// this.query = "";
			this.bgService.load(this.query, rflag).then(data => {
				console.log("LOG2 ");
				this.verses = [];
				console.log(data);
				console.log("vv : ", this.verses);
				let rdata = data;
				// console.log( JSON.parse(data));
				let resp = [
					{
						"text": rdata.shloka0.text,
						"num": "Shloka - 1",
						"id": 'sloka_' + rdata.shloka0.verse_id,
						"chap": rdata.shloka0.chapter
					},
					{
						"text": rdata.shloka1.text,
						"num": "Shloka - 2",
						"id": 'sloka_' + rdata.shloka1.verse_id,
						"chap": rdata.shloka1.chapter

					},
					{
						"text": rdata.shloka2.text,
						"num": "Shloka - 3",
						"id": 'sloka_' + rdata.shloka2.verse_id,
						"chap": rdata.shloka2.chapter

					},
					{
						"text": rdata.shloka3.text,
						"num": "Shloka - 4",
						"id": 'sloka_' + rdata.shloka3.verse_id,
						"chap": rdata.shloka3.chapter

					},
					{
						"text": rdata.shloka4.text,
						"num": "Shloka - 5",
						"id": 'sloka_' + rdata.shloka4.verse_id,
						"chap": rdata.shloka4.chapter

					}
				];
				this.verses = resp;
				for (let x = 0; x < this.verses.length; x++) {
					this.storage.get(this.verses[x].id).then((val) => {
						if (val) {
							document.getElementById(this.verses[x].id).style.color = 'white';
						}
					});
				}
				this.loaderCtrl = false ;
				this.pquery = this.query;
				return ;
			});

			// qdata = { "shloka0": "Shining through the functions of all the organs, (yet) devoid of all the organs; unattached, and verily the supporter of all; without quality, and the perceiver of qualities;", "shloka1": "O son of Prtha, by meditating with a mind which is engaged in the yoga of practice and which does not stray away to anything else, one reaches the supreme Person existing in the effulgent region.", "shloka2": "On the other hand, know tamas, which deludes all embodied beings, to be born of ignorance. O scion of the Bharata dynasty, that binds through inadvertence, laziness and sleep.", "shloka3": "The Blessed Lord said: O unblemished one, two kinds of steadfastness in this world were spoken of by Me in the days of yore-through the Yoga of Knowledge for the men of realization; through the Yoga of Action for the yogis.", "shloka4": "When the illumination that is knowledge radiates in this body through all the doors (of the senses), then one should know that sattva has increased greatly.", "success": 1 };
			// console.log(rdata);

			//this.loaderCtrl = false ;

		});
	}

	markFav(verse, vid) {
		console.log(11);
		console.log("marker : ", verse);
		this.storage.get(vid).then((val) => {
			if (val) {
				let alert = this.alertCtrl.create({
					title: 'Alert',
					subTitle: 'Selected Sloka already starred!',
					buttons: ['Dismiss']
				});
				alert.present();
			}
			else {
				this.storage.set(vid, verse);
				document.getElementById(vid).style.color = 'white';
			}
		});

		// this.storage.forEach( (value, key, index) => {
		// console.log("This is the value", value)
		// console.log("from the key", key)
		// console.log("Index is", index)
		// });

	}

	openFavSlokas() {
		this.navCtrl.push(Page1Page);
	}

}
