import { Component, OnInit } from '@angular/core';
import { Article } from '../interfaces/article';
import { LoginService } from '../services/login.service';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  categoryList: string[]= ['All', 'National', 'Economy', 'Sports', 'Technology'];
  selectedCategory!: string;
  articleList!: Article[];
  article!: Article;

  constructor(public loginService: LoginService, public newsService: NewsService) { 
    this.selectedCategory= 'All';
    this.article = {
    id: 0,
    title: "",
    subtitle: "",
    category: "",
    abstract: "", 
    body: "",
    image_data: "",
    image_media_type: "",
    thumbnail_data: "",
    thumbnail_media_type: "",
    file_input: ""
    };

    this.articleList= [this.article];

  }

  ngOnInit(): void {
    this.getServerArticles();
    for (let article of this.articleList){
      console.log(article)
    }
  }

  getServerArticles(){
    this.newsService.getArticles().subscribe(list=>this.articleList= list);
  }
  
  setCategory(category:string){
    this.selectedCategory = category;
  }

  deleteArticle(article:Article){ //?????????????? TODO 
    let notification;
    this.newsService.deleteArticle(article).subscribe(i=>{
      notification = i
      console.log(i)
    });
    console.log(notification)
    this.getServerArticles();
  }


}
