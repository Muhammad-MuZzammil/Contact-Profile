import { AllContactsModule } from './../all-contacts/all-contacts.module';
import { ConnectedComponent } from '../connected/connected.component';
import { CapturedComponent } from '../captured/captured.component';
import { AllContactsComponent } from '../all-contacts/all-contacts.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { ContactsRoutingModule } from './contacts-routing.module';


// MAterial Design Module
import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatInputModule,
  MatTableModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatListModule,
  MatIconModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [ContactsComponent, AllContactsComponent, CapturedComponent, ConnectedComponent

  ],
  imports: [CommonModule,
    ContactsRoutingModule,
    AllContactsModule,
    MatButtonModule, MatCheckboxModule, MatCardModule, MatGridListModule,
    MatInputModule, MatDatepickerModule, MatNativeDateModule, MatToolbarModule,
    MatProgressSpinnerModule, MatTabsModule, MatListModule, MatIconModule, MatTableModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],

  exports: [RouterModule]

})
export class ContactsModule { }
