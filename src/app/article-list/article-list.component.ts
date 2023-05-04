import { Component } from '@angular/core';
import { ProvidersService } from '../services/providers.service';
import { Router } from '@angular/router';
import { ArticlesServicesService } from '../services/articles-services.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent {
  articles : any;

  constructor(private serviceArticles:ArticlesServicesService, private router:Router){}
  ngOnInit(): void {
this.refreshListArticles();
  }
  refreshListArticles(){
    this.serviceArticles.listArticles().subscribe(
      response=>{
        console.log(response);
        this.articles = response;
      }
    );
  }

  deleteArticle(myObj:any){
    this.serviceArticles.deleteArticle(myObj).subscribe(
      response=>{
       this.refreshListArticles();
      }
    );
      }

      updateArticle(myObj:any, providerId:any){

        this.router.navigate(['updateArticle'+ '/' +myObj['id']+ '/' +providerId] );
      }

}
