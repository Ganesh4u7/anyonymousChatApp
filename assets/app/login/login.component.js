import { Component, ViewChild } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from "../chat.service";
import { FormControl, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { AngularFireDatabase } from "@angular/fire/database";
import { ImageCropperComponent, CropperSettings } from 'ng2-img-cropper';
import * as firebase from 'firebase';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, service, chatService, http, db) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.service = service;
        this.chatService = chatService;
        this.http = http;
        this.db = db;
        this.file = 0;
        this.width = 0;
        this.height = 0;
        this.NoImageUrl = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
        this.loginStatus = true;
        this.data2 = false;
        this.cropperSettings = new CropperSettings();
        this.cropperSettings.width = 100;
        this.cropperSettings.height = 100;
        this.cropperSettings.croppedWidth = 300;
        this.cropperSettings.croppedHeight = 300;
        this.cropperSettings.canvasWidth = 250;
        this.cropperSettings.canvasHeight = 250;
        this.cropperSettings.noFileInput = true;
        this.cropperSettings.rounded = false;
        // this.cropperSettings.keepAspect = false;
        this.cropperSettings.preserveSize = true;
        this.cropperSettings.allowedFilesRegex = /\.(jpe?g|png|gif|.JPG|.JPE?G)$/i;
        this.cropperSettings.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
        this.cropperSettings.cropperDrawSettings.strokeWidth = 2;
        this.data1 = {};
        this.FeaturedPhotoStream = this.db.object('/photos');
        this.chatService.signupStatus().subscribe(function (data) {
            // console.log(data);
            if (data.success == true) {
                _this.router.navigate(['/chat']);
                _this.service.setLoggedin(true);
                _this.service.setUsername(data.username, data.url);
            }
            else {
                _this.errMsg = 'Username Taken ,Please Try with another name';
            }
        });
        this.chatService.loginStatus().subscribe(function (data) {
            // console.log(data.success)
            var data = data;
            if (data.success == true) {
                _this.router.navigate(['/chat']);
                _this.service.setLoggedin(true);
                var Url = '';
                firebase.database().ref('photos/' + data.username).once('value').then(function (snapshot) {
                    _this.imgUrl = snapshot.val();
                });
                _this.service.setUsername(data.username, data.url);
            }
            else {
                _this.loginStatus = false;
            }
        });
    }
    LoginComponent.prototype.cropped = function (bounds) {
        this.croppedHeight = bounds.bottom - bounds.top;
        this.croppedWidth = bounds.right - bounds.left;
    };
    LoginComponent.prototype.fileChangeListener = function ($event) {
        this.data2 = true;
        var image = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            image.onload = function () {
                that.cropper.setImage(image);
            };
            image.src = loadEvent.target.result;
        };
        myReader.readAsDataURL(file);
    };
    //  this.loginForm = new FormGroup({
    //   username: new FormControl(),
    //   pwd: new FormControl()
    // });
    //  this.loginForm = new FormGroup({
    //   username: new FormControl(),
    //   pwd: new FormControl()
    // });
    LoginComponent.prototype.ngOnInit = 
    //  this.loginForm = new FormGroup({
    //   username: new FormControl(),
    //   pwd: new FormControl()
    // });
    function () {
        this.signupForm = new FormGroup({
            username: new FormControl(null),
            pwd: new FormControl(null),
            cpwd: new FormControl(null),
            email: new FormControl(null),
            gender: new FormControl(null),
            dob: new FormControl(null)
        });
        this.loginForm = new FormGroup({
            username: new FormControl(null),
            pwd: new FormControl(null)
        });
        // this.service.getLoggedInUser()
        //   .subscribe(user => {
        //     if (user) {
        //
        //       // console.log(user);
        //       this.user = user;
        //
        //       if(user) {
        //
        //         this.chatService.login({name:user.displayName,email:user.email});
        //         this.router.navigate(['/chat']);
        //         this.service.setLoggedin(true);
        //         this.service.setUsername(user.displayName);
        //       }
        //     }
        //   })
    };
    // loginGoogle(){
    //   console.log('Login..');
    //   this.service.login();
    //
    //
    // }
    // loginGoogle(){
    //   console.log('Login..');
    //   this.service.login();
    //
    //
    // }
    LoginComponent.prototype.loginFB = 
    // loginGoogle(){
    //   console.log('Login..');
    //   this.service.login();
    //
    //
    // }
    function () {
        console.log("Login..");
        this.service.loginFB();
    };
    LoginComponent.prototype.logout = function () {
        this.service.logout();
    };
    LoginComponent.prototype.onLogin = function () {
        var name = this.loginForm.value.username;
        var pwd = this.loginForm.value.pwd;
        this.chatService.login({ username: name, password: pwd });
    };
    LoginComponent.prototype.onSignUp = function () {
        var _this = this;
        if (this.signupForm.value.pwd == this.signupForm.value.cpwd) {
            this.passCheck = true;
            var data = JSON.stringify(this.signupForm.value);
            var username = this.signupForm.value.username;
            var email = this.signupForm.value.email;
            var pwd = this.signupForm.value.pwd;
            var dob = this.signupForm.value.dob;
            var gender = this.signupForm.value.gender;
            // console.log(username);
            // console.log(this.passCheck);
            if (this.data1 && this.data1.image) {
                var file = this.data1.image;
                var metaData = { contentType: 'image/jpeg' };
                var downloadUrl;
                console.log(file);
                var storageRef = firebase.storage().ref('photos/' + username);
                storageRef.putString(this.data1.image.split(/,(.+)/)[1], 'base64', metaData).then(function (snapshot) {
                    snapshot.ref.getDownloadURL().then(function (url) {
                        // console.log('Url:' + url);
                        downloadUrl = url;
                        //console.log(downloadUrl);
                        firebase.database().ref('photos/' + username).set(downloadUrl);
                        _this.chatService.signup({ username: username, email: email, password: pwd, gender: gender, dob: dob, url: downloadUrl });
                        //console.log(downloadUrl);
                        //this.chatService.signup({username: username ,email:email,password :pwd,url:downloadUrl});
                    });
                });
            }
            else {
                console.log(dob);
                this.chatService.signup({ username: username, email: email, password: pwd, gender: gender, dob: dob, url: this.NoImageUrl });
            }
        }
        else {
            this.passCheck = false;
        }
    };
    LoginComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-login',
                    templateUrl: './login.component.html',
                    styleUrls: ['./login.component.css']
                },] },
    ];
    /** @nocollapse */
    LoginComponent.ctorParameters = function () { return [
        { type: ActivatedRoute, },
        { type: Router, },
        { type: LoginService, },
        { type: ChatService, },
        { type: HttpClient, },
        { type: AngularFireDatabase, },
    ]; };
    LoginComponent.propDecorators = {
        "cropper": [{ type: ViewChild, args: ['cropper', undefined,] },],
    };
    return LoginComponent;
}());
export { LoginComponent };
