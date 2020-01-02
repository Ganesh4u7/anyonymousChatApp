import { Injectable } from "@angular/core";
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
var ChatService = /** @class */ (function () {
    function ChatService() {
        this.socket = io().connect({ reconnection: true, reconnectionAttempts: Infinity });
    }
    ChatService.prototype.ngOnInit = function () {
        this.socket.on('reconnect', function (attemptNumber) {
            console.log('Successfully Reconnected on Attempt:', attemptNumber);
        });
        this.socket.on('reconnect_error', function (error) {
            console.log('error occured:', error);
        });
        this.socket.on('reconnecting', function (attemptNumber) {
            console.log('Reconnection started Attempt :', attemptNumber);
        });
        this.socket.on('reconnect_failed', function () {
        });
    };
    ChatService.prototype.enterName = function (data) {
        this.socket.emit('enter', data);
    };
    ChatService.prototype.findPerson = function (data) {
        this.socket.emit('find', data);
        this.allowFind = false;
    };
    ChatService.prototype.newUserJoined = function () {
        var _this = this;
        var observable = new Observable(function (observer) {
            _this.socket.on('new user joined', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    ChatService.prototype.newUserEntered = function () {
        var _this = this;
        var observable = new Observable(function (observer) {
            _this.socket.on('new user entered', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    ChatService.prototype.foundPerson = function () {
        var _this = this;
        var observable = new Observable(function (observer) {
            _this.socket.on('found person', function (data) {
                observer.next(data);
                _this.allowFind = true;
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    ChatService.prototype.foundPersonName = function () {
        var _this = this;
        var observable = new Observable(function (observer) {
            _this.socket.on('found person name', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    ChatService.prototype.settingsSaveInfo = function () {
        var _this = this;
        var observable = new Observable(function (observer) {
            _this.socket.on('settings save info', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    ChatService.prototype.leaveRoom = function (data) {
        this.socket.emit('leave', data);
    };
    ChatService.prototype.signout = function (data) {
        this.socket.emit('signout', data);
    };
    ChatService.prototype.login = function (data) {
        this.socket.emit('login', data);
    };
    ChatService.prototype.signup = function (data) {
        this.socket.emit('signup', data);
    };
    ChatService.prototype.signupStatus = function () {
        var _this = this;
        var observable = new Observable(function (observer) {
            _this.socket.on('signupStatus', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    ChatService.prototype.loginStatus = function () {
        var _this = this;
        var observable = new Observable(function (observer) {
            _this.socket.on('loginStatus', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    ChatService.prototype.userLeftRoom = function () {
        var _this = this;
        var observable = new Observable(function (observer) {
            _this.socket.on('left room', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    ChatService.prototype.sendMessage = function (data) {
        this.socket.emit('message', data);
    };
    ChatService.prototype.newMessageReceived = function () {
        var _this = this;
        var observable = new Observable(function (observer) {
            _this.socket.on('new message', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    ChatService.prototype.leftMessage = function () {
        var _this = this;
        var observable = new Observable(function (observer) {
            _this.socket.on('left message', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    ChatService.prototype.userSettings = function (data) {
        this.socket.emit('userSettings', data);
    };
    ChatService.prototype.matchSettings = function (data) {
        this.socket.emit('matchSettings', data);
    };
    ChatService.prototype.keyPressNotification = function (data) {
        this.socket.emit('keyPress', data);
    };
    ChatService.prototype.typingMessage = function () {
        var _this = this;
        var observable = new Observable(function (observer) {
            _this.socket.on('typing message', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    ChatService.prototype.profilePicUpdate = function (data) {
        this.socket.emit('profilePicUpdate', data);
    };
    ChatService.prototype.toImageUpdate = function () {
        var _this = this;
        var observable = new Observable(function (observer) {
            _this.socket.on('to image update', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    ChatService.decorators = [
        { type: Injectable },
    ];
    return ChatService;
}());
export { ChatService };
