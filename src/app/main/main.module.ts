import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { MainRoutingModule } from "./main.routing.module";
import { ReuseModule } from "../reuse/reuse.module";
import { SearchComponent } from './search/search.component';


@NgModule({
    imports: [
    CommonModule,
    MainRoutingModule,
    ReuseModule
],
    declarations: [HomeComponent, SearchComponent]
})
export class MainModule {}