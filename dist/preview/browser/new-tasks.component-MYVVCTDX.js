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
  NgbModule,
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
  ɵɵtext
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/task-dashboard/new-tasks/new-tasks.component.ts
var _NewTasksComponent = class _NewTasksComponent {
  constructor() {
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
_NewTasksComponent.\u0275fac = function NewTasksComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewTasksComponent)();
};
_NewTasksComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewTasksComponent, selectors: [["app-new-tasks"]], standalone: true, features: [\u0275\u0275ProvidersFeature([FlatpickrDefaults]), \u0275\u0275StandaloneFeature], decls: 144, vars: 5, consts: [[3, "title"], [1, "row"], [1, "col-xl-12", "col-md-12", "col-lg-12"], [1, "card", "custom-card"], [1, "card-body"], [1, "col-md-6"], [1, "form-group"], [1, "form-label"], ["placeholder", "Number", 1, "form-control"], ["placeholder", "Text", 1, "form-control"], [1, "row", "gy-3"], ["data-trigger", "", "placeholder", "Select Department", 1, "form-control", "custom-select", "p-0"], ["value", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["data-trigger", "", "placeholder", "Select Employee", 1, "form-control", "custom-select", "p-0"], ["value", "12"], ["value", "13"], ["value", "14"], ["value", "15"], ["data-trigger", "", "placeholder", "Select Priority", 1, "form-control", "custom-select", "p-0"], ["id", "single", 1, "leave-content", "active", "mt-3"], [1, "input-group"], [1, "input-group-text", "text-muted"], [1, "ri-calendar-line"], ["mwlFlatpickr", "", "type", "text", "placeholder", "DD-MM-YYYY", 1, "form-control", "choose-date"], ["id", "single1", 1, "leave-content", "active", "mt-3"], ["id", "note"], [3, "formGroup"], [1, "NgxEditor__Wrapper"], [3, "editor", "toolbar"], ["formControlName", "editorContent", 3, "editor"], ["type", "file", 1, "form-control"], [1, "custom-controls-stacked", "d-md-flex"], [1, "form-label", "me-5"], [1, "form-check", "mb-0", "me-4"], ["type", "radio", "name", "flexRadioDefault1", "id", "flexRadioDefault11", 1, "form-check-input"], ["for", "flexRadioDefault11", 1, "form-check-label"], ["type", "radio", "name", "flexRadioDefault1", "id", "flexRadioDefault12", 1, "form-check-input"], ["for", "flexRadioDefault12", 1, "form-check-label"], [1, "form-check", "mb-0"], ["type", "radio", "name", "flexRadioDefault1", "id", "flexRadioDefault13", 1, "form-check-input"], ["for", "flexRadioDefault13", 1, "form-check-label"], [1, "card-footer"], [1, "text-end"], [1, "btn", "btn-danger", "me-2"], [1, "btn", "btn-success"]], template: function NewTasksComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-page-header", 0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 1)(6, "div", 5)(7, "div", 6)(8, "label", 7);
    \u0275\u0275text(9, "Task ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 5)(12, "div", 6)(13, "label", 7);
    \u0275\u0275text(14, "Task Title");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 10)(17, "div", 5)(18, "div", 6)(19, "label", 7);
    \u0275\u0275text(20, "Department:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "ng-select", 11)(22, "ng-option", 12);
    \u0275\u0275text(23, "Select Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "ng-option", 13);
    \u0275\u0275text(25, "Designing Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "ng-option", 14);
    \u0275\u0275text(27, "Development Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "ng-option", 15);
    \u0275\u0275text(29, "Marketing Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "ng-option", 16);
    \u0275\u0275text(31, "Human Resource Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "ng-option", 17);
    \u0275\u0275text(33, "Managers Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "ng-option", 18);
    \u0275\u0275text(35, "Application Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "ng-option", 19);
    \u0275\u0275text(37, "Support Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "ng-option", 20);
    \u0275\u0275text(39, "IT Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "ng-option", 21);
    \u0275\u0275text(41, "Technical Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "ng-option", 22);
    \u0275\u0275text(43, "Accounts Department");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(44, "div", 5)(45, "div", 6)(46, "label", 7);
    \u0275\u0275text(47, "Assign To:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "ng-select", 23)(49, "ng-option", 12);
    \u0275\u0275text(50, "Select Employee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "ng-option", 13);
    \u0275\u0275text(52, "Faith Harris");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "ng-option", 14);
    \u0275\u0275text(54, "Austin Bell");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "ng-option", 15);
    \u0275\u0275text(56, "Maria Bower");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "ng-option", 16);
    \u0275\u0275text(58, "Peter Hill");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "ng-option", 17);
    \u0275\u0275text(60, "Adam Quinn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "ng-option", 18);
    \u0275\u0275text(62, "Victoria Lyman");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "ng-option", 19);
    \u0275\u0275text(64, "Melanie Coleman");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "ng-option", 20);
    \u0275\u0275text(66, "Justin Metcalfe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "ng-option", 21);
    \u0275\u0275text(68, "Ryan Young");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "ng-option", 22);
    \u0275\u0275text(70, "Jennifer Hardacre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "ng-option", 24);
    \u0275\u0275text(72, "Jennifer Hardacre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "ng-option", 25);
    \u0275\u0275text(74, "Justin Parr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "ng-option", 26);
    \u0275\u0275text(76, "Julia Hodges");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "ng-option", 27);
    \u0275\u0275text(78, "Michael Sutherland");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(79, "div", 6)(80, "label", 7);
    \u0275\u0275text(81, "Task Priority:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "ng-select", 28)(83, "ng-option", 12);
    \u0275\u0275text(84, "Select Priority");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "ng-option", 13);
    \u0275\u0275text(86, "High");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "ng-option", 14);
    \u0275\u0275text(88, "Medium");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "ng-option", 15);
    \u0275\u0275text(90, "Low");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(91, "div", 1)(92, "div", 5)(93, "div", 29)(94, "div", 6)(95, "label", 7);
    \u0275\u0275text(96, "From:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "div", 30)(98, "div", 31);
    \u0275\u0275element(99, "i", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275element(100, "input", 33);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(101, "div", 5)(102, "div", 34)(103, "div", 6)(104, "label", 7);
    \u0275\u0275text(105, "TO:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "div", 30)(107, "div", 31);
    \u0275\u0275element(108, "i", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275element(109, "input", 33);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(110, "div", 6)(111, "label", 7);
    \u0275\u0275text(112, "Description:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "div", 35)(114, "form", 36)(115, "div", 37);
    \u0275\u0275element(116, "ngx-editor-menu", 38)(117, "ngx-editor", 39);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(118, "div", 6)(119, "label", 7);
    \u0275\u0275text(120, "Attachment:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "div", 6);
    \u0275\u0275element(122, "input", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(123, "div", 41)(124, "label", 42);
    \u0275\u0275text(125, "Work Status :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "div", 43);
    \u0275\u0275element(127, "input", 44);
    \u0275\u0275elementStart(128, "label", 45);
    \u0275\u0275text(129, " Completed ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(130, "div", 43);
    \u0275\u0275element(131, "input", 46);
    \u0275\u0275elementStart(132, "label", 47);
    \u0275\u0275text(133, " Pending ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(134, "div", 48);
    \u0275\u0275element(135, "input", 49);
    \u0275\u0275elementStart(136, "label", 50);
    \u0275\u0275text(137, " On Progress ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(138, "div", 51)(139, "div", 52)(140, "button", 53);
    \u0275\u0275text(141, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(142, "button", 54);
    \u0275\u0275text(143, "Submit");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("title", "New Task");
    \u0275\u0275advance(114);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(2);
    \u0275\u0275property("editor", ctx.editor)("toolbar", ctx.toolbar);
    \u0275\u0275advance();
    \u0275\u0275property("editor", ctx.editor);
  }
}, dependencies: [SharedModule, PageHeaderComponent, NgbModule, NgSelectModule, NgSelectComponent, NgOptionComponent, NgxEditorModule, NgxEditorComponent, MenuComponent, FlatpickrModule, FlatpickrDirective, FormsModule, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, RouterModule] });
var NewTasksComponent = _NewTasksComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewTasksComponent, { className: "NewTasksComponent" });
})();
export {
  NewTasksComponent
};
//# sourceMappingURL=new-tasks.component-MYVVCTDX.js.map
