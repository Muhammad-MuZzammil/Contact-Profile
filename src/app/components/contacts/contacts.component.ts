import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  // Navigation state ENUMs
  NAVIGATION_STATE = {
    ALL_CONTACTS: "ALL_CONTACTS",
    CAPTURED: "CAPTURED",
    CONNECTED: "CONNECTED"
  }
  // Selected Navigation state
  selectedNavigationState;
  constructor() { }

  ngOnInit() {
    this.selectedNavigationState = this.NAVIGATION_STATE.ALL_CONTACTS;
  }

  selectNavigationState(state) {
    this.selectedNavigationState = state;
    console.log('saad', this.selectedNavigationState)

  }
  catchContact(event) {
    console.log('saad', event)
  }
  catchCaptured(event) {
    console.log('demonz', event)
  }
  catchConnected(event) {
    console.log('Muzz', event)

  }
}
