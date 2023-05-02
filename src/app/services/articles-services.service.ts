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

   updateArticle(myObj: any) {
    return this.http.put(this.urlArticles + '/' + myObj['id'], myObj);
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
    };
    return this.http.post(this.urlArticles + '/add', this.article);
  }


}
