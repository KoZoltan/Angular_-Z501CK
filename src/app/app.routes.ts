import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        loadComponent: () => import('./page/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'patient',
        loadComponent: () => import('./page/patient/patient.component').then(m => m.PatientComponent)
    },
    {
        path: 'patient/edit/:TAJ',
        loadComponent: () => import('./page/patient-editor/patient-editor.component').then(m => m.PatientEditorComponent)
    },
{
    path: 'visit',
        loadComponent: () => import('./page/visit/visit.component').then(m => m.VisitComponent)
    },

    {
        path: '**',
        loadComponent: () => import('./page/home/home.component').then(m => m.HomeComponent)
    }

];
