import {
  PageHeaderComponent,
  SharedModule
} from "./chunk-UEAXMXBR.js";
import {
  NgOptionComponent,
  NgSelectComponent,
  NgSelectModule
} from "./chunk-26H6NGLN.js";
import "./chunk-ZVXZDCDW.js";
import "./chunk-KTQLQ7YR.js";
import "./chunk-ZSUERINM.js";
import "./chunk-47LBZ5ZO.js";
import {
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/super-admin/role-access/role-access.component.ts
var _RoleAccessComponent = class _RoleAccessComponent {
  constructor() {
  }
  ngOnInit() {
  }
};
_RoleAccessComponent.\u0275fac = function RoleAccessComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RoleAccessComponent)();
};
_RoleAccessComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoleAccessComponent, selectors: [["app-role-access"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 274, vars: 1, consts: [[3, "title"], [1, "row"], [1, "col-md-12"], [1, "card", "custom-card"], [1, "card-header", "d-flex", "justify-content-between", "border-bottom-0"], [1, "card-title"], [1, "card-body", "pt-0"], [1, "row", "my-3", "px-3"], [1, "col-lg-6"], [1, "d-flex", "align-items-center"], [1, "d-flex", "ms-2", "mx-2"], [1, "form-group", "mt-2"], ["name", "quantity", "id", "select-countries17", "placeholder", "1", "data-trigger", "", 1, "form-control", "wd-150", "p-0"], ["value", "1", "selected", ""], ["value", "2"], ["value", "3"], ["value", "4"], [1, "float-end"], ["type", "text", "placeholder", "search", 1, "form-control"], [1, "table-responsive", "role-table"], ["id", "superrole-list", 1, "table", "table-vcenter", "text-nowrap", "table-bordered", "border-bottom", "custom-table"], [1, "border-bottom-0", "w-5", "text-center"], [1, "border-bottom-0"], [1, "border-bottom-0", "text-center"], ["colspan", "7"], [1, "text-center"], ["href", "javascript:void(0);", 1, "access-icon", "role"], [1, "fe", "fe-x", "text-danger", "icon-style-circle", "bg-danger-transparent"], [1, "fe", "fe-check", "text-success", "icon-style-circle", "bg-success-transparent"], [1, "mt-4"], [1, "pagination", "justify-content-end", "mb-0"], [1, "page-item", "disabled"], ["href", "javascript:void(0);", 1, "page-link"], [1, "page-item", "active"], [1, "page-item"]], template: function RoleAccessComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-page-header", 0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5);
    \u0275\u0275text(6, "Invoices");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "span");
    \u0275\u0275text(12, "Show");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 10)(14, "div", 11)(15, "ng-select", 12)(16, "ng-option", 13);
    \u0275\u0275text(17, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "ng-option", 14);
    \u0275\u0275text(19, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "ng-option", 15);
    \u0275\u0275text(21, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "ng-option", 16);
    \u0275\u0275text(23, "4");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25, "entries");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 8)(27, "div", 17);
    \u0275\u0275element(28, "input", 18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 19)(30, "table", 20)(31, "thead")(32, "tr")(33, "th", 21);
    \u0275\u0275text(34, "NO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "th", 22);
    \u0275\u0275text(36, "Role Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th", 23);
    \u0275\u0275text(38, "Super Admin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "th", 23);
    \u0275\u0275text(40, "Admin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "th", 23);
    \u0275\u0275text(42, "HR");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "th", 23);
    \u0275\u0275text(44, "User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "th", 23);
    \u0275\u0275text(46, "Agent");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "tbody")(48, "tr")(49, "td", 24);
    \u0275\u0275text(50, "1. HR Dashboard");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "tr")(52, "td", 25);
    \u0275\u0275text(53, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "td");
    \u0275\u0275text(55, "Attendance List");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "td", 25)(57, "a", 26);
    \u0275\u0275element(58, "span", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "td", 25)(60, "a", 26);
    \u0275\u0275element(61, "span", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "td", 25)(63, "a", 26);
    \u0275\u0275element(64, "span", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "td", 25)(66, "a", 26);
    \u0275\u0275element(67, "span", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "td", 25)(69, "a", 26);
    \u0275\u0275element(70, "span", 27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(71, "tr")(72, "td", 25);
    \u0275\u0275text(73, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "td");
    \u0275\u0275text(75, "Change Leave Policy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "td", 25)(77, "a", 26);
    \u0275\u0275element(78, "span", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "td", 25)(80, "a", 26);
    \u0275\u0275element(81, "span", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "td", 25)(83, "a", 26);
    \u0275\u0275element(84, "span", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "td", 25)(86, "a", 26);
    \u0275\u0275element(87, "span", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(88, "td", 25)(89, "a", 26);
    \u0275\u0275element(90, "span", 27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(91, "tr")(92, "td", 25);
    \u0275\u0275text(93, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "td");
    \u0275\u0275text(95, "Update Office Times");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "td", 25)(97, "a", 26);
    \u0275\u0275element(98, "span", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(99, "td", 25)(100, "a", 26);
    \u0275\u0275element(101, "span", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(102, "td", 25)(103, "a", 26);
    \u0275\u0275element(104, "span", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(105, "td", 25)(106, "a", 26);
    \u0275\u0275element(107, "span", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(108, "td", 25)(109, "a", 26);
    \u0275\u0275element(110, "span", 27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(111, "tr")(112, "td", 24);
    \u0275\u0275text(113, "2. Employee Dashboard");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(114, "tr")(115, "td", 25);
    \u0275\u0275text(116, "4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "td");
    \u0275\u0275text(118, "Edit Attendance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "td", 25)(120, "a", 26);
    \u0275\u0275element(121, "span", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(122, "td", 25)(123, "a", 26);
    \u0275\u0275element(124, "span", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(125, "td", 25)(126, "a", 26);
    \u0275\u0275element(127, "span", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(128, "td", 25)(129, "a", 26);
    \u0275\u0275element(130, "span", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(131, "td", 25)(132, "a", 26);
    \u0275\u0275element(133, "span", 27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(134, "tr")(135, "td", 25);
    \u0275\u0275text(136, "5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(137, "td");
    \u0275\u0275text(138, "Modify Leaves");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(139, "td", 25)(140, "a", 26);
    \u0275\u0275element(141, "span", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(142, "td", 25)(143, "a", 26);
    \u0275\u0275element(144, "span", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(145, "td", 25)(146, "a", 26);
    \u0275\u0275element(147, "span", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(148, "td", 25)(149, "a", 26);
    \u0275\u0275element(150, "span", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(151, "td", 25)(152, "a", 26);
    \u0275\u0275element(153, "span", 27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(154, "tr")(155, "td", 24);
    \u0275\u0275text(156, "3. Task Dashboard");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(157, "tr")(158, "td", 25);
    \u0275\u0275text(159, "6");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(160, "td");
    \u0275\u0275text(161, "Task List");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(162, "td", 25)(163, "a", 26);
    \u0275\u0275element(164, "span", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(165, "td", 25)(166, "a", 26);
    \u0275\u0275element(167, "span", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(168, "td", 25)(169, "a", 26);
    \u0275\u0275element(170, "span", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(171, "td", 25)(172, "a", 26);
    \u0275\u0275element(173, "span", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(174, "td", 25)(175, "a", 26);
    \u0275\u0275element(176, "span", 27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(177, "tr")(178, "td", 25);
    \u0275\u0275text(179, "7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(180, "td");
    \u0275\u0275text(181, "Running Task");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(182, "td", 25)(183, "a", 26);
    \u0275\u0275element(184, "span", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(185, "td", 25)(186, "a", 26);
    \u0275\u0275element(187, "span", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(188, "td", 25)(189, "a", 26);
    \u0275\u0275element(190, "span", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(191, "td", 25)(192, "a", 26);
    \u0275\u0275element(193, "span", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(194, "td", 25)(195, "a", 26);
    \u0275\u0275element(196, "span", 27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(197, "tr")(198, "td", 25);
    \u0275\u0275text(199, "8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(200, "td");
    \u0275\u0275text(201, "OnHold Task");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(202, "td", 25)(203, "a", 26);
    \u0275\u0275element(204, "span", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(205, "td", 25)(206, "a", 26);
    \u0275\u0275element(207, "span", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(208, "td", 25)(209, "a", 26);
    \u0275\u0275element(210, "span", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(211, "td", 25)(212, "a", 26);
    \u0275\u0275element(213, "span", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(214, "td", 25)(215, "a", 26);
    \u0275\u0275element(216, "span", 27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(217, "tr")(218, "td", 25);
    \u0275\u0275text(219, "9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(220, "td");
    \u0275\u0275text(221, "Assign Task");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(222, "td", 25)(223, "a", 26);
    \u0275\u0275element(224, "span", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(225, "td", 25)(226, "a", 26);
    \u0275\u0275element(227, "span", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(228, "td", 25)(229, "a", 26);
    \u0275\u0275element(230, "span", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(231, "td", 25)(232, "a", 26);
    \u0275\u0275element(233, "span", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(234, "td", 25)(235, "a", 26);
    \u0275\u0275element(236, "span", 27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(237, "tr")(238, "td", 25);
    \u0275\u0275text(239, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(240, "td");
    \u0275\u0275text(241, "Edit Task");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(242, "td", 25)(243, "a", 26);
    \u0275\u0275element(244, "span", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(245, "td", 25)(246, "a", 26);
    \u0275\u0275element(247, "span", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(248, "td", 25)(249, "a", 26);
    \u0275\u0275element(250, "span", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(251, "td", 25)(252, "a", 26);
    \u0275\u0275element(253, "span", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(254, "td", 25)(255, "a", 26);
    \u0275\u0275element(256, "span", 27);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(257, "nav", 29)(258, "ul", 30)(259, "li", 31)(260, "a", 32);
    \u0275\u0275text(261, "Prev");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(262, "li", 33)(263, "a", 32);
    \u0275\u0275text(264, "1");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(265, "li", 34)(266, "a", 32);
    \u0275\u0275text(267, "2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(268, "li", 34)(269, "a", 32);
    \u0275\u0275text(270, "3");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(271, "li", 34)(272, "a", 32);
    \u0275\u0275text(273, "Next");
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("title", "Role access");
  }
}, dependencies: [SharedModule, PageHeaderComponent, RouterModule, NgSelectModule, NgSelectComponent, NgOptionComponent] });
var RoleAccessComponent = _RoleAccessComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoleAccessComponent, { className: "RoleAccessComponent" });
})();
export {
  RoleAccessComponent
};
//# sourceMappingURL=role-access.component-2Z2NCHTQ.js.map
