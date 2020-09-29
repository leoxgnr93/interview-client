import { UserService } from './../user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interview-shared',
  templateUrl: './interview-shared.component.html',
  styleUrls: ['./interview-shared.component.css']
})
export class InterviewSharedComponent implements OnInit {

  constructor(private userService: UserService) { }

  public ngOnInit() {
  }

  public hasPermissionOverModule(): boolean {
    return this.userService.hasAdminRole();
  }
}
