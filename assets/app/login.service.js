import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
var LoginService = /** @class */ (function () {
    function LoginService(afAuth) {
        this.afAuth = afAuth;
        this.isLoggedin = false;
        this.username = '';
        this.imgUrl = '';
    }
    LoginService.prototype.loginGoogle = function () {
        console.log('Redirecting to Google login provider...');
        this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
    };
    LoginService.prototype.login = function (name, pwd) {
    };
    LoginService.prototype.loginFB = function () {
        console.log('Redirecting to Facebook login provider...');
        this.afAuth.auth.signInWithRedirect(new auth.FacebookAuthProvider());
    };
    LoginService.prototype.logout = function () {
        this.afAuth.auth.signOut();
        this.isLoggedin = false;
    };
    LoginService.prototype.getLoggedInUser = function () {
        // console.log(this.afAuth.authState);
        return this.afAuth.authState;
    };
    LoginService.prototype.setLoggedin = function (val) {
        this.isLoggedin = val;
    };
    LoginService.prototype.setUsername = function (val, url) {
        this.username = val;
        this.imgUrl = url;
        // console.log(url);
    };
    Object.defineProperty(LoginService.prototype, "isLoggedStatus", {
        get: function () {
            return this.isLoggedin;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginService.prototype, "getUsername", {
        get: function () {
            return this.username;
        },
        enumerable: true,
        configurable: true
    });
    LoginService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    LoginService.ctorParameters = function () { return [
        { type: AngularFireAuth, },
    ]; };
    return LoginService;
}());
export { LoginService };
