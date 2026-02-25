import {
  plugin
} from "./chunk-QMVZNF3C.js";
import "./chunk-AZV4IVWW.js";
import {
  ChartComponent,
  NgApexchartsModule
} from "./chunk-BFCIYJJG.js";
import {
  PageHeaderComponent,
  SharedModule
} from "./chunk-UEAXMXBR.js";
import "./chunk-26H6NGLN.js";
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
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/super-admin/dashboard/superAdminDashboard.ts
var CompaniesSummaryData = [
  { id: 1, name: "Abcd Pvt Ltd", img: "./assets/images/files/company/img1.png", description: "", caption: "12-01-2021", email: "julia@gmail.com", status: "success", statusText: "Active" },
  { id: 2, name: "Croport Pvt Ltd", img: "./assets/images/files/company/img2.png", description: "", caption: "05-02-2021", email: "daine@gmail.com", status: "success", statusText: "Active" },
  { id: 3, name: "kolit Pvt Ltd", img: "./assets/images/files/company/img4.png", description: "", caption: "21-01-2021", email: "gabrielle@gmail.com", status: "success", statusText: "Active" },
  { id: 4, name: "Movck Pvt Ltd", img: "./assets/images/files/company/img5.png", description: "", caption: "16-11-2020", email: "ryan@gmail.com", status: "success", statusText: "Active" },
  { id: 5, name: "Loki Pvt Ltd", img: "./assets/images/files/company/img6.png", description: "", caption: "25-06-2021", email: "lisa@gmail.com", status: "success", statusText: "Active" }
];
var InactiveCompaniesData = [
  { id: 1, name: "Kloki Pvt Ltd", img: "./assets/images/files/company/img6.png", description: "", caption: "21-08-2021", email: "james@gmail.com", status: "danger", statusText: "Inactive" },
  { id: 2, name: "frecho Pvt Ltd", img: "./assets/images/files/company/img7.png", description: "", caption: "16-02-2021", email: "pippa@gmail.com", status: "danger", statusText: "Active" },
  { id: 3, name: "Mooke Pvt Ltd", img: "./assets/images/files/company/img8.png", description: "", caption: "21-05-2021", email: "samgray@gmail.com", status: "danger", statusText: "Active" },
  { id: 4, name: "Foklali Pvt Ltd", img: "./assets/images/files/company/img2.png", description: "", caption: "21-08-2020", email: "samgray@gmail.com", status: "danger", statusText: "Active" },
  { id: 5, name: "Gomalik Pvt Ltd", img: "./assets/images/files/company/img5.png", description: "", caption: "25-06-2020", email: "lisa@gmail.com", status: "danger", statusText: "Active" }
];

// src/app/componets/dashbord/super-admin/dashboard/superAdminChatCData.ts
var barChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }
  },
  // We use these empty structures as placeholders for dynamic theming.
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        display: true,
        color: "rgba(142, 156, 173,0.1)"
      },
      ticks: {
        color: "#8492a6"
      }
    },
    x: {
      stacked: false,
      ticks: {
        color: "#8492a6"
      },
      grid: {
        color: "rgba(142, 156, 173,0.1)",
        display: false
      }
    }
  },
  plugins: {
    legend: {
      display: false
    },
    datalabels: {
      display: false
    }
  }
};
var barChartType = "bar";
var barChartPlugins = [
  plugin
];
var barChartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Income",
      categoryPercentage: 0.4,
      barPercentage: 0.8,
      data: [20, 17, 27, 23, 17, 19, 23, 17, 13, 28, 22, 27],
      borderWidth: 2,
      backgroundColor: "#dbe2fc",
      hoverBackgroundColor: "#dbe2fc",
      hoverBorderColor: "#dbe2fc",
      borderColor: "#dbe2fc",
      borderRadius: 50
    },
    {
      label: "Expense",
      categoryPercentage: 0.4,
      barPercentage: 0.8,
      data: [28, 22, 21, 18, 13, 22, 24, 18, 16, 21, 18, 24],
      borderWidth: 3,
      backgroundColor: "#3366ff",
      hoverBackgroundColor: "#3366ff",
      hoverBorderColor: "#3366ff",
      borderColor: "#3366ff",
      borderRadius: 50
    }
  ]
};

