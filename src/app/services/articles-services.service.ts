import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

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

  uploadPhotoProduct(file:File, idProduct:any): Observable<HttpEvent<{}>>{
    let formdata : FormData = new FormData();
    formdata.append('file',file);

    const req = new HttpRequest('POST', this.urlArticles+'/uploadPhoto/'+idProduct,formdata,{
    reportProgress: true,
    responseType: 'text'

    }) ;
    return this.http.request(req);
      }


}
