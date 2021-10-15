import { Component, OnInit } from '@angular/core';
import { Article } from '../interfaces/article';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
  article!: Article;
  constructor() { }

  ngOnInit(): void {
  }


}
