import { Component, OnInit } from '@angular/core';
import { ProvidersService } from '../services/providers.service';
import { Avatar } from '../entities';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css']
})
export class ProviderListComponent implements OnInit{


  providers : any;
  public users : Avatar[]= [];
  constructor(private serviceProviders:ProvidersService, private router:Router){}
  ngOnInit(): void {
/*this.providers = this.providersService.getProviders();
this.providersService.getUsers().subscribe(
  data=>{
   this.users = (<Avatar[]>data);
  }
);*/
this.refreshListProviders();
  }
  refreshListProviders(){
    this.serviceProviders.listProviders().subscribe(
      response=>{
        console.log(response);
        this.providers = response;
      }
    );
  }
  deleteProvider(myObj:any){
    this.serviceProviders.deleteProvider(myObj).subscribe(
      response=>{
       this.refreshListProviders();
      }
    );
      }

      updateProvider(myObj:any){
        this.router.navigate(['lupdateArticle'+ '/' +myObj['id']]);
      }
}
