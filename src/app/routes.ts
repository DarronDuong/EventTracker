// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { Routes } from '@angular/router';

// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
export const appRoutes: Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventDetailsComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full'}
]
