import { Injectable } from '@angular/core';
import { ISession } from './shared/event.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  constructor(private http: HttpClient) { }

  userHasVoted(session: ISession, voterName: string) {
    return session.voters.some(voter => voter === voterName);
  }
  
  addVoter(eventId: number, session: ISession, voterName: string) {

    let options = { headers: new HttpHeaders({'Content-Type': '/application/json'})};
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
    
    this.http.post(url, {}, options)
    .pipe(catchError(this.handleError('addVoter')))
    .subscribe();

    // session.voters.push(voterName)
  }
  
  deleteVoter(eventId: number, session: ISession, voterName: string) {
    
    let options = { headers: new HttpHeaders({'Content-Type': '/application/json'})};
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;

    this.http.delete(url, options)
    .pipe(catchError(this.handleError('deleteVoter')))
    .subscribe();

    // session.voters = session.voters.filter(voter => voter !== voterName)
  }

   //This function below can be used as template for handling error
   private handleError<T>(operation ='operation', result? : T){
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

}
