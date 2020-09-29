import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { User } from './../shared/types/user.interface';
import { UserService } from './../user/user.service';
@Component({
    selector: 'app-interview-admin',
    templateUrl: './interview-admin.component.html',
    styleUrls: ['./interview-admin.component.css']
})
export class InterviewAdminComponent implements OnInit {

    public userList: User[];
    public displayedColumns: string[];
    public selectedUser: User;
    constructor(private userService: UserService) {
        this.selectedUser = undefined;
        this.userList = [];
        this.displayedColumns = ['id', 'name', 'accounts', 'action'];
    }

    public ngOnInit() {
        this.getUserList();
    }

    /**
     * @description Gets all available users list
     */
    public getUserList(): void {
        this.userService.getAllUsers().subscribe((users: User[]) => {
            this.userList = users;
        });
    }

    /**
     * @description - Sets selected user for client's click
     * @param {User} user Selected user
     */
    public selectUserToAssignAccount(user: User): void {
        this.selectedUser = user;
    }

    /**
     * @description interview-assign-account component output callback
     * @param {Account} account Selected account
     */
    public successAssign(account: Account): void {
        this.selectedUser.accounts.push(account);
        this.selectedUser = undefined;
    }
}
