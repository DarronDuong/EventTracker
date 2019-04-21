import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {

  @Output() vote = new EventEmitter();
  @Input() count: number;
  @Input() set voted(val){
    this.iconColor = val? 'red' : 'white';
  } 
  public iconColor: string;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.vote.emit({});
  }
}
