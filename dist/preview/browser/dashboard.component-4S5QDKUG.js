import {
  plugin
} from "./chunk-QMVZNF3C.js";
import "./chunk-AZV4IVWW.js";
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
  NgOptionComponent,
  NgSelectComponent,
  NgSelectModule
} from "./chunk-26H6NGLN.js";
import "./chunk-ZVXZDCDW.js";
import "./chunk-KTQLQ7YR.js";
import "./chunk-ZSUERINM.js";
import {
  NgbCarousel,
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
  NgbSlide,
  NgbTooltip
} from "./chunk-47LBZ5ZO.js";
import {
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵviewQuery
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import {
  __toESM
} from "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/client-dashboard/dashboard/clientDashboardChatData.ts
var barChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 20
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
        stepSize: 5,
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
      label: "Projects",
      categoryPercentage: 0.45,
      data: [27, 18, 27, 23, 17, 19, 22.5, 19.5, 17.5, 18.5, 19.8, 27],
      borderWidth: 0,
      backgroundColor: "#dbe2fc",
      borderColor: "#dbe2fc",
      hoverBackgroundColor: "#dbe2fc",
      hoverBorderColor: "#dbe2fc",
      borderRadius: 50
    },
    {
      label: "Expenses",
      categoryPercentage: 0.45,
      data: [29.5, 22, 23, 17, 20.5, 21, 24.8, 17, 15.8, 21, 22, 28.5],
      borderWidth: 0,
      backgroundColor: "#3366ff",
      borderColor: "#3366ff",
      hoverBackgroundColor: "#3366ff",
      hoverBorderColor: "#3366ff",
      borderRadius: 50
    }
  ]
};
var DonutChartData = {
  series: [80, 29, 50],
  labels: ["Design", "Service", "Development"],
  chart: {
    height: 260,
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
            // color: '#495057',
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
            showAlways: false,
            label: "Total Analysis",
            fontSize: "18px",
            fontWeight: 400
          }
        }
      }
    }
  },
  colors: ["rgba(51, 102, 255, 1)", "rgba(254, 127, 0, 1)"]
};
var lineChartData = {
  datasets: [
    {
      label: "Expenses",
      data: [15, 32, 15, 38, 18, 25, 22],
      backgroundColor: "transparent",
      borderWidth: 3,
      borderColor: "#3366ff",
      hoverBorderColor: "#3366ff"
    },
    {
      label: "",
      data: [25, 28, 21, 33, 18, 36, 18],
      backgroundColor: "#3654afde",
      borderWidth: 3,
      borderColor: "#3654afde",
      fill: "origin"
    }
  ],
  labels: ["2015", "2016", "2017", "2018", "2019", "2020"]
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
        stepSize: 10,
        color: "#8492a6"
      }
    }
  },
  plugins: {
    legend: { display: false }
  }
};
var lineChartType = "line";

