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
// import {Headers, Http} from '@angular/http';
var JOBSLIST = [
    {
        'id': 1,
        'code': 'XPTD012',
        'title': 'Ibrance Emails',
        'emails': [
            {
                'code': 'xpn320',
                'title': 'Woauw Emails',
                'comment': 'NO Comment',
                'version': '2',
                'container': 'emails Contain Elem'
            },
            {
                'code': 'xpn321',
                'title': 'Woauw Emails',
                'comment': 'NO Comment',
                'version': '1',
                'container': 'emails Contain Elem'
            },
            {
                'code': 'xpn322',
                'title': 'Woauw Emails',
                'comment': 'NO Comment',
                'version': '3',
                'container': 'emails Contain Elem'
            }
        ]
    },
    {
        'id': 2,
        'code': 'LOTD015',
        'title': 'Pfizer Emails',
        'emails': [
            {
                'code': 'xpn320',
                'title': 'Woauw Emails',
                'comment': 'NO Comment',
                'version': '2',
                'container': 'emails Contain Elem'
            },
            {
                'code': 'xpn321',
                'title': 'Woauw Emails',
                'comment': 'NO Comment',
                'version': '1',
                'container': 'emails Contain Elem'
            },
            {
                'code': 'xpn322',
                'title': 'Woauw Emails',
                'comment': 'NO Comment',
                'version': '3',
                'container': 'emails Contain Elem'
            }
        ]
    },
    {
        'id': 3,
        'code': 'MDR0066',
        'title': 'Shrmas Emails',
        'emails': [
            {
                'code': 'xpn320',
                'title': 'Woauw Emails',
                'comment': 'NO Comment',
                'version': '2',
                'container': 'emails Contain Elem'
            },
            {
                'code': 'xpn321',
                'title': 'Woauw Emails',
                'comment': 'NO Comment',
                'version': '1',
                'container': 'emails Contain Elem'
            },
            {
                'code': 'xpn322',
                'title': 'Woauw Emails',
                'comment': 'NO Comment',
                'version': '3',
                'container': 'emails Contain Elem'
            }
        ]
    },
];
var JobsService = JobsService_1 = (function () {
    function JobsService() {
    }
    Object.defineProperty(JobsService, "Instance", {
        get: function () {
            if (this.instance === null || this.instance === undefined) {
                this.instance = new JobsService_1();
            }
            return this.instance;
        },
        enumerable: true,
        configurable: true
    });
    JobsService.prototype.getJobs = function () {
        return JOBSLIST;
    };
    JobsService.prototype.getJob = function (codenum) {
        return JOBSLIST.filter(function (elem) { return elem.code === codenum; });
    };
    JobsService.prototype.addJobs = function (obj) {
        JOBSLIST.push(obj);
    };
    JobsService.prototype.addJob = function (obj, version) {
        JOBSLIST.forEach(function (elem) {
            if (elem.code === version) {
                elem.emails.push(obj);
            }
        });
    };
    return JobsService;
}());
JobsService = JobsService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], JobsService);
exports.JobsService = JobsService;
var JobsService_1;
//# sourceMappingURL=jobs.service.js.map