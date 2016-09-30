"use strict";
var MainPage = (function () {
    function MainPage(_logger, _itemsService) {
        this._logger = _logger;
        this._itemsService = _itemsService;
        this.items = _itemsService.getItems();
        _logger.logMessage("items downloaded", this.items);
    }
    return MainPage;
}());
exports.MainPage = MainPage;
var ItemsService = (function () {
    function ItemsService() {
    }
    ItemsService.prototype.getItems = function () {
        return ["alpha", "bravo", "charlie"];
    };
    return ItemsService;
}());
exports.ItemsService = ItemsService;
var AltItemsService = (function () {
    function AltItemsService() {
    }
    AltItemsService.prototype.getItems = function () {
        return ["delta", "echo", "foxtrot"];
    };
    return AltItemsService;
}());
exports.AltItemsService = AltItemsService;
var Logger = (function () {
    function Logger() {
    }
    Logger.prototype.logMessage = function (title, message) {
        console.log('[' + title + '] ' + message);
    };
    return Logger;
}());
exports.Logger = Logger;
var page = new MainPage(new Logger(), new AltItemsService());
