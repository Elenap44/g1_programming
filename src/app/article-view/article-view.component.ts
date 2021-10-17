import { Component, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('articleForm') articleForm: any;

  constructor(public newsService: NewsService, public router: Router, public route: ActivatedRoute) {
    this.article = {
      id: 0, title: "", subtitle: "", category: "", abstract: "", body: "", image_data: "", image_media_type: "",
      thumbnail_image: "", thumbnail_media_type: "", file_input: "" 
    };
   }

   ngOnInit(): void {
    this.route.paramMap.subscribe(p => {
      const pId = p.get('articleId');
      if(pId != null){
        this.newsService.getArticle(+pId).subscribe(
          article => {
            this.article = article;
            this.article.file_input = this.article.image_data;
          },
          error => { 
          },
          () => { 
          }
        );
      }
    })
  }
}



  

  



