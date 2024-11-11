import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { WelcomeComponent } from "./welcome/welcome.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

@NgModule({
    imports: [RouterModule.forChild([
        {path: '', component: WelcomeComponent},
        {path: 'sign-in', component: SignInComponent},
        {path: 'sign-up', component: SignUpComponent},
        {path: '**', redirectTo: '/notfound'}
    ])],
    exports: [RouterModule]
})
export class AuthRoutingModule{}