import { AccountService } from './account/account.service';
import { UserService } from './user/user.service';
import { MaterialModule } from './shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InterviewLoginModule } from './interview-login/interview-login.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InterviewLoginComponent } from './interview-login/interview-login.component';
import { InterviewAdminComponent } from './interview-admin/interview-admin.component';
import { InterviewSharedComponent } from './interview-shared/interview-shared.component';
import { InterviewHeaderComponent } from './interview-header/interview-header.component';
import { InterviewAssignAccountComponent } from './interview-assign-account/interview-assign-account.component';

@NgModule({
  declarations: [
    AppComponent,
    InterviewLoginComponent,
    InterviewAdminComponent,
    InterviewSharedComponent,
    InterviewHeaderComponent,
    InterviewAssignAccountComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    InterviewLoginModule
  ],
  providers: [UserService, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
