import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggerComponent } from './component/logger.component';

const routes: Routes = [{ path: '', component: LoggerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggerRoutingModule { }
