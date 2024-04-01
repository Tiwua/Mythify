import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { UserService } from "../user/user.service";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class UserActivate implements CanActivate {

    constructor(private userService: UserService, private router: Router) {}

    canActivate(): boolean {            
        if (this.userService.isLogged) {
            this.router.navigate(['/home']);
            return false;
        } else {
          return true;
        }
    }
}
