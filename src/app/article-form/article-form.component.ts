import { Component, OnInit, ViewChild } from '@angular/core';
import { Article } from '../interfaces/article';
import { NewsService } from '../services/news.service';
import { ActivatedRoute, Router } from '@angular/router'
import * as _ from 'lodash';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {

  article: Article;
  articleList!: Article[];
  @ViewChild('articleForm') articleForm: any;
  imageError!: string | null;
  isImageSaved!: boolean;
  cardImageBase64!: string; 

  constructor(public newsService: NewsService, public router: Router, public route: ActivatedRoute, private _sanitizer: DomSanitizer) {
    this.article = {
      title: "",
      subtitle: "",
      category: "",
      abstract: "",
      body: "",
      image_data: "",
      image_media_type: "",
      thumbnail_image: "",
      thumbnail_media_type: "",
      file_input: "" 
    };
    this.cardImageBase64;
    this.isImageSaved;
    this.article.image_media_type;
    this.article.image_data;
   }

  ngOnInit(): void {

    this.route.paramMap.subscribe(p => {
      const pid = p.get('articleId');
      if(pid != null){
        this.newsService.getArticle(+pid).subscribe(
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

  sendForm(article:Article): void {
    if(this.article.id == undefined ){
      this.newsService.createArticle(article).subscribe(
        article => {
          window.alert('The article has been created.');
          this.router.navigate(['/articleView/' + article.id]);
        },
        error => {
          window.alert('Error, the article has not been created.');
        },
        () => { 
          console.log('The article has been created');
        }
      );
    }
    else {
      this.newsService.updateArticle(article).subscribe(
        article => { 
          window.alert('The article has been updated.');
          this.router.navigate(['/articleView/' + article.id]);
        },
        error => { // Error treatment
          window.alert('Error, the article has not been updated.');
        },
        () => {
          console.log('The article has been updated');
        }
      );
    }

  }

  

  fileChangeEvent(fileInput: any) {
    this.imageError = null;
    if (fileInput.target.files && fileInput.target.files[0]) {
      // Size Filter Bytes
      const MAX_SIZE = 20971520;
      const ALLOWED_TYPES = ['image/png', 'image/jpeg'];

      if (fileInput.target.files[0].size > MAX_SIZE) {
        this.imageError =
          'Maximum size allowed is ' + MAX_SIZE / 1000 + 'Mb';
        return false;
      }
      if (!_.includes(ALLOWED_TYPES, fileInput.target.files[0].type)) {
        this.imageError = 'Only Images are allowed ( JPG | PNG )';
        return false;
      }
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          this.cardImageBase64 = e.target.result;
          this.isImageSaved = true;

          this.article.image_media_type = fileInput.target.files[0].type;
          const head = this.article.image_media_type.length + 13;
          this.article.image_data = e.target.result.substring(head, e.target.result.length);
          console.log(this.article);
          console.log("article");
        };
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
    return true;
  }


}
