import { pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';


export class CrudService<T> {
  protected readonly apiUrl = `${this.baseUrl}/${this.entityname}`;

  constructor(
    protected readonly http: HttpClient,
    protected readonly entityname: string,
    protected readonly baseUrl: string = environment.API_MAESTROS
  ) {}

  list(query?: { [key: string]: string }): Observable<T[]> {
    const params = new HttpParams({ fromObject: query });
    return this.http.get<T[]>(this.apiUrl, { params }).pipe(pluck('data'));
  }

  get(id: number): Observable<T> {
    const url = this.entityUrl(id);
    return this.http.get<T>(url).pipe(pluck('data'));
  }

  create(body: T): Observable<T> {
    return this.http.post<T>(this.apiUrl, body).pipe(pluck('data'));
  }

  update(id: number, body: T): Observable<T> {
    const url = this.entityUrl(id);
    return this.http.put<T>(url, body).pipe(pluck('data'));
  }

  delete(id: number): Observable<T> {
    const url = this.entityUrl(id);
    return this.http.delete<T>(url).pipe(pluck('data'));
  }

  protected entityUrl(id: number): string {
    return [this.apiUrl, id].join('/');
  }
}
