import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SearchComponent } from "./search/search.component";


@NgModule({
    imports: [RouterModule.forChild([
        {path: '', component: HomeComponent},
        {path: 'search/:query', component: SearchComponent}
    ])],
    exports: [RouterModule]
})
export class MainRoutingModule{}