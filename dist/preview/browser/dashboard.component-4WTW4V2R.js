import {
  ChartComponent,
  NgApexchartsModule
} from "./chunk-BFCIYJJG.js";
import {
  FullCalendarComponent,
  FullCalendarModule,
  index,
  index2,
  index3,
  require_moment
} from "./chunk-R5ZJU46B.js";
import {
  SharedModule,
  TaskDashboardPageHeaderComponent
} from "./chunk-UEAXMXBR.js";
import {
  NgSelectModule
} from "./chunk-26H6NGLN.js";
import "./chunk-ZVXZDCDW.js";
import "./chunk-KTQLQ7YR.js";
import "./chunk-ZSUERINM.js";
import {
  NgbDropdown,
  NgbDropdownItem,
  NgbDropdownMenu,
  NgbDropdownToggle,
  NgbModule,
  NgbTooltip
} from "./chunk-47LBZ5ZO.js";
import {
  RouterLink,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
import {
  __toESM
} from "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/project-dashboard/dashboard/dashboard.component.ts
var import_moment = __toESM(require_moment());
var _c0 = ["external"];
var _DashboardComponent = class _DashboardComponent {
  handleEventClick(arg) {
    if (confirm("Are you sure you want to delete this event?")) {
      arg.event.remove();
    }
  }
  constructor() {
    this.maxView = "year";
    this.minuteStep = 5;
    this.minView = "minute";
    this.showCalendar = true;
    this.startView = "day";
    this.views = ["minute", "hour", "day", "month", "year"];
    this.calendarPlugins = [index, index2, index3];
    this.curYear = (0, import_moment.default)().format("YYYY");
    this.curMonth = (0, import_moment.default)().format("MM");
    this.calendarOptions = {
      plugins: [index, index3],
      initialView: "dayGridMonth",
      headerToolbar: {
        left: "prev",
        center: "title",
        right: "next"
      },
      navLinks: true,
      // can click day/week names to navigate views
      businessHours: true,
      // display business hours
      editable: true,
      selectable: true,
      selectMirror: true,
      droppable: true,
      weekends: true,
      dayMaxEvents: true,
      // allow "more" link when too many events
      eventClick: (arg) => this.handleEventClick(arg)
    };
    this.optionsCircle = {
      chart: {
        height: 90,
        width: 65,
        type: "radialBar",
        sparkline: {
          enabled: true
        }
      },
      series: [75],
      colors: ["rgba(13, 205, 148,1)"],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "40%",
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
      //   grid: {
      //       padding: {
      //         bottom: -8,
      //         top: -50,
      //       },
      //   },
      stroke: {
        lineCap: "round"
      },
      labels: ["Status"]
    };
    this.optionsCircle1 = {
      chart: {
        height: 90,
        width: 65,
        type: "radialBar",
        sparkline: {
          enabled: true
        }
      },
      series: [38],
      colors: ["rgba(51,102,255,1)"],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "40%",
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
    this.optionsCircle2 = {
      chart: {
        height: 90,
        width: 65,
        type: "radialBar",
        sparkline: {
          enabled: true
        }
      },
      series: [67],
      colors: ["#ffad00"],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "40%",
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
    this.optionsCircle3 = {
      chart: {
        height: 90,
        width: 65,
        type: "radialBar",
        sparkline: {
          enabled: true
        }
      },
      series: [49],
      colors: ["#0fcd95"],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "40%",
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
    this.optionsCircle4 = {
      chart: {
        height: 90,
        width: 65,
        type: "radialBar",
        sparkline: {
          enabled: true
        }
      },
      series: [75],
      colors: ["rgba(13, 205, 148,1)"],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "40%",
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
      //   grid: {
      //       padding: {
      //         bottom: -8,
      //         top: -50,
      //       },
      //   },
      stroke: {
        lineCap: "round"
      },
      labels: ["Status"]
    };
    this.chartOptions = {
      series: [
        {
          type: "line",
          name: "Profit",
          data: [
            {
              x: "Jan",
              y: 100
            },
            {
              x: "Feb",
              y: 210
            },
            {
              x: "Mar",
              y: 180
            },
            {
              x: "Apr",
              y: 354
            },
            {
              x: "May",
              y: 230
            },
            {
              x: "Jun",
              y: 320
            },
            {
              x: "Jul",
              y: 656
            },
            {
              x: "Aug",
              y: 610
            },
            {
              x: "Sep",
              y: 350
            },
            {
              x: "Oct",
              y: 350
            },
            {
              x: "Nov",
              y: 210
            },
            {
              x: "Dec",
              y: 410
            }
          ]
        },
        {
          type: "line",
          name: "Revenue",
          chart: {
            dropShadow: {
              enabled: true,
              enabledOnSeries: void 0,
              top: 5,
              left: 0,
              blur: 3,
              color: "#000",
              opacity: 0.1
            }
          },
          data: [
            {
              x: "Jan",
              y: 180
            },
            {
              x: "Feb",
              y: 320
            },
            {
              x: "Mar",
              y: 376
            },
            {
              x: "Apr",
              y: 220
            },
            {
              x: "May",
              y: 520
            },
            {
              x: "Jun",
              y: 780
            },
            {
              x: "Jul",
              y: 435
            },
            {
              x: "Aug",
              y: 515
            },
            {
              x: "Sep",
              y: 738
            },
            {
              x: "Oct",
              y: 454
            },
            {
              x: "Nov",
              y: 525
            },
            {
              x: "Dec",
              y: 230
            }
          ]
        },
        {
          type: "area",
          name: "Sales",
          chart: {
            dropShadow: {
              enabled: true,
              enabledOnSeries: void 0,
              top: 5,
              left: 0,
              blur: 3,
              color: "#000",
              opacity: 0.1
            }
          },
          data: [
            {
              x: "Jan",
              y: 200
            },
            {
              x: "Feb",
              y: 530
            },
            {
              x: "Mar",
              y: 110
            },
            {
              x: "Apr",
              y: 130
            },
            {
              x: "May",
              y: 480
            },
            {
              x: "Jun",
              y: 520
            },
            {
              x: "Jul",
              y: 780
            },
            {
              x: "Aug",
              y: 435
            },
            {
              x: "Sep",
              y: 475
            },
            {
              x: "Oct",
              y: 738
            },
            {
              x: "Nov",
              y: 454
            },
            {
              x: "Dec",
              y: 480
            }
          ]
        }
      ],
      chart: {
        height: 350,
        animations: {
          speed: 500
        },
        toolbar: {
          show: false
        },
        dropShadow: {
          enabled: true,
          enabledOnSeries: void 0,
          top: 8,
          left: 0,
          blur: 3,
          color: "#000",
          opacity: 0.1
        }
      },
      colors: ["#3366ff", "#fe7f00", "rgba(119, 119, 142, 0.05)"],
      dataLabels: {
        enabled: false
      },
      grid: {
        borderColor: "#f1f1f1",
        strokeDashArray: 3
      },
      stroke: {
        curve: "smooth",
        width: [3, 3, 0],
        dashArray: [0, 0, 0]
      },
      xaxis: {
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        labels: {
          formatter: function(value) {
            return "$" + value;
          }
        }
      },
      tooltip: {
        y: [{
          formatter: function(e) {
            return void 0 !== e ? "$" + e.toFixed(0) : e;
          }
        }, {
          formatter: function(e) {
            return void 0 !== e ? "$" + e.toFixed(0) : e;
          }
        }, {
          formatter: function(e) {
            return void 0 !== e ? e.toFixed(0) : e;
          }
        }]
      },
      legend: {
        show: false,
        customLegendItems: ["Profit", "Revenue", "Sales"],
        inverseOrder: true
      },
      title: {
        show: false
      },
      markers: {
        hover: {
          sizeOffset: 5
        }
      }
    };
    this.chartOptions1 = {
      series: [80, 29],
      labels: ["Male", "Female"],
      chart: {
        height: 325,
        type: "donut"
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: true,
        position: "bottom",
        horizontalAlign: "center",
        offsetY: 8,
        fontWeight: "normal",
        fontSize: "14px",
        markers: {
          width: 12,
          height: 12,
          strokeWidth: 0,
          strokeColor: "#fff",
          fillColors: void 0,
          radius: 4,
          customHTML: void 0,
          onClick: void 0,
          offsetX: 0,
          offsetY: 0
        }
      },
      stroke: {
        show: true,
        curve: "smooth",
        lineCap: "round",
        colors: "#fff",
        width: 0,
        dashArray: 0
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: "80%",
            background: "transparent",
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: "20px",
                color: "#495057",
                offsetY: -13
              },
              value: {
                show: true,
                fontSize: "30px",
                fontWeight: 500,
                color: void 0,
                offsetY: 8,
                formatter: function(val) {
                  return val + "%";
                }
              },
              total: {
                show: true,
                showAlways: true,
                label: "Total",
                fontSize: "18px",
                fontWeight: 400,
                color: "#495057"
              }
            }
          }
        }
      },
      colors: ["rgba(51, 102, 255, 1)", "rgba(254, 127, 0, 1)"]
    };
    this.chartOptions2 = {
      series: [{
        name: "Working Hours",
        data: [100, 145, 141, 167, 122, 143, 144]
      }, {
        name: "Work",
        data: [40, 17, 15, 15, 21, 14, 11]
      }],
      chart: {
        type: "bar",
        height: 286,
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      grid: {
        borderColor: "#f1f1f1",
        strokeDashArray: 3
      },
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0
          }
        }
      }],
      colors: ["rgba(51, 102, 255, 1)", "rgba(51, 102, 255, 0.2)"],
      legend: {
        show: false,
        position: "top"
      },
      plotOptions: {
        bar: {
          columnWidth: "17%",
          borderRadius: 2
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        labels: {
          rotate: -90
        }
      },
      fill: {
        opacity: 1
      }
    };
  }
  ngOnInit() {
  }
};
_DashboardComponent.\u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DashboardComponent)();
};
_DashboardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], viewQuery: function DashboardComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.external = _t.first);
  }
}, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 869, vars: 71, consts: [[3, "title", "title3", "title2"], [1, "row"], [1, "col-xl-3", "col-lg-6", "col-md-12"], [1, "card", "custom-card"], [1, "card-body"], [1, "col-7"], [1, "mt-0", "text-start"], [1, "fs-16", "fw-semibold"], [1, "mb-0", "mt-1", "text-primary", "fs-25"], [1, "col-5"], [1, "icon1", "bg-primary", "my-auto", "float-end"], [1, "fe", "fe-briefcase"], [1, "mb-0", "mt-1", "text-danger", "fs-25"], [1, "icon1", "bg-danger", "my-auto", "float-end"], [1, "mb-0", "mt-1", "text-success", "fs-25"], [1, "icon1", "bg-success", "my-auto", "float-end"], [1, "fe", "fe-check"], [1, "mb-0", "mt-1", "text-secondary", "fs-25"], [1, "icon1", "bg-secondary", "my-auto", "float-end"], [1, "fe", "fe-info"], [1, "col-md-12"], [1, ""], [1, "card-header", "d-sm-flex", "justify-content-between", "align-items-center", "mb-3", "pb-2"], [1, "card-title"], [1, "card-options", "d-flex", "mt-2", "mt-sm-0"], [1, "btn-list", "me-1"], [1, "btn", "btn-primary"], [1, "btn", "btn-light3"], ["ngbDropdown", "", 1, "dropdown"], ["href", "javascript:void(0);", "ngbDropdownToggle", "", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-light3", "dropdown-toggle"], ["ngbDropdownMenu", "", "role", "menu", 1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript:void(0);", "ngbDropdownItem", "", 1, "dropdown-item"], [1, "col-xxl-3", "col-xl-6", "col-lg-6", "col-md-12"], [1, "col-9"], [1, "mb-0", "mt-1", "mb-2", "fw-semibold"], [1, "fs-14", "fw-semibold", "text-muted", "mb-2"], [1, "fs-14", "mt-2", "text-muted"], [1, "col-3"], [1, "task-img", "bg-light", "my-auto", "float-end"], ["src", "./assets/images/media/png/17.png", "alt", "img"], [1, "card-footer"], [1, "d-md-flex", "flex-wrap"], [1, "d-flex", "my-1", "position-relative", "flex-fill", "flex-grow-1"], [1, "avatar-list-stacked"], [1, "avatar", "avatar-md", "me-2", "avatar-rounded"], ["src", "./assets/images/users/8.jpg", "alt", "img"], ["src", "./assets/images/users/2.jpg", "alt", "img"], ["href", "javascript:void(0);", 1, "avatar", "bg-primary", "avatar-rounded", "text-fixed-white"], ["id", "attendance01", 1, "flex-shrink-0", "custom-chart-dash"], [3, "series", "chart", "colors", "stroke", "states", "plotOptions", "grid", "labels"], [1, "ms-auto", "mt-3", "my-1"], ["ngbDropdown", "", 1, "d-flex"], ["data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Project Priority", 1, "task-btn", "border-danger", "text-danger"], ["ngbDropdownToggle", "", "href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-outline-light", "text-muted", "no-caret"], [1, "fe", "fe-more-vertical"], ["ngbDropdownItem", "", "href", "javascript:void(0);", 1, "dropdown-item"], [1, "fe", "fe-eye", "me-2"], [1, "fe", "fe-plus-circle", "me-2"], [1, "fe", "fe-trash-2", "me-2"], [1, "fe", "fe-download-cloud", "me-2"], [1, "fe", "fe-settings", "me-2"], ["src", "./assets/images/media/png/18.png", "alt", "img"], ["id", "attendanc02", 1, "flex-shrink-0", "custom-chart-dash"], [3, "series", "chart", "colors", "stroke", "states", "plotOptions", "grid"], ["src", "./assets/images/media/png/19.png", "alt", "img"], ["id", "attendance03", 1, "flex-shrink-0", "custom-chart-dash"], ["src", "./assets/images/media/png/20.png", "alt", "img"], ["src", "./assets/images/users/4.jpg", "alt", "img"], ["src", "./assets/images/users/13.jpg", "alt", "img"], ["id", "attendance04", 1, "flex-shrink-0", "custom-chart-dash"], [1, "col-xxl-9", "col-md-12", "col-lg-"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center", "border-0", "responsive-header"], [1, "card-options"], ["ngbDropdown", "", 1, "btn-list"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-light", "text-dark", "d-flex", "my-1", "float-start"], [1, "dot-label", "bg-primary", "me-2", "my-auto"], [1, "dot-label", "bg-secondary", "me-2", "my-auto"], ["href", "javascript:void(0);", "ngbDropdownToggle", "", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-outline-light", "my-1", "no-caret"], [1, "fe", "fe-chevron-down"], [1, "chart-wrapper"], [1, "col-xxl-3", "col-md-12", "col-lg-12"], [1, "card-header", "d-flex", "justify-content-between", "border-bottom-0"], [1, "card-options", "me-3"], ["href", "javascript:void(0);", "ngbDropdownToggle", "", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "ripple", "btn-outline-light", "dropdown-toggle"], [1, "mb-4"], [1, "list-group-item", "d-flex", "p-0", "pb-1", "align-items-center", "border-0"], [1, "d-flex"], [1, "icon1", "flex-shrink-0", "bg-pink-transparent", "me-4"], [1, "mt-2"], [1, "mb-1", "fw-semibold", "fs-16"], [1, "clearfix"], [1, "fs-14", "text-muted"], [1, "fw-semibold"], [1, "icon1", "flex-shrink-0", "bg-success-transparent", "me-4"], [1, "fe", "fe-airplay"], [1, "icon1", "flex-shrink-0", "bg-orange-transparent", "me-4"], [1, "fe", "fe-file"], [1, "icon1", "flex-shrink-0", "bg-info-transparent", "me-4"], [1, "fe", "fe-trending-up"], [1, "mb-0"], [1, "icon1", "flex-shrink-0", "bg-primary-transparent", "me-4"], [1, "fe", "fe-smartphone"], [1, "col-xxl-5", "col-lg-12", "col-md-12"], [1, "card", "custom-card", "overflow-hidden"], ["ngbDropdown", "", 1, "card-options", "pe-3"], ["ngbDropdownToggle", "", "data-bs-toggle", "dropdown", "role", "button", "aria-haspopup", "true", "aria-expanded", "false", 1, "me-0", "option-dots", "text-default", "no-caret"], [1, "fe", "fe-more-horizontal"], ["ngbDropdownItem", "", 1, "dropdown-item"], ["href", "javascript:void(0);"], [1, "card-body", "p-0", "pt-3"], [1, "border-bottom", "project-progress-content"], ["href", "javascript:void(0);", 1, "list-group-item", "d-sm-flex", "align-items-center", "border-0"], [1, "task-img", "bg-primary-transparent", "me-4", "flex-shrink-0"], ["src", "./assets/images/media/png/12.png", "alt", "img", 1, ""], [1, "mt-1"], [1, "d-flex", "mt-1"], [1, "ms-auto", "me-3", "mt-4", "mt-md-0"], [1, "text-muted", "fs-13", "ms-auto", "text-end", "mb-2"], [1, "d-flex", "align-items-center"], ["id", "progress", 1, "flex-shrink-0"], ["src", "./assets/images/users/3.jpg", "alt", "img"], ["src", "./assets/images/media/png/5.png", "alt", "img", 1, ""], ["id", "progress2", 1, "flex-shrink-0", "custom-chart-dash"], [1, "project-progress-content"], ["src", "./assets/images/media/png/3.png", "alt", "img", 1, ""], ["id", "progress3", 1, "flex-shrink-0", "custom-chart-dash"], [1, "col-xxl-4", "col-lg-12", "col-md-12"], [1, "list-group-item", "d-flex", "p-0", "align-items-center", "border-0"], [1, "avatar", "avatar-lg", "me-2", "flex-shrink-0"], [1, "fw-normal", "text-muted"], [1, "avatar", "avatar-lg", "bradius", "me-3", "bg-primary-transparent", "flex-shrink-0"], ["src", "./assets/images/users/5.jpg", "alt", "img"], [1, "card", "custom-card", "chart-donut1"], [1, "card-header", "border-0"], ["id", "employees", 1, "mx-auto", "apex-dount"], [3, "series", "chart", "colors", "stroke", "legend", "plotOptions", "labels", "markers", "dataLabels"], [1, "col-xxl-8", "col-md-12", "col-lg-12"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "card-body", "pt-2", "p-0"], [1, "table-responsive"], ["id", "projecttable", 1, "table", "table-vcenter", "text-nowrap", "mb-0", "custom-table"], [1, "w-15p"], [1, "wd-5p"], [1, "wd-25p"], ["routerLink", "/dashboard/project-dashboard/view-project", 1, "text-dark", "fw-semibold"], [1, "progress", "progress-sm"], [1, "progress-bar", "bg-primary", "w-55"], [1, "text-primary", "fs-15"], [1, "text-nuted"], [1, "d-flex", "text-start"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Mail", 1, "action-btns1"], [1, "fe", "fe-mail", "text-primary"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Delete", 1, "action-btns1"], [1, "fe", "fe-trash-2", "text-danger"], [1, "progress-bar", "bg-primary", "w-30"], [1, "progress-bar", "bg-success", "w-100"], [1, "text-success", "fs-15"], [1, "progress-bar", "bg-orange", "w-50"], [1, "text-orange", "fs-15"], [1, "progress-bar", "bg-warning", "w-80"], [1, "text-warning", "fs-15"], [1, "col-xxl-4", "col-md-12", "col-lg-12"], [1, "card-body", "pt-2"], [3, "options"]], template: function DashboardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-task-dashboard-page-header", 0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 1)(6, "div", 5)(7, "div", 6)(8, "span", 7);
    \u0275\u0275text(9, "Projects");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h3", 8);
    \u0275\u0275text(11, "1254");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 9)(13, "div", 10);
    \u0275\u0275element(14, "i", 11);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(15, "div", 2)(16, "div", 3)(17, "div", 4)(18, "div", 1)(19, "div", 5)(20, "div", 6)(21, "span", 7);
    \u0275\u0275text(22, "Pending Project");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "h3", 12);
    \u0275\u0275text(24, "42");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 9)(26, "div", 13);
    \u0275\u0275element(27, "i", 11);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(28, "div", 2)(29, "div", 3)(30, "div", 4)(31, "div", 1)(32, "div", 5)(33, "div", 6)(34, "span", 7);
    \u0275\u0275text(35, "Completed Projects");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "h3", 14);
    \u0275\u0275text(37, "11");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 9)(39, "div", 15);
    \u0275\u0275element(40, "i", 16);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(41, "div", 2)(42, "div", 3)(43, "div", 4)(44, "div", 1)(45, "div", 5)(46, "div", 6)(47, "span", 7);
    \u0275\u0275text(48, "On going Projects");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "h3", 17);
    \u0275\u0275text(50, "38");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 9)(52, "div", 18);
    \u0275\u0275element(53, "i", 19);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(54, "div", 1)(55, "div", 20)(56, "div", 21)(57, "div", 22)(58, "h4", 23);
    \u0275\u0275text(59, "Recent Project Updates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 24)(61, "div", 25)(62, "div", 26);
    \u0275\u0275text(63, "Add Task");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 27);
    \u0275\u0275text(65, "View All");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 28)(67, "a", 29);
    \u0275\u0275text(68, " Latest ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "ul", 30)(70, "li")(71, "a", 31);
    \u0275\u0275text(72, "Monthly");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "li")(74, "a", 31);
    \u0275\u0275text(75, "Yearly");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "li")(77, "a", 31);
    \u0275\u0275text(78, "Weekly");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(79, "div", 1)(80, "div", 32)(81, "div", 3)(82, "div", 4)(83, "div", 1)(84, "div", 33)(85, "div", 6)(86, "h4", 34);
    \u0275\u0275text(87, "Design Updated");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "p", 35);
    \u0275\u0275text(89, "Designing Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "span", 36);
    \u0275\u0275text(91, "Mobile App Ui Designing and Prototyping");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(92, "div", 37)(93, "div", 38);
    \u0275\u0275element(94, "img", 39);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(95, "div", 40)(96, "div", 41)(97, "div", 42)(98, "div", 43)(99, "span", 44);
    \u0275\u0275element(100, "img", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "span", 44);
    \u0275\u0275element(102, "img", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "a", 47);
    \u0275\u0275text(104, " +6 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(105, "div", 21)(106, "div", 48);
    \u0275\u0275element(107, "apx-chart", 49);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(108, "div", 50)(109, "div", 51)(110, "div", 52);
    \u0275\u0275text(111, "High");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "a", 53);
    \u0275\u0275element(113, "i", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "ul", 30)(115, "li")(116, "a", 55);
    \u0275\u0275element(117, "i", 56);
    \u0275\u0275text(118, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(119, "li")(120, "a", 55);
    \u0275\u0275element(121, "i", 57);
    \u0275\u0275text(122, "Add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(123, "li")(124, "a", 55);
    \u0275\u0275element(125, "i", 58);
    \u0275\u0275text(126, "Remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(127, "li")(128, "a", 55);
    \u0275\u0275element(129, "i", 59);
    \u0275\u0275text(130, "Download");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(131, "li")(132, "a", 55);
    \u0275\u0275element(133, "i", 60);
    \u0275\u0275text(134, "More");
    \u0275\u0275elementEnd()()()()()()()()();
    \u0275\u0275elementStart(135, "div", 32)(136, "div", 3)(137, "div", 4)(138, "div", 1)(139, "div", 33)(140, "div", 6)(141, "h4", 34);
    \u0275\u0275text(142, "HTML Code Updated");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(143, "p", 35);
    \u0275\u0275text(144, "HTML Designing Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(145, "span", 36);
    \u0275\u0275text(146, "Updated Version 4.2.10 and Minor issues fixed");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(147, "div", 37)(148, "div", 38);
    \u0275\u0275element(149, "img", 61);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(150, "div", 40)(151, "div", 41)(152, "div", 42)(153, "div", 43)(154, "span", 44);
    \u0275\u0275element(155, "img", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(156, "span", 44);
    \u0275\u0275element(157, "img", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(158, "a", 47);
    \u0275\u0275text(159, " +4 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(160, "div", 21)(161, "div", 62);
    \u0275\u0275element(162, "apx-chart", 63);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(163, "div", 50)(164, "div", 51)(165, "div", 52);
    \u0275\u0275text(166, "High");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(167, "a", 53);
    \u0275\u0275element(168, "i", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(169, "ul", 30)(170, "li")(171, "a", 55);
    \u0275\u0275element(172, "i", 56);
    \u0275\u0275text(173, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(174, "li")(175, "a", 55);
    \u0275\u0275element(176, "i", 57);
    \u0275\u0275text(177, "Add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(178, "li")(179, "a", 55);
    \u0275\u0275element(180, "i", 58);
    \u0275\u0275text(181, "Remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(182, "li")(183, "a", 55);
    \u0275\u0275element(184, "i", 59);
    \u0275\u0275text(185, "Download");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(186, "li")(187, "a", 55);
    \u0275\u0275element(188, "i", 60);
    \u0275\u0275text(189, "More");
    \u0275\u0275elementEnd()()()()()()()()();
    \u0275\u0275elementStart(190, "div", 32)(191, "div", 3)(192, "div", 4)(193, "div", 1)(194, "div", 33)(195, "div", 6)(196, "h4", 34);
    \u0275\u0275text(197, "Angular Issues fixed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(198, "p", 35);
    \u0275\u0275text(199, "Angular Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(200, "span", 36);
    \u0275\u0275text(201, "Old Template Angular Version Updated and Minor issues fixed");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(202, "div", 37)(203, "div", 38);
    \u0275\u0275element(204, "img", 64);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(205, "div", 40)(206, "div", 41)(207, "div", 42)(208, "div", 43)(209, "span", 44);
    \u0275\u0275element(210, "img", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(211, "span", 44);
    \u0275\u0275element(212, "img", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(213, "a", 47);
    \u0275\u0275text(214, " +8 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(215, "div", 21)(216, "div", 65);
    \u0275\u0275element(217, "apx-chart", 63);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(218, "div", 50)(219, "div", 51)(220, "div", 52);
    \u0275\u0275text(221, "High");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(222, "a", 53);
    \u0275\u0275element(223, "i", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(224, "ul", 30)(225, "li")(226, "a", 55);
    \u0275\u0275element(227, "i", 56);
    \u0275\u0275text(228, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(229, "li")(230, "a", 55);
    \u0275\u0275element(231, "i", 57);
    \u0275\u0275text(232, "Add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(233, "li")(234, "a", 55);
    \u0275\u0275element(235, "i", 58);
    \u0275\u0275text(236, "Remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(237, "li")(238, "a", 55);
    \u0275\u0275element(239, "i", 59);
    \u0275\u0275text(240, "Download");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(241, "li")(242, "a", 55);
    \u0275\u0275element(243, "i", 60);
    \u0275\u0275text(244, "More");
    \u0275\u0275elementEnd()()()()()()()()();
    \u0275\u0275elementStart(245, "div", 32)(246, "div", 3)(247, "div", 4)(248, "div", 1)(249, "div", 33)(250, "div", 6)(251, "h4", 34);
    \u0275\u0275text(252, "Responsive Issues fixed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(253, "p", 35);
    \u0275\u0275text(254, "Online Services and Live Chart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(255, "span", 36);
    \u0275\u0275text(256, "Comapny Online Services & 24*7 Support ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(257, "div", 37)(258, "div", 38);
    \u0275\u0275element(259, "img", 66);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(260, "div", 40)(261, "div", 41)(262, "div", 42)(263, "div", 43)(264, "span", 44);
    \u0275\u0275element(265, "img", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(266, "span", 44);
    \u0275\u0275element(267, "img", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(268, "a", 47);
    \u0275\u0275text(269, " +3 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(270, "div", 21)(271, "div", 69);
    \u0275\u0275element(272, "apx-chart", 63);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(273, "div", 50)(274, "div", 51)(275, "div", 52);
    \u0275\u0275text(276, "High");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(277, "a", 53);
    \u0275\u0275element(278, "i", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(279, "ul", 30)(280, "li")(281, "a", 55);
    \u0275\u0275element(282, "i", 56);
    \u0275\u0275text(283, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(284, "li")(285, "a", 55);
    \u0275\u0275element(286, "i", 57);
    \u0275\u0275text(287, "Add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(288, "li")(289, "a", 55);
    \u0275\u0275element(290, "i", 58);
    \u0275\u0275text(291, "Remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(292, "li")(293, "a", 55);
    \u0275\u0275element(294, "i", 59);
    \u0275\u0275text(295, "Download");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(296, "li")(297, "a", 55);
    \u0275\u0275element(298, "i", 60);
    \u0275\u0275text(299, "More");
    \u0275\u0275elementEnd()()()()()()()()()()()()();
    \u0275\u0275elementStart(300, "div", 1)(301, "div", 70)(302, "div", 3)(303, "div", 71)(304, "h4", 23);
    \u0275\u0275text(305, "Statistics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(306, "div", 72)(307, "div", 73)(308, "a", 74);
    \u0275\u0275element(309, "span", 75);
    \u0275\u0275text(310, "On going");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(311, "a", 74);
    \u0275\u0275element(312, "span", 76);
    \u0275\u0275text(313, "Completed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(314, "a", 77);
    \u0275\u0275text(315, " Year ");
    \u0275\u0275element(316, "i", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(317, "ul", 30)(318, "li")(319, "a", 31);
    \u0275\u0275text(320, "Monthly");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(321, "li")(322, "a", 31);
    \u0275\u0275text(323, "Yearly");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(324, "li")(325, "a", 31);
    \u0275\u0275text(326, "Weekly");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(327, "div", 4)(328, "div", 79);
    \u0275\u0275element(329, "apx-chart", 49);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(330, "div", 80)(331, "div", 3)(332, "div", 81)(333, "h4", 23);
    \u0275\u0275text(334, "Milestones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(335, "div", 82)(336, "div", 28)(337, "a", 83);
    \u0275\u0275text(338, " See All ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(339, "ul", 30)(340, "li")(341, "a", 31);
    \u0275\u0275text(342, "Monthly");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(343, "li")(344, "a", 31);
    \u0275\u0275text(345, "Yearly");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(346, "li")(347, "a", 31);
    \u0275\u0275text(348, "Weekly");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(349, "div", 4)(350, "div", 84)(351, "div", 85)(352, "div", 86)(353, "div", 87);
    \u0275\u0275element(354, "i", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(355, "div", 88)(356, "h6", 89);
    \u0275\u0275text(357, "Grocery App Development");
    \u0275\u0275elementEnd();
    \u0275\u0275element(358, "span", 90);
    \u0275\u0275elementStart(359, "span", 91)(360, "span", 92);
    \u0275\u0275text(361, "Deadline:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(362, " To Day 11:00 Am");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(363, "div", 84)(364, "div", 86)(365, "div", 93);
    \u0275\u0275element(366, "i", 94);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(367, "div", 88)(368, "h6", 89);
    \u0275\u0275text(369, "Ui Update");
    \u0275\u0275elementEnd();
    \u0275\u0275element(370, "span", 90);
    \u0275\u0275elementStart(371, "span", 91)(372, "span", 92);
    \u0275\u0275text(373, "Deadline:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(374, " To Day 2:30 Pm");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(375, "div", 84)(376, "div", 86)(377, "div", 95);
    \u0275\u0275element(378, "i", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(379, "div", 88)(380, "h6", 89);
    \u0275\u0275text(381, "Psd Template");
    \u0275\u0275elementEnd();
    \u0275\u0275element(382, "span", 90);
    \u0275\u0275elementStart(383, "span", 91)(384, "span", 92);
    \u0275\u0275text(385, "Deadline:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(386, " Tomorrow 11:00 Am");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(387, "div", 84)(388, "div", 86)(389, "div", 97);
    \u0275\u0275element(390, "i", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(391, "div", 88)(392, "h6", 89);
    \u0275\u0275text(393, "Version Update");
    \u0275\u0275elementEnd();
    \u0275\u0275element(394, "span", 90);
    \u0275\u0275elementStart(395, "span", 91)(396, "span", 92);
    \u0275\u0275text(397, "Deadline:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(398, " 1 Week To Left");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(399, "div", 99)(400, "div", 86)(401, "div", 100);
    \u0275\u0275element(402, "i", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(403, "div", 88)(404, "h6", 89);
    \u0275\u0275text(405, "Mobile App");
    \u0275\u0275elementEnd();
    \u0275\u0275element(406, "span", 90);
    \u0275\u0275elementStart(407, "span", 91)(408, "span", 92);
    \u0275\u0275text(409, "Deadline:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(410, " 3 days To Left");
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275elementStart(411, "div", 1)(412, "div", 102)(413, "div", 103)(414, "div", 81)(415, "h4", 23);
    \u0275\u0275text(416, "In Progress Projects");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(417, "div", 104)(418, "a", 105);
    \u0275\u0275element(419, "span", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(420, "ul", 30)(421, "li", 107)(422, "a", 108);
    \u0275\u0275element(423, "i", 56);
    \u0275\u0275text(424, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(425, "li", 107)(426, "a", 108);
    \u0275\u0275element(427, "i", 57);
    \u0275\u0275text(428, "Add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(429, "li", 107)(430, "a", 108);
    \u0275\u0275element(431, "i", 58);
    \u0275\u0275text(432, "Remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(433, "li", 107)(434, "a", 108);
    \u0275\u0275element(435, "i", 59);
    \u0275\u0275text(436, "Download");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(437, "li", 107)(438, "a", 108);
    \u0275\u0275element(439, "i", 60);
    \u0275\u0275text(440, "More");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(441, "div", 109)(442, "div", 110)(443, "a", 111)(444, "div", 86)(445, "div", 112);
    \u0275\u0275element(446, "img", 113);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(447, "div", 114)(448, "h6", 89);
    \u0275\u0275text(449, "Mobile App");
    \u0275\u0275elementEnd();
    \u0275\u0275element(450, "span", 90);
    \u0275\u0275elementStart(451, "span", 91);
    \u0275\u0275text(452, "html upload New file to server");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(453, "div", 115)(454, "span", 91)(455, "span", 92);
    \u0275\u0275text(456, "Deadline:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(457, " To Day 11:00 Am");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(458, "div", 116)(459, "p", 117);
    \u0275\u0275text(460, "Just Now");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(461, "div", 118)(462, "div", 21)(463, "div", 119);
    \u0275\u0275element(464, "apx-chart", 63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(465, "div", 43)(466, "span", 44);
    \u0275\u0275element(467, "img", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(468, "span", 44);
    \u0275\u0275element(469, "img", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(470, "span", 44);
    \u0275\u0275element(471, "img", 120);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(472, "span", 44);
    \u0275\u0275element(473, "img", 67);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(474, "div", 110)(475, "a", 111)(476, "div", 86)(477, "div", 112);
    \u0275\u0275element(478, "img", 121);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(479, "div", 114)(480, "h6", 89);
    \u0275\u0275text(481, "Web Department");
    \u0275\u0275elementEnd();
    \u0275\u0275element(482, "span", 90);
    \u0275\u0275elementStart(483, "span", 91);
    \u0275\u0275text(484, "Theme Design And Styles Updated");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(485, "div", 115)(486, "span", 91)(487, "span", 92);
    \u0275\u0275text(488, "Deadline:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(489, " Tomorrow 11:00 Am");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(490, "div", 116)(491, "p", 117);
    \u0275\u0275text(492, "10 Mins ago");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(493, "div", 118)(494, "div", 21)(495, "div", 122);
    \u0275\u0275element(496, "apx-chart", 63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(497, "div", 43)(498, "span", 44);
    \u0275\u0275element(499, "img", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(500, "span", 44);
    \u0275\u0275element(501, "img", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(502, "span", 44);
    \u0275\u0275element(503, "img", 120);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(504, "span", 44);
    \u0275\u0275element(505, "img", 67);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(506, "div", 123)(507, "a", 111)(508, "div", 86)(509, "div", 112);
    \u0275\u0275element(510, "img", 124);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(511, "div", 114)(512, "h6", 89);
    \u0275\u0275text(513, "Development Department");
    \u0275\u0275elementEnd();
    \u0275\u0275element(514, "span", 90);
    \u0275\u0275elementStart(515, "span", 91);
    \u0275\u0275text(516, "Updated Version 4.2.10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(517, "div", 115)(518, "span", 91)(519, "span", 92);
    \u0275\u0275text(520, "Deadline:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(521, " 3 days To Left");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(522, "div", 116)(523, "p", 117);
    \u0275\u0275text(524, "12 Mins ago");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(525, "div", 118)(526, "div", 21)(527, "div", 125);
    \u0275\u0275element(528, "apx-chart", 63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(529, "div", 43)(530, "span", 44);
    \u0275\u0275element(531, "img", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(532, "span", 44);
    \u0275\u0275element(533, "img", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(534, "span", 44);
    \u0275\u0275element(535, "img", 120);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(536, "span", 44);
    \u0275\u0275element(537, "img", 67);
    \u0275\u0275elementEnd()()()()()()()()();
    \u0275\u0275elementStart(538, "div", 126)(539, "div", 3)(540, "div", 81)(541, "h4", 23);
    \u0275\u0275text(542, "Activity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(543, "div", 72)(544, "div", 28)(545, "a", 83);
    \u0275\u0275text(546, " See All");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(547, "ul", 30)(548, "li", 107)(549, "a", 108);
    \u0275\u0275text(550, "Monthly");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(551, "li", 107)(552, "a", 108);
    \u0275\u0275text(553, "Yearly");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(554, "li", 107)(555, "a", 108);
    \u0275\u0275text(556, "Weekly");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(557, "div", 4)(558, "div", 84)(559, "div", 127)(560, "div", 86)(561, "span", 128);
    \u0275\u0275element(562, "img", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(563, "div", 114)(564, "h6", 89);
    \u0275\u0275text(565, "Faith Harrits ");
    \u0275\u0275elementStart(566, "span", 129);
    \u0275\u0275text(567, "Completed Project");
    \u0275\u0275elementEnd();
    \u0275\u0275text(568, " Ui Development ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(569, "span", 90);
    \u0275\u0275elementStart(570, "span", 91);
    \u0275\u0275text(571, "Just Now");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(572, "div", 84)(573, "div", 127)(574, "div", 86)(575, "span", 128);
    \u0275\u0275element(576, "img", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(577, "div", 114)(578, "h6", 89);
    \u0275\u0275text(579, "James Paige ");
    \u0275\u0275elementStart(580, "span", 129);
    \u0275\u0275text(581, "Update");
    \u0275\u0275elementEnd();
    \u0275\u0275text(582, " new Version ");
    \u0275\u0275elementStart(583, "span", 129);
    \u0275\u0275text(584, "angular 10.4....");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(585, "span", 90);
    \u0275\u0275elementStart(586, "span", 91);
    \u0275\u0275text(587, "10 Mins ago");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(588, "div", 84)(589, "div", 127)(590, "div", 86)(591, "span", 130);
    \u0275\u0275text(592, "L");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(593, "div", 114)(594, "h6", 89);
    \u0275\u0275text(595, "Liam Miller ");
    \u0275\u0275elementStart(596, "span", 129);
    \u0275\u0275text(597, "Attach design file New Update....");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(598, "span", 90);
    \u0275\u0275elementStart(599, "span", 91);
    \u0275\u0275text(600, " 1 Hour Ago");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(601, "div", 99)(602, "div", 127)(603, "div", 86)(604, "span", 128);
    \u0275\u0275element(605, "img", 131);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(606, "div", 114)(607, "h6", 89);
    \u0275\u0275text(608, "Kimberly Berry ");
    \u0275\u0275elementStart(609, "span", 129);
    \u0275\u0275text(610, "Submitted new Design approval.....");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(611, "span", 90);
    \u0275\u0275elementStart(612, "span", 91);
    \u0275\u0275text(613, "3 Hours Ago");
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275elementStart(614, "div", 80)(615, "div", 132)(616, "div", 133)(617, "h4", 23);
    \u0275\u0275text(618, "Employee Gender");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(619, "div", 4)(620, "div", 134);
    \u0275\u0275element(621, "apx-chart", 135);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(622, "div", 1)(623, "div", 136)(624, "div", 103)(625, "div", 137)(626, "h4", 23);
    \u0275\u0275text(627, "Project Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(628, "div", 82)(629, "div", 28)(630, "a", 83);
    \u0275\u0275text(631, " View All");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(632, "ul", 30)(633, "li")(634, "a", 31);
    \u0275\u0275text(635, "Monthly");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(636, "li")(637, "a", 31);
    \u0275\u0275text(638, "Yearly");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(639, "li")(640, "a", 31);
    \u0275\u0275text(641, "Weekly");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(642, "div", 138)(643, "div", 139)(644, "table", 140)(645, "thead")(646, "tr")(647, "th", 21);
    \u0275\u0275text(648, "Project");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(649, "th", 21);
    \u0275\u0275text(650, "Team");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(651, "th", 21);
    \u0275\u0275text(652, "Start Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(653, "th", 141);
    \u0275\u0275text(654, "Due Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(655, "th", 21);
    \u0275\u0275text(656, "Work Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(657, "th", 142);
    \u0275\u0275elementStart(658, "th", 143);
    \u0275\u0275text(659, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(660, "th", 143);
    \u0275\u0275text(661, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(662, "tbody")(663, "tr")(664, "td")(665, "a", 144);
    \u0275\u0275text(666, "Mobile Application");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(667, "td")(668, "div", 43)(669, "span", 44);
    \u0275\u0275element(670, "img", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(671, "span", 44);
    \u0275\u0275element(672, "img", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(673, "span", 44);
    \u0275\u0275element(674, "img", 120);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(675, "span", 44);
    \u0275\u0275element(676, "img", 67);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(677, "td");
    \u0275\u0275text(678, "14 Jan 2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(679, "td");
    \u0275\u0275text(680, "16 Jan 2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(681, "td")(682, "div", 145);
    \u0275\u0275element(683, "div", 146);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(684, "td")(685, "span", 147);
    \u0275\u0275text(686, "57%");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(687, "td")(688, "span", 148);
    \u0275\u0275text(689, "Active");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(690, "td")(691, "div", 149)(692, "a", 150);
    \u0275\u0275element(693, "i", 151);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(694, "a", 152);
    \u0275\u0275element(695, "i", 153);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(696, "tr")(697, "td")(698, "a", 144);
    \u0275\u0275text(699, "Development");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(700, "td")(701, "div", 43)(702, "span", 44);
    \u0275\u0275element(703, "img", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(704, "span", 44);
    \u0275\u0275element(705, "img", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(706, "span", 44);
    \u0275\u0275element(707, "img", 120);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(708, "span", 44);
    \u0275\u0275element(709, "img", 67);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(710, "td");
    \u0275\u0275text(711, "14 Jan 2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(712, "td");
    \u0275\u0275text(713, "18 Jan 2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(714, "td")(715, "div", 145);
    \u0275\u0275element(716, "div", 154);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(717, "td")(718, "span", 147);
    \u0275\u0275text(719, "34%");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(720, "td")(721, "span", 148);
    \u0275\u0275text(722, "Active");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(723, "td")(724, "div", 149)(725, "a", 150);
    \u0275\u0275element(726, "i", 151);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(727, "a", 152);
    \u0275\u0275element(728, "i", 153);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(729, "tr")(730, "td")(731, "a", 144);
    \u0275\u0275text(732, "Version Update");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(733, "td")(734, "div", 43)(735, "span", 44);
    \u0275\u0275element(736, "img", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(737, "span", 44);
    \u0275\u0275element(738, "img", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(739, "span", 44);
    \u0275\u0275element(740, "img", 120);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(741, "span", 44);
    \u0275\u0275element(742, "img", 67);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(743, "td");
    \u0275\u0275text(744, "14 Jan 2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(745, "td");
    \u0275\u0275text(746, "16 Jan 2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(747, "td")(748, "div", 145);
    \u0275\u0275element(749, "div", 155);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(750, "td")(751, "span", 156);
    \u0275\u0275text(752, "100%");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(753, "td")(754, "span", 148);
    \u0275\u0275text(755, "Done");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(756, "td")(757, "div", 149)(758, "a", 150);
    \u0275\u0275element(759, "i", 151);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(760, "a", 152);
    \u0275\u0275element(761, "i", 153);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(762, "tr")(763, "td")(764, "a", 144);
    \u0275\u0275text(765, "Psd Template");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(766, "td")(767, "div", 43)(768, "span", 44);
    \u0275\u0275element(769, "img", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(770, "span", 44);
    \u0275\u0275element(771, "img", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(772, "span", 44);
    \u0275\u0275element(773, "img", 120);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(774, "span", 44);
    \u0275\u0275element(775, "img", 67);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(776, "td");
    \u0275\u0275text(777, "13 Jan 2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(778, "td");
    \u0275\u0275text(779, "22 Jan 2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(780, "td")(781, "div", 145);
    \u0275\u0275element(782, "div", 157);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(783, "td")(784, "span", 158);
    \u0275\u0275text(785, "50%");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(786, "td")(787, "span", 148);
    \u0275\u0275text(788, "Pending");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(789, "td")(790, "div", 149)(791, "a", 150);
    \u0275\u0275element(792, "i", 151);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(793, "a", 152);
    \u0275\u0275element(794, "i", 153);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(795, "tr")(796, "td")(797, "a", 144);
    \u0275\u0275text(798, "Development");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(799, "td")(800, "div", 43)(801, "span", 44);
    \u0275\u0275element(802, "img", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(803, "span", 44);
    \u0275\u0275element(804, "img", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(805, "span", 44);
    \u0275\u0275element(806, "img", 120);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(807, "span", 44);
    \u0275\u0275element(808, "img", 67);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(809, "td");
    \u0275\u0275text(810, "14 Jan 2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(811, "td");
    \u0275\u0275text(812, "18 Jan 2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(813, "td")(814, "div", 145);
    \u0275\u0275element(815, "div", 154);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(816, "td")(817, "span", 147);
    \u0275\u0275text(818, "34%");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(819, "td")(820, "span", 148);
    \u0275\u0275text(821, "Active");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(822, "td")(823, "div", 149)(824, "a", 150);
    \u0275\u0275element(825, "i", 151);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(826, "a", 152);
    \u0275\u0275element(827, "i", 153);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(828, "tr")(829, "td")(830, "a", 144);
    \u0275\u0275text(831, "Development");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(832, "td")(833, "div", 43)(834, "span", 44);
    \u0275\u0275element(835, "img", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(836, "span", 44);
    \u0275\u0275element(837, "img", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(838, "span", 44);
    \u0275\u0275element(839, "img", 120);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(840, "span", 44);
    \u0275\u0275element(841, "img", 67);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(842, "td");
    \u0275\u0275text(843, "12 Jan 2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(844, "td");
    \u0275\u0275text(845, "18 Jan 2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(846, "td")(847, "div", 145);
    \u0275\u0275element(848, "div", 159);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(849, "td")(850, "span", 160);
    \u0275\u0275text(851, "82%");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(852, "td")(853, "span", 148);
    \u0275\u0275text(854, "Hold");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(855, "td")(856, "div", 149)(857, "a", 150);
    \u0275\u0275element(858, "i", 151);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(859, "a", 152);
    \u0275\u0275element(860, "i", 153);
    \u0275\u0275elementEnd()()()()()()()()()();
    \u0275\u0275elementStart(861, "div", 161)(862, "div", 3)(863, "div", 137)(864, "h4", 23);
    \u0275\u0275text(865, "Calendar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(866, "div", 162)(867, "div", 79);
    \u0275\u0275element(868, "full-calendar", 163);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("title", "Project")("title3", "Project")("title2", "Dashboard");
    \u0275\u0275advance(107);
    \u0275\u0275property("series", ctx.optionsCircle.series)("chart", ctx.optionsCircle.chart)("colors", ctx.optionsCircle.colors)("stroke", ctx.optionsCircle.stroke)("states", ctx.optionsCircle.states)("plotOptions", ctx.optionsCircle.plotOptions)("grid", ctx.optionsCircle.grid)("labels", ctx.optionsCircle.labels);
    \u0275\u0275advance(55);
    \u0275\u0275property("series", ctx.optionsCircle1.series)("chart", ctx.optionsCircle1.chart)("colors", ctx.optionsCircle1.colors)("stroke", ctx.optionsCircle1.stroke)("states", ctx.optionsCircle1.states)("plotOptions", ctx.optionsCircle1.plotOptions)("grid", ctx.optionsCircle1.grid);
    \u0275\u0275advance(55);
    \u0275\u0275property("series", ctx.optionsCircle2.series)("chart", ctx.optionsCircle2.chart)("colors", ctx.optionsCircle2.colors)("stroke", ctx.optionsCircle2.stroke)("states", ctx.optionsCircle2.states)("plotOptions", ctx.optionsCircle2.plotOptions)("grid", ctx.optionsCircle2.grid);
    \u0275\u0275advance(55);
    \u0275\u0275property("series", ctx.optionsCircle3.series)("chart", ctx.optionsCircle3.chart)("colors", ctx.optionsCircle3.colors)("stroke", ctx.optionsCircle3.stroke)("states", ctx.optionsCircle3.states)("plotOptions", ctx.optionsCircle3.plotOptions)("grid", ctx.optionsCircle3.grid);
    \u0275\u0275advance(57);
    \u0275\u0275property("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("colors", ctx.chartOptions.colors)("stroke", ctx.chartOptions.stroke)("states", ctx.chartOptions.states)("plotOptions", ctx.chartOptions.plotOptions)("grid", ctx.chartOptions.grid)("labels", ctx.chartOptions.labels);
    \u0275\u0275advance(135);
    \u0275\u0275property("series", ctx.optionsCircle4.series)("chart", ctx.optionsCircle4.chart)("colors", ctx.optionsCircle4.colors)("stroke", ctx.optionsCircle4.stroke)("states", ctx.optionsCircle4.states)("plotOptions", ctx.optionsCircle4.plotOptions)("grid", ctx.optionsCircle4.grid);
    \u0275\u0275advance(32);
    \u0275\u0275property("series", ctx.optionsCircle.series)("chart", ctx.optionsCircle.chart)("colors", ctx.optionsCircle1.colors)("stroke", ctx.optionsCircle.stroke)("states", ctx.optionsCircle.states)("plotOptions", ctx.optionsCircle.plotOptions)("grid", ctx.optionsCircle.grid);
    \u0275\u0275advance(32);
    \u0275\u0275property("series", ctx.optionsCircle.series)("chart", ctx.optionsCircle.chart)("colors", ctx.optionsCircle1.colors)("stroke", ctx.optionsCircle.stroke)("states", ctx.optionsCircle.states)("plotOptions", ctx.optionsCircle.plotOptions)("grid", ctx.optionsCircle.grid);
    \u0275\u0275advance(93);
    \u0275\u0275property("series", ctx.chartOptions1.series)("chart", ctx.chartOptions1.chart)("colors", ctx.chartOptions1.colors)("stroke", ctx.chartOptions1.stroke)("legend", ctx.chartOptions1.legend)("plotOptions", ctx.chartOptions1.plotOptions)("labels", ctx.chartOptions1.labels)("markers", ctx.chartOptions1.markers)("dataLabels", ctx.chartOptions1.dataLabels);
    \u0275\u0275advance(247);
    \u0275\u0275property("options", ctx.calendarOptions);
  }
}, dependencies: [SharedModule, TaskDashboardPageHeaderComponent, FullCalendarModule, FullCalendarComponent, NgSelectModule, NgApexchartsModule, ChartComponent, NgbModule, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, NgbTooltip, RouterModule, RouterLink] });
var DashboardComponent = _DashboardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent" });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=dashboard.component-4WTW4V2R.js.map
