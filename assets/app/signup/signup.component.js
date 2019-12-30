import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { ChatService } from "../chat.service";
var SignupComponent = /** @class */ (function () {
    function SignupComponent(route, router, service, chatService) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.chatService = chatService;
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getLoggedInUser()
            .subscribe(function (user) {
            if (user) {
                console.log(user);
                _this.user = user;
                // this.router.navigate(['/chat']);
                // this.service.setLoggedin(true);
                // this.service.setUsername(user.displayName);
                // this.router.navigate(['/chat']);
                // this.service.setLoggedin(true);
                // this.service.setUsername(user.displayName);
                _this.chatService.enterName(user.displayName);
            }
        });
    };
    SignupComponent.prototype.loginGoogle = function () {
        console.log('Login..');
        // this.service.login();
    };
    SignupComponent.prototype.loginFB = function () {
        console.log("Login..");
        this.service.loginFB();
    };
    SignupComponent.prototype.logout = function () {
        this.service.logout();
    };
    SignupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-login',
                    templateUrl: './signup.component.html',
                    styleUrls: ['./signup.component.css']
                },] },
    ];
    /** @nocollapse */
    SignupComponent.ctorParameters = function () { return [
        { type: ActivatedRoute, },
        { type: Router, },
        { type: LoginService, },
        { type: ChatService, },
    ]; };
    return SignupComponent;
}());
export { SignupComponent };
