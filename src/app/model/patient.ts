import { visit } from "./visit/visit";

export class Patient {
    //generate properties of patient

    id: number = 1;
    TAJ: number = 481262149;
    Full_name: string = 'Logan Honsch';
    dateOfBirth: Date = new Date('2020-01-01'); 
    Koortartetnet: visit[] = [
        {dateOfVisit: new Date('2020-01-01'), medicine: 'paracetamol', prognosis: 'fever'}
    ];

}
