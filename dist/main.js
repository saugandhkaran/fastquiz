(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/quiz/quiz.component */ "./src/app/components/quiz/quiz.component.ts");
/* harmony import */ var _components_category_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/category/category.component */ "./src/app/components/category/category.component.ts");
/* harmony import */ var _components_result_result_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/result/result.component */ "./src/app/components/result/result.component.ts");







var routes = [
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'quiz/:category',
        component: _components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_4__["QuizComponent"]
    },
    {
        path: 'category',
        component: _components_category_category_component__WEBPACK_IMPORTED_MODULE_5__["CategoryComponent"]
    },
    {
        path: 'result',
        component: _components_result_result_component__WEBPACK_IMPORTED_MODULE_6__["ResultComponent"]
    },
    { path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'fastQuiz';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/quiz/quiz.component */ "./src/app/components/quiz/quiz.component.ts");
/* harmony import */ var _components_shared_quiz_card_quiz_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/shared/quiz-card/quiz-card.component */ "./src/app/components/shared/quiz-card/quiz-card.component.ts");
/* harmony import */ var _components_category_category_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/category/category.component */ "./src/app/components/category/category.component.ts");
/* harmony import */ var _components_shared_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/shared/header/header.component */ "./src/app/components/shared/header/header.component.ts");
/* harmony import */ var _components_shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/shared/loader/loader.component */ "./src/app/components/shared/loader/loader.component.ts");
/* harmony import */ var _components_result_result_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/result/result.component */ "./src/app/components/result/result.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_8__["QuizComponent"],
                _components_shared_quiz_card_quiz_card_component__WEBPACK_IMPORTED_MODULE_9__["QuizCardComponent"],
                _components_category_category_component__WEBPACK_IMPORTED_MODULE_10__["CategoryComponent"],
                _components_shared_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _components_shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__["LoaderComponent"],
                _components_result_result_component__WEBPACK_IMPORTED_MODULE_13__["ResultComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/category/category.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/category/category.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"content\">\n<h3>Categories</h3>\n\n<div class=\"categories\" >\n  <div class=\"category-card\" *ngFor=\"let category of categories\" (click)=\"moveToQuiz(category.category)\">\n    <img [src]=\"category.img\" />\n    <div class=\"category-footer\">\n      {{category.label}}\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/category/category.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/category/category.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".categories {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center; }\n\n.category-card {\n  box-shadow: -1px 4px 5px 0px rgba(0, 0, 0, 0.75);\n  width: 150px;\n  padding-bottom: 6px;\n  border-radius: 6px;\n  background-color: #990556;\n  margin-left: 12px;\n  margin-right: 12px;\n  margin-bottom: 12px; }\n\n.category-card .category-footer {\n    color: white; }\n\n.category-card img {\n    border-top-left-radius: 6px;\n    border-top-right-radius: 6px; }\n\n.content {\n  max-width: 1024px;\n  margin: 0 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYXVnYW5kaGthcmFuL0Rlc2t0b3Avc29sdXRpb25zL2Zhc3RxdWl6L3NyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yeS9jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHVCQUF1QixFQUFBOztBQUczQjtFQUdJLGdEQUE2QztFQUM3QyxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix5QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFWdkI7SUFZUSxZQUFZLEVBQUE7O0FBWnBCO0lBZ0JRLDJCQUEyQjtJQUMzQiw0QkFBNEIsRUFBQTs7QUFJcEM7RUFDSSxpQkFBaUI7RUFDakIsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yeS9jYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXRlZ29yaWVzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY2F0ZWdvcnktY2FyZCB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDRweCA1cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAtMXB4IDRweCA1cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgYm94LXNoYWRvdzogLTFweCA0cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM5OTA1NTY7XG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgLmNhdGVnb3J5LWZvb3RlciB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XG4gICAgfVxufVxuXG4uY29udGVudCB7XG4gICAgbWF4LXdpZHRoOiAxMDI0cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/components/category/category.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/category/category.component.ts ***!
  \***********************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(router) {
        this.router = router;
        this.categories = [
            {
                label: 'General Knowledge',
                category: '9',
                img: '../../assets/gk.png'
            },
            {
                label: 'Books',
                category: '10',
                img: '../../assets/books.png'
            },
            {
                label: 'Films',
                category: '11',
                img: '../../assets/film.png'
            },
            {
                label: 'Computers',
                category: '18',
                img: '../../assets/computer.png'
            },
            {
                label: 'Mathematics',
                category: '19',
                img: '../../assets/math.png'
            },
            {
                label: 'Vehicles',
                category: '28',
                img: '../../assets/vehicles.png'
            },
            {
                label: 'Gadgets',
                category: '30',
                img: '../../assets/gadget.png'
            },
            {
                label: 'Anime & Manga',
                category: '31',
                img: '../../assets/anime.png'
            },
            {
                label: 'Cartoon & Animations',
                category: '32',
                img: '../../assets/cartoon.png'
            }
        ];
        this.difficulty = [
            {
                label: 'Easy',
                difficulty: 'easy'
            },
            {
                label: 'Medium',
                difficulty: 'medium'
            },
            {
                label: 'Hard',
                difficulty: 'hard'
            }
        ];
    }
    CategoryComponent.prototype.ngOnInit = function () {
    };
    CategoryComponent.prototype.moveToQuiz = function (category) {
        this.router.navigate(['/quiz', category]);
    };
    CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! ./category.component.html */ "./src/app/components/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.scss */ "./src/app/components/category/category.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <p class=\"branding\">Quiz Up!</p>\n  <h3>Enter your name</h3><br>\n  <input type=\"text\" placeholder=\"I am ...\" [(ngModel)]=\"name\"/>\n  <br><br>\n  <button class=\"btn-primary\" type=\"submit\" (click)=\"onSubmit()\">Play!</button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  background-image: linear-gradient(to right, #c9861c, #cb6528, #c34438, #b32448, #990556);\n  display: flex;\n  height: 100vh;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: white; }\n\nh3 {\n  margin: 0; }\n\ninput {\n  text-align: center; }\n\n.branding {\n  font-size: 3em;\n  padding-bottom: 60px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYXVnYW5kaGthcmFuL0Rlc2t0b3Avc29sdXRpb25zL2Zhc3RxdWl6L3NyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdGQUF3RjtFQUN4RixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxTQUFTLEVBQUE7O0FBRWI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxjQUFjO0VBQ2Qsb0JBQW9CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2M5ODYxYywgI2NiNjUyOCwgI2MzNDQzOCwgI2IzMjQ0OCwgIzk5MDU1Nik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbmgzIHtcbiAgICBtYXJnaW46IDA7XG59XG5pbnB1dCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnJhbmRpbmcge1xuICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
        this.nameAvailable = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.getName();
    };
    LoginComponent.prototype.getName = function () {
        if (localStorage.getItem('fastquiz-name')) {
            this.name = localStorage.getItem('fastquiz-name');
            this.nameAvailable = true;
        }
        else {
            this.nameAvailable = false;
        }
    };
    LoginComponent.prototype.onSubmit = function () {
        localStorage.setItem('fastquiz-name', this.name);
        this.router.navigateByUrl('/category');
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/quiz/quiz.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/quiz/quiz.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<!-- <div [ngClass]=\"{'timer': showTimer, 'none': !showTimer}\"></div> -->\n<div class=\"content\">\n  <h3>Question {{counter + 1}}</h3>\n  <div class=\"questions-options\">\n    <div class=\"questions\">\n      <h2 [innerHtml]=\"questions[counter].question\"></h2>\n      <div class=\"options-container\" *ngIf=\"questions\">\n          <div *ngFor=\"let option of questions[counter].options\" class=\"options\">\n              <button class=\"btn-primary option\" (click)=\"nextQuestion(option)\" [innerHtml]=\"option\"></button>\n            </div>\n      </div>\n    \n  </div>\n</div>\n\n\n<app-loader *ngIf=\"!areQuestionsLoaded\"></app-loader>\n"

/***/ }),

