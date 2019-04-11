import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

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

  @Input() event: any;
  someProperty : any = "some props";
  constructor() { }

  ngOnInit() {
  }

  logFoo(){
    console.log("Foo");
  }
}
