import { NgModule, OnInit } from '@angular/core';
import { Routes, Router, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './sidebar/login/login.component';
import { RegistrationComponent } from './sidebar/registration/registration.component';
import { MainComponent } from './main/main.component';
import { WelcomeComponent } from "./main/weclome/welcome.component";
import {FilesComponent} from "./main/files/files.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {UserComponent} from "./sidebar/user/user.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'/main/welcome(sidebar:/sidebar/login)'},
  { path: 'main', component: MainComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'welcome'},
      { path: 'welcome', component: WelcomeComponent},
      { path: 'files', component: FilesComponent}
    ]},
  { path: 'sidebar', component: SidebarComponent, outlet: 'sidebar',
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegistrationComponent },
      { path: 'user', component: UserComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routing = RouterModule.forRoot(routes);
