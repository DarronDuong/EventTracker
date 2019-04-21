import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '../shared/event.model';

@Component({
  // selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event : IEvent;
  addMode: boolean;
  filterBy: string = 'all';
  sortBy: string = 'votes';
  
  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) =>{
      
      //1st this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);

      //2nd this.event = this.eventService.getEvent(+params['id']);
      // this.addMode = false;
      
      //3rd
      this.event = this.route.snapshot.data['event'];
      this.addMode = false;       
    })
  }

  addSession(){
    this.addMode = true;
  }

  addNewSession(session: ISession)
  {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.saveEvent(event).subscribe();
    this.addMode = false;
  }

  cancelAddSession(){
    this.addMode = false;
  }
}
