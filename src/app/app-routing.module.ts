import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeftMenuModule } from './components/left-menu/left-menu.module';

const routes: Routes = [{
  path:'/post',
  component: LeftMenuModule
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
