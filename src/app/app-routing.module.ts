import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ProviderAddComponent } from './provider-add/provider-add.component';
import { ProviderListComponent } from './provider-list/provider-list.component';
import { ProviderUpdateComponent } from './provider-update/provider-update.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleUpdateComponent } from './article-update/article-update.component';
import { ArticleAddComponent } from './article-add/article-add.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'app-navbar' },
  { path: 'contact', component: ContactComponent },
  { path: 'addProvider', component: ProviderAddComponent },
  { path: 'updateProvider/:id', component: ProviderUpdateComponent },
  { path: 'listProvider', component: ProviderListComponent },
  { path: 'listArticle', component: ArticleListComponent },
  { path: 'updateArticle', component: ArticleUpdateComponent },
  { path: 'addArticle', component: ArticleAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
