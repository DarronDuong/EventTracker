import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { userRoutes} from './user.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forChild(userRoutes)
    ],
    declarations: [
      ProfileComponent,
      LoginComponent
    ],
    providers: [

    ]
})

export class UserModule{}