import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { DtcListComponent } from './dtc-list/dtc-list.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'status', component: StatusComponent },
  { path: 'dtc/:ecu_id', component: DtcListComponent },
  { path: 'dtc', component: DtcListComponent }
  // { path: 'live-data', component: LiveDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
