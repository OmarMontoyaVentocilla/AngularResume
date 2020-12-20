import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICourse } from './course';
import { catchError } from 'rxjs/operators';
import { throwError  as observableThrowError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  url:string = "https://jsonplaceholder.typicode.com/comments/";
  constructor(private http: HttpClient) { }

  getCourses(): Observable<ICourse[]>{
   return this.http
            .get<ICourse[]>(this.url)
            .pipe(catchError(this.errorHandler))
  }
  errorHandler(error:HttpErrorResponse){
    
    return observableThrowError(error.message);
  }
}
