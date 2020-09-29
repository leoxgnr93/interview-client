import { UserService } from './user/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  public isLoggedIn: boolean;
  constructor(private router: Router, private userService: UserService) {
  }

  public ngOnInit() {
    this.navigateTo(['login']);
    this.userService.getLoggedInSubject()
      .subscribe((status: boolean) => {
        if (status) {
          this.isLoggedIn = status;
        }
      });
    this.userService.getLogoutSubject()
      .subscribe((status: boolean) => {
        this.isLoggedIn = false;
      });
  }

  public navigateTo(routerLink: Array<string>): void {
    this.router.navigate(routerLink);
  }

  public logout() {
    this.userService.logout();
    this.navigateTo(['login']);
  }

}
