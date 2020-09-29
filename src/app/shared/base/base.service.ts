import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class BaseService {

    constructor() { }
    /**
     * @description - Handles http reponse when applicable
     * @param { Response | any} error
     * @returns Throws an error
     */
    public handleError(error: Response | any) {
        let errMsg: string;
        if (!(error._body instanceof ProgressEvent)) {
            const body = error || '';
            errMsg = body;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        return throwError(errMsg);
    }

    /**
     * @description Handles exract data from call when applicable
     * @param {any} response - Call response
     * @returns {any} response from call
     */
    public extractData(response: any): any {
        const body = response;
        return body;
    }
}
