import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumbersComponent } from './pages/numbers/numbers.component';
import { NotCommonsComponent } from './pages/not-commons/not-commons.component';
import { CommonsComponent } from './pages/commons/commons.component';
import { OrganizeComponent } from './pages/organize/organize.component';



@NgModule({
  declarations: [
    NumbersComponent,
    NotCommonsComponent,
    CommonsComponent,
    OrganizeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NumbersComponent,
    NotCommonsComponent,
    CommonsComponent,
    OrganizeComponent
  ]
})
export class PipesComponentModule { }