// src/app/componets/dashbord/client-dashboard/dashboard/dashboard.component.ts
var import_moment = __toESM(require_moment());
var _c0 = ["external"];
function DashboardComponent_Conditional_156_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 146)(1, "div", 6)(2, "h4", 147);
    \u0275\u0275text(3, "Completed Project");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 53)(5, "div", 148);
    \u0275\u0275element(6, "img", 149);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 150)(8, "h6", 151);
    \u0275\u0275text(9, "Angular App Development ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 152);
    \u0275\u0275text(11, "Application Development");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "h6", 153)(13, "a", 154);
    \u0275\u0275text(14, "Congratulations!");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Your Angular Project Completed Chcek Your Demo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 155)(17, "a", 156);
    \u0275\u0275text(18, "Preview");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("src", ctx_r0.images[0], \u0275\u0275sanitizeUrl);
  }
}
function DashboardComponent_Conditional_156_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 146)(1, "div", 6)(2, "h4", 147);
    \u0275\u0275text(3, "Design Updated");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 53)(5, "div", 148);
    \u0275\u0275element(6, "img", 149);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 150)(8, "h6", 151);
    \u0275\u0275text(9, "Adobe XD Project ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 152);
    \u0275\u0275text(11, "Mobile App Ui Designing");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "h6", 153)(13, "a", 154);
    \u0275\u0275text(14, "Congratulations!");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Your Angular Project Completed Chcek Your Demo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 155)(17, "a", 156);
    \u0275\u0275text(18, "Preview");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("src", ctx_r0.images[0], \u0275\u0275sanitizeUrl);
  }
}
function DashboardComponent_Conditional_156_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 157)(1, "div", 6)(2, "h4", 147);
    \u0275\u0275text(3, "Completed Project");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 53)(5, "div", 158);
    \u0275\u0275element(6, "img", 149);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 150)(8, "h6", 151);
    \u0275\u0275text(9, "HTML Design Project");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 152);
    \u0275\u0275text(11, "Mobile App Ui Designing");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "h6", 153)(13, "a", 159);
    \u0275\u0275text(14, "Congratulations!");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Your App Design uploaded Chcek Your Demo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 155)(17, "a", 160);
    \u0275\u0275text(18, "Preview");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("src", ctx_r0.images[0], \u0275\u0275sanitizeUrl);
  }
}
function DashboardComponent_Conditional_156_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ngb-carousel", 144);
    \u0275\u0275template(1, DashboardComponent_Conditional_156_ng_template_1_Template, 19, 1, "ng-template", 145)(2, DashboardComponent_Conditional_156_ng_template_2_Template, 19, 1, "ng-template", 145);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, DashboardComponent_Conditional_156_ng_template_3_Template, 19, 1, "ng-template", 145);
  }
  if (rf & 2) {
    \u0275\u0275property("showNavigationIndicators", false);
  }
}
function DashboardComponent_ng_template_184_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 161)(1, "div", 89)(2, "table", 162)(3, "thead")(4, "tr")(5, "th", 163);
    \u0275\u0275text(6, "Order Projects");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 163);
    \u0275\u0275text(8, "Order Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 163);
    \u0275\u0275text(10, "Deadline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 163);
    \u0275\u0275text(12, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 163);
    \u0275\u0275text(14, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody")(16, "tr", 91)(17, "td")(18, "div", 53)(19, "div", 116);
    \u0275\u0275element(20, "img", 117);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 118)(22, "h6", 94);
    \u0275\u0275text(23, "Adobe Xd Ui Design");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "div", 95);
    \u0275\u0275elementStart(25, "small", 124);
    \u0275\u0275text(26, "Ui Designing And Prototype");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "td", 164);
    \u0275\u0275text(28, "12-2-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td", 164);
    \u0275\u0275text(30, "15-2-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "td", 165);
    \u0275\u0275element(32, "div", 166);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "td", 97)(34, "div", 100)(35, "a", 167);
    \u0275\u0275element(36, "i", 168);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "a", 169);
    \u0275\u0275element(38, "i", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "ul", 30)(40, "li")(41, "a", 70);
    \u0275\u0275element(42, "i", 83);
    \u0275\u0275text(43, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "li")(45, "a", 70);
    \u0275\u0275element(46, "i", 84);
    \u0275\u0275text(47, "Add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "li")(49, "a", 70);
    \u0275\u0275element(50, "i", 85);
    \u0275\u0275text(51, "Remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "li")(53, "a", 70);
    \u0275\u0275element(54, "i", 87);
    \u0275\u0275text(55, "More");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(56, "tr", 91)(57, "td")(58, "div", 53)(59, "div", 116);
    \u0275\u0275element(60, "span", 134);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 118)(62, "h6", 94);
    \u0275\u0275text(63, "Website Redesign");
    \u0275\u0275elementEnd();
    \u0275\u0275element(64, "div", 95);
    \u0275\u0275elementStart(65, "small", 124);
    \u0275\u0275text(66, "Admin project theme Redesign");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(67, "td", 164);
    \u0275\u0275text(68, "16-1-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "td", 164);
    \u0275\u0275text(70, "12-2-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "td", 165);
    \u0275\u0275element(72, "div", 170);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "td", 97)(74, "div", 100)(75, "a", 167);
    \u0275\u0275element(76, "i", 168);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "a", 169);
    \u0275\u0275element(78, "i", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "ul", 30)(80, "li")(81, "a", 70);
    \u0275\u0275element(82, "i", 83);
    \u0275\u0275text(83, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "li")(85, "a", 70);
    \u0275\u0275element(86, "i", 84);
    \u0275\u0275text(87, "Add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(88, "li")(89, "a", 70);
    \u0275\u0275element(90, "i", 85);
    \u0275\u0275text(91, "Remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(92, "li")(93, "a", 70);
    \u0275\u0275element(94, "i", 87);
    \u0275\u0275text(95, "More");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(96, "tr", 91)(97, "td")(98, "div", 53)(99, "div", 116);
    \u0275\u0275element(100, "img", 171);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "div", 118)(102, "h6", 94);
    \u0275\u0275text(103, "HTML Updated");
    \u0275\u0275elementEnd();
    \u0275\u0275element(104, "div", 95);
    \u0275\u0275elementStart(105, "small", 124);
    \u0275\u0275text(106, "4.2.3 New Version Updated");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(107, "td", 164);
    \u0275\u0275text(108, "16-1-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "td", 164);
    \u0275\u0275text(110, "10-2-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "td", 165);
    \u0275\u0275element(112, "div", 172);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "td", 97)(114, "div", 100)(115, "a", 167);
    \u0275\u0275element(116, "i", 168);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "a", 169);
    \u0275\u0275element(118, "i", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "ul", 30)(120, "li")(121, "a", 70);
    \u0275\u0275element(122, "i", 83);
    \u0275\u0275text(123, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(124, "li")(125, "a", 70);
    \u0275\u0275element(126, "i", 84);
    \u0275\u0275text(127, "Add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(128, "li")(129, "a", 70);
    \u0275\u0275element(130, "i", 85);
    \u0275\u0275text(131, "Remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(132, "li")(133, "a", 70);
    \u0275\u0275element(134, "i", 87);
    \u0275\u0275text(135, "More");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(136, "tr")(137, "td")(138, "div", 53)(139, "div", 116);
    \u0275\u0275element(140, "span", 173);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(141, "div", 118)(142, "h6", 94);
    \u0275\u0275text(143, "Project Updated");
    \u0275\u0275elementEnd();
    \u0275\u0275element(144, "div", 95);
    \u0275\u0275elementStart(145, "small", 124);
    \u0275\u0275text(146, "Senior Protoyper");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(147, "td", 164);
    \u0275\u0275text(148, "16-1-2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(149, "td", 164);
    \u0275\u0275text(150, "9-2-2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(151, "td", 165);
    \u0275\u0275element(152, "div", 174);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(153, "td", 97)(154, "div", 100)(155, "a", 167);
    \u0275\u0275element(156, "i", 168);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(157, "a", 169);
    \u0275\u0275element(158, "i", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(159, "ul", 30)(160, "li")(161, "a", 70);
    \u0275\u0275element(162, "i", 83);
    \u0275\u0275text(163, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(164, "li")(165, "a", 70);
    \u0275\u0275element(166, "i", 84);
    \u0275\u0275text(167, "Add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(168, "li")(169, "a", 70);
    \u0275\u0275element(170, "i", 85);
    \u0275\u0275text(171, "Remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(172, "li")(173, "a", 70);
    \u0275\u0275element(174, "i", 87);
    \u0275\u0275text(175, "More");
    \u0275\u0275elementEnd()()()()()()()()()();
  }
}
function DashboardComponent_ng_template_188_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 175)(1, "div", 89)(2, "table", 162)(3, "thead")(4, "tr")(5, "th", 176);
    \u0275\u0275text(6, "Order Services");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 176);
    \u0275\u0275text(8, "Start Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 176);
    \u0275\u0275text(10, "End Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 177);
    \u0275\u0275text(12, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 177);
    \u0275\u0275text(14, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody")(16, "tr", 91)(17, "td")(18, "div", 53)(19, "div", 116);
    \u0275\u0275element(20, "span", 134);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 118)(22, "h6", 94);
    \u0275\u0275text(23, "Domain Register");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "div", 95);
    \u0275\u0275elementStart(25, "small", 124);
    \u0275\u0275text(26, "www.beauty.com");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "td", 178);
    \u0275\u0275text(28, "12-2-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td", 178);
    \u0275\u0275text(30, "15-2-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "td")(32, "span", 179);
    \u0275\u0275text(33, "Paid");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "td", 54)(35, "a", 180);
    \u0275\u0275text(36, "Renewal");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "tr", 91)(38, "td")(39, "div", 53)(40, "div", 116);
    \u0275\u0275element(41, "span", 181);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 118)(43, "h6", 94);
    \u0275\u0275text(44, "Digital Marketing");
    \u0275\u0275elementEnd();
    \u0275\u0275element(45, "div", 95);
    \u0275\u0275elementStart(46, "small", 124);
    \u0275\u0275text(47, "Angular Project");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(48, "td", 178);
    \u0275\u0275text(49, "16-2-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "td", 178);
    \u0275\u0275text(51, "18-2-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "td")(53, "span", 182);
    \u0275\u0275text(54, "Pending");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "td", 54)(56, "a", 180);
    \u0275\u0275text(57, "Renewal");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(58, "tr", 91)(59, "td")(60, "div", 53)(61, "div", 116);
    \u0275\u0275element(62, "span", 183);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 118)(64, "h6", 94);
    \u0275\u0275text(65, "Website Maintenance");
    \u0275\u0275elementEnd();
    \u0275\u0275element(66, "div", 95);
    \u0275\u0275elementStart(67, "small", 124);
    \u0275\u0275text(68, "Wordpress Template");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(69, "td", 178);
    \u0275\u0275text(70, "10-2-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "td", 178);
    \u0275\u0275text(72, "18-2-2020");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "td")(74, "span", 179);
    \u0275\u0275text(75, "Paid");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "td", 54)(77, "a", 180);
    \u0275\u0275text(78, "Renewal");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(79, "tr")(80, "td")(81, "div", 53)(82, "div", 116);
    \u0275\u0275element(83, "span", 184);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "div", 118)(85, "h6", 94);
    \u0275\u0275text(86, "Hosting Services");
    \u0275\u0275elementEnd();
    \u0275\u0275element(87, "div", 95);
    \u0275\u0275elementStart(88, "small", 124);
    \u0275\u0275text(89, "Beauty Parlour");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(90, "td", 178);
    \u0275\u0275text(91, "9-2-2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "td", 178);
    \u0275\u0275text(93, "15-2-2021");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "td")(95, "span", 182);
    \u0275\u0275text(96, "Pending");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(97, "td", 54)(98, "a", 180);
    \u0275\u0275text(99, "Renewal");
    \u0275\u0275elementEnd()()()()()()();
  }
}
function DashboardComponent_ng_template_192_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 185)(1, "div", 6)(2, "div", 186)(3, "label", 187);
    \u0275\u0275text(4, "Projects");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ng-select", 188)(6, "ng-option", 189);
    \u0275\u0275text(7, "Choose Project");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ng-option", 190);
    \u0275\u0275text(9, "Project 01");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ng-option", 191);
    \u0275\u0275text(11, "Project 02");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ng-option", 192);
    \u0275\u0275text(13, "Project 03");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "ng-option", 193);
    \u0275\u0275text(15, "Project 04");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "ng-option", 194);
    \u0275\u0275text(17, "Project 05");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 195)(19, "label", 187);
    \u0275\u0275text(20, "Priority");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "ng-select", 196)(22, "ng-option", 189);
    \u0275\u0275text(23, "Choose One");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "ng-option", 190);
    \u0275\u0275text(25, "High");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "ng-option", 191);
    \u0275\u0275text(27, "Medium");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "ng-option", 192);
    \u0275\u0275text(29, "Low");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 195)(31, "label", 187);
    \u0275\u0275text(32, "Note:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "textarea", 197);
    \u0275\u0275text(34, "Some text here...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "a", 198);
    \u0275\u0275text(36, "Submit");
    \u0275\u0275elementEnd()()();
  }
}
var _DashboardComponent = class _DashboardComponent {
  /**
   * Sample implementation of a `change` event handler.
   * @param event
   *  The change event.
   */
  onCustomDateChange(event) {
    console.log(event.value);
  }
  refresh() {
    this.showCalendar = false;
    setTimeout(() => this.showCalendar = true, 100);
  }
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
  constructor() {
    this.active = 1;
    this.optionsCircle = {
      chart: {
        height: 100,
        type: "radialBar"
      },
      series: [75],
      colors: ["#0dcd94"],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "40%",
            background: "#fff"
          },
          dataLabels: {
            name: {
              offsetY: 4,
              fontSize: ".825rem",
              fontFamily: "Roboto",
              fontWeight: 500,
              colors: "#4b9bfa"
            },
            value: {
              offsetY: 5,
              color: "#4b9bfa",
              fontSize: ".875rem",
              show: false,
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
      labels: ["75%"]
    };
    this.optionsCircle1 = {
      chart: {
        height: 100,
        type: "radialBar"
      },
      series: [38],
      colors: ["#3366ff"],
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
    this.optionsCircle2 = {
      chart: {
        height: 100,
        type: "radialBar"
      },
      series: [67],
      colors: ["#ffad00"],
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
    this.optionsCircle3 = {
      chart: {
        height: 100,
        type: "radialBar"
      },
      series: [49],
      colors: ["#f34932"],
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
              color: "#f34932",
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
    this.maxView = "year";
    this.minuteStep = 5;
    this.minView = "minute";
    this.showCalendar = true;
    this.startView = "day";
    this.views = ["minute", "hour", "day", "month", "year"];
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
        height: 340,
        toolbar: {
          show: false
        }
      },
      grid: {
        borderColor: "#f1f1f1",
        strokeDashArray: 3
      },
      colors: ["rgb(51, 102, 255)", "#d6e0ff"],
      plotOptions: {
        bar: {
          columnWidth: "50%",
          borderRadius: 5
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2
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
    this.chartOptions1 = {
      series: [80, 29, 50],
      labels: ["Design", "Service", "Development"],
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
                // color: '#495057',
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
                showAlways: false,
                label: "Total Analysis",
                fontSize: "18px",
                fontWeight: 400
              }
            }
          }
        }
      },
      colors: ["rgba(51, 102, 255, 1)", "rgba(254, 127, 0, 1)", "#0dcd94"]
    };
    this.chartOptions2 = {
      series: [
        {
          name: "Accepted",
          type: "line",
          data: [15, 32, 15, 38, 18, 25]
        },
        {
          name: "Rejected",
          type: "area",
          data: [25, 28, 21, 33, 18, 36]
        }
      ],
      chart: {
        height: 190,
        fontFamily: "Poppins, Arial, sans-serif",
        toolbar: {
          show: false
        }
      },
      grid: {
        show: false,
        borderColor: "#f2f6f7"
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false,
        position: "top",
        fontSize: "13px"
      },
      stroke: {
        width: [3, 3],
        curve: "smooth"
      },
      plotOptions: {
        bar: {
          columnWidth: "27%",
          borderRadius: 1
        }
      },
      labels: ["2015", "2016", "2017", "2018", "2019", "2020"],
      colors: ["rgb(51, 102, 255)", "rgba(var(--primary-rgb), 0.2)"]
    };
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
    this.barChartOptions = barChartOptions;
    this.barChartData = barChartData;
    this.barChartType = barChartType;
    this.barChartPlugins = barChartPlugins;
    this.MultipleChartOptions = lineChartOptions;
    this.MultipleChartData = lineChartData;
    this.MultipleChartType = lineChartType;
    this.donutData = DonutChartData;
    this.images = [
      "./assets/images/media/png/19.png",
      "./assets/images/media/png/17.png",
      "./assets/images/media/png/18.png"
    ];
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
}, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 622, vars: 42, consts: [["nav", "ngbNav"], [3, "title", "title2", "title3"], [1, "row"], [1, "col-xxl-9", "col-xl-12", "col-lg-12", "col-md-12"], [1, "col-xxl-4", "col-xl-4", "col-lg-4", "col-md-12"], [1, "card", "custom-card"], [1, "card-body"], [1, "col-9"], [1, "mt-0", "text-start"], [1, "fs-16", "fw-semibold"], [1, "mb-0", "mt-1", "text-primary", "fs-25"], [1, "col-3"], [1, "icon1", "bg-primary", "my-auto", "float-end"], [1, "fe", "fe-briefcase"], [1, "mb-0", "mt-1", "text-secondary", "fs-25"], [1, "icon1", "bg-secondary", "my-auto", "float-end"], [1, "fe", "fe-info"], [1, "mb-0", "mt-1", "text-success", "fs-25"], [1, "icon1", "bg-success", "my-auto", "float-end"], [1, "fe", "fe-check"], [1, "col-xxl-8", "col-xl-8", "col-lg-12", "col-md-12"], [1, "card-header", "justify-content-between"], [1, "card-title"], [1, "card-options"], ["ngbDropdown", "", 1, "btn-list"], ["href", "javascript:void(0);", 1, "btn", "ripple", "btn-outline-light", "text-dark", "float-start", "me-4", "d-flex", "my-1"], [1, "dot-label", "bg-primary", "me-2", "my-auto"], [1, "dot-label", "bg-primary", "bg-opacity-20", "me-2", "my-auto"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "btn", "ripple", "btn-outline-light", "my-1", "no-caret"], [1, "fe", "fe-chevron-down"], ["ngbDropdownMenu", "", "role", "menu", 1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript:void(0);", "ngbDropdownItem", "", 1, "dropdown-item"], [1, "chart-wrapper"], [3, "series", "chart", "legend", "xaxis", "colors", "markers", "stroke", "plotOptions", "dataLabels", "grid", "labels", "yaxis"], [1, "col-xxl-4", "col-xl-4", "col-lg-12", "col-md-12"], [1, "card-header", "border-0"], [1, "card-body", "px-0"], ["id", "analysis", 1, "mx-auto", "apex-dount"], [1, "row", "mt-3"], [1, "col-10", "mx-auto"], [1, "table-responsive"], [1, "table", "table-borderless", "mb-0"], [1, "p-2", "d-flex"], [1, "dot-label", "bg-primary", "me-2", "mt-1"], [1, "fw-normal"], [1, "p-2"], [1, "me-4", "fs-16"], [1, "ms-auto", "fw-semibold", "fs-16"], [1, "dot-label", "bg-secondary", "me-2", "mt-1"], [1, "dot-label", "bg-success", "me-2", "mt-1"], [1, "col-xxl-3", "col-xl-12", "col-lg-12", "col-md-12"], [1, "col-xxl-12", "col-xl-6", "col-lg-12", "col-md-12"], [1, "card-body", "pb-0"], [1, "d-flex"], [1, ""], [1, "mb-1", "mt-1"], [1, "fs-13", "mt-2", "text-danger"], [1, "fe", "fe-arrow-up-right", "me-1", "p-1", "rounded-circle", "bg-danger-transparent", "text-danger"], [1, "ms-2", "text-muted", "fs-13"], [1, "ms-auto"], ["ngbDropdown", "", 1, "dropdown"], ["href", "javascript:void(0);", "ngbDropdownToggle", "", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "ripple", "btn-outline-light", "no-caret"], ["id", "expenses"], [3, "series", "chart", "grid", "dataLabels", "legend", "stroke", "plotOptions", "labels", "colors"], ["id", "carousel-indicator", "data-bs-ride", "carousel", 1, "carousel", "slide", "dashboard-carousel"], [1, "carousel-inner"], [1, "col-xxl-6", "col-xl-6", "col-lg-12", "col-md-12"], [1, "card", "custom-card", "overflow-hidden"], [1, "card-options", "pr-3"], ["ngbDropdownToggle", "", "href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "ripple", "btn-outline-light", "dropdown-toggle"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "tab-menu-heading", "table_tabs", "mt-2", "p-0"], [1, "tabs-menu1"], ["ngbNav", "", 1, "nav", "panel-tabs"], [1, "ms-4", 3, "ngbNavItem"], ["ngbNavLink", "", "data-bs-toggle", "tab", 1, ""], ["ngbNavContent", ""], [3, "ngbNavItem"], ["ngbNavLink", "", "data-bs-toggle", "tab"], [1, "panel-body", "tabs-menu-body", "table_tabs1", "p-0", "border-0"], [1, "tab-content", 3, "ngbNavOutlet"], ["ngbDropdownToggle", "", "data-bs-toggle", "dropdown", "role", "button", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-outline-light", "dropdown-toggle"], ["ngbDropdownItem", "", "href", "javascript:void(0);", 1, "dropdown-item"], [1, "fe", "fe-eye", "me-2"], [1, "fe", "fe-plus-circle", "me-2"], [1, "fe", "fe-trash-2", "me-2"], [1, "fe", "fe-download-cloud", "me-2"], [1, "fe", "fe-settings", "me-2"], [1, "card-body", "p-0", "pt-4"], [1, "table-responsive", "card-table-one"], [1, "table", "table-vcenter", "text-nowrap", "mb-0", "invoice-table"], [1, "border-bottom"], [1, "avatar", "avatar-md", "bradius", "fs-20", "bg-success-transparent", "text-success"], [1, "ms-3", "d-block", "mt-0", "mt-sm-1"], [1, "mb-0", "fs-14", "fw-semibold"], [1, "clearfix"], [1, "text-muted", "fs-11"], [1, "text-start"], [1, "text-start", "fs-13"], [1, "badge", "bg-success-transparent"], ["ngbDropdown", "", 1, "d-flex"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "View Invoice", 1, "action-btns1"], [1, "fe", "fe-file-text", "primary", "text-primary"], ["href", "javascript:void(0);", "ngbDropdownToggle", "", "data-bs-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "action-btns1", "no-caret"], [1, "fe", "fe-more-vertical", "text-primary"], [1, "avatar", "avatar-md", "bradius", "fs-20", "bg-orange-transparent", "text-orange"], [1, "fe", "fe-chevron-up"], [1, "badge", "bg-orange-transparent"], [1, "avatar", "avatar-md", "bradius", "fs-20", "bg-warning-transparent", "text-warning"], [1, "fe", "fe-chevron-left"], [1, "badge", "bg-warning-transparent"], [1, "avatar", "avatar-md", "bradius", "fs-20", "bg-secondary-transparent", "text-secondary"], [1, "badge", "bg-secondary-transparent"], [1, "col-xxl-8", "col-xl-6", "col-md-12", "col-lg-12"], [1, "card-body", "pt-4", "p-0"], [1, "table", "table-vcenter", "text-nowrap", "mb-0", "projecttable"], [1, "table_img", "rounded-circle", "bg-light", "me-3"], ["src", "./assets/images/media/png/17.png", "alt", "img", 1, ""], [1, "me-3", "mt-0", "mt-sm-3", "d-block"], [1, "mb-0", "fs-16", "mt-1", "fw-semibold"], [1, "badge", "bg-primary-light"], [1, "progress", "progress-sm"], [1, "progress-bar", "bg-danger", "w-25"], [1, "text-orange", "fs-15"], [1, "text-muted"], [1, "text-warning", "fs-15"], [1, "fe", "fe-alert-circle", "ms-1"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Mail", 1, "action-btns1"], [1, "fe", "fe-mail", "text-primary"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Delete", 1, "action-btns1"], [1, "fe", "fe-trash-2", "text-danger"], ["src", "./assets/images/media/png/11.png", "alt", "img", 1, ""], [1, "progress-bar", "bg-success", "w-100"], [1, "text-success", "fs-15"], [1, "fe", "fe-globe", "text-primary", "ms-1"], [1, "progress-bar", "bg-warning", "w-75"], [1, "text-primary", "fs-15"], ["src", "./assets/images/media/png/19.png", "alt", "img", 1, ""], [1, "badge", "bg-orange-light", "ms-1"], [1, "progress-bar", "bg-success", "w-95"], [1, "col-xxl-4", "col-xl-6", "col-md-12", "col-lg-12"], [1, "card-body", "pt-2", "pb-3"], [1, "form-group", "calendar"], [3, "options"], [1, "dashboard-carousel", 3, "showNavigationIndicators"], ["ngbSlide", ""], [1, "carousel-item", "active"], [1, "card-title", "mb-4"], [1, "task-img", "bg-primary-transparent", "me-4", "flex-shrink-0"], ["alt", "img", 1, "", 3, "src"], [1, "mt-2", "carousel-body"], [1, "mb-1", "fw-semibold", "fs-16", "text-over"], [1, "fs-14", "text-muted"], [1, "fs-16", "fw-normal", "mt-2", "text-muted"], ["href", "javascript:;", 1, "text-primary"], [1, "d-grid"], ["href", "javascript:;", 1, "btn", "btn-light", "btn-block", "text-primary", "mt-2"], [1, "carousel-item"], [1, "task-img", "bg-primary-transparent", "me-4"], ["href", "javascript:void(0);", 1, "text-primary"], ["href", "javascript:void(0);", 1, "btn", "btn-light", "btn-block", "text-primary", "mt-2"], ["id", "tab5", 1, "p-0", "border-0"], [1, "table", "table-vcenter", "text-nowrap", "mb-0", "orders-table"], [1, "border-top-0"], [1, "text-start", "fs-13", "text-muted"], [1, "custom-min-w-5"], ["id", "attendance"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "ngbTooltip", "send", 1, "action-btns1"], [1, "fe", "fe-send", "primary", "text-primary"], ["ngbDropdownToggle", "", "href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "action-btns1", "no-caret"], ["id", "attendanc2"], ["src", "./assets/images/media/png/18.png", "alt", "img", 1, ""], ["id", "attendance3"], [1, "fe", "fe-trending-up", "text-primary", "ms-1"], ["id", "attendance4"], ["id", "tab6", 1, "p-0", "border-0"], [1, "wd-10", "border-top-0"], [1, "wd-15", "border-top-0"], [1, "fs-13", "text-muted"], [1, "badge", "bg-success"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-primary"], [1, "fa", "fa-bullhorn", "text-pink", "ms-1"], [1, "badge", "bg-danger"], [1, "fe", "fe-airplay", "text-info", "ms-1"], [1, "fe", "fe-server", "text-orange", "ms-1"], ["id", "tab7", 1, "p-0", "border-0"], [1, "form-group"], [1, "form-label"], ["name", "projects", "placeholder", "Choose Project", 1, "custom-select", "select2"], ["value", "0"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], [1, "form-group", "mt-3"], ["name", "projects", "placeholder", "Choose One", 1, "custom-select", "select2"], ["rows", "3", 1, "form-control"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "mt-4"]], template: function DashboardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-task-dashboard-page-header", 1);
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "div", 2)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 2)(8, "div", 7)(9, "div", 8)(10, "span", 9);
    \u0275\u0275text(11, "Total Projects");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "h3", 10);
    \u0275\u0275text(13, "12,548");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 11)(15, "div", 12);
    \u0275\u0275element(16, "i", 13);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(17, "div", 4)(18, "div", 5)(19, "div", 6)(20, "div", 2)(21, "div", 7)(22, "div", 8)(23, "span", 9);
    \u0275\u0275text(24, "On Going");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "h3", 14);
    \u0275\u0275text(26, "94");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 11)(28, "div", 15);
    \u0275\u0275element(29, "i", 16);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(30, "div", 4)(31, "div", 5)(32, "div", 6)(33, "div", 2)(34, "div", 7)(35, "div", 8)(36, "span", 9);
    \u0275\u0275text(37, "Completed Projects");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "h3", 17);
    \u0275\u0275text(39, "11,134");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 11)(41, "div", 18);
    \u0275\u0275element(42, "i", 19);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(43, "div", 2)(44, "div", 20)(45, "div", 5)(46, "div", 21)(47, "h4", 22);
    \u0275\u0275text(48, "Statistics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 23)(50, "div", 24)(51, "a", 25);
    \u0275\u0275element(52, "span", 26);
    \u0275\u0275text(53, "Expenses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "a", 25);
    \u0275\u0275element(55, "span", 27);
    \u0275\u0275text(56, "Projects");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "a", 28);
    \u0275\u0275text(58, " Year ");
    \u0275\u0275element(59, "i", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "ul", 30)(61, "li")(62, "a", 31);
    \u0275\u0275text(63, "Yearly");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "li")(65, "a", 31);
    \u0275\u0275text(66, "Monthly");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "li")(68, "a", 31);
    \u0275\u0275text(69, "Weekly");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(70, "div", 6)(71, "div", 32);
    \u0275\u0275element(72, "apx-chart", 33);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(73, "div", 34)(74, "div", 5)(75, "div", 35)(76, "h4", 22);
    \u0275\u0275text(77, "Spend Analysis ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 36)(79, "div", 37);
    \u0275\u0275element(80, "apx-chart", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "div", 38)(82, "div", 39)(83, "div", 40)(84, "table", 41)(85, "tbody")(86, "tr")(87, "td", 42);
    \u0275\u0275element(88, "span", 43);
    \u0275\u0275elementStart(89, "span", 44);
    \u0275\u0275text(90, " Design");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(91, "td", 45)(92, "span", 46);
    \u0275\u0275text(93, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "span", 47);
    \u0275\u0275text(95, "$953");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(96, "tr")(97, "td", 42);
    \u0275\u0275element(98, "span", 48);
    \u0275\u0275elementStart(99, "span", 44);
    \u0275\u0275text(100, "Development");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(101, "td", 45)(102, "span", 46);
    \u0275\u0275text(103, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "span", 47);
    \u0275\u0275text(105, "$12,426");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(106, "tr")(107, "td", 42);
    \u0275\u0275element(108, "span", 49);
    \u0275\u0275elementStart(109, "span", 44);
    \u0275\u0275text(110, "Service");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(111, "td", 45)(112, "span", 46);
    \u0275\u0275text(113, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "span", 47);
    \u0275\u0275text(115, "$25,453");
    \u0275\u0275elementEnd()()()()()()()()()()()()();
    \u0275\u0275elementStart(116, "div", 50)(117, "div", 2)(118, "div", 51)(119, "div", 5)(120, "div", 52)(121, "div", 53)(122, "div", 54)(123, "div", 8)(124, "span", 9);
    \u0275\u0275text(125, "Total Expenses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "h2", 55);
    \u0275\u0275text(127, "$21,5489");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(128, "div", 54)(129, "span", 56);
    \u0275\u0275element(130, "i", 57);
    \u0275\u0275text(131, "+24% ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(132, "span", 58);
    \u0275\u0275text(133, "then Last Year");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(134, "div", 59)(135, "div", 60)(136, "a", 61);
    \u0275\u0275text(137, " Year ");
    \u0275\u0275element(138, "i", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(139, "ul", 30)(140, "li")(141, "a", 31);
    \u0275\u0275text(142, "Yearly");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(143, "li")(144, "a", 31);
    \u0275\u0275text(145, "Monthly");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(146, "li")(147, "a", 31);
    \u0275\u0275text(148, "Weekly");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(149, "div", 32)(150, "div", 62);
    \u0275\u0275element(151, "apx-chart", 63);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(152, "div", 51)(153, "div", 5)(154, "div", 64)(155, "div", 65);
    \u0275\u0275template(156, DashboardComponent_Conditional_156_Template, 4, 1);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(157, "div", 2)(158, "div", 66)(159, "div", 67)(160, "div", 21)(161, "h4", 22);
    \u0275\u0275text(162, "Recent Orders");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(163, "div", 68)(164, "div", 60)(165, "a", 69);
    \u0275\u0275text(166, " See All");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(167, "ul", 30)(168, "li")(169, "a", 70);
    \u0275\u0275text(170, "Monthly");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(171, "li")(172, "a", 70);
    \u0275\u0275text(173, "Yearly");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(174, "li")(175, "a", 70);
    \u0275\u0275text(176, "Weekly");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(177, "div", 71)(178, "div", 72)(179, "ul", 73, 0)(181, "li", 74)(182, "a", 75);
    \u0275\u0275text(183, "Projects");
    \u0275\u0275elementEnd();
    \u0275\u0275template(184, DashboardComponent_ng_template_184_Template, 176, 0, "ng-template", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(185, "li", 77)(186, "a", 78);
    \u0275\u0275text(187, "Services");
    \u0275\u0275elementEnd();
    \u0275\u0275template(188, DashboardComponent_ng_template_188_Template, 100, 0, "ng-template", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(189, "li", 77)(190, "a", 78);
    \u0275\u0275text(191, "Support");
    \u0275\u0275elementEnd();
    \u0275\u0275template(192, DashboardComponent_ng_template_192_Template, 37, 0, "ng-template", 76);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(193, "div", 79);
    \u0275\u0275element(194, "div", 80);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(195, "div", 66)(196, "div", 67)(197, "div", 21)(198, "h4", 22);
    \u0275\u0275text(199, "Recent Invoices");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(200, "div", 68)(201, "div", 60)(202, "a", 81);
    \u0275\u0275text(203, " View All");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(204, "ul", 30)(205, "li")(206, "a", 82);
    \u0275\u0275element(207, "i", 83);
    \u0275\u0275text(208, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(209, "li")(210, "a", 82);
    \u0275\u0275element(211, "i", 84);
    \u0275\u0275text(212, "Add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(213, "li")(214, "a", 82);
    \u0275\u0275element(215, "i", 85);
    \u0275\u0275text(216, "Remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(217, "li")(218, "a", 82);
    \u0275\u0275element(219, "i", 86);
    \u0275\u0275text(220, "Download");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(221, "li")(222, "a", 82);
    \u0275\u0275element(223, "i", 87);
    \u0275\u0275text(224, "More");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(225, "div", 88)(226, "div", 89)(227, "table", 90)(228, "thead")(229, "tr")(230, "th");
    \u0275\u0275text(231, "Invoice ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(232, "th");
    \u0275\u0275text(233, "Projects");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(234, "th");
    \u0275\u0275text(235, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(236, "th");
    \u0275\u0275text(237, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(238, "th");
    \u0275\u0275text(239, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(240, "tbody")(241, "tr", 91)(242, "td")(243, "div", 53)(244, "span", 92);
    \u0275\u0275element(245, "span", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(246, "div", 93)(247, "h6", 94);
    \u0275\u0275text(248, "#864135");
    \u0275\u0275elementEnd();
    \u0275\u0275element(249, "div", 95);
    \u0275\u0275elementStart(250, "small", 96);
    \u0275\u0275text(251, "05 Jan 2020");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(252, "td", 97)(253, "h6", 94);
    \u0275\u0275text(254, "Angular Department");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(255, "td", 98)(256, "h6", 94);
    \u0275\u0275text(257, "$15,426");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(258, "td")(259, "span", 99);
    \u0275\u0275text(260, "Paid");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(261, "td", 97)(262, "div", 100)(263, "a", 101);
    \u0275\u0275element(264, "i", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(265, "a", 103);
    \u0275\u0275element(266, "i", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(267, "ul", 30)(268, "li")(269, "a", 31);
    \u0275\u0275element(270, "i", 83);
    \u0275\u0275text(271, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(272, "li")(273, "a", 31);
    \u0275\u0275element(274, "i", 84);
    \u0275\u0275text(275, "Add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(276, "li")(277, "a", 31);
    \u0275\u0275element(278, "i", 85);
    \u0275\u0275text(279, "Remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(280, "li")(281, "a", 31);
    \u0275\u0275element(282, "i", 87);
    \u0275\u0275text(283, "More");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(284, "tr", 91)(285, "td")(286, "div", 53)(287, "span", 105);
    \u0275\u0275element(288, "span", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(289, "div", 93)(290, "h6", 94);
    \u0275\u0275text(291, "#456820");
    \u0275\u0275elementEnd();
    \u0275\u0275element(292, "div", 95);
    \u0275\u0275elementStart(293, "small", 96);
    \u0275\u0275text(294, "03 Jan 2020");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(295, "td", 97)(296, "h6", 94);
    \u0275\u0275text(297, "Admin Template");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(298, "td", 98)(299, "h6", 94);
    \u0275\u0275text(300, "$1421");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(301, "td")(302, "span", 107);
    \u0275\u0275text(303, "Overdue");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(304, "td", 97)(305, "div", 100)(306, "a", 101);
    \u0275\u0275element(307, "i", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(308, "a", 103);
    \u0275\u0275element(309, "i", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(310, "ul", 30)(311, "li")(312, "a", 31);
    \u0275\u0275element(313, "i", 83);
    \u0275\u0275text(314, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(315, "li")(316, "a", 31);
    \u0275\u0275element(317, "i", 84);
    \u0275\u0275text(318, "Add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(319, "li")(320, "a", 31);
    \u0275\u0275element(321, "i", 85);
    \u0275\u0275text(322, "Remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(323, "li")(324, "a", 31);
    \u0275\u0275element(325, "i", 87);
    \u0275\u0275text(326, "More");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(327, "tr")(328, "td")(329, "div", 53)(330, "span", 108);
    \u0275\u0275element(331, "span", 109);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(332, "div", 93)(333, "h6", 94);
    \u0275\u0275text(334, "#956298");
    \u0275\u0275elementEnd();
    \u0275\u0275element(335, "div", 95);
    \u0275\u0275elementStart(336, "small", 96);
    \u0275\u0275text(337, "29 Dec 2019");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(338, "td", 97)(339, "h6", 94);
    \u0275\u0275text(340, "HTML Update");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(341, "td", 98)(342, "h6", 94);
    \u0275\u0275text(343, "$8427");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(344, "td")(345, "span", 110);
    \u0275\u0275text(346, "Unpaid");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(347, "td", 97)(348, "div", 100)(349, "a", 101);
    \u0275\u0275element(350, "i", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(351, "a", 103);
    \u0275\u0275element(352, "i", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(353, "ul", 30)(354, "li")(355, "a", 31);
    \u0275\u0275element(356, "i", 83);
    \u0275\u0275text(357, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(358, "li")(359, "a", 31);
    \u0275\u0275element(360, "i", 84);
    \u0275\u0275text(361, "Add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(362, "li")(363, "a", 31);
    \u0275\u0275element(364, "i", 85);
    \u0275\u0275text(365, "Remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(366, "li")(367, "a", 31);
    \u0275\u0275element(368, "i", 87);
    \u0275\u0275text(369, "More");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(370, "tr", 91)(371, "td")(372, "div", 53)(373, "span", 92);
    \u0275\u0275element(374, "span", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(375, "div", 93)(376, "h6", 94);
    \u0275\u0275text(377, "#190675");
    \u0275\u0275elementEnd();
    \u0275\u0275element(378, "div", 95);
    \u0275\u0275elementStart(379, "small", 96);
    \u0275\u0275text(380, "29 Dec 2019");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(381, "td", 97)(382, "h6", 94);
    \u0275\u0275text(383, "HTML Update");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(384, "td", 98)(385, "h6", 94);
    \u0275\u0275text(386, "$8427");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(387, "td")(388, "span", 99);
    \u0275\u0275text(389, "Paid");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(390, "td", 97)(391, "div", 100)(392, "a", 101);
    \u0275\u0275element(393, "i", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(394, "a", 103);
    \u0275\u0275element(395, "i", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(396, "ul", 30)(397, "li")(398, "a", 31);
    \u0275\u0275element(399, "i", 83);
    \u0275\u0275text(400, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(401, "li")(402, "a", 31);
    \u0275\u0275element(403, "i", 84);
    \u0275\u0275text(404, "Add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(405, "li")(406, "a", 31);
    \u0275\u0275element(407, "i", 85);
    \u0275\u0275text(408, "Remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(409, "li")(410, "a", 31);
    \u0275\u0275element(411, "i", 87);
    \u0275\u0275text(412, "More");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(413, "tr", 54)(414, "td")(415, "div", 53)(416, "span", 111);
    \u0275\u0275element(417, "span", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(418, "div", 93)(419, "h6", 94);
    \u0275\u0275text(420, "#067298");
    \u0275\u0275elementEnd();
    \u0275\u0275element(421, "div", 95);
    \u0275\u0275elementStart(422, "small", 96);
    \u0275\u0275text(423, "28 Dec 2019");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(424, "td", 97)(425, "h6", 94);
    \u0275\u0275text(426, "Hosting Template");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(427, "td", 98)(428, "h6", 94);
    \u0275\u0275text(429, "$12,452");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(430, "td")(431, "span", 112);
    \u0275\u0275text(432, "Draft");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(433, "td", 97)(434, "div", 100)(435, "a", 101);
    \u0275\u0275element(436, "i", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(437, "a", 103);
    \u0275\u0275element(438, "i", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(439, "ul", 30)(440, "li")(441, "a", 31);
    \u0275\u0275element(442, "i", 83);
    \u0275\u0275text(443, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(444, "li")(445, "a", 31);
    \u0275\u0275element(446, "i", 84);
    \u0275\u0275text(447, "Add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(448, "li")(449, "a", 31);
    \u0275\u0275element(450, "i", 85);
    \u0275\u0275text(451, "Remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(452, "li")(453, "a", 31);
    \u0275\u0275element(454, "i", 87);
    \u0275\u0275text(455, "More");
    \u0275\u0275elementEnd()()()()()()()()()()()()();
    \u0275\u0275elementStart(456, "div", 2)(457, "div", 113)(458, "div", 67)(459, "div", 35)(460, "h4", 22);
    \u0275\u0275text(461, "Project");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(462, "div", 114)(463, "div", 89)(464, "table", 115)(465, "thead")(466, "tr")(467, "th");
    \u0275\u0275text(468, "Project Title ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(469, "th");
    \u0275\u0275text(470, "Project Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(471, "th");
    \u0275\u0275elementStart(472, "th");
    \u0275\u0275text(473, "Priority");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(474, "th");
    \u0275\u0275text(475, "Work Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(476, "th");
    \u0275\u0275text(477, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(478, "tbody")(479, "tr")(480, "td")(481, "div", 53)(482, "div", 116);
    \u0275\u0275element(483, "img", 117);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(484, "div", 118)(485, "h5", 119);
    \u0275\u0275text(486, "Ui Design ");
    \u0275\u0275elementStart(487, "span", 120);
    \u0275\u0275text(488, "Medium");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(489, "td")(490, "div", 121);
    \u0275\u0275element(491, "div", 122);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(492, "td")(493, "span", 123);
    \u0275\u0275text(494, "27%");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(495, "td")(496, "span", 124);
    \u0275\u0275text(497, "Low");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(498, "td")(499, "span", 125);
    \u0275\u0275text(500, "On Hold ");
    \u0275\u0275element(501, "i", 126);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(502, "td", 97)(503, "div", 53)(504, "a", 127);
    \u0275\u0275element(505, "i", 128);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(506, "a", 129);
    \u0275\u0275element(507, "i", 130);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(508, "tr")(509, "td")(510, "div", 53)(511, "div", 116);
    \u0275\u0275element(512, "img", 131);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(513, "div", 118)(514, "h5", 119);
    \u0275\u0275text(515, "Jquery Issues Fixed");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(516, "td")(517, "div", 121);
    \u0275\u0275element(518, "div", 132);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(519, "td")(520, "span", 133);
    \u0275\u0275text(521, "97%");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(522, "td")(523, "span", 124);
    \u0275\u0275text(524, "High");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(525, "td")(526, "span", 133);
    \u0275\u0275text(527, "Completed ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(528, "td", 97)(529, "div", 53)(530, "a", 127);
    \u0275\u0275element(531, "i", 128);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(532, "a", 129);
    \u0275\u0275element(533, "i", 130);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(534, "tr")(535, "td")(536, "div", 53)(537, "div", 116);
    \u0275\u0275element(538, "span", 134);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(539, "div", 118)(540, "h5", 119);
    \u0275\u0275text(541, "Website Redesign");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(542, "td")(543, "div", 121);
    \u0275\u0275element(544, "div", 135);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(545, "td")(546, "span", 125);
    \u0275\u0275text(547, "75%");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(548, "td")(549, "span", 124);
    \u0275\u0275text(550, "Low");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(551, "td")(552, "span", 136);
    \u0275\u0275text(553, "On Progress ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(554, "td", 97)(555, "div", 53)(556, "a", 127);
    \u0275\u0275element(557, "i", 128);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(558, "a", 129);
    \u0275\u0275element(559, "i", 130);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(560, "tr")(561, "td")(562, "div", 53)(563, "div", 116);
    \u0275\u0275element(564, "img", 131);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(565, "div", 118)(566, "h5", 119);
    \u0275\u0275text(567, "Jquery Issues Fixed");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(568, "td")(569, "div", 121);
    \u0275\u0275element(570, "div", 132);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(571, "td")(572, "span", 133);
    \u0275\u0275text(573, "97%");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(574, "td")(575, "span", 124);
    \u0275\u0275text(576, "High");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(577, "td")(578, "span", 133);
    \u0275\u0275text(579, "Completed ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(580, "td", 97)(581, "div", 53)(582, "a", 127);
    \u0275\u0275element(583, "i", 128);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(584, "a", 129);
    \u0275\u0275element(585, "i", 130);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(586, "tr")(587, "td")(588, "div", 53)(589, "div", 116);
    \u0275\u0275element(590, "img", 137);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(591, "div", 118)(592, "h5", 119);
    \u0275\u0275text(593, "Angular Development ");
    \u0275\u0275elementStart(594, "span", 138);
    \u0275\u0275text(595, "Urgent");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(596, "td")(597, "div", 121);
    \u0275\u0275element(598, "div", 139);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(599, "td")(600, "span", 133);
    \u0275\u0275text(601, "95%");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(602, "td")(603, "span", 124);
    \u0275\u0275text(604, "Medium");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(605, "td")(606, "span", 133);
    \u0275\u0275text(607, "Completed");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(608, "td", 97)(609, "div", 53)(610, "a", 127);
    \u0275\u0275element(611, "i", 128);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(612, "a", 129);
    \u0275\u0275element(613, "i", 130);
    \u0275\u0275elementEnd()()()()()()()()()();
    \u0275\u0275elementStart(614, "div", 140)(615, "div", 5)(616, "div", 35)(617, "h4", 22);
    \u0275\u0275text(618, "Calendar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(619, "div", 141)(620, "div", 142);
    \u0275\u0275element(621, "full-calendar", 143);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const nav_r2 = \u0275\u0275reference(180);
    \u0275\u0275property("title", "Client")("title2", "Dashboard")("title3", "Project");
    \u0275\u0275advance(72);
    \u0275\u0275property("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("legend", ctx.chartOptions.legend)("xaxis", ctx.chartOptions.xaxis)("colors", ctx.chartOptions.colors)("markers", ctx.chartOptions.markers)("stroke", ctx.chartOptions.stroke)("plotOptions", ctx.chartOptions.plotOptions)("dataLabels", ctx.chartOptions.dataLabels)("grid", ctx.chartOptions.grid)("labels", ctx.chartOptions.labels)("yaxis", ctx.chartOptions.yaxis);
    \u0275\u0275advance(8);
    \u0275\u0275property("series", ctx.chartOptions1.series)("chart", ctx.chartOptions1.chart)("legend", ctx.chartOptions1.legend)("xaxis", ctx.chartOptions1.xaxis)("colors", ctx.chartOptions1.colors)("markers", ctx.chartOptions1.markers)("stroke", ctx.chartOptions1.stroke)("plotOptions", ctx.chartOptions1.plotOptions)("dataLabels", ctx.chartOptions1.dataLabels)("grid", ctx.chartOptions1.grid)("labels", ctx.chartOptions1.labels)("yaxis", ctx.chartOptions1.yaxis);
    \u0275\u0275advance(71);
    \u0275\u0275property("series", ctx.chartOptions2.series)("chart", ctx.chartOptions2.chart)("grid", ctx.chartOptions2.grid)("dataLabels", ctx.chartOptions2.dataLabels)("legend", ctx.chartOptions2.legend)("stroke", ctx.chartOptions2.stroke)("plotOptions", ctx.chartOptions2.plotOptions)("labels", ctx.chartOptions2.labels)("colors", ctx.chartOptions2.colors);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.images ? 156 : -1);
    \u0275\u0275advance(25);
    \u0275\u0275property("ngbNavItem", 1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngbNavItem", 2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngbNavItem", 3);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngbNavOutlet", nav_r2);
    \u0275\u0275advance(427);
    \u0275\u0275property("options", ctx.calendarOptions);
  }
}, dependencies: [
  SharedModule,
  TaskDashboardPageHeaderComponent,
  NgSelectModule,
  NgSelectComponent,
  NgOptionComponent,
  NgbModule,
  NgbCarousel,
  NgbSlide,
  NgbDropdown,
  NgbDropdownToggle,
  NgbDropdownMenu,
  NgbDropdownItem,
  NgbNavContent,
  NgbNav,
  NgbNavItem,
  NgbNavItemRole,
  NgbNavLink,
  NgbNavLinkBase,
  NgbNavOutlet,
  NgbTooltip,
  NgApexchartsModule,
  ChartComponent,
  RouterModule,
  FullCalendarModule,
  FullCalendarComponent
] });
var DashboardComponent = _DashboardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent" });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=dashboard.component-4S5QDKUG.js.map
