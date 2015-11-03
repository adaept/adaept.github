var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
define(["require", "exports", 'angular2/angular2'], function (require, exports, angular2_1) {
    var AppComponent = (function () {
        function AppComponent() {
            this.name = "Alice Chalice";
        }
        AppComponent.prototype.hello = function () {
            alert("hello, " + this.name);
        };
        AppComponent = __decorate([
            angular2_1.Component({
                selector: 'my-app'
            }),
            angular2_1.View({
                directives: [angular2_1.formDirectives],
                templateUrl: 'mainForm.html'
            })
        ], AppComponent);
        return AppComponent;
    })();
    angular2_1.bootstrap(AppComponent);
});
//# sourceMappingURL=main.js.map