(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _create_plan_create_plan_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-plan/create-plan.component */ "./src/app/create-plan/create-plan.component.ts");
/* harmony import */ var _view_plan_view_plan_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-plan/view-plan.component */ "./src/app/view-plan/view-plan.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _covid_covid_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./covid/covid.component */ "./src/app/covid/covid.component.ts");











const appRoutes = [
    { path: 'create-plan', component: _create_plan_create_plan_component__WEBPACK_IMPORTED_MODULE_3__["CreatePlanComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'viewPlans', component: _view_plan_view_plan_component__WEBPACK_IMPORTED_MODULE_4__["ViewPlanComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'details', component: _details_details_component__WEBPACK_IMPORTED_MODULE_5__["DetailsComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_7__["SettingsComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'covid', component: _covid_covid_component__WEBPACK_IMPORTED_MODULE_8__["CovidComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: '', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, { useHash: false })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, { useHash: false })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'dietplan';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 0, consts: [["href", "https://fonts.googleapis.com/css?family=Great+Vibes&display=swap", "rel", "stylesheet"], ["href", "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css", "rel", "stylesheet"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["body[_ngcontent-%COMP%]{\r\n  background: url('istock-683044558.jpg');\r\n  background-size: cover;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1Q0FBcUQ7RUFDckQsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLDRCQUE0Qjs7O0FBRzlCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi4vY3JlYXRlLXBsYW4vaXN0b2NrLTY4MzA0NDU1OC5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG5cclxuXHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var angular_fusioncharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-fusioncharts */ "./node_modules/angular-fusioncharts/__ivy_ngcc__/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _create_plan_create_plan_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-plan/create-plan.component */ "./src/app/create-plan/create-plan.component.ts");
/* harmony import */ var _view_plan_view_plan_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view-plan/view-plan.component */ "./src/app/view-plan/view-plan.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var fusioncharts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! fusioncharts */ "./node_modules/fusioncharts/fusioncharts.js");
/* harmony import */ var fusioncharts__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(fusioncharts__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var fusioncharts_fusioncharts_widgets__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! fusioncharts/fusioncharts.widgets */ "./node_modules/fusioncharts/fusioncharts.widgets.js");
/* harmony import */ var fusioncharts_fusioncharts_widgets__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(fusioncharts_fusioncharts_widgets__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var fusioncharts_themes_fusioncharts_theme_fusion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! fusioncharts/themes/fusioncharts.theme.fusion */ "./node_modules/fusioncharts/themes/fusioncharts.theme.fusion.js");
/* harmony import */ var fusioncharts_themes_fusioncharts_theme_fusion__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(fusioncharts_themes_fusioncharts_theme_fusion__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _workout_plan_workout_plan_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./workout-plan/workout-plan.component */ "./src/app/workout-plan/workout-plan.component.ts");
/* harmony import */ var _view_workout_plans_view_workout_plans_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./view-workout-plans/view-workout-plans.component */ "./src/app/view-workout-plans/view-workout-plans.component.ts");
/* harmony import */ var _covid_covid_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./covid/covid.component */ "./src/app/covid/covid.component.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./login.service */ "./src/app/login.service.ts");
/* harmony import */ var _diet_plan_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./diet-plan.service */ "./src/app/diet-plan.service.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");













// Load FusionCharts

// Load Widgets

// Load FusionTheme Theme










// Add dependencies to FusionChartsModule
angular_fusioncharts__WEBPACK_IMPORTED_MODULE_3__["FusionChartsModule"].fcRoot(fusioncharts__WEBPACK_IMPORTED_MODULE_13__, fusioncharts_fusioncharts_widgets__WEBPACK_IMPORTED_MODULE_14__, fusioncharts_themes_fusioncharts_theme_fusion__WEBPACK_IMPORTED_MODULE_15__);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"], _login_service__WEBPACK_IMPORTED_MODULE_21__["LoginService"], _diet_plan_service__WEBPACK_IMPORTED_MODULE_22__["DietPlanService"], _http_service__WEBPACK_IMPORTED_MODULE_23__["HttpService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__["DragDropModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            angular_fusioncharts__WEBPACK_IMPORTED_MODULE_3__["FusionChartsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _create_plan_create_plan_component__WEBPACK_IMPORTED_MODULE_6__["CreatePlanComponent"],
        _view_plan_view_plan_component__WEBPACK_IMPORTED_MODULE_7__["ViewPlanComponent"],
        _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__["NavBarComponent"],
        _details_details_component__WEBPACK_IMPORTED_MODULE_10__["DetailsComponent"],
        _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"],
        _settings_settings_component__WEBPACK_IMPORTED_MODULE_16__["SettingsComponent"],
        _workout_plan_workout_plan_component__WEBPACK_IMPORTED_MODULE_18__["WorkoutPlanComponent"],
        _view_workout_plans_view_workout_plans_component__WEBPACK_IMPORTED_MODULE_19__["ViewWorkoutPlansComponent"],
        _covid_covid_component__WEBPACK_IMPORTED_MODULE_20__["CovidComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__["DragDropModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        angular_fusioncharts__WEBPACK_IMPORTED_MODULE_3__["FusionChartsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _create_plan_create_plan_component__WEBPACK_IMPORTED_MODULE_6__["CreatePlanComponent"],
                    _view_plan_view_plan_component__WEBPACK_IMPORTED_MODULE_7__["ViewPlanComponent"],
                    _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__["NavBarComponent"],
                    _details_details_component__WEBPACK_IMPORTED_MODULE_10__["DetailsComponent"],
                    _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"],
                    _settings_settings_component__WEBPACK_IMPORTED_MODULE_16__["SettingsComponent"],
                    _workout_plan_workout_plan_component__WEBPACK_IMPORTED_MODULE_18__["WorkoutPlanComponent"],
                    _view_workout_plans_view_workout_plans_component__WEBPACK_IMPORTED_MODULE_19__["ViewWorkoutPlansComponent"],
                    _covid_covid_component__WEBPACK_IMPORTED_MODULE_20__["CovidComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__["DragDropModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    angular_fusioncharts__WEBPACK_IMPORTED_MODULE_3__["FusionChartsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"]
                ],
                providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"], _login_service__WEBPACK_IMPORTED_MODULE_21__["LoginService"], _diet_plan_service__WEBPACK_IMPORTED_MODULE_22__["DietPlanService"], _http_service__WEBPACK_IMPORTED_MODULE_23__["HttpService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.service */ "./src/app/login.service.ts");



class AuthGuard {
    constructor(service) {
        this.service = service;
    }
    canActivate(route, state) {
        return this.service.isLoggedStatus;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/covid/covid.component.ts":
/*!******************************************!*\
  !*** ./src/app/covid/covid.component.ts ***!
  \******************************************/
/*! exports provided: CovidComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CovidComponent", function() { return CovidComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");



class CovidComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
CovidComponent.ɵfac = function CovidComponent_Factory(t) { return new (t || CovidComponent)(); };
CovidComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CovidComponent, selectors: [["app-covid"]], decls: 35, vars: 0, consts: [[1, "nav-bar"], [1, "main-container"], ["id", "diet1", 1, "head"], [2, "text-align", "center", "margin-top", "30px", "margin-bottom", "30px"], [1, "main-container1"]], template: function CovidComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Fight Covid-19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "How to fight COVID-19 ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Since there is no available vaccine yet , what we can do is to make our body ready to fight this virus if we are infected. How ? by strengthening our immune system. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "So, What is Immune System ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Immune system is the body\u2019s multi-level defence network against potentially harmful bacteria, viruses and other organisms.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Our immune system is capable of developing antibodies to fight off bugs, as well as capacity to remember what the best methods were to attack previous invaders so that a future exposure will be much less problematic.This is how immunity is built up and the basis of how vaccines work.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Until a vaccine is available, our immune systems will need to adapt unaided to COVID-19.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "How to strengthen your Immune System ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " No Smoking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Drinking little or no alcohol ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Sleeping well");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Eating a balanced diet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Taking regular moderate exercise ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Importantly reducing stress ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"]], styles: [".main-container[_ngcontent-%COMP%]{\r\n  margin-top:30px ;\r\n  width: 90%;\r\n  margin-left: 10%;\r\n  height: 100vh;\r\n\r\n}\r\n.head[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  margin-top: 30px;\r\n  background-color: white;\r\n  padding: 5px;\r\n}\r\n.head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n\r\n  font-family:\"Great Vibes\",cursive;\r\n  font-size: 50px;\r\n  color: #008000;\r\n}\r\n.main-container1[_ngcontent-%COMP%]{\r\n  width: 90%;\r\n  background: white;\r\n  margin-top: 30px;\r\n  padding:30px;\r\n}\r\n@media screen and (max-width: 480px){\r\n  .main-container[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY292aWQvY292aWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixhQUFhOztBQUVmO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7QUFDQTs7RUFFRSxpQ0FBaUM7RUFDakMsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFFQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDtBQUdBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvdmlkL2NvdmlkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm1haW4tY29udGFpbmVye1xyXG4gIG1hcmdpbi10b3A6MzBweCA7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcblxyXG59XHJcbi5oZWFkIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5oZWFkIGgye1xyXG5cclxuICBmb250LWZhbWlseTpcIkdyZWF0IFZpYmVzXCIsY3Vyc2l2ZTtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbiAgY29sb3I6ICMwMDgwMDA7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRhaW5lcjF7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIHBhZGRpbmc6MzBweDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KXtcclxuICAubWFpbi1jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CovidComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-covid',
                templateUrl: './covid.component.html',
                styleUrls: ['./covid.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/create-plan/create-plan.component.ts":
/*!******************************************************!*\
  !*** ./src/app/create-plan/create-plan.component.ts ***!
  \******************************************************/
/*! exports provided: CreatePlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePlanComponent", function() { return CreatePlanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _diet_plan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../diet-plan.service */ "./src/app/diet-plan.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _workout_plan_workout_plan_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../workout-plan/workout-plan.component */ "./src/app/workout-plan/workout-plan.component.ts");










function CreatePlanComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatePlanComponent_div_37_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const i_r6 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.clickLeft(i_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r1.getBackgroundColor(i_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r5.name, " (100)", item_r5.metric, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"]("KCal:", (100 * item_r5.kcal).toFixed(2), " Protein:", (100 * item_r5.protein).toFixed(2), " Carbs", (100 * item_r5.carbs).toFixed(2), " Fat:", (100 * item_r5.fat).toFixed(2), "");
} }
function CreatePlanComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatePlanComponent_div_54_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const i_r10 = ctx.index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.clickRight(i_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 45, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatePlanComponent_div_54_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const i_r10 = ctx.index; const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.add(i_r10, _r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r3.getBackgroundColorRight(i_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r9.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r9.metric, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"]("KCal:", (item_r9.sWeight * item_r9.kcal).toFixed(2), " Protein:", (item_r9.sWeight * item_r9.protein).toFixed(2), " Carbs", (item_r9.sWeight * item_r9.carbs).toFixed(2), " Fat:", (item_r9.sWeight * item_r9.fat).toFixed(2), "");
} }
const _c0 = function (a0) { return [a0]; };
class CreatePlanComponent {
    constructor(dietPlanService, http, httpService) {
        this.dietPlanService = dietPlanService;
        this.http = http;
        this.httpService = httpService;
        this.selectedItemType = [];
        this.lastSelectedItemName = 'vegetables';
        this.todo = [
            'Get to work',
            'Pick up groceries',
            'Go home',
            'Fall asleep'
        ];
        this.vegetables = [{ name: 'Lady fingers', itemType: 'vegetables', weight: 1, metric: 'gms', kcal: 0.25, protein: 0.019, carbs: 0.07, fat: 0.002, sfat: 0, DFib: 0.032, sugar: 0.015, sodium: 0.07, sWeight: 100, click: 0 },
            { name: 'Tomato', itemType: 'vegetables', weight: 1, metric: 'gms', kcal: 0.1666667, protein: 0.01, carbs: 0.04, fat: 0.0033, sfat: 0, DFib: 0.012, sugar: 0.0266667, sodium: 0.05, sWeight: 100, click: 0 },
            { name: 'Ivy gourd', itemType: 'vegetables', weight: 1, metric: 'gms', kcal: 0.18, protein: 0.0012, carbs: 0.031, fat: 0.001, sfat: 0, DFib: 0, sugar: 0, sodium: 0, sWeight: 100, click: 0 },
            { name: 'Ridge gourd', itemType: 'vegetables', weight: 1, metric: 'gms', kcal: 0.62, protein: 0.007, carbs: 0.14, fat: 0.003, sfat: 0, DFib: 0, sugar: 0.05, sodium: 0.21, sWeight: 100, click: 0 },
            { name: 'Potato', itemType: 'vegetables', weight: 1, metric: 'gms', kcal: 0.68, protein: 0.02, carbs: 0.17, fat: 0.001, sfat: 0, DFib: 0.022, sugar: 0.008, sodium: 0.06, sWeight: 100, click: 0 },
        ];
        this.fruites = [
            { name: 'Apple', itemType: 'fruites', weight: 1, metric: 'gms', kcal: 0.5, protein: 0.003, carbs: 0.14, fat: 0.002, sfat: 0, DFib: 0.024, sugar: 0.1, sodium: 0.01, sWeight: 100, click: 0 },
            { name: 'Banana', itemType: 'fruites', weight: 1, metric: 'gms', kcal: 0.89, protein: 0.011, carbs: 0.23, fat: 0.003, sfat: 0.001, DFib: 0.026, sugar: 0.12, sodium: 0.01, sWeight: 100, click: 0 },
            { name: 'Orange', itemType: 'fruites', weight: 1, metric: 'gms', kcal: 0.43, protein: 0.009, carbs: 0.12, fat: 0.001, sfat: 0, DFib: 0.024, sugar: 0.12, sodium: 0, sWeight: 100, click: 0 },
            { name: 'Mango', itemType: 'fruites', weight: 1, metric: 'gms', kcal: 0.60, protein: 0.008, carbs: 0.15, fat: 0.004, sfat: 0.001, DFib: 0.016, sugar: 0.14, sodium: 0.001, sWeight: 100, click: 0 },
        ];
        this.done = [
        // 'Get up',
        // 'Brush teeth',
        // 'Take a shower',
        // 'Check e-mail',
        // 'Walk dog'
        ];
        this.total = {
            kcal: 0, protein: 0, carbs: 0, fat: 0, sfat: 0, DFib: 0, sugar: 0, sodium: 0, weight: 0
        };
        this.clickedFruites = [];
        this.clickedVegetables = [];
    }
    ngOnInit() {
        // this.vegetables = this.dietPlanService.vegetables;
        this.selectedItemType = this.vegetables;
    }
    drop(event, arrayName) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
            console.log(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            if (arrayName == 'todo') {
                if (this.done[event.previousIndex].itemType == 'vegetables') {
                    this.done[event.previousIndex].click = 0;
                    //  this.vegetables.push(this.done[event.previousIndex]);
                    //this.done.splice(event.previousIndex, 1);
                    Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
                }
                else if (this.done[event.previousIndex].itemType == 'fruites') {
                    this.done[event.previousIndex].click = 0;
                    // this.fruites.push(this.done[event.previousIndex]);
                    // this.done.splice(event.previousIndex, 1);
                    Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
                }
            }
            else if (arrayName == 'done') {
                this.selectedItemType[event.previousIndex].click = 1;
                Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            }
            let str = this.vegetables[event.previousIndex];
            // this.done.splice(event.currentIndex,0,str);
            this.totalValues();
        }
    }
    add(i, weight) {
        let integer = parseInt(weight.value, 10);
        this.done[i].sWeight = integer;
        console.log(this.done[i]);
        console.log(this.done);
        this.totalValues();
    }
    delete(i) {
        let val = this.done[i];
        delete this.done[i];
        console.log(this.done);
        this.vegetables.push(val);
    }
    savePlan(tag) {
        var vegetables1 = [{ name: 'Lady fingers', itemType: 'vegetables', weight: 1, metric: 'gms', kcal: 0.25, protein: 0.019, carbs: 0.07, fat: 0.002, sfat: 0, DFib: 0.032, sugar: 0.015, sodium: 0.07, sWeight: 100, click: 0 },
            { name: 'Tomato', itemType: 'vegetables', weight: 1, metric: 'gms', kcal: 0.1666667, protein: 0.01, carbs: 0.04, fat: 0.0033, sfat: 0, DFib: 0.012, sugar: 0.0266667, sodium: 0.05, sWeight: 100, click: 0 },
            { name: 'Ivy gourd', itemType: 'vegetables', weight: 1, metric: 'gms', kcal: 0.18, protein: 0.0012, carbs: 0.031, fat: 0.001, sfat: 0, DFib: 0, sugar: 0, sodium: 0, sWeight: 100, click: 0 },
            { name: 'Ridge gourd', itemType: 'vegetables', weight: 1, metric: 'gms', kcal: 0.62, protein: 0.007, carbs: 0.14, fat: 0.003, sfat: 0, DFib: 0, sugar: 0.05, sodium: 0.21, sWeight: 100, click: 0 },
            { name: 'Potato', itemType: 'vegetables', weight: 1, metric: 'gms', kcal: 0.68, protein: 0.02, carbs: 0.17, fat: 0.001, sfat: 0, DFib: 0.022, sugar: 0.008, sodium: 0.06, sWeight: 100, click: 0 },
        ];
        this.dietPlanService.savedPlansArray.push(this.done);
        this.dietPlanService.savedPlansTotals.push(this.total);
        let date = Date().toString().slice(0, 24);
        console.log(this.dietPlanService.plansIds.length);
        this.httpService.onSendPlans([this.done, { nameTag: tag.value, date: date, editMode: 0, editPlanName: 0, recipe: "" }, this.total, { username: this.dietPlanService.userCredentials.username, tot: this.dietPlanService.plansIds.length }]).subscribe((response) => {
            console.log(response);
            this.dietPlanService.plansIds.push(response.id);
        }, (error) => console.log(error));
        this.dietPlanService.savedPlansNametags.push({ nameTag: tag.value, date: date, editMode: 0, editPlanName: 0, recipe: "" });
        console.log(this.dietPlanService.savedPlansNametags);
        this.done = [];
        // this.httpService.onSendTotals(this.total).subscribe(
        //   (response) => console.log(response),
        //   (error) => console.log(error)
        // );
        this.total = {
            kcal: 0, protein: 0, carbs: 0, fat: 0, sfat: 0, DFib: 0, sugar: 0, sodium: 0, weight: 0
        };
        this.vegetables = vegetables1;
        this.selectedItemType = vegetables1;
        // console.log(this.dietPlanService.vegetables);
    }
    totalValues() {
        this.total = {
            kcal: 0, protein: 0, carbs: 0, fat: 0, sfat: 0, DFib: 0, sugar: 0, sodium: 0, weight: 0
        };
        for (let i = 0; i < this.done.length; i++) {
            this.total.kcal += this.done[i].kcal * this.done[i].sWeight;
            this.total.protein += this.done[i].protein * this.done[i].sWeight;
            this.total.carbs += this.done[i].carbs * this.done[i].sWeight;
            this.total.fat += this.done[i].fat * this.done[i].sWeight;
            this.total.sfat += this.done[i].sfat * this.done[i].sWeight;
            this.total.DFib += this.done[i].DFib * this.done[i].sWeight;
            this.total.sugar += this.done[i].sugar * this.done[i].sWeight;
            this.total.sodium += this.done[i].sodium * this.done[i].sWeight;
            this.total.weight += this.done[i].sWeight;
        }
        console.log(this.total);
    }
    changeItems(itemType) {
        if (itemType == "vegetables") {
            this.selectedItemType = this.vegetables;
            this.lastSelectedItemName = itemType;
        }
        else if (itemType == "fruites") {
            this.selectedItemType = this.fruites;
            this.lastSelectedItemName = itemType;
        }
    }
    clickLeft(index) {
        if (this.lastSelectedItemName == 'vegetables') {
            if (this.vegetables[index].click == 0) {
                this.vegetables[index].click = 1;
                console.log(this.vegetables[index]);
                //document.getElementById('highlight').style.backgroundColor = 'blue';
            }
            else {
                this.vegetables[index].click = 0;
                // document.getElementById('highlight').style.backgroundColor = 'white';
            }
        }
        else if (this.lastSelectedItemName == 'fruites') {
            if (this.fruites[index].click == 0) {
                this.fruites[index].click = 1;
            }
            else {
                this.fruites[index].click = 0;
            }
        }
    }
    getBackgroundColor(i) {
        if (this.lastSelectedItemName == 'vegetables') {
            if (this.selectedItemType[i].click == 1) {
                return '#aeff60';
            }
            else {
                return 'white';
            }
        }
        else if (this.lastSelectedItemName == 'fruites') {
            if (this.selectedItemType[i].click == 1) {
                return '#aeff60';
            }
            else {
                return 'white';
            }
        }
    }
    getBackgroundColorRight(i) {
        if (this.done[i].click == 0) {
            return '#aeff60';
        }
        else {
            return 'white';
        }
    }
    clickRight(index) {
        if (this.lastSelectedItemName == 'vegetables') {
            if (this.done[index].click == 1) {
                this.done[index].click = 0;
                console.log(this.done[index]);
            }
            else {
                this.done[index].click = 1;
            }
        }
        else if (this.lastSelectedItemName == 'fruites') {
            if (this.done[index].click == 1) {
                this.done[index].click = 0;
            }
            else {
                this.done[index].click = 1;
            }
        }
    }
    rightMove() {
        if (this.lastSelectedItemName == 'vegetables') {
            for (let i = this.vegetables.length - 1; i >= 0; i--) {
                if (this.vegetables[i].click == 1) {
                    this.done.push(this.vegetables[i]);
                    this.vegetables.splice(i, 1);
                    this.totalValues();
                }
            }
        }
        else if (this.lastSelectedItemName == 'fruites') {
            for (let i = this.fruites.length - 1; i >= 0; i--) {
                if (this.fruites[i].click == 1) {
                    this.done.push(this.fruites[i]);
                    this.fruites.splice(i, 1);
                    this.totalValues();
                }
            }
        }
    }
    leftMove() {
        for (let i = this.done.length - 1; i >= 0; i--) {
            if (this.done[i].click == 0) {
                if (this.done[i].itemType == 'vegetables') {
                    this.vegetables.push(this.done[i]);
                    this.done.splice(i, 1);
                    this.totalValues();
                }
                else if (this.done[i].itemType == 'fruites') {
                    this.fruites.push(this.done[i]);
                    this.done.splice(i, 1);
                    this.totalValues();
                }
            }
        }
    }
    hide(val) {
        if (val == 0) {
            document.getElementById('diet1').style.display = 'block';
            document.getElementById('diet2').style.display = 'block';
            document.getElementById('hide').style.display = 'none';
        }
        else if (val = 1) {
            document.getElementById('diet1').style.display = 'none';
            document.getElementById('diet2').style.display = 'none';
            document.getElementById('hide').style.display = 'block';
        }
    }
}
CreatePlanComponent.ɵfac = function CreatePlanComponent_Factory(t) { return new (t || CreatePlanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_diet_plan_service__WEBPACK_IMPORTED_MODULE_2__["DietPlanService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"])); };
CreatePlanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreatePlanComponent, selectors: [["app-create-plan"]], decls: 67, vars: 13, consts: [[1, "parallax"], [1, "plan-menu"], [1, "nav-button"], [1, "nav-item", "nav-link", 3, "click"], ["id", "diet1", 1, "head"], [2, "text-align", "center", "margin-top", "30px", "margin-bottom", "30px"], ["id", "diet2", 1, "main-container1"], [1, "box-1"], [1, "example-container", 2, "float", "left"], [1, "items", "group"], ["type", "radio", "id", "vege", "name", "drone", "value", "huey", "checked", "", 3, "click"], ["for", "vege"], ["type", "radio", "id", "fru", "name", "drone", "value", "dewey", 3, "click"], ["for", "fru"], ["type", "radio", "id", "liq", "name", "drone", "value", "louie", 3, "click"], ["for", "liq"], ["type", "radio", "id", "nut", "name", "drone", "value", "louie", 3, "click"], ["for", "nut"], ["type", "radio", "id", "sed", "name", "drone", "value", "louie", 3, "click"], ["for", "sed"], ["type", "radio", "id", "oth", "name", "drone", "value", "louie", 3, "click"], ["for", "oth"], ["cdkDropList", "", 1, "example-list", "group", 3, "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped"], ["toDoList", "cdkDropList"], ["id", "highlight", "class", "example-box group", "cdkDrag", "", 3, "background-color", "click", 4, "ngFor", "ngForOf"], [1, "arrows", "hide", 2, "float", "left"], [3, "click"], [1, "fas", "fa-arrow-alt-circle-right", 2, "width", "25px", "height", "25px"], [1, "fas", "fa-arrow-alt-circle-left", 2, "width", "25px", "height", "25px"], [1, "arrowsMobile", "show", 2, "float", "left"], [1, "fas", "fa-arrow-alt-circle-up", 2, "width", "25px", "height", "25px"], [1, "fas", "fa-arrow-alt-circle-down", 2, "width", "25px", "height", "25px"], [1, "box-2"], ["cdkDropList", "", 1, "example-list", 2, "min-height", "230px", "margin-top", "40px", 3, "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped"], ["doneList", "cdkDropList"], ["class", "example-box group", "cdkDrag", "", 3, "background-color", "click", 4, "ngFor", "ngForOf"], [1, "container", "group"], ["type", "text", 2, "width", "30%"], ["tag", ""], [1, "btn", "btn-success", 3, "disabled", "click"], ["id", "hide"], ["id", "highlight", "cdkDrag", "", 1, "example-box", "group", 3, "click"], [2, "font-size", "15px"], ["cdkDrag", "", 1, "example-box", "group", 3, "click"], [2, "text-align", "center"], ["type", "number", "value", "100"], ["weight", ""], [1, "btn-success", 3, "click"]], template: function CreatePlanComponent_Template(rf, ctx) { if (rf & 1) {
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatePlanComponent_Template_a_click_4_listener() { return ctx.hide(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Create Diet Plans");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatePlanComponent_Template_a_click_6_listener() { return ctx.hide(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Create Workout Plans");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Create Your Diet Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "ITEMS LIST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatePlanComponent_Template_input_click_17_listener() { return ctx.changeItems("vegetables"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Vegetables");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatePlanComponent_Template_input_click_20_listener() { return ctx.changeItems("fruites"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Fruites");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatePlanComponent_Template_input_click_23_listener() { return ctx.changeItems("liquids"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Liquids");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatePlanComponent_Template_input_click_26_listener() { return ctx.changeItems("nuts"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Nuts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatePlanComponent_Template_input_click_29_listener() { return ctx.changeItems("seeds"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Seeds and Dal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatePlanComponent_Template_input_click_32_listener() { return ctx.changeItems("others"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Others");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function CreatePlanComponent_Template_div_cdkDropListDropped_35_listener($event) { return ctx.drop($event, "todo"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, CreatePlanComponent_div_37_Template, 5, 8, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatePlanComponent_Template_a_click_39_listener() { return ctx.rightMove(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatePlanComponent_Template_a_click_41_listener() { return ctx.leftMove(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatePlanComponent_Template_a_click_44_listener() { return ctx.leftMove(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatePlanComponent_Template_a_click_46_listener() { return ctx.rightMove(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "CHOOSEN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 33, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function CreatePlanComponent_Template_div_cdkDropListDropped_52_listener($event) { return ctx.drop($event, "done"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, CreatePlanComponent_div_54_Template, 10, 8, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Name Tag : \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 37, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatePlanComponent_Template_button_click_64_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](63); return ctx.savePlan(_r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Save Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "app-workout-plan", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", ctx.selectedItemType)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, _r2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectedItemType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", ctx.done)("cdkDropListConnectedTo", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.done);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"]("KCal:", ctx.total.kcal.toFixed(2), " Protein:", ctx.total.protein.toFixed(2), " Carbs", ctx.total.carbs.toFixed(2), " Fat:", ctx.total.fat.toFixed(2), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.done.length == 0);
    } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _workout_plan_workout_plan_component__WEBPACK_IMPORTED_MODULE_7__["WorkoutPlanComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"]], styles: [".head[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  margin-top: 30px;\r\n  margin-left: 5%;\r\n  background-color: white;\r\n  padding: 5px;\r\n}\r\n.head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n\r\n  font-family:\"Great Vibes\",cursive;\r\n  font-size: 50px;\r\n  color: #008000;\r\n}\r\n.plan-menu[_ngcontent-%COMP%]{\r\n  margin-top: 10px;\r\n  height: 50px;\r\n}\r\n#hide[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\nnav[_ngcontent-%COMP%]{\r\n  margin-top: -10px;\r\n}\r\n.main-container1[_ngcontent-%COMP%]{\r\n  padding:40px 20px;\r\n  width: 90%;\r\n  margin-top: 40px;\r\n  margin-left: 5%;\r\n  background-color: white;\r\n  overflow: auto;\r\n\r\n}\r\nh2[_ngcontent-%COMP%]{\r\n  font-family:\"Great Vibes\",cursive;\r\n  font-size: 35px;\r\n  color: #008000;\r\n}\r\n.nav-button[_ngcontent-%COMP%]{\r\n  margin-left: 37%;\r\n}\r\n.nav-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n  float: left;\r\n  color: green;\r\n  padding: 8px;\r\n  margin-top: 8px;\r\n  margin-right: 10px;\r\n  border: 2px solid yellowgreen;\r\n  border-radius: 10px;\r\n  background: white;\r\n\r\n\r\n}\r\n@media screen and (max-width: 480px){\r\n\r\n  .nav-button[_ngcontent-%COMP%]{\r\n    margin-left: 15px;\r\n  }\r\n  .nav-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    padding: 6px;\r\n  }\r\n  .nav-signout[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    padding: 6px;\r\n    margin-right: 5px;\r\n  }\r\n}\r\n.example-container[_ngcontent-%COMP%] {\r\n  width: 45%;\r\n  max-width: 100%;\r\n\r\n\r\n  display: inline-block;\r\n  vertical-align: top;\r\noverflow: auto;\r\n}\r\n.example-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n  font-family: inherit;\r\n\r\n}\r\n.box-1[_ngcontent-%COMP%]{\r\n  margin-left: 4%;\r\n}\r\n.container[_ngcontent-%COMP%]{\r\n  margin-top: 20px;\r\n  float: left;\r\n}\r\n.example-list[_ngcontent-%COMP%] {\r\n  border: solid 2px #008000;\r\n  min-height: 150px;\r\n  max-height: 100vh;\r\n  background: #008000;\r\n  border-radius: 4px;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  display: block;\r\n\r\n}\r\n.example-box[_ngcontent-%COMP%] {\r\n  padding: 20px 10px;\r\n  border-bottom: solid 2px #008000;\r\n  color: rgba(0, 0, 0, 0.87);\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  box-sizing: border-box;\r\n  cursor: move;\r\n  background: white;\r\n  font-size: 14px;\r\n  color: #008000;\r\n}\r\ninput[type=text][_ngcontent-%COMP%]{\r\n  width: 20%;\r\n}\r\ninput[type=radio][_ngcontent-%COMP%]{\r\n  width: 5%;\r\n}\r\n.arrows[_ngcontent-%COMP%]{\r\n  width: 3%;\r\n  margin-top: 20%;\r\n  margin-left: 10px;\r\n}\r\n.arrowsMobile[_ngcontent-%COMP%]{\r\nmargin-left: 38%;\r\n  margin-top: 10%;\r\n  float: left;\r\n}\r\n.arrowsMobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\nmargin-left: 10px;\r\n\r\n}\r\n.show[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n.group[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n.group[_ngcontent-%COMP%]:before, .group[_ngcontent-%COMP%]:after {\r\n  content: \" \"; \r\n  display: table; \r\n}\r\n.group[_ngcontent-%COMP%]:after {\r\n  clear: both;\r\n}\r\n@media  screen and (max-width:720px)   {\r\n  .example-container[_ngcontent-%COMP%]{\r\n    width: 90%;\r\n  }\r\n  .hide[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n  .show[_ngcontent-%COMP%]{\r\n    display: block;\r\n  }\r\n}\r\n.cdk-drag-preview[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n  border-radius: 4px;\r\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n  0 8px 10px 1px rgba(0, 0, 0, 0.14),\r\n  0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n}\r\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n}\r\n.cdk-drag-animating[_ngcontent-%COMP%] {\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n.example-box[_ngcontent-%COMP%]:last-child {\r\n  border: none;\r\n}\r\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n@media screen and (max-width: 480px) {\r\n  h2[_ngcontent-%COMP%]{\r\n    font-size: 24px;\r\n  }\r\n.example-container[_ngcontent-%COMP%]{\r\n  margin: 5%;\r\n}\r\n.hide[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n.show[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n.box-2[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n  width: 70%;\r\n}\r\n.items[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n  margin-left: 5px;\r\n  margin-right: 6px;\r\n}\r\n\r\n}\r\n@media screen and (max-width: 1024px){\r\n.arrows[_ngcontent-%COMP%]{\r\n  margin-right: 10px;\r\n}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLXBsYW4vY3JlYXRlLXBsYW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7QUFDQTs7RUFFRSxpQ0FBaUM7RUFDakMsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGNBQWM7O0FBRWhCO0FBR0E7RUFDRSxpQ0FBaUM7RUFDakMsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixpQkFBaUI7OztBQUduQjtBQUtBOztFQUVFO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFlBQVk7SUFDWixpQkFBaUI7RUFDbkI7QUFDRjtBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7OztFQUdmLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckIsY0FBYztBQUNkO0FBRUE7RUFDRSxvQkFBb0I7O0FBRXRCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsY0FBYzs7QUFFaEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0FBYztBQUNoQjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFJQTtFQUNFLFNBQVM7RUFDVCxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBQ0E7QUFDQSxnQkFBZ0I7RUFDZCxlQUFlO0VBQ2YsV0FBVztBQUNiO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7QUFDQTs7RUFFRSxZQUFZLEVBQUUsTUFBTTtFQUNwQixjQUFjLEVBQUUsTUFBTTtBQUN4QjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBSUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0FBQ0Y7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEI7O29DQUVrQztBQUNwQztBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxzREFBc0Q7QUFDeEQ7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0Usc0RBQXNEO0FBQ3hEO0FBR0E7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7QUFDQTtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0EiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGUtcGxhbi9jcmVhdGUtcGxhbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWQge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5oZWFkIGgye1xyXG5cclxuICBmb250LWZhbWlseTpcIkdyZWF0IFZpYmVzXCIsY3Vyc2l2ZTtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbiAgY29sb3I6ICMwMDgwMDA7XHJcbn1cclxuXHJcbi5wbGFuLW1lbnV7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbiNoaWRle1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxubmF2e1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG59XHJcbi5tYWluLWNvbnRhaW5lcjF7XHJcbiAgcGFkZGluZzo0MHB4IDIwcHg7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBvdmVyZmxvdzogYXV0bztcclxuXHJcbn1cclxuXHJcblxyXG5oMntcclxuICBmb250LWZhbWlseTpcIkdyZWF0IFZpYmVzXCIsY3Vyc2l2ZTtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgY29sb3I6ICMwMDgwMDA7XHJcbn1cclxuXHJcbi5uYXYtYnV0dG9ue1xyXG4gIG1hcmdpbi1sZWZ0OiAzNyU7XHJcbn1cclxuLm5hdi1idXR0b24gYXtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmbG9hdDogbGVmdDtcclxuICBjb2xvcjogZ3JlZW47XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgeWVsbG93Z3JlZW47XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCl7XHJcblxyXG4gIC5uYXYtYnV0dG9ue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgfVxyXG4gIC5uYXYtYnV0dG9uIGF7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgfVxyXG4gIC5uYXYtc2lnbm91dCBhe1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIge1xyXG4gIHdpZHRoOiA0NSU7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG5cclxuXHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbm92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIgaDJ7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcblxyXG59XHJcbi5ib3gtMXtcclxuICBtYXJnaW4tbGVmdDogNCU7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uZXhhbXBsZS1saXN0IHtcclxuICBib3JkZXI6IHNvbGlkIDJweCAjMDA4MDAwO1xyXG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQ6ICMwMDgwMDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxufVxyXG5cclxuLmV4YW1wbGUtYm94IHtcclxuICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4ICMwMDgwMDA7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgY3Vyc29yOiBtb3ZlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzAwODAwMDtcclxufVxyXG5pbnB1dFt0eXBlPXRleHRde1xyXG4gIHdpZHRoOiAyMCU7XHJcbn1cclxuaW5wdXRbdHlwZT1yYWRpb117XHJcbiAgd2lkdGg6IDUlO1xyXG59XHJcblxyXG5cclxuXHJcbi5hcnJvd3N7XHJcbiAgd2lkdGg6IDMlO1xyXG4gIG1hcmdpbi10b3A6IDIwJTtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4uYXJyb3dzTW9iaWxle1xyXG5tYXJnaW4tbGVmdDogMzglO1xyXG4gIG1hcmdpbi10b3A6IDEwJTtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG4uYXJyb3dzTW9iaWxlIGF7XHJcbm1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cclxufVxyXG5cclxuLnNob3d7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmdyb3Vwe1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZ3JvdXA6YmVmb3JlLFxyXG4uZ3JvdXA6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiIFwiOyAvKiAxICovXHJcbiAgZGlzcGxheTogdGFibGU7IC8qIDIgKi9cclxufVxyXG5cclxuLmdyb3VwOmFmdGVyIHtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3MjBweCkgICB7XHJcbiAgLmV4YW1wbGUtY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICB9XHJcbiAgLmhpZGV7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuc2hvd3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuLmNkay1kcmFnLXByZXZpZXcge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmNkay1kcmFnLWFuaW1hdGluZyB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG4uZXhhbXBsZS1ib3g6bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uZXhhbXBsZS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmV4YW1wbGUtYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIGgye1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gIH1cclxuLmV4YW1wbGUtY29udGFpbmVye1xyXG4gIG1hcmdpbjogNSU7XHJcbn1cclxuLmhpZGV7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uc2hvd3tcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uYm94LTIgLmV4YW1wbGUtYm94IGlucHV0e1xyXG4gIHdpZHRoOiA3MCU7XHJcbn1cclxuLml0ZW1zIGxhYmVse1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbn1cclxuXHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KXtcclxuLmFycm93c3tcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreatePlanComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-plan',
                templateUrl: './create-plan.component.html',
                styleUrls: ['./create-plan.component.css']
            }]
    }], function () { return [{ type: _diet_plan_service__WEBPACK_IMPORTED_MODULE_2__["DietPlanService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _diet_plan_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../diet-plan.service */ "./src/app/diet-plan.service.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var angular_fusioncharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-fusioncharts */ "./node_modules/angular-fusioncharts/__ivy_ngcc__/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function DetailsComponent_table_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Type of Weight Loss");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Calories Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Maintain Weight:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Mild weight loss 0.5 lb/week :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Weight loss 1 lb/week:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " High weight loss 2 lb/week:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Extreme weight loss 2 lb/week:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r43.bmr * ctx_r43.bmrWorkout[ctx_r43.selectedValue].bmr).toFixed(0), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r43.bmr * ctx_r43.bmrWorkout[ctx_r43.selectedValue].bmr * (1 - ctx_r43.bmrWorkout[ctx_r43.selectedValue].per)).toFixed(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r43.bmr * ctx_r43.bmrWorkout[ctx_r43.selectedValue].bmr * (1 - ctx_r43.bmrWorkout[ctx_r43.selectedValue].per * 2)).toFixed(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r43.bmr * ctx_r43.bmrWorkout[ctx_r43.selectedValue].bmr * (1 - ctx_r43.bmrWorkout[ctx_r43.selectedValue].per * 3)).toFixed(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r43.bmr * ctx_r43.bmrWorkout[ctx_r43.selectedValue].bmr * (1 - ctx_r43.bmrWorkout[ctx_r43.selectedValue].per * 4)).toFixed(0), " ");
} }
function DetailsComponent_div_85_table_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Day ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Mild Weight loss ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Weight loss ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Extreme Weight loss");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Sunday ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Monday ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Tuesday ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Wednesday ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Thursday ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Friday ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Saturday ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r45.bmr * ctx_r45.bmrWorkout[ctx_r45.selectedValue].bmr).toFixed(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r45.bmr * ctx_r45.bmrWorkout[ctx_r45.selectedValue].bmr).toFixed(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r45.bmr * ctx_r45.bmrWorkout[ctx_r45.selectedValue].bmr * 0.93).toFixed(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r45.bmr * ctx_r45.bmrWorkout[ctx_r45.selectedValue].bmr - 350).toFixed(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r45.bmr * ctx_r45.bmrWorkout[ctx_r45.selectedValue].bmr - 700).toFixed(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r45.bmr * ctx_r45.bmrWorkout[ctx_r45.selectedValue].bmr * 0.53).toFixed(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r45.bmr * ctx_r45.bmrWorkout[ctx_r45.selectedValue].bmr - 350).toFixed(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r45.bmr * ctx_r45.bmrWorkout[ctx_r45.selectedValue].bmr - 700).toFixed(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r45.bmr * ctx_r45.bmrWorkout[ctx_r45.selectedValue].bmr * 0.53).toFixed(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r45.bmr * ctx_r45.bmrWorkout[ctx_r45.selectedValue].bmr - 350).toFixed(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r45.bmr * ctx_r45.bmrWorkout[ctx_r45.selectedValue].bmr - 700).toFixed(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r45.bmr * ctx_r45.bmrWorkout[ctx_r45.selectedValue].bmr * 0.53).toFixed(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r45.bmr * ctx_r45.bmrWorkout[ctx_r45.selectedValue].bmr - 350).toFixed(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r45.bmr * ctx_r45.bmrWorkout[ctx_r45.selectedValue].bmr - 700).toFixed(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r45.bmr * ctx_r45.bmrWorkout[ctx_r45.selectedValue].bmr * 0.53).toFixed(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r45.bmr * ctx_r45.bmrWorkout[ctx_r45.selectedValue].bmr - 350).toFixed(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r45.bmr * ctx_r45.bmrWorkout[ctx_r45.selectedValue].bmr - 700).toFixed(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r45.bmr * ctx_r45.bmrWorkout[ctx_r45.selectedValue].bmr * 0.53).toFixed(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r45.bmr * ctx_r45.bmrWorkout[ctx_r45.selectedValue].bmr).toFixed(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r45.bmr * ctx_r45.bmrWorkout[ctx_r45.selectedValue].bmr).toFixed(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r45.bmr * ctx_r45.bmrWorkout[ctx_r45.selectedValue].bmr * 0.93).toFixed(0), " ");
} }
function DetailsComponent_div_85_table_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Day ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Mild Weight loss ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Weight loss ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Extreme Weight loss");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Sunday ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Monday ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Tuesday ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Wednesday ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Thursday ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Friday ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Saturday ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r46.bmr * ctx_r46.bmrWorkout[ctx_r46.selectedValue].bmr - 500).toFixed(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r46.bmr * ctx_r46.bmrWorkout[ctx_r46.selectedValue].bmr - 1000).toFixed(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r46.bmr * ctx_r46.bmrWorkout[ctx_r46.selectedValue].bmr - 1322).toFixed(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r46.bmr * ctx_r46.bmrWorkout[ctx_r46.selectedValue].bmr - 333).toFixed(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r46.bmr * ctx_r46.bmrWorkout[ctx_r46.selectedValue].bmr - 667).toFixed(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r46.bmr * ctx_r46.bmrWorkout[ctx_r46.selectedValue].bmr - 1107).toFixed(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r46.bmr * ctx_r46.bmrWorkout[ctx_r46.selectedValue].bmr - 167).toFixed(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r46.bmr * ctx_r46.bmrWorkout[ctx_r46.selectedValue].bmr - 333).toFixed(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r46.bmr * ctx_r46.bmrWorkout[ctx_r46.selectedValue].bmr - 839).toFixed(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r46.bmr * ctx_r46.bmrWorkout[ctx_r46.selectedValue].bmr).toFixed(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r46.bmr * ctx_r46.bmrWorkout[ctx_r46.selectedValue].bmr).toFixed(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r46.bmr * ctx_r46.bmrWorkout[ctx_r46.selectedValue].bmr - 678).toFixed(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r46.bmr * ctx_r46.bmrWorkout[ctx_r46.selectedValue].bmr - 83).toFixed(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r46.bmr * ctx_r46.bmrWorkout[ctx_r46.selectedValue].bmr - 167).toFixed(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r46.bmr * ctx_r46.bmrWorkout[ctx_r46.selectedValue].bmr - 780).toFixed(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r46.bmr * ctx_r46.bmrWorkout[ctx_r46.selectedValue].bmr - 250).toFixed(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r46.bmr * ctx_r46.bmrWorkout[ctx_r46.selectedValue].bmr - 500).toFixed(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r46.bmr * ctx_r46.bmrWorkout[ctx_r46.selectedValue].bmr - 1000).toFixed(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r46.bmr * ctx_r46.bmrWorkout[ctx_r46.selectedValue].bmr - 417).toFixed(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r46.bmr * ctx_r46.bmrWorkout[ctx_r46.selectedValue].bmr - 833).toFixed(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r46.bmr * ctx_r46.bmrWorkout[ctx_r46.selectedValue].bmr - 1215).toFixed(0), " ");
} }
function DetailsComponent_div_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Zig Zag Diet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Schedule 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DetailsComponent_div_85_table_7_Template, 73, 21, "table", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Schedule 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DetailsComponent_div_85_table_11_Template, 73, 21, "table", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r44.selectedValue != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r44.selectedValue != null);
} }
class DetailsComponent {
    constructor(dietPlanService) {
        this.dietPlanService = dietPlanService;
        this.selectedValue = null;
        this.bmrWorkout = [{ bmr: 1, per: 1 }, { bmr: 1.2, per: 0.10 }, { bmr: 1.375, per: 0.09 }, { bmr: 1.465, per: 0.08 }, { bmr: 1.55, per: 0.08 }, { bmr: 1.725, per: 0.07 },
            { bmr: 1.9, per: 0.06 }];
        this.details = { weight: null, feet: null, inch: null, bmi: null };
        this.dataSource = {
            "chart": {
                "lowerLimit": "0",
                "upperLimit": "45",
                "showValue": "1",
                "numberSuffix": "",
                "theme": "fusion",
                "showToolTip": "0"
            },
            "colorRange": {
                "color": [{
                        "minValue": "0",
                        "maxValue": "16",
                        "code": "#f20c21"
                    },
                    {
                        "minValue": "16",
                        "maxValue": "17",
                        "code": "#f24156"
                    },
                    {
                        "minValue": "17",
                        "maxValue": "18.5",
                        "code": "#f2919a"
                    },
                    {
                        "minValue": "18.5",
                        "maxValue": "25",
                        "code": "#10cc38"
                    },
                    {
                        "minValue": "25",
                        "maxValue": "30",
                        "code": "#fffe1d"
                    }, {
                        "minValue": "30",
                        "maxValue": "35",
                        "code": "#f2919a"
                    },
                    {
                        "minValue": "35",
                        "maxValue": "40",
                        "code": "#f24156"
                    },
                    {
                        "minValue": "40",
                        "maxValue": "45",
                        "code": "#f20c21"
                    },
                ]
            },
            "dials": {
                "dial": [{
                        "value": 0
                    }]
            }
        };
    }
    ngOnInit() {
        this.bmi();
        this.screenWidth();
        this.bmrCalc();
    }
    bmi() {
        let weight = this.dietPlanService.userCredentials.weight * 2.2;
        this.details.weight = this.dietPlanService.userCredentials.weight;
        let feet = this.dietPlanService.userCredentials.feet;
        this.details.feet = feet;
        let inch = this.dietPlanService.userCredentials.inch;
        this.details.inch = inch;
        let totalInches = (feet * 12) + inch;
        var bmi = ((weight / Math.pow(totalInches, 2)) * 703);
        this.dataSource.dials.dial[0].value = bmi;
        this.details.bmi = bmi;
    }
    screenWidth() {
        if (screen.width > 720) {
            this.width = (screen.width * 0.45);
            this.height = (screen.width * 0.25);
            console.log(this.width);
        }
        else if (screen.width < 720) {
            this.width = (screen.width * 0.80);
            this.height = (screen.width * 0.45);
        }
    }
    bmrCalc() {
        console.log(this.dietPlanService.userCredentials.gender);
        if (this.dietPlanService.userCredentials.gender == 'male') {
            let weight1 = this.dietPlanService.userCredentials.weight;
            let height1 = (this.dietPlanService.userCredentials.feet * 30.48) + (this.dietPlanService.userCredentials.inch * 2.54);
            let age = this.calculateAge(this.dietPlanService.userCredentials.dob);
            // console.log(age);
            this.bmr = (10 * weight1) + (6.25 * height1) - (5 * age) + 5;
            console.log(this.bmr);
        }
    }
    calculateAge(birthday) {
        const moonLanding = new Date(birthday);
        var ageDifMs = Date.now() - moonLanding.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}
DetailsComponent.ɵfac = function DetailsComponent_Factory(t) { return new (t || DetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_diet_plan_service__WEBPACK_IMPORTED_MODULE_1__["DietPlanService"])); };
DetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailsComponent, selectors: [["app-details"]], decls: 86, vars: 9, consts: [[1, "main-container"], [1, "head"], [2, "text-align", "center", "margin-top", "30px", "margin-bottom", "30px"], [1, "container1"], [1, "chart"], ["type", "angulargauge", "dataFormat", "json", 3, "width", "height", "dataSource"], [1, "bmiInfo"], ["id", "customers"], [1, "details"], [1, "container2"], [1, "workout"], [3, "ngModel", "ngModelChange"], ["value", "0"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], [1, "sheet"], ["id", "customers", 4, "ngIf"], ["class", "zig-zag group", 4, "ngIf"], [1, "zig-zag", "group"], [1, "diet1"], [1, "diet2"]], template: function DetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Your Body Analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Your BMI ( Body Mass Index )");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "fusioncharts", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Classification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "BMI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Severe thinness ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " < 16 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Moderate thinness ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " 16.00 to 16.99 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Mild thinness ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " 17.00 to 18.49 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Normal Range ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "18.50 to 24.99 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Pre Obese ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " 25.00 to 29.99 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Obese class I ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "30.00 to 34.99 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Obese class II ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " 35.00 to 39.99 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Obese class II ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " > 40 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Calorie Calculations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetailsComponent_Template_select_ngModelChange_67_listener($event) { return ctx.selectedValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "optgroup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Basel Metabolic Rate (BMR)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Sedentary: Little or no exercise");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Light: Exercise 1-3 times/week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Moderate: Exercise 4-5 times/week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Active: Daily exercise or intense exercise 3-4 times/week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Very Active: Intense exercise 6-7 times/week ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Extra Active: very intense exercise daily or Physical job");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, DetailsComponent_table_84_Template, 31, 5, "table", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, DetailsComponent_div_85_Template, 12, 2, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Your weight: ", ctx.details.weight, " Kgs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Your Height: ", ctx.details.feet, "''", ctx.details.inch, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("width", ctx.width);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("height", ctx.height);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedValue != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedValue != null);
    } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__["NavBarComponent"], angular_fusioncharts__WEBPACK_IMPORTED_MODULE_3__["FusionChartsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".main-container[_ngcontent-%COMP%]{\r\n  height: 100%;\r\n}\r\n\r\n\r\n.head[_ngcontent-%COMP%]{\r\n  width: 90%;\r\n  font-family:\"Great Vibes\",cursive;\r\n  background: white;\r\n  margin-left: 5%;\r\n  margin-top: 30px;\r\n  padding: 10px;\r\n}\r\n\r\n\r\n.head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n  font-size: 50px;\r\n  text-align: center;\r\n  color: #008000;\r\n}\r\n\r\n\r\n.container1[_ngcontent-%COMP%]{\r\n   width: 90%;\r\n   background: white;\r\n   margin-left: 5%;\r\n   margin-top: 20px;\r\n   padding: 20px;\r\n }\r\n\r\n\r\n.container2[_ngcontent-%COMP%]{\r\n  width: 90%;\r\n  min-height: 300px;\r\n  background: white;\r\n  margin-left: 5%;\r\n  margin-top: 20px;\r\n  padding: 20px;\r\n}\r\n\r\n\r\n.container1[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n   text-align: center;\r\n }\r\n\r\n\r\n.container2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n}\r\n\r\n\r\n.chart[_ngcontent-%COMP%]   fusioncharts[_ngcontent-%COMP%]{\r\n  float: left;\r\n  margin-left: 2%;\r\n}\r\n\r\n\r\n.container2[_ngcontent-%COMP%]   .sheet[_ngcontent-%COMP%]   #customers[_ngcontent-%COMP%]{\r\n  width: 70%;\r\n}\r\n\r\n\r\n.container2[_ngcontent-%COMP%]   .zig-zag[_ngcontent-%COMP%]{\r\n  margin-left: 30px;\r\n}\r\n\r\n\r\n.container2[_ngcontent-%COMP%]   .zig-zag[_ngcontent-%COMP%]   .diet1[_ngcontent-%COMP%]{\r\n  width: 45%;\r\n  float: left;\r\n}\r\n\r\n\r\n.container2[_ngcontent-%COMP%]   .zig-zag[_ngcontent-%COMP%]   .diet2[_ngcontent-%COMP%]{\r\n\r\n}\r\n\r\n\r\n.container2[_ngcontent-%COMP%]   .zig-zag[_ngcontent-%COMP%]   .diet1[_ngcontent-%COMP%]   #customers[_ngcontent-%COMP%]{\r\n\r\n  float: left;\r\n  margin-right: 30px;\r\n}\r\n\r\n\r\n.container2[_ngcontent-%COMP%]   .zig-zag[_ngcontent-%COMP%]   .diet2[_ngcontent-%COMP%]   #customers[_ngcontent-%COMP%]{\r\n  width: 40%;\r\n}\r\n\r\n\r\n.bmi[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\r\n  width: 30%;\r\n}\r\n\r\n\r\n.bmi[_ngcontent-%COMP%]   .bmiInfo[_ngcontent-%COMP%]   #customers[_ngcontent-%COMP%]{\r\n  width: 40%;\r\n  margin-right: 2.5%;\r\n  float: right;\r\n}\r\n\r\n\r\n.bmi[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.raphael-group-49-dataset-top-label[_ngcontent-%COMP%]   text[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n\r\n\r\n.raphael-group-sjvcNLsB[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n\r\n\r\n.workout[_ngcontent-%COMP%]{\r\n  margin-top: 30px;\r\n}\r\n\r\n\r\n.sheet[_ngcontent-%COMP%]{\r\n  margin-top: 30px;\r\n}\r\n\r\n\r\n@media screen and (max-width: 1020px){\r\n\r\n  .bmi[_ngcontent-%COMP%]   .bmiInfo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    float: right;\r\n  }\r\n}\r\n\r\n\r\n@media screen and (max-width: 720px) {\r\n\r\n\r\n  .container1[_ngcontent-%COMP%]   .bmiInfo[_ngcontent-%COMP%]{\r\n    margin-left: 10%;\r\n\r\n  }\r\n  .container1[_ngcontent-%COMP%]   .bmiInfo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 250px;\r\n  }\r\n}\r\n\r\n\r\n@media screen and (max-width: 420px) {\r\n\r\n.container1[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{\r\n  margin-top: 20px;\r\n  font-weight: bold;\r\n}\r\n  .container1[_ngcontent-%COMP%]   .bmiInfo[_ngcontent-%COMP%]{\r\n    margin-left: 10%;\r\n\r\n  }\r\n  .container1[_ngcontent-%COMP%]   .bmiInfo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 250px;\r\n  }\r\n\r\n  .container2[_ngcontent-%COMP%]   .workout[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{\r\n    width: 90%;\r\n\r\n  }\r\n  optgroup[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{\r\n    font-size: 16px;\r\n  }\r\n\r\n  .container2[_ngcontent-%COMP%]   .zig-zag[_ngcontent-%COMP%]   .diet1[_ngcontent-%COMP%]{\r\n    width: 80%;margin-right: 30px;\r\n    z-index: 999;\r\n  }\r\n  .container2[_ngcontent-%COMP%]   .zig-zag[_ngcontent-%COMP%]   .diet2[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    margin: unset;\r\n    z-index: 999;\r\n  }\r\n  .container2[_ngcontent-%COMP%]   .zig-zag[_ngcontent-%COMP%]   .diet1[_ngcontent-%COMP%]   #customers[_ngcontent-%COMP%]{\r\n\r\n  }\r\n  .container2[_ngcontent-%COMP%]   .zig-zag[_ngcontent-%COMP%]{\r\n    margin-left: 0px;\r\n  }\r\n  .container2[_ngcontent-%COMP%]   .zig-zag[_ngcontent-%COMP%]   .diet1[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   #customers[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n  }\r\n}\r\n\r\n\r\n#customers[_ngcontent-%COMP%] {\r\n  font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n  border-collapse: collapse;\r\n\r\n}\r\n\r\n\r\n#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  border: 1px solid #ddd;\r\n  padding: 8px;\r\n}\r\n\r\n\r\n#customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){background-color: #f2f2f2;}\r\n\r\n\r\n#customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {background-color: #ddd;}\r\n\r\n\r\n#customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  padding-top: 12px;\r\n  padding-bottom: 12px;\r\n  text-align: left;\r\n  background-color: #4CAF50;\r\n  color: white;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7OztBQUdBO0VBQ0UsVUFBVTtFQUNWLGlDQUFpQztFQUNqQyxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7OztBQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOzs7QUFFQTtHQUNHLFVBQVU7R0FDVixpQkFBaUI7R0FDakIsZUFBZTtHQUNmLGdCQUFnQjtHQUNoQixhQUFhO0NBQ2Y7OztBQUVEO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7OztBQUdBO0dBQ0csa0JBQWtCO0NBQ3BCOzs7QUFFRDtFQUNFLGtCQUFrQjtBQUNwQjs7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7OztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COzs7QUFDQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2I7OztBQUNBOztBQUVBOzs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOzs7QUFDQTtFQUNFLFVBQVU7QUFDWjs7O0FBR0E7RUFDRSxVQUFVO0FBQ1o7OztBQUNBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7OztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COzs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7OztBQUdBO0VBQ0UsZ0JBQWdCO0FBQ2xCOzs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7O0FBQ0E7O0VBRUU7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkO0FBQ0Y7OztBQUVBOzs7RUFHRTtJQUNFLGdCQUFnQjs7RUFFbEI7RUFDQTtJQUNFLFlBQVk7RUFDZDtBQUNGOzs7QUFFQTs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7RUFDRTtJQUNFLGdCQUFnQjs7RUFFbEI7RUFDQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFVBQVU7O0VBRVo7RUFDQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxVQUFVLENBQUMsa0JBQWtCO0lBQzdCLFlBQVk7RUFDZDtFQUNBO0lBQ0UsVUFBVTtJQUNWLGFBQWE7SUFDYixZQUFZO0VBQ2Q7RUFDQTs7RUFFQTtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7O0FBR0E7RUFDRSx5REFBeUQ7RUFDekQseUJBQXlCOztBQUUzQjs7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOzs7QUFFQSw4QkFBOEIseUJBQXlCLENBQUM7OztBQUV4RCxxQkFBcUIsc0JBQXNCLENBQUM7OztBQUU1QztFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixZQUFZOztBQUVkIiwiZmlsZSI6InNyYy9hcHAvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXJ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5cclxuLmhlYWR7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBmb250LWZhbWlseTpcIkdyZWF0IFZpYmVzXCIsY3Vyc2l2ZTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5oZWFkIGgye1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICMwMDgwMDA7XHJcbn1cclxuXHJcbi5jb250YWluZXIxe1xyXG4gICB3aWR0aDogOTAlO1xyXG4gICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICBwYWRkaW5nOiAyMHB4O1xyXG4gfVxyXG5cclxuLmNvbnRhaW5lcjJ7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG5cclxuLmNvbnRhaW5lcjEgaDJ7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuXHJcbi5jb250YWluZXIyIGgye1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY2hhcnQgZnVzaW9uY2hhcnRze1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi1sZWZ0OiAyJTtcclxufVxyXG5cclxuLmNvbnRhaW5lcjIgLnNoZWV0ICNjdXN0b21lcnN7XHJcbiAgd2lkdGg6IDcwJTtcclxufVxyXG4uY29udGFpbmVyMiAuemlnLXphZ3tcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG4uY29udGFpbmVyMiAuemlnLXphZyAuZGlldDF7XHJcbiAgd2lkdGg6IDQ1JTtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG4uY29udGFpbmVyMiAuemlnLXphZyAuZGlldDJ7XHJcblxyXG59XHJcblxyXG4uY29udGFpbmVyMiAuemlnLXphZyAuZGlldDEgI2N1c3RvbWVyc3tcclxuXHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG59XHJcbi5jb250YWluZXIyIC56aWctemFnIC5kaWV0MiAjY3VzdG9tZXJze1xyXG4gIHdpZHRoOiA0MCU7XHJcbn1cclxuXHJcblxyXG4uYm1pIC5kZXRhaWxzIHtcclxuICB3aWR0aDogMzAlO1xyXG59XHJcbi5ibWkgIC5ibWlJbmZvICNjdXN0b21lcnN7XHJcbiAgd2lkdGg6IDQwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDIuNSU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5ibWkgLmRldGFpbHMgcHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ucmFwaGFlbC1ncm91cC00OS1kYXRhc2V0LXRvcC1sYWJlbCB0ZXh0e1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5yYXBoYWVsLWdyb3VwLXNqdmNOTHNCe1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4ud29ya291dHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcbi5zaGVldHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjBweCl7XHJcblxyXG4gIC5ibWkgLmJtaUluZm8gaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xyXG5cclxuXHJcbiAgLmNvbnRhaW5lcjEgLmJtaUluZm97XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG5cclxuICB9XHJcbiAgLmNvbnRhaW5lcjEgLmJtaUluZm8gaW1ne1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcclxuXHJcbi5jb250YWluZXIxIC5kZXRhaWxze1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuICAuY29udGFpbmVyMSAuYm1pSW5mb3tcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcblxyXG4gIH1cclxuICAuY29udGFpbmVyMSAuYm1pSW5mbyBpbWd7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyMiAud29ya291dCBzZWxlY3R7XHJcbiAgICB3aWR0aDogOTAlO1xyXG5cclxuICB9XHJcbiAgb3B0Z3JvdXAgb3B0aW9ue1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lcjIgLnppZy16YWcgIC5kaWV0MXtcclxuICAgIHdpZHRoOiA4MCU7bWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gIH1cclxuICAuY29udGFpbmVyMiAuemlnLXphZyAuZGlldDJ7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiB1bnNldDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICB9XHJcbiAgLmNvbnRhaW5lcjIgLnppZy16YWcgLmRpZXQxICNjdXN0b21lcnN7XHJcblxyXG4gIH1cclxuICAuY29udGFpbmVyMiAuemlnLXphZ3tcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgfVxyXG4gIC5jb250YWluZXIyIC56aWctemFnIC5kaWV0MSB0YWJsZSAjY3VzdG9tZXJzIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuI2N1c3RvbWVycyB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuXHJcbn1cclxuXHJcbiNjdXN0b21lcnMgdGQsICNjdXN0b21lcnMgdGgge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG4jY3VzdG9tZXJzIHRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO31cclxuXHJcbiNjdXN0b21lcnMgdHI6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxyXG5cclxuI2N1c3RvbWVycyB0aCB7XHJcbiAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-details',
                templateUrl: './details.component.html',
                styleUrls: ['./details.component.css']
            }]
    }], function () { return [{ type: _diet_plan_service__WEBPACK_IMPORTED_MODULE_1__["DietPlanService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/diet-plan.service.ts":
/*!**************************************!*\
  !*** ./src/app/diet-plan.service.ts ***!
  \**************************************/
/*! exports provided: DietPlanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DietPlanService", function() { return DietPlanService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DietPlanService {
    constructor() {
        this.userCredentials = {};
        this.savedPlansArray = [];
        this.savedPlansTotals = [];
        this.savedPlansNametags = [];
        this.savedWorkoutPlansArray = [];
        this.savedWorkoutPlansTotals = [];
        this.savedWorkoutPlansNametags = [];
        this.plansIds = [];
        this.workoutPlansIds = [];
        this.token = null;
    }
}
DietPlanService.ɵfac = function DietPlanService_Factory(t) { return new (t || DietPlanService)(); };
DietPlanService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DietPlanService, factory: DietPlanService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DietPlanService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _diet_plan_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./diet-plan.service */ "./src/app/diet-plan.service.ts");







class HttpService {
    constructor(http, dietPlanService) {
        this.http = http;
        this.dietPlanService = dietPlanService;
    }
    onLogin(data) {
        return this.http.post('https://know-your-calories.herokuapp.com/login', data, { responseType: 'json' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something went wrong!');
        }));
    }
    onSignup(data) {
        return this.http.post('https://know-your-calories.herokuapp.com/signup', data, { responseType: 'text' });
    }
    onSendPlans(data) {
        return this.http.post('https://know-your-calories.herokuapp.com/plans', data, { responseType: 'json' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something went wrong!');
        }));
    }
    onEditName(data) {
        return this.http.post('https://know-your-calories.herokuapp.com/editname', data, { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something went wrong!');
        }));
    }
    onDeletePlan(data) {
        return this.http.post('https://know-your-calories.herokuapp.com/deleteplan', data, { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something went wrong!');
        }));
    }
    onSaveRecipeName(data) {
        return this.http.post('https://know-your-calories.herokuapp.com/saveRecipeName', data, { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something went wrong!');
        }));
    }
    onSendWorkoutPlans(data) {
        return this.http.post('https://know-your-calories.herokuapp.com/workoutPlans', data, { responseType: 'json' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something went wrong!');
        }));
    }
    onDeleteWorkoutPlan(data) {
        return this.http.post('https://know-your-calories.herokuapp.com/deleteWorkoutPlan', data, { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something went wrong!');
        }));
    }
    onEditWorkoutName(data) {
        return this.http.post('https://know-your-calories.herokuapp.com/editWorkoutName', data, { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something went wrong!');
        }));
    }
    onGetData(data) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        return this.http.post('https://know-your-calories.herokuapp.com/getData', data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Authorization': `Bearer ${this.dietPlanService.token}`, 'responseType': 'json' })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something went wrong!');
        }));
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_diet_plan_service__WEBPACK_IMPORTED_MODULE_4__["DietPlanService"])); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _diet_plan_service__WEBPACK_IMPORTED_MODULE_4__["DietPlanService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login.service.ts":
/*!**********************************!*\
  !*** ./src/app/login.service.ts ***!
  \**********************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LoginService {
    constructor() {
        this.isLoggedin = false;
    }
    setLoggedin(val) {
        this.isLoggedin = val;
    }
    get isLoggedStatus() {
        return this.isLoggedin;
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class NavBarComponent {
    constructor() {
        this.toggleItems = false;
    }
    ngOnInit() {
    }
    toggle() {
        if (this.toggleItems == false) {
            this.toggleItems = true;
            console.log(this.toggleItems);
            document.getElementById('items').style.display = 'block';
        }
        else if (this.toggleItems == true) {
            this.toggleItems = false;
            console.log(this.toggleItems);
            document.getElementById('items').style.display = 'none';
        }
    }
    toggleFalse() {
        this.toggleItems = false;
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 25, vars: 0, consts: [[1, "group"], [1, "toggle"], [3, "click"], ["aria-hidden", "true", 1, "fa", "fa-bars"], ["id", "items"], ["routerLink", "/create-plan"], ["routerLink", "/viewPlans"], ["routerLink", "/details"], ["routerLink", "/covid"], ["routerLink", "/settings"], ["routerLink", "/"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_a_click_3_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_a_click_8_listener() { return ctx.toggleFalse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Create Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "View Plans");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Body Analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Fight Covid-19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "SignOut");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["nav[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  background: green;\r\n\r\n  z-index: 99999;\r\n\r\n}\r\n  ul[_ngcontent-%COMP%]{\r\n  margin: 0 auto;\r\n  padding: 0;\r\n}\r\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  list-style: none;\r\n  display: inline-block;\r\n  padding: 20px;\r\n}\r\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n  background: #1fd302;\r\n}\r\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  color: white;\r\n  text-decoration: none;\r\n  padding: 6px;\r\n  border: 2px white solid;\r\n}\r\n  .toggle[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  padding: 10px 20px;\r\n  background: #006600;\r\n  text-align: right;\r\n  box-sizing: border-box;\r\n  color: white;\r\n  font-size: 30px;\r\n  display: none;\r\n}\r\n  @media screen and (max-width: 768px) {\r\n  .toggle[_ngcontent-%COMP%]{\r\n    display: block;\r\n  }\r\n  ul[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n  }\r\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    display: block;\r\n    text-align: center;\r\n  }\r\n  #items[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color: white;\r\n    text-decoration: none;\r\n    padding: 0;\r\n    border: 0;\r\n  }\r\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{\r\n    background: #1fd302;\r\n  }\r\n}\r\n  .group[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n  .group[_ngcontent-%COMP%]:before, .group[_ngcontent-%COMP%]:after {\r\n  content: \" \"; \r\n  display: table; \r\n}\r\n  .group[_ngcontent-%COMP%]:after {\r\n  clear: both;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUJBQW1CO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3ZCLElBQUk7RUFDSixlQUFlO0VBQ2IscUJBQXFCO0VBQ3ZCLElBQUk7RUFDSixpQkFBaUI7RUFDZixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDbEIsbUJBQW1CO0VBQ2pCLHNCQUFzQjtFQUN2QixpQ0FBaUM7RUFDaEMsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUd2QixJQUFJO0VBRUosa0JBQWtCO0VBQ2hCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGlDQUFpQztFQUNqQyxxQkFBcUI7RUFDdkIsSUFBSTtFQUdKLHdDQUF3QztFQUV0QyxlQUFlO0VBQ2IscUJBQXFCO0VBQ3ZCLElBQUk7RUFDSixpQkFBaUI7RUFDZixnQkFBZ0I7RUFDbEIsSUFBSTtFQUNKLGtCQUFrQjtFQUNoQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3ZCLElBQUk7RUFDTixJQUFJO0VBR0osV0FBVztFQUdYO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjs7RUFFakIsY0FBYzs7QUFFaEI7RUFDQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0FBQ1o7RUFFQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsYUFBYTtBQUNmO0VBR0E7RUFDRSxtQkFBbUI7QUFDckI7RUFDQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLHVCQUF1QjtBQUN6QjtFQUlBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7QUFDZjtFQUVBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsU0FBUztFQUNYO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7QUFDRjtFQUdBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtFQUNBOztFQUVFLFlBQVksRUFBRSxNQUFNO0VBQ3BCLGNBQWMsRUFBRSxNQUFNO0FBQ3hCO0VBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLm5hdmlnYXRpb24tYmFyeyovXHJcbiAgLypoZWlnaHQ6IDEwdmg7Ki9cclxuICAvKndpZHRoOiAxMDAlOyovXHJcbiAgLypiYWNrZ3JvdW5kOiBncmVlbjsqL1xyXG4vKn0qL1xyXG4vKi5uYXYtYnV0dG9ueyovXHJcbiAgLyptYXJnaW4tbGVmdDogNTBweDsqL1xyXG4vKn0qL1xyXG4vKi5uYXYtYnV0dG9uIGF7Ki9cclxuICAvKmZvbnQtd2VpZ2h0OiBib2xkOyovXHJcbiAgLypmbG9hdDogbGVmdDsqL1xyXG4gIC8qY29sb3I6IGdyZWVuOyovXHJcbiAgLypwYWRkaW5nOiA4cHg7Ki9cclxuLyptYXJnaW4tdG9wOiA4cHg7Ki9cclxuICAvKm1hcmdpbi1yaWdodDogMTBweDsqL1xyXG4gLypib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3dncmVlbjsqL1xyXG4gIC8qYm9yZGVyLXJhZGl1czogMTBweDsqL1xyXG4gIC8qYmFja2dyb3VuZDogd2hpdGU7Ki9cclxuXHJcblxyXG4vKn0qL1xyXG5cclxuLyoubmF2LXNpZ25vdXQgYXsqL1xyXG4gIC8qZm9udC13ZWlnaHQ6IGJvbGQ7Ki9cclxuICAvKmZsb2F0OiByaWdodDsqL1xyXG4gIC8qY29sb3I6IGdyZWVuOyovXHJcbiAgLypwYWRkaW5nOiA4cHg7Ki9cclxuICAvKm1hcmdpbi10b3A6IDhweDsqL1xyXG4gIC8qbWFyZ2luLXJpZ2h0OiAxMHB4OyovXHJcbiAgLypib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3dncmVlbjsqL1xyXG4gIC8qYmFja2dyb3VuZDogd2hpdGU7Ki9cclxuLyp9Ki9cclxuXHJcblxyXG4vKkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KXsqL1xyXG5cclxuICAvKi5uYXYtYnV0dG9ueyovXHJcbiAgICAvKm1hcmdpbi1sZWZ0OiAxNXB4OyovXHJcbiAgLyp9Ki9cclxuICAvKi5uYXYtYnV0dG9uIGF7Ki9cclxuICAgIC8qcGFkZGluZzogNnB4OyovXHJcbiAgLyp9Ki9cclxuICAvKi5uYXYtc2lnbm91dCBheyovXHJcbiAgICAvKnBhZGRpbmc6IDZweDsqL1xyXG4gICAgLyptYXJnaW4tcmlnaHQ6IDVweDsqL1xyXG4gIC8qfSovXHJcbi8qfSovXHJcblxyXG5cclxuLypuZXcgbWVudSovXHJcblxyXG5cclxubmF2e1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IGdyZWVuO1xyXG5cclxuICB6LWluZGV4OiA5OTk5OTtcclxuXHJcbn1cclxudWx7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxudWwgbGl7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuXHJcbnVsIGxpIGE6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZDogIzFmZDMwMjtcclxufVxyXG51bCBsaSBhe1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgcGFkZGluZzogNnB4O1xyXG4gIGJvcmRlcjogMnB4IHdoaXRlIHNvbGlkO1xyXG59XHJcblxyXG5cclxuXHJcbi50b2dnbGV7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGJhY2tncm91bmQ6ICMwMDY2MDA7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnRvZ2dsZXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICB1bHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICB1bCBsaXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAjaXRlbXN7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICB1bCBsaSBhe1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlcjogMDtcclxuICB9XHJcbiAgdWwgbGk6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMWZkMzAyO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5ncm91cHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmdyb3VwOmJlZm9yZSxcclxuLmdyb3VwOmFmdGVyIHtcclxuICBjb250ZW50OiBcIiBcIjsgLyogMSAqL1xyXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAyICovXHJcbn1cclxuXHJcbi5ncm91cDphZnRlciB7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function SettingsComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please select Gender.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SettingsComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please select DOB.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SettingsComponent_span_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SettingsComponent {
    constructor() {
        this.passCheck = false;
    }
    ngOnInit() {
        this.userSettings = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            feet: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            inch: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
        });
        this.passwordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            pwd: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            cpwd: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
        });
    }
    onUserSettings() {
        let dob = this.userSettings.value.dob;
        let gender = this.userSettings.value.gender;
        let weight = this.userSettings.value.weight;
        let feet = this.userSettings.value.feet;
        let inch = this.userSettings.value.inch;
    }
    onChangePwd() {
        if (this.passwordForm.value.pwd == this.passwordForm.value.cpwd) {
            this.passCheck = true;
            let pwd = this.passwordForm.value.pwd;
        }
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(); };
SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], decls: 51, vars: 8, consts: [[1, "main-container"], [1, "head"], [1, "signup"], [3, "formGroup", "ngSubmit"], [1, "gender", "form-group", "group", "radio-btns", 2, "margin-left", "8px"], [1, "radio", "inline", 2, "margin-right", "5px"], ["type", "radio", "id", "liq", "name", "gender", "value", "male", "formControlName", "gender"], ["for", "liq"], ["type", "radio", "id", "nut", "name", "gender", "value", "female", "formControlName", "gender"], ["for", "nut"], ["class", "text-muted", "style", "color: red;", 4, "ngIf"], [1, "dob", "form-group"], [2, "margin-right", "10px", "margin-left", "8px"], ["type", "date", "name", "dob", "formControlName", "dob", "required", ""], [1, "weight", "form-group"], ["type", "text", "id", "weight", "placeholder", "weight", "formControlName", "weight", "required", "", 1, "form-control", "input-lg"], [1, "height", "form-group"], ["type", "text", "id", "feet", "placeholder", "feet", "formControlName", "feet", "required", "", 1, "form-control", "input-lg"], ["type", "text", "id", "inch", "placeholder", "inches", "formControlName", "inch", "required", "", 1, "form-control", "input-lg"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], [1, "login"], [1, "pull-center"], [1, "form-group"], ["type", "password", "id", "password", "placeholder", "Password", "formControlName", "pwd", "pattern", "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}", "required", "", 1, "form-control", "input-lg"], ["type", "password", "id", "password2", "placeholder", "Confirm Password", "formControlName", "cpwd", "pattern", "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}", "required", "", 1, "form-control", "input-lg"], ["id", "message"], [1, "text-muted", 2, "color", "red"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SettingsComponent_Template_form_ngSubmit_6_listener() { return ctx.onUserSettings(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Change user details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Gender:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SettingsComponent_span_20_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Date of Birth:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SettingsComponent_span_25_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SettingsComponent_Template_form_ngSubmit_35_listener() { return ctx.onChangePwd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h1", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, SettingsComponent_span_42_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userSettings);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userSettings.controls["gender"].valid && (ctx.userSettings.controls["gender"] == null ? null : ctx.userSettings.controls["gender"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userSettings.controls["dob"].valid && (ctx.userSettings.controls["dob"] == null ? null : ctx.userSettings.controls["dob"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.userSettings.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.passwordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.passwordForm.controls["pwd"].valid && (ctx.passwordForm.controls["pwd"] == null ? null : ctx.passwordForm.controls["pwd"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.passCheck, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.passwordForm.valid);
    } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__["NavBarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"]], styles: [".main-container[_ngcontent-%COMP%]{\r\n  height: 100vh;\r\n  margin-top: 30px;\r\n  margin-left: 10%;\r\n}\r\n\r\n.head[_ngcontent-%COMP%]{\r\n  width: 90%;\r\n  font-family:\"Great Vibes\",cursive;\r\n  background: white;\r\n  margin-top: 30px;\r\n  padding: 10px 0;\r\n}\r\n\r\n.head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n  font-size: 50px;\r\n  color: #008000;\r\n  text-align: center;\r\n}\r\n\r\n.signup[_ngcontent-%COMP%]{\r\n  width: 40%;\r\n  float: left;\r\n  margin-top: 30px;\r\n  margin-bottom: 30px;\r\n  padding: 40px;\r\n  background: white;\r\n}\r\n\r\n.signup[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  font-size: 30px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.signup[_ngcontent-%COMP%]   .weight[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n  width: 50%;\r\n}\r\n\r\n.signup[_ngcontent-%COMP%]   .height[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n  width: 40%;\r\n  margin-right: 10px;\r\n  float: left;\r\n}\r\n\r\n.signup[_ngcontent-%COMP%]   .gender[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n  margin-left: 4px;\r\n}\r\n\r\n.signup[_ngcontent-%COMP%]   .gender[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n  margin-left: 2px;\r\n}\r\n\r\n.login[_ngcontent-%COMP%]{\r\n\r\n  width: 40%;\r\n  float: right;\r\n  margin-right: 10%;\r\n  margin-top: 30px;\r\n  margin-bottom: 30px;\r\n  padding: 40px;\r\n  background: white;\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n  .main-container[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n  }\r\n  .signup[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    margin-right: 10%;\r\n    float: none;\r\n  }\r\n  .login[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    margin-right: 10%;\r\n    float: none;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlDQUFpQztFQUNqQyxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFHQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFJQTs7RUFFRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBR0E7RUFDRTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixXQUFXO0VBQ2I7RUFDQTtJQUNFLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGFpbmVye1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG59XHJcblxyXG4uaGVhZHtcclxuICB3aWR0aDogOTAlO1xyXG4gIGZvbnQtZmFtaWx5OlwiR3JlYXQgVmliZXNcIixjdXJzaXZlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG59XHJcbi5oZWFkIGgye1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxuICBjb2xvcjogIzAwODAwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4uc2lnbnVwe1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIHBhZGRpbmc6IDQwcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5zaWdudXAgaDF7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5zaWdudXAgLndlaWdodCBpbnB1dHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcbi5zaWdudXAgLmhlaWdodCBpbnB1dHtcclxuICB3aWR0aDogNDAlO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG4uc2lnbnVwIC5nZW5kZXIgaW5wdXR7XHJcbiAgbWFyZ2luLWxlZnQ6IDRweDtcclxufVxyXG4uc2lnbnVwIC5nZW5kZXIgbGFiZWx7XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxufVxyXG5cclxuXHJcblxyXG4ubG9naW57XHJcblxyXG4gIHdpZHRoOiA0MCU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBwYWRkaW5nOiA0MHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAubWFpbi1jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIC5zaWdudXB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICB9XHJcbiAgLmxvZ2lue1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-settings',
                templateUrl: './settings.component.html',
                styleUrls: ['./settings.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _diet_plan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../diet-plan.service */ "./src/app/diet-plan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function SignupComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid username");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please select Gender.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please select DOB.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_span_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid username");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_span_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SignupComponent {
    constructor(dietService, router, http, httpService, loginService) {
        this.dietService = dietService;
        this.router = router;
        this.http = http;
        this.httpService = httpService;
        this.loginService = loginService;
        this.credentials = { username: 'roger', password: 'thebest1' };
    }
    ngOnInit() {
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            pwd: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            cpwd: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            feet: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            inch: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
        });
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            pwd: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
        });
    }
    onSignUp() {
        if (this.signupForm.value.pwd == this.signupForm.value.cpwd) {
            this.passCheck = true;
            let username = this.signupForm.value.username;
            let email = this.signupForm.value.email;
            let pwd = this.signupForm.value.cpwd;
            let dob = this.signupForm.value.dob;
            let gender = this.signupForm.value.gender;
            let weight = this.signupForm.value.weight;
            let feet = this.signupForm.value.feet;
            let inch = this.signupForm.value.inch;
            this.dietService.userCredentials = { username: username, email: email, password: pwd, dob: dob, weight: weight, feet: feet, inch: inch };
            this.httpService.onSignup({ username: username, email: email, password: pwd, dob: dob, gender: gender, weight: weight, feet: feet, inch: inch }).subscribe((response) => console.log(response), (error) => console.log(error));
            this.router.navigate(['/create-plan']);
        }
    }
    onLogin() {
        var name = this.loginForm.value.username;
        var pwd = this.loginForm.value.pwd;
        this.httpService.onLogin({ username: name, password: pwd }).subscribe((data) => {
            this.dietService.token = data.token;
            console.log(data.token);
            this.loginService.setLoggedin(true);
            this.httpService.onGetData({ username: name }).subscribe((data) => {
                console.log(data);
                this.dietService.userCredentials = { username: data.username, email: data.email, weight: data.weight, dob: data.dob, gender: data.gender, feet: data.feet, inch: data.inch };
                for (let i = 0; i < data.plans.length; i++) {
                    this.dietService.savedPlansArray[i] = data.plans[i].plan;
                    this.dietService.savedPlansNametags[i] = data.plans[i].nameTags;
                    this.dietService.savedPlansTotals[i] = data.plans[i].totals;
                    this.dietService.plansIds[i] = data.plans[i]._id;
                }
                for (let j = 0; j < data.workoutPlans.length; j++) {
                    this.dietService.savedWorkoutPlansArray[j] = data.workoutPlans[j].workoutPlan;
                    this.dietService.savedWorkoutPlansNametags[j] = data.workoutPlans[j].nameTags;
                    this.dietService.savedWorkoutPlansTotals[j] = data.workoutPlans[j].workoutTotals;
                    this.dietService.workoutPlansIds[j] = data.workoutPlans[j]._id;
                }
                console.log(data.plans);
                setTimeout(() => {
                    this.router.navigate(['/create-plan']);
                }, 1000);
            });
        }, (error) => console.log(error));
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_diet_plan_service__WEBPACK_IMPORTED_MODULE_2__["DietPlanService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 59, vars: 12, consts: [[1, "main-container"], [1, "signup"], [3, "formGroup", "ngSubmit"], [1, "pull-center"], [1, "form-group"], ["type", "text", "id", "username", "placeholder", "username", "formControlName", "username", "required", "", 1, "form-control", "input-lg"], ["class", "text-muted", "style", "color: red;", 4, "ngIf"], ["type", "email", "id", "email", "placeholder", "Email Address", "formControlName", "email", "required", "", "pattern", "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$", 1, "form-control", "input-lg"], ["type", "password", "id", "password", "placeholder", "Password", "formControlName", "pwd", "pattern", "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}", "required", "", 1, "form-control", "input-lg"], ["type", "password", "id", "password2", "placeholder", "Password2", "formControlName", "cpwd", "pattern", "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}", "required", "", 1, "form-control", "input-lg"], ["id", "message"], [1, "text-muted", 2, "color", "red"], [1, "gender", "form-group", "group", "radio-btns", 2, "margin-left", "8px"], [1, "radio", "inline", 2, "margin-right", "5px"], ["type", "radio", "id", "liq", "name", "gender", "value", "male", "formControlName", "gender"], ["for", "liq"], ["type", "radio", "id", "nut", "name", "gender", "value", "female", "formControlName", "gender"], ["for", "nut"], [1, "dob", "form-group"], [2, "margin-right", "10px", "margin-left", "8px"], ["type", "date", "name", "dob", "formControlName", "dob", "required", ""], [1, "weight", "form-group"], ["type", "text", "id", "weight", "placeholder", "weight", "formControlName", "weight", "required", "", 1, "form-control", "input-lg"], [1, "height", "form-group"], ["type", "text", "id", "feet", "placeholder", "feet", "formControlName", "feet", "required", "", 1, "form-control", "input-lg"], ["type", "text", "id", "inch", "placeholder", "inches", "formControlName", "inch", "required", "", 1, "form-control", "input-lg"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], [1, "login"], [1, ""], ["type", "email", "id", "lusername", "placeholder", "username", "formControlName", "username", "required", "", 1, "form-control", "input-lg"], ["class", "text-muted", 4, "ngIf"], ["type", "password", "id", "lpassword", "placeholder", "Password", "formControlName", "pwd", "required", "", 1, "form-control", "input-lg"], ["type", "submit", "value", "Sign In", 1, "btn", "btn-lg", "btn-success", 3, "disabled"], [1, "text-muted"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_3_listener() { return ctx.onSignUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SignupComponent_span_10_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SignupComponent_span_13_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SignupComponent_span_16_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Gender:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, SignupComponent_span_31_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Date of Birth:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, SignupComponent_span_36_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_46_listener() { return ctx.onLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h1", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Login in with Credentials ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, SignupComponent_span_52_Template, 2, 0, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, SignupComponent_span_55_Template, 2, 0, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signupForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.signupForm.controls["username"].valid && (ctx.signupForm.controls["username"] == null ? null : ctx.signupForm.controls["username"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.signupForm.controls["email"].valid && (ctx.signupForm.controls["email"] == null ? null : ctx.signupForm.controls["email"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.signupForm.controls["pwd"].valid && (ctx.signupForm.controls["pwd"] == null ? null : ctx.signupForm.controls["pwd"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.passCheck, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.signupForm.controls["gender"].valid && (ctx.signupForm.controls["gender"] == null ? null : ctx.signupForm.controls["gender"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.signupForm.controls["dob"].valid && (ctx.signupForm.controls["dob"] == null ? null : ctx.signupForm.controls["dob"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.signupForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loginForm.controls["username"].valid && (ctx.loginForm.controls["username"] == null ? null : ctx.loginForm.controls["username"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loginForm.controls["pwd"].valid && (ctx.loginForm.controls["pwd"] == null ? null : ctx.loginForm.controls["pwd"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"]], styles: ["body[_ngcontent-%COMP%]{\r\n  background: #008000;\r\n  background-size: cover;\r\n  width: 100%;\r\n  height: 100vh;\r\n\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n}\r\n\r\n.main-container[_ngcontent-%COMP%]{\r\n  width: 100%;\r\nposition: absolute;\r\n}\r\n\r\n.signup[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 40%;\r\n  float: left;\r\n  margin-left: 8%;\r\n  margin-top: 30px;\r\n  margin-bottom: 30px;\r\n  padding: 40px;\r\n  background: white;\r\n}\r\n\r\n.signup[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  font-size: 30px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.signup[_ngcontent-%COMP%]   .weight[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n  width: 50%;\r\n}\r\n\r\n.signup[_ngcontent-%COMP%]   .height[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n  width: 40%;\r\n  margin-right: 10px;\r\n  float: left;\r\n}\r\n\r\n.signup[_ngcontent-%COMP%]   .gender[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n  margin-left: 4px;\r\n}\r\n\r\n.signup[_ngcontent-%COMP%]   .gender[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n  margin-left: 2px;\r\n}\r\n\r\n.login[_ngcontent-%COMP%]{\r\n\r\n  width: 40%;\r\n  float: right;\r\n  margin-right: 8%;\r\n  margin-top: 30px;\r\n  margin-bottom: 30px;\r\n  padding: 40px;\r\n  background: white;\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\nbody[_ngcontent-%COMP%]{\r\n  height: 200vh;\r\n}\r\n  .signup[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    margin-left: 10%;\r\n    float: none;\r\n  }\r\n  .login[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    margin-left: 10%;\r\n    float: none;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsYUFBYTs7RUFFYiw0QkFBNEI7RUFDNUIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsV0FBVztBQUNiLGtCQUFrQjtBQUNsQjs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLFVBQVU7QUFDWjs7QUFDQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUlBOztFQUVFLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFHQTtBQUNBO0VBQ0UsYUFBYTtBQUNmO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYjtFQUNBO0lBQ0UsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgYmFja2dyb3VuZDogIzAwODAwMDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcblxyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxufVxyXG5cclxuLm1haW4tY29udGFpbmVye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcblxyXG4uc2lnbnVwe1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNDAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi1sZWZ0OiA4JTtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgcGFkZGluZzogNDBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLnNpZ251cCBoMXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLnNpZ251cCAud2VpZ2h0IGlucHV0e1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuLnNpZ251cCAuaGVpZ2h0IGlucHV0e1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5zaWdudXAgLmdlbmRlciBpbnB1dHtcclxuICBtYXJnaW4tbGVmdDogNHB4O1xyXG59XHJcbi5zaWdudXAgLmdlbmRlciBsYWJlbHtcclxuICBtYXJnaW4tbGVmdDogMnB4O1xyXG59XHJcblxyXG5cclxuXHJcbi5sb2dpbntcclxuXHJcbiAgd2lkdGg6IDQwJTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4JTtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgcGFkZGluZzogNDBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbmJvZHl7XHJcbiAgaGVpZ2h0OiAyMDB2aDtcclxufVxyXG4gIC5zaWdudXB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gIH1cclxuICAubG9naW57XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.css']
            }]
    }], function () { return [{ type: _diet_plan_service__WEBPACK_IMPORTED_MODULE_2__["DietPlanService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] }, { type: _login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/view-plan/view-plan.component.ts":
/*!**************************************************!*\
  !*** ./src/app/view-plan/view-plan.component.ts ***!
  \**************************************************/
/*! exports provided: ViewPlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPlanComponent", function() { return ViewPlanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _diet_plan_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../diet-plan.service */ "./src/app/diet-plan.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _view_workout_plans_view_workout_plans_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../view-workout-plans/view-workout-plans.component */ "./src/app/view-workout-plans/view-workout-plans.component.ts");








function ViewPlanComponent_div_13_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewPlanComponent_div_13_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.editName(1, i_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewPlanComponent_div_13_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewPlanComponent_div_13_ng_template_6_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.saveName(i_r18, _r29.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Save Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewPlanComponent_div_13_tr_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r33.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r33.sWeight);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((item_r33.sWeight * item_r33.kcal).toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((item_r33.sWeight * item_r33.protein).toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((item_r33.sWeight * item_r33.carbs).toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((item_r33.sWeight * item_r33.fat).toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((item_r33.sWeight * item_r33.sfat).toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((item_r33.sWeight * item_r33.DFib).toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((item_r33.sWeight * item_r33.sugar).toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((item_r33.sWeight * item_r33.sodium).toFixed(2));
} }
function ViewPlanComponent_div_13_div_56_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Recipe Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "textarea", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewPlanComponent_div_13_div_56_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); const i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.saveRecipe(i_r18, _r35.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Save Recipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewPlanComponent_div_13_ng_template_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Recipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r25.savedPlansNametags[i_r18].recipe);
} }
function ViewPlanComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewPlanComponent_div_13_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const i_r18 = ctx.index; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.showPlan(i_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ViewPlanComponent_div_13_div_5_Template, 3, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ViewPlanComponent_div_13_ng_template_6_Template, 4, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Item Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "(gms/ml)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "KCal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Protein");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Carbs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Fat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "S Fat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "D Fiber");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Sugar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Sodium");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ViewPlanComponent_div_13_tr_34_Template, 21, 10, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Total: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, ViewPlanComponent_div_13_div_56_Template, 7, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, ViewPlanComponent_div_13_ng_template_57_Template, 4, 1, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewPlanComponent_div_13_Template_button_click_59_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const i_r18 = ctx.index; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.deletePlan(i_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r18 = ctx.index;
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](58);
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Plan Name: \u00A0 ", ctx_r16.savedPlansNametags[i_r18].nameTag, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.savedPlansNametags[i_r18].editPlanName == 0)("ngIfElse", _r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Date: ", ctx_r16.savedPlansNametags[i_r18].date, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r16.savedPlansArray[i_r18]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r16.savedPlansTotals[i_r18].weight, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r16.savedPlansTotals[i_r18].kcal.toFixed(2), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.savedPlansTotals[i_r18].protein.toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.savedPlansTotals[i_r18].carbs.toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.savedPlansTotals[i_r18].fat.toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.savedPlansTotals[i_r18].sfat.toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.savedPlansTotals[i_r18].DFib.toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.savedPlansTotals[i_r18].sugar.toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.savedPlansTotals[i_r18].sodium.toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.savedPlansNametags[i_r18].editMode == 0)("ngIfElse", _r24);
} }
class ViewPlanComponent {
    constructor(dietPlanService, http, httpService) {
        this.dietPlanService = dietPlanService;
        this.http = http;
        this.httpService = httpService;
        this.prev = null;
        this.bol = false;
    }
    ngOnInit() {
        this.savedPlansArray = this.dietPlanService.savedPlansArray;
        this.savedPlansNametags = this.dietPlanService.savedPlansNametags;
        this.savedPlansTotals = this.dietPlanService.savedPlansTotals;
        let len = this.savedPlansTotals.length;
    }
    showPlan(i) {
        if (this.prev == null) {
            document.getElementsByClassName('content')[i]['style'].display = 'block';
            this.prev = i;
            this.bol = true;
        }
        else if (this.prev != null && this.prev == i && this.bol == true) {
            document.getElementsByClassName('content')[i]['style'].display = 'none';
            this.bol = false;
        }
        else if (this.prev != null && this.prev == i && this.bol == false) {
            document.getElementsByClassName('content')[i]['style'].display = 'block';
            this.bol = true;
        }
        else if (this.prev != null && this.prev != i) {
            document.getElementsByClassName('content')[i]['style'].display = 'block';
            document.getElementsByClassName('content')[this.prev]['style'].display = 'none';
            this.bol = true;
            this.prev = i;
        }
    }
    saveRecipe(index, recipe) {
        var recipe1 = recipe.replace("\r\n", "<br />\r\n");
        this.savedPlansNametags[index].recipe = recipe1;
        this.savedPlansNametags[index].editMode = 1;
        let username = this.dietPlanService.userCredentials.username;
        let id = this.dietPlanService.plansIds[index];
        console.log(recipe1);
        this.httpService.onSaveRecipeName({ username: username, index: index, id: id, recipe: recipe1 }).subscribe((response) => console.log(response), (error) => console.log(error));
    }
    deletePlan(index) {
        let username = this.dietPlanService.userCredentials.username;
        let plansId = this.dietPlanService.savedPlansArray[index][0]._id;
        let totalsId = this.dietPlanService.savedPlansTotals[index]._id;
        let tagsId = this.dietPlanService.savedPlansNametags[index]._id;
        let id = this.dietPlanService.plansIds[index];
        this.httpService.onDeletePlan({ username: username, index: index, id: id }).subscribe((response) => console.log(response), (error) => console.log(error));
        this.savedPlansNametags.splice(index, 1);
        this.savedPlansTotals.splice(index, 1);
        this.savedPlansArray.splice(index, 1);
        this.dietPlanService.plansIds.splice(index, 1);
    }
    editName(val, index) {
        this.savedPlansNametags[index].editPlanName = val;
        this.bol = false;
    }
    saveName(index, changedName) {
        let username = this.dietPlanService.userCredentials.username;
        this.savedPlansNametags[index].nameTag = changedName;
        this.savedPlansNametags[index].editPlanName = 0;
        this.bol = false;
        console.log(this.dietPlanService.plansIds[index]);
        let id = this.dietPlanService.plansIds[index];
        this.httpService.onEditName({ _id: id, nameTag: changedName, index: index, username: username }).subscribe((response) => console.log(response), (error) => console.log(error));
    }
    hide(val) {
        if (val == 0) {
            document.getElementById('plan1').style.display = 'block';
            document.getElementById('plan11').style.display = 'block';
            document.getElementById('plan2').style.display = 'none';
        }
        else if (val = 1) {
            console.log("hi");
            document.getElementById('plan11').style.display = 'none';
            document.getElementById('plan1').style.display = 'none';
            document.getElementById('plan2').style.display = 'block';
        }
    }
}
ViewPlanComponent.ɵfac = function ViewPlanComponent_Factory(t) { return new (t || ViewPlanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_diet_plan_service__WEBPACK_IMPORTED_MODULE_1__["DietPlanService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
ViewPlanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewPlanComponent, selectors: [["app-view-plan"]], decls: 15, vars: 1, consts: [[1, "total-container"], [1, "plan-menu"], [1, "nav-button"], [1, "nav-item", "nav-link", 3, "click"], [1, "main-container"], ["id", "plan1", 1, "head"], [2, "text-align", "center", "margin-top", "30px", "margin-bottom", "30px"], ["id", "plan11", 1, "container"], ["class", "message", 4, "ngFor", "ngForOf"], ["id", "plan2"], [1, "message"], [1, "message-outline"], ["type", "button", 1, "collapsible", 3, "click"], [4, "ngIf", "ngIfElse"], ["edit", ""], [2, "float", "right"], [1, "content"], [2, "width", "100%"], [1, "hide"], [4, "ngFor", "ngForOf"], ["viewRecipe", ""], ["type", "button", 1, "btn", "btn-danger", "deleteButton", 2, "float", "right", 3, "click"], [1, "btn-success", 3, "click"], ["type", "text", 2, "width", "20%"], ["changedName", ""], [2, "font-weight", "bold"], ["rows", "5", "cols", "50"], ["recipe", ""], [1, "btn", "btn-success", 3, "click"]], template: function ViewPlanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewPlanComponent_Template_a_click_4_listener() { return ctx.hide(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Your Diet Plans");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewPlanComponent_Template_a_click_6_listener() { return ctx.hide(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Your Workout Plans");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Your Diet Plans");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ViewPlanComponent_div_13_Template, 61, 16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-view-workout-plans", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.savedPlansArray);
    } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _view_workout_plans_view_workout_plans_component__WEBPACK_IMPORTED_MODULE_6__["ViewWorkoutPlansComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".total-container[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n}\r\n\r\n.navBarView[_ngcontent-%COMP%]{\r\n  margin-top: -20px;\r\n}\r\n\r\n.plan-menu[_ngcontent-%COMP%]{\r\n  margin-top: 10px;\r\n  height: 50px;\r\n}\r\n\r\n#plan2[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n\r\n.nav-button[_ngcontent-%COMP%]{\r\n  margin-left: 37%;\r\n}\r\n\r\n.nav-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n  float: left;\r\n  color: green;\r\n  padding: 8px;\r\n  margin-top: 8px;\r\n  margin-right: 10px;\r\n  border: 2px solid yellowgreen;\r\n  border-radius: 10px;\r\n  background: white;\r\n\r\n\r\n}\r\n\r\n.main-container[_ngcontent-%COMP%]{\r\n  min-height: 100vh;\r\n  height: 100%;\r\n\r\n}\r\n\r\n.head[_ngcontent-%COMP%]{\r\n  width: 90%;\r\n  font-family:\"Great Vibes\",cursive;\r\n  background: white;\r\n  margin-left: 5%;\r\n  margin-top: 30px;\r\n  padding: 1px 0;\r\n}\r\n\r\n.head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n  font-size: 50px;\r\n  color: #008000;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n  margin-top: 25px;\r\n}\r\n\r\n.collapsible[_ngcontent-%COMP%] {\r\n  background-color: #777;\r\n  color: white;\r\n  cursor: pointer;\r\n  padding: 18px;\r\n  width: 100%;\r\n  border: none;\r\n  text-align: left;\r\n  outline: none;\r\n  font-size: 15px;\r\n}\r\n\r\n.active[_ngcontent-%COMP%], .collapsible[_ngcontent-%COMP%]:hover {\r\n  background-color: #555;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  padding: 0 18px;\r\n  display: none;\r\n  overflow: hidden;\r\n  background-color: #f1f1f1;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  margin-top: 25px;\r\n  margin-bottom: 25px;\r\n  font-size: 16px;\r\n}\r\n\r\n.message-outline[_ngcontent-%COMP%]{\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]   .deleteButton[_ngcontent-%COMP%]{\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  width: 50%;\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n  .content[_ngcontent-%COMP%]{\r\n    font-size: 8px;\r\n  }\r\n  .hide[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n  .plan-menu[_ngcontent-%COMP%]   .nav-button[_ngcontent-%COMP%]{\r\n    margin-left: 8%;\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1wbGFuL3ZpZXctcGxhbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsaUJBQWlCOzs7QUFHbkI7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTs7QUFFZDs7QUFDQTtFQUNFLFVBQVU7RUFDVixpQ0FBaUM7RUFDakMsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUdBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUdBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUdBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGVBQWU7RUFDakI7O0FBRUYiLCJmaWxlIjoic3JjL2FwcC92aWV3LXBsYW4vdmlldy1wbGFuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG90YWwtY29udGFpbmVye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubmF2QmFyVmlld3tcclxuICBtYXJnaW4tdG9wOiAtMjBweDtcclxufVxyXG5cclxuLnBsYW4tbWVudXtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuI3BsYW4ye1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5uYXYtYnV0dG9ue1xyXG4gIG1hcmdpbi1sZWZ0OiAzNyU7XHJcbn1cclxuLm5hdi1idXR0b24gYXtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmbG9hdDogbGVmdDtcclxuICBjb2xvcjogZ3JlZW47XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgeWVsbG93Z3JlZW47XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHJcblxyXG59XHJcbi5tYWluLWNvbnRhaW5lcntcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG59XHJcbi5oZWFke1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgZm9udC1mYW1pbHk6XCJHcmVhdCBWaWJlc1wiLGN1cnNpdmU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgcGFkZGluZzogMXB4IDA7XHJcbn1cclxuLmhlYWQgaDJ7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIGNvbG9yOiAjMDA4MDAwO1xyXG59XHJcblxyXG4uY29udGFpbmVye1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcblxyXG4uY29sbGFwc2libGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3Nzc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiAxOHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4uYWN0aXZlLCAuY29sbGFwc2libGU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBwYWRkaW5nOiAwIDE4cHg7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbn1cclxuLmNvbnRlbnQgcHtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5tZXNzYWdlLW91dGxpbmV7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuXHJcbi5jb250ZW50IC5kZWxldGVCdXR0b257XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG5cclxuLmNvbnRlbnQgcHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5jb250ZW50e1xyXG4gICAgZm9udC1zaXplOiA4cHg7XHJcbiAgfVxyXG4gIC5oaWRle1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLnBsYW4tbWVudSAubmF2LWJ1dHRvbntcclxuICAgIG1hcmdpbi1sZWZ0OiA4JTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewPlanComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view-plan',
                templateUrl: './view-plan.component.html',
                styleUrls: ['./view-plan.component.css']
            }]
    }], function () { return [{ type: _diet_plan_service__WEBPACK_IMPORTED_MODULE_1__["DietPlanService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/view-workout-plans/view-workout-plans.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/view-workout-plans/view-workout-plans.component.ts ***!
  \********************************************************************/
/*! exports provided: ViewWorkoutPlansComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewWorkoutPlansComponent", function() { return ViewWorkoutPlansComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _diet_plan_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../diet-plan.service */ "./src/app/diet-plan.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function ViewWorkoutPlansComponent_div_5_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewWorkoutPlansComponent_div_5_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); const i_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r80.editName1(1, i_r75); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewWorkoutPlansComponent_div_5_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewWorkoutPlansComponent_div_5_ng_template_6_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86); const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const i_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r84.saveName1(i_r75, _r83.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Save Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewWorkoutPlansComponent_div_5_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r87 = ctx.$implicit;
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r87.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r87.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r87.mins);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((item_r87.mins * (item_r87.met * ctx_r79.personWeight / 200)).toFixed(2));
} }
function ViewWorkoutPlansComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewWorkoutPlansComponent_div_5_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); const i_r75 = ctx.index; const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r89.showPlan1(i_r75); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ViewWorkoutPlansComponent_div_5_div_5_Template, 3, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ViewWorkoutPlansComponent_div_5_ng_template_6_Template, 4, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Exercise Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Mins");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Calories Burnt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ViewWorkoutPlansComponent_div_5_tr_22_Template, 9, 4, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Total: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "> ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewWorkoutPlansComponent_div_5_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); const i_r75 = ctx.index; const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r91.deletePlan1(i_r75); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r75 = ctx.index;
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Plan Name: \u00A0 ", ctx_r73.savedWorkoutPlansNametags[i_r75].nameTag, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r73.savedWorkoutPlansNametags[i_r75].editPlanName == 0)("ngIfElse", _r77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Date: ", ctx_r73.savedWorkoutPlansNametags[i_r75].date, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r73.savedWorkoutPlansArray[i_r75]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r73.savedWorkoutPlansTotals[i_r75].mins, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r73.savedWorkoutPlansTotals[i_r75].calories.toFixed(2));
} }
class ViewWorkoutPlansComponent {
    constructor(dietPlanService, http, httpService) {
        this.dietPlanService = dietPlanService;
        this.http = http;
        this.httpService = httpService;
        this.prev1 = null;
        this.bol1 = false;
    }
    ngOnInit() {
        this.savedWorkoutPlansArray = this.dietPlanService.savedWorkoutPlansArray;
        console.log(this.savedWorkoutPlansArray);
        this.savedWorkoutPlansNametags = this.dietPlanService.savedWorkoutPlansNametags;
        this.savedWorkoutPlansTotals = this.dietPlanService.savedWorkoutPlansTotals;
        this.personWeight = this.dietPlanService.userCredentials.weight;
        console.log(this.savedWorkoutPlansNametags);
    }
    showPlan1(i) {
        if (this.prev1 == null) {
            document.getElementsByClassName('content1')[i]['style'].display = 'block';
            this.prev1 = i;
            this.bol1 = true;
        }
        else if (this.prev1 != null && this.prev1 == i && this.bol1 == true) {
            document.getElementsByClassName('content1')[i]['style'].display = 'none';
            this.bol1 = false;
        }
        else if (this.prev1 != null && this.prev1 == i && this.bol1 == false) {
            document.getElementsByClassName('content1')[i]['style'].display = 'block';
            this.bol1 = true;
        }
        else if (this.prev1 != null && this.prev1 != i) {
            document.getElementsByClassName('content1')[i]['style'].display = 'block';
            document.getElementsByClassName('content1')[this.prev1]['style'].display = 'none';
            this.bol1 = true;
            this.prev1 = i;
        }
    }
    saveRecipe1(index, recipe) {
    }
    deletePlan1(index) {
        let username = this.dietPlanService.userCredentials.username;
        let plansId = this.dietPlanService.savedPlansArray[index][0]._id;
        let totalsId = this.dietPlanService.savedPlansTotals[index]._id;
        let tagsId = this.dietPlanService.savedPlansNametags[index]._id;
        let id = this.dietPlanService.workoutPlansIds[index];
        this.httpService.onDeleteWorkoutPlan({ username: username, index: index, id: id }).subscribe((response) => console.log(response), (error) => console.log(error));
        this.savedWorkoutPlansNametags.splice(index, 1);
        this.savedWorkoutPlansTotals.splice(index, 1);
        this.savedWorkoutPlansArray.splice(index, 1);
        this.dietPlanService.plansIds.splice(index, 1);
    }
    editName1(val, index) {
        this.savedWorkoutPlansNametags[index].editPlanName = val;
        this.bol1 = false;
    }
    saveName1(index, changedName) {
        let username = this.dietPlanService.userCredentials.username;
        this.savedWorkoutPlansNametags[index].nameTag = changedName;
        this.savedWorkoutPlansNametags[index].editPlanName = 0;
        this.bol1 = false;
        let id = this.dietPlanService.workoutPlansIds[index];
        this.httpService.onEditWorkoutName({ _id: id, nameTag: changedName, index: index, username: username }).subscribe((response) => console.log(response), (error) => console.log(error));
    }
}
ViewWorkoutPlansComponent.ɵfac = function ViewWorkoutPlansComponent_Factory(t) { return new (t || ViewWorkoutPlansComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_diet_plan_service__WEBPACK_IMPORTED_MODULE_1__["DietPlanService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
ViewWorkoutPlansComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewWorkoutPlansComponent, selectors: [["app-view-workout-plans"]], decls: 6, vars: 1, consts: [[1, "main-container"], [1, "head"], [2, "text-align", "center", "margin-top", "30px", "margin-bottom", "30px"], [1, "container"], ["class", "message", 4, "ngFor", "ngForOf"], [1, "message"], [1, "message-outline"], ["type", "button", 1, "collapsible", 3, "click"], [4, "ngIf", "ngIfElse"], ["edit1", ""], [2, "float", "right"], [1, "content1"], [2, "width", "100%"], [2, "width", "35%"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-danger", "deleteButton", 2, "float", "right", 3, "click"], [1, "btn-success", 3, "click"], ["type", "text", 2, "width", "20%"], ["changedName1", ""]], template: function ViewWorkoutPlansComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Your Workout Plans");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ViewWorkoutPlansComponent_div_5_Template, 34, 7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.savedWorkoutPlansArray);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".plan-menu[_ngcontent-%COMP%]{\r\n  margin-top: 10px;\r\n  height: 50px;\r\n}\r\n\r\n#plan2[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n\r\n.nav-button[_ngcontent-%COMP%]{\r\n  margin-left: 37%;\r\n}\r\n\r\n.nav-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n  float: left;\r\n  color: green;\r\n  padding: 8px;\r\n  margin-top: 8px;\r\n  margin-right: 10px;\r\n  border: 2px solid yellowgreen;\r\n  border-radius: 10px;\r\n  background: white;\r\n\r\n\r\n}\r\n\r\n.main-container[_ngcontent-%COMP%]{\r\n  height: 100vh;\r\n}\r\n\r\n.head[_ngcontent-%COMP%]{\r\n  width: 90%;\r\n  font-family:\"Great Vibes\",cursive;\r\n  background: white;\r\n  margin-left: 5%;\r\n  margin-top: 30px;\r\n  padding: 1px 0;\r\n}\r\n\r\n.head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n  font-size: 50px;\r\n  color: #008000;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n  margin-top: 25px;\r\n}\r\n\r\n.collapsible[_ngcontent-%COMP%] {\r\n  background-color: #777;\r\n  color: white;\r\n  cursor: pointer;\r\n  padding: 18px;\r\n  width: 100%;\r\n  border: none;\r\n  text-align: left;\r\n  outline: none;\r\n  font-size: 15px;\r\n}\r\n\r\n.active[_ngcontent-%COMP%], .collapsible[_ngcontent-%COMP%]:hover {\r\n  background-color: #555;\r\n}\r\n\r\n.content1[_ngcontent-%COMP%] {\r\n  padding: 0 18px;\r\n  display: none;\r\n  overflow: hidden;\r\n  background-color: #f1f1f1;\r\n}\r\n\r\n.content1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  margin-top: 25px;\r\n  margin-bottom: 25px;\r\n  font-size: 16px;\r\n}\r\n\r\n.message-outline[_ngcontent-%COMP%]{\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.content1[_ngcontent-%COMP%]   .deleteButton[_ngcontent-%COMP%]{\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.content1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  width: 50%;\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n  .content1[_ngcontent-%COMP%]{\r\n    font-size: 8px;\r\n  }\r\n  .hide[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy13b3Jrb3V0LXBsYW5zL3ZpZXctd29ya291dC1wbGFucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsaUJBQWlCOzs7QUFHbkI7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsaUNBQWlDO0VBQ2pDLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFHQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFHQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsYUFBYTtFQUNmOztBQUVGIiwiZmlsZSI6InNyYy9hcHAvdmlldy13b3Jrb3V0LXBsYW5zL3ZpZXctd29ya291dC1wbGFucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBsYW4tbWVudXtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuI3BsYW4ye1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5uYXYtYnV0dG9ue1xyXG4gIG1hcmdpbi1sZWZ0OiAzNyU7XHJcbn1cclxuLm5hdi1idXR0b24gYXtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmbG9hdDogbGVmdDtcclxuICBjb2xvcjogZ3JlZW47XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgeWVsbG93Z3JlZW47XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHJcblxyXG59XHJcbi5tYWluLWNvbnRhaW5lcntcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcbi5oZWFke1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgZm9udC1mYW1pbHk6XCJHcmVhdCBWaWJlc1wiLGN1cnNpdmU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgcGFkZGluZzogMXB4IDA7XHJcbn1cclxuLmhlYWQgaDJ7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIGNvbG9yOiAjMDA4MDAwO1xyXG59XHJcblxyXG4uY29udGFpbmVye1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcblxyXG4uY29sbGFwc2libGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3Nzc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiAxOHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4uYWN0aXZlLCAuY29sbGFwc2libGU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XHJcbn1cclxuXHJcbi5jb250ZW50MSB7XHJcbiAgcGFkZGluZzogMCAxOHB4O1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG59XHJcbi5jb250ZW50MSBwe1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLm1lc3NhZ2Utb3V0bGluZXtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5cclxuLmNvbnRlbnQxIC5kZWxldGVCdXR0b257XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG5cclxuLmNvbnRlbnQxIHB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAuY29udGVudDF7XHJcbiAgICBmb250LXNpemU6IDhweDtcclxuICB9XHJcbiAgLmhpZGV7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewWorkoutPlansComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view-workout-plans',
                templateUrl: './view-workout-plans.component.html',
                styleUrls: ['./view-workout-plans.component.css']
            }]
    }], function () { return [{ type: _diet_plan_service__WEBPACK_IMPORTED_MODULE_1__["DietPlanService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/workout-plan/workout-plan.component.ts":
/*!********************************************************!*\
  !*** ./src/app/workout-plan/workout-plan.component.ts ***!
  \********************************************************/
/*! exports provided: WorkoutPlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutPlanComponent", function() { return WorkoutPlanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _diet_plan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../diet-plan.service */ "./src/app/diet-plan.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function WorkoutPlanComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkoutPlanComponent_div_29_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const i_r63 = ctx.index; const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r64.clickLeft1(i_r63); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r62 = ctx.$implicit;
    const i_r63 = ctx.index;
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r58.getBackgroundColor1(i_r63));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r62.name, " \u00A0", item_r62.description, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Calories:", (10 * (item_r62.met * ctx_r58.personWeight / 200)).toFixed(2), "");
} }
function WorkoutPlanComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkoutPlanComponent_div_46_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const i_r67 = ctx.index; const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r69.clickRight1(i_r67); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 40, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " mins ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkoutPlanComponent_div_46_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const i_r67 = ctx.index; const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r71.add(i_r67, _r68); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r66 = ctx.$implicit;
    const i_r67 = ctx.index;
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r60.getBackgroundColorRight1(i_r67));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r66.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Calories:", (item_r66.mins * 3.5 * (item_r66.met * ctx_r60.personWeight / 200)).toFixed(2), "");
} }
const _c0 = function (a0) { return [a0]; };
class WorkoutPlanComponent {
    constructor(dietPlanService, http, httpService) {
        this.dietPlanService = dietPlanService;
        this.http = http;
        this.httpService = httpService;
        this.personWeight = 0;
        this.selectedItemType1 = [];
        this.lastSelectedItemName = 'vegetables';
        this.todo1 = [
            'Get to work',
            'Pick up groceries',
            'Go home',
            'Fall asleep'
        ];
        this.vegetables1 = [{ name: 'Bicycling', itemType: 'vegetables', description: '12-13.9 mph (leisure, moderate effort)', met: 8.0, mins: 10 },
            { name: 'Bicycling', itemType: 'vegetables', description: 'mountain-biking, uphill, vigorous effort', met: 12.0, mins: 10 },
            { name: 'Stationary cycling', itemType: 'vegetables', description: '(moderate-to-vigorous effort / 90-100 watts)', met: 6.8, mins: 10 },
            { name: 'Jumping rope', itemType: 'vegetables', description: '', met: 12.3, mins: 10 },
            { name: 'Tennis ', itemType: 'vegetables', description: 'singles', met: 8.0, mins: 10 },
            { name: 'Sitting ', itemType: 'vegetables', description: 'watching a tv', met: 1.3, mins: 10 },
        ];
        this.done1 = [];
        this.total = {
            calories: 0,
            mins: 0
        };
        this.clickedFruites = [];
        this.clickedVegetables = [];
    }
    ngOnInit() {
        // this.vegetables = this.dietPlanService.vegetables;
        this.selectedItemType1 = this.vegetables1;
        this.personWeight = this.dietPlanService.userCredentials.weight;
    }
    drop1(event, arrayName) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
            console.log(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            if (arrayName == 'todo1') {
                if (this.done1[event.previousIndex].itemType == 'vegetables') {
                    this.done1[event.previousIndex].click = 0;
                    console.log(event.container.data);
                    //  this.vegetables.push(this.done[event.previousIndex]);
                    //this.done.splice(event.previousIndex, 1);
                    Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
                }
                else if (this.done1[event.previousIndex].itemType == 'fruites') {
                    this.done1[event.previousIndex].click = 0;
                    // this.fruites.push(this.done[event.previousIndex]);
                    // this.done.splice(event.previousIndex, 1);
                    Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
                }
            }
            else if (arrayName == 'done1') {
                this.selectedItemType1[event.previousIndex].click = 1;
                console.log(event.container.data);
                Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            }
            let str = this.vegetables1[event.previousIndex];
            // this.done.splice(event.currentIndex,0,str);
            this.totalValues();
        }
    }
    add(i, weight) {
        let integer = parseInt(weight.value, 10);
        this.done1[i].mins = integer;
        this.totalValues();
    }
    delete(i) {
        let val = this.done1[i];
        delete this.done1[i];
        console.log(this.done1);
        this.vegetables1.push(val);
    }
    saveWorkoutPlan(tag) {
        var vegetables1 = [{ name: 'Bicycling', description: '12-13.9 mph (leisure, moderate effort)', met: 8.0, mins: 10 },
            { name: 'Bicycling', description: 'mountain-biking, uphill, vigorous effort', met: 12.0, mins: 10 },
            { name: 'Stationary cycling', description: '(moderate-to-vigorous effort / 90-100 watts)', met: 6.8, mins: 10 },
            { name: 'Jumping rope', description: '', met: 12.3, mins: 10 },
            { name: 'Tennis ', description: 'singles', met: 8.0, mins: 10 },
            { name: 'Sitting ', description: 'watching a tv', met: 1.3, mins: 10 }
        ];
        this.dietPlanService.savedWorkoutPlansArray.push(this.done1);
        console.log(this.done1);
        this.dietPlanService.savedWorkoutPlansTotals.push(this.total);
        let date = Date().toString().slice(0, 24);
        console.log(this.dietPlanService.workoutPlansIds.length);
        this.httpService.onSendWorkoutPlans([this.done1, { nameTag: tag.value, date: date, editMode: 0, editPlanName: 0, recipe: "" }, this.total, { username: this.dietPlanService.userCredentials.username, tot: this.dietPlanService.plansIds.length }]).subscribe((response) => {
            console.log(response);
            this.dietPlanService.workoutPlansIds.push(response.id);
        }, (error) => console.log(error));
        this.dietPlanService.savedWorkoutPlansNametags.push({ nameTag: tag.value, date: date, editMode: 0, editPlanName: 0, recipe: "" });
        console.log({ nameTag: tag.value, date: date, editMode: 0, recipe: "" });
        this.done1 = [];
        // this.httpService.onSendTotals(this.total).subscribe(
        //   (response) => console.log(response),
        //   (error) => console.log(error)
        // );
        this.total = { calories: 0,
            mins: 0 };
        this.vegetables1 = vegetables1;
        this.selectedItemType1 = vegetables1;
        // console.log(this.dietPlanService.vegetables);
    }
    totalValues() {
        this.total = {
            calories: 0, mins: 0
        };
        for (let i = 0; i < this.done1.length; i++) {
            this.total.calories += (this.done1[i].met * 3.5 * this.personWeight / 200) * this.done1[i].mins;
            this.total.mins += this.done1[i].mins;
        }
        console.log(this.total);
    }
    changeItems(itemType) {
        if (itemType == "vegetables") {
            this.selectedItemType1 = this.vegetables1;
            this.lastSelectedItemName = itemType;
        }
        else if (itemType == "fruites") {
            // this.selectedItemType=this.fruites;
            this.lastSelectedItemName = itemType;
        }
    }
    clickLeft1(index) {
        if (this.lastSelectedItemName == 'vegetables') {
            if (this.vegetables1[index].click == 0) {
                this.vegetables1[index].click = 1;
                console.log(this.vegetables1[index]);
                //document.getElementById('highlight').style.backgroundColor = 'blue';
            }
            else {
                this.vegetables1[index].click = 0;
                // document.getElementById('highlight').style.backgroundColor = 'white';
            }
        }
        else if (this.lastSelectedItemName == 'fruites') {
            // if(this.fruites[index].click == 0){
            //   this.fruites[index].click = 1;
            // }
            // else{
            //   this.fruites[index].click = 0;
            // }
        }
    }
    getBackgroundColor1(i) {
        if (this.lastSelectedItemName == 'vegetables') {
            if (this.selectedItemType1[i].click == 1) {
                return '#aeff60';
            }
            else {
                return 'white';
            }
        }
        else if (this.lastSelectedItemName == 'fruites') {
            if (this.selectedItemType1[i].click == 1) {
                return '#aeff60';
            }
            else {
                return 'white';
            }
        }
    }
    getBackgroundColorRight1(i) {
        if (this.done1[i].click == 0) {
            return '#aeff60';
        }
        else {
            return 'white';
        }
    }
    clickRight1(index) {
        if (this.lastSelectedItemName == 'vegetables') {
            if (this.done1[index].click == 1) {
                this.done1[index].click = 0;
                console.log(this.done1[index]);
            }
            else {
                this.done1[index].click = 1;
            }
        }
        else if (this.lastSelectedItemName == 'fruites') {
            if (this.done1[index].click == 1) {
                this.done1[index].click = 0;
            }
            else {
                this.done1[index].click = 1;
            }
        }
    }
    rightMove1() {
        if (this.lastSelectedItemName == 'vegetables') {
            for (let i = this.vegetables1.length - 1; i >= 0; i--) {
                if (this.vegetables1[i].click == 1) {
                    this.done1.push(this.vegetables1[i]);
                    this.vegetables1.splice(i, 1);
                    this.totalValues();
                }
            }
        }
        else if (this.lastSelectedItemName == 'fruites') {
            // for(let i=this.fruites.length-1 ;i>=0;i--){
            //   if(this.fruites[i].click ==1){
            //     this.done.push(this.fruites[i]);
            //     this.fruites.splice(i,1);
            //     this.totalValues();
            //
            //   }
            // }
        }
    }
    leftMove1() {
        for (let i = this.done1.length - 1; i >= 0; i--) {
            if (this.done1[i].click == 0) {
                console.log('hi');
                if (this.done1[i].itemType == 'vegetables') {
                    console.log('hi');
                    this.vegetables1.push(this.done1[i]);
                    this.done1.splice(i, 1);
                    this.totalValues();
                }
                else if (this.done1[i].itemType == 'fruites') {
                    // this.fruites.push(this.done[i]);
                    // this.done.splice(i,1);
                    // this.totalValues();
                }
            }
        }
    }
}
WorkoutPlanComponent.ɵfac = function WorkoutPlanComponent_Factory(t) { return new (t || WorkoutPlanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_diet_plan_service__WEBPACK_IMPORTED_MODULE_2__["DietPlanService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"])); };
WorkoutPlanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkoutPlanComponent, selectors: [["app-workout-plan"]], decls: 58, vars: 11, consts: [[1, "head"], [2, "text-align", "center", "margin-top", "30px", "margin-bottom", "30px"], [1, "main-container1"], [1, "box-1"], [1, "example-container", 2, "float", "left"], [1, "items", "group"], ["type", "radio", "id", "vege", "name", "drone", "value", "huey", "checked", "", 3, "click"], ["for", "vege"], ["type", "radio", "id", "fru", "name", "drone", "value", "dewey", 3, "click"], ["for", "fru"], ["type", "radio", "id", "liq", "name", "drone", "value", "louie", 3, "click"], ["for", "liq"], ["type", "radio", "id", "nut", "name", "drone", "value", "louie", 3, "click"], ["for", "nut"], ["type", "radio", "id", "sed", "name", "drone", "value", "louie", 3, "click"], ["for", "sed"], ["type", "radio", "id", "oth", "name", "drone", "value", "louie", 3, "click"], ["for", "oth"], ["cdkDropList", "", 1, "example-list", "group", 3, "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped"], ["toDoList1", "cdkDropList"], ["id", "highlight", "class", "example-box group", "cdkDrag", "", 3, "background-color", "click", 4, "ngFor", "ngForOf"], [1, "arrows", "hide", 2, "float", "left"], [3, "click"], [1, "fas", "fa-arrow-alt-circle-right", 2, "width", "25px", "height", "25px"], [1, "fas", "fa-arrow-alt-circle-left", 2, "width", "25px", "height", "25px"], [1, "arrowsMobile", "show", 2, "float", "left"], [1, "fas", "fa-arrow-alt-circle-up", 2, "width", "25px", "height", "25px"], [1, "fas", "fa-arrow-alt-circle-down", 2, "width", "25px", "height", "25px"], [1, "box-2"], ["cdkDropList", "", 1, "example-list", 2, "min-height", "230px", "margin-top", "40px", 3, "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped"], ["doneList1", "cdkDropList"], ["class", "example-box group", "cdkDrag", "", 3, "background-color", "click", 4, "ngFor", "ngForOf"], [1, "container", "group"], ["type", "text", "required", "", 2, "width", "30%"], ["tag", ""], [1, "btn", "btn-success", 3, "disabled", "click"], ["id", "highlight", "cdkDrag", "", 1, "example-box", "group", 3, "click"], [2, "font-size", "15px"], ["cdkDrag", "", 1, "example-box", "group", 3, "click"], [2, "text-align", "center"], ["type", "number", "value", "10"], ["weight", ""], [1, "btn-success", 3, "click"]], template: function WorkoutPlanComponent_Template(rf, ctx) { if (rf & 1) {
        const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Create Your Workout Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "EXERCISE LIST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkoutPlanComponent_Template_input_click_9_listener() { return ctx.changeItems("vegetables"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Vegetables");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkoutPlanComponent_Template_input_click_12_listener() { return ctx.changeItems("fruites"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Fruites");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkoutPlanComponent_Template_input_click_15_listener() { return ctx.changeItems("liquids"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Liquids");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkoutPlanComponent_Template_input_click_18_listener() { return ctx.changeItems("nuts"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Nuts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkoutPlanComponent_Template_input_click_21_listener() { return ctx.changeItems("seeds"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Seeds and Dal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkoutPlanComponent_Template_input_click_24_listener() { return ctx.changeItems("others"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Others");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function WorkoutPlanComponent_Template_div_cdkDropListDropped_27_listener($event) { return ctx.drop1($event, "todo1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, WorkoutPlanComponent_div_29_Template, 5, 5, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkoutPlanComponent_Template_a_click_31_listener() { return ctx.rightMove1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkoutPlanComponent_Template_a_click_33_listener() { return ctx.leftMove1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkoutPlanComponent_Template_a_click_36_listener() { return ctx.leftMove1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkoutPlanComponent_Template_a_click_38_listener() { return ctx.rightMove1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "CHOOSEN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 29, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function WorkoutPlanComponent_Template_div_cdkDropListDropped_44_listener($event) { return ctx.drop1($event, "done1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, WorkoutPlanComponent_div_46_Template, 10, 4, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Name Tag : \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 33, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkoutPlanComponent_Template_button_click_56_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72); const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](55); return ctx.saveWorkoutPlan(_r61); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Save Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);
        const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", ctx.selectedItemType1)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, _r59));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectedItemType1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", ctx.done1)("cdkDropListConnectedTo", _r57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.done1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Calories:", ctx.total.calories.toFixed(2), "Mins:", ctx.total.mins, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.done1.length == 0);
    } }, directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"]], styles: [".head[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  margin-top: 30px;\r\n  margin-left: 5%;\r\n  background-color: white;\r\n  padding: 5px;\r\n}\r\n.head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n\r\n  font-family:\"Great Vibes\",cursive;\r\n  font-size: 50px;\r\n  color: #008000;\r\n}\r\n.main-container1[_ngcontent-%COMP%]{\r\n  padding:40px 20px;\r\n  width: 90%;\r\n  margin-top: 40px;\r\n  margin-left: 5%;\r\n  background-color: white;\r\n  overflow: auto;\r\n\r\n}\r\nh2[_ngcontent-%COMP%]{\r\n  font-family:\"Great Vibes\",cursive;\r\n  font-size: 35px;\r\n  color: #008000;\r\n}\r\n.example-container[_ngcontent-%COMP%] {\r\n  width: 45%;\r\n  max-width: 100%;\r\n\r\n\r\n  display: inline-block;\r\n  vertical-align: top;\r\n  overflow: auto;\r\n}\r\n.example-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n  font-family: inherit;\r\n\r\n}\r\n.box-1[_ngcontent-%COMP%]{\r\n  margin-left: 4%;\r\n}\r\n.container[_ngcontent-%COMP%]{\r\n  margin-top: 20px;\r\n  float: left;\r\n}\r\n.example-list[_ngcontent-%COMP%] {\r\n  border: solid 2px #008000;\r\n  min-height: 150px;\r\n  max-height: 100vh;\r\n  background: #008000;\r\n  border-radius: 4px;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  display: block;\r\n\r\n}\r\n.example-box[_ngcontent-%COMP%] {\r\n  padding: 20px 10px;\r\n  border-bottom: solid 2px #008000;\r\n  color: rgba(0, 0, 0, 0.87);\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  box-sizing: border-box;\r\n  cursor: move;\r\n  background: white;\r\n  font-size: 14px;\r\n  color: #008000;\r\n}\r\ninput[type=text][_ngcontent-%COMP%]{\r\n  width: 20%;\r\n}\r\ninput[type=radio][_ngcontent-%COMP%]{\r\n  width: 5%;\r\n}\r\n.arrows[_ngcontent-%COMP%]{\r\n  width: 3%;\r\n  margin-top: 20%;\r\n  margin-left: 10px;\r\n}\r\n.arrowsMobile[_ngcontent-%COMP%]{\r\n  margin-left: 38%;\r\n  margin-top: 10%;\r\n  float: left;\r\n}\r\n.arrowsMobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  margin-left: 10px;\r\n\r\n}\r\n.show[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n.group[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n.group[_ngcontent-%COMP%]:before, .group[_ngcontent-%COMP%]:after {\r\n  content: \" \"; \r\n  display: table; \r\n}\r\n.group[_ngcontent-%COMP%]:after {\r\n  clear: both;\r\n}\r\n@media  screen and (max-width:720px)   {\r\n  .example-container[_ngcontent-%COMP%]{\r\n    width: 90%;\r\n  }\r\n}\r\n.cdk-drag-preview[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n  border-radius: 4px;\r\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n  0 8px 10px 1px rgba(0, 0, 0, 0.14),\r\n  0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n}\r\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n}\r\n.cdk-drag-animating[_ngcontent-%COMP%] {\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n.example-box[_ngcontent-%COMP%]:last-child {\r\n  border: none;\r\n}\r\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n@media screen and (max-width: 480px) {\r\n  h2[_ngcontent-%COMP%]{\r\n    font-size: 24px;\r\n  }\r\n  .example-container[_ngcontent-%COMP%]{\r\n    margin: 5%;\r\n  }\r\n  .hide[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n  .show[_ngcontent-%COMP%]{\r\n    display: block;\r\n  }\r\n  .box-2[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    width: 70%;\r\n  }\r\n  .items[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n    margin-left: 5px;\r\n    margin-right: 6px;\r\n  }\r\n\r\n}\r\n@media screen and (max-width: 1024px){\r\n  .arrows[_ngcontent-%COMP%]{\r\n    margin-right: 10px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29ya291dC1wbGFuL3dvcmtvdXQtcGxhbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDtBQUNBOztFQUVFLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YsY0FBYztBQUNoQjtBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixjQUFjOztBQUVoQjtBQUdBO0VBQ0UsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixjQUFjO0FBQ2hCO0FBSUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTs7O0VBR2YscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxvQkFBb0I7O0FBRXRCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsY0FBYzs7QUFFaEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0FBYztBQUNoQjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFJQTtFQUNFLFNBQVM7RUFDVCxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFdBQVc7QUFDYjtBQUNBO0VBQ0UsaUJBQWlCOztBQUVuQjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBQ0E7O0VBRUUsWUFBWSxFQUFFLE1BQU07RUFDcEIsY0FBYyxFQUFFLE1BQU07QUFDeEI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUlBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRjtBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQjs7b0NBRWtDO0FBQ3BDO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLHNEQUFzRDtBQUN4RDtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxzREFBc0Q7QUFDeEQ7QUFHQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7QUFFRjtBQUdBO0VBQ0U7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3dvcmtvdXQtcGxhbi93b3Jrb3V0LXBsYW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG4uaGVhZCBoMntcclxuXHJcbiAgZm9udC1mYW1pbHk6XCJHcmVhdCBWaWJlc1wiLGN1cnNpdmU7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIGNvbG9yOiAjMDA4MDAwO1xyXG59XHJcblxyXG5cclxuLm1haW4tY29udGFpbmVyMXtcclxuICBwYWRkaW5nOjQwcHggMjBweDtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG5cclxufVxyXG5cclxuXHJcbmgye1xyXG4gIGZvbnQtZmFtaWx5OlwiR3JlYXQgVmliZXNcIixjdXJzaXZlO1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxuICBjb2xvcjogIzAwODAwMDtcclxufVxyXG5cclxuXHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIge1xyXG4gIHdpZHRoOiA0NSU7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG5cclxuXHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5leGFtcGxlLWNvbnRhaW5lciBoMntcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuXHJcbn1cclxuLmJveC0xe1xyXG4gIG1hcmdpbi1sZWZ0OiA0JTtcclxufVxyXG4uY29udGFpbmVye1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5leGFtcGxlLWxpc3Qge1xyXG4gIGJvcmRlcjogc29saWQgMnB4ICMwMDgwMDA7XHJcbiAgbWluLWhlaWdodDogMTUwcHg7XHJcbiAgbWF4LWhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZDogIzAwODAwMDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcblxyXG59XHJcblxyXG4uZXhhbXBsZS1ib3gge1xyXG4gIHBhZGRpbmc6IDIwcHggMTBweDtcclxuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggIzAwODAwMDtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBjdXJzb3I6IG1vdmU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjMDA4MDAwO1xyXG59XHJcbmlucHV0W3R5cGU9dGV4dF17XHJcbiAgd2lkdGg6IDIwJTtcclxufVxyXG5pbnB1dFt0eXBlPXJhZGlvXXtcclxuICB3aWR0aDogNSU7XHJcbn1cclxuXHJcblxyXG5cclxuLmFycm93c3tcclxuICB3aWR0aDogMyU7XHJcbiAgbWFyZ2luLXRvcDogMjAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbi5hcnJvd3NNb2JpbGV7XHJcbiAgbWFyZ2luLWxlZnQ6IDM4JTtcclxuICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLmFycm93c01vYmlsZSBhe1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cclxufVxyXG5cclxuLnNob3d7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmdyb3Vwe1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZ3JvdXA6YmVmb3JlLFxyXG4uZ3JvdXA6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiIFwiOyAvKiAxICovXHJcbiAgZGlzcGxheTogdGFibGU7IC8qIDIgKi9cclxufVxyXG5cclxuLmdyb3VwOmFmdGVyIHtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3MjBweCkgICB7XHJcbiAgLmV4YW1wbGUtY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICB9XHJcbn1cclxuXHJcbi5jZGstZHJhZy1wcmV2aWV3IHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcblxyXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1hbmltYXRpbmcge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufVxyXG5cclxuLmV4YW1wbGUtYm94Omxhc3QtY2hpbGQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmV4YW1wbGUtbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5leGFtcGxlLWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICBoMntcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICB9XHJcbiAgLmV4YW1wbGUtY29udGFpbmVye1xyXG4gICAgbWFyZ2luOiA1JTtcclxuICB9XHJcbiAgLmhpZGV7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuc2hvd3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAuYm94LTIgLmV4YW1wbGUtYm94IGlucHV0e1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICB9XHJcbiAgLml0ZW1zIGxhYmVse1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpe1xyXG4gIC5hcnJvd3N7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkoutPlanComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-workout-plan',
                templateUrl: './workout-plan.component.html',
                styleUrls: ['./workout-plan.component.css']
            }]
    }], function () { return [{ type: _diet_plan_service__WEBPACK_IMPORTED_MODULE_2__["DietPlanService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\RogerFederer\WebstormProjects\dietplan\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map