/***/ "./src/app/components/quiz/quiz.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/quiz/quiz.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  height: 90vh;\n  max-width: 80%;\n  margin: 0 auto; }\n\n.options {\n  margin-top: 10px; }\n\n.options-container {\n  margin-top: 20vh; }\n\n.timer {\n  background-image: linear-gradient(to right, #3ef512, #a6cd00, #d89f00, #f36700, #f9021f);\n  height: 6px;\n  -webkit-animation: timelimit 10s;\n          animation: timelimit 10s;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear; }\n\n@-webkit-keyframes timelimit {\n  from {\n    width: 0%; }\n  to {\n    width: 100%; } }\n\n@keyframes timelimit {\n  from {\n    width: 0%; }\n  to {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYXVnYW5kaGthcmFuL0Rlc2t0b3Avc29sdXRpb25zL2Zhc3RxdWl6L3NyYy9hcHAvY29tcG9uZW50cy9xdWl6L3F1aXouY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osY0FBYztFQUNkLGNBQWMsRUFBQTs7QUFHbEI7RUFDRyxnQkFBZ0IsRUFBQTs7QUFHbkI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSx3RkFBd0Y7RUFDeEYsV0FBVztFQUNYLGdDQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIseUNBQWlDO1VBQWpDLGlDQUFpQyxFQUFBOztBQUlyQztFQUNJO0lBQU0sU0FBUyxFQUFBO0VBQ2Y7SUFBSSxXQUFXLEVBQUEsRUFBQTs7QUFHbkI7RUFDSTtJQUFNLFNBQVMsRUFBQTtFQUNmO0lBQUksV0FBVyxFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3F1aXovcXVpei5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcbiAgICBoZWlnaHQ6IDkwdmg7XG4gICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5vcHRpb25zIHtcbiAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5vcHRpb25zLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMjB2aDtcbn1cblxuLnRpbWVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzZWY1MTIsICNhNmNkMDAsICNkODlmMDAsICNmMzY3MDAsICNmOTAyMWYpO1xuICAgIGhlaWdodDogNnB4O1xuICAgIGFuaW1hdGlvbjogdGltZWxpbWl0IDEwcztcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgXG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyB0aW1lbGltaXQge1xuICAgIGZyb20ge3dpZHRoOiAwJX1cbiAgICB0byB7d2lkdGg6IDEwMCV9XG59XG5cbkBrZXlmcmFtZXMgdGltZWxpbWl0IHtcbiAgICBmcm9tIHt3aWR0aDogMCV9XG4gICAgdG8ge3dpZHRoOiAxMDAlfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/quiz/quiz.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/quiz/quiz.component.ts ***!
  \***************************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/utilities/utilities.service */ "./src/app/services/utilities/utilities.service.ts");
