import {
  MatPaginator,
  MatSort,
  MaterialModuleModule,
  PageHeaderComponent,
  SharedModule
} from "./chunk-UEAXMXBR.js";
import {
  NgOptionComponent,
  NgSelectComponent,
  NgSelectModule
} from "./chunk-26H6NGLN.js";
import {
  MatTableDataSource
} from "./chunk-ZVXZDCDW.js";
import "./chunk-KTQLQ7YR.js";
import "./chunk-ZSUERINM.js";
import {
  FormsModule,
  ReactiveFormsModule
} from "./chunk-47LBZ5ZO.js";
import {
  CommonModule,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵtext,
  ɵɵviewQuery
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/employee-dashboard/payslips/payslips.component.ts
var ELEMENT_DATA = [
  { id: "#10422", Month: "April", Year: 2020, NetSalary: "$28,000", generatedDate: "01-05-2020" },
  { id: "#10391", Month: "August", Year: 2020, NetSalary: "$28,000", generatedDate: "01-09-2020" },
  { id: "#10321", Month: "December", Year: 2020, NetSalary: "$28,000", generatedDate: "01-01-2021" },
  { id: "#11986", Month: "December", Year: 2019, NetSalary: "$24,000", generatedDate: "01-01-2020" },
  { id: "#10398", Month: "February", Year: 2020, NetSalary: "$24,000", generatedDate: "01-03-2020" },
  { id: "#10029", Month: "January", Year: 2021, NetSalary: "$32,000", generatedDate: "01-02-2021" },
  { id: "#10092", Month: "January", Year: 2020, NetSalary: "$24,000", generatedDate: "01-02-2020" },
  { id: "#11073", Month: "July", Year: 2020, NetSalary: "$28,000", generatedDate: "02-08-2020" },
  { id: "#10839", Month: "June", Year: 2020, NetSalary: "$28,000", generatedDate: "02-07-2020" },
  { id: "#10029", Month: "March", Year: 2020, NetSalary: "$24,000", generatedDate: "01-04-2020" },
  { id: "#10289", Month: "May", Year: 2021, NetSalary: "$32,000", generatedDate: "01-06-2020" },
  { id: "#10598", Month: "November", Year: 2020, NetSalary: "$24,000", generatedDate: "01-12-2020" },
  { id: "#10029", Month: "November", Year: 2019, NetSalary: "$28,000", generatedDate: "01-12-2019" },
  { id: "#10438", Month: "October", Year: 2020, NetSalary: "$28,000", generatedDate: "01-11-2020" },
  { id: "#10837", Month: "September", Year: 2020, NetSalary: "$24,000", generatedDate: "01-10-2020" }
];
var _PayslipsComponent = class _PayslipsComponent {
  constructor() {
    this.displayedColumns = ["id", "Month", "Year", "NetSalary", "generatedDate"];
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event) {
    const filterValue = event.target.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ngOnInit() {
  }
};
_PayslipsComponent.\u0275fac = function PayslipsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PayslipsComponent)();
};
_PayslipsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PayslipsComponent, selectors: [["app-payslips"]], viewQuery: function PayslipsComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(MatPaginator, 5);
    \u0275\u0275viewQuery(MatSort, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
  }
}, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 346, vars: 1, consts: [[3, "title"], [1, "row"], [1, "col-md-12"], [1, "card", "custom-card"], [1, "card-header", "border-0"], [1, "card-title"], [1, "card-body"], [1, "row", "mb-3", "gap-1", "gap-lg-0"], [1, "col-lg-6"], [1, "d-flex", "align-items-center"], [1, "d-flex", "ms-2", "mx-2"], [1, "form-group", "mb-0"], ["name", "quantity", "id", "select-countries17", "placeholder", "1", "data-trigger", "", 1, "form-control", "wd-150", "p-0"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], [1, "float-end"], ["type", "text", "placeholder", "search", 1, "form-control"], [1, "table-responsive"], ["id", "emp-attendance", 1, "table", "table-vcenter", "text-nowrap", "table-bordered", "border-bottom"], [1, "border-bottom-0", "text-center"], [1, "border-bottom-0"], [1, "text-center"], [1, "fw-semibold"], ["data-bs-toggle", "tooltip", "ngbTooltip", "View", 1, "btn", "btn-primary", "btn-sm", "m-1"], [1, "fe", "fe-eye"], ["data-bs-toggle", "tooltip", "ngbTooltip", "Download", 1, "btn", "btn-success", "btn-sm", "m-1"], [1, "fe", "fe-download"], ["data-bs-toggle", "tooltip", "ngbTooltip", "Print", "onclick", "javascript:window.print();", 1, "btn", "btn-info", "btn-sm", "m-1"], [1, "fe", "fe-printer"], ["data-bs-toggle", "tooltip", "ngbTooltip", "Share", 1, "btn", "btn-warning", "btn-sm", "m-1"], [1, "fe", "fe-share-2"]], template: function PayslipsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-page-header", 0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
    \u0275\u0275text(6, "My Payslips Summary");
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
    \u0275\u0275text(34, "#ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "th", 22);
    \u0275\u0275text(36, "Month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th", 22);
    \u0275\u0275text(38, "Year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "th", 22);
    \u0275\u0275text(40, "$ Net Salary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "th", 22);
    \u0275\u0275text(42, "Generated Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "th", 22);
    \u0275\u0275text(44, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "tbody")(46, "tr")(47, "td", 23);
    \u0275\u0275text(48, "#10029");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "td");
    \u0275\u0275text(50, "January");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "td");
    \u0275\u0275text(52, "2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "td", 24);
    \u0275\u0275text(54, "$32,000");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "td");
    \u0275\u0275text(56, "01-02-2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "td")(58, "a", 25);
    \u0275\u0275element(59, "i", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "a", 27);
    \u0275\u0275element(61, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "a", 29);
    \u0275\u0275element(63, "i", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "a", 31);
    \u0275\u0275element(65, "i", 32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(66, "tr")(67, "td", 23);
    \u0275\u0275text(68, "#10321");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "td");
    \u0275\u0275text(70, "December");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "td");
    \u0275\u0275text(72, "2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "td", 24);
    \u0275\u0275text(74, "$28,000");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "td");
    \u0275\u0275text(76, "01-01-2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "td")(78, "a", 25);
    \u0275\u0275element(79, "i", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "a", 27);
    \u0275\u0275element(81, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "a", 29);
    \u0275\u0275element(83, "i", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "a", 31);
    \u0275\u0275element(85, "i", 32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(86, "tr")(87, "td", 23);
    \u0275\u0275text(88, "#10598");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "td");
    \u0275\u0275text(90, "November");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "td");
    \u0275\u0275text(92, "2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "td", 24);
    \u0275\u0275text(94, "$28,000");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "td");
    \u0275\u0275text(96, "01-12-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "td")(98, "a", 25);
    \u0275\u0275element(99, "i", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "a", 27);
    \u0275\u0275element(101, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "a", 29);
    \u0275\u0275element(103, "i", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "a", 31);
    \u0275\u0275element(105, "i", 32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(106, "tr")(107, "td", 23);
    \u0275\u0275text(108, "#10438");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "td");
    \u0275\u0275text(110, "October");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "td");
    \u0275\u0275text(112, "2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "td", 24);
    \u0275\u0275text(114, "$28,000");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "td");
    \u0275\u0275text(116, "01-11-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "td")(118, "a", 25);
    \u0275\u0275element(119, "i", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "a", 27);
    \u0275\u0275element(121, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(122, "a", 29);
    \u0275\u0275element(123, "i", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "a", 31);
    \u0275\u0275element(125, "i", 32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(126, "tr")(127, "td", 23);
    \u0275\u0275text(128, "#10837");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(129, "td");
    \u0275\u0275text(130, "September");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(131, "td");
    \u0275\u0275text(132, "2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(133, "td", 24);
    \u0275\u0275text(134, "$28,000");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(135, "td");
    \u0275\u0275text(136, "01-10-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(137, "td")(138, "a", 25);
    \u0275\u0275element(139, "i", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(140, "a", 27);
    \u0275\u0275element(141, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(142, "a", 29);
    \u0275\u0275element(143, "i", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(144, "a", 31);
    \u0275\u0275element(145, "i", 32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(146, "tr")(147, "td", 23);
    \u0275\u0275text(148, "#10391");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(149, "td");
    \u0275\u0275text(150, "August");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(151, "td");
    \u0275\u0275text(152, "2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(153, "td", 24);
    \u0275\u0275text(154, "$28,000");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(155, "td");
    \u0275\u0275text(156, "01-09-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(157, "td")(158, "a", 25);
    \u0275\u0275element(159, "i", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(160, "a", 27);
    \u0275\u0275element(161, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(162, "a", 29);
    \u0275\u0275element(163, "i", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(164, "a", 31);
    \u0275\u0275element(165, "i", 32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(166, "tr")(167, "td", 23);
    \u0275\u0275text(168, "#11073");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(169, "td");
    \u0275\u0275text(170, "July");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(171, "td");
    \u0275\u0275text(172, "2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(173, "td", 24);
    \u0275\u0275text(174, "$28,000");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(175, "td");
    \u0275\u0275text(176, "02-08-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(177, "td")(178, "a", 25);
    \u0275\u0275element(179, "i", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(180, "a", 27);
    \u0275\u0275element(181, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(182, "a", 29);
    \u0275\u0275element(183, "i", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(184, "a", 31);
    \u0275\u0275element(185, "i", 32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(186, "tr")(187, "td", 23);
    \u0275\u0275text(188, "#10839");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(189, "td");
    \u0275\u0275text(190, "June");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(191, "td");
    \u0275\u0275text(192, "2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(193, "td", 24);
    \u0275\u0275text(194, "$28,000");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(195, "td");
    \u0275\u0275text(196, "02-07-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(197, "td")(198, "a", 25);
    \u0275\u0275element(199, "i", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(200, "a", 27);
    \u0275\u0275element(201, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(202, "a", 29);
    \u0275\u0275element(203, "i", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(204, "a", 31);
    \u0275\u0275element(205, "i", 32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(206, "tr")(207, "td", 23);
    \u0275\u0275text(208, "#10289");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(209, "td");
    \u0275\u0275text(210, "May");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(211, "td");
    \u0275\u0275text(212, "2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(213, "td", 24);
    \u0275\u0275text(214, "$28,000");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(215, "td");
    \u0275\u0275text(216, "01-06-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(217, "td")(218, "a", 25);
    \u0275\u0275element(219, "i", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(220, "a", 27);
    \u0275\u0275element(221, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(222, "a", 29);
    \u0275\u0275element(223, "i", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(224, "a", 31);
    \u0275\u0275element(225, "i", 32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(226, "tr")(227, "td", 23);
    \u0275\u0275text(228, "#10422");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(229, "td");
    \u0275\u0275text(230, "April");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(231, "td");
    \u0275\u0275text(232, "2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(233, "td", 24);
    \u0275\u0275text(234, "$28,000");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(235, "td");
    \u0275\u0275text(236, "01-05-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(237, "td")(238, "a", 25);
    \u0275\u0275element(239, "i", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(240, "a", 27);
    \u0275\u0275element(241, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(242, "a", 29);
    \u0275\u0275element(243, "i", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(244, "a", 31);
    \u0275\u0275element(245, "i", 32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(246, "tr")(247, "td", 23);
    \u0275\u0275text(248, "#10029");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(249, "td");
    \u0275\u0275text(250, "March");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(251, "td");
    \u0275\u0275text(252, "2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(253, "td", 24);
    \u0275\u0275text(254, "$24,000");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(255, "td");
    \u0275\u0275text(256, "01-04-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(257, "td")(258, "a", 25);
    \u0275\u0275element(259, "i", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(260, "a", 27);
    \u0275\u0275element(261, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(262, "a", 29);
    \u0275\u0275element(263, "i", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(264, "a", 31);
    \u0275\u0275element(265, "i", 32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(266, "tr")(267, "td", 23);
    \u0275\u0275text(268, "#10398");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(269, "td");
    \u0275\u0275text(270, "February");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(271, "td");
    \u0275\u0275text(272, "2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(273, "td", 24);
    \u0275\u0275text(274, "$24,000");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(275, "td");
    \u0275\u0275text(276, "01-03-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(277, "td")(278, "a", 25);
    \u0275\u0275element(279, "i", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(280, "a", 27);
    \u0275\u0275element(281, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(282, "a", 29);
    \u0275\u0275element(283, "i", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(284, "a", 31);
    \u0275\u0275element(285, "i", 32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(286, "tr")(287, "td", 23);
    \u0275\u0275text(288, "#10092");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(289, "td");
    \u0275\u0275text(290, "January");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(291, "td");
    \u0275\u0275text(292, "2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(293, "td", 24);
    \u0275\u0275text(294, "$24,000");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(295, "td");
    \u0275\u0275text(296, "01-02-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(297, "td")(298, "a", 25);
    \u0275\u0275element(299, "i", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(300, "a", 27);
    \u0275\u0275element(301, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(302, "a", 29);
    \u0275\u0275element(303, "i", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(304, "a", 31);
    \u0275\u0275element(305, "i", 32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(306, "tr")(307, "td", 23);
    \u0275\u0275text(308, "#11986");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(309, "td");
    \u0275\u0275text(310, "December");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(311, "td");
    \u0275\u0275text(312, "2019");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(313, "td", 24);
    \u0275\u0275text(314, "$24,000");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(315, "td");
    \u0275\u0275text(316, "01-01-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(317, "td")(318, "a", 25);
    \u0275\u0275element(319, "i", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(320, "a", 27);
    \u0275\u0275element(321, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(322, "a", 29);
    \u0275\u0275element(323, "i", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(324, "a", 31);
    \u0275\u0275element(325, "i", 32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(326, "tr")(327, "td", 23);
    \u0275\u0275text(328, "#10029");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(329, "td");
    \u0275\u0275text(330, "November");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(331, "td");
    \u0275\u0275text(332, "2019");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(333, "td", 24);
    \u0275\u0275text(334, "$24,000");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(335, "td");
    \u0275\u0275text(336, "01-12-2019");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(337, "td")(338, "a", 25);
    \u0275\u0275element(339, "i", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(340, "a", 27);
    \u0275\u0275element(341, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(342, "a", 29);
    \u0275\u0275element(343, "i", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(344, "a", 31);
    \u0275\u0275element(345, "i", 32);
    \u0275\u0275elementEnd()()()()()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("title", "Payslips");
  }
}, dependencies: [MaterialModuleModule, SharedModule, PageHeaderComponent, FormsModule, CommonModule, ReactiveFormsModule, NgSelectModule, NgSelectComponent, NgOptionComponent, RouterModule] });
var PayslipsComponent = _PayslipsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PayslipsComponent, { className: "PayslipsComponent" });
})();
export {
  PayslipsComponent
};
//# sourceMappingURL=payslips.component-TZSBI6RS.js.map
