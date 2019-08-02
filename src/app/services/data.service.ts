import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BasicInformation } from '../models';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor() { }

    public getBasicInformation(): Observable<BasicInformation> {
        console.debug('Get Basic Information was called!');
        return of({
            brokerName: 'Apogee',
            address: 'Wayne, Pennsylvania, 34567'
        } as BasicInformation) ;
    }
}