/* harmony import */ var _services_question_service_question_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/question-service/question-service.service */ "./src/app/services/question-service/question-service.service.ts");
/* harmony import */ var _services_result_service_result_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/result-service/result-service.service */ "./src/app/services/result-service/result-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var QuizComponent = /** @class */ (function () {
    function QuizComponent(utility, questionService, route, router, resultService) {
        this.utility = utility;
        this.questionService = questionService;
        this.route = route;
        this.router = router;
        this.resultService = resultService;
        this.areQuestionsLoaded = false;
        this.counter = 0;
        this.questions = [];
        this.feededAnswers = [];
        this.category = '';
        this.answers = [];
        this.showTimer = false;
    }
    QuizComponent.prototype.ngOnInit = function () {
        this.getTheCategory();
        this.getSetOfQuestions();
    };
    QuizComponent.prototype.getTheCategory = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.category = params['category'];
        });
    };
    QuizComponent.prototype.getSetOfQuestions = function () {
        var _this = this;
        this.questionService.getSetOfQuestions(this.category, 'medium')
            .subscribe(function (data) {
            _this.questions = _this.utility.setQuestions(data);
            _this.answers = _this.utility.setAnswers(data);
            _this.areQuestionsLoaded = true;
            _this.showTimer = true;
            console.log(_this.questions);
        }, function (error) {
            console.log(error);
        });
    };
    QuizComponent.prototype.nextQuestion = function (answer) {
        if (this.counter < 9) {
            this.feededAnswers.push(answer);
            this.counter++;
        }
        else {
            this.feededAnswers.push(answer);
            this.showResults(this.feededAnswers);
        }
    };
    QuizComponent.prototype.showResults = function (feededAnswers) {
        var fedAnswers = this.feededAnswers.slice();
        var actualAnswers = this.answers.slice();
        this.resultService.evaluateResult(fedAnswers, actualAnswers);
        this.router.navigateByUrl('/result');
    };
    QuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quiz',
            template: __webpack_require__(/*! ./quiz.component.html */ "./src/app/components/quiz/quiz.component.html"),
            styles: [__webpack_require__(/*! ./quiz.component.scss */ "./src/app/components/quiz/quiz.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_2__["UtilitiesService"],
            _services_question_service_question_service_service__WEBPACK_IMPORTED_MODULE_3__["QuestionServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_result_service_result_service_service__WEBPACK_IMPORTED_MODULE_4__["ResultServiceService"]])
    ], QuizComponent);
    return QuizComponent;
}());



/***/ }),

