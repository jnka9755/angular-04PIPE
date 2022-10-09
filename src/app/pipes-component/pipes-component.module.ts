import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumbersComponent } from './pages/numbers/numbers.component';
import { NotCommonsComponent } from './pages/not-commons/not-commons.component';
import { CommonsComponent } from './pages/commons/commons.component';
import { OrganizeComponent } from './pages/organize/organize.component';

import { UppercasePipe } from './pipes/uppercase.pipe';
import { FlyPipe } from './pipes/fly.pipe';
import { SortPipe } from './pipes/sort.pipe';




@NgModule({
  declarations: [
    NumbersComponent,
    NotCommonsComponent,
    CommonsComponent,
    OrganizeComponent,
    UppercasePipe,
    FlyPipe,
    SortPipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    NumbersComponent,
    NotCommonsComponent,
    CommonsComponent,
    OrganizeComponent
  ]
})
export class PipesComponentModule { }
