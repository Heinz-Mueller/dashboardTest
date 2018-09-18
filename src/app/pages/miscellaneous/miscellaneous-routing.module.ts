import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiscellaneousComponent } from './miscellaneous.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MyTestComponent} from './my-test/my-test.component';
import { SubCompComponent } from './submodInitR/sub-comp.component';


const routes: Routes = [{
  path: '',
  component: MiscellaneousComponent,
  children: [{
    path: '404',
    component: NotFoundComponent,
  }, {
    path: 'my-test',
    component: MyTestComponent,
  },
  {
    path: 'submodInitR',
    component: SubCompComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiscellaneousRoutingModule { }

export const routedComponents = [
  MiscellaneousComponent,
  NotFoundComponent,
  MyTestComponent,
  SubCompComponent,
];
