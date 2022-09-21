import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonsComponent } from './pipes-component/pages/commons/commons.component';
import { NotCommonsComponent } from './pipes-component/pages/not-commons/not-commons.component';
import { NumbersComponent } from './pipes-component/pages/numbers/numbers.component';
import { OrganizeComponent } from './pipes-component/pages/organize/organize.component';




const routes: Routes = [
  { path: '', component: CommonsComponent, pathMatch: 'full' },
  { path: 'numbers', component: NumbersComponent },
  { path: 'not-commons', component: NotCommonsComponent },
  { path: 'organize', component: OrganizeComponent },
  { path: '**', component: CommonsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
