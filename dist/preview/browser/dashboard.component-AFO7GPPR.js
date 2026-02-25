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
  JobDashboardPageHeaderComponent,
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
import {
  NgbDropdown,
  NgbDropdownItem,
  NgbDropdownMenu,
  NgbDropdownToggle,
  NgbModule,
  NgbNav,
  NgbNavContent,
  NgbNavItem,
  NgbNavItemRole,
  NgbNavLink,
  NgbNavLinkBase,
  NgbNavOutlet,
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
  ɵɵgetCurrentView,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import {
  __toESM
} from "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/job-dashboard/dashboard/dashboardChartData.ts
var DonutChartData = {
  pieseries: [64, 45, 28, 18],
  labels: ["Applications", "Interviews", "Reject", "Hired"],
  colors: ["#3366ff", "#fe7f00", "#f7284a", "#0dcd94"],
  chart: {
    type: "donut",
    height: 330
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  stroke: {
    show: true,
    width: 0
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        show: false
      }
    }
  }]
};
var lineChartData = {
  datasets: [
    {
      label: "Applications",
      data: [12.5, 17, 12.5, 15.5, 18, 14.5, 22, 11, 17.5, 15.5, 16, 12.5],
      backgroundColor: "transparent",
      borderWidth: 3,
      borderColor: "#3366ff",
      hoverBorderColor: "#3366ff"
    },
    {
      label: "Shortlisted",
      data: [9.5, 18, 11.2, 18, 14.5, 18, 11, 15.5, 13.5, 11.5, 13, 11],
      backgroundColor: "transparent",
      borderWidth: 3,
      borderColor: "#d1d1db",
      hoverBorderColor: "#d1d1db",
      type: "line",
      borderDash: [7, 6]
    },
    {
      label: "",
      data: [17, 23, 18, 18.5, 14, 20.5, 18, 19, 22, 20, 18.5, 24],
      backgroundColor: "#3654afde",
      borderWidth: 3,
      borderColor: "#3654afde",
      fill: "origin"
    }
  ],
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
};
var lineChartOptions = {
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
  elements: {
    line: {
      tension: 0.5
    },
    point: {
      radius: 0
    }
  },
  scales: {
    // We use this empty structure as a placeholder for dynamic theming.
    x: {
      ticks: {
        beginAtZero: true,
        color: "#8492a6"
      },
      grid: {
        color: "rgba(142, 156, 173,0.1)",
        display: false
      }
    },
    y: {
      grid: {
        display: true,
        drawBorder: false,
        zeroLineColor: "rgba(142, 156, 173,0.1)",
        color: "rgba(142, 156, 173,0.1)"
      },
      ticks: {
        stepSize: 5,
        color: "#8492a6"
      }
    }
  },
  plugins: {
    legend: { display: false }
  }
};
var lineChartType = "line";

