import { Component, OnInit } from '@angular/core';
import {User} from '../interfaces/user';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  user!: User;
  username!: string;
  password!: string;

  constructor() { }

  ngOnInit(): void {
    
  }

}
