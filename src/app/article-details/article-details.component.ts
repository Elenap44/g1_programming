import { Component, OnInit } from '@angular/core';
import { Article } from '../interfaces/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleDetailsComponent implements OnInit {
  article!: Article;
  constructor() { }

  ngOnInit(): void {
  }


}
