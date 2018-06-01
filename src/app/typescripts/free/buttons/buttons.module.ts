import { NgModule, ModuleWithProviders } from '@angular/core';

import { ButtonCheckboxDirective } from './checkbox.directive';
import { ButtonRadioDirective } from './radio.directive';

@NgModule({
  declarations: [ButtonCheckboxDirective, ButtonRadioDirective],
  exports: [ButtonCheckboxDirective, ButtonRadioDirective]
})
export class ButtonsModule {
  public static forRoot(): ModuleWithProviders {
    return {ngModule: ButtonsModule, providers: []};
  }
}
