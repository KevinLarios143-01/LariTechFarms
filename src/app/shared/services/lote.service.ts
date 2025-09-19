import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Lote, LoteResponse } from '../interfaces/lote';

@Injectable({
  providedIn: 'root'
})
export class LoteService {
  private readonly apiUrl = `${environment.apiUrl}/v1/lotes`;

  constructor(private readonly http: HttpClient) {}

  getLotes(): Observable<Lote[]> {
    return this.http.get<LoteResponse>(this.apiUrl).pipe(
      map(response => response.data.data || [])
    );
  }
}