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
var forms_1 = require("@angular/forms");
var jobs_service_1 = require("./service/jobs.service");
var ProjectForm = (function () {
    function ProjectForm(formBuilder, db) {
        this.formBuilder = formBuilder;
        this.db = db;
    }
    ProjectForm.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            code: '',
            name: ''
        });
    };
    ProjectForm.prototype.addJob = function (_a) {
        var value = _a.value, valid = _a.valid;
        console.log('Click:', value, valid);
        if (value.code !== '') {
            this.db.addJobs({ id: 10, code: value.code, title: value.name, emails: [] });
            this.ngOnInit();
        }
    };
    ProjectForm.prototype.clearField = function () {
        this.ngOnInit();
    };
    return ProjectForm;
}());
ProjectForm = __decorate([
    core_1.Component({
        selector: 'create-project',
        template: require('./pages/projectform.html')
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, jobs_service_1.JobsService])
], ProjectForm);
exports.ProjectForm = ProjectForm;
//# sourceMappingURL=projectform.js.map