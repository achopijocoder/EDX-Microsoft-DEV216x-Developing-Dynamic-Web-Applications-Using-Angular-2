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
var core_1 = require('@angular/core');
var messages_service_1 = require('./messages.service');
var IndicatorComponent = (function () {
    function IndicatorComponent(_messageService) {
        this._messageService = _messageService;
        this.indicatorMessage = _messageService.getSuccessMessage();
    }
    IndicatorComponent = __decorate([
        core_1.Component({
            selector: 'indicator-component',
            templateUrl: 'app/indicator.component.html',
            providers: [messages_service_1.MessageService]
        }), 
        __metadata('design:paramtypes', [messages_service_1.MessageService])
    ], IndicatorComponent);
    return IndicatorComponent;
}());
exports.IndicatorComponent = IndicatorComponent;
//# sourceMappingURL=indicator.component.js.map