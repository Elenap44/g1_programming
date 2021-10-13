import { Component, OnInit } from '@angular/core';
import { Article } from '../interfaces/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

imageError!: string;
isImageSaved!: boolean;
cardImageBase64!: string; 
article!: Article;

// * Function "fileChangeEvent", which reads the file introduced by the user, converts it into base64 and updates the following attributes: 
//
// this.cardImageBase64
// this.isImageSaved
// this.article.image_media_type 
// this.article.image_data

fileChangeEvent(fileInput: any) {
  this.imageError = 'yes';
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
        const imgBase64Path = e.target.result;
        this.cardImageBase64 = imgBase64Path;
        this.isImageSaved = true;

        this.article.image_media_type = fileInput.target.files[0].type;
        const head = this.article.image_media_type.length + 13;
        this.article.image_data = e.target.result.substring(head, e.target.result.length);

      };
    };
    reader.readAsDataURL(fileInput.target.files[0]);
  }
  return true;
}


}
