import { browser, element, by } from 'protractor';
var ProjPage = /** @class */ (function () {
    function ProjPage() {
    }
    ProjPage.prototype.navigateTo = function () {
        return browser.get('/');
    };
    ProjPage.prototype.getParagraphText = function () {
        return element(by.css('app-root h1')).getText();
    };
    return ProjPage;
}());
export { ProjPage };
