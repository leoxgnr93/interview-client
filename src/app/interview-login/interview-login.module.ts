import { UserService } from './../user/user.service';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [UserService]
})
export class InterviewLoginModule { }
