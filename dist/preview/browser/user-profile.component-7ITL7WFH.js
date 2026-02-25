import {
  NgApexchartsModule
} from "./chunk-BFCIYJJG.js";
import {
  MatInput,
  MatPaginator,
  MatSort,
  MatSortHeader,
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
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatNoDataRow,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource
} from "./chunk-ZVXZDCDW.js";
import "./chunk-KTQLQ7YR.js";
import {
  FlatpickrDefaults,
  FlatpickrDirective,
  FlatpickrModule,
  esm_default
} from "./chunk-ZSUERINM.js";
import {
  FormsModule,
  NgbModal,
  NgbModule,
  NgbProgressbar,
  NgbRatingConfig,
  NgbTooltip,
  ReactiveFormsModule
} from "./chunk-47LBZ5ZO.js";
import {
  RouterLink,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/task-dashboard/user-profile/user-profile.component.ts
var _c0 = () => [8, 25, 100];
function UserProfileComponent_th_274_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 115);
    \u0275\u0275text(1, " No ");
    \u0275\u0275elementEnd();
  }
}
function UserProfileComponent_td_275_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 116);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r2.No, " ");
  }
}
function UserProfileComponent_th_277_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 115);
    \u0275\u0275text(1, " Task ");
    \u0275\u0275elementEnd();
  }
}
function UserProfileComponent_td_278_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 117)(1, "div", 118);
    \u0275\u0275element(2, "span");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("bg-", row_r3.badge, " dot-label1 me-2 mt-1");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.Task);
  }
}
function UserProfileComponent_th_280_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 115);
    \u0275\u0275text(1, " Priority ");
    \u0275\u0275elementEnd();
  }
}
function UserProfileComponent_td_281_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 117)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("badge bg-", row_r4.PriorityStatus, "-transparent");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r4.Priority, "");
  }
}
function UserProfileComponent_th_283_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 115);
    \u0275\u0275text(1, " StartDate ");
    \u0275\u0275elementEnd();
  }
}
function UserProfileComponent_td_284_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 117);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r5.StartDate, " ");
  }
}
function UserProfileComponent_th_286_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 115);
    \u0275\u0275text(1, " Deadline ");
    \u0275\u0275elementEnd();
  }
}
function UserProfileComponent_td_287_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 117);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.Deadline);
  }
}
function UserProfileComponent_th_289_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 115);
    \u0275\u0275text(1, " Progress ");
    \u0275\u0275elementEnd();
  }
}
function UserProfileComponent_td_290_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 117);
    \u0275\u0275element(1, "ngb-progressbar", 119);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("type", row_r7.progressStatus);
    \u0275\u0275property("value", row_r7.progress);
  }
}
function UserProfileComponent_th_292_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 115);
    \u0275\u0275text(1, " WorkStatus ");
    \u0275\u0275elementEnd();
  }
}
function UserProfileComponent_td_293_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 120);
    \u0275\u0275element(1, "span", 121);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("ngbTooltip", row_r8.worksInfoText);
  }
}
function UserProfileComponent_td_293_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 117)(1, "div", 40)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, UserProfileComponent_td_293_Conditional_4_Template, 2, 1, "span", 120);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("badge bg-", row_r8.worksStatus, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r8.worksText);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r8.workInfoStatus ? 4 : -1);
  }
}
function UserProfileComponent_th_295_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 122);
    \u0275\u0275text(1, " Action ");
    \u0275\u0275elementEnd();
  }
}
function UserProfileComponent_td_296_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 117)(1, "div", 118)(2, "a", 123);
    \u0275\u0275element(3, "i", 124);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 125);
    \u0275\u0275listener("click", function UserProfileComponent_td_296_Template_a_click_4_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r9 = \u0275\u0275nextContext();
      const editContent_r11 = \u0275\u0275reference(302);
      return \u0275\u0275resetView(ctx_r9.edit(editContent_r11));
    });
    \u0275\u0275element(5, "i", 126);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 127);
    \u0275\u0275listener("click", function UserProfileComponent_td_296_Template_a_click_6_listener() {
      const row_r12 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r9 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r9.removeData(row_r12.No));
    });
    \u0275\u0275element(7, "i", 128);
    \u0275\u0275elementEnd()()();
  }
}
function UserProfileComponent_tr_297_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 129);
  }
}
function UserProfileComponent_tr_298_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 130);
  }
}
function UserProfileComponent_tr_299_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 131)(1, "td", 132);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const input_r13 = \u0275\u0275reference(269);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1('No data matching the filter "', input_r13.value, '"');
  }
}
function UserProfileComponent_ng_template_301_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 133)(1, "h5", 134);
    \u0275\u0275text(2, "Edit Task");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 135);
    \u0275\u0275listener("click", function UserProfileComponent_ng_template_301_Template_button_click_3_listener() {
      const modal_r15 = \u0275\u0275restoreView(_r14).$implicit;
      return \u0275\u0275resetView(modal_r15.dismiss("Cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 136)(5, "div", 3)(6, "div", 137)(7, "div", 75)(8, "label", 76);
    \u0275\u0275text(9, "Task ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 138);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 137)(12, "div", 75)(13, "label", 76);
    \u0275\u0275text(14, "Task Title");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 139);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 3)(17, "div", 137)(18, "div", 75)(19, "label", 76);
    \u0275\u0275text(20, "Department:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "ng-select", 140)(22, "ng-option", 94);
    \u0275\u0275text(23, "Designing Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "ng-option", 84);
    \u0275\u0275text(25, "Development Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "ng-option", 95);
    \u0275\u0275text(27, "Marketing Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "ng-option", 96);
    \u0275\u0275text(29, "Human Resource Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "ng-option", 141);
    \u0275\u0275text(31, "Managers Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "ng-option", 142);
    \u0275\u0275text(33, "Application Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "ng-option", 143);
    \u0275\u0275text(35, "Support Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "ng-option", 144);
    \u0275\u0275text(37, "IT Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "ng-option", 145);
    \u0275\u0275text(39, "Technical Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "ng-option", 146);
    \u0275\u0275text(41, "Accounts Department");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(42, "div", 137)(43, "div", 75)(44, "label", 76);
    \u0275\u0275text(45, "Assign To:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "ng-select", 147)(47, "ng-option", 94);
    \u0275\u0275text(48, "Faith Harris");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "ng-option", 84);
    \u0275\u0275text(50, "Austin Bell");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "ng-option", 95);
    \u0275\u0275text(52, "Maria Bower");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "ng-option", 96);
    \u0275\u0275text(54, "Peter Hill");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "ng-option", 141);
    \u0275\u0275text(56, "Victoria Lyman");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "ng-option", 142);
    \u0275\u0275text(58, "Adam Quinn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "ng-option", 143);
    \u0275\u0275text(60, "Melanie Coleman");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "ng-option", 144);
    \u0275\u0275text(62, "Max Wilson");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "ng-option", 145);
    \u0275\u0275text(64, "Amelia Russell");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "ng-option", 146);
    \u0275\u0275text(66, "Justin Metcalfe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "ng-option", 148);
    \u0275\u0275text(68, "Ryan Young");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "ng-option", 149);
    \u0275\u0275text(70, "Jennifer Hardacre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "ng-option", 150);
    \u0275\u0275text(72, "Justin Parr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "ng-option", 151);
    \u0275\u0275text(74, "Julia Hodges");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "ng-option", 152);
    \u0275\u0275text(76, "Michael Sutherland");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(77, "div", 75)(78, "label", 76);
    \u0275\u0275text(79, "Task Priority:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "ng-select", 153)(81, "ng-option", 94);
    \u0275\u0275text(82, "High");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "ng-option", 84);
    \u0275\u0275text(84, "Medium");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "ng-option", 95);
    \u0275\u0275text(86, "Low");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(87, "div", 154)(88, "div", 137)(89, "div", 155)(90, "div", 75)(91, "label", 76);
    \u0275\u0275text(92, "From:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "div", 77)(94, "div", 78);
    \u0275\u0275element(95, "i", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275element(96, "input", 156);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(97, "div", 137)(98, "div", 157)(99, "div", 75)(100, "label", 76);
    \u0275\u0275text(101, "TO:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "div", 77)(103, "div", 78);
    \u0275\u0275element(104, "i", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275element(105, "input", 156);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(106, "div", 75)(107, "label", 76);
    \u0275\u0275text(108, "Description:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "div", 158);
    \u0275\u0275text(110, "f you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(111, "div", 75)(112, "label", 159);
    \u0275\u0275text(113, "Attachment:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(114, "input", 160);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "div", 161)(116, "label", 162);
    \u0275\u0275text(117, "Work Status :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "label", 163);
    \u0275\u0275element(119, "input", 164);
    \u0275\u0275elementStart(120, "span", 165);
    \u0275\u0275text(121, "Completed");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(122, "label", 163);
    \u0275\u0275element(123, "input", 166);
    \u0275\u0275elementStart(124, "span", 165);
    \u0275\u0275text(125, "On hold");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(126, "label", 167);
    \u0275\u0275element(127, "input", 168);
    \u0275\u0275elementStart(128, "span", 165);
    \u0275\u0275text(129, "On Progress");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(130, "div", 169)(131, "div", 170)(132, "a", 171);
    \u0275\u0275listener("click", function UserProfileComponent_ng_template_301_Template_a_click_132_listener() {
      const modal_r15 = \u0275\u0275restoreView(_r14).$implicit;
      return \u0275\u0275resetView(modal_r15.dismiss("Cross click"));
    });
    \u0275\u0275text(133, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(134, "a", 172);
    \u0275\u0275listener("click", function UserProfileComponent_ng_template_301_Template_a_click_134_listener() {
      const modal_r15 = \u0275\u0275restoreView(_r14).$implicit;
      return \u0275\u0275resetView(modal_r15.dismiss("Cross click"));
    });
    \u0275\u0275text(135, "Update");
    \u0275\u0275elementEnd()()();
  }
}
var ELEMENT_DATA = [
  { No: 1, Task: "Design Updated", badge: "warning", Priority: "High", PriorityStatus: "danger", StartDate: "12-02-2021", Deadline: "16-06-2021", progress: 30, progressStatus: "primary", worksStatus: "warning", worksText: "On hold", workInfoStatus: false, worksInfoText: "" },
  { No: 2, Task: "HTML Code Updated", badge: "danger", Priority: "Low", PriorityStatus: "success", StartDate: "01-01-2021", Deadline: "22-04-2021", progress: 50, progressStatus: "primary", worksStatus: "danger", worksText: "Delay", workInfoStatus: true, worksInfoText: "Dealy by 99 days" },
  { No: 3, Task: "Angular Issues fixed", badge: "success", Priority: "Medium", PriorityStatus: "warning", StartDate: "11-04-2021", Deadline: "16-06-2021", progress: 100, progressStatus: "success", worksStatus: "success", worksText: "Completed", workInfoStatus: false, worksInfoText: "" },
  { No: 4, Task: "Marketing materials Issues", badge: "primary", Priority: "High", PriorityStatus: "danger", StartDate: "11-03-2021", Deadline: "19-05-2021", progress: 80, progressStatus: "warning", worksStatus: "primary", worksText: "On Progress", workInfoStatus: false, worksInfoText: "" },
  { No: 5, Task: "Logo Design", badge: "primary", Priority: "High", PriorityStatus: "danger", StartDate: "05-02-2021", Deadline: "21-04-2021	", progress: 70, progressStatus: "warning", worksStatus: "primary", worksText: "On Progress", workInfoStatus: false, worksInfoText: "" },
  { No: 6, Task: "Application Bugs fix", badge: "danger", Priority: "Medium", PriorityStatus: "warning", StartDate: "21-01-2021", Deadline: "15-03-2021", progress: 40, progressStatus: "primary", worksStatus: "danger", worksText: "Delay", workInfoStatus: true, worksInfoText: "Dealy by 30 days" },
  { No: 7, Task: "Theme update", badge: "primary", Priority: "Low", PriorityStatus: "success", StartDate: "13-01-2021", Deadline: "25-02-2021", progress: 40, progressStatus: "primary", worksStatus: "primary", worksText: "On Progress", workInfoStatus: false, worksInfoText: "" },
  { No: 8, Task: "Jquery Issues Fix", badge: "success", Priority: "High", PriorityStatus: "danger", StartDate: "13-03-2021", Deadline: "05-05-2021", progress: 100, progressStatus: "success", worksStatus: "success", worksText: "Completed", workInfoStatus: false, worksInfoText: "" }
];
var _UserProfileComponent = class _UserProfileComponent {
  constructor(modalService, config) {
    this.modalService = modalService;
    this.displayedColumns = ["No", "Task", "Priority", "StartDate", "Deadline", "Progress", "WorkStatus", "Action"];
    this.currentRate = 3;
    this.inlineDatePicker = false;
    this.flatpickrOptions = {
      inline: true
    };
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    config.max = 5;
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
  removeData(item) {
    this.dataSource.data.map((el, ind) => {
      if (el.No == item) {
        this.dataSource.data.splice(ind, 1);
        this.dataSource._updateChangeSubscription();
      }
    });
  }
  edit(editContent) {
    this.modalService.open(editContent, { windowClass: "modalCusSty modal-lg" });
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
};
_UserProfileComponent.\u0275fac = function UserProfileComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UserProfileComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(NgbRatingConfig));
};
_UserProfileComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserProfileComponent, selectors: [["app-user-profile"]], viewQuery: function UserProfileComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(MatPaginator, 5);
    \u0275\u0275viewQuery(MatSort, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
  }
}, standalone: true, features: [\u0275\u0275ProvidersFeature([FlatpickrDefaults]), \u0275\u0275StandaloneFeature], decls: 303, vars: 6, consts: [["input", ""], ["editContent", ""], [3, "title"], [1, "row"], [1, "col-xxl-3", "col-xl-4", "col-md-12", "col-lg-12"], [1, "card", "custom-card", "user-pro-list", "overflow-hidden"], [1, "card-body"], [1, "user-pic", "text-center"], [1, "avatar", "avatar-xxl", "me-2", "avatar-rounded"], ["src", "./assets/images/users/1.jpg", "alt", "img"], [1, "pro-user", "mt-3"], [1, "pro-user-username", "text-dark", "mb-1", "fs-16"], [1, "pro-user-desc", "text-muted", "fs-12"], [1, "d-flex", "justify-content-center", "mb-1"], [1, "fs-13b", "text-warning"], [1, "bx", "bxs-star"], [1, "fs-13b", "text-light"], [1, "btn-list"], ["href", "javascript:void(0);", 1, "btn", "btn-light2"], [1, "fe", "fe-edit"], [1, "fe", "fe-mail"], [1, "card-footer", "p-0"], [1, "row", "mx-0"], [1, "col-4", "text-center", "py-3", "border-end"], [1, "fs-12", "fw-semibold", "mb-3"], [1, "mb-2"], [1, "fs-18", "text-success"], [1, "fs-12", "mb-0"], [1, "col-4", "py-3", "text-center", "border-end"], [1, "fs-18", "text-orange"], [1, "col-4", "text-center", "py-3"], [1, "fs-18", "text-primary"], [1, "card", "custom-card"], [1, "card-header", "border-0"], [1, "card-title"], [1, "card-body", "pt-0"], [1, "table-responsive"], [1, "table", "mb-0", "table-borderless"], [1, "py-2", "px-0"], [1, "w-50"], [1, ""], [1, "badge", "bg-success"], [1, "d-flex", "align-items-end", "justify-content-between"], [1, "font-weight-bold", "mb-1"], [1, "progress", "progress-sm", "mb-4"], [1, "progress-bar", "bg-danger", "w-10"], [1, "progress-bar", "bg-info", "w-30"], [1, "progress", "progress-sm", "mb-0"], [1, "progress-bar", "bg-warning", "w-50"], [1, "col-xxl-9", "col-xl-8", "col-md-12", "col-lg-12"], [1, "col-xxl-3", "col-lg-6", "col-md-12"], [1, "card"], ["href", "javascript:;"], [1, "col-8"], [1, "mt-0", "text-start", "me-2"], [1, "fs-16", "fw-semibold"], [1, "mb-0", "mt-1", "text-danger", "fs-25"], [1, "col-4"], [1, "icon1", "bg-danger-transparent", "my-auto", "float-end"], [1, "fe", "fe-briefcase"], [1, "mb-0", "mt-1", "text-primary", "fs-25"], [1, "icon1", "bg-primary-transparent", "my-auto", "float-end"], [1, "fe", "fe-clipboard"], [1, "mb-0", "mt-1", "text-secondary", "fs-25"], [1, "icon1", "bg-secondary-transparent", "my-auto", "float-end"], [1, "fe", "fe-info"], [1, "mb-0", "mt-1", "text-success", "fs-25"], [1, "icon1", "bg-success-transparent", "my-auto", "float-end"], [1, "fe", "fe-check"], [1, "col-xl-12", "col-md-12", "col-lg-12"], [1, "card-header", "d-flex", "justify-content-between", "border-bottom-0"], [1, "float-end"], ["type", "text", "placeholder", "search", 1, "form-control"], [1, "col-md-12", "col-xxl-10"], [1, "col-md-6", "col-xxl-4"], [1, "form-group"], [1, "form-label"], [1, "input-group"], [1, "input-group-text", "text-muted"], [1, "ri-calendar-line"], ["type", "text", "mwlFlatpickr", "", "placeholder", "DD-MM-YYYY", 1, "form-control", "choose-date"], ["data-trigger", "", "placeholder", "Select Employee", 1, "form-control", "custom-select", "p-0"], ["value", ""], ["value", "1"], ["value", "2"], [1, "col-xxl-2", "col-xl-3", "ps-xxl-0"], [1, "form-group", "mt-2"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "d-grid"], [1, "card-body", "border-top"], [1, "row", "mb-3"], [1, "col-lg-6"], [1, "d-flex", "align-items-center"], [1, "d-flex", "ms-2", "mx-2"], ["name", "quantity", "id", "select-countries17", "placeholder", "1", "data-trigger", "", 1, "form-control", "wd-150", "p-0"], ["value", "1", "selected", ""], ["value", "3"], ["value", "4"], ["type", "text", "matInput", "", "placeholder", "search", 1, "form-control", 3, "keyup"], ["mat-table", "", "matSort", "", 1, "table", "table-vcenter", "text-nowrap", "table-bordered", "border-bottom", 3, "dataSource"], ["matColumnDef", "No"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "text-center", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Task"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Priority"], ["matColumnDef", "StartDate"], ["matColumnDef", "Deadline"], ["matColumnDef", "Progress"], ["matColumnDef", "WorkStatus"], ["matColumnDef", "Action"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["aria-label", "Select page of users", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "text-center"], ["mat-cell", ""], [1, "d-flex"], ["height", "0.5rem", 1, "me-3", 3, "type", "value"], [1, "mt-1", "ms-1"], ["placement", "top", 1, "fe", "fe-info", "text-danger", 3, "ngbTooltip"], ["mat-header-cell", ""], ["routerLink", "/dashboard/task-dashboard/view-tasks", "placement", "top", "ngbTooltip", "View Task", 1, "action-btns1"], [1, "fe", "fe-eye", "text-primary"], ["placement", "top", "ngbTooltip", "View", 1, "action-btns1", 3, "click"], [1, "fe", "fe-edit-2", "text-success"], ["href", "javascript:;", "placement", "top", "ngbTooltip", "Delete", 1, "action-btns1", 3, "click"], [1, "fe", "fe-trash-2", "text-danger"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "col-md-6"], ["placeholder", "Text", "value", "001", 1, "form-control"], ["placeholder", "Text", "value", "Design Updated", 1, "form-control"], ["name", "attendance", "placeholder", "Select Department", 1, "form-control", "custom-select"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["name", "attendance", "placeholder", "Select Employee", 1, "form-control", "custom-select"], ["value", "11"], ["value", "12"], ["value", "13"], ["value", "14"], ["value", "15"], ["name", "attendance", "placeholder", "Select Priority", 1, "form-control", "custom-select"], [1, "row", "mt-3"], ["id", "single", 1, "leave-content", "active", "mt-3"], ["type", "text", "placeholder", "DD-MM-YYYY", "value", "01-12-2023", "mwlFlatpickr", "", 1, "form-control", "choose-date"], ["id", "single1", 1, "leave-content", "active", "mt-3"], [1, "summernote"], ["for", "form-label", 1, "form-label"], ["type", "file", 1, "form-control"], [1, "custom-controls-stacked", "d-md-flex"], [1, "form-label", "mt-1", "me-5"], [1, "custom-control", "custom-radio", "success", "me-4"], ["type", "radio", "name", "example-radios1", "value", "option1", 1, "custom-control-input", "me-1"], [1, "custom-control-label"], ["type", "radio", "name", "example-radios1", "value", "option2", "checked", "", 1, "custom-control-input", "me-1"], [1, "custom-control", "custom-radio", "success"], ["type", "radio", "name", "example-radios1", "value", "option3", 1, "custom-control-input", "me-1"], [1, "modal-footer"], [1, "ms-auto"], ["href", "javascript:;", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-primary", "me-2", 3, "click"], ["href", "javascript:;", 1, "btn", "btn-success", 3, "click"]], template: function UserProfileComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "app-page-header", 2);
    \u0275\u0275elementStart(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6)(5, "div", 7)(6, "div", 8);
    \u0275\u0275element(7, "img", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 10)(9, "h5", 11);
    \u0275\u0275text(10, "Faith Harris");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h6", 12);
    \u0275\u0275text(12, "faith@gmail.com");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 13)(14, "span", 14);
    \u0275\u0275element(15, "i", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 14);
    \u0275\u0275element(17, "i", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 14);
    \u0275\u0275element(19, "i", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 14);
    \u0275\u0275element(21, "i", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 16);
    \u0275\u0275element(23, "i", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 17)(25, "a", 18);
    \u0275\u0275element(26, "i", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "a", 18);
    \u0275\u0275element(28, "i", 20);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(29, "div", 21)(30, "div", 22)(31, "div", 23)(32, "h5", 24);
    \u0275\u0275text(33, "This Year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "h5", 25)(35, "span", 26);
    \u0275\u0275text(36, "22");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "h5", 27);
    \u0275\u0275text(38, "Total Projects");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 28)(40, "h5", 24);
    \u0275\u0275text(41, "This Year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "h5", 25)(43, "span", 29);
    \u0275\u0275text(44, "12");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "h5", 27);
    \u0275\u0275text(46, "Total Tasks");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 30)(48, "h5", 24);
    \u0275\u0275text(49, "This Year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "h5", 25)(51, "span", 31);
    \u0275\u0275text(52, "2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "h5", 27);
    \u0275\u0275text(54, "Awards");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(55, "div", 32)(56, "div", 33)(57, "div", 34);
    \u0275\u0275text(58, "Basic Info");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 35)(60, "div", 36)(61, "table", 37)(62, "tbody")(63, "tr")(64, "td", 38)(65, "span", 39);
    \u0275\u0275text(66, "Employee ID");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "td");
    \u0275\u0275text(68, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "td", 38)(70, "span", 40);
    \u0275\u0275text(71, "#2987");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(72, "tr")(73, "td", 38)(74, "span", 39);
    \u0275\u0275text(75, "Designation");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "td");
    \u0275\u0275text(77, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "td", 38)(79, "span", 40);
    \u0275\u0275text(80, "Web Designer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(81, "tr")(82, "td", 38)(83, "span", 39);
    \u0275\u0275text(84, "Department");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "td");
    \u0275\u0275text(86, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "td", 38)(88, "span", 40);
    \u0275\u0275text(89, "Designing");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(90, "tr")(91, "td", 38)(92, "span", 39);
    \u0275\u0275text(93, "Join Date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(94, "td");
    \u0275\u0275text(95, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "td", 38)(97, "span", 40);
    \u0275\u0275text(98, "05-05-2017");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(99, "tr")(100, "td", 38)(101, "span", 39);
    \u0275\u0275text(102, "Phone Number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(103, "td");
    \u0275\u0275text(104, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "td", 38)(106, "span", 40);
    \u0275\u0275text(107, "+9685321475");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(108, "tr")(109, "td", 38)(110, "span", 39);
    \u0275\u0275text(111, "Status");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(112, "td");
    \u0275\u0275text(113, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "td", 38)(115, "span", 41);
    \u0275\u0275text(116, "Active");
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275elementStart(117, "div", 32)(118, "div", 33)(119, "div", 34);
    \u0275\u0275text(120, "Statistics");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(121, "div", 6)(122, "div", 42)(123, "h6", 40);
    \u0275\u0275text(124, "Tasks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(125, "h6", 43);
    \u0275\u0275text(126, "45%");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(127, "div", 44);
    \u0275\u0275element(128, "div", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(129, "div", 42)(130, "h6", 40);
    \u0275\u0275text(131, "Projects");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(132, "h6", 43);
    \u0275\u0275text(133, "56%");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(134, "div", 44);
    \u0275\u0275element(135, "div", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(136, "div", 42)(137, "h6", 40);
    \u0275\u0275text(138, "Over all Performance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(139, "h6", 43);
    \u0275\u0275text(140, "72%");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(141, "div", 47);
    \u0275\u0275element(142, "div", 48);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(143, "div", 49)(144, "div", 3)(145, "div", 50)(146, "div", 51)(147, "a", 52)(148, "div", 6)(149, "div", 3)(150, "div", 53)(151, "div", 54)(152, "span", 55);
    \u0275\u0275text(153, "Total Tasks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(154, "h3", 56);
    \u0275\u0275text(155, "1254");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(156, "div", 57)(157, "div", 58);
    \u0275\u0275element(158, "i", 59);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(159, "div", 50)(160, "div", 51)(161, "a", 52)(162, "div", 6)(163, "div", 3)(164, "div", 53)(165, "div", 54)(166, "span", 55);
    \u0275\u0275text(167, "Running Tasks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(168, "h3", 60);
    \u0275\u0275text(169, "42");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(170, "div", 57)(171, "div", 61);
    \u0275\u0275element(172, "i", 62);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(173, "div", 50)(174, "div", 51)(175, "a", 52)(176, "div", 6)(177, "div", 3)(178, "div", 53)(179, "div", 54)(180, "span", 55);
    \u0275\u0275text(181, "On hold Tasks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(182, "h3", 63);
    \u0275\u0275text(183, "11");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(184, "div", 57)(185, "div", 64);
    \u0275\u0275element(186, "i", 65);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(187, "div", 50)(188, "div", 51)(189, "a", 52)(190, "div", 6)(191, "div", 3)(192, "div", 53)(193, "div", 54)(194, "span", 55);
    \u0275\u0275text(195, "Completed Tasks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(196, "h3", 66);
    \u0275\u0275text(197, "38");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(198, "div", 57)(199, "div", 67);
    \u0275\u0275element(200, "i", 68);
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275elementStart(201, "div", 3)(202, "div", 69)(203, "div", 32)(204, "div", 70)(205, "h4", 34);
    \u0275\u0275text(206, "Recent Task Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(207, "div", 71);
    \u0275\u0275element(208, "input", 72);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(209, "div", 6)(210, "div", 3)(211, "div", 73)(212, "div", 3)(213, "div", 74)(214, "div", 75)(215, "label", 76);
    \u0275\u0275text(216, "From:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(217, "div", 75)(218, "div", 77)(219, "div", 78);
    \u0275\u0275element(220, "i", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275element(221, "input", 80);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(222, "div", 74)(223, "div", 75)(224, "label", 76);
    \u0275\u0275text(225, "To:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(226, "div", 75)(227, "div", 77)(228, "div", 78);
    \u0275\u0275element(229, "i", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275element(230, "input", 80);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(231, "div", 74)(232, "div", 75)(233, "label", 76);
    \u0275\u0275text(234, "Select Priority:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(235, "ng-select", 81)(236, "ng-option", 82);
    \u0275\u0275text(237, "High");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(238, "ng-option", 83);
    \u0275\u0275text(239, "Medium");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(240, "ng-option", 84);
    \u0275\u0275text(241, "Low");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(242, "div", 85)(243, "div", 86);
    \u0275\u0275element(244, "label", 76);
    \u0275\u0275elementStart(245, "a", 87);
    \u0275\u0275text(246, "Search");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(247, "div", 88)(248, "div", 89)(249, "div", 90)(250, "div", 91)(251, "span");
    \u0275\u0275text(252, "Show");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(253, "div", 92)(254, "div", 86)(255, "ng-select", 93)(256, "ng-option", 94);
    \u0275\u0275text(257, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(258, "ng-option", 84);
    \u0275\u0275text(259, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(260, "ng-option", 95);
    \u0275\u0275text(261, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(262, "ng-option", 96);
    \u0275\u0275text(263, "4");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(264, "span");
    \u0275\u0275text(265, "entries");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(266, "div", 90)(267, "div", 71)(268, "input", 97, 0);
    \u0275\u0275listener("keyup", function UserProfileComponent_Template_input_keyup_268_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.applyFilter($event));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(270, "div", 36)(271, "div", 40)(272, "table", 98);
    \u0275\u0275elementContainerStart(273, 99);
    \u0275\u0275template(274, UserProfileComponent_th_274_Template, 2, 0, "th", 100)(275, UserProfileComponent_td_275_Template, 2, 1, "td", 101);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(276, 102);
    \u0275\u0275template(277, UserProfileComponent_th_277_Template, 2, 0, "th", 100)(278, UserProfileComponent_td_278_Template, 5, 4, "td", 103);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(279, 104);
    \u0275\u0275template(280, UserProfileComponent_th_280_Template, 2, 0, "th", 100)(281, UserProfileComponent_td_281_Template, 3, 4, "td", 103);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(282, 105);
    \u0275\u0275template(283, UserProfileComponent_th_283_Template, 2, 0, "th", 100)(284, UserProfileComponent_td_284_Template, 2, 1, "td", 103);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(285, 106);
    \u0275\u0275template(286, UserProfileComponent_th_286_Template, 2, 0, "th", 100)(287, UserProfileComponent_td_287_Template, 2, 1, "td", 103);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(288, 107);
    \u0275\u0275template(289, UserProfileComponent_th_289_Template, 2, 0, "th", 100)(290, UserProfileComponent_td_290_Template, 2, 2, "td", 103);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(291, 108);
    \u0275\u0275template(292, UserProfileComponent_th_292_Template, 2, 0, "th", 100)(293, UserProfileComponent_td_293_Template, 5, 5, "td", 103);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(294, 109);
    \u0275\u0275template(295, UserProfileComponent_th_295_Template, 2, 0, "th", 110)(296, UserProfileComponent_td_296_Template, 8, 0, "td", 103);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(297, UserProfileComponent_tr_297_Template, 1, 0, "tr", 111)(298, UserProfileComponent_tr_298_Template, 1, 0, "tr", 112)(299, UserProfileComponent_tr_299_Template, 3, 1, "tr", 113);
    \u0275\u0275elementEnd();
    \u0275\u0275element(300, "mat-paginator", 114);
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275template(301, UserProfileComponent_ng_template_301_Template, 136, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275property("title", "User Profile");
    \u0275\u0275advance(272);
    \u0275\u0275property("dataSource", ctx.dataSource);
    \u0275\u0275advance(25);
    \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
    \u0275\u0275advance(2);
    \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(5, _c0));
  }
}, dependencies: [SharedModule, PageHeaderComponent, NgbModule, NgbProgressbar, NgbTooltip, NgSelectModule, NgSelectComponent, NgOptionComponent, NgApexchartsModule, MaterialModuleModule, MatInput, MatPaginator, MatSort, MatSortHeader, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatNoDataRow, FormsModule, ReactiveFormsModule, FlatpickrModule, FlatpickrDirective, RouterModule, RouterLink] });
var UserProfileComponent = _UserProfileComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserProfileComponent, { className: "UserProfileComponent" });
})();
export {
  UserProfileComponent
};
//# sourceMappingURL=user-profile.component-7ITL7WFH.js.map
