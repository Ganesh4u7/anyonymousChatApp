import { Component, ViewChild } from '@angular/core';
import { ChatService } from "../chat.service";
import { FormControl, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";
import { AngularFireDatabase } from "@angular/fire/database";
import { LoginService } from "../login.service";
import * as firebase from 'firebase';
import { ImageCropperComponent, CropperSettings } from 'ng2-img-cropper';
import { ChatboxComponent } from "../chatbox/chatbox.component";
var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(route, router, http, chatService, loginService, db, chatComponent) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.http = http;
        this.chatService = chatService;
        this.loginService = loginService;
        this.db = db;
        this.chatComponent = chatComponent;
        this.settingsBol = false;
        this.file = 0;
        this.imgUrl = this.chatComponent.imgUrl;
        this.settingsForm = new FormGroup({
            age: new FormControl(),
            gender: new FormControl(),
            language: new FormControl()
        });
        this.userSettingsForm = new FormGroup({
            language: new FormControl()
        });
        this.cropperSettings = new CropperSettings();
        this.cropperSettings.width = 100;
        this.cropperSettings.height = 100;
        this.cropperSettings.croppedWidth = 300;
        this.cropperSettings.croppedHeight = 300;
        this.cropperSettings.canvasWidth = 250;
        this.cropperSettings.canvasHeight = 200;
        this.cropperSettings.noFileInput = true;
        this.data1 = {};
        this.chatService.settingsSaveInfo()
            .subscribe(function (data) {
            _this.settingsBol = true;
            _this.settingsSaveBol = data.status;
            _this.settingsSaveMessage = data.message;
        });
    }
    SettingsComponent.prototype.fileChangeListener = function ($event) {
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
    SettingsComponent.prototype.onFileSelected = function (event) {
        var file = event.target.files[0];
        this.file = 1;
        this.selectedFile = file;
    };
    SettingsComponent.prototype.onSettings = function () {
        var username = this.loginService.getUsername;
        var age = this.settingsForm.value.age;
        var gender = this.settingsForm.value.gender;
        var language = this.settingsForm.value.language;
        this.settingsBol = false;
        console.log(this.settingsForm.value);
        this.chatService.matchSettings({ username: username, gender: gender, age: age, language: language });
    };
    SettingsComponent.prototype.onUserSettings = function () {
        var _this = this;
        var username = this.loginService.getUsername;
        var language = this.userSettingsForm.value.language;
        this.settingsBol = false;
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
                    _this.chatService.userSettings({ username: username, language: language, url: downloadUrl });
                    console.log(downloadUrl);
                    _this.imgUrl = downloadUrl;
                    _this.chatComponent.imgUrl = downloadUrl;
                    if (_this.chatComponent.chatDataBol == true) {
                        var to = _this.chatComponent.FPid;
                        _this.chatService.profilePicUpdate({ to: to, url: downloadUrl });
                    }
                });
            });
        }
        else {
            this.chatService.userSettings({ username: username, language: language, url: this.imgUrl });
        }
    };
    SettingsComponent.prototype.userSettings = function () {
        document.getElementById('matchSettings').style.display = 'none';
        document.getElementById('userSettings').style.display = 'block';
        document.getElementsByClassName('userS')[0].classList.add('active');
        document.getElementsByClassName('matchS')[0].classList.remove('active');
        document.getElementsByTagName('a')[0].style.color = '#FFFFFF';
        document.getElementsByTagName('a')[1].style.color = '#32465a';
    };
    SettingsComponent.prototype.matchSettings = function () {
        document.getElementById('matchSettings').style.display = 'block';
        document.getElementById('userSettings').style.display = 'none';
        document.getElementsByClassName('matchS')[0].classList.add('active');
        document.getElementsByClassName('userS')[0].classList.remove('active');
        document.getElementsByTagName('a')[0].style.color = '#32465a';
        document.getElementsByTagName('a')[1].style.color = '#FFFFFF';
    };
    SettingsComponent.prototype.back = function () {
        if (this.chatComponent.chatDataBol == true) {
            this.chatComponent.chatData = 1;
        }
        else {
            this.chatComponent.chatData = 0;
        }
    };
    SettingsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-settings',
                    templateUrl: './settings.component.html',
                    styleUrls: ['./settings.component.css']
                },] },
    ];
    /** @nocollapse */
    SettingsComponent.ctorParameters = function () { return [
        { type: ActivatedRoute, },
        { type: Router, },
        { type: HttpClient, },
        { type: ChatService, },
        { type: LoginService, },
        { type: AngularFireDatabase, },
        { type: ChatboxComponent, },
    ]; };
    SettingsComponent.propDecorators = {
        "cropper": [{ type: ViewChild, args: ['cropper', undefined,] },],
    };
    return SettingsComponent;
}());
export { SettingsComponent };
