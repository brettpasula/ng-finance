import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Admin } from 'src/interfaces/admin';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private _httpClient: HttpClient;
  private _baseUrl: string = environment.apiUrl;

  constructor() {
    this._httpClient = inject(HttpClient);
  }

  getAdmin(): Observable<Admin> {
    return this._httpClient.get<Admin>(this._baseUrl + 'admin');
  }

  putAdmin(admin: Admin): Observable<Admin> { 
    return this._httpClient.put<Admin>(
        this._baseUrl + 'admin/',
        admin
    )
  }
}
