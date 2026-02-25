import {
  editor_default
} from "./chunk-QM4A2US6.js";
import {
  Editor,
  MenuComponent,
  NgxEditorComponent,
  NgxEditorModule,
  Validators
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
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  ɵNgNoValidate
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
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/project-dashboard/new-project/new-project.component.ts
var _NewProjectComponent = class _NewProjectComponent {
  constructor() {
    this.selected = ["choice 2", "Choice 3"];
    this.inlineDatePicker = false;
    this.flatpickrOptions = {
      inline: true
    };
    this.editordoc = editor_default;
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
    this.form = new FormGroup({
      editorContent: new FormControl({ value: editor_default, disabled: false }, Validators.required())
    });
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
_NewProjectComponent.\u0275fac = function NewProjectComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewProjectComponent)();
};
_NewProjectComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewProjectComponent, selectors: [["app-new-project"]], standalone: true, features: [\u0275\u0275ProvidersFeature([FlatpickrDefaults]), \u0275\u0275StandaloneFeature], decls: 135, vars: 7, consts: [[3, "title"], [1, "row"], [1, "col-xl-12", "col-md-12", "col-lg-12"], [1, "card", "custom-card"], [1, "card-body"], [1, "col-md-6"], [1, "form-group"], [1, "form-label"], ["placeholder", "Number", 1, "form-control"], ["placeholder", "Text", 1, "form-control"], ["data-trigger", "", "placeholder", "Select Department", 1, "form-control", "custom-select", "p-0"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["data-trigger", "", "placeholder", "Select Priority", 1, "form-control", "custom-select", "p-0"], ["placeholder", "Price", 1, "form-control"], [1, "col-md-12"], ["data-trigger", "", "name", "choices-multiple-default", "id", "choices-multiple-default", 1, "form-control", "p-0", 3, "ngModelChange", "multiple", "ngModel"], ["value", ""], ["value", "Choice 1"], ["value", "Choice 2"], ["value", "Choice 3"], ["id", "single", 1, "leave-content", "active"], [1, "input-group"], [1, "input-group-text", "text-muted"], [1, "ri-calendar-line"], ["mwlFlatpickr", "", "type", "text", "placeholder", "DD-MM-YYYY", 1, "form-control", "choose-date"], ["id", "single1", 1, "leave-content", "active"], ["id", "note"], [3, "formGroup"], [1, "NgxEditor__Wrapper"], [3, "editor", "toolbar"], ["formControlName", "editorContent", 3, "editor"], ["type", "file", 1, "form-control"], [1, "custom-controls-stacked", "d-md-flex"], [1, "form-label", "me-5"], [1, "form-check", "mb-0", "me-4"], ["type", "radio", "name", "flexRadioDefault0", "id", "flexRadioDefault01", 1, "form-check-input"], ["for", "flexRadioDefault01", 1, "form-check-label"], ["type", "radio", "name", "flexRadioDefault0", "id", "flexRadioDefault02", 1, "form-check-input"], ["for", "flexRadioDefault02", 1, "form-check-label"], [1, "form-check", "mb-0"], ["type", "radio", "name", "flexRadioDefault0", "id", "flexRadioDefault03", 1, "form-check-input"], ["for", "flexRadioDefault03", 1, "form-check-label"], [1, "card-footer"], [1, "text-end"], [1, "btn", "btn-danger", "me-2"], [1, "btn", "btn-success", "successful-notify"]], template: function NewProjectComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-page-header", 0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 1)(6, "div", 5)(7, "div", 6)(8, "label", 7);
    \u0275\u0275text(9, "project ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 5)(12, "div", 6)(13, "label", 7);
    \u0275\u0275text(14, "project Title");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 1)(17, "div", 5)(18, "div", 6)(19, "label", 7);
    \u0275\u0275text(20, "Department:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "ng-select", 10)(22, "ng-option", 11);
    \u0275\u0275text(23, "Designing Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "ng-option", 12);
    \u0275\u0275text(25, "Development Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "ng-option", 13);
    \u0275\u0275text(27, "Marketing Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "ng-option", 14);
    \u0275\u0275text(29, "Human Resource Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "ng-option", 15);
    \u0275\u0275text(31, "Managers Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "ng-option", 16);
    \u0275\u0275text(33, "Application Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "ng-option", 17);
    \u0275\u0275text(35, "Support Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "ng-option", 18);
    \u0275\u0275text(37, "IT Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "ng-option", 19);
    \u0275\u0275text(39, "Technical Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "ng-option", 20);
    \u0275\u0275text(41, "Accounts Department");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(42, "div", 5)(43, "div", 6)(44, "label", 7);
    \u0275\u0275text(45, "project Priority:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "ng-select", 21)(47, "ng-option", 11);
    \u0275\u0275text(48, "High");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "ng-option", 12);
    \u0275\u0275text(50, "Medium");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "ng-option", 13);
    \u0275\u0275text(52, "Low");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(53, "div", 5)(54, "div", 6)(55, "label", 7);
    \u0275\u0275text(56, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "ng-select", 21)(58, "ng-option", 11);
    \u0275\u0275text(59, "Client 1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "ng-option", 12);
    \u0275\u0275text(61, "Client 2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "ng-option", 13);
    \u0275\u0275text(63, "Client 3");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(64, "div", 5)(65, "div", 6)(66, "label", 7);
    \u0275\u0275text(67, "($)Price:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(68, "input", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 23)(70, "div", 6)(71, "label", 7);
    \u0275\u0275text(72, "Assigned Team:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "ng-select", 24);
    \u0275\u0275twoWayListener("ngModelChange", function NewProjectComponent_Template_ng_select_ngModelChange_73_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.selected, $event) || (ctx.selected = $event);
      return $event;
    });
    \u0275\u0275elementStart(74, "ng-option", 25);
    \u0275\u0275text(75, "This is a placeholder");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "ng-option", 26);
    \u0275\u0275text(77, "Choice 1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "ng-option", 27);
    \u0275\u0275text(79, "Choice 2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "ng-option", 28);
    \u0275\u0275text(81, "Choice 3");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(82, "div", 1)(83, "div", 5)(84, "div", 29)(85, "div", 6)(86, "label", 7);
    \u0275\u0275text(87, "From:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "div", 30)(89, "div", 31);
    \u0275\u0275element(90, "i", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275element(91, "input", 33);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(92, "div", 5)(93, "div", 34)(94, "div", 6)(95, "label", 7);
    \u0275\u0275text(96, "TO:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "div", 30)(98, "div", 31);
    \u0275\u0275element(99, "i", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275element(100, "input", 33);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(101, "div", 6)(102, "label", 7);
    \u0275\u0275text(103, "Description:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "div", 35)(105, "form", 36)(106, "div", 37);
    \u0275\u0275element(107, "ngx-editor-menu", 38)(108, "ngx-editor", 39);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(109, "div", 6)(110, "label", 7);
    \u0275\u0275text(111, "Attachment:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "div", 6);
    \u0275\u0275element(113, "input", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(114, "div", 41)(115, "label", 42);
    \u0275\u0275text(116, "Work Status :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "div", 43);
    \u0275\u0275element(118, "input", 44);
    \u0275\u0275elementStart(119, "label", 45);
    \u0275\u0275text(120, " Completed ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(121, "div", 43);
    \u0275\u0275element(122, "input", 46);
    \u0275\u0275elementStart(123, "label", 47);
    \u0275\u0275text(124, " Pending ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(125, "div", 48);
    \u0275\u0275element(126, "input", 49);
    \u0275\u0275elementStart(127, "label", 50);
    \u0275\u0275text(128, " On Progress ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(129, "div", 51)(130, "div", 52)(131, "button", 53);
    \u0275\u0275text(132, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(133, "button", 54);
    \u0275\u0275text(134, "Submit");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("title", "New Project");
    \u0275\u0275advance(73);
    \u0275\u0275property("multiple", true);
    \u0275\u0275twoWayProperty("ngModel", ctx.selected);
    \u0275\u0275advance(32);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(2);
    \u0275\u0275property("editor", ctx.editor)("toolbar", ctx.toolbar);
    \u0275\u0275advance();
    \u0275\u0275property("editor", ctx.editor);
  }
}, dependencies: [SharedModule, PageHeaderComponent, NgSelectModule, NgSelectComponent, NgOptionComponent, NgxEditorModule, NgxEditorComponent, MenuComponent, FormsModule, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName, FlatpickrModule, FlatpickrDirective, RouterModule] });
var NewProjectComponent = _NewProjectComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewProjectComponent, { className: "NewProjectComponent" });
})();
export {
  NewProjectComponent
};
//# sourceMappingURL=new-project.component-4CJBRCAC.js.map
