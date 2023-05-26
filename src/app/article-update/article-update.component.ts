import { Component } from '@angular/core';
import { ProvidersService } from '../services/providers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesServicesService } from '../services/articles-services.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-article-update',
  templateUrl: './article-update.component.html',
  styleUrls: ['./article-update.component.css']
})
export class ArticleUpdateComponent {
  public id: any;
  public idProvider: any;
  public articleToUpdate: any;
  public label: any;
  public price: any;
  public picture: any;
   public name : any;
  public photoFace:any;
  public providerId:any;
  providers : any;
  editPhoto: boolean=false;
   currentArticle : any;
  progress:number=0;
  currentProduct:any;
 selectedFiles:any;
 currentFileUpload:any;
 timestamp:number=0;
 // public providerToUpdate : any;
 urlPhoto: string = 'http://127.0.0.1:8080/articles/photoProduct/';


  constructor(
    private serviceProviders: ProvidersService,
    public serviceArticles:ArticlesServicesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('idArticle');
      //this.idProvider = params.get('idProvider');

    });

     this.articleToUpdate = this.serviceArticles
    .getArticles(this.id)
    .subscribe((response: any) => {
      this.label = response['label'];
      this.price = response['price'];
      this.picture = response['picture'];
      this.photoFace = response['photoFace'];
      this.idProvider = response['provider']['id'];

    /*this.providerToUpdate = this.serviceProviders
    .getProvider(this.idProvider)
    .subscribe((response: any) => {
       this.name = response['name'];
     });*/
       this.serviceProviders.listProviders().subscribe(
        response=>{
           this.providers = response;
        }
      );

    });
}
updateArticle(id:any) {
  this.articleToUpdate = {
    label: this.label,
    price: this.price,
    picture: this.picture,
    photoFace: this.photoFace,
    providerId: this.providerId,
    id: this.id,
  };

  this.serviceArticles
    .updateArticle(this.articleToUpdate,id)
    .subscribe((response) => {
      console.log(response);
      this.router.navigate(['listArticle']);
    });
}

onEditPhoto(id:any){
  console.log("msg",id);
  this.currentArticle=this.serviceArticles.getArticles(this.id).subscribe((response: any) => {

  });
  console.log("equal ",this.currentArticle==this.serviceArticles.getArticles(this.id).subscribe((response: any) => {
    this.label = response['label'];
    console.log("label",response['label']);
    console.log("sec label",this.label);
  }))
  this.editPhoto = true;
}

onSelectedFile(event:any){
this.selectedFiles = event.target.files;
}

uploadPhoto(){
  this.progress = 0;
this.currentFileUpload =this.selectedFiles.item(0);

this.serviceArticles.uploadPhotoProduct(this.currentFileUpload, this.id).subscribe(res=>{
if(res.type === HttpEventType.UploadProgress){
if (res.total) {
        const total: number = res.total;
        this.progress = Math.round(100 * res.loaded / total);
    }
console.log(this.progress);
}else if(res instanceof HttpResponse ){

//this.getProducts('/products/search/selectedProducts');
this.timestamp = Date.now();
}
},err=>{
alert("Problème de téléchargement...");
})

this.selectedFiles = undefined
}

getTs(){
  return this.timestamp;
  }

}
