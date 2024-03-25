import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { UserService } from "../user/user.service";


@Injectable({ providedIn: 'root' })
export class AuthActivate {

    constructor(private userService: UserService, private router: Router){}

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): 
        boolean {
          this.router.navigate(['/login']);
          return this.userService.isLogged; 
    }
}