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
var platform_browser_1 = require("@angular/platform-browser");
var template_service_1 = require("./service/template.service");
var ARCHIVES = [
    {
        'date': '02/20/2017',
        'time': '09:45',
        'version': '0.20',
        'content': [],
        'preview': 'email001.html',
        'edit': ''
    },
    {
        'date': '02/20/2017',
        'time': '11:45',
        'version': '0.19',
        'content': [],
        'preview': 'email007.html'
    },
    {
        'date': '02/19/2017',
        'time': '02:45',
        'version': '0.17',
        'content': [],
        'preview': ''
    },
    {
        'date': '02/18/2017',
        'time': '09:45',
        'version': '0.1',
        'content': [],
        'preview': 'email001.html'
    }
];
var COMPOSANT = [
    {
        'name': 'template1',
        'link': 'template1.html'
    },
    {
        'name': 'template2',
        'link': 'template2.html'
    },
    {
        'name': 'template3',
        'link': 'template3.html'
    }
];
var HelloComponent = (function () {
    function HelloComponent(sanitizer, emailStructure) {
        this.sanitizer = sanitizer;
        this.emailStructure = emailStructure;
        this.evitTitle = '<h1>Test</h1>';
        this.simpleDrop = null;
        this.bool = true;
        this.text = "ici";
        this.receivedData = [];
        this.hello = 'Hello World!';
        this.archives = this.getArchives();
        this.composants = this.getComposant();
        this.sendUrl('');
    }
    HelloComponent.prototype.transferDataSuccess = function ($event) {
        this.receivedData.push($event.dragData);
        this.emailStructure.distructure($event.dragData);
        this.completeEmail = this.emailStructure.structure();
    };
    HelloComponent.prototype.getArchives = function () {
        return ARCHIVES;
    };
    HelloComponent.prototype.getComposant = function () {
        return COMPOSANT;
    };
    HelloComponent.prototype.onSelect = function (data) {
        console.log('Archive: \n/', data);
        this.sendUrl(data.preview);
        //this.walou = data.edit;
    };
    HelloComponent.prototype.sendUrl = function (link) {
        if (link === '' || link === null || link === undefined) {
            link = 'error.html';
        }
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl('./app/html/' + link);
    };
    HelloComponent.prototype.testClick = function () {
        console.log('ouuupps');
    };
    return HelloComponent;
}());
HelloComponent = __decorate([
    core_1.Component({
        selector: 'fountain-app',
        template: require('./pages/hello.html')
    }),
    __metadata("design:paramtypes", [platform_browser_1.DomSanitizer, template_service_1.TemplateEmail])
], HelloComponent);
exports.HelloComponent = HelloComponent;
//# sourceMappingURL=hello.js.map