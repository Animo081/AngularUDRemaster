import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// TODO: libraries should be in the first block and custom code in second.
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from './app-routing.module';

import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './sidebar/login/login.component';
import { RegistrationComponent } from './sidebar/registration/registration.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WelcomeComponent } from './main/weclome/welcome.component';
import { FilesComponent } from './main/files/files.component';
import { UserComponent } from './sidebar/user/user.component';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

import { ReactiveFormsModule } from "@angular/forms";
// TODO: don't put all services in one folder. Create appropriate feature folders.
import { UserService } from "./service/user.service";
import { FileService } from "./service/file.service";

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
     MatTableModule
   ],
   providers: [
     FileService,
     UserService,
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
