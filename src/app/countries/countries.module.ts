import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountriesComponent } from './countries.component';
import { CountriesRoutingModule } from './countries-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CountriesRoutingModule,
  ],
})
export class CountriesModule {}
