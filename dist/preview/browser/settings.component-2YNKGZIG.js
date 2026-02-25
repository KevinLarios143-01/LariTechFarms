import {
  NgxColorsComponent,
  NgxColorsModule,
  NgxColorsTriggerDirective,
  PageHeaderComponent,
  SharedModule
} from "./chunk-UEAXMXBR.js";
import {
  NgOptionComponent,
  NgSelectComponent,
  NgSelectModule
} from "./chunk-26H6NGLN.js";
import {
  ColorPickerDirective,
  ColorPickerModule
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
  NgbModule,
  NgbNav,
  NgbNavContent,
  NgbNavItem,
  NgbNavLink,
  NgbNavLinkBase,
  NgbNavOutlet,
  ReactiveFormsModule
} from "./chunk-47LBZ5ZO.js";
import {
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/hrmdashboards/settings/settings.component.ts
function SettingsComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "h4", 18);
    \u0275\u0275text(3, "General Settings");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 19)(5, "div", 20)(6, "div", 2)(7, "div", 21)(8, "label", 22);
    \u0275\u0275text(9, "Company Name");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 23);
    \u0275\u0275element(11, "input", 24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 20)(13, "div", 2)(14, "div", 21)(15, "label", 22);
    \u0275\u0275text(16, "Company Email");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 23);
    \u0275\u0275element(18, "input", 25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 20)(20, "div", 2)(21, "div", 21)(22, "label", 22);
    \u0275\u0275text(23, "Company Address");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 23)(25, "textarea", 26);
    \u0275\u0275text(26, "NO.1-8-67, LIG 215,H, 83, near Tulasi Hospital ECIL, APIIC Colony, Kushaiguda, Hyderabad, Telangana 500062");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "div", 20)(28, "div", 2)(29, "div", 21)(30, "label", 22);
    \u0275\u0275text(31, "Number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 23);
    \u0275\u0275element(33, "input", 27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 20)(35, "div", 2)(36, "div", 21)(37, "label", 22);
    \u0275\u0275text(38, "Website");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 23);
    \u0275\u0275element(40, "input", 28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 20)(42, "div", 2)(43, "div", 21)(44, "label", 22);
    \u0275\u0275text(45, "Contact Person");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 23);
    \u0275\u0275element(47, "input", 29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 20)(49, "div", 2)(50, "div", 21)(51, "label", 22);
    \u0275\u0275text(52, "Upload Image");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 23)(54, "div", 20);
    \u0275\u0275element(55, "label", 30)(56, "input", 31);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(57, "div", 20)(58, "div", 2)(59, "div", 21)(60, "label", 22);
    \u0275\u0275text(61, "Country");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 23)(63, "ng-select", 32)(64, "ng-option", 33);
    \u0275\u0275text(65, "Germany");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "ng-option", 34);
    \u0275\u0275text(67, "Canada");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "ng-option", 35);
    \u0275\u0275text(69, "Usa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "ng-option", 36);
    \u0275\u0275text(71, "Afghanistan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "ng-option", 37);
    \u0275\u0275text(73, "Albania");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "ng-option", 38);
    \u0275\u0275text(75, "China");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "ng-option", 39);
    \u0275\u0275text(77, "Denmark");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "ng-option", 40);
    \u0275\u0275text(79, "Finland");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "ng-option", 41);
    \u0275\u0275text(81, "India");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "ng-option", 42);
    \u0275\u0275text(83, "Kiribati");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "ng-option", 43);
    \u0275\u0275text(85, "Kuwait");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "ng-option", 44);
    \u0275\u0275text(87, "Mexico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "ng-option", 45);
    \u0275\u0275text(89, "Pakistan");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(90, "div", 20)(91, "div", 2)(92, "div", 21)(93, "label", 22);
    \u0275\u0275text(94, "Language");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "div", 23)(96, "ng-select", 46)(97, "ng-option", 47);
    \u0275\u0275text(98, "Afrikanns");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "ng-option", 48);
    \u0275\u0275text(100, "Albanian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "ng-option", 49);
    \u0275\u0275text(102, "Arabic");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "ng-option", 50);
    \u0275\u0275text(104, "Armenian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "ng-option", 51);
    \u0275\u0275text(106, "Basque");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "ng-option", 52);
    \u0275\u0275text(108, "Bengali");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "ng-option", 53);
    \u0275\u0275text(110, "Bulgarian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "ng-option", 54);
    \u0275\u0275text(112, "Catalan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "ng-option", 55);
    \u0275\u0275text(114, "Cambodian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "ng-option", 56);
    \u0275\u0275text(116, "Chinese (Mandarin)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "ng-option", 57);
    \u0275\u0275text(118, "Croation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "ng-option", 58);
    \u0275\u0275text(120, "Czech");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "ng-option", 59);
    \u0275\u0275text(122, "Danish");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "ng-option", 60);
    \u0275\u0275text(124, "Dutch");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(125, "ng-option", 61);
    \u0275\u0275text(126, "English");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(127, "ng-option", 62);
    \u0275\u0275text(128, "Estonian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(129, "ng-option", 63);
    \u0275\u0275text(130, "Fiji");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(131, "ng-option", 64);
    \u0275\u0275text(132, "Finnish");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(133, "ng-option", 65);
    \u0275\u0275text(134, "French");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(135, "ng-option", 66);
    \u0275\u0275text(136, "Georgian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(137, "ng-option", 67);
    \u0275\u0275text(138, "German");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(139, "ng-option", 68);
    \u0275\u0275text(140, "Greek");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(141, "ng-option", 69);
    \u0275\u0275text(142, "Gujarati");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(143, "ng-option", 70);
    \u0275\u0275text(144, "Hebrew");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(145, "ng-option", 71);
    \u0275\u0275text(146, "Hindi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(147, "ng-option", 72);
    \u0275\u0275text(148, "Hungarian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(149, "ng-option", 73);
    \u0275\u0275text(150, "Icelandic");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(151, "ng-option", 74);
    \u0275\u0275text(152, "Indonesian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(153, "ng-option", 75);
    \u0275\u0275text(154, "Irish");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(155, "ng-option", 76);
    \u0275\u0275text(156, "Italian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(157, "ng-option", 77);
    \u0275\u0275text(158, "Japanese");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(159, "ng-option", 78);
    \u0275\u0275text(160, "Javanese");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(161, "ng-option", 79);
    \u0275\u0275text(162, "Korean");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(163, "ng-option", 80);
    \u0275\u0275text(164, "Latin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(165, "ng-option", 81);
    \u0275\u0275text(166, "Latvian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(167, "ng-option", 82);
    \u0275\u0275text(168, "Lithuanian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(169, "ng-option", 83);
    \u0275\u0275text(170, "Macedonian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(171, "ng-option", 84);
    \u0275\u0275text(172, "Malay");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(173, "ng-option", 85);
    \u0275\u0275text(174, "Malayalam");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(175, "ng-option", 86);
    \u0275\u0275text(176, "Maltese");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(177, "ng-option", 87);
    \u0275\u0275text(178, "Maori");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(179, "ng-option", 88);
    \u0275\u0275text(180, "Marathi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(181, "ng-option", 89);
    \u0275\u0275text(182, "Mongolian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(183, "ng-option", 90);
    \u0275\u0275text(184, "Nepali");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(185, "ng-option", 91);
    \u0275\u0275text(186, "Norwegian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(187, "ng-option", 92);
    \u0275\u0275text(188, "Persian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(189, "ng-option", 93);
    \u0275\u0275text(190, "Polish");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(191, "ng-option", 94);
    \u0275\u0275text(192, "Portuguese");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(193, "ng-option", 95);
    \u0275\u0275text(194, "Punjabi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(195, "ng-option", 96);
    \u0275\u0275text(196, "Quechua");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(197, "ng-option", 97);
    \u0275\u0275text(198, "Romanian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(199, "ng-option", 98);
    \u0275\u0275text(200, "Russian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(201, "ng-option", 99);
    \u0275\u0275text(202, "Samoan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(203, "ng-option", 100);
    \u0275\u0275text(204, "Serbian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(205, "ng-option", 101);
    \u0275\u0275text(206, "Slovak");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(207, "ng-option", 102);
    \u0275\u0275text(208, "Slovenian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(209, "ng-option", 103);
    \u0275\u0275text(210, "Spanish");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(211, "ng-option", 104);
    \u0275\u0275text(212, "Swahili");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(213, "ng-option", 105);
    \u0275\u0275text(214, "Swedish ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(215, "ng-option", 106);
    \u0275\u0275text(216, "Tamil");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(217, "ng-option", 107);
    \u0275\u0275text(218, "Tatar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(219, "ng-option", 108);
    \u0275\u0275text(220, "Telugu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(221, "ng-option", 109);
    \u0275\u0275text(222, "Thai");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(223, "ng-option", 110);
    \u0275\u0275text(224, "Tibetan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(225, "ng-option", 111);
    \u0275\u0275text(226, "Tonga");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(227, "ng-option", 112);
    \u0275\u0275text(228, "Turkish");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(229, "ng-option", 113);
    \u0275\u0275text(230, "Ukranian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(231, "ng-option", 114);
    \u0275\u0275text(232, "Urdu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(233, "ng-option", 115);
    \u0275\u0275text(234, "Uzbek");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(235, "ng-option", 116);
    \u0275\u0275text(236, "Vietnamese");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(237, "ng-option", 117);
    \u0275\u0275text(238, "Welsh");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(239, "ng-option", 118);
    \u0275\u0275text(240, "Xhosa");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(241, "div", 20)(242, "div", 2)(243, "div", 21)(244, "label", 22);
    \u0275\u0275text(245, "Currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(246, "div", 23)(247, "ng-select", 119)(248, "ng-option", 120);
    \u0275\u0275text(249, "US DOllar(USD)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(250, "ng-option", 121);
    \u0275\u0275text(251, "European Euro (EUR)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(252, "ng-option", 34);
    \u0275\u0275text(253, "Japanese Yen (JPY)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(254, "ng-option", 122);
    \u0275\u0275text(255, "British Pound (GBP)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(256, "ng-option", 36);
    \u0275\u0275text(257, "Swiss Franc (CHF)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(258, "ng-option", 37);
    \u0275\u0275text(259, "Canadian Dollar (CAD)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(260, "ng-option", 38);
    \u0275\u0275text(261, "Australian/New Zealand Dollar (AUD/NZD)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(262, "ng-option", 39);
    \u0275\u0275text(263, "South African Rand (ZAR)");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(264, "div", 123)(265, "a", 124);
    \u0275\u0275text(266, "Save Changes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(267, "a", 125);
    \u0275\u0275text(268, "Cancel");
    \u0275\u0275elementEnd()()();
  }
}
function SettingsComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "h4", 18);
    \u0275\u0275text(3, "Profile Settings");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 19)(5, "div", 20)(6, "div", 2)(7, "div", 21)(8, "label", 22);
    \u0275\u0275text(9, "Name");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 23);
    \u0275\u0275element(11, "input", 29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 20)(13, "div", 2)(14, "div", 21)(15, "label", 22);
    \u0275\u0275text(16, "Email");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 23);
    \u0275\u0275element(18, "input", 126);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 20)(20, "div", 2)(21, "div", 21)(22, "label", 22);
    \u0275\u0275text(23, "Password");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 23);
    \u0275\u0275element(25, "input", 127);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 20)(27, "div", 2)(28, "div", 21)(29, "label", 22);
    \u0275\u0275text(30, "Confirm Password");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 23);
    \u0275\u0275element(32, "input", 128);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(33, "div", 123)(34, "a", 124);
    \u0275\u0275text(35, "Save Changes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "a", 125);
    \u0275\u0275text(37, "Cancel");
    \u0275\u0275elementEnd()()();
  }
}
function SettingsComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "h4", 18);
    \u0275\u0275text(3, "Notification Settings");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 19)(5, "div", 20)(6, "div", 2)(7, "div", 21)(8, "label", 129);
    \u0275\u0275text(9, "Attendance");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 23)(11, "div", 130);
    \u0275\u0275element(12, "input", 131);
    \u0275\u0275elementStart(13, "label", 132);
    \u0275\u0275text(14, "Enable/Disable");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(15, "div", 20)(16, "div", 2)(17, "div", 21)(18, "label", 129);
    \u0275\u0275text(19, "Awards");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 23)(21, "div", 130);
    \u0275\u0275element(22, "input", 131);
    \u0275\u0275elementStart(23, "label", 132);
    \u0275\u0275text(24, "Enable/Disable");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(25, "div", 20)(26, "div", 2)(27, "div", 21)(28, "label", 129);
    \u0275\u0275text(29, "Leaves");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 23)(31, "div", 130);
    \u0275\u0275element(32, "input", 131);
    \u0275\u0275elementStart(33, "label", 132);
    \u0275\u0275text(34, "Enable/Disable");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(35, "div", 20)(36, "div", 2)(37, "div", 21)(38, "label", 129);
    \u0275\u0275text(39, "Notice Board");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 23)(41, "div", 130);
    \u0275\u0275element(42, "input", 131);
    \u0275\u0275elementStart(43, "label", 132);
    \u0275\u0275text(44, "Enable/Disable");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(45, "div", 20)(46, "div", 2)(47, "div", 21)(48, "label", 129);
    \u0275\u0275text(49, "Expenses");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 23)(51, "div", 130);
    \u0275\u0275element(52, "input", 131);
    \u0275\u0275elementStart(53, "label", 132);
    \u0275\u0275text(54, "Enable/Disable");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(55, "div", 20)(56, "div", 2)(57, "div", 21)(58, "label", 129);
    \u0275\u0275text(59, "Payroll");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 23)(61, "div", 130);
    \u0275\u0275element(62, "input", 131);
    \u0275\u0275elementStart(63, "label", 132);
    \u0275\u0275text(64, "Enable/Disable");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(65, "div", 20)(66, "div", 2)(67, "div", 21)(68, "label", 129);
    \u0275\u0275text(69, "Events");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 23)(71, "div", 130);
    \u0275\u0275element(72, "input", 131);
    \u0275\u0275elementStart(73, "label", 132);
    \u0275\u0275text(74, "Enable/Disable");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(75, "div", 123)(76, "a", 124);
    \u0275\u0275text(77, "Save Changes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "a", 125);
    \u0275\u0275text(79, "Cancel");
    \u0275\u0275elementEnd()()();
  }
}
function SettingsComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "h4", 18);
    \u0275\u0275text(3, "Attendance Settings");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 19)(5, "div", 20)(6, "div", 2)(7, "div", 21)(8, "label", 129);
    \u0275\u0275text(9, "Office Start Time");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 23)(11, "div", 133)(12, "div", 134);
    \u0275\u0275element(13, "i", 135);
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 136);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "div", 20)(16, "div", 2)(17, "div", 21)(18, "label", 129);
    \u0275\u0275text(19, "Office End Time");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 23)(21, "div", 133)(22, "div", 134);
    \u0275\u0275element(23, "i", 135);
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 136);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(25, "div", 20)(26, "div", 2)(27, "div", 21)(28, "label", 129);
    \u0275\u0275text(29, "Employees Mark Attendance");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 23)(31, "div", 130);
    \u0275\u0275element(32, "input", 137);
    \u0275\u0275elementStart(33, "label", 138);
    \u0275\u0275text(34, "Enable/Disable");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(35, "div", 20)(36, "div", 2)(37, "div", 21)(38, "label", 22);
    \u0275\u0275text(39, "Late Mark after(mintues)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 23);
    \u0275\u0275element(41, "input", 139);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "div", 20)(43, "div", 2)(44, "div", 21)(45, "label", 22);
    \u0275\u0275text(46, "Office Opens On");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 23)(48, "div", 2)(49, "div", 140)(50, "div", 141);
    \u0275\u0275element(51, "input", 142);
    \u0275\u0275elementStart(52, "label", 143);
    \u0275\u0275text(53, " Monday ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(54, "div", 140)(55, "div", 141);
    \u0275\u0275element(56, "input", 144);
    \u0275\u0275elementStart(57, "label", 145);
    \u0275\u0275text(58, " Tuesday ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(59, "div", 140)(60, "div", 141);
    \u0275\u0275element(61, "input", 146);
    \u0275\u0275elementStart(62, "label", 147);
    \u0275\u0275text(63, " Wednesday ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(64, "div", 140)(65, "div", 141);
    \u0275\u0275element(66, "input", 148);
    \u0275\u0275elementStart(67, "label", 149);
    \u0275\u0275text(68, " Thursday ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(69, "div", 140)(70, "div", 141);
    \u0275\u0275element(71, "input", 150);
    \u0275\u0275elementStart(72, "label", 151);
    \u0275\u0275text(73, " Friday ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(74, "div", 140)(75, "div", 141);
    \u0275\u0275element(76, "input", 152);
    \u0275\u0275elementStart(77, "label", 153);
    \u0275\u0275text(78, " Saturday ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(79, "div", 140)(80, "div", 141);
    \u0275\u0275element(81, "input", 154);
    \u0275\u0275elementStart(82, "label", 155);
    \u0275\u0275text(83, " Sunday ");
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275elementStart(84, "div", 123)(85, "a", 124);
    \u0275\u0275text(86, "Save Changes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "a", 125);
    \u0275\u0275text(88, "Cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(14);
    \u0275\u0275property("noCalendar", true)("enableTime", true);
    \u0275\u0275advance(10);
    \u0275\u0275property("noCalendar", true)("enableTime", true);
  }
}
function SettingsComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "h4", 18);
    \u0275\u0275text(3, "Theme Settings");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 19)(5, "div", 20)(6, "div", 2)(7, "div", 21)(8, "label", 129);
    \u0275\u0275text(9, "Theme Color");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 23)(11, "input", 156);
    \u0275\u0275twoWayListener("colorPickerChange", function SettingsComponent_ng_template_30_Template_input_colorPickerChange_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.color, $event) || (ctx_r1.color = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "div", 20)(13, "div", 2)(14, "div", 21)(15, "label", 129);
    \u0275\u0275text(16, "Text Color");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 23)(18, "ngx-colors", 157);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_ng_template_30_Template_ngx_colors_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.color3, $event) || (ctx_r1.color3 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(19, "div", 123)(20, "a", 124);
    \u0275\u0275text(21, "Save Changes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "a", 125);
    \u0275\u0275text(23, "Cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275styleProp("background", ctx_r1.color);
    \u0275\u0275property("value", ctx_r1.color)("cpCancelButton", true)("cpCancelButtonClass", "btn btn-primary btn-xs")("cpEyeDropper", true);
    \u0275\u0275twoWayProperty("colorPicker", ctx_r1.color);
    \u0275\u0275property("cpOKButton", true)("cpSaveClickOutside", false)("cpOKButtonClass", "btn btn-primary btn-xs");
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.color3);
  }
}
var _SettingsComponent = class _SettingsComponent {
  constructor() {
    this.color = "#2889e9";
    this.color1 = "#2889e9";
    this.color2 = "#e920e9";
    this.color3 = "#e920e9";
    this.inlineDatePicker = false;
    this.flatpickrOptions = {
      inline: true
    };
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
_SettingsComponent.\u0275fac = function SettingsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SettingsComponent)();
};
_SettingsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["app-settings"]], standalone: true, features: [\u0275\u0275ProvidersFeature([
  FlatpickrDefaults
]), \u0275\u0275StandaloneFeature], decls: 33, vars: 2, consts: [["nav", "ngbNav"], [3, "title"], [1, "row"], [1, "col-md-12", "col-xl-3"], [1, "card"], ["ngbNav", "", "orientation", "vertical", 1, "flex-column", "admisetting-tabs"], ["ngbNavItem", ""], ["ngbNavLink", ""], [1, "nav-icon", "las", "la-cog"], ["ngbNavContent", ""], [1, "nav-icon", "las", "la-user-circle"], [1, "nav-icon", "las", "la-bell"], [1, "nav-icon", "las", "la-edit"], [1, "nav-icon", "las", "la-palette"], [1, "col-md-12", "col-xl-9"], [1, "adminsetting-content", 3, "ngbNavOutlet"], [1, "card", "custom-card"], [1, "card-header", "border-0"], [1, "card-title"], [1, "card-body"], [1, "form-group"], [1, "col-md-3"], [1, "form-label", "mb-0", "mt-2"], [1, "col-md-9"], ["type", "text", "placeholder", "Name", "value", "Spruko Technologies Pvt Ltd", 1, "form-control"], ["type", "text", "placeholder", "Name", "value", "spruko@gmail.com", 1, "form-control"], ["rows", "2", "placeholder", "something text here...", 1, "form-control"], ["type", "text", "placeholder", "Name", "value", "9960332258", 1, "form-control"], ["type", "text", "placeholder", "Name", "value", "www.spruko.com", 1, "form-control"], ["type", "text", "placeholder", "Name", "value", "HR Admin", 1, "form-control"], ["for", "form-label", 1, "form-label"], ["type", "file", 1, "form-control"], ["placeholder", "Select Country", 1, "form-control", "custom-select", "p-0"], ["value", "1"], ["value", "3"], ["value", "4", "selected", ""], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["value", "11"], ["value", "12"], ["value", "13"], ["value", "14"], ["placeholder", "Choose a Language...", 1, "form-control", "custom-select", "languages", "p-0"], ["value", "AF"], ["value", "SQ"], ["value", "AR"], ["value", "HY"], ["value", "EU"], ["value", "BN"], ["value", "BG"], ["value", "CA"], ["value", "KM"], ["value", "ZH"], ["value", "HR"], ["value", "CS"], ["value", "DA"], ["value", "NL"], ["value", "EN", "selected", ""], ["value", "ET"], ["value", "FJ"], ["value", "FI"], ["value", "FR"], ["value", "KA"], ["value", "DE"], ["value", "EL"], ["value", "GU"], ["value", "HE"], ["value", "HI"], ["value", "HU"], ["value", "IS"], ["value", "ID"], ["value", "GA"], ["value", "IT"], ["value", "JA"], ["value", "JW"], ["value", "KO"], ["value", "LA"], ["value", "LV"], ["value", "LT"], ["value", "MK"], ["value", "MS"], ["value", "ML"], ["value", "MT"], ["value", "MI"], ["value", "MR"], ["value", "MN"], ["value", "NE"], ["value", "NO"], ["value", "FA"], ["value", "PL"], ["value", "PT"], ["value", "PA"], ["value", "QU"], ["value", "RO"], ["value", "RU"], ["value", "SM"], ["value", "SR"], ["value", "SK"], ["value", "SL"], ["value", "ES"], ["value", "SW"], ["value", "SV"], ["value", "TA"], ["value", "TT"], ["value", "TE"], ["value", "TH"], ["value", "BO"], ["value", "TO"], ["value", "TR"], ["value", "UK"], ["value", "UR"], ["value", "UZ"], ["value", "VI"], ["value", "CY"], ["value", "XH"], ["placeholder", "Choose Currency", 1, "form-control", "custom-select", "p-0"], ["value", "1", "selected", ""], ["value", "2"], ["value", "4"], [1, "card-footer"], ["href", "javascript:;", 1, "me-2", "btn", "btn-success"], ["href", "javascript:;", 1, "btn", "btn-danger"], ["type", "text", "placeholder", "login email", "value", "hr@demo.com", 1, "form-control"], ["type", "password", "placeholder", "password", "value", "", 1, "form-control"], ["type", "password", "placeholder", "Confirm password", "value", "", 1, "form-control"], [1, "form-label"], [1, "form-check", "form-check-lg", "form-switch"], ["type", "checkbox", "role", "switch", "id", "switch-lg1", 1, "form-check-input"], ["for", "switch-lg1", 1, "form-check-label", "custom-switch-description"], [1, "input-group"], [1, "input-group-text", "text-muted"], [1, "ri-time-line"], ["type", "text", "mwlFlatpickr", "", "dateFormat", "H:i", "id", "choose-time1", "placeholder", "Choose time", 1, "form-control", 3, "noCalendar", "enableTime"], ["type", "checkbox", "role", "switch", "id", "switch-lg", 1, "form-check-input"], ["for", "switch-lg", 1, "form-check-label", "custom-switch-description"], ["type", "text", "placeholder", "Enter mintues", "value", "", 1, "form-control"], [1, "col-md-6", "col-lg-3"], [1, "form-check"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault1", 1, "form-check-input"], ["for", "flexRadioDefault1", 1, "form-check-label"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault2", 1, "form-check-input"], ["for", "flexRadioDefault2", 1, "form-check-label"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault3", 1, "form-check-input"], ["for", "flexRadioDefault3", 1, "form-check-label"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault4", 1, "form-check-input"], ["for", "flexRadioDefault4", 1, "form-check-label"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault5", 1, "form-check-input"], ["for", "flexRadioDefault5", 1, "form-check-label"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault6", 1, "form-check-input"], ["for", "flexRadioDefault6", 1, "form-check-label"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault7", 1, "form-check-input"], ["for", "flexRadioDefault7", 1, "form-check-label"], [1, "text-white", 3, "colorPickerChange", "value", "cpCancelButton", "cpCancelButtonClass", "cpEyeDropper", "colorPicker", "cpOKButton", "cpSaveClickOutside", "cpOKButtonClass"], ["ngx-colors-trigger", "", "acceptLabel", "Select", "cancelLabel", "Cancel", 3, "ngModelChange", "ngModel"]], template: function SettingsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-page-header", 1);
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5, 0);
    \u0275\u0275elementContainerStart(6, 6);
    \u0275\u0275elementStart(7, "a", 7);
    \u0275\u0275element(8, "i", 8);
    \u0275\u0275text(9, " General Settings");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, SettingsComponent_ng_template_10_Template, 269, 0, "ng-template", 9);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(11, 6);
    \u0275\u0275elementStart(12, "a", 7);
    \u0275\u0275element(13, "i", 10);
    \u0275\u0275text(14, " Profile Settings");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, SettingsComponent_ng_template_15_Template, 38, 0, "ng-template", 9);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(16, 6);
    \u0275\u0275elementStart(17, "a", 7);
    \u0275\u0275element(18, "i", 11);
    \u0275\u0275text(19, " Notification Settings");
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, SettingsComponent_ng_template_20_Template, 80, 0, "ng-template", 9);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(21, 6);
    \u0275\u0275elementStart(22, "a", 7);
    \u0275\u0275element(23, "i", 12);
    \u0275\u0275text(24, " Attendance Settings");
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, SettingsComponent_ng_template_25_Template, 89, 4, "ng-template", 9);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(26, 6);
    \u0275\u0275elementStart(27, "a", 7);
    \u0275\u0275element(28, "i", 13);
    \u0275\u0275text(29, " Theme Settings");
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, SettingsComponent_ng_template_30_Template, 24, 11, "ng-template", 9);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 14);
    \u0275\u0275element(32, "div", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const nav_r3 = \u0275\u0275reference(5);
    \u0275\u0275property("title", "Settings");
    \u0275\u0275advance(32);
    \u0275\u0275property("ngbNavOutlet", nav_r3);
  }
}, dependencies: [SharedModule, PageHeaderComponent, NgbModule, NgbNavContent, NgbNav, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet, NgSelectModule, NgSelectComponent, NgOptionComponent, RouterModule, FlatpickrModule, FlatpickrDirective, ColorPickerModule, ColorPickerDirective, NgxColorsModule, NgxColorsComponent, NgxColorsTriggerDirective, FormsModule, NgControlStatus, NgModel, ReactiveFormsModule] });
var SettingsComponent = _SettingsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent" });
})();
export {
  SettingsComponent
};
//# sourceMappingURL=settings.component-2YNKGZIG.js.map
