import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Ticket, TicketResponse, CreateTicketRequest, UpdateTicketRequest } from '../interfaces/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private readonly apiUrl = `${environment.apiUrl}/v1`;

  constructor(private readonly http: HttpClient) {}

  getTickets(): Observable<Ticket[]> {
    return this.http.get<TicketResponse>(`${this.apiUrl}/tickets`).pipe(
      map(response => response.data || [])
    );
  }

  getTicketById(id: number): Observable<{data: Ticket}> {
    return this.http.get<{data: Ticket}>(`${this.apiUrl}/tickets/${id}`);
  }

  createTicket(ticket: CreateTicketRequest): Observable<Ticket> {
    return this.http.post<Ticket>(`${this.apiUrl}/tickets`, ticket);
  }

  updateTicket(id: number, ticket: UpdateTicketRequest): Observable<Ticket> {
    return this.http.put<Ticket>(`${this.apiUrl}/tickets/${id}`, ticket);
  }

  deleteTicket(id: number): Observable<boolean> {
    return this.http.delete<any>(`${this.apiUrl}/tickets/${id}`).pipe(
      map(() => true)
    );
  }
}