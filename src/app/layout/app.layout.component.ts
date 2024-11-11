import { Component, OnDestroy, ViewChild } from "@angular/core";
import { AppBottombarComponent } from "./app.bottombar.component";

@Component({
    selector: 'app-layout',
    templateUrl: './app.layout.component.html',
})
export class AppLayoutComponent {
    @ViewChild(AppBottombarComponent) appBottombar!: AppBottombarComponent;
}