import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class FeatureModule { }
