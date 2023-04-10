import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignationListComponent } from './designation-list/designation-list.component';
import { UserListComponent } from './user-list/user-list.component';
import {DesignationEditComponent} from "./designation-edit/designation-edit.component";
import {AddDesignationComponent} from "./add-designation/add-designation.component";
import {AddUserComponent} from "./add-user/add-user.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import {SampleComponentComponent} from "./sanitized/sample-component/sample-component.component";

const routes: Routes = [
  { path: '', redirectTo: '/designation', pathMatch: 'full' },
  { path: 'designation', component: DesignationListComponent },
  { path: 'editdesignation', component: DesignationEditComponent },
  { path: 'adddesignation', component: AddDesignationComponent },
  { path: 'user', component: UserListComponent },
  { path: 'adduser', component: AddUserComponent },
  { path: 'edituser', component: EditUserComponent },
  { path: 'sanitized', component: SampleComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
