import {
  AppStateService,
  ToastrService
} from "./chunk-KTQLQ7YR.js";
import {
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgbActiveOffcanvas,
  NgbDropdown,
  NgbDropdownItem,
  NgbDropdownMenu,
  NgbDropdownToggle,
  NgbModal,
  NgbNav,
  NgbNavContent,
  NgbNavItem,
  NgbNavLinkBase,
  NgbNavLinkButton,
  NgbNavOutlet,
  NgbOffcanvas,
  NgbTooltip,
  ɵNgNoValidate
} from "./chunk-47LBZ5ZO.js";
import {
  ANIMATION_MODULE_TYPE,
  APP_ID,
  ActivatedRoute,
  ApplicationRef,
  Attribute,
  BehaviorSubject,
  CSP_NONCE,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ComponentFactoryResolver$1,
  ConnectableObservable,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  IterableDiffers,
  LOCALE_ID,
  NavigationEnd,
  NavigationStart,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgStyle,
  NgTemplateOutlet,
  NgZone,
  Observable,
  Optional,
  Output,
  PLATFORM_ID,
  QueryList,
  Renderer2,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  SkipSelf,
  SlicePipe,
  Subject,
  Subscription,
  TemplateRef,
  Version,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  ViewportScroller,
  afterNextRender,
  animationFrameScheduler,
  asapScheduler,
  auditTime,
  booleanAttribute,
  combineLatest,
  concat,
  debounceTime,
  distinctUntilChanged,
  effect,
  filter,
  forwardRef,
  fromEvent,
  inject,
  isObservable,
  isPlatformBrowser,
  isSignal,
  map,
  merge,
  of,
  pairwise,
  setClassMetadata,
  shareReplay,
  skip,
  startWith,
  switchMap,
  take,
  takeUntil,
  tap,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵinject,
  ɵɵinjectAttribute,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind3,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵstyleProp,
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
import {
  __spreadProps,
  __spreadValues
} from "./chunk-AJH3MT3R.js";

// node_modules/ngx-color-picker/fesm2022/ngx-color-picker.mjs
var _c0 = ["dialogPopup"];
var _c1 = ["hueSlider"];
var _c2 = ["alphaSlider"];
function ColorPickerComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMapInterpolate1("arrow arrow-", ctx_r1.cpUsePosition, "");
    \u0275\u0275styleProp("left", ctx_r1.cpArrowPosition)("top", ctx_r1.arrowTop, "px");
  }
}
function ColorPickerComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275listener("newValue", function ColorPickerComponent_div_3_Template_div_newValue_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onColorChange($event));
    })("dragStart", function ColorPickerComponent_div_3_Template_div_dragStart_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDragStart("saturation-lightness"));
    })("dragEnd", function ColorPickerComponent_div_3_Template_div_dragEnd_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDragEnd("saturation-lightness"));
    });
    \u0275\u0275element(1, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background-color", ctx_r1.hueSliderColor);
    \u0275\u0275property("rgX", 1)("rgY", 1);
    \u0275\u0275advance();
    \u0275\u0275styleProp("top", ctx_r1.slider == null ? null : ctx_r1.slider.v, "px")("left", ctx_r1.slider == null ? null : ctx_r1.slider.s, "px");
  }
}
function ColorPickerComponent__svg_svg_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 29);
    \u0275\u0275element(1, "path", 30)(2, "path", 31);
    \u0275\u0275elementEnd();
  }
}
function ColorPickerComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function ColorPickerComponent_button_9_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAddPresetColor($event, ctx_r1.selectedColor));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cpAddColorButtonClass);
    \u0275\u0275property("disabled", ctx_r1.cpPresetColors && ctx_r1.cpPresetColors.length >= ctx_r1.cpMaxPresetColorsLength);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.cpAddColorButtonText, " ");
  }
}
function ColorPickerComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 33);
  }
}
function ColorPickerComponent_div_21_input_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 39);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_21_input_6_Template_input_keyup_enter_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_21_input_6_Template_input_newValue_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAlphaInput($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("rg", 1)("value", ctx_r1.cmykText == null ? null : ctx_r1.cmykText.a);
  }
}
function ColorPickerComponent_div_21_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "A");
    \u0275\u0275elementEnd();
  }
}
function ColorPickerComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "input", 36);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_21_Template_input_keyup_enter_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_21_Template_input_newValue_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCyanInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 36);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_21_Template_input_keyup_enter_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_21_Template_input_newValue_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMagentaInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 36);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_21_Template_input_keyup_enter_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_21_Template_input_newValue_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onYellowInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 36);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_21_Template_input_keyup_enter_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_21_Template_input_newValue_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBlackInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ColorPickerComponent_div_21_input_6_Template, 1, 2, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 35)(8, "div");
    \u0275\u0275text(9, "C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div");
    \u0275\u0275text(11, "M");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div");
    \u0275\u0275text(13, "Y");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div");
    \u0275\u0275text(15, "K");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, ColorPickerComponent_div_21_div_16_Template, 2, 0, "div", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("display", ctx_r1.format !== 3 ? "none" : "block");
    \u0275\u0275advance(2);
    \u0275\u0275property("rg", 100)("value", ctx_r1.cmykText == null ? null : ctx_r1.cmykText.c);
    \u0275\u0275advance();
    \u0275\u0275property("rg", 100)("value", ctx_r1.cmykText == null ? null : ctx_r1.cmykText.m);
    \u0275\u0275advance();
    \u0275\u0275property("rg", 100)("value", ctx_r1.cmykText == null ? null : ctx_r1.cmykText.y);
    \u0275\u0275advance();
    \u0275\u0275property("rg", 100)("value", ctx_r1.cmykText == null ? null : ctx_r1.cmykText.k);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cpAlphaChannel !== "disabled");
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r1.cpAlphaChannel !== "disabled");
  }
}
function ColorPickerComponent_div_22_input_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 39);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_22_input_5_Template_input_keyup_enter_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_22_input_5_Template_input_newValue_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAlphaInput($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("rg", 1)("value", ctx_r1.hslaText == null ? null : ctx_r1.hslaText.a);
  }
}
function ColorPickerComponent_div_22_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "A");
    \u0275\u0275elementEnd();
  }
}
function ColorPickerComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 35)(2, "input", 41);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_22_Template_input_keyup_enter_2_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_22_Template_input_newValue_2_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onHueInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 36);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_22_Template_input_keyup_enter_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_22_Template_input_newValue_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSaturationInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 36);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_22_Template_input_keyup_enter_4_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_22_Template_input_newValue_4_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLightnessInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ColorPickerComponent_div_22_input_5_Template, 1, 2, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 35)(7, "div");
    \u0275\u0275text(8, "H");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div");
    \u0275\u0275text(10, "S");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div");
    \u0275\u0275text(12, "L");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, ColorPickerComponent_div_22_div_13_Template, 2, 0, "div", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("display", ctx_r1.format !== 2 ? "none" : "block");
    \u0275\u0275advance(2);
    \u0275\u0275property("rg", 360)("value", ctx_r1.hslaText == null ? null : ctx_r1.hslaText.h);
    \u0275\u0275advance();
    \u0275\u0275property("rg", 100)("value", ctx_r1.hslaText == null ? null : ctx_r1.hslaText.s);
    \u0275\u0275advance();
    \u0275\u0275property("rg", 100)("value", ctx_r1.hslaText == null ? null : ctx_r1.hslaText.l);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cpAlphaChannel !== "disabled");
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.cpAlphaChannel !== "disabled");
  }
}
function ColorPickerComponent_div_23_input_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 39);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_23_input_5_Template_input_keyup_enter_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_23_input_5_Template_input_newValue_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAlphaInput($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("rg", 1)("value", ctx_r1.rgbaText == null ? null : ctx_r1.rgbaText.a);
  }
}
function ColorPickerComponent_div_23_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "A");
    \u0275\u0275elementEnd();
  }
}
function ColorPickerComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 35)(2, "input", 43);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_23_Template_input_keyup_enter_2_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_23_Template_input_newValue_2_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRedInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 43);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_23_Template_input_keyup_enter_3_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_23_Template_input_newValue_3_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onGreenInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 43);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_23_Template_input_keyup_enter_4_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_23_Template_input_newValue_4_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBlueInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ColorPickerComponent_div_23_input_5_Template, 1, 2, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 35)(7, "div");
    \u0275\u0275text(8, "R");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div");
    \u0275\u0275text(10, "G");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div");
    \u0275\u0275text(12, "B");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, ColorPickerComponent_div_23_div_13_Template, 2, 0, "div", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("display", ctx_r1.format !== 1 ? "none" : "block");
    \u0275\u0275advance(2);
    \u0275\u0275property("rg", 255)("value", ctx_r1.rgbaText == null ? null : ctx_r1.rgbaText.r);
    \u0275\u0275advance();
    \u0275\u0275property("rg", 255)("value", ctx_r1.rgbaText == null ? null : ctx_r1.rgbaText.g);
    \u0275\u0275advance();
    \u0275\u0275property("rg", 255)("value", ctx_r1.rgbaText == null ? null : ctx_r1.rgbaText.b);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cpAlphaChannel !== "disabled");
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.cpAlphaChannel !== "disabled");
  }
}
function ColorPickerComponent_div_24_input_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 39);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_24_input_3_Template_input_keyup_enter_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_24_input_3_Template_input_newValue_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAlphaInput($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("rg", 1)("value", ctx_r1.hexAlpha);
  }
}
function ColorPickerComponent_div_24_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "A");
    \u0275\u0275elementEnd();
  }
}
function ColorPickerComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 35)(2, "input", 45);
    \u0275\u0275listener("blur", function ColorPickerComponent_div_24_Template_input_blur_2_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onHexInput(null));
    })("keyup.enter", function ColorPickerComponent_div_24_Template_input_keyup_enter_2_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_24_Template_input_newValue_2_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onHexInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ColorPickerComponent_div_24_input_3_Template, 1, 2, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 35)(5, "div");
    \u0275\u0275text(6, "Hex");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ColorPickerComponent_div_24_div_7_Template, 2, 0, "div", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("display", ctx_r1.format !== 0 ? "none" : "block");
    \u0275\u0275classProp("hex-alpha", ctx_r1.cpAlphaChannel === "forced");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.hexText);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cpAlphaChannel === "forced");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.cpAlphaChannel === "forced");
  }
}
function ColorPickerComponent_div_25_input_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 39);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_25_input_3_Template_input_keyup_enter_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_25_input_3_Template_input_newValue_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAlphaInput($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("rg", 1)("value", ctx_r1.hslaText == null ? null : ctx_r1.hslaText.a);
  }
}
function ColorPickerComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 35)(2, "input", 36);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_25_Template_input_keyup_enter_2_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_25_Template_input_newValue_2_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onValueInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ColorPickerComponent_div_25_input_3_Template, 1, 2, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 35)(5, "div");
    \u0275\u0275text(6, "V");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div");
    \u0275\u0275text(8, "A");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("rg", 100)("value", ctx_r1.hslaText == null ? null : ctx_r1.hslaText.l);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cpAlphaChannel !== "disabled");
  }
}
function ColorPickerComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47)(1, "span", 48);
    \u0275\u0275listener("click", function ColorPickerComponent_div_26_Template_span_click_1_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFormatToggle(-1));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 48);
    \u0275\u0275listener("click", function ColorPickerComponent_div_26_Template_span_click_2_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFormatToggle(1));
    });
    \u0275\u0275elementEnd()();
  }
}
function ColorPickerComponent_div_27_div_4_div_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275listener("click", function ColorPickerComponent_div_27_div_4_div_1_span_1_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r18);
      const color_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onRemovePresetColor($event, color_r17));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.cpRemoveColorButtonClass);
  }
}
function ColorPickerComponent_div_27_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275listener("click", function ColorPickerComponent_div_27_div_4_div_1_Template_div_click_0_listener() {
      const color_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setColorFromString(color_r17));
    });
    \u0275\u0275template(1, ColorPickerComponent_div_27_div_4_div_1_span_1_Template, 1, 3, "span", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const color_r17 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("background-color", color_r17);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cpAddColorButton);
  }
}
function ColorPickerComponent_div_27_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, ColorPickerComponent_div_27_div_4_div_1_Template, 2, 3, "div", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cpPresetColorsClass);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.cpPresetColors);
  }
}
function ColorPickerComponent_div_27_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cpPresetEmptyMessageClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.cpPresetEmptyMessage);
  }
}
function ColorPickerComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275element(1, "hr");
    \u0275\u0275elementStart(2, "div", 50);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ColorPickerComponent_div_27_div_4_Template, 2, 4, "div", 51)(5, ColorPickerComponent_div_27_div_5_Template, 2, 4, "div", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.cpPresetLabel);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cpPresetColors == null ? null : ctx_r1.cpPresetColors.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r1.cpPresetColors == null ? null : ctx_r1.cpPresetColors.length) && ctx_r1.cpAddColorButton);
  }
}
function ColorPickerComponent_div_28_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275listener("click", function ColorPickerComponent_div_28_button_1_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCancelColor($event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cpCancelButtonClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.cpCancelButtonText);
  }
}
function ColorPickerComponent_div_28_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275listener("click", function ColorPickerComponent_div_28_button_2_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cpOKButtonClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.cpOKButtonText);
  }
}
function ColorPickerComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275template(1, ColorPickerComponent_div_28_button_1_Template, 2, 4, "button", 57)(2, ColorPickerComponent_div_28_button_2_Template, 2, 4, "button", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cpCancelButton);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cpOKButton);
  }
}
function ColorPickerComponent_div_29_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ColorPickerComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275template(1, ColorPickerComponent_div_29_ng_container_1_Template, 1, 0, "ng-container", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.cpExtraTemplate);
  }
}
var ColorFormats;
(function(ColorFormats2) {
  ColorFormats2[ColorFormats2["HEX"] = 0] = "HEX";
  ColorFormats2[ColorFormats2["RGBA"] = 1] = "RGBA";
  ColorFormats2[ColorFormats2["HSLA"] = 2] = "HSLA";
  ColorFormats2[ColorFormats2["CMYK"] = 3] = "CMYK";
})(ColorFormats || (ColorFormats = {}));
var Rgba = class {
  r;
  g;
  b;
  a;
  constructor(r2, g2, b2, a2) {
    this.r = r2;
    this.g = g2;
    this.b = b2;
    this.a = a2;
  }
};
var Hsva = class {
  h;
  s;
  v;
  a;
  constructor(h2, s2, v2, a2) {
    this.h = h2;
    this.s = s2;
    this.v = v2;
    this.a = a2;
  }
};
var Hsla = class {
  h;
  s;
  l;
  a;
  constructor(h2, s2, l2, a2) {
    this.h = h2;
    this.s = s2;
    this.l = l2;
    this.a = a2;
  }
};
var Cmyk = class {
  c;
  m;
  y;
  k;
  a;
  constructor(c2, m2, y2, k2, a2 = 1) {
    this.c = c2;
    this.m = m2;
    this.y = y2;
    this.k = k2;
    this.a = a2;
  }
};
function calculateAutoPositioning(elBounds, triggerElBounds) {
  let usePositionX = "right";
  let usePositionY = "bottom";
  const {
    height,
    width
  } = elBounds;
  const {
    top,
    left
  } = triggerElBounds;
  const bottom = top + triggerElBounds.height;
  const right = left + triggerElBounds.width;
  const collisionTop = top - height < 0;
  const collisionBottom = bottom + height > (window.innerHeight || document.documentElement.clientHeight);
  const collisionLeft = left - width < 0;
  const collisionRight = right + width > (window.innerWidth || document.documentElement.clientWidth);
  const collisionAll = collisionTop && collisionBottom && collisionLeft && collisionRight;
  if (collisionBottom) {
    usePositionY = "top";
  }
  if (collisionTop) {
    usePositionY = "bottom";
  }
  if (collisionLeft) {
    usePositionX = "right";
  }
  if (collisionRight) {
    usePositionX = "left";
  }
  if (collisionAll) {
    const postions = ["left", "right", "top", "bottom"];
    return postions.reduce((prev, next) => elBounds[prev] > elBounds[next] ? prev : next);
  }
  if (collisionLeft && collisionRight) {
    if (collisionTop) {
      return "bottom";
    }
    if (collisionBottom) {
      return "top";
    }
    return top > bottom ? "top" : "bottom";
  }
  if (collisionTop && collisionBottom) {
    if (collisionLeft) {
      return "right";
    }
    if (collisionRight) {
      return "left";
    }
    return left > right ? "left" : "right";
  }
  return `${usePositionY}-${usePositionX}`;
}
function detectIE() {
  let ua = "";
  if (typeof navigator !== "undefined") {
    ua = navigator.userAgent.toLowerCase();
  }
  const msie = ua.indexOf("msie ");
  if (msie > 0) {
    return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10);
  }
  return false;
}
var TextDirective = class _TextDirective {
  rg;
  text;
  newValue = new EventEmitter();
  inputChange(event) {
    const value = event.target.value;
    if (this.rg === void 0) {
      this.newValue.emit(value);
    } else {
      const numeric = parseFloat(value);
      this.newValue.emit({
        v: numeric,
        rg: this.rg
      });
    }
  }
  static \u0275fac = function TextDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TextDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _TextDirective,
    selectors: [["", "text", ""]],
    hostBindings: function TextDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function TextDirective_input_HostBindingHandler($event) {
          return ctx.inputChange($event);
        });
      }
    },
    inputs: {
      rg: "rg",
      text: "text"
    },
    outputs: {
      newValue: "newValue"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextDirective, [{
    type: Directive,
    args: [{
      selector: "[text]"
    }]
  }], null, {
    rg: [{
      type: Input
    }],
    text: [{
      type: Input
    }],
    newValue: [{
      type: Output
    }],
    inputChange: [{
      type: HostListener,
      args: ["input", ["$event"]]
    }]
  });
})();
var SliderDirective = class _SliderDirective {
  elRef;
  listenerMove;
  listenerStop;
  rgX;
  rgY;
  slider;
  dragEnd = new EventEmitter();
  dragStart = new EventEmitter();
  newValue = new EventEmitter();
  mouseDown(event) {
    this.start(event);
  }
  touchStart(event) {
    this.start(event);
  }
  constructor(elRef) {
    this.elRef = elRef;
    this.listenerMove = (event) => this.move(event);
    this.listenerStop = () => this.stop();
  }
  move(event) {
    event.preventDefault();
    this.setCursor(event);
  }
  start(event) {
    this.setCursor(event);
    event.stopPropagation();
    document.addEventListener("mouseup", this.listenerStop);
    document.addEventListener("touchend", this.listenerStop);
    document.addEventListener("mousemove", this.listenerMove);
    document.addEventListener("touchmove", this.listenerMove);
    this.dragStart.emit();
  }
  stop() {
    document.removeEventListener("mouseup", this.listenerStop);
    document.removeEventListener("touchend", this.listenerStop);
    document.removeEventListener("mousemove", this.listenerMove);
    document.removeEventListener("touchmove", this.listenerMove);
    this.dragEnd.emit();
  }
  getX(event) {
    const position = this.elRef.nativeElement.getBoundingClientRect();
    const pageX = event.pageX !== void 0 ? event.pageX : event.touches[0].pageX;
    return pageX - position.left - window.pageXOffset;
  }
  getY(event) {
    const position = this.elRef.nativeElement.getBoundingClientRect();
    const pageY = event.pageY !== void 0 ? event.pageY : event.touches[0].pageY;
    return pageY - position.top - window.pageYOffset;
  }
  setCursor(event) {
    const width = this.elRef.nativeElement.offsetWidth;
    const height = this.elRef.nativeElement.offsetHeight;
    const x2 = Math.max(0, Math.min(this.getX(event), width));
    const y2 = Math.max(0, Math.min(this.getY(event), height));
    if (this.rgX !== void 0 && this.rgY !== void 0) {
      this.newValue.emit({
        s: x2 / width,
        v: 1 - y2 / height,
        rgX: this.rgX,
        rgY: this.rgY
      });
    } else if (this.rgX === void 0 && this.rgY !== void 0) {
      this.newValue.emit({
        v: y2 / height,
        rgY: this.rgY
      });
    } else if (this.rgX !== void 0 && this.rgY === void 0) {
      this.newValue.emit({
        v: x2 / width,
        rgX: this.rgX
      });
    }
  }
  static \u0275fac = function SliderDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SliderDirective)(\u0275\u0275directiveInject(ElementRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _SliderDirective,
    selectors: [["", "slider", ""]],
    hostBindings: function SliderDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("mousedown", function SliderDirective_mousedown_HostBindingHandler($event) {
          return ctx.mouseDown($event);
        })("touchstart", function SliderDirective_touchstart_HostBindingHandler($event) {
          return ctx.touchStart($event);
        });
      }
    },
    inputs: {
      rgX: "rgX",
      rgY: "rgY",
      slider: "slider"
    },
    outputs: {
      dragEnd: "dragEnd",
      dragStart: "dragStart",
      newValue: "newValue"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SliderDirective, [{
    type: Directive,
    args: [{
      selector: "[slider]"
    }]
  }], () => [{
    type: ElementRef
  }], {
    rgX: [{
      type: Input
    }],
    rgY: [{
      type: Input
    }],
    slider: [{
      type: Input
    }],
    dragEnd: [{
      type: Output
    }],
    dragStart: [{
      type: Output
    }],
    newValue: [{
      type: Output
    }],
    mouseDown: [{
      type: HostListener,
      args: ["mousedown", ["$event"]]
    }],
    touchStart: [{
      type: HostListener,
      args: ["touchstart", ["$event"]]
    }]
  });
})();
var SliderPosition = class {
  h;
  s;
  v;
  a;
  constructor(h2, s2, v2, a2) {
    this.h = h2;
    this.s = s2;
    this.v = v2;
    this.a = a2;
  }
};
var SliderDimension = class {
  h;
  s;
  v;
  a;
  constructor(h2, s2, v2, a2) {
    this.h = h2;
    this.s = s2;
    this.v = v2;
    this.a = a2;
  }
};
var ColorPickerService = class _ColorPickerService {
  active = null;
  setActive(active) {
    if (this.active && this.active !== active && this.active.cpDialogDisplay !== "inline") {
      this.active.closeDialog();
    }
    this.active = active;
  }
  hsva2hsla(hsva) {
    const h2 = hsva.h, s2 = hsva.s, v2 = hsva.v, a2 = hsva.a;
    if (v2 === 0) {
      return new Hsla(h2, 0, 0, a2);
    } else if (s2 === 0 && v2 === 1) {
      return new Hsla(h2, 1, 1, a2);
    } else {
      const l2 = v2 * (2 - s2) / 2;
      return new Hsla(h2, v2 * s2 / (1 - Math.abs(2 * l2 - 1)), l2, a2);
    }
  }
  hsla2hsva(hsla) {
    const h2 = Math.min(hsla.h, 1), s2 = Math.min(hsla.s, 1);
    const l2 = Math.min(hsla.l, 1), a2 = Math.min(hsla.a, 1);
    if (l2 === 0) {
      return new Hsva(h2, 0, 0, a2);
    } else {
      const v2 = l2 + s2 * (1 - Math.abs(2 * l2 - 1)) / 2;
      return new Hsva(h2, 2 * (v2 - l2) / v2, v2, a2);
    }
  }
  hsvaToRgba(hsva) {
    let r2, g2, b2;
    const h2 = hsva.h, s2 = hsva.s, v2 = hsva.v, a2 = hsva.a;
    const i2 = Math.floor(h2 * 6);
    const f2 = h2 * 6 - i2;
    const p2 = v2 * (1 - s2);
    const q2 = v2 * (1 - f2 * s2);
    const t2 = v2 * (1 - (1 - f2) * s2);
    switch (i2 % 6) {
      case 0:
        r2 = v2, g2 = t2, b2 = p2;
        break;
      case 1:
        r2 = q2, g2 = v2, b2 = p2;
        break;
      case 2:
        r2 = p2, g2 = v2, b2 = t2;
        break;
      case 3:
        r2 = p2, g2 = q2, b2 = v2;
        break;
      case 4:
        r2 = t2, g2 = p2, b2 = v2;
        break;
      case 5:
        r2 = v2, g2 = p2, b2 = q2;
        break;
      default:
        r2 = 0, g2 = 0, b2 = 0;
    }
    return new Rgba(r2, g2, b2, a2);
  }
  cmykToRgb(cmyk) {
    const r2 = (1 - cmyk.c) * (1 - cmyk.k);
    const g2 = (1 - cmyk.m) * (1 - cmyk.k);
    const b2 = (1 - cmyk.y) * (1 - cmyk.k);
    return new Rgba(r2, g2, b2, cmyk.a);
  }
  rgbaToCmyk(rgba) {
    const k2 = 1 - Math.max(rgba.r, rgba.g, rgba.b);
    if (k2 === 1) {
      return new Cmyk(0, 0, 0, 1, rgba.a);
    } else {
      const c2 = (1 - rgba.r - k2) / (1 - k2);
      const m2 = (1 - rgba.g - k2) / (1 - k2);
      const y2 = (1 - rgba.b - k2) / (1 - k2);
      return new Cmyk(c2, m2, y2, k2, rgba.a);
    }
  }
  rgbaToHsva(rgba) {
    let h2, s2;
    const r2 = Math.min(rgba.r, 1), g2 = Math.min(rgba.g, 1);
    const b2 = Math.min(rgba.b, 1), a2 = Math.min(rgba.a, 1);
    const max = Math.max(r2, g2, b2), min = Math.min(r2, g2, b2);
    const v2 = max, d2 = max - min;
    s2 = max === 0 ? 0 : d2 / max;
    if (max === min) {
      h2 = 0;
    } else {
      switch (max) {
        case r2:
          h2 = (g2 - b2) / d2 + (g2 < b2 ? 6 : 0);
          break;
        case g2:
          h2 = (b2 - r2) / d2 + 2;
          break;
        case b2:
          h2 = (r2 - g2) / d2 + 4;
          break;
        default:
          h2 = 0;
      }
      h2 /= 6;
    }
    return new Hsva(h2, s2, v2, a2);
  }
  rgbaToHex(rgba, allowHex8) {
    let hex = "#" + (1 << 24 | rgba.r << 16 | rgba.g << 8 | rgba.b).toString(16).substr(1);
    if (allowHex8) {
      hex += (1 << 8 | Math.round(rgba.a * 255)).toString(16).substr(1);
    }
    return hex;
  }
  normalizeCMYK(cmyk) {
    return new Cmyk(cmyk.c / 100, cmyk.m / 100, cmyk.y / 100, cmyk.k / 100, cmyk.a);
  }
  denormalizeCMYK(cmyk) {
    return new Cmyk(Math.floor(cmyk.c * 100), Math.floor(cmyk.m * 100), Math.floor(cmyk.y * 100), Math.floor(cmyk.k * 100), cmyk.a);
  }
  denormalizeRGBA(rgba) {
    return new Rgba(Math.round(rgba.r * 255), Math.round(rgba.g * 255), Math.round(rgba.b * 255), rgba.a);
  }
  stringToHsva(colorString = "", allowHex8 = false) {
    let hsva = null;
    colorString = (colorString || "").toLowerCase();
    const stringParsers = [{
      re: /(rgb)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*%?,\s*(\d{1,3})\s*%?(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
      parse: function(execResult) {
        return new Rgba(parseInt(execResult[2], 10) / 255, parseInt(execResult[3], 10) / 255, parseInt(execResult[4], 10) / 255, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
      }
    }, {
      re: /(hsl)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
      parse: function(execResult) {
        return new Hsla(parseInt(execResult[2], 10) / 360, parseInt(execResult[3], 10) / 100, parseInt(execResult[4], 10) / 100, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
      }
    }];
    if (allowHex8) {
      stringParsers.push({
        re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})?$/,
        parse: function(execResult) {
          return new Rgba(parseInt(execResult[1], 16) / 255, parseInt(execResult[2], 16) / 255, parseInt(execResult[3], 16) / 255, parseInt(execResult[4] || "FF", 16) / 255);
        }
      });
    } else {
      stringParsers.push({
        re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/,
        parse: function(execResult) {
          return new Rgba(parseInt(execResult[1], 16) / 255, parseInt(execResult[2], 16) / 255, parseInt(execResult[3], 16) / 255, 1);
        }
      });
    }
    stringParsers.push({
      re: /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])$/,
      parse: function(execResult) {
        return new Rgba(parseInt(execResult[1] + execResult[1], 16) / 255, parseInt(execResult[2] + execResult[2], 16) / 255, parseInt(execResult[3] + execResult[3], 16) / 255, 1);
      }
    });
    for (const key in stringParsers) {
      if (stringParsers.hasOwnProperty(key)) {
        const parser = stringParsers[key];
        const match = parser.re.exec(colorString), color = match && parser.parse(match);
        if (color) {
          if (color instanceof Rgba) {
            hsva = this.rgbaToHsva(color);
          } else if (color instanceof Hsla) {
            hsva = this.hsla2hsva(color);
          }
          return hsva;
        }
      }
    }
    return hsva;
  }
  outputFormat(hsva, outputFormat, alphaChannel) {
    if (outputFormat === "auto") {
      outputFormat = hsva.a < 1 ? "rgba" : "hex";
    }
    switch (outputFormat) {
      case "hsla":
        const hsla = this.hsva2hsla(hsva);
        const hslaText = new Hsla(Math.round(hsla.h * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
        if (hsva.a < 1 || alphaChannel === "always") {
          return "hsla(" + hslaText.h + "," + hslaText.s + "%," + hslaText.l + "%," + hslaText.a + ")";
        } else {
          return "hsl(" + hslaText.h + "," + hslaText.s + "%," + hslaText.l + "%)";
        }
      case "rgba":
        const rgba = this.denormalizeRGBA(this.hsvaToRgba(hsva));
        if (hsva.a < 1 || alphaChannel === "always") {
          return "rgba(" + rgba.r + "," + rgba.g + "," + rgba.b + "," + Math.round(rgba.a * 100) / 100 + ")";
        } else {
          return "rgb(" + rgba.r + "," + rgba.g + "," + rgba.b + ")";
        }
      default:
        const allowHex8 = alphaChannel === "always" || alphaChannel === "forced";
        return this.rgbaToHex(this.denormalizeRGBA(this.hsvaToRgba(hsva)), allowHex8);
    }
  }
  static \u0275fac = function ColorPickerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColorPickerService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ColorPickerService,
    factory: _ColorPickerService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPickerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var SUPPORTS_TOUCH = typeof window !== "undefined" && "ontouchstart" in window;
var ColorPickerComponent = class _ColorPickerComponent {
  ngZone;
  elRef;
  cdRef;
  document;
  platformId;
  service;
  isIE10 = false;
  cmyk;
  hsva;
  width;
  height;
  cmykColor;
  outputColor;
  initialColor;
  fallbackColor;
  listenerResize;
  listenerMouseDown;
  directiveInstance;
  sliderH;
  sliderDimMax;
  directiveElementRef;
  dialogArrowSize = 10;
  dialogArrowOffset = 15;
  dialogInputFields = [ColorFormats.HEX, ColorFormats.RGBA, ColorFormats.HSLA, ColorFormats.CMYK];
  useRootViewContainer = false;
  show;
  hidden;
  top;
  left;
  position;
  format;
  slider;
  hexText;
  hexAlpha;
  cmykText;
  hslaText;
  rgbaText;
  arrowTop;
  selectedColor;
  hueSliderColor;
  alphaSliderColor;
  cpWidth;
  cpHeight;
  cpColorMode;
  cpCmykEnabled;
  cpAlphaChannel;
  cpOutputFormat;
  cpDisableInput;
  cpDialogDisplay;
  cpIgnoredElements;
  cpSaveClickOutside;
  cpCloseClickOutside;
  cpPosition;
  cpUsePosition;
  cpPositionOffset;
  cpOKButton;
  cpOKButtonText;
  cpOKButtonClass;
  cpCancelButton;
  cpCancelButtonText;
  cpCancelButtonClass;
  cpEyeDropper;
  eyeDropperSupported;
  cpPresetLabel;
  cpPresetColors;
  cpPresetColorsClass;
  cpMaxPresetColorsLength;
  cpPresetEmptyMessage;
  cpPresetEmptyMessageClass;
  cpAddColorButton;
  cpAddColorButtonText;
  cpAddColorButtonClass;
  cpRemoveColorButtonClass;
  cpArrowPosition;
  cpTriggerElement;
  cpExtraTemplate;
  dialogElement;
  hueSlider;
  alphaSlider;
  handleEsc(event) {
    if (this.show && this.cpDialogDisplay === "popup") {
      this.onCancelColor(event);
    }
  }
  handleEnter(event) {
    if (this.show && this.cpDialogDisplay === "popup") {
      this.onAcceptColor(event);
    }
  }
  constructor(ngZone, elRef, cdRef, document2, platformId, service) {
    this.ngZone = ngZone;
    this.elRef = elRef;
    this.cdRef = cdRef;
    this.document = document2;
    this.platformId = platformId;
    this.service = service;
    this.eyeDropperSupported = isPlatformBrowser(this.platformId) && "EyeDropper" in this.document.defaultView;
  }
  ngOnInit() {
    this.slider = new SliderPosition(0, 0, 0, 0);
    const hueWidth = this.hueSlider.nativeElement.offsetWidth || 140;
    const alphaWidth = this.alphaSlider.nativeElement.offsetWidth || 140;
    this.sliderDimMax = new SliderDimension(hueWidth, this.cpWidth, 130, alphaWidth);
    if (this.cpCmykEnabled) {
      this.format = ColorFormats.CMYK;
    } else if (this.cpOutputFormat === "rgba") {
      this.format = ColorFormats.RGBA;
    } else if (this.cpOutputFormat === "hsla") {
      this.format = ColorFormats.HSLA;
    } else {
      this.format = ColorFormats.HEX;
    }
    this.listenerMouseDown = (event) => {
      this.onMouseDown(event);
    };
    this.listenerResize = () => {
      this.onResize();
    };
    this.openDialog(this.initialColor, false);
  }
  ngOnDestroy() {
    this.closeDialog();
  }
  ngAfterViewInit() {
    if (this.cpWidth !== 230 || this.cpDialogDisplay === "inline") {
      const hueWidth = this.hueSlider.nativeElement.offsetWidth || 140;
      const alphaWidth = this.alphaSlider.nativeElement.offsetWidth || 140;
      this.sliderDimMax = new SliderDimension(hueWidth, this.cpWidth, 130, alphaWidth);
      this.updateColorPicker(false);
      this.cdRef.detectChanges();
    }
  }
  openDialog(color, emit = true) {
    this.service.setActive(this);
    if (!this.width) {
      this.cpWidth = this.directiveElementRef.nativeElement.offsetWidth;
    }
    if (!this.height) {
      this.height = 320;
    }
    this.setInitialColor(color);
    this.setColorFromString(color, emit);
    this.openColorPicker();
  }
  closeDialog() {
    this.closeColorPicker();
  }
  setupDialog(instance, elementRef, color, cpWidth, cpHeight, cpDialogDisplay, cpFallbackColor, cpColorMode, cpCmykEnabled, cpAlphaChannel, cpOutputFormat, cpDisableInput, cpIgnoredElements, cpSaveClickOutside, cpCloseClickOutside, cpUseRootViewContainer, cpPosition, cpPositionOffset, cpPositionRelativeToArrow, cpPresetLabel, cpPresetColors, cpPresetColorsClass, cpMaxPresetColorsLength, cpPresetEmptyMessage, cpPresetEmptyMessageClass, cpOKButton, cpOKButtonClass, cpOKButtonText, cpCancelButton, cpCancelButtonClass, cpCancelButtonText, cpAddColorButton, cpAddColorButtonClass, cpAddColorButtonText, cpRemoveColorButtonClass, cpEyeDropper, cpTriggerElement, cpExtraTemplate) {
    this.setInitialColor(color);
    this.setColorMode(cpColorMode);
    this.isIE10 = detectIE() === 10;
    this.directiveInstance = instance;
    this.directiveElementRef = elementRef;
    this.cpDisableInput = cpDisableInput;
    this.cpCmykEnabled = cpCmykEnabled;
    this.cpAlphaChannel = cpAlphaChannel;
    this.cpOutputFormat = cpOutputFormat;
    this.cpDialogDisplay = cpDialogDisplay;
    this.cpIgnoredElements = cpIgnoredElements;
    this.cpSaveClickOutside = cpSaveClickOutside;
    this.cpCloseClickOutside = cpCloseClickOutside;
    this.useRootViewContainer = cpUseRootViewContainer;
    this.width = this.cpWidth = parseInt(cpWidth, 10);
    this.height = this.cpHeight = parseInt(cpHeight, 10);
    this.cpPosition = cpPosition;
    this.cpPositionOffset = parseInt(cpPositionOffset, 10);
    this.cpOKButton = cpOKButton;
    this.cpOKButtonText = cpOKButtonText;
    this.cpOKButtonClass = cpOKButtonClass;
    this.cpCancelButton = cpCancelButton;
    this.cpCancelButtonText = cpCancelButtonText;
    this.cpCancelButtonClass = cpCancelButtonClass;
    this.cpEyeDropper = cpEyeDropper;
    this.fallbackColor = cpFallbackColor || "#fff";
    this.setPresetConfig(cpPresetLabel, cpPresetColors);
    this.cpPresetColorsClass = cpPresetColorsClass;
    this.cpMaxPresetColorsLength = cpMaxPresetColorsLength;
    this.cpPresetEmptyMessage = cpPresetEmptyMessage;
    this.cpPresetEmptyMessageClass = cpPresetEmptyMessageClass;
    this.cpAddColorButton = cpAddColorButton;
    this.cpAddColorButtonText = cpAddColorButtonText;
    this.cpAddColorButtonClass = cpAddColorButtonClass;
    this.cpRemoveColorButtonClass = cpRemoveColorButtonClass;
    this.cpTriggerElement = cpTriggerElement;
    this.cpExtraTemplate = cpExtraTemplate;
    if (!cpPositionRelativeToArrow) {
      this.dialogArrowOffset = 0;
    }
    if (cpDialogDisplay === "inline") {
      this.dialogArrowSize = 0;
      this.dialogArrowOffset = 0;
    }
    if (cpOutputFormat === "hex" && cpAlphaChannel !== "always" && cpAlphaChannel !== "forced") {
      this.cpAlphaChannel = "disabled";
    }
  }
  setColorMode(mode) {
    switch (mode.toString().toUpperCase()) {
      case "1":
      case "C":
      case "COLOR":
        this.cpColorMode = 1;
        break;
      case "2":
      case "G":
      case "GRAYSCALE":
        this.cpColorMode = 2;
        break;
      case "3":
      case "P":
      case "PRESETS":
        this.cpColorMode = 3;
        break;
      default:
        this.cpColorMode = 1;
    }
  }
  setInitialColor(color) {
    this.initialColor = color;
  }
  setPresetConfig(cpPresetLabel, cpPresetColors) {
    this.cpPresetLabel = cpPresetLabel;
    this.cpPresetColors = cpPresetColors;
  }
  setColorFromString(value, emit = true, update = true) {
    let hsva;
    if (this.cpAlphaChannel === "always" || this.cpAlphaChannel === "forced") {
      hsva = this.service.stringToHsva(value, true);
      if (!hsva && !this.hsva) {
        hsva = this.service.stringToHsva(value, false);
      }
    } else {
      hsva = this.service.stringToHsva(value, false);
    }
    if (!hsva && !this.hsva) {
      hsva = this.service.stringToHsva(this.fallbackColor, false);
    }
    if (hsva) {
      this.hsva = hsva;
      this.sliderH = this.hsva.h;
      if (this.cpOutputFormat === "hex" && this.cpAlphaChannel === "disabled") {
        this.hsva.a = 1;
      }
      this.updateColorPicker(emit, update);
    }
  }
  onResize() {
    if (this.position === "fixed") {
      this.setDialogPosition();
    } else if (this.cpDialogDisplay !== "inline") {
      this.closeColorPicker();
    }
  }
  onDragEnd(slider) {
    this.directiveInstance.sliderDragEnd({
      slider,
      color: this.outputColor
    });
  }
  onDragStart(slider) {
    this.directiveInstance.sliderDragStart({
      slider,
      color: this.outputColor
    });
  }
  onMouseDown(event) {
    if (this.show && !this.isIE10 && this.cpDialogDisplay === "popup" && event.target !== this.directiveElementRef.nativeElement && !this.isDescendant(this.elRef.nativeElement, event.target) && !this.isDescendant(this.directiveElementRef.nativeElement, event.target) && this.cpIgnoredElements.filter((item) => item === event.target).length === 0) {
      this.ngZone.run(() => {
        if (this.cpSaveClickOutside) {
          this.directiveInstance.colorSelected(this.outputColor);
        } else {
          this.hsva = null;
          this.setColorFromString(this.initialColor, false);
          if (this.cpCmykEnabled) {
            this.directiveInstance.cmykChanged(this.cmykColor);
          }
          this.directiveInstance.colorChanged(this.initialColor);
          this.directiveInstance.colorCanceled();
        }
        if (this.cpCloseClickOutside) {
          this.closeColorPicker();
        }
      });
    }
  }
  onAcceptColor(event) {
    event.stopPropagation();
    if (this.outputColor) {
      this.directiveInstance.colorSelected(this.outputColor);
    }
    if (this.cpDialogDisplay === "popup") {
      this.closeColorPicker();
    }
  }
  onCancelColor(event) {
    this.hsva = null;
    event.stopPropagation();
    this.directiveInstance.colorCanceled();
    this.setColorFromString(this.initialColor, true);
    if (this.cpDialogDisplay === "popup") {
      if (this.cpCmykEnabled) {
        this.directiveInstance.cmykChanged(this.cmykColor);
      }
      this.directiveInstance.colorChanged(this.initialColor, true);
      this.closeColorPicker();
    }
  }
  onEyeDropper() {
    if (!this.eyeDropperSupported) return;
    const eyeDropper = new window.EyeDropper();
    eyeDropper.open().then((eyeDropperResult) => {
      this.setColorFromString(eyeDropperResult.sRGBHex, true);
    });
  }
  onFormatToggle(change) {
    const availableFormats = this.dialogInputFields.length - (this.cpCmykEnabled ? 0 : 1);
    const nextFormat = ((this.dialogInputFields.indexOf(this.format) + change) % availableFormats + availableFormats) % availableFormats;
    this.format = this.dialogInputFields[nextFormat];
  }
  onColorChange(value) {
    this.hsva.s = value.s / value.rgX;
    this.hsva.v = value.v / value.rgY;
    this.updateColorPicker();
    this.directiveInstance.sliderChanged({
      slider: "lightness",
      value: this.hsva.v,
      color: this.outputColor
    });
    this.directiveInstance.sliderChanged({
      slider: "saturation",
      value: this.hsva.s,
      color: this.outputColor
    });
  }
  onHueChange(value) {
    this.hsva.h = value.v / value.rgX;
    this.sliderH = this.hsva.h;
    this.updateColorPicker();
    this.directiveInstance.sliderChanged({
      slider: "hue",
      value: this.hsva.h,
      color: this.outputColor
    });
  }
  onValueChange(value) {
    this.hsva.v = value.v / value.rgX;
    this.updateColorPicker();
    this.directiveInstance.sliderChanged({
      slider: "value",
      value: this.hsva.v,
      color: this.outputColor
    });
  }
  onAlphaChange(value) {
    this.hsva.a = value.v / value.rgX;
    this.updateColorPicker();
    this.directiveInstance.sliderChanged({
      slider: "alpha",
      value: this.hsva.a,
      color: this.outputColor
    });
  }
  onHexInput(value) {
    if (value === null) {
      this.updateColorPicker();
    } else {
      if (value && value[0] !== "#") {
        value = "#" + value;
      }
      let validHex = /^#([a-f0-9]{3}|[a-f0-9]{6})$/gi;
      if (this.cpAlphaChannel === "always") {
        validHex = /^#([a-f0-9]{3}|[a-f0-9]{6}|[a-f0-9]{8})$/gi;
      }
      const valid = validHex.test(value);
      if (valid) {
        if (value.length < 5) {
          value = "#" + value.substring(1).split("").map((c2) => c2 + c2).join("");
        }
        if (this.cpAlphaChannel === "forced") {
          value += Math.round(this.hsva.a * 255).toString(16);
        }
        this.setColorFromString(value, true, false);
      }
      this.directiveInstance.inputChanged({
        input: "hex",
        valid,
        value,
        color: this.outputColor
      });
    }
  }
  onRedInput(value) {
    const rgba = this.service.hsvaToRgba(this.hsva);
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      rgba.r = value.v / value.rg;
      this.hsva = this.service.rgbaToHsva(rgba);
      this.sliderH = this.hsva.h;
      this.updateColorPicker();
    }
    this.directiveInstance.inputChanged({
      input: "red",
      valid,
      value: rgba.r,
      color: this.outputColor
    });
  }
  onBlueInput(value) {
    const rgba = this.service.hsvaToRgba(this.hsva);
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      rgba.b = value.v / value.rg;
      this.hsva = this.service.rgbaToHsva(rgba);
      this.sliderH = this.hsva.h;
      this.updateColorPicker();
    }
    this.directiveInstance.inputChanged({
      input: "blue",
      valid,
      value: rgba.b,
      color: this.outputColor
    });
  }
  onGreenInput(value) {
    const rgba = this.service.hsvaToRgba(this.hsva);
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      rgba.g = value.v / value.rg;
      this.hsva = this.service.rgbaToHsva(rgba);
      this.sliderH = this.hsva.h;
      this.updateColorPicker();
    }
    this.directiveInstance.inputChanged({
      input: "green",
      valid,
      value: rgba.g,
      color: this.outputColor
    });
  }
  onHueInput(value) {
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      this.hsva.h = value.v / value.rg;
      this.sliderH = this.hsva.h;
      this.updateColorPicker();
    }
    this.directiveInstance.inputChanged({
      input: "hue",
      valid,
      value: this.hsva.h,
      color: this.outputColor
    });
  }
  onValueInput(value) {
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      this.hsva.v = value.v / value.rg;
      this.updateColorPicker();
    }
    this.directiveInstance.inputChanged({
      input: "value",
      valid,
      value: this.hsva.v,
      color: this.outputColor
    });
  }
  onAlphaInput(value) {
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      this.hsva.a = value.v / value.rg;
      this.updateColorPicker();
    }
    this.directiveInstance.inputChanged({
      input: "alpha",
      valid,
      value: this.hsva.a,
      color: this.outputColor
    });
  }
  onLightnessInput(value) {
    const hsla = this.service.hsva2hsla(this.hsva);
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      hsla.l = value.v / value.rg;
      this.hsva = this.service.hsla2hsva(hsla);
      this.sliderH = this.hsva.h;
      this.updateColorPicker();
    }
    this.directiveInstance.inputChanged({
      input: "lightness",
      valid,
      value: hsla.l,
      color: this.outputColor
    });
  }
  onSaturationInput(value) {
    const hsla = this.service.hsva2hsla(this.hsva);
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      hsla.s = value.v / value.rg;
      this.hsva = this.service.hsla2hsva(hsla);
      this.sliderH = this.hsva.h;
      this.updateColorPicker();
    }
    this.directiveInstance.inputChanged({
      input: "saturation",
      valid,
      value: hsla.s,
      color: this.outputColor
    });
  }
  onCyanInput(value) {
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      this.cmyk.c = value.v;
      this.updateColorPicker(false, true, true);
    }
    this.directiveInstance.inputChanged({
      input: "cyan",
      valid: true,
      value: this.cmyk.c,
      color: this.outputColor
    });
  }
  onMagentaInput(value) {
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      this.cmyk.m = value.v;
      this.updateColorPicker(false, true, true);
    }
    this.directiveInstance.inputChanged({
      input: "magenta",
      valid: true,
      value: this.cmyk.m,
      color: this.outputColor
    });
  }
  onYellowInput(value) {
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      this.cmyk.y = value.v;
      this.updateColorPicker(false, true, true);
    }
    this.directiveInstance.inputChanged({
      input: "yellow",
      valid: true,
      value: this.cmyk.y,
      color: this.outputColor
    });
  }
  onBlackInput(value) {
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      this.cmyk.k = value.v;
      this.updateColorPicker(false, true, true);
    }
    this.directiveInstance.inputChanged({
      input: "black",
      valid: true,
      value: this.cmyk.k,
      color: this.outputColor
    });
  }
  onAddPresetColor(event, value) {
    event.stopPropagation();
    if (!this.cpPresetColors.filter((color) => color === value).length) {
      this.cpPresetColors = this.cpPresetColors.concat(value);
      this.directiveInstance.presetColorsChanged(this.cpPresetColors);
    }
  }
  onRemovePresetColor(event, value) {
    event.stopPropagation();
    this.cpPresetColors = this.cpPresetColors.filter((color) => color !== value);
    this.directiveInstance.presetColorsChanged(this.cpPresetColors);
  }
  // Private helper functions for the color picker dialog status
  openColorPicker() {
    if (!this.show) {
      this.show = true;
      this.hidden = true;
      setTimeout(() => {
        this.hidden = false;
        this.setDialogPosition();
        this.cdRef.detectChanges();
      }, 0);
      this.directiveInstance.stateChanged(true);
      if (!this.isIE10) {
        this.ngZone.runOutsideAngular(() => {
          if (SUPPORTS_TOUCH) {
            document.addEventListener("touchstart", this.listenerMouseDown);
          } else {
            document.addEventListener("mousedown", this.listenerMouseDown);
          }
        });
      }
      window.addEventListener("resize", this.listenerResize);
    }
  }
  closeColorPicker() {
    if (this.show) {
      this.show = false;
      this.directiveInstance.stateChanged(false);
      if (!this.isIE10) {
        if (SUPPORTS_TOUCH) {
          document.removeEventListener("touchstart", this.listenerMouseDown);
        } else {
          document.removeEventListener("mousedown", this.listenerMouseDown);
        }
      }
      window.removeEventListener("resize", this.listenerResize);
      if (!this.cdRef["destroyed"]) {
        this.cdRef.detectChanges();
      }
    }
  }
  updateColorPicker(emit = true, update = true, cmykInput = false) {
    if (this.sliderDimMax) {
      if (this.cpColorMode === 2) {
        this.hsva.s = 0;
      }
      let hue, hsla, rgba;
      const lastOutput = this.outputColor;
      hsla = this.service.hsva2hsla(this.hsva);
      if (!this.cpCmykEnabled) {
        rgba = this.service.denormalizeRGBA(this.service.hsvaToRgba(this.hsva));
      } else {
        if (!cmykInput) {
          rgba = this.service.hsvaToRgba(this.hsva);
          this.cmyk = this.service.denormalizeCMYK(this.service.rgbaToCmyk(rgba));
        } else {
          rgba = this.service.cmykToRgb(this.service.normalizeCMYK(this.cmyk));
          this.hsva = this.service.rgbaToHsva(rgba);
        }
        rgba = this.service.denormalizeRGBA(rgba);
        this.sliderH = this.hsva.h;
      }
      hue = this.service.denormalizeRGBA(this.service.hsvaToRgba(new Hsva(this.sliderH || this.hsva.h, 1, 1, 1)));
      if (update) {
        this.hslaText = new Hsla(Math.round(hsla.h * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
        this.rgbaText = new Rgba(rgba.r, rgba.g, rgba.b, Math.round(rgba.a * 100) / 100);
        if (this.cpCmykEnabled) {
          this.cmykText = new Cmyk(this.cmyk.c, this.cmyk.m, this.cmyk.y, this.cmyk.k, Math.round(this.cmyk.a * 100) / 100);
        }
        const allowHex8 = this.cpAlphaChannel === "always";
        this.hexText = this.service.rgbaToHex(rgba, allowHex8);
        this.hexAlpha = this.rgbaText.a;
      }
      if (this.cpOutputFormat === "auto") {
        if (this.format !== ColorFormats.RGBA && this.format !== ColorFormats.CMYK && this.format !== ColorFormats.HSLA) {
          if (this.hsva.a < 1) {
            this.format = this.hsva.a < 1 ? ColorFormats.RGBA : ColorFormats.HEX;
          }
        }
      }
      this.hueSliderColor = "rgb(" + hue.r + "," + hue.g + "," + hue.b + ")";
      this.alphaSliderColor = "rgb(" + rgba.r + "," + rgba.g + "," + rgba.b + ")";
      this.outputColor = this.service.outputFormat(this.hsva, this.cpOutputFormat, this.cpAlphaChannel);
      this.selectedColor = this.service.outputFormat(this.hsva, "rgba", null);
      if (this.format !== ColorFormats.CMYK) {
        this.cmykColor = "";
      } else {
        if (this.cpAlphaChannel === "always" || this.cpAlphaChannel === "enabled" || this.cpAlphaChannel === "forced") {
          const alpha = Math.round(this.cmyk.a * 100) / 100;
          this.cmykColor = `cmyka(${this.cmyk.c},${this.cmyk.m},${this.cmyk.y},${this.cmyk.k},${alpha})`;
        } else {
          this.cmykColor = `cmyk(${this.cmyk.c},${this.cmyk.m},${this.cmyk.y},${this.cmyk.k})`;
        }
      }
      this.slider = new SliderPosition((this.sliderH || this.hsva.h) * this.sliderDimMax.h - 8, this.hsva.s * this.sliderDimMax.s - 8, (1 - this.hsva.v) * this.sliderDimMax.v - 8, this.hsva.a * this.sliderDimMax.a - 8);
      if (emit && lastOutput !== this.outputColor) {
        if (this.cpCmykEnabled) {
          this.directiveInstance.cmykChanged(this.cmykColor);
        }
        this.directiveInstance.colorChanged(this.outputColor);
      }
    }
  }
  // Private helper functions for the color picker dialog positioning
  setDialogPosition() {
    if (this.cpDialogDisplay === "inline") {
      this.position = "relative";
    } else {
      let position = "static", transform = "", style;
      let parentNode = null, transformNode = null;
      let node = this.directiveElementRef.nativeElement.parentNode;
      const dialogHeight = this.dialogElement.nativeElement.offsetHeight;
      while (node !== null && node.tagName !== "HTML") {
        style = window.getComputedStyle(node);
        position = style.getPropertyValue("position");
        transform = style.getPropertyValue("transform");
        if (position !== "static" && parentNode === null) {
          parentNode = node;
        }
        if (transform && transform !== "none" && transformNode === null) {
          transformNode = node;
        }
        if (position === "fixed") {
          parentNode = transformNode;
          break;
        }
        node = node.parentNode;
      }
      const boxDirective = this.createDialogBox(this.directiveElementRef.nativeElement, position !== "fixed");
      if (this.useRootViewContainer || position === "fixed" && (!parentNode || parentNode instanceof HTMLUnknownElement)) {
        this.top = boxDirective.top;
        this.left = boxDirective.left;
      } else {
        if (parentNode === null) {
          parentNode = node;
        }
        const boxParent = this.createDialogBox(parentNode, position !== "fixed");
        this.top = boxDirective.top - boxParent.top;
        this.left = boxDirective.left - boxParent.left;
      }
      if (position === "fixed") {
        this.position = "fixed";
      }
      let usePosition = this.cpPosition;
      const dialogBounds = this.dialogElement.nativeElement.getBoundingClientRect();
      if (this.cpPosition === "auto") {
        const triggerBounds = this.cpTriggerElement.nativeElement.getBoundingClientRect();
        usePosition = calculateAutoPositioning(dialogBounds, triggerBounds);
      }
      this.arrowTop = usePosition === "top" ? dialogHeight - 1 : void 0;
      this.cpArrowPosition = void 0;
      switch (usePosition) {
        case "top":
          this.top -= dialogHeight + this.dialogArrowSize;
          this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
          break;
        case "bottom":
          this.top += boxDirective.height + this.dialogArrowSize;
          this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
          break;
        case "top-left":
        case "left-top":
          this.top -= dialogHeight - boxDirective.height + boxDirective.height * this.cpPositionOffset / 100;
          this.left -= this.cpWidth + this.dialogArrowSize - 2 - this.dialogArrowOffset;
          break;
        case "top-right":
        case "right-top":
          this.top -= dialogHeight - boxDirective.height + boxDirective.height * this.cpPositionOffset / 100;
          this.left += boxDirective.width + this.dialogArrowSize - 2 - this.dialogArrowOffset;
          break;
        case "left":
        case "bottom-left":
        case "left-bottom":
          this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
          this.left -= this.cpWidth + this.dialogArrowSize - 2;
          break;
        case "right":
        case "bottom-right":
        case "right-bottom":
        default:
          this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
          this.left += boxDirective.width + this.dialogArrowSize - 2;
          break;
      }
      const windowInnerHeight = window.innerHeight;
      const windowInnerWidth = window.innerWidth;
      const elRefClientRect = this.elRef.nativeElement.getBoundingClientRect();
      const bottom = this.top + dialogBounds.height;
      if (bottom > windowInnerHeight) {
        this.top = windowInnerHeight - dialogBounds.height;
        this.cpArrowPosition = elRefClientRect.x / 2 - 20;
      }
      const right = this.left + dialogBounds.width;
      if (right > windowInnerWidth) {
        this.left = windowInnerWidth - dialogBounds.width;
        this.cpArrowPosition = elRefClientRect.x / 2 - 20;
      }
      this.cpUsePosition = usePosition;
    }
  }
  // Private helper functions for the color picker dialog positioning and opening
  isDescendant(parent2, child) {
    let node = child.parentNode;
    while (node !== null) {
      if (node === parent2) {
        return true;
      }
      node = node.parentNode;
    }
    return false;
  }
  createDialogBox(element, offset) {
    const {
      top,
      left
    } = element.getBoundingClientRect();
    return {
      top: top + (offset ? window.pageYOffset : 0),
      left: left + (offset ? window.pageXOffset : 0),
      width: element.offsetWidth,
      height: element.offsetHeight
    };
  }
  static \u0275fac = function ColorPickerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColorPickerComponent)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ColorPickerService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ColorPickerComponent,
    selectors: [["color-picker"]],
    viewQuery: function ColorPickerComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 7);
        \u0275\u0275viewQuery(_c1, 7);
        \u0275\u0275viewQuery(_c2, 7);
      }
      if (rf & 2) {
        let _t2;
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.dialogElement = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.hueSlider = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.alphaSlider = _t2.first);
      }
    },
    hostBindings: function ColorPickerComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keyup.esc", function ColorPickerComponent_keyup_esc_HostBindingHandler($event) {
          return ctx.handleEsc($event);
        }, false, \u0275\u0275resolveDocument)("keyup.enter", function ColorPickerComponent_keyup_enter_HostBindingHandler($event) {
          return ctx.handleEnter($event);
        }, false, \u0275\u0275resolveDocument);
      }
    },
    decls: 30,
    vars: 51,
    consts: [["dialogPopup", ""], ["hueSlider", ""], ["valueSlider", ""], ["alphaSlider", ""], [1, "color-picker", 3, "click"], [3, "left", "class", "top", 4, "ngIf"], ["class", "saturation-lightness", 3, "slider", "rgX", "rgY", "background-color", "newValue", "dragStart", "dragEnd", 4, "ngIf"], [1, "hue-alpha", "box"], [1, "left"], [1, "selected-color-background"], [1, "selected-color", 3, "click"], ["class", "eyedropper-icon", "xmlns", "http://www.w3.org/2000/svg", "height", "24px", "viewBox", "0 0 24 24", "width", "24px", "fill", "#000000", 4, "ngIf"], ["type", "button", 3, "class", "disabled", "click", 4, "ngIf"], [1, "right"], ["style", "height: 16px;", 4, "ngIf"], [1, "hue", 3, "newValue", "dragStart", "dragEnd", "slider", "rgX"], [1, "cursor"], [1, "value", 3, "newValue", "dragStart", "dragEnd", "slider", "rgX"], [1, "alpha", 3, "newValue", "dragStart", "dragEnd", "slider", "rgX"], ["class", "cmyk-text", 3, "display", 4, "ngIf"], ["class", "hsla-text", 3, "display", 4, "ngIf"], ["class", "rgba-text", 3, "display", 4, "ngIf"], ["class", "hex-text", 3, "hex-alpha", "display", 4, "ngIf"], ["class", "value-text", 4, "ngIf"], ["class", "type-policy", 4, "ngIf"], ["class", "preset-area", 4, "ngIf"], ["class", "button-area", 4, "ngIf"], ["class", "extra-template", 4, "ngIf"], [1, "saturation-lightness", 3, "newValue", "dragStart", "dragEnd", "slider", "rgX", "rgY"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24px", "viewBox", "0 0 24 24", "width", "24px", "fill", "#000000", 1, "eyedropper-icon"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M17.66 5.41l.92.92-2.69 2.69-.92-.92 2.69-2.69M17.67 3c-.26 0-.51.1-.71.29l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42l-2.34-2.34c-.2-.19-.45-.29-.7-.29zM6.92 19L5 17.08l8.06-8.06 1.92 1.92L6.92 19z"], ["type", "button", 3, "click", "disabled"], [2, "height", "16px"], [1, "cmyk-text"], [1, "box"], ["type", "number", "pattern", "[0-9]*", "min", "0", "max", "100", 3, "keyup.enter", "newValue", "text", "rg", "value"], ["type", "number", "pattern", "[0-9]+([\\.,][0-9]{1,2})?", "min", "0", "max", "1", "step", "0.1", 3, "text", "rg", "value", "keyup.enter", "newValue", 4, "ngIf"], [4, "ngIf"], ["type", "number", "pattern", "[0-9]+([\\.,][0-9]{1,2})?", "min", "0", "max", "1", "step", "0.1", 3, "keyup.enter", "newValue", "text", "rg", "value"], [1, "hsla-text"], ["type", "number", "pattern", "[0-9]*", "min", "0", "max", "360", 3, "keyup.enter", "newValue", "text", "rg", "value"], [1, "rgba-text"], ["type", "number", "pattern", "[0-9]*", "min", "0", "max", "255", 3, "keyup.enter", "newValue", "text", "rg", "value"], [1, "hex-text"], [3, "blur", "keyup.enter", "newValue", "text", "value"], [1, "value-text"], [1, "type-policy"], [1, "type-policy-arrow", 3, "click"], [1, "preset-area"], [1, "preset-label"], [3, "class", 4, "ngIf"], ["class", "preset-color", 3, "backgroundColor", "click", 4, "ngFor", "ngForOf"], [1, "preset-color", 3, "click"], [3, "class", "click", 4, "ngIf"], [3, "click"], [1, "button-area"], ["type", "button", 3, "class", "click", 4, "ngIf"], ["type", "button", 3, "click"], [1, "extra-template"], [4, "ngTemplateOutlet"]],
    template: function ColorPickerComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 4, 0);
        \u0275\u0275listener("click", function ColorPickerComponent_Template_div_click_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView($event.stopPropagation());
        });
        \u0275\u0275template(2, ColorPickerComponent_div_2_Template, 1, 7, "div", 5)(3, ColorPickerComponent_div_3_Template, 2, 8, "div", 6);
        \u0275\u0275elementStart(4, "div", 7)(5, "div", 8);
        \u0275\u0275element(6, "div", 9);
        \u0275\u0275elementStart(7, "div", 10);
        \u0275\u0275listener("click", function ColorPickerComponent_Template_div_click_7_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.eyeDropperSupported && ctx.cpEyeDropper && ctx.onEyeDropper());
        });
        \u0275\u0275template(8, ColorPickerComponent__svg_svg_8_Template, 3, 0, "svg", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275template(9, ColorPickerComponent_button_9_Template, 2, 5, "button", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 13);
        \u0275\u0275template(11, ColorPickerComponent_div_11_Template, 1, 0, "div", 14);
        \u0275\u0275elementStart(12, "div", 15, 1);
        \u0275\u0275listener("newValue", function ColorPickerComponent_Template_div_newValue_12_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onHueChange($event));
        })("dragStart", function ColorPickerComponent_Template_div_dragStart_12_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onDragStart("hue"));
        })("dragEnd", function ColorPickerComponent_Template_div_dragEnd_12_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onDragEnd("hue"));
        });
        \u0275\u0275element(14, "div", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 17, 2);
        \u0275\u0275listener("newValue", function ColorPickerComponent_Template_div_newValue_15_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onValueChange($event));
        })("dragStart", function ColorPickerComponent_Template_div_dragStart_15_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onDragStart("value"));
        })("dragEnd", function ColorPickerComponent_Template_div_dragEnd_15_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onDragEnd("value"));
        });
        \u0275\u0275element(17, "div", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 18, 3);
        \u0275\u0275listener("newValue", function ColorPickerComponent_Template_div_newValue_18_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onAlphaChange($event));
        })("dragStart", function ColorPickerComponent_Template_div_dragStart_18_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onDragStart("alpha"));
        })("dragEnd", function ColorPickerComponent_Template_div_dragEnd_18_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onDragEnd("alpha"));
        });
        \u0275\u0275element(20, "div", 16);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(21, ColorPickerComponent_div_21_Template, 17, 12, "div", 19)(22, ColorPickerComponent_div_22_Template, 14, 10, "div", 20)(23, ColorPickerComponent_div_23_Template, 14, 10, "div", 21)(24, ColorPickerComponent_div_24_Template, 8, 7, "div", 22)(25, ColorPickerComponent_div_25_Template, 9, 3, "div", 23)(26, ColorPickerComponent_div_26_Template, 3, 0, "div", 24)(27, ColorPickerComponent_div_27_Template, 6, 3, "div", 25)(28, ColorPickerComponent_div_28_Template, 3, 2, "div", 26)(29, ColorPickerComponent_div_29_Template, 2, 1, "div", 27);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275styleProp("display", !ctx.show ? "none" : "block")("visibility", ctx.hidden ? "hidden" : "visible")("top", ctx.top, "px")("left", ctx.left, "px")("position", ctx.position)("height", ctx.cpHeight, "px")("width", ctx.cpWidth, "px");
        \u0275\u0275classProp("open", ctx.show);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.cpDialogDisplay === "popup");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.cpColorMode || 1) === 1);
        \u0275\u0275advance(4);
        \u0275\u0275styleProp("background-color", ctx.selectedColor)("cursor", ctx.eyeDropperSupported && ctx.cpEyeDropper ? "pointer" : null);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.eyeDropperSupported && ctx.cpEyeDropper);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.cpAddColorButton);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.cpAlphaChannel === "disabled");
        \u0275\u0275advance();
        \u0275\u0275styleProp("display", (ctx.cpColorMode || 1) === 1 ? "block" : "none");
        \u0275\u0275property("rgX", 1);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("left", ctx.slider == null ? null : ctx.slider.h, "px");
        \u0275\u0275advance();
        \u0275\u0275styleProp("display", (ctx.cpColorMode || 1) === 2 ? "block" : "none");
        \u0275\u0275property("rgX", 1);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("right", ctx.slider == null ? null : ctx.slider.v, "px");
        \u0275\u0275advance();
        \u0275\u0275styleProp("display", ctx.cpAlphaChannel === "disabled" ? "none" : "block")("background-color", ctx.alphaSliderColor);
        \u0275\u0275property("rgX", 1);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("left", ctx.slider == null ? null : ctx.slider.a, "px");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 2);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.cpPresetColors == null ? null : ctx.cpPresetColors.length) || ctx.cpAddColorButton);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.cpOKButton || ctx.cpCancelButton);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.cpExtraTemplate);
      }
    },
    dependencies: [NgForOf, NgIf, NgTemplateOutlet, TextDirective, SliderDirective],
    styles: ['.color-picker{position:absolute;z-index:1000;width:230px;height:auto;border:#777 solid 1px;cursor:default;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#fff}.color-picker *{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;margin:0;font-size:11px}.color-picker input{width:0;height:26px;min-width:0;font-size:13px;text-align:center;color:#000}.color-picker input:invalid,.color-picker input:-moz-ui-invalid,.color-picker input:-moz-submit-invalid{box-shadow:none}.color-picker input::-webkit-inner-spin-button,.color-picker input::-webkit-outer-spin-button{margin:0;-webkit-appearance:none}.color-picker .arrow{position:absolute;z-index:999999;width:0;height:0;border-style:solid}.color-picker .arrow.arrow-top{left:8px;border-width:10px 5px;border-color:#777 rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0)}.color-picker .arrow.arrow-bottom{top:-20px;left:8px;border-width:10px 5px;border-color:rgba(0,0,0,0) rgba(0,0,0,0) #777 rgba(0,0,0,0)}.color-picker .arrow.arrow-top-left,.color-picker .arrow.arrow-left-top{right:-21px;bottom:8px;border-width:5px 10px;border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) #777}.color-picker .arrow.arrow-top-right,.color-picker .arrow.arrow-right-top{bottom:8px;left:-20px;border-width:5px 10px;border-color:rgba(0,0,0,0) #777 rgba(0,0,0,0) rgba(0,0,0,0)}.color-picker .arrow.arrow-left,.color-picker .arrow.arrow-left-bottom,.color-picker .arrow.arrow-bottom-left{top:8px;right:-21px;border-width:5px 10px;border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) #777}.color-picker .arrow.arrow-right,.color-picker .arrow.arrow-right-bottom,.color-picker .arrow.arrow-bottom-right{top:8px;left:-20px;border-width:5px 10px;border-color:rgba(0,0,0,0) #777 rgba(0,0,0,0) rgba(0,0,0,0)}.color-picker .cursor{position:relative;width:16px;height:16px;border:#222 solid 2px;border-radius:50%;cursor:default}.color-picker .box{display:flex;padding:4px 8px}.color-picker .left{position:relative;padding:16px 8px}.color-picker .right{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;padding:12px 8px}.color-picker .button-area{padding:0 16px 16px;text-align:right}.color-picker .button-area button{margin-left:8px}.color-picker .preset-area{padding:4px 15px}.color-picker .preset-area .preset-label{overflow:hidden;width:100%;padding:4px;font-size:11px;white-space:nowrap;text-align:left;text-overflow:ellipsis;color:#555}.color-picker .preset-area .preset-color{position:relative;display:inline-block;width:18px;height:18px;margin:4px 6px 8px;border:#a9a9a9 solid 1px;border-radius:25%;cursor:pointer}.color-picker .preset-area .preset-empty-message{min-height:18px;margin-top:4px;margin-bottom:8px;font-style:italic;text-align:center}.color-picker .hex-text{width:100%;padding:4px 8px;font-size:11px}.color-picker .hex-text .box{padding:0 24px 8px 8px}.color-picker .hex-text .box div{float:left;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;text-align:center;color:#555;clear:left}.color-picker .hex-text .box input{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;padding:1px;border:#a9a9a9 solid 1px}.color-picker .hex-alpha .box div:first-child,.color-picker .hex-alpha .box input:first-child{flex-grow:3;margin-right:8px}.color-picker .cmyk-text,.color-picker .hsla-text,.color-picker .rgba-text,.color-picker .value-text{width:100%;padding:4px 8px;font-size:11px}.color-picker .cmyk-text .box,.color-picker .hsla-text .box,.color-picker .rgba-text .box{padding:0 24px 8px 8px}.color-picker .value-text .box{padding:0 8px 8px}.color-picker .cmyk-text .box div,.color-picker .hsla-text .box div,.color-picker .rgba-text .box div,.color-picker .value-text .box div{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;margin-right:8px;text-align:center;color:#555}.color-picker .cmyk-text .box div:last-child,.color-picker .hsla-text .box div:last-child,.color-picker .rgba-text .box div:last-child,.color-picker .value-text .box div:last-child{margin-right:0}.color-picker .cmyk-text .box input,.color-picker .hsla-text .box input,.color-picker .rgba-text .box input,.color-picker .value-text .box input{float:left;-webkit-flex:1;-ms-flex:1;flex:1;padding:1px;margin:0 8px 0 0;border:#a9a9a9 solid 1px}.color-picker .cmyk-text .box input:last-child,.color-picker .hsla-text .box input:last-child,.color-picker .rgba-text .box input:last-child,.color-picker .value-text .box input:last-child{margin-right:0}.color-picker .hue-alpha{align-items:center;margin-bottom:3px}.color-picker .hue{direction:ltr;width:100%;height:16px;margin-bottom:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwkUFWbCCAAAAFxJREFUaN7t0kEKg0AQAME2x83/n2qu5qCgD1iDhCoYdpnbQC9bbY1qVO/jvc6k3ad91s7/7F1/csgPrujuQ17BDYSFsBAWwgJhISyEBcJCWAgLhIWwEBYIi2f7Ar/1TCgFH2X9AAAAAElFTkSuQmCC)}.color-picker .value{direction:rtl;width:100%;height:16px;margin-bottom:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAACTklEQVR42u3SYUcrABhA4U2SkmRJMmWSJklKJiWZZpKUJJskKUmaTFImKZOUzMySpGRmliRNJilJSpKSJEtmSpIpmWmSdO736/6D+x7OP3gUCoWCv1cqlSQlJZGcnExKSgqpqamkpaWRnp5ORkYGmZmZqFQqsrKyyM7OJicnh9zcXNRqNXl5eeTn56PRaCgoKKCwsJCioiK0Wi3FxcWUlJRQWlpKWVkZ5eXlVFRUUFlZiU6no6qqiurqampqaqitraWurg69Xk99fT0GgwGj0UhDQwONjY00NTXR3NxMS0sLra2ttLW10d7ejslkwmw209HRQWdnJ11dXXR3d9PT00Nvby99fX309/czMDDA4OAgFouFoaEhrFYrw8PDjIyMMDo6ytjYGDabjfHxcSYmJpicnGRqagq73c709DQzMzPMzs4yNzfH/Pw8DocDp9OJy+XC7XazsLDA4uIiS0tLLC8vs7KywurqKmtra3g8HrxeLz6fD7/fz/r6OhsbG2xubrK1tcX29jaBQICdnR2CwSC7u7vs7e2xv7/PwcEBh4eHHB0dcXx8zMnJCaenp5ydnXF+fs7FxQWXl5dcXV1xfX3Nzc0Nt7e33N3dEQqFuL+/5+HhgXA4TCQS4fHxkaenJ56fn3l5eeH19ZVoNMrb2xvv7+98fHwQi8WIx+N8fn6SSCT4+vri+/ubn58ffn9/+VcKgSWwBJbAElgCS2AJLIElsASWwBJYAktgCSyBJbAElsASWAJLYAksgSWwBJbAElgCS2AJLIElsP4/WH8AmJ5Z6jHS4h8AAAAASUVORK5CYII=)}.color-picker .alpha{direction:ltr;width:100%;height:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwYQlZMa3gAAAWVJREFUaN7tmEGO6jAQRCsOArHgBpyAJYGjcGocxAm4A2IHpmoWE0eBH+ezmFlNvU06shJ3W6VEelWMUQAIIF9f6qZpimsA1LYtS2uF51/u27YVAFZVRUkEoGHdPV/sIcbIEIIkUdI/9Xa7neyv61+SWFUVAVCSct00TWn2fv6u3+Ecfd3tXzy/0+nEUu+SPjo/kqzrmiQpScN6v98XewfA8/lMkiLJ2WxGSUopcT6fM6U0NX9/frfbjev1WtfrlZfLhYfDQQHG/AIOlnGwjINlHCxjHCzjYJm/TJWdCwquJXseFFzGwDNNeiKMOJTO8xQdDQaeB29+K9efeLaBo9J7vdvtJj1RjFFjfiv7qv95tjx/7leSQgh93e1ffMeIp6O+YQjho/N791t1XVOSSI7N//K+4/GoxWLBx+PB5/Op5XLJ+/3OlJJWqxU3m83ovv5iGf8KjYNlHCxjHCzjYBkHy5gf5gusvQU7U37jTAAAAABJRU5ErkJggg==)}.color-picker .type-policy{position:absolute;top:218px;right:12px;width:16px;height:24px;background-size:8px 16px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAgCAYAAAAffCjxAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACewAAAnsB01CO3AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIASURBVEiJ7ZY9axRRFIafsxMStrLQJpAgpBFhi+C9w1YSo00I6RZ/g9vZpBf/QOr4GyRgkSKNSrAadsZqQGwCkuAWyRZJsySwvhZ7N/vhzrgbLH3Ld8597jlzz50zJokyxXH8DqDVar0qi6v8BbItqSGpEcfxdlmsFWXkvX8AfAVWg3UKPEnT9GKujMzsAFgZsVaCN1VTQd77XUnrgE1kv+6935268WRpzrnHZvYRWC7YvC3pRZZl3wozqtVqiyH9IgjAspkd1Gq1xUJQtVrdB9ZKIAOthdg/Qc65LUk7wNIMoCVJO865rYFhkqjX6/d7vV4GPJwBMqofURS5JEk6FYBer/eeYb/Mo9WwFnPOvQbeAvfuAAK4BN4sAJtAG/gJIElmNuiJyba3EGNmZiPeZuEVmVell/Y/6N+CzDn3AXhEOOo7Hv/3BeAz8IzQkMPnJbuPx1wC+yYJ7/0nYIP5S/0FHKdp+rwCEEXRS/rf5Hl1Gtb2M0iSpCOpCZzPATmX1EySpHMLAsiy7MjMDoHrGSDXZnaYZdnRwBh7J91utwmczAA6CbG3GgPleX4jqUH/a1CktqRGnuc3hSCAMB32gKspkCtgb3KCQMmkjeP4WNJThrNNZval1WptTIsv7JtQ4tmIdRa8qSoEpWl6YWZNoAN0zKxZNPehpLSBZv2t+Q0CJ9lLnARQLAAAAABJRU5ErkJggg==);background-repeat:no-repeat;background-position:center}.color-picker .type-policy .type-policy-arrow{display:block;width:100%;height:50%}.color-picker .selected-color{position:absolute;top:16px;left:8px;width:40px;height:40px;border:1px solid #a9a9a9;border-radius:50%}.color-picker .selected-color-background{width:40px;height:40px;border-radius:50%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAh0lEQVRYR+2W0QlAMQgD60zdfwOdqa8TmI/wQMr5K0I5bZLIzLOa2nt37VVVbd+dDx5obgCC3KBLwJ2ff4PnVidkf+ucIhw80HQaCLo3DMH3CRK3iFsmAWVl6hPNDwt8EvNE5q+YuEXcMgkonVM6SdyCoEvAnZ8v1Hjx817MilmxSUB5rdLJDycZgUAZUch/AAAAAElFTkSuQmCC)}.color-picker .saturation-lightness{direction:ltr;width:100%;height:130px;border:none;cursor:pointer;touch-action:manipulation;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAACCCAYAAABSD7T3AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwksPWR6lgAAIABJREFUeNrtnVuT47gRrAHN+P//Or/61Y5wONZ7mZ1u3XAeLMjJZGZVgdKsfc5xR3S0RIIUW+CHzCpc2McYo7XGv3ex7UiZd57rjyzzv+v+33X/R/+3r/f7vR386Y+TvKNcf/wdhTLPcv9qU2wZd74uth0t1821jkIZLPcsI/6nWa4XvutquU0Z85mnx80S/ZzgpnLnOtHNt7/ofx1TKXcSNzN/7qbMQ3ju7rNQmMYYd/4s2j9aa+P+gGaMcZrb1M/tdrvf7/d2v99P9/t93O/3cbvdxu12G9frdVwul3E+n8c///nP+2+//Xb66aefxl//+tfx5z//2YK5Al2rgvf4UsbpdGrB52bAvArXpuzjmiqAVSGz5eDmGYXzhbAZmCrnmzddpUU+8Y1dAOYeXCtDUwVwV7YCGH6uAmyMcZ9l5vkUaBPGMUZ7/J5w/792/fvv9Xq93263dr/fTxPECeME8nK5jM/Pz/HTTz/dv337dvrll1/GP/7xj/G3v/1t/OUvfwkVswongjdOp9PzH3U3D3zmWGnZVXn4jCqs7wC2BKP4/8tAzkZsoWx6XrqeHZymvp4ABCBJhTQwKfDT8gzrZCIqi5AhiACjBfEB2rP8/X63MM7f6/V6v9/v7Xa7bYC83W7jcrlsVHIq5ffv30+//fbb+OWXX8ZPP/00/v73v4+ff/75JSvbeu+bL2WMMaFbAlpBNM85QX+ct6qoSqkPAwuQlBVKqGNFSUOAA3Bmu7gC5hNOd15nSwvAOUW7C4giUCV8Sgn5L9hNFIqTsp0GxI0ysioyjAjkY/tGJVEpz+fz+OWXX+7fv38//f777+Pbt2/j119/HT///PP49ddfx8fHRwrmTjV779EXu2px2xhjwtdJZQcAWQIPLPISsMJaSwiD8gzIKrwSyATE5j5nAbR5c1dBUwBlsEWW0h6LqiYsqFPAQxCyRZ3wOSARxmlXMX5k64pQfvv27f75+dk+Pj5OHx8f4/v37+Pbt2/jt99+G9++fRsfHx/jcrmUFLO31gYDWblxRIs/TqfT7ousxJsAxXA2Gc7TA9XdgfdoHbFsj76X2+1WArgI1ageGwA3qupqoHsmcbI6Fu93quggFa9d7LeDtgKfAFHBJ+NEByIkcJ5KervdTmhhGcgJJSZ5vn//fj+fz+18Pp8+Pz/H5+fnmGD+/vvv4/v37+Pj42N8fn6O2+1Ws7JjjP6wraMI5E4RZ8x2vV5TSwkquotV7/d7Tz6HFWsD/qNcdw0CQ3q/321c686TwDVIdbuy73zNldhSHb8I2klZznm+InBS4U6n0302aBFsLhHDAKJVJVglfI9jhvu53W53sLANYNxAiDA6MCeUHx8f9+v12i6XS7tcLqcZW57P5yeY8/fz83Ocz+fnsSmYUyknWEG85WBst9stzSLyMdfr9Qi08iY15UZ0LlDGLhR3o5zK2j7OPUTD0E+nU3tk7Xb/16NFbhloAMuY1zjLUOO3BKeIDe+Z8s3/J4gFo4TM5jPmuRg28foUKKVSwo16TgA5npywcWLHgYl/Pz8/73/605/ab7/91m63W7tcLie0sZj4mao5gTyfz88E0f1+j8EcYzwTPEG2cqjyfHNF0M8fuqEiaOVnRzZZQNh5fwQyHg/HDGfJo89Q1zb/quu5XC6773I2XKfTqd/v9+d3wuqWva/YTdUdEV3fhIv/Viyps6YE3x3r43K5bJQS66zaxVGFsvd+//j4aF+/fm3fv39vt9utff36tf3+++/tdrudvn37ZuNLBaaCMgUzC+rZRiFowxUuJI8YMqcCp9Opq5vagaYU6lGJA1XQqejchw6Cj0Gw5nYBrGw01A2O206n04BGouNNyTfp/FwElhUey6nXrIKw7QQWddxuN2ldL5fL839gSPF8ahu/JvBO48CPSuqMf8Vp9/P53L58+dLu93s7n8/tfr8/39/v9/b5+TkhPJ3P56mQ436/j+/fv+/iSgbzer0+AZx/5+88bv6OMda6S5z6kd21fYC9dxv7cIJJ2d9AOS30fPMzyHiTM8B4DF6XUlYHp4KQW3W+1t77MNB1vGHxWq7Xa7vf78+y5/N5A+H1et29xuP5dbYtyaRu4AksbPq6936fjRzXRxBbPr/b+b18+fKljTHaBBBfn8/n0/1+H1++fBnn8zm0sB8fH5u4cr5GuBhMVk0EEn9RsctgVhM+ixlJtMA23R8B6yysAstBOgFXIKKCMIgToMqNEu2fYMH7ztc732dQKkCj1ytAZtY0Kx8pIr8GGJ+AT3V+2Hirhl++fBmXy2Wz73w+b17P8p+fn8/tUwGVleVkTyUb68DkfayWY4zxNRihU4EpLJPZVrK+u7J4/mgfKqeLW9X2REWlItL1diynbDDb3+jXgYjQqn0rrxWc+NkILP7F7xIbMvx7vV53x40xnlbWJF12ZSag/N0pW6t+ZzmOMzHjajKwDfond78zYTdfq18up97zr2q8v3IioBprRtBl0EZ9og5WBRGOdOHjIjXF7UotFbgOWnXzIJyzYvjG5IYgsmMOxHkz8OsMSrVNWeq5T8DaOcbEv1Od5rbs9aO7YvMet63EkF++fMExq+MRl4/L5bLZN/+ez+fnZ6KazuMqXSQVO5spJXflHAIzes/xJseckRJiDMog9d6VfRrqXMr6KpVV27jRwJacGovOAM1zMdQMnwK1AubK63kdCChvI1C7g0z9nf/D+Xze2Vj8H7Gx4P9duQlsYCrqyN8XqG3Hm/10Oj3jw/n+crlstuM+jPmmxT2dTuPz83Pzt2pn1XsEHX/bnPaVqVmh0xwOt0o6XLLAHePUU203wHfcrspCwmV3TryB5s0Mseeg97x/BwzCjBlbB+pRAPla0BVQuT6V6QHdBlj3d0KG147b+DqxQeUymDO43W4dQar+TIjwmAd0z8/h65vf0/yLv3Pb5XLpru/ydDo9s7ET0I+Pj6dKK9VUEIeKWQWPAOrJ8LKd4vE+t91Y3e7UFlWatg2VwJnb+HPmtvm/sfK59/OaWF3x/eP1UPHvA5DDYDpYXfb0drv1V2DkBkxtw/tEWVVlXWdC9pFYs5/jfh9dS/16vW7s6lTG+TfqsxSJHxkXXq/Xdr1eu4LsfD6P3vsT3N77DkL+zPm5jSdKL4zR3AxQd6rHkLkYlSowsrq7znzu6wSwdsMJOXmA5fBcjxtgMGBYHlr5zokhtsMCTgXLQOW4XC6dEyEMprL8mAQzXRgduix2yZzorxkYsDn3hB1VeMLGsXsVtgl2pW8S3svk0vw7R4hNaHvv4cACl5HFzwIH0Kc6zu4XjDPR/jpAVxWzO1Xk2DDb3vTcxeGU1iWZHkmIDWziWKvirCJ4Dravs6IJ/GG6cTqWdXDy+fArQDVVkLqkVjAoZIITdmmIqXwqa95N3+MGYoZQdRVNO53Y1xRkhO16vY7eu507Ca9lJnbGpxOemQhSw/AQsmmp5zU9BiU8G6wvX76M6/U6Pj4+do0Bz4CpgiknTUeDqwlKBmg3u4OVjrZ1A+rAcgaejWq6eJCvCYFDONSwOgHX4EQRw8lxbzDOdEK6gZ3Hk1b+8g2o1JFtKXyv/fEdTXuWjWXdAZiBp6ADeDrCFiim7B6ZFneeI7Gvm/PMkUDX67W7xI8b0D7/v8dA9qfN5oaCf74WZjH0mf1cmfY1Y0JUFmVrTWu8uzkNcLtEj7u5FXBTkfC6GOA5q8YMxO8KVvF6sAVGdcrUbsKODcQKkLMOMdmlxum642YrPm26AlhZW1YB1R+rrGswE8TaYAWeUMxdf+WjwSvZ2Ef3ytOyfn5+PpVPAaqOn43MtNBqvmjjxbjM4lZjZY4gqNMI5ktaW/sYKNwS+9lFQzGihmMCKPa7+Z0V6Eb0GRmobtpX8JljWu5FMLN5ja6hG9kwQgZqf5+1NH5UxzkFReCdWhJ8XdlGUkxO7HRlYRm4mVO43W7ter12TPJEw/rmEN3L5SKHIWZg9mz+pUoKOYq5bJTJdX2gme1UcxMZQFaEQIlHct32M+Y1BzGkGuzfiyAN9z+ugplZ1symCrDCYYkGxDTpI9RzBy0rHyeDUC1nWaeUaD9n4xkNyYMBDZtzZ3B++fJlY21XFDOcARJlabOyiS3uCpLI9jrZjCDkaVvcCCjwognKShWdzXZWlZMvVTgD8LpqlCLrqgbcB+qYwrgKYpT0ccCqbKyCValkEabn/FynogCrPKfqf51xJ7sGB2ZXcZmxoSOztjx300DZi7a0/2AIR0UlBag9SuDw6KcAzlaB7vHZvWpjK90dyrq6bKyDUZQbR0B05biLQkHIcSUmgIK+SwuqgHCnoio2RQU1yj+BnBy9pphVKLGyC7ZzFK1pxWK+E8IhVCWLN/uLtnUU4ayoYLoaANz8FdtaSvY4pV0BEW2ls61czqllBKpTyKgMAhrZ1cdc1RROtPmvWNkdcKZ7ZKxaWjiPLJMpp7OZKxA+rqG/oJLjxf0pnJlqLoDZo3gyU0mKGys2taKecj/d1C+rJSplBqlTyAqgR+D8KjKlmRL2gtUcAdCtsL+ijCNT1oqqqkH2OHEbG5sDFnUg5Aa+yLou2VU1ptj1S2ZQqv1ORZN9IWzRfgaRBxKoBE8UWyqlJFtrIc0AxNjSjed99CTY/XDfSzCz5M0IZoVEsWnPFNTsl8ooVC1TzbGgqFZNDSgVwKK+1sGDMKqxZCWGVMDysiEr1jVSQJUYwj5iHOlThdHt44SQg9CN+nl8D90NMIgAdgr46JqRiR9I8vRdFvbr17m/yxUMKjNLMiVUADwu2CWGhhi+F55TWM9M9cogzms1dnM4uOF/LAEYWdcqnM7yFmyq3IfwmOROd7Y1iFWtOjoY8To41mTV5IysgFFuRzsbWFGbNIIJCDv1dOo4lZG7jWBwRFtVTKuWyeCByJKOan8oZ3ep9XddNl0tDuaywLz9cXPYeDAA0SpkBO9sbVcTOVWldPv4uyzEkzxHtjvonHoSkFEWNoo1d8DhcQputd2ppNon4BzoAiJ1hBFQg0dVtdbGHHDQWushmNEQukLM2QO1G2Y8bgTXqFhcBJj7EjPgcPts8US8qPpPB/dXznOh5Z438tzH5ec6QgrOKrRRfKmysBmUDB+PhYabMlVPER+GCSITTzr7am2tArH3bgcEzPJm+cr5jJ4NnHNFDVrFXcI5Le9k5Jnw+bedbV+FfRzZIHaOOaOsLY0/7UGs58DjrGwKMIMFIGzOEW1/jGsdAtCN6hEAI4hBe9YXeRROBSVPAVPAqvIM5bx5hVKWAMP6zBRy3iescridVdFBinBxXDnG2GRY2XbCvp1lhvGtO9Bxu5h908XQu42lnSArMFdizMim8uwRCxPGnnOS8lwpnbOiDqTAjsrRN/PcoAScCbaACqVM40ylnjjTBs+bwWlAG23/UKbdkiwKWIQPGzWaczpoSlxPEj822cNWkpS7FyzsDrqpfgpG3jahw2vgbaSQAxuLWZYt7JzyNe8JoZpNAcvDFOdw0wqYT9AK1rZz/DdbSlLPp0ryIxgQJlK9AZlEq7IOXpohg9PIhrCng88JsOxiV4ZWAYfg4sikx/8ky2Z9l862uqwrfscIH8+ugTmVGyiddeVYUgEMn4GZzg14EwIsh9sx2cKKiWXReuOE5gzGOQgdlRKVVdlevqb279Xq0Qnsts2VDaBO0coezsruWtHApu6sKG4IBhN0aGU2kLrMKGRTN3HmbCDwKV14zvkMEDG4QfZVspVlaNU2mhc5TEZ3N1h/zqTheuLpW05ZWTGVjb3dbnNmxKZBnN8JqidaVLKAOyARNLS+MB54Z2+VaqoMLKroVBlngefnTPAcoHNWCSvlfA8CI0HEmBNBnBlXyMrzU7A7WVm94PPqQ2gmqKx+WDGsnvilmcSOBJqOK1nYyAIzuAyesq3UdSK3KfWcYKD95HmfYOU3qser2CtYEUA+FpfqdNvgPBZUBhDrGONRVlQsh8rLcaUCykHG0OOUwTlLBrsh5soEMGezi1E4HRVt1icp5wZEFXdibCkG8Y8vX75sbO4E0iom9z+hjSiOfy3DhpXItpVhE+UGQdvoWjtChmrGHf4YAzKgBNnGtuJxFCeGdhUAfQLLK8kBYAP6gvFJZajMG3Xkycy8KuC0q4Eyymwtwdxdv2M0mIBtK0LKnf640j00Auq4gUkdWGlhs22qJc6dZCsL19oxnlTJG4SYVRIGpD8TPFBuM6OElbS1pldid4mGAyN6ZIupbC5bXJN9fdpbThSxLUaI8IG1XIYBxW3Tjs6KQosKcxfxcQmdnwRGM10GnFcCy2XYunLMyAkdgk4mePiczsLygthcBut6goOqS7YVFXADLjaosB6s6ofcZWAZSIRYqSUkizYwttYab3vUOQ9w2HRxIIg8WwRVeE68xi4UtL3zRphxplzwuZrcqYCq1I3jPI5dnJIygEohMbPqVJSzrwzxBJTs5zN+ReUSgxikPQVF3JVBeNQxbHENrEMNvEdFZVV9lH9+ORGEsNZQpyTNc4C3AG7XF4ngzq+DrO2zbuaaOXgdaFcdkEotoSFBVX2qJ0C8OWZeG4KGlpghA0XfTOPCqV2qqwQ26QWfF2PMLhI2w1lVAa2aPsYd0za25MQRwgcZN6uQDCi+ZxiD4XEM2kZxOT41FnZnaRlcpZouzlRqqdbQVWopQoSB58RV50lBNrHi/AwXS5LrwDVlpY3Fc3ByiYGc52Trist6kOXdwInAQtJpp5QchyaquYOV7Su+fxVMaV3dc0RE2S6mUY0gLt2pMcYqrKIQ9w2l1gpQUMtQYcmmbt5DTNxdhnUCjQqtbK9SUSzvrC0mmhhE1e2FS2+oxypy/ZASutkmtjx3vcBC24PX65nbqkBCRhfjS9kIYPnee8cMagVOhI/3T1fAmdtAWZsCswTJCkQVNa0qWKSKPOpHAUhD9DrbVcyoYkwqhvh17vYAayXLQyKGYdxlUDFp494rBXRjYgO17DDYetNIUj/ezp6S0lnlpEwsWmJMkOwsKXeZKEAjIHn0EQJISaRBcO6UMINz7p/bEjjnw4ft+xmDvksxX4G2rIris7qaeKwAFMP2Oi7n4criuZwtpSUwpfLxSnORSrIqusc5ZFaXysqRWjiZ2DyAWEIL35tVSoQElFACjOeGGSE7AHEQgdo/LSvCOgGBvkxsmDbvlS3Fp5vhaB2TAGqRKrKKMrhLVpaGzEVjZ0OQxDhaCTA+QyRR1d15aQzrJntL3RibsipjG6jlgL4yqbS0sNYg1e84vhbBVrElK64CUcWYXDfKxhpIuxiVJZUxsbMy/uRBKTNRQ4kQ3LdRYLS0rJjRPlTPqY6gdJsEDc+aQXAn+HgsNUCbRuF0Oj0zwnA7bWDkbhO5Ens00qeQhS1laBMl5M/cAaxsLF8rKyql+Tf7ELLEGu/ixiimdCvo0TjfpjKwaggen4eh5v7LokLKbLuyvHhcZG8dhGrEDx7Hg93ZppJF7qBqO3iVveXEDQNInzeoe8Yq6ePaZBZ2JviM3W2UAGotekRCAGq4EkF1X3DOnR11yRsBL1tRa0PVcZiNFXZ2c34FskvomInQQ6lzpJoZbJxk43NwKJFBquJSsrByHydxKOnTxQASBmS3j+JMnsHSla3Ec6K9VWoJVn9zfjwOM7hqYAAqJQwE2a3nA48J2QGegRkpZNivSY+ys3EkKd4oJIwsvIHl3cWgLt5k4NH6OmtLWdpurOkwEMupYc7eMtDRhOcI2ui5JhVIzXzLyto/GAPuZoyo8wkoduVgJglCt7OhGbgID4Mq4si+63zUS1FuFFXFlqyaj2emHlLMcBqYu0FMuR28BbB7lOxRMSiCQXFhCKuwkhZ+pYDiGSgbsKKV8MiSRsuHSIWM9rklRiIlZZuqXjsQK8ooYJMgq3JKWVkhHbhsVxFUzthOWPkYijcbx54IKsSdT+uLr3crGKyoYgFiGR9iBk4kfloUX+JIlQRQqabmpgnhqtpQpb6RVQ1WH5DnrS4hEoGZqaerQ2dhFbz8XePxShmDbo70eISjoorO2vK8SJXI4SUmEU4zWKDzUDtWTYw7xXlbSTEj4FRg7zKnKoGRALv0Gs9Tgc1BpCywGZRQAtqVz2xrBcAMzEpfZwFSa2G5W0QBFjSMapWAEFa3HcGN7CxDzECyIkJ97qwrqWNTWVo876PPsjPkj2wvgroM5lLZKMETKVql/CvnWVFiFa/SzJUQwkoZsr67Y6vlSRV3/2tmNTOY3vnaxYwMuoPKqdzR1w7IqHymlPxaAThfU7Ko2ZXYj4AYJHL+kNdKwRQYESTRa5fsUZ/rVC1TMTyWVyYoqNtuzaHsMyv2tvoarxdfqwYgU1axFo/cnql1FGsqK+uAROV8BX4GU8WcZTATi2q7Qcyi0O0V+GhWBMNRUkn8H1SsWVE5By3Gi0ECqUeJoBfAtDa4amkdXG37AGP5Ggeb84p7UazpoKRzdFzeQ8HkoHGxprKy/Hpm5t12p47J6xTYDEz7uINEXSuxYXvFskYAc+ySxH9sf5ftKzU6IbwVBcUGg5e5FMCEXSErZR0wGayV19woM9guPjTqJdVTqR4uE4nJnLldWVkECCZLd2VLF+xtamex7IpiriSDUpvrpn9lrwGMCHyppMH+ps6LILsuFGUj1XEOXiqbqSHPUKnClpWV68kqtURVNDY4TNaocykoYeTU5ngGEQa/S1DnnE4AeXMcKjHPAmFVjCBENaeyLVNHfr3px8xUstJ94hIpfH4HKE/eDaArK6lSyVVFbdt1gxTIVk3pppVlFXi4pEhVBTObquohU85MLXn1iahvUkHJjSCMc01tLFveVVBx0DodM6jftCu7DOtIzYxrc0qp1JGP2ayYFz2Gb6HvMrO8cnGtV6Gjm3uImSfD2GpWK6uowbZGMxFKQCo1pOMtcMXFpRst+hXGoAomF3sSTBGgTglbBKWwsQ3tZqaYSp0Z1CimRDWFcCJUPYJ00BI5FkKYNoifuQxmN88SWVXWLMaUqqqgC0BmQJR6sk3u9NCf6jYLXxAfqsYEgVLAhRY2AtgtflZNFmFyhxdrLkAdWlk4D88M2ixHyepIdhMHrG/iR1ZGtq0MGpbDbRPYOXeSY1M6Ny4ZstvGSktK+XbFPATj2D371saPEsAMXhXrsZ0km/XStkhhMyBfsa6uXFZe2VCe+YMr1+GKgwrQyNYq1VRrB+EizAow6NsdNKcyVEkYeM73ys6q4kAHp6BiFklTkIrVC5oYV7uzwOGCz4UJ0Stq2lWMJy4wtb+RetL6tZFicnJmBw5UjCvXXMZVJX2MQkbf+XN5EWd78Vz8/JEsMZTBiKNzsm1inLRUQ74H4NidaqI68j5sAFgxcRveC7ieLJXfQYxjZZ2CsiWFewZXJmBIlZ1tdtrX4hSuateKso/RZOtOKW2nmq1oTzeK6dRWAWu2NRVb4hq0SXm1GvtugHrbr5IXqmSktg5CuDE2MSlPwsY5kNE2Wp3AqiZbWVLAxiBF+2iBZbuNj6MB6rsMLC7FyasaYDyo7KkoPyEtw3pEMXfPvxAJi2jAQQgjrz0rLIZSWZlIoNhwd5xK4AR9mYNjWAaLrnuImJeBVN9zBORObVvbr+mTTfFSEJLSRnHo7hEJoIi8MFqjxmvgmF5URZz4zLFgZZ8Ctu2X7ggVccKm9gVxIsOHqxXgNMKnFWZYnf1dBnOhayXq17QwFlWW09eNKyVJFmXqaONGA5aCegMbJ3UUkGY1ic3nKWgjq8qfVYGQG1gRt6rs62a6HiqqUOqdesK5NmX4nGofJoiE1d0dF9lVVkvT1/kEEaaCoYOwFpcVcoLM+7669PxC9rWqktH0sWUYld0VCpuBZ/stVRcGgy9WX2+U1Qthi9SzAqSxzZsy+OiFzBYnySGV6Gku44rD8BCOZBV3BvD5+AKRHNwMEsB6EzHnJpkTAeiUlEGkcECeB6GDZTp5YEJTlvdrknxYjTllMkfNtXwDjM7uVjK5JXUUn43rrqpK2jytaxHW0M5G8DC8rtHMYs7KSgduVQMGTYFqFvVS6rkD3sDJ46afdYFwoq11AOKCBLhvwoUgc8IGANycR6knZrdJPdsuxnyjfd3FovTlRMdEdtOl5CMV5EHsXQBis7TOwvIDZaGj2Vnpbh7cpK63VwYEMLwqbjzyl699sawFFkF1yqjUU31HfC6sW1ZFVFuXVXVgz9keEaw0ys1lWfm+azQAQSWA+hKYVfsZjPncAcUB9oIayy/UZXRNckDGji77GsWbvBo6tPrWPqOyVkBUq+INeqpzNdYs/u0ifh5qmpqIW+33JVSUcwY70KL4U9lYdU6ljtSls7lmfi9g3YzeQfVkaGFaV3ODCnaD2N8wsEDFklE3RzM3ZghdYkWHsszq70FIecnKkVkt8ezMzRq9bkGuKojRLBVSod3Y1yPqKgYW7JRQTPVyy5xIYLjOgxgT52RKJUY1dOrIiRd4futQx/A5AcSmEjz0vFWrkLzvbWAu9HOWbGgxFk1VNTpnBKk6TgwisI/HcxYXP1uAWO72ULFlBTq+aSu2VTUs6hrxM2CF+hEor1VIA9ZmFUaab1lSSgZsVs4sxzHlVLoJHr9H4DhONTkI1XC0/wiY2NoWAG5RlnHFnq6oLccpQddMuJ/O17JVA5OHLi0BqCztq7Y1++ucCd98qLI8MIHBV/cKjxQTme3hFBS3MyCqnDsuym2o80HjvFFTtrURmNaGJsmVahImjTsUXKtQZTAVs7Mvv8/+fzUrZAXcLJ6M4koe6XP0b6SmWWNDzyUpQ8bl+LtWx4tuqZ36cRYV3yuVxPNwvIiqiQCSmu7srgTzR6nkyhpCarXwFy1vGd5iP2cY06lFr5Njhhg1Y6+NB28ftbK83s8rf7kLJbKwDFPbLg25a0AdZJEiqr5phixKMDlRUtcssq1hriLqGoH+zeNgVm9OemjsETV8JdF0NHnkIFxWY1OB4Yrp7rtWJ7NgAAAPXklEQVQ3oNs5nplyVf8u2FoLu1JrHveaZWQjqAkshtFa2gzsSG3Zpkbvg3HafF9slPPlldjFlK80Gysm8Mr4MPhneNWENPGjAIpmilTPATdTRTXlCBYHYAQuPwA36xIpWtGN4q3Y2MhiGsUpuSSnlEJRD8PorC7CFYVw+F51qThgabxsTxWzCGY0ZSsb3lfqAy0OPNjNy8xiQQKsHYFQ2HBZVvVbBuq3m1oWKajqaonsM6uZUr6CjXWNZ0l5E3h3jURma6kP3MJIiy1Lm+kahQq41N2iZja5sjtlLYNZHZrH6qUGm4vMbDp6Rw2CFmvuyFkrBcCyMtFqBaECmsHoK9BZ2LA/lJcRqSaDqnaWbrZdGaz3DLgIvBln4woGztbyJGqslwxkhhHrTjTYFXCtOoKS8uLdofVdAbOylGU6nlYpXWZts4nXBq6WxJitMNokHUJnbnJplQm+aGpY2a5GMV2QD1hRubBPFKdumf5OHkLHz0F9luE5kjBjRa0nFE5CUGqHw32MmjZ6xkgINVnSnZ1VZStK2qKlRaLlQgK7uTq7JFXJwM+3SOEKyhZNI+tJ0I5qMYy9k2qJD7dVWdqKXa0CKNR0Ccjg+B2IYu2fcBZJZkMFgM11r0X92wilghFGgzVnexlqB7xL9mS29SiYUVY2nXOZjNBRsyDsQPRWW5hrZ4XcdC4HVWRbjgJr4sFofK5SzjQ7rhI1UebdPdEbj6sqIvTZQZ5va08rABsAW0UxeWytAk7A2KJ9ZpxzCioB24XFtYAeXYxr6anSqhLgppEqWbGwLunTgrV+IjWlL29ljaAl4EQMGsErp4apeZiquwRXLXAqOCeru32mmydc6oWTSWpFAGdzeTB8RTHVMEtlM90CbbQCYhPjq3egYr1FGdYIQjiuDGZ5zZ/AzobKGOyLxti6c4Rwtv2anyWlLICnlLhxJRXt6A5ebDBWFNONbxWZ2d02mnu4S9YECpeppV1zSWRBWxHYzVIv1CXSouwqqX3jBBBDZdYQbpTQW4ZQlS8r5kH4suSRmg2++3JN10x1PaAmEkmtYlEdeGpJEM6kOuCqCR22oSujj5IV2HdT0zj5prLKTjXFAPjdQlyq7xIBxAQP5yMczG4VxAKw0n6ilZ2QBce2pLulkuxxqnoIzFfgqyqjil9S1VNwBrFmeyeops8yOjZUybZdfS8CuaTIJumzs5tODaNtLpFDQ/PcJGweLhmeL1nB0KqiUDScsiUVD89Di3HtrKtSULw3RLiygZD+7sF8JTObgYsrGvDNUFRGl1iy0Ll1YkUc2aJYMog920I8qW6YDCg1Mqk0JHJFKXkbgbRreI+qpYNOZHrVcDUba7pjsphSJNtK6upgRNAVoOS0mugBeN4bIZgHhuPZ/s1ENaX6KsVr+YNrh1Nb7ipR0PE5zbNRegCbrHRUw6Yf07dLBJl1f8KB9as2V1nNqAsl62LBBhehwalerkHmB1JFIEZKSEusdl5JQj1nJlHXSCF342gJ9CYGrXelknJIXqVP8sD+qtplCR3XH2qfKq0ygMp+KnVkKxNlZ8m2YkIlVMiCnXUwl7qznBKSvQz3m3Pt6oQbXO5b5FixCh/fHxUQW/AEcK6zCNqKQnL9sywqmKuwvqSYzT/aPVNNpVyhvRW21aqciCsjdWvBwILUvh5VyCzbWoC1pJjJ680CWsl+udKB6T5RwG1mlohnlpbg47iz5U9ha0FGtmRLFYBtO99y97Ap0z+ZDTAog6kSLZsMHg/IFkkgp6CpvU2U0cYVSdnmkjwBdOmXbxTWNWzuIbipMioVxEckZEoahSOiy2M3K0jcC1LhVDwaqG0ZvkcWqCnrG4GIxykrqlbWdw6LQyBaZR8HmLRIhQWsHswD42ZXVLNkf9l+FlW0HVQ2lwFsC/Z1FdzlQR0KaPfo+Fdfu+/dwVRICu1CGR7AEIiAhc+AZUF0kOBaPxmUqg4i64vQnU4nFDYJ9Nz+1fVXveH9qmr+kPILx8oKcRV/BFbxbE0JMT0kSD4w6L/lNY8ocsqagVdU3A3MjxhxcGuqzsPH4irpaow1q6OyrVjvp9Npc59E91LldboYVzJWdimWfAW2SNEKcDaX2FmBLLA/uKxlmhh613Is1URQApbKfttwxL02q6Onx5pQxSbPojAg+v5hAnN6LHVRDXIsvKtRjiS0qJUyZTAXVbAK82ElFJWaQdVoqUC1Unt7BVaTQudM6SuqexjQJN4+0icaxv/utbKv83ETbT8H8gjcOKxOJmbUa6OOVXht3dFY6rHv9XoNzFLceEA1o8+pKm0LAHPHZ2rYKjFq0hfZFixsqHJgD3eD5n+U0kb1mFjXkn2lvMSSOsNE/CdIAKF0Sytq6urOHUN5gwg4GZosgbmggM5ucra2qrS2Ig1cbiBBcxYzgzUDNLCvL8GbZXNp6ORy3LmS+Kk83zRIAK6A1ioKa2I9NapIuiUFdfC9766PFZUtqUr6KbWk+zZU1a/ZrIXEztrjTOfz7hwKziCeXIaraHtbZIMz+2pGgazCmw4qWAFvEdhodYp0Xq0pV7G1YWYWbO4qhGq42+Z8BYtrLWvluNPpZAeaFFS1vubPgbgxsqcpnAaszBovKaFoDQ8BGtjfUOl4NAG2nmQV04feJgumvX2fsrQEWZghL0JnVdYkn3DOZIeRN86RqPWCmsvGVqEMRnwxQAxwS8EMYo3IzmY2+BCcLp4MKiuyuhImamlbZFcNoNl7tp+RHd18ZjQIRKyXdFRhN98/hyKqwXWNo7O1wiaXoHN108REZZWEq6grnIfjzeg8jdRf1XEL4kkXa5bBjKxoKaljBjeHlVxQ4GaycpW4lDOAKtnTxHAtOfzOtZwHAM7sqVXkV6yu6kap1nHkXKqWF/4XHqjenNKqBjpR3l1ch3Ejg1+EsgdQhsdG0B4FM9sWAVWpuAyiwTPleZxt9VyZVS2qXfReWqTAilpr9ApoWTjxymit7NwV4JTriZyOA9B0k7HFfULourmKYHVnRQvqGL5HMHdqFcR2qWpmcK6eTwx2dipWrviDilr+fKWq3OWRWdHKwA4eu8wjchbeRzFilqjjZN3ufCpfkJ0/scVpnYk6L0PI77lxdWCZ87WiWm7B/AGquQSnujGKsB8CJmiJq8q1pKIVWyqOiTK66r18BN8r74/AE71fdC3yPS2MxdOpnE1tlVxD9JmVOoggN+r4PjAXVFPa3Eg5jVJGFVUGNolH20GVrUB7BOySWq6WqYQdWR92pcFMYMwckbSgCKCqD67DiiWu1g8MQC9ByfcFqW1L+jL714qNCuznoSxt0da2gtWN1G8F0BK0NN0nuimelUF9dIdAfjO44UT3CjQLoUeLHJFTO3gmpRuIIOvwBQCbqNeo3qtZ9iF6xVK13GRlo4zqimq+CGdTiR1uRY8oqgE02hZBa79kZXPMquxRHKla2saZWN4mRqZUj0vLCKhkjKnqOQHNuSZVJoKvAqS1wpEquvWDC1B2ypwrCPsRMEPVTODMLJMDv6qeKXwi2JYV5Sq4qKyvgGsHCLiuj2jR59V8gMqSJ2FJZRXEHVRHj3sFPrct6OpqlW1GpatQdt0GvwfM6n63InsGVFhJGaBqgqqIV6IsXllZgySPq4R3bnt3wi5cv+cN2yqQLW1T95KYVsWWtKk4cB9W53WQQflQYR6Wl4HaJZjvVE0D5yvq+RKgZCs5qdBEP5sD94cAvQLlSgNaSMAtHx88BuNQ41zdFsX30zKbcs0MLD/ihkpQzl0wiTqKLTfbKmCmyYICnK0IbaieC4CG9iSyLQ7cIMGQwau6TKoq60Apl3WN40LZpca1CKKK9VQyyIEn8w0F8F6CL2h8o3ixGwC7s7EWzCOqmcApYxYD4jsAzVS0sl2t98pA7vrKophCVSonbYpgH6mvSn24pTBV4sdtV3BtMq5k82y+IADvUJ0uAlkCVTxIaPm+UNu/qkV4F1TzHXCGrXIAqItBKypqK99VtAOVs64O4ObX7pHLVCpYHcRmwvLR7TvYAKBBN58LGVzDuFz+hQbWgncQyCZAk+VbsPSouf93261iZgmfCpwRbAvqmSqriU2PwhjaoOyYqtIegVXViTsmyta6bGySpY3gyRrpIyAeaWDDxtpsXwKyalMDKNP7YBXMqEskUsi2uC8FNAPxAKTVfT1o6VzM0E0jF+1rWcUuHvdyg7vgoFplX8HpvHpMCOMRUPHzZkInsqlFKNX/EIO52E0SxSzOwob2VmRLW5D1XIU0rbgM1AzWgyC7fe8G7xUAK/taEBat7luqtyP7EmsaJQOj5F+mrnZfCuYCfBUAWwShyd6pMY/vAHG1UqOYpbI/gy5T0CMKm+UO3gFuC85dgfDVeguPDfITrIBLsLrcgdh3CFgFZjaKJ4Iv3F8ANEqvuxR1tVKOgLoCa1jxboBAkj6v7j/icFbA7f4rfRnQDLRViG13i0vqBQrYVqBbADZT0ZpiHoSzvQpopKIFS3sE1HfBWlHXd0H7LnArqvougMtljHBgZnh3Eoz/BKjLML4Z2Aq0+hEJr9jaVUBbvNzCIUiroC7AWmmFw4o5AK3MtB5VypZMSFgs05JyGVwlwBqsEGAAa2ZU1CjUexXGsE4rKriilBvFzOKKo3AuAroE6QFQU3u8YpNXwS5k+1TZt5UrwouN4KiUEw+k3ZWDp1RXHNRqXb21Ts39945yZSg3VnZFNQ9CF3XeZyr5DgBXKiwCMa2MxeTDYXgP1Fsf9QNKZc0k81RJk3r6EQ3rCmBVyLL75EjZ1pIVDHoFtiOAHoB0BdTVylqBsKKKS+AeBXJVLY+CXASuGvO/Auq7GuEjDfGKg1oKa1z/dmmi9I9SUGNhl0AtfulHAawoYrnSkmNXAVuGEhrEVXvUF+A5Ct2PqNOjDetyna4CmeUolmeXLN4Aq7C5Sj10Q7yjgl+t6CNxSRHmI5X+CpwreYB3Qfdqna4q21KdBuc4GoZsn49ZOOiVinwHqK9WzjvgeweEh2AU5+vtxZ9Cd9Wqkh49V18E5oj6vVyn0RStAyGIO5edXRKd5B0VGVXq2yr3xYp+5Ut+C4QJ4P1N339pQMjRejj4vb/Dcr6rQc3O/0rjmtZpeYCBiCHfCemRbNhbK/pNUPc3wfKy5f2D7OlL3/uPhve/oU4T0F8f+VNM2vyoiv0jK+KHQfdHq+0bncz4oz73/+Y6LbKw1o/5B7eOf1Rl/0du9B9tn/9bvrf/j+v0h6ttn2tp/r/4819y4/zv5391uvzzfwDifz6phT1MPgAAAABJRU5ErkJggg==)}.color-picker .cp-add-color-button-class{position:absolute;display:inline;padding:0;margin:3px -3px;border:0;cursor:pointer;background:transparent}.color-picker .cp-add-color-button-class:hover{text-decoration:underline}.color-picker .cp-add-color-button-class:disabled{cursor:not-allowed;color:#999}.color-picker .cp-add-color-button-class:disabled:hover{text-decoration:none}.color-picker .cp-remove-color-button-class{position:absolute;top:-5px;right:-5px;display:block;width:10px;height:10px;border-radius:50%;cursor:pointer;text-align:center;background:#fff;box-shadow:1px 1px 5px #333}.color-picker .cp-remove-color-button-class:before{content:"x";position:relative;bottom:3.5px;display:inline-block;font-size:10px}.color-picker .eyedropper-icon{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);fill:#fff;mix-blend-mode:exclusion}\n'],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPickerComponent, [{
    type: Component,
    args: [{
      selector: "color-picker",
      encapsulation: ViewEncapsulation$1.None,
      template: `<div #dialogPopup class="color-picker" [class.open]="show" [style.display]="!show ? 'none' : 'block'" [style.visibility]="hidden ? 'hidden' : 'visible'" [style.top.px]="top" [style.left.px]="left" [style.position]="position" [style.height.px]="cpHeight" [style.width.px]="cpWidth" (click)="$event.stopPropagation()">
  <div *ngIf="cpDialogDisplay === 'popup'" [style.left]="cpArrowPosition" class="arrow arrow-{{cpUsePosition}}" [style.top.px]="arrowTop"></div>

  <div *ngIf="(cpColorMode ||\xA01) === 1" class="saturation-lightness" [slider] [rgX]="1" [rgY]="1" [style.background-color]="hueSliderColor" (newValue)="onColorChange($event)" (dragStart)="onDragStart('saturation-lightness')" (dragEnd)="onDragEnd('saturation-lightness')">
    <div class="cursor" [style.top.px]="slider?.v" [style.left.px]="slider?.s"></div>
  </div>

  <div class="hue-alpha box">
    <div class="left">
      <div class="selected-color-background"></div>

      <div class="selected-color" [style.background-color]="selectedColor" [style.cursor]="eyeDropperSupported && cpEyeDropper ? 'pointer' : null" (click)="eyeDropperSupported && cpEyeDropper && onEyeDropper()">
        <svg *ngIf="eyeDropperSupported && cpEyeDropper" class="eyedropper-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17.66 5.41l.92.92-2.69 2.69-.92-.92 2.69-2.69M17.67 3c-.26 0-.51.1-.71.29l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42l-2.34-2.34c-.2-.19-.45-.29-.7-.29zM6.92 19L5 17.08l8.06-8.06 1.92 1.92L6.92 19z"/></svg>
      </div>

      <button *ngIf="cpAddColorButton" type="button" class="{{cpAddColorButtonClass}}" [disabled]="cpPresetColors && cpPresetColors.length >= cpMaxPresetColorsLength" (click)="onAddPresetColor($event, selectedColor)">
        {{cpAddColorButtonText}}
      </button>
    </div>

    <div class="right">
      <div *ngIf="cpAlphaChannel==='disabled'" style="height: 16px;"></div>

      <div #hueSlider class="hue" [slider] [rgX]="1" [style.display]="(cpColorMode ||\xA01) === 1 ? 'block' : 'none'" (newValue)="onHueChange($event)" (dragStart)="onDragStart('hue')" (dragEnd)="onDragEnd('hue')">
        <div class="cursor" [style.left.px]="slider?.h"></div>
      </div>

      <div #valueSlider class="value" [slider] [rgX]="1" [style.display]="(cpColorMode ||\xA01) === 2 ? 'block': 'none'" (newValue)="onValueChange($event)" (dragStart)="onDragStart('value')" (dragEnd)="onDragEnd('value')">
        <div class="cursor" [style.right.px]="slider?.v"></div>
      </div>

      <div #alphaSlider class="alpha" [slider] [rgX]="1" [style.display]="cpAlphaChannel === 'disabled' ? 'none' : 'block'" [style.background-color]="alphaSliderColor" (newValue)="onAlphaChange($event)" (dragStart)="onDragStart('alpha')" (dragEnd)="onDragEnd('alpha')">
        <div class="cursor" [style.left.px]="slider?.a"></div>
      </div>
    </div>
  </div>

  <div *ngIf="!cpDisableInput && (cpColorMode ||\xA01) === 1" class="cmyk-text" [style.display]="format !== 3 ? 'none' : 'block'">
    <div class="box">
      <input type="number" pattern="[0-9]*" min="0" max="100" [text] [rg]="100" [value]="cmykText?.c" (keyup.enter)="onAcceptColor($event)" (newValue)="onCyanInput($event)" />
      <input type="number" pattern="[0-9]*" min="0" max="100" [text] [rg]="100" [value]="cmykText?.m" (keyup.enter)="onAcceptColor($event)" (newValue)="onMagentaInput($event)" />
      <input type="number" pattern="[0-9]*" min="0" max="100" [text] [rg]="100" [value]="cmykText?.y" (keyup.enter)="onAcceptColor($event)" (newValue)="onYellowInput($event)" />
      <input type="number" pattern="[0-9]*" min="0" max="100" [text] [rg]="100" [value]="cmykText?.k" (keyup.enter)="onAcceptColor($event)" (newValue)="onBlackInput($event)" />
      <input *ngIf="cpAlphaChannel!=='disabled'" type="number" pattern="[0-9]+([\\.,][0-9]{1,2})?" min="0" max="1" step="0.1" [text] [rg]="1" [value]="cmykText?.a" (keyup.enter)="onAcceptColor($event)" (newValue)="onAlphaInput($event)" />
    </div>

     <div class="box">
      <div>C</div><div>M</div><div>Y</div><div>K</div><div *ngIf="cpAlphaChannel!=='disabled'" >A</div>
    </div>
  </div>

  <div *ngIf="!cpDisableInput && (cpColorMode ||\xA01) === 1 " class="hsla-text" [style.display]="format !== 2 ? 'none' : 'block'">
    <div class="box">
      <input type="number" pattern="[0-9]*" min="0" max="360" [text] [rg]="360" [value]="hslaText?.h" (keyup.enter)="onAcceptColor($event)" (newValue)="onHueInput($event)" />
      <input type="number" pattern="[0-9]*" min="0" max="100" [text] [rg]="100" [value]="hslaText?.s" (keyup.enter)="onAcceptColor($event)" (newValue)="onSaturationInput($event)" />
      <input type="number" pattern="[0-9]*" min="0" max="100" [text] [rg]="100" [value]="hslaText?.l" (keyup.enter)="onAcceptColor($event)" (newValue)="onLightnessInput($event)" />
      <input *ngIf="cpAlphaChannel!=='disabled'" type="number" pattern="[0-9]+([\\.,][0-9]{1,2})?" min="0" max="1" step="0.1" [text] [rg]="1" [value]="hslaText?.a" (keyup.enter)="onAcceptColor($event)" (newValue)="onAlphaInput($event)" />
    </div>

    <div class="box">
      <div>H</div><div>S</div><div>L</div><div *ngIf="cpAlphaChannel!=='disabled'">A</div>
    </div>
  </div>

  <div *ngIf="!cpDisableInput && (cpColorMode ||\xA01) === 1 " [style.display]="format !== 1 ? 'none' : 'block'" class="rgba-text">
    <div class="box">
      <input type="number" pattern="[0-9]*" min="0" max="255" [text] [rg]="255" [value]="rgbaText?.r" (keyup.enter)="onAcceptColor($event)" (newValue)="onRedInput($event)" />
      <input type="number" pattern="[0-9]*" min="0" max="255" [text] [rg]="255" [value]="rgbaText?.g" (keyup.enter)="onAcceptColor($event)" (newValue)="onGreenInput($event)" />
      <input type="number" pattern="[0-9]*" min="0" max="255" [text] [rg]="255" [value]="rgbaText?.b" (keyup.enter)="onAcceptColor($event)" (newValue)="onBlueInput($event)" />
      <input *ngIf="cpAlphaChannel!=='disabled'" type="number" pattern="[0-9]+([\\.,][0-9]{1,2})?" min="0" max="1" step="0.1" [text] [rg]="1" [value]="rgbaText?.a" (keyup.enter)="onAcceptColor($event)" (newValue)="onAlphaInput($event)" />
    </div>

    <div class="box">
      <div>R</div><div>G</div><div>B</div><div *ngIf="cpAlphaChannel!=='disabled'" >A</div>
    </div>
  </div>

  <div *ngIf="!cpDisableInput && (cpColorMode ||\xA01) === 1" class="hex-text" [class.hex-alpha]="cpAlphaChannel==='forced'"
    [style.display]="format !== 0 ? 'none' : 'block'">
    <div class="box">
      <input [text] [value]="hexText" (blur)="onHexInput(null)" (keyup.enter)="onAcceptColor($event)" (newValue)="onHexInput($event)"/>
      <input *ngIf="cpAlphaChannel==='forced'" type="number" pattern="[0-9]+([\\.,][0-9]{1,2})?" min="0" max="1" step="0.1" [text] [rg]="1" [value]="hexAlpha" (keyup.enter)="onAcceptColor($event)" (newValue)="onAlphaInput($event)"/>
    </div>

    <div class="box">
      <div>Hex</div>
      <div *ngIf="cpAlphaChannel==='forced'">A</div>
    </div>
  </div>

  <div *ngIf="!cpDisableInput && (cpColorMode ||\xA01) === 2" class="value-text">
    <div class="box">
      <input type="number" pattern="[0-9]*" min="0" max="100" [text] [rg]="100" [value]="hslaText?.l" (keyup.enter)="onAcceptColor($event)" (newValue)="onValueInput($event)" />
      <input *ngIf="cpAlphaChannel!=='disabled'" type="number" pattern="[0-9]+([\\.,][0-9]{1,2})?" min="0" max="1" step="0.1"  [text] [rg]="1" [value]="hslaText?.a" (keyup.enter)="onAcceptColor($event)" (newValue)="onAlphaInput($event)" />
    </div>

    <div class="box">
      <div>V</div><div>A</div>
    </div>
  </div>

  <div *ngIf="!cpDisableInput && (cpColorMode ||\xA01) === 1" class="type-policy">
    <span class="type-policy-arrow" (click)="onFormatToggle(-1)"></span>
    <span class="type-policy-arrow" (click)="onFormatToggle(1)"></span>
  </div>

  <div *ngIf="cpPresetColors?.length || cpAddColorButton" class="preset-area">
    <hr>

    <div class="preset-label">{{cpPresetLabel}}</div>

    <div *ngIf="cpPresetColors?.length" class="{{cpPresetColorsClass}}">
      <div *ngFor="let color of cpPresetColors" class="preset-color" [style.backgroundColor]="color" (click)="setColorFromString(color)">
        <span *ngIf="cpAddColorButton" class="{{cpRemoveColorButtonClass}}" (click)="onRemovePresetColor($event, color)"></span>
      </div>
    </div>

    <div *ngIf="!cpPresetColors?.length && cpAddColorButton" class="{{cpPresetEmptyMessageClass}}">{{cpPresetEmptyMessage}}</div>
  </div>

  <div *ngIf="cpOKButton || cpCancelButton" class="button-area">
    <button *ngIf="cpCancelButton" type="button" class="{{cpCancelButtonClass}}" (click)="onCancelColor($event)">{{cpCancelButtonText}}</button>

    <button *ngIf="cpOKButton" type="button" class="{{cpOKButtonClass}}" (click)="onAcceptColor($event)">{{cpOKButtonText}}</button>
  </div>

  <div class="extra-template" *ngIf="cpExtraTemplate">
    <ng-container *ngTemplateOutlet="cpExtraTemplate"></ng-container>
  </div>
</div>
`,
      styles: ['.color-picker{position:absolute;z-index:1000;width:230px;height:auto;border:#777 solid 1px;cursor:default;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#fff}.color-picker *{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;margin:0;font-size:11px}.color-picker input{width:0;height:26px;min-width:0;font-size:13px;text-align:center;color:#000}.color-picker input:invalid,.color-picker input:-moz-ui-invalid,.color-picker input:-moz-submit-invalid{box-shadow:none}.color-picker input::-webkit-inner-spin-button,.color-picker input::-webkit-outer-spin-button{margin:0;-webkit-appearance:none}.color-picker .arrow{position:absolute;z-index:999999;width:0;height:0;border-style:solid}.color-picker .arrow.arrow-top{left:8px;border-width:10px 5px;border-color:#777 rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0)}.color-picker .arrow.arrow-bottom{top:-20px;left:8px;border-width:10px 5px;border-color:rgba(0,0,0,0) rgba(0,0,0,0) #777 rgba(0,0,0,0)}.color-picker .arrow.arrow-top-left,.color-picker .arrow.arrow-left-top{right:-21px;bottom:8px;border-width:5px 10px;border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) #777}.color-picker .arrow.arrow-top-right,.color-picker .arrow.arrow-right-top{bottom:8px;left:-20px;border-width:5px 10px;border-color:rgba(0,0,0,0) #777 rgba(0,0,0,0) rgba(0,0,0,0)}.color-picker .arrow.arrow-left,.color-picker .arrow.arrow-left-bottom,.color-picker .arrow.arrow-bottom-left{top:8px;right:-21px;border-width:5px 10px;border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) #777}.color-picker .arrow.arrow-right,.color-picker .arrow.arrow-right-bottom,.color-picker .arrow.arrow-bottom-right{top:8px;left:-20px;border-width:5px 10px;border-color:rgba(0,0,0,0) #777 rgba(0,0,0,0) rgba(0,0,0,0)}.color-picker .cursor{position:relative;width:16px;height:16px;border:#222 solid 2px;border-radius:50%;cursor:default}.color-picker .box{display:flex;padding:4px 8px}.color-picker .left{position:relative;padding:16px 8px}.color-picker .right{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;padding:12px 8px}.color-picker .button-area{padding:0 16px 16px;text-align:right}.color-picker .button-area button{margin-left:8px}.color-picker .preset-area{padding:4px 15px}.color-picker .preset-area .preset-label{overflow:hidden;width:100%;padding:4px;font-size:11px;white-space:nowrap;text-align:left;text-overflow:ellipsis;color:#555}.color-picker .preset-area .preset-color{position:relative;display:inline-block;width:18px;height:18px;margin:4px 6px 8px;border:#a9a9a9 solid 1px;border-radius:25%;cursor:pointer}.color-picker .preset-area .preset-empty-message{min-height:18px;margin-top:4px;margin-bottom:8px;font-style:italic;text-align:center}.color-picker .hex-text{width:100%;padding:4px 8px;font-size:11px}.color-picker .hex-text .box{padding:0 24px 8px 8px}.color-picker .hex-text .box div{float:left;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;text-align:center;color:#555;clear:left}.color-picker .hex-text .box input{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;padding:1px;border:#a9a9a9 solid 1px}.color-picker .hex-alpha .box div:first-child,.color-picker .hex-alpha .box input:first-child{flex-grow:3;margin-right:8px}.color-picker .cmyk-text,.color-picker .hsla-text,.color-picker .rgba-text,.color-picker .value-text{width:100%;padding:4px 8px;font-size:11px}.color-picker .cmyk-text .box,.color-picker .hsla-text .box,.color-picker .rgba-text .box{padding:0 24px 8px 8px}.color-picker .value-text .box{padding:0 8px 8px}.color-picker .cmyk-text .box div,.color-picker .hsla-text .box div,.color-picker .rgba-text .box div,.color-picker .value-text .box div{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;margin-right:8px;text-align:center;color:#555}.color-picker .cmyk-text .box div:last-child,.color-picker .hsla-text .box div:last-child,.color-picker .rgba-text .box div:last-child,.color-picker .value-text .box div:last-child{margin-right:0}.color-picker .cmyk-text .box input,.color-picker .hsla-text .box input,.color-picker .rgba-text .box input,.color-picker .value-text .box input{float:left;-webkit-flex:1;-ms-flex:1;flex:1;padding:1px;margin:0 8px 0 0;border:#a9a9a9 solid 1px}.color-picker .cmyk-text .box input:last-child,.color-picker .hsla-text .box input:last-child,.color-picker .rgba-text .box input:last-child,.color-picker .value-text .box input:last-child{margin-right:0}.color-picker .hue-alpha{align-items:center;margin-bottom:3px}.color-picker .hue{direction:ltr;width:100%;height:16px;margin-bottom:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwkUFWbCCAAAAFxJREFUaN7t0kEKg0AQAME2x83/n2qu5qCgD1iDhCoYdpnbQC9bbY1qVO/jvc6k3ad91s7/7F1/csgPrujuQ17BDYSFsBAWwgJhISyEBcJCWAgLhIWwEBYIi2f7Ar/1TCgFH2X9AAAAAElFTkSuQmCC)}.color-picker .value{direction:rtl;width:100%;height:16px;margin-bottom:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAACTklEQVR42u3SYUcrABhA4U2SkmRJMmWSJklKJiWZZpKUJJskKUmaTFImKZOUzMySpGRmliRNJilJSpKSJEtmSpIpmWmSdO736/6D+x7OP3gUCoWCv1cqlSQlJZGcnExKSgqpqamkpaWRnp5ORkYGmZmZqFQqsrKyyM7OJicnh9zcXNRqNXl5eeTn56PRaCgoKKCwsJCioiK0Wi3FxcWUlJRQWlpKWVkZ5eXlVFRUUFlZiU6no6qqiurqampqaqitraWurg69Xk99fT0GgwGj0UhDQwONjY00NTXR3NxMS0sLra2ttLW10d7ejslkwmw209HRQWdnJ11dXXR3d9PT00Nvby99fX309/czMDDA4OAgFouFoaEhrFYrw8PDjIyMMDo6ytjYGDabjfHxcSYmJpicnGRqagq73c709DQzMzPMzs4yNzfH/Pw8DocDp9OJy+XC7XazsLDA4uIiS0tLLC8vs7KywurqKmtra3g8HrxeLz6fD7/fz/r6OhsbG2xubrK1tcX29jaBQICdnR2CwSC7u7vs7e2xv7/PwcEBh4eHHB0dcXx8zMnJCaenp5ydnXF+fs7FxQWXl5dcXV1xfX3Nzc0Nt7e33N3dEQqFuL+/5+HhgXA4TCQS4fHxkaenJ56fn3l5eeH19ZVoNMrb2xvv7+98fHwQi8WIx+N8fn6SSCT4+vri+/ubn58ffn9/+VcKgSWwBJbAElgCS2AJLIElsASWwBJYAktgCSyBJbAElsASWAJLYAksgSWwBJbAElgCS2AJLIElsP4/WH8AmJ5Z6jHS4h8AAAAASUVORK5CYII=)}.color-picker .alpha{direction:ltr;width:100%;height:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwYQlZMa3gAAAWVJREFUaN7tmEGO6jAQRCsOArHgBpyAJYGjcGocxAm4A2IHpmoWE0eBH+ezmFlNvU06shJ3W6VEelWMUQAIIF9f6qZpimsA1LYtS2uF51/u27YVAFZVRUkEoGHdPV/sIcbIEIIkUdI/9Xa7neyv61+SWFUVAVCSct00TWn2fv6u3+Ecfd3tXzy/0+nEUu+SPjo/kqzrmiQpScN6v98XewfA8/lMkiLJ2WxGSUopcT6fM6U0NX9/frfbjev1WtfrlZfLhYfDQQHG/AIOlnGwjINlHCxjHCzjYJm/TJWdCwquJXseFFzGwDNNeiKMOJTO8xQdDQaeB29+K9efeLaBo9J7vdvtJj1RjFFjfiv7qv95tjx/7leSQgh93e1ffMeIp6O+YQjho/N791t1XVOSSI7N//K+4/GoxWLBx+PB5/Op5XLJ+/3OlJJWqxU3m83ovv5iGf8KjYNlHCxjHCzjYBkHy5gf5gusvQU7U37jTAAAAABJRU5ErkJggg==)}.color-picker .type-policy{position:absolute;top:218px;right:12px;width:16px;height:24px;background-size:8px 16px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAgCAYAAAAffCjxAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACewAAAnsB01CO3AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIASURBVEiJ7ZY9axRRFIafsxMStrLQJpAgpBFhi+C9w1YSo00I6RZ/g9vZpBf/QOr4GyRgkSKNSrAadsZqQGwCkuAWyRZJsySwvhZ7N/vhzrgbLH3Ld8597jlzz50zJokyxXH8DqDVar0qi6v8BbItqSGpEcfxdlmsFWXkvX8AfAVWg3UKPEnT9GKujMzsAFgZsVaCN1VTQd77XUnrgE1kv+6935268WRpzrnHZvYRWC7YvC3pRZZl3wozqtVqiyH9IgjAspkd1Gq1xUJQtVrdB9ZKIAOthdg/Qc65LUk7wNIMoCVJO865rYFhkqjX6/d7vV4GPJwBMqofURS5JEk6FYBer/eeYb/Mo9WwFnPOvQbeAvfuAAK4BN4sAJtAG/gJIElmNuiJyba3EGNmZiPeZuEVmVell/Y/6N+CzDn3AXhEOOo7Hv/3BeAz8IzQkMPnJbuPx1wC+yYJ7/0nYIP5S/0FHKdp+rwCEEXRS/rf5Hl1Gtb2M0iSpCOpCZzPATmX1EySpHMLAsiy7MjMDoHrGSDXZnaYZdnRwBh7J91utwmczAA6CbG3GgPleX4jqUH/a1CktqRGnuc3hSCAMB32gKspkCtgb3KCQMmkjeP4WNJThrNNZval1WptTIsv7JtQ4tmIdRa8qSoEpWl6YWZNoAN0zKxZNPehpLSBZv2t+Q0CJ9lLnARQLAAAAABJRU5ErkJggg==);background-repeat:no-repeat;background-position:center}.color-picker .type-policy .type-policy-arrow{display:block;width:100%;height:50%}.color-picker .selected-color{position:absolute;top:16px;left:8px;width:40px;height:40px;border:1px solid #a9a9a9;border-radius:50%}.color-picker .selected-color-background{width:40px;height:40px;border-radius:50%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAh0lEQVRYR+2W0QlAMQgD60zdfwOdqa8TmI/wQMr5K0I5bZLIzLOa2nt37VVVbd+dDx5obgCC3KBLwJ2ff4PnVidkf+ucIhw80HQaCLo3DMH3CRK3iFsmAWVl6hPNDwt8EvNE5q+YuEXcMgkonVM6SdyCoEvAnZ8v1Hjx817MilmxSUB5rdLJDycZgUAZUch/AAAAAElFTkSuQmCC)}.color-picker .saturation-lightness{direction:ltr;width:100%;height:130px;border:none;cursor:pointer;touch-action:manipulation;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAACCCAYAAABSD7T3AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwksPWR6lgAAIABJREFUeNrtnVuT47gRrAHN+P//Or/61Y5wONZ7mZ1u3XAeLMjJZGZVgdKsfc5xR3S0RIIUW+CHzCpc2McYo7XGv3ex7UiZd57rjyzzv+v+33X/R/+3r/f7vR386Y+TvKNcf/wdhTLPcv9qU2wZd74uth0t1821jkIZLPcsI/6nWa4XvutquU0Z85mnx80S/ZzgpnLnOtHNt7/ofx1TKXcSNzN/7qbMQ3ju7rNQmMYYd/4s2j9aa+P+gGaMcZrb1M/tdrvf7/d2v99P9/t93O/3cbvdxu12G9frdVwul3E+n8c///nP+2+//Xb66aefxl//+tfx5z//2YK5Al2rgvf4UsbpdGrB52bAvArXpuzjmiqAVSGz5eDmGYXzhbAZmCrnmzddpUU+8Y1dAOYeXCtDUwVwV7YCGH6uAmyMcZ9l5vkUaBPGMUZ7/J5w/792/fvv9Xq93263dr/fTxPECeME8nK5jM/Pz/HTTz/dv337dvrll1/GP/7xj/G3v/1t/OUvfwkVswongjdOp9PzH3U3D3zmWGnZVXn4jCqs7wC2BKP4/8tAzkZsoWx6XrqeHZymvp4ABCBJhTQwKfDT8gzrZCIqi5AhiACjBfEB2rP8/X63MM7f6/V6v9/v7Xa7bYC83W7jcrlsVHIq5ffv30+//fbb+OWXX8ZPP/00/v73v4+ff/75JSvbeu+bL2WMMaFbAlpBNM85QX+ct6qoSqkPAwuQlBVKqGNFSUOAA3Bmu7gC5hNOd15nSwvAOUW7C4giUCV8Sgn5L9hNFIqTsp0GxI0ysioyjAjkY/tGJVEpz+fz+OWXX+7fv38//f777+Pbt2/j119/HT///PP49ddfx8fHRwrmTjV779EXu2px2xhjwtdJZQcAWQIPLPISsMJaSwiD8gzIKrwSyATE5j5nAbR5c1dBUwBlsEWW0h6LqiYsqFPAQxCyRZ3wOSARxmlXMX5k64pQfvv27f75+dk+Pj5OHx8f4/v37+Pbt2/jt99+G9++fRsfHx/jcrmUFLO31gYDWblxRIs/TqfT7ousxJsAxXA2Gc7TA9XdgfdoHbFsj76X2+1WArgI1ageGwA3qupqoHsmcbI6Fu93quggFa9d7LeDtgKfAFHBJ+NEByIkcJ5KervdTmhhGcgJJSZ5vn//fj+fz+18Pp8+Pz/H5+fnmGD+/vvv4/v37+Pj42N8fn6O2+1Ws7JjjP6wraMI5E4RZ8x2vV5TSwkquotV7/d7Tz6HFWsD/qNcdw0CQ3q/321c686TwDVIdbuy73zNldhSHb8I2klZznm+InBS4U6n0302aBFsLhHDAKJVJVglfI9jhvu53W53sLANYNxAiDA6MCeUHx8f9+v12i6XS7tcLqcZW57P5yeY8/fz83Ocz+fnsSmYUyknWEG85WBst9stzSLyMdfr9Qi08iY15UZ0LlDGLhR3o5zK2j7OPUTD0E+nU3tk7Xb/16NFbhloAMuY1zjLUOO3BKeIDe+Z8s3/J4gFo4TM5jPmuRg28foUKKVSwo16TgA5npywcWLHgYl/Pz8/73/605/ab7/91m63W7tcLie0sZj4mao5gTyfz88E0f1+j8EcYzwTPEG2cqjyfHNF0M8fuqEiaOVnRzZZQNh5fwQyHg/HDGfJo89Q1zb/quu5XC6773I2XKfTqd/v9+d3wuqWva/YTdUdEV3fhIv/Viyps6YE3x3r43K5bJQS66zaxVGFsvd+//j4aF+/fm3fv39vt9utff36tf3+++/tdrudvn37ZuNLBaaCMgUzC+rZRiFowxUuJI8YMqcCp9Opq5vagaYU6lGJA1XQqejchw6Cj0Gw5nYBrGw01A2O206n04BGouNNyTfp/FwElhUey6nXrIKw7QQWddxuN2ldL5fL839gSPF8ahu/JvBO48CPSuqMf8Vp9/P53L58+dLu93s7n8/tfr8/39/v9/b5+TkhPJ3P56mQ436/j+/fv+/iSgbzer0+AZx/5+88bv6OMda6S5z6kd21fYC9dxv7cIJJ2d9AOS30fPMzyHiTM8B4DF6XUlYHp4KQW3W+1t77MNB1vGHxWq7Xa7vf78+y5/N5A+H1et29xuP5dbYtyaRu4AksbPq6936fjRzXRxBbPr/b+b18+fKljTHaBBBfn8/n0/1+H1++fBnn8zm0sB8fH5u4cr5GuBhMVk0EEn9RsctgVhM+ixlJtMA23R8B6yysAstBOgFXIKKCMIgToMqNEu2fYMH7ztc732dQKkCj1ytAZtY0Kx8pIr8GGJ+AT3V+2Hirhl++fBmXy2Wz73w+b17P8p+fn8/tUwGVleVkTyUb68DkfayWY4zxNRihU4EpLJPZVrK+u7J4/mgfKqeLW9X2REWlItL1diynbDDb3+jXgYjQqn0rrxWc+NkILP7F7xIbMvx7vV53x40xnlbWJF12ZSag/N0pW6t+ZzmOMzHjajKwDfond78zYTdfq18up97zr2q8v3IioBprRtBl0EZ9og5WBRGOdOHjIjXF7UotFbgOWnXzIJyzYvjG5IYgsmMOxHkz8OsMSrVNWeq5T8DaOcbEv1Od5rbs9aO7YvMet63EkF++fMExq+MRl4/L5bLZN/+ez+fnZ6KazuMqXSQVO5spJXflHAIzes/xJseckRJiDMog9d6VfRrqXMr6KpVV27jRwJacGovOAM1zMdQMnwK1AubK63kdCChvI1C7g0z9nf/D+Xze2Vj8H7Gx4P9duQlsYCrqyN8XqG3Hm/10Oj3jw/n+crlstuM+jPmmxT2dTuPz83Pzt2pn1XsEHX/bnPaVqVmh0xwOt0o6XLLAHePUU203wHfcrspCwmV3TryB5s0Mseeg97x/BwzCjBlbB+pRAPla0BVQuT6V6QHdBlj3d0KG147b+DqxQeUymDO43W4dQar+TIjwmAd0z8/h65vf0/yLv3Pb5XLpru/ydDo9s7ET0I+Pj6dKK9VUEIeKWQWPAOrJ8LKd4vE+t91Y3e7UFlWatg2VwJnb+HPmtvm/sfK59/OaWF3x/eP1UPHvA5DDYDpYXfb0drv1V2DkBkxtw/tEWVVlXWdC9pFYs5/jfh9dS/16vW7s6lTG+TfqsxSJHxkXXq/Xdr1eu4LsfD6P3vsT3N77DkL+zPm5jSdKL4zR3AxQd6rHkLkYlSowsrq7znzu6wSwdsMJOXmA5fBcjxtgMGBYHlr5zokhtsMCTgXLQOW4XC6dEyEMprL8mAQzXRgduix2yZzorxkYsDn3hB1VeMLGsXsVtgl2pW8S3svk0vw7R4hNaHvv4cACl5HFzwIH0Kc6zu4XjDPR/jpAVxWzO1Xk2DDb3vTcxeGU1iWZHkmIDWziWKvirCJ4Dravs6IJ/GG6cTqWdXDy+fArQDVVkLqkVjAoZIITdmmIqXwqa95N3+MGYoZQdRVNO53Y1xRkhO16vY7eu507Ca9lJnbGpxOemQhSw/AQsmmp5zU9BiU8G6wvX76M6/U6Pj4+do0Bz4CpgiknTUeDqwlKBmg3u4OVjrZ1A+rAcgaejWq6eJCvCYFDONSwOgHX4EQRw8lxbzDOdEK6gZ3Hk1b+8g2o1JFtKXyv/fEdTXuWjWXdAZiBp6ADeDrCFiim7B6ZFneeI7Gvm/PMkUDX67W7xI8b0D7/v8dA9qfN5oaCf74WZjH0mf1cmfY1Y0JUFmVrTWu8uzkNcLtEj7u5FXBTkfC6GOA5q8YMxO8KVvF6sAVGdcrUbsKODcQKkLMOMdmlxum642YrPm26AlhZW1YB1R+rrGswE8TaYAWeUMxdf+WjwSvZ2Ef3ytOyfn5+PpVPAaqOn43MtNBqvmjjxbjM4lZjZY4gqNMI5ktaW/sYKNwS+9lFQzGihmMCKPa7+Z0V6Eb0GRmobtpX8JljWu5FMLN5ja6hG9kwQgZqf5+1NH5UxzkFReCdWhJ8XdlGUkxO7HRlYRm4mVO43W7ter12TPJEw/rmEN3L5SKHIWZg9mz+pUoKOYq5bJTJdX2gme1UcxMZQFaEQIlHct32M+Y1BzGkGuzfiyAN9z+ugplZ1symCrDCYYkGxDTpI9RzBy0rHyeDUC1nWaeUaD9n4xkNyYMBDZtzZ3B++fJlY21XFDOcARJlabOyiS3uCpLI9jrZjCDkaVvcCCjwognKShWdzXZWlZMvVTgD8LpqlCLrqgbcB+qYwrgKYpT0ccCqbKyCValkEabn/FynogCrPKfqf51xJ7sGB2ZXcZmxoSOztjx300DZi7a0/2AIR0UlBag9SuDw6KcAzlaB7vHZvWpjK90dyrq6bKyDUZQbR0B05biLQkHIcSUmgIK+SwuqgHCnoio2RQU1yj+BnBy9pphVKLGyC7ZzFK1pxWK+E8IhVCWLN/uLtnUU4ayoYLoaANz8FdtaSvY4pV0BEW2ls61czqllBKpTyKgMAhrZ1cdc1RROtPmvWNkdcKZ7ZKxaWjiPLJMpp7OZKxA+rqG/oJLjxf0pnJlqLoDZo3gyU0mKGys2taKecj/d1C+rJSplBqlTyAqgR+D8KjKlmRL2gtUcAdCtsL+ijCNT1oqqqkH2OHEbG5sDFnUg5Aa+yLou2VU1ptj1S2ZQqv1ORZN9IWzRfgaRBxKoBE8UWyqlJFtrIc0AxNjSjed99CTY/XDfSzCz5M0IZoVEsWnPFNTsl8ooVC1TzbGgqFZNDSgVwKK+1sGDMKqxZCWGVMDysiEr1jVSQJUYwj5iHOlThdHt44SQg9CN+nl8D90NMIgAdgr46JqRiR9I8vRdFvbr17m/yxUMKjNLMiVUADwu2CWGhhi+F55TWM9M9cogzms1dnM4uOF/LAEYWdcqnM7yFmyq3IfwmOROd7Y1iFWtOjoY8To41mTV5IysgFFuRzsbWFGbNIIJCDv1dOo4lZG7jWBwRFtVTKuWyeCByJKOan8oZ3ep9XddNl0tDuaywLz9cXPYeDAA0SpkBO9sbVcTOVWldPv4uyzEkzxHtjvonHoSkFEWNoo1d8DhcQputd2ppNon4BzoAiJ1hBFQg0dVtdbGHHDQWushmNEQukLM2QO1G2Y8bgTXqFhcBJj7EjPgcPts8US8qPpPB/dXznOh5Z438tzH5ec6QgrOKrRRfKmysBmUDB+PhYabMlVPER+GCSITTzr7am2tArH3bgcEzPJm+cr5jJ4NnHNFDVrFXcI5Le9k5Jnw+bedbV+FfRzZIHaOOaOsLY0/7UGs58DjrGwKMIMFIGzOEW1/jGsdAtCN6hEAI4hBe9YXeRROBSVPAVPAqvIM5bx5hVKWAMP6zBRy3iescridVdFBinBxXDnG2GRY2XbCvp1lhvGtO9Bxu5h908XQu42lnSArMFdizMim8uwRCxPGnnOS8lwpnbOiDqTAjsrRN/PcoAScCbaACqVM40ylnjjTBs+bwWlAG23/UKbdkiwKWIQPGzWaczpoSlxPEj822cNWkpS7FyzsDrqpfgpG3jahw2vgbaSQAxuLWZYt7JzyNe8JoZpNAcvDFOdw0wqYT9AK1rZz/DdbSlLPp0ryIxgQJlK9AZlEq7IOXpohg9PIhrCng88JsOxiV4ZWAYfg4sikx/8ky2Z9l862uqwrfscIH8+ugTmVGyiddeVYUgEMn4GZzg14EwIsh9sx2cKKiWXReuOE5gzGOQgdlRKVVdlevqb279Xq0Qnsts2VDaBO0coezsruWtHApu6sKG4IBhN0aGU2kLrMKGRTN3HmbCDwKV14zvkMEDG4QfZVspVlaNU2mhc5TEZ3N1h/zqTheuLpW05ZWTGVjb3dbnNmxKZBnN8JqidaVLKAOyARNLS+MB54Z2+VaqoMLKroVBlngefnTPAcoHNWCSvlfA8CI0HEmBNBnBlXyMrzU7A7WVm94PPqQ2gmqKx+WDGsnvilmcSOBJqOK1nYyAIzuAyesq3UdSK3KfWcYKD95HmfYOU3qser2CtYEUA+FpfqdNvgPBZUBhDrGONRVlQsh8rLcaUCykHG0OOUwTlLBrsh5soEMGezi1E4HRVt1icp5wZEFXdibCkG8Y8vX75sbO4E0iom9z+hjSiOfy3DhpXItpVhE+UGQdvoWjtChmrGHf4YAzKgBNnGtuJxFCeGdhUAfQLLK8kBYAP6gvFJZajMG3Xkycy8KuC0q4Eyymwtwdxdv2M0mIBtK0LKnf640j00Auq4gUkdWGlhs22qJc6dZCsL19oxnlTJG4SYVRIGpD8TPFBuM6OElbS1pldid4mGAyN6ZIupbC5bXJN9fdpbThSxLUaI8IG1XIYBxW3Tjs6KQosKcxfxcQmdnwRGM10GnFcCy2XYunLMyAkdgk4mePiczsLygthcBut6goOqS7YVFXADLjaosB6s6ofcZWAZSIRYqSUkizYwttYab3vUOQ9w2HRxIIg8WwRVeE68xi4UtL3zRphxplzwuZrcqYCq1I3jPI5dnJIygEohMbPqVJSzrwzxBJTs5zN+ReUSgxikPQVF3JVBeNQxbHENrEMNvEdFZVV9lH9+ORGEsNZQpyTNc4C3AG7XF4ngzq+DrO2zbuaaOXgdaFcdkEotoSFBVX2qJ0C8OWZeG4KGlpghA0XfTOPCqV2qqwQ26QWfF2PMLhI2w1lVAa2aPsYd0za25MQRwgcZN6uQDCi+ZxiD4XEM2kZxOT41FnZnaRlcpZouzlRqqdbQVWopQoSB58RV50lBNrHi/AwXS5LrwDVlpY3Fc3ByiYGc52Trist6kOXdwInAQtJpp5QchyaquYOV7Su+fxVMaV3dc0RE2S6mUY0gLt2pMcYqrKIQ9w2l1gpQUMtQYcmmbt5DTNxdhnUCjQqtbK9SUSzvrC0mmhhE1e2FS2+oxypy/ZASutkmtjx3vcBC24PX65nbqkBCRhfjS9kIYPnee8cMagVOhI/3T1fAmdtAWZsCswTJCkQVNa0qWKSKPOpHAUhD9DrbVcyoYkwqhvh17vYAayXLQyKGYdxlUDFp494rBXRjYgO17DDYetNIUj/ezp6S0lnlpEwsWmJMkOwsKXeZKEAjIHn0EQJISaRBcO6UMINz7p/bEjjnw4ft+xmDvksxX4G2rIris7qaeKwAFMP2Oi7n4criuZwtpSUwpfLxSnORSrIqusc5ZFaXysqRWjiZ2DyAWEIL35tVSoQElFACjOeGGSE7AHEQgdo/LSvCOgGBvkxsmDbvlS3Fp5vhaB2TAGqRKrKKMrhLVpaGzEVjZ0OQxDhaCTA+QyRR1d15aQzrJntL3RibsipjG6jlgL4yqbS0sNYg1e84vhbBVrElK64CUcWYXDfKxhpIuxiVJZUxsbMy/uRBKTNRQ4kQ3LdRYLS0rJjRPlTPqY6gdJsEDc+aQXAn+HgsNUCbRuF0Oj0zwnA7bWDkbhO5Ens00qeQhS1laBMl5M/cAaxsLF8rKyql+Tf7ELLEGu/ixiimdCvo0TjfpjKwaggen4eh5v7LokLKbLuyvHhcZG8dhGrEDx7Hg93ZppJF7qBqO3iVveXEDQNInzeoe8Yq6ePaZBZ2JviM3W2UAGotekRCAGq4EkF1X3DOnR11yRsBL1tRa0PVcZiNFXZ2c34FskvomInQQ6lzpJoZbJxk43NwKJFBquJSsrByHydxKOnTxQASBmS3j+JMnsHSla3Ec6K9VWoJVn9zfjwOM7hqYAAqJQwE2a3nA48J2QGegRkpZNivSY+ys3EkKd4oJIwsvIHl3cWgLt5k4NH6OmtLWdpurOkwEMupYc7eMtDRhOcI2ui5JhVIzXzLyto/GAPuZoyo8wkoduVgJglCt7OhGbgID4Mq4si+63zUS1FuFFXFlqyaj2emHlLMcBqYu0FMuR28BbB7lOxRMSiCQXFhCKuwkhZ+pYDiGSgbsKKV8MiSRsuHSIWM9rklRiIlZZuqXjsQK8ooYJMgq3JKWVkhHbhsVxFUzthOWPkYijcbx54IKsSdT+uLr3crGKyoYgFiGR9iBk4kfloUX+JIlQRQqabmpgnhqtpQpb6RVQ1WH5DnrS4hEoGZqaerQ2dhFbz8XePxShmDbo70eISjoorO2vK8SJXI4SUmEU4zWKDzUDtWTYw7xXlbSTEj4FRg7zKnKoGRALv0Gs9Tgc1BpCywGZRQAtqVz2xrBcAMzEpfZwFSa2G5W0QBFjSMapWAEFa3HcGN7CxDzECyIkJ97qwrqWNTWVo876PPsjPkj2wvgroM5lLZKMETKVql/CvnWVFiFa/SzJUQwkoZsr67Y6vlSRV3/2tmNTOY3vnaxYwMuoPKqdzR1w7IqHymlPxaAThfU7Ko2ZXYj4AYJHL+kNdKwRQYESTRa5fsUZ/rVC1TMTyWVyYoqNtuzaHsMyv2tvoarxdfqwYgU1axFo/cnql1FGsqK+uAROV8BX4GU8WcZTATi2q7Qcyi0O0V+GhWBMNRUkn8H1SsWVE5By3Gi0ECqUeJoBfAtDa4amkdXG37AGP5Ggeb84p7UazpoKRzdFzeQ8HkoHGxprKy/Hpm5t12p47J6xTYDEz7uINEXSuxYXvFskYAc+ySxH9sf5ftKzU6IbwVBcUGg5e5FMCEXSErZR0wGayV19woM9guPjTqJdVTqR4uE4nJnLldWVkECCZLd2VLF+xtamex7IpiriSDUpvrpn9lrwGMCHyppMH+ps6LILsuFGUj1XEOXiqbqSHPUKnClpWV68kqtURVNDY4TNaocykoYeTU5ngGEQa/S1DnnE4AeXMcKjHPAmFVjCBENaeyLVNHfr3px8xUstJ94hIpfH4HKE/eDaArK6lSyVVFbdt1gxTIVk3pppVlFXi4pEhVBTObquohU85MLXn1iahvUkHJjSCMc01tLFveVVBx0DodM6jftCu7DOtIzYxrc0qp1JGP2ayYFz2Gb6HvMrO8cnGtV6Gjm3uImSfD2GpWK6uowbZGMxFKQCo1pOMtcMXFpRst+hXGoAomF3sSTBGgTglbBKWwsQ3tZqaYSp0Z1CimRDWFcCJUPYJ00BI5FkKYNoifuQxmN88SWVXWLMaUqqqgC0BmQJR6sk3u9NCf6jYLXxAfqsYEgVLAhRY2AtgtflZNFmFyhxdrLkAdWlk4D88M2ixHyepIdhMHrG/iR1ZGtq0MGpbDbRPYOXeSY1M6Ny4ZstvGSktK+XbFPATj2D371saPEsAMXhXrsZ0km/XStkhhMyBfsa6uXFZe2VCe+YMr1+GKgwrQyNYq1VRrB+EizAow6NsdNKcyVEkYeM73ys6q4kAHp6BiFklTkIrVC5oYV7uzwOGCz4UJ0Stq2lWMJy4wtb+RetL6tZFicnJmBw5UjCvXXMZVJX2MQkbf+XN5EWd78Vz8/JEsMZTBiKNzsm1inLRUQ74H4NidaqI68j5sAFgxcRveC7ieLJXfQYxjZZ2CsiWFewZXJmBIlZ1tdtrX4hSuateKso/RZOtOKW2nmq1oTzeK6dRWAWu2NRVb4hq0SXm1GvtugHrbr5IXqmSktg5CuDE2MSlPwsY5kNE2Wp3AqiZbWVLAxiBF+2iBZbuNj6MB6rsMLC7FyasaYDyo7KkoPyEtw3pEMXfPvxAJi2jAQQgjrz0rLIZSWZlIoNhwd5xK4AR9mYNjWAaLrnuImJeBVN9zBORObVvbr+mTTfFSEJLSRnHo7hEJoIi8MFqjxmvgmF5URZz4zLFgZZ8Ctu2X7ggVccKm9gVxIsOHqxXgNMKnFWZYnf1dBnOhayXq17QwFlWW09eNKyVJFmXqaONGA5aCegMbJ3UUkGY1ic3nKWgjq8qfVYGQG1gRt6rs62a6HiqqUOqdesK5NmX4nGofJoiE1d0dF9lVVkvT1/kEEaaCoYOwFpcVcoLM+7669PxC9rWqktH0sWUYld0VCpuBZ/stVRcGgy9WX2+U1Qthi9SzAqSxzZsy+OiFzBYnySGV6Gku44rD8BCOZBV3BvD5+AKRHNwMEsB6EzHnJpkTAeiUlEGkcECeB6GDZTp5YEJTlvdrknxYjTllMkfNtXwDjM7uVjK5JXUUn43rrqpK2jytaxHW0M5G8DC8rtHMYs7KSgduVQMGTYFqFvVS6rkD3sDJ46afdYFwoq11AOKCBLhvwoUgc8IGANycR6knZrdJPdsuxnyjfd3FovTlRMdEdtOl5CMV5EHsXQBis7TOwvIDZaGj2Vnpbh7cpK63VwYEMLwqbjzyl699sawFFkF1yqjUU31HfC6sW1ZFVFuXVXVgz9keEaw0ys1lWfm+azQAQSWA+hKYVfsZjPncAcUB9oIayy/UZXRNckDGji77GsWbvBo6tPrWPqOyVkBUq+INeqpzNdYs/u0ifh5qmpqIW+33JVSUcwY70KL4U9lYdU6ljtSls7lmfi9g3YzeQfVkaGFaV3ODCnaD2N8wsEDFklE3RzM3ZghdYkWHsszq70FIecnKkVkt8ezMzRq9bkGuKojRLBVSod3Y1yPqKgYW7JRQTPVyy5xIYLjOgxgT52RKJUY1dOrIiRd4futQx/A5AcSmEjz0vFWrkLzvbWAu9HOWbGgxFk1VNTpnBKk6TgwisI/HcxYXP1uAWO72ULFlBTq+aSu2VTUs6hrxM2CF+hEor1VIA9ZmFUaab1lSSgZsVs4sxzHlVLoJHr9H4DhONTkI1XC0/wiY2NoWAG5RlnHFnq6oLccpQddMuJ/O17JVA5OHLi0BqCztq7Y1++ucCd98qLI8MIHBV/cKjxQTme3hFBS3MyCqnDsuym2o80HjvFFTtrURmNaGJsmVahImjTsUXKtQZTAVs7Mvv8/+fzUrZAXcLJ6M4koe6XP0b6SmWWNDzyUpQ8bl+LtWx4tuqZ36cRYV3yuVxPNwvIiqiQCSmu7srgTzR6nkyhpCarXwFy1vGd5iP2cY06lFr5Njhhg1Y6+NB28ftbK83s8rf7kLJbKwDFPbLg25a0AdZJEiqr5phixKMDlRUtcssq1hriLqGoH+zeNgVm9OemjsETV8JdF0NHnkIFxWY1OB4Yrp7rtWJ7NgAAAPXklEQVQ3oNs5nplyVf8u2FoLu1JrHveaZWQjqAkshtFa2gzsSG3Zpkbvg3HafF9slPPlldjFlK80Gysm8Mr4MPhneNWENPGjAIpmilTPATdTRTXlCBYHYAQuPwA36xIpWtGN4q3Y2MhiGsUpuSSnlEJRD8PorC7CFYVw+F51qThgabxsTxWzCGY0ZSsb3lfqAy0OPNjNy8xiQQKsHYFQ2HBZVvVbBuq3m1oWKajqaonsM6uZUr6CjXWNZ0l5E3h3jURma6kP3MJIiy1Lm+kahQq41N2iZja5sjtlLYNZHZrH6qUGm4vMbDp6Rw2CFmvuyFkrBcCyMtFqBaECmsHoK9BZ2LA/lJcRqSaDqnaWbrZdGaz3DLgIvBln4woGztbyJGqslwxkhhHrTjTYFXCtOoKS8uLdofVdAbOylGU6nlYpXWZts4nXBq6WxJitMNokHUJnbnJplQm+aGpY2a5GMV2QD1hRubBPFKdumf5OHkLHz0F9luE5kjBjRa0nFE5CUGqHw32MmjZ6xkgINVnSnZ1VZStK2qKlRaLlQgK7uTq7JFXJwM+3SOEKyhZNI+tJ0I5qMYy9k2qJD7dVWdqKXa0CKNR0Ccjg+B2IYu2fcBZJZkMFgM11r0X92wilghFGgzVnexlqB7xL9mS29SiYUVY2nXOZjNBRsyDsQPRWW5hrZ4XcdC4HVWRbjgJr4sFofK5SzjQ7rhI1UebdPdEbj6sqIvTZQZ5va08rABsAW0UxeWytAk7A2KJ9ZpxzCioB24XFtYAeXYxr6anSqhLgppEqWbGwLunTgrV+IjWlL29ljaAl4EQMGsErp4apeZiquwRXLXAqOCeru32mmydc6oWTSWpFAGdzeTB8RTHVMEtlM90CbbQCYhPjq3egYr1FGdYIQjiuDGZ5zZ/AzobKGOyLxti6c4Rwtv2anyWlLICnlLhxJRXt6A5ebDBWFNONbxWZ2d02mnu4S9YECpeppV1zSWRBWxHYzVIv1CXSouwqqX3jBBBDZdYQbpTQW4ZQlS8r5kH4suSRmg2++3JN10x1PaAmEkmtYlEdeGpJEM6kOuCqCR22oSujj5IV2HdT0zj5prLKTjXFAPjdQlyq7xIBxAQP5yMczG4VxAKw0n6ilZ2QBce2pLulkuxxqnoIzFfgqyqjil9S1VNwBrFmeyeops8yOjZUybZdfS8CuaTIJumzs5tODaNtLpFDQ/PcJGweLhmeL1nB0KqiUDScsiUVD89Di3HtrKtSULw3RLiygZD+7sF8JTObgYsrGvDNUFRGl1iy0Ll1YkUc2aJYMog920I8qW6YDCg1Mqk0JHJFKXkbgbRreI+qpYNOZHrVcDUba7pjsphSJNtK6upgRNAVoOS0mugBeN4bIZgHhuPZ/s1ENaX6KsVr+YNrh1Nb7ipR0PE5zbNRegCbrHRUw6Yf07dLBJl1f8KB9as2V1nNqAsl62LBBhehwalerkHmB1JFIEZKSEusdl5JQj1nJlHXSCF342gJ9CYGrXelknJIXqVP8sD+qtplCR3XH2qfKq0ygMp+KnVkKxNlZ8m2YkIlVMiCnXUwl7qznBKSvQz3m3Pt6oQbXO5b5FixCh/fHxUQW/AEcK6zCNqKQnL9sywqmKuwvqSYzT/aPVNNpVyhvRW21aqciCsjdWvBwILUvh5VyCzbWoC1pJjJ680CWsl+udKB6T5RwG1mlohnlpbg47iz5U9ha0FGtmRLFYBtO99y97Ap0z+ZDTAog6kSLZsMHg/IFkkgp6CpvU2U0cYVSdnmkjwBdOmXbxTWNWzuIbipMioVxEckZEoahSOiy2M3K0jcC1LhVDwaqG0ZvkcWqCnrG4GIxykrqlbWdw6LQyBaZR8HmLRIhQWsHswD42ZXVLNkf9l+FlW0HVQ2lwFsC/Z1FdzlQR0KaPfo+Fdfu+/dwVRICu1CGR7AEIiAhc+AZUF0kOBaPxmUqg4i64vQnU4nFDYJ9Nz+1fVXveH9qmr+kPILx8oKcRV/BFbxbE0JMT0kSD4w6L/lNY8ocsqagVdU3A3MjxhxcGuqzsPH4irpaow1q6OyrVjvp9Npc59E91LldboYVzJWdimWfAW2SNEKcDaX2FmBLLA/uKxlmhh613Is1URQApbKfttwxL02q6Onx5pQxSbPojAg+v5hAnN6LHVRDXIsvKtRjiS0qJUyZTAXVbAK82ElFJWaQdVoqUC1Unt7BVaTQudM6SuqexjQJN4+0icaxv/utbKv83ETbT8H8gjcOKxOJmbUa6OOVXht3dFY6rHv9XoNzFLceEA1o8+pKm0LAHPHZ2rYKjFq0hfZFixsqHJgD3eD5n+U0kb1mFjXkn2lvMSSOsNE/CdIAKF0Sytq6urOHUN5gwg4GZosgbmggM5ucra2qrS2Ig1cbiBBcxYzgzUDNLCvL8GbZXNp6ORy3LmS+Kk83zRIAK6A1ioKa2I9NapIuiUFdfC9766PFZUtqUr6KbWk+zZU1a/ZrIXEztrjTOfz7hwKziCeXIaraHtbZIMz+2pGgazCmw4qWAFvEdhodYp0Xq0pV7G1YWYWbO4qhGq42+Z8BYtrLWvluNPpZAeaFFS1vubPgbgxsqcpnAaszBovKaFoDQ8BGtjfUOl4NAG2nmQV04feJgumvX2fsrQEWZghL0JnVdYkn3DOZIeRN86RqPWCmsvGVqEMRnwxQAxwS8EMYo3IzmY2+BCcLp4MKiuyuhImamlbZFcNoNl7tp+RHd18ZjQIRKyXdFRhN98/hyKqwXWNo7O1wiaXoHN108REZZWEq6grnIfjzeg8jdRf1XEL4kkXa5bBjKxoKaljBjeHlVxQ4GaycpW4lDOAKtnTxHAtOfzOtZwHAM7sqVXkV6yu6kap1nHkXKqWF/4XHqjenNKqBjpR3l1ch3Ejg1+EsgdQhsdG0B4FM9sWAVWpuAyiwTPleZxt9VyZVS2qXfReWqTAilpr9ApoWTjxymit7NwV4JTriZyOA9B0k7HFfULourmKYHVnRQvqGL5HMHdqFcR2qWpmcK6eTwx2dipWrviDilr+fKWq3OWRWdHKwA4eu8wjchbeRzFilqjjZN3ufCpfkJ0/scVpnYk6L0PI77lxdWCZ87WiWm7B/AGquQSnujGKsB8CJmiJq8q1pKIVWyqOiTK66r18BN8r74/AE71fdC3yPS2MxdOpnE1tlVxD9JmVOoggN+r4PjAXVFPa3Eg5jVJGFVUGNolH20GVrUB7BOySWq6WqYQdWR92pcFMYMwckbSgCKCqD67DiiWu1g8MQC9ByfcFqW1L+jL714qNCuznoSxt0da2gtWN1G8F0BK0NN0nuimelUF9dIdAfjO44UT3CjQLoUeLHJFTO3gmpRuIIOvwBQCbqNeo3qtZ9iF6xVK13GRlo4zqimq+CGdTiR1uRY8oqgE02hZBa79kZXPMquxRHKla2saZWN4mRqZUj0vLCKhkjKnqOQHNuSZVJoKvAqS1wpEquvWDC1B2ypwrCPsRMEPVTODMLJMDv6qeKXwi2JYV5Sq4qKyvgGsHCLiuj2jR59V8gMqSJ2FJZRXEHVRHj3sFPrct6OpqlW1GpatQdt0GvwfM6n63InsGVFhJGaBqgqqIV6IsXllZgySPq4R3bnt3wi5cv+cN2yqQLW1T95KYVsWWtKk4cB9W53WQQflQYR6Wl4HaJZjvVE0D5yvq+RKgZCs5qdBEP5sD94cAvQLlSgNaSMAtHx88BuNQ41zdFsX30zKbcs0MLD/ihkpQzl0wiTqKLTfbKmCmyYICnK0IbaieC4CG9iSyLQ7cIMGQwau6TKoq60Apl3WN40LZpca1CKKK9VQyyIEn8w0F8F6CL2h8o3ixGwC7s7EWzCOqmcApYxYD4jsAzVS0sl2t98pA7vrKophCVSonbYpgH6mvSn24pTBV4sdtV3BtMq5k82y+IADvUJ0uAlkCVTxIaPm+UNu/qkV4F1TzHXCGrXIAqItBKypqK99VtAOVs64O4ObX7pHLVCpYHcRmwvLR7TvYAKBBN58LGVzDuFz+hQbWgncQyCZAk+VbsPSouf93261iZgmfCpwRbAvqmSqriU2PwhjaoOyYqtIegVXViTsmyta6bGySpY3gyRrpIyAeaWDDxtpsXwKyalMDKNP7YBXMqEskUsi2uC8FNAPxAKTVfT1o6VzM0E0jF+1rWcUuHvdyg7vgoFplX8HpvHpMCOMRUPHzZkInsqlFKNX/EIO52E0SxSzOwob2VmRLW5D1XIU0rbgM1AzWgyC7fe8G7xUAK/taEBat7luqtyP7EmsaJQOj5F+mrnZfCuYCfBUAWwShyd6pMY/vAHG1UqOYpbI/gy5T0CMKm+UO3gFuC85dgfDVeguPDfITrIBLsLrcgdh3CFgFZjaKJ4Iv3F8ANEqvuxR1tVKOgLoCa1jxboBAkj6v7j/icFbA7f4rfRnQDLRViG13i0vqBQrYVqBbADZT0ZpiHoSzvQpopKIFS3sE1HfBWlHXd0H7LnArqvougMtljHBgZnh3Eoz/BKjLML4Z2Aq0+hEJr9jaVUBbvNzCIUiroC7AWmmFw4o5AK3MtB5VypZMSFgs05JyGVwlwBqsEGAAa2ZU1CjUexXGsE4rKriilBvFzOKKo3AuAroE6QFQU3u8YpNXwS5k+1TZt5UrwouN4KiUEw+k3ZWDp1RXHNRqXb21Ts39945yZSg3VnZFNQ9CF3XeZyr5DgBXKiwCMa2MxeTDYXgP1Fsf9QNKZc0k81RJk3r6EQ3rCmBVyLL75EjZ1pIVDHoFtiOAHoB0BdTVylqBsKKKS+AeBXJVLY+CXASuGvO/Auq7GuEjDfGKg1oKa1z/dmmi9I9SUGNhl0AtfulHAawoYrnSkmNXAVuGEhrEVXvUF+A5Ct2PqNOjDetyna4CmeUolmeXLN4Aq7C5Sj10Q7yjgl+t6CNxSRHmI5X+CpwreYB3Qfdqna4q21KdBuc4GoZsn49ZOOiVinwHqK9WzjvgeweEh2AU5+vtxZ9Cd9Wqkh49V18E5oj6vVyn0RStAyGIO5edXRKd5B0VGVXq2yr3xYp+5Ut+C4QJ4P1N339pQMjRejj4vb/Dcr6rQc3O/0rjmtZpeYCBiCHfCemRbNhbK/pNUPc3wfKy5f2D7OlL3/uPhve/oU4T0F8f+VNM2vyoiv0jK+KHQfdHq+0bncz4oz73/+Y6LbKw1o/5B7eOf1Rl/0du9B9tn/9bvrf/j+v0h6ttn2tp/r/4819y4/zv5391uvzzfwDifz6phT1MPgAAAABJRU5ErkJggg==)}.color-picker .cp-add-color-button-class{position:absolute;display:inline;padding:0;margin:3px -3px;border:0;cursor:pointer;background:transparent}.color-picker .cp-add-color-button-class:hover{text-decoration:underline}.color-picker .cp-add-color-button-class:disabled{cursor:not-allowed;color:#999}.color-picker .cp-add-color-button-class:disabled:hover{text-decoration:none}.color-picker .cp-remove-color-button-class{position:absolute;top:-5px;right:-5px;display:block;width:10px;height:10px;border-radius:50%;cursor:pointer;text-align:center;background:#fff;box-shadow:1px 1px 5px #333}.color-picker .cp-remove-color-button-class:before{content:"x";position:relative;bottom:3.5px;display:inline-block;font-size:10px}.color-picker .eyedropper-icon{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);fill:#fff;mix-blend-mode:exclusion}\n']
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: ColorPickerService
  }], {
    dialogElement: [{
      type: ViewChild,
      args: ["dialogPopup", {
        static: true
      }]
    }],
    hueSlider: [{
      type: ViewChild,
      args: ["hueSlider", {
        static: true
      }]
    }],
    alphaSlider: [{
      type: ViewChild,
      args: ["alphaSlider", {
        static: true
      }]
    }],
    handleEsc: [{
      type: HostListener,
      args: ["document:keyup.esc", ["$event"]]
    }],
    handleEnter: [{
      type: HostListener,
      args: ["document:keyup.enter", ["$event"]]
    }]
  });
})();
var NG_DEV_MODE = typeof ngDevMode === "undefined" || !!ngDevMode;
var ColorPickerDirective = class _ColorPickerDirective {
  injector;
  cfr;
  appRef;
  vcRef;
  elRef;
  _service;
  dialog;
  dialogCreated = false;
  ignoreChanges = false;
  cmpRef;
  viewAttachedToAppRef = false;
  colorPicker;
  cpWidth = "230px";
  cpHeight = "auto";
  cpToggle = false;
  cpDisabled = false;
  cpIgnoredElements = [];
  cpFallbackColor = "";
  cpColorMode = "color";
  cpCmykEnabled = false;
  cpOutputFormat = "auto";
  cpAlphaChannel = "enabled";
  cpDisableInput = false;
  cpDialogDisplay = "popup";
  cpSaveClickOutside = true;
  cpCloseClickOutside = true;
  cpUseRootViewContainer = false;
  cpPosition = "auto";
  cpPositionOffset = "0%";
  cpPositionRelativeToArrow = false;
  cpOKButton = false;
  cpOKButtonText = "OK";
  cpOKButtonClass = "cp-ok-button-class";
  cpCancelButton = false;
  cpCancelButtonText = "Cancel";
  cpCancelButtonClass = "cp-cancel-button-class";
  cpEyeDropper = false;
  cpPresetLabel = "Preset colors";
  cpPresetColors;
  cpPresetColorsClass = "cp-preset-colors-class";
  cpMaxPresetColorsLength = 6;
  cpPresetEmptyMessage = "No colors added";
  cpPresetEmptyMessageClass = "preset-empty-message";
  cpAddColorButton = false;
  cpAddColorButtonText = "Add color";
  cpAddColorButtonClass = "cp-add-color-button-class";
  cpRemoveColorButtonClass = "cp-remove-color-button-class";
  cpArrowPosition = 0;
  cpExtraTemplate;
  cpInputChange = new EventEmitter(true);
  cpToggleChange = new EventEmitter(true);
  cpSliderChange = new EventEmitter(true);
  cpSliderDragEnd = new EventEmitter(true);
  cpSliderDragStart = new EventEmitter(true);
  colorPickerOpen = new EventEmitter(true);
  colorPickerClose = new EventEmitter(true);
  colorPickerCancel = new EventEmitter(true);
  colorPickerSelect = new EventEmitter(true);
  colorPickerChange = new EventEmitter(false);
  cpCmykColorChange = new EventEmitter(true);
  cpPresetColorsChange = new EventEmitter(true);
  handleClick() {
    this.inputFocus();
  }
  handleFocus() {
    this.inputFocus();
  }
  handleInput(event) {
    this.inputChange(event);
  }
  constructor(injector, cfr, appRef, vcRef, elRef, _service) {
    this.injector = injector;
    this.cfr = cfr;
    this.appRef = appRef;
    this.vcRef = vcRef;
    this.elRef = elRef;
    this._service = _service;
  }
  ngOnDestroy() {
    if (this.cmpRef != null) {
      if (this.viewAttachedToAppRef) {
        this.appRef.detachView(this.cmpRef.hostView);
      }
      this.cmpRef.destroy();
      this.cmpRef = null;
      this.dialog = null;
    }
  }
  ngOnChanges(changes) {
    if (changes.cpToggle && !this.cpDisabled) {
      if (changes.cpToggle.currentValue) {
        this.openDialog();
      } else if (!changes.cpToggle.currentValue) {
        this.closeDialog();
      }
    }
    if (changes.colorPicker) {
      if (this.dialog && !this.ignoreChanges) {
        if (this.cpDialogDisplay === "inline") {
          this.dialog.setInitialColor(changes.colorPicker.currentValue);
        }
        this.dialog.setColorFromString(changes.colorPicker.currentValue, false);
        if (this.cpUseRootViewContainer && this.cpDialogDisplay !== "inline") {
          this.cmpRef.changeDetectorRef.detectChanges();
        }
      }
      this.ignoreChanges = false;
    }
    if (changes.cpPresetLabel || changes.cpPresetColors) {
      if (this.dialog) {
        this.dialog.setPresetConfig(this.cpPresetLabel, this.cpPresetColors);
      }
    }
  }
  openDialog() {
    if (!this.dialogCreated) {
      let vcRef = this.vcRef;
      this.dialogCreated = true;
      this.viewAttachedToAppRef = false;
      if (this.cpUseRootViewContainer && this.cpDialogDisplay !== "inline") {
        const classOfRootComponent = this.appRef.componentTypes[0];
        const appInstance = this.injector.get(classOfRootComponent, Injector.NULL);
        if (appInstance !== Injector.NULL) {
          vcRef = appInstance.vcRef || appInstance.viewContainerRef || this.vcRef;
          if (NG_DEV_MODE && vcRef === this.vcRef) {
            console.warn("You are using cpUseRootViewContainer, but the root component is not exposing viewContainerRef!Please expose it by adding 'public vcRef: ViewContainerRef' to the constructor.");
          }
        } else {
          this.viewAttachedToAppRef = true;
        }
      }
      const compFactory = this.cfr.resolveComponentFactory(ColorPickerComponent);
      if (this.viewAttachedToAppRef) {
        this.cmpRef = compFactory.create(this.injector);
        this.appRef.attachView(this.cmpRef.hostView);
        document.body.appendChild(this.cmpRef.hostView.rootNodes[0]);
      } else {
        const injector = Injector.create({
          providers: [],
          // We shouldn't use `vcRef.parentInjector` since it's been deprecated long time ago and might be removed
          // in newer Angular versions: https://github.com/angular/angular/pull/25174.
          parent: vcRef.injector
        });
        this.cmpRef = vcRef.createComponent(compFactory, 0, injector, []);
      }
      this.cmpRef.instance.setupDialog(this, this.elRef, this.colorPicker, this.cpWidth, this.cpHeight, this.cpDialogDisplay, this.cpFallbackColor, this.cpColorMode, this.cpCmykEnabled, this.cpAlphaChannel, this.cpOutputFormat, this.cpDisableInput, this.cpIgnoredElements, this.cpSaveClickOutside, this.cpCloseClickOutside, this.cpUseRootViewContainer, this.cpPosition, this.cpPositionOffset, this.cpPositionRelativeToArrow, this.cpPresetLabel, this.cpPresetColors, this.cpPresetColorsClass, this.cpMaxPresetColorsLength, this.cpPresetEmptyMessage, this.cpPresetEmptyMessageClass, this.cpOKButton, this.cpOKButtonClass, this.cpOKButtonText, this.cpCancelButton, this.cpCancelButtonClass, this.cpCancelButtonText, this.cpAddColorButton, this.cpAddColorButtonClass, this.cpAddColorButtonText, this.cpRemoveColorButtonClass, this.cpEyeDropper, this.elRef, this.cpExtraTemplate);
      this.dialog = this.cmpRef.instance;
      if (this.vcRef !== vcRef) {
        this.cmpRef.changeDetectorRef.detectChanges();
      }
    } else if (this.dialog) {
      this.cmpRef.instance.cpAlphaChannel = this.cpAlphaChannel;
      this.dialog.openDialog(this.colorPicker);
    }
  }
  closeDialog() {
    if (this.dialog && this.cpDialogDisplay === "popup") {
      this.dialog.closeDialog();
    }
  }
  cmykChanged(value) {
    this.cpCmykColorChange.emit(value);
  }
  stateChanged(state) {
    this.cpToggleChange.emit(state);
    if (state) {
      this.colorPickerOpen.emit(this.colorPicker);
    } else {
      this.colorPickerClose.emit(this.colorPicker);
    }
  }
  colorChanged(value, ignore = true) {
    this.ignoreChanges = ignore;
    this.colorPickerChange.emit(value);
  }
  colorSelected(value) {
    this.colorPickerSelect.emit(value);
  }
  colorCanceled() {
    this.colorPickerCancel.emit();
  }
  inputFocus() {
    const element = this.elRef.nativeElement;
    const ignored = this.cpIgnoredElements.filter((item) => item === element);
    if (!this.cpDisabled && !ignored.length) {
      if (typeof document !== "undefined" && element === document.activeElement) {
        this.openDialog();
      } else if (!this.dialog || !this.dialog.show) {
        this.openDialog();
      } else {
        this.closeDialog();
      }
    }
  }
  inputChange(event) {
    if (this.dialog) {
      this.dialog.setColorFromString(event.target.value, true);
    } else {
      this.colorPicker = event.target.value;
      this.colorPickerChange.emit(this.colorPicker);
    }
  }
  inputChanged(event) {
    this.cpInputChange.emit(event);
  }
  sliderChanged(event) {
    this.cpSliderChange.emit(event);
  }
  sliderDragEnd(event) {
    this.cpSliderDragEnd.emit(event);
  }
  sliderDragStart(event) {
    this.cpSliderDragStart.emit(event);
  }
  presetColorsChanged(value) {
    this.cpPresetColorsChange.emit(value);
  }
  static \u0275fac = function ColorPickerDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColorPickerDirective)(\u0275\u0275directiveInject(Injector), \u0275\u0275directiveInject(ComponentFactoryResolver$1), \u0275\u0275directiveInject(ApplicationRef), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ColorPickerService));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _ColorPickerDirective,
    selectors: [["", "colorPicker", ""]],
    hostBindings: function ColorPickerDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function ColorPickerDirective_click_HostBindingHandler() {
          return ctx.handleClick();
        })("focus", function ColorPickerDirective_focus_HostBindingHandler() {
          return ctx.handleFocus();
        })("input", function ColorPickerDirective_input_HostBindingHandler($event) {
          return ctx.handleInput($event);
        });
      }
    },
    inputs: {
      colorPicker: "colorPicker",
      cpWidth: "cpWidth",
      cpHeight: "cpHeight",
      cpToggle: "cpToggle",
      cpDisabled: "cpDisabled",
      cpIgnoredElements: "cpIgnoredElements",
      cpFallbackColor: "cpFallbackColor",
      cpColorMode: "cpColorMode",
      cpCmykEnabled: "cpCmykEnabled",
      cpOutputFormat: "cpOutputFormat",
      cpAlphaChannel: "cpAlphaChannel",
      cpDisableInput: "cpDisableInput",
      cpDialogDisplay: "cpDialogDisplay",
      cpSaveClickOutside: "cpSaveClickOutside",
      cpCloseClickOutside: "cpCloseClickOutside",
      cpUseRootViewContainer: "cpUseRootViewContainer",
      cpPosition: "cpPosition",
      cpPositionOffset: "cpPositionOffset",
      cpPositionRelativeToArrow: "cpPositionRelativeToArrow",
      cpOKButton: "cpOKButton",
      cpOKButtonText: "cpOKButtonText",
      cpOKButtonClass: "cpOKButtonClass",
      cpCancelButton: "cpCancelButton",
      cpCancelButtonText: "cpCancelButtonText",
      cpCancelButtonClass: "cpCancelButtonClass",
      cpEyeDropper: "cpEyeDropper",
      cpPresetLabel: "cpPresetLabel",
      cpPresetColors: "cpPresetColors",
      cpPresetColorsClass: "cpPresetColorsClass",
      cpMaxPresetColorsLength: "cpMaxPresetColorsLength",
      cpPresetEmptyMessage: "cpPresetEmptyMessage",
      cpPresetEmptyMessageClass: "cpPresetEmptyMessageClass",
      cpAddColorButton: "cpAddColorButton",
      cpAddColorButtonText: "cpAddColorButtonText",
      cpAddColorButtonClass: "cpAddColorButtonClass",
      cpRemoveColorButtonClass: "cpRemoveColorButtonClass",
      cpArrowPosition: "cpArrowPosition",
      cpExtraTemplate: "cpExtraTemplate"
    },
    outputs: {
      cpInputChange: "cpInputChange",
      cpToggleChange: "cpToggleChange",
      cpSliderChange: "cpSliderChange",
      cpSliderDragEnd: "cpSliderDragEnd",
      cpSliderDragStart: "cpSliderDragStart",
      colorPickerOpen: "colorPickerOpen",
      colorPickerClose: "colorPickerClose",
      colorPickerCancel: "colorPickerCancel",
      colorPickerSelect: "colorPickerSelect",
      colorPickerChange: "colorPickerChange",
      cpCmykColorChange: "cpCmykColorChange",
      cpPresetColorsChange: "cpPresetColorsChange"
    },
    exportAs: ["ngxColorPicker"],
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPickerDirective, [{
    type: Directive,
    args: [{
      selector: "[colorPicker]",
      exportAs: "ngxColorPicker"
    }]
  }], () => [{
    type: Injector
  }, {
    type: ComponentFactoryResolver$1
  }, {
    type: ApplicationRef
  }, {
    type: ViewContainerRef
  }, {
    type: ElementRef
  }, {
    type: ColorPickerService
  }], {
    colorPicker: [{
      type: Input
    }],
    cpWidth: [{
      type: Input
    }],
    cpHeight: [{
      type: Input
    }],
    cpToggle: [{
      type: Input
    }],
    cpDisabled: [{
      type: Input
    }],
    cpIgnoredElements: [{
      type: Input
    }],
    cpFallbackColor: [{
      type: Input
    }],
    cpColorMode: [{
      type: Input
    }],
    cpCmykEnabled: [{
      type: Input
    }],
    cpOutputFormat: [{
      type: Input
    }],
    cpAlphaChannel: [{
      type: Input
    }],
    cpDisableInput: [{
      type: Input
    }],
    cpDialogDisplay: [{
      type: Input
    }],
    cpSaveClickOutside: [{
      type: Input
    }],
    cpCloseClickOutside: [{
      type: Input
    }],
    cpUseRootViewContainer: [{
      type: Input
    }],
    cpPosition: [{
      type: Input
    }],
    cpPositionOffset: [{
      type: Input
    }],
    cpPositionRelativeToArrow: [{
      type: Input
    }],
    cpOKButton: [{
      type: Input
    }],
    cpOKButtonText: [{
      type: Input
    }],
    cpOKButtonClass: [{
      type: Input
    }],
    cpCancelButton: [{
      type: Input
    }],
    cpCancelButtonText: [{
      type: Input
    }],
    cpCancelButtonClass: [{
      type: Input
    }],
    cpEyeDropper: [{
      type: Input
    }],
    cpPresetLabel: [{
      type: Input
    }],
    cpPresetColors: [{
      type: Input
    }],
    cpPresetColorsClass: [{
      type: Input
    }],
    cpMaxPresetColorsLength: [{
      type: Input
    }],
    cpPresetEmptyMessage: [{
      type: Input
    }],
    cpPresetEmptyMessageClass: [{
      type: Input
    }],
    cpAddColorButton: [{
      type: Input
    }],
    cpAddColorButtonText: [{
      type: Input
    }],
    cpAddColorButtonClass: [{
      type: Input
    }],
    cpRemoveColorButtonClass: [{
      type: Input
    }],
    cpArrowPosition: [{
      type: Input
    }],
    cpExtraTemplate: [{
      type: Input
    }],
    cpInputChange: [{
      type: Output
    }],
    cpToggleChange: [{
      type: Output
    }],
    cpSliderChange: [{
      type: Output
    }],
    cpSliderDragEnd: [{
      type: Output
    }],
    cpSliderDragStart: [{
      type: Output
    }],
    colorPickerOpen: [{
      type: Output
    }],
    colorPickerClose: [{
      type: Output
    }],
    colorPickerCancel: [{
      type: Output
    }],
    colorPickerSelect: [{
      type: Output
    }],
    colorPickerChange: [{
      type: Output
    }],
    cpCmykColorChange: [{
      type: Output
    }],
    cpPresetColorsChange: [{
      type: Output
    }],
    handleClick: [{
      type: HostListener,
      args: ["click"]
    }],
    handleFocus: [{
      type: HostListener,
      args: ["focus"]
    }],
    handleInput: [{
      type: HostListener,
      args: ["input", ["$event"]]
    }]
  });
})();
var ColorPickerModule = class _ColorPickerModule {
  static \u0275fac = function ColorPickerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColorPickerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ColorPickerModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPickerModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [ColorPickerDirective],
      declarations: [ColorPickerComponent, ColorPickerDirective, TextDirective, SliderDirective]
    }]
  }], null, null);
})();

// node_modules/overlayscrollbars/overlayscrollbars.mjs
var createCache = (t2, n2) => {
  const {
    o: o2,
    i: s2,
    u: e2
  } = t2;
  let c2 = o2;
  let r2;
  const cacheUpdateContextual = (t3, n3) => {
    const o3 = c2;
    const l2 = t3;
    const i2 = n3 || (s2 ? !s2(o3, l2) : o3 !== l2);
    if (i2 || e2) {
      c2 = l2;
      r2 = o3;
    }
    return [c2, i2, r2];
  };
  const cacheUpdateIsolated = (t3) => cacheUpdateContextual(n2(c2, r2), t3);
  const getCurrentCache = (t3) => [c2, !!t3, r2];
  return [n2 ? cacheUpdateIsolated : cacheUpdateContextual, getCurrentCache];
};
var t = typeof window !== "undefined" && typeof HTMLElement !== "undefined" && !!window.document;
var n = t ? window : {};
var o = Math.max;
var s = Math.min;
var e = Math.round;
var c = Math.abs;
var r = Math.sign;
var l = n.cancelAnimationFrame;
var i = n.requestAnimationFrame;
var a = n.setTimeout;
var u = n.clearTimeout;
var getApi = (t2) => typeof n[t2] !== "undefined" ? n[t2] : void 0;
var _ = getApi("MutationObserver");
var d = getApi("IntersectionObserver");
var f = getApi("ResizeObserver");
var v = getApi("ScrollTimeline");
var isUndefined = (t2) => t2 === void 0;
var isNull = (t2) => t2 === null;
var isNumber = (t2) => typeof t2 === "number";
var isString = (t2) => typeof t2 === "string";
var isBoolean = (t2) => typeof t2 === "boolean";
var isFunction = (t2) => typeof t2 === "function";
var isArray = (t2) => Array.isArray(t2);
var isObject = (t2) => typeof t2 === "object" && !isArray(t2) && !isNull(t2);
var isArrayLike = (t2) => {
  const n2 = !!t2 && t2.length;
  const o2 = isNumber(n2) && n2 > -1 && n2 % 1 == 0;
  return isArray(t2) || !isFunction(t2) && o2 ? n2 > 0 && isObject(t2) ? n2 - 1 in t2 : true : false;
};
var isPlainObject = (t2) => !!t2 && t2.constructor === Object;
var isHTMLElement = (t2) => t2 instanceof HTMLElement;
var isElement = (t2) => t2 instanceof Element;
function each(t2, n2) {
  if (isArrayLike(t2)) {
    for (let o2 = 0; o2 < t2.length; o2++) {
      if (n2(t2[o2], o2, t2) === false) {
        break;
      }
    }
  } else if (t2) {
    each(Object.keys(t2), (o2) => n2(t2[o2], o2, t2));
  }
  return t2;
}
var inArray = (t2, n2) => t2.indexOf(n2) >= 0;
var concat2 = (t2, n2) => t2.concat(n2);
var push = (t2, n2, o2) => {
  !o2 && !isString(n2) && isArrayLike(n2) ? Array.prototype.push.apply(t2, n2) : t2.push(n2);
  return t2;
};
var from = (t2) => Array.from(t2 || []);
var createOrKeepArray = (t2) => {
  if (isArray(t2)) {
    return t2;
  }
  return !isString(t2) && isArrayLike(t2) ? from(t2) : [t2];
};
var isEmptyArray = (t2) => !!t2 && !t2.length;
var deduplicateArray = (t2) => from(new Set(t2));
var runEachAndClear = (t2, n2, o2) => {
  const runFn = (t3) => t3 ? t3.apply(void 0, n2 || []) : true;
  each(t2, runFn);
  !o2 && (t2.length = 0);
};
var p = "paddingTop";
var h = "paddingRight";
var g = "paddingLeft";
var b = "paddingBottom";
var w = "marginLeft";
var y = "marginRight";
var S = "marginBottom";
var m = "overflowX";
var O = "overflowY";
var $ = "width";
var C = "height";
var x = "visible";
var H = "hidden";
var E = "scroll";
var capitalizeFirstLetter = (t2) => {
  const n2 = String(t2 || "");
  return n2 ? n2[0].toUpperCase() + n2.slice(1) : "";
};
var equal = (t2, n2, o2, s2) => {
  if (t2 && n2) {
    let e2 = true;
    each(o2, (o3) => {
      const c2 = s2 ? s2(t2[o3]) : t2[o3];
      const r2 = s2 ? s2(n2[o3]) : n2[o3];
      if (c2 !== r2) {
        e2 = false;
      }
    });
    return e2;
  }
  return false;
};
var equalWH = (t2, n2) => equal(t2, n2, ["w", "h"]);
var equalXY = (t2, n2) => equal(t2, n2, ["x", "y"]);
var equalTRBL = (t2, n2) => equal(t2, n2, ["t", "r", "b", "l"]);
var noop = () => {
};
var bind = (t2, ...n2) => t2.bind(0, ...n2);
var selfClearTimeout = (t2) => {
  let n2;
  const o2 = t2 ? a : i;
  const s2 = t2 ? u : l;
  return [(e2) => {
    s2(n2);
    n2 = o2(() => e2(), isFunction(t2) ? t2() : t2);
  }, () => s2(n2)];
};
var debounce = (t2, n2) => {
  const {
    _: o2,
    v: s2,
    p: e2,
    S: c2
  } = n2 || {};
  let r2;
  let _2;
  let d2;
  let f2;
  let v2 = noop;
  const p2 = function invokeFunctionToDebounce(n3) {
    v2();
    u(r2);
    f2 = r2 = _2 = void 0;
    v2 = noop;
    t2.apply(this, n3);
  };
  const mergeParms = (t3) => c2 && _2 ? c2(_2, t3) : t3;
  const flush = () => {
    if (v2 !== noop) {
      p2(mergeParms(d2) || d2);
    }
  };
  const h2 = function debouncedFn() {
    const t3 = from(arguments);
    const n3 = isFunction(o2) ? o2() : o2;
    const c3 = isNumber(n3) && n3 >= 0;
    if (c3) {
      const o3 = isFunction(s2) ? s2() : s2;
      const c4 = isNumber(o3) && o3 >= 0;
      const h3 = n3 > 0 ? a : i;
      const g2 = n3 > 0 ? u : l;
      const b2 = mergeParms(t3);
      const w2 = b2 || t3;
      const y2 = p2.bind(0, w2);
      let S2;
      v2();
      if (e2 && !f2) {
        y2();
        f2 = true;
        S2 = h3(() => f2 = void 0, n3);
      } else {
        S2 = h3(y2, n3);
        if (c4 && !r2) {
          r2 = a(flush, o3);
        }
      }
      v2 = () => g2(S2);
      _2 = d2 = w2;
    } else {
      p2(t3);
    }
  };
  h2.m = flush;
  return h2;
};
var hasOwnProperty = (t2, n2) => Object.prototype.hasOwnProperty.call(t2, n2);
var keys = (t2) => t2 ? Object.keys(t2) : [];
var assignDeep = (t2, n2, o2, s2, e2, c2, r2) => {
  const l2 = [n2, o2, s2, e2, c2, r2];
  if ((typeof t2 !== "object" || isNull(t2)) && !isFunction(t2)) {
    t2 = {};
  }
  each(l2, (n3) => {
    each(n3, (o3, s3) => {
      const e3 = n3[s3];
      if (t2 === e3) {
        return true;
      }
      const c3 = isArray(e3);
      if (e3 && isPlainObject(e3)) {
        const n4 = t2[s3];
        let o4 = n4;
        if (c3 && !isArray(n4)) {
          o4 = [];
        } else if (!c3 && !isPlainObject(n4)) {
          o4 = {};
        }
        t2[s3] = assignDeep(o4, e3);
      } else {
        t2[s3] = c3 ? e3.slice() : e3;
      }
    });
  });
  return t2;
};
var removeUndefinedProperties = (t2, n2) => each(assignDeep({}, t2), (t3, o2, s2) => {
  if (t3 === void 0) {
    delete s2[o2];
  } else if (n2 && t3 && isPlainObject(t3)) {
    s2[o2] = removeUndefinedProperties(t3, n2);
  }
});
var isEmptyObject = (t2) => !keys(t2).length;
var capNumber = (t2, n2, e2) => o(t2, s(n2, e2));
var getDomTokensArray = (t2) => deduplicateArray((isArray(t2) ? t2 : (t2 || "").split(" ")).filter((t3) => t3));
var getAttr = (t2, n2) => t2 && t2.getAttribute(n2);
var hasAttr = (t2, n2) => t2 && t2.hasAttribute(n2);
var setAttrs = (t2, n2, o2) => {
  each(getDomTokensArray(n2), (n3) => {
    t2 && t2.setAttribute(n3, String(o2 || ""));
  });
};
var removeAttrs = (t2, n2) => {
  each(getDomTokensArray(n2), (n3) => t2 && t2.removeAttribute(n3));
};
var domTokenListAttr = (t2, n2) => {
  const o2 = getDomTokensArray(getAttr(t2, n2));
  const s2 = bind(setAttrs, t2, n2);
  const domTokenListOperation = (t3, n3) => {
    const s3 = new Set(o2);
    each(getDomTokensArray(t3), (t4) => {
      s3[n3](t4);
    });
    return from(s3).join(" ");
  };
  return {
    O: (t3) => s2(domTokenListOperation(t3, "delete")),
    $: (t3) => s2(domTokenListOperation(t3, "add")),
    C: (t3) => {
      const n3 = getDomTokensArray(t3);
      return n3.reduce((t4, n4) => t4 && o2.includes(n4), n3.length > 0);
    }
  };
};
var removeAttrClass = (t2, n2, o2) => {
  domTokenListAttr(t2, n2).O(o2);
  return bind(addAttrClass, t2, n2, o2);
};
var addAttrClass = (t2, n2, o2) => {
  domTokenListAttr(t2, n2).$(o2);
  return bind(removeAttrClass, t2, n2, o2);
};
var addRemoveAttrClass = (t2, n2, o2, s2) => (s2 ? addAttrClass : removeAttrClass)(t2, n2, o2);
var hasAttrClass = (t2, n2, o2) => domTokenListAttr(t2, n2).C(o2);
var createDomTokenListClass = (t2) => domTokenListAttr(t2, "class");
var removeClass = (t2, n2) => {
  createDomTokenListClass(t2).O(n2);
};
var addClass = (t2, n2) => {
  createDomTokenListClass(t2).$(n2);
  return bind(removeClass, t2, n2);
};
var find = (t2, n2) => {
  const o2 = n2 ? isElement(n2) && n2 : document;
  return o2 ? from(o2.querySelectorAll(t2)) : [];
};
var findFirst = (t2, n2) => {
  const o2 = n2 ? isElement(n2) && n2 : document;
  return o2 && o2.querySelector(t2);
};
var is = (t2, n2) => isElement(t2) && t2.matches(n2);
var isBodyElement = (t2) => is(t2, "body");
var contents = (t2) => t2 ? from(t2.childNodes) : [];
var parent = (t2) => t2 && t2.parentElement;
var closest = (t2, n2) => isElement(t2) && t2.closest(n2);
var getFocusedElement = (t2) => (t2 || document).activeElement;
var liesBetween = (t2, n2, o2) => {
  const s2 = closest(t2, n2);
  const e2 = t2 && findFirst(o2, s2);
  const c2 = closest(e2, n2) === s2;
  return s2 && e2 ? s2 === t2 || e2 === t2 || c2 && closest(closest(t2, o2), n2) !== s2 : false;
};
var removeElements = (t2) => {
  each(createOrKeepArray(t2), (t3) => {
    const n2 = parent(t3);
    t3 && n2 && n2.removeChild(t3);
  });
};
var appendChildren = (t2, n2) => bind(removeElements, t2 && n2 && each(createOrKeepArray(n2), (n3) => {
  n3 && t2.appendChild(n3);
}));
var createDiv = (t2) => {
  const n2 = document.createElement("div");
  setAttrs(n2, "class", t2);
  return n2;
};
var createDOM = (t2) => {
  const n2 = createDiv();
  n2.innerHTML = t2.trim();
  return each(contents(n2), (t3) => removeElements(t3));
};
var getCSSVal = (t2, n2) => t2.getPropertyValue(n2) || t2[n2] || "";
var validFiniteNumber = (t2) => {
  const n2 = t2 || 0;
  return isFinite(n2) ? n2 : 0;
};
var parseToZeroOrNumber = (t2) => validFiniteNumber(parseFloat(t2 || ""));
var roundCssNumber = (t2) => Math.round(t2 * 1e4) / 1e4;
var numberToCssPx = (t2) => `${roundCssNumber(validFiniteNumber(t2))}px`;
function setStyles(t2, n2) {
  t2 && n2 && each(n2, (n3, o2) => {
    try {
      const s2 = t2.style;
      const e2 = isNull(n3) || isBoolean(n3) ? "" : isNumber(n3) ? numberToCssPx(n3) : n3;
      if (o2.indexOf("--") === 0) {
        s2.setProperty(o2, e2);
      } else {
        s2[o2] = e2;
      }
    } catch (s2) {
    }
  });
}
function getStyles(t2, o2, s2) {
  const e2 = isString(o2);
  let c2 = e2 ? "" : {};
  if (t2) {
    const r2 = n.getComputedStyle(t2, s2) || t2.style;
    c2 = e2 ? getCSSVal(r2, o2) : from(o2).reduce((t3, n2) => {
      t3[n2] = getCSSVal(r2, n2);
      return t3;
    }, c2);
  }
  return c2;
}
var topRightBottomLeft = (t2, n2, o2) => {
  const s2 = n2 ? `${n2}-` : "";
  const e2 = o2 ? `-${o2}` : "";
  const c2 = `${s2}top${e2}`;
  const r2 = `${s2}right${e2}`;
  const l2 = `${s2}bottom${e2}`;
  const i2 = `${s2}left${e2}`;
  const a2 = getStyles(t2, [c2, r2, l2, i2]);
  return {
    t: parseToZeroOrNumber(a2[c2]),
    r: parseToZeroOrNumber(a2[r2]),
    b: parseToZeroOrNumber(a2[l2]),
    l: parseToZeroOrNumber(a2[i2])
  };
};
var getTrasformTranslateValue = (t2, n2) => `translate${isObject(t2) ? `(${t2.x},${t2.y})` : `${n2 ? "X" : "Y"}(${t2})`}`;
var elementHasDimensions = (t2) => !!(t2.offsetWidth || t2.offsetHeight || t2.getClientRects().length);
var z = {
  w: 0,
  h: 0
};
var getElmWidthHeightProperty = (t2, n2) => n2 ? {
  w: n2[`${t2}Width`],
  h: n2[`${t2}Height`]
} : z;
var getWindowSize = (t2) => getElmWidthHeightProperty("inner", t2 || n);
var I = bind(getElmWidthHeightProperty, "offset");
var A = bind(getElmWidthHeightProperty, "client");
var D = bind(getElmWidthHeightProperty, "scroll");
var getFractionalSize = (t2) => {
  const n2 = parseFloat(getStyles(t2, $)) || 0;
  const o2 = parseFloat(getStyles(t2, C)) || 0;
  return {
    w: n2 - e(n2),
    h: o2 - e(o2)
  };
};
var getBoundingClientRect = (t2) => t2.getBoundingClientRect();
var hasDimensions = (t2) => !!t2 && elementHasDimensions(t2);
var domRectHasDimensions = (t2) => !!(t2 && (t2[C] || t2[$]));
var domRectAppeared = (t2, n2) => {
  const o2 = domRectHasDimensions(t2);
  const s2 = domRectHasDimensions(n2);
  return !s2 && o2;
};
var removeEventListener = (t2, n2, o2, s2) => {
  each(getDomTokensArray(n2), (n3) => {
    t2 && t2.removeEventListener(n3, o2, s2);
  });
};
var addEventListener = (t2, n2, o2, s2) => {
  var e2;
  const c2 = (e2 = s2 && s2.H) != null ? e2 : true;
  const r2 = s2 && s2.I || false;
  const l2 = s2 && s2.A || false;
  const i2 = {
    passive: c2,
    capture: r2
  };
  return bind(runEachAndClear, getDomTokensArray(n2).map((n3) => {
    const s3 = l2 ? (e3) => {
      removeEventListener(t2, n3, s3, r2);
      o2 && o2(e3);
    } : o2;
    t2 && t2.addEventListener(n3, s3, i2);
    return bind(removeEventListener, t2, n3, s3, r2);
  }));
};
var stopPropagation = (t2) => t2.stopPropagation();
var preventDefault = (t2) => t2.preventDefault();
var stopAndPrevent = (t2) => stopPropagation(t2) || preventDefault(t2);
var scrollElementTo = (t2, n2) => {
  const {
    x: o2,
    y: s2
  } = isNumber(n2) ? {
    x: n2,
    y: n2
  } : n2 || {};
  isNumber(o2) && (t2.scrollLeft = o2);
  isNumber(s2) && (t2.scrollTop = s2);
};
var getElementScroll = (t2) => ({
  x: t2.scrollLeft,
  y: t2.scrollTop
});
var getZeroScrollCoordinates = () => ({
  D: {
    x: 0,
    y: 0
  },
  M: {
    x: 0,
    y: 0
  }
});
var sanitizeScrollCoordinates = (t2, n2) => {
  const {
    D: o2,
    M: s2
  } = t2;
  const {
    w: e2,
    h: l2
  } = n2;
  const sanitizeAxis = (t3, n3, o3) => {
    let s3 = r(t3) * o3;
    let e3 = r(n3) * o3;
    if (s3 === e3) {
      const o4 = c(t3);
      const r2 = c(n3);
      e3 = o4 > r2 ? 0 : e3;
      s3 = o4 < r2 ? 0 : s3;
    }
    s3 = s3 === e3 ? 0 : s3;
    return [s3 + 0, e3 + 0];
  };
  const [i2, a2] = sanitizeAxis(o2.x, s2.x, e2);
  const [u2, _2] = sanitizeAxis(o2.y, s2.y, l2);
  return {
    D: {
      x: i2,
      y: u2
    },
    M: {
      x: a2,
      y: _2
    }
  };
};
var isDefaultDirectionScrollCoordinates = ({
  D: t2,
  M: n2
}) => {
  const getAxis = (t3, n3) => t3 === 0 && t3 <= n3;
  return {
    x: getAxis(t2.x, n2.x),
    y: getAxis(t2.y, n2.y)
  };
};
var getScrollCoordinatesPercent = ({
  D: t2,
  M: n2
}, o2) => {
  const getAxis = (t3, n3, o3) => capNumber(0, 1, (t3 - o3) / (t3 - n3) || 0);
  return {
    x: getAxis(t2.x, n2.x, o2.x),
    y: getAxis(t2.y, n2.y, o2.y)
  };
};
var focusElement = (t2) => {
  if (t2 && t2.focus) {
    t2.focus({
      preventScroll: true
    });
  }
};
var manageListener = (t2, n2) => {
  each(createOrKeepArray(n2), t2);
};
var createEventListenerHub = (t2) => {
  const n2 = /* @__PURE__ */ new Map();
  const removeEvent = (t3, o2) => {
    if (t3) {
      const s2 = n2.get(t3);
      manageListener((t4) => {
        if (s2) {
          s2[t4 ? "delete" : "clear"](t4);
        }
      }, o2);
    } else {
      n2.forEach((t4) => {
        t4.clear();
      });
      n2.clear();
    }
  };
  const addEvent = (t3, o2) => {
    if (isString(t3)) {
      const s3 = n2.get(t3) || /* @__PURE__ */ new Set();
      n2.set(t3, s3);
      manageListener((t4) => {
        isFunction(t4) && s3.add(t4);
      }, o2);
      return bind(removeEvent, t3, o2);
    }
    if (isBoolean(o2) && o2) {
      removeEvent();
    }
    const s2 = keys(t3);
    const e2 = [];
    each(s2, (n3) => {
      const o3 = t3[n3];
      o3 && push(e2, addEvent(n3, o3));
    });
    return bind(runEachAndClear, e2);
  };
  const triggerEvent = (t3, o2) => {
    each(from(n2.get(t3)), (t4) => {
      if (o2 && !isEmptyArray(o2)) {
        t4.apply(0, o2);
      } else {
        t4();
      }
    });
  };
  addEvent(t2 || {});
  return [addEvent, removeEvent, triggerEvent];
};
var opsStringify = (t2) => JSON.stringify(t2, (t3, n2) => {
  if (isFunction(n2)) {
    throw 0;
  }
  return n2;
});
var getPropByPath = (t2, n2) => t2 ? `${n2}`.split(".").reduce((t3, n3) => t3 && hasOwnProperty(t3, n3) ? t3[n3] : void 0, t2) : void 0;
var M = {
  paddingAbsolute: false,
  showNativeOverlaidScrollbars: false,
  update: {
    elementEvents: [["img", "load"]],
    debounce: [0, 33],
    attributes: null,
    ignoreMutation: null
  },
  overflow: {
    x: "scroll",
    y: "scroll"
  },
  scrollbars: {
    theme: "os-theme-dark",
    visibility: "auto",
    autoHide: "never",
    autoHideDelay: 1300,
    autoHideSuspend: false,
    dragScroll: true,
    clickScroll: false,
    pointers: ["mouse", "touch", "pen"]
  }
};
var getOptionsDiff = (t2, n2) => {
  const o2 = {};
  const s2 = concat2(keys(n2), keys(t2));
  each(s2, (s3) => {
    const e2 = t2[s3];
    const c2 = n2[s3];
    if (isObject(e2) && isObject(c2)) {
      assignDeep(o2[s3] = {}, getOptionsDiff(e2, c2));
      if (isEmptyObject(o2[s3])) {
        delete o2[s3];
      }
    } else if (hasOwnProperty(n2, s3) && c2 !== e2) {
      let t3 = true;
      if (isArray(e2) || isArray(c2)) {
        try {
          if (opsStringify(e2) === opsStringify(c2)) {
            t3 = false;
          }
        } catch (r2) {
        }
      }
      if (t3) {
        o2[s3] = c2;
      }
    }
  });
  return o2;
};
var createOptionCheck = (t2, n2, o2) => (s2) => [getPropByPath(t2, s2), o2 || getPropByPath(n2, s2) !== void 0];
var T = `data-overlayscrollbars`;
var k = "os-environment";
var R = `${k}-scrollbar-hidden`;
var V = `${T}-initialize`;
var L = "noClipping";
var U = `${T}-body`;
var P = T;
var N = "host";
var q = `${T}-viewport`;
var B = m;
var F = O;
var j = "arrange";
var X = "measuring";
var Y = "scrolling";
var W = "scrollbarHidden";
var J = "noContent";
var G = `${T}-padding`;
var K = `${T}-content`;
var Q = "os-size-observer";
var Z = `${Q}-appear`;
var tt = `${Q}-listener`;
var nt = `${tt}-scroll`;
var ot = `${tt}-item`;
var st = `${ot}-final`;
var et = "os-trinsic-observer";
var ct = "os-theme-none";
var rt = "os-scrollbar";
var lt = `${rt}-rtl`;
var it = `${rt}-horizontal`;
var at = `${rt}-vertical`;
var ut = `${rt}-track`;
var _t = `${rt}-handle`;
var dt = `${rt}-visible`;
var ft = `${rt}-cornerless`;
var vt = `${rt}-interaction`;
var pt = `${rt}-unusable`;
var ht = `${rt}-auto-hide`;
var gt = `${ht}-hidden`;
var bt = `${rt}-wheel`;
var wt = `${ut}-interactive`;
var yt = `${_t}-interactive`;
var St;
var getNonce = () => St;
var setNonce = (t2) => {
  St = t2;
};
var mt;
var createEnvironment = () => {
  const getNativeScrollbarSize = (t3, n2, o3) => {
    appendChildren(document.body, t3);
    appendChildren(document.body, t3);
    const s3 = A(t3);
    const e3 = I(t3);
    const c3 = getFractionalSize(n2);
    o3 && removeElements(t3);
    return {
      x: e3.h - s3.h + c3.h,
      y: e3.w - s3.w + c3.w
    };
  };
  const getNativeScrollbarsHiding = (t3) => {
    let n2 = false;
    const o3 = addClass(t3, R);
    try {
      n2 = getStyles(t3, "scrollbar-width") === "none" || getStyles(t3, "display", "::-webkit-scrollbar") === "none";
    } catch (s3) {
    }
    o3();
    return n2;
  };
  const t2 = `.${k}{scroll-behavior:auto!important;position:fixed;opacity:0;visibility:hidden;overflow:scroll;height:200px;width:200px;z-index:-1}.${k} div{width:200%;height:200%;margin:10px 0}.${R}{scrollbar-width:none!important}.${R}::-webkit-scrollbar,.${R}::-webkit-scrollbar-corner{appearance:none!important;display:none!important;width:0!important;height:0!important}`;
  const o2 = createDOM(`<div class="${k}"><div></div><style>${t2}</style></div>`);
  const s2 = o2[0];
  const e2 = s2.firstChild;
  const c2 = s2.lastChild;
  const r2 = getNonce();
  if (r2) {
    c2.nonce = r2;
  }
  const [l2, , i2] = createEventListenerHub();
  const [a2, u2] = createCache({
    o: getNativeScrollbarSize(s2, e2),
    i: equalXY
  }, bind(getNativeScrollbarSize, s2, e2, true));
  const [_2] = u2();
  const d2 = getNativeScrollbarsHiding(s2);
  const f2 = {
    x: _2.x === 0,
    y: _2.y === 0
  };
  const p2 = {
    elements: {
      host: null,
      padding: !d2,
      viewport: (t3) => d2 && isBodyElement(t3) && t3,
      content: false
    },
    scrollbars: {
      slot: true
    },
    cancel: {
      nativeScrollbarsOverlaid: false,
      body: null
    }
  };
  const h2 = assignDeep({}, M);
  const g2 = bind(assignDeep, {}, h2);
  const b2 = bind(assignDeep, {}, p2);
  const w2 = {
    T: _2,
    k: f2,
    R: d2,
    V: !!v,
    L: bind(l2, "r"),
    U: b2,
    P: (t3) => assignDeep(p2, t3) && b2(),
    N: g2,
    q: (t3) => assignDeep(h2, t3) && g2(),
    B: assignDeep({}, p2),
    F: assignDeep({}, h2)
  };
  removeAttrs(s2, "style");
  removeElements(s2);
  addEventListener(n, "resize", () => {
    i2("r", []);
  });
  if (isFunction(n.matchMedia) && !d2 && (!f2.x || !f2.y)) {
    const addZoomListener = (t3) => {
      const o3 = n.matchMedia(`(resolution: ${n.devicePixelRatio}dppx)`);
      addEventListener(o3, "change", () => {
        t3();
        addZoomListener(t3);
      }, {
        A: true
      });
    };
    addZoomListener(() => {
      const [t3, n2] = a2();
      assignDeep(w2.T, t3);
      i2("r", [n2]);
    });
  }
  return w2;
};
var getEnvironment = () => {
  if (!mt) {
    mt = createEnvironment();
  }
  return mt;
};
var resolveInitialization = (t2, n2) => isFunction(n2) ? n2.apply(0, t2) : n2;
var staticInitializationElement = (t2, n2, o2, s2) => {
  const e2 = isUndefined(s2) ? o2 : s2;
  const c2 = resolveInitialization(t2, e2);
  return c2 || n2.apply(0, t2);
};
var dynamicInitializationElement = (t2, n2, o2, s2) => {
  const e2 = isUndefined(s2) ? o2 : s2;
  const c2 = resolveInitialization(t2, e2);
  return !!c2 && (isHTMLElement(c2) ? c2 : n2.apply(0, t2));
};
var cancelInitialization = (t2, n2) => {
  const {
    nativeScrollbarsOverlaid: o2,
    body: s2
  } = n2 || {};
  const {
    k: e2,
    R: c2,
    U: r2
  } = getEnvironment();
  const {
    nativeScrollbarsOverlaid: l2,
    body: i2
  } = r2().cancel;
  const a2 = o2 != null ? o2 : l2;
  const u2 = isUndefined(s2) ? i2 : s2;
  const _2 = (e2.x || e2.y) && a2;
  const d2 = t2 && (isNull(u2) ? !c2 : u2);
  return !!_2 || !!d2;
};
var Ot = /* @__PURE__ */ new WeakMap();
var addInstance = (t2, n2) => {
  Ot.set(t2, n2);
};
var removeInstance = (t2) => {
  Ot.delete(t2);
};
var getInstance = (t2) => Ot.get(t2);
var createEventContentChange = (t2, n2, o2) => {
  let s2 = false;
  const e2 = o2 ? /* @__PURE__ */ new WeakMap() : false;
  const destroy = () => {
    s2 = true;
  };
  const updateElements = (c2) => {
    if (e2 && o2) {
      const r2 = o2.map((n3) => {
        const [o3, s3] = n3 || [];
        const e3 = s3 && o3 ? (c2 || find)(o3, t2) : [];
        return [e3, s3];
      });
      each(r2, (o3) => each(o3[0], (c3) => {
        const r3 = o3[1];
        const l2 = e2.get(c3) || [];
        const i2 = t2.contains(c3);
        if (i2 && r3) {
          const t3 = addEventListener(c3, r3, (o4) => {
            if (s2) {
              t3();
              e2.delete(c3);
            } else {
              n2(o4);
            }
          });
          e2.set(c3, push(l2, t3));
        } else {
          runEachAndClear(l2);
          e2.delete(c3);
        }
      }));
    }
  };
  updateElements();
  return [destroy, updateElements];
};
var createDOMObserver = (t2, n2, o2, s2) => {
  let e2 = false;
  const {
    j: c2,
    X: r2,
    Y: l2,
    W: i2,
    J: a2,
    G: u2
  } = s2 || {};
  const d2 = debounce(() => e2 && o2(true), {
    _: 33,
    v: 99
  });
  const [f2, v2] = createEventContentChange(t2, d2, l2);
  const p2 = c2 || [];
  const h2 = r2 || [];
  const g2 = concat2(p2, h2);
  const observerCallback = (e3, c3) => {
    if (!isEmptyArray(c3)) {
      const r3 = a2 || noop;
      const l3 = u2 || noop;
      const _2 = [];
      const d3 = [];
      let f3 = false;
      let p3 = false;
      each(c3, (o3) => {
        const {
          attributeName: e4,
          target: c4,
          type: a3,
          oldValue: u3,
          addedNodes: v3,
          removedNodes: g3
        } = o3;
        const b3 = a3 === "attributes";
        const w2 = a3 === "childList";
        const y2 = t2 === c4;
        const S2 = b3 && e4;
        const m2 = S2 && getAttr(c4, e4 || "");
        const O2 = isString(m2) ? m2 : null;
        const $2 = S2 && u3 !== O2;
        const C2 = inArray(h2, e4) && $2;
        if (n2 && (w2 || !y2)) {
          const n3 = b3 && $2;
          const a4 = n3 && i2 && is(c4, i2);
          const d4 = a4 ? !r3(c4, e4, u3, O2) : !b3 || n3;
          const f4 = d4 && !l3(o3, !!a4, t2, s2);
          each(v3, (t3) => push(_2, t3));
          each(g3, (t3) => push(_2, t3));
          p3 = p3 || f4;
        }
        if (!n2 && y2 && $2 && !r3(c4, e4, u3, O2)) {
          push(d3, e4);
          f3 = f3 || C2;
        }
      });
      v2((t3) => deduplicateArray(_2).reduce((n3, o3) => {
        push(n3, find(t3, o3));
        return is(o3, t3) ? push(n3, o3) : n3;
      }, []));
      if (n2) {
        !e3 && p3 && o2(false);
        return [false];
      }
      if (!isEmptyArray(d3) || f3) {
        const t3 = [deduplicateArray(d3), f3];
        !e3 && o2.apply(0, t3);
        return t3;
      }
    }
  };
  const b2 = new _(bind(observerCallback, false));
  return [() => {
    b2.observe(t2, {
      attributes: true,
      attributeOldValue: true,
      attributeFilter: g2,
      subtree: n2,
      childList: n2,
      characterData: n2
    });
    e2 = true;
    return () => {
      if (e2) {
        f2();
        b2.disconnect();
        e2 = false;
      }
    };
  }, () => {
    if (e2) {
      d2.m();
      return observerCallback(true, b2.takeRecords());
    }
  }];
};
var $t = {};
var Ct = {};
var addPlugins = (t2) => {
  each(t2, (t3) => each(t3, (n2, o2) => {
    $t[o2] = t3[o2];
  }));
};
var registerPluginModuleInstances = (t2, n2, o2) => keys(t2).map((s2) => {
  const {
    static: e2,
    instance: c2
  } = t2[s2];
  const [r2, l2, i2] = o2 || [];
  const a2 = o2 ? c2 : e2;
  if (a2) {
    const t3 = o2 ? a2(r2, l2, n2) : a2(n2);
    return (i2 || Ct)[s2] = t3;
  }
});
var getStaticPluginModuleInstance = (t2) => Ct[t2];
var xt = "__osOptionsValidationPlugin";
var Ht = "__osSizeObserverPlugin";
var getShowNativeOverlaidScrollbars = (t2, n2) => {
  const {
    k: o2
  } = n2;
  const [s2, e2] = t2("showNativeOverlaidScrollbars");
  return [s2 && o2.x && o2.y, e2];
};
var overflowIsVisible = (t2) => t2.indexOf(x) === 0;
var createViewportOverflowState = (t2, n2) => {
  const getAxisOverflowStyle = (t3, n3, o3, s2) => {
    const e2 = t3 === x ? H : t3.replace(`${x}-`, "");
    const c2 = overflowIsVisible(t3);
    const r2 = overflowIsVisible(o3);
    if (!n3 && !s2) {
      return H;
    }
    if (c2 && r2) {
      return x;
    }
    if (c2) {
      const t4 = n3 ? x : H;
      return n3 && s2 ? e2 : t4;
    }
    const l2 = r2 && s2 ? x : H;
    return n3 ? e2 : l2;
  };
  const o2 = {
    x: getAxisOverflowStyle(n2.x, t2.x, n2.y, t2.y),
    y: getAxisOverflowStyle(n2.y, t2.y, n2.x, t2.x)
  };
  return {
    K: o2,
    Z: {
      x: o2.x === E,
      y: o2.y === E
    }
  };
};
var zt = "__osScrollbarsHidingPlugin";
var At = "__osClickScrollPlugin";
var createSizeObserver = (t2, n2, o2) => {
  const {
    dt: s2
  } = o2 || {};
  const e2 = getStaticPluginModuleInstance(Ht);
  const [c2] = createCache({
    o: false,
    u: true
  });
  return () => {
    const o3 = [];
    const r2 = createDOM(`<div class="${Q}"><div class="${tt}"></div></div>`);
    const l2 = r2[0];
    const i2 = l2.firstChild;
    const onSizeChangedCallbackProxy = (t3) => {
      const o4 = t3 instanceof ResizeObserverEntry;
      let s3 = false;
      let e3 = false;
      if (o4) {
        const [n3, , o5] = c2(t3.contentRect);
        const r3 = domRectHasDimensions(n3);
        e3 = domRectAppeared(n3, o5);
        s3 = !e3 && !r3;
      } else {
        e3 = t3 === true;
      }
      if (!s3) {
        n2({
          ft: true,
          dt: e3
        });
      }
    };
    if (f) {
      const t3 = new f((t4) => onSizeChangedCallbackProxy(t4.pop()));
      t3.observe(i2);
      push(o3, () => {
        t3.disconnect();
      });
    } else if (e2) {
      const [t3, n3] = e2(i2, onSizeChangedCallbackProxy, s2);
      push(o3, concat2([addClass(l2, Z), addEventListener(l2, "animationstart", t3)], n3));
    } else {
      return noop;
    }
    return bind(runEachAndClear, push(o3, appendChildren(t2, l2)));
  };
};
var createTrinsicObserver = (t2, n2) => {
  let o2;
  const isHeightIntrinsic = (t3) => t3.h === 0 || t3.isIntersecting || t3.intersectionRatio > 0;
  const s2 = createDiv(et);
  const [e2] = createCache({
    o: false
  });
  const triggerOnTrinsicChangedCallback = (t3, o3) => {
    if (t3) {
      const s3 = e2(isHeightIntrinsic(t3));
      const [, c2] = s3;
      return c2 && !o3 && n2(s3) && [s3];
    }
  };
  const intersectionObserverCallback = (t3, n3) => triggerOnTrinsicChangedCallback(n3.pop(), t3);
  return [() => {
    const n3 = [];
    if (d) {
      o2 = new d(bind(intersectionObserverCallback, false), {
        root: t2
      });
      o2.observe(s2);
      push(n3, () => {
        o2.disconnect();
      });
    } else {
      const onSizeChanged = () => {
        const t3 = I(s2);
        triggerOnTrinsicChangedCallback(t3);
      };
      push(n3, createSizeObserver(s2, onSizeChanged)());
      onSizeChanged();
    }
    return bind(runEachAndClear, push(n3, appendChildren(t2, s2)));
  }, () => o2 && intersectionObserverCallback(true, o2.takeRecords())];
};
var createObserversSetup = (t2, n2, o2, s2) => {
  let e2;
  let c2;
  let r2;
  let l2;
  let i2;
  let a2;
  const u2 = `[${P}]`;
  const _2 = `[${q}]`;
  const d2 = ["id", "class", "style", "open", "wrap", "cols", "rows"];
  const {
    vt: v2,
    ht: p2,
    ot: h2,
    gt: g2,
    bt: b2,
    nt: w2,
    wt: y2,
    yt: S2,
    St: m2,
    Ot: O2
  } = t2;
  const getDirectionIsRTL = (t3) => getStyles(t3, "direction") === "rtl";
  const $2 = {
    $t: false,
    ct: getDirectionIsRTL(v2)
  };
  const C2 = getEnvironment();
  const x2 = getStaticPluginModuleInstance(zt);
  const [H2] = createCache({
    i: equalWH,
    o: {
      w: 0,
      h: 0
    }
  }, () => {
    const s3 = x2 && x2.tt(t2, n2, $2, C2, o2).ut;
    const e3 = y2 && w2;
    const c3 = !e3 && hasAttrClass(p2, P, L);
    const r3 = !w2 && S2(j);
    const l3 = r3 && getElementScroll(g2);
    const i3 = l3 && O2();
    const a3 = m2(X, c3);
    const u3 = r3 && s3 && s3()[0];
    const _3 = D(h2);
    const d3 = getFractionalSize(h2);
    u3 && u3();
    scrollElementTo(g2, l3);
    i3 && i3();
    c3 && a3();
    return {
      w: _3.w + d3.w,
      h: _3.h + d3.h
    };
  });
  const E2 = debounce(s2, {
    _: () => e2,
    v: () => c2,
    S(t3, n3) {
      const [o3] = t3;
      const [s3] = n3;
      return [concat2(keys(o3), keys(s3)).reduce((t4, n4) => {
        t4[n4] = o3[n4] || s3[n4];
        return t4;
      }, {})];
    }
  });
  const setDirection = (t3) => {
    const n3 = getDirectionIsRTL(v2);
    assignDeep(t3, {
      Ct: a2 !== n3
    });
    assignDeep($2, {
      ct: n3
    });
    a2 = n3;
  };
  const onTrinsicChanged = (t3, n3) => {
    const [o3, e3] = t3;
    const c3 = {
      xt: e3
    };
    assignDeep($2, {
      $t: o3
    });
    !n3 && s2(c3);
    return c3;
  };
  const onSizeChanged = ({
    ft: t3,
    dt: n3
  }) => {
    const o3 = t3 && !n3;
    const e3 = !o3 && C2.R ? E2 : s2;
    const c3 = {
      ft: t3 || n3,
      dt: n3
    };
    setDirection(c3);
    e3(c3);
  };
  const onContentMutation = (t3, n3) => {
    const [, o3] = H2();
    const e3 = {
      Ht: o3
    };
    setDirection(e3);
    const c3 = t3 ? s2 : E2;
    o3 && !n3 && c3(e3);
    return e3;
  };
  const onHostMutation = (t3, n3, o3) => {
    const s3 = {
      Et: n3
    };
    setDirection(s3);
    if (n3 && !o3) {
      E2(s3);
    }
    return s3;
  };
  const [z2, I2] = b2 ? createTrinsicObserver(p2, onTrinsicChanged) : [];
  const A3 = !w2 && createSizeObserver(p2, onSizeChanged, {
    dt: true
  });
  const [M2, T2] = createDOMObserver(p2, false, onHostMutation, {
    X: d2,
    j: d2
  });
  const k2 = w2 && f && new f((t3) => {
    const n3 = t3[t3.length - 1].contentRect;
    onSizeChanged({
      ft: true,
      dt: domRectAppeared(n3, i2)
    });
    i2 = n3;
  });
  const R2 = debounce(() => {
    const [, t3] = H2();
    s2({
      Ht: t3
    });
  }, {
    _: 222,
    p: true
  });
  return [() => {
    k2 && k2.observe(p2);
    const t3 = A3 && A3();
    const n3 = z2 && z2();
    const o3 = M2();
    const s3 = C2.L((t4) => {
      if (t4) {
        E2({
          zt: t4
        });
      } else {
        R2();
      }
    });
    return () => {
      k2 && k2.disconnect();
      t3 && t3();
      n3 && n3();
      l2 && l2();
      o3();
      s3();
    };
  }, ({
    It: t3,
    At: n3,
    Dt: o3
  }) => {
    const s3 = {};
    const [i3] = t3("update.ignoreMutation");
    const [a3, f2] = t3("update.attributes");
    const [v3, p3] = t3("update.elementEvents");
    const [g3, y3] = t3("update.debounce");
    const S3 = p3 || f2;
    const m3 = n3 || o3;
    const ignoreMutationFromOptions = (t4) => isFunction(i3) && i3(t4);
    if (S3) {
      r2 && r2();
      l2 && l2();
      const [t4, n4] = createDOMObserver(b2 || h2, true, onContentMutation, {
        j: concat2(d2, a3 || []),
        Y: v3,
        W: u2,
        G: (t5, n5) => {
          const {
            target: o4,
            attributeName: s4
          } = t5;
          const e3 = !n5 && s4 && !w2 ? liesBetween(o4, u2, _2) : false;
          return e3 || !!closest(o4, `.${rt}`) || !!ignoreMutationFromOptions(t5);
        }
      });
      l2 = t4();
      r2 = n4;
    }
    if (y3) {
      E2.m();
      if (isArray(g3)) {
        const t4 = g3[0];
        const n4 = g3[1];
        e2 = isNumber(t4) && t4;
        c2 = isNumber(n4) && n4;
      } else if (isNumber(g3)) {
        e2 = g3;
        c2 = false;
      } else {
        e2 = false;
        c2 = false;
      }
    }
    if (m3) {
      const t4 = T2();
      const n4 = I2 && I2();
      const o4 = r2 && r2();
      t4 && assignDeep(s3, onHostMutation(t4[0], t4[1], m3));
      n4 && assignDeep(s3, onTrinsicChanged(n4[0], m3));
      o4 && assignDeep(s3, onContentMutation(o4[0], m3));
    }
    setDirection(s3);
    return s3;
  }, $2];
};
var createScrollbarsSetupElements = (t2, n2, o2, s2) => {
  const e2 = "--os-viewport-percent";
  const c2 = "--os-scroll-percent";
  const r2 = "--os-scroll-direction";
  const {
    U: l2
  } = getEnvironment();
  const {
    scrollbars: i2
  } = l2();
  const {
    slot: a2
  } = i2;
  const {
    vt: u2,
    ht: _2,
    ot: d2,
    Mt: f2,
    gt: p2,
    wt: h2,
    nt: g2
  } = n2;
  const {
    scrollbars: b2
  } = f2 ? {} : t2;
  const {
    slot: w2
  } = b2 || {};
  const y2 = [];
  const S2 = [];
  const m2 = [];
  const O2 = dynamicInitializationElement([u2, _2, d2], () => g2 && h2 ? u2 : _2, a2, w2);
  const initScrollTimeline = (t3) => {
    if (v) {
      const n3 = new v({
        source: p2,
        axis: t3
      });
      const _addScrollPercentAnimation = (t4) => {
        const o3 = t4.Tt.animate({
          clear: ["left"],
          [c2]: [0, 1]
        }, {
          timeline: n3
        });
        return () => o3.cancel();
      };
      return {
        kt: _addScrollPercentAnimation
      };
    }
  };
  const $2 = {
    x: initScrollTimeline("x"),
    y: initScrollTimeline("y")
  };
  const getViewportPercent = () => {
    const {
      Rt: t3,
      Vt: n3
    } = o2;
    const getAxisValue = (t4, n4) => capNumber(0, 1, t4 / (t4 + n4) || 0);
    return {
      x: getAxisValue(n3.x, t3.x),
      y: getAxisValue(n3.y, t3.y)
    };
  };
  const scrollbarStructureAddRemoveClass = (t3, n3, o3) => {
    const s3 = o3 ? addClass : removeClass;
    each(t3, (t4) => {
      s3(t4.Tt, n3);
    });
  };
  const scrollbarStyle = (t3, n3) => {
    each(t3, (t4) => {
      const [o3, s3] = n3(t4);
      setStyles(o3, s3);
    });
  };
  const scrollbarsAddRemoveClass = (t3, n3, o3) => {
    const s3 = isBoolean(o3);
    const e3 = s3 ? o3 : true;
    const c3 = s3 ? !o3 : true;
    e3 && scrollbarStructureAddRemoveClass(S2, t3, n3);
    c3 && scrollbarStructureAddRemoveClass(m2, t3, n3);
  };
  const refreshScrollbarsHandleLength = () => {
    const t3 = getViewportPercent();
    const createScrollbarStyleFn = (t4) => (n3) => [n3.Tt, {
      [e2]: roundCssNumber(t4) + ""
    }];
    scrollbarStyle(S2, createScrollbarStyleFn(t3.x));
    scrollbarStyle(m2, createScrollbarStyleFn(t3.y));
  };
  const refreshScrollbarsHandleOffset = () => {
    if (!v) {
      const {
        Lt: t3
      } = o2;
      const n3 = getScrollCoordinatesPercent(t3, getElementScroll(p2));
      const createScrollbarStyleFn = (t4) => (n4) => [n4.Tt, {
        [c2]: roundCssNumber(t4) + ""
      }];
      scrollbarStyle(S2, createScrollbarStyleFn(n3.x));
      scrollbarStyle(m2, createScrollbarStyleFn(n3.y));
    }
  };
  const refreshScrollbarsScrollCoordinates = () => {
    const {
      Lt: t3
    } = o2;
    const n3 = isDefaultDirectionScrollCoordinates(t3);
    const createScrollbarStyleFn = (t4) => (n4) => [n4.Tt, {
      [r2]: t4 ? "0" : "1"
    }];
    scrollbarStyle(S2, createScrollbarStyleFn(n3.x));
    scrollbarStyle(m2, createScrollbarStyleFn(n3.y));
  };
  const refreshScrollbarsScrollbarOffset = () => {
    if (g2 && !h2) {
      const {
        Rt: t3,
        Lt: n3
      } = o2;
      const s3 = isDefaultDirectionScrollCoordinates(n3);
      const e3 = getScrollCoordinatesPercent(n3, getElementScroll(p2));
      const styleScrollbarPosition = (n4) => {
        const {
          Tt: o3
        } = n4;
        const c3 = parent(o3) === d2 && o3;
        const getTranslateValue = (t4, n5, o4) => {
          const s4 = n5 * t4;
          return numberToCssPx(o4 ? s4 : -s4);
        };
        return [c3, c3 && {
          transform: getTrasformTranslateValue({
            x: getTranslateValue(e3.x, t3.x, s3.x),
            y: getTranslateValue(e3.y, t3.y, s3.y)
          })
        }];
      };
      scrollbarStyle(S2, styleScrollbarPosition);
      scrollbarStyle(m2, styleScrollbarPosition);
    }
  };
  const generateScrollbarDOM = (t3) => {
    const n3 = t3 ? "x" : "y";
    const o3 = t3 ? it : at;
    const e3 = createDiv(`${rt} ${o3}`);
    const c3 = createDiv(ut);
    const r3 = createDiv(_t);
    const l3 = {
      Tt: e3,
      Ut: c3,
      Pt: r3
    };
    const i3 = $2[n3];
    push(t3 ? S2 : m2, l3);
    push(y2, [appendChildren(e3, c3), appendChildren(c3, r3), bind(removeElements, e3), i3 && i3.kt(l3), s2(l3, scrollbarsAddRemoveClass, t3)]);
    return l3;
  };
  const C2 = bind(generateScrollbarDOM, true);
  const x2 = bind(generateScrollbarDOM, false);
  const appendElements = () => {
    appendChildren(O2, S2[0].Tt);
    appendChildren(O2, m2[0].Tt);
    return bind(runEachAndClear, y2);
  };
  C2();
  x2();
  return [{
    Nt: refreshScrollbarsHandleLength,
    qt: refreshScrollbarsHandleOffset,
    Bt: refreshScrollbarsScrollCoordinates,
    Ft: refreshScrollbarsScrollbarOffset,
    jt: scrollbarsAddRemoveClass,
    Xt: {
      Yt: S2,
      Wt: C2,
      Jt: bind(scrollbarStyle, S2)
    },
    Gt: {
      Yt: m2,
      Wt: x2,
      Jt: bind(scrollbarStyle, m2)
    }
  }, appendElements];
};
var createScrollbarsSetupEvents = (t2, n2, o2, s2) => (r2, l2, i2) => {
  const {
    ht: u2,
    ot: _2,
    nt: d2,
    gt: f2,
    Kt: v2,
    Ot: p2
  } = n2;
  const {
    Tt: h2,
    Ut: g2,
    Pt: b2
  } = r2;
  const [w2, y2] = selfClearTimeout(333);
  const [S2, m2] = selfClearTimeout(444);
  const scrollOffsetElementScrollBy = (t3) => {
    isFunction(f2.scrollBy) && f2.scrollBy({
      behavior: "smooth",
      left: t3.x,
      top: t3.y
    });
  };
  const createInteractiveScrollEvents = () => {
    const n3 = "pointerup pointercancel lostpointercapture";
    const s3 = `client${i2 ? "X" : "Y"}`;
    const r3 = i2 ? $ : C;
    const l3 = i2 ? "left" : "top";
    const a2 = i2 ? "w" : "h";
    const u3 = i2 ? "x" : "y";
    const createRelativeHandleMove = (t3, n4) => (s4) => {
      const {
        Rt: e2
      } = o2;
      const c2 = I(g2)[a2] - I(b2)[a2];
      const r4 = n4 * s4 / c2;
      const l4 = r4 * e2[u3];
      scrollElementTo(f2, {
        [u3]: t3 + l4
      });
    };
    const _3 = [];
    return addEventListener(g2, "pointerdown", (o3) => {
      const i3 = closest(o3.target, `.${_t}`) === b2;
      const d3 = i3 ? b2 : g2;
      const h3 = t2.scrollbars;
      const w3 = h3[i3 ? "dragScroll" : "clickScroll"];
      const {
        button: y3,
        isPrimary: O3,
        pointerType: $2
      } = o3;
      const {
        pointers: C2
      } = h3;
      const x2 = y3 === 0 && O3 && w3 && (C2 || []).includes($2);
      if (x2) {
        runEachAndClear(_3);
        m2();
        const t3 = !i3 && (o3.shiftKey || w3 === "instant");
        const h4 = bind(getBoundingClientRect, b2);
        const y4 = bind(getBoundingClientRect, g2);
        const getHandleOffset = (t4, n4) => (t4 || h4())[l3] - (n4 || y4())[l3];
        const O4 = e(getBoundingClientRect(f2)[r3]) / I(f2)[a2] || 1;
        const $3 = createRelativeHandleMove(getElementScroll(f2)[u3], 1 / O4);
        const C3 = o3[s3];
        const x3 = h4();
        const H2 = y4();
        const E2 = x3[r3];
        const z2 = getHandleOffset(x3, H2) + E2 / 2;
        const A3 = C3 - H2[l3];
        const D2 = i3 ? 0 : A3 - z2;
        const releasePointerCapture = (t4) => {
          runEachAndClear(k2);
          d3.releasePointerCapture(t4.pointerId);
        };
        const M2 = i3 || t3;
        const T2 = p2();
        const k2 = [addEventListener(v2, n3, releasePointerCapture), addEventListener(v2, "selectstart", (t4) => preventDefault(t4), {
          H: false
        }), addEventListener(g2, n3, releasePointerCapture), M2 && addEventListener(g2, "pointermove", (t4) => $3(D2 + (t4[s3] - C3))), M2 && (() => {
          const t4 = getElementScroll(f2);
          T2();
          const n4 = getElementScroll(f2);
          const o4 = {
            x: n4.x - t4.x,
            y: n4.y - t4.y
          };
          if (c(o4.x) > 3 || c(o4.y) > 3) {
            p2();
            scrollElementTo(f2, t4);
            scrollOffsetElementScrollBy(o4);
            S2(T2);
          }
        })];
        d3.setPointerCapture(o3.pointerId);
        if (t3) {
          $3(D2);
        } else if (!i3) {
          const t4 = getStaticPluginModuleInstance(At);
          if (t4) {
            const n4 = t4($3, D2, E2, (t5) => {
              if (t5) {
                T2();
              } else {
                push(k2, T2);
              }
            });
            push(k2, n4);
            push(_3, bind(n4, true));
          }
        }
      }
    });
  };
  let O2 = true;
  return bind(runEachAndClear, [addEventListener(b2, "pointermove pointerleave", s2), addEventListener(h2, "pointerenter", () => {
    l2(vt, true);
  }), addEventListener(h2, "pointerleave pointercancel", () => {
    l2(vt, false);
  }), !d2 && addEventListener(h2, "mousedown", () => {
    const t3 = getFocusedElement();
    if (hasAttr(t3, q) || hasAttr(t3, P) || t3 === document.body) {
      a(bind(focusElement, _2), 25);
    }
  }), addEventListener(h2, "wheel", (t3) => {
    const {
      deltaX: n3,
      deltaY: o3,
      deltaMode: s3
    } = t3;
    if (O2 && s3 === 0 && parent(h2) === u2) {
      scrollOffsetElementScrollBy({
        x: n3,
        y: o3
      });
    }
    O2 = false;
    l2(bt, true);
    w2(() => {
      O2 = true;
      l2(bt);
    });
    preventDefault(t3);
  }, {
    H: false,
    I: true
  }), addEventListener(h2, "pointerdown", bind(addEventListener, v2, "click", stopAndPrevent, {
    A: true,
    I: true,
    H: false
  }), {
    I: true
  }), createInteractiveScrollEvents(), y2, m2]);
};
var createScrollbarsSetup = (t2, n2, o2, s2, e2, c2) => {
  let r2;
  let l2;
  let i2;
  let a2;
  let u2;
  let _2 = noop;
  let d2 = 0;
  const isHoverablePointerType = (t3) => t3.pointerType === "mouse";
  const [f2, v2] = selfClearTimeout();
  const [p2, h2] = selfClearTimeout(100);
  const [g2, b2] = selfClearTimeout(100);
  const [w2, y2] = selfClearTimeout(() => d2);
  const [S2, m2] = createScrollbarsSetupElements(t2, e2, s2, createScrollbarsSetupEvents(n2, e2, s2, (t3) => isHoverablePointerType(t3) && manageScrollbarsAutoHideInstantInteraction()));
  const {
    ht: O2,
    Qt: $2,
    wt: C2
  } = e2;
  const {
    jt: H2,
    Nt: z2,
    qt: I2,
    Bt: A3,
    Ft: D2
  } = S2;
  const manageScrollbarsAutoHide = (t3, n3) => {
    y2();
    if (t3) {
      H2(gt);
    } else {
      const t4 = bind(H2, gt, true);
      if (d2 > 0 && !n3) {
        w2(t4);
      } else {
        t4();
      }
    }
  };
  const manageScrollbarsAutoHideInstantInteraction = () => {
    if (i2 ? !r2 : !a2) {
      manageScrollbarsAutoHide(true);
      p2(() => {
        manageScrollbarsAutoHide(false);
      });
    }
  };
  const manageAutoHideSuspension = (t3) => {
    H2(ht, t3, true);
    H2(ht, t3, false);
  };
  const onHostMouseEnter = (t3) => {
    if (isHoverablePointerType(t3)) {
      r2 = i2;
      i2 && manageScrollbarsAutoHide(true);
    }
  };
  const M2 = [y2, h2, b2, v2, () => _2(), addEventListener(O2, "pointerover", onHostMouseEnter, {
    A: true
  }), addEventListener(O2, "pointerenter", onHostMouseEnter), addEventListener(O2, "pointerleave", (t3) => {
    if (isHoverablePointerType(t3)) {
      r2 = false;
      i2 && manageScrollbarsAutoHide(false);
    }
  }), addEventListener(O2, "pointermove", (t3) => {
    isHoverablePointerType(t3) && l2 && manageScrollbarsAutoHideInstantInteraction();
  }), addEventListener($2, "scroll", (t3) => {
    f2(() => {
      I2();
      manageScrollbarsAutoHideInstantInteraction();
    });
    c2(t3);
    D2();
  })];
  return [() => bind(runEachAndClear, push(M2, m2())), ({
    It: t3,
    Dt: n3,
    Zt: e3,
    tn: c3
  }) => {
    const {
      nn: r3,
      sn: f3,
      en: v3,
      cn: p3
    } = c3 || {};
    const {
      Ct: h3,
      dt: b3
    } = e3 || {};
    const {
      ct: w3
    } = o2;
    const {
      k: y3
    } = getEnvironment();
    const {
      K: S3,
      rn: m3
    } = s2;
    const [O3, M3] = t3("showNativeOverlaidScrollbars");
    const [T2, k2] = t3("scrollbars.theme");
    const [R2, V2] = t3("scrollbars.visibility");
    const [L2, U2] = t3("scrollbars.autoHide");
    const [P2, N2] = t3("scrollbars.autoHideSuspend");
    const [q2] = t3("scrollbars.autoHideDelay");
    const [B2, F2] = t3("scrollbars.dragScroll");
    const [j2, X2] = t3("scrollbars.clickScroll");
    const [Y2, W2] = t3("overflow");
    const J2 = b3 && !n3;
    const G2 = m3.x || m3.y;
    const K2 = r3 || f3 || p3 || h3 || n3;
    const Q2 = v3 || V2 || W2;
    const Z3 = O3 && y3.x && y3.y;
    const setScrollbarVisibility = (t4, n4, o3) => {
      const s3 = t4.includes(E) && (R2 === x || R2 === "auto" && n4 === E);
      H2(dt, s3, o3);
      return s3;
    };
    d2 = q2;
    if (J2) {
      if (P2 && G2) {
        manageAutoHideSuspension(false);
        _2();
        g2(() => {
          _2 = addEventListener($2, "scroll", bind(manageAutoHideSuspension, true), {
            A: true
          });
        });
      } else {
        manageAutoHideSuspension(true);
      }
    }
    if (M3) {
      H2(ct, Z3);
    }
    if (k2) {
      H2(u2);
      H2(T2, true);
      u2 = T2;
    }
    if (N2 && !P2) {
      manageAutoHideSuspension(true);
    }
    if (U2) {
      l2 = L2 === "move";
      i2 = L2 === "leave";
      a2 = L2 === "never";
      manageScrollbarsAutoHide(a2, true);
    }
    if (F2) {
      H2(yt, B2);
    }
    if (X2) {
      H2(wt, !!j2);
    }
    if (Q2) {
      const t4 = setScrollbarVisibility(Y2.x, S3.x, true);
      const n4 = setScrollbarVisibility(Y2.y, S3.y, false);
      const o3 = t4 && n4;
      H2(ft, !o3);
    }
    if (K2) {
      I2();
      z2();
      D2();
      p3 && A3();
      H2(pt, !m3.x, true);
      H2(pt, !m3.y, false);
      H2(lt, w3 && !C2);
    }
  }, {}, S2];
};
var createStructureSetupElements = (t2) => {
  const o2 = getEnvironment();
  const {
    U: s2,
    R: e2
  } = o2;
  const {
    elements: c2
  } = s2();
  const {
    padding: r2,
    viewport: l2,
    content: i2
  } = c2;
  const a2 = isHTMLElement(t2);
  const u2 = a2 ? {} : t2;
  const {
    elements: _2
  } = u2;
  const {
    padding: d2,
    viewport: f2,
    content: v2
  } = _2 || {};
  const p2 = a2 ? t2 : u2.target;
  const h2 = isBodyElement(p2);
  const g2 = p2.ownerDocument;
  const b2 = g2.documentElement;
  const getDocumentWindow = () => g2.defaultView || n;
  const w2 = bind(staticInitializationElement, [p2]);
  const y2 = bind(dynamicInitializationElement, [p2]);
  const S2 = bind(createDiv, "");
  const $2 = bind(w2, S2, l2);
  const C2 = bind(y2, S2, i2);
  const elementHasOverflow = (t3) => {
    const n2 = I(t3);
    const o3 = D(t3);
    const s3 = getStyles(t3, m);
    const e3 = getStyles(t3, O);
    return o3.w - n2.w > 0 && !overflowIsVisible(s3) || o3.h - n2.h > 0 && !overflowIsVisible(e3);
  };
  const x2 = $2(f2);
  const H2 = x2 === p2;
  const E2 = H2 && h2;
  const z2 = !H2 && C2(v2);
  const A3 = !H2 && x2 === z2;
  const M2 = E2 ? b2 : x2;
  const T2 = E2 ? M2 : p2;
  const k2 = !H2 && y2(S2, r2, d2);
  const R2 = !A3 && z2;
  const L2 = [R2, M2, k2, T2].map((t3) => isHTMLElement(t3) && !parent(t3) && t3);
  const elementIsGenerated = (t3) => t3 && inArray(L2, t3);
  const B2 = !elementIsGenerated(M2) && elementHasOverflow(M2) ? M2 : p2;
  const F2 = E2 ? b2 : M2;
  const j2 = E2 ? g2 : M2;
  const X2 = {
    vt: p2,
    ht: T2,
    ot: M2,
    ln: k2,
    bt: R2,
    gt: F2,
    Qt: j2,
    an: h2 ? b2 : B2,
    Kt: g2,
    wt: h2,
    Mt: a2,
    nt: H2,
    un: getDocumentWindow,
    yt: (t3) => hasAttrClass(M2, q, t3),
    St: (t3, n2) => addRemoveAttrClass(M2, q, t3, n2),
    Ot: () => addRemoveAttrClass(F2, q, Y, true)
  };
  const {
    vt: J2,
    ht: Q2,
    ln: Z3,
    ot: tt2,
    bt: nt2
  } = X2;
  const ot2 = [() => {
    removeAttrs(Q2, [P, V]);
    removeAttrs(J2, V);
    if (h2) {
      removeAttrs(b2, [V, P]);
    }
  }];
  let st2 = contents([nt2, tt2, Z3, Q2, J2].find((t3) => t3 && !elementIsGenerated(t3)));
  const et2 = E2 ? J2 : nt2 || tt2;
  const ct2 = bind(runEachAndClear, ot2);
  const appendElements = () => {
    const t3 = getDocumentWindow();
    const n2 = getFocusedElement();
    const unwrap = (t4) => {
      appendChildren(parent(t4), contents(t4));
      removeElements(t4);
    };
    const prepareWrapUnwrapFocus = (t4) => addEventListener(t4, "focusin focusout focus blur", stopAndPrevent, {
      I: true,
      H: false
    });
    const o3 = "tabindex";
    const s3 = getAttr(tt2, o3);
    const c3 = prepareWrapUnwrapFocus(n2);
    setAttrs(Q2, P, H2 ? "" : N);
    setAttrs(Z3, G, "");
    setAttrs(tt2, q, "");
    setAttrs(nt2, K, "");
    if (!H2) {
      setAttrs(tt2, o3, s3 || "-1");
      h2 && setAttrs(b2, U, "");
    }
    appendChildren(et2, st2);
    appendChildren(Q2, Z3);
    appendChildren(Z3 || Q2, !H2 && tt2);
    appendChildren(tt2, nt2);
    push(ot2, [c3, () => {
      const t4 = getFocusedElement();
      const n3 = elementIsGenerated(tt2);
      const e3 = n3 && t4 === tt2 ? J2 : t4;
      const c4 = prepareWrapUnwrapFocus(e3);
      removeAttrs(Z3, G);
      removeAttrs(nt2, K);
      removeAttrs(tt2, q);
      h2 && removeAttrs(b2, U);
      s3 ? setAttrs(tt2, o3, s3) : removeAttrs(tt2, o3);
      elementIsGenerated(nt2) && unwrap(nt2);
      n3 && unwrap(tt2);
      elementIsGenerated(Z3) && unwrap(Z3);
      focusElement(e3);
      c4();
    }]);
    if (e2 && !H2) {
      addAttrClass(tt2, q, W);
      push(ot2, bind(removeAttrs, tt2, q));
    }
    focusElement(!H2 && h2 && n2 === J2 && t3.top === t3 ? tt2 : n2);
    c3();
    st2 = 0;
    return ct2;
  };
  return [X2, appendElements, ct2];
};
var createTrinsicUpdateSegment = ({
  bt: t2
}) => ({
  Zt: n2,
  _n: o2,
  Dt: s2
}) => {
  const {
    xt: e2
  } = n2 || {};
  const {
    $t: c2
  } = o2;
  const r2 = t2 && (e2 || s2);
  if (r2) {
    setStyles(t2, {
      [C]: c2 && "100%"
    });
  }
};
var createPaddingUpdateSegment = ({
  ht: t2,
  ln: n2,
  ot: o2,
  nt: s2
}, e2) => {
  const [c2, r2] = createCache({
    i: equalTRBL,
    o: topRightBottomLeft()
  }, bind(topRightBottomLeft, t2, "padding", ""));
  return ({
    It: t3,
    Zt: l2,
    _n: i2,
    Dt: a2
  }) => {
    let [u2, _2] = r2(a2);
    const {
      R: d2
    } = getEnvironment();
    const {
      ft: f2,
      Ht: v2,
      Ct: m2
    } = l2 || {};
    const {
      ct: O2
    } = i2;
    const [C2, x2] = t3("paddingAbsolute");
    const H2 = a2 || v2;
    if (f2 || _2 || H2) {
      [u2, _2] = c2(a2);
    }
    const E2 = !s2 && (x2 || m2 || _2);
    if (E2) {
      const t4 = !C2 || !n2 && !d2;
      const s3 = u2.r + u2.l;
      const c3 = u2.t + u2.b;
      const r3 = {
        [y]: t4 && !O2 ? -s3 : 0,
        [S]: t4 ? -c3 : 0,
        [w]: t4 && O2 ? -s3 : 0,
        top: t4 ? -u2.t : 0,
        right: t4 ? O2 ? -u2.r : "auto" : 0,
        left: t4 ? O2 ? "auto" : -u2.l : 0,
        [$]: t4 && `calc(100% + ${s3}px)`
      };
      const l3 = {
        [p]: t4 ? u2.t : 0,
        [h]: t4 ? u2.r : 0,
        [b]: t4 ? u2.b : 0,
        [g]: t4 ? u2.l : 0
      };
      setStyles(n2 || o2, r3);
      setStyles(o2, l3);
      assignDeep(e2, {
        ln: u2,
        dn: !t4,
        rt: n2 ? l3 : assignDeep({}, r3, l3)
      });
    }
    return {
      fn: E2
    };
  };
};
var createOverflowUpdateSegment = (t2, s2) => {
  const e2 = getEnvironment();
  const {
    ht: c2,
    ln: r2,
    ot: l2,
    nt: a2,
    Qt: u2,
    gt: _2,
    wt: d2,
    St: f2,
    un: v2
  } = t2;
  const {
    R: p2
  } = e2;
  const h2 = d2 && a2;
  const g2 = bind(o, 0);
  const b2 = {
    display: () => false,
    direction: (t3) => t3 !== "ltr",
    flexDirection: (t3) => t3.endsWith("-reverse"),
    writingMode: (t3) => t3 !== "horizontal-tb"
  };
  const w2 = keys(b2);
  const y2 = {
    i: equalWH,
    o: {
      w: 0,
      h: 0
    }
  };
  const S2 = {
    i: equalXY,
    o: {}
  };
  const setMeasuringMode = (t3) => {
    f2(X, !h2 && t3);
  };
  const getMeasuredScrollCoordinates = (t3) => {
    const n2 = w2.some((n3) => {
      const o3 = t3[n3];
      return o3 && b2[n3](o3);
    });
    if (!n2) {
      return {
        D: {
          x: 0,
          y: 0
        },
        M: {
          x: 1,
          y: 1
        }
      };
    }
    setMeasuringMode(true);
    const o2 = getElementScroll(_2);
    const s3 = f2(J, true);
    const e3 = addEventListener(u2, E, (t4) => {
      const n3 = getElementScroll(_2);
      if (t4.isTrusted && n3.x === o2.x && n3.y === o2.y) {
        stopPropagation(t4);
      }
    }, {
      I: true,
      A: true
    });
    scrollElementTo(_2, {
      x: 0,
      y: 0
    });
    s3();
    const c3 = getElementScroll(_2);
    const r3 = D(_2);
    scrollElementTo(_2, {
      x: r3.w,
      y: r3.h
    });
    const l3 = getElementScroll(_2);
    scrollElementTo(_2, {
      x: l3.x - c3.x < 1 && -r3.w,
      y: l3.y - c3.y < 1 && -r3.h
    });
    const a3 = getElementScroll(_2);
    scrollElementTo(_2, o2);
    i(() => e3());
    return {
      D: c3,
      M: a3
    };
  };
  const getOverflowAmount = (t3, o2) => {
    const s3 = n.devicePixelRatio % 1 !== 0 ? 1 : 0;
    const e3 = {
      w: g2(t3.w - o2.w),
      h: g2(t3.h - o2.h)
    };
    return {
      w: e3.w > s3 ? e3.w : 0,
      h: e3.h > s3 ? e3.h : 0
    };
  };
  const [m2, O2] = createCache(y2, bind(getFractionalSize, l2));
  const [$2, C2] = createCache(y2, bind(D, l2));
  const [z2, I2] = createCache(y2);
  const [M2] = createCache(S2);
  const [T2, k2] = createCache(y2);
  const [R2] = createCache(S2);
  const [V2] = createCache({
    i: (t3, n2) => equal(t3, n2, w2),
    o: {}
  }, () => hasDimensions(l2) ? getStyles(l2, w2) : {});
  const [U2, N2] = createCache({
    i: (t3, n2) => equalXY(t3.D, n2.D) && equalXY(t3.M, n2.M),
    o: getZeroScrollCoordinates()
  });
  const q2 = getStaticPluginModuleInstance(zt);
  const createViewportOverflowStyleClassName = (t3, n2) => {
    const o2 = n2 ? B : F;
    return `${o2}${capitalizeFirstLetter(t3)}`;
  };
  const setViewportOverflowStyle = (t3) => {
    const createAllOverflowStyleClassNames = (t4) => [x, H, E].map((n3) => createViewportOverflowStyleClassName(n3, t4));
    const n2 = createAllOverflowStyleClassNames(true).concat(createAllOverflowStyleClassNames()).join(" ");
    f2(n2);
    f2(keys(t3).map((n3) => createViewportOverflowStyleClassName(t3[n3], n3 === "x")).join(" "), true);
  };
  return ({
    It: n2,
    Zt: o2,
    _n: i2,
    Dt: a3
  }, {
    fn: u3
  }) => {
    const {
      ft: _3,
      Ht: d3,
      Ct: b3,
      dt: w3,
      zt: y3
    } = o2 || {};
    const S3 = q2 && q2.tt(t2, s2, i2, e2, n2);
    const {
      it: x2,
      ut: H2,
      _t: E2
    } = S3 || {};
    const [D2, B2] = getShowNativeOverlaidScrollbars(n2, e2);
    const [F2, j2] = n2("overflow");
    const X2 = overflowIsVisible(F2.x);
    const Y2 = overflowIsVisible(F2.y);
    const J2 = true;
    let K2 = O2(a3);
    let Q2 = C2(a3);
    let Z3 = I2(a3);
    let tt2 = k2(a3);
    if (B2 && p2) {
      f2(W, !D2);
    }
    {
      if (hasAttrClass(c2, P, L)) {
        setMeasuringMode(true);
      }
      const [t3] = H2 ? H2() : [];
      const [n3] = K2 = m2(a3);
      const [o3] = Q2 = $2(a3);
      const s3 = A(l2);
      const e3 = h2 && getWindowSize(v2());
      const r3 = {
        w: g2(o3.w + n3.w),
        h: g2(o3.h + n3.h)
      };
      const i3 = {
        w: g2((e3 ? e3.w : s3.w + g2(s3.w - o3.w)) + n3.w),
        h: g2((e3 ? e3.h : s3.h + g2(s3.h - o3.h)) + n3.h)
      };
      t3 && t3();
      tt2 = T2(i3);
      Z3 = z2(getOverflowAmount(r3, i3), a3);
    }
    const [nt2, ot2] = tt2;
    const [st2, et2] = Z3;
    const [ct2, rt2] = Q2;
    const [lt2, it2] = K2;
    const [at2, ut2] = M2({
      x: st2.w > 0,
      y: st2.h > 0
    });
    const _t2 = X2 && Y2 && (at2.x || at2.y) || X2 && at2.x && !at2.y || Y2 && at2.y && !at2.x;
    const dt2 = u3 || b3 || y3 || it2 || rt2 || ot2 || et2 || j2 || B2 || J2;
    const ft2 = createViewportOverflowState(at2, F2);
    const [vt2, pt2] = R2(ft2.K);
    const [ht2, gt2] = V2(a3);
    const bt2 = b3 || w3 || gt2 || ut2 || a3;
    const [wt2, yt2] = bt2 ? U2(getMeasuredScrollCoordinates(ht2), a3) : N2();
    if (dt2) {
      pt2 && setViewportOverflowStyle(ft2.K);
      if (E2 && x2) {
        setStyles(l2, E2(ft2, i2, x2(ft2, ct2, lt2)));
      }
    }
    setMeasuringMode(false);
    addRemoveAttrClass(c2, P, L, _t2);
    addRemoveAttrClass(r2, G, L, _t2);
    assignDeep(s2, {
      K: vt2,
      Vt: {
        x: nt2.w,
        y: nt2.h
      },
      Rt: {
        x: st2.w,
        y: st2.h
      },
      rn: at2,
      Lt: sanitizeScrollCoordinates(wt2, st2)
    });
    return {
      en: pt2,
      nn: ot2,
      sn: et2,
      cn: yt2 || et2,
      vn: bt2
    };
  };
};
var createStructureSetup = (t2) => {
  const [n2, o2, s2] = createStructureSetupElements(t2);
  const e2 = {
    ln: {
      t: 0,
      r: 0,
      b: 0,
      l: 0
    },
    dn: false,
    rt: {
      [y]: 0,
      [S]: 0,
      [w]: 0,
      [p]: 0,
      [h]: 0,
      [b]: 0,
      [g]: 0
    },
    Vt: {
      x: 0,
      y: 0
    },
    Rt: {
      x: 0,
      y: 0
    },
    K: {
      x: H,
      y: H
    },
    rn: {
      x: false,
      y: false
    },
    Lt: getZeroScrollCoordinates()
  };
  const {
    vt: c2,
    gt: r2,
    nt: l2,
    Ot: i2
  } = n2;
  const {
    R: a2,
    k: u2
  } = getEnvironment();
  const _2 = !a2 && (u2.x || u2.y);
  const d2 = [createTrinsicUpdateSegment(n2), createPaddingUpdateSegment(n2, e2), createOverflowUpdateSegment(n2, e2)];
  return [o2, (t3) => {
    const n3 = {};
    const o3 = _2;
    const s3 = o3 && getElementScroll(r2);
    const e3 = s3 && i2();
    each(d2, (o4) => {
      assignDeep(n3, o4(t3, n3) || {});
    });
    scrollElementTo(r2, s3);
    e3 && e3();
    !l2 && scrollElementTo(c2, 0);
    return n3;
  }, e2, n2, s2];
};
var createSetups = (t2, n2, o2, s2, e2) => {
  let c2 = false;
  const r2 = createOptionCheck(n2, {});
  const [l2, i2, a2, u2, _2] = createStructureSetup(t2);
  const [d2, f2, v2] = createObserversSetup(u2, a2, r2, (t3) => {
    update({}, t3);
  });
  const [p2, h2, , g2] = createScrollbarsSetup(t2, n2, v2, a2, u2, e2);
  const updateHintsAreTruthy = (t3) => keys(t3).some((n3) => !!t3[n3]);
  const update = (t3, e3) => {
    if (o2()) {
      return false;
    }
    const {
      pn: r3,
      Dt: l3,
      At: a3,
      hn: u3
    } = t3;
    const _3 = r3 || {};
    const d3 = !!l3 || !c2;
    const p3 = {
      It: createOptionCheck(n2, _3, d3),
      pn: _3,
      Dt: d3
    };
    if (u3) {
      h2(p3);
      return false;
    }
    const g3 = e3 || f2(assignDeep({}, p3, {
      At: a3
    }));
    const b2 = i2(assignDeep({}, p3, {
      _n: v2,
      Zt: g3
    }));
    h2(assignDeep({}, p3, {
      Zt: g3,
      tn: b2
    }));
    const w2 = updateHintsAreTruthy(g3);
    const y2 = updateHintsAreTruthy(b2);
    const S2 = w2 || y2 || !isEmptyObject(_3) || d3;
    c2 = true;
    S2 && s2(t3, {
      Zt: g3,
      tn: b2
    });
    return S2;
  };
  return [() => {
    const {
      an: t3,
      gt: n3,
      Ot: o3
    } = u2;
    const s3 = getElementScroll(t3);
    const e3 = [d2(), l2(), p2()];
    const c3 = o3();
    scrollElementTo(n3, s3);
    c3();
    return bind(runEachAndClear, e3);
  }, update, () => ({
    gn: v2,
    bn: a2
  }), {
    wn: u2,
    yn: g2
  }, _2];
};
var OverlayScrollbars = (t2, n2, o2) => {
  const {
    N: s2
  } = getEnvironment();
  const e2 = isHTMLElement(t2);
  const c2 = e2 ? t2 : t2.target;
  const r2 = getInstance(c2);
  if (n2 && !r2) {
    let r3 = false;
    const l2 = [];
    const i2 = {};
    const validateOptions = (t3) => {
      const n3 = removeUndefinedProperties(t3, true);
      const o3 = getStaticPluginModuleInstance(xt);
      return o3 ? o3(n3, true) : n3;
    };
    const a2 = assignDeep({}, s2(), validateOptions(n2));
    const [u2, _2, d2] = createEventListenerHub();
    const [f2, v2, p2] = createEventListenerHub(o2);
    const triggerEvent = (t3, n3) => {
      p2(t3, n3);
      d2(t3, n3);
    };
    const [h2, g2, b2, w2, y2] = createSetups(t2, a2, () => r3, ({
      pn: t3,
      Dt: n3
    }, {
      Zt: o3,
      tn: s3
    }) => {
      const {
        ft: e3,
        Ct: c3,
        xt: r4,
        Ht: l3,
        Et: i3,
        dt: a3
      } = o3;
      const {
        nn: u3,
        sn: _3,
        en: d3,
        cn: f3
      } = s3;
      triggerEvent("updated", [S2, {
        updateHints: {
          sizeChanged: !!e3,
          directionChanged: !!c3,
          heightIntrinsicChanged: !!r4,
          overflowEdgeChanged: !!u3,
          overflowAmountChanged: !!_3,
          overflowStyleChanged: !!d3,
          scrollCoordinatesChanged: !!f3,
          contentMutation: !!l3,
          hostMutation: !!i3,
          appear: !!a3
        },
        changedOptions: t3 || {},
        force: !!n3
      }]);
    }, (t3) => triggerEvent("scroll", [S2, t3]));
    const destroy = (t3) => {
      removeInstance(c2);
      runEachAndClear(l2);
      r3 = true;
      triggerEvent("destroyed", [S2, t3]);
      _2();
      v2();
    };
    const S2 = {
      options(t3, n3) {
        if (t3) {
          const o3 = n3 ? s2() : {};
          const e3 = getOptionsDiff(a2, assignDeep(o3, validateOptions(t3)));
          if (!isEmptyObject(e3)) {
            assignDeep(a2, e3);
            g2({
              pn: e3
            });
          }
        }
        return assignDeep({}, a2);
      },
      on: f2,
      off: (t3, n3) => {
        t3 && n3 && v2(t3, n3);
      },
      state() {
        const {
          gn: t3,
          bn: n3
        } = b2();
        const {
          ct: o3
        } = t3;
        const {
          Vt: s3,
          Rt: e3,
          K: c3,
          rn: l3,
          ln: i3,
          dn: a3,
          Lt: u3
        } = n3;
        return assignDeep({}, {
          overflowEdge: s3,
          overflowAmount: e3,
          overflowStyle: c3,
          hasOverflow: l3,
          scrollCoordinates: {
            start: u3.D,
            end: u3.M
          },
          padding: i3,
          paddingAbsolute: a3,
          directionRTL: o3,
          destroyed: r3
        });
      },
      elements() {
        const {
          vt: t3,
          ht: n3,
          ln: o3,
          ot: s3,
          bt: e3,
          gt: c3,
          Qt: r4
        } = w2.wn;
        const {
          Xt: l3,
          Gt: i3
        } = w2.yn;
        const translateScrollbarStructure = (t4) => {
          const {
            Pt: n4,
            Ut: o4,
            Tt: s4
          } = t4;
          return {
            scrollbar: s4,
            track: o4,
            handle: n4
          };
        };
        const translateScrollbarsSetupElement = (t4) => {
          const {
            Yt: n4,
            Wt: o4
          } = t4;
          const s4 = translateScrollbarStructure(n4[0]);
          return assignDeep({}, s4, {
            clone: () => {
              const t5 = translateScrollbarStructure(o4());
              g2({
                hn: true
              });
              return t5;
            }
          });
        };
        return assignDeep({}, {
          target: t3,
          host: n3,
          padding: o3 || s3,
          viewport: s3,
          content: e3 || s3,
          scrollOffsetElement: c3,
          scrollEventElement: r4,
          scrollbarHorizontal: translateScrollbarsSetupElement(l3),
          scrollbarVertical: translateScrollbarsSetupElement(i3)
        });
      },
      update: (t3) => g2({
        Dt: t3,
        At: true
      }),
      destroy: bind(destroy, false),
      plugin: (t3) => i2[keys(t3)[0]]
    };
    push(l2, [y2]);
    addInstance(c2, S2);
    registerPluginModuleInstances($t, OverlayScrollbars, [S2, u2, i2]);
    if (cancelInitialization(w2.wn.wt, !e2 && t2.cancel)) {
      destroy(true);
      return S2;
    }
    push(l2, h2());
    triggerEvent("initialized", [S2]);
    S2.update();
    return S2;
  }
  return r2;
};
OverlayScrollbars.plugin = (t2) => {
  const n2 = isArray(t2);
  const o2 = n2 ? t2 : [t2];
  const s2 = o2.map((t3) => registerPluginModuleInstances(t3, OverlayScrollbars)[0]);
  addPlugins(o2);
  return n2 ? s2 : s2[0];
};
OverlayScrollbars.valid = (t2) => {
  const n2 = t2 && t2.elements;
  const o2 = isFunction(n2) && n2();
  return isPlainObject(o2) && !!getInstance(o2.target);
};
OverlayScrollbars.env = () => {
  const {
    T: t2,
    k: n2,
    R: o2,
    V: s2,
    B: e2,
    F: c2,
    U: r2,
    P: l2,
    N: i2,
    q: a2
  } = getEnvironment();
  return assignDeep({}, {
    scrollbarsSize: t2,
    scrollbarsOverlaid: n2,
    scrollbarsHiding: o2,
    scrollTimeline: s2,
    staticDefaultInitialization: e2,
    staticDefaultOptions: c2,
    getDefaultInitialization: r2,
    setDefaultInitialization: l2,
    getDefaultOptions: i2,
    setDefaultOptions: a2
  });
};
OverlayScrollbars.nonce = setNonce;

// node_modules/overlayscrollbars-ngx/fesm2020/overlayscrollbars-ngx.mjs
var _c02 = ["content"];
var _c12 = ["*"];
var createDefer = () => {
  if (typeof window === "undefined") {
    const noop2 = () => {
    };
    return [noop2, noop2];
  }
  let idleId;
  let rafId;
  const wnd = window;
  const idleSupported = typeof wnd.requestIdleCallback === "function";
  const rAF = wnd.requestAnimationFrame;
  const cAF = wnd.cancelAnimationFrame;
  const rIdle = idleSupported ? wnd.requestIdleCallback : rAF;
  const cIdle = idleSupported ? wnd.cancelIdleCallback : cAF;
  const clear = () => {
    cIdle(idleId);
    cAF(rafId);
  };
  return [(callback, options) => {
    clear();
    idleId = rIdle(
      idleSupported ? () => {
        clear();
        rafId = rAF(callback);
      } : callback,
      // @ts-ignore
      typeof options === "object" ? options : {
        timeout: 2233
      }
    );
  }, clear];
};
var OverlayScrollbarsDirective = class {
  constructor(ngZone) {
    this.ngZone = ngZone;
    this.instanceRef = null;
    const [requestDefer, cancelDefer] = createDefer();
    this.requestDefer = requestDefer;
    this.cancelDefer = cancelDefer;
  }
  osInitialize(target) {
    this.ngZone.runOutsideAngular(() => {
      const init = () => {
        this.instanceRef = OverlayScrollbars(
          target,
          this.options || {},
          /* istanbul ignore next */
          this.events || {}
        );
      };
      if (this.defer) {
        this.requestDefer(init, this.defer);
      } else {
        init();
      }
    });
  }
  osInstance() {
    return this.instanceRef;
  }
  ngOnChanges(changes) {
    const optionsChange = changes.options;
    const eventsChange = changes.events;
    if (optionsChange) {
      const curr = optionsChange.currentValue;
      this.options = curr;
      if (OverlayScrollbars.valid(this.instanceRef)) {
        this.instanceRef.options(curr || {}, true);
      }
    }
    if (eventsChange) {
      const curr = eventsChange.currentValue;
      this.events = curr;
      if (OverlayScrollbars.valid(this.instanceRef)) {
        this.instanceRef.on(
          /* istanbul ignore next */
          curr || {},
          true
        );
      }
    }
  }
  ngOnDestroy() {
    this.cancelDefer();
  }
};
OverlayScrollbarsDirective.\u0275fac = function OverlayScrollbarsDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || OverlayScrollbarsDirective)(\u0275\u0275directiveInject(NgZone));
};
OverlayScrollbarsDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: OverlayScrollbarsDirective,
  selectors: [["", "overlayScrollbars", ""]],
  inputs: {
    options: "options",
    events: "events",
    defer: "defer"
  },
  features: [\u0275\u0275NgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayScrollbarsDirective, [{
    type: Directive,
    args: [{
      selector: "[overlayScrollbars]"
      // https://angular.io/guide/styleguide#directive-selectors
    }]
  }], function() {
    return [{
      type: NgZone
    }];
  }, {
    options: [{
      type: Input,
      args: ["options"]
    }],
    events: [{
      type: Input,
      args: ["events"]
    }],
    defer: [{
      type: Input,
      args: ["defer"]
    }]
  });
})();
var mergeEventListeners = (emits, events) => Object.keys(emits).reduce((obj, name) => {
  const emitListener = emits[name];
  const eventListener = events[name];
  obj[name] = [emitListener, ...(Array.isArray(eventListener) ? eventListener : [eventListener]).filter(Boolean)];
  return obj;
}, {});
var OverlayScrollbarsComponent = class {
  constructor(ngZone, targetRef) {
    this.ngZone = ngZone;
    this.targetRef = targetRef;
    this.onInitialized = new EventEmitter();
    this.onUpdated = new EventEmitter();
    this.onDestroyed = new EventEmitter();
    this.onScroll = new EventEmitter();
  }
  osInstance() {
    return this.osDirective.osInstance();
  }
  getElement() {
    return this.targetRef.nativeElement;
  }
  ngAfterViewInit() {
    const targetElm = this.getElement();
    const contentElm = this.contentRef.nativeElement;
    if (targetElm && contentElm) {
      this.osDirective.osInitialize({
        target: targetElm,
        elements: {
          viewport: contentElm,
          content: contentElm
        }
      });
    }
  }
  ngOnDestroy() {
    this.osDirective?.osInstance()?.destroy();
  }
  mergeEvents(originalEvents) {
    return mergeEventListeners({
      initialized: (...args) => this.dispatchEventIfHasObservers(this.onInitialized, args),
      updated: (...args) => this.dispatchEventIfHasObservers(this.onUpdated, args),
      destroyed: (...args) => this.dispatchEventIfHasObservers(this.onDestroyed, args),
      scroll: (...args) => this.dispatchEventIfHasObservers(this.onScroll, args)
    }, originalEvents || {});
  }
  dispatchEventIfHasObservers(eventEmitter, args) {
    if (eventEmitter.observed || eventEmitter.observers.length > 0) {
      this.ngZone.run(() => eventEmitter.emit(args));
    }
  }
};
OverlayScrollbarsComponent.\u0275fac = function OverlayScrollbarsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || OverlayScrollbarsComponent)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ElementRef));
};
OverlayScrollbarsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: OverlayScrollbarsComponent,
  selectors: [["overlay-scrollbars"], ["", "overlay-scrollbars", ""]],
  viewQuery: function OverlayScrollbarsComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
      \u0275\u0275viewQuery(_c02, 5, OverlayScrollbarsDirective);
    }
    if (rf & 2) {
      let _t2;
      \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.contentRef = _t2.first);
      \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.osDirective = _t2.first);
    }
  },
  hostAttrs: ["data-overlayscrollbars-initialize", ""],
  inputs: {
    options: "options",
    events: "events",
    defer: "defer"
  },
  outputs: {
    onInitialized: "osInitialized",
    onUpdated: "osUpdated",
    onDestroyed: "osDestroyed",
    onScroll: "osScroll"
  },
  ngContentSelectors: _c12,
  decls: 3,
  vars: 3,
  consts: [["content", ""], ["overlayScrollbars", "", "data-overlayscrollbars-contents", "", 3, "options", "events", "defer"]],
  template: function OverlayScrollbarsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 1, 0);
      \u0275\u0275projection(2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("options", ctx.options)("events", ctx.mergeEvents(ctx.events))("defer", ctx.defer);
    }
  },
  dependencies: [OverlayScrollbarsDirective],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayScrollbarsComponent, [{
    type: Component,
    args: [{
      selector: "overlay-scrollbars, [overlay-scrollbars]",
      host: {
        "data-overlayscrollbars-initialize": ""
      },
      template: `
    <div
      overlayScrollbars
      data-overlayscrollbars-contents=""
      [options]="options"
      [events]="mergeEvents(events)"
      [defer]="defer"
      #content
    >
      <ng-content></ng-content>
    </div>
  `
    }]
  }], function() {
    return [{
      type: NgZone
    }, {
      type: ElementRef
    }];
  }, {
    options: [{
      type: Input,
      args: ["options"]
    }],
    events: [{
      type: Input,
      args: ["events"]
    }],
    defer: [{
      type: Input,
      args: ["defer"]
    }],
    onInitialized: [{
      type: Output,
      args: ["osInitialized"]
    }],
    onUpdated: [{
      type: Output,
      args: ["osUpdated"]
    }],
    onDestroyed: [{
      type: Output,
      args: ["osDestroyed"]
    }],
    onScroll: [{
      type: Output,
      args: ["osScroll"]
    }],
    contentRef: [{
      type: ViewChild,
      args: ["content"]
    }],
    osDirective: [{
      type: ViewChild,
      args: ["content", {
        read: OverlayScrollbarsDirective
      }]
    }]
  });
})();
var OverlayscrollbarsModule = class {
};
OverlayscrollbarsModule.\u0275fac = function OverlayscrollbarsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || OverlayscrollbarsModule)();
};
OverlayscrollbarsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: OverlayscrollbarsModule
});
OverlayscrollbarsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayscrollbarsModule, [{
    type: NgModule,
    args: [{
      declarations: [OverlayScrollbarsComponent, OverlayScrollbarsDirective],
      exports: [OverlayScrollbarsComponent, OverlayScrollbarsDirective]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/bidi.mjs
var DIR_DOCUMENT = new InjectionToken("cdk-dir-doc", {
  providedIn: "root",
  factory: DIR_DOCUMENT_FACTORY
});
function DIR_DOCUMENT_FACTORY() {
  return inject(DOCUMENT);
}
var RTL_LOCALE_PATTERN = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function _resolveDirectionality(rawValue) {
  const value = rawValue?.toLowerCase() || "";
  if (value === "auto" && typeof navigator !== "undefined" && navigator?.language) {
    return RTL_LOCALE_PATTERN.test(navigator.language) ? "rtl" : "ltr";
  }
  return value === "rtl" ? "rtl" : "ltr";
}
var _Directionality = class _Directionality {
  constructor(_document) {
    this.value = "ltr";
    this.change = new EventEmitter();
    if (_document) {
      const bodyDir = _document.body ? _document.body.dir : null;
      const htmlDir = _document.documentElement ? _document.documentElement.dir : null;
      this.value = _resolveDirectionality(bodyDir || htmlDir || "ltr");
    }
  }
  ngOnDestroy() {
    this.change.complete();
  }
};
_Directionality.\u0275fac = function Directionality_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Directionality)(\u0275\u0275inject(DIR_DOCUMENT, 8));
};
_Directionality.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _Directionality,
  factory: _Directionality.\u0275fac,
  providedIn: "root"
});
var Directionality = _Directionality;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Directionality, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DIR_DOCUMENT]
    }]
  }], null);
})();
var _Dir = class _Dir {
  constructor() {
    this._dir = "ltr";
    this._isInitialized = false;
    this.change = new EventEmitter();
  }
  /** @docs-private */
  get dir() {
    return this._dir;
  }
  set dir(value) {
    const previousValue = this._dir;
    this._dir = _resolveDirectionality(value);
    this._rawDir = value;
    if (previousValue !== this._dir && this._isInitialized) {
      this.change.emit(this._dir);
    }
  }
  /** Current layout direction of the element. */
  get value() {
    return this.dir;
  }
  /** Initialize once default value has been set. */
  ngAfterContentInit() {
    this._isInitialized = true;
  }
  ngOnDestroy() {
    this.change.complete();
  }
};
_Dir.\u0275fac = function Dir_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Dir)();
};
_Dir.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _Dir,
  selectors: [["", "dir", ""]],
  hostVars: 1,
  hostBindings: function Dir_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("dir", ctx._rawDir);
    }
  },
  inputs: {
    dir: "dir"
  },
  outputs: {
    change: "dirChange"
  },
  exportAs: ["dir"],
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([{
    provide: Directionality,
    useExisting: _Dir
  }])]
});
var Dir = _Dir;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dir, [{
    type: Directive,
    args: [{
      selector: "[dir]",
      providers: [{
        provide: Directionality,
        useExisting: Dir
      }],
      host: {
        "[attr.dir]": "_rawDir"
      },
      exportAs: "dir",
      standalone: true
    }]
  }], null, {
    change: [{
      type: Output,
      args: ["dirChange"]
    }],
    dir: [{
      type: Input
    }]
  });
})();
var _BidiModule = class _BidiModule {
};
_BidiModule.\u0275fac = function BidiModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BidiModule)();
};
_BidiModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _BidiModule
});
_BidiModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var BidiModule = _BidiModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BidiModule, [{
    type: NgModule,
    args: [{
      imports: [Dir],
      exports: [Dir]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/collections.mjs
var DataSource = class {
};
function isDataSource(value) {
  return value && typeof value.connect === "function" && !(value instanceof ConnectableObservable);
}
var ArrayDataSource = class extends DataSource {
  constructor(_data) {
    super();
    this._data = _data;
  }
  connect() {
    return isObservable(this._data) ? this._data : of(this._data);
  }
  disconnect() {
  }
};
var _ViewRepeaterOperation;
(function(_ViewRepeaterOperation2) {
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["REPLACED"] = 0] = "REPLACED";
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["INSERTED"] = 1] = "INSERTED";
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["MOVED"] = 2] = "MOVED";
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["REMOVED"] = 3] = "REMOVED";
})(_ViewRepeaterOperation || (_ViewRepeaterOperation = {}));
var _VIEW_REPEATER_STRATEGY = new InjectionToken("_ViewRepeater");
var _DisposeViewRepeaterStrategy = class {
  applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
    changes.forEachOperation((record, adjustedPreviousIndex, currentIndex) => {
      let view;
      let operation;
      if (record.previousIndex == null) {
        const insertContext = itemContextFactory(record, adjustedPreviousIndex, currentIndex);
        view = viewContainerRef.createEmbeddedView(insertContext.templateRef, insertContext.context, insertContext.index);
        operation = _ViewRepeaterOperation.INSERTED;
      } else if (currentIndex == null) {
        viewContainerRef.remove(adjustedPreviousIndex);
        operation = _ViewRepeaterOperation.REMOVED;
      } else {
        view = viewContainerRef.get(adjustedPreviousIndex);
        viewContainerRef.move(view, currentIndex);
        operation = _ViewRepeaterOperation.MOVED;
      }
      if (itemViewChanged) {
        itemViewChanged({
          context: view?.context,
          operation,
          record
        });
      }
    });
  }
  detach() {
  }
};
var _RecycleViewRepeaterStrategy = class {
  constructor() {
    this.viewCacheSize = 20;
    this._viewCache = [];
  }
  /** Apply changes to the DOM. */
  applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
    changes.forEachOperation((record, adjustedPreviousIndex, currentIndex) => {
      let view;
      let operation;
      if (record.previousIndex == null) {
        const viewArgsFactory = () => itemContextFactory(record, adjustedPreviousIndex, currentIndex);
        view = this._insertView(viewArgsFactory, currentIndex, viewContainerRef, itemValueResolver(record));
        operation = view ? _ViewRepeaterOperation.INSERTED : _ViewRepeaterOperation.REPLACED;
      } else if (currentIndex == null) {
        this._detachAndCacheView(adjustedPreviousIndex, viewContainerRef);
        operation = _ViewRepeaterOperation.REMOVED;
      } else {
        view = this._moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, itemValueResolver(record));
        operation = _ViewRepeaterOperation.MOVED;
      }
      if (itemViewChanged) {
        itemViewChanged({
          context: view?.context,
          operation,
          record
        });
      }
    });
  }
  detach() {
    for (const view of this._viewCache) {
      view.destroy();
    }
    this._viewCache = [];
  }
  /**
   * Inserts a view for a new item, either from the cache or by creating a new
   * one. Returns `undefined` if the item was inserted into a cached view.
   */
  _insertView(viewArgsFactory, currentIndex, viewContainerRef, value) {
    const cachedView = this._insertViewFromCache(currentIndex, viewContainerRef);
    if (cachedView) {
      cachedView.context.$implicit = value;
      return void 0;
    }
    const viewArgs = viewArgsFactory();
    return viewContainerRef.createEmbeddedView(viewArgs.templateRef, viewArgs.context, viewArgs.index);
  }
  /** Detaches the view at the given index and inserts into the view cache. */
  _detachAndCacheView(index, viewContainerRef) {
    const detachedView = viewContainerRef.detach(index);
    this._maybeCacheView(detachedView, viewContainerRef);
  }
  /** Moves view at the previous index to the current index. */
  _moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, value) {
    const view = viewContainerRef.get(adjustedPreviousIndex);
    viewContainerRef.move(view, currentIndex);
    view.context.$implicit = value;
    return view;
  }
  /**
   * Cache the given detached view. If the cache is full, the view will be
   * destroyed.
   */
  _maybeCacheView(view, viewContainerRef) {
    if (this._viewCache.length < this.viewCacheSize) {
      this._viewCache.push(view);
    } else {
      const index = viewContainerRef.indexOf(view);
      if (index === -1) {
        view.destroy();
      } else {
        viewContainerRef.remove(index);
      }
    }
  }
  /** Inserts a recycled view from the cache at the given index. */
  _insertViewFromCache(index, viewContainerRef) {
    const cachedView = this._viewCache.pop();
    if (cachedView) {
      viewContainerRef.insert(cachedView, index);
    }
    return cachedView || null;
  }
};
var SelectionModel = class {
  /** Selected values. */
  get selected() {
    if (!this._selected) {
      this._selected = Array.from(this._selection.values());
    }
    return this._selected;
  }
  constructor(_multiple = false, initiallySelectedValues, _emitChanges = true, compareWith) {
    this._multiple = _multiple;
    this._emitChanges = _emitChanges;
    this.compareWith = compareWith;
    this._selection = /* @__PURE__ */ new Set();
    this._deselectedToEmit = [];
    this._selectedToEmit = [];
    this.changed = new Subject();
    if (initiallySelectedValues && initiallySelectedValues.length) {
      if (_multiple) {
        initiallySelectedValues.forEach((value) => this._markSelected(value));
      } else {
        this._markSelected(initiallySelectedValues[0]);
      }
      this._selectedToEmit.length = 0;
    }
  }
  /**
   * Selects a value or an array of values.
   * @param values The values to select
   * @return Whether the selection changed as a result of this call
   * @breaking-change 16.0.0 make return type boolean
   */
  select(...values) {
    this._verifyValueAssignment(values);
    values.forEach((value) => this._markSelected(value));
    const changed = this._hasQueuedChanges();
    this._emitChangeEvent();
    return changed;
  }
  /**
   * Deselects a value or an array of values.
   * @param values The values to deselect
   * @return Whether the selection changed as a result of this call
   * @breaking-change 16.0.0 make return type boolean
   */
  deselect(...values) {
    this._verifyValueAssignment(values);
    values.forEach((value) => this._unmarkSelected(value));
    const changed = this._hasQueuedChanges();
    this._emitChangeEvent();
    return changed;
  }
  /**
   * Sets the selected values
   * @param values The new selected values
   * @return Whether the selection changed as a result of this call
   * @breaking-change 16.0.0 make return type boolean
   */
  setSelection(...values) {
    this._verifyValueAssignment(values);
    const oldValues = this.selected;
    const newSelectedSet = new Set(values);
    values.forEach((value) => this._markSelected(value));
    oldValues.filter((value) => !newSelectedSet.has(this._getConcreteValue(value, newSelectedSet))).forEach((value) => this._unmarkSelected(value));
    const changed = this._hasQueuedChanges();
    this._emitChangeEvent();
    return changed;
  }
  /**
   * Toggles a value between selected and deselected.
   * @param value The value to toggle
   * @return Whether the selection changed as a result of this call
   * @breaking-change 16.0.0 make return type boolean
   */
  toggle(value) {
    return this.isSelected(value) ? this.deselect(value) : this.select(value);
  }
  /**
   * Clears all of the selected values.
   * @param flushEvent Whether to flush the changes in an event.
   *   If false, the changes to the selection will be flushed along with the next event.
   * @return Whether the selection changed as a result of this call
   * @breaking-change 16.0.0 make return type boolean
   */
  clear(flushEvent = true) {
    this._unmarkAll();
    const changed = this._hasQueuedChanges();
    if (flushEvent) {
      this._emitChangeEvent();
    }
    return changed;
  }
  /**
   * Determines whether a value is selected.
   */
  isSelected(value) {
    return this._selection.has(this._getConcreteValue(value));
  }
  /**
   * Determines whether the model does not have a value.
   */
  isEmpty() {
    return this._selection.size === 0;
  }
  /**
   * Determines whether the model has a value.
   */
  hasValue() {
    return !this.isEmpty();
  }
  /**
   * Sorts the selected values based on a predicate function.
   */
  sort(predicate) {
    if (this._multiple && this.selected) {
      this._selected.sort(predicate);
    }
  }
  /**
   * Gets whether multiple values can be selected.
   */
  isMultipleSelection() {
    return this._multiple;
  }
  /** Emits a change event and clears the records of selected and deselected values. */
  _emitChangeEvent() {
    this._selected = null;
    if (this._selectedToEmit.length || this._deselectedToEmit.length) {
      this.changed.next({
        source: this,
        added: this._selectedToEmit,
        removed: this._deselectedToEmit
      });
      this._deselectedToEmit = [];
      this._selectedToEmit = [];
    }
  }
  /** Selects a value. */
  _markSelected(value) {
    value = this._getConcreteValue(value);
    if (!this.isSelected(value)) {
      if (!this._multiple) {
        this._unmarkAll();
      }
      if (!this.isSelected(value)) {
        this._selection.add(value);
      }
      if (this._emitChanges) {
        this._selectedToEmit.push(value);
      }
    }
  }
  /** Deselects a value. */
  _unmarkSelected(value) {
    value = this._getConcreteValue(value);
    if (this.isSelected(value)) {
      this._selection.delete(value);
      if (this._emitChanges) {
        this._deselectedToEmit.push(value);
      }
    }
  }
  /** Clears out the selected values. */
  _unmarkAll() {
    if (!this.isEmpty()) {
      this._selection.forEach((value) => this._unmarkSelected(value));
    }
  }
  /**
   * Verifies the value assignment and throws an error if the specified value array is
   * including multiple values while the selection model is not supporting multiple values.
   */
  _verifyValueAssignment(values) {
    if (values.length > 1 && !this._multiple && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getMultipleValuesInSingleSelectionError();
    }
  }
  /** Whether there are queued up change to be emitted. */
  _hasQueuedChanges() {
    return !!(this._deselectedToEmit.length || this._selectedToEmit.length);
  }
  /** Returns a value that is comparable to inputValue by applying compareWith function, returns the same inputValue otherwise. */
  _getConcreteValue(inputValue, selection) {
    if (!this.compareWith) {
      return inputValue;
    } else {
      selection = selection ?? this._selection;
      for (let selectedValue of selection) {
        if (this.compareWith(inputValue, selectedValue)) {
          return selectedValue;
        }
      }
      return inputValue;
    }
  }
};
function getMultipleValuesInSingleSelectionError() {
  return Error("Cannot pass multiple values into SelectionModel with single-value mode.");
}
var _UniqueSelectionDispatcher = class _UniqueSelectionDispatcher {
  constructor() {
    this._listeners = [];
  }
  /**
   * Notify other items that selection for the given name has been set.
   * @param id ID of the item.
   * @param name Name of the item.
   */
  notify(id, name) {
    for (let listener of this._listeners) {
      listener(id, name);
    }
  }
  /**
   * Listen for future changes to item selection.
   * @return Function used to deregister listener
   */
  listen(listener) {
    this._listeners.push(listener);
    return () => {
      this._listeners = this._listeners.filter((registered) => {
        return listener !== registered;
      });
    };
  }
  ngOnDestroy() {
    this._listeners = [];
  }
};
_UniqueSelectionDispatcher.\u0275fac = function UniqueSelectionDispatcher_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UniqueSelectionDispatcher)();
};
_UniqueSelectionDispatcher.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _UniqueSelectionDispatcher,
  factory: _UniqueSelectionDispatcher.\u0275fac,
  providedIn: "root"
});
var UniqueSelectionDispatcher = _UniqueSelectionDispatcher;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UniqueSelectionDispatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/platform.mjs
var hasV8BreakIterator;
try {
  hasV8BreakIterator = typeof Intl !== "undefined" && Intl.v8BreakIterator;
} catch {
  hasV8BreakIterator = false;
}
var _Platform = class _Platform {
  constructor(_platformId) {
    this._platformId = _platformId;
    this.isBrowser = this._platformId ? isPlatformBrowser(this._platformId) : typeof document === "object" && !!document;
    this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
    this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
    this.BLINK = this.isBrowser && !!(window.chrome || hasV8BreakIterator) && typeof CSS !== "undefined" && !this.EDGE && !this.TRIDENT;
    this.WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
    this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window);
    this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
    this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
    this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
  }
};
_Platform.\u0275fac = function Platform_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Platform)(\u0275\u0275inject(PLATFORM_ID));
};
_Platform.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _Platform,
  factory: _Platform.\u0275fac,
  providedIn: "root"
});
var Platform = _Platform;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Platform, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Object,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], null);
})();
var _PlatformModule = class _PlatformModule {
};
_PlatformModule.\u0275fac = function PlatformModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PlatformModule)();
};
_PlatformModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _PlatformModule
});
_PlatformModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var PlatformModule = _PlatformModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlatformModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();
var supportedInputTypes;
var candidateInputTypes = [
  // `color` must come first. Chrome 56 shows a warning if we change the type to `color` after
  // first changing it to something else:
  // The specified value "" does not conform to the required format.
  // The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
  "color",
  "button",
  "checkbox",
  "date",
  "datetime-local",
  "email",
  "file",
  "hidden",
  "image",
  "month",
  "number",
  "password",
  "radio",
  "range",
  "reset",
  "search",
  "submit",
  "tel",
  "text",
  "time",
  "url",
  "week"
];
function getSupportedInputTypes() {
  if (supportedInputTypes) {
    return supportedInputTypes;
  }
  if (typeof document !== "object" || !document) {
    supportedInputTypes = new Set(candidateInputTypes);
    return supportedInputTypes;
  }
  let featureTestInput = document.createElement("input");
  supportedInputTypes = new Set(candidateInputTypes.filter((value) => {
    featureTestInput.setAttribute("type", value);
    return featureTestInput.type === value;
  }));
  return supportedInputTypes;
}
var supportsPassiveEvents;
function supportsPassiveEventListeners() {
  if (supportsPassiveEvents == null && typeof window !== "undefined") {
    try {
      window.addEventListener("test", null, Object.defineProperty({}, "passive", {
        get: () => supportsPassiveEvents = true
      }));
    } finally {
      supportsPassiveEvents = supportsPassiveEvents || false;
    }
  }
  return supportsPassiveEvents;
}
function normalizePassiveListenerOptions(options) {
  return supportsPassiveEventListeners() ? options : !!options.capture;
}
var RtlScrollAxisType;
(function(RtlScrollAxisType2) {
  RtlScrollAxisType2[RtlScrollAxisType2["NORMAL"] = 0] = "NORMAL";
  RtlScrollAxisType2[RtlScrollAxisType2["NEGATED"] = 1] = "NEGATED";
  RtlScrollAxisType2[RtlScrollAxisType2["INVERTED"] = 2] = "INVERTED";
})(RtlScrollAxisType || (RtlScrollAxisType = {}));
var rtlScrollAxisType;
var scrollBehaviorSupported;
function supportsScrollBehavior() {
  if (scrollBehaviorSupported == null) {
    if (typeof document !== "object" || !document || typeof Element !== "function" || !Element) {
      scrollBehaviorSupported = false;
      return scrollBehaviorSupported;
    }
    if ("scrollBehavior" in document.documentElement.style) {
      scrollBehaviorSupported = true;
    } else {
      const scrollToFunction = Element.prototype.scrollTo;
      if (scrollToFunction) {
        scrollBehaviorSupported = !/\{\s*\[native code\]\s*\}/.test(scrollToFunction.toString());
      } else {
        scrollBehaviorSupported = false;
      }
    }
  }
  return scrollBehaviorSupported;
}
function getRtlScrollAxisType() {
  if (typeof document !== "object" || !document) {
    return RtlScrollAxisType.NORMAL;
  }
  if (rtlScrollAxisType == null) {
    const scrollContainer = document.createElement("div");
    const containerStyle = scrollContainer.style;
    scrollContainer.dir = "rtl";
    containerStyle.width = "1px";
    containerStyle.overflow = "auto";
    containerStyle.visibility = "hidden";
    containerStyle.pointerEvents = "none";
    containerStyle.position = "absolute";
    const content = document.createElement("div");
    const contentStyle = content.style;
    contentStyle.width = "2px";
    contentStyle.height = "1px";
    scrollContainer.appendChild(content);
    document.body.appendChild(scrollContainer);
    rtlScrollAxisType = RtlScrollAxisType.NORMAL;
    if (scrollContainer.scrollLeft === 0) {
      scrollContainer.scrollLeft = 1;
      rtlScrollAxisType = scrollContainer.scrollLeft === 0 ? RtlScrollAxisType.NEGATED : RtlScrollAxisType.INVERTED;
    }
    scrollContainer.remove();
  }
  return rtlScrollAxisType;
}
var shadowDomIsSupported;
function _supportsShadowDom() {
  if (shadowDomIsSupported == null) {
    const head = typeof document !== "undefined" ? document.head : null;
    shadowDomIsSupported = !!(head && (head.createShadowRoot || head.attachShadow));
  }
  return shadowDomIsSupported;
}
function _getShadowRoot(element) {
  if (_supportsShadowDom()) {
    const rootNode = element.getRootNode ? element.getRootNode() : null;
    if (typeof ShadowRoot !== "undefined" && ShadowRoot && rootNode instanceof ShadowRoot) {
      return rootNode;
    }
  }
  return null;
}
function _getFocusedElementPierceShadowDom() {
  let activeElement = typeof document !== "undefined" && document ? document.activeElement : null;
  while (activeElement && activeElement.shadowRoot) {
    const newActiveElement = activeElement.shadowRoot.activeElement;
    if (newActiveElement === activeElement) {
      break;
    } else {
      activeElement = newActiveElement;
    }
  }
  return activeElement;
}
function _getEventTarget(event) {
  return event.composedPath ? event.composedPath()[0] : event.target;
}
function _isTestEnvironment() {
  return (
    // @ts-ignore
    typeof __karma__ !== "undefined" && !!__karma__ || // @ts-ignore
    typeof jasmine !== "undefined" && !!jasmine || // @ts-ignore
    typeof jest !== "undefined" && !!jest || // @ts-ignore
    typeof Mocha !== "undefined" && !!Mocha
  );
}

// node_modules/@angular/cdk/fesm2022/coercion.mjs
function coerceBooleanProperty(value) {
  return value != null && `${value}` !== "false";
}
function coerceNumberProperty(value, fallbackValue = 0) {
  if (_isNumberValue(value)) {
    return Number(value);
  }
  return arguments.length === 2 ? fallbackValue : 0;
}
function _isNumberValue(value) {
  return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}
function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}
function coerceCssPixelValue(value) {
  if (value == null) {
    return "";
  }
  return typeof value === "string" ? value : `${value}px`;
}
function coerceElement(elementOrRef) {
  return elementOrRef instanceof ElementRef ? elementOrRef.nativeElement : elementOrRef;
}
function coerceStringArray(value, separator = /\s+/) {
  const result = [];
  if (value != null) {
    const sourceValues = Array.isArray(value) ? value : `${value}`.split(separator);
    for (const sourceValue of sourceValues) {
      const trimmedString = `${sourceValue}`.trim();
      if (trimmedString) {
        result.push(trimmedString);
      }
    }
  }
  return result;
}

// node_modules/@angular/cdk/fesm2022/scrolling.mjs
var _c03 = ["contentWrapper"];
var _c13 = ["*"];
var VIRTUAL_SCROLL_STRATEGY = new InjectionToken("VIRTUAL_SCROLL_STRATEGY");
var FixedSizeVirtualScrollStrategy = class {
  /**
   * @param itemSize The size of the items in the virtually scrolling list.
   * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
   * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
   */
  constructor(itemSize, minBufferPx, maxBufferPx) {
    this._scrolledIndexChange = new Subject();
    this.scrolledIndexChange = this._scrolledIndexChange.pipe(distinctUntilChanged());
    this._viewport = null;
    this._itemSize = itemSize;
    this._minBufferPx = minBufferPx;
    this._maxBufferPx = maxBufferPx;
  }
  /**
   * Attaches this scroll strategy to a viewport.
   * @param viewport The viewport to attach this strategy to.
   */
  attach(viewport) {
    this._viewport = viewport;
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  /** Detaches this scroll strategy from the currently attached viewport. */
  detach() {
    this._scrolledIndexChange.complete();
    this._viewport = null;
  }
  /**
   * Update the item size and buffer size.
   * @param itemSize The size of the items in the virtually scrolling list.
   * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
   * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
   */
  updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
    if (maxBufferPx < minBufferPx && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx");
    }
    this._itemSize = itemSize;
    this._minBufferPx = minBufferPx;
    this._maxBufferPx = maxBufferPx;
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onContentScrolled() {
    this._updateRenderedRange();
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onDataLengthChanged() {
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onContentRendered() {
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onRenderedOffsetChanged() {
  }
  /**
   * Scroll to the offset for the given index.
   * @param index The index of the element to scroll to.
   * @param behavior The ScrollBehavior to use when scrolling.
   */
  scrollToIndex(index, behavior) {
    if (this._viewport) {
      this._viewport.scrollToOffset(index * this._itemSize, behavior);
    }
  }
  /** Update the viewport's total content size. */
  _updateTotalContentSize() {
    if (!this._viewport) {
      return;
    }
    this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
  }
  /** Update the viewport's rendered range. */
  _updateRenderedRange() {
    if (!this._viewport) {
      return;
    }
    const renderedRange = this._viewport.getRenderedRange();
    const newRange = {
      start: renderedRange.start,
      end: renderedRange.end
    };
    const viewportSize = this._viewport.getViewportSize();
    const dataLength = this._viewport.getDataLength();
    let scrollOffset = this._viewport.measureScrollOffset();
    let firstVisibleIndex = this._itemSize > 0 ? scrollOffset / this._itemSize : 0;
    if (newRange.end > dataLength) {
      const maxVisibleItems = Math.ceil(viewportSize / this._itemSize);
      const newVisibleIndex = Math.max(0, Math.min(firstVisibleIndex, dataLength - maxVisibleItems));
      if (firstVisibleIndex != newVisibleIndex) {
        firstVisibleIndex = newVisibleIndex;
        scrollOffset = newVisibleIndex * this._itemSize;
        newRange.start = Math.floor(firstVisibleIndex);
      }
      newRange.end = Math.max(0, Math.min(dataLength, newRange.start + maxVisibleItems));
    }
    const startBuffer = scrollOffset - newRange.start * this._itemSize;
    if (startBuffer < this._minBufferPx && newRange.start != 0) {
      const expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
      newRange.start = Math.max(0, newRange.start - expandStart);
      newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
    } else {
      const endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);
      if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
        const expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);
        if (expandEnd > 0) {
          newRange.end = Math.min(dataLength, newRange.end + expandEnd);
          newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
        }
      }
    }
    this._viewport.setRenderedRange(newRange);
    this._viewport.setRenderedContentOffset(this._itemSize * newRange.start);
    this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
  }
};
function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
  return fixedSizeDir._scrollStrategy;
}
var _CdkFixedSizeVirtualScroll = class _CdkFixedSizeVirtualScroll {
  constructor() {
    this._itemSize = 20;
    this._minBufferPx = 100;
    this._maxBufferPx = 200;
    this._scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
  }
  /** The size of the items in the list (in pixels). */
  get itemSize() {
    return this._itemSize;
  }
  set itemSize(value) {
    this._itemSize = coerceNumberProperty(value);
  }
  /**
   * The minimum amount of buffer rendered beyond the viewport (in pixels).
   * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
   */
  get minBufferPx() {
    return this._minBufferPx;
  }
  set minBufferPx(value) {
    this._minBufferPx = coerceNumberProperty(value);
  }
  /**
   * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
   */
  get maxBufferPx() {
    return this._maxBufferPx;
  }
  set maxBufferPx(value) {
    this._maxBufferPx = coerceNumberProperty(value);
  }
  ngOnChanges() {
    this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
  }
};
_CdkFixedSizeVirtualScroll.\u0275fac = function CdkFixedSizeVirtualScroll_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkFixedSizeVirtualScroll)();
};
_CdkFixedSizeVirtualScroll.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkFixedSizeVirtualScroll,
  selectors: [["cdk-virtual-scroll-viewport", "itemSize", ""]],
  inputs: {
    itemSize: "itemSize",
    minBufferPx: "minBufferPx",
    maxBufferPx: "maxBufferPx"
  },
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([{
    provide: VIRTUAL_SCROLL_STRATEGY,
    useFactory: _fixedSizeVirtualScrollStrategyFactory,
    deps: [forwardRef(() => _CdkFixedSizeVirtualScroll)]
  }]), \u0275\u0275NgOnChangesFeature]
});
var CdkFixedSizeVirtualScroll = _CdkFixedSizeVirtualScroll;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkFixedSizeVirtualScroll, [{
    type: Directive,
    args: [{
      selector: "cdk-virtual-scroll-viewport[itemSize]",
      standalone: true,
      providers: [{
        provide: VIRTUAL_SCROLL_STRATEGY,
        useFactory: _fixedSizeVirtualScrollStrategyFactory,
        deps: [forwardRef(() => CdkFixedSizeVirtualScroll)]
      }]
    }]
  }], null, {
    itemSize: [{
      type: Input
    }],
    minBufferPx: [{
      type: Input
    }],
    maxBufferPx: [{
      type: Input
    }]
  });
})();
var DEFAULT_SCROLL_TIME = 20;
var _ScrollDispatcher = class _ScrollDispatcher {
  constructor(_ngZone, _platform, document2) {
    this._ngZone = _ngZone;
    this._platform = _platform;
    this._scrolled = new Subject();
    this._globalSubscription = null;
    this._scrolledCount = 0;
    this.scrollContainers = /* @__PURE__ */ new Map();
    this._document = document2;
  }
  /**
   * Registers a scrollable instance with the service and listens for its scrolled events. When the
   * scrollable is scrolled, the service emits the event to its scrolled observable.
   * @param scrollable Scrollable instance to be registered.
   */
  register(scrollable) {
    if (!this.scrollContainers.has(scrollable)) {
      this.scrollContainers.set(scrollable, scrollable.elementScrolled().subscribe(() => this._scrolled.next(scrollable)));
    }
  }
  /**
   * De-registers a Scrollable reference and unsubscribes from its scroll event observable.
   * @param scrollable Scrollable instance to be deregistered.
   */
  deregister(scrollable) {
    const scrollableReference = this.scrollContainers.get(scrollable);
    if (scrollableReference) {
      scrollableReference.unsubscribe();
      this.scrollContainers.delete(scrollable);
    }
  }
  /**
   * Returns an observable that emits an event whenever any of the registered Scrollable
   * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
   * to override the default "throttle" time.
   *
   * **Note:** in order to avoid hitting change detection for every scroll event,
   * all of the events emitted from this stream will be run outside the Angular zone.
   * If you need to update any data bindings as a result of a scroll event, you have
   * to run the callback using `NgZone.run`.
   */
  scrolled(auditTimeInMs = DEFAULT_SCROLL_TIME) {
    if (!this._platform.isBrowser) {
      return of();
    }
    return new Observable((observer) => {
      if (!this._globalSubscription) {
        this._addGlobalListener();
      }
      const subscription = auditTimeInMs > 0 ? this._scrolled.pipe(auditTime(auditTimeInMs)).subscribe(observer) : this._scrolled.subscribe(observer);
      this._scrolledCount++;
      return () => {
        subscription.unsubscribe();
        this._scrolledCount--;
        if (!this._scrolledCount) {
          this._removeGlobalListener();
        }
      };
    });
  }
  ngOnDestroy() {
    this._removeGlobalListener();
    this.scrollContainers.forEach((_2, container) => this.deregister(container));
    this._scrolled.complete();
  }
  /**
   * Returns an observable that emits whenever any of the
   * scrollable ancestors of an element are scrolled.
   * @param elementOrElementRef Element whose ancestors to listen for.
   * @param auditTimeInMs Time to throttle the scroll events.
   */
  ancestorScrolled(elementOrElementRef, auditTimeInMs) {
    const ancestors = this.getAncestorScrollContainers(elementOrElementRef);
    return this.scrolled(auditTimeInMs).pipe(filter((target) => {
      return !target || ancestors.indexOf(target) > -1;
    }));
  }
  /** Returns all registered Scrollables that contain the provided element. */
  getAncestorScrollContainers(elementOrElementRef) {
    const scrollingContainers = [];
    this.scrollContainers.forEach((_subscription, scrollable) => {
      if (this._scrollableContainsElement(scrollable, elementOrElementRef)) {
        scrollingContainers.push(scrollable);
      }
    });
    return scrollingContainers;
  }
  /** Use defaultView of injected document if available or fallback to global window reference */
  _getWindow() {
    return this._document.defaultView || window;
  }
  /** Returns true if the element is contained within the provided Scrollable. */
  _scrollableContainsElement(scrollable, elementOrElementRef) {
    let element = coerceElement(elementOrElementRef);
    let scrollableElement = scrollable.getElementRef().nativeElement;
    do {
      if (element == scrollableElement) {
        return true;
      }
    } while (element = element.parentElement);
    return false;
  }
  /** Sets up the global scroll listeners. */
  _addGlobalListener() {
    this._globalSubscription = this._ngZone.runOutsideAngular(() => {
      const window2 = this._getWindow();
      return fromEvent(window2.document, "scroll").subscribe(() => this._scrolled.next());
    });
  }
  /** Cleans up the global scroll listener. */
  _removeGlobalListener() {
    if (this._globalSubscription) {
      this._globalSubscription.unsubscribe();
      this._globalSubscription = null;
    }
  }
};
_ScrollDispatcher.\u0275fac = function ScrollDispatcher_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ScrollDispatcher)(\u0275\u0275inject(NgZone), \u0275\u0275inject(Platform), \u0275\u0275inject(DOCUMENT, 8));
};
_ScrollDispatcher.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ScrollDispatcher,
  factory: _ScrollDispatcher.\u0275fac,
  providedIn: "root"
});
var ScrollDispatcher = _ScrollDispatcher;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollDispatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: NgZone
  }, {
    type: Platform
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var _CdkScrollable = class _CdkScrollable {
  constructor(elementRef, scrollDispatcher, ngZone, dir) {
    this.elementRef = elementRef;
    this.scrollDispatcher = scrollDispatcher;
    this.ngZone = ngZone;
    this.dir = dir;
    this._destroyed = new Subject();
    this._elementScrolled = new Observable((observer) => this.ngZone.runOutsideAngular(() => fromEvent(this.elementRef.nativeElement, "scroll").pipe(takeUntil(this._destroyed)).subscribe(observer)));
  }
  ngOnInit() {
    this.scrollDispatcher.register(this);
  }
  ngOnDestroy() {
    this.scrollDispatcher.deregister(this);
    this._destroyed.next();
    this._destroyed.complete();
  }
  /** Returns observable that emits when a scroll event is fired on the host element. */
  elementScrolled() {
    return this._elementScrolled;
  }
  /** Gets the ElementRef for the viewport. */
  getElementRef() {
    return this.elementRef;
  }
  /**
   * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
   * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
   * left and right always refer to the left and right side of the scrolling container irrespective
   * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
   * in an RTL context.
   * @param options specified the offsets to scroll to.
   */
  scrollTo(options) {
    const el = this.elementRef.nativeElement;
    const isRtl = this.dir && this.dir.value == "rtl";
    if (options.left == null) {
      options.left = isRtl ? options.end : options.start;
    }
    if (options.right == null) {
      options.right = isRtl ? options.start : options.end;
    }
    if (options.bottom != null) {
      options.top = el.scrollHeight - el.clientHeight - options.bottom;
    }
    if (isRtl && getRtlScrollAxisType() != RtlScrollAxisType.NORMAL) {
      if (options.left != null) {
        options.right = el.scrollWidth - el.clientWidth - options.left;
      }
      if (getRtlScrollAxisType() == RtlScrollAxisType.INVERTED) {
        options.left = options.right;
      } else if (getRtlScrollAxisType() == RtlScrollAxisType.NEGATED) {
        options.left = options.right ? -options.right : options.right;
      }
    } else {
      if (options.right != null) {
        options.left = el.scrollWidth - el.clientWidth - options.right;
      }
    }
    this._applyScrollToOptions(options);
  }
  _applyScrollToOptions(options) {
    const el = this.elementRef.nativeElement;
    if (supportsScrollBehavior()) {
      el.scrollTo(options);
    } else {
      if (options.top != null) {
        el.scrollTop = options.top;
      }
      if (options.left != null) {
        el.scrollLeft = options.left;
      }
    }
  }
  /**
   * Measures the scroll offset relative to the specified edge of the viewport. This method can be
   * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
   * about what scrollLeft means in RTL. The values returned by this method are normalized such that
   * left and right always refer to the left and right side of the scrolling container irrespective
   * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
   * in an RTL context.
   * @param from The edge to measure from.
   */
  measureScrollOffset(from2) {
    const LEFT = "left";
    const RIGHT = "right";
    const el = this.elementRef.nativeElement;
    if (from2 == "top") {
      return el.scrollTop;
    }
    if (from2 == "bottom") {
      return el.scrollHeight - el.clientHeight - el.scrollTop;
    }
    const isRtl = this.dir && this.dir.value == "rtl";
    if (from2 == "start") {
      from2 = isRtl ? RIGHT : LEFT;
    } else if (from2 == "end") {
      from2 = isRtl ? LEFT : RIGHT;
    }
    if (isRtl && getRtlScrollAxisType() == RtlScrollAxisType.INVERTED) {
      if (from2 == LEFT) {
        return el.scrollWidth - el.clientWidth - el.scrollLeft;
      } else {
        return el.scrollLeft;
      }
    } else if (isRtl && getRtlScrollAxisType() == RtlScrollAxisType.NEGATED) {
      if (from2 == LEFT) {
        return el.scrollLeft + el.scrollWidth - el.clientWidth;
      } else {
        return -el.scrollLeft;
      }
    } else {
      if (from2 == LEFT) {
        return el.scrollLeft;
      } else {
        return el.scrollWidth - el.clientWidth - el.scrollLeft;
      }
    }
  }
};
_CdkScrollable.\u0275fac = function CdkScrollable_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkScrollable)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ScrollDispatcher), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(Directionality, 8));
};
_CdkScrollable.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkScrollable,
  selectors: [["", "cdk-scrollable", ""], ["", "cdkScrollable", ""]],
  standalone: true
});
var CdkScrollable = _CdkScrollable;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkScrollable, [{
    type: Directive,
    args: [{
      selector: "[cdk-scrollable], [cdkScrollable]",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ScrollDispatcher
  }, {
    type: NgZone
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var DEFAULT_RESIZE_TIME = 20;
var _ViewportRuler = class _ViewportRuler {
  constructor(_platform, ngZone, document2) {
    this._platform = _platform;
    this._change = new Subject();
    this._changeListener = (event) => {
      this._change.next(event);
    };
    this._document = document2;
    ngZone.runOutsideAngular(() => {
      if (_platform.isBrowser) {
        const window2 = this._getWindow();
        window2.addEventListener("resize", this._changeListener);
        window2.addEventListener("orientationchange", this._changeListener);
      }
      this.change().subscribe(() => this._viewportSize = null);
    });
  }
  ngOnDestroy() {
    if (this._platform.isBrowser) {
      const window2 = this._getWindow();
      window2.removeEventListener("resize", this._changeListener);
      window2.removeEventListener("orientationchange", this._changeListener);
    }
    this._change.complete();
  }
  /** Returns the viewport's width and height. */
  getViewportSize() {
    if (!this._viewportSize) {
      this._updateViewportSize();
    }
    const output = {
      width: this._viewportSize.width,
      height: this._viewportSize.height
    };
    if (!this._platform.isBrowser) {
      this._viewportSize = null;
    }
    return output;
  }
  /** Gets a DOMRect for the viewport's bounds. */
  getViewportRect() {
    const scrollPosition = this.getViewportScrollPosition();
    const {
      width,
      height
    } = this.getViewportSize();
    return {
      top: scrollPosition.top,
      left: scrollPosition.left,
      bottom: scrollPosition.top + height,
      right: scrollPosition.left + width,
      height,
      width
    };
  }
  /** Gets the (top, left) scroll position of the viewport. */
  getViewportScrollPosition() {
    if (!this._platform.isBrowser) {
      return {
        top: 0,
        left: 0
      };
    }
    const document2 = this._document;
    const window2 = this._getWindow();
    const documentElement = document2.documentElement;
    const documentRect = documentElement.getBoundingClientRect();
    const top = -documentRect.top || document2.body.scrollTop || window2.scrollY || documentElement.scrollTop || 0;
    const left = -documentRect.left || document2.body.scrollLeft || window2.scrollX || documentElement.scrollLeft || 0;
    return {
      top,
      left
    };
  }
  /**
   * Returns a stream that emits whenever the size of the viewport changes.
   * This stream emits outside of the Angular zone.
   * @param throttleTime Time in milliseconds to throttle the stream.
   */
  change(throttleTime = DEFAULT_RESIZE_TIME) {
    return throttleTime > 0 ? this._change.pipe(auditTime(throttleTime)) : this._change;
  }
  /** Use defaultView of injected document if available or fallback to global window reference */
  _getWindow() {
    return this._document.defaultView || window;
  }
  /** Updates the cached viewport size. */
  _updateViewportSize() {
    const window2 = this._getWindow();
    this._viewportSize = this._platform.isBrowser ? {
      width: window2.innerWidth,
      height: window2.innerHeight
    } : {
      width: 0,
      height: 0
    };
  }
};
_ViewportRuler.\u0275fac = function ViewportRuler_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ViewportRuler)(\u0275\u0275inject(Platform), \u0275\u0275inject(NgZone), \u0275\u0275inject(DOCUMENT, 8));
};
_ViewportRuler.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ViewportRuler,
  factory: _ViewportRuler.\u0275fac,
  providedIn: "root"
});
var ViewportRuler = _ViewportRuler;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewportRuler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Platform
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var VIRTUAL_SCROLLABLE = new InjectionToken("VIRTUAL_SCROLLABLE");
var _CdkVirtualScrollable = class _CdkVirtualScrollable extends CdkScrollable {
  constructor(elementRef, scrollDispatcher, ngZone, dir) {
    super(elementRef, scrollDispatcher, ngZone, dir);
  }
  /**
   * Measure the viewport size for the provided orientation.
   *
   * @param orientation The orientation to measure the size from.
   */
  measureViewportSize(orientation) {
    const viewportEl = this.elementRef.nativeElement;
    return orientation === "horizontal" ? viewportEl.clientWidth : viewportEl.clientHeight;
  }
};
_CdkVirtualScrollable.\u0275fac = function CdkVirtualScrollable_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkVirtualScrollable)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ScrollDispatcher), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(Directionality, 8));
};
_CdkVirtualScrollable.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkVirtualScrollable,
  features: [\u0275\u0275InheritDefinitionFeature]
});
var CdkVirtualScrollable = _CdkVirtualScrollable;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollable, [{
    type: Directive
  }], () => [{
    type: ElementRef
  }, {
    type: ScrollDispatcher
  }, {
    type: NgZone
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
function rangesEqual(r1, r2) {
  return r1.start == r2.start && r1.end == r2.end;
}
var SCROLL_SCHEDULER = typeof requestAnimationFrame !== "undefined" ? animationFrameScheduler : asapScheduler;
var _CdkVirtualScrollViewport = class _CdkVirtualScrollViewport extends CdkVirtualScrollable {
  /** The direction the viewport scrolls. */
  get orientation() {
    return this._orientation;
  }
  set orientation(orientation) {
    if (this._orientation !== orientation) {
      this._orientation = orientation;
      this._calculateSpacerSize();
    }
  }
  constructor(elementRef, _changeDetectorRef, ngZone, _scrollStrategy, dir, scrollDispatcher, viewportRuler, scrollable) {
    super(elementRef, scrollDispatcher, ngZone, dir);
    this.elementRef = elementRef;
    this._changeDetectorRef = _changeDetectorRef;
    this._scrollStrategy = _scrollStrategy;
    this.scrollable = scrollable;
    this._platform = inject(Platform);
    this._detachedSubject = new Subject();
    this._renderedRangeSubject = new Subject();
    this._orientation = "vertical";
    this.appendOnly = false;
    this.scrolledIndexChange = new Observable((observer) => this._scrollStrategy.scrolledIndexChange.subscribe((index) => Promise.resolve().then(() => this.ngZone.run(() => observer.next(index)))));
    this.renderedRangeStream = this._renderedRangeSubject;
    this._totalContentSize = 0;
    this._totalContentWidth = "";
    this._totalContentHeight = "";
    this._renderedRange = {
      start: 0,
      end: 0
    };
    this._dataLength = 0;
    this._viewportSize = 0;
    this._renderedContentOffset = 0;
    this._renderedContentOffsetNeedsRewrite = false;
    this._isChangeDetectionPending = false;
    this._runAfterChangeDetection = [];
    this._viewportChanges = Subscription.EMPTY;
    this._injector = inject(Injector);
    this._isDestroyed = false;
    if (!_scrollStrategy && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
    }
    this._viewportChanges = viewportRuler.change().subscribe(() => {
      this.checkViewportSize();
    });
    if (!this.scrollable) {
      this.elementRef.nativeElement.classList.add("cdk-virtual-scrollable");
      this.scrollable = this;
    }
  }
  ngOnInit() {
    if (!this._platform.isBrowser) {
      return;
    }
    if (this.scrollable === this) {
      super.ngOnInit();
    }
    this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => {
      this._measureViewportSize();
      this._scrollStrategy.attach(this);
      this.scrollable.elementScrolled().pipe(
        // Start off with a fake scroll event so we properly detect our initial position.
        startWith(null),
        // Collect multiple events into one until the next animation frame. This way if
        // there are multiple scroll events in the same frame we only need to recheck
        // our layout once.
        auditTime(0, SCROLL_SCHEDULER),
        // Usually `elementScrolled` is completed when the scrollable is destroyed, but
        // that may not be the case if a `CdkVirtualScrollableElement` is used so we have
        // to unsubscribe here just in case.
        takeUntil(this._destroyed)
      ).subscribe(() => this._scrollStrategy.onContentScrolled());
      this._markChangeDetectionNeeded();
    }));
  }
  ngOnDestroy() {
    this.detach();
    this._scrollStrategy.detach();
    this._renderedRangeSubject.complete();
    this._detachedSubject.complete();
    this._viewportChanges.unsubscribe();
    this._isDestroyed = true;
    super.ngOnDestroy();
  }
  /** Attaches a `CdkVirtualScrollRepeater` to this viewport. */
  attach(forOf) {
    if (this._forOf && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("CdkVirtualScrollViewport is already attached.");
    }
    this.ngZone.runOutsideAngular(() => {
      this._forOf = forOf;
      this._forOf.dataStream.pipe(takeUntil(this._detachedSubject)).subscribe((data) => {
        const newLength = data.length;
        if (newLength !== this._dataLength) {
          this._dataLength = newLength;
          this._scrollStrategy.onDataLengthChanged();
        }
        this._doChangeDetection();
      });
    });
  }
  /** Detaches the current `CdkVirtualForOf`. */
  detach() {
    this._forOf = null;
    this._detachedSubject.next();
  }
  /** Gets the length of the data bound to this viewport (in number of items). */
  getDataLength() {
    return this._dataLength;
  }
  /** Gets the size of the viewport (in pixels). */
  getViewportSize() {
    return this._viewportSize;
  }
  // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
  // cycle happens. I'm being careful to only call it after the render cycle is complete and before
  // setting it to something else, but its error prone and should probably be split into
  // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.
  /** Get the current rendered range of items. */
  getRenderedRange() {
    return this._renderedRange;
  }
  measureBoundingClientRectWithScrollOffset(from2) {
    return this.getElementRef().nativeElement.getBoundingClientRect()[from2];
  }
  /**
   * Sets the total size of all content (in pixels), including content that is not currently
   * rendered.
   */
  setTotalContentSize(size) {
    if (this._totalContentSize !== size) {
      this._totalContentSize = size;
      this._calculateSpacerSize();
      this._markChangeDetectionNeeded();
    }
  }
  /** Sets the currently rendered range of indices. */
  setRenderedRange(range2) {
    if (!rangesEqual(this._renderedRange, range2)) {
      if (this.appendOnly) {
        range2 = {
          start: 0,
          end: Math.max(this._renderedRange.end, range2.end)
        };
      }
      this._renderedRangeSubject.next(this._renderedRange = range2);
      this._markChangeDetectionNeeded(() => this._scrollStrategy.onContentRendered());
    }
  }
  /**
   * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
   */
  getOffsetToRenderedContentStart() {
    return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
  }
  /**
   * Sets the offset from the start of the viewport to either the start or end of the rendered data
   * (in pixels).
   */
  setRenderedContentOffset(offset, to = "to-start") {
    offset = this.appendOnly && to === "to-start" ? 0 : offset;
    const isRtl = this.dir && this.dir.value == "rtl";
    const isHorizontal = this.orientation == "horizontal";
    const axis = isHorizontal ? "X" : "Y";
    const axisDirection = isHorizontal && isRtl ? -1 : 1;
    let transform = `translate${axis}(${Number(axisDirection * offset)}px)`;
    this._renderedContentOffset = offset;
    if (to === "to-end") {
      transform += ` translate${axis}(-100%)`;
      this._renderedContentOffsetNeedsRewrite = true;
    }
    if (this._renderedContentTransform != transform) {
      this._renderedContentTransform = transform;
      this._markChangeDetectionNeeded(() => {
        if (this._renderedContentOffsetNeedsRewrite) {
          this._renderedContentOffset -= this.measureRenderedContentSize();
          this._renderedContentOffsetNeedsRewrite = false;
          this.setRenderedContentOffset(this._renderedContentOffset);
        } else {
          this._scrollStrategy.onRenderedOffsetChanged();
        }
      });
    }
  }
  /**
   * Scrolls to the given offset from the start of the viewport. Please note that this is not always
   * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
   * direction, this would be the equivalent of setting a fictional `scrollRight` property.
   * @param offset The offset to scroll to.
   * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
   */
  scrollToOffset(offset, behavior = "auto") {
    const options = {
      behavior
    };
    if (this.orientation === "horizontal") {
      options.start = offset;
    } else {
      options.top = offset;
    }
    this.scrollable.scrollTo(options);
  }
  /**
   * Scrolls to the offset for the given index.
   * @param index The index of the element to scroll to.
   * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
   */
  scrollToIndex(index, behavior = "auto") {
    this._scrollStrategy.scrollToIndex(index, behavior);
  }
  /**
   * Gets the current scroll offset from the start of the scrollable (in pixels).
   * @param from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
   *     in horizontal mode.
   */
  measureScrollOffset(from2) {
    let measureScrollOffset;
    if (this.scrollable == this) {
      measureScrollOffset = (_from) => super.measureScrollOffset(_from);
    } else {
      measureScrollOffset = (_from) => this.scrollable.measureScrollOffset(_from);
    }
    return Math.max(0, measureScrollOffset(from2 ?? (this.orientation === "horizontal" ? "start" : "top")) - this.measureViewportOffset());
  }
  /**
   * Measures the offset of the viewport from the scrolling container
   * @param from The edge to measure from.
   */
  measureViewportOffset(from2) {
    let fromRect;
    const LEFT = "left";
    const RIGHT = "right";
    const isRtl = this.dir?.value == "rtl";
    if (from2 == "start") {
      fromRect = isRtl ? RIGHT : LEFT;
    } else if (from2 == "end") {
      fromRect = isRtl ? LEFT : RIGHT;
    } else if (from2) {
      fromRect = from2;
    } else {
      fromRect = this.orientation === "horizontal" ? "left" : "top";
    }
    const scrollerClientRect = this.scrollable.measureBoundingClientRectWithScrollOffset(fromRect);
    const viewportClientRect = this.elementRef.nativeElement.getBoundingClientRect()[fromRect];
    return viewportClientRect - scrollerClientRect;
  }
  /** Measure the combined size of all of the rendered items. */
  measureRenderedContentSize() {
    const contentEl = this._contentWrapper.nativeElement;
    return this.orientation === "horizontal" ? contentEl.offsetWidth : contentEl.offsetHeight;
  }
  /**
   * Measure the total combined size of the given range. Throws if the range includes items that are
   * not rendered.
   */
  measureRangeSize(range2) {
    if (!this._forOf) {
      return 0;
    }
    return this._forOf.measureRangeSize(range2, this.orientation);
  }
  /** Update the viewport dimensions and re-render. */
  checkViewportSize() {
    this._measureViewportSize();
    this._scrollStrategy.onDataLengthChanged();
  }
  /** Measure the viewport size. */
  _measureViewportSize() {
    this._viewportSize = this.scrollable.measureViewportSize(this.orientation);
  }
  /** Queue up change detection to run. */
  _markChangeDetectionNeeded(runAfter) {
    if (runAfter) {
      this._runAfterChangeDetection.push(runAfter);
    }
    if (!this._isChangeDetectionPending) {
      this._isChangeDetectionPending = true;
      this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => {
        this._doChangeDetection();
      }));
    }
  }
  /** Run change detection. */
  _doChangeDetection() {
    if (this._isDestroyed) {
      return;
    }
    this.ngZone.run(() => {
      this._changeDetectorRef.markForCheck();
      this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform;
      afterNextRender(() => {
        this._isChangeDetectionPending = false;
        const runAfterChangeDetection = this._runAfterChangeDetection;
        this._runAfterChangeDetection = [];
        for (const fn of runAfterChangeDetection) {
          fn();
        }
      }, {
        injector: this._injector
      });
    });
  }
  /** Calculates the `style.width` and `style.height` for the spacer element. */
  _calculateSpacerSize() {
    this._totalContentHeight = this.orientation === "horizontal" ? "" : `${this._totalContentSize}px`;
    this._totalContentWidth = this.orientation === "horizontal" ? `${this._totalContentSize}px` : "";
  }
};
_CdkVirtualScrollViewport.\u0275fac = function CdkVirtualScrollViewport_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkVirtualScrollViewport)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(VIRTUAL_SCROLL_STRATEGY, 8), \u0275\u0275directiveInject(Directionality, 8), \u0275\u0275directiveInject(ScrollDispatcher), \u0275\u0275directiveInject(ViewportRuler), \u0275\u0275directiveInject(VIRTUAL_SCROLLABLE, 8));
};
_CdkVirtualScrollViewport.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CdkVirtualScrollViewport,
  selectors: [["cdk-virtual-scroll-viewport"]],
  viewQuery: function CdkVirtualScrollViewport_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c03, 7);
    }
    if (rf & 2) {
      let _t2;
      \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx._contentWrapper = _t2.first);
    }
  },
  hostAttrs: [1, "cdk-virtual-scroll-viewport"],
  hostVars: 4,
  hostBindings: function CdkVirtualScrollViewport_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("cdk-virtual-scroll-orientation-horizontal", ctx.orientation === "horizontal")("cdk-virtual-scroll-orientation-vertical", ctx.orientation !== "horizontal");
    }
  },
  inputs: {
    orientation: "orientation",
    appendOnly: [2, "appendOnly", "appendOnly", booleanAttribute]
  },
  outputs: {
    scrolledIndexChange: "scrolledIndexChange"
  },
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([{
    provide: CdkScrollable,
    useFactory: (virtualScrollable, viewport) => virtualScrollable || viewport,
    deps: [[new Optional(), new Inject(VIRTUAL_SCROLLABLE)], _CdkVirtualScrollViewport]
  }]), \u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
  ngContentSelectors: _c13,
  decls: 4,
  vars: 4,
  consts: [["contentWrapper", ""], [1, "cdk-virtual-scroll-content-wrapper"], [1, "cdk-virtual-scroll-spacer"]],
  template: function CdkVirtualScrollViewport_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 1, 0);
      \u0275\u0275projection(2);
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "div", 2);
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275styleProp("width", ctx._totalContentWidth)("height", ctx._totalContentHeight);
    }
  },
  styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}"],
  encapsulation: 2,
  changeDetection: 0
});
var CdkVirtualScrollViewport = _CdkVirtualScrollViewport;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollViewport, [{
    type: Component,
    args: [{
      selector: "cdk-virtual-scroll-viewport",
      host: {
        "class": "cdk-virtual-scroll-viewport",
        "[class.cdk-virtual-scroll-orientation-horizontal]": 'orientation === "horizontal"',
        "[class.cdk-virtual-scroll-orientation-vertical]": 'orientation !== "horizontal"'
      },
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      providers: [{
        provide: CdkScrollable,
        useFactory: (virtualScrollable, viewport) => virtualScrollable || viewport,
        deps: [[new Optional(), new Inject(VIRTUAL_SCROLLABLE)], CdkVirtualScrollViewport]
      }],
      template: '<!--\n  Wrap the rendered content in an element that will be used to offset it based on the scroll\n  position.\n-->\n<div #contentWrapper class="cdk-virtual-scroll-content-wrapper">\n  <ng-content></ng-content>\n</div>\n<!--\n  Spacer used to force the scrolling container to the correct size for the *total* number of items\n  so that the scrollbar captures the size of the entire data set.\n-->\n<div class="cdk-virtual-scroll-spacer"\n     [style.width]="_totalContentWidth" [style.height]="_totalContentHeight"></div>\n',
      styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [VIRTUAL_SCROLL_STRATEGY]
    }]
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: ScrollDispatcher
  }, {
    type: ViewportRuler
  }, {
    type: CdkVirtualScrollable,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [VIRTUAL_SCROLLABLE]
    }]
  }], {
    orientation: [{
      type: Input
    }],
    appendOnly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    scrolledIndexChange: [{
      type: Output
    }],
    _contentWrapper: [{
      type: ViewChild,
      args: ["contentWrapper", {
        static: true
      }]
    }]
  });
})();
function getOffset(orientation, direction, node) {
  const el = node;
  if (!el.getBoundingClientRect) {
    return 0;
  }
  const rect = el.getBoundingClientRect();
  if (orientation === "horizontal") {
    return direction === "start" ? rect.left : rect.right;
  }
  return direction === "start" ? rect.top : rect.bottom;
}
var _CdkVirtualForOf = class _CdkVirtualForOf {
  /** The DataSource to display. */
  get cdkVirtualForOf() {
    return this._cdkVirtualForOf;
  }
  set cdkVirtualForOf(value) {
    this._cdkVirtualForOf = value;
    if (isDataSource(value)) {
      this._dataSourceChanges.next(value);
    } else {
      this._dataSourceChanges.next(new ArrayDataSource(isObservable(value) ? value : Array.from(value || [])));
    }
  }
  /**
   * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
   * the item and produces a value to be used as the item's identity when tracking changes.
   */
  get cdkVirtualForTrackBy() {
    return this._cdkVirtualForTrackBy;
  }
  set cdkVirtualForTrackBy(fn) {
    this._needsUpdate = true;
    this._cdkVirtualForTrackBy = fn ? (index, item) => fn(index + (this._renderedRange ? this._renderedRange.start : 0), item) : void 0;
  }
  /** The template used to stamp out new elements. */
  set cdkVirtualForTemplate(value) {
    if (value) {
      this._needsUpdate = true;
      this._template = value;
    }
  }
  /**
   * The size of the cache used to store templates that are not being used for re-use later.
   * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
   */
  get cdkVirtualForTemplateCacheSize() {
    return this._viewRepeater.viewCacheSize;
  }
  set cdkVirtualForTemplateCacheSize(size) {
    this._viewRepeater.viewCacheSize = coerceNumberProperty(size);
  }
  constructor(_viewContainerRef, _template, _differs, _viewRepeater, _viewport, ngZone) {
    this._viewContainerRef = _viewContainerRef;
    this._template = _template;
    this._differs = _differs;
    this._viewRepeater = _viewRepeater;
    this._viewport = _viewport;
    this.viewChange = new Subject();
    this._dataSourceChanges = new Subject();
    this.dataStream = this._dataSourceChanges.pipe(
      // Start off with null `DataSource`.
      startWith(null),
      // Bundle up the previous and current data sources so we can work with both.
      pairwise(),
      // Use `_changeDataSource` to disconnect from the previous data source and connect to the
      // new one, passing back a stream of data changes which we run through `switchMap` to give
      // us a data stream that emits the latest data from whatever the current `DataSource` is.
      switchMap(([prev, cur]) => this._changeDataSource(prev, cur)),
      // Replay the last emitted data when someone subscribes.
      shareReplay(1)
    );
    this._differ = null;
    this._needsUpdate = false;
    this._destroyed = new Subject();
    this.dataStream.subscribe((data) => {
      this._data = data;
      this._onRenderedDataChange();
    });
    this._viewport.renderedRangeStream.pipe(takeUntil(this._destroyed)).subscribe((range2) => {
      this._renderedRange = range2;
      if (this.viewChange.observers.length) {
        ngZone.run(() => this.viewChange.next(this._renderedRange));
      }
      this._onRenderedDataChange();
    });
    this._viewport.attach(this);
  }
  /**
   * Measures the combined size (width for horizontal orientation, height for vertical) of all items
   * in the specified range. Throws an error if the range includes items that are not currently
   * rendered.
   */
  measureRangeSize(range2, orientation) {
    if (range2.start >= range2.end) {
      return 0;
    }
    if ((range2.start < this._renderedRange.start || range2.end > this._renderedRange.end) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`Error: attempted to measure an item that isn't rendered.`);
    }
    const renderedStartIndex = range2.start - this._renderedRange.start;
    const rangeLen = range2.end - range2.start;
    let firstNode;
    let lastNode;
    for (let i2 = 0; i2 < rangeLen; i2++) {
      const view = this._viewContainerRef.get(i2 + renderedStartIndex);
      if (view && view.rootNodes.length) {
        firstNode = lastNode = view.rootNodes[0];
        break;
      }
    }
    for (let i2 = rangeLen - 1; i2 > -1; i2--) {
      const view = this._viewContainerRef.get(i2 + renderedStartIndex);
      if (view && view.rootNodes.length) {
        lastNode = view.rootNodes[view.rootNodes.length - 1];
        break;
      }
    }
    return firstNode && lastNode ? getOffset(orientation, "end", lastNode) - getOffset(orientation, "start", firstNode) : 0;
  }
  ngDoCheck() {
    if (this._differ && this._needsUpdate) {
      const changes = this._differ.diff(this._renderedItems);
      if (!changes) {
        this._updateContext();
      } else {
        this._applyChanges(changes);
      }
      this._needsUpdate = false;
    }
  }
  ngOnDestroy() {
    this._viewport.detach();
    this._dataSourceChanges.next(void 0);
    this._dataSourceChanges.complete();
    this.viewChange.complete();
    this._destroyed.next();
    this._destroyed.complete();
    this._viewRepeater.detach();
  }
  /** React to scroll state changes in the viewport. */
  _onRenderedDataChange() {
    if (!this._renderedRange) {
      return;
    }
    this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);
    if (!this._differ) {
      this._differ = this._differs.find(this._renderedItems).create((index, item) => {
        return this.cdkVirtualForTrackBy ? this.cdkVirtualForTrackBy(index, item) : item;
      });
    }
    this._needsUpdate = true;
  }
  /** Swap out one `DataSource` for another. */
  _changeDataSource(oldDs, newDs) {
    if (oldDs) {
      oldDs.disconnect(this);
    }
    this._needsUpdate = true;
    return newDs ? newDs.connect(this) : of();
  }
  /** Update the `CdkVirtualForOfContext` for all views. */
  _updateContext() {
    const count = this._data.length;
    let i2 = this._viewContainerRef.length;
    while (i2--) {
      const view = this._viewContainerRef.get(i2);
      view.context.index = this._renderedRange.start + i2;
      view.context.count = count;
      this._updateComputedContextProperties(view.context);
      view.detectChanges();
    }
  }
  /** Apply changes to the DOM. */
  _applyChanges(changes) {
    this._viewRepeater.applyChanges(changes, this._viewContainerRef, (record, _adjustedPreviousIndex, currentIndex) => this._getEmbeddedViewArgs(record, currentIndex), (record) => record.item);
    changes.forEachIdentityChange((record) => {
      const view = this._viewContainerRef.get(record.currentIndex);
      view.context.$implicit = record.item;
    });
    const count = this._data.length;
    let i2 = this._viewContainerRef.length;
    while (i2--) {
      const view = this._viewContainerRef.get(i2);
      view.context.index = this._renderedRange.start + i2;
      view.context.count = count;
      this._updateComputedContextProperties(view.context);
    }
  }
  /** Update the computed properties on the `CdkVirtualForOfContext`. */
  _updateComputedContextProperties(context) {
    context.first = context.index === 0;
    context.last = context.index === context.count - 1;
    context.even = context.index % 2 === 0;
    context.odd = !context.even;
  }
  _getEmbeddedViewArgs(record, index) {
    return {
      templateRef: this._template,
      context: {
        $implicit: record.item,
        // It's guaranteed that the iterable is not "undefined" or "null" because we only
        // generate views for elements if the "cdkVirtualForOf" iterable has elements.
        cdkVirtualForOf: this._cdkVirtualForOf,
        index: -1,
        count: -1,
        first: false,
        last: false,
        odd: false,
        even: false
      },
      index
    };
  }
};
_CdkVirtualForOf.\u0275fac = function CdkVirtualForOf_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkVirtualForOf)(\u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(TemplateRef), \u0275\u0275directiveInject(IterableDiffers), \u0275\u0275directiveInject(_VIEW_REPEATER_STRATEGY), \u0275\u0275directiveInject(CdkVirtualScrollViewport, 4), \u0275\u0275directiveInject(NgZone));
};
_CdkVirtualForOf.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkVirtualForOf,
  selectors: [["", "cdkVirtualFor", "", "cdkVirtualForOf", ""]],
  inputs: {
    cdkVirtualForOf: "cdkVirtualForOf",
    cdkVirtualForTrackBy: "cdkVirtualForTrackBy",
    cdkVirtualForTemplate: "cdkVirtualForTemplate",
    cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize"
  },
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([{
    provide: _VIEW_REPEATER_STRATEGY,
    useClass: _RecycleViewRepeaterStrategy
  }])]
});
var CdkVirtualForOf = _CdkVirtualForOf;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualForOf, [{
    type: Directive,
    args: [{
      selector: "[cdkVirtualFor][cdkVirtualForOf]",
      providers: [{
        provide: _VIEW_REPEATER_STRATEGY,
        useClass: _RecycleViewRepeaterStrategy
      }],
      standalone: true
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: TemplateRef
  }, {
    type: IterableDiffers
  }, {
    type: _RecycleViewRepeaterStrategy,
    decorators: [{
      type: Inject,
      args: [_VIEW_REPEATER_STRATEGY]
    }]
  }, {
    type: CdkVirtualScrollViewport,
    decorators: [{
      type: SkipSelf
    }]
  }, {
    type: NgZone
  }], {
    cdkVirtualForOf: [{
      type: Input
    }],
    cdkVirtualForTrackBy: [{
      type: Input
    }],
    cdkVirtualForTemplate: [{
      type: Input
    }],
    cdkVirtualForTemplateCacheSize: [{
      type: Input
    }]
  });
})();
var _CdkVirtualScrollableElement = class _CdkVirtualScrollableElement extends CdkVirtualScrollable {
  constructor(elementRef, scrollDispatcher, ngZone, dir) {
    super(elementRef, scrollDispatcher, ngZone, dir);
  }
  measureBoundingClientRectWithScrollOffset(from2) {
    return this.getElementRef().nativeElement.getBoundingClientRect()[from2] - this.measureScrollOffset(from2);
  }
};
_CdkVirtualScrollableElement.\u0275fac = function CdkVirtualScrollableElement_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkVirtualScrollableElement)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ScrollDispatcher), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(Directionality, 8));
};
_CdkVirtualScrollableElement.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkVirtualScrollableElement,
  selectors: [["", "cdkVirtualScrollingElement", ""]],
  hostAttrs: [1, "cdk-virtual-scrollable"],
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([{
    provide: VIRTUAL_SCROLLABLE,
    useExisting: _CdkVirtualScrollableElement
  }]), \u0275\u0275InheritDefinitionFeature]
});
var CdkVirtualScrollableElement = _CdkVirtualScrollableElement;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollableElement, [{
    type: Directive,
    args: [{
      selector: "[cdkVirtualScrollingElement]",
      providers: [{
        provide: VIRTUAL_SCROLLABLE,
        useExisting: CdkVirtualScrollableElement
      }],
      standalone: true,
      host: {
        "class": "cdk-virtual-scrollable"
      }
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ScrollDispatcher
  }, {
    type: NgZone
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var _CdkVirtualScrollableWindow = class _CdkVirtualScrollableWindow extends CdkVirtualScrollable {
  constructor(scrollDispatcher, ngZone, dir) {
    super(new ElementRef(document.documentElement), scrollDispatcher, ngZone, dir);
    this._elementScrolled = new Observable((observer) => this.ngZone.runOutsideAngular(() => fromEvent(document, "scroll").pipe(takeUntil(this._destroyed)).subscribe(observer)));
  }
  measureBoundingClientRectWithScrollOffset(from2) {
    return this.getElementRef().nativeElement.getBoundingClientRect()[from2];
  }
};
_CdkVirtualScrollableWindow.\u0275fac = function CdkVirtualScrollableWindow_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkVirtualScrollableWindow)(\u0275\u0275directiveInject(ScrollDispatcher), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(Directionality, 8));
};
_CdkVirtualScrollableWindow.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkVirtualScrollableWindow,
  selectors: [["cdk-virtual-scroll-viewport", "scrollWindow", ""]],
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([{
    provide: VIRTUAL_SCROLLABLE,
    useExisting: _CdkVirtualScrollableWindow
  }]), \u0275\u0275InheritDefinitionFeature]
});
var CdkVirtualScrollableWindow = _CdkVirtualScrollableWindow;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollableWindow, [{
    type: Directive,
    args: [{
      selector: "cdk-virtual-scroll-viewport[scrollWindow]",
      providers: [{
        provide: VIRTUAL_SCROLLABLE,
        useExisting: CdkVirtualScrollableWindow
      }],
      standalone: true
    }]
  }], () => [{
    type: ScrollDispatcher
  }, {
    type: NgZone
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var _CdkScrollableModule = class _CdkScrollableModule {
};
_CdkScrollableModule.\u0275fac = function CdkScrollableModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkScrollableModule)();
};
_CdkScrollableModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _CdkScrollableModule
});
_CdkScrollableModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var CdkScrollableModule = _CdkScrollableModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkScrollableModule, [{
    type: NgModule,
    args: [{
      exports: [CdkScrollable],
      imports: [CdkScrollable]
    }]
  }], null, null);
})();
var _ScrollingModule = class _ScrollingModule {
};
_ScrollingModule.\u0275fac = function ScrollingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ScrollingModule)();
};
_ScrollingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _ScrollingModule
});
_ScrollingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [BidiModule, CdkScrollableModule, BidiModule, CdkScrollableModule]
});
var ScrollingModule = _ScrollingModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollingModule, [{
    type: NgModule,
    args: [{
      imports: [BidiModule, CdkScrollableModule, CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollableWindow, CdkVirtualScrollableElement],
      exports: [BidiModule, CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport, CdkVirtualScrollableWindow, CdkVirtualScrollableElement]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/table.mjs
var _c04 = [[["caption"]], [["colgroup"], ["col"]], "*"];
var _c14 = ["caption", "colgroup, col", "*"];
function CdkTable_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 2);
  }
}
function CdkTable_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "thead", 0);
    \u0275\u0275elementContainer(1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "tbody", 0);
    \u0275\u0275elementContainer(3, 2)(4, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "tfoot", 0);
    \u0275\u0275elementContainer(6, 4);
    \u0275\u0275elementEnd();
  }
}
function CdkTable_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 1)(1, 2)(2, 3)(3, 4);
  }
}
function CdkTextColumn_th_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("text-align", ctx_r0.justify);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.headerText, " ");
  }
}
function CdkTextColumn_td_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("text-align", ctx_r0.justify);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.dataAccessor(data_r2, ctx_r0.name), " ");
  }
}
var CDK_TABLE = new InjectionToken("CDK_TABLE");
var TEXT_COLUMN_OPTIONS = new InjectionToken("text-column-options");
var _CdkCellDef = class _CdkCellDef {
  constructor(template) {
    this.template = template;
  }
};
_CdkCellDef.\u0275fac = function CdkCellDef_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkCellDef)(\u0275\u0275directiveInject(TemplateRef));
};
_CdkCellDef.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkCellDef,
  selectors: [["", "cdkCellDef", ""]],
  standalone: true
});
var CdkCellDef = _CdkCellDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkCellDef, [{
    type: Directive,
    args: [{
      selector: "[cdkCellDef]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var _CdkHeaderCellDef = class _CdkHeaderCellDef {
  constructor(template) {
    this.template = template;
  }
};
_CdkHeaderCellDef.\u0275fac = function CdkHeaderCellDef_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkHeaderCellDef)(\u0275\u0275directiveInject(TemplateRef));
};
_CdkHeaderCellDef.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkHeaderCellDef,
  selectors: [["", "cdkHeaderCellDef", ""]],
  standalone: true
});
var CdkHeaderCellDef = _CdkHeaderCellDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkHeaderCellDef, [{
    type: Directive,
    args: [{
      selector: "[cdkHeaderCellDef]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var _CdkFooterCellDef = class _CdkFooterCellDef {
  constructor(template) {
    this.template = template;
  }
};
_CdkFooterCellDef.\u0275fac = function CdkFooterCellDef_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkFooterCellDef)(\u0275\u0275directiveInject(TemplateRef));
};
_CdkFooterCellDef.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkFooterCellDef,
  selectors: [["", "cdkFooterCellDef", ""]],
  standalone: true
});
var CdkFooterCellDef = _CdkFooterCellDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkFooterCellDef, [{
    type: Directive,
    args: [{
      selector: "[cdkFooterCellDef]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var _CdkColumnDef = class _CdkColumnDef {
  /** Unique name for this column. */
  get name() {
    return this._name;
  }
  set name(name) {
    this._setNameInput(name);
  }
  /** Whether the cell is sticky. */
  get sticky() {
    return this._sticky;
  }
  set sticky(value) {
    if (value !== this._sticky) {
      this._sticky = value;
      this._hasStickyChanged = true;
    }
  }
  /**
   * Whether this column should be sticky positioned on the end of the row. Should make sure
   * that it mimics the `CanStick` mixin such that `_hasStickyChanged` is set to true if the value
   * has been changed.
   */
  get stickyEnd() {
    return this._stickyEnd;
  }
  set stickyEnd(value) {
    if (value !== this._stickyEnd) {
      this._stickyEnd = value;
      this._hasStickyChanged = true;
    }
  }
  constructor(_table) {
    this._table = _table;
    this._hasStickyChanged = false;
    this._sticky = false;
    this._stickyEnd = false;
  }
  /** Whether the sticky state has changed. */
  hasStickyChanged() {
    const hasStickyChanged = this._hasStickyChanged;
    this.resetStickyChanged();
    return hasStickyChanged;
  }
  /** Resets the sticky changed state. */
  resetStickyChanged() {
    this._hasStickyChanged = false;
  }
  /**
   * Overridable method that sets the css classes that will be added to every cell in this
   * column.
   * In the future, columnCssClassName will change from type string[] to string and this
   * will set a single string value.
   * @docs-private
   */
  _updateColumnCssClassName() {
    this._columnCssClassName = [`cdk-column-${this.cssClassFriendlyName}`];
  }
  /**
   * This has been extracted to a util because of TS 4 and VE.
   * View Engine doesn't support property rename inheritance.
   * TS 4.0 doesn't allow properties to override accessors or vice-versa.
   * @docs-private
   */
  _setNameInput(value) {
    if (value) {
      this._name = value;
      this.cssClassFriendlyName = value.replace(/[^a-z0-9_-]/gi, "-");
      this._updateColumnCssClassName();
    }
  }
};
_CdkColumnDef.\u0275fac = function CdkColumnDef_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkColumnDef)(\u0275\u0275directiveInject(CDK_TABLE, 8));
};
_CdkColumnDef.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkColumnDef,
  selectors: [["", "cdkColumnDef", ""]],
  contentQueries: function CdkColumnDef_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, CdkCellDef, 5);
      \u0275\u0275contentQuery(dirIndex, CdkHeaderCellDef, 5);
      \u0275\u0275contentQuery(dirIndex, CdkFooterCellDef, 5);
    }
    if (rf & 2) {
      let _t2;
      \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.cell = _t2.first);
      \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.headerCell = _t2.first);
      \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.footerCell = _t2.first);
    }
  },
  inputs: {
    name: [0, "cdkColumnDef", "name"],
    sticky: [2, "sticky", "sticky", booleanAttribute],
    stickyEnd: [2, "stickyEnd", "stickyEnd", booleanAttribute]
  },
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([{
    provide: "MAT_SORT_HEADER_COLUMN_DEF",
    useExisting: _CdkColumnDef
  }]), \u0275\u0275InputTransformsFeature]
});
var CdkColumnDef = _CdkColumnDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkColumnDef, [{
    type: Directive,
    args: [{
      selector: "[cdkColumnDef]",
      providers: [{
        provide: "MAT_SORT_HEADER_COLUMN_DEF",
        useExisting: CdkColumnDef
      }],
      standalone: true
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [CDK_TABLE]
    }, {
      type: Optional
    }]
  }], {
    name: [{
      type: Input,
      args: ["cdkColumnDef"]
    }],
    sticky: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    stickyEnd: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    cell: [{
      type: ContentChild,
      args: [CdkCellDef]
    }],
    headerCell: [{
      type: ContentChild,
      args: [CdkHeaderCellDef]
    }],
    footerCell: [{
      type: ContentChild,
      args: [CdkFooterCellDef]
    }]
  });
})();
var BaseCdkCell = class {
  constructor(columnDef, elementRef) {
    elementRef.nativeElement.classList.add(...columnDef._columnCssClassName);
  }
};
var _CdkHeaderCell = class _CdkHeaderCell extends BaseCdkCell {
  constructor(columnDef, elementRef) {
    super(columnDef, elementRef);
  }
};
_CdkHeaderCell.\u0275fac = function CdkHeaderCell_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkHeaderCell)(\u0275\u0275directiveInject(CdkColumnDef), \u0275\u0275directiveInject(ElementRef));
};
_CdkHeaderCell.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkHeaderCell,
  selectors: [["cdk-header-cell"], ["th", "cdk-header-cell", ""]],
  hostAttrs: ["role", "columnheader", 1, "cdk-header-cell"],
  standalone: true,
  features: [\u0275\u0275InheritDefinitionFeature]
});
var CdkHeaderCell = _CdkHeaderCell;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkHeaderCell, [{
    type: Directive,
    args: [{
      selector: "cdk-header-cell, th[cdk-header-cell]",
      host: {
        "class": "cdk-header-cell",
        "role": "columnheader"
      },
      standalone: true
    }]
  }], () => [{
    type: CdkColumnDef
  }, {
    type: ElementRef
  }], null);
})();
var _CdkFooterCell = class _CdkFooterCell extends BaseCdkCell {
  constructor(columnDef, elementRef) {
    super(columnDef, elementRef);
    const role = columnDef._table?._getCellRole();
    if (role) {
      elementRef.nativeElement.setAttribute("role", role);
    }
  }
};
_CdkFooterCell.\u0275fac = function CdkFooterCell_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkFooterCell)(\u0275\u0275directiveInject(CdkColumnDef), \u0275\u0275directiveInject(ElementRef));
};
_CdkFooterCell.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkFooterCell,
  selectors: [["cdk-footer-cell"], ["td", "cdk-footer-cell", ""]],
  hostAttrs: [1, "cdk-footer-cell"],
  standalone: true,
  features: [\u0275\u0275InheritDefinitionFeature]
});
var CdkFooterCell = _CdkFooterCell;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkFooterCell, [{
    type: Directive,
    args: [{
      selector: "cdk-footer-cell, td[cdk-footer-cell]",
      host: {
        "class": "cdk-footer-cell"
      },
      standalone: true
    }]
  }], () => [{
    type: CdkColumnDef
  }, {
    type: ElementRef
  }], null);
})();
var _CdkCell = class _CdkCell extends BaseCdkCell {
  constructor(columnDef, elementRef) {
    super(columnDef, elementRef);
    const role = columnDef._table?._getCellRole();
    if (role) {
      elementRef.nativeElement.setAttribute("role", role);
    }
  }
};
_CdkCell.\u0275fac = function CdkCell_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkCell)(\u0275\u0275directiveInject(CdkColumnDef), \u0275\u0275directiveInject(ElementRef));
};
_CdkCell.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkCell,
  selectors: [["cdk-cell"], ["td", "cdk-cell", ""]],
  hostAttrs: [1, "cdk-cell"],
  standalone: true,
  features: [\u0275\u0275InheritDefinitionFeature]
});
var CdkCell = _CdkCell;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkCell, [{
    type: Directive,
    args: [{
      selector: "cdk-cell, td[cdk-cell]",
      host: {
        "class": "cdk-cell"
      },
      standalone: true
    }]
  }], () => [{
    type: CdkColumnDef
  }, {
    type: ElementRef
  }], null);
})();
var _Schedule = class {
  constructor() {
    this.tasks = [];
    this.endTasks = [];
  }
};
var _COALESCED_STYLE_SCHEDULER = new InjectionToken("_COALESCED_STYLE_SCHEDULER");
var __CoalescedStyleScheduler = class __CoalescedStyleScheduler {
  constructor(_unusedNgZone) {
    this._currentSchedule = null;
    this._ngZone = inject(NgZone);
  }
  /**
   * Schedules the specified task to run at the end of the current VM turn.
   */
  schedule(task) {
    this._createScheduleIfNeeded();
    this._currentSchedule.tasks.push(task);
  }
  /**
   * Schedules the specified task to run after other scheduled tasks at the end of the current
   * VM turn.
   */
  scheduleEnd(task) {
    this._createScheduleIfNeeded();
    this._currentSchedule.endTasks.push(task);
  }
  _createScheduleIfNeeded() {
    if (this._currentSchedule) {
      return;
    }
    this._currentSchedule = new _Schedule();
    this._ngZone.runOutsideAngular(() => (
      // TODO(mmalerba): Scheduling this using something that runs less frequently
      //  (e.g. requestAnimationFrame, setTimeout, etc.) causes noticeable jank with the column
      //  resizer. We should audit the usages of schedule / scheduleEnd in that component and see
      //  if we can refactor it so that we don't need to flush the tasks quite so frequently.
      queueMicrotask(() => {
        while (this._currentSchedule.tasks.length || this._currentSchedule.endTasks.length) {
          const schedule = this._currentSchedule;
          this._currentSchedule = new _Schedule();
          for (const task of schedule.tasks) {
            task();
          }
          for (const task of schedule.endTasks) {
            task();
          }
        }
        this._currentSchedule = null;
      })
    ));
  }
};
__CoalescedStyleScheduler.\u0275fac = function _CoalescedStyleScheduler_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || __CoalescedStyleScheduler)(\u0275\u0275inject(NgZone));
};
__CoalescedStyleScheduler.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: __CoalescedStyleScheduler,
  factory: __CoalescedStyleScheduler.\u0275fac
});
var _CoalescedStyleScheduler = __CoalescedStyleScheduler;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_CoalescedStyleScheduler, [{
    type: Injectable
  }], () => [{
    type: NgZone
  }], null);
})();
var CDK_ROW_TEMPLATE = `<ng-container cdkCellOutlet></ng-container>`;
var _BaseRowDef = class _BaseRowDef {
  constructor(template, _differs) {
    this.template = template;
    this._differs = _differs;
  }
  ngOnChanges(changes) {
    if (!this._columnsDiffer) {
      const columns = changes["columns"] && changes["columns"].currentValue || [];
      this._columnsDiffer = this._differs.find(columns).create();
      this._columnsDiffer.diff(columns);
    }
  }
  /**
   * Returns the difference between the current columns and the columns from the last diff, or null
   * if there is no difference.
   */
  getColumnsDiff() {
    return this._columnsDiffer.diff(this.columns);
  }
  /** Gets this row def's relevant cell template from the provided column def. */
  extractCellTemplate(column) {
    if (this instanceof CdkHeaderRowDef) {
      return column.headerCell.template;
    }
    if (this instanceof CdkFooterRowDef) {
      return column.footerCell.template;
    } else {
      return column.cell.template;
    }
  }
};
_BaseRowDef.\u0275fac = function BaseRowDef_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BaseRowDef)(\u0275\u0275directiveInject(TemplateRef), \u0275\u0275directiveInject(IterableDiffers));
};
_BaseRowDef.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _BaseRowDef,
  features: [\u0275\u0275NgOnChangesFeature]
});
var BaseRowDef = _BaseRowDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseRowDef, [{
    type: Directive
  }], () => [{
    type: TemplateRef
  }, {
    type: IterableDiffers
  }], null);
})();
var _CdkHeaderRowDef = class _CdkHeaderRowDef extends BaseRowDef {
  /** Whether the row is sticky. */
  get sticky() {
    return this._sticky;
  }
  set sticky(value) {
    if (value !== this._sticky) {
      this._sticky = value;
      this._hasStickyChanged = true;
    }
  }
  constructor(template, _differs, _table) {
    super(template, _differs);
    this._table = _table;
    this._hasStickyChanged = false;
    this._sticky = false;
  }
  // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
  // Explicitly define it so that the method is called as part of the Angular lifecycle.
  ngOnChanges(changes) {
    super.ngOnChanges(changes);
  }
  /** Whether the sticky state has changed. */
  hasStickyChanged() {
    const hasStickyChanged = this._hasStickyChanged;
    this.resetStickyChanged();
    return hasStickyChanged;
  }
  /** Resets the sticky changed state. */
  resetStickyChanged() {
    this._hasStickyChanged = false;
  }
};
_CdkHeaderRowDef.\u0275fac = function CdkHeaderRowDef_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkHeaderRowDef)(\u0275\u0275directiveInject(TemplateRef), \u0275\u0275directiveInject(IterableDiffers), \u0275\u0275directiveInject(CDK_TABLE, 8));
};
_CdkHeaderRowDef.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkHeaderRowDef,
  selectors: [["", "cdkHeaderRowDef", ""]],
  inputs: {
    columns: [0, "cdkHeaderRowDef", "columns"],
    sticky: [2, "cdkHeaderRowDefSticky", "sticky", booleanAttribute]
  },
  standalone: true,
  features: [\u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
});
var CdkHeaderRowDef = _CdkHeaderRowDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkHeaderRowDef, [{
    type: Directive,
    args: [{
      selector: "[cdkHeaderRowDef]",
      inputs: [{
        name: "columns",
        alias: "cdkHeaderRowDef"
      }],
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }, {
    type: IterableDiffers
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [CDK_TABLE]
    }, {
      type: Optional
    }]
  }], {
    sticky: [{
      type: Input,
      args: [{
        alias: "cdkHeaderRowDefSticky",
        transform: booleanAttribute
      }]
    }]
  });
})();
var _CdkFooterRowDef = class _CdkFooterRowDef extends BaseRowDef {
  /** Whether the row is sticky. */
  get sticky() {
    return this._sticky;
  }
  set sticky(value) {
    if (value !== this._sticky) {
      this._sticky = value;
      this._hasStickyChanged = true;
    }
  }
  constructor(template, _differs, _table) {
    super(template, _differs);
    this._table = _table;
    this._hasStickyChanged = false;
    this._sticky = false;
  }
  // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
  // Explicitly define it so that the method is called as part of the Angular lifecycle.
  ngOnChanges(changes) {
    super.ngOnChanges(changes);
  }
  /** Whether the sticky state has changed. */
  hasStickyChanged() {
    const hasStickyChanged = this._hasStickyChanged;
    this.resetStickyChanged();
    return hasStickyChanged;
  }
  /** Resets the sticky changed state. */
  resetStickyChanged() {
    this._hasStickyChanged = false;
  }
};
_CdkFooterRowDef.\u0275fac = function CdkFooterRowDef_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkFooterRowDef)(\u0275\u0275directiveInject(TemplateRef), \u0275\u0275directiveInject(IterableDiffers), \u0275\u0275directiveInject(CDK_TABLE, 8));
};
_CdkFooterRowDef.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkFooterRowDef,
  selectors: [["", "cdkFooterRowDef", ""]],
  inputs: {
    columns: [0, "cdkFooterRowDef", "columns"],
    sticky: [2, "cdkFooterRowDefSticky", "sticky", booleanAttribute]
  },
  standalone: true,
  features: [\u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
});
var CdkFooterRowDef = _CdkFooterRowDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkFooterRowDef, [{
    type: Directive,
    args: [{
      selector: "[cdkFooterRowDef]",
      inputs: [{
        name: "columns",
        alias: "cdkFooterRowDef"
      }],
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }, {
    type: IterableDiffers
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [CDK_TABLE]
    }, {
      type: Optional
    }]
  }], {
    sticky: [{
      type: Input,
      args: [{
        alias: "cdkFooterRowDefSticky",
        transform: booleanAttribute
      }]
    }]
  });
})();
var _CdkRowDef = class _CdkRowDef extends BaseRowDef {
  // TODO(andrewseguin): Add an input for providing a switch function to determine
  //   if this template should be used.
  constructor(template, _differs, _table) {
    super(template, _differs);
    this._table = _table;
  }
};
_CdkRowDef.\u0275fac = function CdkRowDef_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkRowDef)(\u0275\u0275directiveInject(TemplateRef), \u0275\u0275directiveInject(IterableDiffers), \u0275\u0275directiveInject(CDK_TABLE, 8));
};
_CdkRowDef.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkRowDef,
  selectors: [["", "cdkRowDef", ""]],
  inputs: {
    columns: [0, "cdkRowDefColumns", "columns"],
    when: [0, "cdkRowDefWhen", "when"]
  },
  standalone: true,
  features: [\u0275\u0275InheritDefinitionFeature]
});
var CdkRowDef = _CdkRowDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkRowDef, [{
    type: Directive,
    args: [{
      selector: "[cdkRowDef]",
      inputs: [{
        name: "columns",
        alias: "cdkRowDefColumns"
      }, {
        name: "when",
        alias: "cdkRowDefWhen"
      }],
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }, {
    type: IterableDiffers
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [CDK_TABLE]
    }, {
      type: Optional
    }]
  }], null);
})();
var _CdkCellOutlet = class _CdkCellOutlet {
  constructor(_viewContainer) {
    this._viewContainer = _viewContainer;
    _CdkCellOutlet.mostRecentCellOutlet = this;
  }
  ngOnDestroy() {
    if (_CdkCellOutlet.mostRecentCellOutlet === this) {
      _CdkCellOutlet.mostRecentCellOutlet = null;
    }
  }
};
_CdkCellOutlet.mostRecentCellOutlet = null;
_CdkCellOutlet.\u0275fac = function CdkCellOutlet_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkCellOutlet)(\u0275\u0275directiveInject(ViewContainerRef));
};
_CdkCellOutlet.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkCellOutlet,
  selectors: [["", "cdkCellOutlet", ""]],
  standalone: true
});
var CdkCellOutlet = _CdkCellOutlet;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkCellOutlet, [{
    type: Directive,
    args: [{
      selector: "[cdkCellOutlet]",
      standalone: true
    }]
  }], () => [{
    type: ViewContainerRef
  }], null);
})();
var _CdkHeaderRow = class _CdkHeaderRow {
};
_CdkHeaderRow.\u0275fac = function CdkHeaderRow_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkHeaderRow)();
};
_CdkHeaderRow.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CdkHeaderRow,
  selectors: [["cdk-header-row"], ["tr", "cdk-header-row", ""]],
  hostAttrs: ["role", "row", 1, "cdk-header-row"],
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  decls: 1,
  vars: 0,
  consts: [["cdkCellOutlet", ""]],
  template: function CdkHeaderRow_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementContainer(0, 0);
    }
  },
  dependencies: [CdkCellOutlet],
  encapsulation: 2
});
var CdkHeaderRow = _CdkHeaderRow;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkHeaderRow, [{
    type: Component,
    args: [{
      selector: "cdk-header-row, tr[cdk-header-row]",
      template: CDK_ROW_TEMPLATE,
      host: {
        "class": "cdk-header-row",
        "role": "row"
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true,
      imports: [CdkCellOutlet]
    }]
  }], null, null);
})();
var _CdkFooterRow = class _CdkFooterRow {
};
_CdkFooterRow.\u0275fac = function CdkFooterRow_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkFooterRow)();
};
_CdkFooterRow.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CdkFooterRow,
  selectors: [["cdk-footer-row"], ["tr", "cdk-footer-row", ""]],
  hostAttrs: ["role", "row", 1, "cdk-footer-row"],
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  decls: 1,
  vars: 0,
  consts: [["cdkCellOutlet", ""]],
  template: function CdkFooterRow_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementContainer(0, 0);
    }
  },
  dependencies: [CdkCellOutlet],
  encapsulation: 2
});
var CdkFooterRow = _CdkFooterRow;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkFooterRow, [{
    type: Component,
    args: [{
      selector: "cdk-footer-row, tr[cdk-footer-row]",
      template: CDK_ROW_TEMPLATE,
      host: {
        "class": "cdk-footer-row",
        "role": "row"
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true,
      imports: [CdkCellOutlet]
    }]
  }], null, null);
})();
var _CdkRow = class _CdkRow {
};
_CdkRow.\u0275fac = function CdkRow_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkRow)();
};
_CdkRow.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CdkRow,
  selectors: [["cdk-row"], ["tr", "cdk-row", ""]],
  hostAttrs: ["role", "row", 1, "cdk-row"],
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  decls: 1,
  vars: 0,
  consts: [["cdkCellOutlet", ""]],
  template: function CdkRow_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementContainer(0, 0);
    }
  },
  dependencies: [CdkCellOutlet],
  encapsulation: 2
});
var CdkRow = _CdkRow;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkRow, [{
    type: Component,
    args: [{
      selector: "cdk-row, tr[cdk-row]",
      template: CDK_ROW_TEMPLATE,
      host: {
        "class": "cdk-row",
        "role": "row"
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true,
      imports: [CdkCellOutlet]
    }]
  }], null, null);
})();
var _CdkNoDataRow = class _CdkNoDataRow {
  constructor(templateRef) {
    this.templateRef = templateRef;
    this._contentClassName = "cdk-no-data-row";
  }
};
_CdkNoDataRow.\u0275fac = function CdkNoDataRow_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkNoDataRow)(\u0275\u0275directiveInject(TemplateRef));
};
_CdkNoDataRow.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkNoDataRow,
  selectors: [["ng-template", "cdkNoDataRow", ""]],
  standalone: true
});
var CdkNoDataRow = _CdkNoDataRow;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkNoDataRow, [{
    type: Directive,
    args: [{
      selector: "ng-template[cdkNoDataRow]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var STICKY_DIRECTIONS = ["top", "bottom", "left", "right"];
var StickyStyler = class {
  /**
   * @param _isNativeHtmlTable Whether the sticky logic should be based on a table
   *     that uses the native `<table>` element.
   * @param _stickCellCss The CSS class that will be applied to every row/cell that has
   *     sticky positioning applied.
   * @param direction The directionality context of the table (ltr/rtl); affects column positioning
   *     by reversing left/right positions.
   * @param _isBrowser Whether the table is currently being rendered on the server or the client.
   * @param _needsPositionStickyOnElement Whether we need to specify position: sticky on cells
   *     using inline styles. If false, it is assumed that position: sticky is included in
   *     the component stylesheet for _stickCellCss.
   * @param _positionListener A listener that is notified of changes to sticky rows/columns
   *     and their dimensions.
   */
  constructor(_isNativeHtmlTable, _stickCellCss, direction, _coalescedStyleScheduler, _isBrowser = true, _needsPositionStickyOnElement = true, _positionListener) {
    this._isNativeHtmlTable = _isNativeHtmlTable;
    this._stickCellCss = _stickCellCss;
    this.direction = direction;
    this._coalescedStyleScheduler = _coalescedStyleScheduler;
    this._isBrowser = _isBrowser;
    this._needsPositionStickyOnElement = _needsPositionStickyOnElement;
    this._positionListener = _positionListener;
    this._cachedCellWidths = [];
    this._borderCellCss = {
      "top": `${_stickCellCss}-border-elem-top`,
      "bottom": `${_stickCellCss}-border-elem-bottom`,
      "left": `${_stickCellCss}-border-elem-left`,
      "right": `${_stickCellCss}-border-elem-right`
    };
  }
  /**
   * Clears the sticky positioning styles from the row and its cells by resetting the `position`
   * style, setting the zIndex to 0, and unsetting each provided sticky direction.
   * @param rows The list of rows that should be cleared from sticking in the provided directions
   * @param stickyDirections The directions that should no longer be set as sticky on the rows.
   */
  clearStickyPositioning(rows, stickyDirections) {
    const elementsToClear = [];
    for (const row of rows) {
      if (row.nodeType !== row.ELEMENT_NODE) {
        continue;
      }
      elementsToClear.push(row);
      for (let i2 = 0; i2 < row.children.length; i2++) {
        elementsToClear.push(row.children[i2]);
      }
    }
    this._coalescedStyleScheduler.schedule(() => {
      for (const element of elementsToClear) {
        this._removeStickyStyle(element, stickyDirections);
      }
    });
  }
  /**
   * Applies sticky left and right positions to the cells of each row according to the sticky
   * states of the rendered column definitions.
   * @param rows The rows that should have its set of cells stuck according to the sticky states.
   * @param stickyStartStates A list of boolean states where each state represents whether the cell
   *     in this index position should be stuck to the start of the row.
   * @param stickyEndStates A list of boolean states where each state represents whether the cell
   *     in this index position should be stuck to the end of the row.
   * @param recalculateCellWidths Whether the sticky styler should recalculate the width of each
   *     column cell. If `false` cached widths will be used instead.
   */
  updateStickyColumns(rows, stickyStartStates, stickyEndStates, recalculateCellWidths = true) {
    if (!rows.length || !this._isBrowser || !(stickyStartStates.some((state) => state) || stickyEndStates.some((state) => state))) {
      if (this._positionListener) {
        this._positionListener.stickyColumnsUpdated({
          sizes: []
        });
        this._positionListener.stickyEndColumnsUpdated({
          sizes: []
        });
      }
      return;
    }
    this._coalescedStyleScheduler.schedule(() => {
      const firstRow = rows[0];
      const numCells = firstRow.children.length;
      const cellWidths = this._getCellWidths(firstRow, recalculateCellWidths);
      const startPositions = this._getStickyStartColumnPositions(cellWidths, stickyStartStates);
      const endPositions = this._getStickyEndColumnPositions(cellWidths, stickyEndStates);
      const lastStickyStart = stickyStartStates.lastIndexOf(true);
      const firstStickyEnd = stickyEndStates.indexOf(true);
      const isRtl = this.direction === "rtl";
      const start = isRtl ? "right" : "left";
      const end = isRtl ? "left" : "right";
      for (const row of rows) {
        for (let i2 = 0; i2 < numCells; i2++) {
          const cell = row.children[i2];
          if (stickyStartStates[i2]) {
            this._addStickyStyle(cell, start, startPositions[i2], i2 === lastStickyStart);
          }
          if (stickyEndStates[i2]) {
            this._addStickyStyle(cell, end, endPositions[i2], i2 === firstStickyEnd);
          }
        }
      }
      if (this._positionListener) {
        this._positionListener.stickyColumnsUpdated({
          sizes: lastStickyStart === -1 ? [] : cellWidths.slice(0, lastStickyStart + 1).map((width, index) => stickyStartStates[index] ? width : null)
        });
        this._positionListener.stickyEndColumnsUpdated({
          sizes: firstStickyEnd === -1 ? [] : cellWidths.slice(firstStickyEnd).map((width, index) => stickyEndStates[index + firstStickyEnd] ? width : null).reverse()
        });
      }
    });
  }
  /**
   * Applies sticky positioning to the row's cells if using the native table layout, and to the
   * row itself otherwise.
   * @param rowsToStick The list of rows that should be stuck according to their corresponding
   *     sticky state and to the provided top or bottom position.
   * @param stickyStates A list of boolean states where each state represents whether the row
   *     should be stuck in the particular top or bottom position.
   * @param position The position direction in which the row should be stuck if that row should be
   *     sticky.
   *
   */
  stickRows(rowsToStick, stickyStates, position) {
    if (!this._isBrowser) {
      return;
    }
    this._coalescedStyleScheduler.schedule(() => {
      const rows = position === "bottom" ? rowsToStick.slice().reverse() : rowsToStick;
      const states = position === "bottom" ? stickyStates.slice().reverse() : stickyStates;
      const stickyOffsets = [];
      const stickyCellHeights = [];
      const elementsToStick = [];
      for (let rowIndex = 0, stickyOffset = 0; rowIndex < rows.length; rowIndex++) {
        if (!states[rowIndex]) {
          continue;
        }
        stickyOffsets[rowIndex] = stickyOffset;
        const row = rows[rowIndex];
        elementsToStick[rowIndex] = this._isNativeHtmlTable ? Array.from(row.children) : [row];
        const height = row.getBoundingClientRect().height;
        stickyOffset += height;
        stickyCellHeights[rowIndex] = height;
      }
      const borderedRowIndex = states.lastIndexOf(true);
      for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
        if (!states[rowIndex]) {
          continue;
        }
        const offset = stickyOffsets[rowIndex];
        const isBorderedRowIndex = rowIndex === borderedRowIndex;
        for (const element of elementsToStick[rowIndex]) {
          this._addStickyStyle(element, position, offset, isBorderedRowIndex);
        }
      }
      if (position === "top") {
        this._positionListener?.stickyHeaderRowsUpdated({
          sizes: stickyCellHeights,
          offsets: stickyOffsets,
          elements: elementsToStick
        });
      } else {
        this._positionListener?.stickyFooterRowsUpdated({
          sizes: stickyCellHeights,
          offsets: stickyOffsets,
          elements: elementsToStick
        });
      }
    });
  }
  /**
   * When using the native table in Safari, sticky footer cells do not stick. The only way to stick
   * footer rows is to apply sticky styling to the tfoot container. This should only be done if
   * all footer rows are sticky. If not all footer rows are sticky, remove sticky positioning from
   * the tfoot element.
   */
  updateStickyFooterContainer(tableElement, stickyStates) {
    if (!this._isNativeHtmlTable) {
      return;
    }
    this._coalescedStyleScheduler.schedule(() => {
      const tfoot = tableElement.querySelector("tfoot");
      if (tfoot) {
        if (stickyStates.some((state) => !state)) {
          this._removeStickyStyle(tfoot, ["bottom"]);
        } else {
          this._addStickyStyle(tfoot, "bottom", 0, false);
        }
      }
    });
  }
  /**
   * Removes the sticky style on the element by removing the sticky cell CSS class, re-evaluating
   * the zIndex, removing each of the provided sticky directions, and removing the
   * sticky position if there are no more directions.
   */
  _removeStickyStyle(element, stickyDirections) {
    for (const dir of stickyDirections) {
      element.style[dir] = "";
      element.classList.remove(this._borderCellCss[dir]);
    }
    const hasDirection = STICKY_DIRECTIONS.some((dir) => stickyDirections.indexOf(dir) === -1 && element.style[dir]);
    if (hasDirection) {
      element.style.zIndex = this._getCalculatedZIndex(element);
    } else {
      element.style.zIndex = "";
      if (this._needsPositionStickyOnElement) {
        element.style.position = "";
      }
      element.classList.remove(this._stickCellCss);
    }
  }
  /**
   * Adds the sticky styling to the element by adding the sticky style class, changing position
   * to be sticky (and -webkit-sticky), setting the appropriate zIndex, and adding a sticky
   * direction and value.
   */
  _addStickyStyle(element, dir, dirValue, isBorderElement) {
    element.classList.add(this._stickCellCss);
    if (isBorderElement) {
      element.classList.add(this._borderCellCss[dir]);
    }
    element.style[dir] = `${dirValue}px`;
    element.style.zIndex = this._getCalculatedZIndex(element);
    if (this._needsPositionStickyOnElement) {
      element.style.cssText += "position: -webkit-sticky; position: sticky; ";
    }
  }
  /**
   * Calculate what the z-index should be for the element, depending on what directions (top,
   * bottom, left, right) have been set. It should be true that elements with a top direction
   * should have the highest index since these are elements like a table header. If any of those
   * elements are also sticky in another direction, then they should appear above other elements
   * that are only sticky top (e.g. a sticky column on a sticky header). Bottom-sticky elements
   * (e.g. footer rows) should then be next in the ordering such that they are below the header
   * but above any non-sticky elements. Finally, left/right sticky elements (e.g. sticky columns)
   * should minimally increment so that they are above non-sticky elements but below top and bottom
   * elements.
   */
  _getCalculatedZIndex(element) {
    const zIndexIncrements = {
      top: 100,
      bottom: 10,
      left: 1,
      right: 1
    };
    let zIndex = 0;
    for (const dir of STICKY_DIRECTIONS) {
      if (element.style[dir]) {
        zIndex += zIndexIncrements[dir];
      }
    }
    return zIndex ? `${zIndex}` : "";
  }
  /** Gets the widths for each cell in the provided row. */
  _getCellWidths(row, recalculateCellWidths = true) {
    if (!recalculateCellWidths && this._cachedCellWidths.length) {
      return this._cachedCellWidths;
    }
    const cellWidths = [];
    const firstRowCells = row.children;
    for (let i2 = 0; i2 < firstRowCells.length; i2++) {
      let cell = firstRowCells[i2];
      cellWidths.push(cell.getBoundingClientRect().width);
    }
    this._cachedCellWidths = cellWidths;
    return cellWidths;
  }
  /**
   * Determines the left and right positions of each sticky column cell, which will be the
   * accumulation of all sticky column cell widths to the left and right, respectively.
   * Non-sticky cells do not need to have a value set since their positions will not be applied.
   */
  _getStickyStartColumnPositions(widths, stickyStates) {
    const positions = [];
    let nextPosition = 0;
    for (let i2 = 0; i2 < widths.length; i2++) {
      if (stickyStates[i2]) {
        positions[i2] = nextPosition;
        nextPosition += widths[i2];
      }
    }
    return positions;
  }
  /**
   * Determines the left and right positions of each sticky column cell, which will be the
   * accumulation of all sticky column cell widths to the left and right, respectively.
   * Non-sticky cells do not need to have a value set since their positions will not be applied.
   */
  _getStickyEndColumnPositions(widths, stickyStates) {
    const positions = [];
    let nextPosition = 0;
    for (let i2 = widths.length; i2 > 0; i2--) {
      if (stickyStates[i2]) {
        positions[i2] = nextPosition;
        nextPosition += widths[i2];
      }
    }
    return positions;
  }
};
function getTableUnknownColumnError(id) {
  return Error(`Could not find column with id "${id}".`);
}
function getTableDuplicateColumnNameError(name) {
  return Error(`Duplicate column definition name provided: "${name}".`);
}
function getTableMultipleDefaultRowDefsError() {
  return Error(`There can only be one default row without a when predicate function.`);
}
function getTableMissingMatchingRowDefError(data) {
  return Error(`Could not find a matching row definition for theprovided row data: ${JSON.stringify(data)}`);
}
function getTableMissingRowDefsError() {
  return Error("Missing definitions for header, footer, and row; cannot determine which columns should be rendered.");
}
function getTableUnknownDataSourceError() {
  return Error(`Provided data source did not match an array, Observable, or DataSource`);
}
function getTableTextColumnMissingParentTableError() {
  return Error(`Text column could not find a parent table for registration.`);
}
function getTableTextColumnMissingNameError() {
  return Error(`Table text column must have a name.`);
}
var STICKY_POSITIONING_LISTENER = new InjectionToken("CDK_SPL");
var _CdkRecycleRows = class _CdkRecycleRows {
};
_CdkRecycleRows.\u0275fac = function CdkRecycleRows_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkRecycleRows)();
};
_CdkRecycleRows.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkRecycleRows,
  selectors: [["cdk-table", "recycleRows", ""], ["table", "cdk-table", "", "recycleRows", ""]],
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([{
    provide: _VIEW_REPEATER_STRATEGY,
    useClass: _RecycleViewRepeaterStrategy
  }])]
});
var CdkRecycleRows = _CdkRecycleRows;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkRecycleRows, [{
    type: Directive,
    args: [{
      selector: "cdk-table[recycleRows], table[cdk-table][recycleRows]",
      providers: [{
        provide: _VIEW_REPEATER_STRATEGY,
        useClass: _RecycleViewRepeaterStrategy
      }],
      standalone: true
    }]
  }], null, null);
})();
var _DataRowOutlet = class _DataRowOutlet {
  constructor(viewContainer, elementRef) {
    this.viewContainer = viewContainer;
    this.elementRef = elementRef;
    const table = inject(CDK_TABLE);
    table._rowOutlet = this;
    table._outletAssigned();
  }
};
_DataRowOutlet.\u0275fac = function DataRowOutlet_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DataRowOutlet)(\u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(ElementRef));
};
_DataRowOutlet.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _DataRowOutlet,
  selectors: [["", "rowOutlet", ""]],
  standalone: true
});
var DataRowOutlet = _DataRowOutlet;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataRowOutlet, [{
    type: Directive,
    args: [{
      selector: "[rowOutlet]",
      standalone: true
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: ElementRef
  }], null);
})();
var _HeaderRowOutlet = class _HeaderRowOutlet {
  constructor(viewContainer, elementRef) {
    this.viewContainer = viewContainer;
    this.elementRef = elementRef;
    const table = inject(CDK_TABLE);
    table._headerRowOutlet = this;
    table._outletAssigned();
  }
};
_HeaderRowOutlet.\u0275fac = function HeaderRowOutlet_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HeaderRowOutlet)(\u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(ElementRef));
};
_HeaderRowOutlet.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _HeaderRowOutlet,
  selectors: [["", "headerRowOutlet", ""]],
  standalone: true
});
var HeaderRowOutlet = _HeaderRowOutlet;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderRowOutlet, [{
    type: Directive,
    args: [{
      selector: "[headerRowOutlet]",
      standalone: true
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: ElementRef
  }], null);
})();
var _FooterRowOutlet = class _FooterRowOutlet {
  constructor(viewContainer, elementRef) {
    this.viewContainer = viewContainer;
    this.elementRef = elementRef;
    const table = inject(CDK_TABLE);
    table._footerRowOutlet = this;
    table._outletAssigned();
  }
};
_FooterRowOutlet.\u0275fac = function FooterRowOutlet_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FooterRowOutlet)(\u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(ElementRef));
};
_FooterRowOutlet.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _FooterRowOutlet,
  selectors: [["", "footerRowOutlet", ""]],
  standalone: true
});
var FooterRowOutlet = _FooterRowOutlet;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterRowOutlet, [{
    type: Directive,
    args: [{
      selector: "[footerRowOutlet]",
      standalone: true
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: ElementRef
  }], null);
})();
var _NoDataRowOutlet = class _NoDataRowOutlet {
  constructor(viewContainer, elementRef) {
    this.viewContainer = viewContainer;
    this.elementRef = elementRef;
    const table = inject(CDK_TABLE);
    table._noDataRowOutlet = this;
    table._outletAssigned();
  }
};
_NoDataRowOutlet.\u0275fac = function NoDataRowOutlet_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NoDataRowOutlet)(\u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(ElementRef));
};
_NoDataRowOutlet.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NoDataRowOutlet,
  selectors: [["", "noDataRowOutlet", ""]],
  standalone: true
});
var NoDataRowOutlet = _NoDataRowOutlet;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoDataRowOutlet, [{
    type: Directive,
    args: [{
      selector: "[noDataRowOutlet]",
      standalone: true
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: ElementRef
  }], null);
})();
var CDK_TABLE_TEMPLATE = (
  // Note that according to MDN, the `caption` element has to be projected as the **first**
  // element in the table. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption
  `
  <ng-content select="caption"/>
  <ng-content select="colgroup, col"/>

  <!--
    Unprojected content throws a hydration error so we need this to capture it.
    It gets removed on the client so it doesn't affect the layout.
  -->
  @if (_isServer) {
    <ng-content/>
  }

  @if (_isNativeHtmlTable) {
    <thead role="rowgroup">
      <ng-container headerRowOutlet/>
    </thead>
    <tbody role="rowgroup">
      <ng-container rowOutlet/>
      <ng-container noDataRowOutlet/>
    </tbody>
    <tfoot role="rowgroup">
      <ng-container footerRowOutlet/>
    </tfoot>
  } @else {
    <ng-container headerRowOutlet/>
    <ng-container rowOutlet/>
    <ng-container noDataRowOutlet/>
    <ng-container footerRowOutlet/>
  }
`
);
var _CdkTable = class _CdkTable {
  /** Aria role to apply to the table's cells based on the table's own role. */
  _getCellRole() {
    if (this._cellRoleInternal === void 0) {
      const role = this._elementRef.nativeElement.getAttribute("role");
      const cellRole = role === "grid" || role === "treegrid" ? "gridcell" : "cell";
      this._cellRoleInternal = this._isNativeHtmlTable && cellRole === "cell" ? null : cellRole;
    }
    return this._cellRoleInternal;
  }
  /**
   * Tracking function that will be used to check the differences in data changes. Used similarly
   * to `ngFor` `trackBy` function. Optimize row operations by identifying a row based on its data
   * relative to the function to know if a row should be added/removed/moved.
   * Accepts a function that takes two parameters, `index` and `item`.
   */
  get trackBy() {
    return this._trackByFn;
  }
  set trackBy(fn) {
    if ((typeof ngDevMode === "undefined" || ngDevMode) && fn != null && typeof fn !== "function") {
      console.warn(`trackBy must be a function, but received ${JSON.stringify(fn)}.`);
    }
    this._trackByFn = fn;
  }
  /**
   * The table's source of data, which can be provided in three ways (in order of complexity):
   *   - Simple data array (each object represents one table row)
   *   - Stream that emits a data array each time the array changes
   *   - `DataSource` object that implements the connect/disconnect interface.
   *
   * If a data array is provided, the table must be notified when the array's objects are
   * added, removed, or moved. This can be done by calling the `renderRows()` function which will
   * render the diff since the last table render. If the data array reference is changed, the table
   * will automatically trigger an update to the rows.
   *
   * When providing an Observable stream, the table will trigger an update automatically when the
   * stream emits a new array of data.
   *
   * Finally, when providing a `DataSource` object, the table will use the Observable stream
   * provided by the connect function and trigger updates when that stream emits new data array
   * values. During the table's ngOnDestroy or when the data source is removed from the table, the
   * table will call the DataSource's `disconnect` function (may be useful for cleaning up any
   * subscriptions registered during the connect process).
   */
  get dataSource() {
    return this._dataSource;
  }
  set dataSource(dataSource) {
    if (this._dataSource !== dataSource) {
      this._switchDataSource(dataSource);
    }
  }
  /**
   * Whether to allow multiple rows per data object by evaluating which rows evaluate their 'when'
   * predicate to true. If `multiTemplateDataRows` is false, which is the default value, then each
   * dataobject will render the first row that evaluates its when predicate to true, in the order
   * defined in the table, or otherwise the default row which does not have a when predicate.
   */
  get multiTemplateDataRows() {
    return this._multiTemplateDataRows;
  }
  set multiTemplateDataRows(value) {
    this._multiTemplateDataRows = value;
    if (this._rowOutlet && this._rowOutlet.viewContainer.length) {
      this._forceRenderDataRows();
      this.updateStickyColumnStyles();
    }
  }
  /**
   * Whether to use a fixed table layout. Enabling this option will enforce consistent column widths
   * and optimize rendering sticky styles for native tables. No-op for flex tables.
   */
  get fixedLayout() {
    return this._fixedLayout;
  }
  set fixedLayout(value) {
    this._fixedLayout = value;
    this._forceRecalculateCellWidths = true;
    this._stickyColumnStylesNeedReset = true;
  }
  constructor(_differs, _changeDetectorRef, _elementRef, role, _dir, _document, _platform, _viewRepeater, _coalescedStyleScheduler, _viewportRuler, _stickyPositioningListener, _unusedNgZone) {
    this._differs = _differs;
    this._changeDetectorRef = _changeDetectorRef;
    this._elementRef = _elementRef;
    this._dir = _dir;
    this._platform = _platform;
    this._viewRepeater = _viewRepeater;
    this._coalescedStyleScheduler = _coalescedStyleScheduler;
    this._viewportRuler = _viewportRuler;
    this._stickyPositioningListener = _stickyPositioningListener;
    this._onDestroy = new Subject();
    this._columnDefsByName = /* @__PURE__ */ new Map();
    this._customColumnDefs = /* @__PURE__ */ new Set();
    this._customRowDefs = /* @__PURE__ */ new Set();
    this._customHeaderRowDefs = /* @__PURE__ */ new Set();
    this._customFooterRowDefs = /* @__PURE__ */ new Set();
    this._headerRowDefChanged = true;
    this._footerRowDefChanged = true;
    this._stickyColumnStylesNeedReset = true;
    this._forceRecalculateCellWidths = true;
    this._cachedRenderRowsMap = /* @__PURE__ */ new Map();
    this.stickyCssClass = "cdk-table-sticky";
    this.needsPositionStickyOnElement = true;
    this._isShowingNoDataRow = false;
    this._hasAllOutlets = false;
    this._hasInitialized = false;
    this._cellRoleInternal = void 0;
    this._multiTemplateDataRows = false;
    this._fixedLayout = false;
    this.contentChanged = new EventEmitter();
    this.viewChange = new BehaviorSubject({
      start: 0,
      end: Number.MAX_VALUE
    });
    this._injector = inject(Injector);
    if (!role) {
      _elementRef.nativeElement.setAttribute("role", "table");
    }
    this._document = _document;
    this._isServer = !_platform.isBrowser;
    this._isNativeHtmlTable = _elementRef.nativeElement.nodeName === "TABLE";
  }
  ngOnInit() {
    this._setupStickyStyler();
    this._dataDiffer = this._differs.find([]).create((_i, dataRow) => {
      return this.trackBy ? this.trackBy(dataRow.dataIndex, dataRow.data) : dataRow;
    });
    this._viewportRuler.change().pipe(takeUntil(this._onDestroy)).subscribe(() => {
      this._forceRecalculateCellWidths = true;
    });
  }
  ngAfterContentInit() {
    this._hasInitialized = true;
  }
  ngAfterContentChecked() {
    if (this._canRender()) {
      this._render();
    }
  }
  ngOnDestroy() {
    [this._rowOutlet?.viewContainer, this._headerRowOutlet?.viewContainer, this._footerRowOutlet?.viewContainer, this._cachedRenderRowsMap, this._customColumnDefs, this._customRowDefs, this._customHeaderRowDefs, this._customFooterRowDefs, this._columnDefsByName].forEach((def) => {
      def?.clear();
    });
    this._headerRowDefs = [];
    this._footerRowDefs = [];
    this._defaultRowDef = null;
    this._onDestroy.next();
    this._onDestroy.complete();
    if (isDataSource(this.dataSource)) {
      this.dataSource.disconnect(this);
    }
  }
  /**
   * Renders rows based on the table's latest set of data, which was either provided directly as an
   * input or retrieved through an Observable stream (directly or from a DataSource).
   * Checks for differences in the data since the last diff to perform only the necessary
   * changes (add/remove/move rows).
   *
   * If the table's data source is a DataSource or Observable, this will be invoked automatically
   * each time the provided Observable stream emits a new data array. Otherwise if your data is
   * an array, this function will need to be called to render any changes.
   */
  renderRows() {
    this._renderRows = this._getAllRenderRows();
    const changes = this._dataDiffer.diff(this._renderRows);
    if (!changes) {
      this._updateNoDataRow();
      this.contentChanged.next();
      return;
    }
    const viewContainer = this._rowOutlet.viewContainer;
    this._viewRepeater.applyChanges(changes, viewContainer, (record, _adjustedPreviousIndex, currentIndex) => this._getEmbeddedViewArgs(record.item, currentIndex), (record) => record.item.data, (change) => {
      if (change.operation === _ViewRepeaterOperation.INSERTED && change.context) {
        this._renderCellTemplateForItem(change.record.item.rowDef, change.context);
      }
    });
    this._updateRowIndexContext();
    changes.forEachIdentityChange((record) => {
      const rowView = viewContainer.get(record.currentIndex);
      rowView.context.$implicit = record.item.data;
    });
    this._updateNoDataRow();
    afterNextRender(() => {
      this.updateStickyColumnStyles();
    }, {
      injector: this._injector
    });
    this.contentChanged.next();
  }
  /** Adds a column definition that was not included as part of the content children. */
  addColumnDef(columnDef) {
    this._customColumnDefs.add(columnDef);
  }
  /** Removes a column definition that was not included as part of the content children. */
  removeColumnDef(columnDef) {
    this._customColumnDefs.delete(columnDef);
  }
  /** Adds a row definition that was not included as part of the content children. */
  addRowDef(rowDef) {
    this._customRowDefs.add(rowDef);
  }
  /** Removes a row definition that was not included as part of the content children. */
  removeRowDef(rowDef) {
    this._customRowDefs.delete(rowDef);
  }
  /** Adds a header row definition that was not included as part of the content children. */
  addHeaderRowDef(headerRowDef) {
    this._customHeaderRowDefs.add(headerRowDef);
    this._headerRowDefChanged = true;
  }
  /** Removes a header row definition that was not included as part of the content children. */
  removeHeaderRowDef(headerRowDef) {
    this._customHeaderRowDefs.delete(headerRowDef);
    this._headerRowDefChanged = true;
  }
  /** Adds a footer row definition that was not included as part of the content children. */
  addFooterRowDef(footerRowDef) {
    this._customFooterRowDefs.add(footerRowDef);
    this._footerRowDefChanged = true;
  }
  /** Removes a footer row definition that was not included as part of the content children. */
  removeFooterRowDef(footerRowDef) {
    this._customFooterRowDefs.delete(footerRowDef);
    this._footerRowDefChanged = true;
  }
  /** Sets a no data row definition that was not included as a part of the content children. */
  setNoDataRow(noDataRow) {
    this._customNoDataRow = noDataRow;
  }
  /**
   * Updates the header sticky styles. First resets all applied styles with respect to the cells
   * sticking to the top. Then, evaluating which cells need to be stuck to the top. This is
   * automatically called when the header row changes its displayed set of columns, or if its
   * sticky input changes. May be called manually for cases where the cell content changes outside
   * of these events.
   */
  updateStickyHeaderRowStyles() {
    const headerRows = this._getRenderedRows(this._headerRowOutlet);
    if (this._isNativeHtmlTable) {
      const thead = closestTableSection(this._headerRowOutlet, "thead");
      if (thead) {
        thead.style.display = headerRows.length ? "" : "none";
      }
    }
    const stickyStates = this._headerRowDefs.map((def) => def.sticky);
    this._stickyStyler.clearStickyPositioning(headerRows, ["top"]);
    this._stickyStyler.stickRows(headerRows, stickyStates, "top");
    this._headerRowDefs.forEach((def) => def.resetStickyChanged());
  }
  /**
   * Updates the footer sticky styles. First resets all applied styles with respect to the cells
   * sticking to the bottom. Then, evaluating which cells need to be stuck to the bottom. This is
   * automatically called when the footer row changes its displayed set of columns, or if its
   * sticky input changes. May be called manually for cases where the cell content changes outside
   * of these events.
   */
  updateStickyFooterRowStyles() {
    const footerRows = this._getRenderedRows(this._footerRowOutlet);
    if (this._isNativeHtmlTable) {
      const tfoot = closestTableSection(this._footerRowOutlet, "tfoot");
      if (tfoot) {
        tfoot.style.display = footerRows.length ? "" : "none";
      }
    }
    const stickyStates = this._footerRowDefs.map((def) => def.sticky);
    this._stickyStyler.clearStickyPositioning(footerRows, ["bottom"]);
    this._stickyStyler.stickRows(footerRows, stickyStates, "bottom");
    this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement, stickyStates);
    this._footerRowDefs.forEach((def) => def.resetStickyChanged());
  }
  /**
   * Updates the column sticky styles. First resets all applied styles with respect to the cells
   * sticking to the left and right. Then sticky styles are added for the left and right according
   * to the column definitions for each cell in each row. This is automatically called when
   * the data source provides a new set of data or when a column definition changes its sticky
   * input. May be called manually for cases where the cell content changes outside of these events.
   */
  updateStickyColumnStyles() {
    const headerRows = this._getRenderedRows(this._headerRowOutlet);
    const dataRows = this._getRenderedRows(this._rowOutlet);
    const footerRows = this._getRenderedRows(this._footerRowOutlet);
    if (this._isNativeHtmlTable && !this._fixedLayout || this._stickyColumnStylesNeedReset) {
      this._stickyStyler.clearStickyPositioning([...headerRows, ...dataRows, ...footerRows], ["left", "right"]);
      this._stickyColumnStylesNeedReset = false;
    }
    headerRows.forEach((headerRow, i2) => {
      this._addStickyColumnStyles([headerRow], this._headerRowDefs[i2]);
    });
    this._rowDefs.forEach((rowDef) => {
      const rows = [];
      for (let i2 = 0; i2 < dataRows.length; i2++) {
        if (this._renderRows[i2].rowDef === rowDef) {
          rows.push(dataRows[i2]);
        }
      }
      this._addStickyColumnStyles(rows, rowDef);
    });
    footerRows.forEach((footerRow, i2) => {
      this._addStickyColumnStyles([footerRow], this._footerRowDefs[i2]);
    });
    Array.from(this._columnDefsByName.values()).forEach((def) => def.resetStickyChanged());
  }
  /** Invoked whenever an outlet is created and has been assigned to the table. */
  _outletAssigned() {
    if (!this._hasAllOutlets && this._rowOutlet && this._headerRowOutlet && this._footerRowOutlet && this._noDataRowOutlet) {
      this._hasAllOutlets = true;
      if (this._canRender()) {
        this._render();
      }
    }
  }
  /** Whether the table has all the information to start rendering. */
  _canRender() {
    return this._hasAllOutlets && this._hasInitialized;
  }
  /** Renders the table if its state has changed. */
  _render() {
    this._cacheRowDefs();
    this._cacheColumnDefs();
    if (!this._headerRowDefs.length && !this._footerRowDefs.length && !this._rowDefs.length && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTableMissingRowDefsError();
    }
    const columnsChanged = this._renderUpdatedColumns();
    const rowDefsChanged = columnsChanged || this._headerRowDefChanged || this._footerRowDefChanged;
    this._stickyColumnStylesNeedReset = this._stickyColumnStylesNeedReset || rowDefsChanged;
    this._forceRecalculateCellWidths = rowDefsChanged;
    if (this._headerRowDefChanged) {
      this._forceRenderHeaderRows();
      this._headerRowDefChanged = false;
    }
    if (this._footerRowDefChanged) {
      this._forceRenderFooterRows();
      this._footerRowDefChanged = false;
    }
    if (this.dataSource && this._rowDefs.length > 0 && !this._renderChangeSubscription) {
      this._observeRenderChanges();
    } else if (this._stickyColumnStylesNeedReset) {
      this.updateStickyColumnStyles();
    }
    this._checkStickyStates();
  }
  /**
   * Get the list of RenderRow objects to render according to the current list of data and defined
   * row definitions. If the previous list already contained a particular pair, it should be reused
   * so that the differ equates their references.
   */
  _getAllRenderRows() {
    const renderRows = [];
    const prevCachedRenderRows = this._cachedRenderRowsMap;
    this._cachedRenderRowsMap = /* @__PURE__ */ new Map();
    for (let i2 = 0; i2 < this._data.length; i2++) {
      let data = this._data[i2];
      const renderRowsForData = this._getRenderRowsForData(data, i2, prevCachedRenderRows.get(data));
      if (!this._cachedRenderRowsMap.has(data)) {
        this._cachedRenderRowsMap.set(data, /* @__PURE__ */ new WeakMap());
      }
      for (let j2 = 0; j2 < renderRowsForData.length; j2++) {
        let renderRow = renderRowsForData[j2];
        const cache = this._cachedRenderRowsMap.get(renderRow.data);
        if (cache.has(renderRow.rowDef)) {
          cache.get(renderRow.rowDef).push(renderRow);
        } else {
          cache.set(renderRow.rowDef, [renderRow]);
        }
        renderRows.push(renderRow);
      }
    }
    return renderRows;
  }
  /**
   * Gets a list of `RenderRow<T>` for the provided data object and any `CdkRowDef` objects that
   * should be rendered for this data. Reuses the cached RenderRow objects if they match the same
   * `(T, CdkRowDef)` pair.
   */
  _getRenderRowsForData(data, dataIndex, cache) {
    const rowDefs = this._getRowDefs(data, dataIndex);
    return rowDefs.map((rowDef) => {
      const cachedRenderRows = cache && cache.has(rowDef) ? cache.get(rowDef) : [];
      if (cachedRenderRows.length) {
        const dataRow = cachedRenderRows.shift();
        dataRow.dataIndex = dataIndex;
        return dataRow;
      } else {
        return {
          data,
          rowDef,
          dataIndex
        };
      }
    });
  }
  /** Update the map containing the content's column definitions. */
  _cacheColumnDefs() {
    this._columnDefsByName.clear();
    const columnDefs = mergeArrayAndSet(this._getOwnDefs(this._contentColumnDefs), this._customColumnDefs);
    columnDefs.forEach((columnDef) => {
      if (this._columnDefsByName.has(columnDef.name) && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw getTableDuplicateColumnNameError(columnDef.name);
      }
      this._columnDefsByName.set(columnDef.name, columnDef);
    });
  }
  /** Update the list of all available row definitions that can be used. */
  _cacheRowDefs() {
    this._headerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentHeaderRowDefs), this._customHeaderRowDefs);
    this._footerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentFooterRowDefs), this._customFooterRowDefs);
    this._rowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentRowDefs), this._customRowDefs);
    const defaultRowDefs = this._rowDefs.filter((def) => !def.when);
    if (!this.multiTemplateDataRows && defaultRowDefs.length > 1 && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTableMultipleDefaultRowDefsError();
    }
    this._defaultRowDef = defaultRowDefs[0];
  }
  /**
   * Check if the header, data, or footer rows have changed what columns they want to display or
   * whether the sticky states have changed for the header or footer. If there is a diff, then
   * re-render that section.
   */
  _renderUpdatedColumns() {
    const columnsDiffReducer = (acc, def) => acc || !!def.getColumnsDiff();
    const dataColumnsChanged = this._rowDefs.reduce(columnsDiffReducer, false);
    if (dataColumnsChanged) {
      this._forceRenderDataRows();
    }
    const headerColumnsChanged = this._headerRowDefs.reduce(columnsDiffReducer, false);
    if (headerColumnsChanged) {
      this._forceRenderHeaderRows();
    }
    const footerColumnsChanged = this._footerRowDefs.reduce(columnsDiffReducer, false);
    if (footerColumnsChanged) {
      this._forceRenderFooterRows();
    }
    return dataColumnsChanged || headerColumnsChanged || footerColumnsChanged;
  }
  /**
   * Switch to the provided data source by resetting the data and unsubscribing from the current
   * render change subscription if one exists. If the data source is null, interpret this by
   * clearing the row outlet. Otherwise start listening for new data.
   */
  _switchDataSource(dataSource) {
    this._data = [];
    if (isDataSource(this.dataSource)) {
      this.dataSource.disconnect(this);
    }
    if (this._renderChangeSubscription) {
      this._renderChangeSubscription.unsubscribe();
      this._renderChangeSubscription = null;
    }
    if (!dataSource) {
      if (this._dataDiffer) {
        this._dataDiffer.diff([]);
      }
      if (this._rowOutlet) {
        this._rowOutlet.viewContainer.clear();
      }
    }
    this._dataSource = dataSource;
  }
  /** Set up a subscription for the data provided by the data source. */
  _observeRenderChanges() {
    if (!this.dataSource) {
      return;
    }
    let dataStream;
    if (isDataSource(this.dataSource)) {
      dataStream = this.dataSource.connect(this);
    } else if (isObservable(this.dataSource)) {
      dataStream = this.dataSource;
    } else if (Array.isArray(this.dataSource)) {
      dataStream = of(this.dataSource);
    }
    if (dataStream === void 0 && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTableUnknownDataSourceError();
    }
    this._renderChangeSubscription = dataStream.pipe(takeUntil(this._onDestroy)).subscribe((data) => {
      this._data = data || [];
      this.renderRows();
    });
  }
  /**
   * Clears any existing content in the header row outlet and creates a new embedded view
   * in the outlet using the header row definition.
   */
  _forceRenderHeaderRows() {
    if (this._headerRowOutlet.viewContainer.length > 0) {
      this._headerRowOutlet.viewContainer.clear();
    }
    this._headerRowDefs.forEach((def, i2) => this._renderRow(this._headerRowOutlet, def, i2));
    this.updateStickyHeaderRowStyles();
  }
  /**
   * Clears any existing content in the footer row outlet and creates a new embedded view
   * in the outlet using the footer row definition.
   */
  _forceRenderFooterRows() {
    if (this._footerRowOutlet.viewContainer.length > 0) {
      this._footerRowOutlet.viewContainer.clear();
    }
    this._footerRowDefs.forEach((def, i2) => this._renderRow(this._footerRowOutlet, def, i2));
    this.updateStickyFooterRowStyles();
  }
  /** Adds the sticky column styles for the rows according to the columns' stick states. */
  _addStickyColumnStyles(rows, rowDef) {
    const columnDefs = Array.from(rowDef.columns || []).map((columnName) => {
      const columnDef = this._columnDefsByName.get(columnName);
      if (!columnDef && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw getTableUnknownColumnError(columnName);
      }
      return columnDef;
    });
    const stickyStartStates = columnDefs.map((columnDef) => columnDef.sticky);
    const stickyEndStates = columnDefs.map((columnDef) => columnDef.stickyEnd);
    this._stickyStyler.updateStickyColumns(rows, stickyStartStates, stickyEndStates, !this._fixedLayout || this._forceRecalculateCellWidths);
  }
  /** Gets the list of rows that have been rendered in the row outlet. */
  _getRenderedRows(rowOutlet) {
    const renderedRows = [];
    for (let i2 = 0; i2 < rowOutlet.viewContainer.length; i2++) {
      const viewRef = rowOutlet.viewContainer.get(i2);
      renderedRows.push(viewRef.rootNodes[0]);
    }
    return renderedRows;
  }
  /**
   * Get the matching row definitions that should be used for this row data. If there is only
   * one row definition, it is returned. Otherwise, find the row definitions that has a when
   * predicate that returns true with the data. If none return true, return the default row
   * definition.
   */
  _getRowDefs(data, dataIndex) {
    if (this._rowDefs.length == 1) {
      return [this._rowDefs[0]];
    }
    let rowDefs = [];
    if (this.multiTemplateDataRows) {
      rowDefs = this._rowDefs.filter((def) => !def.when || def.when(dataIndex, data));
    } else {
      let rowDef = this._rowDefs.find((def) => def.when && def.when(dataIndex, data)) || this._defaultRowDef;
      if (rowDef) {
        rowDefs.push(rowDef);
      }
    }
    if (!rowDefs.length && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTableMissingMatchingRowDefError(data);
    }
    return rowDefs;
  }
  _getEmbeddedViewArgs(renderRow, index) {
    const rowDef = renderRow.rowDef;
    const context = {
      $implicit: renderRow.data
    };
    return {
      templateRef: rowDef.template,
      context,
      index
    };
  }
  /**
   * Creates a new row template in the outlet and fills it with the set of cell templates.
   * Optionally takes a context to provide to the row and cells, as well as an optional index
   * of where to place the new row template in the outlet.
   */
  _renderRow(outlet, rowDef, index, context = {}) {
    const view = outlet.viewContainer.createEmbeddedView(rowDef.template, context, index);
    this._renderCellTemplateForItem(rowDef, context);
    return view;
  }
  _renderCellTemplateForItem(rowDef, context) {
    for (let cellTemplate of this._getCellTemplates(rowDef)) {
      if (CdkCellOutlet.mostRecentCellOutlet) {
        CdkCellOutlet.mostRecentCellOutlet._viewContainer.createEmbeddedView(cellTemplate, context);
      }
    }
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Updates the index-related context for each row to reflect any changes in the index of the rows,
   * e.g. first/last/even/odd.
   */
  _updateRowIndexContext() {
    const viewContainer = this._rowOutlet.viewContainer;
    for (let renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
      const viewRef = viewContainer.get(renderIndex);
      const context = viewRef.context;
      context.count = count;
      context.first = renderIndex === 0;
      context.last = renderIndex === count - 1;
      context.even = renderIndex % 2 === 0;
      context.odd = !context.even;
      if (this.multiTemplateDataRows) {
        context.dataIndex = this._renderRows[renderIndex].dataIndex;
        context.renderIndex = renderIndex;
      } else {
        context.index = this._renderRows[renderIndex].dataIndex;
      }
    }
  }
  /** Gets the column definitions for the provided row def. */
  _getCellTemplates(rowDef) {
    if (!rowDef || !rowDef.columns) {
      return [];
    }
    return Array.from(rowDef.columns, (columnId) => {
      const column = this._columnDefsByName.get(columnId);
      if (!column && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw getTableUnknownColumnError(columnId);
      }
      return rowDef.extractCellTemplate(column);
    });
  }
  /**
   * Forces a re-render of the data rows. Should be called in cases where there has been an input
   * change that affects the evaluation of which rows should be rendered, e.g. toggling
   * `multiTemplateDataRows` or adding/removing row definitions.
   */
  _forceRenderDataRows() {
    this._dataDiffer.diff([]);
    this._rowOutlet.viewContainer.clear();
    this.renderRows();
  }
  /**
   * Checks if there has been a change in sticky states since last check and applies the correct
   * sticky styles. Since checking resets the "dirty" state, this should only be performed once
   * during a change detection and after the inputs are settled (after content check).
   */
  _checkStickyStates() {
    const stickyCheckReducer = (acc, d2) => {
      return acc || d2.hasStickyChanged();
    };
    if (this._headerRowDefs.reduce(stickyCheckReducer, false)) {
      this.updateStickyHeaderRowStyles();
    }
    if (this._footerRowDefs.reduce(stickyCheckReducer, false)) {
      this.updateStickyFooterRowStyles();
    }
    if (Array.from(this._columnDefsByName.values()).reduce(stickyCheckReducer, false)) {
      this._stickyColumnStylesNeedReset = true;
      this.updateStickyColumnStyles();
    }
  }
  /**
   * Creates the sticky styler that will be used for sticky rows and columns. Listens
   * for directionality changes and provides the latest direction to the styler. Re-applies column
   * stickiness when directionality changes.
   */
  _setupStickyStyler() {
    const direction = this._dir ? this._dir.value : "ltr";
    this._stickyStyler = new StickyStyler(this._isNativeHtmlTable, this.stickyCssClass, direction, this._coalescedStyleScheduler, this._platform.isBrowser, this.needsPositionStickyOnElement, this._stickyPositioningListener);
    (this._dir ? this._dir.change : of()).pipe(takeUntil(this._onDestroy)).subscribe((value) => {
      this._stickyStyler.direction = value;
      this.updateStickyColumnStyles();
    });
  }
  /** Filters definitions that belong to this table from a QueryList. */
  _getOwnDefs(items) {
    return items.filter((item) => !item._table || item._table === this);
  }
  /** Creates or removes the no data row, depending on whether any data is being shown. */
  _updateNoDataRow() {
    const noDataRow = this._customNoDataRow || this._noDataRow;
    if (!noDataRow) {
      return;
    }
    const shouldShow = this._rowOutlet.viewContainer.length === 0;
    if (shouldShow === this._isShowingNoDataRow) {
      return;
    }
    const container = this._noDataRowOutlet.viewContainer;
    if (shouldShow) {
      const view = container.createEmbeddedView(noDataRow.templateRef);
      const rootNode = view.rootNodes[0];
      if (view.rootNodes.length === 1 && rootNode?.nodeType === this._document.ELEMENT_NODE) {
        rootNode.setAttribute("role", "row");
        rootNode.classList.add(noDataRow._contentClassName);
      }
    } else {
      container.clear();
    }
    this._isShowingNoDataRow = shouldShow;
    this._changeDetectorRef.markForCheck();
  }
};
_CdkTable.\u0275fac = function CdkTable_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkTable)(\u0275\u0275directiveInject(IterableDiffers), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275injectAttribute("role"), \u0275\u0275directiveInject(Directionality, 8), \u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(Platform), \u0275\u0275directiveInject(_VIEW_REPEATER_STRATEGY), \u0275\u0275directiveInject(_COALESCED_STYLE_SCHEDULER), \u0275\u0275directiveInject(ViewportRuler), \u0275\u0275directiveInject(STICKY_POSITIONING_LISTENER, 12), \u0275\u0275directiveInject(NgZone, 8));
};
_CdkTable.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CdkTable,
  selectors: [["cdk-table"], ["table", "cdk-table", ""]],
  contentQueries: function CdkTable_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, CdkNoDataRow, 5);
      \u0275\u0275contentQuery(dirIndex, CdkColumnDef, 5);
      \u0275\u0275contentQuery(dirIndex, CdkRowDef, 5);
      \u0275\u0275contentQuery(dirIndex, CdkHeaderRowDef, 5);
      \u0275\u0275contentQuery(dirIndex, CdkFooterRowDef, 5);
    }
    if (rf & 2) {
      let _t2;
      \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx._noDataRow = _t2.first);
      \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx._contentColumnDefs = _t2);
      \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx._contentRowDefs = _t2);
      \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx._contentHeaderRowDefs = _t2);
      \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx._contentFooterRowDefs = _t2);
    }
  },
  hostAttrs: [1, "cdk-table"],
  hostVars: 2,
  hostBindings: function CdkTable_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("cdk-table-fixed-layout", ctx.fixedLayout);
    }
  },
  inputs: {
    trackBy: "trackBy",
    dataSource: "dataSource",
    multiTemplateDataRows: [2, "multiTemplateDataRows", "multiTemplateDataRows", booleanAttribute],
    fixedLayout: [2, "fixedLayout", "fixedLayout", booleanAttribute]
  },
  outputs: {
    contentChanged: "contentChanged"
  },
  exportAs: ["cdkTable"],
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([
    {
      provide: CDK_TABLE,
      useExisting: _CdkTable
    },
    {
      provide: _VIEW_REPEATER_STRATEGY,
      useClass: _DisposeViewRepeaterStrategy
    },
    {
      provide: _COALESCED_STYLE_SCHEDULER,
      useClass: _CoalescedStyleScheduler
    },
    // Prevent nested tables from seeing this table's StickyPositioningListener.
    {
      provide: STICKY_POSITIONING_LISTENER,
      useValue: null
    }
  ]), \u0275\u0275InputTransformsFeature, \u0275\u0275StandaloneFeature],
  ngContentSelectors: _c14,
  decls: 5,
  vars: 2,
  consts: [["role", "rowgroup"], ["headerRowOutlet", ""], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]],
  template: function CdkTable_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c04);
      \u0275\u0275projection(0);
      \u0275\u0275projection(1, 1);
      \u0275\u0275template(2, CdkTable_Conditional_2_Template, 1, 0)(3, CdkTable_Conditional_3_Template, 7, 0)(4, CdkTable_Conditional_4_Template, 4, 0);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx._isServer ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx._isNativeHtmlTable ? 3 : 4);
    }
  },
  dependencies: [HeaderRowOutlet, DataRowOutlet, NoDataRowOutlet, FooterRowOutlet],
  styles: [".cdk-table-fixed-layout{table-layout:fixed}"],
  encapsulation: 2
});
var CdkTable = _CdkTable;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTable, [{
    type: Component,
    args: [{
      selector: "cdk-table, table[cdk-table]",
      exportAs: "cdkTable",
      template: CDK_TABLE_TEMPLATE,
      host: {
        "class": "cdk-table",
        "[class.cdk-table-fixed-layout]": "fixedLayout"
      },
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [
        {
          provide: CDK_TABLE,
          useExisting: CdkTable
        },
        {
          provide: _VIEW_REPEATER_STRATEGY,
          useClass: _DisposeViewRepeaterStrategy
        },
        {
          provide: _COALESCED_STYLE_SCHEDULER,
          useClass: _CoalescedStyleScheduler
        },
        // Prevent nested tables from seeing this table's StickyPositioningListener.
        {
          provide: STICKY_POSITIONING_LISTENER,
          useValue: null
        }
      ],
      standalone: true,
      imports: [HeaderRowOutlet, DataRowOutlet, NoDataRowOutlet, FooterRowOutlet],
      styles: [".cdk-table-fixed-layout{table-layout:fixed}"]
    }]
  }], () => [{
    type: IterableDiffers
  }, {
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["role"]
    }]
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Platform
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [_VIEW_REPEATER_STRATEGY]
    }]
  }, {
    type: _CoalescedStyleScheduler,
    decorators: [{
      type: Inject,
      args: [_COALESCED_STYLE_SCHEDULER]
    }]
  }, {
    type: ViewportRuler
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: SkipSelf
    }, {
      type: Inject,
      args: [STICKY_POSITIONING_LISTENER]
    }]
  }, {
    type: NgZone,
    decorators: [{
      type: Optional
    }]
  }], {
    trackBy: [{
      type: Input
    }],
    dataSource: [{
      type: Input
    }],
    multiTemplateDataRows: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    fixedLayout: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    contentChanged: [{
      type: Output
    }],
    _contentColumnDefs: [{
      type: ContentChildren,
      args: [CdkColumnDef, {
        descendants: true
      }]
    }],
    _contentRowDefs: [{
      type: ContentChildren,
      args: [CdkRowDef, {
        descendants: true
      }]
    }],
    _contentHeaderRowDefs: [{
      type: ContentChildren,
      args: [CdkHeaderRowDef, {
        descendants: true
      }]
    }],
    _contentFooterRowDefs: [{
      type: ContentChildren,
      args: [CdkFooterRowDef, {
        descendants: true
      }]
    }],
    _noDataRow: [{
      type: ContentChild,
      args: [CdkNoDataRow]
    }]
  });
})();
function mergeArrayAndSet(array, set) {
  return array.concat(Array.from(set));
}
function closestTableSection(outlet, section) {
  const uppercaseSection = section.toUpperCase();
  let current = outlet.viewContainer.element.nativeElement;
  while (current) {
    const nodeName = current.nodeType === 1 ? current.nodeName : null;
    if (nodeName === uppercaseSection) {
      return current;
    } else if (nodeName === "TABLE") {
      break;
    }
    current = current.parentNode;
  }
  return null;
}
var _CdkTextColumn = class _CdkTextColumn {
  /** Column name that should be used to reference this column. */
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
    this._syncColumnDefName();
  }
  constructor(_table, _options) {
    this._table = _table;
    this._options = _options;
    this.justify = "start";
    this._options = _options || {};
  }
  ngOnInit() {
    this._syncColumnDefName();
    if (this.headerText === void 0) {
      this.headerText = this._createDefaultHeaderText();
    }
    if (!this.dataAccessor) {
      this.dataAccessor = this._options.defaultDataAccessor || ((data, name) => data[name]);
    }
    if (this._table) {
      this.columnDef.cell = this.cell;
      this.columnDef.headerCell = this.headerCell;
      this._table.addColumnDef(this.columnDef);
    } else if (typeof ngDevMode === "undefined" || ngDevMode) {
      throw getTableTextColumnMissingParentTableError();
    }
  }
  ngOnDestroy() {
    if (this._table) {
      this._table.removeColumnDef(this.columnDef);
    }
  }
  /**
   * Creates a default header text. Use the options' header text transformation function if one
   * has been provided. Otherwise simply capitalize the column name.
   */
  _createDefaultHeaderText() {
    const name = this.name;
    if (!name && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTableTextColumnMissingNameError();
    }
    if (this._options && this._options.defaultHeaderTextTransform) {
      return this._options.defaultHeaderTextTransform(name);
    }
    return name[0].toUpperCase() + name.slice(1);
  }
  /** Synchronizes the column definition name with the text column name. */
  _syncColumnDefName() {
    if (this.columnDef) {
      this.columnDef.name = this.name;
    }
  }
};
_CdkTextColumn.\u0275fac = function CdkTextColumn_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkTextColumn)(\u0275\u0275directiveInject(CdkTable, 8), \u0275\u0275directiveInject(TEXT_COLUMN_OPTIONS, 8));
};
_CdkTextColumn.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CdkTextColumn,
  selectors: [["cdk-text-column"]],
  viewQuery: function CdkTextColumn_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(CdkColumnDef, 7);
      \u0275\u0275viewQuery(CdkCellDef, 7);
      \u0275\u0275viewQuery(CdkHeaderCellDef, 7);
    }
    if (rf & 2) {
      let _t2;
      \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.columnDef = _t2.first);
      \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.cell = _t2.first);
      \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.headerCell = _t2.first);
    }
  },
  inputs: {
    name: "name",
    headerText: "headerText",
    dataAccessor: "dataAccessor",
    justify: "justify"
  },
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  decls: 3,
  vars: 0,
  consts: [["cdkColumnDef", ""], ["cdk-header-cell", "", 3, "text-align", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 3, "text-align", 4, "cdkCellDef"], ["cdk-header-cell", ""], ["cdk-cell", ""]],
  template: function CdkTextColumn_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementContainerStart(0, 0);
      \u0275\u0275template(1, CdkTextColumn_th_1_Template, 2, 3, "th", 1)(2, CdkTextColumn_td_2_Template, 2, 3, "td", 2);
      \u0275\u0275elementContainerEnd();
    }
  },
  dependencies: [CdkColumnDef, CdkHeaderCellDef, CdkHeaderCell, CdkCellDef, CdkCell],
  encapsulation: 2
});
var CdkTextColumn = _CdkTextColumn;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTextColumn, [{
    type: Component,
    args: [{
      selector: "cdk-text-column",
      template: `
    <ng-container cdkColumnDef>
      <th cdk-header-cell *cdkHeaderCellDef [style.text-align]="justify">
        {{headerText}}
      </th>
      <td cdk-cell *cdkCellDef="let data" [style.text-align]="justify">
        {{dataAccessor(data, name)}}
      </td>
    </ng-container>
  `,
      encapsulation: ViewEncapsulation$1.None,
      // Change detection is intentionally not set to OnPush. This component's template will be provided
      // to the table to be inserted into its view. This is problematic when change detection runs since
      // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
      // mean's the template in the table's view will not have the updated value (and in fact will cause
      // an ExpressionChangedAfterItHasBeenCheckedError).
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      standalone: true,
      imports: [CdkColumnDef, CdkHeaderCellDef, CdkHeaderCell, CdkCellDef, CdkCell]
    }]
  }], () => [{
    type: CdkTable,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [TEXT_COLUMN_OPTIONS]
    }]
  }], {
    name: [{
      type: Input
    }],
    headerText: [{
      type: Input
    }],
    dataAccessor: [{
      type: Input
    }],
    justify: [{
      type: Input
    }],
    columnDef: [{
      type: ViewChild,
      args: [CdkColumnDef, {
        static: true
      }]
    }],
    cell: [{
      type: ViewChild,
      args: [CdkCellDef, {
        static: true
      }]
    }],
    headerCell: [{
      type: ViewChild,
      args: [CdkHeaderCellDef, {
        static: true
      }]
    }]
  });
})();
var EXPORTED_DECLARATIONS = [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn, CdkNoDataRow, CdkRecycleRows, NoDataRowOutlet];
var _CdkTableModule = class _CdkTableModule {
};
_CdkTableModule.\u0275fac = function CdkTableModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkTableModule)();
};
_CdkTableModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _CdkTableModule
});
_CdkTableModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [ScrollingModule]
});
var CdkTableModule = _CdkTableModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTableModule, [{
    type: NgModule,
    args: [{
      exports: EXPORTED_DECLARATIONS,
      imports: [ScrollingModule, ...EXPORTED_DECLARATIONS]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/keycodes.mjs
var BACKSPACE = 8;
var TAB = 9;
var ENTER = 13;
var SHIFT = 16;
var CONTROL = 17;
var ALT = 18;
var ESCAPE = 27;
var SPACE = 32;
var PAGE_UP = 33;
var PAGE_DOWN = 34;
var END = 35;
var HOME = 36;
var LEFT_ARROW = 37;
var UP_ARROW = 38;
var RIGHT_ARROW = 39;
var DOWN_ARROW = 40;
var DELETE = 46;
var ZERO = 48;
var NINE = 57;
var A2 = 65;
var Z2 = 90;
var META = 91;
var MAC_META = 224;
function hasModifierKey(event, ...modifiers) {
  if (modifiers.length) {
    return modifiers.some((modifier) => event[modifier]);
  }
  return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
}

// node_modules/@angular/cdk/fesm2022/coercion/private.mjs
function coerceObservable(data) {
  if (!isObservable(data)) {
    return of(data);
  }
  return data;
}

// node_modules/@angular/cdk/fesm2022/observers.mjs
function shouldIgnoreRecord(record) {
  if (record.type === "characterData" && record.target instanceof Comment) {
    return true;
  }
  if (record.type === "childList") {
    for (let i2 = 0; i2 < record.addedNodes.length; i2++) {
      if (!(record.addedNodes[i2] instanceof Comment)) {
        return false;
      }
    }
    for (let i2 = 0; i2 < record.removedNodes.length; i2++) {
      if (!(record.removedNodes[i2] instanceof Comment)) {
        return false;
      }
    }
    return true;
  }
  return false;
}
var _MutationObserverFactory = class _MutationObserverFactory {
  create(callback) {
    return typeof MutationObserver === "undefined" ? null : new MutationObserver(callback);
  }
};
_MutationObserverFactory.\u0275fac = function MutationObserverFactory_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MutationObserverFactory)();
};
_MutationObserverFactory.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _MutationObserverFactory,
  factory: _MutationObserverFactory.\u0275fac,
  providedIn: "root"
});
var MutationObserverFactory = _MutationObserverFactory;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MutationObserverFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _ContentObserver = class _ContentObserver {
  constructor(_mutationObserverFactory) {
    this._mutationObserverFactory = _mutationObserverFactory;
    this._observedElements = /* @__PURE__ */ new Map();
    this._ngZone = inject(NgZone);
  }
  ngOnDestroy() {
    this._observedElements.forEach((_2, element) => this._cleanupObserver(element));
  }
  observe(elementOrRef) {
    const element = coerceElement(elementOrRef);
    return new Observable((observer) => {
      const stream = this._observeElement(element);
      const subscription = stream.pipe(map((records) => records.filter((record) => !shouldIgnoreRecord(record))), filter((records) => !!records.length)).subscribe((records) => {
        this._ngZone.run(() => {
          observer.next(records);
        });
      });
      return () => {
        subscription.unsubscribe();
        this._unobserveElement(element);
      };
    });
  }
  /**
   * Observes the given element by using the existing MutationObserver if available, or creating a
   * new one if not.
   */
  _observeElement(element) {
    return this._ngZone.runOutsideAngular(() => {
      if (!this._observedElements.has(element)) {
        const stream = new Subject();
        const observer = this._mutationObserverFactory.create((mutations) => stream.next(mutations));
        if (observer) {
          observer.observe(element, {
            characterData: true,
            childList: true,
            subtree: true
          });
        }
        this._observedElements.set(element, {
          observer,
          stream,
          count: 1
        });
      } else {
        this._observedElements.get(element).count++;
      }
      return this._observedElements.get(element).stream;
    });
  }
  /**
   * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
   * observing this element.
   */
  _unobserveElement(element) {
    if (this._observedElements.has(element)) {
      this._observedElements.get(element).count--;
      if (!this._observedElements.get(element).count) {
        this._cleanupObserver(element);
      }
    }
  }
  /** Clean up the underlying MutationObserver for the specified element. */
  _cleanupObserver(element) {
    if (this._observedElements.has(element)) {
      const {
        observer,
        stream
      } = this._observedElements.get(element);
      if (observer) {
        observer.disconnect();
      }
      stream.complete();
      this._observedElements.delete(element);
    }
  }
};
_ContentObserver.\u0275fac = function ContentObserver_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ContentObserver)(\u0275\u0275inject(MutationObserverFactory));
};
_ContentObserver.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ContentObserver,
  factory: _ContentObserver.\u0275fac,
  providedIn: "root"
});
var ContentObserver = _ContentObserver;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContentObserver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: MutationObserverFactory
  }], null);
})();
var _CdkObserveContent = class _CdkObserveContent {
  /**
   * Whether observing content is disabled. This option can be used
   * to disconnect the underlying MutationObserver until it is needed.
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._disabled ? this._unsubscribe() : this._subscribe();
  }
  /** Debounce interval for emitting the changes. */
  get debounce() {
    return this._debounce;
  }
  set debounce(value) {
    this._debounce = coerceNumberProperty(value);
    this._subscribe();
  }
  constructor(_contentObserver, _elementRef) {
    this._contentObserver = _contentObserver;
    this._elementRef = _elementRef;
    this.event = new EventEmitter();
    this._disabled = false;
    this._currentSubscription = null;
  }
  ngAfterContentInit() {
    if (!this._currentSubscription && !this.disabled) {
      this._subscribe();
    }
  }
  ngOnDestroy() {
    this._unsubscribe();
  }
  _subscribe() {
    this._unsubscribe();
    const stream = this._contentObserver.observe(this._elementRef);
    this._currentSubscription = (this.debounce ? stream.pipe(debounceTime(this.debounce)) : stream).subscribe(this.event);
  }
  _unsubscribe() {
    this._currentSubscription?.unsubscribe();
  }
};
_CdkObserveContent.\u0275fac = function CdkObserveContent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkObserveContent)(\u0275\u0275directiveInject(ContentObserver), \u0275\u0275directiveInject(ElementRef));
};
_CdkObserveContent.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkObserveContent,
  selectors: [["", "cdkObserveContent", ""]],
  inputs: {
    disabled: [2, "cdkObserveContentDisabled", "disabled", booleanAttribute],
    debounce: "debounce"
  },
  outputs: {
    event: "cdkObserveContent"
  },
  exportAs: ["cdkObserveContent"],
  standalone: true,
  features: [\u0275\u0275InputTransformsFeature]
});
var CdkObserveContent = _CdkObserveContent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkObserveContent, [{
    type: Directive,
    args: [{
      selector: "[cdkObserveContent]",
      exportAs: "cdkObserveContent",
      standalone: true
    }]
  }], () => [{
    type: ContentObserver
  }, {
    type: ElementRef
  }], {
    event: [{
      type: Output,
      args: ["cdkObserveContent"]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkObserveContentDisabled",
        transform: booleanAttribute
      }]
    }],
    debounce: [{
      type: Input
    }]
  });
})();
var _ObserversModule = class _ObserversModule {
};
_ObserversModule.\u0275fac = function ObserversModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ObserversModule)();
};
_ObserversModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _ObserversModule
});
_ObserversModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [MutationObserverFactory]
});
var ObserversModule = _ObserversModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ObserversModule, [{
    type: NgModule,
    args: [{
      imports: [CdkObserveContent],
      exports: [CdkObserveContent],
      providers: [MutationObserverFactory]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/layout.mjs
var _LayoutModule = class _LayoutModule {
};
_LayoutModule.\u0275fac = function LayoutModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LayoutModule)();
};
_LayoutModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _LayoutModule
});
_LayoutModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var LayoutModule = _LayoutModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();
var mediaQueriesForWebkitCompatibility = /* @__PURE__ */ new Set();
var mediaQueryStyleNode;
var _MediaMatcher = class _MediaMatcher {
  constructor(_platform, _nonce) {
    this._platform = _platform;
    this._nonce = _nonce;
    this._matchMedia = this._platform.isBrowser && window.matchMedia ? (
      // matchMedia is bound to the window scope intentionally as it is an illegal invocation to
      // call it from a different scope.
      window.matchMedia.bind(window)
    ) : noopMatchMedia;
  }
  /**
   * Evaluates the given media query and returns the native MediaQueryList from which results
   * can be retrieved.
   * Confirms the layout engine will trigger for the selector query provided and returns the
   * MediaQueryList for the query provided.
   */
  matchMedia(query) {
    if (this._platform.WEBKIT || this._platform.BLINK) {
      createEmptyStyleRule(query, this._nonce);
    }
    return this._matchMedia(query);
  }
};
_MediaMatcher.\u0275fac = function MediaMatcher_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MediaMatcher)(\u0275\u0275inject(Platform), \u0275\u0275inject(CSP_NONCE, 8));
};
_MediaMatcher.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _MediaMatcher,
  factory: _MediaMatcher.\u0275fac,
  providedIn: "root"
});
var MediaMatcher = _MediaMatcher;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MediaMatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Platform
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CSP_NONCE]
    }]
  }], null);
})();
function createEmptyStyleRule(query, nonce) {
  if (mediaQueriesForWebkitCompatibility.has(query)) {
    return;
  }
  try {
    if (!mediaQueryStyleNode) {
      mediaQueryStyleNode = document.createElement("style");
      if (nonce) {
        mediaQueryStyleNode.setAttribute("nonce", nonce);
      }
      mediaQueryStyleNode.setAttribute("type", "text/css");
      document.head.appendChild(mediaQueryStyleNode);
    }
    if (mediaQueryStyleNode.sheet) {
      mediaQueryStyleNode.sheet.insertRule(`@media ${query} {body{ }}`, 0);
      mediaQueriesForWebkitCompatibility.add(query);
    }
  } catch (e2) {
    console.error(e2);
  }
}
function noopMatchMedia(query) {
  return {
    matches: query === "all" || query === "",
    media: query,
    addListener: () => {
    },
    removeListener: () => {
    }
  };
}
var _BreakpointObserver = class _BreakpointObserver {
  constructor(_mediaMatcher, _zone) {
    this._mediaMatcher = _mediaMatcher;
    this._zone = _zone;
    this._queries = /* @__PURE__ */ new Map();
    this._destroySubject = new Subject();
  }
  /** Completes the active subject, signalling to all other observables to complete. */
  ngOnDestroy() {
    this._destroySubject.next();
    this._destroySubject.complete();
  }
  /**
   * Whether one or more media queries match the current viewport size.
   * @param value One or more media queries to check.
   * @returns Whether any of the media queries match.
   */
  isMatched(value) {
    const queries = splitQueries(coerceArray(value));
    return queries.some((mediaQuery) => this._registerQuery(mediaQuery).mql.matches);
  }
  /**
   * Gets an observable of results for the given queries that will emit new results for any changes
   * in matching of the given queries.
   * @param value One or more media queries to check.
   * @returns A stream of matches for the given queries.
   */
  observe(value) {
    const queries = splitQueries(coerceArray(value));
    const observables = queries.map((query) => this._registerQuery(query).observable);
    let stateObservable = combineLatest(observables);
    stateObservable = concat(stateObservable.pipe(take(1)), stateObservable.pipe(skip(1), debounceTime(0)));
    return stateObservable.pipe(map((breakpointStates) => {
      const response = {
        matches: false,
        breakpoints: {}
      };
      breakpointStates.forEach(({
        matches,
        query
      }) => {
        response.matches = response.matches || matches;
        response.breakpoints[query] = matches;
      });
      return response;
    }));
  }
  /** Registers a specific query to be listened for. */
  _registerQuery(query) {
    if (this._queries.has(query)) {
      return this._queries.get(query);
    }
    const mql = this._mediaMatcher.matchMedia(query);
    const queryObservable = new Observable((observer) => {
      const handler = (e2) => this._zone.run(() => observer.next(e2));
      mql.addListener(handler);
      return () => {
        mql.removeListener(handler);
      };
    }).pipe(startWith(mql), map(({
      matches
    }) => ({
      query,
      matches
    })), takeUntil(this._destroySubject));
    const output = {
      observable: queryObservable,
      mql
    };
    this._queries.set(query, output);
    return output;
  }
};
_BreakpointObserver.\u0275fac = function BreakpointObserver_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BreakpointObserver)(\u0275\u0275inject(MediaMatcher), \u0275\u0275inject(NgZone));
};
_BreakpointObserver.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _BreakpointObserver,
  factory: _BreakpointObserver.\u0275fac,
  providedIn: "root"
});
var BreakpointObserver = _BreakpointObserver;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreakpointObserver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: MediaMatcher
  }, {
    type: NgZone
  }], null);
})();
function splitQueries(queries) {
  return queries.map((query) => query.split(",")).reduce((a1, a2) => a1.concat(a2)).map((query) => query.trim());
}
var Breakpoints = {
  XSmall: "(max-width: 599.98px)",
  Small: "(min-width: 600px) and (max-width: 959.98px)",
  Medium: "(min-width: 960px) and (max-width: 1279.98px)",
  Large: "(min-width: 1280px) and (max-width: 1919.98px)",
  XLarge: "(min-width: 1920px)",
  Handset: "(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",
  Tablet: "(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",
  Web: "(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",
  HandsetPortrait: "(max-width: 599.98px) and (orientation: portrait)",
  TabletPortrait: "(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",
  WebPortrait: "(min-width: 840px) and (orientation: portrait)",
  HandsetLandscape: "(max-width: 959.98px) and (orientation: landscape)",
  TabletLandscape: "(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",
  WebLandscape: "(min-width: 1280px) and (orientation: landscape)"
};

// node_modules/@angular/cdk/fesm2022/a11y.mjs
var ID_DELIMITER = " ";
function addAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);
  id = id.trim();
  if (ids.some((existingId) => existingId.trim() === id)) {
    return;
  }
  ids.push(id);
  el.setAttribute(attr, ids.join(ID_DELIMITER));
}
function removeAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);
  id = id.trim();
  const filteredIds = ids.filter((val) => val !== id);
  if (filteredIds.length) {
    el.setAttribute(attr, filteredIds.join(ID_DELIMITER));
  } else {
    el.removeAttribute(attr);
  }
}
function getAriaReferenceIds(el, attr) {
  const attrValue = el.getAttribute(attr);
  return attrValue?.match(/\S+/g) ?? [];
}
var CDK_DESCRIBEDBY_ID_PREFIX = "cdk-describedby-message";
var CDK_DESCRIBEDBY_HOST_ATTRIBUTE = "cdk-describedby-host";
var nextId = 0;
var _AriaDescriber = class _AriaDescriber {
  constructor(_document, _platform) {
    this._platform = _platform;
    this._messageRegistry = /* @__PURE__ */ new Map();
    this._messagesContainer = null;
    this._id = `${nextId++}`;
    this._document = _document;
    this._id = inject(APP_ID) + "-" + nextId++;
  }
  describe(hostElement, message, role) {
    if (!this._canBeDescribed(hostElement, message)) {
      return;
    }
    const key = getKey(message, role);
    if (typeof message !== "string") {
      setMessageId(message, this._id);
      this._messageRegistry.set(key, {
        messageElement: message,
        referenceCount: 0
      });
    } else if (!this._messageRegistry.has(key)) {
      this._createMessageElement(message, role);
    }
    if (!this._isElementDescribedByMessage(hostElement, key)) {
      this._addMessageReference(hostElement, key);
    }
  }
  removeDescription(hostElement, message, role) {
    if (!message || !this._isElementNode(hostElement)) {
      return;
    }
    const key = getKey(message, role);
    if (this._isElementDescribedByMessage(hostElement, key)) {
      this._removeMessageReference(hostElement, key);
    }
    if (typeof message === "string") {
      const registeredMessage = this._messageRegistry.get(key);
      if (registeredMessage && registeredMessage.referenceCount === 0) {
        this._deleteMessageElement(key);
      }
    }
    if (this._messagesContainer?.childNodes.length === 0) {
      this._messagesContainer.remove();
      this._messagesContainer = null;
    }
  }
  /** Unregisters all created message elements and removes the message container. */
  ngOnDestroy() {
    const describedElements = this._document.querySelectorAll(`[${CDK_DESCRIBEDBY_HOST_ATTRIBUTE}="${this._id}"]`);
    for (let i2 = 0; i2 < describedElements.length; i2++) {
      this._removeCdkDescribedByReferenceIds(describedElements[i2]);
      describedElements[i2].removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
    }
    this._messagesContainer?.remove();
    this._messagesContainer = null;
    this._messageRegistry.clear();
  }
  /**
   * Creates a new element in the visually hidden message container element with the message
   * as its content and adds it to the message registry.
   */
  _createMessageElement(message, role) {
    const messageElement = this._document.createElement("div");
    setMessageId(messageElement, this._id);
    messageElement.textContent = message;
    if (role) {
      messageElement.setAttribute("role", role);
    }
    this._createMessagesContainer();
    this._messagesContainer.appendChild(messageElement);
    this._messageRegistry.set(getKey(message, role), {
      messageElement,
      referenceCount: 0
    });
  }
  /** Deletes the message element from the global messages container. */
  _deleteMessageElement(key) {
    this._messageRegistry.get(key)?.messageElement?.remove();
    this._messageRegistry.delete(key);
  }
  /** Creates the global container for all aria-describedby messages. */
  _createMessagesContainer() {
    if (this._messagesContainer) {
      return;
    }
    const containerClassName = "cdk-describedby-message-container";
    const serverContainers = this._document.querySelectorAll(`.${containerClassName}[platform="server"]`);
    for (let i2 = 0; i2 < serverContainers.length; i2++) {
      serverContainers[i2].remove();
    }
    const messagesContainer = this._document.createElement("div");
    messagesContainer.style.visibility = "hidden";
    messagesContainer.classList.add(containerClassName);
    messagesContainer.classList.add("cdk-visually-hidden");
    if (this._platform && !this._platform.isBrowser) {
      messagesContainer.setAttribute("platform", "server");
    }
    this._document.body.appendChild(messagesContainer);
    this._messagesContainer = messagesContainer;
  }
  /** Removes all cdk-describedby messages that are hosted through the element. */
  _removeCdkDescribedByReferenceIds(element) {
    const originalReferenceIds = getAriaReferenceIds(element, "aria-describedby").filter((id) => id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX) != 0);
    element.setAttribute("aria-describedby", originalReferenceIds.join(" "));
  }
  /**
   * Adds a message reference to the element using aria-describedby and increments the registered
   * message's reference count.
   */
  _addMessageReference(element, key) {
    const registeredMessage = this._messageRegistry.get(key);
    addAriaReferencedId(element, "aria-describedby", registeredMessage.messageElement.id);
    element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, this._id);
    registeredMessage.referenceCount++;
  }
  /**
   * Removes a message reference from the element using aria-describedby
   * and decrements the registered message's reference count.
   */
  _removeMessageReference(element, key) {
    const registeredMessage = this._messageRegistry.get(key);
    registeredMessage.referenceCount--;
    removeAriaReferencedId(element, "aria-describedby", registeredMessage.messageElement.id);
    element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
  }
  /** Returns true if the element has been described by the provided message ID. */
  _isElementDescribedByMessage(element, key) {
    const referenceIds = getAriaReferenceIds(element, "aria-describedby");
    const registeredMessage = this._messageRegistry.get(key);
    const messageId = registeredMessage && registeredMessage.messageElement.id;
    return !!messageId && referenceIds.indexOf(messageId) != -1;
  }
  /** Determines whether a message can be described on a particular element. */
  _canBeDescribed(element, message) {
    if (!this._isElementNode(element)) {
      return false;
    }
    if (message && typeof message === "object") {
      return true;
    }
    const trimmedMessage = message == null ? "" : `${message}`.trim();
    const ariaLabel = element.getAttribute("aria-label");
    return trimmedMessage ? !ariaLabel || ariaLabel.trim() !== trimmedMessage : false;
  }
  /** Checks whether a node is an Element node. */
  _isElementNode(element) {
    return element.nodeType === this._document.ELEMENT_NODE;
  }
};
_AriaDescriber.\u0275fac = function AriaDescriber_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AriaDescriber)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(Platform));
};
_AriaDescriber.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _AriaDescriber,
  factory: _AriaDescriber.\u0275fac,
  providedIn: "root"
});
var AriaDescriber = _AriaDescriber;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AriaDescriber, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Platform
  }], null);
})();
function getKey(message, role) {
  return typeof message === "string" ? `${role || ""}/${message}` : message;
}
function setMessageId(element, serviceId) {
  if (!element.id) {
    element.id = `${CDK_DESCRIBEDBY_ID_PREFIX}-${serviceId}-${nextId++}`;
  }
}
var DEFAULT_TYPEAHEAD_DEBOUNCE_INTERVAL_MS = 200;
var Typeahead = class {
  constructor(initialItems, config) {
    this._letterKeyStream = new Subject();
    this._items = [];
    this._selectedItemIndex = -1;
    this._pressedLetters = [];
    this._selectedItem = new Subject();
    this.selectedItem = this._selectedItem;
    const typeAheadInterval = typeof config?.debounceInterval === "number" ? config.debounceInterval : DEFAULT_TYPEAHEAD_DEBOUNCE_INTERVAL_MS;
    if (config?.skipPredicate) {
      this._skipPredicateFn = config.skipPredicate;
    }
    if ((typeof ngDevMode === "undefined" || ngDevMode) && initialItems.length && initialItems.some((item) => typeof item.getLabel !== "function")) {
      throw new Error("KeyManager items in typeahead mode must implement the `getLabel` method.");
    }
    this.setItems(initialItems);
    this._setupKeyHandler(typeAheadInterval);
  }
  destroy() {
    this._pressedLetters = [];
    this._letterKeyStream.complete();
    this._selectedItem.complete();
  }
  setCurrentSelectedItemIndex(index) {
    this._selectedItemIndex = index;
  }
  setItems(items) {
    this._items = items;
  }
  handleKey(event) {
    const keyCode = event.keyCode;
    if (event.key && event.key.length === 1) {
      this._letterKeyStream.next(event.key.toLocaleUpperCase());
    } else if (keyCode >= A2 && keyCode <= Z2 || keyCode >= ZERO && keyCode <= NINE) {
      this._letterKeyStream.next(String.fromCharCode(keyCode));
    }
  }
  /** Gets whether the user is currently typing into the manager using the typeahead feature. */
  isTyping() {
    return this._pressedLetters.length > 0;
  }
  /** Resets the currently stored sequence of typed letters. */
  reset() {
    this._pressedLetters = [];
  }
  _setupKeyHandler(typeAheadInterval) {
    this._letterKeyStream.pipe(tap((letter) => this._pressedLetters.push(letter)), debounceTime(typeAheadInterval), filter(() => this._pressedLetters.length > 0), map(() => this._pressedLetters.join("").toLocaleUpperCase())).subscribe((inputString) => {
      for (let i2 = 1; i2 < this._items.length + 1; i2++) {
        const index = (this._selectedItemIndex + i2) % this._items.length;
        const item = this._items[index];
        if (!this._skipPredicateFn?.(item) && item.getLabel?.().toLocaleUpperCase().trim().indexOf(inputString) === 0) {
          this._selectedItem.next(item);
          break;
        }
      }
      this._pressedLetters = [];
    });
  }
};
var ListKeyManager = class {
  constructor(_items, injector) {
    this._items = _items;
    this._activeItemIndex = -1;
    this._activeItem = null;
    this._wrap = false;
    this._typeaheadSubscription = Subscription.EMPTY;
    this._vertical = true;
    this._allowedModifierKeys = [];
    this._homeAndEnd = false;
    this._pageUpAndDown = {
      enabled: false,
      delta: 10
    };
    this._skipPredicateFn = (item) => item.disabled;
    this.tabOut = new Subject();
    this.change = new Subject();
    if (_items instanceof QueryList) {
      this._itemChangesSubscription = _items.changes.subscribe((newItems) => this._itemsChanged(newItems.toArray()));
    } else if (isSignal(_items)) {
      if (!injector && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw new Error("ListKeyManager constructed with a signal must receive an injector");
      }
      this._effectRef = effect(() => this._itemsChanged(_items()), {
        injector
      });
    }
  }
  /**
   * Sets the predicate function that determines which items should be skipped by the
   * list key manager.
   * @param predicate Function that determines whether the given item should be skipped.
   */
  skipPredicate(predicate) {
    this._skipPredicateFn = predicate;
    return this;
  }
  /**
   * Configures wrapping mode, which determines whether the active item will wrap to
   * the other end of list when there are no more items in the given direction.
   * @param shouldWrap Whether the list should wrap when reaching the end.
   */
  withWrap(shouldWrap = true) {
    this._wrap = shouldWrap;
    return this;
  }
  /**
   * Configures whether the key manager should be able to move the selection vertically.
   * @param enabled Whether vertical selection should be enabled.
   */
  withVerticalOrientation(enabled = true) {
    this._vertical = enabled;
    return this;
  }
  /**
   * Configures the key manager to move the selection horizontally.
   * Passing in `null` will disable horizontal movement.
   * @param direction Direction in which the selection can be moved.
   */
  withHorizontalOrientation(direction) {
    this._horizontal = direction;
    return this;
  }
  /**
   * Modifier keys which are allowed to be held down and whose default actions will be prevented
   * as the user is pressing the arrow keys. Defaults to not allowing any modifier keys.
   */
  withAllowedModifierKeys(keys2) {
    this._allowedModifierKeys = keys2;
    return this;
  }
  /**
   * Turns on typeahead mode which allows users to set the active item by typing.
   * @param debounceInterval Time to wait after the last keystroke before setting the active item.
   */
  withTypeAhead(debounceInterval = 200) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      const items2 = this._getItemsArray();
      if (items2.length > 0 && items2.some((item) => typeof item.getLabel !== "function")) {
        throw Error("ListKeyManager items in typeahead mode must implement the `getLabel` method.");
      }
    }
    this._typeaheadSubscription.unsubscribe();
    const items = this._getItemsArray();
    this._typeahead = new Typeahead(items, {
      debounceInterval: typeof debounceInterval === "number" ? debounceInterval : void 0,
      skipPredicate: (item) => this._skipPredicateFn(item)
    });
    this._typeaheadSubscription = this._typeahead.selectedItem.subscribe((item) => {
      this.setActiveItem(item);
    });
    return this;
  }
  /** Cancels the current typeahead sequence. */
  cancelTypeahead() {
    this._typeahead?.reset();
    return this;
  }
  /**
   * Configures the key manager to activate the first and last items
   * respectively when the Home or End key is pressed.
   * @param enabled Whether pressing the Home or End key activates the first/last item.
   */
  withHomeAndEnd(enabled = true) {
    this._homeAndEnd = enabled;
    return this;
  }
  /**
   * Configures the key manager to activate every 10th, configured or first/last element in up/down direction
   * respectively when the Page-Up or Page-Down key is pressed.
   * @param enabled Whether pressing the Page-Up or Page-Down key activates the first/last item.
   * @param delta Whether pressing the Home or End key activates the first/last item.
   */
  withPageUpDown(enabled = true, delta = 10) {
    this._pageUpAndDown = {
      enabled,
      delta
    };
    return this;
  }
  setActiveItem(item) {
    const previousActiveItem = this._activeItem;
    this.updateActiveItem(item);
    if (this._activeItem !== previousActiveItem) {
      this.change.next(this._activeItemIndex);
    }
  }
  /**
   * Sets the active item depending on the key event passed in.
   * @param event Keyboard event to be used for determining which element should be active.
   */
  onKeydown(event) {
    const keyCode = event.keyCode;
    const modifiers = ["altKey", "ctrlKey", "metaKey", "shiftKey"];
    const isModifierAllowed = modifiers.every((modifier) => {
      return !event[modifier] || this._allowedModifierKeys.indexOf(modifier) > -1;
    });
    switch (keyCode) {
      case TAB:
        this.tabOut.next();
        return;
      case DOWN_ARROW:
        if (this._vertical && isModifierAllowed) {
          this.setNextItemActive();
          break;
        } else {
          return;
        }
      case UP_ARROW:
        if (this._vertical && isModifierAllowed) {
          this.setPreviousItemActive();
          break;
        } else {
          return;
        }
      case RIGHT_ARROW:
        if (this._horizontal && isModifierAllowed) {
          this._horizontal === "rtl" ? this.setPreviousItemActive() : this.setNextItemActive();
          break;
        } else {
          return;
        }
      case LEFT_ARROW:
        if (this._horizontal && isModifierAllowed) {
          this._horizontal === "rtl" ? this.setNextItemActive() : this.setPreviousItemActive();
          break;
        } else {
          return;
        }
      case HOME:
        if (this._homeAndEnd && isModifierAllowed) {
          this.setFirstItemActive();
          break;
        } else {
          return;
        }
      case END:
        if (this._homeAndEnd && isModifierAllowed) {
          this.setLastItemActive();
          break;
        } else {
          return;
        }
      case PAGE_UP:
        if (this._pageUpAndDown.enabled && isModifierAllowed) {
          const targetIndex = this._activeItemIndex - this._pageUpAndDown.delta;
          this._setActiveItemByIndex(targetIndex > 0 ? targetIndex : 0, 1);
          break;
        } else {
          return;
        }
      case PAGE_DOWN:
        if (this._pageUpAndDown.enabled && isModifierAllowed) {
          const targetIndex = this._activeItemIndex + this._pageUpAndDown.delta;
          const itemsLength = this._getItemsArray().length;
          this._setActiveItemByIndex(targetIndex < itemsLength ? targetIndex : itemsLength - 1, -1);
          break;
        } else {
          return;
        }
      default:
        if (isModifierAllowed || hasModifierKey(event, "shiftKey")) {
          this._typeahead?.handleKey(event);
        }
        return;
    }
    this._typeahead?.reset();
    event.preventDefault();
  }
  /** Index of the currently active item. */
  get activeItemIndex() {
    return this._activeItemIndex;
  }
  /** The active item. */
  get activeItem() {
    return this._activeItem;
  }
  /** Gets whether the user is currently typing into the manager using the typeahead feature. */
  isTyping() {
    return !!this._typeahead && this._typeahead.isTyping();
  }
  /** Sets the active item to the first enabled item in the list. */
  setFirstItemActive() {
    this._setActiveItemByIndex(0, 1);
  }
  /** Sets the active item to the last enabled item in the list. */
  setLastItemActive() {
    this._setActiveItemByIndex(this._getItemsArray().length - 1, -1);
  }
  /** Sets the active item to the next enabled item in the list. */
  setNextItemActive() {
    this._activeItemIndex < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
  }
  /** Sets the active item to a previous enabled item in the list. */
  setPreviousItemActive() {
    this._activeItemIndex < 0 && this._wrap ? this.setLastItemActive() : this._setActiveItemByDelta(-1);
  }
  updateActiveItem(item) {
    const itemArray = this._getItemsArray();
    const index = typeof item === "number" ? item : itemArray.indexOf(item);
    const activeItem = itemArray[index];
    this._activeItem = activeItem == null ? null : activeItem;
    this._activeItemIndex = index;
    this._typeahead?.setCurrentSelectedItemIndex(index);
  }
  /** Cleans up the key manager. */
  destroy() {
    this._typeaheadSubscription.unsubscribe();
    this._itemChangesSubscription?.unsubscribe();
    this._effectRef?.destroy();
    this._typeahead?.destroy();
    this.tabOut.complete();
    this.change.complete();
  }
  /**
   * This method sets the active item, given a list of items and the delta between the
   * currently active item and the new active item. It will calculate differently
   * depending on whether wrap mode is turned on.
   */
  _setActiveItemByDelta(delta) {
    this._wrap ? this._setActiveInWrapMode(delta) : this._setActiveInDefaultMode(delta);
  }
  /**
   * Sets the active item properly given "wrap" mode. In other words, it will continue to move
   * down the list until it finds an item that is not disabled, and it will wrap if it
   * encounters either end of the list.
   */
  _setActiveInWrapMode(delta) {
    const items = this._getItemsArray();
    for (let i2 = 1; i2 <= items.length; i2++) {
      const index = (this._activeItemIndex + delta * i2 + items.length) % items.length;
      const item = items[index];
      if (!this._skipPredicateFn(item)) {
        this.setActiveItem(index);
        return;
      }
    }
  }
  /**
   * Sets the active item properly given the default mode. In other words, it will
   * continue to move down the list until it finds an item that is not disabled. If
   * it encounters either end of the list, it will stop and not wrap.
   */
  _setActiveInDefaultMode(delta) {
    this._setActiveItemByIndex(this._activeItemIndex + delta, delta);
  }
  /**
   * Sets the active item to the first enabled item starting at the index specified. If the
   * item is disabled, it will move in the fallbackDelta direction until it either
   * finds an enabled item or encounters the end of the list.
   */
  _setActiveItemByIndex(index, fallbackDelta) {
    const items = this._getItemsArray();
    if (!items[index]) {
      return;
    }
    while (this._skipPredicateFn(items[index])) {
      index += fallbackDelta;
      if (!items[index]) {
        return;
      }
    }
    this.setActiveItem(index);
  }
  /** Returns the items as an array. */
  _getItemsArray() {
    if (isSignal(this._items)) {
      return this._items();
    }
    return this._items instanceof QueryList ? this._items.toArray() : this._items;
  }
  /** Callback for when the items have changed. */
  _itemsChanged(newItems) {
    this._typeahead?.setItems(newItems);
    if (this._activeItem) {
      const newIndex = newItems.indexOf(this._activeItem);
      if (newIndex > -1 && newIndex !== this._activeItemIndex) {
        this._activeItemIndex = newIndex;
        this._typeahead?.setCurrentSelectedItemIndex(newIndex);
      }
    }
  }
};
var ActiveDescendantKeyManager = class extends ListKeyManager {
  setActiveItem(index) {
    if (this.activeItem) {
      this.activeItem.setInactiveStyles();
    }
    super.setActiveItem(index);
    if (this.activeItem) {
      this.activeItem.setActiveStyles();
    }
  }
};
var FocusKeyManager = class extends ListKeyManager {
  constructor() {
    super(...arguments);
    this._origin = "program";
  }
  /**
   * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
   * @param origin Focus origin to be used when focusing items.
   */
  setFocusOrigin(origin) {
    this._origin = origin;
    return this;
  }
  setActiveItem(item) {
    super.setActiveItem(item);
    if (this.activeItem) {
      this.activeItem.focus(this._origin);
    }
  }
};
var TreeKeyManager = class {
  _initializeFocus() {
    if (this._hasInitialFocused || this._items.length === 0) {
      return;
    }
    let activeIndex = 0;
    for (let i2 = 0; i2 < this._items.length; i2++) {
      if (!this._skipPredicateFn(this._items[i2]) && !this._isItemDisabled(this._items[i2])) {
        activeIndex = i2;
        break;
      }
    }
    const activeItem = this._items[activeIndex];
    if (activeItem.makeFocusable) {
      this._activeItem?.unfocus();
      this._activeItemIndex = activeIndex;
      this._activeItem = activeItem;
      this._typeahead?.setCurrentSelectedItemIndex(activeIndex);
      activeItem.makeFocusable();
    } else {
      this.focusItem(activeIndex);
    }
    this._hasInitialFocused = true;
  }
  /**
   *
   * @param items List of TreeKeyManager options. Can be synchronous or asynchronous.
   * @param config Optional configuration options. By default, use 'ltr' horizontal orientation. By
   * default, do not skip any nodes. By default, key manager only calls `focus` method when items
   * are focused and does not call `activate`. If `typeaheadDefaultInterval` is `true`, use a
   * default interval of 200ms.
   */
  constructor(items, config) {
    this._activeItemIndex = -1;
    this._activeItem = null;
    this._shouldActivationFollowFocus = false;
    this._horizontalOrientation = "ltr";
    this._skipPredicateFn = (_item) => false;
    this._trackByFn = (item) => item;
    this._items = [];
    this._typeaheadSubscription = Subscription.EMPTY;
    this._hasInitialFocused = false;
    this.change = new Subject();
    if (items instanceof QueryList) {
      this._items = items.toArray();
      items.changes.subscribe((newItems) => {
        this._items = newItems.toArray();
        this._typeahead?.setItems(this._items);
        this._updateActiveItemIndex(this._items);
        this._initializeFocus();
      });
    } else if (isObservable(items)) {
      items.subscribe((newItems) => {
        this._items = newItems;
        this._typeahead?.setItems(newItems);
        this._updateActiveItemIndex(newItems);
        this._initializeFocus();
      });
    } else {
      this._items = items;
      this._initializeFocus();
    }
    if (typeof config.shouldActivationFollowFocus === "boolean") {
      this._shouldActivationFollowFocus = config.shouldActivationFollowFocus;
    }
    if (config.horizontalOrientation) {
      this._horizontalOrientation = config.horizontalOrientation;
    }
    if (config.skipPredicate) {
      this._skipPredicateFn = config.skipPredicate;
    }
    if (config.trackBy) {
      this._trackByFn = config.trackBy;
    }
    if (typeof config.typeAheadDebounceInterval !== "undefined") {
      this._setTypeAhead(config.typeAheadDebounceInterval);
    }
  }
  /** Cleans up the key manager. */
  destroy() {
    this._typeaheadSubscription.unsubscribe();
    this._typeahead?.destroy();
    this.change.complete();
  }
  /**
   * Handles a keyboard event on the tree.
   * @param event Keyboard event that represents the user interaction with the tree.
   */
  onKeydown(event) {
    const key = event.key;
    switch (key) {
      case "Tab":
        return;
      case "ArrowDown":
        this._focusNextItem();
        break;
      case "ArrowUp":
        this._focusPreviousItem();
        break;
      case "ArrowRight":
        this._horizontalOrientation === "rtl" ? this._collapseCurrentItem() : this._expandCurrentItem();
        break;
      case "ArrowLeft":
        this._horizontalOrientation === "rtl" ? this._expandCurrentItem() : this._collapseCurrentItem();
        break;
      case "Home":
        this._focusFirstItem();
        break;
      case "End":
        this._focusLastItem();
        break;
      case "Enter":
      case " ":
        this._activateCurrentItem();
        break;
      default:
        if (event.key === "*") {
          this._expandAllItemsAtCurrentItemLevel();
          break;
        }
        this._typeahead?.handleKey(event);
        return;
    }
    this._typeahead?.reset();
    event.preventDefault();
  }
  /** Index of the currently active item. */
  getActiveItemIndex() {
    return this._activeItemIndex;
  }
  /** The currently active item. */
  getActiveItem() {
    return this._activeItem;
  }
  /** Focus the first available item. */
  _focusFirstItem() {
    this.focusItem(this._findNextAvailableItemIndex(-1));
  }
  /** Focus the last available item. */
  _focusLastItem() {
    this.focusItem(this._findPreviousAvailableItemIndex(this._items.length));
  }
  /** Focus the next available item. */
  _focusNextItem() {
    this.focusItem(this._findNextAvailableItemIndex(this._activeItemIndex));
  }
  /** Focus the previous available item. */
  _focusPreviousItem() {
    this.focusItem(this._findPreviousAvailableItemIndex(this._activeItemIndex));
  }
  focusItem(itemOrIndex, options = {}) {
    options.emitChangeEvent ??= true;
    let index = typeof itemOrIndex === "number" ? itemOrIndex : this._items.findIndex((item) => this._trackByFn(item) === this._trackByFn(itemOrIndex));
    if (index < 0 || index >= this._items.length) {
      return;
    }
    const activeItem = this._items[index];
    if (this._activeItem !== null && this._trackByFn(activeItem) === this._trackByFn(this._activeItem)) {
      return;
    }
    const previousActiveItem = this._activeItem;
    this._activeItem = activeItem ?? null;
    this._activeItemIndex = index;
    this._typeahead?.setCurrentSelectedItemIndex(index);
    this._activeItem?.focus();
    previousActiveItem?.unfocus();
    if (options.emitChangeEvent) {
      this.change.next(this._activeItem);
    }
    if (this._shouldActivationFollowFocus) {
      this._activateCurrentItem();
    }
  }
  _updateActiveItemIndex(newItems) {
    const activeItem = this._activeItem;
    if (!activeItem) {
      return;
    }
    const newIndex = newItems.findIndex((item) => this._trackByFn(item) === this._trackByFn(activeItem));
    if (newIndex > -1 && newIndex !== this._activeItemIndex) {
      this._activeItemIndex = newIndex;
      this._typeahead?.setCurrentSelectedItemIndex(newIndex);
    }
  }
  _setTypeAhead(debounceInterval) {
    this._typeahead = new Typeahead(this._items, {
      debounceInterval: typeof debounceInterval === "number" ? debounceInterval : void 0,
      skipPredicate: (item) => this._skipPredicateFn(item)
    });
    this._typeaheadSubscription = this._typeahead.selectedItem.subscribe((item) => {
      this.focusItem(item);
    });
  }
  _findNextAvailableItemIndex(startingIndex) {
    for (let i2 = startingIndex + 1; i2 < this._items.length; i2++) {
      if (!this._skipPredicateFn(this._items[i2])) {
        return i2;
      }
    }
    return startingIndex;
  }
  _findPreviousAvailableItemIndex(startingIndex) {
    for (let i2 = startingIndex - 1; i2 >= 0; i2--) {
      if (!this._skipPredicateFn(this._items[i2])) {
        return i2;
      }
    }
    return startingIndex;
  }
  /**
   * If the item is already expanded, we collapse the item. Otherwise, we will focus the parent.
   */
  _collapseCurrentItem() {
    if (!this._activeItem) {
      return;
    }
    if (this._isCurrentItemExpanded()) {
      this._activeItem.collapse();
    } else {
      const parent2 = this._activeItem.getParent();
      if (!parent2 || this._skipPredicateFn(parent2)) {
        return;
      }
      this.focusItem(parent2);
    }
  }
  /**
   * If the item is already collapsed, we expand the item. Otherwise, we will focus the first child.
   */
  _expandCurrentItem() {
    if (!this._activeItem) {
      return;
    }
    if (!this._isCurrentItemExpanded()) {
      this._activeItem.expand();
    } else {
      coerceObservable(this._activeItem.getChildren()).pipe(take(1)).subscribe((children) => {
        const firstChild = children.find((child) => !this._skipPredicateFn(child));
        if (!firstChild) {
          return;
        }
        this.focusItem(firstChild);
      });
    }
  }
  _isCurrentItemExpanded() {
    if (!this._activeItem) {
      return false;
    }
    return typeof this._activeItem.isExpanded === "boolean" ? this._activeItem.isExpanded : this._activeItem.isExpanded();
  }
  _isItemDisabled(item) {
    return typeof item.isDisabled === "boolean" ? item.isDisabled : item.isDisabled?.();
  }
  /** For all items that are the same level as the current item, we expand those items. */
  _expandAllItemsAtCurrentItemLevel() {
    if (!this._activeItem) {
      return;
    }
    const parent2 = this._activeItem.getParent();
    let itemsToExpand;
    if (!parent2) {
      itemsToExpand = of(this._items.filter((item) => item.getParent() === null));
    } else {
      itemsToExpand = coerceObservable(parent2.getChildren());
    }
    itemsToExpand.pipe(take(1)).subscribe((items) => {
      for (const item of items) {
        item.expand();
      }
    });
  }
  _activateCurrentItem() {
    this._activeItem?.activate();
  }
};
function TREE_KEY_MANAGER_FACTORY() {
  return (items, options) => new TreeKeyManager(items, options);
}
var TREE_KEY_MANAGER = new InjectionToken("tree-key-manager", {
  providedIn: "root",
  factory: TREE_KEY_MANAGER_FACTORY
});
var _InteractivityChecker = class _InteractivityChecker {
  constructor(_platform) {
    this._platform = _platform;
  }
  /**
   * Gets whether an element is disabled.
   *
   * @param element Element to be checked.
   * @returns Whether the element is disabled.
   */
  isDisabled(element) {
    return element.hasAttribute("disabled");
  }
  /**
   * Gets whether an element is visible for the purposes of interactivity.
   *
   * This will capture states like `display: none` and `visibility: hidden`, but not things like
   * being clipped by an `overflow: hidden` parent or being outside the viewport.
   *
   * @returns Whether the element is visible.
   */
  isVisible(element) {
    return hasGeometry(element) && getComputedStyle(element).visibility === "visible";
  }
  /**
   * Gets whether an element can be reached via Tab key.
   * Assumes that the element has already been checked with isFocusable.
   *
   * @param element Element to be checked.
   * @returns Whether the element is tabbable.
   */
  isTabbable(element) {
    if (!this._platform.isBrowser) {
      return false;
    }
    const frameElement = getFrameElement(getWindow(element));
    if (frameElement) {
      if (getTabIndexValue(frameElement) === -1) {
        return false;
      }
      if (!this.isVisible(frameElement)) {
        return false;
      }
    }
    let nodeName = element.nodeName.toLowerCase();
    let tabIndexValue = getTabIndexValue(element);
    if (element.hasAttribute("contenteditable")) {
      return tabIndexValue !== -1;
    }
    if (nodeName === "iframe" || nodeName === "object") {
      return false;
    }
    if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
      return false;
    }
    if (nodeName === "audio") {
      if (!element.hasAttribute("controls")) {
        return false;
      }
      return tabIndexValue !== -1;
    }
    if (nodeName === "video") {
      if (tabIndexValue === -1) {
        return false;
      }
      if (tabIndexValue !== null) {
        return true;
      }
      return this._platform.FIREFOX || element.hasAttribute("controls");
    }
    return element.tabIndex >= 0;
  }
  /**
   * Gets whether an element can be focused by the user.
   *
   * @param element Element to be checked.
   * @param config The config object with options to customize this method's behavior
   * @returns Whether the element is focusable.
   */
  isFocusable(element, config) {
    return isPotentiallyFocusable(element) && !this.isDisabled(element) && (config?.ignoreVisibility || this.isVisible(element));
  }
};
_InteractivityChecker.\u0275fac = function InteractivityChecker_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InteractivityChecker)(\u0275\u0275inject(Platform));
};
_InteractivityChecker.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _InteractivityChecker,
  factory: _InteractivityChecker.\u0275fac,
  providedIn: "root"
});
var InteractivityChecker = _InteractivityChecker;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InteractivityChecker, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Platform
  }], null);
})();
function getFrameElement(window2) {
  try {
    return window2.frameElement;
  } catch {
    return null;
  }
}
function hasGeometry(element) {
  return !!(element.offsetWidth || element.offsetHeight || typeof element.getClientRects === "function" && element.getClientRects().length);
}
function isNativeFormElement(element) {
  let nodeName = element.nodeName.toLowerCase();
  return nodeName === "input" || nodeName === "select" || nodeName === "button" || nodeName === "textarea";
}
function isHiddenInput(element) {
  return isInputElement(element) && element.type == "hidden";
}
function isAnchorWithHref(element) {
  return isAnchorElement(element) && element.hasAttribute("href");
}
function isInputElement(element) {
  return element.nodeName.toLowerCase() == "input";
}
function isAnchorElement(element) {
  return element.nodeName.toLowerCase() == "a";
}
function hasValidTabIndex(element) {
  if (!element.hasAttribute("tabindex") || element.tabIndex === void 0) {
    return false;
  }
  let tabIndex = element.getAttribute("tabindex");
  return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
}
function getTabIndexValue(element) {
  if (!hasValidTabIndex(element)) {
    return null;
  }
  const tabIndex = parseInt(element.getAttribute("tabindex") || "", 10);
  return isNaN(tabIndex) ? -1 : tabIndex;
}
function isPotentiallyTabbableIOS(element) {
  let nodeName = element.nodeName.toLowerCase();
  let inputType = nodeName === "input" && element.type;
  return inputType === "text" || inputType === "password" || nodeName === "select" || nodeName === "textarea";
}
function isPotentiallyFocusable(element) {
  if (isHiddenInput(element)) {
    return false;
  }
  return isNativeFormElement(element) || isAnchorWithHref(element) || element.hasAttribute("contenteditable") || hasValidTabIndex(element);
}
function getWindow(node) {
  return node.ownerDocument && node.ownerDocument.defaultView || window;
}
var FocusTrap = class {
  /** Whether the focus trap is active. */
  get enabled() {
    return this._enabled;
  }
  set enabled(value) {
    this._enabled = value;
    if (this._startAnchor && this._endAnchor) {
      this._toggleAnchorTabIndex(value, this._startAnchor);
      this._toggleAnchorTabIndex(value, this._endAnchor);
    }
  }
  constructor(_element, _checker, _ngZone, _document, deferAnchors = false, _injector) {
    this._element = _element;
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._document = _document;
    this._injector = _injector;
    this._hasAttached = false;
    this.startAnchorListener = () => this.focusLastTabbableElement();
    this.endAnchorListener = () => this.focusFirstTabbableElement();
    this._enabled = true;
    if (!deferAnchors) {
      this.attachAnchors();
    }
  }
  /** Destroys the focus trap by cleaning up the anchors. */
  destroy() {
    const startAnchor = this._startAnchor;
    const endAnchor = this._endAnchor;
    if (startAnchor) {
      startAnchor.removeEventListener("focus", this.startAnchorListener);
      startAnchor.remove();
    }
    if (endAnchor) {
      endAnchor.removeEventListener("focus", this.endAnchorListener);
      endAnchor.remove();
    }
    this._startAnchor = this._endAnchor = null;
    this._hasAttached = false;
  }
  /**
   * Inserts the anchors into the DOM. This is usually done automatically
   * in the constructor, but can be deferred for cases like directives with `*ngIf`.
   * @returns Whether the focus trap managed to attach successfully. This may not be the case
   * if the target element isn't currently in the DOM.
   */
  attachAnchors() {
    if (this._hasAttached) {
      return true;
    }
    this._ngZone.runOutsideAngular(() => {
      if (!this._startAnchor) {
        this._startAnchor = this._createAnchor();
        this._startAnchor.addEventListener("focus", this.startAnchorListener);
      }
      if (!this._endAnchor) {
        this._endAnchor = this._createAnchor();
        this._endAnchor.addEventListener("focus", this.endAnchorListener);
      }
    });
    if (this._element.parentNode) {
      this._element.parentNode.insertBefore(this._startAnchor, this._element);
      this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling);
      this._hasAttached = true;
    }
    return this._hasAttached;
  }
  /**
   * Waits for the zone to stabilize, then focuses the first tabbable element.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */
  focusInitialElementWhenReady(options) {
    return new Promise((resolve) => {
      this._executeOnStable(() => resolve(this.focusInitialElement(options)));
    });
  }
  /**
   * Waits for the zone to stabilize, then focuses
   * the first tabbable element within the focus trap region.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */
  focusFirstTabbableElementWhenReady(options) {
    return new Promise((resolve) => {
      this._executeOnStable(() => resolve(this.focusFirstTabbableElement(options)));
    });
  }
  /**
   * Waits for the zone to stabilize, then focuses
   * the last tabbable element within the focus trap region.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */
  focusLastTabbableElementWhenReady(options) {
    return new Promise((resolve) => {
      this._executeOnStable(() => resolve(this.focusLastTabbableElement(options)));
    });
  }
  /**
   * Get the specified boundary element of the trapped region.
   * @param bound The boundary to get (start or end of trapped region).
   * @returns The boundary element.
   */
  _getRegionBoundary(bound) {
    const markers = this._element.querySelectorAll(`[cdk-focus-region-${bound}], [cdkFocusRegion${bound}], [cdk-focus-${bound}]`);
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      for (let i2 = 0; i2 < markers.length; i2++) {
        if (markers[i2].hasAttribute(`cdk-focus-${bound}`)) {
          console.warn(`Found use of deprecated attribute 'cdk-focus-${bound}', use 'cdkFocusRegion${bound}' instead. The deprecated attribute will be removed in 8.0.0.`, markers[i2]);
        } else if (markers[i2].hasAttribute(`cdk-focus-region-${bound}`)) {
          console.warn(`Found use of deprecated attribute 'cdk-focus-region-${bound}', use 'cdkFocusRegion${bound}' instead. The deprecated attribute will be removed in 8.0.0.`, markers[i2]);
        }
      }
    }
    if (bound == "start") {
      return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
    }
    return markers.length ? markers[markers.length - 1] : this._getLastTabbableElement(this._element);
  }
  /**
   * Focuses the element that should be focused when the focus trap is initialized.
   * @returns Whether focus was moved successfully.
   */
  focusInitialElement(options) {
    const redirectToElement = this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);
    if (redirectToElement) {
      if ((typeof ngDevMode === "undefined" || ngDevMode) && redirectToElement.hasAttribute(`cdk-focus-initial`)) {
        console.warn(`Found use of deprecated attribute 'cdk-focus-initial', use 'cdkFocusInitial' instead. The deprecated attribute will be removed in 8.0.0`, redirectToElement);
      }
      if ((typeof ngDevMode === "undefined" || ngDevMode) && !this._checker.isFocusable(redirectToElement)) {
        console.warn(`Element matching '[cdkFocusInitial]' is not focusable.`, redirectToElement);
      }
      if (!this._checker.isFocusable(redirectToElement)) {
        const focusableChild = this._getFirstTabbableElement(redirectToElement);
        focusableChild?.focus(options);
        return !!focusableChild;
      }
      redirectToElement.focus(options);
      return true;
    }
    return this.focusFirstTabbableElement(options);
  }
  /**
   * Focuses the first tabbable element within the focus trap region.
   * @returns Whether focus was moved successfully.
   */
  focusFirstTabbableElement(options) {
    const redirectToElement = this._getRegionBoundary("start");
    if (redirectToElement) {
      redirectToElement.focus(options);
    }
    return !!redirectToElement;
  }
  /**
   * Focuses the last tabbable element within the focus trap region.
   * @returns Whether focus was moved successfully.
   */
  focusLastTabbableElement(options) {
    const redirectToElement = this._getRegionBoundary("end");
    if (redirectToElement) {
      redirectToElement.focus(options);
    }
    return !!redirectToElement;
  }
  /**
   * Checks whether the focus trap has successfully been attached.
   */
  hasAttached() {
    return this._hasAttached;
  }
  /** Get the first tabbable element from a DOM subtree (inclusive). */
  _getFirstTabbableElement(root) {
    if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
      return root;
    }
    const children = root.children;
    for (let i2 = 0; i2 < children.length; i2++) {
      const tabbableChild = children[i2].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(children[i2]) : null;
      if (tabbableChild) {
        return tabbableChild;
      }
    }
    return null;
  }
  /** Get the last tabbable element from a DOM subtree (inclusive). */
  _getLastTabbableElement(root) {
    if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
      return root;
    }
    const children = root.children;
    for (let i2 = children.length - 1; i2 >= 0; i2--) {
      const tabbableChild = children[i2].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(children[i2]) : null;
      if (tabbableChild) {
        return tabbableChild;
      }
    }
    return null;
  }
  /** Creates an anchor element. */
  _createAnchor() {
    const anchor = this._document.createElement("div");
    this._toggleAnchorTabIndex(this._enabled, anchor);
    anchor.classList.add("cdk-visually-hidden");
    anchor.classList.add("cdk-focus-trap-anchor");
    anchor.setAttribute("aria-hidden", "true");
    return anchor;
  }
  /**
   * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
   * @param isEnabled Whether the focus trap is enabled.
   * @param anchor Anchor on which to toggle the tabindex.
   */
  _toggleAnchorTabIndex(isEnabled, anchor) {
    isEnabled ? anchor.setAttribute("tabindex", "0") : anchor.removeAttribute("tabindex");
  }
  /**
   * Toggles the`tabindex` of both anchors to either trap Tab focus or allow it to escape.
   * @param enabled: Whether the anchors should trap Tab.
   */
  toggleAnchors(enabled) {
    if (this._startAnchor && this._endAnchor) {
      this._toggleAnchorTabIndex(enabled, this._startAnchor);
      this._toggleAnchorTabIndex(enabled, this._endAnchor);
    }
  }
  /** Executes a function when the zone is stable. */
  _executeOnStable(fn) {
    if (this._injector) {
      afterNextRender(fn, {
        injector: this._injector
      });
    } else {
      setTimeout(fn);
    }
  }
};
var _FocusTrapFactory = class _FocusTrapFactory {
  constructor(_checker, _ngZone, _document) {
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._injector = inject(Injector);
    this._document = _document;
  }
  /**
   * Creates a focus-trapped region around the given element.
   * @param element The element around which focus will be trapped.
   * @param deferCaptureElements Defers the creation of focus-capturing elements to be done
   *     manually by the user.
   * @returns The created focus trap instance.
   */
  create(element, deferCaptureElements = false) {
    return new FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements, this._injector);
  }
};
_FocusTrapFactory.\u0275fac = function FocusTrapFactory_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FocusTrapFactory)(\u0275\u0275inject(InteractivityChecker), \u0275\u0275inject(NgZone), \u0275\u0275inject(DOCUMENT));
};
_FocusTrapFactory.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _FocusTrapFactory,
  factory: _FocusTrapFactory.\u0275fac,
  providedIn: "root"
});
var FocusTrapFactory = _FocusTrapFactory;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusTrapFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: InteractivityChecker
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var _CdkTrapFocus = class _CdkTrapFocus {
  /** Whether the focus trap is active. */
  get enabled() {
    return this.focusTrap?.enabled || false;
  }
  set enabled(value) {
    if (this.focusTrap) {
      this.focusTrap.enabled = value;
    }
  }
  constructor(_elementRef, _focusTrapFactory, _document) {
    this._elementRef = _elementRef;
    this._focusTrapFactory = _focusTrapFactory;
    this._previouslyFocusedElement = null;
    const platform = inject(Platform);
    if (platform.isBrowser) {
      this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
    }
  }
  ngOnDestroy() {
    this.focusTrap?.destroy();
    if (this._previouslyFocusedElement) {
      this._previouslyFocusedElement.focus();
      this._previouslyFocusedElement = null;
    }
  }
  ngAfterContentInit() {
    this.focusTrap?.attachAnchors();
    if (this.autoCapture) {
      this._captureFocus();
    }
  }
  ngDoCheck() {
    if (this.focusTrap && !this.focusTrap.hasAttached()) {
      this.focusTrap.attachAnchors();
    }
  }
  ngOnChanges(changes) {
    const autoCaptureChange = changes["autoCapture"];
    if (autoCaptureChange && !autoCaptureChange.firstChange && this.autoCapture && this.focusTrap?.hasAttached()) {
      this._captureFocus();
    }
  }
  _captureFocus() {
    this._previouslyFocusedElement = _getFocusedElementPierceShadowDom();
    this.focusTrap?.focusInitialElementWhenReady();
  }
};
_CdkTrapFocus.\u0275fac = function CdkTrapFocus_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkTrapFocus)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(FocusTrapFactory), \u0275\u0275directiveInject(DOCUMENT));
};
_CdkTrapFocus.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkTrapFocus,
  selectors: [["", "cdkTrapFocus", ""]],
  inputs: {
    enabled: [2, "cdkTrapFocus", "enabled", booleanAttribute],
    autoCapture: [2, "cdkTrapFocusAutoCapture", "autoCapture", booleanAttribute]
  },
  exportAs: ["cdkTrapFocus"],
  standalone: true,
  features: [\u0275\u0275InputTransformsFeature, \u0275\u0275NgOnChangesFeature]
});
var CdkTrapFocus = _CdkTrapFocus;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTrapFocus, [{
    type: Directive,
    args: [{
      selector: "[cdkTrapFocus]",
      exportAs: "cdkTrapFocus",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: FocusTrapFactory
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], {
    enabled: [{
      type: Input,
      args: [{
        alias: "cdkTrapFocus",
        transform: booleanAttribute
      }]
    }],
    autoCapture: [{
      type: Input,
      args: [{
        alias: "cdkTrapFocusAutoCapture",
        transform: booleanAttribute
      }]
    }]
  });
})();
var ConfigurableFocusTrap = class extends FocusTrap {
  /** Whether the FocusTrap is enabled. */
  get enabled() {
    return this._enabled;
  }
  set enabled(value) {
    this._enabled = value;
    if (this._enabled) {
      this._focusTrapManager.register(this);
    } else {
      this._focusTrapManager.deregister(this);
    }
  }
  constructor(_element, _checker, _ngZone, _document, _focusTrapManager, _inertStrategy, config, injector) {
    super(_element, _checker, _ngZone, _document, config.defer, injector);
    this._focusTrapManager = _focusTrapManager;
    this._inertStrategy = _inertStrategy;
    this._focusTrapManager.register(this);
  }
  /** Notifies the FocusTrapManager that this FocusTrap will be destroyed. */
  destroy() {
    this._focusTrapManager.deregister(this);
    super.destroy();
  }
  /** @docs-private Implemented as part of ManagedFocusTrap. */
  _enable() {
    this._inertStrategy.preventFocus(this);
    this.toggleAnchors(true);
  }
  /** @docs-private Implemented as part of ManagedFocusTrap. */
  _disable() {
    this._inertStrategy.allowFocus(this);
    this.toggleAnchors(false);
  }
};
var EventListenerFocusTrapInertStrategy = class {
  constructor() {
    this._listener = null;
  }
  /** Adds a document event listener that keeps focus inside the FocusTrap. */
  preventFocus(focusTrap) {
    if (this._listener) {
      focusTrap._document.removeEventListener("focus", this._listener, true);
    }
    this._listener = (e2) => this._trapFocus(focusTrap, e2);
    focusTrap._ngZone.runOutsideAngular(() => {
      focusTrap._document.addEventListener("focus", this._listener, true);
    });
  }
  /** Removes the event listener added in preventFocus. */
  allowFocus(focusTrap) {
    if (!this._listener) {
      return;
    }
    focusTrap._document.removeEventListener("focus", this._listener, true);
    this._listener = null;
  }
  /**
   * Refocuses the first element in the FocusTrap if the focus event target was outside
   * the FocusTrap.
   *
   * This is an event listener callback. The event listener is added in runOutsideAngular,
   * so all this code runs outside Angular as well.
   */
  _trapFocus(focusTrap, event) {
    const target = event.target;
    const focusTrapRoot = focusTrap._element;
    if (target && !focusTrapRoot.contains(target) && !target.closest?.("div.cdk-overlay-pane")) {
      setTimeout(() => {
        if (focusTrap.enabled && !focusTrapRoot.contains(focusTrap._document.activeElement)) {
          focusTrap.focusFirstTabbableElement();
        }
      });
    }
  }
};
var FOCUS_TRAP_INERT_STRATEGY = new InjectionToken("FOCUS_TRAP_INERT_STRATEGY");
var _FocusTrapManager = class _FocusTrapManager {
  constructor() {
    this._focusTrapStack = [];
  }
  /**
   * Disables the FocusTrap at the top of the stack, and then pushes
   * the new FocusTrap onto the stack.
   */
  register(focusTrap) {
    this._focusTrapStack = this._focusTrapStack.filter((ft2) => ft2 !== focusTrap);
    let stack = this._focusTrapStack;
    if (stack.length) {
      stack[stack.length - 1]._disable();
    }
    stack.push(focusTrap);
    focusTrap._enable();
  }
  /**
   * Removes the FocusTrap from the stack, and activates the
   * FocusTrap that is the new top of the stack.
   */
  deregister(focusTrap) {
    focusTrap._disable();
    const stack = this._focusTrapStack;
    const i2 = stack.indexOf(focusTrap);
    if (i2 !== -1) {
      stack.splice(i2, 1);
      if (stack.length) {
        stack[stack.length - 1]._enable();
      }
    }
  }
};
_FocusTrapManager.\u0275fac = function FocusTrapManager_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FocusTrapManager)();
};
_FocusTrapManager.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _FocusTrapManager,
  factory: _FocusTrapManager.\u0275fac,
  providedIn: "root"
});
var FocusTrapManager = _FocusTrapManager;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusTrapManager, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _ConfigurableFocusTrapFactory = class _ConfigurableFocusTrapFactory {
  constructor(_checker, _ngZone, _focusTrapManager, _document, _inertStrategy) {
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._focusTrapManager = _focusTrapManager;
    this._injector = inject(Injector);
    this._document = _document;
    this._inertStrategy = _inertStrategy || new EventListenerFocusTrapInertStrategy();
  }
  create(element, config = {
    defer: false
  }) {
    let configObject;
    if (typeof config === "boolean") {
      configObject = {
        defer: config
      };
    } else {
      configObject = config;
    }
    return new ConfigurableFocusTrap(element, this._checker, this._ngZone, this._document, this._focusTrapManager, this._inertStrategy, configObject, this._injector);
  }
};
_ConfigurableFocusTrapFactory.\u0275fac = function ConfigurableFocusTrapFactory_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConfigurableFocusTrapFactory)(\u0275\u0275inject(InteractivityChecker), \u0275\u0275inject(NgZone), \u0275\u0275inject(FocusTrapManager), \u0275\u0275inject(DOCUMENT), \u0275\u0275inject(FOCUS_TRAP_INERT_STRATEGY, 8));
};
_ConfigurableFocusTrapFactory.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ConfigurableFocusTrapFactory,
  factory: _ConfigurableFocusTrapFactory.\u0275fac,
  providedIn: "root"
});
var ConfigurableFocusTrapFactory = _ConfigurableFocusTrapFactory;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigurableFocusTrapFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: InteractivityChecker
  }, {
    type: NgZone
  }, {
    type: FocusTrapManager
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [FOCUS_TRAP_INERT_STRATEGY]
    }]
  }], null);
})();
function isFakeMousedownFromScreenReader(event) {
  return event.buttons === 0 || event.detail === 0;
}
function isFakeTouchstartFromScreenReader(event) {
  const touch = event.touches && event.touches[0] || event.changedTouches && event.changedTouches[0];
  return !!touch && touch.identifier === -1 && (touch.radiusX == null || touch.radiusX === 1) && (touch.radiusY == null || touch.radiusY === 1);
}
var INPUT_MODALITY_DETECTOR_OPTIONS = new InjectionToken("cdk-input-modality-detector-options");
var INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS = {
  ignoreKeys: [ALT, CONTROL, MAC_META, META, SHIFT]
};
var TOUCH_BUFFER_MS = 650;
var modalityEventListenerOptions = normalizePassiveListenerOptions({
  passive: true,
  capture: true
});
var _InputModalityDetector = class _InputModalityDetector {
  /** The most recently detected input modality. */
  get mostRecentModality() {
    return this._modality.value;
  }
  constructor(_platform, ngZone, document2, options) {
    this._platform = _platform;
    this._mostRecentTarget = null;
    this._modality = new BehaviorSubject(null);
    this._lastTouchMs = 0;
    this._onKeydown = (event) => {
      if (this._options?.ignoreKeys?.some((keyCode) => keyCode === event.keyCode)) {
        return;
      }
      this._modality.next("keyboard");
      this._mostRecentTarget = _getEventTarget(event);
    };
    this._onMousedown = (event) => {
      if (Date.now() - this._lastTouchMs < TOUCH_BUFFER_MS) {
        return;
      }
      this._modality.next(isFakeMousedownFromScreenReader(event) ? "keyboard" : "mouse");
      this._mostRecentTarget = _getEventTarget(event);
    };
    this._onTouchstart = (event) => {
      if (isFakeTouchstartFromScreenReader(event)) {
        this._modality.next("keyboard");
        return;
      }
      this._lastTouchMs = Date.now();
      this._modality.next("touch");
      this._mostRecentTarget = _getEventTarget(event);
    };
    this._options = __spreadValues(__spreadValues({}, INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS), options);
    this.modalityDetected = this._modality.pipe(skip(1));
    this.modalityChanged = this.modalityDetected.pipe(distinctUntilChanged());
    if (_platform.isBrowser) {
      ngZone.runOutsideAngular(() => {
        document2.addEventListener("keydown", this._onKeydown, modalityEventListenerOptions);
        document2.addEventListener("mousedown", this._onMousedown, modalityEventListenerOptions);
        document2.addEventListener("touchstart", this._onTouchstart, modalityEventListenerOptions);
      });
    }
  }
  ngOnDestroy() {
    this._modality.complete();
    if (this._platform.isBrowser) {
      document.removeEventListener("keydown", this._onKeydown, modalityEventListenerOptions);
      document.removeEventListener("mousedown", this._onMousedown, modalityEventListenerOptions);
      document.removeEventListener("touchstart", this._onTouchstart, modalityEventListenerOptions);
    }
  }
};
_InputModalityDetector.\u0275fac = function InputModalityDetector_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InputModalityDetector)(\u0275\u0275inject(Platform), \u0275\u0275inject(NgZone), \u0275\u0275inject(DOCUMENT), \u0275\u0275inject(INPUT_MODALITY_DETECTOR_OPTIONS, 8));
};
_InputModalityDetector.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _InputModalityDetector,
  factory: _InputModalityDetector.\u0275fac,
  providedIn: "root"
});
var InputModalityDetector = _InputModalityDetector;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputModalityDetector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Platform
  }, {
    type: NgZone
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [INPUT_MODALITY_DETECTOR_OPTIONS]
    }]
  }], null);
})();
var LIVE_ANNOUNCER_ELEMENT_TOKEN = new InjectionToken("liveAnnouncerElement", {
  providedIn: "root",
  factory: LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY
});
function LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY() {
  return null;
}
var LIVE_ANNOUNCER_DEFAULT_OPTIONS = new InjectionToken("LIVE_ANNOUNCER_DEFAULT_OPTIONS");
var uniqueIds = 0;
var _LiveAnnouncer = class _LiveAnnouncer {
  constructor(elementToken, _ngZone, _document, _defaultOptions) {
    this._ngZone = _ngZone;
    this._defaultOptions = _defaultOptions;
    this._document = _document;
    this._liveElement = elementToken || this._createLiveElement();
  }
  announce(message, ...args) {
    const defaultOptions = this._defaultOptions;
    let politeness;
    let duration;
    if (args.length === 1 && typeof args[0] === "number") {
      duration = args[0];
    } else {
      [politeness, duration] = args;
    }
    this.clear();
    clearTimeout(this._previousTimeout);
    if (!politeness) {
      politeness = defaultOptions && defaultOptions.politeness ? defaultOptions.politeness : "polite";
    }
    if (duration == null && defaultOptions) {
      duration = defaultOptions.duration;
    }
    this._liveElement.setAttribute("aria-live", politeness);
    if (this._liveElement.id) {
      this._exposeAnnouncerToModals(this._liveElement.id);
    }
    return this._ngZone.runOutsideAngular(() => {
      if (!this._currentPromise) {
        this._currentPromise = new Promise((resolve) => this._currentResolve = resolve);
      }
      clearTimeout(this._previousTimeout);
      this._previousTimeout = setTimeout(() => {
        this._liveElement.textContent = message;
        if (typeof duration === "number") {
          this._previousTimeout = setTimeout(() => this.clear(), duration);
        }
        this._currentResolve?.();
        this._currentPromise = this._currentResolve = void 0;
      }, 100);
      return this._currentPromise;
    });
  }
  /**
   * Clears the current text from the announcer element. Can be used to prevent
   * screen readers from reading the text out again while the user is going
   * through the page landmarks.
   */
  clear() {
    if (this._liveElement) {
      this._liveElement.textContent = "";
    }
  }
  ngOnDestroy() {
    clearTimeout(this._previousTimeout);
    this._liveElement?.remove();
    this._liveElement = null;
    this._currentResolve?.();
    this._currentPromise = this._currentResolve = void 0;
  }
  _createLiveElement() {
    const elementClass = "cdk-live-announcer-element";
    const previousElements = this._document.getElementsByClassName(elementClass);
    const liveEl = this._document.createElement("div");
    for (let i2 = 0; i2 < previousElements.length; i2++) {
      previousElements[i2].remove();
    }
    liveEl.classList.add(elementClass);
    liveEl.classList.add("cdk-visually-hidden");
    liveEl.setAttribute("aria-atomic", "true");
    liveEl.setAttribute("aria-live", "polite");
    liveEl.id = `cdk-live-announcer-${uniqueIds++}`;
    this._document.body.appendChild(liveEl);
    return liveEl;
  }
  /**
   * Some browsers won't expose the accessibility node of the live announcer element if there is an
   * `aria-modal` and the live announcer is outside of it. This method works around the issue by
   * pointing the `aria-owns` of all modals to the live announcer element.
   */
  _exposeAnnouncerToModals(id) {
    const modals = this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');
    for (let i2 = 0; i2 < modals.length; i2++) {
      const modal = modals[i2];
      const ariaOwns = modal.getAttribute("aria-owns");
      if (!ariaOwns) {
        modal.setAttribute("aria-owns", id);
      } else if (ariaOwns.indexOf(id) === -1) {
        modal.setAttribute("aria-owns", ariaOwns + " " + id);
      }
    }
  }
};
_LiveAnnouncer.\u0275fac = function LiveAnnouncer_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LiveAnnouncer)(\u0275\u0275inject(LIVE_ANNOUNCER_ELEMENT_TOKEN, 8), \u0275\u0275inject(NgZone), \u0275\u0275inject(DOCUMENT), \u0275\u0275inject(LIVE_ANNOUNCER_DEFAULT_OPTIONS, 8));
};
_LiveAnnouncer.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _LiveAnnouncer,
  factory: _LiveAnnouncer.\u0275fac,
  providedIn: "root"
});
var LiveAnnouncer = _LiveAnnouncer;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LiveAnnouncer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [LIVE_ANNOUNCER_ELEMENT_TOKEN]
    }]
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [LIVE_ANNOUNCER_DEFAULT_OPTIONS]
    }]
  }], null);
})();
var _CdkAriaLive = class _CdkAriaLive {
  /** The aria-live politeness level to use when announcing messages. */
  get politeness() {
    return this._politeness;
  }
  set politeness(value) {
    this._politeness = value === "off" || value === "assertive" ? value : "polite";
    if (this._politeness === "off") {
      if (this._subscription) {
        this._subscription.unsubscribe();
        this._subscription = null;
      }
    } else if (!this._subscription) {
      this._subscription = this._ngZone.runOutsideAngular(() => {
        return this._contentObserver.observe(this._elementRef).subscribe(() => {
          const elementText = this._elementRef.nativeElement.textContent;
          if (elementText !== this._previousAnnouncedText) {
            this._liveAnnouncer.announce(elementText, this._politeness, this.duration);
            this._previousAnnouncedText = elementText;
          }
        });
      });
    }
  }
  constructor(_elementRef, _liveAnnouncer, _contentObserver, _ngZone) {
    this._elementRef = _elementRef;
    this._liveAnnouncer = _liveAnnouncer;
    this._contentObserver = _contentObserver;
    this._ngZone = _ngZone;
    this._politeness = "polite";
  }
  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
};
_CdkAriaLive.\u0275fac = function CdkAriaLive_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkAriaLive)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(LiveAnnouncer), \u0275\u0275directiveInject(ContentObserver), \u0275\u0275directiveInject(NgZone));
};
_CdkAriaLive.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkAriaLive,
  selectors: [["", "cdkAriaLive", ""]],
  inputs: {
    politeness: [0, "cdkAriaLive", "politeness"],
    duration: [0, "cdkAriaLiveDuration", "duration"]
  },
  exportAs: ["cdkAriaLive"],
  standalone: true
});
var CdkAriaLive = _CdkAriaLive;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAriaLive, [{
    type: Directive,
    args: [{
      selector: "[cdkAriaLive]",
      exportAs: "cdkAriaLive",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: LiveAnnouncer
  }, {
    type: ContentObserver
  }, {
    type: NgZone
  }], {
    politeness: [{
      type: Input,
      args: ["cdkAriaLive"]
    }],
    duration: [{
      type: Input,
      args: ["cdkAriaLiveDuration"]
    }]
  });
})();
var FocusMonitorDetectionMode;
(function(FocusMonitorDetectionMode2) {
  FocusMonitorDetectionMode2[FocusMonitorDetectionMode2["IMMEDIATE"] = 0] = "IMMEDIATE";
  FocusMonitorDetectionMode2[FocusMonitorDetectionMode2["EVENTUAL"] = 1] = "EVENTUAL";
})(FocusMonitorDetectionMode || (FocusMonitorDetectionMode = {}));
var FOCUS_MONITOR_DEFAULT_OPTIONS = new InjectionToken("cdk-focus-monitor-default-options");
var captureEventListenerOptions = normalizePassiveListenerOptions({
  passive: true,
  capture: true
});
var _FocusMonitor = class _FocusMonitor {
  constructor(_ngZone, _platform, _inputModalityDetector, document2, options) {
    this._ngZone = _ngZone;
    this._platform = _platform;
    this._inputModalityDetector = _inputModalityDetector;
    this._origin = null;
    this._windowFocused = false;
    this._originFromTouchInteraction = false;
    this._elementInfo = /* @__PURE__ */ new Map();
    this._monitoredElementCount = 0;
    this._rootNodeFocusListenerCount = /* @__PURE__ */ new Map();
    this._windowFocusListener = () => {
      this._windowFocused = true;
      this._windowFocusTimeoutId = window.setTimeout(() => this._windowFocused = false);
    };
    this._stopInputModalityDetector = new Subject();
    this._rootNodeFocusAndBlurListener = (event) => {
      const target = _getEventTarget(event);
      for (let element = target; element; element = element.parentElement) {
        if (event.type === "focus") {
          this._onFocus(event, element);
        } else {
          this._onBlur(event, element);
        }
      }
    };
    this._document = document2;
    this._detectionMode = options?.detectionMode || FocusMonitorDetectionMode.IMMEDIATE;
  }
  monitor(element, checkChildren = false) {
    const nativeElement = coerceElement(element);
    if (!this._platform.isBrowser || nativeElement.nodeType !== 1) {
      return of();
    }
    const rootNode = _getShadowRoot(nativeElement) || this._getDocument();
    const cachedInfo = this._elementInfo.get(nativeElement);
    if (cachedInfo) {
      if (checkChildren) {
        cachedInfo.checkChildren = true;
      }
      return cachedInfo.subject;
    }
    const info = {
      checkChildren,
      subject: new Subject(),
      rootNode
    };
    this._elementInfo.set(nativeElement, info);
    this._registerGlobalListeners(info);
    return info.subject;
  }
  stopMonitoring(element) {
    const nativeElement = coerceElement(element);
    const elementInfo = this._elementInfo.get(nativeElement);
    if (elementInfo) {
      elementInfo.subject.complete();
      this._setClasses(nativeElement);
      this._elementInfo.delete(nativeElement);
      this._removeGlobalListeners(elementInfo);
    }
  }
  focusVia(element, origin, options) {
    const nativeElement = coerceElement(element);
    const focusedElement = this._getDocument().activeElement;
    if (nativeElement === focusedElement) {
      this._getClosestElementsInfo(nativeElement).forEach(([currentElement, info]) => this._originChanged(currentElement, origin, info));
    } else {
      this._setOrigin(origin);
      if (typeof nativeElement.focus === "function") {
        nativeElement.focus(options);
      }
    }
  }
  ngOnDestroy() {
    this._elementInfo.forEach((_info, element) => this.stopMonitoring(element));
  }
  /** Access injected document if available or fallback to global document reference */
  _getDocument() {
    return this._document || document;
  }
  /** Use defaultView of injected document if available or fallback to global window reference */
  _getWindow() {
    const doc = this._getDocument();
    return doc.defaultView || window;
  }
  _getFocusOrigin(focusEventTarget) {
    if (this._origin) {
      if (this._originFromTouchInteraction) {
        return this._shouldBeAttributedToTouch(focusEventTarget) ? "touch" : "program";
      } else {
        return this._origin;
      }
    }
    if (this._windowFocused && this._lastFocusOrigin) {
      return this._lastFocusOrigin;
    }
    if (focusEventTarget && this._isLastInteractionFromInputLabel(focusEventTarget)) {
      return "mouse";
    }
    return "program";
  }
  /**
   * Returns whether the focus event should be attributed to touch. Recall that in IMMEDIATE mode, a
   * touch origin isn't immediately reset at the next tick (see _setOrigin). This means that when we
   * handle a focus event following a touch interaction, we need to determine whether (1) the focus
   * event was directly caused by the touch interaction or (2) the focus event was caused by a
   * subsequent programmatic focus call triggered by the touch interaction.
   * @param focusEventTarget The target of the focus event under examination.
   */
  _shouldBeAttributedToTouch(focusEventTarget) {
    return this._detectionMode === FocusMonitorDetectionMode.EVENTUAL || !!focusEventTarget?.contains(this._inputModalityDetector._mostRecentTarget);
  }
  /**
   * Sets the focus classes on the element based on the given focus origin.
   * @param element The element to update the classes on.
   * @param origin The focus origin.
   */
  _setClasses(element, origin) {
    element.classList.toggle("cdk-focused", !!origin);
    element.classList.toggle("cdk-touch-focused", origin === "touch");
    element.classList.toggle("cdk-keyboard-focused", origin === "keyboard");
    element.classList.toggle("cdk-mouse-focused", origin === "mouse");
    element.classList.toggle("cdk-program-focused", origin === "program");
  }
  /**
   * Updates the focus origin. If we're using immediate detection mode, we schedule an async
   * function to clear the origin at the end of a timeout. The duration of the timeout depends on
   * the origin being set.
   * @param origin The origin to set.
   * @param isFromInteraction Whether we are setting the origin from an interaction event.
   */
  _setOrigin(origin, isFromInteraction = false) {
    this._ngZone.runOutsideAngular(() => {
      this._origin = origin;
      this._originFromTouchInteraction = origin === "touch" && isFromInteraction;
      if (this._detectionMode === FocusMonitorDetectionMode.IMMEDIATE) {
        clearTimeout(this._originTimeoutId);
        const ms = this._originFromTouchInteraction ? TOUCH_BUFFER_MS : 1;
        this._originTimeoutId = setTimeout(() => this._origin = null, ms);
      }
    });
  }
  /**
   * Handles focus events on a registered element.
   * @param event The focus event.
   * @param element The monitored element.
   */
  _onFocus(event, element) {
    const elementInfo = this._elementInfo.get(element);
    const focusEventTarget = _getEventTarget(event);
    if (!elementInfo || !elementInfo.checkChildren && element !== focusEventTarget) {
      return;
    }
    this._originChanged(element, this._getFocusOrigin(focusEventTarget), elementInfo);
  }
  /**
   * Handles blur events on a registered element.
   * @param event The blur event.
   * @param element The monitored element.
   */
  _onBlur(event, element) {
    const elementInfo = this._elementInfo.get(element);
    if (!elementInfo || elementInfo.checkChildren && event.relatedTarget instanceof Node && element.contains(event.relatedTarget)) {
      return;
    }
    this._setClasses(element);
    this._emitOrigin(elementInfo, null);
  }
  _emitOrigin(info, origin) {
    if (info.subject.observers.length) {
      this._ngZone.run(() => info.subject.next(origin));
    }
  }
  _registerGlobalListeners(elementInfo) {
    if (!this._platform.isBrowser) {
      return;
    }
    const rootNode = elementInfo.rootNode;
    const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode) || 0;
    if (!rootNodeFocusListeners) {
      this._ngZone.runOutsideAngular(() => {
        rootNode.addEventListener("focus", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        rootNode.addEventListener("blur", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
      });
    }
    this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners + 1);
    if (++this._monitoredElementCount === 1) {
      this._ngZone.runOutsideAngular(() => {
        const window2 = this._getWindow();
        window2.addEventListener("focus", this._windowFocusListener);
      });
      this._inputModalityDetector.modalityDetected.pipe(takeUntil(this._stopInputModalityDetector)).subscribe((modality) => {
        this._setOrigin(
          modality,
          true
          /* isFromInteraction */
        );
      });
    }
  }
  _removeGlobalListeners(elementInfo) {
    const rootNode = elementInfo.rootNode;
    if (this._rootNodeFocusListenerCount.has(rootNode)) {
      const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode);
      if (rootNodeFocusListeners > 1) {
        this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners - 1);
      } else {
        rootNode.removeEventListener("focus", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        rootNode.removeEventListener("blur", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        this._rootNodeFocusListenerCount.delete(rootNode);
      }
    }
    if (!--this._monitoredElementCount) {
      const window2 = this._getWindow();
      window2.removeEventListener("focus", this._windowFocusListener);
      this._stopInputModalityDetector.next();
      clearTimeout(this._windowFocusTimeoutId);
      clearTimeout(this._originTimeoutId);
    }
  }
  /** Updates all the state on an element once its focus origin has changed. */
  _originChanged(element, origin, elementInfo) {
    this._setClasses(element, origin);
    this._emitOrigin(elementInfo, origin);
    this._lastFocusOrigin = origin;
  }
  /**
   * Collects the `MonitoredElementInfo` of a particular element and
   * all of its ancestors that have enabled `checkChildren`.
   * @param element Element from which to start the search.
   */
  _getClosestElementsInfo(element) {
    const results = [];
    this._elementInfo.forEach((info, currentElement) => {
      if (currentElement === element || info.checkChildren && currentElement.contains(element)) {
        results.push([currentElement, info]);
      }
    });
    return results;
  }
  /**
   * Returns whether an interaction is likely to have come from the user clicking the `label` of
   * an `input` or `textarea` in order to focus it.
   * @param focusEventTarget Target currently receiving focus.
   */
  _isLastInteractionFromInputLabel(focusEventTarget) {
    const {
      _mostRecentTarget: mostRecentTarget,
      mostRecentModality
    } = this._inputModalityDetector;
    if (mostRecentModality !== "mouse" || !mostRecentTarget || mostRecentTarget === focusEventTarget || focusEventTarget.nodeName !== "INPUT" && focusEventTarget.nodeName !== "TEXTAREA" || focusEventTarget.disabled) {
      return false;
    }
    const labels = focusEventTarget.labels;
    if (labels) {
      for (let i2 = 0; i2 < labels.length; i2++) {
        if (labels[i2].contains(mostRecentTarget)) {
          return true;
        }
      }
    }
    return false;
  }
};
_FocusMonitor.\u0275fac = function FocusMonitor_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FocusMonitor)(\u0275\u0275inject(NgZone), \u0275\u0275inject(Platform), \u0275\u0275inject(InputModalityDetector), \u0275\u0275inject(DOCUMENT, 8), \u0275\u0275inject(FOCUS_MONITOR_DEFAULT_OPTIONS, 8));
};
_FocusMonitor.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _FocusMonitor,
  factory: _FocusMonitor.\u0275fac,
  providedIn: "root"
});
var FocusMonitor = _FocusMonitor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusMonitor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: NgZone
  }, {
    type: Platform
  }, {
    type: InputModalityDetector
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [FOCUS_MONITOR_DEFAULT_OPTIONS]
    }]
  }], null);
})();
var _CdkMonitorFocus = class _CdkMonitorFocus {
  constructor(_elementRef, _focusMonitor) {
    this._elementRef = _elementRef;
    this._focusMonitor = _focusMonitor;
    this._focusOrigin = null;
    this.cdkFocusChange = new EventEmitter();
  }
  get focusOrigin() {
    return this._focusOrigin;
  }
  ngAfterViewInit() {
    const element = this._elementRef.nativeElement;
    this._monitorSubscription = this._focusMonitor.monitor(element, element.nodeType === 1 && element.hasAttribute("cdkMonitorSubtreeFocus")).subscribe((origin) => {
      this._focusOrigin = origin;
      this.cdkFocusChange.emit(origin);
    });
  }
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
    if (this._monitorSubscription) {
      this._monitorSubscription.unsubscribe();
    }
  }
};
_CdkMonitorFocus.\u0275fac = function CdkMonitorFocus_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkMonitorFocus)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(FocusMonitor));
};
_CdkMonitorFocus.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkMonitorFocus,
  selectors: [["", "cdkMonitorElementFocus", ""], ["", "cdkMonitorSubtreeFocus", ""]],
  outputs: {
    cdkFocusChange: "cdkFocusChange"
  },
  exportAs: ["cdkMonitorFocus"],
  standalone: true
});
var CdkMonitorFocus = _CdkMonitorFocus;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkMonitorFocus, [{
    type: Directive,
    args: [{
      selector: "[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]",
      exportAs: "cdkMonitorFocus",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: FocusMonitor
  }], {
    cdkFocusChange: [{
      type: Output
    }]
  });
})();
var HighContrastMode;
(function(HighContrastMode2) {
  HighContrastMode2[HighContrastMode2["NONE"] = 0] = "NONE";
  HighContrastMode2[HighContrastMode2["BLACK_ON_WHITE"] = 1] = "BLACK_ON_WHITE";
  HighContrastMode2[HighContrastMode2["WHITE_ON_BLACK"] = 2] = "WHITE_ON_BLACK";
})(HighContrastMode || (HighContrastMode = {}));
var BLACK_ON_WHITE_CSS_CLASS = "cdk-high-contrast-black-on-white";
var WHITE_ON_BLACK_CSS_CLASS = "cdk-high-contrast-white-on-black";
var HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS = "cdk-high-contrast-active";
var _HighContrastModeDetector = class _HighContrastModeDetector {
  constructor(_platform, document2) {
    this._platform = _platform;
    this._document = document2;
    this._breakpointSubscription = inject(BreakpointObserver).observe("(forced-colors: active)").subscribe(() => {
      if (this._hasCheckedHighContrastMode) {
        this._hasCheckedHighContrastMode = false;
        this._applyBodyHighContrastModeCssClasses();
      }
    });
  }
  /** Gets the current high-contrast-mode for the page. */
  getHighContrastMode() {
    if (!this._platform.isBrowser) {
      return HighContrastMode.NONE;
    }
    const testElement = this._document.createElement("div");
    testElement.style.backgroundColor = "rgb(1,2,3)";
    testElement.style.position = "absolute";
    this._document.body.appendChild(testElement);
    const documentWindow = this._document.defaultView || window;
    const computedStyle = documentWindow && documentWindow.getComputedStyle ? documentWindow.getComputedStyle(testElement) : null;
    const computedColor = (computedStyle && computedStyle.backgroundColor || "").replace(/ /g, "");
    testElement.remove();
    switch (computedColor) {
      case "rgb(0,0,0)":
      case "rgb(45,50,54)":
      case "rgb(32,32,32)":
        return HighContrastMode.WHITE_ON_BLACK;
      case "rgb(255,255,255)":
      case "rgb(255,250,239)":
        return HighContrastMode.BLACK_ON_WHITE;
    }
    return HighContrastMode.NONE;
  }
  ngOnDestroy() {
    this._breakpointSubscription.unsubscribe();
  }
  /** Applies CSS classes indicating high-contrast mode to document body (browser-only). */
  _applyBodyHighContrastModeCssClasses() {
    if (!this._hasCheckedHighContrastMode && this._platform.isBrowser && this._document.body) {
      const bodyClasses = this._document.body.classList;
      bodyClasses.remove(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, BLACK_ON_WHITE_CSS_CLASS, WHITE_ON_BLACK_CSS_CLASS);
      this._hasCheckedHighContrastMode = true;
      const mode = this.getHighContrastMode();
      if (mode === HighContrastMode.BLACK_ON_WHITE) {
        bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, BLACK_ON_WHITE_CSS_CLASS);
      } else if (mode === HighContrastMode.WHITE_ON_BLACK) {
        bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, WHITE_ON_BLACK_CSS_CLASS);
      }
    }
  }
};
_HighContrastModeDetector.\u0275fac = function HighContrastModeDetector_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HighContrastModeDetector)(\u0275\u0275inject(Platform), \u0275\u0275inject(DOCUMENT));
};
_HighContrastModeDetector.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _HighContrastModeDetector,
  factory: _HighContrastModeDetector.\u0275fac,
  providedIn: "root"
});
var HighContrastModeDetector = _HighContrastModeDetector;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HighContrastModeDetector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Platform
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var _A11yModule = class _A11yModule {
  constructor(highContrastModeDetector) {
    highContrastModeDetector._applyBodyHighContrastModeCssClasses();
  }
};
_A11yModule.\u0275fac = function A11yModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _A11yModule)(\u0275\u0275inject(HighContrastModeDetector));
};
_A11yModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _A11yModule
});
_A11yModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [ObserversModule]
});
var A11yModule = _A11yModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(A11yModule, [{
    type: NgModule,
    args: [{
      imports: [ObserversModule, CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
      exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]
    }]
  }], () => [{
    type: HighContrastModeDetector
  }], null);
})();

// node_modules/@angular/cdk/fesm2022/cdk.mjs
var VERSION = new Version("18.2.4");

// node_modules/@angular/material/fesm2022/core.mjs
var _c05 = ["*", [["mat-option"], ["ng-container"]]];
var _c15 = ["*", "mat-option, ng-container"];
var _c22 = ["text"];
var _c3 = [[["mat-icon"]], "*"];
var _c4 = ["mat-icon", "*"];
function MatOption_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-pseudo-checkbox", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.disabled)("state", ctx_r0.selected ? "checked" : "unchecked");
  }
}
function MatOption_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-pseudo-checkbox", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.disabled);
  }
}
function MatOption_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r0.group.label, ")");
  }
}
var _c5 = ["mat-internal-form-field", ""];
var _c6 = ["*"];
var VERSION2 = new Version("18.2.4");
var _AnimationCurves = class _AnimationCurves {
};
_AnimationCurves.STANDARD_CURVE = "cubic-bezier(0.4,0.0,0.2,1)";
_AnimationCurves.DECELERATION_CURVE = "cubic-bezier(0.0,0.0,0.2,1)";
_AnimationCurves.ACCELERATION_CURVE = "cubic-bezier(0.4,0.0,1,1)";
_AnimationCurves.SHARP_CURVE = "cubic-bezier(0.4,0.0,0.6,1)";
var AnimationCurves = _AnimationCurves;
var _AnimationDurations = class _AnimationDurations {
};
_AnimationDurations.COMPLEX = "375ms";
_AnimationDurations.ENTERING = "225ms";
_AnimationDurations.EXITING = "195ms";
var AnimationDurations = _AnimationDurations;
function MATERIAL_SANITY_CHECKS_FACTORY() {
  return true;
}
var MATERIAL_SANITY_CHECKS = new InjectionToken("mat-sanity-checks", {
  providedIn: "root",
  factory: MATERIAL_SANITY_CHECKS_FACTORY
});
var _MatCommonModule = class _MatCommonModule {
  constructor(highContrastModeDetector, _sanityChecks, _document) {
    this._sanityChecks = _sanityChecks;
    this._document = _document;
    this._hasDoneGlobalChecks = false;
    highContrastModeDetector._applyBodyHighContrastModeCssClasses();
    if (!this._hasDoneGlobalChecks) {
      this._hasDoneGlobalChecks = true;
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        const platform = inject(Platform, {
          optional: true
        });
        if (this._checkIsEnabled("doctype")) {
          _checkDoctypeIsDefined(this._document);
        }
        if (this._checkIsEnabled("theme")) {
          _checkThemeIsPresent(this._document, !!platform?.isBrowser);
        }
        if (this._checkIsEnabled("version")) {
          _checkCdkVersionMatch();
        }
      }
    }
  }
  /** Gets whether a specific sanity check is enabled. */
  _checkIsEnabled(name) {
    if (_isTestEnvironment()) {
      return false;
    }
    if (typeof this._sanityChecks === "boolean") {
      return this._sanityChecks;
    }
    return !!this._sanityChecks[name];
  }
};
_MatCommonModule.\u0275fac = function MatCommonModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCommonModule)(\u0275\u0275inject(HighContrastModeDetector), \u0275\u0275inject(MATERIAL_SANITY_CHECKS, 8), \u0275\u0275inject(DOCUMENT));
};
_MatCommonModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _MatCommonModule
});
_MatCommonModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [BidiModule, BidiModule]
});
var MatCommonModule = _MatCommonModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCommonModule, [{
    type: NgModule,
    args: [{
      imports: [BidiModule],
      exports: [BidiModule]
    }]
  }], () => [{
    type: HighContrastModeDetector
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MATERIAL_SANITY_CHECKS]
    }]
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
function _checkDoctypeIsDefined(doc) {
  if (!doc.doctype) {
    console.warn("Current document does not have a doctype. This may cause some Angular Material components not to behave as expected.");
  }
}
function _checkThemeIsPresent(doc, isBrowser) {
  if (!doc.body || !isBrowser) {
    return;
  }
  const testElement = doc.createElement("div");
  testElement.classList.add("mat-theme-loaded-marker");
  doc.body.appendChild(testElement);
  const computedStyle = getComputedStyle(testElement);
  if (computedStyle && computedStyle.display !== "none") {
    console.warn("Could not find Angular Material core theme. Most Material components may not work as expected. For more info refer to the theming guide: https://material.angular.io/guide/theming");
  }
  testElement.remove();
}
function _checkCdkVersionMatch() {
  if (VERSION2.full !== VERSION.full) {
    console.warn("The Angular Material version (" + VERSION2.full + ") does not match the Angular CDK version (" + VERSION.full + ").\nPlease ensure the versions of these two packages exactly match.");
  }
}
var _ErrorStateTracker = class {
  constructor(_defaultMatcher, ngControl, _parentFormGroup, _parentForm, _stateChanges) {
    this._defaultMatcher = _defaultMatcher;
    this.ngControl = ngControl;
    this._parentFormGroup = _parentFormGroup;
    this._parentForm = _parentForm;
    this._stateChanges = _stateChanges;
    this.errorState = false;
  }
  /** Updates the error state based on the provided error state matcher. */
  updateErrorState() {
    const oldState = this.errorState;
    const parent2 = this._parentFormGroup || this._parentForm;
    const matcher = this.matcher || this._defaultMatcher;
    const control = this.ngControl ? this.ngControl.control : null;
    const newState = matcher?.isErrorState(control, parent2) ?? false;
    if (newState !== oldState) {
      this.errorState = newState;
      this._stateChanges.next();
    }
  }
};
var MAT_DATE_LOCALE = new InjectionToken("MAT_DATE_LOCALE", {
  providedIn: "root",
  factory: MAT_DATE_LOCALE_FACTORY
});
function MAT_DATE_LOCALE_FACTORY() {
  return inject(LOCALE_ID);
}
var DateAdapter = class {
  constructor() {
    this._localeChanges = new Subject();
    this.localeChanges = this._localeChanges;
  }
  /**
   * Given a potential date object, returns that same date object if it is
   * a valid date, or `null` if it's not a valid date.
   * @param obj The object to check.
   * @returns A date or `null`.
   */
  getValidDateOrNull(obj) {
    return this.isDateInstance(obj) && this.isValid(obj) ? obj : null;
  }
  /**
   * Attempts to deserialize a value to a valid date object. This is different from parsing in that
   * deserialize should only accept non-ambiguous, locale-independent formats (e.g. a ISO 8601
   * string). The default implementation does not allow any deserialization, it simply checks that
   * the given value is already a valid date object or null. The `<mat-datepicker>` will call this
   * method on all of its `@Input()` properties that accept dates. It is therefore possible to
   * support passing values from your backend directly to these properties by overriding this method
   * to also deserialize the format used by your backend.
   * @param value The value to be deserialized into a date object.
   * @returns The deserialized date object, either a valid date, null if the value can be
   *     deserialized into a null date (e.g. the empty string), or an invalid date.
   */
  deserialize(value) {
    if (value == null || this.isDateInstance(value) && this.isValid(value)) {
      return value;
    }
    return this.invalid();
  }
  /**
   * Sets the locale used for all dates.
   * @param locale The new locale.
   */
  setLocale(locale) {
    this.locale = locale;
    this._localeChanges.next();
  }
  /**
   * Compares two dates.
   * @param first The first date to compare.
   * @param second The second date to compare.
   * @returns 0 if the dates are equal, a number less than 0 if the first date is earlier,
   *     a number greater than 0 if the first date is later.
   */
  compareDate(first, second) {
    return this.getYear(first) - this.getYear(second) || this.getMonth(first) - this.getMonth(second) || this.getDate(first) - this.getDate(second);
  }
  /**
   * Checks if two dates are equal.
   * @param first The first date to check.
   * @param second The second date to check.
   * @returns Whether the two dates are equal.
   *     Null dates are considered equal to other null dates.
   */
  sameDate(first, second) {
    if (first && second) {
      let firstValid = this.isValid(first);
      let secondValid = this.isValid(second);
      if (firstValid && secondValid) {
        return !this.compareDate(first, second);
      }
      return firstValid == secondValid;
    }
    return first == second;
  }
  /**
   * Clamp the given date between min and max dates.
   * @param date The date to clamp.
   * @param min The minimum value to allow. If null or omitted no min is enforced.
   * @param max The maximum value to allow. If null or omitted no max is enforced.
   * @returns `min` if `date` is less than `min`, `max` if date is greater than `max`,
   *     otherwise `date`.
   */
  clampDate(date, min, max) {
    if (min && this.compareDate(date, min) < 0) {
      return min;
    }
    if (max && this.compareDate(date, max) > 0) {
      return max;
    }
    return date;
  }
};
var MAT_DATE_FORMATS = new InjectionToken("mat-date-formats");
var ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
function range(length, valueFunction) {
  const valuesArray = Array(length);
  for (let i2 = 0; i2 < length; i2++) {
    valuesArray[i2] = valueFunction(i2);
  }
  return valuesArray;
}
var _NativeDateAdapter = class _NativeDateAdapter extends DateAdapter {
  constructor(matDateLocale) {
    super();
    this.useUtcForDisplay = false;
    this._matDateLocale = inject(MAT_DATE_LOCALE, {
      optional: true
    });
    if (matDateLocale !== void 0) {
      this._matDateLocale = matDateLocale;
    }
    super.setLocale(this._matDateLocale);
  }
  getYear(date) {
    return date.getFullYear();
  }
  getMonth(date) {
    return date.getMonth();
  }
  getDate(date) {
    return date.getDate();
  }
  getDayOfWeek(date) {
    return date.getDay();
  }
  getMonthNames(style) {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      month: style,
      timeZone: "utc"
    });
    return range(12, (i2) => this._format(dtf, new Date(2017, i2, 1)));
  }
  getDateNames() {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      day: "numeric",
      timeZone: "utc"
    });
    return range(31, (i2) => this._format(dtf, new Date(2017, 0, i2 + 1)));
  }
  getDayOfWeekNames(style) {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      weekday: style,
      timeZone: "utc"
    });
    return range(7, (i2) => this._format(dtf, new Date(2017, 0, i2 + 1)));
  }
  getYearName(date) {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      year: "numeric",
      timeZone: "utc"
    });
    return this._format(dtf, date);
  }
  getFirstDayOfWeek() {
    return 0;
  }
  getNumDaysInMonth(date) {
    return this.getDate(this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0));
  }
  clone(date) {
    return new Date(date.getTime());
  }
  createDate(year, month, date) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (month < 0 || month > 11) {
        throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
      }
      if (date < 1) {
        throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
      }
    }
    let result = this._createDateWithOverflow(year, month, date);
    if (result.getMonth() != month && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`Invalid date "${date}" for month with index "${month}".`);
    }
    return result;
  }
  today() {
    return /* @__PURE__ */ new Date();
  }
  parse(value, parseFormat) {
    if (typeof value == "number") {
      return new Date(value);
    }
    return value ? new Date(Date.parse(value)) : null;
  }
  format(date, displayFormat) {
    if (!this.isValid(date)) {
      throw Error("NativeDateAdapter: Cannot format invalid date.");
    }
    const dtf = new Intl.DateTimeFormat(this.locale, __spreadProps(__spreadValues({}, displayFormat), {
      timeZone: "utc"
    }));
    return this._format(dtf, date);
  }
  addCalendarYears(date, years) {
    return this.addCalendarMonths(date, years * 12);
  }
  addCalendarMonths(date, months) {
    let newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date));
    if (this.getMonth(newDate) != ((this.getMonth(date) + months) % 12 + 12) % 12) {
      newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0);
    }
    return newDate;
  }
  addCalendarDays(date, days) {
    return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days);
  }
  toIso8601(date) {
    return [date.getUTCFullYear(), this._2digit(date.getUTCMonth() + 1), this._2digit(date.getUTCDate())].join("-");
  }
  /**
   * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
   * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
   * invalid date for all other values.
   */
  deserialize(value) {
    if (typeof value === "string") {
      if (!value) {
        return null;
      }
      if (ISO_8601_REGEX.test(value)) {
        let date = new Date(value);
        if (this.isValid(date)) {
          return date;
        }
      }
    }
    return super.deserialize(value);
  }
  isDateInstance(obj) {
    return obj instanceof Date;
  }
  isValid(date) {
    return !isNaN(date.getTime());
  }
  invalid() {
    return /* @__PURE__ */ new Date(NaN);
  }
  /** Creates a date but allows the month and date to overflow. */
  _createDateWithOverflow(year, month, date) {
    const d2 = /* @__PURE__ */ new Date();
    d2.setFullYear(year, month, date);
    d2.setHours(0, 0, 0, 0);
    return d2;
  }
  /**
   * Pads a number to make it two digits.
   * @param n The number to pad.
   * @returns The padded number.
   */
  _2digit(n2) {
    return ("00" + n2).slice(-2);
  }
  /**
   * When converting Date object to string, javascript built-in functions may return wrong
   * results because it applies its internal DST rules. The DST rules around the world change
   * very frequently, and the current valid rule is not always valid in previous years though.
   * We work around this problem building a new Date object which has its internal UTC
   * representation with the local date and time.
   * @param dtf Intl.DateTimeFormat object, containing the desired string format. It must have
   *    timeZone set to 'utc' to work fine.
   * @param date Date from which we want to get the string representation according to dtf
   * @returns A Date object with its UTC representation based on the passed in date info
   */
  _format(dtf, date) {
    const d2 = /* @__PURE__ */ new Date();
    d2.setUTCFullYear(date.getFullYear(), date.getMonth(), date.getDate());
    d2.setUTCHours(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
    return dtf.format(d2);
  }
};
_NativeDateAdapter.\u0275fac = function NativeDateAdapter_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NativeDateAdapter)(\u0275\u0275inject(MAT_DATE_LOCALE, 8));
};
_NativeDateAdapter.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _NativeDateAdapter,
  factory: _NativeDateAdapter.\u0275fac
});
var NativeDateAdapter = _NativeDateAdapter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NativeDateAdapter, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_DATE_LOCALE]
    }]
  }], null);
})();
var MAT_NATIVE_DATE_FORMATS = {
  parse: {
    dateInput: null
  },
  display: {
    dateInput: {
      year: "numeric",
      month: "numeric",
      day: "numeric"
    },
    monthYearLabel: {
      year: "numeric",
      month: "short"
    },
    dateA11yLabel: {
      year: "numeric",
      month: "long",
      day: "numeric"
    },
    monthYearA11yLabel: {
      year: "numeric",
      month: "long"
    }
  }
};
var _NativeDateModule = class _NativeDateModule {
};
_NativeDateModule.\u0275fac = function NativeDateModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NativeDateModule)();
};
_NativeDateModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _NativeDateModule
});
_NativeDateModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [{
    provide: DateAdapter,
    useClass: NativeDateAdapter
  }]
});
var NativeDateModule = _NativeDateModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NativeDateModule, [{
    type: NgModule,
    args: [{
      providers: [{
        provide: DateAdapter,
        useClass: NativeDateAdapter
      }]
    }]
  }], null, null);
})();
var _MatNativeDateModule = class _MatNativeDateModule {
};
_MatNativeDateModule.\u0275fac = function MatNativeDateModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatNativeDateModule)();
};
_MatNativeDateModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _MatNativeDateModule
});
_MatNativeDateModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideNativeDateAdapter()]
});
var MatNativeDateModule = _MatNativeDateModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatNativeDateModule, [{
    type: NgModule,
    args: [{
      providers: [provideNativeDateAdapter()]
    }]
  }], null, null);
})();
function provideNativeDateAdapter(formats = MAT_NATIVE_DATE_FORMATS) {
  return [{
    provide: DateAdapter,
    useClass: NativeDateAdapter
  }, {
    provide: MAT_DATE_FORMATS,
    useValue: formats
  }];
}
var _ShowOnDirtyErrorStateMatcher = class _ShowOnDirtyErrorStateMatcher {
  isErrorState(control, form) {
    return !!(control && control.invalid && (control.dirty || form && form.submitted));
  }
};
_ShowOnDirtyErrorStateMatcher.\u0275fac = function ShowOnDirtyErrorStateMatcher_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ShowOnDirtyErrorStateMatcher)();
};
_ShowOnDirtyErrorStateMatcher.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ShowOnDirtyErrorStateMatcher,
  factory: _ShowOnDirtyErrorStateMatcher.\u0275fac
});
var ShowOnDirtyErrorStateMatcher = _ShowOnDirtyErrorStateMatcher;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShowOnDirtyErrorStateMatcher, [{
    type: Injectable
  }], null, null);
})();
var _ErrorStateMatcher = class _ErrorStateMatcher {
  isErrorState(control, form) {
    return !!(control && control.invalid && (control.touched || form && form.submitted));
  }
};
_ErrorStateMatcher.\u0275fac = function ErrorStateMatcher_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ErrorStateMatcher)();
};
_ErrorStateMatcher.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ErrorStateMatcher,
  factory: _ErrorStateMatcher.\u0275fac,
  providedIn: "root"
});
var ErrorStateMatcher = _ErrorStateMatcher;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ErrorStateMatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _MatLine = class _MatLine {
};
_MatLine.\u0275fac = function MatLine_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatLine)();
};
_MatLine.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatLine,
  selectors: [["", "mat-line", ""], ["", "matLine", ""]],
  hostAttrs: [1, "mat-line"],
  standalone: true
});
var MatLine = _MatLine;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatLine, [{
    type: Directive,
    args: [{
      selector: "[mat-line], [matLine]",
      host: {
        "class": "mat-line"
      },
      standalone: true
    }]
  }], null, null);
})();
function setLines(lines, element, prefix = "mat") {
  lines.changes.pipe(startWith(lines)).subscribe(({
    length
  }) => {
    setClass(element, `${prefix}-2-line`, false);
    setClass(element, `${prefix}-3-line`, false);
    setClass(element, `${prefix}-multi-line`, false);
    if (length === 2 || length === 3) {
      setClass(element, `${prefix}-${length}-line`, true);
    } else if (length > 3) {
      setClass(element, `${prefix}-multi-line`, true);
    }
  });
}
function setClass(element, className, isAdd) {
  element.nativeElement.classList.toggle(className, isAdd);
}
var _MatLineModule = class _MatLineModule {
};
_MatLineModule.\u0275fac = function MatLineModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatLineModule)();
};
_MatLineModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _MatLineModule
});
_MatLineModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [MatCommonModule, MatCommonModule]
});
var MatLineModule = _MatLineModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatLineModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatLine],
      exports: [MatLine, MatCommonModule]
    }]
  }], null, null);
})();
var RippleState;
(function(RippleState2) {
  RippleState2[RippleState2["FADING_IN"] = 0] = "FADING_IN";
  RippleState2[RippleState2["VISIBLE"] = 1] = "VISIBLE";
  RippleState2[RippleState2["FADING_OUT"] = 2] = "FADING_OUT";
  RippleState2[RippleState2["HIDDEN"] = 3] = "HIDDEN";
})(RippleState || (RippleState = {}));
var RippleRef = class {
  constructor(_renderer, element, config, _animationForciblyDisabledThroughCss = false) {
    this._renderer = _renderer;
    this.element = element;
    this.config = config;
    this._animationForciblyDisabledThroughCss = _animationForciblyDisabledThroughCss;
    this.state = RippleState.HIDDEN;
  }
  /** Fades out the ripple element. */
  fadeOut() {
    this._renderer.fadeOutRipple(this);
  }
};
var passiveCapturingEventOptions$1 = normalizePassiveListenerOptions({
  passive: true,
  capture: true
});
var RippleEventManager = class {
  constructor() {
    this._events = /* @__PURE__ */ new Map();
    this._delegateEventHandler = (event) => {
      const target = _getEventTarget(event);
      if (target) {
        this._events.get(event.type)?.forEach((handlers, element) => {
          if (element === target || element.contains(target)) {
            handlers.forEach((handler) => handler.handleEvent(event));
          }
        });
      }
    };
  }
  /** Adds an event handler. */
  addHandler(ngZone, name, element, handler) {
    const handlersForEvent = this._events.get(name);
    if (handlersForEvent) {
      const handlersForElement = handlersForEvent.get(element);
      if (handlersForElement) {
        handlersForElement.add(handler);
      } else {
        handlersForEvent.set(element, /* @__PURE__ */ new Set([handler]));
      }
    } else {
      this._events.set(name, /* @__PURE__ */ new Map([[element, /* @__PURE__ */ new Set([handler])]]));
      ngZone.runOutsideAngular(() => {
        document.addEventListener(name, this._delegateEventHandler, passiveCapturingEventOptions$1);
      });
    }
  }
  /** Removes an event handler. */
  removeHandler(name, element, handler) {
    const handlersForEvent = this._events.get(name);
    if (!handlersForEvent) {
      return;
    }
    const handlersForElement = handlersForEvent.get(element);
    if (!handlersForElement) {
      return;
    }
    handlersForElement.delete(handler);
    if (handlersForElement.size === 0) {
      handlersForEvent.delete(element);
    }
    if (handlersForEvent.size === 0) {
      this._events.delete(name);
      document.removeEventListener(name, this._delegateEventHandler, passiveCapturingEventOptions$1);
    }
  }
};
var defaultRippleAnimationConfig = {
  enterDuration: 225,
  exitDuration: 150
};
var ignoreMouseEventsTimeout = 800;
var passiveCapturingEventOptions = normalizePassiveListenerOptions({
  passive: true,
  capture: true
});
var pointerDownEvents = ["mousedown", "touchstart"];
var pointerUpEvents = ["mouseup", "mouseleave", "touchend", "touchcancel"];
var _RippleRenderer = class _RippleRenderer {
  constructor(_target, _ngZone, elementOrElementRef, _platform) {
    this._target = _target;
    this._ngZone = _ngZone;
    this._platform = _platform;
    this._isPointerDown = false;
    this._activeRipples = /* @__PURE__ */ new Map();
    this._pointerUpEventsRegistered = false;
    if (_platform.isBrowser) {
      this._containerElement = coerceElement(elementOrElementRef);
    }
  }
  /**
   * Fades in a ripple at the given coordinates.
   * @param x Coordinate within the element, along the X axis at which to start the ripple.
   * @param y Coordinate within the element, along the Y axis at which to start the ripple.
   * @param config Extra ripple options.
   */
  fadeInRipple(x2, y2, config = {}) {
    const containerRect = this._containerRect = this._containerRect || this._containerElement.getBoundingClientRect();
    const animationConfig = __spreadValues(__spreadValues({}, defaultRippleAnimationConfig), config.animation);
    if (config.centered) {
      x2 = containerRect.left + containerRect.width / 2;
      y2 = containerRect.top + containerRect.height / 2;
    }
    const radius = config.radius || distanceToFurthestCorner(x2, y2, containerRect);
    const offsetX = x2 - containerRect.left;
    const offsetY = y2 - containerRect.top;
    const enterDuration = animationConfig.enterDuration;
    const ripple = document.createElement("div");
    ripple.classList.add("mat-ripple-element");
    ripple.style.left = `${offsetX - radius}px`;
    ripple.style.top = `${offsetY - radius}px`;
    ripple.style.height = `${radius * 2}px`;
    ripple.style.width = `${radius * 2}px`;
    if (config.color != null) {
      ripple.style.backgroundColor = config.color;
    }
    ripple.style.transitionDuration = `${enterDuration}ms`;
    this._containerElement.appendChild(ripple);
    const computedStyles = window.getComputedStyle(ripple);
    const userTransitionProperty = computedStyles.transitionProperty;
    const userTransitionDuration = computedStyles.transitionDuration;
    const animationForciblyDisabledThroughCss = userTransitionProperty === "none" || // Note: The canonical unit for serialized CSS `<time>` properties is seconds. Additionally
    // some browsers expand the duration for every property (in our case `opacity` and `transform`).
    userTransitionDuration === "0s" || userTransitionDuration === "0s, 0s" || // If the container is 0x0, it's likely `display: none`.
    containerRect.width === 0 && containerRect.height === 0;
    const rippleRef = new RippleRef(this, ripple, config, animationForciblyDisabledThroughCss);
    ripple.style.transform = "scale3d(1, 1, 1)";
    rippleRef.state = RippleState.FADING_IN;
    if (!config.persistent) {
      this._mostRecentTransientRipple = rippleRef;
    }
    let eventListeners = null;
    if (!animationForciblyDisabledThroughCss && (enterDuration || animationConfig.exitDuration)) {
      this._ngZone.runOutsideAngular(() => {
        const onTransitionEnd = () => {
          if (eventListeners) {
            eventListeners.fallbackTimer = null;
          }
          clearTimeout(fallbackTimer);
          this._finishRippleTransition(rippleRef);
        };
        const onTransitionCancel = () => this._destroyRipple(rippleRef);
        const fallbackTimer = setTimeout(onTransitionCancel, enterDuration + 100);
        ripple.addEventListener("transitionend", onTransitionEnd);
        ripple.addEventListener("transitioncancel", onTransitionCancel);
        eventListeners = {
          onTransitionEnd,
          onTransitionCancel,
          fallbackTimer
        };
      });
    }
    this._activeRipples.set(rippleRef, eventListeners);
    if (animationForciblyDisabledThroughCss || !enterDuration) {
      this._finishRippleTransition(rippleRef);
    }
    return rippleRef;
  }
  /** Fades out a ripple reference. */
  fadeOutRipple(rippleRef) {
    if (rippleRef.state === RippleState.FADING_OUT || rippleRef.state === RippleState.HIDDEN) {
      return;
    }
    const rippleEl = rippleRef.element;
    const animationConfig = __spreadValues(__spreadValues({}, defaultRippleAnimationConfig), rippleRef.config.animation);
    rippleEl.style.transitionDuration = `${animationConfig.exitDuration}ms`;
    rippleEl.style.opacity = "0";
    rippleRef.state = RippleState.FADING_OUT;
    if (rippleRef._animationForciblyDisabledThroughCss || !animationConfig.exitDuration) {
      this._finishRippleTransition(rippleRef);
    }
  }
  /** Fades out all currently active ripples. */
  fadeOutAll() {
    this._getActiveRipples().forEach((ripple) => ripple.fadeOut());
  }
  /** Fades out all currently active non-persistent ripples. */
  fadeOutAllNonPersistent() {
    this._getActiveRipples().forEach((ripple) => {
      if (!ripple.config.persistent) {
        ripple.fadeOut();
      }
    });
  }
  /** Sets up the trigger event listeners */
  setupTriggerEvents(elementOrElementRef) {
    const element = coerceElement(elementOrElementRef);
    if (!this._platform.isBrowser || !element || element === this._triggerElement) {
      return;
    }
    this._removeTriggerEvents();
    this._triggerElement = element;
    pointerDownEvents.forEach((type) => {
      _RippleRenderer._eventManager.addHandler(this._ngZone, type, element, this);
    });
  }
  /**
   * Handles all registered events.
   * @docs-private
   */
  handleEvent(event) {
    if (event.type === "mousedown") {
      this._onMousedown(event);
    } else if (event.type === "touchstart") {
      this._onTouchStart(event);
    } else {
      this._onPointerUp();
    }
    if (!this._pointerUpEventsRegistered) {
      this._ngZone.runOutsideAngular(() => {
        pointerUpEvents.forEach((type) => {
          this._triggerElement.addEventListener(type, this, passiveCapturingEventOptions);
        });
      });
      this._pointerUpEventsRegistered = true;
    }
  }
  /** Method that will be called if the fade-in or fade-in transition completed. */
  _finishRippleTransition(rippleRef) {
    if (rippleRef.state === RippleState.FADING_IN) {
      this._startFadeOutTransition(rippleRef);
    } else if (rippleRef.state === RippleState.FADING_OUT) {
      this._destroyRipple(rippleRef);
    }
  }
  /**
   * Starts the fade-out transition of the given ripple if it's not persistent and the pointer
   * is not held down anymore.
   */
  _startFadeOutTransition(rippleRef) {
    const isMostRecentTransientRipple = rippleRef === this._mostRecentTransientRipple;
    const {
      persistent
    } = rippleRef.config;
    rippleRef.state = RippleState.VISIBLE;
    if (!persistent && (!isMostRecentTransientRipple || !this._isPointerDown)) {
      rippleRef.fadeOut();
    }
  }
  /** Destroys the given ripple by removing it from the DOM and updating its state. */
  _destroyRipple(rippleRef) {
    const eventListeners = this._activeRipples.get(rippleRef) ?? null;
    this._activeRipples.delete(rippleRef);
    if (!this._activeRipples.size) {
      this._containerRect = null;
    }
    if (rippleRef === this._mostRecentTransientRipple) {
      this._mostRecentTransientRipple = null;
    }
    rippleRef.state = RippleState.HIDDEN;
    if (eventListeners !== null) {
      rippleRef.element.removeEventListener("transitionend", eventListeners.onTransitionEnd);
      rippleRef.element.removeEventListener("transitioncancel", eventListeners.onTransitionCancel);
      if (eventListeners.fallbackTimer !== null) {
        clearTimeout(eventListeners.fallbackTimer);
      }
    }
    rippleRef.element.remove();
  }
  /** Function being called whenever the trigger is being pressed using mouse. */
  _onMousedown(event) {
    const isFakeMousedown = isFakeMousedownFromScreenReader(event);
    const isSyntheticEvent = this._lastTouchStartEvent && Date.now() < this._lastTouchStartEvent + ignoreMouseEventsTimeout;
    if (!this._target.rippleDisabled && !isFakeMousedown && !isSyntheticEvent) {
      this._isPointerDown = true;
      this.fadeInRipple(event.clientX, event.clientY, this._target.rippleConfig);
    }
  }
  /** Function being called whenever the trigger is being pressed using touch. */
  _onTouchStart(event) {
    if (!this._target.rippleDisabled && !isFakeTouchstartFromScreenReader(event)) {
      this._lastTouchStartEvent = Date.now();
      this._isPointerDown = true;
      const touches = event.changedTouches;
      if (touches) {
        for (let i2 = 0; i2 < touches.length; i2++) {
          this.fadeInRipple(touches[i2].clientX, touches[i2].clientY, this._target.rippleConfig);
        }
      }
    }
  }
  /** Function being called whenever the trigger is being released. */
  _onPointerUp() {
    if (!this._isPointerDown) {
      return;
    }
    this._isPointerDown = false;
    this._getActiveRipples().forEach((ripple) => {
      const isVisible = ripple.state === RippleState.VISIBLE || ripple.config.terminateOnPointerUp && ripple.state === RippleState.FADING_IN;
      if (!ripple.config.persistent && isVisible) {
        ripple.fadeOut();
      }
    });
  }
  _getActiveRipples() {
    return Array.from(this._activeRipples.keys());
  }
  /** Removes previously registered event listeners from the trigger element. */
  _removeTriggerEvents() {
    const trigger = this._triggerElement;
    if (trigger) {
      pointerDownEvents.forEach((type) => _RippleRenderer._eventManager.removeHandler(type, trigger, this));
      if (this._pointerUpEventsRegistered) {
        pointerUpEvents.forEach((type) => trigger.removeEventListener(type, this, passiveCapturingEventOptions));
        this._pointerUpEventsRegistered = false;
      }
    }
  }
};
_RippleRenderer._eventManager = new RippleEventManager();
var RippleRenderer = _RippleRenderer;
function distanceToFurthestCorner(x2, y2, rect) {
  const distX = Math.max(Math.abs(x2 - rect.left), Math.abs(x2 - rect.right));
  const distY = Math.max(Math.abs(y2 - rect.top), Math.abs(y2 - rect.bottom));
  return Math.sqrt(distX * distX + distY * distY);
}
var MAT_RIPPLE_GLOBAL_OPTIONS = new InjectionToken("mat-ripple-global-options");
var _MatRipple = class _MatRipple {
  /**
   * Whether click events will not trigger the ripple. Ripples can be still launched manually
   * by using the `launch()` method.
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    if (value) {
      this.fadeOutAllNonPersistent();
    }
    this._disabled = value;
    this._setupTriggerEventsIfEnabled();
  }
  /**
   * The element that triggers the ripple when click events are received.
   * Defaults to the directive's host element.
   */
  get trigger() {
    return this._trigger || this._elementRef.nativeElement;
  }
  set trigger(trigger) {
    this._trigger = trigger;
    this._setupTriggerEventsIfEnabled();
  }
  constructor(_elementRef, ngZone, platform, globalOptions, _animationMode) {
    this._elementRef = _elementRef;
    this._animationMode = _animationMode;
    this.radius = 0;
    this._disabled = false;
    this._isInitialized = false;
    this._globalOptions = globalOptions || {};
    this._rippleRenderer = new RippleRenderer(this, ngZone, _elementRef, platform);
  }
  ngOnInit() {
    this._isInitialized = true;
    this._setupTriggerEventsIfEnabled();
  }
  ngOnDestroy() {
    this._rippleRenderer._removeTriggerEvents();
  }
  /** Fades out all currently showing ripple elements. */
  fadeOutAll() {
    this._rippleRenderer.fadeOutAll();
  }
  /** Fades out all currently showing non-persistent ripple elements. */
  fadeOutAllNonPersistent() {
    this._rippleRenderer.fadeOutAllNonPersistent();
  }
  /**
   * Ripple configuration from the directive's input values.
   * @docs-private Implemented as part of RippleTarget
   */
  get rippleConfig() {
    return {
      centered: this.centered,
      radius: this.radius,
      color: this.color,
      animation: __spreadValues(__spreadValues(__spreadValues({}, this._globalOptions.animation), this._animationMode === "NoopAnimations" ? {
        enterDuration: 0,
        exitDuration: 0
      } : {}), this.animation),
      terminateOnPointerUp: this._globalOptions.terminateOnPointerUp
    };
  }
  /**
   * Whether ripples on pointer-down are disabled or not.
   * @docs-private Implemented as part of RippleTarget
   */
  get rippleDisabled() {
    return this.disabled || !!this._globalOptions.disabled;
  }
  /** Sets up the trigger event listeners if ripples are enabled. */
  _setupTriggerEventsIfEnabled() {
    if (!this.disabled && this._isInitialized) {
      this._rippleRenderer.setupTriggerEvents(this.trigger);
    }
  }
  /** Launches a manual ripple at the specified coordinated or just by the ripple config. */
  launch(configOrX, y2 = 0, config) {
    if (typeof configOrX === "number") {
      return this._rippleRenderer.fadeInRipple(configOrX, y2, __spreadValues(__spreadValues({}, this.rippleConfig), config));
    } else {
      return this._rippleRenderer.fadeInRipple(0, 0, __spreadValues(__spreadValues({}, this.rippleConfig), configOrX));
    }
  }
};
_MatRipple.\u0275fac = function MatRipple_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatRipple)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(Platform), \u0275\u0275directiveInject(MAT_RIPPLE_GLOBAL_OPTIONS, 8), \u0275\u0275directiveInject(ANIMATION_MODULE_TYPE, 8));
};
_MatRipple.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatRipple,
  selectors: [["", "mat-ripple", ""], ["", "matRipple", ""]],
  hostAttrs: [1, "mat-ripple"],
  hostVars: 2,
  hostBindings: function MatRipple_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("mat-ripple-unbounded", ctx.unbounded);
    }
  },
  inputs: {
    color: [0, "matRippleColor", "color"],
    unbounded: [0, "matRippleUnbounded", "unbounded"],
    centered: [0, "matRippleCentered", "centered"],
    radius: [0, "matRippleRadius", "radius"],
    animation: [0, "matRippleAnimation", "animation"],
    disabled: [0, "matRippleDisabled", "disabled"],
    trigger: [0, "matRippleTrigger", "trigger"]
  },
  exportAs: ["matRipple"],
  standalone: true
});
var MatRipple = _MatRipple;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRipple, [{
    type: Directive,
    args: [{
      selector: "[mat-ripple], [matRipple]",
      exportAs: "matRipple",
      host: {
        "class": "mat-ripple",
        "[class.mat-ripple-unbounded]": "unbounded"
      },
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: Platform
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_RIPPLE_GLOBAL_OPTIONS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }], {
    color: [{
      type: Input,
      args: ["matRippleColor"]
    }],
    unbounded: [{
      type: Input,
      args: ["matRippleUnbounded"]
    }],
    centered: [{
      type: Input,
      args: ["matRippleCentered"]
    }],
    radius: [{
      type: Input,
      args: ["matRippleRadius"]
    }],
    animation: [{
      type: Input,
      args: ["matRippleAnimation"]
    }],
    disabled: [{
      type: Input,
      args: ["matRippleDisabled"]
    }],
    trigger: [{
      type: Input,
      args: ["matRippleTrigger"]
    }]
  });
})();
var _MatRippleModule = class _MatRippleModule {
};
_MatRippleModule.\u0275fac = function MatRippleModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatRippleModule)();
};
_MatRippleModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _MatRippleModule
});
_MatRippleModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [MatCommonModule, MatCommonModule]
});
var MatRippleModule = _MatRippleModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRippleModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatRipple],
      exports: [MatRipple, MatCommonModule]
    }]
  }], null, null);
})();
var _MatPseudoCheckbox = class _MatPseudoCheckbox {
  constructor(_animationMode) {
    this._animationMode = _animationMode;
    this.state = "unchecked";
    this.disabled = false;
    this.appearance = "full";
  }
};
_MatPseudoCheckbox.\u0275fac = function MatPseudoCheckbox_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatPseudoCheckbox)(\u0275\u0275directiveInject(ANIMATION_MODULE_TYPE, 8));
};
_MatPseudoCheckbox.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatPseudoCheckbox,
  selectors: [["mat-pseudo-checkbox"]],
  hostAttrs: [1, "mat-pseudo-checkbox"],
  hostVars: 12,
  hostBindings: function MatPseudoCheckbox_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("mat-pseudo-checkbox-indeterminate", ctx.state === "indeterminate")("mat-pseudo-checkbox-checked", ctx.state === "checked")("mat-pseudo-checkbox-disabled", ctx.disabled)("mat-pseudo-checkbox-minimal", ctx.appearance === "minimal")("mat-pseudo-checkbox-full", ctx.appearance === "full")("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    }
  },
  inputs: {
    state: "state",
    disabled: "disabled",
    appearance: "appearance"
  },
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  decls: 0,
  vars: 0,
  template: function MatPseudoCheckbox_Template(rf, ctx) {
  },
  styles: ['.mat-pseudo-checkbox{border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:"";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-pseudo-checkbox._mat-animation-noopable::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{left:1px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{left:1px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-minimal-pseudo-checkbox-selected-checkmark-color, var(--mat-app-primary))}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color)}.mat-pseudo-checkbox-full{border-color:var(--mat-full-pseudo-checkbox-unselected-icon-color, var(--mat-app-on-surface-variant));border-width:2px;border-style:solid}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled{border-color:var(--mat-full-pseudo-checkbox-disabled-unselected-icon-color)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate{background-color:var(--mat-full-pseudo-checkbox-selected-icon-color, var(--mat-app-primary));border-color:rgba(0,0,0,0)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-full-pseudo-checkbox-selected-checkmark-color, var(--mat-app-on-primary))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background-color:var(--mat-full-pseudo-checkbox-disabled-selected-icon-color)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-full-pseudo-checkbox-disabled-selected-checkmark-color, var(--mat-app-surface))}.mat-pseudo-checkbox{width:18px;height:18px}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after{width:14px;height:6px;transform-origin:center;top:-4.2426406871px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{top:8px;width:16px}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after{width:10px;height:4px;transform-origin:center;top:-2.8284271247px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{top:6px;width:12px}'],
  encapsulation: 2,
  changeDetection: 0
});
var MatPseudoCheckbox = _MatPseudoCheckbox;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPseudoCheckbox, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "mat-pseudo-checkbox",
      template: "",
      host: {
        "class": "mat-pseudo-checkbox",
        "[class.mat-pseudo-checkbox-indeterminate]": 'state === "indeterminate"',
        "[class.mat-pseudo-checkbox-checked]": 'state === "checked"',
        "[class.mat-pseudo-checkbox-disabled]": "disabled",
        "[class.mat-pseudo-checkbox-minimal]": 'appearance === "minimal"',
        "[class.mat-pseudo-checkbox-full]": 'appearance === "full"',
        "[class._mat-animation-noopable]": '_animationMode === "NoopAnimations"'
      },
      standalone: true,
      styles: ['.mat-pseudo-checkbox{border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:"";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-pseudo-checkbox._mat-animation-noopable::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{left:1px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{left:1px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-minimal-pseudo-checkbox-selected-checkmark-color, var(--mat-app-primary))}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color)}.mat-pseudo-checkbox-full{border-color:var(--mat-full-pseudo-checkbox-unselected-icon-color, var(--mat-app-on-surface-variant));border-width:2px;border-style:solid}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled{border-color:var(--mat-full-pseudo-checkbox-disabled-unselected-icon-color)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate{background-color:var(--mat-full-pseudo-checkbox-selected-icon-color, var(--mat-app-primary));border-color:rgba(0,0,0,0)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-full-pseudo-checkbox-selected-checkmark-color, var(--mat-app-on-primary))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background-color:var(--mat-full-pseudo-checkbox-disabled-selected-icon-color)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-full-pseudo-checkbox-disabled-selected-checkmark-color, var(--mat-app-surface))}.mat-pseudo-checkbox{width:18px;height:18px}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after{width:14px;height:6px;transform-origin:center;top:-4.2426406871px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{top:8px;width:16px}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after{width:10px;height:4px;transform-origin:center;top:-2.8284271247px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{top:6px;width:12px}']
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }], {
    state: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    appearance: [{
      type: Input
    }]
  });
})();
var _MatPseudoCheckboxModule = class _MatPseudoCheckboxModule {
};
_MatPseudoCheckboxModule.\u0275fac = function MatPseudoCheckboxModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatPseudoCheckboxModule)();
};
_MatPseudoCheckboxModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _MatPseudoCheckboxModule
});
_MatPseudoCheckboxModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [MatCommonModule]
});
var MatPseudoCheckboxModule = _MatPseudoCheckboxModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPseudoCheckboxModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatPseudoCheckbox],
      exports: [MatPseudoCheckbox]
    }]
  }], null, null);
})();
var MAT_OPTION_PARENT_COMPONENT = new InjectionToken("MAT_OPTION_PARENT_COMPONENT");
var _uniqueOptgroupIdCounter = 0;
var MAT_OPTGROUP = new InjectionToken("MatOptgroup");
var _MatOptgroup = class _MatOptgroup {
  constructor(parent2) {
    this.disabled = false;
    this._labelId = `mat-optgroup-label-${_uniqueOptgroupIdCounter++}`;
    this._inert = parent2?.inertGroups ?? false;
  }
};
_MatOptgroup.\u0275fac = function MatOptgroup_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatOptgroup)(\u0275\u0275directiveInject(MAT_OPTION_PARENT_COMPONENT, 8));
};
_MatOptgroup.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatOptgroup,
  selectors: [["mat-optgroup"]],
  hostAttrs: [1, "mat-mdc-optgroup"],
  hostVars: 3,
  hostBindings: function MatOptgroup_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("role", ctx._inert ? null : "group")("aria-disabled", ctx._inert ? null : ctx.disabled.toString())("aria-labelledby", ctx._inert ? null : ctx._labelId);
    }
  },
  inputs: {
    label: "label",
    disabled: [2, "disabled", "disabled", booleanAttribute]
  },
  exportAs: ["matOptgroup"],
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([{
    provide: MAT_OPTGROUP,
    useExisting: _MatOptgroup
  }]), \u0275\u0275InputTransformsFeature, \u0275\u0275StandaloneFeature],
  ngContentSelectors: _c15,
  decls: 5,
  vars: 4,
  consts: [["role", "presentation", 1, "mat-mdc-optgroup-label", 3, "id"], [1, "mdc-list-item__primary-text"]],
  template: function MatOptgroup_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c05);
      \u0275\u0275elementStart(0, "span", 0)(1, "span", 1);
      \u0275\u0275text(2);
      \u0275\u0275projection(3);
      \u0275\u0275elementEnd()();
      \u0275\u0275projection(4, 1);
    }
    if (rf & 2) {
      \u0275\u0275classProp("mdc-list-item--disabled", ctx.disabled);
      \u0275\u0275property("id", ctx._labelId);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.label, " ");
    }
  },
  styles: [".mat-mdc-optgroup{color:var(--mat-optgroup-label-text-color, var(--mat-app-on-surface-variant));font-family:var(--mat-optgroup-label-text-font, var(--mat-app-title-small-font));line-height:var(--mat-optgroup-label-text-line-height, var(--mat-app-title-small-line-height));font-size:var(--mat-optgroup-label-text-size, var(--mat-app-title-small-size));letter-spacing:var(--mat-optgroup-label-text-tracking, var(--mat-app-title-small-tracking));font-weight:var(--mat-optgroup-label-text-weight, var(--mat-app-title-small-weight))}.mat-mdc-optgroup-label{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;min-height:48px;padding:0 16px;outline:none}.mat-mdc-optgroup-label.mdc-list-item--disabled{opacity:.38}.mat-mdc-optgroup-label .mdc-list-item__primary-text{font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;white-space:normal}"],
  encapsulation: 2,
  changeDetection: 0
});
var MatOptgroup = _MatOptgroup;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatOptgroup, [{
    type: Component,
    args: [{
      selector: "mat-optgroup",
      exportAs: "matOptgroup",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "class": "mat-mdc-optgroup",
        "[attr.role]": '_inert ? null : "group"',
        "[attr.aria-disabled]": "_inert ? null : disabled.toString()",
        "[attr.aria-labelledby]": "_inert ? null : _labelId"
      },
      providers: [{
        provide: MAT_OPTGROUP,
        useExisting: MatOptgroup
      }],
      standalone: true,
      template: '<span\n  class="mat-mdc-optgroup-label"\n  role="presentation"\n  [class.mdc-list-item--disabled]="disabled"\n  [id]="_labelId">\n  <span class="mdc-list-item__primary-text">{{ label }} <ng-content></ng-content></span>\n</span>\n\n<ng-content select="mat-option, ng-container"></ng-content>\n',
      styles: [".mat-mdc-optgroup{color:var(--mat-optgroup-label-text-color, var(--mat-app-on-surface-variant));font-family:var(--mat-optgroup-label-text-font, var(--mat-app-title-small-font));line-height:var(--mat-optgroup-label-text-line-height, var(--mat-app-title-small-line-height));font-size:var(--mat-optgroup-label-text-size, var(--mat-app-title-small-size));letter-spacing:var(--mat-optgroup-label-text-tracking, var(--mat-app-title-small-tracking));font-weight:var(--mat-optgroup-label-text-weight, var(--mat-app-title-small-weight))}.mat-mdc-optgroup-label{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;min-height:48px;padding:0 16px;outline:none}.mat-mdc-optgroup-label.mdc-list-item--disabled{opacity:.38}.mat-mdc-optgroup-label .mdc-list-item__primary-text{font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;white-space:normal}"]
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_OPTION_PARENT_COMPONENT]
    }, {
      type: Optional
    }]
  }], {
    label: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var _uniqueIdCounter = 0;
var MatOptionSelectionChange = class {
  constructor(source, isUserInput = false) {
    this.source = source;
    this.isUserInput = isUserInput;
  }
};
var _MatOption = class _MatOption {
  /** Whether the wrapping component is in multiple selection mode. */
  get multiple() {
    return this._parent && this._parent.multiple;
  }
  /** Whether or not the option is currently selected. */
  get selected() {
    return this._selected;
  }
  /** Whether the option is disabled. */
  get disabled() {
    return this.group && this.group.disabled || this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
  }
  /** Whether ripples for the option are disabled. */
  get disableRipple() {
    return !!(this._parent && this._parent.disableRipple);
  }
  /** Whether to display checkmark for single-selection. */
  get hideSingleSelectionIndicator() {
    return !!(this._parent && this._parent.hideSingleSelectionIndicator);
  }
  constructor(_element, _changeDetectorRef, _parent, group) {
    this._element = _element;
    this._changeDetectorRef = _changeDetectorRef;
    this._parent = _parent;
    this.group = group;
    this._selected = false;
    this._active = false;
    this._disabled = false;
    this._mostRecentViewValue = "";
    this.id = `mat-option-${_uniqueIdCounter++}`;
    this.onSelectionChange = new EventEmitter();
    this._stateChanges = new Subject();
  }
  /**
   * Whether or not the option is currently active and ready to be selected.
   * An active option displays styles as if it is focused, but the
   * focus is actually retained somewhere else. This comes in handy
   * for components like autocomplete where focus must remain on the input.
   */
  get active() {
    return this._active;
  }
  /**
   * The displayed value of the option. It is necessary to show the selected option in the
   * select's trigger.
   */
  get viewValue() {
    return (this._text?.nativeElement.textContent || "").trim();
  }
  /** Selects the option. */
  select(emitEvent = true) {
    if (!this._selected) {
      this._selected = true;
      this._changeDetectorRef.markForCheck();
      if (emitEvent) {
        this._emitSelectionChangeEvent();
      }
    }
  }
  /** Deselects the option. */
  deselect(emitEvent = true) {
    if (this._selected) {
      this._selected = false;
      this._changeDetectorRef.markForCheck();
      if (emitEvent) {
        this._emitSelectionChangeEvent();
      }
    }
  }
  /** Sets focus onto this option. */
  focus(_origin, options) {
    const element = this._getHostElement();
    if (typeof element.focus === "function") {
      element.focus(options);
    }
  }
  /**
   * This method sets display styles on the option to make it appear
   * active. This is used by the ActiveDescendantKeyManager so key
   * events will display the proper options as active on arrow key events.
   */
  setActiveStyles() {
    if (!this._active) {
      this._active = true;
      this._changeDetectorRef.markForCheck();
    }
  }
  /**
   * This method removes display styles on the option that made it appear
   * active. This is used by the ActiveDescendantKeyManager so key
   * events will display the proper options as active on arrow key events.
   */
  setInactiveStyles() {
    if (this._active) {
      this._active = false;
      this._changeDetectorRef.markForCheck();
    }
  }
  /** Gets the label to be used when determining whether the option should be focused. */
  getLabel() {
    return this.viewValue;
  }
  /** Ensures the option is selected when activated from the keyboard. */
  _handleKeydown(event) {
    if ((event.keyCode === ENTER || event.keyCode === SPACE) && !hasModifierKey(event)) {
      this._selectViaInteraction();
      event.preventDefault();
    }
  }
  /**
   * `Selects the option while indicating the selection came from the user. Used to
   * determine if the select's view -> model callback should be invoked.`
   */
  _selectViaInteraction() {
    if (!this.disabled) {
      this._selected = this.multiple ? !this._selected : true;
      this._changeDetectorRef.markForCheck();
      this._emitSelectionChangeEvent(true);
    }
  }
  /** Returns the correct tabindex for the option depending on disabled state. */
  // This method is only used by `MatLegacyOption`. Keeping it here to avoid breaking the types.
  // That's because `MatLegacyOption` use `MatOption` type in a few places such as
  // `MatOptionSelectionChange`. It is safe to delete this when `MatLegacyOption` is deleted.
  _getTabIndex() {
    return this.disabled ? "-1" : "0";
  }
  /** Gets the host DOM element. */
  _getHostElement() {
    return this._element.nativeElement;
  }
  ngAfterViewChecked() {
    if (this._selected) {
      const viewValue = this.viewValue;
      if (viewValue !== this._mostRecentViewValue) {
        if (this._mostRecentViewValue) {
          this._stateChanges.next();
        }
        this._mostRecentViewValue = viewValue;
      }
    }
  }
  ngOnDestroy() {
    this._stateChanges.complete();
  }
  /** Emits the selection change event. */
  _emitSelectionChangeEvent(isUserInput = false) {
    this.onSelectionChange.emit(new MatOptionSelectionChange(this, isUserInput));
  }
};
_MatOption.\u0275fac = function MatOption_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(MAT_OPTION_PARENT_COMPONENT, 8), \u0275\u0275directiveInject(MAT_OPTGROUP, 8));
};
_MatOption.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatOption,
  selectors: [["mat-option"]],
  viewQuery: function MatOption_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c22, 7);
    }
    if (rf & 2) {
      let _t2;
      \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx._text = _t2.first);
    }
  },
  hostAttrs: ["role", "option", 1, "mat-mdc-option", "mdc-list-item"],
  hostVars: 11,
  hostBindings: function MatOption_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function MatOption_click_HostBindingHandler() {
        return ctx._selectViaInteraction();
      })("keydown", function MatOption_keydown_HostBindingHandler($event) {
        return ctx._handleKeydown($event);
      });
    }
    if (rf & 2) {
      \u0275\u0275hostProperty("id", ctx.id);
      \u0275\u0275attribute("aria-selected", ctx.selected)("aria-disabled", ctx.disabled.toString());
      \u0275\u0275classProp("mdc-list-item--selected", ctx.selected)("mat-mdc-option-multiple", ctx.multiple)("mat-mdc-option-active", ctx.active)("mdc-list-item--disabled", ctx.disabled);
    }
  },
  inputs: {
    value: "value",
    id: "id",
    disabled: [2, "disabled", "disabled", booleanAttribute]
  },
  outputs: {
    onSelectionChange: "onSelectionChange"
  },
  exportAs: ["matOption"],
  standalone: true,
  features: [\u0275\u0275InputTransformsFeature, \u0275\u0275StandaloneFeature],
  ngContentSelectors: _c4,
  decls: 8,
  vars: 5,
  consts: [["text", ""], ["aria-hidden", "true", 1, "mat-mdc-option-pseudo-checkbox", 3, "disabled", "state"], [1, "mdc-list-item__primary-text"], ["state", "checked", "aria-hidden", "true", "appearance", "minimal", 1, "mat-mdc-option-pseudo-checkbox", 3, "disabled"], [1, "cdk-visually-hidden"], ["aria-hidden", "true", "mat-ripple", "", 1, "mat-mdc-option-ripple", "mat-mdc-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled"]],
  template: function MatOption_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c3);
      \u0275\u0275template(0, MatOption_Conditional_0_Template, 1, 2, "mat-pseudo-checkbox", 1);
      \u0275\u0275projection(1);
      \u0275\u0275elementStart(2, "span", 2, 0);
      \u0275\u0275projection(4, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, MatOption_Conditional_5_Template, 1, 1, "mat-pseudo-checkbox", 3)(6, MatOption_Conditional_6_Template, 2, 1, "span", 4);
      \u0275\u0275element(7, "div", 5);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.multiple ? 0 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(!ctx.multiple && ctx.selected && !ctx.hideSingleSelectionIndicator ? 5 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.group && ctx.group._inert ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disabled || ctx.disableRipple);
    }
  },
  dependencies: [MatPseudoCheckbox, MatRipple],
  styles: ['.mat-mdc-option{-webkit-user-select:none;user-select:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;min-height:48px;padding:0 16px;cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);color:var(--mat-option-label-text-color, var(--mat-app-on-surface));font-family:var(--mat-option-label-text-font, var(--mat-app-label-large-font));line-height:var(--mat-option-label-text-line-height, var(--mat-app-label-large-line-height));font-size:var(--mat-option-label-text-size, var(--mat-app-body-large-size));letter-spacing:var(--mat-option-label-text-tracking, var(--mat-app-label-large-tracking));font-weight:var(--mat-option-label-text-weight, var(--mat-app-body-large-weight))}.mat-mdc-option:hover:not(.mdc-list-item--disabled){background-color:var(--mat-option-hover-state-layer-color)}.mat-mdc-option:focus.mdc-list-item,.mat-mdc-option.mat-mdc-option-active.mdc-list-item{background-color:var(--mat-option-focus-state-layer-color);outline:0}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled) .mdc-list-item__primary-text{color:var(--mat-option-selected-state-label-text-color, var(--mat-app-on-secondary-container))}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-multiple){background-color:var(--mat-option-selected-state-layer-color, var(--mat-app-secondary-container))}.mat-mdc-option .mat-pseudo-checkbox{--mat-minimal-pseudo-checkbox-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-app-on-secondary-container))}.mat-mdc-option.mdc-list-item{align-items:center;background:rgba(0,0,0,0)}.mat-mdc-option.mdc-list-item--disabled{cursor:default;pointer-events:none}.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox,.mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text,.mat-mdc-option.mdc-list-item--disabled>mat-icon{opacity:.38}.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:32px}[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:16px;padding-right:32px}.mat-mdc-option .mat-icon,.mat-mdc-option .mat-pseudo-checkbox-full{margin-right:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-icon,[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full{margin-right:0;margin-left:16px}.mat-mdc-option .mat-pseudo-checkbox-minimal{margin-left:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal{margin-right:16px;margin-left:0}.mat-mdc-option .mat-mdc-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-option .mdc-list-item__primary-text{white-space:normal;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;margin-right:auto}[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text{margin-right:0;margin-left:auto}.cdk-high-contrast-active .mat-mdc-option.mdc-list-item--selected:not(.mat-mdc-option-multiple)::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}[dir=rtl] .cdk-high-contrast-active .mat-mdc-option.mdc-list-item--selected:not(.mat-mdc-option-multiple)::after{right:auto;left:16px}.mat-mdc-option-multiple{--mdc-list-list-item-selected-container-color:var(--mdc-list-list-item-container-color, transparent)}.mat-mdc-option-active .mat-mdc-focus-indicator::before{content:""}'],
  encapsulation: 2,
  changeDetection: 0
});
var MatOption = _MatOption;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatOption, [{
    type: Component,
    args: [{
      selector: "mat-option",
      exportAs: "matOption",
      host: {
        "role": "option",
        "[class.mdc-list-item--selected]": "selected",
        "[class.mat-mdc-option-multiple]": "multiple",
        "[class.mat-mdc-option-active]": "active",
        "[class.mdc-list-item--disabled]": "disabled",
        "[id]": "id",
        // Set aria-selected to false for non-selected items and true for selected items. Conform to
        // [WAI ARIA Listbox authoring practices guide](
        //  https://www.w3.org/WAI/ARIA/apg/patterns/listbox/), "If any options are selected, each
        // selected option has either aria-selected or aria-checked  set to true. All options that are
        // selectable but not selected have either aria-selected or aria-checked set to false." Align
        // aria-selected implementation of Chips and List components.
        //
        // Set `aria-selected="false"` on not-selected listbox options to fix VoiceOver announcing
        // every option as "selected" (#21491).
        "[attr.aria-selected]": "selected",
        "[attr.aria-disabled]": "disabled.toString()",
        "(click)": "_selectViaInteraction()",
        "(keydown)": "_handleKeydown($event)",
        "class": "mat-mdc-option mdc-list-item"
      },
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [MatPseudoCheckbox, MatRipple],
      template: `<!-- Set aria-hidden="true" to this DOM node and other decorative nodes in this file. This might
 be contributing to issue where sometimes VoiceOver focuses on a TextNode in the a11y tree instead
 of the Option node (#23202). Most assistive technology will generally ignore non-role,
 non-text-content elements. Adding aria-hidden seems to make VoiceOver behave more consistently. -->
@if (multiple) {
    <mat-pseudo-checkbox
        class="mat-mdc-option-pseudo-checkbox"
        [disabled]="disabled"
        [state]="selected ? 'checked' : 'unchecked'"
        aria-hidden="true"></mat-pseudo-checkbox>
}

<ng-content select="mat-icon"></ng-content>

<span class="mdc-list-item__primary-text" #text><ng-content></ng-content></span>

<!-- Render checkmark at the end for single-selection. -->
@if (!multiple && selected && !hideSingleSelectionIndicator) {
    <mat-pseudo-checkbox
        class="mat-mdc-option-pseudo-checkbox"
        [disabled]="disabled"
        state="checked"
        aria-hidden="true"
        appearance="minimal"></mat-pseudo-checkbox>
}

<!-- See a11y notes inside optgroup.ts for context behind this element. -->
@if (group && group._inert) {
    <span class="cdk-visually-hidden">({{ group.label }})</span>
}

<div class="mat-mdc-option-ripple mat-mdc-focus-indicator" aria-hidden="true" mat-ripple
     [matRippleTrigger]="_getHostElement()" [matRippleDisabled]="disabled || disableRipple">
</div>
`,
      styles: ['.mat-mdc-option{-webkit-user-select:none;user-select:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;min-height:48px;padding:0 16px;cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);color:var(--mat-option-label-text-color, var(--mat-app-on-surface));font-family:var(--mat-option-label-text-font, var(--mat-app-label-large-font));line-height:var(--mat-option-label-text-line-height, var(--mat-app-label-large-line-height));font-size:var(--mat-option-label-text-size, var(--mat-app-body-large-size));letter-spacing:var(--mat-option-label-text-tracking, var(--mat-app-label-large-tracking));font-weight:var(--mat-option-label-text-weight, var(--mat-app-body-large-weight))}.mat-mdc-option:hover:not(.mdc-list-item--disabled){background-color:var(--mat-option-hover-state-layer-color)}.mat-mdc-option:focus.mdc-list-item,.mat-mdc-option.mat-mdc-option-active.mdc-list-item{background-color:var(--mat-option-focus-state-layer-color);outline:0}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled) .mdc-list-item__primary-text{color:var(--mat-option-selected-state-label-text-color, var(--mat-app-on-secondary-container))}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-multiple){background-color:var(--mat-option-selected-state-layer-color, var(--mat-app-secondary-container))}.mat-mdc-option .mat-pseudo-checkbox{--mat-minimal-pseudo-checkbox-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-app-on-secondary-container))}.mat-mdc-option.mdc-list-item{align-items:center;background:rgba(0,0,0,0)}.mat-mdc-option.mdc-list-item--disabled{cursor:default;pointer-events:none}.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox,.mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text,.mat-mdc-option.mdc-list-item--disabled>mat-icon{opacity:.38}.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:32px}[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:16px;padding-right:32px}.mat-mdc-option .mat-icon,.mat-mdc-option .mat-pseudo-checkbox-full{margin-right:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-icon,[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full{margin-right:0;margin-left:16px}.mat-mdc-option .mat-pseudo-checkbox-minimal{margin-left:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal{margin-right:16px;margin-left:0}.mat-mdc-option .mat-mdc-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-option .mdc-list-item__primary-text{white-space:normal;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;margin-right:auto}[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text{margin-right:0;margin-left:auto}.cdk-high-contrast-active .mat-mdc-option.mdc-list-item--selected:not(.mat-mdc-option-multiple)::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}[dir=rtl] .cdk-high-contrast-active .mat-mdc-option.mdc-list-item--selected:not(.mat-mdc-option-multiple)::after{right:auto;left:16px}.mat-mdc-option-multiple{--mdc-list-list-item-selected-container-color:var(--mdc-list-list-item-container-color, transparent)}.mat-mdc-option-active .mat-mdc-focus-indicator::before{content:""}']
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_OPTION_PARENT_COMPONENT]
    }]
  }, {
    type: MatOptgroup,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_OPTGROUP]
    }]
  }], {
    value: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onSelectionChange: [{
      type: Output
    }],
    _text: [{
      type: ViewChild,
      args: ["text", {
        static: true
      }]
    }]
  });
})();
function _countGroupLabelsBeforeOption(optionIndex, options, optionGroups) {
  if (optionGroups.length) {
    let optionsArray = options.toArray();
    let groups = optionGroups.toArray();
    let groupCounter = 0;
    for (let i2 = 0; i2 < optionIndex + 1; i2++) {
      if (optionsArray[i2].group && optionsArray[i2].group === groups[groupCounter]) {
        groupCounter++;
      }
    }
    return groupCounter;
  }
  return 0;
}
function _getOptionScrollPosition(optionOffset, optionHeight, currentScrollPosition, panelHeight) {
  if (optionOffset < currentScrollPosition) {
    return optionOffset;
  }
  if (optionOffset + optionHeight > currentScrollPosition + panelHeight) {
    return Math.max(0, optionOffset - panelHeight + optionHeight);
  }
  return currentScrollPosition;
}
var _MatOptionModule = class _MatOptionModule {
};
_MatOptionModule.\u0275fac = function MatOptionModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatOptionModule)();
};
_MatOptionModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _MatOptionModule
});
_MatOptionModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [MatRippleModule, MatCommonModule, MatPseudoCheckboxModule]
});
var MatOptionModule = _MatOptionModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatOptionModule, [{
    type: NgModule,
    args: [{
      imports: [MatRippleModule, MatCommonModule, MatPseudoCheckboxModule, MatOption, MatOptgroup],
      exports: [MatOption, MatOptgroup]
    }]
  }], null, null);
})();
var eventListenerOptions = {
  capture: true
};
var rippleInteractionEvents = ["focus", "mousedown", "mouseenter", "touchstart"];
var matRippleUninitialized = "mat-ripple-loader-uninitialized";
var matRippleClassName = "mat-ripple-loader-class-name";
var matRippleCentered = "mat-ripple-loader-centered";
var matRippleDisabled = "mat-ripple-loader-disabled";
var _MatRippleLoader = class _MatRippleLoader {
  constructor() {
    this._document = inject(DOCUMENT, {
      optional: true
    });
    this._animationMode = inject(ANIMATION_MODULE_TYPE, {
      optional: true
    });
    this._globalRippleOptions = inject(MAT_RIPPLE_GLOBAL_OPTIONS, {
      optional: true
    });
    this._platform = inject(Platform);
    this._ngZone = inject(NgZone);
    this._hosts = /* @__PURE__ */ new Map();
    this._onInteraction = (event) => {
      const eventTarget = _getEventTarget(event);
      if (eventTarget instanceof HTMLElement) {
        const element = eventTarget.closest(`[${matRippleUninitialized}="${this._globalRippleOptions?.namespace ?? ""}"]`);
        if (element) {
          this._createRipple(element);
        }
      }
    };
    this._ngZone.runOutsideAngular(() => {
      for (const event of rippleInteractionEvents) {
        this._document?.addEventListener(event, this._onInteraction, eventListenerOptions);
      }
    });
  }
  ngOnDestroy() {
    const hosts = this._hosts.keys();
    for (const host of hosts) {
      this.destroyRipple(host);
    }
    for (const event of rippleInteractionEvents) {
      this._document?.removeEventListener(event, this._onInteraction, eventListenerOptions);
    }
  }
  /**
   * Configures the ripple that will be rendered by the ripple loader.
   *
   * Stores the given information about how the ripple should be configured on the host
   * element so that it can later be retrived & used when the ripple is actually created.
   */
  configureRipple(host, config) {
    host.setAttribute(matRippleUninitialized, this._globalRippleOptions?.namespace ?? "");
    if (config.className || !host.hasAttribute(matRippleClassName)) {
      host.setAttribute(matRippleClassName, config.className || "");
    }
    if (config.centered) {
      host.setAttribute(matRippleCentered, "");
    }
    if (config.disabled) {
      host.setAttribute(matRippleDisabled, "");
    }
  }
  /** Returns the ripple instance for the given host element. */
  getRipple(host) {
    const ripple = this._hosts.get(host);
    return ripple || this._createRipple(host);
  }
  /** Sets the disabled state on the ripple instance corresponding to the given host element. */
  setDisabled(host, disabled) {
    const ripple = this._hosts.get(host);
    if (ripple) {
      ripple.disabled = disabled;
      return;
    }
    if (disabled) {
      host.setAttribute(matRippleDisabled, "");
    } else {
      host.removeAttribute(matRippleDisabled);
    }
  }
  /** Creates a MatRipple and appends it to the given element. */
  _createRipple(host) {
    if (!this._document) {
      return;
    }
    const existingRipple = this._hosts.get(host);
    if (existingRipple) {
      return existingRipple;
    }
    host.querySelector(".mat-ripple")?.remove();
    const rippleEl = this._document.createElement("span");
    rippleEl.classList.add("mat-ripple", host.getAttribute(matRippleClassName));
    host.append(rippleEl);
    const ripple = new MatRipple(new ElementRef(rippleEl), this._ngZone, this._platform, this._globalRippleOptions ? this._globalRippleOptions : void 0, this._animationMode ? this._animationMode : void 0);
    ripple._isInitialized = true;
    ripple.trigger = host;
    ripple.centered = host.hasAttribute(matRippleCentered);
    ripple.disabled = host.hasAttribute(matRippleDisabled);
    this.attachRipple(host, ripple);
    return ripple;
  }
  attachRipple(host, ripple) {
    host.removeAttribute(matRippleUninitialized);
    this._hosts.set(host, ripple);
  }
  destroyRipple(host) {
    const ripple = this._hosts.get(host);
    if (ripple) {
      ripple.ngOnDestroy();
      this._hosts.delete(host);
    }
  }
};
_MatRippleLoader.\u0275fac = function MatRippleLoader_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatRippleLoader)();
};
_MatRippleLoader.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _MatRippleLoader,
  factory: _MatRippleLoader.\u0275fac,
  providedIn: "root"
});
var MatRippleLoader = _MatRippleLoader;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRippleLoader, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var __MatInternalFormField = class __MatInternalFormField {
};
__MatInternalFormField.\u0275fac = function _MatInternalFormField_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || __MatInternalFormField)();
};
__MatInternalFormField.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: __MatInternalFormField,
  selectors: [["div", "mat-internal-form-field", ""]],
  hostAttrs: [1, "mdc-form-field", "mat-internal-form-field"],
  hostVars: 2,
  hostBindings: function _MatInternalFormField_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("mdc-form-field--align-end", ctx.labelPosition === "before");
    }
  },
  inputs: {
    labelPosition: "labelPosition"
  },
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  attrs: _c5,
  ngContentSelectors: _c6,
  decls: 1,
  vars: 0,
  template: function _MatInternalFormField_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  styles: [".mat-internal-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-flex;align-items:center;vertical-align:middle}.mat-internal-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mat-internal-form-field>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0}"],
  encapsulation: 2,
  changeDetection: 0
});
var _MatInternalFormField = __MatInternalFormField;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_MatInternalFormField, [{
    type: Component,
    args: [{
      selector: "div[mat-internal-form-field]",
      standalone: true,
      template: "<ng-content></ng-content>",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "class": "mdc-form-field mat-internal-form-field",
        "[class.mdc-form-field--align-end]": 'labelPosition === "before"'
      },
      styles: [".mat-internal-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-flex;align-items:center;vertical-align:middle}.mat-internal-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mat-internal-form-field>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0}"]
    }]
  }], null, {
    labelPosition: [{
      type: Input,
      args: [{
        required: true
      }]
    }]
  });
})();

// node_modules/@angular/material/fesm2022/table.mjs
var _c06 = [[["caption"]], [["colgroup"], ["col"]], "*"];
var _c16 = ["caption", "colgroup, col", "*"];
function MatTable_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 2);
  }
}
function MatTable_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "thead", 0);
    \u0275\u0275elementContainer(1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "tbody", 2);
    \u0275\u0275elementContainer(3, 3)(4, 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "tfoot", 0);
    \u0275\u0275elementContainer(6, 5);
    \u0275\u0275elementEnd();
  }
}
function MatTable_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 1)(1, 3)(2, 4)(3, 5);
  }
}
function MatTextColumn_th_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("text-align", ctx_r0.justify);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.headerText, " ");
  }
}
function MatTextColumn_td_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("text-align", ctx_r0.justify);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.dataAccessor(data_r2, ctx_r0.name), " ");
  }
}
var _MatRecycleRows = class _MatRecycleRows {
};
_MatRecycleRows.\u0275fac = function MatRecycleRows_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatRecycleRows)();
};
_MatRecycleRows.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatRecycleRows,
  selectors: [["mat-table", "recycleRows", ""], ["table", "mat-table", "", "recycleRows", ""]],
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([{
    provide: _VIEW_REPEATER_STRATEGY,
    useClass: _RecycleViewRepeaterStrategy
  }])]
});
var MatRecycleRows = _MatRecycleRows;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRecycleRows, [{
    type: Directive,
    args: [{
      selector: "mat-table[recycleRows], table[mat-table][recycleRows]",
      providers: [{
        provide: _VIEW_REPEATER_STRATEGY,
        useClass: _RecycleViewRepeaterStrategy
      }],
      standalone: true
    }]
  }], null, null);
})();
var _MatTable = class _MatTable extends CdkTable {
  constructor() {
    super(...arguments);
    this.stickyCssClass = "mat-mdc-table-sticky";
    this.needsPositionStickyOnElement = false;
  }
};
_MatTable.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MatTable_BaseFactory;
  return function MatTable_Factory(__ngFactoryType__) {
    return (\u0275MatTable_BaseFactory || (\u0275MatTable_BaseFactory = \u0275\u0275getInheritedFactory(_MatTable)))(__ngFactoryType__ || _MatTable);
  };
})();
_MatTable.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatTable,
  selectors: [["mat-table"], ["table", "mat-table", ""]],
  hostAttrs: [1, "mat-mdc-table", "mdc-data-table__table"],
  hostVars: 2,
  hostBindings: function MatTable_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("mdc-table-fixed-layout", ctx.fixedLayout);
    }
  },
  exportAs: ["matTable"],
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([
    {
      provide: CdkTable,
      useExisting: _MatTable
    },
    {
      provide: CDK_TABLE,
      useExisting: _MatTable
    },
    {
      provide: _COALESCED_STYLE_SCHEDULER,
      useClass: _CoalescedStyleScheduler
    },
    // TODO(michaeljamesparsons) Abstract the view repeater strategy to a directive API so this code
    //  is only included in the build if used.
    {
      provide: _VIEW_REPEATER_STRATEGY,
      useClass: _DisposeViewRepeaterStrategy
    },
    // Prevent nested tables from seeing this table's StickyPositioningListener.
    {
      provide: STICKY_POSITIONING_LISTENER,
      useValue: null
    }
  ]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
  ngContentSelectors: _c16,
  decls: 5,
  vars: 2,
  consts: [["role", "rowgroup"], ["headerRowOutlet", ""], ["role", "rowgroup", 1, "mdc-data-table__content"], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]],
  template: function MatTable_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c06);
      \u0275\u0275projection(0);
      \u0275\u0275projection(1, 1);
      \u0275\u0275template(2, MatTable_Conditional_2_Template, 1, 0)(3, MatTable_Conditional_3_Template, 7, 0)(4, MatTable_Conditional_4_Template, 4, 0);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx._isServer ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx._isNativeHtmlTable ? 3 : 4);
    }
  },
  dependencies: [HeaderRowOutlet, DataRowOutlet, NoDataRowOutlet, FooterRowOutlet],
  styles: [".mat-mdc-table-sticky{position:sticky !important}mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}.mat-mdc-table{min-width:100%;border:0;border-spacing:0;table-layout:auto;white-space:normal;background-color:var(--mat-table-background-color, var(--mat-app-surface))}.mdc-data-table__cell{box-sizing:border-box;overflow:hidden;text-align:left;text-overflow:ellipsis}[dir=rtl] .mdc-data-table__cell{text-align:right}.mdc-data-table__cell,.mdc-data-table__header-cell{padding:0 16px}.mat-mdc-header-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-header-container-height, 56px);color:var(--mat-table-header-headline-color, var(--mat-app-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mat-table-header-headline-font, var(--mat-app-title-small-font, Roboto, sans-serif));line-height:var(--mat-table-header-headline-line-height, var(--mat-app-title-small-line-height));font-size:var(--mat-table-header-headline-size, var(--mat-app-title-small-size, 14px));font-weight:var(--mat-table-header-headline-weight, var(--mat-app-title-small-weight, 500))}.mat-mdc-row{height:var(--mat-table-row-item-container-height, 52px);color:var(--mat-table-row-item-label-text-color, var(--mat-app-on-surface, rgba(0, 0, 0, 0.87)))}.mat-mdc-row,.mdc-data-table__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-table-row-item-label-text-font, var(--mat-app-body-medium-font, Roboto, sans-serif));line-height:var(--mat-table-row-item-label-text-line-height, var(--mat-app-body-medium-line-height));font-size:var(--mat-table-row-item-label-text-size, var(--mat-app-body-medium-size, 14px));font-weight:var(--mat-table-row-item-label-text-weight, var(--mat-app-body-medium-weight))}.mat-mdc-footer-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-footer-container-height, 52px);color:var(--mat-table-row-item-label-text-color, var(--mat-app-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mat-table-footer-supporting-text-font, var(--mat-app-body-medium-font, Roboto, sans-serif));line-height:var(--mat-table-footer-supporting-text-line-height, var(--mat-app-body-medium-line-height));font-size:var(--mat-table-footer-supporting-text-size, var(--mat-app-body-medium-size, 14px));font-weight:var(--mat-table-footer-supporting-text-weight, var(--mat-app-body-medium-weight));letter-spacing:var(--mat-table-footer-supporting-text-tracking, var(--mat-app-body-medium-tracking))}.mat-mdc-header-cell{border-bottom-color:var(--mat-table-row-item-outline-color, var(--mat-app-outline, rgba(0, 0, 0, 0.12)));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-header-headline-tracking, var(--mat-app-title-small-tracking));font-weight:inherit;line-height:inherit;box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;outline:none;text-align:left}[dir=rtl] .mat-mdc-header-cell{text-align:right}.mat-mdc-cell{border-bottom-color:var(--mat-table-row-item-outline-color, var(--mat-app-outline, rgba(0, 0, 0, 0.12)));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-row-item-label-text-tracking, var(--mat-app-body-medium-tracking));line-height:inherit}.mdc-data-table__row:last-child .mat-mdc-cell{border-bottom:none}.mat-mdc-footer-cell{letter-spacing:var(--mat-table-row-item-label-text-tracking, var(--mat-app-body-medium-tracking))}mat-row.mat-mdc-row,mat-header-row.mat-mdc-header-row,mat-footer-row.mat-mdc-footer-row{border-bottom:none}.mat-mdc-table tbody,.mat-mdc-table tfoot,.mat-mdc-table thead,.mat-mdc-cell,.mat-mdc-footer-cell,.mat-mdc-header-row,.mat-mdc-row,.mat-mdc-footer-row,.mat-mdc-table .mat-mdc-header-cell{background:inherit}.mat-mdc-table mat-header-row.mat-mdc-header-row,.mat-mdc-table mat-row.mat-mdc-row,.mat-mdc-table mat-footer-row.mat-mdc-footer-cell{height:unset}mat-header-cell.mat-mdc-header-cell,mat-cell.mat-mdc-cell,mat-footer-cell.mat-mdc-footer-cell{align-self:stretch}"],
  encapsulation: 2
});
var MatTable = _MatTable;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTable, [{
    type: Component,
    args: [{
      selector: "mat-table, table[mat-table]",
      exportAs: "matTable",
      template: `
    <ng-content select="caption"/>
    <ng-content select="colgroup, col"/>

    <!--
      Unprojected content throws a hydration error so we need this to capture it.
      It gets removed on the client so it doesn't affect the layout.
    -->
    @if (_isServer) {
      <ng-content/>
    }

    @if (_isNativeHtmlTable) {
      <thead role="rowgroup">
        <ng-container headerRowOutlet/>
      </thead>
      <tbody class="mdc-data-table__content" role="rowgroup">
        <ng-container rowOutlet/>
        <ng-container noDataRowOutlet/>
      </tbody>
      <tfoot role="rowgroup">
        <ng-container footerRowOutlet/>
      </tfoot>
    } @else {
      <ng-container headerRowOutlet/>
      <ng-container rowOutlet/>
      <ng-container noDataRowOutlet/>
      <ng-container footerRowOutlet/>
    }
  `,
      host: {
        "class": "mat-mdc-table mdc-data-table__table",
        "[class.mdc-table-fixed-layout]": "fixedLayout"
      },
      providers: [
        {
          provide: CdkTable,
          useExisting: MatTable
        },
        {
          provide: CDK_TABLE,
          useExisting: MatTable
        },
        {
          provide: _COALESCED_STYLE_SCHEDULER,
          useClass: _CoalescedStyleScheduler
        },
        // TODO(michaeljamesparsons) Abstract the view repeater strategy to a directive API so this code
        //  is only included in the build if used.
        {
          provide: _VIEW_REPEATER_STRATEGY,
          useClass: _DisposeViewRepeaterStrategy
        },
        // Prevent nested tables from seeing this table's StickyPositioningListener.
        {
          provide: STICKY_POSITIONING_LISTENER,
          useValue: null
        }
      ],
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.Default,
      standalone: true,
      imports: [HeaderRowOutlet, DataRowOutlet, NoDataRowOutlet, FooterRowOutlet],
      styles: [".mat-mdc-table-sticky{position:sticky !important}mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}.mat-mdc-table{min-width:100%;border:0;border-spacing:0;table-layout:auto;white-space:normal;background-color:var(--mat-table-background-color, var(--mat-app-surface))}.mdc-data-table__cell{box-sizing:border-box;overflow:hidden;text-align:left;text-overflow:ellipsis}[dir=rtl] .mdc-data-table__cell{text-align:right}.mdc-data-table__cell,.mdc-data-table__header-cell{padding:0 16px}.mat-mdc-header-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-header-container-height, 56px);color:var(--mat-table-header-headline-color, var(--mat-app-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mat-table-header-headline-font, var(--mat-app-title-small-font, Roboto, sans-serif));line-height:var(--mat-table-header-headline-line-height, var(--mat-app-title-small-line-height));font-size:var(--mat-table-header-headline-size, var(--mat-app-title-small-size, 14px));font-weight:var(--mat-table-header-headline-weight, var(--mat-app-title-small-weight, 500))}.mat-mdc-row{height:var(--mat-table-row-item-container-height, 52px);color:var(--mat-table-row-item-label-text-color, var(--mat-app-on-surface, rgba(0, 0, 0, 0.87)))}.mat-mdc-row,.mdc-data-table__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-table-row-item-label-text-font, var(--mat-app-body-medium-font, Roboto, sans-serif));line-height:var(--mat-table-row-item-label-text-line-height, var(--mat-app-body-medium-line-height));font-size:var(--mat-table-row-item-label-text-size, var(--mat-app-body-medium-size, 14px));font-weight:var(--mat-table-row-item-label-text-weight, var(--mat-app-body-medium-weight))}.mat-mdc-footer-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-footer-container-height, 52px);color:var(--mat-table-row-item-label-text-color, var(--mat-app-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mat-table-footer-supporting-text-font, var(--mat-app-body-medium-font, Roboto, sans-serif));line-height:var(--mat-table-footer-supporting-text-line-height, var(--mat-app-body-medium-line-height));font-size:var(--mat-table-footer-supporting-text-size, var(--mat-app-body-medium-size, 14px));font-weight:var(--mat-table-footer-supporting-text-weight, var(--mat-app-body-medium-weight));letter-spacing:var(--mat-table-footer-supporting-text-tracking, var(--mat-app-body-medium-tracking))}.mat-mdc-header-cell{border-bottom-color:var(--mat-table-row-item-outline-color, var(--mat-app-outline, rgba(0, 0, 0, 0.12)));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-header-headline-tracking, var(--mat-app-title-small-tracking));font-weight:inherit;line-height:inherit;box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;outline:none;text-align:left}[dir=rtl] .mat-mdc-header-cell{text-align:right}.mat-mdc-cell{border-bottom-color:var(--mat-table-row-item-outline-color, var(--mat-app-outline, rgba(0, 0, 0, 0.12)));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-row-item-label-text-tracking, var(--mat-app-body-medium-tracking));line-height:inherit}.mdc-data-table__row:last-child .mat-mdc-cell{border-bottom:none}.mat-mdc-footer-cell{letter-spacing:var(--mat-table-row-item-label-text-tracking, var(--mat-app-body-medium-tracking))}mat-row.mat-mdc-row,mat-header-row.mat-mdc-header-row,mat-footer-row.mat-mdc-footer-row{border-bottom:none}.mat-mdc-table tbody,.mat-mdc-table tfoot,.mat-mdc-table thead,.mat-mdc-cell,.mat-mdc-footer-cell,.mat-mdc-header-row,.mat-mdc-row,.mat-mdc-footer-row,.mat-mdc-table .mat-mdc-header-cell{background:inherit}.mat-mdc-table mat-header-row.mat-mdc-header-row,.mat-mdc-table mat-row.mat-mdc-row,.mat-mdc-table mat-footer-row.mat-mdc-footer-cell{height:unset}mat-header-cell.mat-mdc-header-cell,mat-cell.mat-mdc-cell,mat-footer-cell.mat-mdc-footer-cell{align-self:stretch}"]
    }]
  }], null, null);
})();
var _MatCellDef = class _MatCellDef extends CdkCellDef {
};
_MatCellDef.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MatCellDef_BaseFactory;
  return function MatCellDef_Factory(__ngFactoryType__) {
    return (\u0275MatCellDef_BaseFactory || (\u0275MatCellDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatCellDef)))(__ngFactoryType__ || _MatCellDef);
  };
})();
_MatCellDef.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatCellDef,
  selectors: [["", "matCellDef", ""]],
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([{
    provide: CdkCellDef,
    useExisting: _MatCellDef
  }]), \u0275\u0275InheritDefinitionFeature]
});
var MatCellDef = _MatCellDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCellDef, [{
    type: Directive,
    args: [{
      selector: "[matCellDef]",
      providers: [{
        provide: CdkCellDef,
        useExisting: MatCellDef
      }],
      standalone: true
    }]
  }], null, null);
})();
var _MatHeaderCellDef = class _MatHeaderCellDef extends CdkHeaderCellDef {
};
_MatHeaderCellDef.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MatHeaderCellDef_BaseFactory;
  return function MatHeaderCellDef_Factory(__ngFactoryType__) {
    return (\u0275MatHeaderCellDef_BaseFactory || (\u0275MatHeaderCellDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatHeaderCellDef)))(__ngFactoryType__ || _MatHeaderCellDef);
  };
})();
_MatHeaderCellDef.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatHeaderCellDef,
  selectors: [["", "matHeaderCellDef", ""]],
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([{
    provide: CdkHeaderCellDef,
    useExisting: _MatHeaderCellDef
  }]), \u0275\u0275InheritDefinitionFeature]
});
var MatHeaderCellDef = _MatHeaderCellDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatHeaderCellDef, [{
    type: Directive,
    args: [{
      selector: "[matHeaderCellDef]",
      providers: [{
        provide: CdkHeaderCellDef,
        useExisting: MatHeaderCellDef
      }],
      standalone: true
    }]
  }], null, null);
})();
var _MatFooterCellDef = class _MatFooterCellDef extends CdkFooterCellDef {
};
_MatFooterCellDef.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MatFooterCellDef_BaseFactory;
  return function MatFooterCellDef_Factory(__ngFactoryType__) {
    return (\u0275MatFooterCellDef_BaseFactory || (\u0275MatFooterCellDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatFooterCellDef)))(__ngFactoryType__ || _MatFooterCellDef);
  };
})();
_MatFooterCellDef.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatFooterCellDef,
  selectors: [["", "matFooterCellDef", ""]],
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([{
    provide: CdkFooterCellDef,
    useExisting: _MatFooterCellDef
  }]), \u0275\u0275InheritDefinitionFeature]
});
var MatFooterCellDef = _MatFooterCellDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFooterCellDef, [{
    type: Directive,
    args: [{
      selector: "[matFooterCellDef]",
      providers: [{
        provide: CdkFooterCellDef,
        useExisting: MatFooterCellDef
      }],
      standalone: true
    }]
  }], null, null);
})();
var _MatColumnDef = class _MatColumnDef extends CdkColumnDef {
  /** Unique name for this column. */
  get name() {
    return this._name;
  }
  set name(name) {
    this._setNameInput(name);
  }
  /**
   * Add "mat-column-" prefix in addition to "cdk-column-" prefix.
   * In the future, this will only add "mat-column-" and columnCssClassName
   * will change from type string[] to string.
   * @docs-private
   */
  _updateColumnCssClassName() {
    super._updateColumnCssClassName();
    this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`);
  }
};
_MatColumnDef.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MatColumnDef_BaseFactory;
  return function MatColumnDef_Factory(__ngFactoryType__) {
    return (\u0275MatColumnDef_BaseFactory || (\u0275MatColumnDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatColumnDef)))(__ngFactoryType__ || _MatColumnDef);
  };
})();
_MatColumnDef.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatColumnDef,
  selectors: [["", "matColumnDef", ""]],
  inputs: {
    name: [0, "matColumnDef", "name"]
  },
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([{
    provide: CdkColumnDef,
    useExisting: _MatColumnDef
  }, {
    provide: "MAT_SORT_HEADER_COLUMN_DEF",
    useExisting: _MatColumnDef
  }]), \u0275\u0275InheritDefinitionFeature]
});
var MatColumnDef = _MatColumnDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatColumnDef, [{
    type: Directive,
    args: [{
      selector: "[matColumnDef]",
      providers: [{
        provide: CdkColumnDef,
        useExisting: MatColumnDef
      }, {
        provide: "MAT_SORT_HEADER_COLUMN_DEF",
        useExisting: MatColumnDef
      }],
      standalone: true
    }]
  }], null, {
    name: [{
      type: Input,
      args: ["matColumnDef"]
    }]
  });
})();
var _MatHeaderCell = class _MatHeaderCell extends CdkHeaderCell {
};
_MatHeaderCell.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MatHeaderCell_BaseFactory;
  return function MatHeaderCell_Factory(__ngFactoryType__) {
    return (\u0275MatHeaderCell_BaseFactory || (\u0275MatHeaderCell_BaseFactory = \u0275\u0275getInheritedFactory(_MatHeaderCell)))(__ngFactoryType__ || _MatHeaderCell);
  };
})();
_MatHeaderCell.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatHeaderCell,
  selectors: [["mat-header-cell"], ["th", "mat-header-cell", ""]],
  hostAttrs: ["role", "columnheader", 1, "mat-mdc-header-cell", "mdc-data-table__header-cell"],
  standalone: true,
  features: [\u0275\u0275InheritDefinitionFeature]
});
var MatHeaderCell = _MatHeaderCell;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatHeaderCell, [{
    type: Directive,
    args: [{
      selector: "mat-header-cell, th[mat-header-cell]",
      host: {
        "class": "mat-mdc-header-cell mdc-data-table__header-cell",
        "role": "columnheader"
      },
      standalone: true
    }]
  }], null, null);
})();
var _MatFooterCell = class _MatFooterCell extends CdkFooterCell {
};
_MatFooterCell.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MatFooterCell_BaseFactory;
  return function MatFooterCell_Factory(__ngFactoryType__) {
    return (\u0275MatFooterCell_BaseFactory || (\u0275MatFooterCell_BaseFactory = \u0275\u0275getInheritedFactory(_MatFooterCell)))(__ngFactoryType__ || _MatFooterCell);
  };
})();
_MatFooterCell.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatFooterCell,
  selectors: [["mat-footer-cell"], ["td", "mat-footer-cell", ""]],
  hostAttrs: [1, "mat-mdc-footer-cell", "mdc-data-table__cell"],
  standalone: true,
  features: [\u0275\u0275InheritDefinitionFeature]
});
var MatFooterCell = _MatFooterCell;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFooterCell, [{
    type: Directive,
    args: [{
      selector: "mat-footer-cell, td[mat-footer-cell]",
      host: {
        "class": "mat-mdc-footer-cell mdc-data-table__cell"
      },
      standalone: true
    }]
  }], null, null);
})();
var _MatCell = class _MatCell extends CdkCell {
};
_MatCell.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MatCell_BaseFactory;
  return function MatCell_Factory(__ngFactoryType__) {
    return (\u0275MatCell_BaseFactory || (\u0275MatCell_BaseFactory = \u0275\u0275getInheritedFactory(_MatCell)))(__ngFactoryType__ || _MatCell);
  };
})();
_MatCell.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatCell,
  selectors: [["mat-cell"], ["td", "mat-cell", ""]],
  hostAttrs: [1, "mat-mdc-cell", "mdc-data-table__cell"],
  standalone: true,
  features: [\u0275\u0275InheritDefinitionFeature]
});
var MatCell = _MatCell;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCell, [{
    type: Directive,
    args: [{
      selector: "mat-cell, td[mat-cell]",
      host: {
        "class": "mat-mdc-cell mdc-data-table__cell"
      },
      standalone: true
    }]
  }], null, null);
})();
var ROW_TEMPLATE = `<ng-container cdkCellOutlet></ng-container>`;
var _MatHeaderRowDef = class _MatHeaderRowDef extends CdkHeaderRowDef {
};
_MatHeaderRowDef.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MatHeaderRowDef_BaseFactory;
  return function MatHeaderRowDef_Factory(__ngFactoryType__) {
    return (\u0275MatHeaderRowDef_BaseFactory || (\u0275MatHeaderRowDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatHeaderRowDef)))(__ngFactoryType__ || _MatHeaderRowDef);
  };
})();
_MatHeaderRowDef.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatHeaderRowDef,
  selectors: [["", "matHeaderRowDef", ""]],
  inputs: {
    columns: [0, "matHeaderRowDef", "columns"],
    sticky: [2, "matHeaderRowDefSticky", "sticky", booleanAttribute]
  },
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([{
    provide: CdkHeaderRowDef,
    useExisting: _MatHeaderRowDef
  }]), \u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature]
});
var MatHeaderRowDef = _MatHeaderRowDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatHeaderRowDef, [{
    type: Directive,
    args: [{
      selector: "[matHeaderRowDef]",
      providers: [{
        provide: CdkHeaderRowDef,
        useExisting: MatHeaderRowDef
      }],
      inputs: [{
        name: "columns",
        alias: "matHeaderRowDef"
      }, {
        name: "sticky",
        alias: "matHeaderRowDefSticky",
        transform: booleanAttribute
      }],
      standalone: true
    }]
  }], null, null);
})();
var _MatFooterRowDef = class _MatFooterRowDef extends CdkFooterRowDef {
};
_MatFooterRowDef.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MatFooterRowDef_BaseFactory;
  return function MatFooterRowDef_Factory(__ngFactoryType__) {
    return (\u0275MatFooterRowDef_BaseFactory || (\u0275MatFooterRowDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatFooterRowDef)))(__ngFactoryType__ || _MatFooterRowDef);
  };
})();
_MatFooterRowDef.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatFooterRowDef,
  selectors: [["", "matFooterRowDef", ""]],
  inputs: {
    columns: [0, "matFooterRowDef", "columns"],
    sticky: [2, "matFooterRowDefSticky", "sticky", booleanAttribute]
  },
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([{
    provide: CdkFooterRowDef,
    useExisting: _MatFooterRowDef
  }]), \u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature]
});
var MatFooterRowDef = _MatFooterRowDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFooterRowDef, [{
    type: Directive,
    args: [{
      selector: "[matFooterRowDef]",
      providers: [{
        provide: CdkFooterRowDef,
        useExisting: MatFooterRowDef
      }],
      inputs: [{
        name: "columns",
        alias: "matFooterRowDef"
      }, {
        name: "sticky",
        alias: "matFooterRowDefSticky",
        transform: booleanAttribute
      }],
      standalone: true
    }]
  }], null, null);
})();
var _MatRowDef = class _MatRowDef extends CdkRowDef {
};
_MatRowDef.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MatRowDef_BaseFactory;
  return function MatRowDef_Factory(__ngFactoryType__) {
    return (\u0275MatRowDef_BaseFactory || (\u0275MatRowDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatRowDef)))(__ngFactoryType__ || _MatRowDef);
  };
})();
_MatRowDef.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatRowDef,
  selectors: [["", "matRowDef", ""]],
  inputs: {
    columns: [0, "matRowDefColumns", "columns"],
    when: [0, "matRowDefWhen", "when"]
  },
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([{
    provide: CdkRowDef,
    useExisting: _MatRowDef
  }]), \u0275\u0275InheritDefinitionFeature]
});
var MatRowDef = _MatRowDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRowDef, [{
    type: Directive,
    args: [{
      selector: "[matRowDef]",
      providers: [{
        provide: CdkRowDef,
        useExisting: MatRowDef
      }],
      inputs: [{
        name: "columns",
        alias: "matRowDefColumns"
      }, {
        name: "when",
        alias: "matRowDefWhen"
      }],
      standalone: true
    }]
  }], null, null);
})();
var _MatHeaderRow = class _MatHeaderRow extends CdkHeaderRow {
};
_MatHeaderRow.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MatHeaderRow_BaseFactory;
  return function MatHeaderRow_Factory(__ngFactoryType__) {
    return (\u0275MatHeaderRow_BaseFactory || (\u0275MatHeaderRow_BaseFactory = \u0275\u0275getInheritedFactory(_MatHeaderRow)))(__ngFactoryType__ || _MatHeaderRow);
  };
})();
_MatHeaderRow.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatHeaderRow,
  selectors: [["mat-header-row"], ["tr", "mat-header-row", ""]],
  hostAttrs: ["role", "row", 1, "mat-mdc-header-row", "mdc-data-table__header-row"],
  exportAs: ["matHeaderRow"],
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([{
    provide: CdkHeaderRow,
    useExisting: _MatHeaderRow
  }]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
  decls: 1,
  vars: 0,
  consts: [["cdkCellOutlet", ""]],
  template: function MatHeaderRow_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementContainer(0, 0);
    }
  },
  dependencies: [CdkCellOutlet],
  encapsulation: 2
});
var MatHeaderRow = _MatHeaderRow;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatHeaderRow, [{
    type: Component,
    args: [{
      selector: "mat-header-row, tr[mat-header-row]",
      template: ROW_TEMPLATE,
      host: {
        "class": "mat-mdc-header-row mdc-data-table__header-row",
        "role": "row"
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation$1.None,
      exportAs: "matHeaderRow",
      providers: [{
        provide: CdkHeaderRow,
        useExisting: MatHeaderRow
      }],
      standalone: true,
      imports: [CdkCellOutlet]
    }]
  }], null, null);
})();
var _MatFooterRow = class _MatFooterRow extends CdkFooterRow {
};
_MatFooterRow.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MatFooterRow_BaseFactory;
  return function MatFooterRow_Factory(__ngFactoryType__) {
    return (\u0275MatFooterRow_BaseFactory || (\u0275MatFooterRow_BaseFactory = \u0275\u0275getInheritedFactory(_MatFooterRow)))(__ngFactoryType__ || _MatFooterRow);
  };
})();
_MatFooterRow.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatFooterRow,
  selectors: [["mat-footer-row"], ["tr", "mat-footer-row", ""]],
  hostAttrs: ["role", "row", 1, "mat-mdc-footer-row", "mdc-data-table__row"],
  exportAs: ["matFooterRow"],
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([{
    provide: CdkFooterRow,
    useExisting: _MatFooterRow
  }]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
  decls: 1,
  vars: 0,
  consts: [["cdkCellOutlet", ""]],
  template: function MatFooterRow_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementContainer(0, 0);
    }
  },
  dependencies: [CdkCellOutlet],
  encapsulation: 2
});
var MatFooterRow = _MatFooterRow;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFooterRow, [{
    type: Component,
    args: [{
      selector: "mat-footer-row, tr[mat-footer-row]",
      template: ROW_TEMPLATE,
      host: {
        "class": "mat-mdc-footer-row mdc-data-table__row",
        "role": "row"
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation$1.None,
      exportAs: "matFooterRow",
      providers: [{
        provide: CdkFooterRow,
        useExisting: MatFooterRow
      }],
      standalone: true,
      imports: [CdkCellOutlet]
    }]
  }], null, null);
})();
var _MatRow = class _MatRow extends CdkRow {
};
_MatRow.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MatRow_BaseFactory;
  return function MatRow_Factory(__ngFactoryType__) {
    return (\u0275MatRow_BaseFactory || (\u0275MatRow_BaseFactory = \u0275\u0275getInheritedFactory(_MatRow)))(__ngFactoryType__ || _MatRow);
  };
})();
_MatRow.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatRow,
  selectors: [["mat-row"], ["tr", "mat-row", ""]],
  hostAttrs: ["role", "row", 1, "mat-mdc-row", "mdc-data-table__row"],
  exportAs: ["matRow"],
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([{
    provide: CdkRow,
    useExisting: _MatRow
  }]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
  decls: 1,
  vars: 0,
  consts: [["cdkCellOutlet", ""]],
  template: function MatRow_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementContainer(0, 0);
    }
  },
  dependencies: [CdkCellOutlet],
  encapsulation: 2
});
var MatRow = _MatRow;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRow, [{
    type: Component,
    args: [{
      selector: "mat-row, tr[mat-row]",
      template: ROW_TEMPLATE,
      host: {
        "class": "mat-mdc-row mdc-data-table__row",
        "role": "row"
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation$1.None,
      exportAs: "matRow",
      providers: [{
        provide: CdkRow,
        useExisting: MatRow
      }],
      standalone: true,
      imports: [CdkCellOutlet]
    }]
  }], null, null);
})();
var _MatNoDataRow = class _MatNoDataRow extends CdkNoDataRow {
  constructor() {
    super(...arguments);
    this._contentClassName = "mat-mdc-no-data-row";
  }
};
_MatNoDataRow.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MatNoDataRow_BaseFactory;
  return function MatNoDataRow_Factory(__ngFactoryType__) {
    return (\u0275MatNoDataRow_BaseFactory || (\u0275MatNoDataRow_BaseFactory = \u0275\u0275getInheritedFactory(_MatNoDataRow)))(__ngFactoryType__ || _MatNoDataRow);
  };
})();
_MatNoDataRow.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatNoDataRow,
  selectors: [["ng-template", "matNoDataRow", ""]],
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([{
    provide: CdkNoDataRow,
    useExisting: _MatNoDataRow
  }]), \u0275\u0275InheritDefinitionFeature]
});
var MatNoDataRow = _MatNoDataRow;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatNoDataRow, [{
    type: Directive,
    args: [{
      selector: "ng-template[matNoDataRow]",
      providers: [{
        provide: CdkNoDataRow,
        useExisting: MatNoDataRow
      }],
      standalone: true
    }]
  }], null, null);
})();
var _MatTextColumn = class _MatTextColumn extends CdkTextColumn {
};
_MatTextColumn.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MatTextColumn_BaseFactory;
  return function MatTextColumn_Factory(__ngFactoryType__) {
    return (\u0275MatTextColumn_BaseFactory || (\u0275MatTextColumn_BaseFactory = \u0275\u0275getInheritedFactory(_MatTextColumn)))(__ngFactoryType__ || _MatTextColumn);
  };
})();
_MatTextColumn.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatTextColumn,
  selectors: [["mat-text-column"]],
  standalone: true,
  features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
  decls: 3,
  vars: 0,
  consts: [["matColumnDef", ""], ["mat-header-cell", "", 3, "text-align", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "text-align", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""]],
  template: function MatTextColumn_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementContainerStart(0, 0);
      \u0275\u0275template(1, MatTextColumn_th_1_Template, 2, 3, "th", 1)(2, MatTextColumn_td_2_Template, 2, 3, "td", 2);
      \u0275\u0275elementContainerEnd();
    }
  },
  dependencies: [MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell],
  encapsulation: 2
});
var MatTextColumn = _MatTextColumn;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTextColumn, [{
    type: Component,
    args: [{
      selector: "mat-text-column",
      template: `
    <ng-container matColumnDef>
      <th mat-header-cell *matHeaderCellDef [style.text-align]="justify">
        {{headerText}}
      </th>
      <td mat-cell *matCellDef="let data" [style.text-align]="justify">
        {{dataAccessor(data, name)}}
      </td>
    </ng-container>
  `,
      encapsulation: ViewEncapsulation$1.None,
      // Change detection is intentionally not set to OnPush. This component's template will be provided
      // to the table to be inserted into its view. This is problematic when change detection runs since
      // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
      // mean's the template in the table's view will not have the updated value (and in fact will cause
      // an ExpressionChangedAfterItHasBeenCheckedError).
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      standalone: true,
      imports: [MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell]
    }]
  }], null, null);
})();
var EXPORTED_DECLARATIONS2 = [
  // Table
  MatTable,
  MatRecycleRows,
  // Template defs
  MatHeaderCellDef,
  MatHeaderRowDef,
  MatColumnDef,
  MatCellDef,
  MatRowDef,
  MatFooterCellDef,
  MatFooterRowDef,
  // Cell directives
  MatHeaderCell,
  MatCell,
  MatFooterCell,
  // Row directives
  MatHeaderRow,
  MatRow,
  MatFooterRow,
  MatNoDataRow,
  MatTextColumn
];
var _MatTableModule = class _MatTableModule {
};
_MatTableModule.\u0275fac = function MatTableModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatTableModule)();
};
_MatTableModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _MatTableModule
});
_MatTableModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [MatCommonModule, CdkTableModule, MatCommonModule]
});
var MatTableModule = _MatTableModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTableModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, CdkTableModule, ...EXPORTED_DECLARATIONS2],
      exports: [MatCommonModule, EXPORTED_DECLARATIONS2]
    }]
  }], null, null);
})();
var MAX_SAFE_INTEGER = 9007199254740991;
var MatTableDataSource = class extends DataSource {
  /** Array of data that should be rendered by the table, where each object represents one row. */
  get data() {
    return this._data.value;
  }
  set data(data) {
    data = Array.isArray(data) ? data : [];
    this._data.next(data);
    if (!this._renderChangesSubscription) {
      this._filterData(data);
    }
  }
  /**
   * Filter term that should be used to filter out objects from the data array. To override how
   * data objects match to this filter string, provide a custom function for filterPredicate.
   */
  get filter() {
    return this._filter.value;
  }
  set filter(filter2) {
    this._filter.next(filter2);
    if (!this._renderChangesSubscription) {
      this._filterData(this.data);
    }
  }
  /**
   * Instance of the MatSort directive used by the table to control its sorting. Sort changes
   * emitted by the MatSort will trigger an update to the table's rendered data.
   */
  get sort() {
    return this._sort;
  }
  set sort(sort) {
    this._sort = sort;
    this._updateChangeSubscription();
  }
  /**
   * Instance of the paginator component used by the table to control what page of the data is
   * displayed. Page changes emitted by the paginator will trigger an update to the
   * table's rendered data.
   *
   * Note that the data source uses the paginator's properties to calculate which page of data
   * should be displayed. If the paginator receives its properties as template inputs,
   * e.g. `[pageLength]=100` or `[pageIndex]=1`, then be sure that the paginator's view has been
   * initialized before assigning it to this data source.
   */
  get paginator() {
    return this._paginator;
  }
  set paginator(paginator) {
    this._paginator = paginator;
    this._updateChangeSubscription();
  }
  constructor(initialData = []) {
    super();
    this._renderData = new BehaviorSubject([]);
    this._filter = new BehaviorSubject("");
    this._internalPageChanges = new Subject();
    this._renderChangesSubscription = null;
    this.sortingDataAccessor = (data, sortHeaderId) => {
      const value = data[sortHeaderId];
      if (_isNumberValue(value)) {
        const numberValue = Number(value);
        return numberValue < MAX_SAFE_INTEGER ? numberValue : value;
      }
      return value;
    };
    this.sortData = (data, sort) => {
      const active = sort.active;
      const direction = sort.direction;
      if (!active || direction == "") {
        return data;
      }
      return data.sort((a2, b2) => {
        let valueA = this.sortingDataAccessor(a2, active);
        let valueB = this.sortingDataAccessor(b2, active);
        const valueAType = typeof valueA;
        const valueBType = typeof valueB;
        if (valueAType !== valueBType) {
          if (valueAType === "number") {
            valueA += "";
          }
          if (valueBType === "number") {
            valueB += "";
          }
        }
        let comparatorResult = 0;
        if (valueA != null && valueB != null) {
          if (valueA > valueB) {
            comparatorResult = 1;
          } else if (valueA < valueB) {
            comparatorResult = -1;
          }
        } else if (valueA != null) {
          comparatorResult = 1;
        } else if (valueB != null) {
          comparatorResult = -1;
        }
        return comparatorResult * (direction == "asc" ? 1 : -1);
      });
    };
    this.filterPredicate = (data, filter2) => {
      const dataStr = Object.keys(data).reduce((currentTerm, key) => {
        return currentTerm + data[key] + "\u25EC";
      }, "").toLowerCase();
      const transformedFilter = filter2.trim().toLowerCase();
      return dataStr.indexOf(transformedFilter) != -1;
    };
    this._data = new BehaviorSubject(initialData);
    this._updateChangeSubscription();
  }
  /**
   * Subscribe to changes that should trigger an update to the table's rendered rows. When the
   * changes occur, process the current state of the filter, sort, and pagination along with
   * the provided base data and send it to the table for rendering.
   */
  _updateChangeSubscription() {
    const sortChange = this._sort ? merge(this._sort.sortChange, this._sort.initialized) : of(null);
    const pageChange = this._paginator ? merge(this._paginator.page, this._internalPageChanges, this._paginator.initialized) : of(null);
    const dataStream = this._data;
    const filteredData = combineLatest([dataStream, this._filter]).pipe(map(([data]) => this._filterData(data)));
    const orderedData = combineLatest([filteredData, sortChange]).pipe(map(([data]) => this._orderData(data)));
    const paginatedData = combineLatest([orderedData, pageChange]).pipe(map(([data]) => this._pageData(data)));
    this._renderChangesSubscription?.unsubscribe();
    this._renderChangesSubscription = paginatedData.subscribe((data) => this._renderData.next(data));
  }
  /**
   * Returns a filtered data array where each filter object contains the filter string within
   * the result of the filterPredicate function. If no filter is set, returns the data array
   * as provided.
   */
  _filterData(data) {
    this.filteredData = this.filter == null || this.filter === "" ? data : data.filter((obj) => this.filterPredicate(obj, this.filter));
    if (this.paginator) {
      this._updatePaginator(this.filteredData.length);
    }
    return this.filteredData;
  }
  /**
   * Returns a sorted copy of the data if MatSort has a sort applied, otherwise just returns the
   * data array as provided. Uses the default data accessor for data lookup, unless a
   * sortDataAccessor function is defined.
   */
  _orderData(data) {
    if (!this.sort) {
      return data;
    }
    return this.sortData(data.slice(), this.sort);
  }
  /**
   * Returns a paged slice of the provided data array according to the provided paginator's page
   * index and length. If there is no paginator provided, returns the data array as provided.
   */
  _pageData(data) {
    if (!this.paginator) {
      return data;
    }
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.slice(startIndex, startIndex + this.paginator.pageSize);
  }
  /**
   * Updates the paginator to reflect the length of the filtered data, and makes sure that the page
   * index does not exceed the paginator's last page. Values are changed in a resolved promise to
   * guard against making property changes within a round of change detection.
   */
  _updatePaginator(filteredDataLength) {
    Promise.resolve().then(() => {
      const paginator = this.paginator;
      if (!paginator) {
        return;
      }
      paginator.length = filteredDataLength;
      if (paginator.pageIndex > 0) {
        const lastPageIndex = Math.ceil(paginator.length / paginator.pageSize) - 1 || 0;
        const newPageIndex = Math.min(paginator.pageIndex, lastPageIndex);
        if (newPageIndex !== paginator.pageIndex) {
          paginator.pageIndex = newPageIndex;
          this._internalPageChanges.next();
        }
      }
    });
  }
  /**
   * Used by the MatTable. Called when it connects to the data source.
   * @docs-private
   */
  connect() {
    if (!this._renderChangesSubscription) {
      this._updateChangeSubscription();
    }
    return this._renderData;
  }
  /**
   * Used by the MatTable. Called when it disconnects from the data source.
   * @docs-private
   */
  disconnect() {
    this._renderChangesSubscription?.unsubscribe();
    this._renderChangesSubscription = null;
  }
};

// src/app/shared/directives/hover-effect-sidebar.directive.ts
var _HoverEffectSidebarDirective = class _HoverEffectSidebarDirective {
  constructor(eleRef, render, elementRef) {
    this.eleRef = eleRef;
    this.render = render;
    this.elementRef = elementRef;
  }
  onHover() {
    if (window.innerWidth > 768) {
      this.elementRef.nativeElement.ownerDocument.documentElement?.setAttribute("data-icon-overlay", "open");
    }
  }
  onLeave() {
    if (window.innerWidth > 768) {
      this.elementRef.nativeElement.ownerDocument.documentElement?.removeAttribute("data-icon-overlay");
    }
  }
};
_HoverEffectSidebarDirective.\u0275fac = function HoverEffectSidebarDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HoverEffectSidebarDirective)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef));
};
_HoverEffectSidebarDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _HoverEffectSidebarDirective, selectors: [["", "appHoverEffectSidebar", ""]], hostBindings: function HoverEffectSidebarDirective_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("mouseover", function HoverEffectSidebarDirective_mouseover_HostBindingHandler() {
      return ctx.onHover();
    })("mouseleave", function HoverEffectSidebarDirective_mouseleave_HostBindingHandler() {
      return ctx.onLeave();
    });
  }
}, standalone: true });
var HoverEffectSidebarDirective = _HoverEffectSidebarDirective;

// src/app/shared/services/navservice.ts
var _NavService = class _NavService {
  constructor(router) {
    this.router = router;
    this.unsubscriber = new Subject();
    this.screenWidth = new BehaviorSubject(window.innerWidth);
    this.search = false;
    this.language = false;
    this.megaMenu = false;
    this.levelMenu = false;
    this.megaMenuColapse = window.innerWidth < 1199 ? true : false;
    this.collapseSidebar = window.innerWidth < 991 ? true : false;
    this.horizontal = window.innerWidth < 991 ? false : true;
    this.fullScreen = false;
    this.MENUITEMS = [
      // Dashboard
      { headTitle: "DASHBOARDS" },
      {
        title: "Dashboards",
        icon: "home",
        dirchange: false,
        type: "sub",
        active: false,
        children: [
          {
            title: "RH Dashboard",
            dirchange: false,
            type: "sub",
            active: false,
            selected: false,
            children: [
              {
                title: "Dashboard",
                dirchange: false,
                type: "link",
                active: false,
                selected: false,
                path: "/dashboard/hrmdashboards/dashboard"
              },
              // {
              //   title: 'Departamento',
              //   dirchange: false,
              //   type: 'link',
              //   active: false,
              //   selected: false,
              //   path: '/dashboard/hrmdashboards/department',
              // },
              {
                title: "Empleados",
                type: "sub",
                active: false,
                selected: false,
                children: [
                  { path: "/dashboard/hrmdashboards/employees/employee-list", title: "Lista de Empleados", type: "link", selected: false }
                  //{ path: '/dashboard/hrmdashboards/employees/view-employee', title: 'Ver Empleado', type: 'link', selected: false },
                  //{ path: '/dashboard/hrmdashboards/employees/add-employee', title: 'Agregar Empleado', type: 'link', selected: false },
                ]
              },
              {
                title: "Puestos",
                type: "sub",
                active: false,
                selected: false,
                children: [
                  { path: "/dashboard/hrmdashboards/puestos/puesto-list", title: "Lista de Puestos", type: "link", selected: false },
                  { path: "/dashboard/hrmdashboards/puestos/add-puesto", title: "Agregar Puesto", type: "link", selected: false }
                ]
              },
              {
                title: "Usuarios",
                type: "sub",
                active: false,
                selected: false,
                children: [
                  { path: "/dashboard/hrmdashboards/users/user-list", title: "Lista de Usuarios", type: "link", selected: false },
                  //{ path: '/dashboard/hrmdashboards/users/view-user', title: 'Ver Usuario', type: 'link', selected: false },
                  { path: "/dashboard/hrmdashboards/users/add-user", title: "Agregar Usuario", type: "link", selected: false }
                ]
              }
              // {
              //   title: 'Asistencia', type: 'sub', active: false, selected: false, Menusub: false, children: [
              //     { path: '/dashboard/hrmdashboards/attendance/attendence-list', title: 'Lista de Asistencia', type: 'link', selected: false },
              //     { path: '/dashboard/hrmdashboards/attendance/attendencebyuser', title: 'Asistencia por Usuario', type: 'link', selected: false },
              //     { path: '/dashboard/hrmdashboards/attendance/attendenceview', title: 'Vista de Asistencia', type: 'link', selected: false },
              //     { path: '/dashboard/hrmdashboards/attendance/overview-calendar', title: 'Calendario General', type: 'link', selected: false },
              //     { path: '/dashboard/hrmdashboards/attendance/attendence-mark', title: 'Marcar Asistencia', type: 'link', selected: false },
              //     { path: '/dashboard/hrmdashboards/attendance/leave-settings', title: 'Configuración de Permisos', type: 'link', selected: false },
              //     { path: '/dashboard/hrmdashboards/attendance/leave-applications', title: 'Solicitudes de Permiso', type: 'link', selected: false },
              //     { path: '/dashboard/hrmdashboards/attendance/recent-leaves', title: 'Permisos Recientes', type: 'link', selected: false },
              //   ]
              // },
              // { title: 'Premios', dirchange: false, type: 'link', active: false, selected: false, path: '/dashboard/hrmdashboards/awards' },
              // { title: 'Días Festivos', dirchange: false, type: 'link', active: false, selected: false, path: '/dashboard/hrmdashboards/holidays' },
              // { title: 'Tablero de Avisos', dirchange: false, type: 'link', active: false, selected: false, path: '/dashboard/hrmdashboards/notice-board' },
              // { title: 'Gastos', dirchange: false, type: 'link', active: false, selected: false, path: '/dashboard/hrmdashboards/expenses' },
              // {
              //   title: 'Nómina', type: 'sub', active: false, selected: false, children: [
              //     { path: '/dashboard/hrmdashboards/payroll/employee-salary', title: 'Salario de Empleados', type: 'link', selected: false },
              //     { path: '/dashboard/hrmdashboards/payroll/add-payroll', title: 'Agregar Nómina', type: 'link', selected: false },
              //     { path: '/dashboard/hrmdashboards/payroll/edit-payroll', title: 'Editar Nómina', type: 'link', selected: false },
              //   ]
              // },
              // { title: 'Eventos', dirchange: false, type: 'link', active: false, selected: false, path: '/dashboard/hrmdashboards/events' },
              // { title: 'Configuración', dirchange: false, type: 'link', active: false, selected: false, path: '/dashboard/hrmdashboards/settings' },
            ]
          },
          // {
          //   title: 'Empleados Dashboard', type: 'sub', badgeType: 'success', badgeValue: '2', active: false, selected: false, children: [
          //     { path: '/dashboard/employee-dashboard/dashboard', title: 'Dashboard', type: 'link', selected: false },
          //     { path: '/dashboard/employee-dashboard/attendance', title: 'Asistencia', type: 'link', selected: false },
          //     { path: '/dashboard/employee-dashboard/apply-leaves', title: 'Solicitar Permisos', type: 'link', selected: false },
          //     { path: '/dashboard/employee-dashboard/my-leaves', title: 'Mis Permisos', type: 'link', selected: false },
          //     { path: '/dashboard/employee-dashboard/payslips', title: 'Recibos de Pago', type: 'link', selected: false },
          //     { path: '/dashboard/employee-dashboard/expenses', title: 'Gastos', type: 'link', selected: false },
          //   ]
          // },
          // {
          //   title: 'Tareas Dashboard', type: 'sub', badgeType: 'success', badgeValue: '2', selected: false, active: false, children: [
          //     { path: '/dashboard/task-dashboard/dashboard', title: 'Dashboard', type: 'link', selected: false },
          //     { path: '/dashboard/task-dashboard/task-list', title: 'Lista de Tareas', type: 'link', selected: false },
          //     { path: '/dashboard/task-dashboard/running-tasks', title: 'Tareas en Progreso', type: 'link', selected: false },
          //     { path: '/dashboard/task-dashboard/onhold-tasks', title: 'Tareas en Espera', type: 'link', selected: false },
          //     { path: '/dashboard/task-dashboard/completed-tasks', title: 'Tareas Completadas', type: 'link', selected: false },
          //     { path: '/dashboard/task-dashboard/view-tasks', title: 'Ver Tareas', type: 'link', selected: false },
          //     { path: '/dashboard/task-dashboard/overview-calendar', title: 'Calendario General', type: 'link', selected: false },
          //     { path: '/dashboard/task-dashboard/task-board', title: 'Tablero de Tareas', type: 'link', selected: false },
          //     { path: '/dashboard/task-dashboard/new-task', title: 'Nuevas Tareas', type: 'link', selected: false },
          //     { path: '/dashboard/task-dashboard/user-profile', title: 'Perfil de Usuario', type: 'link', selected: false },
          //   ]
          // },
          // {
          //   title: 'Proyectos Dashboard', type: 'sub', badgeType: 'success', badgeValue: '2', selected: false, active: false, children: [
          //     { path: '/dashboard/project-dashboard/dashboard', title: 'Dashboard', type: 'link', selected: false },
          //     { path: '/dashboard/project-dashboard/project-list', title: 'Lista de Proyectos', type: 'link', selected: false },
          //     { path: '/dashboard/project-dashboard/view-project', title: 'Ver Proyecto', type: 'link', selected: false },
          //     { path: '/dashboard/project-dashboard/overview-calendar', title: 'Calendario General', type: 'link', selected: false },
          //     { path: '/dashboard/project-dashboard/new-project', title: 'Nuevo Proyecto', type: 'link', selected: false },
          //   ]
          // },
          {
            title: "Clientes Dashboard",
            type: "sub",
            badgeType: "success",
            badgeValue: "2",
            selected: false,
            active: false,
            children: [
              //{ path: '/dashboard/client-dashboard/dashboard', title: 'Dashboard', type: 'link', selected: false },
              { path: "/dashboard/client-dashboard/client-list", title: "Lista de Clientes", type: "link", selected: false },
              //{ path: '/dashboard/client-dashboard/view-client', title: 'Ver Cliente', type: 'link', selected: false },
              { path: "/dashboard/client-dashboard/new-client", title: "Nuevo Cliente", type: "link", selected: false }
              //{ path: '/dashboard/client-dashboard/user-profile', title: 'Perfil de Usuario', type: 'link', selected: false },
            ]
          },
          {
            title: "Business Dashboard",
            type: "sub",
            badgeType: "info",
            badgeValue: "4",
            selected: false,
            active: false,
            children: [
              { path: "/dashboard/bussiness-dashboard/clientes/list", title: "Clientes", type: "link", selected: false },
              { path: "/dashboard/bussiness-dashboard/ventas/list", title: "Ventas", type: "link", selected: false },
              { path: "/dashboard/bussiness-dashboard/tickets/list", title: "Tickets", type: "link", selected: false },
              { path: "/dashboard/business-dashboard/sell-list", title: "Lista de Ventas (Legacy)", type: "link", selected: false }
            ]
          },
          {
            title: "Lotes Dashboard",
            type: "sub",
            badgeType: "warning",
            badgeValue: "3",
            selected: false,
            active: false,
            children: [
              { path: "/dashboard/business-dashboard/lotes/estadisticas", title: "Dashboard", type: "link", selected: false },
              { path: "/dashboard/business-dashboard/lotes", title: "Lista de Lotes", type: "link", selected: false },
              { path: "/dashboard/business-dashboard/lotes/new-lote", title: "Nuevo Lote", type: "link", selected: false }
            ]
          },
          // {
          //   title: 'Trabajos Dashboard', type: 'sub', badgeType: 'success', badgeValue: '2', selected: false, active: false, children: [
          //     { path: '/dashboard/job-dashboard/dashboard', title: 'Dashboard', type: 'link', selected: false },
          //     { path: '/dashboard/job-dashboard/job-lists', title: 'Lista de Trabajos', type: 'link', selected: false },
          //     { path: '/dashboard/job-dashboard/job-view', title: 'Ver Trabajo', type: 'link', selected: false },
          //     { path: '/dashboard/job-dashboard/job-applications', title: 'Solicitudes de Trabajo', type: 'link', selected: false },
          //     { path: '/dashboard/job-dashboard/apply-job', title: 'Aplicar a Trabajo', type: 'link', selected: false },
          //     { path: '/dashboard/job-dashboard/new-job', title: 'Nuevo Trabajo', type: 'link', selected: false },
          //     { path: '/dashboard/job-dashboard/user-profile', title: 'Perfil de Usuario', type: 'link', selected: false },
          //   ]
          // },
          {
            title: "Producci\xF3n Dashboard",
            type: "sub",
            badgeType: "success",
            badgeValue: "5",
            selected: false,
            active: false,
            children: [
              { path: "/dashboard/production-dashboard/huevos/estadisticas", title: "Dashboard", type: "link", selected: false },
              { path: "/dashboard/production-dashboard/huevos", title: "Control de Huevos", type: "link", selected: false },
              {
                title: "Productos",
                type: "sub",
                active: false,
                selected: false,
                children: [
                  { path: "/dashboard/production-dashboard/productos/list", title: "Lista de Productos", type: "link", selected: false },
                  { path: "/dashboard/production-dashboard/productos/new", title: "Nuevo Producto", type: "link", selected: false },
                  { path: "/dashboard/production-dashboard/productos/estadisticas", title: "Estad\xEDsticas", type: "link", selected: false }
                ]
              },
              { path: "/dashboard/production-dashboard/inventario/list", title: "Inventario", type: "link", selected: false },
              { path: "/dashboard/production-dashboard/vehiculos/list", title: "Veh\xEDculos", type: "link", selected: false },
              { path: "/dashboard/production-dashboard/gastos-operacion/list", title: "Gastos de Operaci\xF3n", type: "link", selected: false }
            ]
          },
          {
            title: "Super Admin",
            type: "sub",
            active: false,
            selected: false,
            children: [
              //{ path: '/dashboard/super-admin/dashboard', title: 'Dashboard', type: 'link', selected: false },
              { path: "/dashboard/super-admin/companies", title: "Empresas", type: "link", selected: false },
              { path: "/dashboard/super-admin/subscription-plans", title: "Planes de Suscripci\xF3n", type: "link", selected: false },
              { path: "/dashboard/super-admin/modules", title: "Gesti\xF3n de M\xF3dulos", type: "link", selected: false }
              //{ path: '/dashboard/super-admin/invoices', title: 'Facturas', type: 'link', selected: false },
              //{ path: '/dashboard/super-admin/super-admins', title: 'Super Administradores', type: 'link', selected: false },
              //{ path: '/dashboard/super-admin/settings', title: 'Configuración', type: 'link', selected: false },
              //{ path: '/dashboard/super-admin/role-access', title: 'Acceso por Roles', type: 'link', selected: false },
            ]
          }
        ]
      },
      // Reportes
      { headTitle: "REPORTER\xCDA" },
      {
        title: "Reportes",
        icon: "bar-chart-2",
        dirchange: false,
        type: "sub",
        active: false,
        children: [
          {
            path: "/dashboard/reports/ventas",
            title: "Reporte de Ventas",
            type: "link",
            selected: false
          },
          {
            path: "/dashboard/reports/productos",
            title: "Reporte de Productos",
            type: "link",
            selected: false
          },
          {
            path: "/dashboard/reports/tickets",
            title: "Reporte de Tickets",
            type: "link",
            selected: false
          },
          {
            path: "/dashboard/reports/huevos",
            title: "Reporte de Huevos",
            type: "link",
            selected: false
          },
          {
            path: "/dashboard/reports/empleados",
            title: "Reporte de Empleados",
            type: "link",
            selected: false
          }
        ]
      }
      // {
      //   title: 'Submenús', icon: 'sliders', type: 'sub', active: false, selected: false, children: [
      //     { title: 'nivel-1', type: 'empty', selected: false },
      //     {
      //       title: 'nivel2', type: 'sub', active: false, selected: false, children: [
      //         { title: 'nivel-2.1', type: 'empty', selected: false },
      //         { title: 'nivel-2.2', type: 'empty', selected: false },
      //         {
      //           title: 'nivel2.3', type: 'sub', active: false, selected: false, children: [
      //             { title: 'nivel-2.3.1', type: 'empty', selected: false },
      //             { title: 'nivel-2.3.2', type: 'empty', selected: false },
      //           ]
      //         },
      //       ]
      //     },
      //   ]
      // },
      // {
      //   title: 'Cuenta', icon: 'lock', type: 'sub', badgeType: 'success', active: false, selected: false, children: [
      //     {
      //       title: 'páginas-de-error', type: 'sub', badgeType: 'success', badgeValue: '2', active: false, selected: false, children: [
      //         { path: '/error-page/error404', title: '404', type: 'link', selected: false },
      //       ]
      //     },
      //   ]
      // },
    ];
    this.items = new BehaviorSubject(this.MENUITEMS);
    this.setScreenWidth(window.innerWidth);
    fromEvent(window, "resize").pipe(debounceTime(1e3), takeUntil(this.unsubscriber)).subscribe((evt) => {
      this.setScreenWidth(evt.target.innerWidth);
      if (evt.target.innerWidth < 991) {
        this.collapseSidebar = true;
        this.megaMenu = false;
        this.levelMenu = false;
      }
      if (evt.target.innerWidth < 1199) {
        this.megaMenuColapse = true;
      }
    });
    if (window.innerWidth < 991) {
      this.router.events.subscribe((event) => {
        this.collapseSidebar = true;
        this.megaMenu = false;
        this.levelMenu = false;
      });
    }
  }
  ngOnDestroy() {
    this.unsubscriber.next;
    this.unsubscriber.complete();
  }
  setScreenWidth(width) {
    this.screenWidth.next(width);
  }
};
_NavService.\u0275fac = function NavService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NavService)(\u0275\u0275inject(Router));
};
_NavService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NavService, factory: _NavService.\u0275fac, providedIn: "root" });
var NavService = _NavService;

// src/app/shared/directives/dropdown-position.directive.ts
var _DropdownPositionDirective = class _DropdownPositionDirective {
  constructor(elementRef, renderer, navServices) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.navServices = navServices;
  }
  onResize(event) {
    this.setPosition();
  }
  ngOnInit() {
    this.menuitemsSubscribe$ = this.navServices.items.subscribe((items) => {
      this.menuItems = items;
    });
    this.setPosition();
  }
  clearNavDropdown() {
    this.menuItems?.forEach((a2) => {
      a2.active = false;
      a2?.children?.forEach((b2) => {
        b2.active = false;
        b2?.children?.forEach((c2) => {
          c2.active = false;
        });
      });
    });
  }
  setPosition() {
    let dropdownElement = this.elementRef.nativeElement;
    if (dropdownElement.parentElement?.classList.contains("child1") && dropdownElement.parentElement?.classList.contains("active")) {
      const rect = dropdownElement.getBoundingClientRect();
      if (rect.right > window.innerWidth) {
        return this.clearNavDropdown();
      }
    }
    if (dropdownElement.classList.contains("open")) {
      let dropdownElementUl = dropdownElement.querySelector("ul");
      if (dropdownElementUl) {
        var dropdownRect = dropdownElement.getBoundingClientRect();
        var dropdownWidth = dropdownElementUl.getBoundingClientRect().width;
        var rightEdge = dropdownRect.right + dropdownWidth;
        var leftEdge = dropdownRect.left - dropdownWidth;
        if (rightEdge > window.innerWidth) {
          dropdownElementUl.classList.add("force-left");
        } else {
          if (dropdownElement.closest("ul")?.classList.contains("force-left") && leftEdge > 0) {
            dropdownElementUl.classList.add("force-left");
          } else if (leftEdge < 0) {
            dropdownElementUl.classList.remove("force-left");
          } else {
            dropdownElementUl.classList.remove("force-left");
          }
        }
      }
    }
  }
  ngOnDestroy() {
    this.menuitemsSubscribe$.unsubscribe();
  }
};
_DropdownPositionDirective.\u0275fac = function DropdownPositionDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DropdownPositionDirective)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(NavService));
};
_DropdownPositionDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _DropdownPositionDirective, selectors: [["", "appDropdownPosition", ""]], hostBindings: function DropdownPositionDirective_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("resize", function DropdownPositionDirective_resize_HostBindingHandler($event) {
      return ctx.onResize($event);
    }, false, \u0275\u0275resolveWindow);
  }
}, standalone: true });
var DropdownPositionDirective = _DropdownPositionDirective;

// src/app/shared/common/sidebar/sidebar.component.ts
var _c07 = (a0) => ({ "sticky-pin": a0 });
var _c17 = () => ({ display: "block" });
var _c23 = (a0, a1, a2, a3) => ({ slide__category: a0, "slide has-sub": a1, open: a2, active: a3 });
var _c32 = (a0) => [a0];
var _c42 = (a0) => ({ active: a0 });
var _c52 = (a0, a1, a2) => ({ active: a0, "double-menu-active": a1, "force-left": a2 });
var _c62 = (a0) => ({ display: a0 });
var _c7 = (a0, a1, a2) => ({ open: a0, "has-sub": a1, active: a2 });
var _c8 = () => ({ exact: true });
var _c9 = (a0, a1, a2) => ({ "force-left": a0, active: a1, "double-menu-active": a2 });
var _c10 = (a0) => ({ "force-left": a0 });
var _c11 = (a0) => ({ open: a0 });
function SidebarComponent_For_26_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const menuItem_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(menuItem_r1.headTitle);
  }
}
function SidebarComponent_For_26_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const menuItem_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275classMapInterpolate1("fe fe-", menuItem_r1.icon, " side-menu__icon");
  }
}
function SidebarComponent_For_26_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 30);
    \u0275\u0275listener("click", function SidebarComponent_For_26_Conditional_2_Template_a_click_0_listener($event) {
      let tmp_12_0;
      \u0275\u0275restoreView(_r2);
      const menuItem_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setNavActive($event, (tmp_12_0 = menuItem_r1.path) !== null && tmp_12_0 !== void 0 ? tmp_12_0 : ""));
    });
    \u0275\u0275elementStart(1, "span", 31);
    \u0275\u0275template(2, SidebarComponent_For_26_Conditional_2_Conditional_2_Template, 1, 3, "i", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 33);
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const menuItem_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", !menuItem_r1.type ? null : \u0275\u0275pureFunction1(7, _c32, menuItem_r1.path));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(menuItem_r1.icon ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", menuItem_r1.title, " ");
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("badge bg-", menuItem_r1.badgeClass, "-transparent ms-2 d-inline-block");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(menuItem_r1.badgeValue);
  }
}
function SidebarComponent_For_26_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const menuItem_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275classMapInterpolate1("side-menu__icon  fe fe-", menuItem_r1.icon, " side-menu__icon");
  }
}
function SidebarComponent_For_26_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 34);
    \u0275\u0275listener("click", function SidebarComponent_For_26_Conditional_3_Template_a_click_0_listener($event) {
      let tmp_12_0;
      \u0275\u0275restoreView(_r4);
      const menuItem_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setNavActive($event, (tmp_12_0 = menuItem_r1.path) !== null && tmp_12_0 !== void 0 ? tmp_12_0 : ""));
    });
    \u0275\u0275template(1, SidebarComponent_For_26_Conditional_3_Conditional_1_Template, 1, 3, "i", 32);
    \u0275\u0275elementStart(2, "span", 33);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const menuItem_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(menuItem_r1.icon ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(menuItem_r1.title);
  }
}
function SidebarComponent_For_26_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const menuItem_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275classMapInterpolate1("fe fe-", menuItem_r1.icon, " side-menu__icon");
  }
}
function SidebarComponent_For_26_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 35);
    \u0275\u0275listener("click", function SidebarComponent_For_26_Conditional_4_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const menuItem_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleNavActive($event, menuItem_r1));
    });
    \u0275\u0275elementStart(1, "span", 31);
    \u0275\u0275template(2, SidebarComponent_For_26_Conditional_4_Conditional_2_Template, 1, 3, "i", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 33);
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "i", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const menuItem_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", menuItem_r1.type ? null : \u0275\u0275pureFunction1(8, _c32, menuItem_r1.path))("ngClass", \u0275\u0275pureFunction1(10, _c42, menuItem_r1.selected));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(menuItem_r1.icon ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", menuItem_r1.title, " ");
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("badge bg-", menuItem_r1.badgeClass, "-transparent ms-2 d-inline-block");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(menuItem_r1.badgeValue);
  }
}
function SidebarComponent_For_26_Conditional_5_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 43);
    \u0275\u0275listener("click", function SidebarComponent_For_26_Conditional_5_For_5_Conditional_1_Template_a_click_0_listener($event) {
      let tmp_23_0;
      \u0275\u0275restoreView(_r6);
      const childrenItem_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setNavActive($event, (tmp_23_0 = childrenItem_r7.path) !== null && tmp_23_0 !== void 0 ? tmp_23_0 : ""));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const childrenItem_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", !childrenItem_r7.type ? null : \u0275\u0275pureFunction1(3, _c32, childrenItem_r7.path))("routerLinkActiveOptions", \u0275\u0275pureFunction0(5, _c8));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", childrenItem_r7.title, " ");
  }
}
function SidebarComponent_For_26_Conditional_5_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 34);
    \u0275\u0275listener("click", function SidebarComponent_For_26_Conditional_5_For_5_Conditional_2_Template_a_click_0_listener($event) {
      let tmp_23_0;
      \u0275\u0275restoreView(_r8);
      const childrenItem_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setNavActive($event, (tmp_23_0 = childrenItem_r7.path) !== null && tmp_23_0 !== void 0 ? tmp_23_0 : ""));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const childrenItem_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", childrenItem_r7.title, " ");
  }
}
function SidebarComponent_For_26_Conditional_5_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 44);
    \u0275\u0275listener("click", function SidebarComponent_For_26_Conditional_5_For_5_Conditional_3_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const childrenItem_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleNavActive($event, childrenItem_r7));
    });
    \u0275\u0275elementStart(1, "span", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "i", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const childrenItem_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c42, childrenItem_r7.selected))("routerLink", childrenItem_r7.type ? null : \u0275\u0275pureFunction1(5, _c32, childrenItem_r7.path));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(childrenItem_r7.title);
  }
}
function SidebarComponent_For_26_Conditional_5_For_5_Conditional_4_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 43);
    \u0275\u0275listener("click", function SidebarComponent_For_26_Conditional_5_For_5_Conditional_4_For_2_Conditional_1_Template_a_click_0_listener($event) {
      let tmp_34_0;
      \u0275\u0275restoreView(_r10);
      const childrenSubItem_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.setNavActive($event, (tmp_34_0 = childrenSubItem_r11.path) !== null && tmp_34_0 !== void 0 ? tmp_34_0 : ""));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const childrenSubItem_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", !childrenSubItem_r11.type ? null : \u0275\u0275pureFunction1(3, _c32, childrenSubItem_r11.path))("routerLinkActiveOptions", \u0275\u0275pureFunction0(5, _c8));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", childrenSubItem_r11.title, " ");
  }
}
function SidebarComponent_For_26_Conditional_5_For_5_Conditional_4_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const childrenSubItem_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", childrenSubItem_r11.title, " ");
  }
}
function SidebarComponent_For_26_Conditional_5_For_5_Conditional_4_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 44);
    \u0275\u0275listener("click", function SidebarComponent_For_26_Conditional_5_For_5_Conditional_4_For_2_Conditional_3_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const childrenSubItem_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.toggleNavActive($event, childrenSubItem_r11));
    });
    \u0275\u0275elementStart(1, "span", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "i", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const childrenSubItem_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c42, childrenSubItem_r11.selected))("routerLink", childrenSubItem_r11.type ? null : \u0275\u0275pureFunction1(5, _c32, childrenSubItem_r11.path));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(childrenSubItem_r11.title);
  }
}
function SidebarComponent_For_26_Conditional_5_For_5_Conditional_4_For_2_Conditional_4_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const childrenSubItem1_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", !childrenSubItem1_r13.type ? null : \u0275\u0275pureFunction1(3, _c32, childrenSubItem1_r13.path))("routerLinkActiveOptions", \u0275\u0275pureFunction0(5, _c8));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", childrenSubItem1_r13.title, " ");
  }
}
function SidebarComponent_For_26_Conditional_5_For_5_Conditional_4_For_2_Conditional_4_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const childrenSubItem1_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", childrenSubItem1_r13.title, " ");
  }
}
function SidebarComponent_For_26_Conditional_5_For_5_Conditional_4_For_2_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 22);
    \u0275\u0275template(1, SidebarComponent_For_26_Conditional_5_For_5_Conditional_4_For_2_Conditional_4_For_2_Conditional_1_Template, 2, 6, "a", 40)(2, SidebarComponent_For_26_Conditional_5_For_5_Conditional_4_For_2_Conditional_4_For_2_Conditional_2_Template, 2, 1, "a", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const childrenSubItem1_r13 = ctx.$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c11, childrenSubItem1_r13.active));
    \u0275\u0275advance();
    \u0275\u0275conditional(childrenSubItem1_r13.type === "link" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(childrenSubItem1_r13.type === "empty" ? 2 : -1);
  }
}
function SidebarComponent_For_26_Conditional_5_For_5_Conditional_4_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 46);
    \u0275\u0275repeaterCreate(1, SidebarComponent_For_26_Conditional_5_For_5_Conditional_4_For_2_Conditional_4_For_2_Template, 3, 5, "li", 22, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const childrenSubItem_r11 = \u0275\u0275nextContext().$implicit;
    const childrenItem_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c10, childrenItem_r7.dirchange))("ngStyle", \u0275\u0275pureFunction1(4, _c62, childrenSubItem_r11.active ? "block" : "none"));
    \u0275\u0275advance();
    \u0275\u0275repeater(childrenSubItem_r11.children);
  }
}
function SidebarComponent_For_26_Conditional_5_For_5_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 39);
    \u0275\u0275template(1, SidebarComponent_For_26_Conditional_5_For_5_Conditional_4_For_2_Conditional_1_Template, 2, 6, "a", 40)(2, SidebarComponent_For_26_Conditional_5_For_5_Conditional_4_For_2_Conditional_2_Template, 2, 1, "a", 27)(3, SidebarComponent_For_26_Conditional_5_For_5_Conditional_4_For_2_Conditional_3_Template, 4, 7, "a", 41)(4, SidebarComponent_For_26_Conditional_5_For_5_Conditional_4_For_2_Conditional_4_Template, 3, 6, "ul", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const childrenSubItem_r11 = ctx.$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(5, _c7, childrenSubItem_r11.active, childrenSubItem_r11.type === "sub", childrenSubItem_r11.selected));
    \u0275\u0275advance();
    \u0275\u0275conditional(childrenSubItem_r11.type === "link" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(childrenSubItem_r11.type === "empty" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(childrenSubItem_r11.type === "sub" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(childrenSubItem_r11.children ? 4 : -1);
  }
}
function SidebarComponent_For_26_Conditional_5_For_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 42);
    \u0275\u0275repeaterCreate(1, SidebarComponent_For_26_Conditional_5_For_5_Conditional_4_For_2_Template, 5, 9, "li", 39, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const childrenItem_r7 = \u0275\u0275nextContext().$implicit;
    const menuItem_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(2, _c9, childrenItem_r7.dirchange, menuItem_r1.active, menuItem_r1.active))("ngStyle", \u0275\u0275pureFunction1(6, _c62, childrenItem_r7.active ? "block" : "none"));
    \u0275\u0275advance();
    \u0275\u0275repeater(childrenItem_r7.children);
  }
}
function SidebarComponent_For_26_Conditional_5_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 39);
    \u0275\u0275template(1, SidebarComponent_For_26_Conditional_5_For_5_Conditional_1_Template, 2, 6, "a", 40)(2, SidebarComponent_For_26_Conditional_5_For_5_Conditional_2_Template, 2, 1, "a", 27)(3, SidebarComponent_For_26_Conditional_5_For_5_Conditional_3_Template, 4, 7, "a", 41)(4, SidebarComponent_For_26_Conditional_5_For_5_Conditional_4_Template, 3, 8, "ul", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const childrenItem_r7 = ctx.$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(6, _c42, childrenItem_r7.selected))("ngClass", \u0275\u0275pureFunction3(8, _c7, childrenItem_r7.active, childrenItem_r7.type === "sub", childrenItem_r7.selected));
    \u0275\u0275advance();
    \u0275\u0275conditional(childrenItem_r7.type === "link" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(childrenItem_r7.type === "empty" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(childrenItem_r7.type === "sub" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(childrenItem_r7.children ? 4 : -1);
  }
}
function SidebarComponent_For_26_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 29)(1, "li", 37)(2, "a", 38);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(4, SidebarComponent_For_26_Conditional_5_For_5_Template, 5, 12, "li", 39, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const menuItem_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(3, _c52, menuItem_r1.active, menuItem_r1.active, menuItem_r1.dirchange))("ngStyle", \u0275\u0275pureFunction1(7, _c62, menuItem_r1.active ? "block" : "none"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(menuItem_r1.title);
    \u0275\u0275advance();
    \u0275\u0275repeater(menuItem_r1.children);
  }
}
function SidebarComponent_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 22);
    \u0275\u0275template(1, SidebarComponent_For_26_Conditional_1_Template, 2, 1, "span", 25)(2, SidebarComponent_For_26_Conditional_2_Template, 7, 9, "a", 26)(3, SidebarComponent_For_26_Conditional_3_Template, 4, 2, "a", 27)(4, SidebarComponent_For_26_Conditional_4_Template, 8, 12, "a", 28)(5, SidebarComponent_For_26_Conditional_5_Template, 6, 9, "ul", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const menuItem_r1 = ctx.$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(6, _c23, menuItem_r1.headTitle, menuItem_r1.title, menuItem_r1.active, menuItem_r1.selected));
    \u0275\u0275advance();
    \u0275\u0275conditional(menuItem_r1.headTitle ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(menuItem_r1.type === "link" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(menuItem_r1.type === "empty" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(menuItem_r1.type === "sub" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(menuItem_r1.children ? 5 : -1);
  }
}
var _SidebarComponent = class _SidebarComponent {
  constructor(navServices, router, renderer, elementRef, cd) {
    this.navServices = navServices;
    this.router = router;
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.cd = cd;
    this.eventTriggered = false;
    this.options = { autoHide: false, scrollbarMinSize: 100 };
    this.hasParent = false;
    this.hasParentLevel = 0;
    this.scrolled = false;
    this.WindowPreSize = [window.innerWidth];
    let html = this.elementRef.nativeElement.ownerDocument.documentElement;
  }
  clearNavDropdown() {
    this.menuItems?.forEach((a2) => {
      a2.active = false;
      a2?.children?.forEach((b2) => {
        b2.active = false;
        b2?.children?.forEach((c2) => {
          c2.active = false;
        });
      });
    });
  }
  ngOnInit() {
    this.menuitemsSubscribe$ = this.navServices.items.subscribe((items) => {
      this.menuItems = items;
    });
    const WindowResize = fromEvent(window, "resize");
    if (WindowResize) {
      this.windowSubscribe$ = WindowResize.subscribe(() => {
      });
    }
    if (document.querySelector("html")?.getAttribute("data-nav-layout") == "horizontal" && window.innerWidth >= 992) {
      this.clearNavDropdown();
    }
  }
  // Start of Set menu Active event
  setNavActive(event, currentPath, menuData = this.menuItems) {
    if (event) {
      if (event?.ctrlKey) {
        return;
      }
    }
    let html = document.documentElement;
    for (const item of menuData) {
      if (item.path === currentPath) {
        item.active = true;
        item.selected = true;
        this.setMenuAncestorsActive(item);
      } else if (!item.active && !item.selected) {
        item.active = false;
        item.selected = false;
      } else {
        this.removeActiveOtherMenus(item);
      }
      if (item.children && item.children.length > 0) {
        this.setNavActive(event, currentPath, item.children);
      }
    }
  }
  getParentObject(obj, childObject) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === "object" && JSON.stringify(obj[key]) === JSON.stringify(childObject)) {
          return obj;
        }
        if (typeof obj[key] === "object") {
          const parentObject = this.getParentObject(obj[key], childObject);
          if (parentObject !== null) {
            return parentObject;
          }
        }
      }
    }
    return null;
  }
  setMenuAncestorsActive(targetObject) {
    const parent2 = this.getParentObject(this.menuItems, targetObject);
    let html = document.documentElement;
    if (parent2) {
      if (this.hasParentLevel > 2) {
        this.hasParent = true;
      }
      parent2.active = true;
      parent2.selected = true;
      this.hasParentLevel += 1;
      this.setMenuAncestorsActive(parent2);
    } else if (!this.hasParent) {
    }
  }
  removeActiveOtherMenus(item) {
    if (item) {
      if (Array.isArray(item)) {
        for (const val of item) {
          val.active = false;
          val.selected = false;
        }
      }
      item.active = false;
      item.selected = false;
      if (item.children && item.children.length > 0) {
        this.removeActiveOtherMenus(item.children);
      }
    } else {
      return;
    }
  }
  // Start of Toggle menu event
  toggleNavActive(event, targetObject, menuData = this.menuItems) {
    let html = document.documentElement;
    let element = event.target;
    if (html?.getAttribute("data-vertical-style") == "icontext") {
      html?.setAttribute("data-icon-text", "open");
    } else {
      html?.removeAttribute("data-icon-text");
    }
    if (html.getAttribute("data-nav-style") != "icon-hover" && html.getAttribute("data-nav-style") != "menu-hover" || window.innerWidth < 992 || html.getAttribute("data-nav-layout") != "horizontal" && (html.getAttribute("data-nav-style") != "icon-hover-closed" && html.getAttribute("data-nav-style") != "menu-hover-closed")) {
      for (const item of menuData) {
        if (item === targetObject) {
          if (html.getAttribute("data-vertical-style") == "doublemenu" && item.active) {
            return;
          }
          item.active = !item.active;
          if (item.active) {
            this.closeOtherMenus(menuData, item);
          } else {
            if (html.getAttribute("data-vertical-style") == "doublemenu") {
              html.setAttribute("data-toggled", "double-menu-close");
            }
          }
          this.setAncestorsActive(menuData, item);
        } else if (!item.active) {
          if (html.getAttribute("data-vertical-style") != "doublemenu") {
            item.active = false;
          }
        }
        if (item.children && item.children.length > 0) {
          this.toggleNavActive(event, targetObject, item.children);
        }
      }
      if (targetObject?.children && targetObject.active) {
        if (html.getAttribute("data-vertical-style") == "doublemenu" && html.getAttribute("data-toggled") != "double-menu-open") {
          html.setAttribute("data-toggled", "double-menu-open");
        }
      }
      if (element && html.getAttribute("data-nav-layout") == "horizontal" && (html.getAttribute("data-nav-style") == "menu-click" || html.getAttribute("data-nav-style") == "icon-click")) {
        const listItem = element.closest("li");
        if (listItem) {
          const siblingUL = listItem.querySelector("ul");
          let outterUlWidth = 0;
          let listItemUL = listItem.closest("ul:not(.main-menu)");
          while (listItemUL) {
            listItemUL = listItemUL.parentElement.closest("ul:not(.main-menu)");
            if (listItemUL) {
              outterUlWidth += listItemUL.clientWidth;
            }
          }
          if (siblingUL) {
            let siblingULRect = listItem.getBoundingClientRect();
            if (html.getAttribute("dir") == "rtl") {
              if (siblingULRect.left - siblingULRect.width - outterUlWidth + 150 < 0 && outterUlWidth < window.innerWidth && outterUlWidth + siblingULRect.width + siblingULRect.width < window.innerWidth) {
                targetObject.dirchange = true;
              } else {
                targetObject.dirchange = false;
              }
            } else {
              if (outterUlWidth + siblingULRect.right + siblingULRect.width + 50 > window.innerWidth && siblingULRect.right >= 0 && outterUlWidth + siblingULRect.width + siblingULRect.width < window.innerWidth) {
                targetObject.dirchange = true;
              } else {
                targetObject.dirchange = false;
              }
            }
          }
          setTimeout(() => {
            let computedValue = siblingUL.getBoundingClientRect();
            if (computedValue.bottom > window.innerHeight) {
              siblingUL.style.height = window.innerHeight - computedValue.top - 8 + "px !important";
              siblingUL.style.overflow = "auto !important";
            }
          }, 100);
        }
      }
    }
  }
  setAncestorsActive(menuData, targetObject) {
    let html = document.documentElement;
    const parent2 = this.findParent(menuData, targetObject);
    if (parent2) {
      parent2.active = true;
      if (parent2.active) {
        html.setAttribute("data-toggled", "double-menu-open");
      }
      this.setAncestorsActive(menuData, parent2);
    } else {
      if (html.getAttribute("data-vertical-style") == "doublemenu") {
        html.setAttribute("data-toggled", "double-menu-close");
      }
    }
  }
  closeOtherMenus(menuData, targetObject) {
    for (const item of menuData) {
      if (item !== targetObject) {
        item.active = false;
        if (item.children && item.children.length > 0) {
          this.closeOtherMenus(item.children, targetObject);
        }
      }
    }
  }
  findParent(menuData, targetObject) {
    for (const item of menuData) {
      if (item.children && item.children.includes(targetObject)) {
        return item;
      }
      if (item.children && item.children.length > 0) {
        const parent2 = this.findParent(item.children, targetObject);
        if (parent2) {
          return parent2;
        }
      }
    }
    return null;
  }
  // End of Toggle menu event
  HoverToggleInnerMenuFn(event, item) {
    let html = document.documentElement;
    let element = event.target;
    if (element && html.getAttribute("data-nav-layout") == "horizontal" && (html.getAttribute("data-nav-style") == "menu-hover" || html.getAttribute("data-nav-style") == "icon-hover")) {
      const listItem = element.closest("li");
      if (listItem) {
        const siblingUL = listItem.querySelector("ul");
        let outterUlWidth = 0;
        let listItemUL = listItem.closest("ul:not(.main-menu)");
        while (listItemUL) {
          listItemUL = listItemUL.parentElement?.closest("ul:not(.main-menu)");
          if (listItemUL) {
            outterUlWidth += listItemUL.clientWidth;
          }
        }
        if (siblingUL) {
          let siblingULRect = listItem.getBoundingClientRect();
          if (html.getAttribute("dir") == "rtl") {
            if (siblingULRect.left - siblingULRect.width - outterUlWidth + 150 < 0 && outterUlWidth < window.innerWidth && outterUlWidth + siblingULRect.width + siblingULRect.width < window.innerWidth) {
              item.dirchange = true;
            } else {
              item.dirchange = false;
            }
          } else {
            if (outterUlWidth + siblingULRect.right + siblingULRect.width + 50 > window.innerWidth && siblingULRect.right >= 0 && outterUlWidth + siblingULRect.width + siblingULRect.width < window.innerWidth) {
              item.dirchange = true;
            } else {
              item.dirchange = false;
            }
          }
        }
      }
    }
  }
  ngAfterViewInit() {
    this.setNavActive(null, this.router.url);
    this.cd.detectChanges();
  }
  ngOnDestroy() {
    this.menuitemsSubscribe$.unsubscribe();
    this.windowSubscribe$.unsubscribe();
    document.querySelector("html")?.setAttribute("data-vertical-style", "overlay");
    document.querySelector("html")?.setAttribute("data-nav-layout", "vertical");
  }
  leftArrowFn() {
    let slideLeft = document.querySelector(".slide-left");
    let slideRight = document.querySelector(".slide-right");
    let menuNav = document.querySelector(".main-menu");
    let mainContainer1 = document.querySelector(".main-sidebar");
    let marginRightValue = Math.ceil(Number(window.getComputedStyle(menuNav).marginInlineStart.split("px")[0]));
    let mainContainer1Width = mainContainer1.offsetWidth;
    if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
      if (marginRightValue < 0 && !(Math.abs(marginRightValue) < mainContainer1Width)) {
        menuNav.style.marginInlineStart = Number(menuNav.style.marginInlineStart.split("px")[0]) + Math.abs(mainContainer1Width) + "px";
        slideRight.classList.remove("d-none");
      } else if (marginRightValue >= 0) {
        menuNav.style.marginInlineStart = "0px";
        slideLeft.classList.add("d-none");
        slideRight.classList.remove("d-none");
      } else {
        menuNav.style.marginInlineStart = "0px";
        slideLeft.classList.add("d-none");
        slideRight.classList.remove("d-none");
      }
    } else {
      menuNav.style.marginInlineStart = "0px";
      slideLeft.classList.add("d-none");
    }
    let element = document.querySelector(".main-menu > .slide.open");
    let element1 = document.querySelector(".main-menu > .slide.open >ul");
    if (element) {
      element.classList.remove("open");
    }
    if (element1) {
      element1.style.display = "none";
    }
  }
  rightArrowFn() {
    let slideLeft = document.querySelector(".slide-left");
    let slideRight = document.querySelector(".slide-right");
    let menuNav = document.querySelector(".main-menu");
    let mainContainer1 = document.querySelector(".main-sidebar");
    let marginRightValue = Math.ceil(Number(window.getComputedStyle(menuNav).marginInlineStart.split("px")[0]));
    let check = menuNav.scrollWidth - mainContainer1.offsetWidth;
    let mainContainer1Width = mainContainer1.offsetWidth;
    if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
      if (Math.abs(check) > Math.abs(marginRightValue)) {
        if (!(Math.abs(check) > Math.abs(marginRightValue) + mainContainer1Width)) {
          mainContainer1Width = Math.abs(check) - Math.abs(marginRightValue);
          slideRight.classList.add("d-none");
        }
        menuNav.style.marginInlineStart = Number(menuNav.style.marginInlineStart.split("px")[0]) - Math.abs(mainContainer1Width) + "px";
        slideLeft.classList.remove("d-none");
      }
    }
    let element = document.querySelector(".main-menu > .slide.open");
    let element1 = document.querySelector(".main-menu > .slide.open >ul");
    if (element) {
      element.classList.remove("open");
    }
    if (element1) {
      element1.style.display = "none";
    }
  }
  onWindowScroll() {
    this.scrolled = window.scrollY > 10;
    const sections = document.querySelectorAll(".side-menu__item");
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    sections.forEach((ele, i2) => {
      const currLink = sections[i2];
      const val = currLink.getAttribute("value");
      const refElement = document.querySelector("#" + val);
      if (refElement !== null) {
        const scrollTopMinus = scrollPos + 73;
        if (refElement.offsetTop <= scrollTopMinus && refElement.offsetTop + refElement.offsetHeight > scrollTopMinus) {
          document.querySelector(".nav-scroll")?.classList.remove("active");
          currLink.classList.add("active");
        } else {
          currLink.classList.remove("active");
        }
      }
    });
  }
  onResize(event) {
    this.menuResizeFn();
    this.screenWidth = window.innerWidth;
    if (!this.eventTriggered && this.screenWidth <= 992) {
      document.documentElement?.setAttribute("data-toggled", "close");
      this.eventTriggered = true;
    } else if (this.screenWidth > 992) {
      this.eventTriggered = false;
    }
  }
  menuResizeFn() {
    this.WindowPreSize.push(window.innerWidth);
    if (this.WindowPreSize.length > 2) {
      this.WindowPreSize.shift();
    }
    if (this.WindowPreSize.length > 1) {
      const html = document.documentElement;
      if (this.WindowPreSize[this.WindowPreSize.length - 1] < 992 && this.WindowPreSize[this.WindowPreSize.length - 2] >= 992) {
        html.setAttribute("data-toggled", "close");
      }
      if (this.WindowPreSize[this.WindowPreSize.length - 1] >= 992 && this.WindowPreSize[this.WindowPreSize.length - 2] < 992) {
        html.removeAttribute("data-toggled");
        document.querySelector("#responsive-overlay")?.classList.remove("active");
      }
    }
  }
};
_SidebarComponent.\u0275fac = function SidebarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SidebarComponent)(\u0275\u0275directiveInject(NavService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef));
};
_SidebarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarComponent, selectors: [["app-sidebar"]], hostBindings: function SidebarComponent_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("scroll", function SidebarComponent_scroll_HostBindingHandler() {
      return ctx.onWindowScroll();
    }, false, \u0275\u0275resolveWindow)("resize", function SidebarComponent_resize_HostBindingHandler($event) {
      return ctx.onResize($event);
    }, false, \u0275\u0275resolveWindow);
  }
}, decls: 30, vars: 5, consts: [["id", "sidebar", 1, "app-sidebar", "sticky", 3, "ngClass"], [1, "main-sidebar-header"], ["routerLink", "/dashboard/hrmdashboards/dashboard", 1, "header-logo"], ["src", "./assets/images/brand-logos/desktop-logo.png", "alt", "logo", 1, "desktop-logo"], ["src", "./assets/images/brand-logos/toggle-logo.png", "alt", "logo", 1, "toggle-logo"], ["src", "./assets/images/brand-logos/desktop-dark.png", "alt", "logo", 1, "desktop-dark"], ["src", "./assets/images/brand-logos/toggle-white.png", "alt", "logo", 1, "toggle-dark"], ["src", "./assets/images/brand-logos/desktop-white.png", "alt", "logo", 1, "desktop-white"], ["src", "./assets/images/brand-logos/toggle-white.png", "alt", "logo", 1, "toggle-white"], ["id", "sidebar-scroll", 1, "main-sidebar"], [1, "main-menu-container", "nav", "nav-pills", "flex-column", "sub-open"], [1, "app-sidebar__user", "mb-3"], [1, "dropdown", "user-pro-body", "text-center", "user-pic"], [1, "avatar", "avatar-xxl", "online", "avatar-rounded"], ["src", "./assets/images/laritechfarms/1.jpg", "alt", "img"], [1, "user-info", "mt-1"], [1, "mb-1"], [1, "text-muted", "app-sidebar__user-name", "text-sm"], ["id", "slide-left", 1, "slide-left", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "#7b8191", "width", "24", "height", "24", "viewBox", "0 0 24 24"], ["d", "M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"], [1, "main-menu", 3, "ngStyle"], [1, "slide", 3, "ngClass"], ["id", "slide-right", 1, "slide-right", 3, "click"], ["d", "M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"], [1, "category-name"], ["routerLinkActive", "active", 1, "side-menu__item", 3, "routerLink"], ["href", "javascript:;", 1, "side-menu__item"], [1, "side-menu__item", 3, "routerLink", "ngClass"], [1, "slide-menu", "child1", 3, "ngClass", "ngStyle"], ["routerLinkActive", "active", 1, "side-menu__item", 3, "click", "routerLink"], [1, "side-menu__icon"], [3, "class"], [1, "side-menu__label"], ["href", "javascript:;", 1, "side-menu__item", 3, "click"], [1, "side-menu__item", 3, "click", "routerLink", "ngClass"], [1, "fe", "fe-chevron-right", "side-menu__angle"], [1, "slide", "side-menu__label1"], ["href", "javascript:void(0)"], ["appDropdownPosition", "", 1, "slide", 3, "ngClass"], ["routerLinkActive", "active", 1, "side-menu__item", 3, "routerLink", "routerLinkActiveOptions"], [1, "side-menu__item", 3, "ngClass", "routerLink"], [1, "slide-menu", "child2", 3, "ngClass", "ngStyle"], ["routerLinkActive", "active", 1, "side-menu__item", 3, "click", "routerLink", "routerLinkActiveOptions"], [1, "side-menu__item", 3, "click", "ngClass", "routerLink"], [1, ""], [1, "slide-menu", "child3", 3, "ngClass", "ngStyle"]], template: function SidebarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "aside", 0)(1, "div", 1)(2, "a", 2);
    \u0275\u0275element(3, "img", 3)(4, "img", 4)(5, "img", 5)(6, "img", 6)(7, "img", 7)(8, "img", 8)(9, "img", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 9)(11, "nav", 10)(12, "div", 11)(13, "div", 12)(14, "span", 13);
    \u0275\u0275element(15, "img", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 15)(17, "h5", 16);
    \u0275\u0275text(18, "Kevin Larios");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 17);
    \u0275\u0275text(20, "Administrador");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "div", 18);
    \u0275\u0275listener("click", function SidebarComponent_Template_div_click_21_listener() {
      return ctx.leftArrowFn();
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 19);
    \u0275\u0275element(23, "path", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "ul", 21);
    \u0275\u0275repeaterCreate(25, SidebarComponent_For_26_Template, 6, 11, "li", 22, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 23);
    \u0275\u0275listener("click", function SidebarComponent_Template_div_click_27_listener() {
      return ctx.rightArrowFn();
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(28, "svg", 19);
    \u0275\u0275element(29, "path", 24);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c07, ctx.scrolled));
    \u0275\u0275advance(24);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction0(4, _c17));
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.menuItems);
  }
}, dependencies: [NgClass, NgStyle, RouterLink, RouterLinkActive, DropdownPositionDirective] });
var SidebarComponent = _SidebarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarComponent, { className: "SidebarComponent" });
})();

// src/app/shared/common/switcher/switcher.component.ts
function SwitcherComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "p", 17);
    \u0275\u0275text(3, "Theme Color Mode:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 18)(5, "div", 19)(6, "div", 20)(7, "label", 21);
    \u0275\u0275text(8, " Light ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 22);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_11_Template_input_click_9_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateTheme("light"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 19)(11, "div", 20)(12, "label", 23);
    \u0275\u0275text(13, " Dark ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 24);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_11_Template_input_click_14_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateTheme("dark"));
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(15, "div", 16)(16, "p", 17);
    \u0275\u0275text(17, "Directions:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 18)(19, "div", 19)(20, "div", 20)(21, "label", 25);
    \u0275\u0275text(22, " LTR ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 26);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_11_Template_input_click_23_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateDirection("ltr"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 19)(25, "div", 20)(26, "label", 27);
    \u0275\u0275text(27, " RTL ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 28);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_11_Template_input_click_28_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateDirection("rtl"));
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(29, "div", 16)(30, "p", 17);
    \u0275\u0275text(31, "Navigation Styles:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 18)(33, "div", 29)(34, "div", 20)(35, "label", 30);
    \u0275\u0275text(36, " Vertical ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "input", 31);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_11_Template_input_click_37_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatemenuType("vertical"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 29)(39, "div", 20)(40, "label", 32);
    \u0275\u0275text(41, " Horizontal ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "input", 33);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_11_Template_input_click_42_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatemenuType("horizontal"));
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(43, "div", 34)(44, "p", 17);
    \u0275\u0275text(45, "Vertical & Horizontal Menu Styles:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 35)(47, "div", 19)(48, "div", 20)(49, "label", 36);
    \u0275\u0275text(50, " Menu Click ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "input", 37);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_11_Template_input_click_51_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatemenuStyle("menu-click"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "div", 19)(53, "div", 20)(54, "label", 38);
    \u0275\u0275text(55, " Menu Hover ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "input", 39);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_11_Template_input_click_56_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatemenuStyle("menu-hover"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "div", 19)(58, "div", 20)(59, "label", 40);
    \u0275\u0275text(60, " Icon Click ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "input", 41);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_11_Template_input_click_61_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatemenuStyle("icon-click"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(62, "div", 19)(63, "div", 20)(64, "label", 42);
    \u0275\u0275text(65, " Icon Hover ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "input", 43);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_11_Template_input_click_66_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatemenuStyle("icon-hover"));
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(67, "div", 44)(68, "p", 17);
    \u0275\u0275text(69, "Sidemenu Layout Styles:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 35)(71, "div", 45)(72, "div", 20)(73, "label", 46);
    \u0275\u0275text(74, " Default Menu ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "input", 47);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_11_Template_input_click_75_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatelayoutStyles("default"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(76, "div", 45)(77, "div", 20)(78, "label", 48);
    \u0275\u0275text(79, " Closed Menu ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "input", 49);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_11_Template_input_click_80_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatelayoutStyles("closed"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(81, "div", 45)(82, "div", 20)(83, "label", 50);
    \u0275\u0275text(84, " Icon Text ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "input", 51);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_11_Template_input_click_85_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatelayoutStyles("icontext"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(86, "div", 45)(87, "div", 20)(88, "label", 52);
    \u0275\u0275text(89, " Icon Overlay ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "input", 53);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_11_Template_input_click_90_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatelayoutStyles("overlay"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(91, "div", 45)(92, "div", 20)(93, "label", 54);
    \u0275\u0275text(94, " Detached ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "input", 55);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_11_Template_input_click_95_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatelayoutStyles("detached"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(96, "div", 45)(97, "div", 20)(98, "label", 56);
    \u0275\u0275text(99, " Double Menu ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "input", 57);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_11_Template_input_click_100_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatelayoutStyles("doublemenu"));
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(101, "div", 16)(102, "p", 17);
    \u0275\u0275text(103, "Page Styles:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "div", 18)(105, "div", 19)(106, "div", 20)(107, "label", 58);
    \u0275\u0275text(108, " Regular ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "input", 59);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_11_Template_input_click_109_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatepageStyles("regular"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(110, "div", 19)(111, "div", 20)(112, "label", 60);
    \u0275\u0275text(113, " Classic ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "input", 61);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_11_Template_input_click_114_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatepageStyles("classic"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(115, "div", 19)(116, "div", 20)(117, "label", 62);
    \u0275\u0275text(118, " Modern ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "input", 63);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_11_Template_input_click_119_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatepageStyles("modern"));
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(120, "div", 16)(121, "p", 17);
    \u0275\u0275text(122, "Layout Width Styles:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "div", 18)(124, "div", 29)(125, "div", 20)(126, "label", 64);
    \u0275\u0275text(127, " Full Width ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(128, "input", 65);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_11_Template_input_click_128_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatewidthStyles("full-width"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(129, "div", 29)(130, "div", 20)(131, "label", 66);
    \u0275\u0275text(132, " Boxed ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(133, "input", 67);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_11_Template_input_click_133_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatewidthStyles("boxed"));
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(134, "div", 16)(135, "p", 17);
    \u0275\u0275text(136, "Menu Positions:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(137, "div", 18)(138, "div", 29)(139, "div", 20)(140, "label", 68);
    \u0275\u0275text(141, " Fixed ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(142, "input", 69);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_11_Template_input_click_142_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatemenuPosition("fixed"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(143, "div", 29)(144, "div", 20)(145, "label", 70);
    \u0275\u0275text(146, " Scrollable ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(147, "input", 71);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_11_Template_input_click_147_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatemenuPosition("scrollable"));
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(148, "div", 16)(149, "p", 17);
    \u0275\u0275text(150, "Header Positions:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(151, "div", 18)(152, "div", 29)(153, "div", 20)(154, "label", 72);
    \u0275\u0275text(155, " Fixed ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(156, "input", 73);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_11_Template_input_click_156_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateheaderPosition("fixed"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(157, "div", 29)(158, "div", 20)(159, "label", 74);
    \u0275\u0275text(160, " Scrollable ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(161, "input", 75);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_11_Template_input_click_161_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateheaderPosition("scrollable"));
    });
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("checked", ctx_r2.localdata["theme"] == "light");
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r2.localdata["theme"] == "dark");
    \u0275\u0275advance(9);
    \u0275\u0275property("checked", ctx_r2.localdata["direction"] != "rtl");
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r2.localdata["direction"] == "rtl");
    \u0275\u0275advance(9);
    \u0275\u0275property("checked", ctx_r2.localdata["navigationStyles"] != "horizontal");
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r2.localdata["navigationStyles"] == "horizontal");
    \u0275\u0275advance(9);
    \u0275\u0275property("checked", ctx_r2.localdata["menuStyles"] == "menu-click");
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r2.localdata["menuStyles"] == "menu-hover")("checked", ctx_r2.localdata["menuStyles"] == "menu-hover");
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r2.localdata["menuStyles"] == "icon-click")("checked", ctx_r2.localdata["menuStyles"] == "icon-click");
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r2.localdata["menuStyles"] == "icon-hover")("checked", ctx_r2.localdata["menuStyles"] == "icon-hover");
    \u0275\u0275advance(14);
    \u0275\u0275property("checked", ctx_r2.localdata["layoutStyles"] == "closed");
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r2.localdata["layoutStyles"] == "icontext");
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r2.localdata["layoutStyles"] == "overlay");
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r2.localdata["layoutStyles"] == "detached");
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r2.localdata["layoutStyles"] == "doublemenu");
    \u0275\u0275advance(9);
    \u0275\u0275property("checked", ctx_r2.localdata["pageStyles"] != "classic");
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r2.localdata["pageStyles"] == "classic");
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r2.localdata["pageStyles"] == "modern");
    \u0275\u0275advance(9);
    \u0275\u0275property("checked", ctx_r2.localdata["widthStyles"] != "boxed");
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r2.localdata["widthStyles"] == "boxed");
    \u0275\u0275advance(9);
    \u0275\u0275property("checked", ctx_r2.localdata["menuPosition"] != "scrollable");
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r2.localdata["menuPosition"] == "scrollable");
    \u0275\u0275advance(9);
    \u0275\u0275property("checked", ctx_r2.localdata["headerPosition"] != "scrollable");
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r2.localdata["headerPosition"] == "scrollable");
  }
}
function SwitcherComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 76)(1, "div")(2, "div", 77)(3, "p", 17);
    \u0275\u0275text(4, "Menu Colors:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 78)(6, "div", 79)(7, "input", 80);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_15_Template_input_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatemenuColor("light"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 79)(9, "input", 81);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_15_Template_input_click_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatemenuColor("dark"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 79)(11, "input", 82);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_15_Template_input_click_11_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatemenuColor("color"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 79)(13, "input", 83);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_15_Template_input_click_13_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatemenuColor("gradient"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 79)(15, "input", 84);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_15_Template_input_click_15_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatemenuColor("transparent"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 85);
    \u0275\u0275text(17, "Note:If you want to change color Menu dynamically change from below Theme Primary color picker");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 77)(19, "p", 17);
    \u0275\u0275text(20, "Header Colors:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 78)(22, "div", 79)(23, "input", 86);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_15_Template_input_click_23_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateheaderColor("light"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 79)(25, "input", 87);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_15_Template_input_click_25_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateheaderColor("dark"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 79)(27, "input", 88);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_15_Template_input_click_27_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateheaderColor("color"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 79)(29, "input", 89);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_15_Template_input_click_29_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateheaderColor("gradient"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 79)(31, "input", 90);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_15_Template_input_click_31_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateheaderColor("transparent"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 85);
    \u0275\u0275text(33, "Note:If you want to change color Header dynamically change from below Theme Primary color picker");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 77)(35, "p", 17);
    \u0275\u0275text(36, "Theme Primary:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 91)(38, "div", 79)(39, "input", 92);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_15_Template_input_click_39_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateprimary("58,88,146"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 79)(41, "input", 93);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_15_Template_input_click_41_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateprimary("92,144,163"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 79)(43, "input", 94);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_15_Template_input_click_43_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateprimary("161,90,223"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 79)(45, "input", 95);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_15_Template_input_click_45_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateprimary("78,172,76"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 79)(47, "input", 96);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_15_Template_input_click_47_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateprimary("223,90,90"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 97);
    \u0275\u0275element(49, "div", 98);
    \u0275\u0275elementStart(50, "div", 99)(51, "div", 100)(52, "button", 101);
    \u0275\u0275twoWayListener("colorPickerChange", function SwitcherComponent_ng_template_15_Template_button_colorPickerChange_52_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.defaultPrimary, $event) || (ctx_r2.defaultPrimary = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("cpSliderDragEnd", function SwitcherComponent_ng_template_15_Template_button_cpSliderDragEnd_52_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dynamicLightPrimary($event));
    });
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(53, "div", 77)(54, "p", 17);
    \u0275\u0275text(55, "Theme Background:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 91)(57, "div", 79)(58, "input", 102);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_15_Template_input_click_58_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateBackground({ main: "20, 30, 96", secondary: "25, 38, 101", accent: "25, 38, 101", overlay: "rgba(255,255,255,0.1)", theme: "dark" }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 79)(60, "input", 103);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_15_Template_input_click_60_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateBackground({ main: "8,78,115", secondary: "13, 86, 120", accent: "13, 86, 120", overlay: "rgba(255,255,255,0.1)", theme: "dark" }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 79)(62, "input", 104);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_15_Template_input_click_62_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateBackground({ main: "90,37,135", secondary: "95, 45, 140", accent: "95, 45, 140", overlay: "rgba(255,255,255,0.1)", theme: "dark" }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 79)(64, "input", 105);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_15_Template_input_click_64_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateBackground({ main: "24,101,51", secondary: "29, 109, 56", accent: "29, 109, 56", theme: "dark", overlay: "rgba(255,255,255,0.1)" }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 79)(66, "input", 106);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_15_Template_input_click_66_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateBackground({ main: "120,66,20", secondary: "125, 74, 25", accent: "125, 74, 25", theme: "dark", overlay: "rgba(255,255,255,0.1)" }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 107);
    \u0275\u0275element(68, "div", 108);
    \u0275\u0275elementStart(69, "div", 109)(70, "div", 100)(71, "button", 101);
    \u0275\u0275twoWayListener("colorPickerChange", function SwitcherComponent_ng_template_15_Template_button_colorPickerChange_71_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.defaultBg, $event) || (ctx_r2.defaultBg = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("cpSliderDragEnd", function SwitcherComponent_ng_template_15_Template_button_cpSliderDragEnd_71_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dynamicTranparentBgPrimary($event));
    });
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(72, "div", 110)(73, "p", 17);
    \u0275\u0275text(74, "Menu With Background Image:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "div", 91)(76, "div", 111)(77, "input", 112);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_15_Template_input_click_77_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateBgImage("bgimg1"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 111)(79, "input", 113);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_15_Template_input_click_79_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateBgImage("bgimg2"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "div", 111)(81, "input", 114);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_15_Template_input_click_81_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateBgImage("bgimg3"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "div", 111)(83, "input", 115);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_15_Template_input_click_83_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateBgImage("bgimg4"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 111)(85, "input", 116);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_15_Template_input_click_85_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateBgImage("bgimg5"));
    });
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("checked", ctx_r2.localdata["menuColor"] == "light");
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r2.localdata["menuColor"] == "dark");
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r2.localdata["menuColor"] == "color");
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r2.localdata["menuColor"] == "gradient");
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r2.localdata["menuColor"] == "transparent");
    \u0275\u0275advance(8);
    \u0275\u0275property("checked", ctx_r2.localdata["headerColor"] == "light");
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r2.localdata["headerColor"] == "dark");
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r2.localdata["headerColor"] == "color");
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r2.localdata["headerColor"] == "gradient");
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r2.localdata["headerColor"] == "transparent");
    \u0275\u0275advance(10);
    \u0275\u0275property("checked", ctx_r2.localdata["themePrimary"] == "92,144,163");
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r2.localdata["themePrimary"] == "161,90,223");
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r2.localdata["themePrimary"] == "78,172,76");
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r2.localdata["themePrimary"] == "223,90,90");
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("background", ctx_r2.defaultPrimary);
    \u0275\u0275property("cpAlphaChannel", "disabled")("cpOutputFormat", "rgba");
    \u0275\u0275twoWayProperty("colorPicker", ctx_r2.defaultPrimary);
    \u0275\u0275advance(6);
    \u0275\u0275property("checked", ctx_r2.localdata["themeBackground"] == "20, 30, 96");
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r2.localdata["themeBackground"] == "8,78,115");
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r2.localdata["themeBackground"] == "90,37,135");
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r2.localdata["themeBackground"] == "24,101,51");
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r2.localdata["themeBackground"] == "120,66,20");
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("background", ctx_r2.defaultBg);
    \u0275\u0275property("cpAlphaChannel", "disabled")("cpOutputFormat", "rgba");
    \u0275\u0275twoWayProperty("colorPicker", ctx_r2.defaultBg);
  }
}
var _SwitcherComponent = class _SwitcherComponent {
  constructor(elementRef, appStateService, renderer) {
    this.elementRef = elementRef;
    this.appStateService = appStateService;
    this.renderer = renderer;
    this.activeOffcanvas = inject(NgbActiveOffcanvas);
    this.active = 1;
    this.localdata = this.appStateService;
    this.defaultPrimary = "#6c5ffc";
    this.defaultBg = "#6c5ffc";
    this.appStateService.state$.subscribe((state) => {
      this.localdata = state;
    });
  }
  updateDirection(direction) {
    this.appStateService.updateState({ direction });
  }
  updateTheme(theme) {
    this.appStateService.updateState({ theme, menuColor: theme, headerColor: theme });
    if (theme == "light") {
      this.appStateService.updateState({ theme, themeBackground: "", headerColor: "transparent", menuColor: "light" });
      let html = document.querySelector("html");
      html?.style.removeProperty("--body-bg-rgb");
      html?.style.removeProperty("--body-bg-rgb2");
      html?.style.removeProperty("--light-rgb");
      html?.style.removeProperty("--form-control-bg");
      html?.style.removeProperty("--input-border");
    }
    if (theme == "dark") {
      this.appStateService.updateState({ theme, themeBackground: "", headerColor: "transparent", menuColor: "dark" });
      let html = document.querySelector("html");
      html?.style.removeProperty("--body-bg-rgb");
      html?.style.removeProperty("--body-bg-rgb2");
      html?.style.removeProperty("--light-rgb");
      html?.style.removeProperty("--form-control-bg");
      html?.style.removeProperty("--input-border");
    }
  }
  updatemenuType(navigationStyles) {
    this.appStateService.updateState({ navigationStyles });
    const currentMenuStyles = this.appStateService.getState("menuStyles") || "menu-click";
    if (navigationStyles == "horizontal") {
      this.appStateService.updateState({ navigationStyles, layoutStyles: "" });
      this.checkMenuElement(currentMenuStyles);
      setTimeout(() => {
        const mainContentElement = document.querySelector(".main-content");
        if (mainContentElement) {
          mainContentElement.click();
        }
      }, 100);
    } else if (navigationStyles == "vertical") {
      this.appStateService.updateState({ navigationStyles, menuStyles: "", layoutStyles: "default" });
    }
  }
  checkMenuElement(menuStyles) {
    const elementIds = {
      "menu-click": "switcher-menu-click",
      "menu-hover": "switcher-menu-hover",
      "icon-hover": "switcher-icon-hover",
      "icon-click": "switcher-icon-click"
    };
    const elementId = elementIds[menuStyles];
    if (elementId) {
      const menuElement = document.getElementById(elementId);
      if (menuElement) {
        menuElement.checked = true;
      } else {
        const menuclickclosed = document.getElementById("switcher-menu-click");
        menuclickclosed.checked = true;
      }
    }
  }
  updatemenuStyle(menuStyles) {
    this.appStateService.updateState({ menuStyles, layoutStyles: "" });
    const navStyle = document.documentElement.getAttribute("data-nav-style");
    if (navStyle === "icon-hover") {
      document.querySelector(".double-menu-active")?.setAttribute("style", "display: none;");
    }
  }
  updatelayoutStyles(layoutStyles) {
    this.appStateService.updateState({ layoutStyles, menuStyles: "", navigationStyles: "" });
    if (document.querySelector("html")?.getAttribute("data-vertical-style") == "doublemenu") {
      document.querySelector(".slide-menu")?.classList.add("double-menu-active");
    } else {
      document.querySelector(".slide-menu")?.classList.remove("double-menu-active");
    }
  }
  setAttr(key, value) {
    const htmlElement = this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.setAttribute(htmlElement, key, value);
    return;
  }
  removeAttr(key) {
    const htmlElement = this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.removeAttribute(htmlElement, key);
    return;
  }
  updatepageStyles(pageStyles) {
    this.appStateService.updateState({ pageStyles });
  }
  updatewidthStyles(widthStyles) {
    this.appStateService.updateState({ widthStyles });
  }
  updatemenuPosition(menuPosition) {
    this.appStateService.updateState({ menuPosition });
  }
  updateheaderPosition(headerPosition) {
    this.appStateService.updateState({ headerPosition });
  }
  updatemenuColor(menuColor) {
    this.appStateService.updateState({ menuColor });
  }
  updateheaderColor(headerColor) {
    this.appStateService.updateState({ headerColor });
  }
  updateprimary(themePrimary) {
    this.appStateService.updateState({ themePrimary });
  }
  updateBackground(themeBackground) {
    this.appStateService.updateState({ themeBackground, menuColor: "dark", theme: "dark", headerColor: "dark" });
  }
  updateBgImage(backgroundImage) {
    this.appStateService.updateState({ backgroundImage });
  }
  dynamicLightPrimary(data) {
    this.defaultPrimary = data.color;
    let primaryColor = this.convertRgbToIndividual1(this.defaultPrimary);
    this.updateprimary(primaryColor);
  }
  convertRgbToIndividual1(value) {
    const numericValues = value.match(/\d+/g) || [];
    return numericValues.join(" , ");
  }
  //background theme change
  convertRgbToIndividual(value) {
    const numericValues = value.match(/\d+/g) || [];
    return numericValues.join(" ");
  }
  dynamicTranparentBgPrimary(data) {
    this.defaultBg = data.color;
    let bgRgb = this.convertRgbToIndividual(this.defaultBg);
    let bgRgb2 = this.convertRgbToIndividual(this.defaultBg);
    let bg1Update = bgRgb.split(" ").join(", ");
    let bg2Update = bgRgb2.split(" ");
    bg2Update[0] = Number(bg2Update[0]) + 14;
    bg2Update[1] = Number(bg2Update[1]) + 14;
    bg2Update[2] = Number(bg2Update[2]) + 14;
    let bgColor = {
      main: bg1Update,
      secondary: bg2Update.join(", "),
      accent: bg2Update.join(", "),
      overlay: "rgba(255,255,255,0.1)",
      theme: "dark"
    };
    this.updateBackground(bgColor);
  }
  reset() {
    this.appStateService.applyReset();
    let html = document.querySelector("html");
    html?.setAttribute("data-toggled", "close");
    html?.setAttribute("data-toggled", window.innerWidth <= 992 ? "close" : "close");
  }
};
_SwitcherComponent.\u0275fac = function SwitcherComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SwitcherComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(AppStateService), \u0275\u0275directiveInject(Renderer2));
};
_SwitcherComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SwitcherComponent, selectors: [["app-switcher"]], decls: 20, vars: 4, consts: [["nav", "ngbNav"], [1, "switcher-canvas"], ["id", "switcher-canvas", 1, "offcanvas-header", "border-bottom"], ["id", "offcanvasRightLabel", 1, "offcanvas-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", "text-reset", 3, "click"], ["id", "switcher-canvas", 1, "offcanvas-body", "switcher-canvas"], ["ngbNav", "", "role", "tablist", 1, "border-0", 3, "activeId"], [1, "nav", "nav-tabs", "nav-justified", "tab-content-1", 3, "ngbNavItem"], ["ngbNavLink", "", "id", "switcher-home-tab", "data-bs-toggle", "tab", "data-bs-target", "#switcher-home", "type", "button", "role", "tab", "aria-controls", "switcher-home", "aria-selected", "true", 1, "flex-grow-1", "nav-link", "theme-styles"], ["ngbNavContent", "", 1, "p-0"], ["ngbNavLink", "", "id", "switcher-profile-tab", "data-bs-toggle", "tab", "data-bs-target", "#switcher-profile", "type", "button", "role", "tab", "aria-controls", "switcher-profile", "aria-selected", "false", 1, "flex-grow-1", "nav-link", "theme-styles"], ["ngbNavContent", ""], ["id", "nav-tabContent", 1, "tab-content", 3, "ngbNavOutlet"], [1, "d-grid", "canvas-footer", "p-3"], ["href", "javascript:void(0);", "id", "reset-all", 1, "btn", "btn-danger", "my-1", "mx-0", 3, "click"], ["id", "switcher-home", "role", "tabpanel", "aria-labelledby", "switcher-home-tab", "tabindex", "0", 1, ""], [1, ""], [1, "switcher-style-head"], [1, "row", "switcher-style", "gx-0"], [1, "col-4"], [1, "form-check", "switch-select"], ["for", "switcher-light-theme", 1, "form-check-label"], ["type", "radio", "name", "theme-style", "id", "switcher-light-theme", 1, "form-check-input", 3, "click", "checked"], ["for", "switcher-dark-theme", 1, "form-check-label"], ["type", "radio", "name", "theme-style", "id", "switcher-dark-theme", 1, "form-check-input", 3, "click", "checked"], ["for", "switcher-ltr", 1, "form-check-label"], ["type", "radio", "name", "direction", "id", "switcher-ltr", 1, "form-check-input", 3, "click", "checked"], ["for", "switcher-rtl", 1, "form-check-label"], ["type", "radio", "name", "direction", "id", "switcher-rtl", 1, "form-check-input", 3, "click", "checked"], [1, "col-sm-4", "col-6"], ["for", "switcher-vertical", 1, "form-check-label"], ["type", "radio", "name", "navigation-style", "id", "switcher-vertical", 1, "form-check-input", 3, "click", "checked"], ["for", "switcher-horizontal", 1, "form-check-label"], ["type", "radio", "name", "navigation-style", "id", "switcher-horizontal", 1, "form-check-input", 3, "click", "checked"], [1, "navigation-menu-styles"], [1, "row", "switcher-style", "gx-0", "pb-2", "gy-2"], ["for", "switcher-menu-click", 1, "form-check-label"], ["type", "radio", "name", "navigation-menu-styles", "id", "switcher-menu-click", 1, "form-check-input", 3, "click", "checked"], ["for", "switcher-menu-hover", 1, "form-check-label"], ["type", "radio", "name", "navigation-menu-styles", "id", "switcher-menu-hover", 1, "form-check-input", 3, "click", "checked"], ["for", "switcher-icon-click", 1, "form-check-label"], ["type", "radio", "name", "navigation-menu-styles", "id", "switcher-icon-click", 1, "form-check-input", 3, "click", "checked"], ["for", "switcher-icon-hover", 1, "form-check-label"], ["type", "radio", "name", "navigation-menu-styles", "id", "switcher-icon-hover", 1, "form-check-input", 3, "click", "checked"], [1, "sidemenu-layout-styles"], [1, "col-sm-6"], ["for", "switcher-default-menu", 1, "form-check-label"], ["type", "radio", "name", "sidemenu-layout-styles", "id", "switcher-default-menu", "checked", "", 1, "form-check-input", 3, "click"], ["for", "switcher-closed-menu", 1, "form-check-label"], ["type", "radio", "name", "sidemenu-layout-styles", "id", "switcher-closed-menu", 1, "form-check-input", 3, "click", "checked"], ["for", "switcher-icontext-menu", 1, "form-check-label"], ["type", "radio", "name", "sidemenu-layout-styles", "id", "switcher-icontext-menu", 1, "form-check-input", 3, "click", "checked"], ["for", "switcher-icon-overlay", 1, "form-check-label"], ["type", "radio", "name", "sidemenu-layout-styles", "id", "switcher-icon-overlay", 1, "form-check-input", 3, "click", "checked"], ["for", "switcher-detached", 1, "form-check-label"], ["type", "radio", "name", "sidemenu-layout-styles", "id", "switcher-detached", 1, "form-check-input", 3, "click", "checked"], ["for", "switcher-double-menu", 1, "form-check-label"], ["type", "radio", "name", "sidemenu-layout-styles", "id", "switcher-double-menu", 1, "form-check-input", 3, "click", "checked"], ["for", "switcher-regular", 1, "form-check-label"], ["type", "radio", "name", "page-styles", "id", "switcher-regular", 1, "form-check-input", 3, "click", "checked"], ["for", "switcher-classic", 1, "form-check-label"], ["type", "radio", "name", "page-styles", "id", "switcher-classic", 1, "form-check-input", 3, "click", "checked"], ["for", "switcher-modern", 1, "form-check-label"], ["type", "radio", "name", "page-styles", "id", "switcher-modern", 1, "form-check-input", 3, "click", "checked"], ["for", "switcher-full-width", 1, "form-check-label"], ["type", "radio", "name", "layout-width", "id", "switcher-full-width", 1, "form-check-input", 3, "click", "checked"], ["for", "switcher-boxed", 1, "form-check-label"], ["type", "radio", "name", "layout-width", "id", "switcher-boxed", 1, "form-check-input", 3, "click", "checked"], ["for", "switcher-menu-fixed", 1, "form-check-label"], ["type", "radio", "name", "menu-positions", "id", "switcher-menu-fixed", 1, "form-check-input", 3, "click", "checked"], ["for", "switcher-menu-scroll", 1, "form-check-label"], ["type", "radio", "name", "menu-positions", "id", "switcher-menu-scroll", 1, "form-check-input", 3, "click", "checked"], ["for", "switcher-header-fixed", 1, "form-check-label"], ["type", "radio", "name", "header-positions", "id", "switcher-header-fixed", 1, "form-check-input", 3, "click", "checked"], ["for", "switcher-header-scroll", 1, "form-check-label"], ["type", "radio", "name", "header-positions", "id", "switcher-header-scroll", 1, "form-check-input", 3, "click", "checked"], ["id", "switcher-profile", "role", "tabpanel", "aria-labelledby", "switcher-profile-tab", "tabindex", "0", 1, "border-0"], [1, "theme-colors"], [1, "d-flex", "switcher-style", "pb-2"], [1, "form-check", "switch-select", "me-3"], ["data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Light Menu", "type", "radio", "name", "menu-colors", "id", "switcher-menu-light", 1, "form-check-input", "color-input", "color-white", 3, "click", "checked"], ["data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Dark Menu", "type", "radio", "name", "menu-colors", "id", "switcher-menu-dark", 1, "form-check-input", "color-input", "color-dark", 3, "click", "checked"], ["data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Color Menu", "type", "radio", "name", "menu-colors", "id", "switcher-menu-primary", 1, "form-check-input", "color-input", "color-primary", 3, "click", "checked"], ["data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Gradient Menu", "type", "radio", "name", "menu-colors", "id", "switcher-menu-gradient", 1, "form-check-input", "color-input", "color-gradient", 3, "click", "checked"], ["data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Transparent Menu", "type", "radio", "name", "menu-colors", "id", "switcher-menu-transparent", 1, "form-check-input", "color-input", "color-transparent", 3, "click", "checked"], [1, "px-4", "pb-3", "text-muted", "fs-11"], ["data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Light Header", "type", "radio", "name", "header-colors", "id", "switcher-header-light", 1, "form-check-input", "color-input", "color-white", 3, "click", "checked"], ["data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Dark Header", "type", "radio", "name", "header-colors", "id", "switcher-header-dark", 1, "form-check-input", "color-input", "color-dark", 3, "click", "checked"], ["data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Color Header", "type", "radio", "name", "header-colors", "id", "switcher-header-primary", 1, "form-check-input", "color-input", "color-primary", 3, "click", "checked"], ["data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Gradient Header", "type", "radio", "name", "header-colors", "id", "switcher-header-gradient", 1, "form-check-input", "color-input", "color-gradient", 3, "click", "checked"], ["data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Transparent Header", "type", "radio", "name", "header-colors", "id", "switcher-header-transparent", 1, "form-check-input", "color-input", "color-transparent", 3, "click", "checked"], [1, "d-flex", "flex-wrap", "align-items-center", "switcher-style"], ["type", "radio", "name", "theme-primary", "id", "switcher-primary", 1, "form-check-input", "color-input", "color-primary-1", 3, "click"], ["type", "radio", "name", "theme-primary", "id", "switcher-primary1", 1, "form-check-input", "color-input", "color-primary-2", 3, "click", "checked"], ["type", "radio", "name", "theme-primary", "id", "switcher-primary2", 1, "form-check-input", "color-input", "color-primary-3", 3, "click", "checked"], ["type", "radio", "name", "theme-primary", "id", "switcher-primary3", 1, "form-check-input", "color-input", "color-primary-4", 3, "click", "checked"], ["type", "radio", "name", "theme-primary", "id", "switcher-primary4", 1, "form-check-input", "color-input", "color-primary-5", 3, "click", "checked"], [1, "form-check", "switch-select", "ps-0", "mt-1", "color-primary-light"], [1, "theme-container-primary"], [1, "pickr-container-primary"], [1, "pickr"], ["type", "button", "role", "button", "aria-label", "toggle color picker dialog", 1, "color-bg-transparent", "pcr-button", 2, "--pcr-color", "rgba(51, 102, 255, 1)", 3, "colorPickerChange", "cpSliderDragEnd", "cpAlphaChannel", "cpOutputFormat", "colorPicker"], ["type", "radio", "name", "theme-background", "id", "switcher-background", 1, "form-check-input", "color-input", "color-bg-1", 3, "click", "checked"], ["type", "radio", "name", "theme-background", "id", "switcher-background1", 1, "form-check-input", "color-input", "color-bg-2", 3, "click", "checked"], ["type", "radio", "name", "theme-background", "id", "switcher-background2", 1, "form-check-input", "color-input", "color-bg-3", 3, "click", "checked"], ["type", "radio", "name", "theme-background", "id", "switcher-background3", 1, "form-check-input", "color-input", "color-bg-4", 3, "click", "checked"], ["type", "radio", "name", "theme-background", "id", "switcher-background4", 1, "form-check-input", "color-input", "color-bg-5", 3, "click", "checked"], [1, "form-check", "switch-select", "ps-0", "mt-1", "tooltip-static-demo", "color-bg-transparent"], [1, "theme-container-background"], [1, "pickr-container-background"], [1, "menu-image", "mb-3"], [1, "form-check", "switch-select", "m-1"], ["type", "radio", "name", "theme-background", "id", "switcher-bg-img", 1, "form-check-input", "bgimage-input", "bg-img1", 3, "click"], ["type", "radio", "name", "theme-background", "id", "switcher-bg-img1", 1, "form-check-input", "bgimage-input", "bg-img2", 3, "click"], ["type", "radio", "name", "theme-background", "id", "switcher-bg-img2", 1, "form-check-input", "bgimage-input", "bg-img3", 3, "click"], ["type", "radio", "name", "theme-background", "id", "switcher-bg-img3", 1, "form-check-input", "bgimage-input", "bg-img4", 3, "click"], ["type", "radio", "name", "theme-background", "id", "switcher-bg-img4", 1, "form-check-input", "bgimage-input", "bg-img5", 3, "click"]], template: function SwitcherComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h5", 3);
    \u0275\u0275text(3, "Switcher");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 4);
    \u0275\u0275listener("click", function SwitcherComponent_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.activeOffcanvas.close("cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 5)(6, "nav", 6, 0);
    \u0275\u0275elementContainerStart(8, 7);
    \u0275\u0275elementStart(9, "button", 8);
    \u0275\u0275text(10, "Theme Styles");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, SwitcherComponent_ng_template_11_Template, 162, 27, "ng-template", 9);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(12, 7);
    \u0275\u0275elementStart(13, "button", 10);
    \u0275\u0275text(14, "Theme Colors");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, SwitcherComponent_ng_template_15_Template, 86, 29, "ng-template", 11);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "div", 12);
    \u0275\u0275elementStart(17, "div", 13)(18, "a", 14);
    \u0275\u0275listener("click", function SwitcherComponent_Template_a_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    });
    \u0275\u0275text(19, "Reset");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const nav_r5 = \u0275\u0275reference(7);
    \u0275\u0275advance(6);
    \u0275\u0275property("activeId", 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngbNavItem", 1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngbNavItem", 2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngbNavOutlet", nav_r5);
  }
}, dependencies: [NgbNavContent, NgbNav, NgbNavItem, NgbNavLinkButton, NgbNavLinkBase, NgbNavOutlet, NgbTooltip, ColorPickerDirective], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=switcher.component.css.map */"] });
var SwitcherComponent = _SwitcherComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SwitcherComponent, { className: "SwitcherComponent" });
})();

// src/app/shared/common/right-sidebar/right-sidebar.component.ts
function RightSidebarComponent_Conditional_361_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 57)(2, "a", 58);
    \u0275\u0275text(3, "View All");
    \u0275\u0275elementEnd()()();
  }
}
var _RightSidebarComponent = class _RightSidebarComponent {
  constructor() {
    this.activeOffcanvas = inject(NgbActiveOffcanvas);
    this.isNotifyEmpty = false;
    this.notificationCount = 11;
  }
  removeNotify(rowId) {
    const rowElement = document.getElementById(rowId);
    if (rowElement) {
      rowElement.remove();
    }
    this.notificationCount--;
    this.isNotifyEmpty = this.notificationCount === 0;
  }
  handleCardClick(event) {
    event.stopPropagation();
  }
};
_RightSidebarComponent.\u0275fac = function RightSidebarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RightSidebarComponent)();
};
_RightSidebarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RightSidebarComponent, selectors: [["app-right-sidebar"]], decls: 368, vars: 4, consts: [[1, "offcanvas-header", "border-bottom"], ["id", "offcanvasRightLabel1", 1, "offcanvas-title", "text-default", "fs-17", "fw-medium"], ["id", "notifiation-data", 1, "badge", "bg-danger-transparent"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "offcanvas-body", "p-0", "sidebar-right"], ["id", "header-notification-scroll", 3, "click"], ["id", "row12", 1, "list-group-item", "align-items-center", "border-start-0", "border-end-0", "border-top-0"], [1, "d-flex"], [1, "avatar", "avatar-lg", "me-3", "avatar-rounded"], ["src", "./assets/images/users/4.jpg", "alt", "img"], [1, "w-65"], ["href", "javascript:void(0);", 1, "fw-medium", "fs-16"], [1, "text-muted", "fw-normal"], [1, "clearfix"], [1, "text-muted", "fs-13", "ms-auto", "d-inline-block"], [1, "mdi", "mdi-clock", "text-muted", "me-1"], [1, "ms-auto"], ["ngbDropdown", "", 1, "text-end"], ["href", "javascript:void(0);", "ngbDropdownToggle", "", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "no-caret"], [1, "fe", "fe-more-horizontal", "p-1", "text-muted"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], ["ngbDropdownItem", "", "href", "javascript:void(0);", 1, "dropdown-item"], [1, "fe", "fe-eye", "me-2"], [1, "fe", "fe-plus-circle", "me-2"], [1, "fe", "fe-settings", "me-2"], [1, "header-cart-remove", "dropdown-item-close1", 3, "click"], [1, "bi", "bi-trash3"], ["id", "row13", 1, "list-group-item", "align-items-center", "border-start-0", "border-end-0", "border-top-0", "border-bottom"], ["src", "./assets/images/users/10.jpg", "alt", "img"], ["href", "javascript:void(0);", 1, "header-cart-remove", "dropdown-item-close1", 3, "click"], ["id", "row14", 1, "list-group-item", "align-items-center", "border-start-0", "border-end-0", "border-top-0", "border-bottom"], [1, "avatar", "avatar-lg", "avatar-rounded", "me-3", "bg-pink-transparent"], [1, "fe", "fe-shopping-cart"], ["id", "row15", 1, "list-group-item", "align-items-center", "border-start-0", "border-end-0", "border-top-0", "border-bottom"], [1, "avatar", "avatar-lg", "me-3", "online", "avatar-rounded"], ["src", "./assets/images/users/9.jpg", "alt", "img"], ["id", "row16", 1, "list-group-item", "align-items-center", "border-start-0", "border-end-0", "border-top-0", "border-bottom"], [1, "avatar", "avatar-lg", "me-3", "offline", "avatar-rounded"], ["src", "./assets/images/users/5.jpg", "alt", "img"], ["id", "row6", 1, "list-group-item", "align-items-center", "border-start-0", "border-end-0", "border-top-0", "border-bottom"], [1, "avatar", "avatar-lg", "avatar-rounded", "me-3", "bg-primary-transparent"], ["id", "row7", 1, "list-group-item", "align-items-center", "border-start-0", "border-end-0", "border-top-0", "border-bottom"], ["src", "./assets/images/users/12.jpg", "alt", "img"], ["id", "row8", 1, "list-group-item", "align-items-center", "border-start-0", "border-end-0", "border-top-0", "border-bottom"], ["src", "./assets/images/users/8.jpg", "alt", "img"], ["id", "row9", 1, "list-group-item", "align-items-center", "border-start-0", "border-end-0", "border-top-0", "border-bottom"], ["src", "./assets/images/users/14.jpg", "alt", "img"], ["id", "row10", 1, "list-group-item", "align-items-center", "border-start-0", "border-end-0", "border-top-0", "border-bottom"], ["src", "./assets/images/users/3.jpg", "alt", "img"], ["id", "row11", 1, "list-group-item", "align-items-center", "border-start-0", "border-end-0", "border-top-0", "border-bottom"], [1, "avatar", "avatar-lg", "avatar-rounded", "me-3", "bg-success-transparent"], [1, "p-3", "empty-header-item1"], [1, "p-5", "empty-item1", "d-none"], [1, "text-center"], [1, "avatar", "avatar-xl", "avatar-rounded", "bg-danger-transparent"], [1, "ri-notification-off-line", "fs-2"], [1, "fw-medium", "mt-3"], [1, "d-grid"], ["routerLink", "/pages/notify-list", 1, "btn", "btn-primary"]], template: function RightSidebarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h5", 1);
    \u0275\u0275text(2, "Notifications ");
    \u0275\u0275elementStart(3, "span", 2);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 3);
    \u0275\u0275listener("click", function RightSidebarComponent_Template_button_click_5_listener() {
      return ctx.activeOffcanvas.close("Close click");
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 4)(7, "overlay-scrollbars")(8, "div", 5);
    \u0275\u0275listener("click", function RightSidebarComponent_Template_div_click_8_listener($event) {
      return ctx.handleCardClick($event);
    });
    \u0275\u0275elementStart(9, "div", 6)(10, "div", 7)(11, "span", 8);
    \u0275\u0275element(12, "img", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 10)(14, "a", 11);
    \u0275\u0275text(15, "Liam ");
    \u0275\u0275elementStart(16, "span", 12);
    \u0275\u0275text(17, "Sent Message");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(18, "span", 13);
    \u0275\u0275elementStart(19, "span", 14);
    \u0275\u0275element(20, "i", 15);
    \u0275\u0275text(21, "30 mins ago");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 16)(23, "div", 17)(24, "a", 18);
    \u0275\u0275element(25, "span", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "ul", 20)(27, "li")(28, "a", 21);
    \u0275\u0275element(29, "i", 22);
    \u0275\u0275text(30, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "li")(32, "a", 21);
    \u0275\u0275element(33, "i", 23);
    \u0275\u0275text(34, "Add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "li")(36, "a", 21);
    \u0275\u0275element(37, "i", 24);
    \u0275\u0275text(38, "More");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(39, "a", 25);
    \u0275\u0275listener("click", function RightSidebarComponent_Template_a_click_39_listener() {
      return ctx.removeNotify("row12");
    });
    \u0275\u0275element(40, "i", 26);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(41, "div", 27)(42, "div", 7)(43, "span", 8);
    \u0275\u0275element(44, "img", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 10)(46, "a", 11);
    \u0275\u0275text(47, "Paul");
    \u0275\u0275elementStart(48, "span", 12);
    \u0275\u0275text(49, " commented on you post");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(50, "span", 13);
    \u0275\u0275elementStart(51, "span", 14);
    \u0275\u0275element(52, "i", 15);
    \u0275\u0275text(53, "1 hour ago");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 16)(55, "div", 17)(56, "a", 18);
    \u0275\u0275element(57, "span", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "ul", 20)(59, "li")(60, "a", 21);
    \u0275\u0275element(61, "i", 22);
    \u0275\u0275text(62, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "li")(64, "a", 21);
    \u0275\u0275element(65, "i", 23);
    \u0275\u0275text(66, "Add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "li")(68, "a", 21);
    \u0275\u0275element(69, "i", 24);
    \u0275\u0275text(70, "More");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(71, "a", 29);
    \u0275\u0275listener("click", function RightSidebarComponent_Template_a_click_71_listener() {
      return ctx.removeNotify("row13");
    });
    \u0275\u0275element(72, "i", 26);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(73, "div", 30)(74, "div", 7)(75, "span", 31);
    \u0275\u0275element(76, "span", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "div", 10)(78, "a", 11);
    \u0275\u0275text(79, "James");
    \u0275\u0275elementStart(80, "span", 12);
    \u0275\u0275text(81, " Order Placed");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(82, "span", 13);
    \u0275\u0275elementStart(83, "span", 14);
    \u0275\u0275element(84, "i", 15);
    \u0275\u0275text(85, "1 day ago");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(86, "div", 16)(87, "div", 17)(88, "a", 18);
    \u0275\u0275element(89, "span", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "ul", 20)(91, "li")(92, "a", 21);
    \u0275\u0275element(93, "i", 22);
    \u0275\u0275text(94, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "li")(96, "a", 21);
    \u0275\u0275element(97, "i", 23);
    \u0275\u0275text(98, "Add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(99, "li")(100, "a", 21);
    \u0275\u0275element(101, "i", 24);
    \u0275\u0275text(102, "More");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(103, "a", 29);
    \u0275\u0275listener("click", function RightSidebarComponent_Template_a_click_103_listener() {
      return ctx.removeNotify("row14");
    });
    \u0275\u0275element(104, "i", 26);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(105, "div", 33)(106, "div", 7)(107, "span", 34);
    \u0275\u0275element(108, "img", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "div", 10)(110, "a", 11);
    \u0275\u0275text(111, "Diane");
    \u0275\u0275elementStart(112, "span", 12);
    \u0275\u0275text(113, " New Message Received");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(114, "span", 13);
    \u0275\u0275elementStart(115, "span", 14);
    \u0275\u0275element(116, "i", 15);
    \u0275\u0275text(117, "1 day ago");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(118, "div", 16)(119, "div", 17)(120, "a", 18);
    \u0275\u0275element(121, "span", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(122, "ul", 20)(123, "li")(124, "a", 21);
    \u0275\u0275element(125, "i", 22);
    \u0275\u0275text(126, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(127, "li")(128, "a", 21);
    \u0275\u0275element(129, "i", 23);
    \u0275\u0275text(130, "Add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(131, "li")(132, "a", 21);
    \u0275\u0275element(133, "i", 24);
    \u0275\u0275text(134, "More");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(135, "a", 29);
    \u0275\u0275listener("click", function RightSidebarComponent_Template_a_click_135_listener() {
      return ctx.removeNotify("row15");
    });
    \u0275\u0275element(136, "i", 26);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(137, "div", 36)(138, "div", 7)(139, "span", 37);
    \u0275\u0275element(140, "img", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(141, "div", 10)(142, "a", 11);
    \u0275\u0275text(143, "Vinny");
    \u0275\u0275elementStart(144, "span", 12);
    \u0275\u0275text(145, " shared your post");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(146, "span", 13);
    \u0275\u0275elementStart(147, "span", 14);
    \u0275\u0275element(148, "i", 15);
    \u0275\u0275text(149, "2 days ago");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(150, "div", 16)(151, "div", 17)(152, "a", 18);
    \u0275\u0275element(153, "span", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(154, "ul", 20)(155, "li")(156, "a", 21);
    \u0275\u0275element(157, "i", 22);
    \u0275\u0275text(158, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(159, "li")(160, "a", 21);
    \u0275\u0275element(161, "i", 23);
    \u0275\u0275text(162, "Add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(163, "li")(164, "a", 21);
    \u0275\u0275element(165, "i", 24);
    \u0275\u0275text(166, "More");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(167, "a", 29);
    \u0275\u0275listener("click", function RightSidebarComponent_Template_a_click_167_listener() {
      return ctx.removeNotify("row16");
    });
    \u0275\u0275element(168, "i", 26);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(169, "div", 39)(170, "div", 7)(171, "span", 40);
    \u0275\u0275text(172, "M");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(173, "div", 10)(174, "a", 11);
    \u0275\u0275text(175, "Mack");
    \u0275\u0275elementStart(176, "span", 12);
    \u0275\u0275text(177, " your admin lanuched");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(178, "span", 13);
    \u0275\u0275elementStart(179, "span", 14);
    \u0275\u0275element(180, "i", 15);
    \u0275\u0275text(181, "1 week ago");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(182, "div", 16)(183, "div", 17)(184, "a", 18);
    \u0275\u0275element(185, "span", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(186, "ul", 20)(187, "li")(188, "a", 21);
    \u0275\u0275element(189, "i", 22);
    \u0275\u0275text(190, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(191, "li")(192, "a", 21);
    \u0275\u0275element(193, "i", 23);
    \u0275\u0275text(194, "Add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(195, "li")(196, "a", 21);
    \u0275\u0275element(197, "i", 24);
    \u0275\u0275text(198, "More");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(199, "a", 29);
    \u0275\u0275listener("click", function RightSidebarComponent_Template_a_click_199_listener() {
      return ctx.removeNotify("row6");
    });
    \u0275\u0275element(200, "i", 26);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(201, "div", 41)(202, "div", 7)(203, "span", 8);
    \u0275\u0275element(204, "img", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(205, "div", 10)(206, "a", 11);
    \u0275\u0275text(207, "Vinny");
    \u0275\u0275elementStart(208, "span", 12);
    \u0275\u0275text(209, " shared your post");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(210, "span", 13);
    \u0275\u0275elementStart(211, "span", 14);
    \u0275\u0275element(212, "i", 15);
    \u0275\u0275text(213, "04 Jan 2021 1:56 Am");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(214, "div", 16)(215, "div", 17)(216, "a", 18);
    \u0275\u0275element(217, "span", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(218, "ul", 20)(219, "li")(220, "a", 21);
    \u0275\u0275element(221, "i", 22);
    \u0275\u0275text(222, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(223, "li")(224, "a", 21);
    \u0275\u0275element(225, "i", 23);
    \u0275\u0275text(226, "Add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(227, "li")(228, "a", 21);
    \u0275\u0275element(229, "i", 24);
    \u0275\u0275text(230, "More");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(231, "a", 29);
    \u0275\u0275listener("click", function RightSidebarComponent_Template_a_click_231_listener() {
      return ctx.removeNotify("row7");
    });
    \u0275\u0275element(232, "i", 26);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(233, "div", 43)(234, "div", 7)(235, "span", 8);
    \u0275\u0275element(236, "img", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(237, "div", 10)(238, "a", 11);
    \u0275\u0275text(239, "Anna");
    \u0275\u0275elementStart(240, "span", 12);
    \u0275\u0275text(241, " likes your post");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(242, "span", 13);
    \u0275\u0275elementStart(243, "span", 14);
    \u0275\u0275element(244, "i", 15);
    \u0275\u0275text(245, "25 Dec 2020 11:25 Am");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(246, "div", 16)(247, "div", 17)(248, "a", 18);
    \u0275\u0275element(249, "span", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(250, "ul", 20)(251, "li")(252, "a", 21);
    \u0275\u0275element(253, "i", 22);
    \u0275\u0275text(254, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(255, "li")(256, "a", 21);
    \u0275\u0275element(257, "i", 23);
    \u0275\u0275text(258, "Add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(259, "li")(260, "a", 21);
    \u0275\u0275element(261, "i", 24);
    \u0275\u0275text(262, "More");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(263, "a", 29);
    \u0275\u0275listener("click", function RightSidebarComponent_Template_a_click_263_listener() {
      return ctx.removeNotify("row8");
    });
    \u0275\u0275element(264, "i", 26);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(265, "div", 45)(266, "div", 7)(267, "span", 8);
    \u0275\u0275element(268, "img", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(269, "div", 10)(270, "a", 11);
    \u0275\u0275text(271, "Kimberly");
    \u0275\u0275elementStart(272, "span", 12);
    \u0275\u0275text(273, " Completed one task");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(274, "span", 13);
    \u0275\u0275elementStart(275, "span", 14);
    \u0275\u0275element(276, "i", 15);
    \u0275\u0275text(277, "24 Dec 2020 9:30 Pm");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(278, "div", 16)(279, "div", 17)(280, "a", 18);
    \u0275\u0275element(281, "span", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(282, "ul", 20)(283, "li")(284, "a", 21);
    \u0275\u0275element(285, "i", 22);
    \u0275\u0275text(286, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(287, "li")(288, "a", 21);
    \u0275\u0275element(289, "i", 23);
    \u0275\u0275text(290, "Add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(291, "li")(292, "a", 21);
    \u0275\u0275element(293, "i", 24);
    \u0275\u0275text(294, "More");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(295, "a", 29);
    \u0275\u0275listener("click", function RightSidebarComponent_Template_a_click_295_listener() {
      return ctx.removeNotify("row9");
    });
    \u0275\u0275element(296, "i", 26);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(297, "div", 47)(298, "div", 7)(299, "span", 8);
    \u0275\u0275element(300, "img", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(301, "div", 10)(302, "a", 11);
    \u0275\u0275text(303, "Rina");
    \u0275\u0275elementStart(304, "span", 12);
    \u0275\u0275text(305, " your account has Updated");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(306, "span", 13);
    \u0275\u0275elementStart(307, "span", 14);
    \u0275\u0275element(308, "i", 15);
    \u0275\u0275text(309, "28 Nov 2020 7:16 Am");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(310, "div", 16)(311, "div", 17)(312, "a", 18);
    \u0275\u0275element(313, "span", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(314, "ul", 20)(315, "li")(316, "a", 21);
    \u0275\u0275element(317, "i", 22);
    \u0275\u0275text(318, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(319, "li")(320, "a", 21);
    \u0275\u0275element(321, "i", 23);
    \u0275\u0275text(322, "Add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(323, "li")(324, "a", 21);
    \u0275\u0275element(325, "i", 24);
    \u0275\u0275text(326, "More");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(327, "a", 29);
    \u0275\u0275listener("click", function RightSidebarComponent_Template_a_click_327_listener() {
      return ctx.removeNotify("row10");
    });
    \u0275\u0275element(328, "i", 26);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(329, "div", 49)(330, "div", 7)(331, "span", 50);
    \u0275\u0275text(332, "J");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(333, "div", 10)(334, "a", 11);
    \u0275\u0275text(335, "Julia");
    \u0275\u0275elementStart(336, "span", 12);
    \u0275\u0275text(337, " Prepare for Presentation");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(338, "span", 13);
    \u0275\u0275elementStart(339, "span", 14);
    \u0275\u0275element(340, "i", 15);
    \u0275\u0275text(341, "18 Nov 2020 11:55 Am");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(342, "div", 16)(343, "div", 17)(344, "a", 18);
    \u0275\u0275element(345, "span", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(346, "ul", 20)(347, "li")(348, "a", 21);
    \u0275\u0275element(349, "i", 22);
    \u0275\u0275text(350, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(351, "li")(352, "a", 21);
    \u0275\u0275element(353, "i", 23);
    \u0275\u0275text(354, "Add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(355, "li")(356, "a", 21);
    \u0275\u0275element(357, "i", 24);
    \u0275\u0275text(358, "More");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(359, "a", 29);
    \u0275\u0275listener("click", function RightSidebarComponent_Template_a_click_359_listener() {
      return ctx.removeNotify("row11");
    });
    \u0275\u0275element(360, "i", 26);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275template(361, RightSidebarComponent_Conditional_361_Template, 4, 0, "div", 51);
    \u0275\u0275elementStart(362, "div", 52)(363, "div", 53)(364, "span", 54);
    \u0275\u0275element(365, "i", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(366, "h6", 56);
    \u0275\u0275text(367, "No New Notifications");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx.notificationCount, " Unread");
    \u0275\u0275advance(357);
    \u0275\u0275conditional(!ctx.isNotifyEmpty ? 361 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("d-none", !ctx.isNotifyEmpty);
  }
}, dependencies: [NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, OverlayScrollbarsComponent, RouterLink] });
var RightSidebarComponent = _RightSidebarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RightSidebarComponent, { className: "RightSidebarComponent" });
})();

// src/app/shared/directives/fullscreen.directive.ts
var _FullscreenDirective = class _FullscreenDirective {
  constructor(document2) {
    this.document = document2;
    this.fullScreen = false;
  }
  ngOnInit() {
    this.elem = document.documentElement;
  }
  onClick() {
    this.fullScreen = !this.fullScreen;
    if (this.fullScreen) {
      if (this.elem.requestFullscreen) {
        this.elem.requestFullscreen();
      } else if (this.elem.mozRequestFullScreen) {
        this.elem.mozRequestFullScreen();
      } else if (this.elem.webkitRequestFullscreen) {
        this.elem.webkitRequestFullscreen();
      } else if (this.elem.msRequestFullscreen) {
        this.elem.msRequestFullscreen();
      }
    } else {
      if (!this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        this.document.msExitFullscreen();
      }
    }
  }
};
_FullscreenDirective.\u0275fac = function FullscreenDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FullscreenDirective)(\u0275\u0275directiveInject(DOCUMENT));
};
_FullscreenDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _FullscreenDirective, selectors: [["", "appFullscreen", ""]], hostBindings: function FullscreenDirective_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("click", function FullscreenDirective_click_HostBindingHandler() {
      return ctx.onClick();
    });
  }
}, standalone: true });
var FullscreenDirective = _FullscreenDirective;

// src/app/shared/common/header/header.component.ts
var _c08 = () => ({ standalone: true });
var _c18 = (a0) => ({ "d-none": a0 });
function HeaderComponent_Conditional_22_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 130);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_22_For_2_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clearSearch());
    });
    \u0275\u0275elementStart(1, "a", 131)(2, "span");
    \u0275\u0275element(3, "i", 132);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const menuItem_r5 = ctx.$implicit;
    \u0275\u0275property("routerLink", menuItem_r5 == null ? null : menuItem_r5.path);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", menuItem_r5 == null ? null : menuItem_r5.path);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(menuItem_r5 == null ? null : menuItem_r5.title);
  }
}
function HeaderComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 128);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_22_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearSearch());
    });
    \u0275\u0275repeaterCreate(1, HeaderComponent_Conditional_22_For_2_Template, 5, 3, "div", 129, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275pipe(3, "slice");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind3(3, 0, ctx_r2.menuItems, 0, 5));
  }
}
function HeaderComponent_Conditional_23_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 133)(1, "li", 134)(2, "a")(3, "span");
    \u0275\u0275element(4, "i", 135);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1('No Search Result Found with "', ctx_r2.text, '"');
  }
}
function HeaderComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, HeaderComponent_Conditional_23_ng_template_0_Template, 6, 1, "ng-template");
  }
}
function HeaderComponent_Conditional_178_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78)(1, "div", 136)(2, "a", 137);
    \u0275\u0275text(3, "See All Messages");
    \u0275\u0275elementEnd()()();
  }
}
function HeaderComponent_ng_template_269_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 138)(1, "h5", 139);
    \u0275\u0275text(2, "Change Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 140);
    \u0275\u0275listener("click", function HeaderComponent_ng_template_269_Template_button_click_3_listener() {
      const modal_r7 = \u0275\u0275restoreView(_r6).$implicit;
      return \u0275\u0275resetView(modal_r7.dismiss("Cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 141)(5, "div", 142)(6, "label", 143);
    \u0275\u0275text(7, "New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 144);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 145)(10, "label", 143);
    \u0275\u0275text(11, "Confirm New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 144);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 146)(14, "a", 147);
    \u0275\u0275listener("click", function HeaderComponent_ng_template_269_Template_a_click_14_listener() {
      const modal_r7 = \u0275\u0275restoreView(_r6).$implicit;
      return \u0275\u0275resetView(modal_r7.dismiss("Cross click"));
    });
    \u0275\u0275text(15, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "a", 137);
    \u0275\u0275text(17, "Confirm");
    \u0275\u0275elementEnd()();
  }
}
var _HeaderComponent = class _HeaderComponent {
  constructor(appStateService, navServices, elementRef, renderer, modalService, router, activatedRoute, toastr) {
    this.appStateService = appStateService;
    this.navServices = navServices;
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.modalService = modalService;
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.toastr = toastr;
    this.cartItemCount = 5;
    this.notificationCount = 5;
    this.isCollapsed = true;
    this.closeResult = "";
    this.selectedItem = "selectedItem";
    this.isOpen = false;
    this.offcanvasService = inject(NgbOffcanvas);
    this.isCartEmpty = false;
    this.isNotifyEmpty = false;
    this.SearchResultEmpty = false;
    this.isInputFocused = false;
    this.isFullscreen = false;
    this.localStorageBackUp();
  }
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
  closeDropdown() {
    this.isOpen = false;
  }
  handleItemClick(title) {
    this.selectedItem = title;
    this.isOpen = false;
    localStorage.setItem("selectedItem", title);
  }
  open() {
    this.offcanvasService.open(SwitcherComponent, {
      position: "end",
      scroll: true,
      panelClass: "switcher-canvas-width"
    });
  }
  openNotifications() {
    this.offcanvasService.open(RightSidebarComponent, {
      position: "end",
      scroll: true
    });
  }
  openModal(content) {
    this.modalService.open(content);
  }
  openSearch(search) {
  }
  toggleSidebar() {
    let html = this.elementRef.nativeElement.ownerDocument.documentElement;
    if (html?.getAttribute("data-toggled") == "true") {
      document.querySelector("html")?.getAttribute("data-toggled") == "icon-overlay-close";
      html?.setAttribute("data-toggled", window.innerWidth <= 992 ? "close" : "");
    } else if (html?.getAttribute("data-nav-style") == "menu-click") {
      html?.setAttribute("data-toggled", html?.getAttribute("data-toggled") == "menu-click-closed" ? "" : "menu-click-closed");
    } else if (html?.getAttribute("data-nav-style") == "menu-hover") {
      html?.setAttribute("data-toggled", html?.getAttribute("data-toggled") == "menu-hover-closed" ? "" : "menu-hover-closed");
    } else if (html?.getAttribute("data-nav-style") == "icon-click") {
      html?.setAttribute("data-toggled", html?.getAttribute("data-toggled") == "icon-click-closed" ? "" : "icon-click-closed");
    } else if (html?.getAttribute("data-nav-style") == "icon-hover") {
      html?.setAttribute("data-toggled", html?.getAttribute("data-toggled") == "icon-hover-closed" ? "" : "icon-hover-closed");
    } else if (html?.getAttribute("data-vertical-style") == "overlay") {
      html?.setAttribute("data-vertical-style", "overlay");
      html?.setAttribute("data-toggled", html?.getAttribute("data-toggled") == "icon-overlay-close" ? "" : "icon-overlay-close");
    } else if (html?.getAttribute("data-vertical-style") == "overlay") {
      document.querySelector("html")?.getAttribute("data-toggled") != null ? document.querySelector("html")?.removeAttribute("data-toggled") : document.querySelector("html")?.setAttribute("data-toggled", "icon-overlay-close");
    } else if (html?.getAttribute("data-vertical-style") == "closed") {
      html?.setAttribute("data-toggled", html?.getAttribute("data-toggled") == "close-menu-close" ? "" : "close-menu-close");
    } else if (html?.getAttribute("data-vertical-style") == "icontext") {
      html?.setAttribute("data-toggled", html?.getAttribute("data-toggled") == "icon-text-close" ? "" : "icon-text-close");
    } else if (html?.getAttribute("data-vertical-style") == "detached") {
      html?.setAttribute("data-toggled", html?.getAttribute("data-toggled") == "detached-close" ? "" : "detached-close");
    } else if (html?.getAttribute("data-vertical-style") == "doublemenu") {
      html?.setAttribute("data-toggled", html?.getAttribute("data-toggled") == "double-menu-close" && document.querySelector(".slide.open")?.classList.contains("has-sub") ? "double-menu-open" : "double-menu-close");
    }
    if (window.innerWidth <= 992) {
      html?.setAttribute("data-toggled", html?.getAttribute("data-toggled") == "open" ? "close" : "open");
    }
  }
  updateTheme(theme) {
    this.appStateService.updateState({ theme, menuColor: theme, headerColor: theme });
    if (theme == "light") {
      this.appStateService.updateState({ theme, themeBackground: "", headerColor: "light", menuColor: "dark" });
      let html = document.querySelector("html");
      html?.style.removeProperty("--body-bg-rgb");
      html?.style.removeProperty("--body-bg-rgb2");
      html?.style.removeProperty("--light-rgb");
      html?.style.removeProperty("--form-control-bg");
      html?.style.removeProperty("--input-border");
      html?.setAttribute("data-toggled", "close");
      html?.setAttribute("data-toggled", window.innerWidth <= 992 ? "close" : "");
    }
    if (theme == "dark") {
      this.appStateService.updateState({ theme, themeBackground: "", headerColor: "dark", menuColor: "dark" });
      let html = document.querySelector("html");
      html?.style.removeProperty("--body-bg-rgb");
      html?.style.removeProperty("--body-bg-rgb2");
      html?.style.removeProperty("--light-rgb");
      html?.style.removeProperty("--form-control-bg");
      html?.style.removeProperty("--input-border");
      html?.setAttribute("data-toggled", "close");
      html?.setAttribute("data-toggled", window.innerWidth <= 992 ? "close" : "");
    }
  }
  localStorageBackUp() {
    let styleId = document.querySelector("#style");
    let html = document.querySelector("html");
    if (localStorage.getItem("headerColor") == "dark") {
      if (localStorage.getItem("theme")) {
        const type = localStorage.getItem("theme");
        html?.setAttribute("data-theme-mode", type);
        html?.setAttribute("data-header-styles", type);
        html?.setAttribute("data-menu-styles", type);
      }
      if (localStorage.getItem("theme") == "light") {
        const type = localStorage.getItem("theme");
        html?.setAttribute("data-theme-mode", type);
        html?.setAttribute("data-header-styles", type);
        html?.setAttribute("data-menu-styles", type);
      }
    }
  }
  removeRow(rowId) {
    const rowElement = document.getElementById(rowId);
    if (rowElement) {
      rowElement.remove();
    }
    this.cartItemCount--;
    this.isCartEmpty = this.cartItemCount === 0;
  }
  handleCardClick(event) {
    event.stopPropagation();
  }
  ngOnInit() {
    const storedSelectedItem = localStorage.getItem("selectedItem");
    if (!storedSelectedItem) {
      this.selectedItem = "Sales Dashboard";
      localStorage.setItem("selectedItem", this.selectedItem);
    } else {
      this.selectedItem = storedSelectedItem;
    }
    this.navServices.items.subscribe((menuItems) => {
      this.items = menuItems;
    });
    document.querySelector(".main-content")?.addEventListener("click", () => {
      this.clearSearch();
    });
    this.text = "";
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.updateSelectedItem();
    });
  }
  updateSelectedItem() {
    const dashboard = this.activatedRoute.snapshot.firstChild?.url[0]?.path;
    this.selectedItem = dashboard ? dashboard.charAt(0).toUpperCase() + dashboard.slice(1) + " Dashboard" : this.selectedItem;
  }
  ngOnDestroy() {
    const windowObject = window;
    let html = this.elementRef.nativeElement.ownerDocument.documentElement;
    window.addEventListener("resize", () => {
      if (localStorage.getItem("valexverticalstyles") != "icon-text-close") {
        if (windowObject.innerWidth <= "991") {
          html?.setAttribute("data-toggled", "open");
        } else {
          if (!(localStorage.getItem("valexverticalstyles") == "doublemenu")) {
            html?.removeAttribute("data-toggled");
          }
        }
      } else {
        document.querySelector("html")?.setAttribute("data-toggled", "icon-text-close");
      }
    });
  }
  Search(searchText) {
    if (!searchText)
      return this.menuItems = [];
    const items = [];
    searchText = searchText.toLowerCase().trim();
    this.items.filter((menuItems) => {
      if (!menuItems?.title)
        return false;
      if (menuItems.type === "link" && menuItems.title.toLowerCase().includes(searchText)) {
        if (menuItems.title.toLowerCase().startsWith(searchText)) {
          items.push(menuItems);
        }
      }
      if (!menuItems.children)
        return false;
      menuItems.children.filter((subItems) => {
        if (!subItems?.title)
          return false;
        if (subItems.type === "link" && subItems.title.toLowerCase().includes(searchText)) {
          if (subItems.title.toLowerCase().startsWith(searchText)) {
            items.push(subItems);
          }
        }
        if (!subItems.children)
          return false;
        subItems.children.filter((subSubItems) => {
          if (subSubItems.title?.toLowerCase().includes(searchText)) {
            if (subSubItems.title.toLowerCase().startsWith(searchText)) {
              items.push(subSubItems);
            }
          }
        });
        return true;
      });
      return this.menuItems = items;
    });
    if (!items.length) {
      this.SearchResultEmpty = true;
    } else {
      this.SearchResultEmpty = false;
    }
    return true;
  }
  SearchModal(SearchModal) {
    this.modalService.open(SearchModal);
  }
  //  Used to clear previous search result
  clearSearch() {
    const headerSearch = document.querySelector(".header-search");
    if (headerSearch) {
      headerSearch.classList.remove("searchdrop");
    }
    this.text = "";
    this.menuItems = [];
    this.SearchResultEmpty = false;
    return this.text, this.menuItems;
  }
  SearchHeader() {
    document.querySelector(".header-search")?.classList.toggle("searchdrop");
  }
  onInputFocus() {
    this.isInputFocused = true;
  }
  onInputBlur() {
    this.isInputFocused = false;
  }
  toggleFullscreen() {
    this.isFullscreen = !this.isFullscreen;
  }
  logout() {
    this.toastr.info("Cerrando sesi\xF3n...", "Logout", {
      timeOut: 2e3,
      positionClass: "toast-top-right"
    });
    setTimeout(() => {
      localStorage.clear();
      this.router.navigate(["/auth/login"]);
    }, 2e3);
  }
};
_HeaderComponent.\u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HeaderComponent)(\u0275\u0275directiveInject(AppStateService), \u0275\u0275directiveInject(NavService), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ToastrService));
};
_HeaderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], decls: 271, vars: 18, consts: [["content", ""], [1, "app-header"], [1, "main-header-container", "container-fluid"], [1, "header-content-left"], [1, "header-element"], [1, "horizontal-logo"], ["routerLink", "/dashboard/hrmdashboards/dashboard", 1, "header-logo"], ["src", "./assets/images/brand-logos/desktop-logo.png", "alt", "logo", 1, "desktop-logo"], ["src", "./assets/images/brand-logos/toggle-logo.png", "alt", "logo", 1, "toggle-logo"], ["src", "./assets/images/brand-logos/desktop-dark.png", "alt", "logo", 1, "desktop-dark"], ["src", "./assets/images/brand-logos/toggle-dark.png", "alt", "logo", 1, "toggle-dark"], ["src", "./assets/images/brand-logos/desktop-white.png", "alt", "logo", 1, "desktop-white"], ["src", "./assets/images/brand-logos/toggle-dark.png", "alt", "logo", 1, "toggle-white"], ["aria-label", "Hide Sidebar", "data-bs-toggle", "sidebar", "href", "javascript:void(0);", 1, "sidemenu-toggle", "header-link", "animated-arrow", "hor-toggle", "horizontal-navtoggle", 3, "click"], [1, "mt-0", "position-relative"], [1, "form-inline", "d-none", "d-lg-block"], [1, "search-element", "header-search"], ["type", "search", "placeholder", "Search\u2026", "aria-label", "Search", "tabindex", "1", 1, "form-control", "header-search", 3, "click", "ngModelChange", "keyup", "ngModel", "ngModelOptions"], [1, "btn"], [1, "fe", "fe-search"], [1, "search_drop", "list-group"], [1, "header-content-right"], ["ngbDropdown", "", 1, "header-element", "header-search", "d-lg-none", 3, "autoClose"], ["href", "javascript:void(0);", "ngbDropdownToggle", "", "data-bs-auto-close", "outside", "data-bs-toggle", "dropdown", 1, "header-link", "dropdown-toggle"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24px", "viewBox", "0 0 24 24", "width", "24px", "fill", "#000000", 1, "header-link-icon"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"], ["ngbDropdownMenu", "", "data-popper-placement", "none", 1, "main-header-dropdown", "dropdown-menu", "dropdown-menu-end"], ["ngbDropdownItem", "", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "input-group"], ["type", "text", "placeholder", "Search...", "aria-label", "Search input", "aria-describedby", "button-addon2", 1, "form-control"], ["type", "button", "id", "button-addon2", 1, "btn", "btn-primary"], [1, "header-element", "header-theme-mode"], ["href", "javascript:void(0);", 1, "header-link", "layout-setting"], [1, "light-layout", "lh-1", 3, "click"], [1, "fe", "fe-moon", "header-link-icon"], [1, "dark-layout", "lh-1", 3, "click"], [1, "fe", "fe-sun", "header-link-icon"], ["ngbDropdown", "", 1, "header-element", "country-selector", 3, "autoClose"], ["src", "./assets/images/flags/6.jpg", "alt", "img", 1, "rounded-circle"], ["ngbDropdownItem", "", "href", "javascript:void(0);", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "avatar", "avatar-xs", "lh-1", "me-2"], ["src", "./assets/images/flags/5.jpg", "alt", "img"], ["src", "./assets/images/flags/4.jpg", "alt", "img"], ["src", "./assets/images/flags/6.jpg", "alt", "img"], ["src", "./assets/images/flags/1.jpg", "alt", "img"], ["src", "./assets/images/flags/2.jpg", "alt", "img"], ["src", "./assets/images/flags/3.jpg", "alt", "img"], ["ngbDropdown", "", 1, "header-element", "cart-dropdown", 3, "autoClose"], [1, "fe", "fe-mail", "header-link-icon"], ["id", "cart-icon-badge", 1, "badge", "bg-success", "rounded-pill", "header-icon-badge"], [1, "p-3"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "mb-0", "fs-17", "fw-medium"], ["id", "cart-data", 1, "badge", "bg-success-transparent"], [1, "dropdown-divider"], [3, "defer"], ["id", "header-cart-items-scroll", 1, "list-unstyled", "mb-0", 3, "click"], ["ngbDropdownItem", "", "id", "row1", 1, "dropdown-item"], [1, "d-flex", "align-items-start", "cart-dropdown-item"], ["src", "./assets/images/users/1.jpg", "alt", "img", 1, "avatar", "avatar-md", "avatar-rounded", "br-5", "me-3"], [1, "flex-grow-1"], [1, "d-flex", "align-items-start", "justify-content-between", "mb-0"], [1, "mb-0", "fs-13", "text-dark", "fw-medium"], ["href", "javascript:void(0);"], ["href", "javascript:void(0);", 1, "header-cart-remove", "float-end", "dropdown-item-close", 3, "click"], [1, "bi", "bi-x-octagon"], [1, "min-w-fit-content", "d-flex", "align-items-start", "justify-content-between"], [1, "header-product-item", "d-flex"], [1, "text-muted"], ["ngbDropdownItem", "", "id", "row2", 1, "dropdown-item"], ["src", "./assets/images/users/3.jpg", "alt", "img", 1, "avatar", "avatar-md", "avatar-rounded", "br-5", "me-3"], ["ngbDropdownItem", "", "id", "row3", 1, "dropdown-item"], ["src", "./assets/images/users/5.jpg", "alt", "img", 1, "avatar", "avatar-md", "avatar-rounded", "br-5", "me-3"], ["ngbDropdownItem", "", "id", "row4", 1, "dropdown-item"], ["src", "./assets/images/users/4.jpg", "alt", "img", 1, "avatar", "avatar-md", "avatar-rounded", "br-5", "me-3"], ["ngbDropdownItem", "", "id", "row5", 1, "dropdown-item"], ["src", "./assets/images/users/6.jpg", "alt", "img", 1, "avatar", "avatar-md", "avatar-rounded", "br-5", "me-3"], [1, "p-3", "empty-header-item", "border-top"], [1, "p-5", "empty-item"], [1, "text-center"], [1, "avatar", "avatar-xl", "avatar-rounded", "bg-warning-transparent"], [1, "ri-chat-2-line", "fs-2"], [1, "fw-bold", "mb-1", "mt-3"], [1, "mb-3", "fw-normal", "fs-13", "d-block"], ["href", "javascript:void(0);", "data-abc", "true", 1, "btn", "btn-primary", "btn-wave", "btn-sm", "m-1"], [1, "bi", "bi-arrow-right", "ms-1"], ["ngbDropdown", "", 1, "header-element", "header-shortcuts-dropdown", "d-none", "d-lg-flex"], ["href", "javascript:void(0);", "ngbDropdownToggle", "", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "id", "notificationDropdown", "aria-expanded", "false", 1, "header-link", "dropdown-toggle"], [1, "fe", "fe-grid", "header-link-icon"], ["ngbDropdownMenu", "", "aria-labelledby", "notificationDropdown", 1, "main-header-dropdown", "header-shortcuts-dropdown", "dropdown-menu", "pb-0", "dropdown-menu-end"], [1, "dropdown-divider", "mb-0"], ["id", "header-shortcut-scroll", 1, "main-header-shortcuts", "p-3"], [1, "row", "g-2"], [1, "col-4"], [1, "text-center", "p-3", "related-app", "border"], [1, "avatar", "fs-23", "bg-success-transparent", "p-2", "mb-2"], [1, "bx", "bx-calendar", "text-success"], [1, "d-block", "fs-13", "fw-normal"], [1, "avatar", "fs-23", "bg-info-transparent", "p-2", "mb-2"], [1, "bx", "bx-envelope", "text-info"], [1, "avatar", "bg-warning-transparent", "fs-23", "bg", "p-2", "mb-2"], [1, "bx", "bx-user", "text-warning"], [1, "avatar", "bg-pink-transparent", "fs-23", "bg", "p-2", "mb-2"], [1, "bx", "bx-chat", "text-pink"], [1, "avatar", "bg-secondary-transparent", "fs-23", "bg", "p-2", "mb-2"], [1, "bx", "bx-phone", "text-secondary"], [1, "avatar", "bg-teal-transparent", "fs-23", "bg", "p-2", "mb-2"], [1, "bx", "bx-cog", "text-teal"], [1, "header-element", "header-fullscreen"], ["href", "javascript:void(0);", "appFullscreen", "", 1, "header-link", 3, "click"], [1, "fe", "fe-maximize", "full-screen-open", "header-link-icon", 3, "ngClass"], [1, "fe", "fe-minimize", "full-screen-close", "header-link-icon", "d-none", 3, "ngClass"], [1, "header-element", "notifications-dropdown"], ["data-bs-toggle", "offcanvas", "data-bs-target", "#notification-sidebar-canvas", "id", "messageDropdown", 1, "header-link", 3, "click"], [1, "fe", "fe-bell", "header-link-icon"], [1, "bg-dot"], ["ngbDropdown", "", 1, "header-element", "main-header-profile"], ["href", "javascript:void(0);", "ngbDropdownToggle", "", "id", "mainHeaderProfile", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "false", 1, "header-link", "dropdown-toggle", "mx-0", "w-100"], ["src", "./assets/images/users/16.jpg", "alt", "img", 1, "rounded-3", "avatar", "avatar-md"], ["ngbDropdownMenu", "", "aria-labelledby", "mainHeaderProfile", 1, "main-header-dropdown", "dropdown-menu", "pt-0", "header-profile-dropdown", "dropdown-menu-end"], [1, "p-3", "text-center", "border-bottom"], ["href", "javascript:void(0);", 1, "text-center", "fw-semibold"], [1, "text-center", "user-semi-title", "fs-13", "mb-0"], ["ngbDropdownItem", "", "href", "javascript:void(0);", 1, "dropdown-item", "d-flex", "align-items-center", 3, "click"], [1, "fe", "fe-power", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#switcher-canvas", 1, "header-link", "switcher-icon", 3, "click"], [1, "fe", "fe-settings", "header-link-icon"], [1, "search_drop", "list-group", 3, "click"], [1, "list-group-item", 3, "routerLink"], [1, "list-group-item", 3, "click", "routerLink"], [3, "routerLink"], [1, "fe", "fe-chevron-right", "me-2"], [1, "ps-2"], [1, "p-1", "d-flex", "align-items-center", "text-muted", "mb-2", "search-app"], [1, "fa", "fa-angle-double-right", "me-2"], [1, "d-grid"], ["href", "javascript:void(0);", 1, "btn", "btn-primary"], [1, "modal-header"], [1, "modal-title"], ["data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "form-group", "mb-3"], [1, "form-label"], ["type", "password", "placeholder", "password", "value", "", 1, "form-control"], [1, "form-group"], [1, "modal-footer"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-primary", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "header", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "a", 6);
    \u0275\u0275element(6, "img", 7)(7, "img", 8)(8, "img", 9)(9, "img", 10)(10, "img", 11)(11, "img", 12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 4)(13, "a", 13);
    \u0275\u0275listener("click", function HeaderComponent_Template_a_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.toggleSidebar());
    });
    \u0275\u0275element(14, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 14)(16, "form", 15)(17, "div", 16)(18, "input", 17);
    \u0275\u0275listener("click", function HeaderComponent_Template_input_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.SearchHeader());
    });
    \u0275\u0275twoWayListener("ngModelChange", function HeaderComponent_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.text, $event) || (ctx.text = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup", function HeaderComponent_Template_input_keyup_18_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.Search(ctx.text));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 18);
    \u0275\u0275element(20, "i", 19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div");
    \u0275\u0275template(22, HeaderComponent_Conditional_22_Template, 4, 4, "div", 20)(23, HeaderComponent_Conditional_23_Template, 1, 0);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(24, "div", 21)(25, "div", 22)(26, "a", 23);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 24);
    \u0275\u0275element(28, "path", 25)(29, "path", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(30, "ul", 27)(31, "li")(32, "span", 28)(33, "span", 29);
    \u0275\u0275element(34, "input", 30);
    \u0275\u0275elementStart(35, "button", 31);
    \u0275\u0275text(36, "Search");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(37, "div", 32)(38, "a", 33)(39, "span", 34);
    \u0275\u0275listener("click", function HeaderComponent_Template_span_click_39_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.updateTheme("dark"));
    });
    \u0275\u0275element(40, "i", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 36);
    \u0275\u0275listener("click", function HeaderComponent_Template_span_click_41_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.updateTheme("light"));
    });
    \u0275\u0275element(42, "i", 37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 38)(44, "a", 23);
    \u0275\u0275element(45, "img", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "ul", 27)(47, "li")(48, "a", 40)(49, "span", 41);
    \u0275\u0275element(50, "img", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275text(51, " English ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "li")(53, "a", 40)(54, "span", 41);
    \u0275\u0275element(55, "img", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275text(56, " Spanish ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "li")(58, "a", 40)(59, "span", 41);
    \u0275\u0275element(60, "img", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275text(61, " French ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "li")(63, "a", 40)(64, "span", 41);
    \u0275\u0275element(65, "img", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275text(66, " German ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "li")(68, "a", 40)(69, "span", 41);
    \u0275\u0275element(70, "img", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275text(71, " Italian ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "li")(73, "a", 40)(74, "span", 41);
    \u0275\u0275element(75, "img", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275text(76, " Russian ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(77, "div", 48)(78, "a", 23);
    \u0275\u0275element(79, "i", 49);
    \u0275\u0275elementStart(80, "span", 50);
    \u0275\u0275text(81);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "div", 27)(83, "div", 51)(84, "div", 52)(85, "p", 53);
    \u0275\u0275text(86, "You have messages");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "span", 54);
    \u0275\u0275text(88);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(89, "div");
    \u0275\u0275element(90, "hr", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "overlay-scrollbars", 56)(92, "ul", 57);
    \u0275\u0275listener("click", function HeaderComponent_Template_ul_click_92_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.handleCardClick($event));
    });
    \u0275\u0275elementStart(93, "li", 58)(94, "div", 59);
    \u0275\u0275element(95, "img", 60);
    \u0275\u0275elementStart(96, "div", 61)(97, "div", 62)(98, "div", 63)(99, "a", 64);
    \u0275\u0275text(100, "Jack Wright");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(101, "div")(102, "a", 65);
    \u0275\u0275listener("click", function HeaderComponent_Template_a_click_102_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.removeRow("row1"));
    });
    \u0275\u0275element(103, "i", 66);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(104, "div", 67)(105, "ul", 68)(106, "li");
    \u0275\u0275text(107, "All the best your template awesome");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "li", 69);
    \u0275\u0275text(109, "3 hours ago");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(110, "li", 70)(111, "div", 59);
    \u0275\u0275element(112, "img", 71);
    \u0275\u0275elementStart(113, "div", 61)(114, "div", 62)(115, "div", 63)(116, "a", 64);
    \u0275\u0275text(117, "Lisa Rutherford");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(118, "div")(119, "a", 65);
    \u0275\u0275listener("click", function HeaderComponent_Template_a_click_119_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.removeRow("row2"));
    });
    \u0275\u0275element(120, "i", 66);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(121, "div", 67)(122, "ul", 68)(123, "li");
    \u0275\u0275text(124, "Hey! there I'm available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(125, "li", 69);
    \u0275\u0275text(126, "5 hour ago");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(127, "li", 72)(128, "div", 59);
    \u0275\u0275element(129, "img", 73);
    \u0275\u0275elementStart(130, "div", 61)(131, "div", 62)(132, "div", 63)(133, "a", 64);
    \u0275\u0275text(134, "Blake Walker");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(135, "div")(136, "a", 65);
    \u0275\u0275listener("click", function HeaderComponent_Template_a_click_136_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.removeRow("row3"));
    });
    \u0275\u0275element(137, "i", 66);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(138, "div", 67)(139, "ul", 68)(140, "li");
    \u0275\u0275text(141, "Just created a new blog post");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(142, "li", 69);
    \u0275\u0275text(143, "45 mintues ago");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(144, "li", 74)(145, "div", 59);
    \u0275\u0275element(146, "img", 75);
    \u0275\u0275elementStart(147, "div", 61)(148, "div", 62)(149, "div", 63)(150, "a", 64);
    \u0275\u0275text(151, "Fiona Morrison");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(152, "div")(153, "a", 65);
    \u0275\u0275listener("click", function HeaderComponent_Template_a_click_153_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.removeRow("row4"));
    });
    \u0275\u0275element(154, "i", 66);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(155, "div", 67)(156, "ul", 68)(157, "li");
    \u0275\u0275text(158, "Added new comment on your photo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(159, "li", 69);
    \u0275\u0275text(160, "2 days ago");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(161, "li", 76)(162, "div", 59);
    \u0275\u0275element(163, "img", 77);
    \u0275\u0275elementStart(164, "div", 61)(165, "div", 62)(166, "div", 63)(167, "a", 64);
    \u0275\u0275text(168, "Stewart Bond");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(169, "div")(170, "a", 65);
    \u0275\u0275listener("click", function HeaderComponent_Template_a_click_170_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.removeRow("row5"));
    });
    \u0275\u0275element(171, "i", 66);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(172, "div", 67)(173, "ul", 68)(174, "li");
    \u0275\u0275text(175, "Your payment invoice is generated");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(176, "li", 69);
    \u0275\u0275text(177, "3 days ago");
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275template(178, HeaderComponent_Conditional_178_Template, 4, 0, "div", 78);
    \u0275\u0275elementStart(179, "div", 79)(180, "div", 80)(181, "span", 81);
    \u0275\u0275element(182, "i", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(183, "h6", 83);
    \u0275\u0275text(184, "Your Inbox is Empty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(185, "span", 84);
    \u0275\u0275text(186, "See more messages in chat page :)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(187, "a", 85);
    \u0275\u0275text(188, "continue Viewing ");
    \u0275\u0275element(189, "i", 86);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(190, "div", 87)(191, "a", 88);
    \u0275\u0275element(192, "i", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(193, "div", 90)(194, "div", 51)(195, "div", 52)(196, "p", 53);
    \u0275\u0275text(197, "Related Apps");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(198, "div", 91);
    \u0275\u0275elementStart(199, "div", 92)(200, "div", 93)(201, "div", 94)(202, "a", 64)(203, "div", 95)(204, "span", 96);
    \u0275\u0275element(205, "i", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(206, "span", 98);
    \u0275\u0275text(207, "Calendar");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(208, "div", 94)(209, "a", 64)(210, "div", 95)(211, "span", 99);
    \u0275\u0275element(212, "i", 100);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(213, "span", 98);
    \u0275\u0275text(214, "Mail");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(215, "div", 94)(216, "a", 64)(217, "div", 95)(218, "span", 101);
    \u0275\u0275element(219, "i", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(220, "span", 98);
    \u0275\u0275text(221, "Profile");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(222, "div", 94)(223, "a", 64)(224, "div", 95)(225, "span", 103);
    \u0275\u0275element(226, "i", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(227, "span", 98);
    \u0275\u0275text(228, "Chat");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(229, "div", 94)(230, "a", 64)(231, "div", 95)(232, "span", 105);
    \u0275\u0275element(233, "i", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(234, "span", 98);
    \u0275\u0275text(235, "Contacts");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(236, "div", 94)(237, "a", 64)(238, "div", 95)(239, "span", 107);
    \u0275\u0275element(240, "i", 108);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(241, "span", 98);
    \u0275\u0275text(242, "Settings");
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275elementStart(243, "div", 109)(244, "a", 110);
    \u0275\u0275listener("click", function HeaderComponent_Template_a_click_244_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.toggleFullscreen());
    });
    \u0275\u0275element(245, "i", 111)(246, "i", 112);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(247, "div", 113)(248, "a", 114);
    \u0275\u0275listener("click", function HeaderComponent_Template_a_click_248_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openNotifications());
    });
    \u0275\u0275element(249, "i", 115)(250, "span", 116);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(251, "div", 117)(252, "a", 118)(253, "div");
    \u0275\u0275element(254, "img", 119);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(255, "ul", 120)(256, "Li")(257, "div", 121)(258, "a", 122);
    \u0275\u0275text(259, "John Thomson");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(260, "p", 123);
    \u0275\u0275text(261, "App Developer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(262, "li")(263, "a", 124);
    \u0275\u0275listener("click", function HeaderComponent_Template_a_click_263_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.logout());
    });
    \u0275\u0275element(264, "i", 125);
    \u0275\u0275text(265, "Cerrar Sesi\xF3n");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(266, "div", 4)(267, "a", 126);
    \u0275\u0275listener("click", function HeaderComponent_Template_a_click_267_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.open());
    });
    \u0275\u0275element(268, "i", 127);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(269, HeaderComponent_ng_template_269_Template, 18, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275advance(18);
    \u0275\u0275twoWayProperty("ngModel", ctx.text);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(13, _c08));
    \u0275\u0275advance(4);
    \u0275\u0275conditional("menuItems?.length>0" ? 22 : 23);
    \u0275\u0275advance(3);
    \u0275\u0275property("autoClose", "outside");
    \u0275\u0275advance(18);
    \u0275\u0275property("autoClose", "outside");
    \u0275\u0275advance(34);
    \u0275\u0275property("autoClose", "outside");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.cartItemCount);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx.cartItemCount, " Items");
    \u0275\u0275advance(90);
    \u0275\u0275conditional(!ctx.isCartEmpty ? 178 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("d-none", !ctx.isCartEmpty);
    \u0275\u0275advance(66);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(14, _c18, ctx.isFullscreen));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(16, _c18, !ctx.isFullscreen));
  }
}, dependencies: [NgClass, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, OverlayScrollbarsComponent, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterLink, FullscreenDirective, SlicePipe], styles: ["\n\n.search_drop[_ngcontent-%COMP%] {\n  color: var(--default-text-color);\n  background-color: var(--custom-white);\n  border: 0px solid var(--default-border);\n}\n/*# sourceMappingURL=header.component.css.map */"] });
var HeaderComponent = _HeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent" });
})();

// src/app/shared/common/tap-to-top/tap-to-top.component.ts
var _c09 = (a0) => ({ display: a0 });
var _TapToTopComponent = class _TapToTopComponent {
  constructor(viewScroller) {
    this.viewScroller = viewScroller;
    this.show = false;
  }
  ngOnInit() {
  }
  onWindowScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 20) {
      this.show = true;
    } else {
      this.show = false;
    }
  }
  taptotop() {
    let body = document.querySelector("body");
    body.style.scrollBehavior = "smooth";
    this.viewScroller.scrollToPosition([0, 0]);
  }
};
_TapToTopComponent.\u0275fac = function TapToTopComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TapToTopComponent)(\u0275\u0275directiveInject(ViewportScroller));
};
_TapToTopComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TapToTopComponent, selectors: [["app-tap-to-top"]], hostBindings: function TapToTopComponent_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("scroll", function TapToTopComponent_scroll_HostBindingHandler() {
      return ctx.onWindowScroll();
    }, false, \u0275\u0275resolveWindow);
  }
}, decls: 4, vars: 3, consts: [[1, "scrollToTop", 3, "click", "ngStyle"], [1, "arrow"], [1, "fe", "fe-chevrons-up"], ["id", "responsive-overlay"]], template: function TapToTopComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275listener("click", function TapToTopComponent_Template_div_click_0_listener() {
      return ctx.taptotop();
    });
    \u0275\u0275elementStart(1, "span", 1);
    \u0275\u0275element(2, "i", 2);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(3, "div", 3);
  }
  if (rf & 2) {
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(1, _c09, ctx.show ? "flex" : "none"));
  }
}, dependencies: [NgStyle] });
var TapToTopComponent = _TapToTopComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TapToTopComponent, { className: "TapToTopComponent" });
})();

// src/app/shared/common/footer/footer.component.ts
var _FooterComponent = class _FooterComponent {
};
_FooterComponent.\u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FooterComponent)();
};
_FooterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], decls: 13, vars: 0, consts: [[1, "footer", "mt-auto", "py-3", "shadow-none", "text-center"], [1, "container"], [1, "text-muted"], ["id", "year"], ["href", "javascript:void(0);", 1, "text-dark", "fw-semibold"], ["href", "javascript:void(0);"], [1, "fw-semibold", "text-primary", "text-decoration-underline"]], template: function FooterComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "span", 2);
    \u0275\u0275text(3, " Copyright \xA9 ");
    \u0275\u0275elementStart(4, "span", 3);
    \u0275\u0275text(5, "2025");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 4);
    \u0275\u0275text(7, " KALARIOS");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, ". Designed by ");
    \u0275\u0275elementStart(9, "a", 5)(10, "span", 6);
    \u0275\u0275text(11, "Laritechfarms");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(12, " All rights reserved ");
    \u0275\u0275elementEnd()()();
  }
} });
var FooterComponent = _FooterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent" });
})();

// src/app/shared/layouts/main-layout/main-layout.component.ts
var _MainLayoutComponent = class _MainLayoutComponent {
  constructor(navServices, elementRef, renderer, router) {
    this.navServices = navServices;
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.router = router;
    this.currentPath = "";
    this.menuItem = {
      active: false
    };
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      window.scrollTo(0, 0);
    });
    const htmlElement = this.elementRef.nativeElement.ownerDocument.documentElement;
    let html = document.querySelector("html");
    if (window.innerWidth <= 992) {
      html?.setAttribute("data-toggled", html?.getAttribute("data-toggled") == "close" ? "close" : "close");
    }
  }
  ngOnInit() {
    this.menuitemsSubscribe$ = this.navServices.items.subscribe((items) => {
      this.menuItems = items;
    });
  }
  clearNavDropdown() {
    this.menuItems?.forEach((a2) => {
      a2.active = false;
      a2?.children?.forEach((b2) => {
        b2.active = false;
        b2?.children?.forEach((c2) => {
          c2.active = false;
        });
      });
    });
  }
  clickOnBody() {
    document.querySelector("#responsive-overlay")?.classList.remove("active");
    let html = this.elementRef.nativeElement.ownerDocument.documentElement;
    if (window.innerWidth <= 992) {
      html?.setAttribute("data-toggled", html?.getAttribute("data-toggled") == "close" ? "close" : "close");
    }
    html?.removeAttribute("data-icon-text");
    this.menuItem.active = !this.menuItem.active;
    const navStyle = document.documentElement.getAttribute("data-nav-style");
    if (html.getAttribute("data-nav-layout") == "horizontal" && window.innerWidth >= 992) {
      this.clearNavDropdown();
    } else if (navStyle === "menu-click" || navStyle === "menu-hover" || navStyle === "icon-click" || navStyle === "icon-hover") {
      document.querySelector(".double-menu-active")?.setAttribute("style", "display: none;");
    }
  }
  ngOnDestroy() {
    this.menuitemsSubscribe$.unsubscribe();
  }
  clearToggle() {
    let html = this.elementRef.nativeElement.ownerDocument.documentElement;
    document.querySelector("#responsive-overlay")?.classList.remove("active");
  }
};
_MainLayoutComponent.\u0275fac = function MainLayoutComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MainLayoutComponent)(\u0275\u0275directiveInject(NavService), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(Router));
};
_MainLayoutComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MainLayoutComponent, selectors: [["app-main-layout"]], decls: 9, vars: 0, consts: [[1, "page"], ["appHoverEffectSidebar", ""], [1, "main-content", "app-content", 3, "click"], [1, "container-fluid"], [1, "mt-auto"], ["id", "responsive-overlay", 3, "click"]], template: function MainLayoutComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "app-header")(2, "app-sidebar", 1);
    \u0275\u0275elementStart(3, "div", 2);
    \u0275\u0275listener("click", function MainLayoutComponent_Template_div_click_3_listener() {
      return ctx.clickOnBody();
    });
    \u0275\u0275elementStart(4, "div", 3);
    \u0275\u0275element(5, "router-outlet");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "app-footer", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "app-tap-to-top");
    \u0275\u0275elementStart(8, "div", 5);
    \u0275\u0275listener("click", function MainLayoutComponent_Template_div_click_8_listener() {
      return ctx.clearToggle();
    });
    \u0275\u0275elementEnd();
  }
}, dependencies: [RouterOutlet, HoverEffectSidebarDirective, SidebarComponent, HeaderComponent, TapToTopComponent, FooterComponent], changeDetection: 0 });
var MainLayoutComponent = _MainLayoutComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainLayoutComponent, { className: "MainLayoutComponent" });
})();

// src/app/shared/layouts/authentication-layout/authentication-layout.component.ts
var _AuthenticationLayoutComponent = class _AuthenticationLayoutComponent {
  constructor(router, renderer, elementRef) {
    this.router = router;
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
      } else if (event instanceof NavigationEnd) {
      }
    });
    const htmlElement = this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.removeAttribute(htmlElement, "data-vertical-style");
  }
};
_AuthenticationLayoutComponent.\u0275fac = function AuthenticationLayoutComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuthenticationLayoutComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef));
};
_AuthenticationLayoutComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuthenticationLayoutComponent, selectors: [["app-authentication-layout"]], decls: 1, vars: 0, template: function AuthenticationLayoutComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}, dependencies: [RouterOutlet], changeDetection: 0 });
var AuthenticationLayoutComponent = _AuthenticationLayoutComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuthenticationLayoutComponent, { className: "AuthenticationLayoutComponent" });
})();

export {
  NavService,
  ColorPickerDirective,
  ColorPickerModule,
  SwitcherComponent,
  OverlayScrollbarsComponent,
  OverlayscrollbarsModule,
  FullscreenDirective,
  TapToTopComponent,
  MainLayoutComponent,
  AuthenticationLayoutComponent,
  Platform,
  getSupportedInputTypes,
  normalizePassiveListenerOptions,
  supportsScrollBehavior,
  _getShadowRoot,
  _getFocusedElementPierceShadowDom,
  _getEventTarget,
  _isTestEnvironment,
  BACKSPACE,
  TAB,
  ENTER,
  ESCAPE,
  SPACE,
  PAGE_UP,
  PAGE_DOWN,
  END,
  HOME,
  LEFT_ARROW,
  UP_ARROW,
  RIGHT_ARROW,
  DOWN_ARROW,
  DELETE,
  A2 as A,
  hasModifierKey,
  coerceObservable,
  coerceBooleanProperty,
  coerceNumberProperty,
  coerceArray,
  coerceCssPixelValue,
  coerceElement,
  coerceStringArray,
  CdkObserveContent,
  ObserversModule,
  BreakpointObserver,
  Breakpoints,
  addAriaReferencedId,
  removeAriaReferencedId,
  AriaDescriber,
  ActiveDescendantKeyManager,
  FocusKeyManager,
  TREE_KEY_MANAGER,
  InteractivityChecker,
  FocusTrapFactory,
  CdkTrapFocus,
  isFakeMousedownFromScreenReader,
  isFakeTouchstartFromScreenReader,
  LiveAnnouncer,
  FocusMonitor,
  CdkMonitorFocus,
  A11yModule,
  Directionality,
  BidiModule,
  AnimationCurves,
  AnimationDurations,
  MatCommonModule,
  _ErrorStateTracker,
  DateAdapter,
  MAT_DATE_FORMATS,
  MatNativeDateModule,
  ErrorStateMatcher,
  MatLine,
  setLines,
  MatLineModule,
  RippleState,
  RippleRenderer,
  MAT_RIPPLE_GLOBAL_OPTIONS,
  MatRipple,
  MatRippleModule,
  MatPseudoCheckbox,
  MatPseudoCheckboxModule,
  MAT_OPTION_PARENT_COMPONENT,
  MAT_OPTGROUP,
  MatOptionSelectionChange,
  MatOption,
  _countGroupLabelsBeforeOption,
  _getOptionScrollPosition,
  MatOptionModule,
  MatRippleLoader,
  _MatInternalFormField,
  isDataSource,
  SelectionModel,
  UniqueSelectionDispatcher,
  ScrollDispatcher,
  CdkScrollable,
  ViewportRuler,
  CdkScrollableModule,
  ScrollingModule,
  CdkTableModule,
  MatTable,
  MatCellDef,
  MatHeaderCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatCell,
  MatHeaderRowDef,
  MatRowDef,
  MatHeaderRow,
  MatRow,
  MatNoDataRow,
  MatTableModule,
  MatTableDataSource
};
/*! Bundled license information:

overlayscrollbars/overlayscrollbars.mjs:
  (*!
   * OverlayScrollbars
   * Version: 2.10.0
   *
   * Copyright (c) Rene Haas | KingSora.
   * https://github.com/KingSora
   *
   * Released under the MIT license.
   *)
*/
//# sourceMappingURL=chunk-ZVXZDCDW.js.map
