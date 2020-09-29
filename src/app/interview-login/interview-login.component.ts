import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './../user/user.service';


@Component({
  selector: 'app-interview-login',
  templateUrl: './interview-login.component.html',
  styleUrls: ['./interview-login.component.css']
})
export class InterviewLoginComponent implements OnInit {

  public loginForm: FormGroup;
  public messages: any;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.messages = [];
  }

  public ngOnInit() {
    this.initializeLoginForm();
    this.validateLoggedIn();
  }

  public initializeLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
    });
  }

  public login() {
    const username = this.loginForm.controls.username.value;
    const password = this.loginForm.controls.password.value;
    this.userService.login(username, password).subscribe((user: any) => {
      this.userService.setLoggedInStatus(true);
      this.router.navigate(['shared']);
    }, (error: any) => {
      console.log('error :>> ', error);
    });
  }

  public validateLoggedIn() {
    const userInfo = this.userService.getLocalUserInfo();
    if (userInfo != null && userInfo !== undefined) {
      if (userInfo !== null) {
        this.router.navigate(['shared']);
      }
    }
  }

}
