import { Component } from '@angular/core';
import { ArticlesServicesService } from '../services/articles-services.service';
import { Router } from '@angular/router';
import { ProvidersService } from '../services/providers.service';
import { ProviderListComponent } from '../provider-list/provider-list.component';

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.css']
})
export class ArticleAddComponent {
  providers : any;
  constructor(private serviceArticles:ArticlesServicesService,private serviceProviders:ProvidersService, private router:Router) { }

  ngOnInit(): void {
    this.serviceProviders.listProviders().subscribe(
      response=>{
        console.log(response);
        this.providers = response;
      }
    );

  }

  createArticle(myForm:any){

    this.serviceArticles.createArticle(myForm).subscribe(
      response=>{
        console.log(response);
        this.router.navigate(['listArticle']);

      }
    );

  }
}
