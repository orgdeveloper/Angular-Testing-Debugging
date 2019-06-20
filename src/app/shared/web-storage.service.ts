import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class WebStorageService {

  constructor(private http: Http) {}

    get(key: string)
    {
      return window.localStorage.getItem(key);
    }

    getRemote()
    {
      return this.http.get('http://localhost:5984/user/settings');
    }

    setRemote(payLoad: Object)
    {
      return this.http.put('http://localhost:5984/user/settings', payLoad);
    }    
    set(key: string, value: string)
    {
      return window.localStorage.setItem(key, value);
    }

}
