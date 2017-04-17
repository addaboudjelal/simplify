"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var hello_1 = require("./hello");
var jobs_1 = require("./jobs");
var detail_1 = require("./detail");
var RootComponent = (function () {
    function RootComponent() {
    }
    return RootComponent;
}());
RootComponent = __decorate([
    core_1.Component({
        selector: 'fountain-root',
        template: require('./pages/index.html')
    })
], RootComponent);
exports.RootComponent = RootComponent;
exports.routes = [
    {
        path: '',
        component: jobs_1.Jobs
    },
    {
        path: 'email/:id',
        component: hello_1.HelloComponent
    },
    {
        path: 'project/:id',
        component: detail_1.Detail
    }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=routes.js.map