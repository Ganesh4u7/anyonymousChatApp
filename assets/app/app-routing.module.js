import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { ChatboxComponent } from "./chatbox/chatbox.component";
import { AuthGuard } from "./auth.guard";
var appRoutes = [
    { path: '', component: LoginComponent },
    { path: 'chat', component: ChatboxComponent, canActivate: [AuthGuard] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forRoot(appRoutes)],
                    exports: [RouterModule]
                },] },
    ];
    return AppRoutingModule;
}());
export { AppRoutingModule };
