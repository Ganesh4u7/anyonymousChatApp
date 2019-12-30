import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { ChatboxComponent } from "./chatbox/chatbox.component";
import { SettingsComponent } from "./settings/settings.component";
import { SignupComponent } from "./signup/signup.component";
import { AppRoutingModule } from "./app-routing.module";
import { LoginService } from "./login.service";
import { AuthGuard } from "./auth.guard";
import { ChatService } from "./chat.service";
import { ImageCropperModule } from "ng2-img-cropper";
import { enableProdMode } from "@angular/core";
enableProdMode();
// import 'hammerjs';
//
// import {
//   LyThemeModule,
//   LY_THEME
// } from '@alyle/ui';
//
//
// import { LyButtonModule } from '@alyle/ui/button';
// import { LyToolbarModule } from '@alyle/ui/toolbar';
// import { LyResizingCroppingImageModule } from '@alyle/ui/resizing-cropping-images';
//
// import { MinimaLight, MinimaDark } from '@alyle/ui/themes/minima';
export var firebaseConfig = {
    apiKey: "AIzaSyBB5RJbFw4uuHr_kCDPi_fhnmojCookKXw",
    authDomain: "anonymouschatapp-183ee.firebaseapp.com",
    databaseURL: "https://anonymouschatapp-183ee.firebaseio.com",
    projectId: "anonymouschatapp-183ee",
    storageBucket: "anonymouschatapp-183ee.appspot.com",
    messagingSenderId: "909628936427"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [AppComponent, LoginComponent, ChatboxComponent, SettingsComponent, SignupComponent],
                    imports: [BrowserModule,
                        FormsModule,
                        ReactiveFormsModule,
                        HttpModule,
                        ImageCropperModule,
                        AppRoutingModule,
                        HttpClientModule,
                        AngularFireModule.initializeApp(firebaseConfig),
                        AngularFireDatabaseModule,
                        AngularFireAuthModule
                    ],
                    providers: [AuthGuard, LoginService, ChatService
                    ],
                    bootstrap: [AppComponent]
                },] },
    ];
    return AppModule;
}());
export { AppModule };
