export class Patient {
    //generate properties of patient

    TAJ: number = 481262149;
    Full_name: string = 'Logan Honsch';
    dateOfBirth: Date =new Date();
    Koortartetnet:Array<{}> = new Array<{}>();

    //{"TAJ":481262149,"Full name":"Logan Honsch","Born date":"7/13/2023","Kórtörténet":[{},{},{},{}]},
}
dateOfBirth: new Date('2023-07-13')