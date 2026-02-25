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

// src/app/componets/dashbord/task-dashboard/task-list/task-list.component.ts
function TaskListComponent_th_164_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 97);
    \u0275\u0275text(1, " No ");
    \u0275\u0275elementEnd();
  }
}
function TaskListComponent_td_165_Template(rf, ctx) {
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
function TaskListComponent_th_167_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 99);
    \u0275\u0275text(1, " Task ");
    \u0275\u0275elementEnd();
  }
}
function TaskListComponent_td_168_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 100)(1, "div", 101);
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
function TaskListComponent_th_170_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 99);
    \u0275\u0275text(1, " Department ");
    \u0275\u0275elementEnd();
  }
}
function TaskListComponent_td_171_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 100);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r4.Department, " ");
  }
}
function TaskListComponent_th_173_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 102);
    \u0275\u0275text(1, " AssignTo ");
    \u0275\u0275elementEnd();
  }
}
function TaskListComponent_td_174_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 100)(1, "a", 103)(2, "div", 104);
    \u0275\u0275element(3, "img", 105);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 106)(5, "h6", 107);
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
function TaskListComponent_th_176_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 99);
    \u0275\u0275text(1, " Priority ");
    \u0275\u0275elementEnd();
  }
}
function TaskListComponent_td_177_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 100)(1, "span");
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
function TaskListComponent_th_179_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 102);
    \u0275\u0275text(1, " StartDate ");
    \u0275\u0275elementEnd();
  }
}
function TaskListComponent_td_180_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 100);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r7.StartDate, " ");
  }
}
function TaskListComponent_th_182_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 102);
    \u0275\u0275text(1, " Deadline ");
    \u0275\u0275elementEnd();
  }
}
function TaskListComponent_td_183_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 100);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r8.Deadline);
  }
}
function TaskListComponent_th_185_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 102);
    \u0275\u0275text(1, " Progress ");
    \u0275\u0275elementEnd();
  }
}
function TaskListComponent_td_186_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 100);
    \u0275\u0275element(1, "ngb-progressbar", 108);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("type", row_r9.PriorityStatus);
    \u0275\u0275property("value", row_r9.progress);
  }
}
function TaskListComponent_th_188_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 102);
    \u0275\u0275text(1, " WorkStatus ");
    \u0275\u0275elementEnd();
  }
}
function TaskListComponent_td_189_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 100)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "span", 109);
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
function TaskListComponent_th_191_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 110);
    \u0275\u0275text(1, " Action ");
    \u0275\u0275elementEnd();
  }
}
function TaskListComponent_td_192_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 100)(1, "div", 101)(2, "a", 111);
    \u0275\u0275element(3, "i", 112);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 113);
    \u0275\u0275listener("click", function TaskListComponent_td_192_Template_a_click_4_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r11 = \u0275\u0275nextContext();
      const editContent_r13 = \u0275\u0275reference(214);
      return \u0275\u0275resetView(ctx_r11.edit(editContent_r13));
    });
    \u0275\u0275element(5, "i", 114);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 115);
    \u0275\u0275listener("click", function TaskListComponent_td_192_Template_a_click_6_listener() {
      const row_r14 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r11 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r11.removeData(row_r14.No));
    });
    \u0275\u0275element(7, "i", 116);
    \u0275\u0275elementEnd()()();
  }
}
function TaskListComponent_tr_193_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 117);
  }
}
function TaskListComponent_tr_194_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 118);
  }
}
function TaskListComponent_tr_195_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 119)(1, "td", 120);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const input_r15 = \u0275\u0275reference(160);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1('No data matching the filter "', input_r15.value, '"');
  }
}
function TaskListComponent_ng_template_213_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 121)(1, "div", 122)(2, "h5", 123);
    \u0275\u0275text(3, "Edit Task");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 124);
    \u0275\u0275listener("click", function TaskListComponent_ng_template_213_Template_button_click_4_listener() {
      const modal_r17 = \u0275\u0275restoreView(_r16).$implicit;
      return \u0275\u0275resetView(modal_r17.dismiss("Cross click"));
    });
    \u0275\u0275elementStart(5, "span", 125);
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 126)(8, "div", 3)(9, "div", 36)(10, "div", 37)(11, "label", 38);
    \u0275\u0275text(12, "Task ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 127);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 36)(15, "div", 37)(16, "label", 38);
    \u0275\u0275text(17, "Task Title");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 128);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 3)(20, "div", 36)(21, "div", 37)(22, "label", 38);
    \u0275\u0275text(23, "Department:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "ng-select", 129)(25, "ng-option", 68);
    \u0275\u0275text(26, "Designing Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "ng-option", 46);
    \u0275\u0275text(28, "Development Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "ng-option", 47);
    \u0275\u0275text(30, "Marketing Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "ng-option", 48);
    \u0275\u0275text(32, "Human Resource Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "ng-option", 49);
    \u0275\u0275text(34, "Managers Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "ng-option", 50);
    \u0275\u0275text(36, "Application Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "ng-option", 51);
    \u0275\u0275text(38, "Support Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "ng-option", 52);
    \u0275\u0275text(40, "IT Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "ng-option", 53);
    \u0275\u0275text(42, "Technical Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "ng-option", 54);
    \u0275\u0275text(44, "Accounts Department");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(45, "div", 36)(46, "div", 37)(47, "label", 38);
    \u0275\u0275text(48, "Assign To:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "ng-select", 130)(50, "ng-option", 68);
    \u0275\u0275text(51, "Faith Harris");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "ng-option", 46);
    \u0275\u0275text(53, "Austin Bell");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "ng-option", 47);
    \u0275\u0275text(55, "Maria Bower");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "ng-option", 48);
    \u0275\u0275text(57, "Peter Hill");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "ng-option", 49);
    \u0275\u0275text(59, "Victoria Lyman");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "ng-option", 50);
    \u0275\u0275text(61, "Adam Quinn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "ng-option", 51);
    \u0275\u0275text(63, "Melanie Coleman");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "ng-option", 52);
    \u0275\u0275text(65, "Max Wilson");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "ng-option", 53);
    \u0275\u0275text(67, "Amelia Russell");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "ng-option", 54);
    \u0275\u0275text(69, "Justin Metcalfe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "ng-option", 55);
    \u0275\u0275text(71, "Ryan Young");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "ng-option", 56);
    \u0275\u0275text(73, "Jennifer Hardacre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "ng-option", 131);
    \u0275\u0275text(75, "Justin Parr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "ng-option", 132);
    \u0275\u0275text(77, "Julia Hodges");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "ng-option", 133);
    \u0275\u0275text(79, "Michael Sutherland");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(80, "div", 37)(81, "label", 38);
    \u0275\u0275text(82, "Task Priority:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "ng-select", 134)(84, "ng-option", 68);
    \u0275\u0275text(85, "High");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "ng-option", 46);
    \u0275\u0275text(87, "Medium");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "ng-option", 47);
    \u0275\u0275text(89, "Low");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(90, "div", 3)(91, "div", 36)(92, "div", 135)(93, "div", 37)(94, "label", 38);
    \u0275\u0275text(95, "From:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "div", 31)(97, "div", 39);
    \u0275\u0275element(98, "i", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275element(99, "input", 136);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(100, "div", 36)(101, "div", 137)(102, "div", 37)(103, "label", 38);
    \u0275\u0275text(104, "TO:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "div", 31)(106, "div", 39);
    \u0275\u0275element(107, "i", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275element(108, "input", 136);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(109, "div", 37)(110, "label", 38);
    \u0275\u0275text(111, "Description:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "angular-editor", 138);
    \u0275\u0275twoWayListener("ngModelChange", function TaskListComponent_ng_template_213_Template_angular_editor_ngModelChange_112_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r11 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r11.htmlContent, $event) || (ctx_r11.htmlContent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(113, "div", 37)(114, "label", 139);
    \u0275\u0275text(115, "Attachment:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(116, "input", 140);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "div", 141)(118, "label", 142);
    \u0275\u0275text(119, "Work Status :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "div", 143);
    \u0275\u0275element(121, "input", 144);
    \u0275\u0275elementStart(122, "label", 145);
    \u0275\u0275text(123, " Completed ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(124, "div", 143);
    \u0275\u0275element(125, "input", 146);
    \u0275\u0275elementStart(126, "label", 147);
    \u0275\u0275text(127, " On Hold ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(128, "div", 148);
    \u0275\u0275element(129, "input", 149);
    \u0275\u0275elementStart(130, "label", 150);
    \u0275\u0275text(131, " On Progress ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(132, "div", 151)(133, "div", 152)(134, "a", 153);
    \u0275\u0275listener("click", function TaskListComponent_ng_template_213_Template_a_click_134_listener() {
      const modal_r17 = \u0275\u0275restoreView(_r16).$implicit;
      return \u0275\u0275resetView(modal_r17.dismiss("Cross click"));
    });
    \u0275\u0275text(135, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(136, "a", 154);
    \u0275\u0275listener("click", function TaskListComponent_ng_template_213_Template_a_click_136_listener() {
      const modal_r17 = \u0275\u0275restoreView(_r16).$implicit;
      return \u0275\u0275resetView(modal_r17.dismiss("Cross click"));
    });
    \u0275\u0275text(137, "Update");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r11 = \u0275\u0275nextContext();
    \u0275\u0275advance(112);
    \u0275\u0275twoWayProperty("ngModel", ctx_r11.htmlContent);
    \u0275\u0275property("config", ctx_r11.config1);
  }
}
var ELEMENT_DATA = [
  { No: 1, Task: "Marketing materials Issues", badge: "warning", Department: "Marketing", img: "./assets/images/users/10.jpg", AssignTo: "Faith Harris", Priority: "High", PriorityStatus: "danger", StartDate: "11-03-2021", Deadline: "19-05-2021", progress: 80, progressStatus: "success", worksStatus: "warning", worksStatusIcon: "", worksText: "On hold" },
  { No: 2, Task: "Logo Design", badge: "danger", Department: "Designing", img: "./assets/images/users/1.jpg", AssignTo: "Austin Bell", Priority: "Low", PriorityStatus: "success", StartDate: "05-02-2021", Deadline: "21-04-2021", progress: 70, progressStatus: "success", worksStatus: "danger", worksStatusIcon: "info", worksText: "Dealy" },
  { No: 3, Task: "Theme Update", badge: "warning", Department: "Designing", img: "./assets/images/users/2.jpg", AssignTo: "Maria Bower", Priority: "Medium", PriorityStatus: "warning", StartDate: "23-01-2021", Deadline: "25-02-2021", progress: 40, progressStatus: "success", worksStatus: "success", worksStatusIcon: "", worksText: "Completed" },
  { No: 4, Task: "Design Updated", badge: "warning", Department: "Designing", img: "./assets/images/users/3.jpg", AssignTo: "Peter Hill", Priority: "High", PriorityStatus: "danger", StartDate: "12-02-2021", Deadline: "16-06-2021", progress: 50, progressStatus: "success", worksStatus: "primary", worksStatusIcon: "", worksText: "On Progress" },
  { No: 5, Task: "HTML code Updated", badge: "danger", Department: "Designing", img: "./assets/images/users/4.jpg", AssignTo: "Victoria Lyman", Priority: "High", PriorityStatus: "danger", StartDate: "05-02-2021", Deadline: "22-04-2021	", progress: 50, progressStatus: "success", worksStatus: "primary", worksStatusIcon: "", worksText: "OnProgress" },
  { No: 6, Task: "Application Bugs fix", badge: "danger", Department: "Angular", img: "./assets/images/users/5.jpg", AssignTo: "Adam Quinn", Priority: "Medium", PriorityStatus: "warning", StartDate: "11-04-2021", Deadline: "16-06-2021", progress: 80, progressStatus: "success", worksStatus: "danger", worksStatusIcon: "info", worksText: "Dealy" },
  { No: 7, Task: "Theme update", badge: "primary", Department: "Designing", img: "./assets/images/users/4.jpg", AssignTo: "Melanie Coleman", Priority: "Low", PriorityStatus: "success", StartDate: "23-01-2021", Deadline: "25-02-2021", progress: 40, progressStatus: "primary", worksStatus: "primary", worksStatusIcon: "", worksText: "On Progress" },
  { No: 8, Task: "Jquery Issues Fix", badge: "success", Department: "Development", img: "./assets/images/users/12.jpg", AssignTo: "Max Wilson", Priority: "High", PriorityStatus: "danger", StartDate: "13-03-2021", Deadline: "05-05-2021", progress: 10, progressStatus: "success", worksStatus: "success", worksStatusIcon: "", worksText: "Completed" }
];
var _TaskListComponent = class _TaskListComponent {
  constructor(modalService) {
    this.modalService = modalService;
    this.displayedColumns = ["No", "Task", "Department", "AssignTo", "Priority", "StartDate", "Deadline", "Progress", "WorkStatus", "Action"];
    this.standard = [""];
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
  removeData(No) {
    this.dataSource.data.map((el, ind) => {
      if (el.No == No) {
        this.dataSource.data.splice(ind, 1);
        this.dataSource._updateChangeSubscription();
      }
    });
  }
  edit(editContent) {
    this.modalService.open(editContent, { windowClass: "modalCusSty", size: "lg" });
  }
};
_TaskListComponent.\u0275fac = function TaskListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TaskListComponent)(\u0275\u0275directiveInject(NgbModal));
};
_TaskListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TaskListComponent, selectors: [["app-task-list"]], viewQuery: function TaskListComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(MatPaginator, 5);
    \u0275\u0275viewQuery(MatSort, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
  }
}, standalone: true, features: [\u0275\u0275ProvidersFeature([FlatpickrDefaults]), \u0275\u0275StandaloneFeature], decls: 215, vars: 5, consts: [["input", ""], ["editContent", ""], [3, "title", "title3"], [1, "row"], [1, "col-xl-3", "col-lg-6", "col-md-12"], [1, "card", "custom-card"], ["routerLink", "/dashboard/task-dashboard/task-list"], [1, "card-body"], [1, "col-7"], [1, "mt-0", "text-start"], [1, "fs-16", "fw-semibold"], [1, "mb-0", "mt-1", "text-danger", "fs-25"], [1, "col-5"], [1, "icon1", "bg-danger-transparent", "my-auto", "float-end"], [1, "fe", "fe-briefcase"], ["routerLink", "/dashboard/task-dashboard/running-tasks"], [1, "mb-0", "mt-1", "text-primary", "fs-25"], [1, "icon1", "bg-primary-transparent", "my-auto", "float-end"], [1, "fe", "fe-clipboard"], ["routerLink", "/dashboard/task-dashboard/onhold-tasks"], [1, "mb-0", "mt-1", "text-secondary", "fs-25"], [1, "icon1", "bg-secondary-transparent", "my-auto", "float-end"], [1, "fe", "fe-info"], ["routerLink", "/dashboard/task-dashboard/completed-tasks"], [1, "mb-0", "mt-1", "text-success", "fs-25"], [1, "icon1", "bg-success-transparent", "my-auto", "float-end"], [1, "fe", "fe-check"], [1, "col-xl-12", "col-md-12", "col-lg-12"], [1, "card-header", "d-flex", "justify-content-between", "border-bottom-0"], [1, "card-title"], [1, "float-end"], [1, "input-group"], ["placeholder", "Search.....", "type", "text", 1, "form-control"], [1, "btn", "btn-light", "br-ts-0", "br-bs-0"], [1, "fa", "fa-search"], [1, "col-md-12", "col-lg-12", "col-xxl-5"], [1, "col-md-6"], [1, "form-group"], [1, "form-label"], [1, "input-group-text", "text-muted"], [1, "ri-calendar-line"], ["type", "text", "mwlFlatpickr", "", "placeholder", "DD-MM-YYYY", 1, "form-control", "choose-date"], [1, "col-xl-3", "col-lg-6"], ["data-trigger", "", "placeholder", "Select Employee", 1, "form-control", "custom-select", "p-0"], ["value", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["value", "11"], ["value", "12"], ["data-trigger", "", "placeholder", "High", 1, "form-control", "custom-select", "p-0"], [1, "col-xxl-1", "col-xl-3", "ps-xxl-0"], [1, "form-group", "mt-2"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "d-grid"], [1, "card-body", "border-top"], [1, "row", "mb-3", "gap-1", "gap-lg-0"], [1, "col-lg-6"], [1, "d-flex", "align-items-center"], [1, "d-flex", "ms-2", "mx-2"], [1, "form-group", "mb-0"], ["name", "quantity", "id", "select-countries17", "data-trigger", "", "placeholder", "1", 1, "form-control", "w-5rem", "p-0"], ["value", "1", "selected", ""], ["type", "text", "matInput", "", "placeholder", "search", 1, "form-control", 3, "keyup"], [1, "table-responsive"], ["mat-table", "", "matSort", "", "id", "task-list", 1, "table", "table-vcenter", "text-nowrap", "table-bordered", "border-bottom", 3, "dataSource"], ["matColumnDef", "No"], ["mat-header-cell", "", "mat-sort-header", "", "class", "border-bottom-0 text-center", 4, "matHeaderCellDef"], ["class", "text-center", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Task"], ["class", "border-bottom-0", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Department"], ["matColumnDef", "AssignTo"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "Priority"], ["matColumnDef", "StartDate"], ["matColumnDef", "Deadline"], ["matColumnDef", "Progress"], ["matColumnDef", "WorkStatus"], ["matColumnDef", "Action"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], [1, "mt-4"], [1, "pagination", "justify-content-end", "mb-0"], [1, "page-item", "disabled"], ["href", "javascript:void(0);", 1, "page-link"], [1, "page-item", "active"], [1, "page-item"], ["mat-header-cell", "", "mat-sort-header", "", 1, "border-bottom-0", "text-center"], ["mat-cell", "", 1, "text-center"], ["mat-header-cell", "", "mat-sort-header", "", 1, "border-bottom-0"], ["mat-cell", ""], [1, "d-flex"], ["mat-header-cell", "", "mat-sort-header", ""], ["routerLink", "/dashboard/task-dashboard/user-profile", 1, "d-flex"], [1, "avatar", "avatar-sm", "me-2", "avatar-rounded"], ["alt", "img", 3, "src"], [1, "me-3", "mt-0", "mt-sm-2", "d-block"], [1, "mb-1", "fs-14"], ["height", "0.5rem", 1, "me-3", 3, "type", "value"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "aria-label", "Dealy by 99 days", "data-bs-original-title", "Dealy by 99 days"], ["mat-header-cell", ""], ["routerLink", "/dashboard/task-dashboard/view-tasks", "placement", "top", "ngbTooltip", "View Task", 1, "action-btns1"], [1, "fe", "fe-eye", "text-primary"], ["placement", "top", "ngbTooltip", "View", 1, "action-btns1", 3, "click"], [1, "fe", "fe-edit-2", "text-success"], ["placement", "top", "ngbTooltip", "Delete", 1, "action-btns1", 3, "click"], [1, "fe", "fe-trash-2", "text-danger"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "nav-link"], [1, "modal-body"], ["placeholder", "Text", "value", "001", 1, "form-control"], ["placeholder", "Text", "value", "Design Updated", 1, "form-control"], ["name", "attendance", "placeholder", "Select Department", 1, "form-control", "custom-select", "p-0"], ["name", "attendance", "placeholder", "Select Employee", 1, "form-control", "custom-select", "p-0"], ["value", "13"], ["value", "14"], ["value", "15"], ["name", "attendance", "placeholder", "Select Priority", 1, "form-control", "custom-select", "p-0"], ["id", "single", 1, "leave-content", "active", "mb-3", "mb-md-0"], ["mwlFlatpickr", "", "type", "text", "placeholder", "DD-MM-YYYY", 1, "form-control", "choose-date"], ["id", "single1", 1, "leave-content", "active"], [3, "ngModelChange", "ngModel", "config"], ["for", "form-label", 1, "form-label"], ["type", "file", 1, "form-control"], [1, "custom-controls-stacked", "d-md-flex"], [1, "form-label", "me-5"], [1, "form-check", "mb-0", "me-4"], ["type", "radio", "name", "flexRadioDefault1", "id", "flexRadioDefault11", 1, "form-check-input"], ["for", "flexRadioDefault11", 1, "form-check-label"], ["type", "radio", "name", "flexRadioDefault1", "id", "flexRadioDefault12", 1, "form-check-input"], ["for", "flexRadioDefault12", 1, "form-check-label"], [1, "form-check", "mb-0"], ["type", "radio", "name", "flexRadioDefault1", "id", "flexRadioDefault13", 1, "form-check-input"], ["for", "flexRadioDefault13", 1, "form-check-label"], [1, "modal-footer"], [1, "ms-auto"], ["href", "javascript:;", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-primary", "me-2", 3, "click"], ["href", "javascript:;", 1, "btn", "btn-success", 3, "click"]], template: function TaskListComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "app-task-dashboard-page-header", 2);
    \u0275\u0275elementStart(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "a", 6)(5, "div", 7)(6, "div", 3)(7, "div", 8)(8, "div", 9)(9, "span", 10);
    \u0275\u0275text(10, "All Task's");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h3", 11);
    \u0275\u0275text(12, "1254");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 12)(14, "div", 13);
    \u0275\u0275element(15, "i", 14);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(16, "div", 4)(17, "div", 5)(18, "a", 15)(19, "div", 7)(20, "div", 3)(21, "div", 8)(22, "div", 9)(23, "span", 10);
    \u0275\u0275text(24, "My Task");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "h3", 16);
    \u0275\u0275text(26, "42");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 12)(28, "div", 17);
    \u0275\u0275element(29, "i", 18);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(30, "div", 4)(31, "div", 5)(32, "a", 19)(33, "div", 7)(34, "div", 3)(35, "div", 8)(36, "div", 9)(37, "span", 10);
    \u0275\u0275text(38, "Pending Tasks");
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
    \u0275\u0275text(63, "Recent Task Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 30)(65, "div", 31);
    \u0275\u0275element(66, "input", 32);
    \u0275\u0275elementStart(67, "button", 33);
    \u0275\u0275element(68, "i", 34);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(69, "div", 7)(70, "div", 3)(71, "div", 35)(72, "div", 3)(73, "div", 36)(74, "div", 37)(75, "label", 38);
    \u0275\u0275text(76, "From:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "div", 37)(78, "div", 31)(79, "div", 39);
    \u0275\u0275element(80, "i", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275element(81, "input", 41);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(82, "div", 36)(83, "div", 37)(84, "label", 38);
    \u0275\u0275text(85, "To:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "div", 37)(87, "div", 31)(88, "div", 39);
    \u0275\u0275element(89, "i", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275element(90, "input", 41);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(91, "div", 42)(92, "div", 37)(93, "label", 38);
    \u0275\u0275text(94, "Assign To:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "ng-select", 43)(96, "ng-option", 44);
    \u0275\u0275text(97, "Select Employee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "ng-option", 45);
    \u0275\u0275text(99, "Faith Harris");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "ng-option", 46);
    \u0275\u0275text(101, "Austin Bell");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "ng-option", 47);
    \u0275\u0275text(103, "Maria Bower");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "ng-option", 48);
    \u0275\u0275text(105, "Peter Hill");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "ng-option", 49);
    \u0275\u0275text(107, "Victoria Lyman");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "ng-option", 50);
    \u0275\u0275text(109, "Adam Quinn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "ng-option", 51);
    \u0275\u0275text(111, "Melanie Coleman");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "ng-option", 52);
    \u0275\u0275text(113, "Max Wilson");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "ng-option", 53);
    \u0275\u0275text(115, "Amelia Russell");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "ng-option", 54);
    \u0275\u0275text(117, "Justin Metcalfe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "ng-option", 55);
    \u0275\u0275text(119, "Ryan Young");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "ng-option", 56);
    \u0275\u0275text(121, "Jennifer Hardacre");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(122, "div", 42)(123, "div", 37)(124, "label", 38);
    \u0275\u0275text(125, "Select Priority:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "ng-select", 57)(127, "ng-option", 44);
    \u0275\u0275text(128, "High");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(129, "ng-option", 45);
    \u0275\u0275text(130, "Medium");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(131, "ng-option", 46);
    \u0275\u0275text(132, "Low");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(133, "div", 58)(134, "div", 59);
    \u0275\u0275element(135, "label", 38);
    \u0275\u0275elementStart(136, "a", 60);
    \u0275\u0275text(137, "Search");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(138, "div", 61)(139, "div", 62)(140, "div", 63)(141, "div", 64)(142, "span");
    \u0275\u0275text(143, "Show");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(144, "div", 65)(145, "div", 66)(146, "ng-select", 67)(147, "ng-option", 68);
    \u0275\u0275text(148, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(149, "ng-option", 46);
    \u0275\u0275text(150, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(151, "ng-option", 47);
    \u0275\u0275text(152, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(153, "ng-option", 48);
    \u0275\u0275text(154, "4");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(155, "span");
    \u0275\u0275text(156, "entries");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(157, "div", 63)(158, "div", 30)(159, "input", 69, 0);
    \u0275\u0275listener("keyup", function TaskListComponent_Template_input_keyup_159_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.applyFilter($event));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(161, "div", 70)(162, "table", 71);
    \u0275\u0275elementContainerStart(163, 72);
    \u0275\u0275template(164, TaskListComponent_th_164_Template, 2, 0, "th", 73)(165, TaskListComponent_td_165_Template, 2, 1, "td", 74);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(166, 75);
    \u0275\u0275template(167, TaskListComponent_th_167_Template, 2, 0, "th", 76)(168, TaskListComponent_td_168_Template, 5, 4, "td", 77);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(169, 78);
    \u0275\u0275template(170, TaskListComponent_th_170_Template, 2, 0, "th", 76)(171, TaskListComponent_td_171_Template, 2, 1, "td", 77);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(172, 79);
    \u0275\u0275template(173, TaskListComponent_th_173_Template, 2, 0, "th", 80)(174, TaskListComponent_td_174_Template, 7, 2, "td", 77);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(175, 81);
    \u0275\u0275template(176, TaskListComponent_th_176_Template, 2, 0, "th", 76)(177, TaskListComponent_td_177_Template, 3, 4, "td", 77);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(178, 82);
    \u0275\u0275template(179, TaskListComponent_th_179_Template, 2, 0, "th", 80)(180, TaskListComponent_td_180_Template, 2, 1, "td", 77);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(181, 83);
    \u0275\u0275template(182, TaskListComponent_th_182_Template, 2, 0, "th", 80)(183, TaskListComponent_td_183_Template, 2, 1, "td", 77);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(184, 84);
    \u0275\u0275template(185, TaskListComponent_th_185_Template, 2, 0, "th", 80)(186, TaskListComponent_td_186_Template, 2, 2, "td", 77);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(187, 85);
    \u0275\u0275template(188, TaskListComponent_th_188_Template, 2, 0, "th", 80)(189, TaskListComponent_td_189_Template, 4, 7, "td", 77);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(190, 86);
    \u0275\u0275template(191, TaskListComponent_th_191_Template, 2, 0, "th", 87)(192, TaskListComponent_td_192_Template, 8, 0, "td", 77);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(193, TaskListComponent_tr_193_Template, 1, 0, "tr", 88)(194, TaskListComponent_tr_194_Template, 1, 0, "tr", 89)(195, TaskListComponent_tr_195_Template, 3, 1, "tr", 90);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(196, "nav", 91)(197, "ul", 92)(198, "li", 93)(199, "a", 94);
    \u0275\u0275text(200, "Prev");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(201, "li", 95)(202, "a", 94);
    \u0275\u0275text(203, "1");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(204, "li", 96)(205, "a", 94);
    \u0275\u0275text(206, "2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(207, "li", 96)(208, "a", 94);
    \u0275\u0275text(209, "3");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(210, "li", 96)(211, "a", 94);
    \u0275\u0275text(212, "Next");
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275template(213, TaskListComponent_ng_template_213_Template, 138, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275property("title", "Task List")("title3", "Task");
    \u0275\u0275advance(162);
    \u0275\u0275property("dataSource", ctx.dataSource);
    \u0275\u0275advance(31);
    \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
  }
}, dependencies: [RouterModule, RouterLink, SharedModule, TaskDashboardPageHeaderComponent, NgbModule, NgbProgressbar, NgbTooltip, NgSelectModule, NgSelectComponent, NgOptionComponent, FlatpickrModule, FlatpickrDirective, NgApexchartsModule, MaterialModuleModule, MatInput, MatSort, MatSortHeader, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatNoDataRow, FormsModule, NgControlStatus, NgModel, ReactiveFormsModule, AngularEditorModule, AngularEditorComponent] });
var TaskListComponent = _TaskListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TaskListComponent, { className: "TaskListComponent" });
})();
export {
  TaskListComponent
};
//# sourceMappingURL=task-list.component-YBL6KNFB.js.map
