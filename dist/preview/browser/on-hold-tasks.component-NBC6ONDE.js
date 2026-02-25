import {
  NgApexchartsModule
} from "./chunk-BFCIYJJG.js";
import {
  AngularEditorComponent,
  AngularEditorModule
} from "./chunk-QXVFNQQA.js";
import {
  MatInput,
  MatPaginator,
  MatSort,
  MatSortHeader,
  MaterialModuleModule,
  SharedModule,
  TaskDashboardPageHeaderComponent
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
  NgControlStatus,
  NgModel,
  NgbModal,
  NgbModule,
  NgbProgressbar,
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
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/task-dashboard/on-hold-tasks/on-hold-tasks.component.ts
var _c0 = () => [6, 10, 25, 100];
function OnHoldTasksComponent_th_170_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 97);
    \u0275\u0275text(1, " No ");
    \u0275\u0275elementEnd();
  }
}
function OnHoldTasksComponent_td_171_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 98);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r2.No, " ");
  }
}
function OnHoldTasksComponent_th_173_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 97);
    \u0275\u0275text(1, " Task ");
    \u0275\u0275elementEnd();
  }
}
function OnHoldTasksComponent_td_174_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 99)(1, "div", 100);
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
function OnHoldTasksComponent_th_176_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 97);
    \u0275\u0275text(1, " Department ");
    \u0275\u0275elementEnd();
  }
}
function OnHoldTasksComponent_td_177_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 99);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r4.Department, " ");
  }
}
function OnHoldTasksComponent_th_179_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 97);
    \u0275\u0275text(1, " AssignTo ");
    \u0275\u0275elementEnd();
  }
}
function OnHoldTasksComponent_td_180_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 99)(1, "a", 101)(2, "div", 102);
    \u0275\u0275element(3, "img", 103);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 104)(5, "h6", 105);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", row_r5.img, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r5.AssignTo);
  }
}
function OnHoldTasksComponent_th_182_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 97);
    \u0275\u0275text(1, " Priority ");
    \u0275\u0275elementEnd();
  }
}
function OnHoldTasksComponent_td_183_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 99)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("badge bg-", row_r6.PriorityStatus, "-transparent");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r6.Priority, "");
  }
}
function OnHoldTasksComponent_th_185_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 97);
    \u0275\u0275text(1, " StartDate ");
    \u0275\u0275elementEnd();
  }
}
function OnHoldTasksComponent_td_186_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 99);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r7.StartDate, " ");
  }
}
function OnHoldTasksComponent_th_188_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 97);
    \u0275\u0275text(1, " Deadline ");
    \u0275\u0275elementEnd();
  }
}
function OnHoldTasksComponent_td_189_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 99);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r8.Deadline);
  }
}
function OnHoldTasksComponent_th_191_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 97);
    \u0275\u0275text(1, " Progress ");
    \u0275\u0275elementEnd();
  }
}
function OnHoldTasksComponent_td_192_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 99);
    \u0275\u0275element(1, "ngb-progressbar", 106);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("type", row_r9.progressStatus);
    \u0275\u0275property("value", row_r9.progress);
  }
}
function OnHoldTasksComponent_th_194_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 97);
    \u0275\u0275text(1, " WorkStatus ");
    \u0275\u0275elementEnd();
  }
}
function OnHoldTasksComponent_td_195_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 99)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "span", 107);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("badge bg-", row_r10.worksStatus, " me-1");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r10.worksText);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("fe fe-", row_r10.worksStatusIcon, " text-danger");
  }
}
function OnHoldTasksComponent_th_198_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 108);
    \u0275\u0275text(1, " Action ");
    \u0275\u0275elementEnd();
  }
}
function OnHoldTasksComponent_td_199_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 99)(1, "div", 100)(2, "a", 109);
    \u0275\u0275element(3, "i", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 111);
    \u0275\u0275listener("click", function OnHoldTasksComponent_td_199_Template_a_click_4_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r11 = \u0275\u0275nextContext();
      const editContent_r13 = \u0275\u0275reference(205);
      return \u0275\u0275resetView(ctx_r11.edit(editContent_r13));
    });
    \u0275\u0275element(5, "i", 112);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 113);
    \u0275\u0275element(7, "i", 114);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 115);
    \u0275\u0275listener("click", function OnHoldTasksComponent_td_199_Template_a_click_8_listener() {
      const row_r14 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r11 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r11.removeData(row_r14.No));
    });
    \u0275\u0275element(9, "i", 116);
    \u0275\u0275elementEnd()()();
  }
}
function OnHoldTasksComponent_tr_200_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 117);
  }
}
function OnHoldTasksComponent_tr_201_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 118);
  }
}
function OnHoldTasksComponent_tr_202_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 119)(1, "td", 120);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const input_r15 = \u0275\u0275reference(165);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1('No data matching the filter "', input_r15.value, '"');
  }
}
function OnHoldTasksComponent_ng_template_204_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 121)(1, "h5", 122);
    \u0275\u0275text(2, "Edit Task");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 123);
    \u0275\u0275listener("click", function OnHoldTasksComponent_ng_template_204_Template_button_click_3_listener() {
      const modal_r17 = \u0275\u0275restoreView(_r16).$implicit;
      return \u0275\u0275resetView(modal_r17.dismiss("Cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 124)(5, "div", 3)(6, "div", 37)(7, "div", 39)(8, "label", 40);
    \u0275\u0275text(9, "Task ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 125);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 37)(12, "div", 39)(13, "label", 40);
    \u0275\u0275text(14, "Task Title");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 126);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 3)(17, "div", 37)(18, "div", 39)(19, "label", 40);
    \u0275\u0275text(20, "Department:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "ng-select", 127)(22, "ng-option", 73);
    \u0275\u0275text(23, "Designing Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "ng-option", 48);
    \u0275\u0275text(25, "Development Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "ng-option", 49);
    \u0275\u0275text(27, "Marketing Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "ng-option", 50);
    \u0275\u0275text(29, "Human Resource Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "ng-option", 51);
    \u0275\u0275text(31, "Managers Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "ng-option", 52);
    \u0275\u0275text(33, "Application Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "ng-option", 53);
    \u0275\u0275text(35, "Support Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "ng-option", 54);
    \u0275\u0275text(37, "IT Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "ng-option", 55);
    \u0275\u0275text(39, "Technical Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "ng-option", 56);
    \u0275\u0275text(41, "Accounts Department");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(42, "div", 37)(43, "div", 39)(44, "label", 40);
    \u0275\u0275text(45, "Assign To:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "ng-select", 46)(47, "ng-option", 73);
    \u0275\u0275text(48, "Faith Harris");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "ng-option", 48);
    \u0275\u0275text(50, "Austin Bell");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "ng-option", 49);
    \u0275\u0275text(52, "Maria Bower");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "ng-option", 50);
    \u0275\u0275text(54, "Peter Hill");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "ng-option", 51);
    \u0275\u0275text(56, "Victoria Lyman");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "ng-option", 52);
    \u0275\u0275text(58, "Adam Quinn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "ng-option", 53);
    \u0275\u0275text(60, "Melanie Coleman");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "ng-option", 54);
    \u0275\u0275text(62, "Max Wilson");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "ng-option", 55);
    \u0275\u0275text(64, "Amelia Russell");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "ng-option", 56);
    \u0275\u0275text(66, "Justin Metcalfe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "ng-option", 57);
    \u0275\u0275text(68, "Ryan Young");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "ng-option", 58);
    \u0275\u0275text(70, "Jennifer Hardacre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "ng-option", 59);
    \u0275\u0275text(72, "Justin Parr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "ng-option", 60);
    \u0275\u0275text(74, "Julia Hodges");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "ng-option", 61);
    \u0275\u0275text(76, "Michael Sutherland");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(77, "div", 39)(78, "label", 40);
    \u0275\u0275text(79, "Task Priority:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "ng-select", 62);
    \u0275\u0275element(81, "ng-option", 128);
    \u0275\u0275elementStart(82, "ng-option", 73);
    \u0275\u0275text(83, "High");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "ng-option", 48);
    \u0275\u0275text(85, "Medium");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "ng-option", 49);
    \u0275\u0275text(87, "Low");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(88, "div", 3)(89, "div", 37)(90, "div", 38)(91, "div", 39)(92, "label", 40);
    \u0275\u0275text(93, "From:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "div", 31)(95, "div", 41);
    \u0275\u0275element(96, "i", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275element(97, "input", 43);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(98, "div", 37)(99, "div", 44)(100, "div", 39)(101, "label", 40);
    \u0275\u0275text(102, "TO:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "div", 31)(104, "div", 41);
    \u0275\u0275element(105, "i", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275element(106, "input", 43);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(107, "div", 39)(108, "label", 40);
    \u0275\u0275text(109, "Description:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "angular-editor", 129);
    \u0275\u0275twoWayListener("ngModelChange", function OnHoldTasksComponent_ng_template_204_Template_angular_editor_ngModelChange_110_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r11 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r11.htmlContent, $event) || (ctx_r11.htmlContent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(111, "div", 39)(112, "label", 130);
    \u0275\u0275text(113, "Attachment:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(114, "input", 131);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "div", 132)(116, "label", 133);
    \u0275\u0275text(117, "Work Status :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "div", 134);
    \u0275\u0275element(119, "input", 135);
    \u0275\u0275elementStart(120, "label", 136);
    \u0275\u0275text(121, " Completed ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(122, "div", 134);
    \u0275\u0275element(123, "input", 137);
    \u0275\u0275elementStart(124, "label", 138);
    \u0275\u0275text(125, " Pending ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(126, "div", 139);
    \u0275\u0275element(127, "input", 140);
    \u0275\u0275elementStart(128, "label", 141);
    \u0275\u0275text(129, " On Progress ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(130, "div", 142)(131, "div", 30)(132, "a", 143);
    \u0275\u0275listener("click", function OnHoldTasksComponent_ng_template_204_Template_a_click_132_listener() {
      const modal_r17 = \u0275\u0275restoreView(_r16).$implicit;
      return \u0275\u0275resetView(modal_r17.dismiss("Cross click"));
    });
    \u0275\u0275text(133, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(134, "a", 144);
    \u0275\u0275listener("click", function OnHoldTasksComponent_ng_template_204_Template_a_click_134_listener() {
      const modal_r17 = \u0275\u0275restoreView(_r16).$implicit;
      return \u0275\u0275resetView(modal_r17.dismiss("Cross click"));
    });
    \u0275\u0275text(135, "Update");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r11 = \u0275\u0275nextContext();
    \u0275\u0275advance(110);
    \u0275\u0275twoWayProperty("ngModel", ctx_r11.htmlContent);
    \u0275\u0275property("config", ctx_r11.config1);
  }
}
var ELEMENT_DATA = [
  { No: 1, Task: "Marketing materials Issues", badge: "warning", Department: "Marketing", img: "./assets/images/users/10.jpg", AssignTo: "Faith Harris", Priority: "High", PriorityStatus: "danger", StartDate: "11-03-2021", Deadline: "19-05-2021", progress: 80, progressStatus: "success", worksStatus: "warning", worksStatusIcon: "", worksText: "On hold" },
  { No: 2, Task: "HTML code Updated", badge: "danger", Department: "Designing", img: "./assets/images/users/4.jpg", AssignTo: "Victoria Lyman", Priority: "High", PriorityStatus: "danger", StartDate: "05-02-2021", Deadline: "22-04-2021	", progress: 50, progressStatus: "success", worksStatus: "danger", worksStatusIcon: "info", worksText: "Dealy" },
  { No: 3, Task: "Logo Design", badge: "danger", Department: "Designing", img: "./assets/images/users/1.jpg", AssignTo: "Austin Bell", Priority: "Low", PriorityStatus: "success", StartDate: "05-02-2021", Deadline: "21-04-2021", progress: 70, progressStatus: "success", worksStatus: "warning", worksStatusIcon: "", worksText: "On hold" },
  { No: 4, Task: "Theme Update", badge: "warning", Department: "Designing", img: "./assets/images/users/2.jpg", AssignTo: "Maria Bower", Priority: "Medium", PriorityStatus: "warning", StartDate: "23-01-2021", Deadline: "25-02-2021", progress: 40, progressStatus: "success", worksStatus: "warning", worksStatusIcon: "", worksText: "On hold" },
  { No: 5, Task: "Design Updated", badge: "warning", Department: "Designing", img: "./assets/images/users/3.jpg", AssignTo: "Peter Hill", Priority: "High", PriorityStatus: "danger", StartDate: "12-02-2021", Deadline: "16-06-2021", progress: 50, progressStatus: "success", worksStatus: "warning", worksStatusIcon: "", worksText: "On hold" },
  { No: 6, Task: "Angular Issue fixed", badge: "danger", Department: "Angular", img: "./assets/images/users/5.jpg", AssignTo: "Adam Quinn", Priority: "Medium", PriorityStatus: "warning", StartDate: "11-04-2021", Deadline: "16-06-2021", progress: 80, progressStatus: "success", worksStatus: "danger", worksStatusIcon: "info", worksText: "Dealy" }
];
var _OnHoldTasksComponent = class _OnHoldTasksComponent {
  constructor(modalService) {
    this.modalService = modalService;
    this.displayedColumns = ["No", "Task", "Department", "AssignTo", "Priority", "StartDate", "Deadline", "Progress", "WorkStatus", "Action"];
    this.inlineDatePicker = false;
    this.flatpickrOptions = {
      inline: true
    };
    this.htmlContent = "";
    this.config1 = {
      editable: true,
      spellcheck: true,
      height: "13rem",
      minHeight: "5rem",
      placeholder: "Enter text here...",
      translate: "no",
      defaultParagraphSeparator: "p",
      defaultFontName: "Arial",
      toolbarHiddenButtons: [
        ["bold"]
      ],
      customClasses: [
        {
          name: "quote",
          class: "quote"
        },
        {
          name: "redText",
          class: "redText"
        },
        {
          name: "titleText",
          class: "titleText",
          tag: "h1"
        }
      ]
    };
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }
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
    this.modalService.open(editContent, { windowClass: "modalCusSty", size: "lg" });
  }
};
_OnHoldTasksComponent.\u0275fac = function OnHoldTasksComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OnHoldTasksComponent)(\u0275\u0275directiveInject(NgbModal));
};
_OnHoldTasksComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OnHoldTasksComponent, selectors: [["app-on-hold-tasks"]], viewQuery: function OnHoldTasksComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(MatPaginator, 5);
    \u0275\u0275viewQuery(MatSort, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
  }
}, standalone: true, features: [\u0275\u0275ProvidersFeature([FlatpickrDefaults]), \u0275\u0275StandaloneFeature], decls: 206, vars: 7, consts: [["input", ""], ["editContent", ""], [3, "title", "title3"], [1, "row"], [1, "col-xl-3", "col-lg-6", "col-md-12"], [1, "card", "custom-card"], ["routerLink", "/dashboard/task-dashboard/task-list"], [1, "card-body"], [1, "col-7"], [1, "mt-0", "text-start"], [1, "fs-16", "fw-semibold"], [1, "mb-0", "mt-1", "text-danger", "fs-25"], [1, "col-5"], [1, "icon1", "bg-danger-transparent", "my-auto", "float-end"], [1, "fe", "fe-briefcase"], ["routerLink", "/dashboard/task-dashboard/running-tasks"], [1, "mb-0", "mt-1", "text-primary", "fs-25"], [1, "icon1", "bg-primary-transparent", "my-auto", "float-end"], [1, "fe", "fe-clipboard"], ["routerLink", "/dashboard/task-dashboard/onhold-tasks"], [1, "mb-0", "mt-1", "text-secondary", "fs-25"], [1, "icon1", "bg-secondary-transparent", "my-auto", "float-end"], [1, "fe", "fe-info"], ["routerLink", "/dashboard/task-dashboard/completed-tasks"], [1, "mb-0", "mt-1", "text-success", "fs-25"], [1, "icon1", "bg-success-transparent", "my-auto", "float-end"], [1, "fe", "fe-check"], [1, "col-xl-12", "col-md-12", "col-lg-12"], [1, "card-header", "border-0"], [1, "card-title"], [1, "ms-auto"], [1, "input-group"], ["placeholder", "Search.....", "type", "text", 1, "form-control"], [1, "input-group-btn"], [1, "btn", "btn-light", "br-ts-0", "br-bs-0"], [1, "fa", "fa-search"], [1, "col-md-12", "col-xl-5"], [1, "col-md-6"], ["id", "single2", 1, "leave-content", "active", "mb-3", "mb-md-0"], [1, "form-group"], [1, "form-label"], [1, "input-group-text", "text-muted"], [1, "ri-calendar-line"], ["mwlFlatpickr", "", "type", "text", "placeholder", "DD-MM-YYYY", 1, "form-control", "choose-date"], ["id", "single1", 1, "leave-content", "active"], [1, "col-md-12", "col-xl-3"], ["name", "attendance", "placeholder", "Select Employee", 1, "form-control", "custom-select", "p-0"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["value", "11"], ["value", "12"], ["value", "13"], ["value", "14"], ["value", "15"], ["name", "attendance", "placeholder", "Select Priority", 1, "form-control", "custom-select", "p-0"], [1, "col-xxl-1", "col-xl-3", "ps-xxl-0"], [1, "form-group", "mt-2"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "d-grid"], [1, "card-body", "border-top"], [1, "row", "mb-3", "gap-1", "gap-lg-0"], [1, "col-lg-6"], [1, "d-flex", "align-items-center"], [1, "d-flex", "ms-2", "mx-2"], [1, "form-group", "mb-0"], ["name", "quantity", "id", "select-countries17", "placeholder", "1", "data-trigger", "", 1, "form-control", "wd-150", "p-0"], ["value", "1", "selected", ""], [1, "float-end"], ["type", "text", "matInput", "", "placeholder", "search", 1, "form-control", 3, "keyup"], [1, "table-responsive"], [1, ""], ["mat-table", "", "matSort", "", 1, "table", "table-vcenter", "text-nowrap", "table-bordered", "border-bottom", 3, "dataSource"], ["matColumnDef", "No"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "text-center", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Task"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Department"], ["matColumnDef", "AssignTo"], ["matColumnDef", "Priority"], ["matColumnDef", "StartDate"], ["matColumnDef", "Deadline"], ["matColumnDef", "Progress"], ["matColumnDef", "WorkStatus"], ["matColumnDef", "Action"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["aria-label", "Select page of users", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "text-center"], ["mat-cell", ""], [1, "d-flex"], ["routerLink", "/dashboard/task-dashboard/user-profile", 1, "d-flex"], [1, "avatar", "me-2", "avatar-rounded"], ["alt", "img", 3, "src"], [1, "me-3", "mt-0", "mt-sm-2", "d-block"], [1, "mb-1", "fs-14"], ["height", "0.5rem", 1, "me-3", 3, "type", "value"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "aria-label", "Dealy by 99 days", "data-bs-original-title", "Dealy by 99 days"], ["mat-header-cell", ""], ["routerLink", "/dashboard/task-dashboard/view-tasks", "placement", "top", "ngbTooltip", "View Task", 1, "action-btns1"], [1, "fe", "fe-eye", "text-primary"], ["placement", "top", "ngbTooltip", "View", 1, "action-btns1", 3, "click"], [1, "fe", "fe-edit-2", "text-success"], ["href", "javascript:;", "data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Send Task", 1, "action-btns1"], [1, "fe", "fe-send", "text-info"], ["placement", "top", "ngbTooltip", "Delete", 1, "action-btns1", 3, "click"], [1, "fe", "fe-trash-2", "text-danger"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], ["placeholder", "Text", "value", "001", 1, "form-control"], ["placeholder", "Text", "value", "Design Updated", 1, "form-control"], ["name", "attendance", "placeholder", "Select Department", 1, "form-control", "custom-select", "p-0"], ["label", "Select Priority"], [3, "ngModelChange", "ngModel", "config"], ["for", "form-label", 1, "form-label"], ["type", "file", 1, "form-control"], [1, "custom-controls-stacked", "d-md-flex"], [1, "form-label", "me-5"], [1, "form-check", "mb-0", "me-4"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault1", 1, "form-check-input"], ["for", "flexRadioDefault1", 1, "form-check-label"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault2", 1, "form-check-input"], ["for", "flexRadioDefault2", 1, "form-check-label"], [1, "form-check", "mb-0"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault3", 1, "form-check-input"], ["for", "flexRadioDefault3", 1, "form-check-label"], [1, "modal-footer"], ["href", "javascript:;", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-primary", "me-2", 3, "click"], ["href", "javascript:;", 1, "btn", "btn-success", 3, "click"]], template: function OnHoldTasksComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "app-task-dashboard-page-header", 2);
    \u0275\u0275elementStart(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "a", 6)(5, "div", 7)(6, "div", 3)(7, "div", 8)(8, "div", 9)(9, "span", 10);
    \u0275\u0275text(10, "Total Tasks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h3", 11);
    \u0275\u0275text(12, "1254");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 12)(14, "div", 13);
    \u0275\u0275element(15, "i", 14);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(16, "div", 4)(17, "div", 5)(18, "a", 15)(19, "div", 7)(20, "div", 3)(21, "div", 8)(22, "div", 9)(23, "span", 10);
    \u0275\u0275text(24, "Running Tasks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "h3", 16);
    \u0275\u0275text(26, "42");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 12)(28, "div", 17);
    \u0275\u0275element(29, "i", 18);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(30, "div", 4)(31, "div", 5)(32, "a", 19)(33, "div", 7)(34, "div", 3)(35, "div", 8)(36, "div", 9)(37, "span", 10);
    \u0275\u0275text(38, "On hold Tasks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "h3", 20);
    \u0275\u0275text(40, "11");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 12)(42, "div", 21);
    \u0275\u0275element(43, "i", 22);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(44, "div", 4)(45, "div", 5)(46, "a", 23)(47, "div", 7)(48, "div", 3)(49, "div", 8)(50, "div", 9)(51, "span", 10);
    \u0275\u0275text(52, "Completed Tasks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "h3", 24);
    \u0275\u0275text(54, "38");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(55, "div", 12)(56, "div", 25);
    \u0275\u0275element(57, "i", 26);
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275elementStart(58, "div", 3)(59, "div", 27)(60, "div", 5)(61, "div", 28)(62, "h4", 29);
    \u0275\u0275text(63, "Onhold Task Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 30)(65, "div", 31);
    \u0275\u0275element(66, "input", 32);
    \u0275\u0275elementStart(67, "span", 33)(68, "button", 34);
    \u0275\u0275element(69, "i", 35);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(70, "div", 7)(71, "div", 3)(72, "div", 36)(73, "div", 3)(74, "div", 37)(75, "div", 38)(76, "div", 39)(77, "label", 40);
    \u0275\u0275text(78, "From:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "div", 31)(80, "div", 41);
    \u0275\u0275element(81, "i", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275element(82, "input", 43);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(83, "div", 37)(84, "div", 44)(85, "div", 39)(86, "label", 40);
    \u0275\u0275text(87, "TO:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "div", 31)(89, "div", 41);
    \u0275\u0275element(90, "i", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275element(91, "input", 43);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(92, "div", 45)(93, "div", 39)(94, "label", 40);
    \u0275\u0275text(95, "Assign To:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "ng-select", 46)(97, "ng-option", 47);
    \u0275\u0275text(98, "Faith Harris");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "ng-option", 48);
    \u0275\u0275text(100, "Austin Bell");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "ng-option", 49);
    \u0275\u0275text(102, "Maria Bower");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "ng-option", 50);
    \u0275\u0275text(104, "Peter Hill");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "ng-option", 51);
    \u0275\u0275text(106, "Victoria Lyman");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "ng-option", 52);
    \u0275\u0275text(108, "Adam Quinn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "ng-option", 53);
    \u0275\u0275text(110, "Melanie Coleman");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "ng-option", 54);
    \u0275\u0275text(112, "Max Wilson");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "ng-option", 55);
    \u0275\u0275text(114, "Amelia Russell");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "ng-option", 56);
    \u0275\u0275text(116, "Justin Metcalfe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "ng-option", 57);
    \u0275\u0275text(118, "Ryan Young");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "ng-option", 58);
    \u0275\u0275text(120, "Jennifer Hardacre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "ng-option", 59);
    \u0275\u0275text(122, "Justin Parr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "ng-option", 60);
    \u0275\u0275text(124, "Julia Hodges");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(125, "ng-option", 61);
    \u0275\u0275text(126, "Michael Sutherland");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(127, "div", 45)(128, "div", 39)(129, "label", 40);
    \u0275\u0275text(130, "Select Priority:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(131, "ng-select", 62)(132, "ng-option", 47);
    \u0275\u0275text(133, "High");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(134, "ng-option", 48);
    \u0275\u0275text(135, "Medium");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(136, "ng-option", 49);
    \u0275\u0275text(137, "Low");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(138, "div", 63)(139, "div", 64);
    \u0275\u0275element(140, "label", 40);
    \u0275\u0275elementStart(141, "a", 65);
    \u0275\u0275text(142, "Search");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(143, "div", 66)(144, "div", 67)(145, "div", 68)(146, "div", 69)(147, "span");
    \u0275\u0275text(148, "Show");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(149, "div", 70)(150, "div", 71)(151, "ng-select", 72)(152, "ng-option", 73);
    \u0275\u0275text(153, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(154, "ng-option", 48);
    \u0275\u0275text(155, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(156, "ng-option", 49);
    \u0275\u0275text(157, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(158, "ng-option", 50);
    \u0275\u0275text(159, "4");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(160, "span");
    \u0275\u0275text(161, "entries");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(162, "div", 68)(163, "div", 74)(164, "input", 75, 0);
    \u0275\u0275listener("keyup", function OnHoldTasksComponent_Template_input_keyup_164_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.applyFilter($event));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(166, "div", 76)(167, "div", 77)(168, "table", 78);
    \u0275\u0275elementContainerStart(169, 79);
    \u0275\u0275template(170, OnHoldTasksComponent_th_170_Template, 2, 0, "th", 80)(171, OnHoldTasksComponent_td_171_Template, 2, 1, "td", 81);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(172, 82);
    \u0275\u0275template(173, OnHoldTasksComponent_th_173_Template, 2, 0, "th", 80)(174, OnHoldTasksComponent_td_174_Template, 5, 4, "td", 83);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(175, 84);
    \u0275\u0275template(176, OnHoldTasksComponent_th_176_Template, 2, 0, "th", 80)(177, OnHoldTasksComponent_td_177_Template, 2, 1, "td", 83);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(178, 85);
    \u0275\u0275template(179, OnHoldTasksComponent_th_179_Template, 2, 0, "th", 80)(180, OnHoldTasksComponent_td_180_Template, 7, 2, "td", 83);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(181, 86);
    \u0275\u0275template(182, OnHoldTasksComponent_th_182_Template, 2, 0, "th", 80)(183, OnHoldTasksComponent_td_183_Template, 3, 4, "td", 83);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(184, 87);
    \u0275\u0275template(185, OnHoldTasksComponent_th_185_Template, 2, 0, "th", 80)(186, OnHoldTasksComponent_td_186_Template, 2, 1, "td", 83);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(187, 88);
    \u0275\u0275template(188, OnHoldTasksComponent_th_188_Template, 2, 0, "th", 80)(189, OnHoldTasksComponent_td_189_Template, 2, 1, "td", 83);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(190, 89);
    \u0275\u0275template(191, OnHoldTasksComponent_th_191_Template, 2, 0, "th", 80)(192, OnHoldTasksComponent_td_192_Template, 2, 2, "td", 83);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(193, 90);
    \u0275\u0275template(194, OnHoldTasksComponent_th_194_Template, 2, 0, "th", 80)(195, OnHoldTasksComponent_td_195_Template, 4, 7, "td", 83);
    \u0275\u0275text(196, "icon ");
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(197, 91);
    \u0275\u0275template(198, OnHoldTasksComponent_th_198_Template, 2, 0, "th", 92)(199, OnHoldTasksComponent_td_199_Template, 10, 0, "td", 83);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(200, OnHoldTasksComponent_tr_200_Template, 1, 0, "tr", 93)(201, OnHoldTasksComponent_tr_201_Template, 1, 0, "tr", 94)(202, OnHoldTasksComponent_tr_202_Template, 3, 1, "tr", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275element(203, "mat-paginator", 96);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275template(204, OnHoldTasksComponent_ng_template_204_Template, 136, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275property("title", "OnHold Tasks")("title3", "Task");
    \u0275\u0275advance(168);
    \u0275\u0275property("dataSource", ctx.dataSource);
    \u0275\u0275advance(32);
    \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
    \u0275\u0275advance(2);
    \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(6, _c0));
  }
}, dependencies: [SharedModule, TaskDashboardPageHeaderComponent, NgbModule, NgbProgressbar, NgbTooltip, FlatpickrModule, FlatpickrDirective, NgSelectModule, NgSelectComponent, NgOptionComponent, NgApexchartsModule, MaterialModuleModule, MatInput, MatPaginator, MatSort, MatSortHeader, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatNoDataRow, FormsModule, NgControlStatus, NgModel, ReactiveFormsModule, AngularEditorModule, AngularEditorComponent, RouterModule, RouterLink], styles: ["\n\n  app-on-hold-tasks .mat-paginator-container {\n  justify-content: space-between !important;\n}\n/*# sourceMappingURL=on-hold-tasks.component.css.map */"] });
var OnHoldTasksComponent = _OnHoldTasksComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OnHoldTasksComponent, { className: "OnHoldTasksComponent" });
})();
export {
  OnHoldTasksComponent
};
//# sourceMappingURL=on-hold-tasks.component-NBC6ONDE.js.map
