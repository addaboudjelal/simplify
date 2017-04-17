"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var jobs_service_1 = require("./service/jobs.service");
var router_2 = require("@angular/router");
var Detail = (function () {
    function Detail(route, location, jobService, router) {
        this.route = route;
        this.location = location;
        this.jobService = jobService;
        this.router = router;
        this.master = 'Parent to child';
        this.visible = false;
        this.getList();
    }
    Detail.prototype.ngOnInit = function () {
        this.getList();
    };
    Detail.prototype.getList = function () {
        // console.log(this.route.params);
        var id = this.route.params.map(function (p) { return p.id; });
        var url = this.route.url.map(function (p) { return p.join(''); });
        // console.log('And : ',url['destination']._value[1].path);
        var tempo = url['destination']._value[1].path;
        this.jobcode = this.jobService.getJob(tempo)[0];
        // console.log('D',this.jobcode);
        this.master = tempo;
    };
    Detail.prototype.goBack = function () {
        this.location.back();
    };
    Detail.prototype.addEmail = function () {
        // console.log('Parent adding');
        this.visible = !this.visible;
    };
    Detail.prototype.onCode = function (data) {
        console.log('open: ', data);
        this.router.navigate(['/email', data]);
    };
    return Detail;
}());
Detail = __decorate([
    core_1.Component({
        selector: 'my-detail',
        template: require('./pages/detail.html')
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, common_1.Location, jobs_service_1.JobsService, router_2.Router])
], Detail);
exports.Detail = Detail;
//# sourceMappingURL=detail.js.map