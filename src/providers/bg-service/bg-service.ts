import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the BgServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BgServiceProvider {
  public data: any;
  constructor(public http: HttpClient) {
    console.log('Hello BgServiceProvider Provider');
  }
  load(query, rflag) {
      console.log(query);

  if (this.data && !rflag) {
    return Promise.resolve(this.data);
  }

  // don't have the data yet
  return new Promise(resolve => {
    // We're using Angular HTTP provider to request the data,
    // then on the response, it'll map the JSON data to a parsed JS object.
    // Next, we process the data and resolve the promise with the new data.
    this.http.get('http://35.235.122.125/api?query=' + query)
      .subscribe(data => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
        this.data = data;
        resolve(this.data);
      });
  });
}
}
