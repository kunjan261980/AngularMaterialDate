import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MAT_DATE_FORMATS, MatNativeDateModule } from '@angular/material/core';
import { FeatureAngularMatDateRoutingModule } from './feature-angular-mat-date-routing.module';
import { FeatureAngularMatDateComponent } from './feature-angular-mat-date.component';
import { MatDateFormats } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const MY_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: 'MM/DD/YY',
  },
  display: {
    dateInput: 'MM/DD/YY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM D',
  },
};


@NgModule({
  declarations: [
    FeatureAngularMatDateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FeatureAngularMatDateRoutingModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers:[{ provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }]
})
export class FeatureAngularMatDateModule { }


