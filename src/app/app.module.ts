import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { DesignationListComponent } from './designation-list/designation-list.component';
import { UserListComponent } from './user-list/user-list.component';
import {DesignationService} from "./services/designation.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { DesignationEditComponent } from './designation-edit/designation-edit.component';
import {DesignationShareService} from "./services/datashareservice/designationshareservice";
import { AddDesignationComponent } from './add-designation/add-designation.component';
import {UserShareService} from "./services/datashareservice/usershareservice";
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { SampleComponentComponent } from './sanitized/sample-component/sample-component.component';



@NgModule({
  declarations: [
    AppComponent,
    DesignationListComponent,
    UserListComponent,
    DesignationEditComponent,
    AddDesignationComponent,
    AddUserComponent,
    EditUserComponent,
    SampleComponentComponent,


  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [DesignationService, DesignationShareService, UserShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
