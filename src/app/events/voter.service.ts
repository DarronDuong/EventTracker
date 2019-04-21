import { Injectable } from '@angular/core';
import { ISession } from './shared/event.model';

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  constructor() { }

  userHasVoted(session: ISession, voterName: string) {
    return session.voters.some(voter => voter === voterName);
  }
  addVoter(session: ISession, voterName: string) {
    session.voters.push(voterName)
  }
  deleteVote(session: ISession, voterName: string) {
    session.voters = session.voters.filter(voter => voter !== voterName)
  }



}
