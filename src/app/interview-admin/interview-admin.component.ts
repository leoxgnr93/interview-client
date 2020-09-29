import { UserService } from './../user/user.service';
import { User } from './../shared/types/user.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interview-admin',
  templateUrl: './interview-admin.component.html',
  styleUrls: ['./interview-admin.component.css']
})
export class InterviewAdminComponent implements OnInit {

  public userList: User[];
  constructor(private userService: UserService) {
    this.userList = [];
  }

  ngOnInit() {
    this.getUserList();
  }

  public getUserList(): void {
    this.userService.getAllUsers().subscribe((users: User[]) => {
      this.userList = users;
    });
  }
}
