import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'featureAngularMatDate', loadChildren: () => import('./feature-angular-mat-date/feature-angular-mat-date.module').then(m => m.FeatureAngularMatDateModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
