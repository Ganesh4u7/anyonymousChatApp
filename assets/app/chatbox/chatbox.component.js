import { Component, ElementRef, ViewChild } from "@angular/core";
import { ChatService } from "../chat.service";
import { LoginService } from "../login.service";
import { Router } from "@angular/router";
import { AngularFireDatabase } from "@angular/fire/database";
var ChatboxComponent = /** @class */ (function () {
    function ChatboxComponent(_chatService, router, loginService, db) {
        var _this = this;
        this._chatService = _chatService;
        this.router = router;
        this.loginService = loginService;
        this.db = db;
        this.allow = false;
        this.users = [];
        this.messageText = '';
        this.chatData = 0;
        this.chatDataBol = false;
        this.msgData = 0;
        this.leftMessage1 = { user: '', message: '' };
        this.leftMessage = 'Please Click on Find Person to start chatting';
        this.toggle = true;
        this.typing = false;
        this.messageArray = [];
        this.allowFind = this._chatService.allowFind;
        this._chatService.newUserJoined()
            .subscribe(function (data) { return _this.messageArray.push(data); });
        this._chatService.newUserEntered()
            .subscribe(function (data) { return _this.users = data; });
        this._chatService.foundPerson()
            .subscribe(function (data) {
            _this.chatDetails = data;
            _this.chatData = 1;
            _this.chatDataBol = true;
            _this.messageArray = [];
            _this.FPname = data.to.name;
            _this.FPgender = data.to.gender;
            _this.FPage = data.to.age;
            _this.FPid = data.to.id;
            _this.FPlanguage = data.to.language;
            _this.FPimgUrl = data.to.url;
            _this.FPurl = data.to.url;
            // console.log(data.to);
        });
        this._chatService.afterReconnect()
            .subscribe(function (data) {
            _this.chatDetails = data;
            _this.chatData = 1;
            _this.chatDataBol = true;
            _this.FPname = data.to.name;
            _this.FPgender = data.to.gender;
            _this.FPage = data.to.age;
            _this.FPid = data.to.id;
            _this.FPlanguage = data.to.language;
            _this.FPimgUrl = data.to.url;
            _this.FPurl = data.to.url;
            // console.log(data.to);
        });
        this._chatService.foundPersonName()
            .subscribe(function (data) { return _this.messageArray.push(data); });
        this._chatService.userLeftRoom()
            .subscribe(function (data) {
            _this.messageArray.push(data);
            _this.chatDetails = {};
        });
        this._chatService.newMessageReceived()
            .subscribe(function (data) {
            _this.messageArray.push(data);
            _this.msgData = 1;
            // console.log(data);
        });
        this._chatService.leftMessage()
            .subscribe(function (data) {
            _this.messageArray = [];
            _this.msgData = 0;
            _this.messageArray.push(data);
            _this.leftMessage1 = data;
            _this.chatDetails = {};
            _this.chatDataBol = false;
            _this.chatData = 0;
        });
        this._chatService.typingMessage()
            .subscribe(function (data) {
            if (_this.chatData == 1) {
                _this.typing = true;
                document.getElementById('typing').style.display = "block";
                setTimeout(function () {
                    this.typing = false;
                    // console.log(this.typing);
                    document.getElementById('typing').style.display = "none";
                }, 2000);
            }
        });
        this._chatService.toImageUpdate()
            .subscribe(function (data) {
            _this.chatDetails.to.url = data.url;
            _this.FPimgUrl = data.url;
            _this.FPurl = data.url;
        });
        this._chatService.connectionLostMessage()
            .subscribe(function (data) {
            alert(data.from + "'s " + data.message);
        });
    }
    ChatboxComponent.prototype.ngOnInit = function () {
        this.user = this.loginService.username;
        this.imgUrl = this.loginService.imgUrl;
        this._chatService.enterName({ user: this.user });
        this.scrollToBottom();
    };
    ChatboxComponent.prototype.ngOnDestroy = function () {
        // if(this.chatData == 1) {
        //   const toName= this.chatDetails.to.name;
        //   const fromName= this.chatDetails.from.name;
        //   const to= this.chatDetails.to.id;
        //   const from= this.chatDetails.from.id;
        //   this.allowFind=false;
        //
        //
        //   this._chatService.leaveRoom({user:this.user,chatData:1,to:to,from:from, toName:toName,fromName:fromName, room:this.room});
        //
        // }
        // else if(this.chatData == 0){
        //   this._chatService.signout({user:this.user,chatData:0})
        // }
        // this._chatService.reconnect();
        if (this.chatData == 1) {
            var toName = this.chatDetails.to.name;
            var fromName = this.chatDetails.from.name;
            var to = this.chatDetails.to.id;
            var from = this.chatDetails.from.id;
            this._chatService.connectionLost({ user: this.user, chatData: 1, to: to, from: from, toName: toName, fromName: fromName });
        }
    };
    ChatboxComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    ChatboxComponent.prototype.toggleSidebar = function () {
        if (this.toggle == false) {
            this.toggle = true;
            document.getElementsByClassName('content')[0]['style'].width = 'calc(100% - 58px)';
            // document.getElementsByClassName('content')[0].style.position = 'relative';
            // document.getElementById('sidepanel').style.position = 'absolute';
            document.getElementById('sidepanel').style.width = '58px';
            document.getElementsByClassName('profileDetails')[0]['style'].display = 'none';
        }
        else if (this.toggle == true) {
            this.toggle = false;
            document.getElementsByClassName('content')[0]['style'].width = '50%';
            document.getElementById('sidepanel').style.width = '50%';
            // document.getElementById('sidepanel').style.width = '53px';
            document.getElementsByClassName('profileDetails')[0]['style'].display = 'block';
        }
        // document.getElementsByClassName("sidebar")[0].classList.toggle('active');
        //
        // document.getElementsByClassName("content")[0].classList.toggle('active');
    };
    ChatboxComponent.prototype.zoomImg = function (data) {
        // console.log('ZOOM IN');
        document.getElementById('myModal').style.display = 'block';
        if (data == 1) {
            document.getElementById('img01').src = this.imgUrl;
        }
        else if (data == 2) {
            document.getElementById('img01').src = this.FPimgUrl;
        }
    };
    ChatboxComponent.prototype.closeImg = function () {
        document.getElementById('myModal').style.display = 'none';
    };
    ChatboxComponent.prototype.scrollToBottom = function () {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    ChatboxComponent.prototype.find = function () {
        this._chatService.findPerson({ user: this.user });
    };
    ChatboxComponent.prototype.leave = function () {
        if (this.toggle == false) {
            this.toggle = true;
            document.getElementsByClassName('content')[0]['style'].width = 'calc(100% - 58px)';
            document.getElementById('sidepanel').style.width = '58px';
            document.getElementsByClassName('profileDetails')[0]['style'].display = 'none';
        }
        var toName = this.chatDetails.to.name;
        var fromName = this.chatDetails.from.name;
        var to = this.chatDetails.to.id;
        var from = this.chatDetails.from.id;
        this.allowFind = false;
        this._chatService.leaveRoom({ user: this.user, to: to, from: from, toName: toName, fromName: fromName, room: this.room });
        this.messageArray = [];
        this.msgData = 0;
        this.chatData = 0;
        this.chatDataBol = false;
        this.chatDetails = {};
    };
    ChatboxComponent.prototype.sendMessage = function () {
        var to = this.chatDetails.to.id;
        var from = this.chatDetails.from.id;
        var toName = this.chatDetails.to.name;
        console.log(toName);
        this.messageArray.push({ user: this.user, message: this.messageText });
        this._chatService.sendMessage({ user: this.user, to: to, from: from, toName: toName, message: this.messageText });
        this.messageText = '';
    };
    ChatboxComponent.prototype.keyPress = function () {
        var to = this.chatDetails.to.id;
        this._chatService.keyPressNotification({ to: to });
    };
    ChatboxComponent.prototype.logout = function () {
        if (this.chatData == 1) {
            var toName = this.chatDetails.to.name;
            var fromName = this.chatDetails.from.name;
            var to = this.chatDetails.to.id;
            var from = this.chatDetails.from.id;
            this.allowFind = false;
            this._chatService.leaveRoom({ user: this.user, chataData: 1, to: to, from: from, toName: toName, fromName: fromName, room: this.room });
        }
        else if (this.chatData == 0) {
            this._chatService.signout({ user: this.user, chatData: 0 });
        }
        this.messageArray = [];
        this.msgData = 0;
        this.chatData = 0;
        this.chatDataBol = false;
        this.chatDetails = {};
        this.router.navigate(['/']);
    };
    ChatboxComponent.prototype.clicked = function () {
        // Get the modal
        var modal = document.getElementById("myModal");
        // Get the image and insert it inside the modal - use its "alt" text as a caption
        var img = document.getElementById("myImg");
        var modalImg = document.getElementById("img01").src;
        var captionText = document.getElementById("caption");
        var url = this.FPurl;
        img.onclick = function () {
            modal.style.display = "block";
            modalImg = url;
        };
        document.getElementsByClassName('modal')[0]['style'].display = "block";
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        // When the user clicks on <span> (x), close the modal
        document.getElementsByClassName("close")[0]['onclick'] = function () {
            modal.style.display = "none";
        };
    };
    ChatboxComponent.prototype.settings = function () {
        this.chatData = 2;
        if (this.toggle == false) {
            this.toggle = true;
            document.getElementsByClassName('content')[0]['style'].width = 'calc(100% - 58px)';
            document.getElementById('sidepanel').style.width = '58px';
            document.getElementsByClassName('profileDetails')[0]['style'].display = 'none';
        }
    };
    ChatboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'chat-box',
                    templateUrl: './chatbox.component.html',
                    styleUrls: ['./chatbox.component.css'],
                    providers: [ChatService]
                },] },
    ];
    /** @nocollapse */
    ChatboxComponent.ctorParameters = function () { return [
        { type: ChatService, },
        { type: Router, },
        { type: LoginService, },
        { type: AngularFireDatabase, },
    ]; };
    ChatboxComponent.propDecorators = {
        "myScrollContainer": [{ type: ViewChild, args: ['scrollMe',] },],
    };
    return ChatboxComponent;
}());
export { ChatboxComponent };
