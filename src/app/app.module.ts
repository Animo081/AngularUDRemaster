import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { LayoutModule } from '@angular/cdk/layout';

import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { routing } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { WelcomeComponent } from './main/weclome/welcome.component';
import { FilesComponent } from './main/files/files.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './sidebar/login/login.component';
import { RegistrationComponent } from './sidebar/registration/registration.component';
import { UserComponent } from './sidebar/user/user.component';

import { AuthenticationService } from "./service/user/authentication.service";
import { TokenInterceptor } from "./service/user/token.interceptor";
import { FileService } from "./service/file/file.service";

@NgModule({
   declarations: [
     AppComponent,
     SidebarComponent,
     LoginComponent,
     RegistrationComponent,
     MainComponent,
     WelcomeComponent,
     FilesComponent,
     UserComponent
   ],
   imports: [
     BrowserModule,
     AppRoutingModule,
     HttpClientModule,
     FormsModule,
     BrowserAnimationsModule,
     MatSidenavModule,
     MatIconModule,
     MatFormFieldModule,
     MatInputModule,
     MatListModule,
     LayoutModule,
     MatToolbarModule,
     MatButtonModule,
     routing,
     MatCardModule,
     ReactiveFormsModule,
     MatPaginatorModule,
     MatTableModule
   ],
   exports: [
     MatSidenavModule,
     MatIconModule,
     MatFormFieldModule,
     MatInputModule,
     MatListModule,
     MatToolbarModule,
     MatCardModule,
     ReactiveFormsModule,
     MatPaginatorModule,
     MatTableModule,
     MatSnackBarModule
   ],
   providers: [
     FileService,
     AuthenticationService,
     {
       provide: HTTP_INTERCEPTORS,
       useClass: TokenInterceptor,
       multi: true
     },
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
