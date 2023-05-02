import { Component } from '@angular/core';
import { ProvidersService } from '../services/providers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider-add',
  templateUrl: './provider-add.component.html',
  styleUrls: ['./provider-add.component.css']
})
export class ProviderAddComponent {
  constructor(private serviceProviders:ProvidersService, private router:Router) { }

  ngOnInit(): void {}

  createProvider(myForm:any){
    this.serviceProviders.createProvider(myForm).subscribe(
      response=>{
        console.log(response);
        this.router.navigate(['listProvider']);

      }
    );

  }

}
