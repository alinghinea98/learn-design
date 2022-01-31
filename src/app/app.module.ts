import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DatenupdateComponent } from './modules/datenupdate/datenupdate.component';
import { TopBarComponent } from './modules/shared/top-bar/top-bar.component';
import { BaseComponent } from './modules/base-component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { WorkflowBarComponent } from './modules/shared/workflow-bar/workflow-bar.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    DatenupdateComponent,
    TopBarComponent,
    BaseComponent,
    WorkflowBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
