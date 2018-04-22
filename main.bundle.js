webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__screens_home_screen_home_screen_component__ = __webpack_require__("../../../../../src/app/screens/home-screen/home-screen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__screens_semester_detail_semester_detail_component__ = __webpack_require__("../../../../../src/app/screens/semester-detail/semester-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__screens_create_semester_create_semester_component__ = __webpack_require__("../../../../../src/app/screens/create-semester/create-semester.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__screens_login_login_component__ = __webpack_require__("../../../../../src/app/screens/login/login.component.ts");




var appRoutes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_0__screens_home_screen_home_screen_component__["a" /* HomeScreenComponent */] },
    { path: ':uid/semester/:id', component: __WEBPACK_IMPORTED_MODULE_1__screens_semester_detail_semester_detail_component__["a" /* SemesterDetailComponent */] },
    { path: 'semester-create', component: __WEBPACK_IMPORTED_MODULE_2__screens_create_semester_create_semester_component__["a" /* CreateSemesterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__screens_login_login_component__["a" /* LoginComponent */] }
];
// @NgModule({
//     imports: [
//       RouterModule.forRoot(
//         appRoutes,
//         { enableTracing: true } // <-- debugging purposes only
//       )
//     ],
//     exports: [
//       RouterModule
//     ]
//   })
//   export class AppRoutingModule {}


/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\r\n    <div (click)=\"navToHome()\" class=\"title\">{{title}}</div>\r\n</div>\r\n<span id=\"logout\" class=\"logout\"><button (click)=\"logout()\" class=\"btn\">Logout</button></span>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page {\n  border-radius: 5px;\n  padding: 0px 15px; }\n\n.title {\n  background-color: #292929;\n  width: 245px;\n  border-radius: 5px;\n  padding: 0px 15px;\n  padding-top: 10px;\n  color: white;\n  -webkit-text-stroke: 1px black;\n  font-size: 40px;\n  font-family: impact;\n  cursor: pointer; }\n\n.logout {\n  top: 10px;\n  right: 10px;\n  position: absolute; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(router, auth) {
        this.router = router;
        this.auth = auth;
        this.title = 'Barely Passing';
    }
    AppComponent.prototype.navToHome = function () {
        if (this.auth.isLoggedIn())
            this.router.navigate(['home']);
    };
    AppComponent.prototype.logout = function () {
        this.auth.logout();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__screens_home_screen_home_screen_component__ = __webpack_require__("../../../../../src/app/screens/home-screen/home-screen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__screens_login_login_component__ = __webpack_require__("../../../../../src/app/screens/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_grade_receiver_service__ = __webpack_require__("../../../../../src/app/services/grade-receiver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__screens_home_screen_semester_semester_component__ = __webpack_require__("../../../../../src/app/screens/home-screen/semester/semester.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__screens_semester_detail_semester_detail_component__ = __webpack_require__("../../../../../src/app/screens/semester-detail/semester-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__screens_semester_detail_course_course_component__ = __webpack_require__("../../../../../src/app/screens/semester-detail/course/course.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__screens_semester_detail_grade_group_grade_group_component__ = __webpack_require__("../../../../../src/app/screens/semester-detail/grade-group/grade-group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__screens_create_semester_create_semester_component__ = __webpack_require__("../../../../../src/app/screens/create-semester/create-semester.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__screens_create_semester_grade_scale_grade_scale_component__ = __webpack_require__("../../../../../src/app/screens/create-semester/grade-scale/grade-scale.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__screens_create_semester_create_group_create_groups_component__ = __webpack_require__("../../../../../src/app/screens/create-semester/create-group/create-groups.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__screens_create_semester_create_group_create_grade_group_create_grade_group_component__ = __webpack_require__("../../../../../src/app/screens/create-semester/create-group/create-grade-group/create-grade-group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__screens_create_semester_course_preview_course_preview_component__ = __webpack_require__("../../../../../src/app/screens/create-semester/course-preview/course-preview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__screens_semester_detail_grade_grade_component__ = __webpack_require__("../../../../../src/app/screens/semester-detail/grade/grade.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__screens_home_screen_home_screen_component__["a" /* HomeScreenComponent */],
                __WEBPACK_IMPORTED_MODULE_8__screens_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__screens_home_screen_semester_semester_component__["a" /* SemesterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__screens_semester_detail_semester_detail_component__["a" /* SemesterDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_14__screens_semester_detail_course_course_component__["a" /* CourseComponent */],
                __WEBPACK_IMPORTED_MODULE_15__screens_semester_detail_grade_group_grade_group_component__["a" /* GradeGroupComponent */],
                __WEBPACK_IMPORTED_MODULE_16__screens_create_semester_create_semester_component__["a" /* CreateSemesterComponent */],
                __WEBPACK_IMPORTED_MODULE_18__screens_create_semester_grade_scale_grade_scale_component__["a" /* GradeScaleComponent */],
                __WEBPACK_IMPORTED_MODULE_19__screens_create_semester_create_group_create_groups_component__["a" /* CreateGroupsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__screens_create_semester_create_group_create_grade_group_create_grade_group_component__["a" /* CreateGradeGroupComponent */],
                __WEBPACK_IMPORTED_MODULE_21__screens_create_semester_course_preview_course_preview_component__["a" /* CoursePreviewComponent */],
                __WEBPACK_IMPORTED_MODULE_24__screens_semester_detail_grade_grade_component__["a" /* GradeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_routing_module__["a" /* appRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_22_environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["b" /* AngularFireAuthModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_grade_receiver_service__["a" /* GradeReceiverService */], __WEBPACK_IMPORTED_MODULE_23__services_auth_service__["a" /* AuthService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/models/course.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Course; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grade_group_model__ = __webpack_require__("../../../../../src/app/models/grade-group.model.ts");

var scaleType;
(function (scaleType) {
    scaleType[scaleType["letter"] = 0] = "letter";
    scaleType[scaleType["plusMinus"] = 1] = "plusMinus";
    scaleType[scaleType["plus"] = 2] = "plus";
})(scaleType || (scaleType = {}));
;
var Course = (function () {
    function Course(json) {
        var _this = this;
        this.gradeGroups = [];
        if (json.name)
            this.name = json.name;
        if (json.hours)
            this.hours = json.hours;
        if (json.scaleType)
            this.scaleType = json.scaleType;
        if (json.gradeScale)
            this.gradeScale = json.gradeScale;
        if (json.gradeGroups) {
            json.gradeGroups.forEach(function (group) {
                _this.gradeGroups.push(new __WEBPACK_IMPORTED_MODULE_0__grade_group_model__["a" /* GradeGroup */](group));
            });
        }
    }
    Course.prototype.averageInCourse = function () {
        var totalPoints = 0;
        var totalPossible = 0;
        this.gradeGroups.forEach(function (group) {
            totalPoints += group.pointsTowardsTotal();
            if (group.grades.length > 0)
                totalPossible += group.weight;
        });
        return totalPoints / totalPossible;
    };
    return Course;
}());



/***/ }),

/***/ "../../../../../src/app/models/grade-group.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GradeGroup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grade_model__ = __webpack_require__("../../../../../src/app/models/grade.model.ts");

var GradeGroup = (function () {
    function GradeGroup(json) {
        var _this = this;
        this.grades = [];
        if (json.name)
            this.name = json.name;
        if (json.weight)
            this.weight = json.weight;
        if (json.numGrades)
            this.numGrades = json.numGrades;
        if (json.numGrades && (!json.grades || !json.grades.length)) {
            for (var i = 0; i < json.numGrades; i++) {
                this.grades.push(new __WEBPACK_IMPORTED_MODULE_0__grade_model__["a" /* Grade */]({ name: json.name, totalPoints: 100 }));
            }
        }
        if (json.grades) {
            json.grades.forEach(function (grade) {
                _this.grades.push(new __WEBPACK_IMPORTED_MODULE_0__grade_model__["a" /* Grade */](grade));
            });
        }
    }
    GradeGroup.prototype.average = function () {
        var completed = this.grades.filter(function (grade) { return grade.pointsEarned && grade.pointsEarned !== null; });
        if (completed.length === 0)
            return null;
        else {
            var totalPointsEarned_1 = 0;
            var totalPointsPossible_1 = 0;
            completed.forEach(function (grade) {
                totalPointsEarned_1 += grade.pointsEarned;
                totalPointsPossible_1 += grade.totalPoints;
            });
            return (totalPointsEarned_1 / totalPointsPossible_1);
        }
    };
    GradeGroup.prototype.pointsTowardsTotal = function () {
        var avg = this.average();
        if (avg === null)
            return null;
        else
            return avg * this.weight;
    };
    GradeGroup.prototype.updateGrades = function (grades) {
        this.grades = grades;
        this.numGrades = this.grades.length;
    };
    return GradeGroup;
}());



/***/ }),

/***/ "../../../../../src/app/models/grade.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Grade; });
var Grade = (function () {
    function Grade(json) {
        if (json.name)
            this.name = json.name;
        if (json.totalPoints)
            this.totalPoints = json.totalPoints;
        if (json.pointsEarned)
            this.pointsEarned = json.pointsEarned;
    }
    Object.defineProperty(Grade.prototype, "percent", {
        get: function () {
            return (this.pointsEarned / this.totalPoints);
        },
        enumerable: true,
        configurable: true
    });
    return Grade;
}());



/***/ }),

/***/ "../../../../../src/app/models/semester.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Semester; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__course_model__ = __webpack_require__("../../../../../src/app/models/course.model.ts");

var Semester = (function () {
    function Semester(json) {
        var _this = this;
        this.courses = [];
        if (json.year)
            this.year = json.year;
        if (json.session)
            this.session = json.session;
        if (json.id != null) {
            this.id = json.id;
        }
        if (json.courses) {
            json.courses.forEach(function (course) {
                _this.courses.push(new __WEBPACK_IMPORTED_MODULE_0__course_model__["a" /* Course */](course));
            });
        }
    }
    Object.defineProperty(Semester.prototype, "hours", {
        get: function () {
            var hours = 0;
            this.courses.forEach(function (course) {
                hours += Number(course.hours);
            });
            return hours;
        },
        enumerable: true,
        configurable: true
    });
    return Semester;
}());



/***/ }),

