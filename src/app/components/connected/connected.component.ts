import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'connected',
  templateUrl: './connected.component.html',
  outputs: ['connectedClicked'],
  styleUrls: ['./connected.component.css']
})
export class ConnectedComponent implements OnInit {
  connectedClicked = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.connectedClicked.emit(event);
  }

}
