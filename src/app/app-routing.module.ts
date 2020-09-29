import { AdminGuard } from './shared/guard/admin.guard';
import { AuthGuard } from './shared/guard/auth.guard';
import { InterviewAdminComponent } from './interview-admin/interview-admin.component';
import { InterviewLoginComponent } from './interview-login/interview-login.component';
import { InterviewSharedComponent } from './interview-shared/interview-shared.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: InterviewLoginComponent },
  { path: 'shared', component: InterviewSharedComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: InterviewAdminComponent, canLoad: [AuthGuard, AdminGuard], canActivate: [AuthGuard, AdminGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
