import { Component, OnInit } from '@angular/core';
import {User} from '../interfaces/user';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  user!: User;

  constructor() {
    this.user = {username: "", password: "", firstName: ""};
   }

  ngOnInit(): void {
  }

}
