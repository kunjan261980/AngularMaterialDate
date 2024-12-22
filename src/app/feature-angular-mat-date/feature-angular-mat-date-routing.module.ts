import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureAngularMatDateComponent } from './feature-angular-mat-date.component';

const routes: Routes = [{ path: '', component: FeatureAngularMatDateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureAngularMatDateRoutingModule { }
