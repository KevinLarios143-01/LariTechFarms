import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../../environments/environment';
import { Producto, CreateProductoDTO, UpdateProductoDTO, UpdateStockDTO, ProductosResponse, ProductosStats } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private apiUrl = `${environment.apiUrl}/v1/productos`;

  constructor(private http: HttpClient) {}

  getProductos(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key]);
        }
      });
    }
    return this.http.get<ProductosResponse>(this.apiUrl, { params: httpParams });
  }

  getProductoById(id: number): Observable<{ success: boolean; data: Producto }> {
    return this.http.get<{ success: boolean; data: Producto }>(`${this.apiUrl}/${id}`);
  }

  createProducto(producto: CreateProductoDTO): Observable<{ success: boolean; message: string; data: Producto }> {
    return this.http.post<{ success: boolean; message: string; data: Producto }>(this.apiUrl, producto);
  }

  updateProducto(id: number, producto: UpdateProductoDTO): Observable<{ success: boolean; message: string; data: Producto }> {
    return this.http.put<{ success: boolean; message: string; data: Producto }>(`${this.apiUrl}/${id}`, producto);
  }

  updateStock(id: number, stockData: UpdateStockDTO): Observable<{ success: boolean; message: string; data: Producto }> {
    return this.http.patch<{ success: boolean; message: string; data: Producto }>(`${this.apiUrl}/${id}/stock`, stockData);
  }

  deleteProducto(id: number): Observable<{ success: boolean; message: string }> {
    return this.http.delete<{ success: boolean; message: string }>(`${this.apiUrl}/${id}`);
  }

  getCategorias(): Observable<any> {
    return this.http.get<{ success: boolean; data: string[] }>(`${this.apiUrl}/categorias`);
  }

  getStats(): Observable<{ success: boolean; data: ProductosStats }> {
    return this.http.get<{ success: boolean; data: ProductosStats }>(`${this.apiUrl}/estadisticas`);
  }
}