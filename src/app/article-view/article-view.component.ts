import { Component, OnInit } from '@angular/core';
import { Article } from '../interfaces/article';
import { ActivatedRoute, Router } from '@angular/router'
import { NewsService } from '../services/news.service';


@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent implements OnInit {
  article!: Article;
  articleList!: Article[];
  message!: string;
  constructor(public route: ActivatedRoute, private NsService: NewsService) {
   }

   ngOnInit(): void {
    this.article = {
      id: this.route.snapshot.params['ArticleId'],
      title: this.route.snapshot.params['ArticleTitle'],
      subtitle: this.route.snapshot.params['ArticleSubtitle'],
      category: this.route.snapshot.params['ArticleCategory'],
      abstract: this.route.snapshot.params['ArticleAbstract'], 
      body: this.route.snapshot.params['ArticleBody'],
      image_data: this.route.snapshot.params['ArticleImage'],
      image_media_type: "",
      thumbnail_image: "",
      thumbnail_media_type: "",
      file_input: ""
    }

    // in app-routing.module.ts:   { path: 'articleView/:articleId/:articleTitle/:articleSubtitle/:articleBody/:articleAbstract/:articleImage', component: ArticleViewComponent },

  }
  

}



