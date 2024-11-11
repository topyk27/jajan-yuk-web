import { NgModule } from "@angular/core";
import { AppLayoutComponent } from "./app.layout.component";
import { AppBottombarComponent } from "./app.bottombar.component";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [
        AppLayoutComponent,
        AppBottombarComponent
    ],
    imports: [
        BrowserModule,
        RouterModule
    ],
    exports: [AppLayoutComponent]
})
export class AppLayoutModule {}