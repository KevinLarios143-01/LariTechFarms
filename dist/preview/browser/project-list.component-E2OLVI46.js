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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
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

// src/app/componets/dashbord/project-dashboard/project-list/project-list.component.ts
var _c0 = () => [8, 10, 25, 100];
function ProjectListComponent_th_154_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 76);
    \u0275\u0275text(1, " ID ");
    \u0275\u0275elementEnd();
  }
}
function ProjectListComponent_td_155_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 77);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r2.ID, " ");
  }
}
function ProjectListComponent_th_157_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 76);
    \u0275\u0275text(1, " ProjectTitle ");
    \u0275\u0275elementEnd();
  }
}
function ProjectListComponent_td_158_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 78)(1, "div", 79);
    \u0275\u0275element(2, "span");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("bg-", row_r3.projectTitleStatus, " dot-label1 me-2 mt-1");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.projectTitle);
  }
}
function ProjectListComponent_th_160_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 76);
    \u0275\u0275text(1, " Client ");
    \u0275\u0275elementEnd();
  }
}
function ProjectListComponent_td_161_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 78);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r4.client, " ");
  }
}
function ProjectListComponent_th_163_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 76);
    \u0275\u0275text(1, " Team ");
    \u0275\u0275elementEnd();
  }
}
function ProjectListComponent_td_164_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 81);
    \u0275\u0275element(1, "img", 82);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const team_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", team_r5.team1, \u0275\u0275sanitizeUrl);
  }
}
function ProjectListComponent_td_164_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 81);
    \u0275\u0275element(1, "img", 82);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const team_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", team_r5.team2, \u0275\u0275sanitizeUrl);
  }
}
function ProjectListComponent_td_164_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 81);
    \u0275\u0275element(1, "img", 82);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const team_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", team_r5.team3, \u0275\u0275sanitizeUrl);
  }
}
function ProjectListComponent_td_164_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 81);
    \u0275\u0275element(1, "img", 82);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const team_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", team_r5.team4, \u0275\u0275sanitizeUrl);
  }
}
function ProjectListComponent_td_164_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275template(1, ProjectListComponent_td_164_For_2_Conditional_1_Template, 2, 1, "span", 81)(2, ProjectListComponent_td_164_For_2_Conditional_2_Template, 2, 1, "span", 81)(3, ProjectListComponent_td_164_For_2_Conditional_3_Template, 2, 1, "span", 81)(4, ProjectListComponent_td_164_For_2_Conditional_4_Template, 2, 1, "span", 81);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const team_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(team_r5.team1 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(team_r5.team2 ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(team_r5.team3 ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(team_r5.team4 ? 4 : -1);
  }
}
function ProjectListComponent_td_164_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 78);
    \u0275\u0275repeaterCreate(1, ProjectListComponent_td_164_For_2_Template, 5, 4, "div", 80, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(row_r6.TeamMemeber);
  }
}
function ProjectListComponent_th_166_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 76);
    \u0275\u0275text(1, " Priority ");
    \u0275\u0275elementEnd();
  }
}
function ProjectListComponent_td_167_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 78)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("badge bg-", row_r7.priorityStatus, "-transparent");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r7.priority, "");
  }
}
function ProjectListComponent_th_169_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 76);
    \u0275\u0275text(1, " StartDate ");
    \u0275\u0275elementEnd();
  }
}
function ProjectListComponent_td_170_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 78);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r8.startDate, " ");
  }
}
function ProjectListComponent_th_172_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 76);
    \u0275\u0275text(1, " Deadline ");
    \u0275\u0275elementEnd();
  }
}
function ProjectListComponent_td_173_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 78);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r9.deadline);
  }
}
function ProjectListComponent_th_175_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 76);
    \u0275\u0275text(1, " Progress ");
    \u0275\u0275elementEnd();
  }
}
function ProjectListComponent_td_176_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 78)(1, "div", 83)(2, "h6", 84);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h6", 84);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "ngb-progressbar", 85);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r10 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r10.workProgressText);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", row_r10.workProgressPercentage, "%");
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("type", row_r10.workProgressPercentageStatus);
    \u0275\u0275property("value", row_r10.workProgressPercentage);
  }
}
function ProjectListComponent_th_178_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 76);
    \u0275\u0275text(1, " Status ");
    \u0275\u0275elementEnd();
  }
}
function ProjectListComponent_td_179_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 78)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "span", 86);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("badge bg-", row_r11.status, " me-1");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r11.statusText);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("fe fe-", row_r11.statusTextIcon, " text-danger");
  }
}
function ProjectListComponent_th_181_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 87);
    \u0275\u0275text(1, " Action ");
    \u0275\u0275elementEnd();
  }
}
function ProjectListComponent_td_182_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 78)(1, "div", 79)(2, "a", 88);
    \u0275\u0275element(3, "i", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 90);
    \u0275\u0275listener("click", function ProjectListComponent_td_182_Template_a_click_4_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r12 = \u0275\u0275nextContext();
      const editContent_r14 = \u0275\u0275reference(188);
      return \u0275\u0275resetView(ctx_r12.edit(editContent_r14));
    });
    \u0275\u0275element(5, "i", 91);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 92);
    \u0275\u0275listener("click", function ProjectListComponent_td_182_Template_a_click_6_listener() {
      const row_r15 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r12 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r12.removeData(row_r15.ID));
    });
    \u0275\u0275element(7, "i", 93);
    \u0275\u0275elementEnd()()();
  }
}
function ProjectListComponent_tr_183_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 94);
  }
}
function ProjectListComponent_tr_184_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 95);
  }
}
function ProjectListComponent_tr_185_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 96)(1, "td", 97);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const input_r16 = \u0275\u0275reference(149);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1('No data matching the filter "', input_r16.value, '"');
  }
}
function ProjectListComponent_ng_template_187_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 98)(1, "div", 99)(2, "h5", 100);
    \u0275\u0275text(3, "Edit Project");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 101);
    \u0275\u0275listener("click", function ProjectListComponent_ng_template_187_Template_button_click_4_listener() {
      const modal_r18 = \u0275\u0275restoreView(_r17).$implicit;
      return \u0275\u0275resetView(modal_r18.close("cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 102)(6, "div", 3)(7, "div", 22)(8, "div", 23)(9, "label", 24);
    \u0275\u0275text(10, "Project ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 103);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 22)(13, "div", 23)(14, "label", 24);
    \u0275\u0275text(15, "Project Title");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 104);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 3)(18, "div", 22)(19, "div", 23)(20, "label", 24);
    \u0275\u0275text(21, "Department:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "ng-select", 105)(23, "ng-option", 32);
    \u0275\u0275text(24, "Designing Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "ng-option", 33);
    \u0275\u0275text(26, "Development Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "ng-option", 34);
    \u0275\u0275text(28, "Marketing Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "ng-option", 35);
    \u0275\u0275text(30, "Human Resource Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "ng-option", 36);
    \u0275\u0275text(32, "Managers Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "ng-option", 106);
    \u0275\u0275text(34, "Application Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "ng-option", 38);
    \u0275\u0275text(36, "Support Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "ng-option", 39);
    \u0275\u0275text(38, "IT Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "ng-option", 40);
    \u0275\u0275text(40, "Technical Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "ng-option", 41);
    \u0275\u0275text(42, "Accounts Department");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(43, "div", 22)(44, "div", 23)(45, "label", 24);
    \u0275\u0275text(46, "Project Priority:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "ng-select", 107)(48, "ng-option", 53);
    \u0275\u0275text(49, "High");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "ng-option", 33);
    \u0275\u0275text(51, "Medium");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "ng-option", 34);
    \u0275\u0275text(53, "Low");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(54, "div", 3)(55, "div", 22)(56, "div", 23)(57, "label", 24);
    \u0275\u0275text(58, "Client:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "ng-select", 108)(60, "ng-option", 53);
    \u0275\u0275text(61, "Julia Walker");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "ng-option", 33);
    \u0275\u0275text(63, "Client 02");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "ng-option", 34);
    \u0275\u0275text(65, "Client 03");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(66, "div", 22)(67, "div", 23)(68, "label", 24);
    \u0275\u0275text(69, "($)Price:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(70, "input", 109);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(71, "div", 23)(72, "label", 24);
    \u0275\u0275text(73, "Assigned Team:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "ng-select", 110);
    \u0275\u0275twoWayListener("ngModelChange", function ProjectListComponent_ng_template_187_Template_ng_select_ngModelChange_74_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r12 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r12.selected, $event) || (ctx_r12.selected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(75, "ng-option", 32);
    \u0275\u0275text(76, "Faith Harris");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "ng-option", 33);
    \u0275\u0275text(78, "Austin Bell");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "ng-option", 34);
    \u0275\u0275text(80, "Maria Bower");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "ng-option", 35);
    \u0275\u0275text(82, "Peter Hill");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "ng-option", 36);
    \u0275\u0275text(84, "Victoria Lyman");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "ng-option", 37);
    \u0275\u0275text(86, "Adam Quinn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "ng-option", 38);
    \u0275\u0275text(88, "Melanie Coleman");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "ng-option", 39);
    \u0275\u0275text(90, "Max Wilson");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "ng-option", 40);
    \u0275\u0275text(92, "Amelia Russell");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "ng-option", 41);
    \u0275\u0275text(94, "Justin Metcalfe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "ng-option", 42);
    \u0275\u0275text(96, "Ryan Young");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "ng-option", 43);
    \u0275\u0275text(98, "Jennifer Hardacre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "ng-option", 111);
    \u0275\u0275text(100, "Justin Parr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "ng-option", 112);
    \u0275\u0275text(102, "Julia Hodges");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "ng-option", 113);
    \u0275\u0275text(104, "Michael Sutherland");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(105, "div", 3)(106, "div", 22)(107, "div", 23)(108, "label", 24);
    \u0275\u0275text(109, "Form:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "div", 25)(111, "div", 26);
    \u0275\u0275element(112, "i", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275element(113, "input", 28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(114, "div", 22)(115, "div", 23)(116, "label", 24);
    \u0275\u0275text(117, "To:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "div", 25)(119, "div", 26);
    \u0275\u0275element(120, "i", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275element(121, "input", 28);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(122, "div", 23)(123, "label", 24);
    \u0275\u0275text(124, "Description:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(125, "div", 114);
    \u0275\u0275text(126, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(127, "div", 23)(128, "label", 24);
    \u0275\u0275text(129, "Upload Files:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "div", 23);
    \u0275\u0275element(131, "label", 24)(132, "input", 115);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(133, "div", 116)(134, "label", 117);
    \u0275\u0275text(135, "Work Status :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(136, "div", 118);
    \u0275\u0275element(137, "input", 119);
    \u0275\u0275elementStart(138, "label", 120);
    \u0275\u0275text(139, " Active ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(140, "div", 118);
    \u0275\u0275element(141, "input", 121);
    \u0275\u0275elementStart(142, "label", 122);
    \u0275\u0275text(143, " Completed ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(144, "div", 118);
    \u0275\u0275element(145, "input", 123);
    \u0275\u0275elementStart(146, "label", 124);
    \u0275\u0275text(147, " On going ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(148, "div", 118);
    \u0275\u0275element(149, "input", 125);
    \u0275\u0275elementStart(150, "label", 126);
    \u0275\u0275text(151, " Pending ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(152, "div", 118);
    \u0275\u0275element(153, "input", 127);
    \u0275\u0275elementStart(154, "label", 128);
    \u0275\u0275text(155, " Not Started ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(156, "div", 129);
    \u0275\u0275element(157, "input", 130);
    \u0275\u0275elementStart(158, "label", 131);
    \u0275\u0275text(159, " Canceled ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(160, "div", 132)(161, "button", 133);
    \u0275\u0275listener("click", function ProjectListComponent_ng_template_187_Template_button_click_161_listener() {
      const modal_r18 = \u0275\u0275restoreView(_r17).$implicit;
      return \u0275\u0275resetView(modal_r18.close("cross click"));
    });
    \u0275\u0275text(162, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(163, "button", 134);
    \u0275\u0275text(164, "Submit");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r12 = \u0275\u0275nextContext();
    \u0275\u0275advance(74);
    \u0275\u0275property("hideSelected", true)("multiple", true);
    \u0275\u0275twoWayProperty("ngModel", ctx_r12.selected);
  }
}
var ELEMENT_DATA = [
  {
    ID: 1,
    projectTitle: "Design Updated",
    projectTitleStatus: "warning",
    client: "Julia Walker",
    TeamMemeber: [
      { team1: "./assets/images/users/4.jpg", team2: "./assets/images/users/15.jpg", team3: "./assets/images/users/5.jpg", team4: "./assets/images/users/14.jpg" }
    ],
    priority: "High",
    statusTextIcon: "",
    priorityStatus: "danger",
    startDate: "12-02-2021",
    deadline: "16-06-2021",
    workProgressText: "Project Status",
    workProgressPercentageStatus: "primary",
    workProgressPercentage: 80,
    statusText: "On Progress",
    status: "primary"
  },
  {
    ID: 2,
    projectTitle: "HTML Code Updated",
    projectTitleStatus: "danger",
    client: "Diane Short",
    TeamMemeber: [
      { team1: "./assets/images/users/2.jpg", team2: "./assets/images/users/10.jpg", team3: "./assets/images/users/3.jpg" }
    ],
    priority: "Low",
    statusTextIcon: "info",
    priorityStatus: "success",
    startDate: "01-01-2021",
    deadline: "22-04-2021",
    workProgressText: "Project Status",
    workProgressPercentageStatus: "warning",
    workProgressPercentage: 50,
    statusText: "Dealy",
    status: "danger"
  },
  {
    ID: 3,
    projectTitle: "Angular Issues fixed",
    projectTitleStatus: "success",
    client: "Pippa Welch",
    TeamMemeber: [
      { team1: "./assets/images/users/4.jpg", team2: "./assets/images/users/11.jpg", team3: "./assets/images/users/5.jpg", team4: "./assets/images/users/6.jpg", team5: "./assets/images/users/7.jpg" }
    ],
    priority: "medium",
    statusTextIcon: "",
    priorityStatus: "warning",
    startDate: "11-04-2021",
    deadline: "16-06-2021",
    workProgressText: "Project Status",
    workProgressPercentageStatus: "success",
    workProgressPercentage: 100,
    statusText: "OnGoing",
    status: "warning"
  },
  {
    ID: 4,
    projectTitle: "Marketing Material Issues",
    projectTitleStatus: "primary",
    client: "Gabrielle Fisher",
    TeamMemeber: [
      { team1: "./assets/images/users/8.jpg", team2: "./assets/images/users/12.jpg", team3: "./assets/images/users/9.jpg" }
    ],
    priority: "High",
    statusTextIcon: "",
    priorityStatus: "danger",
    startDate: "11-04-2021",
    deadline: "16-06-2021",
    workProgressText: "Project Status",
    workProgressPercentageStatus: "success",
    workProgressPercentage: 100,
    statusText: "Completed",
    status: "success"
  },
  {
    ID: 5,
    projectTitle: "Logo Design",
    projectTitleStatus: "primary",
    client: "Gabrielle Fisher",
    TeamMemeber: [
      { team1: "./assets/images/users/1.jpg", team2: "./assets/images/users/13.jpg", team3: "./assets/images/users/2.jpg", team4: "./assets/images/users/4.jpg" }
    ],
    priority: "High",
    statusTextIcon: "",
    priorityStatus: "danger",
    startDate: "11-03-2021",
    deadline: "16-06-2021",
    workProgressText: "Project Status",
    workProgressPercentageStatus: "orange",
    workProgressPercentage: 30,
    statusText: "Completed",
    status: "success"
  },
  {
    ID: 6,
    projectTitle: "Angular Issues fixed",
    projectTitleStatus: "success",
    client: "James Wilson",
    TeamMemeber: [{ team1: "./assets/images/users/3.jpg", team2: "./assets/images/users/4.jpg", team3: "./assets/images/users/12.jpg" }],
    priority: "Medium",
    statusTextIcon: "info",
    priorityStatus: "warning",
    startDate: "05-02-2021",
    deadline: "21-04-2021",
    workProgressText: "Project Status",
    workProgressPercentageStatus: "danger",
    workProgressPercentage: 0,
    statusText: "Dealy",
    status: "danger"
  },
  {
    ID: 7,
    projectTitle: "Theme Update",
    projectTitleStatus: "primary",
    client: "Ryan Terry",
    TeamMemeber: [{ team1: "./assets/images/users/8.jpg", team2: "./assets/images/users/15.jpg", team3: "./assets/images/users/9.jpg", team4: "./assets/images/users/16.jpg" }],
    priority: "Low",
    statusTextIcon: "",
    priorityStatus: "success",
    startDate: "21-01-2021",
    deadline: "15-03-2021",
    workProgressText: "Project Status",
    workProgressPercentageStatus: "danger",
    workProgressPercentage: 0,
    statusText: "Not Started",
    status: "info"
  },
  {
    ID: 8,
    projectTitle: "Jquery issues fix",
    projectTitleStatus: "success",
    client: "Sam Gray",
    TeamMemeber: [{ team1: "./assets/images/users/4.jpg", team2: "./assets/images/users/11.jpg", team3: "./assets/images/users/7.jpg", team4: "./assets/images/users/13.jpg" }],
    priority: "High",
    statusTextIcon: "",
    priorityStatus: "danger",
    startDate: "21-01-2021",
    deadline: "15-03-2021",
    workProgressText: "Project Status",
    workProgressPercentageStatus: "success",
    workProgressPercentage: 100,
    statusText: "Completed",
    status: "success"
  }
];
var _ProjectListComponent = class _ProjectListComponent {
  constructor(modalService) {
    this.modalService = modalService;
    this.standard = [];
    this.displayedColumns = ["ID", "ProjectTitle", "Client", "Team", "Priority", "StartDate", "Deadline", "Progress", "Status", "Action"];
    this.inlineDatePicker = false;
    this.flatpickrOptions = {
      inline: true
    };
    this.selected = ["Faith Harris", "Austin Bell", "Maria Bower", "Peter Hill"];
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
      if (el.ID == item) {
        this.dataSource.data.splice(ind, 1);
        this.dataSource._updateChangeSubscription();
      }
    });
  }
  edit(editContent) {
    this.modalService.open(editContent, { windowClass: "modalCusSty", size: "lg" });
  }
};
_ProjectListComponent.\u0275fac = function ProjectListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ProjectListComponent)(\u0275\u0275directiveInject(NgbModal));
};
_ProjectListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectListComponent, selectors: [["app-project-list"]], viewQuery: function ProjectListComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(MatPaginator, 5);
    \u0275\u0275viewQuery(MatSort, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
  }
}, standalone: true, features: [\u0275\u0275ProvidersFeature([
  FlatpickrDefaults
]), \u0275\u0275StandaloneFeature], decls: 189, vars: 7, consts: [["input", ""], ["editContent", ""], [3, "title", "title3"], [1, "row"], [1, "col-xl-2", "col-lg-6", "col-md-12"], [1, "card", "custom-card"], ["href", "javascript:void(0);"], [1, "card-body", "text-center"], [1, "avatar", "avatar-lg", "bradius", "fs-20", "bg-primary-transparent"], [1, "mb-0", "mt-3"], [1, "avatar", "avatar-lg", "bradius", "fs-20", "bg-orange-transparent"], [1, "avatar", "avatar-lg", "bradius", "fs-20", "bg-secondary-transparent"], [1, "avatar", "avatar-lg", "bradius", "fs-20", "bg-info-transparent"], [1, "avatar", "avatar-lg", "bradius", "fs-20", "bg-success-transparent"], [1, "avatar", "avatar-lg", "bradius", "fs-20", "bg-danger-transparent"], [1, "col-xl-12", "col-md-12", "col-lg-12"], [1, "card-header", "d-flex", "justify-content-between", "border-bottom-0"], [1, "card-title"], [1, "float-end"], ["type", "text", "placeholder", "search", 1, "form-control"], [1, "card-body"], [1, "col-md-12", "col-lg-12", "col-xxl-5"], [1, "col-md-6"], [1, "form-group"], [1, "form-label"], [1, "input-group"], [1, "input-group-text", "text-muted"], [1, "ri-calendar-line"], ["type", "text", "mwlFlatpickr", "", "placeholder", "DD-MM-YYYY", 1, "form-control", "choose-date"], [1, "col-xl-3", "col-lg-6"], ["data-trigger", "", "placeholder", "Select Employee", 1, "form-control", "custom-select", "p-0"], ["value", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["value", "11"], ["value", "12"], [1, "col-xxl-1", "col-xl-3", "ps-xxl-0"], [1, "form-group", "mt-2"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "d-grid"], [1, "card-body", "border-top"], [1, "row", "mb-3"], [1, "col-lg-6"], [1, "d-flex", "align-items-center"], [1, "d-flex", "ms-2", "mx-2"], ["name", "quantity", "id", "select-countries17", "data-trigger", "", "placeholder", "1", 1, "form-control", "wd-150", "p-0"], ["value", "1", "selected", ""], ["matInput", "", "type", "text", "placeholder", "search", 1, "form-control", 3, "keyup"], [1, "table-responsive"], [1, ""], ["mat-table", "", "matSort", "", 1, "table", "table-vcenter", "text-nowrap", "table-bordered", "border-bottom", 3, "dataSource"], ["matColumnDef", "ID"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "text-center", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "ProjectTitle"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Client"], ["matColumnDef", "Team"], ["matColumnDef", "Priority"], ["matColumnDef", "StartDate"], ["matColumnDef", "Deadline"], ["matColumnDef", "Progress"], ["matColumnDef", "Status"], ["matColumnDef", "Action"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["aria-label", "Select page of users", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "text-center"], ["mat-cell", ""], [1, "d-flex"], [1, "avatar-list-stacked"], [1, "avatar", "avatar-md", "me-2", "avatar-rounded"], ["alt", "img", 3, "src"], [1, "d-flex", "align-items-end", "justify-content-between"], [1, "fs-12"], ["height", "0.5rem", 1, "me-3", 3, "type", "value"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "aria-label", "Dealy by 99 days", "data-bs-original-title", "Dealy by 99 days"], ["mat-header-cell", ""], ["routerLink", "/dashboard/project-dashboard/view-project", "placement", "top", "ngbTooltip", "View Project", 1, "action-btns1"], [1, "fe", "fe-eye", "text-primary"], ["placement", "top", "ngbTooltip", "View", 1, "action-btns1", 3, "click"], [1, "fe", "fe-edit-2", "text-success"], ["href", "javascript:;", "placement", "top", "ngbTooltip", "Delete", 1, "action-btns1", 3, "click"], [1, "fe", "fe-trash-2", "text-danger"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], ["placeholder", "Number", "value", "#67", 1, "form-control"], ["placeholder", "Text", "value", "Mobile App", 1, "form-control"], ["data-trigger", "", "placeholder", "Select Department", 1, "form-control", "custom-select", "p-0"], ["value", "6", "selected", ""], ["placeholder", "High", "data-trigger", "", "placeholder", "Select Priority", 1, "form-control", "custom-select", "p-0"], ["data-trigger", "", "placeholder", "Enter Client", 1, "form-control", "custom-select", "p-0"], ["placeholder", "Enter Price eg:$69.00", "value", "$170.00", 1, "form-control"], ["name", "choices-multiple-remove-button", "id", "choices-multiple-remove-button", 1, "form-control", "p-0", 3, "ngModelChange", "hideSelected", "multiple", "ngModel"], ["value", "13"], ["value", "14"], ["value", "15"], [1, "summernote"], ["type", "file", 1, "form-control"], [1, "custom-controls-stacked", "d-md-flex"], [1, "form-label", "mt-1", "me-5"], [1, "form-check", "mb-0", "me-4"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault1", 1, "form-check-input"], ["for", "flexRadioDefault1", 1, "form-check-label"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault2", 1, "form-check-input"], ["for", "flexRadioDefault2", 1, "form-check-label"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault3", 1, "form-check-input"], ["for", "flexRadioDefault3", 1, "form-check-label"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault4", 1, "form-check-input"], ["for", "flexRadioDefault4", 1, "form-check-label"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault5", 1, "form-check-input"], ["for", "flexRadioDefault5", 1, "form-check-label"], [1, "form-check", "mb-0"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault6", 1, "form-check-input"], ["for", "flexRadioDefault6", 1, "form-check-label"], [1, "modal-footer"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-primary", 3, "click"], [1, "btn", "btn-success", "successful-notify"]], template: function ProjectListComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "app-task-dashboard-page-header", 2);
    \u0275\u0275elementStart(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "a", 6)(5, "div", 7)(6, "span", 8);
    \u0275\u0275text(7, "125");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h5", 9);
    \u0275\u0275text(9, "Total Projects");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(10, "div", 4)(11, "div", 5)(12, "a", 6)(13, "div", 7)(14, "span", 10);
    \u0275\u0275text(15, "33");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "h5", 9);
    \u0275\u0275text(17, "Pending Projects");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(18, "div", 4)(19, "div", 5)(20, "a", 6)(21, "div", 7)(22, "span", 11);
    \u0275\u0275text(23, "56");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "h5", 9);
    \u0275\u0275text(25, "Ongoing Projects");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(26, "div", 4)(27, "div", 5)(28, "a", 6)(29, "div", 7)(30, "span", 12);
    \u0275\u0275text(31, "08");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "h5", 9);
    \u0275\u0275text(33, "Not Started Projects");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(34, "div", 4)(35, "div", 5)(36, "a", 6)(37, "div", 7)(38, "span", 13);
    \u0275\u0275text(39, "35");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "h5", 9);
    \u0275\u0275text(41, "Completed Projects");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(42, "div", 4)(43, "div", 5)(44, "a", 6)(45, "div", 7)(46, "span", 14);
    \u0275\u0275text(47, "02");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "h5", 9);
    \u0275\u0275text(49, "Canceled Projects");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(50, "div", 3)(51, "div", 15)(52, "div", 5)(53, "div", 16)(54, "h4", 17);
    \u0275\u0275text(55, "Recent project Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 18);
    \u0275\u0275element(57, "input", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 20)(59, "div", 3)(60, "div", 21)(61, "div", 3)(62, "div", 22)(63, "div", 23)(64, "label", 24);
    \u0275\u0275text(65, "From:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 23)(67, "div", 25)(68, "div", 26);
    \u0275\u0275element(69, "i", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275element(70, "input", 28);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(71, "div", 22)(72, "div", 23)(73, "label", 24);
    \u0275\u0275text(74, "To:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "div", 23)(76, "div", 25)(77, "div", 26);
    \u0275\u0275element(78, "i", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275element(79, "input", 28);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(80, "div", 29)(81, "div", 23)(82, "label", 24);
    \u0275\u0275text(83, "Assign To:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "ng-select", 30)(85, "ng-option", 31);
    \u0275\u0275text(86, "Select Employee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "ng-option", 32);
    \u0275\u0275text(88, "Faith Harris");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "ng-option", 33);
    \u0275\u0275text(90, "Austin Bell");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "ng-option", 34);
    \u0275\u0275text(92, "Maria Bower");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "ng-option", 35);
    \u0275\u0275text(94, "Peter Hill");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "ng-option", 36);
    \u0275\u0275text(96, "Victoria Lyman");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "ng-option", 37);
    \u0275\u0275text(98, "Adam Quinn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "ng-option", 38);
    \u0275\u0275text(100, "Melanie Coleman");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "ng-option", 39);
    \u0275\u0275text(102, "Max Wilson");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "ng-option", 40);
    \u0275\u0275text(104, "Amelia Russell");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "ng-option", 41);
    \u0275\u0275text(106, "Justin Metcalfe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "ng-option", 42);
    \u0275\u0275text(108, "Ryan Young");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "ng-option", 43);
    \u0275\u0275text(110, "Jennifer Hardacre");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(111, "div", 29)(112, "div", 23)(113, "label", 24);
    \u0275\u0275text(114, "Select Priority:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "ng-select", 30)(116, "ng-option", 31);
    \u0275\u0275text(117, "High");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "ng-option", 32);
    \u0275\u0275text(119, "Medium");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "ng-option", 33);
    \u0275\u0275text(121, "Low");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(122, "div", 44)(123, "div", 45);
    \u0275\u0275element(124, "label", 24);
    \u0275\u0275elementStart(125, "a", 46);
    \u0275\u0275text(126, "Search");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(127, "div", 47)(128, "div", 48)(129, "div", 49)(130, "div", 50)(131, "span");
    \u0275\u0275text(132, "Show");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(133, "div", 51)(134, "div", 45)(135, "ng-select", 52)(136, "ng-option", 53);
    \u0275\u0275text(137, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(138, "ng-option", 33);
    \u0275\u0275text(139, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(140, "ng-option", 34);
    \u0275\u0275text(141, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(142, "ng-option", 35);
    \u0275\u0275text(143, "4");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(144, "span");
    \u0275\u0275text(145, "entries");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(146, "div", 49)(147, "div", 18)(148, "input", 54, 0);
    \u0275\u0275listener("keyup", function ProjectListComponent_Template_input_keyup_148_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.applyFilter($event));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(150, "div", 55)(151, "div", 56)(152, "table", 57);
    \u0275\u0275elementContainerStart(153, 58);
    \u0275\u0275template(154, ProjectListComponent_th_154_Template, 2, 0, "th", 59)(155, ProjectListComponent_td_155_Template, 2, 1, "td", 60);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(156, 61);
    \u0275\u0275template(157, ProjectListComponent_th_157_Template, 2, 0, "th", 59)(158, ProjectListComponent_td_158_Template, 5, 4, "td", 62);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(159, 63);
    \u0275\u0275template(160, ProjectListComponent_th_160_Template, 2, 0, "th", 59)(161, ProjectListComponent_td_161_Template, 2, 1, "td", 62);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(162, 64);
    \u0275\u0275template(163, ProjectListComponent_th_163_Template, 2, 0, "th", 59)(164, ProjectListComponent_td_164_Template, 3, 0, "td", 62);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(165, 65);
    \u0275\u0275template(166, ProjectListComponent_th_166_Template, 2, 0, "th", 59)(167, ProjectListComponent_td_167_Template, 3, 4, "td", 62);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(168, 66);
    \u0275\u0275template(169, ProjectListComponent_th_169_Template, 2, 0, "th", 59)(170, ProjectListComponent_td_170_Template, 2, 1, "td", 62);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(171, 67);
    \u0275\u0275template(172, ProjectListComponent_th_172_Template, 2, 0, "th", 59)(173, ProjectListComponent_td_173_Template, 2, 1, "td", 62);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(174, 68);
    \u0275\u0275template(175, ProjectListComponent_th_175_Template, 2, 0, "th", 59)(176, ProjectListComponent_td_176_Template, 7, 4, "td", 62);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(177, 69);
    \u0275\u0275template(178, ProjectListComponent_th_178_Template, 2, 0, "th", 59)(179, ProjectListComponent_td_179_Template, 4, 7, "td", 62);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(180, 70);
    \u0275\u0275template(181, ProjectListComponent_th_181_Template, 2, 0, "th", 71)(182, ProjectListComponent_td_182_Template, 8, 0, "td", 62);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(183, ProjectListComponent_tr_183_Template, 1, 0, "tr", 72)(184, ProjectListComponent_tr_184_Template, 1, 0, "tr", 73)(185, ProjectListComponent_tr_185_Template, 3, 1, "tr", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275element(186, "mat-paginator", 75);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275template(187, ProjectListComponent_ng_template_187_Template, 165, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275property("title", "Project List")("title3", "Project");
    \u0275\u0275advance(152);
    \u0275\u0275property("dataSource", ctx.dataSource);
    \u0275\u0275advance(31);
    \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
    \u0275\u0275advance(2);
    \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(6, _c0));
  }
}, dependencies: [SharedModule, TaskDashboardPageHeaderComponent, NgSelectModule, NgSelectComponent, NgOptionComponent, MaterialModuleModule, MatInput, MatPaginator, MatSort, MatSortHeader, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatNoDataRow, NgbModule, NgbProgressbar, NgbTooltip, FlatpickrModule, FlatpickrDirective, FormsModule, NgControlStatus, NgModel, ReactiveFormsModule, RouterModule, RouterLink] });
var ProjectListComponent = _ProjectListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectListComponent, { className: "ProjectListComponent" });
})();
export {
  ProjectListComponent
};
//# sourceMappingURL=project-list.component-E2OLVI46.js.map
