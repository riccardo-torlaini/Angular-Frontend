import {Injectable} from '@angular/core';
import {WebRequestService} from "../web-request.service";
import {HttpResponse} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {of} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PartnersService {

    constructor(private webRequestService: WebRequestService) {
    }

    /**
     * Function for retrieving all company opportunities from backend.
     */
    getAllCompanyOpportunities() {
        return this.webRequestService.get("api/partners/internships").pipe(
            map((res: HttpResponse<any>) => {
                return res.body;
            }),
            catchError(err => {
                console.error('PartnersService.getAllInternships: Error when getting all internships.');
                console.error(err);
                return of([]);
            })
        );
    }

    /**
     * Function for retrieving a single company opportunity from the backend.
     * @param id    The id of the company opportunity to retrieve.
     */
    getCompanyOpportunity(id) {
        return this.webRequestService.get("api/partners/internships/" + id).pipe(
            map((res: HttpResponse<any>) => {
                return res.body;
            }),
            catchError(err => {
                console.error('PartnersService.getInternship: Error when getting internship with id ' + id);
                console.error(err);
                return of({});
            })
        );
    }

    /**
     * Function for submitting a company opportunity for creation in the backend.
     * @param companyOpportunity    Object representing the company opportunity to be created.
     */
    createCompanyOpportunity(companyOpportunity) {
        return this.webRequestService.post("api/partners/internships", companyOpportunity).pipe(
            map((res: HttpResponse<any>) => {
                return res.body;
            }),
            catchError(err => {
                console.error('PartnersService.createInternship: Error when creating companyOpportunity');
                console.error(err);
                return of({});
            })
        );
    }

    /**
     * Function for submitting an company opportunity to be edited in the backend.
     * @param companyOpportunity    Object representing the (edited) company opportunity.
     */
    editCompanyOpportunity(companyOpportunity) {
        return this.webRequestService.put("api/partners/internships/" + companyOpportunity.id, companyOpportunity).pipe(
            map((res: HttpResponse<any>) => {
                return res.body;
            }),
            catchError(err => {
                console.error('PartnersService.editInternship: Error when editing companyOpportunity with id '
                    + companyOpportunity.id);
                console.error(err);
                return of({});
            })
        );
    }

    /**
     * Function for deleting a company opportunity in the backend.
     * @param id    Id of the company opportunity to be deleted.
     */
    deleteCompanyOpportunity(id) {
        return this.webRequestService.delete("api/partners/internships/" + id).pipe(
            map((res: HttpResponse<any>) => {
                return res.body;
            }),
            catchError(err => {
                console.error('PartnersService.deleteInternship: Error when deleting internship with id ' + id);
                console.error(err);
                return of({});
            })
        );
    }
}
