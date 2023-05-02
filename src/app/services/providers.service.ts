import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {
/*tab :string[] =["Samsung","HP","Dell","Apple"];
user : any;
 url = "https://jsonplaceholder.typicode.com/photos";
  constructor(private http : HttpClient) { }

  public getProviders(){
    return this.tab;
  }

  public getUsers(){
    return this.http.get(this.url);
  }*/

  urlProviders = environment.rootURL+'providers';//"http://127.0.0.1:8080/providers";
  provider: any;
   constructor(private http:HttpClient){}

   listProviders(){
    return this.http.get(this.urlProviders+'/list');
   }

   createProvider(myForm: any) {
    this.provider = {
      name: myForm.value.providerName,
      email: myForm.value.providerEmail,
      adress: myForm.value.providerAdress,
    };
    return this.http.post(this.urlProviders + '/add', this.provider);
  }

  updateProvider(myObj: any) {
    return this.http.put(this.urlProviders + '/' + myObj['id'], myObj);
  }

  deleteProvider(myObj: any) {
    return this.http.delete(this.urlProviders + '/' + myObj['id']);
  }

  getProvider(id: any) {
    return this.http.get(this.urlProviders + '/' + id);
  }

}
