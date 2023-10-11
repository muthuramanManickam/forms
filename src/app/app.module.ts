import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CwcComponent } from './cwc/cwc.component';
import { CwcDetailsComponent } from './cwc-details/cwc-details.component';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './forms/form/form.component';
import { ParchiComponent } from './parchi/parchi.component'
@NgModule({
  declarations: [
    AppComponent,
    CwcComponent,
    CwcDetailsComponent,
    FormComponent,
    ParchiComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    CommonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
