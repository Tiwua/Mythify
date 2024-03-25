import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { UserService } from "../user/user.service";


@Injectable({ providedIn: "root" })
export class UserActivate  {

    constructor(private userService: UserService, private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): 
        boolean {
        if (!this.userService.isLogged) {

            this.router.navigate(['/home']); 
            return false;
        } 

        return true;
    }
}