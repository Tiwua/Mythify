import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "../user/user.service";


@Injectable({ providedIn: 'root' })
export class AuthActivate {

    constructor(private userService: UserService, private router: Router){}

    canActivate(): boolean {
        if (this.userService.isLogged) {
          return true;
        } else {
          this.router.navigate(['/user/login']);
          return false;
        }
    }
}