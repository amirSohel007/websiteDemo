import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { aboutComponent } from './about/about.component';
import { blogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { homeComponent } from './home/home.component';

import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';

declare var sideJs: any;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    aboutComponent,
    blogComponent,
    homeComponent,
    ContactComponent

    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([

        {path:'', component:homeComponent},
        {path:'about', component:aboutComponent},
        {path:'contact', component:ContactComponent},
        {path:'blog', component:blogComponent}

    ])
  ],
  providers: [],

  

  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(){
    sideJs.init();
  }

 }
