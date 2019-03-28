import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { BgServiceProvider } from '../../providers/bg-service/bg-service';
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
	selector: 'sloka-each',
	templateUrl: 'sloka1.html',
})

export class slokaEach {
	@ViewChild('map') mapElement: ElementRef;
	public verse: any;
	public vno: number;
	public cno: number;
	latr: number;
	langr: number;
	public loaderCtrl: any;
	public txtCtrl: string;

	constructor(private alertCtrl: AlertController, private storage: Storage, public bgService: BgServiceProvider, public platform: Platform, public navCtrl: NavController, public navParams: NavParams) {
		this.latr = 0; this.langr = 0;
		this.verse = {};
		this.loaderCtrl = true ;

		let verse = navParams.get('verse');
		let chapter = navParams.get('chapter');
		this.platform.ready().then(() => {
			this.bgService.load( 'http://hss-iitk.herokuapp.com/api/cs252?verse='+ verse + '&&chapter=' + chapter).then(data => {
				console.log(data);
				this.verse = {
					"sanskritverse" : data["sanskrit-verse"],
					"versetransliteration" : data["verse-transliteration"],
					"verseword" : data["verse-word"].split(";"),
					"versetranslation" : data["verse-meaning"],
					"id" : navParams.get('vid')
				};
				console.log(this.verse);
				this.vno = verse;
				this.cno = chapter;
				this.loaderCtrl = false ;

				this.storage.get(this.verse.id).then((val) => {
					if (val) {
						console.log("ald");
						document.getElementById(this.verse.id).style.color = 'white';
						this.txtCtrl = "Starred Sloka!!";
					}
					else{
						this.txtCtrl = "Mark as Favourite !!";
					}
				});
			});
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
				console.log("set : : ", vid, verse);
				this.storage.set(vid, verse);
				document.getElementById(vid).style.color = 'white';
				console.log(document.getElementById(vid));
				let alert = this.alertCtrl.create({
					title: 'Alert',
					subTitle: 'Marked as favourite!!',
					buttons: ['Dismiss']
				});
				alert.present();
				this.txtCtrl = "Starred Sloka!!";
			}
		});

	}


}
