import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../model/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  http = inject(HttpClient);
  apiUrl = 'http://localhost:3000/patient';
  
  constructor() { }

  getAll(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.apiUrl);
  }

  get(id: number): Observable<Patient> {
    return this.http.get<Patient>(`${this.apiUrl}/${id}`);
  }

  create(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.apiUrl, patient);
  }

  update(patient: Patient): Observable<Patient> {
    return this.http.patch<Patient>(`${this.apiUrl}/${patient.TAJ}`, patient);
  }

  delete(id: number): Observable<Patient> {
    return this.http.delete<Patient>(`${this.apiUrl}/${id}`);
  }
}
