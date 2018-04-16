import { Component, EventEmitter, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Element, ELEMENT_DATA } from './element';

@Component({
  selector: 'allContacts',
  templateUrl: './all-contacts.component.html',
  outputs: ['contactsClicked'],
  styleUrls: ['./all-contacts.component.css']
})
export class AllContactsComponent implements OnInit {
  contactsClicked = new EventEmitter();
  constructor() {

  }


  ngOnInit() {

    this.contactsClicked.emit(event);
  }
  displayedColumns = ['checkbox', 'phone', 'email', 'groups'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  selection = new SelectionModel<Element>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
}
