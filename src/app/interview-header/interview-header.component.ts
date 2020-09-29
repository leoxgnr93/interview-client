import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../user/user.service';

@Component({
    selector: 'app-interview-header',
    templateUrl: './interview-header.component.html',
    styleUrls: ['./interview-header.component.css']
})
export class InterviewHeaderComponent implements OnInit {

    public isLoggedIn: boolean;

    constructor(private router: Router, private userService: UserService) {
    }

    public ngOnInit() {
        this.isLoggedIn = false;
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

    /**
     * @description Calls logout service to triggers observable action
     */
    public logout() {
        this.userService.logout();
        this.router.navigate(['login']);
    }
}
