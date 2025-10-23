import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ComplianceApiService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  checkHealth(): Observable<any> {
    return this.http.get(`${this.baseUrl}/health`);
  }

  uploadFile(file: File): Observable<HttpEvent<any>> {
    const formData = new FormData();
    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.baseUrl}/api/upload`, formData, {
      reportProgress: true, 
      responseType: 'json'
    });

    return this.http.request(req);
  }

  analyzeFile(file: File): Observable<HttpEvent<any>> {
    const formData = new FormData();
    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.baseUrl}/api/analyze`, formData, {
      reportProgress: true, 
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getRequirements(): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/requirements`);
  }

  getSupportedFormats(): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/supported-formats`);
  }
}
