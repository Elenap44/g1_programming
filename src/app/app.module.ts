import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticleFormComponent } from './article-form/article-form.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ArticleViewComponent } from './article-view/article-view.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { CategoryPipe } from './pipes/category.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ArticleDetailsComponent,
    ArticleFormComponent,
    MainPageComponent,
    ArticleViewComponent,
    ArticleListComponent,
    CategoryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
