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
import "./chunk-ZSUERINM.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NgbModule,
  NgbNav,
  NgbNavContent,
  NgbNavItem,
  NgbNavLink,
  NgbNavLinkBase,
  NgbNavOutlet,
  RadioControlValueAccessor,
  ReactiveFormsModule,
  ɵNgSelectMultipleOption
} from "./chunk-47LBZ5ZO.js";
import {
  CommonModule,
  NgClass,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/super-admin/settings/settings.component.ts
var _c0 = (a0) => ({ "d-none": a0 });
function SettingsComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "div", 18)(3, "h4", 19);
    \u0275\u0275text(4, "General Settings");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 20)(6, "div", 21)(7, "div", 2)(8, "div", 22)(9, "label", 23);
    \u0275\u0275text(10, "Name");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 24);
    \u0275\u0275element(12, "input", 25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 21)(14, "div", 2)(15, "div", 22)(16, "label", 23);
    \u0275\u0275text(17, "Email");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 24);
    \u0275\u0275element(19, "input", 26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 21)(21, "div", 2)(22, "div", 22)(23, "label", 23);
    \u0275\u0275text(24, "Number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 24);
    \u0275\u0275element(26, "input", 27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 28)(28, "div", 2)(29, "div", 22)(30, "label", 23);
    \u0275\u0275text(31, "Website");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 24);
    \u0275\u0275element(33, "input", 29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 28)(35, "div", 2)(36, "div", 30)(37, "label", 31);
    \u0275\u0275text(38, "Upload Image");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 24)(40, "div", 21);
    \u0275\u0275element(41, "label", 32)(42, "input", 33);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(43, "div", 21)(44, "div", 2)(45, "div", 22)(46, "label", 23);
    \u0275\u0275text(47, "Change Language");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 24)(49, "ng-select", 34)(50, "ng-option", 35);
    \u0275\u0275text(51, "Afrikanns");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "ng-option", 36);
    \u0275\u0275text(53, "Albanian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "ng-option", 37);
    \u0275\u0275text(55, "Arabic");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "ng-option", 38);
    \u0275\u0275text(57, "Armenian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "ng-option", 39);
    \u0275\u0275text(59, "Basque");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "ng-option", 40);
    \u0275\u0275text(61, "Bengali");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "ng-option", 41);
    \u0275\u0275text(63, "Bulgarian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "ng-option", 42);
    \u0275\u0275text(65, "Catalan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "ng-option", 43);
    \u0275\u0275text(67, "Cambodian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "ng-option", 44);
    \u0275\u0275text(69, "Chinese (Mandarin)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "ng-option", 45);
    \u0275\u0275text(71, "Croation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "ng-option", 46);
    \u0275\u0275text(73, "Czech");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "ng-option", 47);
    \u0275\u0275text(75, "Danish");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "ng-option", 48);
    \u0275\u0275text(77, "Dutch");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "ng-option", 49);
    \u0275\u0275text(79, "English");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "ng-option", 50);
    \u0275\u0275text(81, "Estonian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "ng-option", 51);
    \u0275\u0275text(83, "Fiji");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "ng-option", 52);
    \u0275\u0275text(85, "Finnish");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "ng-option", 53);
    \u0275\u0275text(87, "French");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "ng-option", 54);
    \u0275\u0275text(89, "Georgian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "ng-option", 55);
    \u0275\u0275text(91, "German");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "ng-option", 56);
    \u0275\u0275text(93, "Greek");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "ng-option", 57);
    \u0275\u0275text(95, "Gujarati");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "ng-option", 58);
    \u0275\u0275text(97, "Hebrew");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "ng-option", 59);
    \u0275\u0275text(99, "Hindi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "ng-option", 60);
    \u0275\u0275text(101, "Hungarian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "ng-option", 61);
    \u0275\u0275text(103, "Icelandic");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "ng-option", 62);
    \u0275\u0275text(105, "Indonesian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "ng-option", 63);
    \u0275\u0275text(107, "Irish");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "ng-option", 64);
    \u0275\u0275text(109, "Italian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "ng-option", 65);
    \u0275\u0275text(111, "Japanese");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "ng-option", 66);
    \u0275\u0275text(113, "Javanese");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "ng-option", 67);
    \u0275\u0275text(115, "Korean");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "ng-option", 68);
    \u0275\u0275text(117, "Latin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "ng-option", 69);
    \u0275\u0275text(119, "Latvian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "ng-option", 70);
    \u0275\u0275text(121, "Lithuanian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(122, "ng-option", 71);
    \u0275\u0275text(123, "Macedonian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "ng-option", 72);
    \u0275\u0275text(125, "Malay");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "ng-option", 73);
    \u0275\u0275text(127, "Malayalam");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(128, "ng-option", 74);
    \u0275\u0275text(129, "Maltese");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "ng-option", 75);
    \u0275\u0275text(131, "Maori");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(132, "ng-option", 76);
    \u0275\u0275text(133, "Marathi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(134, "ng-option", 77);
    \u0275\u0275text(135, "Mongolian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(136, "ng-option", 78);
    \u0275\u0275text(137, "Nepali");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(138, "ng-option", 79);
    \u0275\u0275text(139, "Norwegian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(140, "ng-option", 80);
    \u0275\u0275text(141, "Persian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(142, "ng-option", 81);
    \u0275\u0275text(143, "Polish");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(144, "ng-option", 82);
    \u0275\u0275text(145, "Portuguese");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(146, "ng-option", 83);
    \u0275\u0275text(147, "Punjabi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(148, "ng-option", 84);
    \u0275\u0275text(149, "Quechua");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(150, "ng-option", 85);
    \u0275\u0275text(151, "Romanian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(152, "ng-option", 86);
    \u0275\u0275text(153, "Russian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(154, "ng-option", 87);
    \u0275\u0275text(155, "Samoan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(156, "ng-option", 88);
    \u0275\u0275text(157, "Serbian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(158, "ng-option", 89);
    \u0275\u0275text(159, "Slovak");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(160, "ng-option", 90);
    \u0275\u0275text(161, "Slovenian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(162, "ng-option", 91);
    \u0275\u0275text(163, "Spanish");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(164, "ng-option", 92);
    \u0275\u0275text(165, "Swahili");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(166, "ng-option", 93);
    \u0275\u0275text(167, "Swedish ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(168, "ng-option", 94);
    \u0275\u0275text(169, "Tamil");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(170, "ng-option", 95);
    \u0275\u0275text(171, "Tatar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(172, "ng-option", 96);
    \u0275\u0275text(173, "Telugu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(174, "ng-option", 97);
    \u0275\u0275text(175, "Thai");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(176, "ng-option", 98);
    \u0275\u0275text(177, "Tibetan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(178, "ng-option", 99);
    \u0275\u0275text(179, "Tonga");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(180, "ng-option", 100);
    \u0275\u0275text(181, "Turkish");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(182, "ng-option", 101);
    \u0275\u0275text(183, "Ukranian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(184, "ng-option", 102);
    \u0275\u0275text(185, "Urdu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(186, "ng-option", 103);
    \u0275\u0275text(187, "Uzbek");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(188, "ng-option", 104);
    \u0275\u0275text(189, "Vietnamese");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(190, "ng-option", 105);
    \u0275\u0275text(191, "Welsh");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(192, "ng-option", 106);
    \u0275\u0275text(193, "Xhosa");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(194, "div", 21)(195, "div", 2)(196, "div", 22)(197, "label", 23);
    \u0275\u0275text(198, "Currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(199, "div", 24)(200, "ng-select", 107)(201, "ng-option", 108);
    \u0275\u0275text(202, "US DOllar(USD)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(203, "ng-option", 109);
    \u0275\u0275text(204, "European Euro (EUR)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(205, "ng-option", 110);
    \u0275\u0275text(206, "Japanese Yen (JPY)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(207, "ng-option", 111);
    \u0275\u0275text(208, "British Pound (GBP)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(209, "ng-option", 112);
    \u0275\u0275text(210, "Swiss Franc (CHF)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(211, "ng-option", 113);
    \u0275\u0275text(212, "Canadian Dollar (CAD)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(213, "ng-option", 114);
    \u0275\u0275text(214, "Australian/New Zealand Dollar (AUD/NZD)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(215, "ng-option", 115);
    \u0275\u0275text(216, "South African Rand (ZAR)");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(217, "div", 21)(218, "div", 2)(219, "div", 22)(220, "label", 23);
    \u0275\u0275text(221, "Address");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(222, "div", 24)(223, "textarea", 116);
    \u0275\u0275text(224, "NO.1-8-67, LIG 215,H, 83, near Tulasi Hospital ECIL, APIIC Colony, Kushaiguda, Hyderabad, Telangana 500062");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(225, "div", 117)(226, "a", 118);
    \u0275\u0275text(227, "Save Changes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(228, "a", 119);
    \u0275\u0275text(229, "Cancel");
    \u0275\u0275elementEnd()()()();
  }
}
function SettingsComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "div", 18)(3, "h4", 19);
    \u0275\u0275text(4, "Email Settings");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 20)(6, "div", 21)(7, "div", 2)(8, "div", 22)(9, "label", 120);
    \u0275\u0275text(10, "Email Drivers");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 24)(12, "div", 121)(13, "div", 122)(14, "input", 123);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_ng_template_15_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.isSMTPOpen1, $event) || (ctx_r1.isSMTPOpen1 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function SettingsComponent_ng_template_15_Template_input_change_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSmtp1(false));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "label", 124);
    \u0275\u0275text(16, "Mail");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 122)(18, "input", 125);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_ng_template_15_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.isSMTPOpen1, $event) || (ctx_r1.isSMTPOpen1 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function SettingsComponent_ng_template_15_Template_input_change_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSmtp1(true));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "label", 126);
    \u0275\u0275text(20, "SMTP");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(21, "div", 127)(22, "div", 128)(23, "div", 2)(24, "div", 22)(25, "label", 23);
    \u0275\u0275text(26, "Host");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 24);
    \u0275\u0275element(28, "input", 129);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 128)(30, "div", 2)(31, "div", 22)(32, "label", 23);
    \u0275\u0275text(33, "Port");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 24);
    \u0275\u0275element(35, "input", 130);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 128)(37, "div", 2)(38, "div", 22)(39, "label", 23);
    \u0275\u0275text(40, "User Name");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 24);
    \u0275\u0275element(42, "input", 131);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 128)(44, "div", 2)(45, "div", 22)(46, "label", 23);
    \u0275\u0275text(47, "Password");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 24);
    \u0275\u0275element(49, "input", 132);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "div", 128)(51, "div", 2)(52, "div", 22)(53, "label", 23);
    \u0275\u0275text(54, "Encryption");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 24);
    \u0275\u0275element(56, "input", 133);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(57, "div", 128)(58, "div", 2)(59, "div", 22)(60, "label", 23);
    \u0275\u0275text(61, "From Name");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 24);
    \u0275\u0275element(63, "input", 134);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(64, "div", 128)(65, "div", 2)(66, "div", 22)(67, "label", 23);
    \u0275\u0275text(68, "From Email");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 24);
    \u0275\u0275element(70, "input", 135);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(71, "div", 136)(72, "a", 137);
    \u0275\u0275text(73, "Save Changes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "a", 138);
    \u0275\u0275text(75, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "a", 139);
    \u0275\u0275text(77, "Send Test Email");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275property("value", false);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.isSMTPOpen1);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", true);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.isSMTPOpen1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c0, !ctx_r1.isSMTPOpen1));
  }
}
function SettingsComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "div", 18)(3, "h4", 19);
    \u0275\u0275text(4, "Payment Settings");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 20)(6, "div", 21)(7, "div", 2)(8, "div", 3)(9, "label", 120);
    \u0275\u0275text(10, "Paypal");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 140)(12, "div", 141)(13, "div", 142)(14, "input", 143);
    \u0275\u0275listener("change", function SettingsComponent_ng_template_20_Template_input_change_14_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.togglePaypalDisplay($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "label", 144);
    \u0275\u0275text(16, "Enable/Disable");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "div", 145)(18, "span", 146);
    \u0275\u0275text(19, "Ut enim ad minim veniam, quis nostrud exercitation");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(20, "div", 147)(21, "div", 128)(22, "div", 2)(23, "div", 3)(24, "label", 120);
    \u0275\u0275text(25, "Test Mode");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 140)(27, "div", 141)(28, "div", 142);
    \u0275\u0275element(29, "input", 148);
    \u0275\u0275elementStart(30, "label", 144);
    \u0275\u0275text(31, "Enable/Disable");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(32, "div", 145)(33, "span", 146);
    \u0275\u0275text(34, "Ut enim ad minim veniam, quis nostrud exercitation");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "div", 128)(36, "div", 149)(37, "div", 22)(38, "label", 23);
    \u0275\u0275text(39, "Client ID");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 24);
    \u0275\u0275element(41, "input", 150);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "div", 128)(43, "div", 2)(44, "div", 22)(45, "label", 23);
    \u0275\u0275text(46, "Secret");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 24);
    \u0275\u0275element(48, "input", 151);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 128)(50, "div", 2)(51, "div", 22)(52, "label", 23);
    \u0275\u0275text(53, "Currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 24)(55, "select", 152)(56, "option", 153);
    \u0275\u0275text(57, "Choose Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "option", 154);
    \u0275\u0275text(59, "US DOllar(USD)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "option", 109);
    \u0275\u0275text(61, "European Euro (EUR)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "option", 110);
    \u0275\u0275text(63, "Japanese Yen (JPY)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "option", 111);
    \u0275\u0275text(65, "British Pound (GBP)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "option", 112);
    \u0275\u0275text(67, "Swiss Franc (CHF)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "option", 113);
    \u0275\u0275text(69, "Canadian Dollar (CAD)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "option", 114);
    \u0275\u0275text(71, "Australian/New Zealand Dollar (AUD/NZD)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "option", 115);
    \u0275\u0275text(73, "South African Rand (ZAR)");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(74, "div", 117)(75, "a", 118);
    \u0275\u0275text(76, "Save Changes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "a", 119);
    \u0275\u0275text(78, "Cancel");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(20);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(1, _c0, !ctx_r1.isPaypalOpen));
  }
}
function SettingsComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "div", 18)(3, "h4", 19);
    \u0275\u0275text(4, "Security Settings");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 20)(6, "div", 21)(7, "div", 2)(8, "div", 3)(9, "label", 120);
    \u0275\u0275text(10, "Email Verification");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 140)(12, "div", 141)(13, "div", 142);
    \u0275\u0275element(14, "input", 155);
    \u0275\u0275elementStart(15, "label", 144);
    \u0275\u0275text(16, "Enable/Disable");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "div", 145)(18, "span", 146);
    \u0275\u0275text(19, "Ut enim ad minim veniam, quis nostrud exercitation");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(20, "div", 128)(21, "div", 2)(22, "div", 3)(23, "label", 120);
    \u0275\u0275text(24, "App Update");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 140)(26, "div", 141)(27, "div", 142);
    \u0275\u0275element(28, "input", 156);
    \u0275\u0275elementStart(29, "label", 144);
    \u0275\u0275text(30, "Enable/Disable");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(31, "div", 145)(32, "span", 146);
    \u0275\u0275text(33, "Ut enim ad minim veniam, quis nostrud exercitation");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(34, "div", 128)(35, "div", 2)(36, "div", 3)(37, "label", 120);
    \u0275\u0275text(38, "App Debug");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 140)(40, "div", 141)(41, "div", 142);
    \u0275\u0275element(42, "input", 157);
    \u0275\u0275elementStart(43, "label", 144);
    \u0275\u0275text(44, "Enable/Disable");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(45, "div", 145)(46, "span", 146);
    \u0275\u0275text(47, "Ut enim ad minim veniam, quis nostrud exercitation");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(48, "div", 128)(49, "div", 2)(50, "div", 3)(51, "label", 120);
    \u0275\u0275text(52, "Register");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 140)(54, "div", 141)(55, "div", 142);
    \u0275\u0275element(56, "input", 158);
    \u0275\u0275elementStart(57, "label", 144);
    \u0275\u0275text(58, "Enable/Disable");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(59, "div", 145)(60, "span", 146);
    \u0275\u0275text(61, "Ut enim ad minim veniam, quis nostrud exercitation");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(62, "div", 128)(63, "div", 2)(64, "div", 3)(65, "label", 120);
    \u0275\u0275text(66, "Google Captcha");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 140)(68, "div", 141)(69, "div", 142);
    \u0275\u0275element(70, "input", 159);
    \u0275\u0275elementStart(71, "label", 144);
    \u0275\u0275text(72, "Enable/Disable");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(73, "div", 145)(74, "span", 146);
    \u0275\u0275text(75, "Ut enim ad minim veniam, quis nostrud exercitation");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(76, "div", 136)(77, "a", 137);
    \u0275\u0275text(78, "Save Changes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "a", 138);
    \u0275\u0275text(80, "Cancel");
    \u0275\u0275elementEnd()()()();
  }
}
function SettingsComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "div", 18)(3, "h4", 19);
    \u0275\u0275text(4, "Social Settings");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 20)(6, "div", 2)(7, "div", 160)(8, "div", 161)(9, "div", 162)(10, "h4", 19);
    \u0275\u0275text(11, "Google Login");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 163)(13, "div", 141)(14, "div", 142);
    \u0275\u0275element(15, "input", 164);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "div", 20)(17, "div", 21)(18, "label", 120);
    \u0275\u0275text(19, "Callback URL ");
    \u0275\u0275elementStart(20, "span", 165);
    \u0275\u0275element(21, "i", 166);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 167)(23, "div", 168)(24, "span");
    \u0275\u0275text(25, "https://www.doamin.com");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "div", 128)(27, "label", 120);
    \u0275\u0275text(28, "Client ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "textarea", 116);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 128)(31, "label", 120);
    \u0275\u0275text(32, "Secret");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "textarea", 116);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(34, "div", 160)(35, "div", 161)(36, "div", 169)(37, "h4", 19);
    \u0275\u0275text(38, "Facebook Login");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 163)(40, "div", 141)(41, "div", 142);
    \u0275\u0275element(42, "input", 164);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(43, "div", 20)(44, "div", 21)(45, "label", 120);
    \u0275\u0275text(46, "Callback URL ");
    \u0275\u0275elementStart(47, "span", 170);
    \u0275\u0275element(48, "i", 166);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 171)(50, "div", 168)(51, "span");
    \u0275\u0275text(52, "https://www.doamin.com");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(53, "div", 128)(54, "label", 120);
    \u0275\u0275text(55, "Client ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(56, "textarea", 116);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 128)(58, "label", 120);
    \u0275\u0275text(59, "Secret");
    \u0275\u0275elementEnd();
    \u0275\u0275element(60, "textarea", 116);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(61, "div", 117)(62, "a", 118);
    \u0275\u0275text(63, "Save Changes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "a", 119);
    \u0275\u0275text(65, "Cancel");
    \u0275\u0275elementEnd()()()();
  }
}
var _SettingsComponent = class _SettingsComponent {
  constructor() {
    this.isSMTPOpen1 = false;
    this.isPaypalOpen = false;
    this.isSMTPOpen = false;
  }
  toggleSmtp1(isOpen) {
    this.isSMTPOpen1 = isOpen;
  }
  togglePaypalDisplay(event) {
    this.isPaypalOpen = event.target.checked;
  }
  toggleSmtp(isOpen) {
    this.isSMTPOpen = isOpen;
  }
};
_SettingsComponent.\u0275fac = function SettingsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SettingsComponent)();
};
_SettingsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["app-settings"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 33, vars: 2, consts: [["nav", "ngbNav"], [3, "title"], [1, "row"], [1, "col-xl-3"], [1, "card"], ["ngbNav", "", "orientation", "vertical", 1, "flex-column", "admisetting-tabs"], ["ngbNavItem", ""], ["ngbNavLink", ""], [1, "nav-icon", "las", "la-cog"], ["ngbNavContent", ""], [1, "nav-icon", "las", "la-envelope"], [1, "nav-icon", "lar", "la-credit-card"], [1, "nav-icon", "las", "la-lock"], [1, "nav-icon", "las", "la-share-alt"], [1, "col-xl-9"], ["id", "setting-tabContent", 1, "adminsetting-content", 3, "ngbNavOutlet"], [1, "tab-pane"], [1, "card", "custom-card"], [1, "card-header", "border-0"], [1, "card-title"], [1, "card-body"], [1, "form-group"], [1, "col-md-3"], [1, "form-label", "mb-0", "mt-2"], [1, "col-md-9"], ["type", "text", "placeholder", "Name", "value", "dayone", 1, "form-control"], ["type", "text", "placeholder", "Name", "value", "spruko@gmail.com", 1, "form-control"], ["type", "text", "placeholder", "Name", "value", "+9960332258", 1, "form-control"], [1, "form-group", "mb-0"], ["type", "text", "placeholder", "Name", "value", "www.spruko.com", 1, "form-control"], [1, "col-md-3", "mt-2"], [1, "form-label", "mb-0", "mt-4"], ["for", "form-label", 1, "form-label"], ["type", "file", 1, "form-control"], ["placeholder", "Choose a Language...", 1, "form-control", "custom-select", "languages", "p-0"], ["value", "AF"], ["value", "SQ"], ["value", "AR"], ["value", "HY"], ["value", "EU"], ["value", "BN"], ["value", "BG"], ["value", "CA"], ["value", "KM"], ["value", "ZH"], ["value", "HR"], ["value", "CS"], ["value", "DA"], ["value", "NL"], ["value", "EN", "selected", ""], ["value", "ET"], ["value", "FJ"], ["value", "FI"], ["value", "FR"], ["value", "KA"], ["value", "DE"], ["value", "EL"], ["value", "GU"], ["value", "HE"], ["value", "HI"], ["value", "HU"], ["value", "IS"], ["value", "ID"], ["value", "GA"], ["value", "IT"], ["value", "JA"], ["value", "JW"], ["value", "KO"], ["value", "LA"], ["value", "LV"], ["value", "LT"], ["value", "MK"], ["value", "MS"], ["value", "ML"], ["value", "MT"], ["value", "MI"], ["value", "MR"], ["value", "MN"], ["value", "NE"], ["value", "NO"], ["value", "FA"], ["value", "PL"], ["value", "PT"], ["value", "PA"], ["value", "QU"], ["value", "RO"], ["value", "RU"], ["value", "SM"], ["value", "SR"], ["value", "SK"], ["value", "SL"], ["value", "ES"], ["value", "SW"], ["value", "SV"], ["value", "TA"], ["value", "TT"], ["value", "TE"], ["value", "TH"], ["value", "BO"], ["value", "TO"], ["value", "TR"], ["value", "UK"], ["value", "UR"], ["value", "UZ"], ["value", "VI"], ["value", "CY"], ["value", "XH"], ["placeholder", "Choose Currency", 1, "form-control", "custom-select", "p-0"], ["value", "1", "selected", ""], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["rows", "2", "placeholder", "something text here...", 1, "form-control"], [1, "card-footer"], ["href", "javascript:;", 1, "me-2", "btn", "btn-success"], ["href", "javascript:;", 1, "btn", "btn-danger"], [1, "form-label"], [1, "custom-controls-stacked", "d-sm-flex"], [1, "form-check", "me-4"], ["type", "radio", "id", "email", "name", "example-radios3", 1, "form-check-input", 3, "ngModelChange", "change", "value", "ngModel"], ["for", "email", 1, "form-check-label"], ["type", "radio", "id", "emailsmtp", "name", "example-radios3", 1, "form-check-input", 3, "ngModelChange", "change", "value", "ngModel"], ["for", "emailsmtp", 1, "form-check-label"], [1, "enable-smtpemail", 3, "ngClass"], [1, "form-group", "mt-3"], ["type", "text", "placeholder", "host", "value", "", 1, "form-control"], ["type", "text", "placeholder", "port", "value", "", 1, "form-control"], ["type", "text", "placeholder", "User", "value", "", 1, "form-control"], ["type", "password", "placeholder", "Password", "value", "", 1, "form-control"], ["type", "text", "placeholder", "encryption", "value", "", 1, "form-control"], ["type", "text", "placeholder", "dayone", "value", "", 1, "form-control"], ["type", "text", "placeholder", "example@gmail.com", "value", "", 1, "form-control"], [1, "card-footer", "btn-list"], ["href", "javascript:void(0);", 1, "btn", "btn-success"], ["href", "javascript:void(0);", 1, "btn", "btn-danger"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#sendmailmodal", 1, "btn", "btn-info"], [1, "col-xl-3", "pe-0"], [1, "custom-switch"], [1, "form-check", "form-check-md", "form-switch"], ["type", "checkbox", "role", "switch", "id", "switch-md", 1, "form-check-input", 3, "change"], [1, "form-check-label", "text-muted", "ms-2"], [1, "col-xl-6", "ps-xl-0"], [1, "d-block", "fs-12", "text-muted"], [1, "open-paypal", 3, "ngClass"], ["type", "checkbox", "role", "switch", "id", "switch-md3", 1, "form-check-input"], [1, "row", "mt-3"], ["type", "text", "placeholder", "Client ID", "value", "", 1, "form-control"], ["type", "text", "placeholder", "Secret", "value", "", 1, "form-control"], ["data-placeholder", "Choose Currency...", "data-trigger", "", 1, "form-control", "languages"], ["value", ""], ["value", "1"], ["type", "checkbox", "role", "switch", "id", "switch-md4", 1, "form-check-input"], ["type", "checkbox", "role", "switch", "id", "switch-md5", 1, "form-check-input"], ["type", "checkbox", "role", "switch", "id", "switch-md6", 1, "form-check-input"], ["type", "checkbox", "role", "switch", "id", "switch-md7", 1, "form-check-input"], ["type", "checkbox", "role", "switch", "id", "switch-md8", 1, "form-check-input"], [1, "col-xl-6"], [1, "card", "custom-card", "border"], [1, "card-header", "justify-content-between"], [1, "card-options"], ["type", "checkbox", "role", "switch", 1, "form-check-input"], ["data-clipboard-target", "#social1", 1, "clipboard-icon", "p-1", "border", "rounded-2"], [1, "las", "la-clipboard"], ["id", "social1", 1, "bg-white", "border", "br-7"], [1, "p-3"], [1, "card-header", "justify-content-between", "border-0"], ["data-clipboard-target", "#social2", 1, "clipboard-icon", "p-1", "border", "rounded-2"], ["id", "social2", 1, "bg-white", "border", "br-7"]], template: function SettingsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-page-header", 1);
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "nav", 5, 0);
    \u0275\u0275elementContainerStart(6, 6);
    \u0275\u0275elementStart(7, "a", 7);
    \u0275\u0275element(8, "i", 8);
    \u0275\u0275text(9, " General Settings");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, SettingsComponent_ng_template_10_Template, 230, 0, "ng-template", 9);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(11, 6);
    \u0275\u0275elementStart(12, "a", 7);
    \u0275\u0275element(13, "i", 10);
    \u0275\u0275text(14, " Email Settings");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, SettingsComponent_ng_template_15_Template, 78, 7, "ng-template", 9);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(16, 6);
    \u0275\u0275elementStart(17, "a", 7);
    \u0275\u0275element(18, "i", 11);
    \u0275\u0275text(19, " Payment Settings");
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, SettingsComponent_ng_template_20_Template, 79, 3, "ng-template", 9);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(21, 6);
    \u0275\u0275elementStart(22, "a", 7);
    \u0275\u0275element(23, "i", 12);
    \u0275\u0275text(24, " Security Settings");
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, SettingsComponent_ng_template_25_Template, 81, 0, "ng-template", 9);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(26, 6);
    \u0275\u0275elementStart(27, "a", 7);
    \u0275\u0275element(28, "i", 13);
    \u0275\u0275text(29, " Social Settings");
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, SettingsComponent_ng_template_30_Template, 66, 0, "ng-template", 9);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 14);
    \u0275\u0275element(32, "div", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const nav_r4 = \u0275\u0275reference(5);
    \u0275\u0275property("title", "Settings");
    \u0275\u0275advance(32);
    \u0275\u0275property("ngbNavOutlet", nav_r4);
  }
}, dependencies: [SharedModule, PageHeaderComponent, NgbModule, NgbNavContent, NgbNav, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet, NgSelectModule, NgSelectComponent, NgOptionComponent, RouterModule, CommonModule, NgClass, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, RadioControlValueAccessor, NgControlStatus, NgModel, ReactiveFormsModule] });
var SettingsComponent = _SettingsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent" });
})();
export {
  SettingsComponent
};
//# sourceMappingURL=settings.component-XER7JGDH.js.map
