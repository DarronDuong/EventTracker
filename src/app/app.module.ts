import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './errors/error404/error404.component';
import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';
import { EventListResolver } from './events/event-list-resolver.service';
import { ProfileComponent } from './user/profile/profile.component';
import { AuthService } from './user/auth.service';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService, 
    ToastrService, 
    EventRouteActivatorService,
    {
      provide: 'canDeactivateCreateEvent', 
      useValue: checkDirtyState
    },
    EventListResolver,
    AuthService
    ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }


export function checkDirtyState(component: CreateEventComponent){
  if (component.isDirty)
    return window.confirm("You havent saved this event, do you want to cancel ?")
  return true;
}