/***/ "./src/app/components/result/result.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/result/result.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"content\">\n<div class=\"result-summary\">\n<h3>{{name}} you scored </h3>\n  <h1>{{score}} / 10 </h1>\n</div>\n<div class=\"stars\">\n  <div class=\"success-stars\" *ngFor=\"let star of successStars\"><img src=\"../../../assets/001-star-1.svg\"></div>\n  <div class=\"unreachable-stars\" *ngFor=\"let star of emptyStars\"><img src=\"../../../assets/002-star.svg\"></div>\n</div>\n<h3>{{message}}</h3>\n\n<div class=\"share\">\n  <h3>Share with your friends</h3>\n  <!-- Sharingbutton Facebook -->\n\n<!-- Sharingbutton WhatsApp -->\n<a class=\"resp-sharing-button__link\" href=\"whatsapp://send?text=Did%20you%20check%20this%20new%20quiz%20app%3F%20It%20is%20fast%20and%20interesting!%20https%3A%2F%2Ffastquiz.herokuapp.com%2F%20\" target=\"_blank\" rel=\"noopener\" aria-label=\"Share on WhatsApp\">\n  <div class=\"resp-sharing-button resp-sharing-button--whatsapp resp-sharing-button--large\"><div aria-hidden=\"true\" class=\"resp-sharing-button__icon resp-sharing-button__icon--solid\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M20.1 3.9C17.9 1.7 15 .5 12 .5 5.8.5.7 5.6.7 11.9c0 2 .5 3.9 1.5 5.6L.6 23.4l6-1.6c1.6.9 3.5 1.3 5.4 1.3 6.3 0 11.4-5.1 11.4-11.4-.1-2.8-1.2-5.7-3.3-7.8zM12 21.4c-1.7 0-3.3-.5-4.8-1.3l-.4-.2-3.5 1 1-3.4L4 17c-1-1.5-1.4-3.2-1.4-5.1 0-5.2 4.2-9.4 9.4-9.4 2.5 0 4.9 1 6.7 2.8 1.8 1.8 2.8 4.2 2.8 6.7-.1 5.2-4.3 9.4-9.5 9.4zm5.1-7.1c-.3-.1-1.7-.9-1.9-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1s-1.2-.5-2.3-1.4c-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6s.3-.3.4-.5c.2-.1.3-.3.4-.5.1-.2 0-.4 0-.5C10 9 9.3 7.6 9 7c-.1-.4-.4-.3-.5-.3h-.6s-.4.1-.7.3c-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.3-.3-.4-.6-.5z\"/></svg>\n    </div>WhatsApp</div>\n</a>\n\n</div>\n\n<div class=\"play-again\">\n    <button class=\"btn-primary option\"> Play Again</button>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/components/result/result.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/result/result.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  width: 30px; }\n\n.result-summary {\n  text-align: center; }\n\n.stars {\n  width: 200px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center; }\n\n.share {\n  padding-top: 10vh; }\n\n.play-again {\n  margin-top: 10vh;\n  padding-bottom: 10vh; }\n\n.resp-sharing-button__link,\n.resp-sharing-button__icon {\n  display: inline-block; }\n\n.resp-sharing-button__link {\n  text-decoration: none;\n  color: #fff;\n  margin: 0.5em; }\n\n.resp-sharing-button {\n  border-radius: 5px;\n  transition: 25ms ease-out;\n  padding: 0.5em 0.75em;\n  font-family: Helvetica Neue,Helvetica,Arial,sans-serif; }\n\n.resp-sharing-button__icon svg {\n  width: 1em;\n  height: 1em;\n  margin-right: 0.4em;\n  vertical-align: top; }\n\n.resp-sharing-button--small svg {\n  margin: 0;\n  vertical-align: middle; }\n\n/* Non solid icons get a stroke */\n\n.resp-sharing-button__icon {\n  stroke: #fff;\n  fill: none; }\n\n/* Solid icons get a fill */\n\n.resp-sharing-button__icon--solid,\n.resp-sharing-button__icon--solidcircle {\n  fill: #fff;\n  stroke: none; }\n\n.resp-sharing-button--whatsapp {\n  background-color: #25D366; }\n\n.resp-sharing-button--whatsapp:hover {\n  background-color: #1da851; }\n\n.resp-sharing-button--whatsapp {\n  background-color: #25D366;\n  border-color: #25D366; }\n\n.resp-sharing-button--whatsapp:hover,\n.resp-sharing-button--whatsapp:active {\n  background-color: #1DA851;\n  border-color: #1DA851; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYXVnYW5kaGthcmFuL0Rlc2t0b3Avc29sdXRpb25zL2Zhc3RxdWl6L3NyYy9hcHAvY29tcG9uZW50cy9yZXN1bHQvcmVzdWx0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksWUFBWTtFQUNaLGNBQWM7RUFDZCxhQUFhO0VBQ2IsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksZ0JBQWdCO0VBQ2hCLG9CQUFtQixFQUFBOztBQUd2Qjs7RUFFRSxxQkFDRixFQUFBOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxhQUNGLEVBQUE7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixzREFDRixFQUFBOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsbUJBQ0YsRUFBQTs7QUFFQTtFQUNFLFNBQVM7RUFDVCxzQkFDRixFQUFBOztBQUVBLGlDQUFBOztBQUNBO0VBQ0UsWUFBWTtFQUNaLFVBQ0YsRUFBQTs7QUFFQSwyQkFBQTs7QUFDQTs7RUFFRSxVQUFVO0VBQ1YsWUFDRixFQUFBOztBQUVBO0VBQ0UseUJBQ0YsRUFBQTs7QUFFQTtFQUNFLHlCQUNGLEVBQUE7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCLEVBQUE7O0FBR3ZCOztFQUVFLHlCQUF5QjtFQUN6QixxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzdWx0L3Jlc3VsdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG4gICAgd2lkdGg6IDMwcHg7XG59XG5cbi5yZXN1bHQtc3VtbWFyeSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3RhcnMge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc2hhcmUge1xuICAgIHBhZGRpbmctdG9wOiAxMHZoO1xufVxuXG4ucGxheS1hZ2FpbiB7XG4gICAgbWFyZ2luLXRvcDogMTB2aDtcbiAgICBwYWRkaW5nLWJvdHRvbToxMHZoO1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbl9fbGluayxcbi5yZXNwLXNoYXJpbmctYnV0dG9uX19pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrXG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uX19saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAwLjVlbVxufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogMjVtcyBlYXNlLW91dDtcbiAgcGFkZGluZzogMC41ZW0gMC43NWVtO1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWUsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWZcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b25fX2ljb24gc3ZnIHtcbiAgd2lkdGg6IDFlbTtcbiAgaGVpZ2h0OiAxZW07XG4gIG1hcmdpbi1yaWdodDogMC40ZW07XG4gIHZlcnRpY2FsLWFsaWduOiB0b3Bcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXNtYWxsIHN2ZyB7XG4gIG1hcmdpbjogMDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZVxufVxuXG4vKiBOb24gc29saWQgaWNvbnMgZ2V0IGEgc3Ryb2tlICovXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbl9faWNvbiB7XG4gIHN0cm9rZTogI2ZmZjtcbiAgZmlsbDogbm9uZVxufVxuXG4vKiBTb2xpZCBpY29ucyBnZXQgYSBmaWxsICovXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbl9faWNvbi0tc29saWQsXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbl9faWNvbi0tc29saWRjaXJjbGUge1xuICBmaWxsOiAjZmZmO1xuICBzdHJva2U6IG5vbmVcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXdoYXRzYXBwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1RDM2NlxufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0td2hhdHNhcHA6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWRhODUxXG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS13aGF0c2FwcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNUQzNjY7XG4gIGJvcmRlci1jb2xvcjogIzI1RDM2Njtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXdoYXRzYXBwOmhvdmVyLFxuLnJlc3Atc2hhcmluZy1idXR0b24tLXdoYXRzYXBwOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxREE4NTE7XG4gIGJvcmRlci1jb2xvcjogIzFEQTg1MTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/result/result.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/result/result.component.ts ***!
  \*******************************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_result_service_result_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/result-service/result-service.service */ "./src/app/services/result-service/result-service.service.ts");



