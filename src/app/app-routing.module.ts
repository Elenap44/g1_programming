import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from "./article-list/article-list.component";
import { ArticleViewComponent } from "./article-view/article-view.component";
import { ArticleFormComponent } from "./article-form/article-form.component";

const routes: Routes = [
  { path: '', redirectTo: '/articleList', pathMatch: 'full' },
  { path: 'articleList', component: ArticleListComponent },
  { path: 'articleView/:articleId', component: ArticleViewComponent },
  { path: 'articleForm/:articleId', component: ArticleFormComponent },
  { path: 'articleForm', component: ArticleFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


