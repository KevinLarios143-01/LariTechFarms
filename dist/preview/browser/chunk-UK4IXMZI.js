import {
  environment
} from "./chunk-7WSVHSJD.js";
import {
  HttpClient,
  HttpParams,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-S4VETAKW.js";

// src/app/componets/dashbord/production-dashboard/productos/services/productos.service.ts
var _ProductosService = class _ProductosService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/v1/productos`;
  }
  getProductos(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key]);
        }
      });
    }
    return this.http.get(this.apiUrl, { params: httpParams });
  }
  getProductoById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  createProducto(producto) {
    return this.http.post(this.apiUrl, producto);
  }
  updateProducto(id, producto) {
    return this.http.put(`${this.apiUrl}/${id}`, producto);
  }
  updateStock(id, stockData) {
    return this.http.patch(`${this.apiUrl}/${id}/stock`, stockData);
  }
  deleteProducto(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  getCategorias() {
    return this.http.get(`${this.apiUrl}/categorias`);
  }
  getStats() {
    return this.http.get(`${this.apiUrl}/estadisticas`);
  }
};
_ProductosService.\u0275fac = function ProductosService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ProductosService)(\u0275\u0275inject(HttpClient));
};
_ProductosService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProductosService, factory: _ProductosService.\u0275fac, providedIn: "root" });
var ProductosService = _ProductosService;

export {
  ProductosService
};
//# sourceMappingURL=chunk-UK4IXMZI.js.map
