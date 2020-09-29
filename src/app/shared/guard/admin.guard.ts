import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, CanLoad } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserService } from './../../user/user.service';
import { Route } from '@angular/compiler/src/core';


@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate, CanLoad {
    constructor(
        private userService: UserService
    ) { }


    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const userInfo = this.userService.getLocalUserInfo();
        if (userInfo && userInfo.role === 'admin') {
          return true;
        }
        return false;
    }
    public canLoad(route: Route): boolean {
        const userInfo = this.userService.getLocalUserInfo();
        if (userInfo && userInfo.role === 'admin') {
          return true;
        }
        return false;
    }


}
