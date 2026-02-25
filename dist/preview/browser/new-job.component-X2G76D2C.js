import {
  Editor,
  MenuComponent,
  NgxEditorComponent,
  NgxEditorModule
} from "./chunk-IZETRTY5.js";
import {
  PageHeaderComponent,
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
  FormGroup
} from "./chunk-47LBZ5ZO.js";
import {
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
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

// src/app/componets/dashbord/job-dashboard/new-job/new-job.component.ts
var _NewJobComponent = class _NewJobComponent {
  constructor() {
    this.toolbar = [
      ["bold", "italic"],
      ["underline", "strike"],
      ["code", "blockquote"],
      ["ordered_list", "bullet_list"],
      [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
      ["link", "image"],
      ["text_color", "background_color"],
      ["align_left", "align_center", "align_right", "align_justify"]
    ];
    this.form = new FormGroup({});
    this.inlineDatePicker = false;
    this.flatpickrOptions = {
      inline: true
    };
  }
  ngOnInit() {
    this.editor = new Editor();
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
_NewJobComponent.\u0275fac = function NewJobComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewJobComponent)();
};
_NewJobComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewJobComponent, selectors: [["app-new-job"]], standalone: true, features: [\u0275\u0275ProvidersFeature([
  FlatpickrDefaults
]), \u0275\u0275StandaloneFeature], decls: 188, vars: 4, consts: [[3, "title"], [1, "row"], [1, "col-xl-12", "col-md-12", "col-lg-12"], [1, "card", "custom-card"], [1, "card-body"], [1, "row", "mb-3"], [1, "col-md-6"], [1, "form-group"], [1, "form-label"], ["placeholder", "Company Name", 1, "form-control"], ["placeholder", "Job Position", 1, "form-control"], [1, "row", "gy-3"], ["data-trigger", "", "placeholder", "Select Job Category", 1, "form-control", "custom-select", "p-0"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["data-trigger", "", "placeholder", "Select Job Type", 1, "form-control", "custom-select", "p-0"], ["value", ""], ["placeholder", "Vacancy", 1, "form-control"], ["data-trigger", "", "placeholder", "Select Experience", 1, "form-control", "custom-select", "p-0"], [1, "col-md-6", "mt-3"], ["id", "single", 1, "leave-content", "active"], [1, "input-group"], [1, "input-group-text", "text-muted"], [1, "ri-calendar-line"], ["type", "text", "mwlFlatpickr", "", "placeholder", "DD-MM-YYYY", 1, "form-control", "choose-date"], ["id", "single11", 1, "leave-content", "active"], ["id", "single1", 1, "leave-content", "active"], ["data-trigger", "", "placeholder", "Select Gender", 1, "form-control", "custom-select", "p-0"], [1, "row", "mt-3"], ["placeholder", "$0.00", 1, "form-control"], ["placeholder", "City", 1, "form-control"], ["placeholder", "State", 1, "form-control"], ["placeholder", "Country", 1, "form-control"], ["placeholder", "Education Level", 1, "form-control"], [1, "form-group", "mt-3"], ["id", "note"], [1, "NgxEditor__Wrapper"], [3, "editor", "toolbar"], ["formControlName", "editorContent", 3, "editor"], ["type", "file", 1, "form-control"], [1, "custom-controls-stacked", "d-md-flex", "mt-3"], [1, "form-label", "me-5"], [1, "form-check", "mb-0", "me-4"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault2", 1, "form-check-input"], ["for", "flexRadioDefault2", 1, "form-check-label"], [1, "form-check", "mb-0"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault3", 1, "form-check-input"], ["for", "flexRadioDefault3", 1, "form-check-label"], [1, "card-footer"], [1, "text-end"], [1, "btn", "btn-danger", "me-2"], [1, "btn", "btn-success", "successful-notify"]], template: function NewJobComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-page-header", 0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "label", 8);
    \u0275\u0275text(9, "Company Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 6)(12, "div", 7)(13, "label", 8);
    \u0275\u0275text(14, "Job Position");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 11)(17, "div", 6)(18, "div", 7)(19, "label", 8);
    \u0275\u0275text(20, "Job Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "ng-select", 12)(22, "ng-option", 13);
    \u0275\u0275text(23, "PHP Developer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "ng-option", 14);
    \u0275\u0275text(25, "UX Designer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "ng-option", 15);
    \u0275\u0275text(27, "UI Designer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "ng-option", 16);
    \u0275\u0275text(29, "SEO Specialist");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "ng-option", 17);
    \u0275\u0275text(31, "Wordpress Developer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "ng-option", 18);
    \u0275\u0275text(33, "Accountant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "ng-option", 19);
    \u0275\u0275text(35, "Software Engineer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "ng-option", 19);
    \u0275\u0275text(37, "Angular Developer");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(38, "div", 6)(39, "div", 7)(40, "label", 8);
    \u0275\u0275text(41, "Job Type:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "ng-select", 20)(43, "ng-option", 21);
    \u0275\u0275text(44, "Select Job Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "ng-option", 13);
    \u0275\u0275text(46, "Full-Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "ng-option", 14);
    \u0275\u0275text(48, "Part-Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "ng-option", 15);
    \u0275\u0275text(50, "Freelancer");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(51, "div", 6)(52, "div", 7)(53, "label", 8);
    \u0275\u0275text(54, "No.of Vacancy");
    \u0275\u0275elementEnd();
    \u0275\u0275element(55, "input", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 6)(57, "div", 7)(58, "label", 8);
    \u0275\u0275text(59, "Experiences");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "ng-select", 23)(61, "ng-option", 21);
    \u0275\u0275text(62, "Select Experience");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "ng-option", 13);
    \u0275\u0275text(64, "Fresher");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "ng-option", 14);
    \u0275\u0275text(66, "1 yr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "ng-option", 15);
    \u0275\u0275text(68, "2 yrs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "ng-option", 15);
    \u0275\u0275text(70, "3 yrs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "ng-option", 15);
    \u0275\u0275text(72, "4 yrs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "ng-option", 15);
    \u0275\u0275text(74, "5 yrs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "ng-option", 15);
    \u0275\u0275text(76, "6 yrs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "ng-option", 15);
    \u0275\u0275text(78, "7 yrs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "ng-option", 15);
    \u0275\u0275text(80, "8 yrs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "ng-option", 15);
    \u0275\u0275text(82, "9 yrs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "ng-option", 15);
    \u0275\u0275text(84, "10 yrs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "ng-option", 15);
    \u0275\u0275text(86, "10+ yrs");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(87, "div", 1)(88, "div", 24)(89, "div", 25)(90, "div", 7)(91, "label", 8);
    \u0275\u0275text(92, "Posted Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "div", 26)(94, "div", 27);
    \u0275\u0275element(95, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275element(96, "input", 29);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(97, "div", 24)(98, "div", 30)(99, "div", 7)(100, "label", 8);
    \u0275\u0275text(101, "Last Date To Apply");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "div", 26)(103, "div", 27);
    \u0275\u0275element(104, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275element(105, "input", 29);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(106, "div", 24)(107, "div", 31)(108, "div", 7)(109, "label", 8);
    \u0275\u0275text(110, "Close Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "div", 26)(112, "div", 27);
    \u0275\u0275element(113, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275element(114, "input", 29);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(115, "div", 24)(116, "div", 7)(117, "label", 8);
    \u0275\u0275text(118, "Select Gender:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "ng-select", 32)(120, "ng-option", 21);
    \u0275\u0275text(121, "Select Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(122, "ng-option", 13);
    \u0275\u0275text(123, "Male");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "ng-option", 14);
    \u0275\u0275text(125, "Female");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(126, "div", 33)(127, "div", 6)(128, "div", 7)(129, "label", 8);
    \u0275\u0275text(130, "Salary Form");
    \u0275\u0275elementEnd();
    \u0275\u0275element(131, "input", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(132, "div", 6)(133, "div", 7)(134, "label", 8);
    \u0275\u0275text(135, "Salary To");
    \u0275\u0275elementEnd();
    \u0275\u0275element(136, "input", 34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(137, "div", 1)(138, "div", 24)(139, "div", 7)(140, "label", 8);
    \u0275\u0275text(141, "Enter City:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(142, "input", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(143, "div", 24)(144, "div", 7)(145, "label", 8);
    \u0275\u0275text(146, "Enter State:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(147, "input", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(148, "div", 24)(149, "div", 7)(150, "label", 8);
    \u0275\u0275text(151, "Enter Country:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(152, "input", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(153, "div", 24)(154, "div", 7)(155, "label", 8);
    \u0275\u0275text(156, "Enter Education Level:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(157, "input", 38);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(158, "div", 39)(159, "label", 8);
    \u0275\u0275text(160, "Description:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(161, "div", 40)(162, "form")(163, "div", 41);
    \u0275\u0275element(164, "ngx-editor-menu", 42)(165, "ngx-editor", 43);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(166, "div", 39)(167, "label", 8);
    \u0275\u0275text(168, "Attachment:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(169, "div", 7);
    \u0275\u0275element(170, "input", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(171, "div", 45)(172, "label", 46);
    \u0275\u0275text(173, "Status :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(174, "div", 47);
    \u0275\u0275element(175, "input", 48);
    \u0275\u0275elementStart(176, "label", 49);
    \u0275\u0275text(177, " Active ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(178, "div", 50);
    \u0275\u0275element(179, "input", 51);
    \u0275\u0275elementStart(180, "label", 52);
    \u0275\u0275text(181, " InActive ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(182, "div", 53)(183, "div", 54)(184, "button", 55);
    \u0275\u0275text(185, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(186, "button", 56);
    \u0275\u0275text(187, "Submit");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("title", "New Job");
    \u0275\u0275advance(164);
    \u0275\u0275property("editor", ctx.editor)("toolbar", ctx.toolbar);
    \u0275\u0275advance();
    \u0275\u0275property("editor", ctx.editor);
  }
}, dependencies: [SharedModule, PageHeaderComponent, NgSelectModule, NgSelectComponent, NgOptionComponent, FlatpickrModule, FlatpickrDirective, RouterModule, NgxEditorModule, NgxEditorComponent, MenuComponent] });
var NewJobComponent = _NewJobComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewJobComponent, { className: "NewJobComponent" });
})();
export {
  NewJobComponent
};
//# sourceMappingURL=new-job.component-X2G76D2C.js.map
