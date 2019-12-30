import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
var AuthGuard = /** @class */ (function () {
    function AuthGuard(service) {
        this.service = service;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.service.isLoggedStatus;
    };
    AuthGuard.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AuthGuard.ctorParameters = function () { return [
        { type: LoginService, },
    ]; };
    return AuthGuard;
}());
export { AuthGuard };
