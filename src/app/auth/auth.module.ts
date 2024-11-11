import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AuthRoutingModule } from "./auth-routing.module";
import { WelcomeComponent } from "./welcome/welcome.component";
import { ReuseModule } from "../reuse/reuse.module";
import { SignInComponent } from './sign-in/sign-in.component';
import { ReactiveFormsModule } from "@angular/forms";
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
        ReuseModule,
        ReactiveFormsModule
    ],
    declarations: [WelcomeComponent, SignInComponent, SignUpComponent]
})
export class AuthModule{}