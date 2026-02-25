import {
  environment
} from "./chunk-7WSVHSJD.js";
import {
  HttpClient,
  map,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-S4VETAKW.js";

// src/app/shared/services/super-admin.service.ts
var _SuperAdminService = class _SuperAdminService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/v1`;
    this.pythonApiUrl = environment.pythonApiUrl;
  }
  getCompanies() {
    return this.http.get(`${this.apiUrl}/tenants`).pipe(map((response) => response.data.data.map((tenant) => this.mapTenantToCompany(tenant))));
  }
  mapTenantToCompany(tenant) {
    return {
      id: tenant.id,
      img: `./assets/images/media/files/company/img${tenant.id}.png`,
      name: tenant.nombre,
      email: tenant.correo,
      package: "Basic (Monthly)",
      packageBadge: "Change",
      registeredBy: new Date(tenant.fechaRegistro).toLocaleDateString(),
      statusText: tenant.activo ? "Active" : "Inactive",
      status: tenant.activo ? "success" : "danger",
      telefono: tenant.telefono,
      direccion: tenant.direccion,
      nit: tenant.nit,
      activo: tenant.activo
    };
  }
  deleteCompany(id) {
    return this.http.delete(`${this.apiUrl}/tenants/${id}`).pipe(map(() => true));
  }
  updateCompany(company) {
    const tenantData = {
      nombre: company.name,
      correo: company.email,
      telefono: company.telefono,
      direccion: company.direccion,
      nit: company.nit,
      activo: company.activo
    };
    return this.http.put(`${this.apiUrl}/tenants/${company.id}`, tenantData).pipe(map((tenant) => this.mapTenantToCompany(tenant)));
  }
  createCompany(company) {
    const tenantData = {
      nombre: company.name,
      correo: company.email,
      telefono: company.telefono,
      direccion: company.direccion,
      nit: company.nit,
      activo: company.activo ?? true
    };
    return this.http.post(`${this.apiUrl}/tenants`, tenantData).pipe(map((tenant) => this.mapTenantToCompany(tenant)));
  }
  getCompanyById(id) {
    return this.http.get(`${this.apiUrl}/tenants/${id}`).pipe(map((tenant) => this.mapTenantToCompany(tenant)));
  }
  getPlans() {
    return this.http.get(`${this.apiUrl}/planes`).pipe(map((response) => response.data.data));
  }
  createPlan(plan) {
    return this.http.post(`${this.apiUrl}/planes`, plan);
  }
  updatePlan(plan) {
    return this.http.put(`${this.apiUrl}/planes/${plan.id_plan}`, plan);
  }
  deletePlan(id) {
    return this.http.delete(`${this.apiUrl}/planes/${id}`).pipe(map(() => true));
  }
  getPlanById(id) {
    return this.http.get(`${this.apiUrl}/planes/${id}`);
  }
  getEnabledModules(tenantId) {
    return this.http.get(`${this.apiUrl}/modules/enableddos?idTenant=${tenantId}`);
  }
  updateModuleStatus(tenantId, moduleId, isEnabled) {
    return this.http.post(`${this.apiUrl}/modules/updatedos`, {
      idTenant: tenantId,
      idModule: moduleId,
      isEnabled
    });
  }
};
_SuperAdminService.\u0275fac = function SuperAdminService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SuperAdminService)(\u0275\u0275inject(HttpClient));
};
_SuperAdminService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SuperAdminService, factory: _SuperAdminService.\u0275fac, providedIn: "root" });
var SuperAdminService = _SuperAdminService;

export {
  SuperAdminService
};
//# sourceMappingURL=chunk-RUA4VPWV.js.map
