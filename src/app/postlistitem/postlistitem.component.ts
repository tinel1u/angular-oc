import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-postlistitem',
  templateUrl: './postlistitem.component.html',
  styleUrls: ['./postlistitem.component.css']
})
export class PostlistitemComponent implements OnInit {

  @Input() title;
  @Input() content;
  @Input() loveIts;
  unlike;
  date = new Date();

  constructor() { }

  ngOnInit() {
    this.unlike = 0;
  }

  addLike() {
    this.loveIts++;
  }

  addUnlike() {
    this.unlike++;
  }
}
