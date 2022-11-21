import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './countries.component';
import { CountryComponent } from './country/country.component';

const buttonRoutes: Routes = [
  {
    path: 'list',
    component: CountriesComponent,
    data: {},
  },
  { path: ':id', component: CountryComponent, data: {} },
];

@NgModule({
  imports: [RouterModule.forChild(buttonRoutes)],
  exports: [RouterModule],
})
export class CountriesRoutingModule {}
