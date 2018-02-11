import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { PipelineComponent } from './components/pipeline/pipeline.component';
import { ContactsComponent } from './components/contacts/contacts.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'pipeline', component: PipelineComponent },
      { path: 'contacts', component: ContactsComponent }

    ]),
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
