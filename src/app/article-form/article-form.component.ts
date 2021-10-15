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
      id: 0,
      image_media_type: "",
      image_data: "",
      title: "",
      subtitle: "",
      category: "",
      abstract: "",
      body: "",
      thumbnail_image: "",
      thumbnail_image_type: "",
      file_input: ""
    };
   }

  ngOnInit(): void {
  }

}
