import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';

const routes: Routes = [
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'welcome', loadChildren: ()=> import('./auth/auth.module').then(m=>m.AuthModule)},
  {path: 'main', component: AppLayoutComponent, children: [
    {path: '', loadChildren:() => import('./main/main.module').then(m=> m.MainModule)}
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