// src/app/componets/dashbord/job-dashboard/dashboard/dashboard.component.ts
var import_moment = __toESM(require_moment());
var _c0 = ["external"];
function DashboardComponent_ng_template_396_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 117)(1, "div", 118)(2, "div", 119)(3, "div", 120)(4, "span");
    \u0275\u0275text(5, "Show");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 121)(7, "div", 122)(8, "ng-select", 123)(9, "ng-option", 124);
    \u0275\u0275text(10, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "ng-option", 125);
    \u0275\u0275text(12, "25");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "ng-option", 126);
    \u0275\u0275text(14, "50");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "ng-option", 127);
    \u0275\u0275text(16, "100");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18, "entries");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 119)(20, "div", 128);
    \u0275\u0275element(21, "input", 129);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 130)(23, "table", 131)(24, "thead")(25, "tr")(26, "th");
    \u0275\u0275text(27, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "th");
    \u0275\u0275text(29, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "th", 132);
    \u0275\u0275text(31, "Interviewer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th");
    \u0275\u0275text(33, "Schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "th", 133);
    \u0275\u0275text(35, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "tbody")(37, "tr")(38, "td")(39, "div", 120)(40, "span", 134);
    \u0275\u0275element(41, "img", 135);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 136)(43, "h6", 137);
    \u0275\u0275text(44, "Faith Harris");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "p", 138);
    \u0275\u0275text(46, "UI designer ");
    \u0275\u0275elementStart(47, "span", 139);
    \u0275\u0275text(48, " 5 Years");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(49, "td");
    \u0275\u0275element(50, "i", 140);
    \u0275\u0275text(51, "USA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "td")(53, "div", 120)(54, "span", 134);
    \u0275\u0275element(55, "img", 141);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 136)(57, "h6", 137);
    \u0275\u0275text(58, "Berry Olivia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "p", 138);
    \u0275\u0275text(60, "Ui Director");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(61, "td")(62, "span", 142);
    \u0275\u0275text(63, "10:30Am, Jun 16, 2020");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "td")(65, "div", 120)(66, "a", 143);
    \u0275\u0275element(67, "i", 144);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "a", 145);
    \u0275\u0275element(69, "i", 146);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "a", 147);
    \u0275\u0275element(71, "i", 148);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(72, "tr")(73, "td")(74, "div", 120)(75, "span", 134);
    \u0275\u0275element(76, "img", 149);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "div", 136)(78, "h6", 137);
    \u0275\u0275text(79, "James Paige");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "p", 138);
    \u0275\u0275text(81, "HTML Developer ");
    \u0275\u0275elementStart(82, "span", 150);
    \u0275\u0275text(83, " 2 Years");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(84, "td");
    \u0275\u0275element(85, "i", 140);
    \u0275\u0275text(86, "INDIA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "td")(88, "div", 120)(89, "span", 134);
    \u0275\u0275element(90, "img", 151);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "div", 136)(92, "h6", 137);
    \u0275\u0275text(93, "Thomson Chapman");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "p", 138);
    \u0275\u0275text(95, "HTML Team Lead");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(96, "td")(97, "span", 142);
    \u0275\u0275text(98, "10:30Am, Jun 19, 2020");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(99, "td")(100, "div", 120)(101, "a", 143);
    \u0275\u0275element(102, "i", 144);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "a", 145);
    \u0275\u0275element(104, "i", 146);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "a", 147);
    \u0275\u0275element(106, "i", 148);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(107, "tr")(108, "td")(109, "div", 120)(110, "span", 152);
    \u0275\u0275text(111, "L");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "div", 136)(113, "h6", 137);
    \u0275\u0275text(114, "Liam Miller");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "p", 138);
    \u0275\u0275text(116, "UX designer ");
    \u0275\u0275elementStart(117, "span", 153);
    \u0275\u0275text(118, "Fresher");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(119, "td");
    \u0275\u0275element(120, "i", 140);
    \u0275\u0275text(121, "Germany");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(122, "td")(123, "div", 120)(124, "span", 134);
    \u0275\u0275element(125, "img", 154);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "div", 136)(127, "h6", 137);
    \u0275\u0275text(128, "Diane Bailey");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(129, "p", 138);
    \u0275\u0275text(130, "Ui Director");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(131, "td")(132, "span", 142);
    \u0275\u0275text(133, "10:30Am, Jun 02, 2020");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(134, "td")(135, "div", 120)(136, "a", 143);
    \u0275\u0275element(137, "i", 144);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(138, "a", 145);
    \u0275\u0275element(139, "i", 146);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(140, "a", 147);
    \u0275\u0275element(141, "i", 148);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(142, "tr")(143, "td")(144, "div", 120)(145, "span", 134);
    \u0275\u0275element(146, "img", 155);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(147, "div", 136)(148, "h6", 137);
    \u0275\u0275text(149, "Kimberly Berry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(150, "p", 138);
    \u0275\u0275text(151, "PHP Developer ");
    \u0275\u0275elementStart(152, "span", 150);
    \u0275\u0275text(153, " 3 Years");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(154, "td");
    \u0275\u0275element(155, "i", 140);
    \u0275\u0275text(156, "USA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(157, "td")(158, "div", 120)(159, "span", 152);
    \u0275\u0275text(160, "J");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(161, "div", 136)(162, "h6", 137);
    \u0275\u0275text(163, "Joe Howard");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(164, "p", 138);
    \u0275\u0275text(165, "Senior Developer");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(166, "td")(167, "span", 142);
    \u0275\u0275text(168, "10:30Am, may 24, 2020");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(169, "td")(170, "div", 120)(171, "a", 143);
    \u0275\u0275element(172, "i", 144);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(173, "a", 145);
    \u0275\u0275element(174, "i", 146);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(175, "a", 147);
    \u0275\u0275element(176, "i", 148);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(177, "tr")(178, "td")(179, "div", 120)(180, "span", 134);
    \u0275\u0275element(181, "img", 156);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(182, "div", 136)(183, "h6", 137);
    \u0275\u0275text(184, "Bella Davidson");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(185, "p", 138);
    \u0275\u0275text(186, "UI designer ");
    \u0275\u0275elementStart(187, "span", 157);
    \u0275\u0275text(188, " 4 Years");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(189, "td");
    \u0275\u0275element(190, "i", 140);
    \u0275\u0275text(191, "Australia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(192, "td")(193, "div", 120)(194, "span", 134);
    \u0275\u0275element(195, "img", 154);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(196, "div", 136)(197, "h6", 137);
    \u0275\u0275text(198, "Alan Miller");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(199, "p", 138);
    \u0275\u0275text(200, "Ui Director");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(201, "td")(202, "span", 142);
    \u0275\u0275text(203, "10:30Am, may 12, 2020");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(204, "td")(205, "div", 120)(206, "a", 143);
    \u0275\u0275element(207, "i", 144);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(208, "a", 145);
    \u0275\u0275element(209, "i", 146);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(210, "a", 147);
    \u0275\u0275element(211, "i", 148);
    \u0275\u0275elementEnd()()()()()()()();
  }
}
function DashboardComponent_ng_template_400_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 117)(1, "div", 118)(2, "div", 119)(3, "div", 120)(4, "span");
    \u0275\u0275text(5, "Show");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 121)(7, "div", 122)(8, "select", 158)(9, "option", 124);
    \u0275\u0275text(10, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 125);
    \u0275\u0275text(12, "25");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option", 126);
    \u0275\u0275text(14, "50");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 127);
    \u0275\u0275text(16, "100");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18, "entries");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 119)(20, "div", 128);
    \u0275\u0275element(21, "input", 129);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 130)(23, "table", 131)(24, "thead")(25, "tr")(26, "th", 159);
    \u0275\u0275text(27, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "th", 159);
    \u0275\u0275text(29, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "th", 159);
    \u0275\u0275text(31, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th", 160);
    \u0275\u0275text(33, "Interviewer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "th", 159);
    \u0275\u0275text(35, "Schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "th", 161);
    \u0275\u0275text(37, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "tbody")(39, "tr")(40, "td")(41, "div", 38)(42, "span", 134);
    \u0275\u0275element(43, "img", 135);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 136)(45, "h6", 137);
    \u0275\u0275text(46, "Faith Harris");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "p", 138);
    \u0275\u0275text(48, "UI designer ");
    \u0275\u0275elementStart(49, "span", 139);
    \u0275\u0275text(50, " 5 Years");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(51, "td")(52, "ul", 162);
    \u0275\u0275element(53, "li", 163)(54, "li")(55, "li");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "td");
    \u0275\u0275element(57, "i", 140);
    \u0275\u0275text(58, "USA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "td")(60, "div", 38)(61, "span", 134);
    \u0275\u0275element(62, "img", 141);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 136)(64, "h6", 137);
    \u0275\u0275text(65, "Berry Olivia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "p", 138);
    \u0275\u0275text(67, "Ui Director");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(68, "td")(69, "span", 142);
    \u0275\u0275text(70, "10:30Am, Jun 16, 2020");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "td")(72, "div", 38)(73, "a", 143);
    \u0275\u0275element(74, "i", 144);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "a", 145);
    \u0275\u0275element(76, "i", 146);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "a", 147);
    \u0275\u0275element(78, "i", 148);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(79, "tr")(80, "td")(81, "div", 38)(82, "span", 134);
    \u0275\u0275element(83, "img", 149);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "div", 136)(85, "h6", 137);
    \u0275\u0275text(86, "James Paige");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "p", 138);
    \u0275\u0275text(88, "HTML Developer ");
    \u0275\u0275elementStart(89, "span", 150);
    \u0275\u0275text(90, " 2 Years");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(91, "td")(92, "ul", 162);
    \u0275\u0275element(93, "li", 164)(94, "li", 164)(95, "li", 163);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(96, "td");
    \u0275\u0275element(97, "i", 140);
    \u0275\u0275text(98, "INDIA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "td")(100, "div", 38)(101, "span", 134);
    \u0275\u0275element(102, "img", 151);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "div", 136)(104, "h6", 137);
    \u0275\u0275text(105, "Thomson Chapman");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "p", 138);
    \u0275\u0275text(107, "HTML Team Lead");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(108, "td")(109, "span", 142);
    \u0275\u0275text(110, "10:30Am, Jun 19, 2020");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(111, "td")(112, "div", 38)(113, "a", 143);
    \u0275\u0275element(114, "i", 144);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "a", 145);
    \u0275\u0275element(116, "i", 146);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "a", 147);
    \u0275\u0275element(118, "i", 148);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(119, "tr")(120, "td")(121, "div", 38)(122, "span", 152);
    \u0275\u0275text(123, "L");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "div", 136)(125, "h6", 137);
    \u0275\u0275text(126, "Liam Miller");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(127, "p", 138);
    \u0275\u0275text(128, "UX designer ");
    \u0275\u0275elementStart(129, "span", 153);
    \u0275\u0275text(130, "Fresher");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(131, "td")(132, "ul", 162);
    \u0275\u0275element(133, "li", 164)(134, "li", 163)(135, "li");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(136, "td");
    \u0275\u0275element(137, "i", 140);
    \u0275\u0275text(138, "Germany");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(139, "td")(140, "div", 38)(141, "span", 134);
    \u0275\u0275element(142, "img", 154);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(143, "div", 136)(144, "h6", 137);
    \u0275\u0275text(145, "Diane Bailey");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(146, "p", 138);
    \u0275\u0275text(147, "Ui Director");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(148, "td")(149, "span", 142);
    \u0275\u0275text(150, "10:30Am, Jun 02, 2020");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(151, "td")(152, "div", 38)(153, "a", 143);
    \u0275\u0275element(154, "i", 144);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(155, "a", 145);
    \u0275\u0275element(156, "i", 146);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(157, "a", 147);
    \u0275\u0275element(158, "i", 148);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(159, "tr")(160, "td")(161, "div", 38)(162, "span", 134);
    \u0275\u0275element(163, "img", 155);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(164, "div", 136)(165, "h6", 137);
    \u0275\u0275text(166, "Kimberly Berry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(167, "p", 138);
    \u0275\u0275text(168, "PHP Developer ");
    \u0275\u0275elementStart(169, "span", 150);
    \u0275\u0275text(170, " 3 Years");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(171, "td")(172, "ul", 162);
    \u0275\u0275element(173, "li", 164)(174, "li")(175, "li");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(176, "td");
    \u0275\u0275element(177, "i", 140);
    \u0275\u0275text(178, "USA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(179, "td")(180, "div", 38)(181, "span", 152);
    \u0275\u0275text(182, "J");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(183, "div", 136)(184, "h6", 137);
    \u0275\u0275text(185, "Joe Howard");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(186, "p", 138);
    \u0275\u0275text(187, "Senior Developer");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(188, "td")(189, "span", 142);
    \u0275\u0275text(190, "10:30Am, may 24, 2020");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(191, "td")(192, "div", 38)(193, "a", 143);
    \u0275\u0275element(194, "i", 144);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(195, "a", 145);
    \u0275\u0275element(196, "i", 146);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(197, "a", 147);
    \u0275\u0275element(198, "i", 148);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(199, "tr")(200, "td")(201, "div", 38)(202, "span", 134);
    \u0275\u0275element(203, "img", 156);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(204, "div", 136)(205, "h6", 137);
    \u0275\u0275text(206, "Bella Davidson");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(207, "p", 138);
    \u0275\u0275text(208, "UI designer ");
    \u0275\u0275elementStart(209, "span", 157);
    \u0275\u0275text(210, " 4 Years");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(211, "td")(212, "ul", 162);
    \u0275\u0275element(213, "li", 164)(214, "li", 164)(215, "li", 163);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(216, "td");
    \u0275\u0275element(217, "i", 140);
    \u0275\u0275text(218, "Australia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(219, "td")(220, "div", 38)(221, "span", 134);
    \u0275\u0275element(222, "img", 154);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(223, "div", 136)(224, "h6", 137);
    \u0275\u0275text(225, "Alan Miller");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(226, "p", 138);
    \u0275\u0275text(227, "Ui Director");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(228, "td")(229, "span", 142);
    \u0275\u0275text(230, "10:30Am, may 12, 2020");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(231, "td")(232, "div", 38)(233, "a", 143);
    \u0275\u0275element(234, "i", 144);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(235, "a", 145);
    \u0275\u0275element(236, "i", 146);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(237, "a", 147);
    \u0275\u0275element(238, "i", 148);
    \u0275\u0275elementEnd()()()()()()()();
  }
}
function DashboardComponent_ng_template_404_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 117)(1, "div", 118)(2, "div", 119)(3, "div", 120)(4, "span");
    \u0275\u0275text(5, "Show");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 121)(7, "div", 122)(8, "ng-select", 165)(9, "ng-option", 124);
    \u0275\u0275text(10, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "ng-option", 125);
    \u0275\u0275text(12, "25");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "ng-option", 126);
    \u0275\u0275text(14, "50");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "ng-option", 127);
    \u0275\u0275text(16, "100");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18, "entries");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 119)(20, "div", 128);
    \u0275\u0275element(21, "input", 129);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 130)(23, "table", 131)(24, "thead")(25, "tr")(26, "th", 159);
    \u0275\u0275text(27, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "th", 159);
    \u0275\u0275text(29, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "th", 160);
    \u0275\u0275text(31, "Interviewer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th", 159);
    \u0275\u0275text(33, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "th", 159);
    \u0275\u0275text(35, "Schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "th", 161);
    \u0275\u0275text(37, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "tbody")(39, "tr")(40, "td")(41, "div", 38)(42, "span", 134);
    \u0275\u0275element(43, "img", 135);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 136)(45, "h6", 137);
    \u0275\u0275text(46, "Faith Harris");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "p", 138);
    \u0275\u0275text(48, "UI designer ");
    \u0275\u0275elementStart(49, "span", 139);
    \u0275\u0275text(50, " 5 Years");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(51, "td");
    \u0275\u0275element(52, "i", 140);
    \u0275\u0275text(53, "USA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "td")(55, "div", 38)(56, "span", 134);
    \u0275\u0275element(57, "img", 141);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 136)(59, "h6", 137);
    \u0275\u0275text(60, "Berry Olivia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "p", 138);
    \u0275\u0275text(62, "Ui Director");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(63, "td")(64, "span", 166);
    \u0275\u0275text(65, "Hired");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "td")(67, "span", 142);
    \u0275\u0275text(68, "10:30Am, Jun 16, 2020");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "td")(70, "div", 38)(71, "a", 143);
    \u0275\u0275element(72, "i", 144);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "a", 145);
    \u0275\u0275element(74, "i", 146);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "a", 147);
    \u0275\u0275element(76, "i", 148);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(77, "tr")(78, "td")(79, "div", 38)(80, "span", 134);
    \u0275\u0275element(81, "img", 149);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "div", 136)(83, "h6", 137);
    \u0275\u0275text(84, "James Paige");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "p", 138);
    \u0275\u0275text(86, "HTML Developer ");
    \u0275\u0275elementStart(87, "span", 150);
    \u0275\u0275text(88, " 2 Years");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(89, "td");
    \u0275\u0275element(90, "i", 140);
    \u0275\u0275text(91, "INDIA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "td")(93, "div", 38)(94, "span", 134);
    \u0275\u0275element(95, "img", 151);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "div", 136)(97, "h6", 137);
    \u0275\u0275text(98, "Thomson Chapman");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "p", 138);
    \u0275\u0275text(100, "HTML Team Lead");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(101, "td")(102, "span", 166);
    \u0275\u0275text(103, "Hired");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(104, "td")(105, "span", 142);
    \u0275\u0275text(106, "10:30Am, Jun 19, 2020");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(107, "td")(108, "div", 38)(109, "a", 143);
    \u0275\u0275element(110, "i", 144);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "a", 145);
    \u0275\u0275element(112, "i", 146);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "a", 147);
    \u0275\u0275element(114, "i", 148);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(115, "tr")(116, "td")(117, "div", 38)(118, "span", 152);
    \u0275\u0275text(119, "L");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "div", 136)(121, "h6", 137);
    \u0275\u0275text(122, "Liam Miller");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "p", 138);
    \u0275\u0275text(124, "UX designer ");
    \u0275\u0275elementStart(125, "span", 153);
    \u0275\u0275text(126, "Fresher");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(127, "td");
    \u0275\u0275element(128, "i", 140);
    \u0275\u0275text(129, "Germany");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "td")(131, "div", 38)(132, "span", 134);
    \u0275\u0275element(133, "img", 154);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(134, "div", 136)(135, "h6", 137);
    \u0275\u0275text(136, "Diane Bailey");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(137, "p", 138);
    \u0275\u0275text(138, "Ui Director");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(139, "td")(140, "span", 166);
    \u0275\u0275text(141, "Hired");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(142, "td")(143, "span", 142);
    \u0275\u0275text(144, "10:30Am, Jun 02, 2020");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(145, "td")(146, "div", 38)(147, "a", 143);
    \u0275\u0275element(148, "i", 144);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(149, "a", 145);
    \u0275\u0275element(150, "i", 146);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(151, "a", 147);
    \u0275\u0275element(152, "i", 148);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(153, "tr")(154, "td")(155, "div", 38)(156, "span", 134);
    \u0275\u0275element(157, "img", 155);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(158, "div", 136)(159, "h6", 137);
    \u0275\u0275text(160, "Kimberly Berry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(161, "p", 138);
    \u0275\u0275text(162, "PHP Developer ");
    \u0275\u0275elementStart(163, "span", 150);
    \u0275\u0275text(164, " 3 Years");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(165, "td");
    \u0275\u0275element(166, "i", 140);
    \u0275\u0275text(167, "USA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(168, "td")(169, "div", 38)(170, "span", 152);
    \u0275\u0275text(171, "J");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(172, "div", 136)(173, "h6", 137);
    \u0275\u0275text(174, "Joe Howard");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(175, "p", 138);
    \u0275\u0275text(176, "Senior Developer");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(177, "td")(178, "span", 166);
    \u0275\u0275text(179, "Hired");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(180, "td")(181, "span", 142);
    \u0275\u0275text(182, "10:30Am, may 24, 2020");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(183, "td")(184, "div", 38)(185, "a", 143);
    \u0275\u0275element(186, "i", 144);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(187, "a", 145);
    \u0275\u0275element(188, "i", 146);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(189, "a", 147);
    \u0275\u0275element(190, "i", 148);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(191, "tr")(192, "td")(193, "div", 38)(194, "span", 134);
    \u0275\u0275element(195, "img", 156);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(196, "div", 136)(197, "h6", 137);
    \u0275\u0275text(198, "Bella Davidson");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(199, "p", 138);
    \u0275\u0275text(200, "UI designer ");
    \u0275\u0275elementStart(201, "span", 157);
    \u0275\u0275text(202, " 4 Years");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(203, "td");
    \u0275\u0275element(204, "i", 140);
    \u0275\u0275text(205, "Australia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(206, "td")(207, "div", 38)(208, "span", 134);
    \u0275\u0275element(209, "img", 154);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(210, "div", 136)(211, "h6", 137);
    \u0275\u0275text(212, "Alan Miller");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(213, "p", 138);
    \u0275\u0275text(214, "Ui Director");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(215, "td")(216, "span", 166);
    \u0275\u0275text(217, "Hired");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(218, "td")(219, "span", 142);
    \u0275\u0275text(220, "10:30Am, may 12, 2020");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(221, "td")(222, "div", 38)(223, "a", 143);
    \u0275\u0275element(224, "i", 144);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(225, "a", 145);
    \u0275\u0275element(226, "i", 146);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(227, "a", 147);
    \u0275\u0275element(228, "i", 148);
    \u0275\u0275elementEnd()()()()()()()();
  }
}
function DashboardComponent_ng_template_408_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 117)(1, "div", 118)(2, "div", 119)(3, "div", 120)(4, "span");
    \u0275\u0275text(5, "Show");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 121)(7, "div", 122)(8, "ng-select", 167)(9, "ng-option", 124);
    \u0275\u0275text(10, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "ng-option", 125);
    \u0275\u0275text(12, "25");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "ng-option", 126);
    \u0275\u0275text(14, "50");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "ng-option", 127);
    \u0275\u0275text(16, "100");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18, "entries");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 119)(20, "div", 128);
    \u0275\u0275element(21, "input", 129);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 130)(23, "table", 131)(24, "thead")(25, "tr")(26, "th", 159);
    \u0275\u0275text(27, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "th", 159);
    \u0275\u0275text(29, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "th", 160);
    \u0275\u0275text(31, "Interviewer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th", 159);
    \u0275\u0275text(33, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "th", 159);
    \u0275\u0275text(35, "Schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "th", 161);
    \u0275\u0275text(37, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "tbody")(39, "tr")(40, "td")(41, "div", 38)(42, "span", 134);
    \u0275\u0275element(43, "img", 135);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 136)(45, "h6", 137);
    \u0275\u0275text(46, "Faith Harris");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "p", 138);
    \u0275\u0275text(48, "UI designer ");
    \u0275\u0275elementStart(49, "span", 139);
    \u0275\u0275text(50, " 5 Years");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(51, "td");
    \u0275\u0275element(52, "i", 140);
    \u0275\u0275text(53, "USA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "td")(55, "div", 38)(56, "span", 134);
    \u0275\u0275element(57, "img", 141);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 136)(59, "h6", 137);
    \u0275\u0275text(60, "Berry Olivia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "p", 138);
    \u0275\u0275text(62, "Ui Director");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(63, "td")(64, "span", 168);
    \u0275\u0275text(65, "Rejected");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "td")(67, "span", 142);
    \u0275\u0275text(68, "10:30Am, Jun 16, 2020");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "td")(70, "div", 38)(71, "a", 143);
    \u0275\u0275element(72, "i", 144);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "a", 145);
    \u0275\u0275element(74, "i", 146);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "a", 147);
    \u0275\u0275element(76, "i", 148);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(77, "tr")(78, "td")(79, "div", 38)(80, "span", 134);
    \u0275\u0275element(81, "img", 149);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "div", 136)(83, "h6", 137);
    \u0275\u0275text(84, "James Paige");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "p", 138);
    \u0275\u0275text(86, "HTML Developer ");
    \u0275\u0275elementStart(87, "span", 150);
    \u0275\u0275text(88, " 2 Years");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(89, "td");
    \u0275\u0275element(90, "i", 140);
    \u0275\u0275text(91, "INDIA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "td")(93, "div", 38)(94, "span", 134);
    \u0275\u0275element(95, "img", 151);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "div", 136)(97, "h6", 137);
    \u0275\u0275text(98, "Thomson Chapman");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "p", 138);
    \u0275\u0275text(100, "HTML Team Lead");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(101, "td")(102, "span", 168);
    \u0275\u0275text(103, "Rejected");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(104, "td")(105, "span", 142);
    \u0275\u0275text(106, "10:30Am, Jun 19, 2020");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(107, "td")(108, "div", 38)(109, "a", 143);
    \u0275\u0275element(110, "i", 144);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "a", 145);
    \u0275\u0275element(112, "i", 146);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "a", 147);
    \u0275\u0275element(114, "i", 148);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(115, "tr")(116, "td")(117, "div", 38)(118, "span", 152);
    \u0275\u0275text(119, "L");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "div", 136)(121, "h6", 137);
    \u0275\u0275text(122, "Liam Miller");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "p", 138);
    \u0275\u0275text(124, "UX designer ");
    \u0275\u0275elementStart(125, "span", 153);
    \u0275\u0275text(126, "Fresher");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(127, "td");
    \u0275\u0275element(128, "i", 140);
    \u0275\u0275text(129, "Germany");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "td")(131, "div", 38)(132, "span", 134);
    \u0275\u0275element(133, "img", 154);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(134, "div", 136)(135, "h6", 137);
    \u0275\u0275text(136, "Diane Bailey");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(137, "p", 138);
    \u0275\u0275text(138, "Ui Director");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(139, "td")(140, "span", 168);
    \u0275\u0275text(141, "Rejected");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(142, "td")(143, "span", 142);
    \u0275\u0275text(144, "10:30Am, Jun 02, 2020");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(145, "td")(146, "div", 38)(147, "a", 143);
    \u0275\u0275element(148, "i", 144);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(149, "a", 145);
    \u0275\u0275element(150, "i", 146);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(151, "a", 147);
    \u0275\u0275element(152, "i", 148);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(153, "tr")(154, "td")(155, "div", 38)(156, "span", 134);
    \u0275\u0275element(157, "img", 155);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(158, "div", 136)(159, "h6", 137);
    \u0275\u0275text(160, "Kimberly Berry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(161, "p", 138);
    \u0275\u0275text(162, "PHP Developer ");
    \u0275\u0275elementStart(163, "span", 150);
    \u0275\u0275text(164, " 3 Years");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(165, "td");
    \u0275\u0275element(166, "i", 140);
    \u0275\u0275text(167, "USA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(168, "td")(169, "div", 38)(170, "span", 152);
    \u0275\u0275text(171, "J");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(172, "div", 136)(173, "h6", 137);
    \u0275\u0275text(174, "Joe Howard");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(175, "p", 138);
    \u0275\u0275text(176, "Senior Developer");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(177, "td")(178, "span", 168);
    \u0275\u0275text(179, "Rejected");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(180, "td")(181, "span", 142);
    \u0275\u0275text(182, "10:30Am, may 24, 2020");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(183, "td")(184, "div", 38)(185, "a", 143);
    \u0275\u0275element(186, "i", 144);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(187, "a", 145);
    \u0275\u0275element(188, "i", 146);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(189, "a", 147);
    \u0275\u0275element(190, "i", 148);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(191, "tr")(192, "td")(193, "div", 38)(194, "span", 134);
    \u0275\u0275element(195, "img", 156);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(196, "div", 136)(197, "h6", 137);
    \u0275\u0275text(198, "Bella Davidson");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(199, "p", 138);
    \u0275\u0275text(200, "UI designer ");
    \u0275\u0275elementStart(201, "span", 157);
    \u0275\u0275text(202, " 4 Years");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(203, "td");
    \u0275\u0275element(204, "i", 140);
    \u0275\u0275text(205, "Australia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(206, "td")(207, "div", 38)(208, "span", 134);
    \u0275\u0275element(209, "img", 154);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(210, "div", 136)(211, "h6", 137);
    \u0275\u0275text(212, "Alan Miller");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(213, "p", 138);
    \u0275\u0275text(214, "Ui Director");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(215, "td")(216, "span", 168);
    \u0275\u0275text(217, "Rejected");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(218, "td")(219, "span", 142);
    \u0275\u0275text(220, "10:30Am, may 12, 2020");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(221, "td")(222, "div", 38)(223, "a", 143);
    \u0275\u0275element(224, "i", 144);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(225, "a", 145);
    \u0275\u0275element(226, "i", 146);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(227, "a", 147);
    \u0275\u0275element(228, "i", 148);
    \u0275\u0275elementEnd()()()()()()()();
  }
}
var _DashboardComponent = class _DashboardComponent {
  handleDateClick(arg) {
    const title = prompt("Event Title:");
    if (title) {
      this.calendarEvents = this.calendarEvents.concat({
        title,
        start: arg.date,
        allDay: arg.allDay
      });
    }
  }
  handleEventClick(arg) {
    if (confirm("Are you sure you want to delete this event?")) {
      arg.event.remove();
    }
  }
  refresh() {
    this.showCalendar = false;
    setTimeout(() => this.showCalendar = true, 100);
  }
  constructor() {
    this.active = 1;
    this.maxView = "year";
    this.minuteStep = 5;
    this.minView = "minute";
    this.showCalendar = true;
    this.startView = "day";
    this.views = ["minute", "hour", "day", "month", "year"];
    this.calendarPlugins = [index, index2, index3];
    this.curYear = (0, import_moment.default)().format("YYYY");
    this.curMonth = (0, import_moment.default)().format("MM");
    this.calendarEvents = [
      {
        id: "1",
        start: this.curYear + "-" + this.curMonth + "-02",
        end: this.curYear + "-" + this.curMonth + "-02",
        title: "Spruko Meetup",
        className: "bg-secondary-transparent"
      },
      {
        id: "2",
        start: this.curYear + "-" + this.curMonth + "-17",
        end: this.curYear + "-" + this.curMonth + "-17",
        title: "Design Review",
        className: "bg-info-transparent"
      },
      {
        id: "3",
        start: this.curYear + "-" + this.curMonth + "-13",
        end: this.curYear + "-" + this.curMonth + "-13",
        title: "Lifestyle Conference",
        className: "bg-primary-transparent"
      },
      {
        id: "4",
        start: this.curYear + "-" + this.curMonth + "-21",
        end: this.curYear + "-" + this.curMonth + "-21",
        title: "Team Weekly Brownbag",
        className: "bg-warning-transparent"
      },
      {
        id: "5",
        start: this.curYear + "-" + this.curMonth + "-04T10:00:00",
        end: this.curYear + "-" + this.curMonth + "-06T15:00:00",
        title: "Music Festival",
        className: "bg-success-transparent"
      },
      {
        id: "6",
        start: this.curYear + "-" + this.curMonth + "-08",
        end: this.curYear + "-" + this.curMonth + "-08",
        title: "Attend Lea's Wedding",
        className: "bg-success-transparent"
      },
      {
        id: "7",
        start: this.curYear + "-" + this.curMonth + "-06",
        end: this.curYear + "-" + this.curMonth + "-06",
        title: "Harcates Birthday",
        className: "bg-info-transparent"
      },
      {
        id: "8",
        start: this.curYear + "-" + this.curMonth + "-28",
        end: this.curYear + "-" + this.curMonth + "-28",
        title: "Bunnysin's Birthday",
        className: "bg-info-transparent"
      },
      {
        id: "9",
        start: this.curYear + "-" + this.curMonth + "-03",
        end: this.curYear + "-" + this.curMonth + "-03",
        title: "Lee shin's Birthday",
        className: "bg-info-transparent"
      },
      {
        id: "10",
        start: this.curYear + "-11-11",
        end: this.curYear + "-11-11",
        title: "Shinchan's Birthday",
        className: "bg-info-transparent"
      }
    ];
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
      dateClick: (arg) => this.handleDateClick(arg),
      eventClick: (arg) => this.handleEventClick(arg)
    };
    this.MultipleChartOptions = lineChartOptions;
    this.MultipleChartData = lineChartData;
    this.MultipleChartType = lineChartType;
    this.donutData = DonutChartData;
    this.chartOptions = {
      series: [
        {
          type: "line",
          name: "Applications",
          data: [
            {
              x: "Jan",
              y: 100
            },
            {
              x: "Feb",
              y: 510
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
              y: 510
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
          name: "Shortlisted",
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
              y: 520
            },
            {
              x: "Mar",
              y: 106
            },
            {
              x: "Apr",
              y: 320
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
              y: 400
            },
            {
              x: "Feb",
              y: 730
            },
            {
              x: "Mar",
              y: 610
            },
            {
              x: "Apr",
              y: 430
            },
            {
              x: "May",
              y: 580
            },
            {
              x: "Jun",
              y: 620
            },
            {
              x: "Jul",
              y: 780
            },
            {
              x: "Aug",
              y: 535
            },
            {
              x: "Sep",
              y: 575
            },
            {
              x: "Oct",
              y: 738
            },
            {
              x: "Nov",
              y: 654
            },
            {
              x: "Dec",
              y: 780
            }
          ]
        }
      ],
      chart: {
        height: 310,
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
      colors: ["#3366ff", "rgba(51, 102, 255, 0.5)", "rgba(119, 119, 142, 0.05)"],
      dataLabels: {
        enabled: false
      },
      grid: {
        borderColor: "#f1f1f1",
        strokeDashArray: 3
      },
      stroke: {
        curve: "smooth",
        width: [3, 3, 3],
        dashArray: [0, 6, 0]
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
      toolbar: {
        show: false
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
      series: [80, 29, 50, 30],
      labels: ["Applications", "Interviews", "Reject", "Hired"],
      chart: {
        height: 280,
        type: "donut",
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false,
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
                color: "#6c6f9a",
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
                label: "Total overview",
                fontSize: "18px",
                fontWeight: 400,
                color: "#6c6f9a"
              }
            }
          }
        }
      },
      colors: ["rgba(51, 102, 255, 1)", "rgba(254, 127, 0, 1)", "#f7284a", "#0dcd94"]
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
}, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 420, vars: 35, consts: [["nav", "ngbNav"], [3, "title", "title2", "title1"], [1, "row"], [1, "col-xxl-3", "col-xl-6", "col-lg-6", "col-md-12"], [1, "card"], ["href", "javascript:;"], [1, "card-body"], [1, "col-7"], [1, "mt-0", "text-start"], [1, "fs-16", "fw-semibold"], [1, "mb-0", "mt-1", "text-primary", "fs-25"], [1, "col-5"], [1, "icon1", "bg-primary", "my-auto", "float-end"], [1, "fe", "fe-briefcase"], [1, "mb-0", "mt-1", "text-secondary", "fs-25"], [1, "icon1", "bg-secondary", "my-auto", "float-end"], [1, "fe", "fe-info"], [1, "mb-0", "mt-1", "text-success", "fs-25"], [1, "icon1", "bg-success", "my-auto", "float-end"], [1, "fe", "fe-check"], [1, "mb-0", "mt-1", "text-danger", "fs-25"], [1, "icon1", "bg-danger", "my-auto", "float-end"], [1, "fe", "fe-x"], [1, "col-md-12"], [1, ""], [1, "card-header", "d-flex", "justify-content-between", "align-items-center", "mb-3", "flex-wrap"], [1, "card-title"], [1, "card-options", "d-flex", "mt-2"], [1, "btn-list"], [1, "btn", "btn-primary"], [1, "btn", "btn-light3"], ["ngbDropdown", "", 1, "dropdown"], ["href", "javascript:void(0);", "ngbDropdownToggle", "", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-light3", "dropdown-toggle"], ["ngbDropdownMenu", "", "role", "menu", 1, "dropdown-menu", "dropdown-menu-end"], ["ngbDropdownItem", "", 1, "dropdown-item"], ["href", "javascript:void(0);"], [1, "col-xxl-3", "col-lg-6", "col-md-12"], [1, "card", "custom-card"], [1, "d-flex"], [1, "task-img", "bg-light", "my-auto", "float-end"], ["src", "./assets/images/media/png/17.png", "alt", "img", 1, ""], ["ngbDropdown", "", 1, "ms-auto"], ["ngbDropdownToggle", "", "href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-outline-light", "me-0", "text-muted", "no-caret"], [1, "fe", "fe-more-vertical"], [1, "fe", "fe-eye", "me-2"], [1, "fe", "fe-plus-circle", "me-2"], [1, "fe", "fe-trash-2", "me-2"], [1, "fe", "fe-settings", "me-2"], ["href", "javascript:void(0);", 1, "mb-0", "mt-2", "mb-1", "fw-semibold", "fs-20"], [1, "text-muted", "mb-0"], [1, "card-footer"], [1, "d-md-flex"], [1, "mb-md-0"], [1, "mb-1", "text-muted", "fs-16"], [1, "fw-semibold", "fs-18", "text-default"], [1, "badge", "bg-md", "bg-primary-transparent", "ms-2", "mt-2", "fs-10", "align-middle"], [1, "fs-12", "text-muted", "mb-0"], [1, "ms-auto", "mt-1"], ["data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Job Type", 1, "task-btn", "bg-danger-transparent", "border-0", "me-0", "fw-semibold"], ["src", "./assets/images/media/png/18.png", "alt", "img", 1, ""], ["data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Job Type", 1, "task-btn", "bg-warning-transparent", "border-0", "me-0", "fw-semibold"], ["src", "./assets/images/media/png/19.png", "alt", "img", 1, ""], ["data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Job Type", 1, "task-btn", "bg-primary-transparent", "border-0", "me-0", "fw-semibold"], ["src", "./assets/images/media/png/21.png", "alt", "img", 1, ""], [1, "col-xxl-6", "col-md-12", "col-lg-12"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center", "border-0", "responsive-header"], [1, "card-options"], ["ngbDropdown", "", 1, "btn-list"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-light", "text-dark", "d-flex", "my-1", "float-start"], [1, "dot-label", "bg-primary", "me-2", "my-auto"], [1, "dot-label", "bg-light", "me-2", "my-auto"], ["href", "javascript:void(0);", "ngbDropdownToggle", "", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-outline-light", "my-1", "no-caret"], [1, "fe", "fe-chevron-down"], [1, "chart-wrapper"], ["id", "statistics1"], [3, "series", "chart", "legend", "xaxis", "yaxis", "colors", "markers", "stroke", "plotOptions", "dataLabels", "grid", "labels"], [1, "col-xxl-3", "col-xl-6", "col-md-12", "col-lg-12"], [1, "card-header", "d-flex", "justify-content-between", "border-bottom-0"], ["ngbDropdownToggle", "", "href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "ripple", "btn-outline-light", "dropdown-toggle", "me-0"], [1, "card-body", "pt-0"], [1, "timeline"], [1, "ps-3", "ms-3"], ["href", "javascript:void(0);", 1, "fw-semibold", "fs-16", "mb-2"], [1, "fw-normal", "text-default"], [1, "text-muted", "fs-12", "mb-0"], [1, "primary", "ps-3", "ms-3"], [1, "pink", "ps-3", "ms-3"], [1, "success", "mb-0", "pb-0", "ps-3", "ms-3"], [1, "card", "custom-card", "chart-donut1"], [1, "card-header", "border-0"], [1, "card-body", "px-1"], ["id", "overview", 1, "mx-auto", "apex-dount"], [3, "series", "chart", "legend", "xaxis", "colors", "markers", "stroke", "plotOptions", "dataLabels", "grid", "labels", "yaxis"], [1, "row", "pt-5", "mx-auto"], [1, "col-md-6"], [1, "d-flex", "fw-semibold"], [1, "col-md-6", "mt-3", "mt-md-0"], [1, "dot-label", "bg-secondary", "me-2", "my-auto"], [1, "col-md-6", "mt-3"], [1, "dot-label", "bg-danger", "me-2", "my-auto"], [1, "dot-label", "bg-success", "me-2", "my-auto"], [1, "col-xxl-8", "col-xl-7", "col-md-12", "col-lg-12"], [1, "card", "custom-card", "overflow-hidden"], [1, "card-options", "me-3"], ["ngbDropdownToggle", "", "href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "ripple", "btn-outline-light", "dropdown-toggle"], [1, "tab-menu-heading", "jobtable-tabs", "table_tabs", "mt-2", "p-0"], [1, "tabs-menu1"], ["ngbNav", "", 1, "nav", "panel-tabs", 3, "activeIdChange", "activeId"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "panel-body", "tabs-menu-body", "table_tabs1", "p-0", "border-0"], [3, "ngbNavOutlet"], [1, "col-xxl-4", "col-xl-5", "col-md-12", "col-lg-12"], [1, "row", "calendar"], [1, "border", "p-3"], [3, "options"], [1, "tab-pane"], [1, "row", "my-3", "px-3"], [1, "col-lg-6"], [1, "d-flex", "align-items-center"], [1, "d-flex", "ms-2", "mx-2"], [1, "form-group", "mt-2"], ["name", "quantity", "id", "select-countries1", "placeholder", "10", "data-trigger", "", 1, "form-control", "wd-150", "p-0"], ["value", "1", "selected", ""], ["value", "2"], ["value", "3"], ["value", "4"], [1, "float-end"], ["type", "text", "placeholder", "search", 1, "form-control"], [1, "table-responsive", "jobdatatable"], [1, "table", "table-vcenter", "text-nowrap", "mb-0", "custom-table"], [1, "w-15p"], [1, "wd-25p"], [1, "avatar", "avatar-md", "me-2", "avatar-rounded"], ["src", "./assets/images/users/6.jpg", "alt", "img"], [1, "me-3", "mt-0", "mt-sm-2", "d-block"], [1, "mb-1", "fs-16"], [1, "text-muted", "mb-0", "fs-13"], [1, "badge", "bg-md", "bg-danger-transparent", "ms-2", "fs-10"], [1, "fe", "fe-map-pin", "text-muted", "me-2"], ["src", "./assets/images/users/12.jpg", "alt", "img"], [1, "text-muted"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Contact", 1, "action-btns1"], [1, "fe", "fe-phone-call", "text-primary"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Mail", 1, "action-btns1"], [1, "fe", "fe-mail", "text-primary"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Delete", 1, "action-btns1"], [1, "fe", "fe-trash-2", "text-danger"], ["src", "./assets/images/users/3.jpg", "alt", "img"], [1, "badge", "bg-md", "bg-primary-transparent", "ms-2", "fs-10"], ["src", "./assets/images/users/15.jpg", "alt", "img"], [1, "avatar", "avatar-md", "avatar-rounded", "me-2", "bg-primary-transparent"], [1, "badge", "bg-md", "bg-success-transparent", "ms-2", "fs-10"], ["src", "./assets/images/users/8.jpg", "alt", "img"], ["src", "./assets/images/users/1.jpg", "alt", "img"], ["src", "./assets/images/users/2.jpg", "alt", "img"], [1, "badge", "bg-md", "bg-warning-transparent", "ms-2", "fs-10"], ["name", "quantity", "id", "select-countries2", "data-trigger", "", 1, "form-control", "wd-150"], [1, "border-bottom-0"], [1, "w-15p", "border-bottom-0"], [1, "wd-25p", "border-bottom-0"], [1, "job-status"], [1, "active"], [1, "completed"], ["name", "quantity", "id", "select-countries3", "placeholder", "10", "data-trigger", "", 1, "form-control", "wd-150", "p-0"], [1, "badge", "bg-success-transparent"], ["name", "quantity", "id", "select-countries4", "placeholder", "10", "data-trigger", "", 1, "form-control", "wd-150", "p-0"], [1, "badge", "bg-danger-transparent"]], template: function DashboardComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "app-job-dashboard-page-header", 1);
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "a", 5)(5, "div", 6)(6, "div", 2)(7, "div", 7)(8, "div", 8)(9, "span", 9);
    \u0275\u0275text(10, "Total Openings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h3", 10);
    \u0275\u0275text(12, "2,548");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 11)(14, "div", 12);
    \u0275\u0275element(15, "i", 13);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(16, "div", 3)(17, "div", 4)(18, "a", 5)(19, "div", 6)(20, "div", 2)(21, "div", 7)(22, "div", 8)(23, "span", 9);
    \u0275\u0275text(24, "Interviews");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "h3", 14);
    \u0275\u0275text(26, "862");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 11)(28, "div", 15);
    \u0275\u0275element(29, "i", 16);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(30, "div", 3)(31, "div", 4)(32, "a", 5)(33, "div", 6)(34, "div", 2)(35, "div", 7)(36, "div", 8)(37, "span", 9);
    \u0275\u0275text(38, "Hired");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "h3", 17);
    \u0275\u0275text(40, "194");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 11)(42, "div", 18);
    \u0275\u0275element(43, "i", 19);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(44, "div", 3)(45, "div", 4)(46, "a", 5)(47, "div", 6)(48, "div", 2)(49, "div", 7)(50, "div", 8)(51, "span", 9);
    \u0275\u0275text(52, "Rejected");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "h3", 20);
    \u0275\u0275text(54, "642");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(55, "div", 11)(56, "div", 21);
    \u0275\u0275element(57, "i", 22);
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275elementStart(58, "div", 2)(59, "div", 23)(60, "div", 24)(61, "div", 25)(62, "h4", 26);
    \u0275\u0275text(63, "Recent Published Jobs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 27)(65, "div", 28)(66, "div", 29);
    \u0275\u0275text(67, "Add Job");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 30);
    \u0275\u0275text(69, "View All");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 31)(71, "a", 32);
    \u0275\u0275text(72, " Latest ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "ul", 33)(74, "li", 34)(75, "a", 35);
    \u0275\u0275text(76, "Monthly");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "li", 34)(78, "a", 35);
    \u0275\u0275text(79, "Yearly");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "li", 34)(81, "a", 35);
    \u0275\u0275text(82, "Weekly");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(83, "div", 2)(84, "div", 36)(85, "div", 37)(86, "div", 6)(87, "div", 38)(88, "div", 39);
    \u0275\u0275element(89, "img", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "div", 41)(91, "a", 42);
    \u0275\u0275element(92, "i", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "ul", 33)(94, "li", 34)(95, "a", 35);
    \u0275\u0275element(96, "i", 44);
    \u0275\u0275text(97, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(98, "li", 34)(99, "a", 35);
    \u0275\u0275element(100, "i", 45);
    \u0275\u0275text(101, "Add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(102, "li", 34)(103, "a", 35);
    \u0275\u0275element(104, "i", 46);
    \u0275\u0275text(105, "Remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(106, "li", 34)(107, "a", 35);
    \u0275\u0275element(108, "i", 47);
    \u0275\u0275text(109, "More");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(110, "div", 8)(111, "a", 48);
    \u0275\u0275text(112, "Adobe XD Designer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "p", 49);
    \u0275\u0275text(114, "Fresher/Seniors");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(115, "div", 50)(116, "div", 51)(117, "div", 52)(118, "h6", 53);
    \u0275\u0275text(119, "Applications : ");
    \u0275\u0275elementStart(120, "span", 54);
    \u0275\u0275text(121, "67");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(122, "sup", 55);
    \u0275\u0275text(123, "2 New");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(124, "p", 56);
    \u0275\u0275text(125, "Just Now");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(126, "div", 57)(127, "div", 58);
    \u0275\u0275text(128, "Full Time");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(129, "div", 36)(130, "div", 37)(131, "div", 6)(132, "div", 38)(133, "div", 39);
    \u0275\u0275element(134, "img", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(135, "div", 41)(136, "a", 42);
    \u0275\u0275element(137, "i", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(138, "ul", 33)(139, "li", 34)(140, "a", 35);
    \u0275\u0275element(141, "i", 44);
    \u0275\u0275text(142, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(143, "li", 34)(144, "a", 35);
    \u0275\u0275element(145, "i", 45);
    \u0275\u0275text(146, "Add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(147, "li", 34)(148, "a", 35);
    \u0275\u0275element(149, "i", 46);
    \u0275\u0275text(150, "Remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(151, "li", 34)(152, "a", 35);
    \u0275\u0275element(153, "i", 47);
    \u0275\u0275text(154, "More");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(155, "div", 8)(156, "a", 48);
    \u0275\u0275text(157, "Web Designer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(158, "p", 49);
    \u0275\u0275text(159, "Senior/Developers");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(160, "div", 50)(161, "div", 51)(162, "div", 52)(163, "h6", 53);
    \u0275\u0275text(164, "Applications : ");
    \u0275\u0275elementStart(165, "span", 54);
    \u0275\u0275text(166, "45");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(167, "sup", 55);
    \u0275\u0275text(168, "6 New");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(169, "p", 56);
    \u0275\u0275text(170, "05 Jan");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(171, "div", 57)(172, "div", 60);
    \u0275\u0275text(173, "Part Time");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(174, "div", 36)(175, "div", 37)(176, "div", 6)(177, "div", 38)(178, "div", 39);
    \u0275\u0275element(179, "img", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(180, "div", 41)(181, "a", 42);
    \u0275\u0275element(182, "i", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(183, "ul", 33)(184, "li", 34)(185, "a", 35);
    \u0275\u0275element(186, "i", 44);
    \u0275\u0275text(187, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(188, "li", 34)(189, "a", 35);
    \u0275\u0275element(190, "i", 45);
    \u0275\u0275text(191, "Add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(192, "li", 34)(193, "a", 35);
    \u0275\u0275element(194, "i", 46);
    \u0275\u0275text(195, "Remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(196, "li", 34)(197, "a", 35);
    \u0275\u0275element(198, "i", 47);
    \u0275\u0275text(199, "More");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(200, "div", 8)(201, "a", 48);
    \u0275\u0275text(202, "Angular Developer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(203, "p", 49);
    \u0275\u0275text(204, "Junior/Developers");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(205, "div", 50)(206, "div", 51)(207, "div", 52)(208, "h6", 53);
    \u0275\u0275text(209, "Applications : ");
    \u0275\u0275elementStart(210, "span", 54);
    \u0275\u0275text(211, "20");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(212, "sup", 55);
    \u0275\u0275text(213, "6 New");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(214, "p", 56);
    \u0275\u0275text(215, "1 Week Ago");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(216, "div", 57)(217, "div", 62);
    \u0275\u0275text(218, "Internship");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(219, "div", 36)(220, "div", 37)(221, "div", 6)(222, "div", 38)(223, "div", 39);
    \u0275\u0275element(224, "img", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(225, "div", 41)(226, "a", 42);
    \u0275\u0275element(227, "i", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(228, "ul", 33)(229, "li", 34)(230, "a", 35);
    \u0275\u0275element(231, "i", 44);
    \u0275\u0275text(232, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(233, "li", 34)(234, "a", 35);
    \u0275\u0275element(235, "i", 45);
    \u0275\u0275text(236, "Add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(237, "li", 34)(238, "a", 35);
    \u0275\u0275element(239, "i", 46);
    \u0275\u0275text(240, "Remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(241, "li", 34)(242, "a", 35);
    \u0275\u0275element(243, "i", 47);
    \u0275\u0275text(244, "More");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(245, "div", 8)(246, "a", 48);
    \u0275\u0275text(247, "Jquery Developer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(248, "p", 49);
    \u0275\u0275text(249, "Senior/Developers");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(250, "div", 50)(251, "div", 51)(252, "div", 52)(253, "h6", 53);
    \u0275\u0275text(254, "Applications : ");
    \u0275\u0275elementStart(255, "span", 54);
    \u0275\u0275text(256, "124");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(257, "sup", 55);
    \u0275\u0275text(258, "15 New");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(259, "p", 56);
    \u0275\u0275text(260, "1month Ago");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(261, "div", 57)(262, "div", 58);
    \u0275\u0275text(263, "Full Time");
    \u0275\u0275elementEnd()()()()()()()()()();
    \u0275\u0275elementStart(264, "div", 2)(265, "div", 64)(266, "div", 37)(267, "div", 65)(268, "h4", 26);
    \u0275\u0275text(269, "Statistics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(270, "div", 66)(271, "div", 67)(272, "a", 68);
    \u0275\u0275element(273, "span", 69);
    \u0275\u0275text(274, "Applications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(275, "a", 68);
    \u0275\u0275element(276, "span", 70);
    \u0275\u0275text(277, "Shortlisted");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(278, "a", 71);
    \u0275\u0275text(279, " Select ");
    \u0275\u0275element(280, "i", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(281, "ul", 33)(282, "li", 34)(283, "a", 35);
    \u0275\u0275text(284, "Monthly");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(285, "li", 34)(286, "a", 35);
    \u0275\u0275text(287, "Yearly");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(288, "li", 34)(289, "a", 35);
    \u0275\u0275text(290, "Weekly");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(291, "div", 6)(292, "div", 73)(293, "div", 74);
    \u0275\u0275element(294, "apx-chart", 75);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(295, "div", 76)(296, "div", 37)(297, "div", 77)(298, "h4", 26);
    \u0275\u0275text(299, "Recent Activity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(300, "div", 66)(301, "div", 31)(302, "a", 78);
    \u0275\u0275text(303, " View All ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(304, "ul", 33)(305, "li", 34)(306, "a", 35);
    \u0275\u0275text(307, "Monthly");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(308, "li", 34)(309, "a", 35);
    \u0275\u0275text(310, "Yearly");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(311, "li", 34)(312, "a", 35);
    \u0275\u0275text(313, "Weekly");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(314, "div", 79)(315, "ul", 80)(316, "li", 81)(317, "a", 82);
    \u0275\u0275text(318, " James Miller ");
    \u0275\u0275elementStart(319, "span", 83);
    \u0275\u0275text(320, "Sent you new job sent you new job appliction");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(321, "p", 84);
    \u0275\u0275text(322, " 6 mins ago");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(323, "li", 85)(324, "a", 82);
    \u0275\u0275text(325, ' Interview sheduled with "Anthony" ');
    \u0275\u0275elementStart(326, "span", 83);
    \u0275\u0275text(327, "tomorrow 10am");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(328, "p", 84);
    \u0275\u0275text(329, " 10 mins ago");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(330, "li", 86)(331, "a", 82)(332, "span", 83);
    \u0275\u0275text(333, "Project manager Published new job");
    \u0275\u0275elementEnd();
    \u0275\u0275text(334, " PHP Developer ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(335, "p", 84);
    \u0275\u0275text(336, " 2 Hours ago");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(337, "li", 87)(338, "a", 82);
    \u0275\u0275text(339, " Meeting sheduled ");
    \u0275\u0275elementStart(340, "span", 83);
    \u0275\u0275text(341, "tomorrow 1pm new employees");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(342, "p", 84);
    \u0275\u0275text(343, " 4 Hours ago");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(344, "div", 76)(345, "div", 88)(346, "div", 89)(347, "h4", 26);
    \u0275\u0275text(348, "Overview");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(349, "div", 90)(350, "div", 91);
    \u0275\u0275element(351, "apx-chart", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(352, "div", 93)(353, "div", 94)(354, "div", 95);
    \u0275\u0275element(355, "span", 69);
    \u0275\u0275text(356, "Applications ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(357, "div", 96)(358, "div", 95);
    \u0275\u0275element(359, "span", 97);
    \u0275\u0275text(360, "Interviews ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(361, "div", 98)(362, "div", 95);
    \u0275\u0275element(363, "span", 99);
    \u0275\u0275text(364, "Reject ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(365, "div", 98)(366, "div", 95);
    \u0275\u0275element(367, "span", 100);
    \u0275\u0275text(368, "Hired ");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(369, "div", 2)(370, "div", 101)(371, "div", 102)(372, "div", 77)(373, "h4", 26);
    \u0275\u0275text(374, "Job Applictions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(375, "div", 103)(376, "div", 31)(377, "a", 104);
    \u0275\u0275text(378, " See All ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(379, "ul", 33)(380, "li", 34)(381, "a", 35);
    \u0275\u0275text(382, "Monthly");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(383, "li", 34)(384, "a", 35);
    \u0275\u0275text(385, "Yearly");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(386, "li", 34)(387, "a", 35);
    \u0275\u0275text(388, "Weekly");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(389, "div", 105)(390, "div", 106)(391, "ul", 107, 0);
    \u0275\u0275twoWayListener("activeIdChange", function DashboardComponent_Template_ul_activeIdChange_391_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(393, "li", 108)(394, "a", 109);
    \u0275\u0275text(395, "Applicant");
    \u0275\u0275elementEnd();
    \u0275\u0275template(396, DashboardComponent_ng_template_396_Template, 212, 0, "ng-template", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(397, "li", 108)(398, "a", 109);
    \u0275\u0275text(399, "Interviews Status");
    \u0275\u0275elementEnd();
    \u0275\u0275template(400, DashboardComponent_ng_template_400_Template, 239, 0, "ng-template", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(401, "li", 108)(402, "a", 109);
    \u0275\u0275text(403, "Hired");
    \u0275\u0275elementEnd();
    \u0275\u0275template(404, DashboardComponent_ng_template_404_Template, 229, 0, "ng-template", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(405, "li", 108)(406, "a", 109);
    \u0275\u0275text(407, "Rejected");
    \u0275\u0275elementEnd();
    \u0275\u0275template(408, DashboardComponent_ng_template_408_Template, 229, 0, "ng-template", 110);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(409, "div", 111);
    \u0275\u0275element(410, "div", 112);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(411, "div", 113)(412, "div", 37)(413, "div", 89)(414, "h4", 26);
    \u0275\u0275text(415, "Calendar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(416, "div", 6)(417, "div", 114)(418, "div", 115);
    \u0275\u0275element(419, "full-calendar", 116);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const nav_r2 = \u0275\u0275reference(392);
    \u0275\u0275property("title", "Recruiting")("title2", "Dashboard")("title1", "Job");
    \u0275\u0275advance(294);
    \u0275\u0275property("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("legend", ctx.chartOptions.legend)("xaxis", ctx.chartOptions.xaxis)("yaxis", ctx.chartOptions.yaxis)("colors", ctx.chartOptions.colors)("markers", ctx.chartOptions.markers)("stroke", ctx.chartOptions.stroke)("plotOptions", ctx.chartOptions.plotOptions)("dataLabels", ctx.chartOptions.dataLabels)("grid", ctx.chartOptions.grid)("labels", ctx.chartOptions.labels)("yaxis", ctx.chartOptions.yaxis);
    \u0275\u0275advance(57);
    \u0275\u0275property("series", ctx.chartOptions1.series)("chart", ctx.chartOptions1.chart)("legend", ctx.chartOptions1.legend)("xaxis", ctx.chartOptions1.xaxis)("colors", ctx.chartOptions1.colors)("markers", ctx.chartOptions1.markers)("stroke", ctx.chartOptions1.stroke)("plotOptions", ctx.chartOptions1.plotOptions)("dataLabels", ctx.chartOptions1.dataLabels)("grid", ctx.chartOptions1.grid)("labels", ctx.chartOptions1.labels)("yaxis", ctx.chartOptions1.yaxis);
    \u0275\u0275advance(40);
    \u0275\u0275twoWayProperty("activeId", ctx.active);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngbNavItem", 1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngbNavItem", 2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngbNavItem", 3);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngbNavItem", 4);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngbNavOutlet", nav_r2);
    \u0275\u0275advance(9);
    \u0275\u0275property("options", ctx.calendarOptions);
  }
}, dependencies: [SharedModule, JobDashboardPageHeaderComponent, NgApexchartsModule, ChartComponent, NgbModule, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, NgbNavContent, NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavOutlet, NgbTooltip, NgSelectModule, NgSelectComponent, NgOptionComponent, FullCalendarModule, FullCalendarComponent, RouterModule] });
var DashboardComponent = _DashboardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent" });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=dashboard.component-AFO7GPPR.js.map
