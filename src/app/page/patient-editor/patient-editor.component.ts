import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, Input, inject, numberAttribute } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { PatientService } from '../../service/patient.service';
import { Observable, of } from 'rxjs';
import { Patient } from '../../model/patient';

@Component({
  selector: 'app-patient-editor',
  standalone: true,
  imports: [CommonModule, RouterLink, AsyncPipe, FormsModule],
  templateUrl: './patient-editor.component.html',
  styleUrl: './patient-editor.component.css'
})
export class PatientEditorComponent {

  @Input({required: true, transform: numberAttribute}) TAJ: number = 0;

  patientService = inject(PatientService);
  router = inject(Router);

  patient$: Observable<Patient> = of(new Patient());

  ngOnInit(): void {
    if (this.TAJ) {
      this.patient$ = this.patientService.get(this.TAJ);
      }
    }


    onUpdate(patient: Patient): void {
      if(this.TAJ) {
        this.patientService.update(patient).subscribe(() => {
          this.router.navigate(['/patient']);
        });
      }
  
    }


    






  }



