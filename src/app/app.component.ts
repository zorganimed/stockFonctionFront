import { Component } from '@angular/core';
import { Etudiant } from './entities';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mzo';
  etds:Etudiant[]=[
  {nom:"ali",email:"ali@gmail.com",age:26},
  {nom:"med",email:"med@gmail.com",age:33}
];
nom:string="ahmed";

}
