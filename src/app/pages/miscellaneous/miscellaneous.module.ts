import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { MiscellaneousRoutingModule, routedComponents } from './miscellaneous-routing.module';
import { SubCompComponent } from './submodInitR/sub-comp.component';

@NgModule({
  imports: [
    ThemeModule,
    MiscellaneousRoutingModule,
  ],
  declarations: [
    ...routedComponents,
    SubCompComponent,
  ],
})
export class MiscellaneousModule { }
