import {
  EventEmitter,
  ɵɵclassProp,
  ɵɵdefineDirective,
  ɵɵlistener
} from "./chunk-S4VETAKW.js";

// src/app/shared/directives/sortable.directive.ts
var rotate = { "asc": "desc", "desc": "", "": "asc" };
var _SortableHeader = class _SortableHeader {
  constructor() {
    this.sortable = "";
    this.direction = "";
    this.sort = new EventEmitter();
  }
  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({ column: this.sortable, direction: this.direction });
  }
};
_SortableHeader.\u0275fac = function SortableHeader_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SortableHeader)();
};
_SortableHeader.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _SortableHeader, selectors: [["th", "sortable", ""]], hostVars: 4, hostBindings: function SortableHeader_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("click", function SortableHeader_click_HostBindingHandler() {
      return ctx.rotate();
    });
  }
  if (rf & 2) {
    \u0275\u0275classProp("asc", ctx.direction === "asc")("desc", ctx.direction === "desc");
  }
}, inputs: { sortable: "sortable", direction: "direction" }, outputs: { sort: "sort" } });
var SortableHeader = _SortableHeader;

export {
  SortableHeader
};
//# sourceMappingURL=chunk-A5TGRXQK.js.map