/***/ "../../../../../src/app/screens/create-semester/course-preview/course-preview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"preview\" *ngIf=\"minimized\">\r\n  <div class=\"header\">{{ course.name }}</div>\r\n  <div class=\"hours\">{{ course.hours }} hours</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/screens/create-semester/course-preview/course-preview.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".preview {\n  background-color: rebeccapurple;\n  display: inline-block;\n  min-width: 60px;\n  border-radius: 5px;\n  padding-bottom: 5px; }\n\n.header {\n  font-size: 18px;\n  text-align: center;\n  color: white;\n  padding: 2px 10px;\n  border-bottom: 1px solid white; }\n\n.hours {\n  text-align: center;\n  padding: 5px;\n  color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/screens/create-semester/course-preview/course-preview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursePreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_course_model__ = __webpack_require__("../../../../../src/app/models/course.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CoursePreviewComponent = (function () {
    function CoursePreviewComponent() {
        this.minimized = true;
    }
    CoursePreviewComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_course_model__["a" /* Course */])
    ], CoursePreviewComponent.prototype, "course", void 0);
    CoursePreviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'gt-course-preview',
            template: __webpack_require__("../../../../../src/app/screens/create-semester/course-preview/course-preview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/screens/create-semester/course-preview/course-preview.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CoursePreviewComponent);
    return CoursePreviewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/screens/create-semester/create-group/create-grade-group/create-grade-group.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"group\" *ngIf=\"group\">\r\n  <form [formGroup]=\"group\">\r\n    <div class=\"form-group\">\r\n      <div class=\"col-4\">\r\n        <input (keyup)=\"checkValidity()\" class=\"hundo\" formControlName=\"name\">\r\n      </div><!--\r\n  --><div class=\"col-1\"></div><!--     \r\n  --><div class=\"col-2\"><input (keyup)=\"checkValidity()\" type=\"number\" class=\"hundo weight\" formControlName=\"weight\"></div><!--\r\n  --><div class=\"col-1\"></div><!--     \r\n  --><div class=\"col-2\"><input (keyup)=\"checkValidity()\" class=\"hundo\" formControlName=\"numGrades\"></div>          \r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/screens/create-semester/create-group/create-grade-group/create-grade-group.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-group {\n  border-left: 1px solid black;\n  margin-left: 10px;\n  margin-right: 10px;\n  border-right: 1px solid black;\n  padding: 5px 0px; }\n\n.hundo {\n  width: calc(100% - 36px);\n  margin: 0 10px; }\n\n.weight {\n  min-width: 40px; }\n\n:host(.bottom) .group form .form-group {\n  border-bottom: 1px solid black;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/screens/create-semester/create-group/create-grade-group/create-grade-group.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateGradeGroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CreateGradeGroupComponent = (function () {
    function CreateGradeGroupComponent(fb) {
        this.fb = fb;
        this.valid = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.group = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            weight: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            numGrades: ['']
        });
    }
    CreateGradeGroupComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(CreateGradeGroupComponent.prototype, "groupInfo", {
        set: function (obj) {
            if (obj.name)
                this.group.controls['name'].setValue(obj.name);
            if (obj.weight)
                this.group.controls['weight'].setValue(obj.weight);
            if (obj.numGrades)
                this.group.controls['numGrades'].setValue(obj.numGrades);
        },
        enumerable: true,
        configurable: true
    });
    CreateGradeGroupComponent.prototype.checkValidity = function () {
        var weight = this.group.controls['weight'].value;
        var name = this.group.controls['name'].value;
        var numGrades = this.group.controls['numGrades'].value;
        var id = this.id;
        var obj = { id: id, weight: weight, name: name, numGrades: numGrades };
        if (this.group.valid) {
            this.valid.emit(obj);
        }
        else
            this.valid.emit(false);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])('valid'),
        __metadata("design:type", Object)
    ], CreateGradeGroupComponent.prototype, "valid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], CreateGradeGroupComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CreateGradeGroupComponent.prototype, "groupInfo", null);
    CreateGradeGroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'gt-create-grade-group',
            template: __webpack_require__("../../../../../src/app/screens/create-semester/create-group/create-grade-group/create-grade-group.component.html"),
            styles: [__webpack_require__("../../../../../src/app/screens/create-semester/create-group/create-grade-group/create-grade-group.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], CreateGradeGroupComponent);
    return CreateGradeGroupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/screens/create-semester/create-group/create-groups.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!finish\" class=\"menu bottom-pad\">\r\n  <h1>Create Grade Groups</h1>\r\n  <div class=\"pair\">\r\n    <label>Number of Grade Groups: </label>\r\n    <input class=\"input-num\" (keyup)=\"createGroups()\" min=\"1\" [(ngModel)]=\"numGradeGroups\" type=\"number\">\r\n  </div>\r\n  <div *ngIf=\"numGradeGroups > 0\" class=\"header\">\r\n    <div class=\"col-4\"><div class=\"pad-left\">Grade Group Name</div></div><!-- Prevents white space from fucking the spacing up\r\n --><div class=\"col-1\"></div><!--     \r\n --><div class=\"col-2\"><div class=\"pad-left\">Weight</div></div><!-- kinda dumb but oh well\r\n --><div class=\"col-1\"></div><!--     \r\n --><div class=\"col-2\"><div class=\"pad-left\"># of Grades <i>(optional)</i></div></div>\r\n  </div>\r\n  <div class=\"groups\" *ngFor=\"let group of groups\">\r\n    <gt-create-grade-group [class.bottom]=\"group == groups[groups.length-1]\" (valid)=\"receiveEvent($event)\" [id]=\"group.id\" [groupInfo]=\"group\"></gt-create-grade-group>\r\n  </div>\r\n</div>\r\n\r\n<button *ngIf=\"groups.length && !finish\" [disabled]=\"!canCreateGroups\" (click)=\"finishGradeGroups()\" class=\"btn save-group\">Save Grade Groups</button>\r\n\r\n<div class=\"subtitle\" *ngIf=\"finish\">Finished Grade Groups</div>\r\n<div *ngIf=\"finish\" class=\"menu\">\r\n  <div style=\"display:table\">\r\n    <div class=\"all-blocks\">\r\n      <div class=\"finished-block\" *ngFor=\"let group of groups\">\r\n          <div class=\"name\">Name: {{group.name}}</div>\r\n          <div class=\"weight\">Weight: {{group.weight}}</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"edit\">\r\n      <i (click)=\"finish = false;\" class=\"fa fa-pencil\"></i>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/screens/create-semester/create-group/create-groups.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".menu {\n  background-color: #B8B8B8;\n  width: 95%;\n  border-radius: 5px;\n  margin-top: 10px; }\n\n.bottom-pad {\n  padding-bottom: 10px; }\n\ninput {\n  display: inline;\n  margin: auto; }\n\n.pair {\n  display: inline-block;\n  text-align: center;\n  padding-left: 5px;\n  margin-bottom: 10px; }\n\n.pad-left {\n  padding-left: 10px;\n  text-align: center; }\n\n.hundo {\n  width: calc(100% - 36px);\n  margin: 0 10px; }\n\n.input-num {\n  min-width: 40px !important;\n  max-width: 100px !important; }\n\n.all-blocks {\n  display: table-cell;\n  width: 95%; }\n\n.third {\n  width: 33%;\n  display: inline-block;\n  text-align: center; }\n\nh1 {\n  margin: 0px;\n  font-size: 20px;\n  padding: 5px 0px 10px 5px; }\n\n.form-group {\n  padding-bottom: 10px; }\n\n.right {\n  float: right; }\n\n.header {\n  BORDER: 1px solid black;\n  border-top-left-radius: 5px;\n  margin: 0 10px;\n  border-top-right-radius: 5px; }\n\n.form-group {\n  border-left: 1px solid black;\n  margin-left: 10px;\n  margin-right: 10px;\n  border-right: 1px solid black;\n  padding: 5px 0px; }\n\n.subtitle {\n  color: white;\n  font-size: 20px;\n  margin-bottom: -10px;\n  margin-top: 5px; }\n\n.fa-pencil {\n  cursor: pointer;\n  font-size: 18px;\n  padding: 4px; }\n\n.edit {\n  width: 40px;\n  display: table-cell;\n  height: 100%;\n  text-align: center;\n  border-left: 1px solid black;\n  vertical-align: middle;\n  padding: 0; }\n\n.save-group {\n  float: right;\n  margin-top: 10px; }\n\n.finished-block {\n  display: inline-block;\n  line-height: 2;\n  border: 1px solid black;\n  border-radius: 5px;\n  padding: 10px;\n  margin: 5px 10px; }\n\n.groups:last-of-type gt-create-grade-group .group {\n  border-bottom: 1px solid black; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/screens/create-semester/create-group/create-groups.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateGroupsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreateGroupsComponent = (function () {
    function CreateGroupsComponent() {
        this.groups = [];
        this.canCreateGroups = false;
        this.finish = false;
        this.complete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    CreateGroupsComponent.prototype.ngOnInit = function () {
    };
    CreateGroupsComponent.prototype.createGroups = function () {
        if (this.groups.length > this.numGradeGroups) {
            this.groups = this.groups.slice(0, this.numGradeGroups);
        }
        else {
            for (var i = this.groups.length; i < this.numGradeGroups; i++) {
                this.groups.push({ id: i, weight: null, name: "", numGrades: null });
            }
        }
    };
    CreateGroupsComponent.prototype.receiveEvent = function (e) {
        if (e == false)
            this.canCreateGroups = false;
        else {
            var total_1 = 0;
            this.groups[e.id].weight = e.weight;
            this.groups[e.id].name = e.name;
            this.groups[e.id].numGrades = e.numGrades;
            this.groups.forEach(function (group) {
                total_1 += group.weight;
            });
            this.canCreateGroups = total_1 == 100;
        }
    };
    CreateGroupsComponent.prototype.finishGradeGroups = function () {
        this.finish = true;
        this.complete.emit(this.groups);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])('complete'),
        __metadata("design:type", Object)
    ], CreateGroupsComponent.prototype, "complete", void 0);
    CreateGroupsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'gt-create-groups',
            template: __webpack_require__("../../../../../src/app/screens/create-semester/create-group/create-groups.component.html"),
            styles: [__webpack_require__("../../../../../src/app/screens/create-semester/create-group/create-groups.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateGroupsComponent);
    return CreateGroupsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/screens/create-semester/create-semester.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Create Semester</h1>\r\n\r\n<div class=\"menu\">\r\n  <form [formGroup]=\"semesterForm\">\r\n    <div class=\"form-group\">\r\n      <label>Session: </label>\r\n      <select formControlName=\"session\">\r\n        <option value=\"Fall\">Fall</option>\r\n        <option value=\"Spring\">Spring</option>\r\n        <option value=\"Summer\">Summer</option>\r\n        <option value=\"Winter\">Winter</option>\r\n      </select>\r\n      <span class=\"year\">\r\n        <label style=\"margin-left: 30px;\">Year: </label>\r\n        <select formControlName=\"year\">\r\n          <option *ngFor=\"let year of yearsAvailable\" value=\"{{year}}\">{{ year }}</option>\r\n        </select>\r\n      </span>\r\n\r\n    </div>\r\n  </form>\r\n\r\n  <div *ngIf=\"semesterForm.controls['courses'].value.length\">\r\n    <div class=\"subtitle\">Completed Courses</div>\r\n    <div class=\"previews\" *ngFor=\"let course of semesterForm.controls['courses'].value\">\r\n      <gt-course-preview [course]=\"course\"></gt-course-preview>\r\n    </div>\r\n  </div>\r\n\r\n  <button (click)=\"newCourse()\" *ngIf=\"!creatingCourse\" class=\"btn\">Create New Course</button>\r\n  <div class=\"course-creator\" *ngIf=\"creatingCourse\">\r\n    <form [formGroup]=\"newCourseForm\">\r\n      <div class=\"form-group\">\r\n        <div class=\"row\">\r\n          <div class=\"col-3\">\r\n            <label>Course Name</label>\r\n            <input class=\"hundo\" formControlName=\"name\">\r\n          </div><!--\r\n       --><div class=\"col-1\"></div><!--\r\n       --><div class=\"col-2\">\r\n            <label>Hours</label>\r\n            <select formControlName=\"hours\" class=\"block hundo\">\r\n              <option *ngFor=\"let num of [1,2,3,4,5]\" value=\"{{num}}\">{{ num }}</option>\r\n            </select>\r\n          </div><!--\r\n       --><div class=\"col-1\"></div><!--\r\n       --><div class=\"col-3\">\r\n            <label>Scale Type</label>\r\n            <select formControlName=\"scaleType\" class=\"block hundo\">\r\n              <option value=\"letter\">Letter (eg: 'A', 'B', 'C')</option>\r\n              <option value=\"plusMinus\">Plus Minus (eg: 'A+', 'A', 'A-')</option>\r\n              <option value=\"plus\">Plus (eg: 'A+', 'A', 'B+', 'B')</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"newCourseForm.controls['scaleType'].value !== ''\" class=\"row scale\">\r\n          <gt-grade-scale [type]=\"newCourseForm.controls['scaleType'].value\" (complete)=\"receiveScale($event)\"></gt-grade-scale>\r\n        </div>\r\n        <div *ngIf=\"isScaleDone\" class=\"row\">\r\n          <gt-create-groups (complete)=\"receiveGroups($event)\"></gt-create-groups>\r\n        </div>\r\n        <button (click)=\"saveCourse(courseObject)\" *ngIf=\"isScaleDone && areGroupsDone && newCourseForm.valid\" class=\"btn\">Save Course</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <button [disabled]=\"isSaving\" *ngIf=\"semesterForm.valid\" (click)=\"saveSemester()\" class=\"btn\">Save Semester</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/screens/create-semester/create-semester.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".menu {\n  background-color: #292929;\n  width: 80%;\n  margin-left: 15px;\n  border-radius: 5px;\n  margin-top: 20px;\n  min-height: 200px;\n  padding: 10px; }\n\nlabel {\n  color: white;\n  font-size: 20px; }\n\n.hundo {\n  width: 100%; }\n\n.subtitle {\n  color: white;\n  font-size: 20px;\n  margin-bottom: 5px;\n  margin-top: 5px; }\n\n.previews {\n  display: inline-block;\n  margin-right: 5px; }\n\nh1 {\n  color: rebeccapurple;\n  -webkit-text-stroke: .4px white;\n  margin-left: 15px;\n  font-size: 40px; }\n\n.btn {\n  margin-top: 20px; }\n\n.course-creator {\n  background-color: rebeccapurple;\n  border: 1px solid white;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 10px;\n  padding-bottom: 45px; }\n\n.scale {\n  margin-top: 10px; }\n\n@media only screen and (max-width: 450px) {\n  .year {\n    display: block; }\n    .year label {\n      margin: 0 !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/screens/create-semester/create-semester.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateSemesterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_course_model__ = __webpack_require__("../../../../../src/app/models/course.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grade_scale_grade_scale_component__ = __webpack_require__("../../../../../src/app/screens/create-semester/grade-scale/grade-scale.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_grade_receiver_service__ = __webpack_require__("../../../../../src/app/services/grade-receiver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CreateSemesterComponent = (function () {
    function CreateSemesterComponent(formBuilder, auth, grade, router) {
        var _this = this;
        this.grade = grade;
        this.router = router;
        this.yearsAvailable = [];
        this.creatingCourse = false;
        this.isScaleDone = false;
        this.areGroupsDone = false;
        this.isSaving = false;
        auth.getUserDetails().subscribe(function (detail) {
            _this.uid = detail.uid;
        });
        this.semesterForm = formBuilder.group({
            year: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            session: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            courses: [[]]
        });
        this.newCourseForm = formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            hours: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            scaleType: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            gradeScale: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            gradeGroups: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        });
        for (var i = 2014; i < 2035; i++) {
            this.yearsAvailable.push(i);
        }
        auth.getUserDetails().subscribe(function (detail) {
            grade.getSemesters(detail.uid).subscribe(function (data) {
                if (data.length)
                    _this.nextId = data[data.length - 1].id + 1;
                else
                    _this.nextId = 0;
            });
        });
    }
    CreateSemesterComponent.prototype.ngOnInit = function () {
        this.getNextSemesterId();
    };
    CreateSemesterComponent.prototype.newCourse = function () {
        this.creatingCourse = true;
    };
    CreateSemesterComponent.prototype.receiveGroups = function (e) {
        this.areGroupsDone = true;
        this.newCourseForm.controls['gradeGroups'].setValue(e);
        this.courseObject = new __WEBPACK_IMPORTED_MODULE_2__models_course_model__["a" /* Course */](this.newCourseForm.value);
    };
    CreateSemesterComponent.prototype.receiveScale = function (e) {
        this.isScaleDone = true;
        this.newCourseForm.controls['gradeScale'].setValue(e);
        this.courseObject = new __WEBPACK_IMPORTED_MODULE_2__models_course_model__["a" /* Course */](this.newCourseForm.value);
    };
    CreateSemesterComponent.prototype.saveCourse = function (course) {
        this.semesterForm.controls['courses'].value.push(course);
        this.resetNewCourse();
    };
    CreateSemesterComponent.prototype.resetNewCourse = function () {
        this.newCourseForm.reset();
        this.isScaleDone = false;
        this.areGroupsDone = false;
        this.scale.reset();
        this.creatingCourse = false;
    };
    CreateSemesterComponent.prototype.saveSemester = function () {
        this.isSaving = true;
        this.grade.saveNewSemester(this.uid, this.semesterForm.value, this.nextId);
        this.isSaving = false;
        this.router.navigateByUrl('/home');
    };
    CreateSemesterComponent.prototype.getNextSemesterId = function () {
        var _this = this;
        this.grade.getSemesters(this.uid).subscribe(function (data) {
            _this.nextId = data[data.length - 1].id + 1;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__grade_scale_grade_scale_component__["a" /* GradeScaleComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__grade_scale_grade_scale_component__["a" /* GradeScaleComponent */])
    ], CreateSemesterComponent.prototype, "scale", void 0);
    CreateSemesterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'gt-create-semester',
            template: __webpack_require__("../../../../../src/app/screens/create-semester/create-semester.component.html"),
            styles: [__webpack_require__("../../../../../src/app/screens/create-semester/create-semester.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_grade_receiver_service__["a" /* GradeReceiverService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]])
    ], CreateSemesterComponent);
    return CreateSemesterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/screens/create-semester/grade-scale/grade-scale.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf=\"isEditing\">\r\n    <div class=\"help-text\" *ngIf=\"type\">Enter the minimum percent to earn each respective grade</div>\r\n    <div class=\"outer\" *ngIf=\"type == 'letter'\">\r\n      <form [formGroup]=\"letterForm\">\r\n        <div class=\"section form-group\">\r\n          <div class=\"col-4\">\r\n              <span class=\"letter\">A</span>    <input (keyup)=\"letterFormValidity()\" formControlName=\"a\" min=0 type=\"number\">\r\n          </div>\r\n          <div class=\"col-4\">\r\n              <span class=\"letter\">B</span>    <input (keyup)=\"letterFormValidity()\" formControlName=\"b\" min=0 type=\"number\">\r\n          </div>\r\n        </div>\r\n        <div class=\"section\">\r\n          <div class=\"col-4\">\r\n              <span class=\"letter\">C</span>    <input (keyup)=\"letterFormValidity()\" formControlName=\"c\" min=0 type=\"number\">\r\n          </div>\r\n          <div class=\"col-4\">\r\n              <span class=\"letter\">D</span>    <input (keyup)=\"letterFormValidity()\" formControlName=\"d\" min=0 type=\"number\">\r\n          </div>\r\n        </div>\r\n      </form>\r\n\r\n\r\n    </div>\r\n    <div class=\"outer\" *ngIf=\"type == 'plus'\">\r\n        <form [formGroup]=\"plusForm\">\r\n          <div class=\"section\">\r\n            <div class=\"col-4\">\r\n                <span class=\"letter\">A+</span>   <input formControlName=\"aPlus\" min=0 type=\"number\">\r\n            </div>\r\n            <div class=\"col-4\">\r\n                <span class=\"letter\">A</span>    <input formControlName=\"a\" min=0 type=\"number\">\r\n            </div>\r\n          </div>\r\n          <div class=\"section\">\r\n            <div class=\"col-4\">\r\n                <span class=\"letter\">B+</span>   <input formControlName=\"bPlus\" min=0 type=\"number\">\r\n            </div>\r\n            <div class=\"col-4\">\r\n                <span class=\"letter\">B</span>    <input formControlName=\"b\" min=0 type=\"number\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"section\">\r\n            <div class=\"col-4\">\r\n                <span class=\"letter\">C+</span>   <input formControlName=\"cPlus\" min=0 type=\"number\">\r\n            </div>\r\n            <div class=\"col-4\">\r\n                <span class=\"letter\">C</span>    <input formControlName=\"c\" min=0 type=\"number\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"section\">\r\n            <div class=\"col-4\">\r\n                <span class=\"letter\">D+</span>   <input formControlName=\"dPlus\" min=0 type=\"number\">\r\n            </div>\r\n            <div class=\"col-4\">\r\n                <span class=\"letter\">D</span>    <input formControlName=\"d\" min=0 type=\"number\">\r\n            </div>\r\n          </div>\r\n        </form>\r\n\r\n\r\n    </div>\r\n    <div class=\"outer\" *ngIf=\"type == 'plusMinus'\">\r\n      <form [formGroup]=\"plusMinusForm\">\r\n        <div class=\"section\">\r\n          <div class=\"col-3\">  \r\n            <span class=\"letter\">A+</span>   \r\n            <input formControlName=\"aPlus\" min=0 type=\"number\">  \r\n          </div><!--\r\n        --><div style=\"width:5%; display:inline-block\"></div><!--\r\n          --><div class=\"col-3\">\r\n            <span class=\"letter\">A</span>\r\n            <input formControlName=\"a\" min=0 type=\"number\">\r\n          </div><!--\r\n        --><div style=\"width:5%; display:inline-block\"></div><!--\r\n        --><div class=\"col-3\">\r\n            <span class=\"letter\">A-</span>\r\n            <input formControlName=\"aMinus\" min=0 type=\"number\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"section\">\r\n          <div class=\"col-3\">  \r\n            <span class=\"letter\">B+</span>   \r\n            <input formControlName=\"bPlus\" min=0 type=\"number\">  \r\n          </div><!--\r\n        --><div style=\"width:5%; display:inline-block\"></div><!--\r\n        --><div class=\"col-3\">\r\n            <span class=\"letter\">B</span>\r\n            <input formControlName=\"b\" min=0 type=\"number\">\r\n          </div><!--\r\n        --><div style=\"width:5%; display:inline-block\"></div><!--\r\n        --><div class=\"col-3\">\r\n            <span class=\"letter\">B-</span>\r\n            <input formControlName=\"bMinus\" min=0 type=\"number\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"section\">\r\n          <div class=\"col-3\">  \r\n            <span class=\"letter\">C+</span>   \r\n            <input formControlName=\"cPlus\" min=0 type=\"number\">  \r\n          </div><!--\r\n          --><div style=\"width:5%; display:inline-block\"></div><!--\r\n          --><div class=\"col-3\">\r\n            <span class=\"letter\">C</span>\r\n            <input formControlName=\"c\" min=0 type=\"number\">\r\n          </div><!--\r\n          --><div style=\"width:5%; display:inline-block\"></div><!--\r\n          --><div class=\"col-3\">\r\n            <span class=\"letter\">C-</span>\r\n            <input formControlName=\"cMinus\" min=0 type=\"number\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"section\">\r\n            <div class=\"col-3\">  \r\n              <span class=\"letter\">D+</span>   \r\n              <input formControlName=\"dPlus\" min=0 type=\"number\">  \r\n            </div><!--\r\n            --><div style=\"width:5%; display:inline-block\"></div><!--\r\n            --><div class=\"col-3\">\r\n              <span class=\"letter\">D</span>\r\n              <input formControlName=\"d\" min=0 type=\"number\">\r\n            </div><!--\r\n            --><div style=\"width:5%; display:inline-block\"></div><!--\r\n            --><div class=\"col-3\">\r\n              <span class=\"letter\">D-</span>\r\n              <input formControlName=\"dMinus\" min=0 type=\"number\">\r\n            </div>\r\n          </div>\r\n      </form>\r\n    </div>\r\n    <div *ngIf=\"confirmButton\" style=\"height:30px\">\r\n      <button [disabled]=\"!isScaleValid\" (click)=\"confirm()\" class=\"btn confirm\">Confirm Scale</button>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"subtitle\" *ngIf=\"!isEditing\">Finished Scale</div>\r\n<div class=\"finished-scale\" *ngIf=\"!isEditing\">\r\n  <div class=\"scale\" *ngIf=\"type == 'letter'\">\r\n    <div class=\"letters\">\r\n      <span *ngFor=\"let letter of letterChar\" class=\"finished-letter-4\">{{ letter }}</span>\r\n    </div>\r\n    <div class=\"numbers\">\r\n      <span class=\"finished-letter-4\" *ngFor=\"let num of letter\">{{ num }}</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"scale\" *ngIf=\"type == 'plus'\">\r\n    <div class=\"letters\">\r\n      <span *ngFor=\"let letter of plusChar\" class=\"finished-letter-8\">{{ letter }}</span>\r\n    </div>\r\n    <div class=\"numbers\">\r\n      <span class=\"finished-letter-8\" *ngFor=\"let num of plus\">{{ num }}</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"scale\" *ngIf=\"type == 'plusMinus'\">\r\n    <div class=\"letters\">\r\n      <span *ngFor=\"let letter of plusMinusChar\" class=\"finished-letter-12\">{{ letter }}</span>\r\n    </div>\r\n    <div class=\"numbers\">\r\n      <span class=\"finished-letter-12\" *ngFor=\"let num of plusMinus\">{{ num }}</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"edit\">\r\n    <i (click)=\"edit()\" class=\"fa fa-pencil\"></i>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/screens/create-semester/grade-scale/grade-scale.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input {\n  display: inline-block;\n  margin-right: 15px;\n  margin-left: 5px;\n  padding-right: 0;\n  position: relative;\n  width: 90%; }\n\n.section {\n  margin: auto;\n  margin-bottom: 10px;\n  display: block; }\n\n.help-text {\n  margin: auto;\n  display: block;\n  font-style: italic;\n  text-align: center;\n  margin-bottom: 10px; }\n\n.confirm {\n  float: right; }\n\n.outer {\n  text-align: center; }\n\n.subtitle {\n  color: white;\n  font-size: 20px; }\n\n.letter {\n  width: 22px;\n  display: inline-block; }\n\n.letters {\n  border-bottom: 1px solid black; }\n\n.finished-scale {\n  width: 95%;\n  background-color: #B8B8B8;\n  border-radius: 5px;\n  display: table; }\n\n.finished-letter-4 {\n  width: 25%;\n  display: inline-block;\n  padding: 2px 0px;\n  text-align: center; }\n\n.finished-letter-8 {\n  width: 12.5%;\n  padding: 2px 0px;\n  display: inline-block;\n  text-align: center; }\n\n.finished-letter-12 {\n  width: 8.3%;\n  padding: 2px 0px;\n  display: inline-block;\n  text-align: center; }\n\n.scale {\n  width: 94%;\n  display: table-cell; }\n\n.edit {\n  width: 5%;\n  display: table-cell;\n  height: 100%;\n  text-align: center;\n  border-left: 1px solid black;\n  vertical-align: middle;\n  padding: 0; }\n\n.fa-pencil {\n  cursor: pointer;\n  font-size: 18px;\n  padding: 4px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/screens/create-semester/grade-scale/grade-scale.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GradeScaleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GradeScaleComponent = (function () {
    function GradeScaleComponent(el, fb) {
        this.el = el;
        this.fb = fb;
        this.confirmButton = true;
        this.complete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.plusMinus = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
        this.plus = [-1, -1, -1, -1, -1, -1, -1, -1];
        this.letter = [-1, -1, -1, -1];
        this.letterChar = ['D', 'C', 'B', 'A'];
        this.plusChar = ['D', 'D+', 'C', 'C+', 'B', 'B+', 'A', 'A+'];
        this.plusMinusChar = ['D-', 'D', 'D+', 'C-', 'C', 'C+', 'B-', 'B', 'B+', 'A-', 'A', 'A+'];
        this.isEditing = true;
        this.valid = false;
        this.letterForm = fb.group({
            d: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            c: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            b: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            a: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        });
        this.plusForm = fb.group({
            d: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            dPlus: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            c: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            cPlus: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            b: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            bPlus: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            a: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            aPlus: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
        });
        this.plusMinusForm = fb.group({
            dMinus: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            d: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            dPlus: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            cMinus: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            c: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            cPlus: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            bMinus: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            b: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            bPlus: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            aMinus: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            a: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            aPlus: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
        });
        this.letterForm.controls['c'].setValidators(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].min(this.letterForm.controls['d'].value));
    }
    GradeScaleComponent.prototype.ngOnInit = function () {
    };
    GradeScaleComponent.prototype.edit = function () {
        this.isEditing = true;
        this.complete.emit(false);
    };
    GradeScaleComponent.prototype.reset = function () {
        this.isEditing = true;
        this.letterForm.reset();
        this.plusMinusForm.reset();
        this.plusForm.reset();
    };
    GradeScaleComponent.prototype.changeScale = function () {
        var obj;
        var array = [];
        switch (this.type) {
            case 'letter':
                obj = this.letterForm.value;
                break;
            case 'plus':
                obj = this.plusForm.value;
                break;
            case 'plusMinus':
                obj = this.plusMinusForm.value;
                break;
        }
        for (var key in obj) {
            array.push(obj[key]);
        }
        return array;
    };
    GradeScaleComponent.prototype.confirm = function () {
        this.isEditing = false;
        switch (this.type) {
            case 'letter':
                this.letter = this.changeScale();
                break;
            case 'plus':
                this.plus = this.changeScale();
                break;
            case 'plusMinus':
                this.plusMinus = this.changeScale();
                break;
        }
        this.complete.emit(this.changeScale());
    };
    Object.defineProperty(GradeScaleComponent.prototype, "scale", {
        set: function (nums) {
            switch (this.type) {
                case 'letter':
                    this.letterForm.controls['d'].setValue(nums[0]);
                    this.letterForm.controls['c'].setValue(nums[1]);
                    this.letterForm.controls['b'].setValue(nums[2]);
                    this.letterForm.controls['a'].setValue(nums[3]);
                    break;
                case 'plus':
                    this.plusForm.controls['d'].setValue(nums[0]);
                    this.plusForm.controls['dPlus'].setValue(nums[1]);
                    this.plusForm.controls['c'].setValue(nums[2]);
                    this.plusForm.controls['cPlus'].setValue(nums[3]);
                    this.plusForm.controls['b'].setValue(nums[4]);
                    this.plusForm.controls['bPlus'].setValue(nums[5]);
                    this.plusForm.controls['a'].setValue(nums[6]);
                    this.plusForm.controls['aPlus'].setValue(nums[7]);
                    break;
                case 'plusMinus':
                    this.plusMinusForm.controls['dMinus'].setValue(nums[0]);
                    this.plusMinusForm.controls['d'].setValue(nums[1]);
                    this.plusMinusForm.controls['dPlus'].setValue(nums[2]);
                    this.plusMinusForm.controls['cMinus'].setValue(nums[3]);
                    this.plusMinusForm.controls['c'].setValue(nums[4]);
                    this.plusMinusForm.controls['cPlus'].setValue(nums[5]);
                    this.plusMinusForm.controls['bMinus'].setValue(nums[6]);
                    this.plusMinusForm.controls['b'].setValue(nums[7]);
                    this.plusMinusForm.controls['bPlus'].setValue(nums[8]);
                    this.plusMinusForm.controls['aMinus'].setValue(nums[9]);
                    this.plusMinusForm.controls['a'].setValue(nums[10]);
                    this.plusMinusForm.controls['aPlus'].setValue(nums[11]);
                    break;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GradeScaleComponent.prototype, "isConfirmed", {
        get: function () {
            switch (this.type) {
                case 'letter':
                    return this.letter.filter(function (grade) { return (grade < 0 || grade > 100); }).length > 0;
                case 'plus':
                    return this.plus.filter(function (grade) { return (grade < 0 || grade > 100); }).length > 0;
                case 'plusMinus':
                    return this.plusMinus.filter(function (grade) { return (grade < 0 || grade > 100); }).length > 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GradeScaleComponent.prototype, "isScaleValid", {
        get: function () {
            switch (this.type) {
                case 'letter':
                    this.letterFormValidity();
                    return this.valid;
                case 'plus':
                    this.plusFormValidity();
                    return this.valid;
                case 'plusMinus':
                    this.plusMinusFormValidity();
                    return this.valid;
            }
        },
        enumerable: true,
        configurable: true
    });
    GradeScaleComponent.prototype.letterFormValidity = function () {
        if (this.letterForm.valid)
            this.valid = true;
        if (this.letterForm.controls['c'].value <= this.letterForm.controls['d'].value
            || this.letterForm.controls['b'].value <= this.letterForm.controls['c'].value
            || this.letterForm.controls['a'].value <= this.letterForm.controls['b'].value) {
            this.valid = false;
        }
    };
    GradeScaleComponent.prototype.plusFormValidity = function () {
        if (this.plusForm.valid)
            this.valid = true;
        if (this.plusForm.controls['dPlus'].value <= this.plusForm.controls['d'].value
            || this.plusForm.controls['c'].value <= this.plusForm.controls['dPlus'].value
            || this.plusForm.controls['cPlus'].value <= this.plusForm.controls['c'].value
            || this.plusForm.controls['b'].value <= this.plusForm.controls['cPlus'].value
            || this.plusForm.controls['bPlus'].value <= this.plusForm.controls['b'].value
            || this.plusForm.controls['a'].value <= this.plusForm.controls['bPlus'].value) {
            this.valid = false;
        }
    };
    GradeScaleComponent.prototype.plusMinusFormValidity = function () {
        if (this.plusMinusForm.valid)
            this.valid = true;
        if (this.plusMinusForm.controls['d'].value <= this.plusMinusForm.controls['dMinus'].value
            || this.plusMinusForm.controls['dPlus'].value <= this.plusMinusForm.controls['d'].value
            || this.plusMinusForm.controls['cMinus'].value <= this.plusMinusForm.controls['dPlus'].value
            || this.plusMinusForm.controls['c'].value <= this.plusMinusForm.controls['cMinus'].value
            || this.plusMinusForm.controls['cPlus'].value <= this.plusMinusForm.controls['c'].value
            || this.plusMinusForm.controls['bMinus'].value <= this.plusMinusForm.controls['cPlus'].value
            || this.plusMinusForm.controls['b'].value <= this.plusMinusForm.controls['bMinus'].value
            || this.plusMinusForm.controls['bPlus'].value <= this.plusMinusForm.controls['b'].value
            || this.plusMinusForm.controls['aMinus'].value <= this.plusMinusForm.controls['bPlus'].value
            || this.plusMinusForm.controls['a'].value <= this.plusMinusForm.controls['aMinus'].value
            || this.plusMinusForm.controls['aPlus'].value <= this.plusMinusForm.controls['a'].value) {
            this.valid = false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], GradeScaleComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], GradeScaleComponent.prototype, "confirmButton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])('complete'),
        __metadata("design:type", Object)
    ], GradeScaleComponent.prototype, "complete", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], GradeScaleComponent.prototype, "scale", null);
    GradeScaleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'gt-grade-scale',
            template: __webpack_require__("../../../../../src/app/screens/create-semester/grade-scale/grade-scale.component.html"),
            styles: [__webpack_require__("../../../../../src/app/screens/create-semester/grade-scale/grade-scale.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], GradeScaleComponent);
    return GradeScaleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/screens/home-screen/home-screen.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n  <button (click)=\"navigateToCreateSemester()\" class=\"btn create\">New Semester</button>\r\n</div>\r\n<div class=\"menu\">\r\n  <gt-semester *ngFor=\"let semester of semesters\" \r\n               [semester]=\"semester\">\r\n  </gt-semester>\r\n  <div class=\"test\"></div>\r\n</div> \r\n"

/***/ }),

/***/ "../../../../../src/app/screens/home-screen/home-screen.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".menu {\n  background-color: #292929;\n  margin-top: 40px;\n  margin-left: 15px;\n  border-radius: 5px;\n  position: fixed;\n  width: 80%; }\n\n.header {\n  width: 80%;\n  position: fixed; }\n\n.create {\n  float: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/screens/home-screen/home-screen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeScreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_grade_receiver_service__ = __webpack_require__("../../../../../src/app/services/grade-receiver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_semester_model__ = __webpack_require__("../../../../../src/app/models/semester.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeScreenComponent = (function () {
    function HomeScreenComponent(GradeReceiver, auth, router, change) {
        var _this = this;
        this.GradeReceiver = GradeReceiver;
        this.auth = auth;
        this.router = router;
        this.change = change;
        this.semesters = [];
        auth.getUserDetails().subscribe(function (detail) {
            _this.getSemesters(detail.uid);
        });
    }
    HomeScreenComponent.prototype.ngOnInit = function () {
        // this.getSemesters();
    };
    HomeScreenComponent.prototype.getSemesters = function (id) {
        var _this = this;
        this.semesters = [];
        this.GradeReceiver.getSemesters(id).subscribe(function (data) {
            _this.updateSemesters(data);
        }, function (error) { return console.log(error); });
    };
    HomeScreenComponent.prototype.navigateToCreateSemester = function () {
        this.router.navigate(['/semester-create']);
    };
    HomeScreenComponent.prototype.updateSemesters = function (data) {
        var _this = this;
        this.semesters = [];
        data.forEach(function (semester) {
            setTimeout(function () {
                _this.semesters.push(new __WEBPACK_IMPORTED_MODULE_2__models_semester_model__["a" /* Semester */](semester));
            }, 1);
        });
    };
    HomeScreenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'gt-home-screen',
            template: __webpack_require__("../../../../../src/app/screens/home-screen/home-screen.component.html"),
            styles: [__webpack_require__("../../../../../src/app/screens/home-screen/home-screen.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_grade_receiver_service__["a" /* GradeReceiverService */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], HomeScreenComponent);
    return HomeScreenComponent;
}());



/***/ }),

/***/ "../../../../../src/app/screens/home-screen/semester/semester.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!create\" class=\"semester\">\r\n  <div class=\"header\" (click)=\"navigateToSemesterDetail(semester.id)\">\r\n      {{ semester.session }}\r\n      {{ semester.year }}\r\n  </div>\r\n  <div class=\"body\" (click)=\"navigateToSemesterDetail(semester.id)\">\r\n    <div class=\"inner-body\">\r\n        Hours: {{ semester.hours }}\r\n        <div class=\"courses\">\r\n          Courses:\r\n          <div class=\"course\" *ngFor=\"let course of semester.courses\">\r\n            <span>{{ course.name }}</span>\r\n            <!-- <span style=\"float:right\">{{ course.gpa }}</span> -->\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"delete\" (click)=\"delete()\">\r\n      <i class=\"fa fa-trash\"></i>      \r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/screens/home-screen/semester/semester.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".semester {\n  height: 150px;\n  display: -ms-inline-grid;\n  display: inline-grid;\n  width: 250px;\n  margin: 10px;\n  background-color: #B8B8B8;\n  border: 1px solid black;\n  border-radius: 5px;\n  cursor: pointer;\n  position: relative;\n  -webkit-transition: -webkit-box-shadow .3s;\n  transition: -webkit-box-shadow .3s;\n  transition: box-shadow .3s;\n  transition: box-shadow .3s, -webkit-box-shadow .3s; }\n\n.semester:hover {\n  -webkit-box-shadow: 0 0 11px rgba(255, 255, 255, 0.7);\n          box-shadow: 0 0 11px rgba(255, 255, 255, 0.7); }\n\n.header {\n  text-align: center;\n  border-top-left-radius: 5px;\n  color: #B8B8B8;\n  border-top-right-radius: 5px;\n  width: 100%;\n  height: 20px;\n  border-bottom: 1px solid black;\n  background-color: rebeccapurple;\n  font-size: 18px;\n  padding: 2px 0px; }\n\n.body {\n  padding: 0px 10px;\n  height: 130px;\n  position: relative; }\n\n.courses {\n  margin-top: 5px; }\n\n.course {\n  margin-left: 15px; }\n\n.fa-plus {\n  font-size: 40px;\n  text-align: center; }\n\n.delete {\n  bottom: 3px;\n  position: absolute;\n  right: 3px;\n  border: 1px solid rebeccapurple;\n  display: inline;\n  border-radius: 50%;\n  padding: 1px 4px; }\n\n.delete:hover {\n  border-color: #8844CC; }\n\n.delete:hover .fa-trash {\n    color: #8844CC; }\n\n.delete:active {\n  border-color: #AA55FF; }\n\n.delete:active .fa-trash {\n    color: #AA55FF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/screens/home-screen/semester/semester.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SemesterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_semester_model__ = __webpack_require__("../../../../../src/app/models/semester.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_events__ = __webpack_require__("../../../../events/events.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_events__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_grade_receiver_service__ = __webpack_require__("../../../../../src/app/services/grade-receiver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SemesterComponent = (function () {
    function SemesterComponent(router, grade, auth) {
        this.router = router;
        this.grade = grade;
        this.auth = auth;
        this.navigate = new __WEBPACK_IMPORTED_MODULE_3_events__["EventEmitter"]();
    }
    SemesterComponent.prototype.ngOnInit = function () {
    };
    SemesterComponent.prototype.delete = function () {
        var sure = confirm("Are you sure you want to delete " + this.semester.session + " " + this.semester.year + "?");
        if (sure) {
            this.grade.deleteSemester(this.auth.uid, this.semester);
        }
    };
    SemesterComponent.prototype.navigateToSemesterDetail = function (id) {
        this.router.navigate(['/' + this.auth.uid + '/semester/' + id]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_semester_model__["a" /* Semester */])
    ], SemesterComponent.prototype, "semester", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])('navigate'),
        __metadata("design:type", Object)
    ], SemesterComponent.prototype, "navigate", void 0);
    SemesterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'gt-semester',
            template: __webpack_require__("../../../../../src/app/screens/home-screen/semester/semester.component.html"),
            styles: [__webpack_require__("../../../../../src/app/screens/home-screen/semester/semester.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_grade_receiver_service__["a" /* GradeReceiverService */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]])
    ], SemesterComponent);
    return SemesterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/screens/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main__body\">\r\n  <button type=\"button\" class=\"btn btn-block login\" (click)=\"signInWithGoogle()\">\r\n    <i class=\"fa fa-google\" aria-hidden=\"true\"></i>\r\n    Login with Google\r\n  </button>\r\n</div> "

