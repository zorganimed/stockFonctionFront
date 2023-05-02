import { Component } from '@angular/core';
import { ProvidersService } from '../services/providers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-provider-update',
  templateUrl: './provider-update.component.html',
  styleUrls: ['./provider-update.component.css']
})
export class ProviderUpdateComponent {
  public id: any;
  public providerToUpdate: any;
  public name: any;
  public email: any;
  public adress: any;

  constructor(
    private serviceProviders: ProvidersService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    this.providerToUpdate = this.serviceProviders
    .getProvider(this.id)
    .subscribe((response: any) => {
      this.name = response['name'];
      this.email = response['email'];
      this.adress = response['adress'];
    });
}

updateProvider() {
  this.providerToUpdate = {
    name: this.name,
    email: this.email,
    adress: this.adress,
    id: this.id,
  };

  this.serviceProviders
    .updateProvider(this.providerToUpdate)
    .subscribe((response) => {
      console.log(response);
      this.router.navigate(['listProvider']);
    });
}
}