var ResultComponent = /** @class */ (function () {
    function ResultComponent(resultService) {
        this.resultService = resultService;
        this.message = '';
        this.stars = 0;
        this.score = 0;
        this.successStars = [];
        this.emptyStars = [];
        this.name = '';
    }
    ResultComponent.prototype.ngOnInit = function () {
        this.getTheResult();
        this.getName();
    };
    ResultComponent.prototype.getName = function () {
        this.name = localStorage.getItem('fastquiz-name');
    };
    ResultComponent.prototype.getTheResult = function () {
        this.score = this.resultService.getResult();
        this.setStars(this.score);
    };
    ResultComponent.prototype.setStars = function (score) {
        this.stars = Math.round(score / 2);
        this.successStars = Array(this.stars).fill(0);
        this.emptyStars = Array(5 - this.stars).fill(0);
        this.setMessage(this.stars);
    };
    ResultComponent.prototype.setMessage = function (stars) {
        switch (stars) {
            case 0:
                this.message = 'Why don\'t we start over again ?';
                break;
            case 1:
                this.message = 'You can do a lot better. Why not try again?';
                break;
            case 2:
                this.message = 'Practice makes a man/woman perfect';
                break;
            case 3:
                this.message = 'Average! But you have a lot more potential!!';
                break;
            case 4:
                this.message = 'One more step to the moon!! Well done!!';
                break;
            case 5:
                this.message = 'Excellent! You are a genius!!';
                break;
        }
    };
    ResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-result',
            template: __webpack_require__(/*! ./result.component.html */ "./src/app/components/result/result.component.html"),
            styles: [__webpack_require__(/*! ./result.component.scss */ "./src/app/components/result/result.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_result_service_result_service_service__WEBPACK_IMPORTED_MODULE_2__["ResultServiceService"]])
    ], ResultComponent);
    return ResultComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <p class=\"branding\">Quiz Up!</p>\n</div>\n"

/***/ }),

