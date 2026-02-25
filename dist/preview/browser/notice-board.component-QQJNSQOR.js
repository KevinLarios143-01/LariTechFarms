import {
  AngularEditorComponent,
  AngularEditorModule
} from "./chunk-QXVFNQQA.js";
import {
  HrDashboardPageHeaderComponent,
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
  FormsModule,
  NgControlStatus,
  NgModel,
  NgbModal,
  NgbModule,
  NgbTooltip
} from "./chunk-47LBZ5ZO.js";
import {
  HttpClient,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/hrmdashboards/notice-board/notice-board.component.ts
function NoticeBoardComponent_For_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8, "Employees");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td")(15, "div", 31)(16, "a", 32);
    \u0275\u0275listener("click", function NoticeBoardComponent_For_49_Template_a_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      const content_r3 = \u0275\u0275reference(62);
      return \u0275\u0275resetView(ctx_r1.open(content_r3));
    });
    \u0275\u0275element(17, "i", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "a", 34);
    \u0275\u0275listener("click", function NoticeBoardComponent_For_49_Template_a_click_18_listener() {
      const notice_r4 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.remove(notice_r4.id));
    });
    \u0275\u0275element(19, "i", 35);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const notice_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notice_r4.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notice_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", notice_r4.description, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(notice_r4.date);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("badge bg-", notice_r4.bg, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(notice_r4.status);
  }
}
function NoticeBoardComponent_ng_template_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37)(2, "h5", 38);
    \u0275\u0275text(3, "Edit Leaves");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 39);
    \u0275\u0275listener("click", function NoticeBoardComponent_ng_template_61_Template_button_click_4_listener() {
      const modal_r6 = \u0275\u0275restoreView(_r5).$implicit;
      return \u0275\u0275resetView(modal_r6.close("cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 40)(6, "div", 41)(7, "label", 42);
    \u0275\u0275text(8, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 44)(11, "div", 45);
    \u0275\u0275element(12, "input", 46);
    \u0275\u0275elementStart(13, "label", 47);
    \u0275\u0275text(14, " To Employees ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 48);
    \u0275\u0275element(16, "input", 49);
    \u0275\u0275elementStart(17, "label", 50);
    \u0275\u0275text(18, " To Clients ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 41)(20, "label", 42);
    \u0275\u0275text(21, "Select Date:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 51)(23, "div", 52)(24, "div", 53);
    \u0275\u0275element(25, "i", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 55);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 41)(28, "label", 56);
    \u0275\u0275text(29, "Description:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 57)(31, "angular-editor", 58);
    \u0275\u0275twoWayListener("ngModelChange", function NoticeBoardComponent_ng_template_61_Template_angular_editor_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.htmlContent, $event) || (ctx_r1.htmlContent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 41)(33, "label", 42);
    \u0275\u0275text(34, "Attachment:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "input", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 60)(37, "label", 61);
    \u0275\u0275text(38, "Status :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 45);
    \u0275\u0275element(40, "input", 62);
    \u0275\u0275elementStart(41, "label", 63);
    \u0275\u0275text(42, " Active ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 48);
    \u0275\u0275element(44, "input", 64);
    \u0275\u0275elementStart(45, "label", 65);
    \u0275\u0275text(46, " Inactive ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(47, "div", 66)(48, "button", 67);
    \u0275\u0275listener("click", function NoticeBoardComponent_ng_template_61_Template_button_click_48_listener() {
      const modal_r6 = \u0275\u0275restoreView(_r5).$implicit;
      return \u0275\u0275resetView(modal_r6.close("cross click"));
    });
    \u0275\u0275text(49, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "button", 68);
    \u0275\u0275text(51, "Update");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(31);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.htmlContent);
    \u0275\u0275property("config", ctx_r1.config1);
  }
}
var _NoticeBoardComponent = class _NoticeBoardComponent {
  remove(id) {
    const data = this.notices.filter((x) => x.id !== id);
    this.notices = data;
  }
  constructor(modalService, http) {
    this.modalService = modalService;
    this.http = http;
    this.notices = [
      {
        id: "01",
        title: "Board meeting Completed",
        description: "Attend the  company mangers & teamleads.",
        date: "18-02-2021",
        bg: "success",
        status: "Active"
      },
      {
        id: "02",
        title: "Updated the Company Policy",
        description: "some changes & add the terms & conditions.",
        date: "16-02-2021",
        bg: "success",
        status: "Active"
      },
      {
        id: "03",
        title: "Office Timings Changed",
        description: "This effetct after March 01st 9:00 Am To 5:00 Pm",
        date: "17-02-2021",
        bg: "success",
        status: "Active"
      },
      {
        id: "04",
        title: "Republic Day Celebrated",
        description: "Participate the all employess",
        date: "26-01-2021",
        bg: "success",
        status: "Active"
      },
      {
        id: "05",
        title: "Client meeting Completed",
        description: "Participate the all the managers",
        date: "12-01-2021",
        bg: "danger",
        status: "InActive"
      },
      {
        id: "06",
        title: "Update the Employee Leave Policy",
        description: "Participate the all employess",
        date: "02-01-2021",
        bg: "success",
        status: "Active"
      },
      {
        id: "07",
        title: "Faith Harris, Please sent the email",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
        date: "26-01-2021",
        bg: "success",
        status: "Active"
      },
      {
        id: "08",
        title: "Update the Agreement Policy",
        description: "There are many variations of passages of  but the majority have suffered alteration",
        date: "12-02-2021",
        bg: "danger",
        status: "InActive"
      }
    ];
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
  }
  open(content) {
    this.modalService.open(content, { windowClass: "modalCusSty", size: "lg" });
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
_NoticeBoardComponent.\u0275fac = function NoticeBoardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NoticeBoardComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(HttpClient));
};
_NoticeBoardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NoticeBoardComponent, selectors: [["app-notice-board"]], standalone: true, features: [\u0275\u0275ProvidersFeature([FlatpickrDefaults]), \u0275\u0275StandaloneFeature], decls: 63, vars: 6, consts: [["content", ""], [3, "title", "title3", "class1", "path"], [1, "row"], [1, "col-md-12"], [1, "card", "custom-card"], [1, "card-header", "border-0"], [1, "card-title"], [1, "card-body"], [1, "row", "mb-2", "gap-1", "gap-lg-0"], [1, "col-lg-6"], [1, "d-flex", "align-items-center"], [1, "d-flex", "ms-2", "mx-2"], [1, "form-group", "mb-0"], ["name", "quantity", "id", "select-countries17", "placeholder", "1", "data-trigger", "", 1, "form-control", "wd-150", "p-0"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], [1, "float-end"], ["type", "text", "placeholder", "search", 1, "form-control"], [1, "table-responsive"], ["id", "hr-notice", 1, "table", "table-vcenter", "text-nowrap", "table-bordered", "border-bottom"], [1, "border-bottom-0", "w-5"], [1, "border-bottom-0"], [1, "mt-4"], [1, "pagination", "justify-content-end", "mb-0"], [1, "page-item", "disabled"], ["href", "javascript:void(0);", 1, "page-link"], [1, "page-item", "active"], [1, "page-item"], ["id", "editnoticemodal"], [1, "d-flex"], ["data-bs-toggle", "modal", "data-bs-target", "#editnoticemodal", 1, "action-btns1", 3, "click"], ["data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Edit/View", 1, "fe", "fe-eye", "primary", "text-primary"], ["data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Delete", 1, "action-btns1", 3, "click"], [1, "fe", "fe-trash-2", "text-danger"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "form-group", "mb-3"], [1, "form-label"], ["placeholder", "Text", "value", "Board meeting Completed", 1, "form-control"], [1, "form-group", "mb-3", "d-flex"], [1, "form-check", "me-3"], ["type", "radio", "name", "flexRadioDefault", "id", "toEmployee2", 1, "form-check-input"], ["for", "toEmployee2", 1, "form-check-label"], [1, "form-check"], ["type", "radio", "name", "flexRadioDefault", "id", "toClients2", 1, "form-check-input"], ["for", "toClients2", 1, "form-check-label"], [1, "form-group"], [1, "input-group"], [1, "input-group-text", "text-muted"], [1, "ri-calendar-line"], ["type", "text", "mwlFlatpickr", "", "placeholder", "DD-MM-YYYY", 1, "form-control", "choose-date"], [1, "fw-medium", "form-label"], ["id", "editor1"], [3, "ngModelChange", "ngModel", "config"], ["type", "file", 1, "form-control"], [1, "form-group", "mb-0", "d-flex"], [1, "form-label", "me-5"], ["type", "radio", "name", "flexRadioDefault", "id", "active1", 1, "form-check-input"], ["for", "active1", 1, "form-check-label"], ["type", "radio", "name", "flexRadioDefault", "id", "inactive1", 1, "form-check-input"], ["for", "inactive1", 1, "form-check-label"], [1, "modal-footer"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-primary", 3, "click"], [1, "btn", "btn-success"]], template: function NoticeBoardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-hr-dashboard-page-header", 1);
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "h5", 6);
    \u0275\u0275text(6, "Notice Summary");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "span");
    \u0275\u0275text(12, "Show");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 11)(14, "div", 12)(15, "ng-select", 13)(16, "ng-option", 14);
    \u0275\u0275text(17, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "ng-option", 15);
    \u0275\u0275text(19, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "ng-option", 16);
    \u0275\u0275text(21, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "ng-option", 17);
    \u0275\u0275text(23, "4");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25, "entries");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 9)(27, "div", 18);
    \u0275\u0275element(28, "input", 19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 20)(30, "table", 21)(31, "thead")(32, "tr")(33, "th", 22);
    \u0275\u0275text(34, "No");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "th", 23);
    \u0275\u0275text(36, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th", 23);
    \u0275\u0275text(38, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "th", 23);
    \u0275\u0275text(40, "To");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "th", 23);
    \u0275\u0275text(42, "Create On");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "th", 23);
    \u0275\u0275text(44, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "th", 23);
    \u0275\u0275text(46, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "tbody");
    \u0275\u0275repeaterCreate(48, NoticeBoardComponent_For_49_Template, 20, 8, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "nav", 24)(51, "ul", 25)(52, "li", 26)(53, "a", 27);
    \u0275\u0275text(54, "Prev");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "li", 28)(56, "a", 27);
    \u0275\u0275text(57, "1");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "li", 29)(59, "a", 27);
    \u0275\u0275text(60, "Next");
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275template(61, NoticeBoardComponent_ng_template_61_Template, 52, 2, "ng-template", 30, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275classMap("");
    \u0275\u0275property("title", "Notice Board")("title3", "Add New Notice")("class1", "btn btn-primary")("path", "");
    \u0275\u0275advance(48);
    \u0275\u0275repeater(ctx.notices);
  }
}, dependencies: [NgbModule, NgbTooltip, FlatpickrModule, FlatpickrDirective, AngularEditorModule, AngularEditorComponent, FormsModule, NgControlStatus, NgModel, SharedModule, HrDashboardPageHeaderComponent, RouterModule, NgSelectModule, NgSelectComponent, NgOptionComponent] });
var NoticeBoardComponent = _NoticeBoardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NoticeBoardComponent, { className: "NoticeBoardComponent" });
})();
export {
  NoticeBoardComponent
};
//# sourceMappingURL=notice-board.component-QQJNSQOR.js.map
