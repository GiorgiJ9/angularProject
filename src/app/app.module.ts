import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './user-list/user-list.component';
import { ZoommerHeaderComponent } from './zoommer-header/zoommer-header.component';
import { ZoommerSideBarComponent } from './zoommer-side-bar/zoommer-side-bar.component';
import { UserDetailsComponent } from './user-list/user-details/user-details.component';
import { SideBarDetailsComponent } from './zoommer-side-bar/side-bar-details/side-bar-details.component';
import { ForCarsComponent } from './for-cars/for-cars.component';
import { ForCarsDetailsComponent } from './for-cars/for-cars-details/for-cars-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    UserListComponent,
    ZoommerHeaderComponent,
    ZoommerSideBarComponent,
    UserDetailsComponent,
    SideBarDetailsComponent,
    ForCarsComponent,
    ForCarsDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
