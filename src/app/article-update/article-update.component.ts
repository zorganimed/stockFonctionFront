import { Component } from '@angular/core';
import { ProvidersService } from '../services/providers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesServicesService } from '../services/articles-services.service';

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
  public providerToUpdate : any;


  constructor(
    private serviceProviders: ProvidersService,
    private serviceArticles:ArticlesServicesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('idArticle');
      this.idProvider = params.get('idProvider');
    });

     this.articleToUpdate = this.serviceArticles
    .getArticles(this.id)
    .subscribe((response: any) => {
      this.label = response['label'];
      this.price = response['price'];
      this.picture = response['picture'];
      this.photoFace = response['photoFace'];
      this.providerId = response['providerId'];
       console.log("this.providerId  "+this.idProvider);
       this.providerToUpdate = this.serviceProviders
    .getProvider(this.idProvider)
    .subscribe((response: any) => {
      console.log("response name "+response['name']);
      this.name = response['name'];
      console.log("this.namebh "+this.name);
    });
    console.log("this.name "+this.name);
      this.serviceProviders.listProviders().subscribe(
        response=>{
          console.log(response);
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
}
