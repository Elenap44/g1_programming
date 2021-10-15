import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../services/login.service';
import { User } from '../interfaces/user'



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  user!: User;
  @ViewChild('loginForm') loginForm: any;

  constructor(public loginService: LoginService ) {
    this.user = {
      username: "DEV_TEAM_01",
      password: "123401"
    };
   }

  ngOnInit(): void {
  }

  login() {
    this.loginService.login(this.user.username, this.user.password).subscribe(
      () => {
        console.log('User login');
      },
      err => {
        console.log('Error');
      }
    )
  }

}
