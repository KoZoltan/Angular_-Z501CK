import { Component } from '@angular/core';
import { PatientService} from '../../service/patient.service';
import { Patient } from '../../model/patient';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-visit',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="patientForm" (ngSubmit)="addPatient()">
      <input type="text" formControlName="id" placeholder="Patient ID" required>
      <input type="text" formControlName="insuranceNumber" placeholder="Insurance Number" required>
      <input type="text" formControlName="fullName" placeholder="Full Name" required>
      <input type="date" formControlName="dateOfBirth" placeholder="Date of Birth" required>
      <!-- Add inputs for previous visits similarly -->
      <button type="submit">Add Patient</button>
    </form>
  `
  
})
export class VisitComponent {
  patientForm = new FormGroup({
    id: new FormControl(''),
    insuranceNumber: new FormControl(''),
    fullName: new FormControl(''),
    dateOfBirth: new FormControl(''),
    // Initialize previousVisits as an empty array or with existing visit data
    previousVisits: new FormControl([])
  });

  constructor(private patientService: PatientService) {}

  addPatient() {
    if (this.patientForm.valid) {
      this.patientService.create(this.patientForm.value).subscribe({
        next: (patient) => {
          console.log('Patient added:', patient);
          // Reset the form or handle the response as needed
        },
      error: (error) => {
        console.error('Error adding patient:', error);
      }
    });
}
  }
