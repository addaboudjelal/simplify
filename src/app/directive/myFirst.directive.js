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
var myFirstDirective = (function () {
    function myFirstDirective(el) {
        this.el = el;
        el.nativeElement.style.backgroundColor = 'red';
    }
    myFirstDirective.prototype.onMouseOver = function () {
        console.log('mouseOver');
    };
    myFirstDirective.prototype.onMouseOut = function () {
        console.log('mouseOut');
    };
    return myFirstDirective;
}());
__decorate([
    core_1.HostListener('mouseover'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], myFirstDirective.prototype, "onMouseOver", null);
__decorate([
    core_1.HostListener('mouseout'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], myFirstDirective.prototype, "onMouseOut", null);
myFirstDirective = __decorate([
    core_1.Directive({
        selector: '[myFirst]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], myFirstDirective);
exports.myFirstDirective = myFirstDirective;
//# sourceMappingURL=myFirst.directive.js.map