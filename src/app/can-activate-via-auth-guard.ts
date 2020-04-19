import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import decode from 'jwt-decode';

@Injectable()

export class CanActivateViaAuthGuard implements CanActivate {
    constructor(private authService: AuthService, public router: Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        const expectedRole = route.data.expectedRole;
        //const token = localStorage.getItem('token');
        //const tokenPayload = decode(token);

        if(!this.authService.isLoggedIn() || expectedRole === 'admin') {
            this.router.navigate(['/login']);
        }
        return true;
    }
}
