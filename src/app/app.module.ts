import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { JefeComponent } from './jefe/jefe.component';
import { EmpleadoComponent } from './empleado/empleado.component';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    JefeComponent,
    EmpleadoComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    ReactiveFormsModule, //Forms
    MatButtonModule,
    
    MatFormFieldModule, //Forms
    MatInputModule,

    MatDividerModule,
    MatListModule,

    FormsModule //ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
