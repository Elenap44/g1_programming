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

  categoryList: string[]= ['All', 'National', 'Sports', 'Technology', 'Economy'];
  selectedCategory!: string;
  articleList!: Article[];
  article!: Article;
  alerts!: Alert[];

  constructor(public newLogInService: LoginService, public newNewsService:NewsService) { 
    this.selectedCategory= 'All';
    
    this.article = {
      
    id: 0,
    image_media_type: "",
    image_data: "",
    title: "",
    subtitle: "",
    abstract: "", 
    body: "",
    category: "",
    thumbnail_image: "",
    thumbnail_image_type: "",
    file_input: ""
    }
    this.articleList= [this.article];

  }

  ngOnInit(): void {
    this.getServerArticles();
    for (let article of this.articleList){
      console.log(this.article)
    }
  }


  getServerArticles(){
    this.newNewsService.getArticles().subscribe(list=>this.articleList= list);
  }
  
  setCategory(category:string){
    this.selectedCategory = category;
  }

  deleteArticle(article:Article){
    if(confirm("Do you want to delete this article?")){
      this.newNewsService.deleteArticle(article).subscribe(article=>{this.alerts.push({
        alertMessage:'Article deleted' });
      this.getServerArticles()},
      error=>{
        this.alerts.push({
          
        })
      }

    }
  }


}
