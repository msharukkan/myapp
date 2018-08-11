import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { HeaderMenuModule } from './components/header-menu/header-menu.module';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { LeftMenuModule } from './components/left-menu/left-menu.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    LeftMenuComponent
  ],
  imports: [
    BrowserModule,
    HeaderMenuModule,
    LeftMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
