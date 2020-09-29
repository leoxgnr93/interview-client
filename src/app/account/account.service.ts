import { Account } from './../shared/types/accout.mock';
import { ACCOUNTS } from '../mock/account.mock';
import { BaseService } from './../shared/base/base.service';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';



@Injectable()
export class AccountService extends BaseService {

    constructor() {
        super();
    }

    public getAllAccounts(): Observable<Account[]> {
        return of(ACCOUNTS).pipe(map(this.extractData),
            catchError((error) => this.handleError(error)));
    }
}
