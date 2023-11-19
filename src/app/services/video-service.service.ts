import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import IVideo from '../interfaces/video';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideoServiceService {
  private backendUrl = `${environment.apiUrl}video`
  constructor(private http: HttpClient) { }

  /**
   * GET Videos from the server
   *
   * @param limit - max number of results to be returned
   * @param offset - The number of items to skip in the result set (limit - 1) * offset
   * */
  getVideoList(limit: number, offset: number): Observable<IVideo[]>{
    return this.http.get<IVideo[]>(`${this.backendUrl}?limit=${limit}&offset=${offset}`).pipe(
      tap(_ => console.log('fetched Videos')),
      catchError(this.handleError<IVideo[]>('getVideo', []))
    );
  }

  /**
   * GET hero by id. Will 404 if id not found
   *
   * @param - id of the wanted video
   * */
  getVideo(id: number): Observable<IVideo> {
    const url = `${this.backendUrl}${id}`;
    return this.http.get<IVideo>(url).pipe(
      tap(_ => console.log(`fetched video id=${id}`)),
      catchError(this.handleError<IVideo>(`getVideo id=${id}`))
    );
  }
    /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    return  (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
