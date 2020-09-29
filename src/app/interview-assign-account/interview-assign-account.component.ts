import * as _ from 'lodash';
import { Account } from '../shared/types/accout.mock';
import { AccountService } from './../account/account.service';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChange
} from '@angular/core';
import { User } from './../shared/types/user.interface';

@Component({
  selector: 'app-interview-assign-account',
  templateUrl: './interview-assign-account.component.html',
  styleUrls: ['./interview-assign-account.component.css']
})
export class InterviewAssignAccountComponent implements OnInit, OnChanges {

  @Input()
  public user: User;
  @Output()
  public successAssign: EventEmitter<Account> = new EventEmitter<Account>();

  public availableAccounts: Account[];
  public displayedColumns: string[];
  constructor(private accountService: AccountService) {
    this.displayedColumns = [];
    this.availableAccounts = [];
  }

  ngOnInit() {
    this.getAllAccounts();
    this.displayedColumns = ['id', 'name', 'action'];
  }

  /**
   * @description - Checks for input changes
   * @param {{ [propName: string]: SimpleChange }} changes Simple input changes
   */
  public ngOnChanges(changes: { [propName: string]: SimpleChange }): void {
    this.user = changes.user.currentValue;
  }

  /**
   * @description Calls for available accounts
   */
  public getAllAccounts() {
    this.accountService.getAllAccounts().subscribe((accounts: Account[]) => {
      this.availableAccounts = accounts;
    });
  }

  /**
   * @description - Emits selected account to parent component
   * @param {Account} account Selected account
   */
  public assignAccount(account: Account) {
    this.successAssign.emit(account);
  }

  /**
   * @description Checks wether user already has selected account
   * @param {Account} account - account
   * @returns {boolean} true | false
   */
  public alreadyAssignedAccount(account: Account): boolean {
    let alreadyAssigned = false;
    if (_.includes(this.user.accounts, account)) {
      alreadyAssigned = true;
    }
    return alreadyAssigned;
  }

  public close() {
    this.user = undefined;
  }
}
