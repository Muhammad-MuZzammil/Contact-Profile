
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AllContactsComponent } from '../all-contacts/all-contacts.component';
import { ConnectedComponent } from '../connected/connected.component';
import { CapturedComponent } from '../captured/captured.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'contacts/allContacts', component: AllContactsComponent },
      { path: 'captured', component: CapturedComponent },
      { path: 'connected', component: ConnectedComponent }
    ])

  ],
  declarations: [
    
  ],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
