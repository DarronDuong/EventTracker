import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { IEvent } from './shared/event.model';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styles: [`
    .thumbnail { min-height : 210px; }
    .pad-left { margin-left: 10px }
    .well div { color: #bbb; }
  `]
})
export class EventThumbnailComponent implements OnInit {

  @Input() event: IEvent;
  someProperty : any = "some props";
  constructor() { }

  ngOnInit() {
  }
}