// src/app/componets/dashbord/super-admin/dashboard/dashboard.component.ts
var _DashboardComponent = class _DashboardComponent {
  constructor() {
    this.barChartOptions = barChartOptions;
    this.barChartData = barChartData;
    this.barChartType = barChartType;
    this.barChartPlugins = barChartPlugins;
    this.chartOptions = {
      series: [{
        name: "Profit Earned",
        data: [44, 42, 57, 86, 58, 55, 70, 44, 42, 57, 86, 58]
      }, {
        name: "Total Sales",
        data: [40, 38, 47, 86, 51, 55, 65, 39, 32, 47, 76, 41]
      }],
      chart: {
        type: "bar",
        height: 310,
        toolbar: {
          show: false
        }
      },
      grid: {
        borderColor: "#f1f1f1",
        strokeDashArray: 3
      },
      colors: ["#e4e7ed", "rgb(51, 102, 255)"],
      plotOptions: {
        bar: {
          colors: {
            ranges: [{
              from: -100,
              to: -46,
              color: "#ebeff5"
            }, {
              from: -45,
              to: 0,
              color: "#ebeff5"
            }]
          },
          columnWidth: "40%",
          borderRadius: 6
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: void 0
      },
      legend: {
        show: false,
        position: "top"
      },
      yaxis: {
        title: {
          style: {
            color: "#adb5be",
            fontSize: "13px",
            fontFamily: "poppins, sans-serif",
            fontWeight: 600,
            cssClass: "apexcharts-yaxis-label"
          }
        },
        labels: {
          formatter: function(y) {
            return y.toFixed(0) + "";
          }
        }
      },
      xaxis: {
        type: "week",
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        axisBorder: {
          show: true,
          color: "rgba(119, 119, 142, 0.05)",
          offsetX: 0,
          offsetY: 0
        },
        axisTicks: {
          show: true,
          borderType: "solid",
          color: "rgba(119, 119, 142, 0.05)",
          width: 6,
          offsetX: 0,
          offsetY: 0
        },
        labels: {
          rotate: -90
        }
      }
    };
    this.CompaniesSummeryList = CompaniesSummaryData;
    this.InactiveCompaniesList = InactiveCompaniesData;
  }
  ngOnInit() {
  }
  removeCompaniesSummery(item) {
    this.CompaniesSummeryList.map((el, ind) => {
      if (el.id === item) {
        this.CompaniesSummeryList.splice(ind, 1);
      }
    });
  }
  removeInactiveCompanies(item) {
    this.InactiveCompaniesList.map((el, ind) => {
      if (el.id === item) {
        this.InactiveCompaniesList.splice(ind, 1);
      }
    });
  }
};
_DashboardComponent.\u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DashboardComponent)();
};
_DashboardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 800, vars: 13, consts: [[3, "title"], [1, "row"], [1, "col-xl-3", "col-lg-6", "col-md-6"], [1, "card"], [1, "card-body"], [1, "col-8"], [1, "mt-0", "text-start"], [1, "fw-semibold"], [1, "mb-0", "mt-1", "text-success", "mb-2"], [1, "col-4"], [1, "icon1", "bg-success", "my-auto", "float-end"], [1, "las", "la-city"], [1, "mb-0", "mt-1", "text-secondary", "mb-2"], [1, "icon1", "bg-secondary", "my-auto", "float-end"], [1, "las", "la-hand-holding-usd"], [1, "mb-0", "mt-1", "text-primary", "mb-2"], [1, "icon1", "bg-primary", "my-auto", "float-end"], [1, "las", "la-building"], [1, "mb-0", "mt-1", "text-danger", "mb-2"], [1, "icon1", "bg-danger", "my-auto", "float-end"], [1, "las", "la-cubes"], [1, "col-xxl-9", "col-xl-8", "col-md-12", "col-lg-12"], [1, "card", "custom-card"], [1, "card-header", "justify-content-between"], [1, "card-title"], [1, "card-options"], ["ngbDropdown", "", 1, "btn-list"], ["href", "javascript:void(0);", 1, "btn", "ripple", "btn-outline-light", "text-dark", "float-start", "d-flex", "my-1"], [1, "dot-label", "bg-primary", "bg-opacity-20", "me-2", "my-auto"], [1, "dot-label", "bg-primary", "me-2", "my-auto"], ["href", "javascript:void(0);", "ngbDropdownToggle", "", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "ripple", "btn-outline-light", "my-1", "no-caret"], [1, "fe", "fe-chevron-down"], ["ngbDropdownMenu", "", "role", "menu", 1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript:void(0);", "ngbDropdownItem", "", 1, "dropdown-item"], [1, "card-body", "px-0"], [1, "chart-wrapper"], ["id", "chartline1", 1, ""], [3, "series", "chart", "legend", "xaxis", "colors", "markers", "stroke", "plotOptions", "dataLabels", "grid", "labels", "yaxis"], [1, "col-xxl-3", "col-xl-4", "col-lg-12", "col-md-12"], [1, "card-header", "border-0"], [1, "mb-4"], [1, "d-flex", "flex-wrap"], [1, "avatar", "avatar-lg", "bg-light", "me-2"], ["src", "./assets/images/media/files/company/img1.png", "alt", "img"], [1, "mt-1"], ["href", "javascript:void(0);", 1, "mb-1", "fs-16", "h5"], [1, "clearfix"], [1, "fs-13", "text-muted"], [1, "ms-auto", "mt-2"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-light", "boxed-btn-disable"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-light", "text-muted", "boxed-btn-enable"], [1, "fe", "fe-more-horizontal"], ["src", "./assets/images/media/files/company/img2.png", "alt", "img"], [1, "mt-2"], ["src", "./assets/images/media/files/company/img3.png", "alt", "img"], ["src", "./assets/images/media/files/company/img4.png", "alt", "img"], [1, "mb-0"], [1, "avatar", "avatar-lg", "bg-light", "me-2", "avatar-rounded"], ["src", "./assets/images/media/files/company/img5.png", "alt", "img"], [1, "col-xxl-4", "col-xl-6", "col-lg-12", "col-md-12"], [1, "card-header", "d-flex", "justify-content-between", "border-bottom-0"], [1, "card-options", "pe-3"], ["ngbDropdown", "", 1, "dropdown"], ["href", "javascript:void(0);", "ngbDropdownToggle", "", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "ripple", "btn-outline-light", "dropdown-toggle"], [1, "list-group-item", "d-flex", "p-0", "align-items-center", "border-0"], [1, "d-flex"], [1, "avatar", "avatar-lg", "me-2", "flex-shrink-0"], ["src", "./assets/images/users/2.jpg", "alt", "img"], [1, "mb-1", "fw-semibold", "fs-16"], [1, "font-weight-normal", "text-muted"], [1, "fs-14", "text-muted"], ["src", "./assets/images/users/4.jpg", "alt", "img"], [1, "avatar", "avatar-lg", "bradius", "me-2", "bg-primary-transparent", "flex-shrink-0"], ["src", "./assets/images/users/13.jpg", "alt", "img"], ["src", "./assets/images/users/15.jpg", "alt", "img"], [1, "col-xxl-8", "col-xl-6", "col-lg-12", "col-md-12"], [1, "card", "custom-card", "overflow-hidden"], [1, "card-options", "pr-3"], ["ngbDropdownToggle", "", "data-bs-toggle", "dropdown", "role", "button", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-outline-light", "dropdown-toggle"], [1, "fe", "fe-eye", "me-2"], [1, "fe", "fe-plus-circle", "me-2"], [1, "fe", "fe-trash-2", "me-2"], [1, "fe", "fe-download-cloud", "me-2"], [1, "fe", "fe-settings", "me-2"], [1, "card-body", "p-0", "pt-2"], [1, "table-responsive"], [1, "table", "table-vcenter", "text-nowrap", "mb-0", "invoice-table"], [1, "border-bottom-0"], [1, "border-bottom"], [1, "avatar", "avatar-md", "bradius", "fs-20", "bg-success-transparent", "text-success"], [1, "fe", "fe-check"], [1, "ms-3", "d-block", "mt-0", "mt-sm-1"], [1, "mb-0", "fs-14", "fw-semibold"], [1, "text-muted", "fs-11"], [1, "text-start"], [1, "text-start", "fs-13"], [1, "badge", "bg-success-transparent"], ["ngbDropdown", "", 1, "d-flex"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "View Invoice", 1, "action-btns1"], [1, "fe", "fe-file-text", "primary", "text-primary"], ["ngbDropdownToggle", "", "href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "action-btns1", "no-caret"], [1, "fe", "fe-more-vertical", "text-primary"], [1, "avatar", "avatar-md", "bradius", "fs-20", "bg-orange-transparent", "text-orange"], [1, "fe", "fe-chevron-up"], [1, "badge", "bg-orange-transparent"], [1, "avatar", "avatar-md", "bradius", "fs-20", "bg-warning-transparent", "text-warning"], [1, "fe", "fe-chevron-left"], [1, "badge", "bg-warning-transparent"], [1, ""], [1, "avatar", "avatar-md", "bradius", "fs-20", "bg-secondary-transparent", "text-secondary"], [1, "badge", "bg-secondary-transparent"], [1, "col-xl-7", "col-md-12", "col-lg-12"], [1, "card-header", "justify-content-between", "border-0"], [1, "card-options", "me-1"], ["href", "javascript:void(0);", 1, "btn", "ripple", "btn-outline-light"], [1, "card-body", "p-0"], [1, "table-responsive", "mb-0", "table-regcompany"], ["id", "admin-regtable", 1, "table", "table-vcenter", "text-nowrap", "mb-0", "custom-table"], ["href", "javascript:void(0);", 1, "d-flex"], [1, "avatar", "avatar-lg", "me-2"], [1, "me-3", "mt-0", "mt-sm-2", "d-block"], [1, "mb-1", "fs-14"], [1, "text-muted", "mb-0", "fs-12"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "View", 1, "action-btns1"], [1, "fe", "fe-eye", "text-primary"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Edit", 1, "action-btns1"], [1, "fe", "fe-edit-2", "text-success"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Delete", 1, "action-btns1"], [1, "fe", "fe-trash-2", "text-danger"], ["src", "./assets/images/media/files/company/img6.png", "alt", "img"], [1, "col-xl-5", "col-md-12", "col-lg-12"], ["id", "admin-inregtable", 1, "table", "table-vcenter", "text-nowrap", "border-top", "mb-0"], ["href", "javascript:void(0);", 1, "fs-13"], [1, "badge", "badge-md", "bg-danger-transparent", "fs-10"], ["src", "./assets/images/media/files/company/img7.png", "alt", "img"], ["src", "./assets/images/media/files/company/img8.png", "alt", "img"]], template: function DashboardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-page-header", 0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 1)(6, "div", 5)(7, "div", 6)(8, "span", 7);
    \u0275\u0275text(9, "Total Companies");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h3", 8);
    \u0275\u0275text(11, "6,578");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 9)(13, "div", 10);
    \u0275\u0275element(14, "i", 11);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(15, "div", 2)(16, "div", 3)(17, "div", 4)(18, "div", 1)(19, "div", 5)(20, "div", 6)(21, "span", 7);
    \u0275\u0275text(22, "Total Income");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "h3", 12);
    \u0275\u0275text(24, "$82,7853");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 9)(26, "div", 13);
    \u0275\u0275element(27, "i", 14);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(28, "div", 2)(29, "div", 3)(30, "div", 4)(31, "div", 1)(32, "div", 5)(33, "div", 6)(34, "span", 7);
    \u0275\u0275text(35, "Monthly Active Companies");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "h3", 15);
    \u0275\u0275text(37, "124");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 9)(39, "div", 16);
    \u0275\u0275element(40, "i", 17);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(41, "div", 2)(42, "div", 3)(43, "div", 4)(44, "div", 1)(45, "div", 5)(46, "div", 6)(47, "span", 7);
    \u0275\u0275text(48, "Total Packages");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "h3", 18);
    \u0275\u0275text(50, "7");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 9)(52, "div", 19);
    \u0275\u0275element(53, "i", 20);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(54, "div", 1)(55, "div", 21)(56, "div", 22)(57, "div", 23)(58, "h4", 24);
    \u0275\u0275text(59, "Earnings Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 25)(61, "div", 26)(62, "a", 27);
    \u0275\u0275element(63, "span", 28);
    \u0275\u0275text(64, "Income");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "a", 27);
    \u0275\u0275element(66, "span", 29);
    \u0275\u0275text(67, "Expenses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "a", 30);
    \u0275\u0275text(69, " Yearly ");
    \u0275\u0275element(70, "i", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "ul", 32)(72, "li")(73, "a", 33);
    \u0275\u0275text(74, "Yearly");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "li")(76, "a", 33);
    \u0275\u0275text(77, "Monthly");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "li")(79, "a", 33);
    \u0275\u0275text(80, "Weekly");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(81, "div", 34)(82, "div", 35)(83, "div", 36);
    \u0275\u0275element(84, "apx-chart", 37);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(85, "div", 38)(86, "div", 22)(87, "div", 39)(88, "h4", 24);
    \u0275\u0275text(89, "Recent Subscription");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "div", 4)(91, "div", 40)(92, "div", 41)(93, "span", 42);
    \u0275\u0275element(94, "img", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "div", 44)(96, "a", 45);
    \u0275\u0275text(97, "Abcd Pvt Ltd");
    \u0275\u0275elementEnd();
    \u0275\u0275element(98, "span", 46);
    \u0275\u0275elementStart(99, "span", 47);
    \u0275\u0275text(100, "2 Packages");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(101, "div", 48)(102, "a", 49);
    \u0275\u0275text(103, "View More");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "a", 50);
    \u0275\u0275element(105, "i", 51);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(106, "div", 40)(107, "div", 41)(108, "span", 42);
    \u0275\u0275element(109, "img", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "div", 53)(111, "a", 45);
    \u0275\u0275text(112, "Coport Pvt Ltd");
    \u0275\u0275elementEnd();
    \u0275\u0275element(113, "span", 46);
    \u0275\u0275elementStart(114, "span", 47);
    \u0275\u0275text(115, "1 Package");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(116, "div", 48)(117, "a", 49);
    \u0275\u0275text(118, "View More");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "a", 50);
    \u0275\u0275element(120, "i", 51);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(121, "div", 40)(122, "div", 41)(123, "span", 42);
    \u0275\u0275element(124, "img", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(125, "div", 53)(126, "a", 45);
    \u0275\u0275text(127, "frecho Pvt Ltd");
    \u0275\u0275elementEnd();
    \u0275\u0275element(128, "span", 46);
    \u0275\u0275elementStart(129, "span", 47);
    \u0275\u0275text(130, "2 Packages");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(131, "div", 48)(132, "a", 49);
    \u0275\u0275text(133, "View More");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(134, "a", 50);
    \u0275\u0275element(135, "i", 51);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(136, "div", 40)(137, "div", 41)(138, "span", 42);
    \u0275\u0275element(139, "img", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(140, "div", 53)(141, "a", 45);
    \u0275\u0275text(142, "kolit Pvt Ltd");
    \u0275\u0275elementEnd();
    \u0275\u0275element(143, "span", 46);
    \u0275\u0275elementStart(144, "span", 47);
    \u0275\u0275text(145, "1 Package");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(146, "div", 48)(147, "a", 49);
    \u0275\u0275text(148, "View More");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(149, "a", 50);
    \u0275\u0275element(150, "i", 51);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(151, "div", 56)(152, "div", 41)(153, "span", 57);
    \u0275\u0275element(154, "img", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(155, "div", 53)(156, "a", 45);
    \u0275\u0275text(157, "Movck Pvt Ltd");
    \u0275\u0275elementEnd();
    \u0275\u0275element(158, "span", 46);
    \u0275\u0275elementStart(159, "span", 47);
    \u0275\u0275text(160, "2 Package");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(161, "div", 48)(162, "a", 49);
    \u0275\u0275text(163, "View More");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(164, "a", 50);
    \u0275\u0275element(165, "i", 51);
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275elementStart(166, "div", 1)(167, "div", 59)(168, "div", 22)(169, "div", 60)(170, "h4", 24);
    \u0275\u0275text(171, "Activity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(172, "div", 61)(173, "div", 62)(174, "a", 63);
    \u0275\u0275text(175, " See All ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(176, "ul", 32)(177, "li")(178, "a", 33);
    \u0275\u0275text(179, "Monthly");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(180, "li")(181, "a", 33);
    \u0275\u0275text(182, "Yearly");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(183, "li")(184, "a", 33);
    \u0275\u0275text(185, "Weekly");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(186, "div", 4)(187, "div", 40)(188, "div", 64)(189, "div", 65)(190, "span", 66);
    \u0275\u0275element(191, "img", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(192, "div", 44)(193, "h6", 68);
    \u0275\u0275text(194, "Faith Harrits ");
    \u0275\u0275elementStart(195, "span", 69);
    \u0275\u0275text(196, "Completed Project");
    \u0275\u0275elementEnd();
    \u0275\u0275text(197, " Ui Development ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(198, "span", 46);
    \u0275\u0275elementStart(199, "span", 70);
    \u0275\u0275text(200, "Just Now");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(201, "div", 40)(202, "div", 64)(203, "div", 65)(204, "span", 66);
    \u0275\u0275element(205, "img", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(206, "div", 44)(207, "h6", 68);
    \u0275\u0275text(208, "James Paige ");
    \u0275\u0275elementStart(209, "span", 69);
    \u0275\u0275text(210, "Update");
    \u0275\u0275elementEnd();
    \u0275\u0275text(211, " new Version ");
    \u0275\u0275elementStart(212, "span", 69);
    \u0275\u0275text(213, "angular 10.4....");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(214, "span", 46);
    \u0275\u0275elementStart(215, "span", 70);
    \u0275\u0275text(216, "10 Mins ago");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(217, "div", 40)(218, "div", 64)(219, "div", 65)(220, "span", 72);
    \u0275\u0275text(221, "L");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(222, "div", 44)(223, "h6", 68);
    \u0275\u0275text(224, "Liam Miller ");
    \u0275\u0275elementStart(225, "span", 69);
    \u0275\u0275text(226, "Attach design file New Update....");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(227, "span", 46);
    \u0275\u0275elementStart(228, "span", 70);
    \u0275\u0275text(229, " 1 Hour Ago");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(230, "div", 40)(231, "div", 64)(232, "div", 65)(233, "span", 66);
    \u0275\u0275element(234, "img", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(235, "div", 44)(236, "h6", 68);
    \u0275\u0275text(237, "James Paige ");
    \u0275\u0275elementStart(238, "span", 69);
    \u0275\u0275text(239, "Update");
    \u0275\u0275elementEnd();
    \u0275\u0275text(240, " new Version ");
    \u0275\u0275elementStart(241, "span", 69);
    \u0275\u0275text(242, "angular 10.4....");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(243, "span", 46);
    \u0275\u0275elementStart(244, "span", 70);
    \u0275\u0275text(245, "10 Mins ago");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(246, "div", 56)(247, "div", 64)(248, "div", 65)(249, "span", 66);
    \u0275\u0275element(250, "img", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(251, "div", 44)(252, "h6", 68);
    \u0275\u0275text(253, "Kimberly Berry ");
    \u0275\u0275elementStart(254, "span", 69);
    \u0275\u0275text(255, "Submitted new Design approval.....");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(256, "span", 46);
    \u0275\u0275elementStart(257, "span", 70);
    \u0275\u0275text(258, "3 Hours Ago");
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275elementStart(259, "div", 75)(260, "div", 76)(261, "div", 23)(262, "h4", 24);
    \u0275\u0275text(263, "Recent Invoices");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(264, "div", 77)(265, "div", 62)(266, "a", 78);
    \u0275\u0275text(267, " View All");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(268, "ul", 32)(269, "li")(270, "a", 33);
    \u0275\u0275element(271, "i", 79);
    \u0275\u0275text(272, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(273, "li")(274, "a", 33);
    \u0275\u0275element(275, "i", 80);
    \u0275\u0275text(276, "Add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(277, "li")(278, "a", 33);
    \u0275\u0275element(279, "i", 81);
    \u0275\u0275text(280, "Remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(281, "li")(282, "a", 33);
    \u0275\u0275element(283, "i", 82);
    \u0275\u0275text(284, "Download");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(285, "li")(286, "a", 33);
    \u0275\u0275element(287, "i", 83);
    \u0275\u0275text(288, "More");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(289, "div", 84)(290, "div", 85)(291, "table", 86)(292, "thead")(293, "tr")(294, "th", 87);
    \u0275\u0275text(295, "Invoice ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(296, "th", 87);
    \u0275\u0275text(297, "Clients");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(298, "th", 87);
    \u0275\u0275text(299, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(300, "th", 87);
    \u0275\u0275text(301, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(302, "th", 87);
    \u0275\u0275text(303, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(304, "tbody")(305, "tr", 88)(306, "td")(307, "div", 65)(308, "span", 89);
    \u0275\u0275element(309, "span", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(310, "div", 91)(311, "h6", 92);
    \u0275\u0275text(312, "#864135");
    \u0275\u0275elementEnd();
    \u0275\u0275element(313, "div", 46);
    \u0275\u0275elementStart(314, "small", 93);
    \u0275\u0275text(315, "05 Jan 2020");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(316, "td", 94)(317, "h6", 92);
    \u0275\u0275text(318, "Abcd Pvt Ltdt");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(319, "td", 95)(320, "h6", 92);
    \u0275\u0275text(321, "$15,426");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(322, "td")(323, "span", 96);
    \u0275\u0275text(324, "Paid");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(325, "td", 94)(326, "div", 97)(327, "a", 98);
    \u0275\u0275element(328, "i", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(329, "a", 100);
    \u0275\u0275element(330, "i", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(331, "ul", 32)(332, "li")(333, "a", 33);
    \u0275\u0275element(334, "i", 79);
    \u0275\u0275text(335, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(336, "li")(337, "a", 33);
    \u0275\u0275element(338, "i", 80);
    \u0275\u0275text(339, "Add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(340, "li")(341, "a", 33);
    \u0275\u0275element(342, "i", 81);
    \u0275\u0275text(343, "Remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(344, "li")(345, "a", 33);
    \u0275\u0275element(346, "i", 83);
    \u0275\u0275text(347, "More");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(348, "tr", 88)(349, "td")(350, "div", 65)(351, "span", 102);
    \u0275\u0275element(352, "span", 103);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(353, "div", 91)(354, "h6", 92);
    \u0275\u0275text(355, "#456820");
    \u0275\u0275elementEnd();
    \u0275\u0275element(356, "div", 46);
    \u0275\u0275elementStart(357, "small", 93);
    \u0275\u0275text(358, "03 Jan 2020");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(359, "td", 94)(360, "h6", 92);
    \u0275\u0275text(361, "Croport Pvt Ltd");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(362, "td", 95)(363, "h6", 92);
    \u0275\u0275text(364, "$1421");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(365, "td")(366, "span", 104);
    \u0275\u0275text(367, "Overdue");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(368, "td", 94)(369, "div", 97)(370, "a", 98);
    \u0275\u0275element(371, "i", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(372, "a", 100);
    \u0275\u0275element(373, "i", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(374, "ul", 32)(375, "li")(376, "a", 33);
    \u0275\u0275element(377, "i", 79);
    \u0275\u0275text(378, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(379, "li")(380, "a", 33);
    \u0275\u0275element(381, "i", 80);
    \u0275\u0275text(382, "Add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(383, "li")(384, "a", 33);
    \u0275\u0275element(385, "i", 81);
    \u0275\u0275text(386, "Remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(387, "li")(388, "a", 33);
    \u0275\u0275element(389, "i", 83);
    \u0275\u0275text(390, "More");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(391, "tr")(392, "td")(393, "div", 65)(394, "span", 105);
    \u0275\u0275element(395, "span", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(396, "div", 91)(397, "h6", 92);
    \u0275\u0275text(398, "#956298");
    \u0275\u0275elementEnd();
    \u0275\u0275element(399, "div", 46);
    \u0275\u0275elementStart(400, "small", 93);
    \u0275\u0275text(401, "29 Dec 2019");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(402, "td", 94)(403, "h6", 92);
    \u0275\u0275text(404, "frecho Pvt Ltd");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(405, "td", 95)(406, "h6", 92);
    \u0275\u0275text(407, "$8427");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(408, "td")(409, "span", 107);
    \u0275\u0275text(410, "Unpaid");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(411, "td", 94)(412, "div", 97)(413, "a", 98);
    \u0275\u0275element(414, "i", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(415, "a", 100);
    \u0275\u0275element(416, "i", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(417, "ul", 32)(418, "li")(419, "a", 33);
    \u0275\u0275element(420, "i", 79);
    \u0275\u0275text(421, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(422, "li")(423, "a", 33);
    \u0275\u0275element(424, "i", 80);
    \u0275\u0275text(425, "Add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(426, "li")(427, "a", 33);
    \u0275\u0275element(428, "i", 81);
    \u0275\u0275text(429, "Remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(430, "li")(431, "a", 33);
    \u0275\u0275element(432, "i", 83);
    \u0275\u0275text(433, "More");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(434, "tr", 88)(435, "td")(436, "div", 65)(437, "span", 89);
    \u0275\u0275element(438, "span", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(439, "div", 91)(440, "h6", 92);
    \u0275\u0275text(441, "#190675");
    \u0275\u0275elementEnd();
    \u0275\u0275element(442, "div", 46);
    \u0275\u0275elementStart(443, "small", 93);
    \u0275\u0275text(444, "29 Dec 2019");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(445, "td", 94)(446, "h6", 92);
    \u0275\u0275text(447, "kolit Pvt Ltd");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(448, "td", 95)(449, "h6", 92);
    \u0275\u0275text(450, "$8427");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(451, "td")(452, "span", 96);
    \u0275\u0275text(453, "Paid");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(454, "td", 94)(455, "div", 97)(456, "a", 98);
    \u0275\u0275element(457, "i", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(458, "a", 100);
    \u0275\u0275element(459, "i", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(460, "ul", 32)(461, "li")(462, "a", 33);
    \u0275\u0275element(463, "i", 79);
    \u0275\u0275text(464, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(465, "li")(466, "a", 33);
    \u0275\u0275element(467, "i", 80);
    \u0275\u0275text(468, "Add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(469, "li")(470, "a", 33);
    \u0275\u0275element(471, "i", 81);
    \u0275\u0275text(472, "Remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(473, "li")(474, "a", 33);
    \u0275\u0275element(475, "i", 83);
    \u0275\u0275text(476, "More");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(477, "tr", 108)(478, "td")(479, "div", 65)(480, "span", 109);
    \u0275\u0275element(481, "span", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(482, "div", 91)(483, "h6", 92);
    \u0275\u0275text(484, "#067298");
    \u0275\u0275elementEnd();
    \u0275\u0275element(485, "div", 46);
    \u0275\u0275elementStart(486, "small", 93);
    \u0275\u0275text(487, "28 Dec 2019");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(488, "td", 94)(489, "h6", 92);
    \u0275\u0275text(490, "Movck Pvt Ltd");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(491, "td", 95)(492, "h6", 92);
    \u0275\u0275text(493, "$12,452");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(494, "td")(495, "span", 110);
    \u0275\u0275text(496, "Draft");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(497, "td", 94)(498, "div", 97)(499, "a", 98);
    \u0275\u0275element(500, "i", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(501, "a", 100);
    \u0275\u0275element(502, "i", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(503, "ul", 32)(504, "li")(505, "a", 33);
    \u0275\u0275element(506, "i", 79);
    \u0275\u0275text(507, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(508, "li")(509, "a", 33);
    \u0275\u0275element(510, "i", 80);
    \u0275\u0275text(511, "Add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(512, "li")(513, "a", 33);
    \u0275\u0275element(514, "i", 81);
    \u0275\u0275text(515, "Remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(516, "li")(517, "a", 33);
    \u0275\u0275element(518, "i", 83);
    \u0275\u0275text(519, "More");
    \u0275\u0275elementEnd()()()()()()()()()()()()();
    \u0275\u0275elementStart(520, "div", 1)(521, "div", 111)(522, "div", 22)(523, "div", 112)(524, "h4", 24);
    \u0275\u0275text(525, "Recent Registered Companies Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(526, "div", 113)(527, "a", 114);
    \u0275\u0275text(528, " See All");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(529, "div", 115)(530, "div", 116)(531, "table", 117)(532, "thead")(533, "tr")(534, "th");
    \u0275\u0275text(535, "#No");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(536, "th");
    \u0275\u0275text(537, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(538, "th");
    \u0275\u0275text(539, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(540, "th");
    \u0275\u0275text(541, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(542, "th");
    \u0275\u0275text(543, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(544, "tbody")(545, "tr")(546, "td");
    \u0275\u0275text(547, "#001");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(548, "td")(549, "a", 118)(550, "span", 119);
    \u0275\u0275element(551, "img", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(552, "div", 120)(553, "h6", 121);
    \u0275\u0275text(554, "Abcd Pvt Ltd");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(555, "p", 122);
    \u0275\u0275text(556, "12-01-2021");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(557, "td");
    \u0275\u0275text(558, "julia@gmail.com");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(559, "td")(560, "span", 96);
    \u0275\u0275text(561, "Active");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(562, "td")(563, "div", 65)(564, "a", 123);
    \u0275\u0275element(565, "i", 124);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(566, "a", 125);
    \u0275\u0275element(567, "i", 126);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(568, "a", 127);
    \u0275\u0275element(569, "i", 128);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(570, "tr")(571, "td");
    \u0275\u0275text(572, "#002");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(573, "td")(574, "a", 118)(575, "span", 119);
    \u0275\u0275element(576, "img", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(577, "div", 120)(578, "h6", 121);
    \u0275\u0275text(579, "Croport Pvt Ltd");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(580, "p", 122);
    \u0275\u0275text(581, "5-02-2021");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(582, "td");
    \u0275\u0275text(583, "daine@gmail.com");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(584, "td")(585, "span", 96);
    \u0275\u0275text(586, "Active");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(587, "td")(588, "div", 65)(589, "a", 123);
    \u0275\u0275element(590, "i", 124);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(591, "a", 125);
    \u0275\u0275element(592, "i", 126);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(593, "a", 127);
    \u0275\u0275element(594, "i", 128);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(595, "tr")(596, "td");
    \u0275\u0275text(597, "#S003");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(598, "td")(599, "a", 118)(600, "span", 119);
    \u0275\u0275element(601, "img", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(602, "div", 120)(603, "h6", 121);
    \u0275\u0275text(604, "kolit Pvt Ltd");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(605, "p", 122);
    \u0275\u0275text(606, "21-01-2021");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(607, "td");
    \u0275\u0275text(608, "gabrielle@gmail.com");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(609, "td")(610, "span", 96);
    \u0275\u0275text(611, "Active");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(612, "td")(613, "div", 65)(614, "a", 123);
    \u0275\u0275element(615, "i", 124);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(616, "a", 125);
    \u0275\u0275element(617, "i", 126);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(618, "a", 127);
    \u0275\u0275element(619, "i", 128);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(620, "tr")(621, "td");
    \u0275\u0275text(622, "#004");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(623, "td")(624, "a", 118)(625, "span", 119);
    \u0275\u0275element(626, "img", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(627, "div", 120)(628, "h6", 121);
    \u0275\u0275text(629, "Movck Pvt Ltd");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(630, "p", 122);
    \u0275\u0275text(631, "16-11-2020");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(632, "td");
    \u0275\u0275text(633, "ryan@gmail.com");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(634, "td")(635, "span", 96);
    \u0275\u0275text(636, "Active");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(637, "td")(638, "div", 65)(639, "a", 123);
    \u0275\u0275element(640, "i", 124);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(641, "a", 125);
    \u0275\u0275element(642, "i", 126);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(643, "a", 127);
    \u0275\u0275element(644, "i", 128);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(645, "tr")(646, "td");
    \u0275\u0275text(647, "#005");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(648, "td")(649, "a", 118)(650, "span", 119);
    \u0275\u0275element(651, "img", 129);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(652, "div", 120)(653, "h6", 121);
    \u0275\u0275text(654, "Loki Pvt Ltd");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(655, "p", 122);
    \u0275\u0275text(656, "25-06-2021");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(657, "td");
    \u0275\u0275text(658, "lisa@gmail.com");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(659, "td")(660, "span", 96);
    \u0275\u0275text(661, "Active");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(662, "td")(663, "div", 65)(664, "a", 123);
    \u0275\u0275element(665, "i", 124);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(666, "a", 125);
    \u0275\u0275element(667, "i", 126);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(668, "a", 127);
    \u0275\u0275element(669, "i", 128);
    \u0275\u0275elementEnd()()()()()()()()()();
    \u0275\u0275elementStart(670, "div", 130)(671, "div", 22)(672, "div", 112)(673, "h4", 24);
    \u0275\u0275text(674, "Recent Inactive Companies");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(675, "div", 113)(676, "a", 114);
    \u0275\u0275text(677, " View All");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(678, "div", 84)(679, "div", 116)(680, "table", 131)(681, "thead")(682, "tr")(683, "th", 87);
    \u0275\u0275text(684, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(685, "th", 87);
    \u0275\u0275text(686, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(687, "th", 87);
    \u0275\u0275text(688, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(689, "tbody")(690, "tr")(691, "td")(692, "a", 118)(693, "span", 119);
    \u0275\u0275element(694, "img", 129);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(695, "div", 120)(696, "h6", 121);
    \u0275\u0275text(697, "Kloki Pvt Ltd");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(698, "p", 122);
    \u0275\u0275text(699, "21-08-2021");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(700, "td")(701, "a", 132);
    \u0275\u0275text(702, "james@gmail.com");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(703, "p", 56)(704, "span", 133);
    \u0275\u0275text(705, "Inactive");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(706, "td")(707, "div", 65)(708, "a", 123);
    \u0275\u0275element(709, "i", 124);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(710, "a", 127);
    \u0275\u0275element(711, "i", 128);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(712, "tr")(713, "td")(714, "a", 118)(715, "span", 119);
    \u0275\u0275element(716, "img", 134);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(717, "div", 120)(718, "h6", 121);
    \u0275\u0275text(719, "frecho Pvt Ltd");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(720, "p", 122);
    \u0275\u0275text(721, "16-02-2021");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(722, "td")(723, "a", 132);
    \u0275\u0275text(724, "pippa@gmail.com");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(725, "p", 56)(726, "span", 133);
    \u0275\u0275text(727, "Inactive");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(728, "td")(729, "div", 65)(730, "a", 123);
    \u0275\u0275element(731, "i", 124);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(732, "a", 127);
    \u0275\u0275element(733, "i", 128);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(734, "tr")(735, "td")(736, "a", 118)(737, "span", 119);
    \u0275\u0275element(738, "img", 135);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(739, "div", 120)(740, "h6", 121);
    \u0275\u0275text(741, "Mooke Pvt Ltd");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(742, "p", 122);
    \u0275\u0275text(743, "21-05-2021");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(744, "td")(745, "a", 132);
    \u0275\u0275text(746, "samgray@gmail.com");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(747, "p", 56)(748, "span", 133);
    \u0275\u0275text(749, "Inactive");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(750, "td")(751, "div", 65)(752, "a", 123);
    \u0275\u0275element(753, "i", 124);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(754, "a", 127);
    \u0275\u0275element(755, "i", 128);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(756, "tr")(757, "td")(758, "a", 118)(759, "span", 119);
    \u0275\u0275element(760, "img", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(761, "div", 120)(762, "h6", 121);
    \u0275\u0275text(763, "Foklali Pvt Ltd");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(764, "p", 122);
    \u0275\u0275text(765, "21-08-2020");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(766, "td")(767, "a", 132);
    \u0275\u0275text(768, "samgray@gmail.com");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(769, "p", 56)(770, "span", 133);
    \u0275\u0275text(771, "Inactive");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(772, "td")(773, "div", 65)(774, "a", 123);
    \u0275\u0275element(775, "i", 124);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(776, "a", 127);
    \u0275\u0275element(777, "i", 128);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(778, "tr")(779, "td")(780, "a", 118)(781, "span", 119);
    \u0275\u0275element(782, "img", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(783, "div", 120)(784, "h6", 121);
    \u0275\u0275text(785, "Gomalik Pvt Ltd");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(786, "p", 122);
    \u0275\u0275text(787, "21-05-2020");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(788, "td")(789, "a", 132);
    \u0275\u0275text(790, "samgray@gmail.com");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(791, "p", 56)(792, "span", 133);
    \u0275\u0275text(793, "Inactive");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(794, "td")(795, "div", 65)(796, "a", 123);
    \u0275\u0275element(797, "i", 124);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(798, "a", 127);
    \u0275\u0275element(799, "i", 128);
    \u0275\u0275elementEnd()()()()()()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("title", "Super Admin Dashboard");
    \u0275\u0275advance(84);
    \u0275\u0275property("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("legend", ctx.chartOptions.legend)("xaxis", ctx.chartOptions.xaxis)("colors", ctx.chartOptions.colors)("markers", ctx.chartOptions.markers)("stroke", ctx.chartOptions.stroke)("plotOptions", ctx.chartOptions.plotOptions)("dataLabels", ctx.chartOptions.dataLabels)("grid", ctx.chartOptions.grid)("labels", ctx.chartOptions.labels)("yaxis", ctx.chartOptions.yaxis);
  }
}, dependencies: [SharedModule, PageHeaderComponent, NgApexchartsModule, ChartComponent, NgbModule, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, NgbTooltip, RouterModule] });
var DashboardComponent = _DashboardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent" });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=dashboard.component-X6ZRB5AR.js.map
