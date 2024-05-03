import { Component, inject, signal } from '@angular/core';
import { PatientService } from '../../service/patient.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Patient } from '../../model/patient';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [
    AsyncPipe, CommonModule, RouterModule
  ],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent {
[x: string]: any;
  patientService = inject(PatientService);

  list$ = this.patientService.getAll();

  filterText = signal<string>('');

  onRemove(patient: Patient): void {
    if (confirm(`Are you sure you want to delete ${patient.Full_name}?`)) {
      this.patientService.delete(patient.TAJ).subscribe(() => {
        this.list$ = this.patientService.getAll();
      });
    }
  }
}
