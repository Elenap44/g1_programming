import { Component, OnInit, ViewChild } from '@angular/core';
import { Article } from '../interfaces/article';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {

  article: Article;
  @ViewChild('articleForm') articleForm: any;

  constructor() {
    this.article = {
      id: "",
      image_media_type: "",
      image_data: "",
      image: "",
      title: "",
      subtitle: "",
      category: "",
      abstract: "",
      body: ""
    };
   }

  ngOnInit(): void {
  }

}
