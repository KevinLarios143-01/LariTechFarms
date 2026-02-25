import {
  ElementRef,
  RouterLink,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/custom-pages/error/error404/error404.component.ts
var _Error404Component = class _Error404Component {
  constructor(elementRef) {
    this.elementRef = elementRef;
    document.body.classList.add("error-1");
  }
  ngOnInit() {
  }
  ngOnDestroy() {
    const htmlElement = this.elementRef.nativeElement.ownerDocument.documentElement;
    document.body.classList.remove("error-1");
  }
};
_Error404Component.\u0275fac = function Error404Component_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Error404Component)(\u0275\u0275directiveInject(ElementRef));
};
_Error404Component.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Error404Component, selectors: [["app-error404"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 14, vars: 0, consts: [[1, "page", "responsive-log", "error-bg"], [1, "page-content", "m-0", "z-1"], [1, "container", "text-center"], [1, "display-1", "text-primary", "mb-4", "fw-bold", "fontnumber"], [1, "fa-regular", "fa-face-smile", "err-icon"], [1, "h3", "mb-2", "fw-medium"], [1, "h5", "fw-normal", "mb-5", "leading-normal"], ["routerLink", "/dashboard/hrmdashboards/dashboard", 1, "btn", "btn-primary"], [1, "fe", "fe-arrow-left-circle", "me-1"]], template: function Error404Component_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
    \u0275\u0275text(4, "4");
    \u0275\u0275element(5, "i", 4);
    \u0275\u0275text(6, "4 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h1", 5);
    \u0275\u0275text(8, "Sorry, an error has occured, Requested Page not found!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 6);
    \u0275\u0275text(10, "You may have mistyped the address or the page may have moved.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a", 7);
    \u0275\u0275element(12, "i", 8);
    \u0275\u0275text(13, "Back to Home");
    \u0275\u0275elementEnd()()()();
  }
}, dependencies: [RouterModule, RouterLink] });
var Error404Component = _Error404Component;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Error404Component, { className: "Error404Component" });
})();
export {
  Error404Component
};
//# sourceMappingURL=error404.component-77THI7X3.js.map
