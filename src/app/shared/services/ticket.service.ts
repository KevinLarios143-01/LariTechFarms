import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Ticket, TicketResponse, CreateTicketRequest, UpdateTicketRequest, UpdateEstadoTicketDTO, TicketsStats } from '../interfaces/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private readonly apiUrl = `${environment.apiUrl}/v1`;

  constructor(private readonly http: HttpClient) {}

  getTickets(params?: {
    page?: number;
    limit?: number;
    idVenta?: number;
    estado?: string;
    fechaInicio?: string;
    fechaFin?: string;
  }): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        const value = params[key as keyof typeof params];
        if (value !== undefined && value !== null) {
          httpParams = httpParams.set(key, value.toString());
        }
      });
    }
    return this.http.get<any>(`${this.apiUrl}/tickets`, { params: httpParams });
  }

  getTicketById(id: number): Observable<{data: Ticket}> {
    return this.http.get<{data: Ticket}>(`${this.apiUrl}/tickets/${id}`);
  }

  createTicket(ticket: CreateTicketRequest): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/tickets`, ticket);
  }

  updateTicket(id: number, ticket: UpdateTicketRequest): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/tickets/${id}`, ticket);
  }

  updateTicketEstado(id: number, data: UpdateEstadoTicketDTO): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/tickets/${id}/estado`, data);
  }

  deleteTicket(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/tickets/${id}`);
  }

  getTicketsStats(params?: {
    fechaInicio?: string;
    fechaFin?: string;
  }): Observable<{ data: TicketsStats }> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        const value = params[key as keyof typeof params];
        if (value !== undefined && value !== null) {
          httpParams = httpParams.set(key, value.toString());
        }
      });
    }
    return this.http.get<{ data: TicketsStats }>(`${this.apiUrl}/tickets/stats`, { params: httpParams });
  }
}