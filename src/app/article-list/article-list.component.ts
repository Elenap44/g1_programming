import { Component, OnInit } from '@angular/core';
import { Article } from '../interfaces/article';
import {Alert} from '../interfaces/alert'
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
  alerts!: Alert[];

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


    
    deleteArticle(article:Article) {
      if(confirm("Do you want to delete this article: " + article.title + " ?" )) {
        this.newsService.deleteArticle(article).subscribe(article => { 
            this.alerts.push({
              type: 'success',
              alertMessage: 'Article deleted',
            });
            this.getServerArticles(); },
            error => {
              this.alerts.push({
                type: 'danger',
                alertMessage: 'The article has not been deleted',
              });
              console.log('There was an error with the article, it has not been deleted');
              console.log(error);
              this.getServerArticles();
            },()=>{
              console.log('The article has been deleted');
            }
        );
      }
    }
  



}