/***/ }),

/***/ "../../../../../src/app/screens/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".menu {\n  background-color: #292929;\n  margin-top: 40px;\n  margin-left: 15px;\n  border-radius: 5px;\n  position: fixed;\n  width: 80%; }\n\n.header {\n  width: 80%;\n  position: fixed; }\n\n.create {\n  float: right; }\n\n.test {\n  color: aqua; }\n\n.fa {\n  color: white; }\n\n.login {\n  margin-left: 15px;\n  width: 170px;\n  margin-top: 50px;\n  height: 50px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/screens/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.authService.isLoggedIn();
    }
    LoginComponent.prototype.ngOnInit = function () {
        document.getElementById('logout').style.display = "none";
    };
    LoginComponent.prototype.signInWithGoogle = function () {
        var _this = this;
        this.authService.signInWithGoogle()
            .then(function (res) {
            document.getElementById('logout').style.display = "inline";
            _this.router.navigate(['/home']);
        })
            .catch(function (err) { return console.log(err); });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/screens/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/screens/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/screens/semester-detail/course/course.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"courseObj\" class=\"course-wrapper\">\r\n    <div *ngIf=\"!edit\" class=\"col-4 ellipses\">{{ courseObj.name }}</div>\r\n    <div *ngIf=\"edit\" class=\"col-4\"><input class=\"ellipses\" [(ngModel)]=\"courseObj.name\"></div>\r\n\r\n    <div class=\"col-2\">\r\n      <span *ngIf=\"allowAverage\">\r\n        {{ courseObj.averageInCourse()*100 | number:'.1-3' }}%\r\n      </span>\r\n    </div>\r\n\r\n    <div *ngIf=\"!edit\" class=\"col-1\">{{ courseObj.hours }}</div>\r\n    <div *ngIf=\"edit\" class=\"col-1\"><input type=\"number\" min=1 [(ngModel)]=\"courseObj.hours\"></div>\r\n\r\n    <span *ngIf=\"!edit && allowButtons\" class=\"buttons\">\r\n      <i (click)=\"beginEdit()\" class=\"fa fa-pencil\"></i>\r\n      <i (click)=\"delete()\" class=\"fa fa-trash\"></i>\r\n      <i *ngIf=\"!isExpanded\" (click)=\"isExpanded = true\" class=\"fa fa-chevron-down\"></i>\r\n      <i *ngIf=\"isExpanded\" (click)=\"isExpanded = false\" class=\"fa fa-chevron-up\"></i>\r\n    </span>\r\n\r\n    <div class=\"scale\" *ngIf=\"edit\">\r\n      <label>Scale Type</label>\r\n      <select [(ngModel)]=\"courseObj.scaleType\">\r\n        <option value=\"letter\">Letter (eg: 'A', 'B', 'C')</option>\r\n        <option value=\"plusMinus\">Plus Minus (eg: 'A+', 'A', 'A-')</option>\r\n        <option value=\"plus\">Plus (eg: 'A+', 'A', 'B+', 'B')</option>\r\n      </select>\r\n    </div>\r\n\r\n    <gt-grade-scale *ngIf=\"edit\" (complete)=\"courseObj.gradeScale = $event\" [type]=\"courseObj.scaleType\" [scale]=\"courseObj.gradeScale\" [confirmButton]=\"false\"></gt-grade-scale>\r\n</div>\r\n<div *ngIf=\"isExpanded\" class=\"grade-groups\">\r\n  <div class=\"heading\">\r\n    <div class=\"col-3\"><span class=\"spacer\">Grade Group Name</span></div>\r\n    <div class=\"col-1 weight\">Weight</div>\r\n    <div class=\"col-1 space\"></div>\r\n    <div class=\"col-2\">Average Grade</div>\r\n    <span class=\"right\">\r\n      <i *ngIf=\"groupEdit\" (click)=\"cancelEdit()\" class=\"fa fa-times white\"></i>\r\n      <i *ngIf=\"cancel && !groupEdit && !weightChangeStarted\" (click)=\"cancelNewGradeGroup()\" class=\"fa fa-times white\"></i>\r\n\r\n      <i *ngIf=\"!groupEdit\" (click)=\"newGradeGroup()\" class=\"fa fa-plus white\"></i>\r\n\r\n      <i *ngIf=\"cancel && canConfirmNewGroups\" (click)=\"confirmNewGradeGroup()\" class=\"fa fa-check white\"></i>\r\n      <i *ngIf=\"groupEdit && canConfirmNewGroups\" (click)=\"confirmNewGradeGroup()\" class=\"fa fa-check white\"></i>\r\n    </span>\r\n  </div>\r\n  <div *ngIf=\"cancel && !canConfirmNewGroups\" class=\"help-text\">Total Weights Must Add to 100</div>\r\n  <div class=\"group\" *ngFor=\"let group of gradeGroups\">\r\n    <gt-grade-group (save)=\"saveGroup($event, group)\" \r\n                    (change)=\"checkWeightTotals()\"\r\n                    (weight)=\"changeWeights()\"\r\n                    (deleteGroup)=\"deleteGroup($event)\"\r\n                    (editGroup)=\"editGroup()\"\r\n                    (name)=\"receiveName()\"\r\n                    [group]=\"group.group\"\r\n                    [edit]=\"group.edit\"\r\n                    id=\"{{group.id}}\"></gt-grade-group>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/screens/semester-detail/course/course.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".buttons {\n  float: right; }\n\n.fa-chevron-down {\n  margin-left: 10px; }\n\n.fa-chevron-up {\n  margin-left: 10px; }\n\n.submenu {\n  margin-right: 5px; }\n\n.white {\n  color: white; }\n\n.fa-plus {\n  margin-left: 10px; }\n\n.fa {\n  cursor: pointer; }\n\n.right {\n  margin-right: 10px; }\n\n.grade-groups {\n  margin-left: 10px;\n  margin-top: 2px;\n  border: 1px solid black;\n  border-radius: 5px; }\n\n.heading {\n  border-bottom: 1px solid black;\n  background-color: rebeccapurple;\n  padding: 5px 0px; }\n\n.spacer {\n  padding-left: 10px; }\n\n.group {\n  border-bottom: 1px solid black;\n  padding: 5px 0px; }\n\n.group:last-child {\n  border-bottom: none; }\n\n.fa {\n  color: rebeccapurple;\n  margin-left: 10px !important;\n  cursor: pointer; }\n\n.right .fa {\n  color: white !important; }\n\n.help-text {\n  color: red;\n  border-bottom: 1px solid black;\n  font-style: italic;\n  text-align: center;\n  padding: 5px; }\n\ninput {\n  position: relative;\n  width: calc(100% - 30px);\n  min-width: 25px; }\n\n.scale {\n  margin-top: 15px;\n  margin-bottom: 10px; }\n\n.ellipses {\n  text-overflow: ellipsis;\n  overflow: hidden; }\n\n.grade {\n  min-width: 45px; }\n\n.space {\n  min-width: 15px; }\n\n.weight {\n  min-width: 50px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/screens/semester-detail/course/course.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_course_model__ = __webpack_require__("../../../../../src/app/models/course.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_grade_group_model__ = __webpack_require__("../../../../../src/app/models/grade-group.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grade_group_grade_group_component__ = __webpack_require__("../../../../../src/app/screens/semester-detail/grade-group/grade-group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_semester_grade_scale_grade_scale_component__ = __webpack_require__("../../../../../src/app/screens/create-semester/grade-scale/grade-scale.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CourseComponent = (function () {
    function CourseComponent() {
        this.isExpanded = false;
        this.gradeGroups = [];
        this.old = [];
        this.cancel = false;
        this.groupEdit = false;
        this.edit = false;
        this.canConfirmNewGroups = false;
        this.allowButtons = true;
        this.weightChangeStarted = false;
        this.allowAverage = true;
        this.numNewGroups = 0;
        this.save = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.courseEdit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.deleteCourse = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    CourseComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(CourseComponent.prototype, "course", {
        set: function (course) {
            var _this = this;
            this.courseObj = course;
            var i = 0;
            this.allowAverage = false;
            course.gradeGroups.forEach(function (group) {
                _this.gradeGroups.push({ "group": group, "edit": false, "id": i });
                if (group.grades.length != 0)
                    _this.allowAverage = true;
                i++;
            });
        },
        enumerable: true,
        configurable: true
    });
    CourseComponent.prototype.saveGroup = function (e, groupOriginal) {
        this.courseObj.gradeGroups.forEach(function (group) {
            if (group == groupOriginal) {
                group = e;
            }
        });
        this.save.emit(this.courseObj);
    };
    CourseComponent.prototype.newGradeGroup = function () {
        var _this = this;
        this.numNewGroups++;
        this.cancel = true;
        var temp = this.gradeGroups;
        this.gradeGroups = [];
        this.gradeGroups.push({ "grade": new __WEBPACK_IMPORTED_MODULE_2__models_grade_group_model__["a" /* GradeGroup */]({}), "edit": true, id: 0 });
        var i = 1;
        temp.forEach(function (group) {
            group.id = i;
            _this.gradeGroups.push(group);
        });
        if (this.numNewGroups > 1) {
            setTimeout(function () {
                var i = 0;
                _this.components.toArray().forEach(function (comp) {
                    i++;
                    if (i == _this.numNewGroups)
                        comp.parentalPermission = true;
                    else
                        comp.parentalPermission = false;
                });
            }, 1);
        }
    };
    CourseComponent.prototype.cancelNewGradeGroup = function () {
        this.cancel = false;
        this.gradeGroups = this.gradeGroups.slice(this.numNewGroups, this.gradeGroups.length);
        this.gradeGroups.forEach(function (group) {
            group.id = group.id - 1;
        });
        this.numNewGroups = 0;
        this.components.toArray().forEach(function (comp) {
            comp.stopWeightChange();
        });
        this.weightChangeStarted = false;
    };
    CourseComponent.prototype.changeWeights = function () {
        var _this = this;
        setTimeout(function () {
            _this.weightChangeStarted = true;
        }, 0);
        this.components.toArray().forEach(function (comp) {
            comp.startWeightChange();
        });
    };
    CourseComponent.prototype.checkWeightTotals = function () {
        var _this = this;
        setTimeout(function () {
            var value = 0;
            var allValid = true;
            _this.components.toArray().forEach(function (comp) {
                if (!comp.groupForm.valid)
                    allValid = false;
                else
                    value += comp.groupForm.controls['weight'].value;
            });
            _this.canConfirmNewGroups = (allValid && value === 100);
        });
    };
    CourseComponent.prototype.editGroup = function () {
        var _this = this;
        this.old = [];
        this.groupEdit = true;
        this.components.toArray().forEach(function (comp) {
            _this.old.push(comp.groupObj);
        });
    };
    CourseComponent.prototype.cancelEdit = function () {
        var length = this.components.toArray().length;
        var comps = this.components.toArray();
        for (var i = 0; i < length; i++) {
            comps[i].edit = false;
            comps[i].groupObj = this.old[i];
            comps[i].nameComplete = false;
        }
        this.groupEdit = false;
    };
    CourseComponent.prototype.confirmNewGradeGroup = function () {
        var _this = this;
        this.numNewGroups = 0;
        this.cancel = false;
        var i = 0;
        this.components.forEach(function (comp) {
            comp.edit = false;
            comp.cancel = false;
            _this.gradeGroups[i].grade = comp.addGradeGroup();
            i++;
        });
        this.courseObj.gradeGroups = [];
        this.gradeGroups.forEach(function (gradegroup) {
            _this.courseObj.gradeGroups.push(new __WEBPACK_IMPORTED_MODULE_2__models_grade_group_model__["a" /* GradeGroup */](gradegroup.grade));
        });
        this.weightChangeStarted = false;
        this.save.emit(this.courseObj);
    };
    CourseComponent.prototype.deleteGroup = function (e) {
        var _this = this;
        if (confirm("Are you sure you want to delete " + e.name + "?")) {
            this.cancel = true;
            var temp_1 = [];
            this.gradeGroups.forEach(function (group) {
                if (group.group.name != e.name || group.group.weight != e.weight) {
                    temp_1.push(group);
                }
            });
            this.gradeGroups = temp_1;
            this.courseObj.gradeGroups = [];
            this.gradeGroups.forEach(function (group) {
                _this.courseObj.gradeGroups.push(group.group);
            });
            this.changeWeights();
        }
    };
    CourseComponent.prototype.beginEdit = function () {
        this.isExpanded = false;
        this.edit = true;
        this.courseEdit.emit();
    };
    CourseComponent.prototype.getScale = function () {
        return this.scaleComp.changeScale();
    };
    CourseComponent.prototype.delete = function () {
        this.deleteCourse.emit();
    };
    CourseComponent.prototype.receiveName = function () {
        var valid = true;
        this.components.toArray().forEach(function (comp) {
            if (!comp.groupForm.controls['name'].valid)
                valid = false;
        });
        this.components.toArray()[this.numNewGroups - 1].tempDisable = !valid;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__create_semester_grade_scale_grade_scale_component__["a" /* GradeScaleComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__create_semester_grade_scale_grade_scale_component__["a" /* GradeScaleComponent */])
    ], CourseComponent.prototype, "scaleComp", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_3__grade_group_grade_group_component__["a" /* GradeGroupComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* QueryList */])
    ], CourseComponent.prototype, "components", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])('save'),
        __metadata("design:type", Object)
    ], CourseComponent.prototype, "save", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])('courseEdit'),
        __metadata("design:type", Object)
    ], CourseComponent.prototype, "courseEdit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])('deleteCourse'),
        __metadata("design:type", Object)
    ], CourseComponent.prototype, "deleteCourse", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_course_model__["a" /* Course */]),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__models_course_model__["a" /* Course */]])
    ], CourseComponent.prototype, "course", null);
    CourseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'gt-course',
            template: __webpack_require__("../../../../../src/app/screens/semester-detail/course/course.component.html"),
            styles: [__webpack_require__("../../../../../src/app/screens/semester-detail/course/course.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CourseComponent);
    return CourseComponent;
}());



