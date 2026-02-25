import {
  SuperAdminService
} from "./chunk-RUA4VPWV.js";
import "./chunk-7WSVHSJD.js";
import {
  MatInput,
  MatPaginator,
  MatSort,
  MatSortHeader,
  MaterialModuleModule,
  SharedModule
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
import "./chunk-ZSUERINM.js";
import {
  NgbDropdown,
  NgbDropdownItem,
  NgbDropdownMenu,
  NgbDropdownToggle,
  NgbModal,
  NgbModule,
  NgbOffcanvas,
  NgbTooltip
} from "./chunk-47LBZ5ZO.js";
import {
  RouterModule,
  ɵsetClassDebugInfo,
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
  ɵɵviewQuery
} from "./chunk-S4VETAKW.js";
import "./chunk-IRPX6T6P.js";
import "./chunk-AJH3MT3R.js";

// src/app/componets/dashbord/super-admin/companies/companies.component.ts
var _c0 = () => [8, 10, 25, 100];
function CompaniesComponent_th_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 48);
    \u0275\u0275text(1, " #ID ");
    \u0275\u0275elementEnd();
  }
}
function CompaniesComponent_td_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r2.id, " ");
  }
}
function CompaniesComponent_th_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 48);
    \u0275\u0275text(1, " CompanyName ");
    \u0275\u0275elementEnd();
  }
}
function CompaniesComponent_td_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 49)(1, "a", 50)(2, "span", 51);
    \u0275\u0275element(3, "img", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 53)(5, "h6", 54);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", row_r3.img, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r3.name);
  }
}
function CompaniesComponent_th_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 48);
    \u0275\u0275text(1, " Email ");
    \u0275\u0275elementEnd();
  }
}
function CompaniesComponent_td_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r4.email, " ");
  }
}
function CompaniesComponent_th_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 48);
    \u0275\u0275text(1, " Package ");
    \u0275\u0275elementEnd();
  }
}
function CompaniesComponent_td_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "a", 55)(3, "span", 56);
    \u0275\u0275text(4, "Change");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r5.package, " ");
  }
}
function CompaniesComponent_th_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 48);
    \u0275\u0275text(1, " RegisterDate ");
    \u0275\u0275elementEnd();
  }
}
function CompaniesComponent_td_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r6.registeredBy, " ");
  }
}
function CompaniesComponent_th_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 48);
    \u0275\u0275text(1, " Status ");
    \u0275\u0275elementEnd();
  }
}
function CompaniesComponent_td_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 49)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("badge bg-", row_r7.status, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r7.statusText, "");
  }
}
function CompaniesComponent_th_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 57);
    \u0275\u0275text(1, " Action ");
    \u0275\u0275elementEnd();
  }
}
function CompaniesComponent_td_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 49)(1, "div", 58)(2, "a", 59);
    \u0275\u0275listener("click", function CompaniesComponent_td_71_Template_a_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r8 = \u0275\u0275nextContext();
      const offcanvas_r10 = \u0275\u0275reference(83);
      return \u0275\u0275resetView(ctx_r8.openOffcanvas(offcanvas_r10));
    });
    \u0275\u0275element(3, "i", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 61);
    \u0275\u0275listener("click", function CompaniesComponent_td_71_Template_a_click_4_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r8 = \u0275\u0275nextContext();
      const editContent_r11 = \u0275\u0275reference(79);
      return \u0275\u0275resetView(ctx_r8.edit(editContent_r11));
    });
    \u0275\u0275element(5, "i", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 63);
    \u0275\u0275listener("click", function CompaniesComponent_td_71_Template_a_click_6_listener() {
      const row_r12 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.removeData(row_r12.id));
    });
    \u0275\u0275element(7, "i", 64);
    \u0275\u0275elementEnd()()();
  }
}
function CompaniesComponent_tr_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 65);
  }
}
function CompaniesComponent_tr_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 66);
  }
}
function CompaniesComponent_tr_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 67)(1, "td", 68);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const input_r13 = \u0275\u0275reference(48);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1('No data matching the filter "', input_r13.value, '"');
  }
}
function CompaniesComponent_ng_template_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69)(1, "h5", 70);
    \u0275\u0275text(2, "Add New Company");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 71);
    \u0275\u0275listener("click", function CompaniesComponent_ng_template_76_Template_button_click_3_listener() {
      const modal_r15 = \u0275\u0275restoreView(_r14).$implicit;
      return \u0275\u0275resetView(modal_r15.dismiss("Cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 72)(5, "div", 13)(6, "label", 14);
    \u0275\u0275text(7, "Upload Company Logo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 13);
    \u0275\u0275element(9, "label", 73)(10, "input", 74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 8)(12, "div", 75)(13, "div", 13)(14, "label", 14);
    \u0275\u0275text(15, "Company Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 76);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 75)(18, "div", 13)(19, "label", 14);
    \u0275\u0275text(20, "Company Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 77);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 8)(23, "div", 75)(24, "div", 13)(25, "label", 14);
    \u0275\u0275text(26, "Company Ph:Number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 78);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 75)(29, "div", 13)(30, "label", 14);
    \u0275\u0275text(31, "Company Website");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "input", 79);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 13)(34, "label", 14);
    \u0275\u0275text(35, "Company Address");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "textarea", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 13)(38, "label", 14);
    \u0275\u0275text(39, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(40, "input", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 8)(42, "div", 75)(43, "div", 13)(44, "label", 14);
    \u0275\u0275text(45, "Select Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "ng-select", 82)(47, "ng-option", 17);
    \u0275\u0275text(48, "US DOllar(USD)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "ng-option", 18);
    \u0275\u0275text(50, "European Euro (EUR)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "ng-option", 19);
    \u0275\u0275text(52, "Japanese Yen (JPY)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "ng-option", 20);
    \u0275\u0275text(54, "British Pound (GBP)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "ng-option", 21);
    \u0275\u0275text(56, "Swiss Franc (CHF)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "ng-option", 83);
    \u0275\u0275text(58, "Canadian Dollar (CAD)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "ng-option", 84);
    \u0275\u0275text(60, "Australian/New Zealand Dollar (AUD/NZD)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "ng-option", 85);
    \u0275\u0275text(62, "South African Rand (ZAR)");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(63, "div", 75)(64, "div", 13)(65, "label", 14);
    \u0275\u0275text(66, "Select Language");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "ng-select", 86)(68, "ng-option", 87);
    \u0275\u0275text(69, "Afrikanns");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "ng-option", 88);
    \u0275\u0275text(71, "Albanian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "ng-option", 89);
    \u0275\u0275text(73, "Arabic");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "ng-option", 90);
    \u0275\u0275text(75, "Armenian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "ng-option", 91);
    \u0275\u0275text(77, "Basque");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "ng-option", 92);
    \u0275\u0275text(79, "Bengali");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "ng-option", 93);
    \u0275\u0275text(81, "Bulgarian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "ng-option", 94);
    \u0275\u0275text(83, "Catalan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "ng-option", 95);
    \u0275\u0275text(85, "Cambodian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "ng-option", 96);
    \u0275\u0275text(87, "Chinese (Mandarin)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "ng-option", 97);
    \u0275\u0275text(89, "Croation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "ng-option", 98);
    \u0275\u0275text(91, "Czech");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "ng-option", 99);
    \u0275\u0275text(93, "Danish");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "ng-option", 100);
    \u0275\u0275text(95, "Dutch");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "ng-option", 101);
    \u0275\u0275text(97, "English");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "ng-option", 102);
    \u0275\u0275text(99, "Estonian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "ng-option", 103);
    \u0275\u0275text(101, "Fiji");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "ng-option", 104);
    \u0275\u0275text(103, "Finnish");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "ng-option", 105);
    \u0275\u0275text(105, "French");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "ng-option", 106);
    \u0275\u0275text(107, "Georgian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "ng-option", 107);
    \u0275\u0275text(109, "German");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "ng-option", 108);
    \u0275\u0275text(111, "Greek");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "ng-option", 109);
    \u0275\u0275text(113, "Gujarati");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "ng-option", 110);
    \u0275\u0275text(115, "Hebrew");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "ng-option", 111);
    \u0275\u0275text(117, "Hindi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "ng-option", 112);
    \u0275\u0275text(119, "Hungarian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "ng-option", 113);
    \u0275\u0275text(121, "Icelandic");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(122, "ng-option", 114);
    \u0275\u0275text(123, "Indonesian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "ng-option", 115);
    \u0275\u0275text(125, "Irish");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "ng-option", 116);
    \u0275\u0275text(127, "Italian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(128, "ng-option", 117);
    \u0275\u0275text(129, "Japanese");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "ng-option", 118);
    \u0275\u0275text(131, "Javanese");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(132, "ng-option", 119);
    \u0275\u0275text(133, "Korean");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(134, "ng-option", 120);
    \u0275\u0275text(135, "Latin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(136, "ng-option", 121);
    \u0275\u0275text(137, "Latvian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(138, "ng-option", 122);
    \u0275\u0275text(139, "Lithuanian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(140, "ng-option", 123);
    \u0275\u0275text(141, "Macedonian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(142, "ng-option", 124);
    \u0275\u0275text(143, "Malay");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(144, "ng-option", 125);
    \u0275\u0275text(145, "Malayalam");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(146, "ng-option", 126);
    \u0275\u0275text(147, "Maltese");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(148, "ng-option", 127);
    \u0275\u0275text(149, "Maori");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(150, "ng-option", 128);
    \u0275\u0275text(151, "Marathi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(152, "ng-option", 129);
    \u0275\u0275text(153, "Mongolian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(154, "ng-option", 130);
    \u0275\u0275text(155, "Nepali");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(156, "ng-option", 131);
    \u0275\u0275text(157, "Norwegian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(158, "ng-option", 132);
    \u0275\u0275text(159, "Persian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(160, "ng-option", 133);
    \u0275\u0275text(161, "Polish");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(162, "ng-option", 134);
    \u0275\u0275text(163, "Portuguese");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(164, "ng-option", 135);
    \u0275\u0275text(165, "Punjabi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(166, "ng-option", 136);
    \u0275\u0275text(167, "Quechua");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(168, "ng-option", 137);
    \u0275\u0275text(169, "Romanian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(170, "ng-option", 138);
    \u0275\u0275text(171, "Russian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(172, "ng-option", 139);
    \u0275\u0275text(173, "Samoan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(174, "ng-option", 140);
    \u0275\u0275text(175, "Serbian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(176, "ng-option", 141);
    \u0275\u0275text(177, "Slovak");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(178, "ng-option", 142);
    \u0275\u0275text(179, "Slovenian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(180, "ng-option", 143);
    \u0275\u0275text(181, "Spanish");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(182, "ng-option", 144);
    \u0275\u0275text(183, "Swahili");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(184, "ng-option", 145);
    \u0275\u0275text(185, "Swedish ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(186, "ng-option", 146);
    \u0275\u0275text(187, "Tamil");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(188, "ng-option", 147);
    \u0275\u0275text(189, "Tatar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(190, "ng-option", 148);
    \u0275\u0275text(191, "Telugu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(192, "ng-option", 149);
    \u0275\u0275text(193, "Thai");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(194, "ng-option", 150);
    \u0275\u0275text(195, "Tibetan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(196, "ng-option", 151);
    \u0275\u0275text(197, "Tonga");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(198, "ng-option", 152);
    \u0275\u0275text(199, "Turkish");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(200, "ng-option", 153);
    \u0275\u0275text(201, "Ukranian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(202, "ng-option", 154);
    \u0275\u0275text(203, "Urdu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(204, "ng-option", 155);
    \u0275\u0275text(205, "Uzbek");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(206, "ng-option", 156);
    \u0275\u0275text(207, "Vietnamese");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(208, "ng-option", 157);
    \u0275\u0275text(209, "Welsh");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(210, "ng-option", 158);
    \u0275\u0275text(211, "Xhosa");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(212, "div", 159)(213, "label", 160);
    \u0275\u0275text(214, "Status :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(215, "div", 161);
    \u0275\u0275element(216, "input", 162);
    \u0275\u0275elementStart(217, "label", 163);
    \u0275\u0275text(218, " Active ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(219, "div", 164);
    \u0275\u0275element(220, "input", 165);
    \u0275\u0275elementStart(221, "label", 166);
    \u0275\u0275text(222, " InActive ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(223, "div", 167)(224, "a", 168);
    \u0275\u0275listener("click", function CompaniesComponent_ng_template_76_Template_a_click_224_listener() {
      const modal_r15 = \u0275\u0275restoreView(_r14).$implicit;
      return \u0275\u0275resetView(modal_r15.dismiss("Cross click"));
    });
    \u0275\u0275text(225, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(226, "a", 169);
    \u0275\u0275listener("click", function CompaniesComponent_ng_template_76_Template_a_click_226_listener() {
      const modal_r15 = \u0275\u0275restoreView(_r14).$implicit;
      return \u0275\u0275resetView(modal_r15.dismiss("Cross click"));
    });
    \u0275\u0275text(227, "Sumbit");
    \u0275\u0275elementEnd()();
  }
}
function CompaniesComponent_ng_template_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69)(1, "h5", 70);
    \u0275\u0275text(2, "Edit Company");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 71);
    \u0275\u0275listener("click", function CompaniesComponent_ng_template_78_Template_button_click_3_listener() {
      const modal_r17 = \u0275\u0275restoreView(_r16).$implicit;
      return \u0275\u0275resetView(modal_r17.dismiss("Cross click"));
    });
    \u0275\u0275elementStart(4, "span", 170);
    \u0275\u0275text(5, "\xD7");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 72)(7, "div", 13)(8, "label", 14);
    \u0275\u0275text(9, "Upload Company Logo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 13);
    \u0275\u0275element(11, "input", 74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 8)(13, "div", 75)(14, "div", 13)(15, "label", 14);
    \u0275\u0275text(16, "Company Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 171);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 75)(19, "div", 13)(20, "label", 14);
    \u0275\u0275text(21, "Company Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 172);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 8)(24, "div", 75)(25, "div", 13)(26, "label", 14);
    \u0275\u0275text(27, "Company Ph:Number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "input", 173);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 75)(30, "div", 13)(31, "label", 14);
    \u0275\u0275text(32, "Company Website");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "input", 174);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 13)(35, "label", 14);
    \u0275\u0275text(36, "Company Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "textarea", 80);
    \u0275\u0275text(38, "4102 Masonic Hill Road Little Rock Arkansas-727212");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 13)(40, "label", 14);
    \u0275\u0275text(41, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(42, "input", 175);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 8)(44, "div", 75)(45, "div", 13)(46, "label", 14);
    \u0275\u0275text(47, "Select Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "ng-select", 82)(49, "ng-option", 29);
    \u0275\u0275text(50, "US DOllar(USD)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "ng-option", 18);
    \u0275\u0275text(52, "European Euro (EUR)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "ng-option", 19);
    \u0275\u0275text(54, "Japanese Yen (JPY)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "ng-option", 20);
    \u0275\u0275text(56, "British Pound (GBP)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "ng-option", 21);
    \u0275\u0275text(58, "Swiss Franc (CHF)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "ng-option", 83);
    \u0275\u0275text(60, "Canadian Dollar (CAD)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "ng-option", 84);
    \u0275\u0275text(62, "Australian/New Zealand Dollar (AUD/NZD)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "ng-option", 85);
    \u0275\u0275text(64, "South African Rand (ZAR)");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(65, "div", 75)(66, "div", 13)(67, "label", 14);
    \u0275\u0275text(68, "Select Language");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "ng-select", 86)(70, "ng-option", 87);
    \u0275\u0275text(71, "Afrikanns");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "ng-option", 88);
    \u0275\u0275text(73, "Albanian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "ng-option", 89);
    \u0275\u0275text(75, "Arabic");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "ng-option", 90);
    \u0275\u0275text(77, "Armenian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "ng-option", 91);
    \u0275\u0275text(79, "Basque");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "ng-option", 92);
    \u0275\u0275text(81, "Bengali");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "ng-option", 93);
    \u0275\u0275text(83, "Bulgarian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "ng-option", 94);
    \u0275\u0275text(85, "Catalan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "ng-option", 95);
    \u0275\u0275text(87, "Cambodian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "ng-option", 96);
    \u0275\u0275text(89, "Chinese (Mandarin)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "ng-option", 97);
    \u0275\u0275text(91, "Croation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "ng-option", 98);
    \u0275\u0275text(93, "Czech");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "ng-option", 99);
    \u0275\u0275text(95, "Danish");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "ng-option", 100);
    \u0275\u0275text(97, "Dutch");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "ng-option", 176);
    \u0275\u0275text(99, "English");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "ng-option", 102);
    \u0275\u0275text(101, "Estonian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "ng-option", 103);
    \u0275\u0275text(103, "Fiji");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "ng-option", 104);
    \u0275\u0275text(105, "Finnish");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "ng-option", 105);
    \u0275\u0275text(107, "French");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "ng-option", 106);
    \u0275\u0275text(109, "Georgian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "ng-option", 107);
    \u0275\u0275text(111, "German");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "ng-option", 108);
    \u0275\u0275text(113, "Greek");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "ng-option", 109);
    \u0275\u0275text(115, "Gujarati");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "ng-option", 110);
    \u0275\u0275text(117, "Hebrew");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "ng-option", 111);
    \u0275\u0275text(119, "Hindi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "ng-option", 112);
    \u0275\u0275text(121, "Hungarian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(122, "ng-option", 113);
    \u0275\u0275text(123, "Icelandic");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "ng-option", 114);
    \u0275\u0275text(125, "Indonesian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "ng-option", 115);
    \u0275\u0275text(127, "Irish");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(128, "ng-option", 116);
    \u0275\u0275text(129, "Italian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "ng-option", 117);
    \u0275\u0275text(131, "Japanese");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(132, "ng-option", 118);
    \u0275\u0275text(133, "Javanese");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(134, "ng-option", 119);
    \u0275\u0275text(135, "Korean");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(136, "ng-option", 120);
    \u0275\u0275text(137, "Latin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(138, "ng-option", 121);
    \u0275\u0275text(139, "Latvian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(140, "ng-option", 122);
    \u0275\u0275text(141, "Lithuanian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(142, "ng-option", 123);
    \u0275\u0275text(143, "Macedonian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(144, "ng-option", 124);
    \u0275\u0275text(145, "Malay");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(146, "ng-option", 125);
    \u0275\u0275text(147, "Malayalam");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(148, "ng-option", 126);
    \u0275\u0275text(149, "Maltese");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(150, "ng-option", 127);
    \u0275\u0275text(151, "Maori");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(152, "ng-option", 128);
    \u0275\u0275text(153, "Marathi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(154, "ng-option", 129);
    \u0275\u0275text(155, "Mongolian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(156, "ng-option", 130);
    \u0275\u0275text(157, "Nepali");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(158, "ng-option", 131);
    \u0275\u0275text(159, "Norwegian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(160, "ng-option", 132);
    \u0275\u0275text(161, "Persian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(162, "ng-option", 133);
    \u0275\u0275text(163, "Polish");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(164, "ng-option", 134);
    \u0275\u0275text(165, "Portuguese");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(166, "ng-option", 135);
    \u0275\u0275text(167, "Punjabi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(168, "ng-option", 136);
    \u0275\u0275text(169, "Quechua");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(170, "ng-option", 137);
    \u0275\u0275text(171, "Romanian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(172, "ng-option", 138);
    \u0275\u0275text(173, "Russian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(174, "ng-option", 139);
    \u0275\u0275text(175, "Samoan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(176, "ng-option", 140);
    \u0275\u0275text(177, "Serbian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(178, "ng-option", 141);
    \u0275\u0275text(179, "Slovak");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(180, "ng-option", 142);
    \u0275\u0275text(181, "Slovenian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(182, "ng-option", 143);
    \u0275\u0275text(183, "Spanish");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(184, "ng-option", 144);
    \u0275\u0275text(185, "Swahili");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(186, "ng-option", 145);
    \u0275\u0275text(187, "Swedish ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(188, "ng-option", 146);
    \u0275\u0275text(189, "Tamil");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(190, "ng-option", 147);
    \u0275\u0275text(191, "Tatar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(192, "ng-option", 148);
    \u0275\u0275text(193, "Telugu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(194, "ng-option", 149);
    \u0275\u0275text(195, "Thai");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(196, "ng-option", 150);
    \u0275\u0275text(197, "Tibetan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(198, "ng-option", 151);
    \u0275\u0275text(199, "Tonga");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(200, "ng-option", 152);
    \u0275\u0275text(201, "Turkish");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(202, "ng-option", 153);
    \u0275\u0275text(203, "Ukranian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(204, "ng-option", 177);
    \u0275\u0275text(205, "USA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(206, "ng-option", 154);
    \u0275\u0275text(207, "Urdu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(208, "ng-option", 155);
    \u0275\u0275text(209, "Uzbek");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(210, "ng-option", 156);
    \u0275\u0275text(211, "Vietnamese");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(212, "ng-option", 157);
    \u0275\u0275text(213, "Welsh");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(214, "ng-option", 158);
    \u0275\u0275text(215, "Xhosa");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(216, "div", 159)(217, "label", 160);
    \u0275\u0275text(218, "Status :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(219, "div", 161);
    \u0275\u0275element(220, "input", 178);
    \u0275\u0275elementStart(221, "label", 179);
    \u0275\u0275text(222, " Active ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(223, "div", 164);
    \u0275\u0275element(224, "input", 180);
    \u0275\u0275elementStart(225, "label", 181);
    \u0275\u0275text(226, " InActive ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(227, "div", 167)(228, "div", 182)(229, "a", 183);
    \u0275\u0275listener("click", function CompaniesComponent_ng_template_78_Template_a_click_229_listener() {
      const modal_r17 = \u0275\u0275restoreView(_r16).$implicit;
      return \u0275\u0275resetView(modal_r17.dismiss("Cross click"));
    });
    \u0275\u0275text(230, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(231, "a", 169);
    \u0275\u0275listener("click", function CompaniesComponent_ng_template_78_Template_a_click_231_listener() {
      const modal_r17 = \u0275\u0275restoreView(_r16).$implicit;
      return \u0275\u0275resetView(modal_r17.dismiss("Cross click"));
    });
    \u0275\u0275text(232, "Update");
    \u0275\u0275elementEnd()()();
  }
}
function CompaniesComponent_ng_template_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69)(1, "h5", 70);
    \u0275\u0275text(2, "Change Package");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 71);
    \u0275\u0275listener("click", function CompaniesComponent_ng_template_80_Template_button_click_3_listener() {
      const modal_r19 = \u0275\u0275restoreView(_r18).$implicit;
      return \u0275\u0275resetView(modal_r19.dismiss("Cross click"));
    });
    \u0275\u0275elementStart(4, "span", 170);
    \u0275\u0275text(5, "\xD7");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 72)(7, "div", 13)(8, "label", 14);
    \u0275\u0275text(9, "Package");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ng-select", 184)(11, "ng-option", 17);
    \u0275\u0275text(12, "Free");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "ng-option", 18);
    \u0275\u0275text(14, "Basic");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "ng-option", 19);
    \u0275\u0275text(16, "Premium");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "ng-option", 20);
    \u0275\u0275text(18, "Advanced");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "ng-option", 21);
    \u0275\u0275text(20, "Enterprise");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 13)(22, "label", 14);
    \u0275\u0275text(23, "Package Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "ng-select", 184)(25, "ng-option", 17);
    \u0275\u0275text(26, "Monthly");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "ng-option", 18);
    \u0275\u0275text(28, "Yearly");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 13)(30, "label", 14);
    \u0275\u0275text(31, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "input", 185);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 13)(34, "label", 14);
    \u0275\u0275text(35, "Pay Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 186);
    \u0275\u0275element(37, "input", 187);
    \u0275\u0275elementStart(38, "div", 188)(39, "div", 189);
    \u0275\u0275element(40, "i", 190);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(41, "div", 13)(42, "label", 14);
    \u0275\u0275text(43, "Next Pay Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 186);
    \u0275\u0275element(45, "input", 187);
    \u0275\u0275elementStart(46, "div", 188)(47, "div", 189);
    \u0275\u0275element(48, "i", 190);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(49, "div", 13)(50, "label", 14);
    \u0275\u0275text(51, "Licence Expires On");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 186);
    \u0275\u0275element(53, "input", 187);
    \u0275\u0275elementStart(54, "div", 188)(55, "div", 189);
    \u0275\u0275element(56, "i", 190);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(57, "div", 167)(58, "div", 182)(59, "a", 183);
    \u0275\u0275listener("click", function CompaniesComponent_ng_template_80_Template_a_click_59_listener() {
      const modal_r19 = \u0275\u0275restoreView(_r18).$implicit;
      return \u0275\u0275resetView(modal_r19.dismiss("Cross click"));
    });
    \u0275\u0275text(60, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "a", 169);
    \u0275\u0275listener("click", function CompaniesComponent_ng_template_80_Template_a_click_61_listener() {
      const modal_r19 = \u0275\u0275restoreView(_r18).$implicit;
      return \u0275\u0275resetView(modal_r19.dismiss("Cross click"));
    });
    \u0275\u0275text(62, "Update");
    \u0275\u0275elementEnd()()();
  }
}
function CompaniesComponent_ng_template_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 191)(1, "h5", 192);
    \u0275\u0275text(2, "Company Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 193)(4, "a", 194);
    \u0275\u0275text(5, "Edit Company");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 195);
    \u0275\u0275element(7, "i", 196);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ul", 197)(9, "li")(10, "a", 198);
    \u0275\u0275element(11, "i", 199);
    \u0275\u0275text(12, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "li")(14, "a", 198);
    \u0275\u0275element(15, "i", 200);
    \u0275\u0275text(16, "Add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "li")(18, "a", 198);
    \u0275\u0275element(19, "i", 201);
    \u0275\u0275text(20, "Send");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "li")(22, "a", 198);
    \u0275\u0275element(23, "i", 202);
    \u0275\u0275text(24, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "li")(26, "a", 198);
    \u0275\u0275element(27, "i", 203);
    \u0275\u0275text(28, "Remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "li")(30, "a", 198);
    \u0275\u0275element(31, "i", 204);
    \u0275\u0275text(32, "More");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "a", 205);
    \u0275\u0275listener("click", function CompaniesComponent_ng_template_82_Template_a_click_33_listener() {
      const offcanvas_r21 = \u0275\u0275restoreView(_r20).$implicit;
      return \u0275\u0275resetView(offcanvas_r21.dismiss("cross click"));
    });
    \u0275\u0275element(34, "i", 206);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 207)(36, "div", 208)(37, "div", 209)(38, "div", 11)(39, "div", 210)(40, "span", 211);
    \u0275\u0275element(41, "img", 212);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "h6", 213);
    \u0275\u0275text(43, "Abcd Pvt Ltd");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 8)(45, "div", 75)(46, "div", 214)(47, "label", 215);
    \u0275\u0275text(48, "Company Email:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "p", 216);
    \u0275\u0275text(50, "abcd@gmail.com");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 214)(52, "label", 215);
    \u0275\u0275text(53, "Company Website:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "p", 216);
    \u0275\u0275text(55, "www.abcd.com");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 214)(57, "label", 215);
    \u0275\u0275text(58, " Currency:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "p", 216);
    \u0275\u0275text(60, "US DOllar(USD)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(61, "div", 75)(62, "div", 214)(63, "label", 215);
    \u0275\u0275text(64, "Company Number:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "p", 216);
    \u0275\u0275text(66, "+6325147890");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 214)(68, "label", 215);
    \u0275\u0275text(69, "Password:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "p", 216);
    \u0275\u0275text(71, ".......");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 214)(73, "label", 215);
    \u0275\u0275text(74, " Language:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "p", 216);
    \u0275\u0275text(76, "English");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(77, "div", 217)(78, "label", 215);
    \u0275\u0275text(79, "Company Address:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "p", 216);
    \u0275\u0275text(81, "4102 Masonic Hill Road Little Rock Arkansas-727212");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "div", 218)(83, "label", 215);
    \u0275\u0275text(84, "Status:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "div", 219)(86, "span", 220);
    \u0275\u0275text(87, "Active");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(88, "div", 221)(89, "div", 11)(90, "h5", 222);
    \u0275\u0275text(91, "Package Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "div", 223)(93, "table", 224)(94, "tbody")(95, "tr")(96, "td")(97, "label", 215);
    \u0275\u0275text(98, "Package Name");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(99, "td");
    \u0275\u0275text(100, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "td");
    \u0275\u0275text(102, "Basic");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(103, "tr")(104, "td")(105, "label", 215);
    \u0275\u0275text(106, "Package Type");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(107, "td");
    \u0275\u0275text(108, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "td");
    \u0275\u0275text(110, "Monthly");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(111, "tr")(112, "td")(113, "label", 215);
    \u0275\u0275text(114, "Price");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(115, "td");
    \u0275\u0275text(116, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "td");
    \u0275\u0275text(118, "$98.00");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(119, "tr")(120, "td")(121, "label", 215);
    \u0275\u0275text(122, "Register Date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(123, "td");
    \u0275\u0275text(124, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(125, "td");
    \u0275\u0275text(126, "12-01-2021");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(127, "tr")(128, "td")(129, "label", 215);
    \u0275\u0275text(130, "Licence Expires On");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(131, "td");
    \u0275\u0275text(132, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(133, "td");
    \u0275\u0275text(134, "12-02-2021");
    \u0275\u0275elementEnd()()()()()()()()();
  }
}
var _CompaniesComponent = class _CompaniesComponent {
  constructor(modalService, offcanvasService, superAdminService) {
    this.modalService = modalService;
    this.offcanvasService = offcanvasService;
    this.superAdminService = superAdminService;
    this.displayedColumns = ["ID", "CompanyName", "Email", "Package", "RegisterDate", "Status", "Action"];
    this.dataSource = new MatTableDataSource([]);
  }
  openOffcanvas(content) {
    try {
      return this.offcanvasService.open(content, {
        ariaLabelledBy: "offcanvas-basic-title",
        position: "end",
        panelClass: "company-details"
      });
    } catch (error) {
      console.error("Error opening offcanvas:", error);
      return null;
    }
  }
  ngOnInit() {
    this.loadCompanies();
  }
  loadCompanies() {
    this.superAdminService.getCompanies().subscribe((companies) => {
      this.dataSource.data = companies;
    });
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
    console.log("Inactivando company with ID:", item);
  }
  edit(editContent) {
    this.modalService.open(editContent, { windowClass: "modalCusSty", size: "lg" });
  }
  change(changeContent) {
    this.modalService.open(changeContent, { windowClass: "modalCusSty" });
  }
  open(content) {
    this.modalService.open(content, { windowClass: "modalCusSty", size: "lg" });
  }
};
_CompaniesComponent.\u0275fac = function CompaniesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CompaniesComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(NgbOffcanvas), \u0275\u0275directiveInject(SuperAdminService));
};
_CompaniesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompaniesComponent, selectors: [["app-companies"]], viewQuery: function CompaniesComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(MatPaginator, 5);
    \u0275\u0275viewQuery(MatSort, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
  }
}, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 84, vars: 5, consts: [["input", ""], ["content", ""], ["editContent", ""], ["changeContent", ""], ["offcanvas", ""], [1, "page-header", "d-xl-flex", "d-block"], [1, "page-leftheader"], [1, "page-title"], [1, "row"], [1, "col-md-12"], [1, "card", "custom-card"], [1, "card-body"], [1, "col-md-3"], [1, "form-group"], [1, "form-label"], ["data-trigger", "", "placeholder", "Select Package", 1, "form-control", "custom-select", "p-0"], ["value", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], [1, "card-body", "border-top", "pt-0"], [1, "row", "my-3", "px-3"], [1, "col-lg-6"], [1, "d-flex", "align-items-center"], [1, "d-flex", "ms-2", "mx-2"], [1, "form-group", "mt-2"], ["name", "quantity", "id", "select-countries17", "placeholder", "1", "data-trigger", "", 1, "form-control", "wd-150", "p-0"], ["value", "1", "selected", ""], [1, "float-end"], ["type", "text", "placeholder", "search", "matInput", "", 1, "form-control", 3, "keyup"], [1, "table-responsive", "company-table"], ["mat-table", "", "matSort", "", "id", "company-list", 1, "table", "table-vcenter", "text-nowrap", "table-bordered", "border-bottom", 3, "dataSource"], ["matColumnDef", "ID"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "CompanyName"], ["matColumnDef", "Email"], ["matColumnDef", "Package"], ["matColumnDef", "RegisterDate"], ["matColumnDef", "Status"], ["matColumnDef", "Action"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["aria-label", "Select page of users", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", ".offcanvasRight", 1, "d-flex", "sidebarmodal-collpase"], [1, "avatar", "avatar-lg", "me-2"], ["alt", "img", 3, "src"], [1, "mt-0", "mt-sm-4", "d-block"], [1, "mb-0", "fs-16"], ["href", "javascript:;"], ["ngbTooltip", "Change", 1, "badge", "bg-primary", "fs-10"], ["mat-header-cell", ""], [1, "d-flex"], ["placement", "top", "ngbTooltip", "View Task", 1, "action-btns1", 3, "click"], [1, "fe", "fe-eye", "text-primary"], ["href", "javascript:;", "placement", "top", "ngbTooltip", "View", 1, "action-btns1", 3, "click"], [1, "fe", "fe-edit-2", "text-success"], ["href", "javascript:;", "placement", "top", "ngbTooltip", "Delete", 1, "action-btns1", 3, "click"], [1, "fe", "fe-trash-2", "text-danger"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], ["for", "form-label", 1, "form-label"], ["type", "file", 1, "form-control"], [1, "col-md-6"], ["placeholder", "Name", "value", "", 1, "form-control"], ["placeholder", "Email", "value", "", 1, "form-control"], ["placeholder", "Number", "value", "", 1, "form-control"], ["placeholder", "Website", "value", "", 1, "form-control"], ["rows", "2", "placeholder", "something text here...", 1, "form-control"], ["type", "password", "placeholder", "Password", "value", "", 1, "form-control"], ["placeholder", "Choose Currency", 1, "form-control", "custom-select", "p-0"], ["value", "6"], ["value", "7"], ["value", "8"], ["placeholder", "Choose a Language...", 1, "form-control", "custom-select", "p-0"], ["value", "AF"], ["value", "SQ"], ["value", "AR"], ["value", "HY"], ["value", "EU"], ["value", "BN"], ["value", "BG"], ["value", "CA"], ["value", "KM"], ["value", "ZH"], ["value", "HR"], ["value", "CS"], ["value", "DA"], ["value", "NL"], ["value", "EN"], ["value", "ET"], ["value", "FJ"], ["value", "FI"], ["value", "FR"], ["value", "KA"], ["value", "DE"], ["value", "EL"], ["value", "GU"], ["value", "HE"], ["value", "HI"], ["value", "HU"], ["value", "IS"], ["value", "ID"], ["value", "GA"], ["value", "IT"], ["value", "JA"], ["value", "JW"], ["value", "KO"], ["value", "LA"], ["value", "LV"], ["value", "LT"], ["value", "MK"], ["value", "MS"], ["value", "ML"], ["value", "MT"], ["value", "MI"], ["value", "MR"], ["value", "MN"], ["value", "NE"], ["value", "NO"], ["value", "FA"], ["value", "PL"], ["value", "PT"], ["value", "PA"], ["value", "QU"], ["value", "RO"], ["value", "RU"], ["value", "SM"], ["value", "SR"], ["value", "SK"], ["value", "SL"], ["value", "ES"], ["value", "SW"], ["value", "SV"], ["value", "TA"], ["value", "TT"], ["value", "TE"], ["value", "TH"], ["value", "BO"], ["value", "TO"], ["value", "TR"], ["value", "UK"], ["value", "UR"], ["value", "UZ"], ["value", "VI"], ["value", "CY"], ["value", "XH"], [1, "custom-controls-stacked", "d-md-flex", "mt-3"], [1, "form-label", "me-5"], [1, "form-check", "mb-0", "me-4"], ["type", "radio", "name", "flexRadioDefault1", "id", "flexRadioDefault11", 1, "form-check-input"], ["for", "flexRadioDefault11", 1, "form-check-label"], [1, "form-check", "mb-0"], ["type", "radio", "name", "flexRadioDefault1", "id", "flexRadioDefault12", 1, "form-check-input"], ["for", "flexRadioDefault12", 1, "form-check-label"], [1, "modal-footer"], ["href", "javascript:;", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-danger", "me-2", 3, "click"], ["href", "javascript:;", 1, "btn", "btn-success", 3, "click"], [1, "nav-link"], ["placeholder", "Name", "value", "Abcd Pvt Ltd", 1, "form-control"], ["placeholder", "Email", "value", "abcd@gmail.com", 1, "form-control"], ["placeholder", "Number", "value", "+6325147890", 1, "form-control"], ["placeholder", "Website", "value", "www.abcd.com", 1, "form-control"], ["type", "password", "placeholder", "Password", "value", "abcd123", 1, "form-control"], ["value", "EN", "selected", ""], ["value", "USA"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault1", 1, "form-check-input"], ["for", "flexRadioDefault1", 1, "form-check-label"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault2", 1, "form-check-input"], ["for", "flexRadioDefault2", 1, "form-check-label"], [1, "ms-auto"], ["href", "javascript:;", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-primary", "me-2", 3, "click"], ["data-placeholder", "Select Package", 1, "form-control", "custom-select", "p-0"], ["placeholder", "$0.00", "value", "", 1, "form-control"], [1, "input-group"], ["placeholder", "DD-MM-YYY", "type", "text", 1, "form-control", "fc-datepicker"], [1, "input-group-append"], [1, "input-group-text"], [1, "fe", "fe-calendar"], [1, "offcanvas-header", "border-bottom", "border-block-end-dashed", "flex-wrap", "gap-1"], ["id", "offcanvasRightLabel2", 1, "offcanvas-title"], ["ngbDropdown", "", 1, "ms-auto"], ["href", "javascript:void(0);", 1, "btn", "btn-success", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "ngbDropdownToggle", "", "aria-haspopup", "true", "aria-expanded", "false", 1, "action-btns", "align-middle", "no-caret"], [1, "fe", "fe-more-horizontal", "mt-1"], ["role", "menu", "ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript:void(0);", "ngbDropdownItem", "", 1, "dropdown-item"], [1, "fe", "fe-eye", "me-2"], [1, "fe", "fe-plus-circle", "me-2"], [1, "fe", "fe-send", "me-2"], [1, "fe", "fe-edit-2", "me-2"], [1, "fe", "fe-trash-2", "me-2"], [1, "fe", "fe-settings", "me-2"], ["href", "javascript:void(0);", "data-bs-dismiss", "offcanvas", 1, "action-btns", "dismiss", "align-middle", 3, "click"], [1, "fe", "fe-x", "mt-1"], [1, "offcanvas-body", "p-0"], [1, "row", "no-gutters", "border-bottom"], [1, "col-md-12", "col-xl-6", "p-3", "border-end"], [1, "mb-3"], [1, "avatar", "avatar-xl", "me-2"], ["src", "./assets/images/media/files/company/img1.png", "alt", "img"], [1, "mb-0", "fs-18", "mt-2"], [1, "mt-4"], [1, "form-label", "mb-0"], [1, "text-muted"], [1, "mt-3"], [1, "mt-3", "d-flex"], [1, "ms-1"], [1, "badge", "bg-success"], [1, "col-md-12", "col-xl-6", "p-3"], [1, "mb-4", "fw-semibold"], [1, "table-responsive"], [1, "table", "mb-0", "table-borderless", "me-0"]], template: function CompaniesComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "h4", 7);
    \u0275\u0275text(3, "Companies");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "div", 8)(5, "div", 9)(6, "div", 10)(7, "div", 11)(8, "div", 8)(9, "div", 12)(10, "div", 13)(11, "label", 14);
    \u0275\u0275text(12, "Package");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "ng-select", 15)(14, "ng-option", 16);
    \u0275\u0275text(15, "Select Package");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "ng-option", 17);
    \u0275\u0275text(17, "Free");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "ng-option", 18);
    \u0275\u0275text(19, "Basic");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "ng-option", 19);
    \u0275\u0275text(21, "Premium");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "ng-option", 20);
    \u0275\u0275text(23, "Advanced");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "ng-option", 21);
    \u0275\u0275text(25, "Enterprise");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "div", 22)(27, "div", 23)(28, "div", 24)(29, "div", 25)(30, "span");
    \u0275\u0275text(31, "Show");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 26)(33, "div", 27)(34, "ng-select", 28)(35, "ng-option", 29);
    \u0275\u0275text(36, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "ng-option", 18);
    \u0275\u0275text(38, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "ng-option", 19);
    \u0275\u0275text(40, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "ng-option", 20);
    \u0275\u0275text(42, "4");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(43, "span");
    \u0275\u0275text(44, "entries");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 24)(46, "div", 30)(47, "input", 31, 0);
    \u0275\u0275listener("keyup", function CompaniesComponent_Template_input_keyup_47_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.applyFilter($event));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(49, "div", 32)(50, "table", 33);
    \u0275\u0275elementContainerStart(51, 34);
    \u0275\u0275template(52, CompaniesComponent_th_52_Template, 2, 0, "th", 35)(53, CompaniesComponent_td_53_Template, 2, 1, "td", 36);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(54, 37);
    \u0275\u0275template(55, CompaniesComponent_th_55_Template, 2, 0, "th", 35)(56, CompaniesComponent_td_56_Template, 7, 2, "td", 36);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(57, 38);
    \u0275\u0275template(58, CompaniesComponent_th_58_Template, 2, 0, "th", 35)(59, CompaniesComponent_td_59_Template, 2, 1, "td", 36);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(60, 39);
    \u0275\u0275template(61, CompaniesComponent_th_61_Template, 2, 0, "th", 35)(62, CompaniesComponent_td_62_Template, 5, 1, "td", 36);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(63, 40);
    \u0275\u0275template(64, CompaniesComponent_th_64_Template, 2, 0, "th", 35)(65, CompaniesComponent_td_65_Template, 2, 1, "td", 36);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(66, 41);
    \u0275\u0275template(67, CompaniesComponent_th_67_Template, 2, 0, "th", 35)(68, CompaniesComponent_td_68_Template, 3, 4, "td", 36);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(69, 42);
    \u0275\u0275template(70, CompaniesComponent_th_70_Template, 2, 0, "th", 43)(71, CompaniesComponent_td_71_Template, 8, 0, "td", 36);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(72, CompaniesComponent_tr_72_Template, 1, 0, "tr", 44)(73, CompaniesComponent_tr_73_Template, 1, 0, "tr", 45)(74, CompaniesComponent_tr_74_Template, 3, 1, "tr", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275element(75, "mat-paginator", 47);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(76, CompaniesComponent_ng_template_76_Template, 228, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(78, CompaniesComponent_ng_template_78_Template, 233, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(80, CompaniesComponent_ng_template_80_Template, 63, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(82, CompaniesComponent_ng_template_82_Template, 135, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(50);
    \u0275\u0275property("dataSource", ctx.dataSource);
    \u0275\u0275advance(22);
    \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
    \u0275\u0275advance(2);
    \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(4, _c0));
  }
}, dependencies: [SharedModule, NgSelectModule, NgSelectComponent, NgOptionComponent, MaterialModuleModule, MatInput, MatPaginator, MatSort, MatSortHeader, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatNoDataRow, NgbModule, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, NgbTooltip, RouterModule] });
var CompaniesComponent = _CompaniesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompaniesComponent, { className: "CompaniesComponent" });
})();
export {
  CompaniesComponent
};
//# sourceMappingURL=companies.component-KD26NQL2.js.map
