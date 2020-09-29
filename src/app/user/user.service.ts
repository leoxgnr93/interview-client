import { User } from './../shared/types/user.interface';
import { map, catchError } from 'rxjs/operators';
import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MOCK_USERS } from '../mock/users.mock';
import { of, Observable, throwError, Subject } from 'rxjs';


@Injectable()
export class UserService {

    private isLoggedInSubject: Subject<boolean>;
    private logoutSubject: Subject<boolean>;

    constructor() {
        this.isLoggedInSubject = new Subject<boolean>();
        this.logoutSubject = new Subject<boolean>();
    }

    /**
     * @description Checks the userinfo in localstorage
     */
    public getLocalUserInfo(): User {
        let userInfo = JSON.parse(localStorage.getItem(environment.USER_KEY));
        if (!userInfo) {
            userInfo = undefined;
        }
        return userInfo;
    }

    public setUserData(userData: User): User {
        const body = userData;
        localStorage.setItem(environment.USER_KEY, JSON.stringify(body));
        return body;
    }

    public login(username: string, password: string): Observable<User> {
        const foundUser: User = _.find(MOCK_USERS, (user: any) => {
            return user.username === username && user.password === password;
        });
        if (!foundUser) {
            return throwError('User not found');
        }
        return of(foundUser).pipe(map(this.extractUserData),
            catchError((error) => this.handleError(error)));

    }

    public logout(): void {
        localStorage.removeItem(environment.USER_KEY);
        this.logoutSubject.next(true);
    }

    public extractUserData(response: any): User {
        const body = response;
        localStorage.setItem(environment.USER_KEY, JSON.stringify(body));
        return body;
    }

    public handleError(error: Response | any) {
        let errMsg: string;
        if (!(error._body instanceof ProgressEvent)) {
            const body = error || '';
            errMsg = body;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        return throwError(errMsg);
    }

    public hasAdminRole(): boolean {
        let hasAdminRole = false;
        const userData: User = this.getLocalUserInfo();
        if (userData && userData.role === 'admin') {
            hasAdminRole = true;
        }
        return hasAdminRole;
    }

    public extractData(response: any): User[] {
        const body = response;
        return body;
    }
    public getLoggedInSubject(): Observable<any> {
        return this.isLoggedInSubject.asObservable();
    }

    public setLoggedInStatus(status: boolean) {
        this.isLoggedInSubject.next(status);
    }

    public getLogoutSubject(): Observable<boolean> {
        return this.logoutSubject.asObservable();
    }

    public getAllUsers(): Observable<User[]> {
        return of(MOCK_USERS).pipe(map(this.extractData),
            catchError((error) => this.handleError(error)));
    }
}
