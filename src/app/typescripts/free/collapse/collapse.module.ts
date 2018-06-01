import { NgModule, ModuleWithProviders } from '@angular/core';
import { CollapseDirective } from './collapse.directive';

@NgModule({
  declarations: [CollapseDirective],
  exports: [CollapseDirective]
})
export class CollapseModule {
  public static forRoot(): ModuleWithProviders {
    return {ngModule: CollapseModule, providers: []};
  }
}
