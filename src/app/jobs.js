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
var core_1 = require("@angular/core");
var jobs_service_1 = require("./service/jobs.service");
var router_1 = require("@angular/router");
var Jobs = (function () {
    function Jobs(db, router) {
        this.db = db;
        this.router = router;
        this.name = 'Jobs List';
        this.jobList = this.getJobs();
    }
    Jobs.prototype.getJobs = function () {
        return this.db.getJobs();
    };
    Jobs.prototype.getJob = function (num) {
        return this.db.getJob(num);
    };
    Jobs.prototype.onSelect = function (info) {
        // console.log(info);
        this.router.navigate(['/project', info.code]);
    };
    return Jobs;
}());
Jobs = __decorate([
    core_1.Component({
        selector: 'fountain-jobs',
        template: require('./pages/jobs.html')
    }),
    __metadata("design:paramtypes", [jobs_service_1.JobsService, router_1.Router])
], Jobs);
exports.Jobs = Jobs;
//# sourceMappingURL=jobs.js.map