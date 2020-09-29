import * as _ from 'lodash';
import { BaseService } from './../shared/base/base.service';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { MOCK_USERS } from '../mock/users.mock';
import {
    Observable,
    of,
    Subject,
    throwError
} from 'rxjs';
import { User } from './../shared/types/user.interface';


@Injectable()
export class UserService extends BaseService {

    private isLoggedInSubject: Subject<boolean>;
    private logoutSubject: Subject<boolean>;

    constructor() {
        super();
        this.isLoggedInSubject = new Subject<boolean>();
        this.logoutSubject = new Subject<boolean>();
    }

    /**
     * @description Gets user info stored in localstorage
     * @returns User info stored in localstorage
     */
    public getLocalUserInfo(): User {
        let userInfo = JSON.parse(localStorage.getItem(environment.USER_KEY));
        if (!userInfo) {
            userInfo = undefined;
        }
        return userInfo;
    }

    /**
     * @description - Sets user's data into localstorage
     */
    public setUserData(userData: User): User {
        const body = userData;
        localStorage.setItem(environment.USER_KEY, JSON.stringify(body));
        return body;
    }

    /**
     * @description Performs user login whithing username and password
     * @param {string} username
     * @param {string} password
     * @returns {Observable<User>} User matching username and password
     */
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

    /**
     * @description Remove user info from localstorage
     */
    public logout(): void {
        localStorage.removeItem(environment.USER_KEY);
        this.logoutSubject.next(true);
    }

    /**
     * @description Handles login user data sets response into localstorage
     * @param response - Reponse from api (mock)
     * @returns {User} - logged in user
     */
    public extractUserData(response: any): User {
        const body = response;
        localStorage.setItem(environment.USER_KEY, JSON.stringify(body));
        return body;
    }

    /**
     * @description checks whether loggedin user has admin role
     * @returns {boolean} true | false
     */
    public hasAdminRole(): boolean {
        let hasAdminRole = false;
        const userData: User = this.getLocalUserInfo();
        if (userData && userData.role === 'admin') {
            hasAdminRole = true;
        }
        return hasAdminRole;
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

    /**
     * @description Gets all users available (mocking api call)
     * @returns {Observable<User[]>} All available users
     */
    public getAllUsers(): Observable<User[]> {
        return of(MOCK_USERS).pipe(map(this.extractData),
            catchError((error) => this.handleError(error)));
    }
}
