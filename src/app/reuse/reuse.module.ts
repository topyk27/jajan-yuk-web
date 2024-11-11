import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CustomButtonComponent } from "./custom-button/custom-button.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [CustomButtonComponent],
    exports: [CustomButtonComponent]
})
export class ReuseModule{}