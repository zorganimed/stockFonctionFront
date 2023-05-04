import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticlesServicesService {

  urlArticles = environment.rootURL+'articles';
  article: any;
   constructor(private http:HttpClient){}

   listArticles(){
    return this.http.get(this.urlArticles+'/list');
   }

   updateArticle(myObj: any,id:any) {
    console.log("id article "+myObj['id']);
    console.log("id idProvider  "+id);
    return this.http.put(this.urlArticles + '/update/'+id+'/' + myObj['id'], myObj);
  }

  deleteArticle(myObj: any) {
    return this.http.delete(this.urlArticles + '/' + myObj['id']);
  }

  createArticle(myForm: any) {
    this.article = {
      label: myForm.value.articleLabel,
      price: myForm.value.articlePrice,
      picture: myForm.value.articlePicture,
      photoFace: myForm.value.articlePhotoFace,
      providerName: myForm.value.providerName,
    };
    return this.http.post(this.urlArticles + '/add/'+myForm.value.providerId, this.article);
  }

  getArticles(id: any) {
    return this.http.get(this.urlArticles + '/' + id);
  }


}
