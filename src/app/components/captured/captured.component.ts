import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'captured',
  templateUrl: './captured.component.html',
  outputs: ['captureClicked'],
  styleUrls: ['./captured.component.css']
})
export class CapturedComponent implements OnInit {
  captureClicked = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.captureClicked.emit(event)
  }

}