/***/ "./src/app/components/shared/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  background-image: linear-gradient(to right, #c9861c, #cb6528, #c34438, #b32448, #990556);\n  height: 60px;\n  padding-top: 7px; }\n  div p {\n    color: white;\n    text-align: center;\n    font-size: 1.5em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYXVnYW5kaGthcmFuL0Rlc2t0b3Avc29sdXRpb25zL2Zhc3RxdWl6L3NyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdGQUF3RjtFQUN4RixZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7RUFIcEI7SUFNSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjYzk4NjFjLCAjY2I2NTI4LCAjYzM0NDM4LCAjYjMyNDQ4LCAjOTkwNTU2KTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgcGFkZGluZy10b3A6IDdweDtcblxucCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuNWVtO1xufVxuXG59Il19 */"

/***/ }),

/***/ "./src/app/components/shared/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/shared/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/loader/loader.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/loader/loader.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n<p class=\"branding animated\">Loading...</p>\n</div>"

/***/ }),

/***/ "./src/app/components/shared/loader/loader.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/loader/loader.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  background-image: linear-gradient(to right, #c9861c, #cb6528, #c34438, #b32448, #990556);\n  height: 100%;\n  position: fixed;\n  top: 0;\n  align-items: center;\n  justify-content: center;\n  display: flex; }\n  .content p {\n    color: white;\n    font-size: 2em;\n    position: relative;\n    -webkit-animation: floating-text 0.5s ease alternate infinite;\n    animation: floating-text 0.5s ease alternate infinite; }\n  @-webkit-keyframes floating-text {\n  0% {\n    -webkit-transform: translateY(0.1em);\n    text-shadow: 0 0 0.5em rgba(255, 255, 255, 0.4), 0 0 0.2em rgba(0, 0, 0, 0.3), 0 0.3em 0.2em rgba(0, 0, 0, 0.3); }\n  100% {\n    text-shadow: 0 0 0.5em rgba(255, 255, 255, 0.4), 0 0 0.2em rgba(0, 0, 0, 0.3), 0 0.5em 0.5em rgba(0, 0, 0, 0.3); } }\n  @keyframes floating-text {\n  0% {\n    transform: translateY(0.1em);\n    text-shadow: 0 0 0.5em rgba(255, 255, 255, 0.4), 0 0 0.2em rgba(0, 0, 0, 0.3), 0 0.3em 0.2em rgba(0, 0, 0, 0.3); }\n  100% {\n    text-shadow: 0 0 0.5em rgba(255, 255, 255, 0.4), 0 0 0.2em rgba(0, 0, 0, 0.3), 0 0.5em 0.5em rgba(0, 0, 0, 0.3); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYXVnYW5kaGthcmFuL0Rlc2t0b3Avc29sdXRpb25zL2Zhc3RxdWl6L3NyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdGQUF3RjtFQUN4RixZQUFZO0VBQ1osZUFBZTtFQUNmLE1BQU07RUFDTixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGFBQWEsRUFBQTtFQVBqQjtJQVVJLFlBQVk7SUFDWixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLDZEQUE2RDtJQUk3RCxxREFBcUQsRUFBQTtFQUl6RDtFQUNJO0lBQ0Usb0NBQW1DO0lBQ25DLCtHQUU0QixFQUFBO0VBRzlCO0lBQ0UsK0dBRTRCLEVBQUEsRUFBQTtFQTZDaEM7RUFDRTtJQUNFLDRCQUEyQjtJQUMzQiwrR0FFNEIsRUFBQTtFQUc5QjtJQUNFLCtHQUU0QixFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2M5ODYxYywgI2NiNjUyOCwgI2MzNDQzOCwgI2IzMjQ0OCwgIzk5MDU1Nik7O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcblxucCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmxvYXRpbmctdGV4dCAwLjVzIGVhc2UgYWx0ZXJuYXRlIGluZmluaXRlO1xuICAgIC1tb3otYW5pbWF0aW9uOiBmbG9hdGluZy10ZXh0IDAuNXMgZWFzZSBhbHRlcm5hdGUgaW5maW5pdGU7XG4gICAgLW1zLWFuaW1hdGlvbjogZmxvYXRpbmctdGV4dCAwLjVzIGVhc2UgYWx0ZXJuYXRlIGluZmluaXRlO1xuICAgIC1vLWFuaW1hdGlvbjogZmxvYXRpbmctdGV4dCAwLjVzIGVhc2UgYWx0ZXJuYXRlIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbjogZmxvYXRpbmctdGV4dCAwLjVzIGVhc2UgYWx0ZXJuYXRlIGluZmluaXRlO1xufVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmxvYXRpbmctdGV4dCB7XG4gICAgMCUgeyAgXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSguMWVtKTtcbiAgICAgIHRleHQtc2hhZG93OjAgMCAuNWVtIHJnYmEoMjU1LDI1NSwyNTUsLjQpLFxuICAgICAgICAwIDAgLjJlbSByZ2JhKDAsMCwwLC4zKSxcbiAgICAgICAgMCAuM2VtIC4yZW0gcmdiYSgwLDAsMCwuMyk7XG4gIFxuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRleHQtc2hhZG93OjAgMCAuNWVtIHJnYmEoMjU1LDI1NSwyNTUsLjQpLFxuICAgICAgICAwIDAgLjJlbSByZ2JhKDAsMCwwLC4zKSxcbiAgICAgICAgMCAuNWVtIC41ZW0gcmdiYSgwLDAsMCwuMyk7XG4gICAgfVxuICB9XG4gIEAtbW96LWtleWZyYW1lcyBmbG9hdGluZy10ZXh0IHtcbiAgICAwJSB7ICBcbiAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC4xZW0pO1xuICAgICAgdGV4dC1zaGFkb3c6MCAwIC41ZW0gcmdiYSgyNTUsMjU1LDI1NSwuNCksXG4gICAgICAgIDAgMCAuMmVtIHJnYmEoMCwwLDAsLjMpLFxuICAgICAgICAwIC4zZW0gLjJlbSByZ2JhKDAsMCwwLC4zKTtcbiAgXG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdGV4dC1zaGFkb3c6MCAwIC41ZW0gcmdiYSgyNTUsMjU1LDI1NSwuNCksXG4gICAgICAgIDAgMCAuMmVtIHJnYmEoMCwwLDAsLjMpLFxuICAgICAgICAwIC41ZW0gLjVlbSByZ2JhKDAsMCwwLC4zKTtcbiAgICB9XG4gIH1cbiAgQC1tcy1rZXlmcmFtZXMgZmxvYXRpbmctdGV4dCB7XG4gICAgMCUgeyAgXG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC4xZW0pO1xuICAgICAgdGV4dC1zaGFkb3c6MCAwIC41ZW0gcmdiYSgyNTUsMjU1LDI1NSwuNCksXG4gICAgICAgIDAgMCAuMmVtIHJnYmEoMCwwLDAsLjMpLFxuICAgICAgICAwIC4zZW0gLjJlbSByZ2JhKDAsMCwwLC4zKTtcbiAgXG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdGV4dC1zaGFkb3c6MCAwIC41ZW0gcmdiYSgyNTUsMjU1LDI1NSwuNCksXG4gICAgICAgIDAgMCAuMmVtIHJnYmEoMCwwLDAsLjMpLFxuICAgICAgICAwIC41ZW0gLjVlbSByZ2JhKDAsMCwwLC4zKTtcbiAgICB9XG4gIH1cbiAgQC1vLWtleWZyYW1lcyBmbG9hdGluZy10ZXh0IHtcbiAgICAwJSB7ICBcbiAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSguMWVtKTtcbiAgICAgIHRleHQtc2hhZG93OjAgMCAuNWVtIHJnYmEoMjU1LDI1NSwyNTUsLjQpLFxuICAgICAgICAwIDAgLjJlbSByZ2JhKDAsMCwwLC4zKSxcbiAgICAgICAgMCAuM2VtIC4yZW0gcmdiYSgwLDAsMCwuMyk7XG4gIFxuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRleHQtc2hhZG93OjAgMCAuNWVtIHJnYmEoMjU1LDI1NSwyNTUsLjQpLFxuICAgICAgICAwIDAgLjJlbSByZ2JhKDAsMCwwLC4zKSxcbiAgICAgICAgMCAuNWVtIC41ZW0gcmdiYSgwLDAsMCwuMyk7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgZmxvYXRpbmctdGV4dCB7XG4gICAgMCUgeyAgXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLjFlbSk7XG4gICAgICB0ZXh0LXNoYWRvdzowIDAgLjVlbSByZ2JhKDI1NSwyNTUsMjU1LC40KSxcbiAgICAgICAgMCAwIC4yZW0gcmdiYSgwLDAsMCwuMyksXG4gICAgICAgIDAgLjNlbSAuMmVtIHJnYmEoMCwwLDAsLjMpO1xuICBcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0ZXh0LXNoYWRvdzowIDAgLjVlbSByZ2JhKDI1NSwyNTUsMjU1LC40KSxcbiAgICAgICAgMCAwIC4yZW0gcmdiYSgwLDAsMCwuMyksXG4gICAgICAgIDAgLjVlbSAuNWVtIHJnYmEoMCwwLDAsLjMpO1xuICAgIH1cbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/shared/loader/loader.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/loader/loader.component.ts ***!
  \**************************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/components/shared/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.scss */ "./src/app/components/shared/loader/loader.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/quiz-card/quiz-card.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/shared/quiz-card/quiz-card.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  quiz-card works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/shared/quiz-card/quiz-card.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/shared/quiz-card/quiz-card.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3F1aXotY2FyZC9xdWl6LWNhcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/shared/quiz-card/quiz-card.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/shared/quiz-card/quiz-card.component.ts ***!
  \********************************************************************/
