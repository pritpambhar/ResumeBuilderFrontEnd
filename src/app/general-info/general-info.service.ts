import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';



@Injectable({
    providedIn: 'root'
})
export class GeneralInfoService {
    createUserUrl = "";
    // assignDepartmentUrl = environment.apiUrl + '/admin/set-departments-for-miniadmin';
    // // departmentListUrl = environment.apiUrl + '/admin/get-department-list-for-dropdown';
    // departmentListUrl = environment.apiUrl + '/management/list-department';
    constructor(private http: HttpClient) {}

    createUser(addData) {
        console.log('Token:', localStorage.getItem('auth_token'));
        console.log('Token sessionStorage:', sessionStorage.getItem('auth_token'));
        const headers = {
            token: localStorage.getItem('auth_token') || sessionStorage.getItem('auth_token')
            // 'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
            // 'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
            // 'Access-Control-Allow-Credentials': 'true',
            // 'Accept': 'application/json, text/plain, */*'
        };
        const option = { headers };
        console.log(option);
        return this.http.post(this.createUserUrl, addData, option).pipe(catchError(error => this.handleError(error)));
    }
   
    handleError(error: HttpErrorResponse) {
        return throwError(
            // this.toastr.error(error.error.error)
            error
        );
    }
}