/***/ }),

/***/ "../../../../../src/app/screens/semester-detail/grade-group/grade-group.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!edit && groupObj\">\r\n  <div class=\"col-3 spacer\">{{ groupObj.name }}</div>\r\n  <div class=\"col-1\">{{ groupObj.weight }}</div>\r\n  <div class=\"col-1\"></div>\r\n  <span *ngIf=\"gradeObjs.length\">\r\n    <div class=\"col-2\">{{ groupObj.average()*100 | number:'.1-3' }}%</div>\r\n  </span>\r\n  <span class=\"buttons\">\r\n    <i (click)=\"editMode()\" class=\"fa fa-pencil\"></i>\r\n    <i (click)=\"deleteGradeGroup()\" class=\"fa fa-trash\"></i>\r\n    <i *ngIf=\"!isExpanded\" (click)=\"isExpanded = true\" class=\"fa fa-chevron-down submenu\"></i>\r\n    <i *ngIf=\"isExpanded\" (click)=\"isExpanded = false\" class=\"fa fa-chevron-up submenu\"></i>\r\n  </span>\r\n  <div class=\"grades\" *ngIf=\"isExpanded\">\r\n    <div class=\"heading\">\r\n      <div class=\"col-3 spacer\">Name</div>\r\n      <div class=\"col-2\">Points Earned</div>\r\n      <div class=\"col-1\"></div>\r\n      <div class=\"col-2\">Total Points</div>\r\n      <span class=\"right\">\r\n        <i *ngIf=\"!cancel\" (click)=\"newGrade()\" class=\"fa fa-plus white\"></i>\r\n        <i *ngIf=\"cancel\" (click)=\"cancelNewGrade()\" class=\"fa fa-times white\"></i>\r\n      </span>\r\n    </div>\r\n    <div class=\"grade\" *ngFor=\"let grade of gradeObjs\">\r\n      <gt-grade (deleter)=\"deleteGrade($event)\" (newGrade)=\"saveNewGrade($event)\" [grade]=\"grade.grade\" [edit]=\"grade.edit\" ></gt-grade>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"edit\">\r\n  <form [formGroup]=\"groupForm\">\r\n    <div class=\"form-group\">\r\n      <div *ngIf=\"!nameComplete\" class=\"col-3 spacer\">\r\n        <input (onkeyup)=\"giveParentName()\" formControlName=\"name\" type=\"text\">\r\n      </div>\r\n      <div *ngIf=\"nameComplete\" class=\"col-3 spacer\">\r\n          {{groupForm.controls['name'].value}}\r\n        </div>\r\n      <div *ngIf=\"nameComplete\" class=\"col-2\">\r\n        <input (keyup)=\"change.emit();\" max=\"100\" min=0 formControlName=\"weight\" type=\"number\">\r\n      </div>\r\n      <span *ngIf=\"!nameComplete && parentalPermission\" class=\"right-button\"><button (click)=\"adjustWeights()\" [disabled]=\"!groupForm.controls['name'].valid || tempDisable\" class=\"btn\">Next</button></span>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/screens/semester-detail/grade-group/grade-group.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".submenu {\n  margin-right: 5px; }\n\n.buttons {\n  float: right; }\n\n.spacer {\n  padding-left: 10px; }\n\n.submenu {\n  margin-right: 5px; }\n\n.fa {\n  margin-left: 10px; }\n\n.fa {\n  cursor: pointer; }\n\n.white {\n  color: white; }\n\n.right {\n  float: right;\n  margin-right: 10px; }\n\n.heading {\n  background-color: rebeccapurple;\n  padding: 5px 0px;\n  border-bottom: 1px solid black; }\n\n.grades {\n  margin-left: 10px;\n  border: 1px solid black;\n  border-radius: 5px;\n  margin-right: 5px; }\n\n.grade {\n  padding: 5px 0px;\n  border-bottom: 1px solid black; }\n\n.grade:last-child {\n  border-bottom: none; }\n\ninput {\n  width: 80%; }\n\n.right-button {\n  float: right;\n  margin-top: -2px;\n  padding-right: 5px; }\n\n.space {\n  min-width: 15px; }\n\n.weight {\n  min-width: 50px; }\n\n@media only screen and (max-width: 690px) {\n  .fa {\n    margin-left: 5px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/screens/semester-detail/grade-group/grade-group.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GradeGroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_grade_group_model__ = __webpack_require__("../../../../../src/app/models/grade-group.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_grade_model__ = __webpack_require__("../../../../../src/app/models/grade.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_grade_receiver_service__ = __webpack_require__("../../../../../src/app/services/grade-receiver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GradeGroupComponent = (function () {
    function GradeGroupComponent(gradeReceiver, fb) {
        this.gradeReceiver = gradeReceiver;
        this.fb = fb;
        this.isExpanded = false;
        this.gradeObjs = [];
        this.cancel = false;
        this.nameComplete = false;
        this.parentalPermission = true;
        this.tempDisable = false;
        this.edit = false;
        this.save = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.weight = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.deleteGroup = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.editGroup = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.name = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.groupForm = fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            weight: [0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].min(1)]
        });
    }
    Object.defineProperty(GradeGroupComponent.prototype, "group", {
        set: function (group) {
            var _this = this;
            if (group) {
                this.groupObj = group;
                this.groupForm.controls['name'].setValue(group.name);
                this.groupForm.controls['weight'].setValue(group.weight);
                group.grades.forEach(function (grade) {
                    _this.gradeObjs.push({ "grade": grade, "edit": false });
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    GradeGroupComponent.prototype.ngOnInit = function () {
    };
    GradeGroupComponent.prototype.newGrade = function () {
        var _this = this;
        this.cancel = true;
        var temp = this.gradeObjs;
        this.gradeObjs = [];
        this.gradeObjs.push({ "grade": null, "edit": true });
        temp.forEach(function (grade) {
            _this.gradeObjs.push(grade);
        });
    };
    GradeGroupComponent.prototype.saveNewGrade = function (e) {
        this.gradeObjs[0] = { grade: new __WEBPACK_IMPORTED_MODULE_2__models_grade_model__["a" /* Grade */](e), edit: false };
        var grades = [];
        this.gradeObjs.forEach(function (grade) {
            grades.push(grade.grade);
        });
        this.groupObj.updateGrades(grades);
        this.save.emit(this.groupObj);
    };
    GradeGroupComponent.prototype.cancelNewGrade = function () {
        this.cancel = false;
        this.gradeObjs = this.gradeObjs.slice(1, this.gradeObjs.length);
    };
    GradeGroupComponent.prototype.addGradeGroup = function () {
        var oldGrades = [];
        if (this.groupObj && this.groupObj.grades)
            oldGrades = this.groupObj.grades;
        this.groupObj = new __WEBPACK_IMPORTED_MODULE_1__models_grade_group_model__["a" /* GradeGroup */](this.groupForm.value);
        this.groupObj.grades = oldGrades;
        this.edit = false;
        return this.groupObj;
    };
    GradeGroupComponent.prototype.adjustWeights = function () {
        this.nameComplete = true;
        this.weight.emit();
    };
    GradeGroupComponent.prototype.startWeightChange = function () {
        if (this.groupObj)
            this.oldValue = this.groupObj.weight;
        this.nameComplete = true;
        this.edit = true;
    };
    GradeGroupComponent.prototype.stopWeightChange = function () {
        this.groupForm.controls['weight'].setValue(this.oldValue);
        if (this.groupObj)
            this.groupObj.weight = this.oldValue;
        this.nameComplete = false;
        this.edit = false;
    };
    GradeGroupComponent.prototype.deleteGrade = function (e) {
        var _this = this;
        var tempGrades = [];
        var i = 0;
        this.groupObj.grades.forEach(function (grade) {
            if (grade.name !== e.grade.name || grade.pointsEarned !== e.grade.pointsEarned
                || grade.totalPoints !== e.grade.totalPoints)
                tempGrades.push(grade);
            else
                _this.gradeObjs.splice(i, 1);
            i++;
        });
        this.groupObj.grades = tempGrades;
        this.save.emit(this.groupObj);
    };
    GradeGroupComponent.prototype.deleteGradeGroup = function () {
        this.deleteGroup.emit(this.groupObj);
    };
    GradeGroupComponent.prototype.editMode = function () {
        this.edit = true;
        this.groupForm.controls['name'].setValue(this.groupObj.name);
        this.groupForm.controls['weight'].setValue(this.groupObj.weight);
        this.editGroup.emit();
    };
    GradeGroupComponent.prototype.giveParentName = function () {
        if (!this.parentalPermission) {
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], GradeGroupComponent.prototype, "edit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])('save'),
        __metadata("design:type", Object)
    ], GradeGroupComponent.prototype, "save", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])('weight'),
        __metadata("design:type", Object)
    ], GradeGroupComponent.prototype, "weight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])('change'),
        __metadata("design:type", Object)
    ], GradeGroupComponent.prototype, "change", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])('deleteGroup'),
        __metadata("design:type", Object)
    ], GradeGroupComponent.prototype, "deleteGroup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])('editGroup'),
        __metadata("design:type", Object)
    ], GradeGroupComponent.prototype, "editGroup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])('name'),
        __metadata("design:type", Object)
    ], GradeGroupComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_grade_group_model__["a" /* GradeGroup */]),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__models_grade_group_model__["a" /* GradeGroup */]])
    ], GradeGroupComponent.prototype, "group", null);
    GradeGroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'gt-grade-group',
            template: __webpack_require__("../../../../../src/app/screens/semester-detail/grade-group/grade-group.component.html"),
            styles: [__webpack_require__("../../../../../src/app/screens/semester-detail/grade-group/grade-group.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_grade_receiver_service__["a" /* GradeReceiverService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], GradeGroupComponent);
    return GradeGroupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/screens/semester-detail/grade/grade.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!edit\">\r\n  <div class=\"col-3 spacer\">{{ grade.name }}</div>\r\n  <div class=\"col-2\">{{ grade.pointsEarned }}</div>\r\n  <div class=\"col-1\"></div>\r\n  <div class=\"col-2\">{{ grade.totalPoints }}</div>\r\n  <span class=\"right\">\r\n    <i (click)=\"editMode()\" class=\"fa fa-pencil\"></i>\r\n    <i (click)=\"deleteGrade()\" class=\"fa fa-trash\"></i>\r\n  </span>\r\n</div>\r\n\r\n<div *ngIf=\"edit\">\r\n  <form [formGroup]=\"gradeForm\">\r\n    <div class=\"form-group\">\r\n        <div class=\"col-3 spacer\"><input formControlName=\"name\"></div>\r\n        <div class=\"col-2\"><input type=\"number\" min=0 formControlName=\"pointsEarned\"></div>\r\n        <div class=\"col-1\"></div>\r\n        <div class=\"col-2\"><input type=\"number\" min=1 formControlName=\"totalPoints\"></div>\r\n        <span class=\"right-button\"><button (click)=\"addGrade()\" [disabled]=\"!gradeForm.valid\" class=\"btn\">Confirm</button></span>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/screens/semester-detail/grade/grade.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spacer {\n  padding-left: 10px; }\n\ninput {\n  width: 80%; }\n\n.right-button {\n  float: right;\n  margin-top: -2px;\n  padding-right: 5px; }\n\n.right {\n  margin-right: 10px; }\n\n.fa {\n  cursor: pointer;\n  margin-left: 10px; }\n\n@media only screen and (max-width: 690px) {\n  .fa {\n    margin-left: 5px; } }\n\n@media only screen and (max-width: 448px) {\n  .right {\n    margin-top: -17px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/screens/semester-detail/grade/grade.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GradeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_grade_model__ = __webpack_require__("../../../../../src/app/models/grade.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GradeComponent = (function () {
    function GradeComponent(fb) {
        this.fb = fb;
        this.deleter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.newGrade = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.gradeForm = fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            pointsEarned: [''],
            totalPoints: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]
        });
    }
    GradeComponent.prototype.ngOnInit = function () {
    };
    GradeComponent.prototype.addGrade = function () {
        this.grade = this.gradeForm.value;
        this.edit = false;
        this.newGrade.emit(this.gradeForm.value);
    };
    GradeComponent.prototype.deleteGrade = function () {
        var confirmed = confirm("Are you sure you want to delete this grade?");
        if (confirmed) {
            this.deleter.emit(this);
        }
    };
    GradeComponent.prototype.editMode = function () {
        this.edit = true;
        this.gradeForm.controls['name'].setValue(this.grade.name);
        this.gradeForm.controls['pointsEarned'].setValue(this.grade.pointsEarned);
        this.gradeForm.controls['totalPoints'].setValue(this.grade.totalPoints);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_grade_model__["a" /* Grade */])
    ], GradeComponent.prototype, "grade", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], GradeComponent.prototype, "edit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])('deleter'),
        __metadata("design:type", Object)
    ], GradeComponent.prototype, "deleter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])('newGrade'),
        __metadata("design:type", Object)
    ], GradeComponent.prototype, "newGrade", void 0);
    GradeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'gt-grade',
            template: __webpack_require__("../../../../../src/app/screens/semester-detail/grade/grade.component.html"),
            styles: [__webpack_require__("../../../../../src/app/screens/semester-detail/grade/grade.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], GradeComponent);
    return GradeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/screens/semester-detail/semester-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"semester\" class=\"menu\">\r\n  <div class=\"changes-saved\">Changes have been saved</div>\r\n  <div class=\"header\">\r\n    <div class=\"col-4 header-text\">Course Name</div>\r\n    <div class=\"col-2 header-text grade\">Current Grade</div>\r\n    <div class=\"col-1 header-text\">Hours</div>\r\n    <span class=\"buttons\" *ngIf=\"courseBeingEditted || courseBeingAdded\">\r\n      <i (click)=\"cancelEdittingCourse()\" class=\"fa fa-times\"></i>\r\n      <i *ngIf=\"canSaveEdittedCourse || canSaveAddedCourse\" (click)=\"editComplete()\" class=\"fa fa-check\"></i>\r\n    </span>\r\n    <span *ngIf=\"!courseBeingEditted && !courseBeingAdded\" class=\"buttons\">\r\n      <i (click)=\"addCourse()\" class=\"fa fa-plus\"></i>\r\n    </span>\r\n  </div>\r\n\r\n  <div class=\"course-wrapper\" *ngFor=\"let course of semester.courses\">\r\n    <gt-course (deleteCourse)=\"deleteCourse(course)\" (save)=\"saveCourse($event, course)\" (courseEdit)=\"courseEditing(course)\" [course]=\"course\"></gt-course>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/screens/semester-detail/semester-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".menu {\n  background-color: #292929;\n  margin-top: 10px;\n  margin-left: 15px;\n  border-radius: 5px;\n  width: 80%;\n  padding: 15px;\n  padding-bottom: 30px; }\n\n.course-wrapper {\n  width: 80%;\n  background-color: #B8B8B8;\n  padding: 5px 10px;\n  border: 1px solid white; }\n\n.course-wrapper:last-child {\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px; }\n\n.header {\n  width: 80%;\n  background-color: rebeccapurple;\n  padding: 5px 10px;\n  border: 1px solid white;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px; }\n\n.header-text {\n  font-size: 18px; }\n\n.save {\n  margin-left: 15px;\n  margin-top: 5px; }\n\n.changes-saved {\n  color: white;\n  padding-bottom: 15px;\n  display: none; }\n\n.buttons {\n  float: right; }\n\n.fa {\n  color: white;\n  margin-left: 10px !important;\n  cursor: pointer; }\n\n.grade {\n  min-width: 45px; }\n\n@media only screen and (max-width: 825px) {\n  .menu {\n    width: 85%; }\n  .course-wrapper {\n    width: 85%; }\n  .header {\n    width: 85%; } }\n\n@media only screen and (max-width: 690px) {\n  .menu {\n    width: 90%; }\n  .course-wrapper {\n    width: 90%; }\n  .header {\n    width: 90%; } }\n\n@media only screen and (max-width: 550px) {\n  .menu {\n    width: 95%; }\n  .course-wrapper {\n    width: 95%; }\n  .header {\n    width: 95%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/screens/semester-detail/semester-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SemesterDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_grade_receiver_service__ = __webpack_require__("../../../../../src/app/services/grade-receiver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_semester_model__ = __webpack_require__("../../../../../src/app/models/semester.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__course_course_component__ = __webpack_require__("../../../../../src/app/screens/semester-detail/course/course.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_course_model__ = __webpack_require__("../../../../../src/app/models/course.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SemesterDetailComponent = (function () {
    function SemesterDetailComponent(GradeReceiver, route, auth) {
        var _this = this;
        this.GradeReceiver = GradeReceiver;
        this.route = route;
        this.auth = auth;
        this.courseBeingEditted = false;
        this.courseBeingAdded = false;
        route.params.forEach(function (param) {
            _this.id = param['id'];
            _this.uid = param['uid'];
        });
        this.GradeReceiver.getSemesterById(this.uid, this.id).subscribe(function (data) {
            if (data)
                _this.semester = new __WEBPACK_IMPORTED_MODULE_2__models_semester_model__["a" /* Semester */](data);
        }, function (error) { return _this.errorMessage = error; });
    }
    SemesterDetailComponent.prototype.saveCourse = function (e, originalCourse) {
        this.semester.courses.forEach(function (course) {
            if (course == originalCourse) {
                course = e;
            }
        });
        this.saveSemester();
    };
    SemesterDetailComponent.prototype.saveSemester = function () {
        this.GradeReceiver.updateSemester(this.uid, this.semester);
        document.getElementsByClassName('changes-saved')[0].classList.add('block');
        setTimeout(function () {
            document.getElementsByClassName('changes-saved')[0].classList.remove('block');
        }, 3000);
    };
    SemesterDetailComponent.prototype.courseEditing = function (courseToEdit) {
        this.courseBeingEditted = true;
        this.courseToEditIndex = this.semester.courses.indexOf(courseToEdit);
        this.courseToEdit = new __WEBPACK_IMPORTED_MODULE_6__models_course_model__["a" /* Course */](courseToEdit);
        this.components.toArray().forEach(function (comp) {
            if (comp.courseObj != courseToEdit) {
                comp.isExpanded = false;
                comp.allowButtons = false;
            }
        });
    };
    SemesterDetailComponent.prototype.editComplete = function () {
        if (this.courseBeingAdded)
            this.addCourseComplete();
        else {
            this.allowButtons();
            var newCourse = this.components.toArray()[this.courseToEditIndex].courseObj;
            newCourse.gradeScale = this.components.toArray()[this.courseToEditIndex].getScale();
            this.semester.courses[this.courseToEditIndex] = newCourse;
            this.saveSemester();
            this.components.toArray()[this.courseToEditIndex].edit = false;
            this.courseToEditIndex = null;
            this.courseBeingEditted = false;
        }
    };
    SemesterDetailComponent.prototype.cancelEdittingCourse = function () {
        if (this.courseBeingAdded)
            this.cancelAddingCourse();
        else {
            this.allowButtons();
            this.components.toArray()[this.courseToEditIndex].courseObj = this.courseToEdit;
            this.components.toArray()[this.courseToEditIndex].edit = false;
            this.courseToEditIndex = null;
            this.courseBeingEditted = false;
        }
    };
    SemesterDetailComponent.prototype.allowButtons = function () {
        this.components.toArray().forEach(function (comp) {
            comp.allowButtons = true;
        });
    };
    Object.defineProperty(SemesterDetailComponent.prototype, "canSaveEdittedCourse", {
        get: function () {
            return this.courseToEditIndex != null &&
                this.courseBeingEditted == true &&
                this.components.toArray()[this.courseToEditIndex].scaleComp &&
                this.components.toArray()[this.courseToEditIndex].scaleComp.isScaleValid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SemesterDetailComponent.prototype, "canSaveAddedCourse", {
        get: function () {
            var comp = this.components.toArray()[0];
            if (comp && comp.scaleComp) {
                comp.courseObj.gradeScale = comp.scaleComp.changeScale();
                var valid = comp.courseObj.name &&
                    comp.courseObj.hours &&
                    comp.courseObj.scaleType &&
                    comp.courseObj.gradeScale &&
                    comp.scaleComp.isScaleValid &&
                    comp.scaleComp.isConfirmed;
                return valid;
            }
            else
                return false;
        },
        enumerable: true,
        configurable: true
    });
    SemesterDetailComponent.prototype.addCourse = function () {
        var _this = this;
        this.courseBeingAdded = true;
        var courses = this.semester.courses;
        this.semester.courses = [];
        this.semester.courses.push(new __WEBPACK_IMPORTED_MODULE_6__models_course_model__["a" /* Course */]({}));
        courses.forEach(function (course) {
            _this.semester.courses.push(course);
        });
        setTimeout(function () {
            _this.components.toArray()[0].edit = true;
        }, 1);
        this.components.toArray().forEach(function (comp) {
            if (comp.courseObj != _this.semester.courses[0]) {
                comp.allowButtons = false;
                comp.isExpanded = false;
            }
        });
    };
    SemesterDetailComponent.prototype.cancelAddingCourse = function () {
        this.semester.courses.splice(0, 1);
        this.courseBeingAdded = false;
        this.allowButtons();
    };
    SemesterDetailComponent.prototype.addCourseComplete = function () {
        this.semester.courses[0] = this.components.toArray()[0].courseObj;
        this.courseBeingAdded = false;
        this.allowButtons();
        this.saveSemester();
    };
    SemesterDetailComponent.prototype.deleteCourse = function (course) {
        if (confirm("Are you sure you want to delete " + course.name)) {
            var index = this.semester.courses.indexOf(course);
            this.semester.courses.splice(index, 1);
            this.saveSemester();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_5__course_course_component__["a" /* CourseComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* QueryList */])
    ], SemesterDetailComponent.prototype, "components", void 0);
    SemesterDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'gt-semester-detail',
            template: __webpack_require__("../../../../../src/app/screens/semester-detail/semester-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/screens/semester-detail/semester-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_grade_receiver_service__["a" /* GradeReceiverService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]])
    ], SemesterDetailComponent);
    return SemesterDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(_firebaseAuth, router) {
        var _this = this;
        this._firebaseAuth = _firebaseAuth;
        this.router = router;
        this.user = _firebaseAuth.authState;
        this.user.subscribe(function (user) {
            if (user) {
                _this.userDetails = user;
                _this.uid = user.uid;
            }
            else {
                _this.userDetails = null;
            }
        });
    }
    AuthService.prototype.signInWithGoogle = function () {
        return this._firebaseAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].GoogleAuthProvider());
    };
    AuthService.prototype.isLoggedIn = function () {
        if (this.userDetails == null) {
            this.router.navigate(['login']);
            return false;
        }
        else
            return true;
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this._firebaseAuth.auth.signOut()
            .then(function (res) { return _this.router.navigate(['/']); });
    };
    AuthService.prototype.getUserDetails = function () {
        return this._firebaseAuth.authState;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/grade-receiver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GradeReceiverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GradeReceiverService = (function () {
    function GradeReceiverService(db) {
        this.db = db;
        this.semesters = {};
    }
    GradeReceiverService.prototype.getSemesters = function (uid) {
        this.semesters = this.db.list('/' + uid + '/semesters');
        return this.semesters.valueChanges();
    };
    GradeReceiverService.prototype.getSemesterById = function (uid, id) {
        return this.db.object('/' + uid + '/semesters/' + id).valueChanges();
    };
    GradeReceiverService.prototype.saveNewSemester = function (uid, semester, id) {
        semester.id = id;
        this.db.object('/' + uid + '/semesters/' + id).set(semester);
    };
    GradeReceiverService.prototype.deleteSemester = function (uid, semester) {
        this.db.object('/' + uid + '/semesters/' + semester.id).remove();
    };
    GradeReceiverService.prototype.updateSemester = function (uid, semester) {
        this.db.object('/' + uid + '/semesters/' + semester.id).update(semester);
    };
    GradeReceiverService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], GradeReceiverService);
    return GradeReceiverService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyATqQgS3LNs3ybkSYDZ6MxTli5EHTjrChQ",
        authDomain: "gradetracker-96694.firebaseapp.com",
        databaseURL: "https://gradetracker-96694.firebaseio.com",
        projectId: "gradetracker-96694",
        storageBucket: "gradetracker-96694.appspot.com",
        messagingSenderId: "499319034099"
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map