/*! exports provided: QuizCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizCardComponent", function() { return QuizCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var QuizCardComponent = /** @class */ (function () {
    function QuizCardComponent() {
    }
    QuizCardComponent.prototype.ngOnInit = function () {
    };
    QuizCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quiz-card',
            template: __webpack_require__(/*! ./quiz-card.component.html */ "./src/app/components/shared/quiz-card/quiz-card.component.html"),
            styles: [__webpack_require__(/*! ./quiz-card.component.scss */ "./src/app/components/shared/quiz-card/quiz-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuizCardComponent);
    return QuizCardComponent;
}());



/***/ }),

/***/ "./src/app/services/question-service/question-service.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/services/question-service/question-service.service.ts ***!
  \***********************************************************************/
/*! exports provided: QuestionServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionServiceService", function() { return QuestionServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_utilities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/utilities.service */ "./src/app/services/utilities/utilities.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var QuestionServiceService = /** @class */ (function () {
    function QuestionServiceService(http, utilitiesSerice) {
        this.http = http;
        this.utilitiesSerice = utilitiesSerice;
    }
    QuestionServiceService.prototype.getSetOfQuestions = function (category, difficulty) {
        var parameters = {
            'difficulty': difficulty,
            amount: '10',
            'category': category
        };
        return this.http.get('https://opentdb.com/api.php', { params: parameters });
    };
    QuestionServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _utilities_utilities_service__WEBPACK_IMPORTED_MODULE_2__["UtilitiesService"]])
    ], QuestionServiceService);
    return QuestionServiceService;
}());



