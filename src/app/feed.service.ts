import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private http:HttpClient) { }
  getFeed() {
  		return this.http.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40highbeamsdubai');
		 
    }
}
