import {
  NgCircleProgressModule
} from "./chunk-QVWAQ3ZB.js";
import {
  ChartComponent,
  NgApexchartsModule
} from "./chunk-BFCIYJJG.js";
import {
  HrDashboardPageHeaderComponent,
  MaterialModuleModule,
  SharedModule
} from "./chunk-UEAXMXBR.js";
import {
  NgOptionComponent,
  NgSelectComponent,
  NgSelectModule
} from "./chunk-26H6NGLN.js";
import "./chunk-ZVXZDCDW.js";
import "./chunk-KTQLQ7YR.js";
import {
  FlatpickrDefaults,
  FlatpickrDirective,
  FlatpickrModule,
  esm_default
} from "./chunk-ZSUERINM.js";
import {
  NgbModal
} from "./chunk-47LBZ5ZO.js";
import {
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/hrmdashboards/awards/awards.component.ts
function AwardsComponent_ng_template_453_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 66)(1, "div", 67)(2, "h5", 68);
    \u0275\u0275text(3, "Award Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 69);
    \u0275\u0275listener("click", function AwardsComponent_ng_template_453_Template_button_click_4_listener() {
      const modal_r4 = \u0275\u0275restoreView(_r3).$implicit;
      return \u0275\u0275resetView(modal_r4.close("cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 70)(6, "div", 2)(7, "div", 71)(8, "div", 72)(9, "label", 73);
    \u0275\u0275text(10, "Employee ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 71)(13, "div", 72)(14, "label", 73);
    \u0275\u0275text(15, "Employee Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 75);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 2)(18, "div", 71)(19, "div", 72)(20, "label", 73);
    \u0275\u0275text(21, "Employee Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 76);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 71)(24, "div", 72)(25, "label", 73);
    \u0275\u0275text(26, "Designation");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 77);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 2)(29, "div", 71)(30, "div", 72)(31, "label", 73);
    \u0275\u0275text(32, "Award Types");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "ng-select", 78)(34, "ng-option", 79);
    \u0275\u0275text(35, "Choose One");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "ng-option", 80);
    \u0275\u0275text(37, "Employee of the Month Award");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "ng-option", 13);
    \u0275\u0275text(39, "Work Anniversary Award");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "ng-option", 14);
    \u0275\u0275text(41, "Teamwork Award");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "ng-option", 15);
    \u0275\u0275text(43, "Sales Award");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "ng-option", 81);
    \u0275\u0275text(45, "Most Creative Award");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "ng-option", 82);
    \u0275\u0275text(47, "Leadership Award");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "ng-option", 83);
    \u0275\u0275text(49, "Character Award");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "ng-option", 84);
    \u0275\u0275text(51, "Innovation Award");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "ng-option", 85);
    \u0275\u0275text(53, "Customer Service Award");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "ng-option", 86);
    \u0275\u0275text(55, "Top Performer Award");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(56, "div", 71)(57, "div", 72)(58, "label", 73);
    \u0275\u0275text(59, "Gift Types");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "ng-select", 78)(61, "ng-option", 79);
    \u0275\u0275text(62, "Choose One");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "ng-option", 80);
    \u0275\u0275text(64, "Cash");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "ng-option", 13);
    \u0275\u0275text(66, "Trophy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "ng-option", 14);
    \u0275\u0275text(68, "Momento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "ng-option", 15);
    \u0275\u0275text(70, "Others");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(71, "div", 72)(72, "label", 73);
    \u0275\u0275text(73, "Date:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "div", 87)(75, "div", 88)(76, "div", 89);
    \u0275\u0275element(77, "i", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275element(78, "input", 91);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(79, "div", 87)(80, "label", 73);
    \u0275\u0275text(81, "Award Description:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(82, "textarea", 92);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "div", 93)(84, "div", 94)(85, "a", 95);
    \u0275\u0275listener("click", function AwardsComponent_ng_template_453_Template_a_click_85_listener() {
      const modal_r4 = \u0275\u0275restoreView(_r3).$implicit;
      return \u0275\u0275resetView(modal_r4.close("cross click"));
    });
    \u0275\u0275text(86, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "a", 96);
    \u0275\u0275text(88, "Save");
    \u0275\u0275elementEnd()()()();
  }
}
var _AwardsComponent = class _AwardsComponent {
  constructor(modalService) {
    this.modalService = modalService;
    this.inlineDatePicker = false;
    this.flatpickrOptions = {
      inline: true
    };
    this.optionsCircle = {
      chart: {
        height: 100,
        type: "radialBar"
      },
      series: [85],
      colors: ["rgba(13, 205, 148,1)"],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "45%",
            background: "#fff"
          },
          dataLabels: {
            name: {
              offsetY: -10,
              color: "#fff",
              fontSize: ".625rem",
              show: false
            },
            value: {
              offsetY: 5,
              color: "#4b9bfa",
              fontSize: ".7rem",
              show: true,
              fontWeight: 500
            }
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: "none"
          }
        },
        hover: {
          filter: {
            type: "none"
          }
        },
        active: {
          filter: {
            type: "none"
          }
        }
      },
      grid: {
        padding: {
          bottom: -8,
          top: -15
        }
      },
      stroke: {
        lineCap: "round"
      },
      labels: ["Status"]
    };
    this.optionsCircle1 = {
      chart: {
        height: 100,
        type: "radialBar"
      },
      series: [58],
      colors: ["rgba(247, 40, 74,1)"],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "45%",
            background: "#fff"
          },
          dataLabels: {
            name: {
              offsetY: -10,
              color: "#4b9bfa",
              fontSize: ".625rem",
              show: false
            },
            value: {
              offsetY: 5,
              color: "#4b9bfa",
              fontSize: ".7rem",
              show: true,
              fontWeight: 500
            }
          }
        }
      },
      grid: {
        padding: {
          bottom: -8,
          top: -15
        }
      },
      stroke: {
        lineCap: "round"
      },
      labels: ["Status"]
    };
    this.optionsCircle2 = {
      chart: {
        height: 100,
        type: "radialBar"
      },
      series: [90],
      colors: ["rgba(13, 205, 148,1)"],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "45%",
            background: "#fff"
          },
          dataLabels: {
            name: {
              offsetY: -10,
              color: "#4b9bfa",
              fontSize: ".625rem",
              show: false
            },
            value: {
              offsetY: 5,
              color: "#4b9bfa",
              fontSize: ".7rem",
              show: true,
              fontWeight: 500
            }
          }
        }
      },
      grid: {
        padding: {
          bottom: -8,
          top: -15
        }
      },
      stroke: {
        lineCap: "round"
      },
      labels: ["Status"]
    };
    this.optionsCircle3 = {
      chart: {
        height: 100,
        type: "radialBar"
      },
      series: [78],
      colors: ["rgba(247, 40, 74,1)"],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "45%",
            background: "#fff"
          },
          dataLabels: {
            name: {
              offsetY: -10,
              color: "#4b9bfa",
              fontSize: ".625rem",
              show: false
            },
            value: {
              offsetY: 5,
              color: "#4b9bfa",
              fontSize: ".7rem",
              show: true,
              fontWeight: 500
            }
          }
        }
      },
      grid: {
        padding: {
          bottom: -8,
          top: -15
        }
      },
      stroke: {
        lineCap: "round"
      },
      labels: ["Status"]
    };
    this.optionsCircle4 = {
      chart: {
        height: 100,
        type: "radialBar"
      },
      series: [48],
      colors: ["rgba(18, 138, 249,1)"],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "45%",
            background: "#fff"
          },
          dataLabels: {
            name: {
              offsetY: -10,
              color: "#4b9bfa",
              fontSize: ".625rem",
              show: false
            },
            value: {
              offsetY: 5,
              color: "#4b9bfa",
              fontSize: ".7rem",
              show: true,
              fontWeight: 500
            }
          }
        }
      },
      grid: {
        padding: {
          bottom: -8,
          top: -15
        }
      },
      stroke: {
        lineCap: "round"
      },
      labels: ["Status"]
    };
    this.optionsCircle5 = {
      chart: {
        height: 100,
        type: "radialBar"
      },
      series: [32],
      colors: ["rgba(247, 40, 74,1)"],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "45%",
            background: "#fff"
          },
          dataLabels: {
            name: {
              offsetY: -10,
              color: "#4b9bfa",
              fontSize: ".625rem",
              show: false
            },
            value: {
              offsetY: 5,
              color: "#4b9bfa",
              fontSize: ".7rem",
              show: true,
              fontWeight: 500
            }
          }
        }
      },
      grid: {
        padding: {
          bottom: -8,
          top: -15
        }
      },
      stroke: {
        lineCap: "round"
      },
      labels: ["Status"]
    };
    this.optionsCircle6 = {
      chart: {
        height: 100,
        type: "radialBar"
      },
      series: [82],
      colors: ["rgba(13, 205, 148,1)"],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "45%",
            background: "#fff"
          },
          dataLabels: {
            name: {
              offsetY: -10,
              color: "#4b9bfa",
              fontSize: ".625rem",
              show: false
            },
            value: {
              offsetY: 5,
              color: "#4b9bfa",
              fontSize: ".7rem",
              show: true,
              fontWeight: 500
            }
          }
        }
      },
      grid: {
        padding: {
          bottom: -8,
          top: -15
        }
      },
      stroke: {
        lineCap: "round"
      },
      labels: ["Status"]
    };
    this.optionsCircle7 = {
      chart: {
        height: 100,
        type: "radialBar"
      },
      series: [78],
      colors: ["rgba(13, 205, 148,1)"],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "45%",
            background: "#fff"
          },
          dataLabels: {
            name: {
              offsetY: -10,
              color: "#4b9bfa",
              fontSize: ".625rem",
              show: false
            },
            value: {
              offsetY: 5,
              color: "#4b9bfa",
              fontSize: ".7rem",
              show: true,
              fontWeight: 500
            }
          }
        }
      },
      grid: {
        padding: {
          bottom: -8,
          top: -15
        }
      },
      stroke: {
        lineCap: "round"
      },
      labels: ["Status"]
    };
    this.optionsCircle8 = {
      chart: {
        height: 100,
        type: "radialBar"
      },
      series: [49],
      colors: ["rgba(18, 138, 249,1)"],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "45%",
            background: "#fff"
          },
          dataLabels: {
            name: {
              offsetY: -10,
              color: "#4b9bfa",
              fontSize: ".625rem",
              show: false
            },
            value: {
              offsetY: 5,
              color: "#4b9bfa",
              fontSize: ".7rem",
              show: true,
              fontWeight: 500
            }
          }
        }
      },
      grid: {
        padding: {
          bottom: -8,
          top: -15
        }
      },
      stroke: {
        lineCap: "round"
      },
      labels: ["Status"]
    };
    this.optionsCircle9 = {
      chart: {
        height: 100,
        type: "radialBar"
      },
      series: [66],
      colors: ["rgba(247, 40, 74,1)"],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "45%",
            background: "#fff"
          },
          dataLabels: {
            name: {
              offsetY: -10,
              color: "#4b9bfa",
              fontSize: ".625rem",
              show: false
            },
            value: {
              offsetY: 5,
              color: "#4b9bfa",
              fontSize: ".7rem",
              show: true,
              fontWeight: 500
            }
          }
        }
      },
      grid: {
        padding: {
          bottom: -8,
          top: -15
        }
      },
      stroke: {
        lineCap: "round"
      },
      labels: ["Status"]
    };
    this.optionsCircle10 = {
      chart: {
        height: 100,
        type: "radialBar"
      },
      series: [85],
      colors: ["rgba(51,102,255,1)"],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "45%",
            background: "#fff"
          },
          dataLabels: {
            name: {
              offsetY: -10,
              color: "#4b9bfa",
              fontSize: ".625rem",
              show: false
            },
            value: {
              offsetY: 5,
              color: "#4b9bfa",
              fontSize: ".7rem",
              show: true,
              fontWeight: 500
            }
          }
        }
      },
      grid: {
        padding: {
          bottom: -8,
          top: -15
        }
      },
      stroke: {
        lineCap: "round"
      },
      labels: ["Status"]
    };
  }
  // flatpickrOptions: FlatpickrOptions;
  ngOnInit() {
    this.flatpickrOptions = {
      enableTime: true,
      noCalendar: true,
      dateFormat: "H:i"
    };
    esm_default("#inlinetime", this.flatpickrOptions);
    this.flatpickrOptions = {
      enableTime: true,
      dateFormat: "Y-m-d H:i",
      // Specify the format you want
      defaultDate: "2023-11-07 14:30"
      // Set the default/preloaded time (adjust this to your desired time)
    };
    esm_default("#pretime", this.flatpickrOptions);
  }
  open(content) {
    this.modalService.open(content, { windowClass: "modalCusSty", size: "lg" });
  }
};
_AwardsComponent.\u0275fac = function AwardsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AwardsComponent)(\u0275\u0275directiveInject(NgbModal));
};
_AwardsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AwardsComponent, selectors: [["app-awards"]], standalone: true, features: [\u0275\u0275ProvidersFeature([
  FlatpickrDefaults
]), \u0275\u0275StandaloneFeature], decls: 455, vars: 83, consts: [["content", ""], [3, "title", "title3", "class1", "path"], [1, "row"], [1, "col-md-12"], [1, "card", "custom-card"], [1, "card-body"], [1, "row", "mb-3"], [1, "col-lg-6"], [1, "d-flex", "align-items-center"], [1, "d-flex", "ms-2", "mx-2"], [1, "form-group", "mt-2"], ["name", "quantity", "id", "select-countries17", "placeholder", "1", "data-trigger", "", 1, "form-control", "wd-150", "p-0"], ["value", "1", "selected", ""], ["value", "2"], ["value", "3"], ["value", "4"], [1, "float-end"], ["type", "text", "placeholder", "search", 1, "form-control"], [1, "table-responsive"], [1, "table", "table-vcenter", "text-nowrap", "table-bordered", "border-bottom"], [1, "border-bottom-0", "w-5"], [1, "border-bottom-0"], [1, "border-bottom-0", "text-center", "attendance-width"], [1, "avatar", "me-2", "avatar-rounded"], ["src", "./assets/images/users/1.jpg", "alt", "img"], [1, "lh-1"], [1, "mb-1"], [1, "fs-12", "text-muted"], [1, "attendance-width"], ["id", "award-chart1"], [3, "series", "chart", "colors", "stroke", "states", "plotOptions", "grid"], [1, "fe-medium"], [1, "badge", "bg-primary-transparent"], ["data-bs-toggle", "modal", "data-bs-target", "#editawardmodal", 1, "btn", "btn-primary", "btn-icon", 3, "click"], ["data-bs-toggle", "tooltip", "data-original-title", "View/Edit", 1, "fe", "fe-edit"], ["data-bs-toggle", "tooltip", "data-original-title", "Delete", 1, "btn", "btn-danger", "btn-icon"], [1, "fe", "fe-trash-2"], ["src", "./assets/images/users/9.jpg", "alt", "img"], ["id", "award-chart2"], [1, "badge", "bg-orange-transparent"], ["src", "./assets/images/users/2.jpg", "alt", "img"], ["id", "award-chart3"], [1, "badge", "bg-success-transparent"], ["src", "./assets/images/users/10.jpg", "alt", "img"], ["id", "award-chart4"], ["src", "./assets/images/users/3.jpg", "alt", "img"], ["id", "award-chart5"], ["src", "./assets/images/users/11.jpg", "alt", "img"], ["id", "award-chart6"], ["src", "./assets/images/users/4.jpg", "alt", "img"], ["id", "award-chart7"], ["src", "./assets/images/users/12.jpg", "alt", "img"], ["id", "award-chart8"], ["src", "./assets/images/users/5.jpg", "alt", "img"], ["id", "award-chart9"], ["src", "./assets/images/users/13.jpg", "alt", "img"], ["id", "award-chart10"], ["src", "./assets/images/users/6.jpg", "alt", "img"], ["id", "award-chart11"], [1, "mt-4"], [1, "pagination", "justify-content-end", "mb-0"], [1, "page-item", "disabled"], ["href", "javascript:void(0);", 1, "page-link"], [1, "page-item", "active"], [1, "page-item"], ["id", "addawardmodal"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "col-md-6"], [1, "form-group", "mb-3"], [1, "form-label"], ["type", "text", "placeholder", "ID", 1, "form-control"], ["type", "text", "placeholder", "Name", 1, "form-control"], ["type", "text", "placeholder", "Email", 1, "form-control"], ["type", "text", "placeholder", "Designation", 1, "form-control"], ["name", "projects", "data-trigger", "", "placeholder", "Choose One", 1, "form-control", "custom-select", "p-0"], ["value", ""], ["value", "1"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], [1, "form-group"], [1, "input-group"], [1, "input-group-text", "text-muted"], [1, "ri-calendar-line"], ["type", "text", "mwlFlatpickr", "", "placeholder", "DD-MM-YYYY", 1, "form-control", "choose-date"], ["rows", "3", "placeholder", "enter the description", 1, "form-control"], [1, "modal-footer"], [1, "ms-auto"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-primary", 3, "click"], ["href", "javascript:void(0);", 1, "btn", "btn-primary"]], template: function AwardsComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "app-hr-dashboard-page-header", 1);
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "div", 7)(7, "div", 8)(8, "span");
    \u0275\u0275text(9, "Show");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 9)(11, "div", 10)(12, "ng-select", 11)(13, "ng-option", 12);
    \u0275\u0275text(14, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "ng-option", 13);
    \u0275\u0275text(16, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "ng-option", 14);
    \u0275\u0275text(18, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "ng-option", 15);
    \u0275\u0275text(20, "4");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22, "entries");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 7)(24, "div", 16);
    \u0275\u0275element(25, "input", 17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 18)(27, "table", 19)(28, "thead")(29, "tr")(30, "th", 20);
    \u0275\u0275text(31, "No");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th", 20);
    \u0275\u0275text(33, "#Emp ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "th", 21);
    \u0275\u0275text(35, "Emp Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "th", 21);
    \u0275\u0275text(37, "Designation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th", 22);
    \u0275\u0275text(39, "Attendance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "th", 21);
    \u0275\u0275text(41, "Award Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "th", 21);
    \u0275\u0275text(43, "Gift Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "th", 21);
    \u0275\u0275text(45, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "th", 21);
    \u0275\u0275text(47, "Award Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "th", 21);
    \u0275\u0275text(49, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "tbody")(51, "tr")(52, "td");
    \u0275\u0275text(53, "01");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "td");
    \u0275\u0275text(55, "#2987");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "td")(57, "div", 8)(58, "div", 23);
    \u0275\u0275element(59, "img", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div")(61, "div", 25)(62, "h6", 26);
    \u0275\u0275text(63, "Faith Harris");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 25)(65, "span", 27);
    \u0275\u0275text(66, "faith@gmail.com");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(67, "td");
    \u0275\u0275text(68, "Web Designer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "td", 28)(70, "div", 29);
    \u0275\u0275element(71, "apx-chart", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "td", 31);
    \u0275\u0275text(73, "Employee of the Month Award");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "td")(75, "span", 32);
    \u0275\u0275text(76, "Cash");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "td");
    \u0275\u0275text(78, "01-02-2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "td");
    \u0275\u0275text(80, "Congratulations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "td")(82, "a", 33);
    \u0275\u0275listener("click", function AwardsComponent_Template_a_click_82_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(454);
      return \u0275\u0275resetView(ctx.open(content_r2));
    });
    \u0275\u0275element(83, "i", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "a", 35);
    \u0275\u0275element(85, "i", 36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(86, "tr")(87, "td");
    \u0275\u0275text(88, "02");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "td");
    \u0275\u0275text(90, "#4987");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "td")(92, "div", 8)(93, "div", 23);
    \u0275\u0275element(94, "img", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "div")(96, "div", 25)(97, "h6", 26);
    \u0275\u0275text(98, "Austin Bell");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(99, "div", 25)(100, "span", 27);
    \u0275\u0275text(101, "austin@gmail.com");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(102, "td");
    \u0275\u0275text(103, "Angular Developer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "td", 28)(105, "div", 38);
    \u0275\u0275element(106, "apx-chart", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(107, "td", 31);
    \u0275\u0275text(108, "Best Team Player Award");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "td")(110, "span", 39);
    \u0275\u0275text(111, "Trophy");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(112, "td");
    \u0275\u0275text(113, "15-01-2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "td");
    \u0275\u0275text(115, "Congratulations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "td")(117, "a", 33);
    \u0275\u0275listener("click", function AwardsComponent_Template_a_click_117_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(454);
      return \u0275\u0275resetView(ctx.open(content_r2));
    });
    \u0275\u0275element(118, "i", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "a", 35);
    \u0275\u0275element(120, "i", 36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(121, "tr")(122, "td");
    \u0275\u0275text(123, "03");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "td");
    \u0275\u0275text(125, "#6729");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "td")(127, "div", 8)(128, "div", 23);
    \u0275\u0275element(129, "img", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "div")(131, "div", 25)(132, "h6", 26);
    \u0275\u0275text(133, "Maria Bower");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(134, "div", 25)(135, "span", 27);
    \u0275\u0275text(136, "maria@gmail.com");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(137, "td");
    \u0275\u0275text(138, "Marketing analyst");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(139, "td", 28)(140, "div", 41);
    \u0275\u0275element(141, "apx-chart", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(142, "td", 31);
    \u0275\u0275text(143, "Best Attendance Award");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(144, "td")(145, "span", 42);
    \u0275\u0275text(146, "Momento");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(147, "td");
    \u0275\u0275text(148, "13-12-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(149, "td");
    \u0275\u0275text(150, "Congratulations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(151, "td")(152, "a", 33);
    \u0275\u0275listener("click", function AwardsComponent_Template_a_click_152_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(454);
      return \u0275\u0275resetView(ctx.open(content_r2));
    });
    \u0275\u0275element(153, "i", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(154, "a", 35);
    \u0275\u0275element(155, "i", 36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(156, "tr")(157, "td");
    \u0275\u0275text(158, "04");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(159, "td");
    \u0275\u0275text(160, "#2098");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(161, "td")(162, "div", 8)(163, "div", 23);
    \u0275\u0275element(164, "img", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(165, "div")(166, "div", 25)(167, "h6", 26);
    \u0275\u0275text(168, "Peter Hill");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(169, "div", 25)(170, "span", 27);
    \u0275\u0275text(171, "peter@gmail.com");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(172, "td");
    \u0275\u0275text(173, "Testor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(174, "td", 28)(175, "div", 44);
    \u0275\u0275element(176, "apx-chart", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(177, "td", 31);
    \u0275\u0275text(178, "Most Improved Performer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(179, "td")(180, "span", 39);
    \u0275\u0275text(181, "Trophy");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(182, "td");
    \u0275\u0275text(183, "05-11-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(184, "td");
    \u0275\u0275text(185, "Congratulations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(186, "td")(187, "a", 33);
    \u0275\u0275listener("click", function AwardsComponent_Template_a_click_187_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(454);
      return \u0275\u0275resetView(ctx.open(content_r2));
    });
    \u0275\u0275element(188, "i", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(189, "a", 35);
    \u0275\u0275element(190, "i", 36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(191, "tr")(192, "td");
    \u0275\u0275text(193, "05");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(194, "td");
    \u0275\u0275text(195, "#1025");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(196, "td")(197, "div", 8)(198, "div", 23);
    \u0275\u0275element(199, "img", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(200, "div")(201, "div", 25)(202, "h6", 26);
    \u0275\u0275text(203, "Victoria Lyman");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(204, "div", 25)(205, "span", 27);
    \u0275\u0275text(206, "victoria@gmail.com");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(207, "td");
    \u0275\u0275text(208, "General Manager");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(209, "td", 28)(210, "div", 46);
    \u0275\u0275element(211, "apx-chart", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(212, "td", 31);
    \u0275\u0275text(213, "The Motivator");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(214, "td")(215, "span", 42);
    \u0275\u0275text(216, "Momento");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(217, "td");
    \u0275\u0275text(218, "21-09-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(219, "td");
    \u0275\u0275text(220, "Congratulations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(221, "td")(222, "a", 33);
    \u0275\u0275listener("click", function AwardsComponent_Template_a_click_222_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(454);
      return \u0275\u0275resetView(ctx.open(content_r2));
    });
    \u0275\u0275element(223, "i", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(224, "a", 35);
    \u0275\u0275element(225, "i", 36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(226, "tr")(227, "td");
    \u0275\u0275text(228, "06");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(229, "td");
    \u0275\u0275text(230, "#3262");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(231, "td")(232, "div", 8)(233, "div", 23);
    \u0275\u0275element(234, "img", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(235, "div")(236, "div", 25)(237, "h6", 26);
    \u0275\u0275text(238, "Adam Quinn");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(239, "div", 25)(240, "span", 27);
    \u0275\u0275text(241, "adam@gmail.com");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(242, "td");
    \u0275\u0275text(243, "Accountant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(244, "td", 28)(245, "div", 48);
    \u0275\u0275element(246, "apx-chart", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(247, "td", 31);
    \u0275\u0275text(248, "Stand out Performer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(249, "td")(250, "span", 32);
    \u0275\u0275text(251, "Cash");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(252, "td");
    \u0275\u0275text(253, "18-08-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(254, "td");
    \u0275\u0275text(255, "Congratulations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(256, "td")(257, "a", 33);
    \u0275\u0275listener("click", function AwardsComponent_Template_a_click_257_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(454);
      return \u0275\u0275resetView(ctx.open(content_r2));
    });
    \u0275\u0275element(258, "i", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(259, "a", 35);
    \u0275\u0275element(260, "i", 36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(261, "tr")(262, "td");
    \u0275\u0275text(263, "07");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(264, "td");
    \u0275\u0275text(265, "#3489");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(266, "td")(267, "div", 8)(268, "div", 23);
    \u0275\u0275element(269, "img", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(270, "div")(271, "div", 25)(272, "h6", 26);
    \u0275\u0275text(273, "Melanie Coleman");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(274, "div", 25)(275, "span", 27);
    \u0275\u0275text(276, "melanie@gmail.com");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(277, "td");
    \u0275\u0275text(278, "App Designer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(279, "td", 28)(280, "div", 50);
    \u0275\u0275element(281, "apx-chart", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(282, "td", 31);
    \u0275\u0275text(283, "Work Anniversary Award");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(284, "td")(285, "span", 39);
    \u0275\u0275text(286, "Trophy");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(287, "td");
    \u0275\u0275text(288, "15-07-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(289, "td");
    \u0275\u0275text(290, "Congratulations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(291, "td")(292, "a", 33);
    \u0275\u0275listener("click", function AwardsComponent_Template_a_click_292_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(454);
      return \u0275\u0275resetView(ctx.open(content_r2));
    });
    \u0275\u0275element(293, "i", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(294, "a", 35);
    \u0275\u0275element(295, "i", 36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(296, "tr")(297, "td");
    \u0275\u0275text(298, "08");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(299, "td");
    \u0275\u0275text(300, "#3698");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(301, "td")(302, "div", 8)(303, "div", 23);
    \u0275\u0275element(304, "img", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(305, "div")(306, "div", 25)(307, "h6", 26);
    \u0275\u0275text(308, "Max Wilson");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(309, "div", 25)(310, "span", 27);
    \u0275\u0275text(311, "max@gmail.com");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(312, "td");
    \u0275\u0275text(313, "PHP Developer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(314, "td", 28)(315, "div", 52);
    \u0275\u0275element(316, "apx-chart", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(317, "td", 31);
    \u0275\u0275text(318, "Most Creative Award");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(319, "td")(320, "span", 42);
    \u0275\u0275text(321, "Momento");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(322, "td");
    \u0275\u0275text(323, "12-05-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(324, "td");
    \u0275\u0275text(325, "Congratulations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(326, "td")(327, "a", 33);
    \u0275\u0275listener("click", function AwardsComponent_Template_a_click_327_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(454);
      return \u0275\u0275resetView(ctx.open(content_r2));
    });
    \u0275\u0275element(328, "i", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(329, "a", 35);
    \u0275\u0275element(330, "i", 36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(331, "tr")(332, "td");
    \u0275\u0275text(333, "09");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(334, "td");
    \u0275\u0275text(335, "#5612");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(336, "td")(337, "div", 8)(338, "div", 23);
    \u0275\u0275element(339, "img", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(340, "div")(341, "div", 25)(342, "h6", 26);
    \u0275\u0275text(343, "Amelia Russell");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(344, "div", 25)(345, "span", 27);
    \u0275\u0275text(346, "amelia@gmail.com");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(347, "td");
    \u0275\u0275text(348, "UX Designer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(349, "td", 28)(350, "div", 54);
    \u0275\u0275element(351, "apx-chart", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(352, "td", 31);
    \u0275\u0275text(353, "Character Award");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(354, "td")(355, "span", 39);
    \u0275\u0275text(356, "Trophy");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(357, "td");
    \u0275\u0275text(358, "22-04-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(359, "td");
    \u0275\u0275text(360, "Congratulations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(361, "td")(362, "a", 33);
    \u0275\u0275listener("click", function AwardsComponent_Template_a_click_362_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(454);
      return \u0275\u0275resetView(ctx.open(content_r2));
    });
    \u0275\u0275element(363, "i", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(364, "a", 35);
    \u0275\u0275element(365, "i", 36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(366, "tr")(367, "td");
    \u0275\u0275text(368, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(369, "td");
    \u0275\u0275text(370, "#0245");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(371, "td")(372, "div", 8)(373, "div", 23);
    \u0275\u0275element(374, "img", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(375, "div")(376, "div", 25)(377, "h6", 26);
    \u0275\u0275text(378, "Justin Metcalfe");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(379, "div", 25)(380, "span", 27);
    \u0275\u0275text(381, "justin@gmail.com");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(382, "td");
    \u0275\u0275text(383, "Web Designer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(384, "td", 28)(385, "div", 56);
    \u0275\u0275element(386, "apx-chart", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(387, "td", 31);
    \u0275\u0275text(388, "Sales Award");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(389, "td")(390, "span", 32);
    \u0275\u0275text(391, "Cash");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(392, "td");
    \u0275\u0275text(393, "05-03-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(394, "td");
    \u0275\u0275text(395, "Congratulations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(396, "td")(397, "a", 33);
    \u0275\u0275listener("click", function AwardsComponent_Template_a_click_397_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(454);
      return \u0275\u0275resetView(ctx.open(content_r2));
    });
    \u0275\u0275element(398, "i", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(399, "a", 35);
    \u0275\u0275element(400, "i", 36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(401, "tr")(402, "td");
    \u0275\u0275text(403, "11");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(404, "td");
    \u0275\u0275text(405, "#3467");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(406, "td")(407, "div", 8)(408, "div", 23);
    \u0275\u0275element(409, "img", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(410, "div")(411, "div", 25)(412, "h6", 26);
    \u0275\u0275text(413, "Sophie Anderson");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(414, "div", 25)(415, "span", 27);
    \u0275\u0275text(416, "faith@gmail.com");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(417, "td");
    \u0275\u0275text(418, "Java Developer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(419, "td", 28)(420, "div", 58);
    \u0275\u0275element(421, "apx-chart", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(422, "td", 31);
    \u0275\u0275text(423, "Customer Service Award");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(424, "td")(425, "span", 39);
    \u0275\u0275text(426, "Trophy");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(427, "td");
    \u0275\u0275text(428, "15-01-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(429, "td");
    \u0275\u0275text(430, "Congratulations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(431, "td")(432, "a", 33);
    \u0275\u0275listener("click", function AwardsComponent_Template_a_click_432_listener() {
      \u0275\u0275restoreView(_r1);
      const content_r2 = \u0275\u0275reference(454);
      return \u0275\u0275resetView(ctx.open(content_r2));
    });
    \u0275\u0275element(433, "i", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(434, "a", 35);
    \u0275\u0275element(435, "i", 36);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(436, "nav", 59)(437, "ul", 60)(438, "li", 61)(439, "a", 62);
    \u0275\u0275text(440, "Prev");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(441, "li", 63)(442, "a", 62);
    \u0275\u0275text(443, "1");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(444, "li", 64)(445, "a", 62);
    \u0275\u0275text(446, "2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(447, "li", 64)(448, "a", 62);
    \u0275\u0275text(449, "3");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(450, "li", 64)(451, "a", 62);
    \u0275\u0275text(452, "Next");
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275template(453, AwardsComponent_ng_template_453_Template, 89, 0, "ng-template", 65, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275classMap("");
    \u0275\u0275property("title", "Awards")("title3", "Add New Award")("class1", "btn btn-primary")("path", "");
    \u0275\u0275advance(71);
    \u0275\u0275property("series", ctx.optionsCircle.series)("chart", ctx.optionsCircle.chart)("colors", ctx.optionsCircle.colors)("stroke", ctx.optionsCircle.stroke)("states", ctx.optionsCircle.states)("plotOptions", ctx.optionsCircle.plotOptions)("grid", ctx.optionsCircle.grid);
    \u0275\u0275advance(35);
    \u0275\u0275property("series", ctx.optionsCircle1.series)("chart", ctx.optionsCircle1.chart)("colors", ctx.optionsCircle1.colors)("stroke", ctx.optionsCircle1.stroke)("states", ctx.optionsCircle1.states)("plotOptions", ctx.optionsCircle1.plotOptions)("grid", ctx.optionsCircle1.grid);
    \u0275\u0275advance(35);
    \u0275\u0275property("series", ctx.optionsCircle2.series)("chart", ctx.optionsCircle2.chart)("colors", ctx.optionsCircle2.colors)("stroke", ctx.optionsCircle2.stroke)("states", ctx.optionsCircle2.states)("plotOptions", ctx.optionsCircle2.plotOptions)("grid", ctx.optionsCircle2.grid);
    \u0275\u0275advance(35);
    \u0275\u0275property("series", ctx.optionsCircle3.series)("chart", ctx.optionsCircle3.chart)("colors", ctx.optionsCircle3.colors)("stroke", ctx.optionsCircle3.stroke)("states", ctx.optionsCircle3.states)("plotOptions", ctx.optionsCircle3.plotOptions)("grid", ctx.optionsCircle3.grid);
    \u0275\u0275advance(35);
    \u0275\u0275property("series", ctx.optionsCircle4.series)("chart", ctx.optionsCircle4.chart)("colors", ctx.optionsCircle4.colors)("stroke", ctx.optionsCircle4.stroke)("states", ctx.optionsCircle4.states)("plotOptions", ctx.optionsCircle4.plotOptions)("grid", ctx.optionsCircle4.grid);
    \u0275\u0275advance(35);
    \u0275\u0275property("series", ctx.optionsCircle5.series)("chart", ctx.optionsCircle5.chart)("colors", ctx.optionsCircle5.colors)("stroke", ctx.optionsCircle5.stroke)("states", ctx.optionsCircle5.states)("plotOptions", ctx.optionsCircle5.plotOptions)("grid", ctx.optionsCircle5.grid);
    \u0275\u0275advance(35);
    \u0275\u0275property("series", ctx.optionsCircle6.series)("chart", ctx.optionsCircle6.chart)("colors", ctx.optionsCircle6.colors)("stroke", ctx.optionsCircle6.stroke)("states", ctx.optionsCircle6.states)("plotOptions", ctx.optionsCircle6.plotOptions)("grid", ctx.optionsCircle6.grid);
    \u0275\u0275advance(35);
    \u0275\u0275property("series", ctx.optionsCircle7.series)("chart", ctx.optionsCircle7.chart)("colors", ctx.optionsCircle7.colors)("stroke", ctx.optionsCircle7.stroke)("states", ctx.optionsCircle7.states)("plotOptions", ctx.optionsCircle7.plotOptions)("grid", ctx.optionsCircle7.grid);
    \u0275\u0275advance(35);
    \u0275\u0275property("series", ctx.optionsCircle8.series)("chart", ctx.optionsCircle8.chart)("colors", ctx.optionsCircle8.colors)("stroke", ctx.optionsCircle8.stroke)("states", ctx.optionsCircle8.states)("plotOptions", ctx.optionsCircle8.plotOptions)("grid", ctx.optionsCircle8.grid);
    \u0275\u0275advance(35);
    \u0275\u0275property("series", ctx.optionsCircle9.series)("chart", ctx.optionsCircle9.chart)("colors", ctx.optionsCircle9.colors)("stroke", ctx.optionsCircle9.stroke)("states", ctx.optionsCircle9.states)("plotOptions", ctx.optionsCircle9.plotOptions)("grid", ctx.optionsCircle9.grid);
    \u0275\u0275advance(35);
    \u0275\u0275property("series", ctx.optionsCircle10.series)("chart", ctx.optionsCircle10.chart)("colors", ctx.optionsCircle10.colors)("stroke", ctx.optionsCircle10.stroke)("states", ctx.optionsCircle10.states)("plotOptions", ctx.optionsCircle10.plotOptions)("grid", ctx.optionsCircle10.grid);
  }
}, dependencies: [SharedModule, HrDashboardPageHeaderComponent, NgApexchartsModule, ChartComponent, NgCircleProgressModule, NgSelectModule, NgSelectComponent, NgOptionComponent, FlatpickrModule, FlatpickrDirective, MaterialModuleModule, RouterModule] });
var AwardsComponent = _AwardsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AwardsComponent, { className: "AwardsComponent" });
})();
export {
  AwardsComponent
};
//# sourceMappingURL=awards.component-NEH7L5KE.js.map
