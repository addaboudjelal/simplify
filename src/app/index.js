"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var routes_1 = require("./routes");
var hello_1 = require("./hello");
var jobs_1 = require("./jobs");
var detail_1 = require("./detail");
var jobs_service_1 = require("./service/jobs.service");
var projectform_1 = require("./projectform");
var forms_1 = require("@angular/forms");
var addemail_1 = require("./addemail");
var ng2_ace_editor_1 = require("ng2-ace-editor");
var myFirst_directive_1 = require("./directive/myFirst.directive");
// import {Drag} from './directive/drag.directive';
// import {Drop} from './directive/drop.directive';
var ng2_dnd_1 = require("ng2-dnd");
var template_service_1 = require("./service/template.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            routes_1.routing,
            forms_1.ReactiveFormsModule,
            ng2_dnd_1.DndModule.forRoot(),
            ng2_ace_editor_1.AceEditorModule
        ],
        declarations: [
            routes_1.RootComponent,
            hello_1.HelloComponent,
            jobs_1.Jobs,
            detail_1.Detail,
            projectform_1.ProjectForm,
            addemail_1.AddEmail,
            myFirst_directive_1.myFirstDirective,
        ],
        providers: [jobs_service_1.JobsService, template_service_1.TemplateEmail],
        bootstrap: [routes_1.RootComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=index.js.map