/***/ }),

/***/ "./src/app/services/result-service/result-service.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/result-service/result-service.service.ts ***!
  \*******************************************************************/
/*! exports provided: ResultServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultServiceService", function() { return ResultServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResultServiceService = /** @class */ (function () {
    function ResultServiceService() {
        this.result = '';
        this.score = 0;
    }
    ResultServiceService.prototype.evaluateResult = function (feededAnswers, correctAnswers) {
        this.score = 0;
        for (var i = 0; i < feededAnswers.length; i++) {
            if (feededAnswers[i] === correctAnswers[i]) {
                this.score++;
            }
        }
    };
    ResultServiceService.prototype.getResult = function () {
        return this.score;
    };
    ResultServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResultServiceService);
    return ResultServiceService;
}());



/***/ }),

/***/ "./src/app/services/utilities/utilities.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/utilities/utilities.service.ts ***!
  \*********************************************************/
/*! exports provided: UtilitiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilitiesService", function() { return UtilitiesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UtilitiesService = /** @class */ (function () {
    function UtilitiesService() {
    }
    UtilitiesService.prototype.setQuestions = function (data) {
        var _this = this;
        var questions = [];
        data.results.forEach(function (item) {
            var question = {
                question: '',
                options: []
            };
            question.question = item.question;
            question.options = _this.setOptionsForQuestions(item.incorrect_answers, item.correct_answer);
            questions.push(question);
        });
        return questions;
    };
    UtilitiesService.prototype.setOptionsForQuestions = function (incorrectAnswersArray, correctAnswer) {
        var tempArray = incorrectAnswersArray;
        tempArray.push(correctAnswer);
        var resultantArray = tempArray
            .map(function (a) { return ({ sort: Math.random(), value: a }); })
            .sort(function (a, b) { return a.sort - b.sort; })
            .map(function (a) { return a.value; });
        return resultantArray;
    };
    UtilitiesService.prototype.setAnswers = function (data) {
        var answers = [];
        data.results.forEach(function (item) {
            answers.push(item.correct_answer);
        });
        return answers;
    };
    UtilitiesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UtilitiesService);
    return UtilitiesService;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/saugandhkaran/Desktop/solutions/fastquiz/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map